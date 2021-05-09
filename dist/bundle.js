(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	function test () {
		console.log('test');
	}

	const greet = function () {
		console.log('greet');
	};

	console.log(test);
	greet();

})));
