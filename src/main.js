import { version } from '../package.json';
const foo = function() {
	console.log('foo');
}

const getVersion = function() {
	return version;
}

const lazyLoad = function() {
	import('./module').then(res => console.log(res));
}

export {
	foo,
	lazyLoad,
	getVersion
};