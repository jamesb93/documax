
const toml = require('toml');
const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const Mustache = require('mustache');

const data = fs.readFileSync('./fluid.list2buf.toml');
const parsed = toml.parse(data);


// replace `` with <m> </m>