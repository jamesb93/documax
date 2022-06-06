Creates some manual documentation for FluCoMa objects that don't fit nicely into the current build system.

So far generates:

`fluid.plotter`
`fluid.waveform~`
`fluid.buf2list`
`fluid.list2buf`

# Instructions

1. `pnpm i`
2. `node parser.js`

This will transform the docs stored in the `docs` path to the output folder set in that script. By default is in this repo at `output`, but can be configured to go anywhere by changing that line in `parser.js`.

Optionally you can supply the `-o` parameter to set the output folder. For example:

`node parser.js -o help` would output all the transformed documentation to the folder named `help`. If it does not exist it will be made.

# Explanation

Documentation is described in [TOML](https://toml.io/en/) files in the `docs` folder. The name of the file should correspond to the name of the object.

Using [moustache templates](https://github.com/janl/mustache.js/) data from the TOML representation is marked up into a Max compatible `.maxref.xml` file.

There should be a decent enough set of edge cases across the four files which exist already.