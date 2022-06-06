
const toml = require('toml');
const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const Mustache = require('mustache');

const dir = './output';

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
    // Inlets
    // Outlets
    copy.messages = messages
    copy.attributes = attributes
    return copy
}

const configs = fg.sync(['docs/*.toml']);
const template = fs.readFileSync('./template.mustache', 'utf8')
Mustache.escape = (text) => text; // escape maxref tags

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

for (const config of configs) {
    const data = fs.readFileSync(config);
    const parsed = sanitise(toml.parse(data));
    const output = path.join(dir, path.parse(config).name + '.maxref.xml');
    fs.writeFileSync(output, Mustache.render(template, parsed))
    console.log('Wrote ' + output);
}




