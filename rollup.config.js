import JsonPlugin from '@rollup/plugin-json';
// import TerserPlugin from 'rollup-plugin-terser';
import rollupPluginMyExample from "./src/plugin/rollup-plugin-my-example";

export default {
	// cache: true,
	/*input: './src/index.js',
	output: [
		{
			format: 'umd',
			file: 'bundle.js',
		},
		{
			format: 'umd',
			file: 'bundle.min.js',
			plugins: [
				TerserPlugin.terser()
			]
		},
	],*/
	/*input: [
		'./src/index.js',
		'./src/index2.js',
	],
	output: {
		dir: './dist',
		format: 'cjs',
		// file: 'build.js',
	},*/
	input: 'virtual-module',
	output: [{
		file: './dist/bundle.js',
		format: 'es'
	}],
	plugins: [
		JsonPlugin(),
		rollupPluginMyExample()
	]
}
