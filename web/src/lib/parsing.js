// @ts-nocheck

import Mustache from 'mustache';
import { max } from './templates';

function insertDefault(source, destination, key) {
    if (!source) return
    Object.entries(source).forEach(([k, v]) => {
        let temp = v;
        temp[key] = k;
        destination.push(temp);
    })
}
export const sanitise = (data) => {
    let copy = data;
    let messages = [];
	let attributes = [];
	let args = [];
	let inlets = [];
	let outlets = [];
    insertDefault(data.messages, messages, 'name');
    insertDefault(data.arguments, args, 'name');
    insertDefault(data.inlets, inlets, 'id');
    insertDefault(data.outlets, outlets, 'id');
    insertDefault(data.attributes, attributes, 'name');
    copy.messages = messages;
    copy.attributes = attributes;
    copy.arguments = args;
    copy.inlets = inlets;
    copy.outlets = outlets;
    return copy;
}

export function render(json) {
	return Mustache.render(max, json)
}

// const configs = fg.sync([`${options.input}/*.toml`]);
// const template = fs.readFileSync(templatePath, 'utf8');
// Mustache.escape = (text) => text; // escape maxref tags

// configs.forEach(config => {
//     const data = fs.readFileSync(config);
//     const parsed = sanitise(toml.parse(data));
//     const output = path.join(dir, path.parse(config).name + '.maxref.xml');
//     fs.writeFileSync(output, Mustache.render(template, parsed));
//     console.log('Wrote ' + output);
// })