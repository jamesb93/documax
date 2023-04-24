export const max = `
<?xml version='1.0' encoding='utf-8' standalone='yes'?>
<?xml-stylesheet href="./_c74_ref.xsl" type="text/xsl"?>

<c74object name='{{ object.name }}' category='{{ object.category }}' module='{{ object.module }}'>
    <digest>{{ object.digest }}</digest>
    <description>{{ object.description }}</description>
    <discussion>{{ object.discussion }}</discussion>

	<metadatalist>
		<metadata name='author'>{{ metadata.author }}</metadata>
        {{ #metadata.tags }}
		<metadata name='tag'>{{ . }}</metadata>
        {{ /metadata.tags }}
	</metadatalist>

    <!-- INLETS -->
    <inletlist>
        {{ #inlets }}
        <inlet id='{{ id }}' type='{{ type }}'>
            <digest>{{ digest }}</digest>
            <description>{{ description }}</description>
        </inlet>
        {{ /inlets }}
    </inletlist>
    <!-- INLETS -->

    <!-- OUTLETS -->
    <outletlist>
        {{ #outlets }}
        <outlet id='{{ id }}' type='{{ type }}'>
            <digest>{{ digest }}</digest>
            <description>{{ description }}</description>
        </outlet>
        {{ /outlets }}
    </outletlist>
    <!-- OUTLETS -->

    <!-- ARGUMENTS -->
    <objarglist>
    {{ #arguments }}
        <objarg name='{{ name }}' optional='{{ optional }}' type='{{ type }}'>
            <digest>{{ digest }}</digest>
            <description>{{ description }}</description>
        </objarg>
    {{ /arguments }}
    </objarglist>
    <!-- ARGUMENTS -->

    <!--MESSAGES-->
    <methodlist>
	{{ #messages }}
    <method name='{{ name }}'>
        <arglist>
            {{ #args}}
            <arg 
            name='{{ name }}' 
            optional='{{ optional }}' 
            type='{{ type }}' 
            units = '{{ units }}'
            />
            {{ /args }}
        </arglist>
        <digest>{{ digest }}</digest>
        <description>{{ description }}</description>
    </method>
	{{ /messages }}
	</methodlist>
	<!--MESSAGES-->

	<!--ATTRIBUTES-->
	<attributelist>
        {{ #attributes }}
        <attribute 
        name='{{ name }}' 
        type='{{ type }}' 
        size='{{ size }}'
        get='1' set='1' 
        >
        <digest>{{ digest }}</digest>
        <description>{{ description }}</description>

        <attributelist>
            <attribute 
            name='default' 
            type='{{ default.type }}' 
            size='{{ default.size }}' 
            value='{{ default.value }}'
            get='1' set='1' 
            />
        </attributelist>
        </attribute>
        {{ /attributes }}
	</attributelist>
	<!--ATTRIBUTES-->

	<!-- SEEALSO -->
	<seealsolist>
        {{ #object.seealso }}
        <seealso name='{{ . }}' />
        {{ /object.seealso }}
	</seealsolist>
	<!-- SEEALSO -->

    <!-- INLETS -->
    <misc name="Input">
        {{ #inlets }}
        <entry name='{{ type }}'>
            <description>{{ description }}</description>
        </entry>
        {{ /inlets }}
    </misc> 
    <!-- INLETS -->

    <!-- OUTLETS -->
    <misc name="Output">
        {{ #outlets }}
        <entry name='{{ type }}'>
            <description>{{ description }}</description>
        </entry>
        {{ /outlets }}
    </misc>
    <!-- OUTLETS -->
</c74object>

`