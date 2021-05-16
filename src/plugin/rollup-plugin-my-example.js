export default function rollupPluginMyExample() {
	return {
		name: 'my-example',
		resolveId (source) {
			if (source === 'virtual-module') {
				return source;
			}
			return null;
		},
		load (id) {
			if (id === 'virtual-module') {
				return 'export default "this is virtual module"';
			}
			return null;
		}
	}
}