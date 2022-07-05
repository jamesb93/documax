Creates some manual documentation for FluCoMa objects that don't fit nicely into the current build system.

# Instructions

1. `pnpm i`
2. `node parser.js -e <cce> -o <output path>`

`-e` dictates which set of documentation you'd like to build, either `pd` or `max`.

`-o` sets the output path, which by default is in the same folder as where `parser.js` is called from.

So for example, you might run:

`node parser.js -e pd -o ~/Documents/Pd/`

# Explanation

Documentation is described in [TOML](https://toml.io/en/) files. The name of the file should correspond to the name of the object.

Using [moustache templates](https://github.com/janl/mustache.js/) data from the TOML representation is rendered via a template (see the templates folder).

There should be a decent enough set of edge cases represented across the four files which exist already.