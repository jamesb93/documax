export const spclassifier = `[object]
name = "sp.classifierdisplay"
module = "SP-Tools"
category = ""
digest = "Display classes in a UI"
seealso =  ['sp.plotter', 'sp.corpuslist', 'sp.descriptordisplay', 'sp.eraetouch']
description = "Displays the matched class using the Sensory Percussion zones/labels."
discussion = """
    <h4><openfilelink filename="SP-Tools Overview.maxpat">Open the Overview Patch</openfilelink></h4>
    <p>The <o>sp.classifierdisplay</o> object lets you visualize what classes have been matched by <o>sp.classmatch</o>. Can display the typical snare/tom classes as well as an option to visualize kick classes.</p>
"""

[metadata]
author = "Rodrigo Constanzo, Flucoma Project"
tags = ['Machine Learning', 'Drums']

[inlets]
[inlets.0]
type="list"
digest="Class and velocity to display"
description="An incoming class name (with optional velocity) will flash on the UI."

[outlets]
[outlets.0]
type="list"
digest="Class and velocity thru"
description="Passes the incoming class (and velocity) directly out."

[attributes]
[attributes.drum]
digest = "The type of drum to display the UI for"
description = "Sets the type of <at>drum</at> to use for the UI display<br/><br /> Available options are <b>snare</b>, <b>tom</b>, and <b>kick</b>."
default = { value="snare", type="list", size=1 }
`