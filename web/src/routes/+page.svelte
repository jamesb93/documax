<script>
// @ts-nocheck
import mustache from 'mustache';
import toml from 'toml';
import { max } from '$lib/templates';
import { sanitise } from '$lib/parsing'
import { spclassifier } from '../lib/example';
import CodeMirror, { basicSetup } from '$lib/CodeMirror.svelte';

let store;
let xmlStore;
let parsed = {};
let parseError = null;
let xml = '';

$: if ($store) {
	try {
		parsed = sanitise(toml.parse($store));
		parseError = null;
		mustache.escape = (text) => text;
		xml = mustache.render(max, parsed)
		console.log(xml)
	} catch(e) {
		parseError = e
	}
}
</script>

<div class="container">
	<CodeMirror 
	doc={spclassifier.trim().trimStart()}
	bind:docStore={store}
	extensions={basicSetup} 
	/>

	{xml}

	<!-- <textarea contenteditable="false">
		{ xml }
	</textarea> -->
</div>



<style>
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 100vh;
	}
	.xml-preview {
		min-width: 50%;
	}
	:global(.codemirror) {
		border: 1px solid #ddd;
	}
</style>
	