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