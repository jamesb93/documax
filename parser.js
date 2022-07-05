
const toml = require('toml');
const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const Mustache = require('mustache');
const { program } = require('commander');

program.option('-o');
program.option('-e');
program.parse()
const options = program.opts();
const dir = options.o ? program.args[0] : 'output';
const cce = options.e ? program.args[0] : 'max';
const extensions = new Map([
    ['max', '.maxref.xml'],
    ['pd', '.html']
])
const sanitise = (data) => {
    // Messages
    let copy = data;
    let messages = []
    if (data.messages) {
        for (const [k, v] of Object.entries(data.messages)) {
            let message = v;
            message.name = k;
            messages.push(message)
        }
    }
    // Attributes
    let attributes = []
    if (data.attributes) {
        for (const [k, v] of Object.entries(data.attributes)) {
            let attr = v;
            attr.name = k;
            attributes.push(attr)
        }
    }

    let arguments = []
    if (data.arguments) {
        for (const [k, v] of Object.entries(data.arguments)) {
            let arg = v;
            arg.name = k;
            arguments.push(arg)
        }
    }

    // Inlets
    let inlets = []
    if (data.inlets) {
        for (const [k, v] of Object.entries(data.inlets)) {
            let inlet = v;
            inlet.id = k;
            inlets.push(inlet)
        }
    }
    // Outlets
    let outlets = []
    if (data.outlets) {
        for (const [k, v] of Object.entries(data.outlets)) {
            let outlet = v;
            outlet.id = k;
            outlets.push(outlet)
        }
    }
    copy.messages = messages
    copy.attributes = attributes
    copy.arguments = arguments
    copy.inlets = inlets
    copy.outlets = outlets
    return copy
}

const configs = fg.sync([`${cce}/*.toml`]);
const template = fs.readFileSync(`./templates/${cce}.mustache`, 'utf8')
Mustache.escape = (text) => text; // escape maxref tags

if (!fs.existsSync(dir)) { fs.mkdirSync(dir) };

for (const config of configs) {
    const data = fs.readFileSync(config);
    const parsed = sanitise(toml.parse(data));
    const ext = extensions.get(cce);
    const output = path.join(dir, path.parse(config).name + ext);
    fs.writeFileSync(output, Mustache.render(template, parsed))
    console.log('Wrote ' + output);
}




