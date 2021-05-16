'use strict';

var version$1 = "1.0.0";

const getVersion = function() {
	return version$1;
};

const lazyLoad = function() {
	Promise.resolve().then(function () { return require('./module-11cc0a6a.js'); }).then(res => console.log(res));
};

const version = getVersion();
console.log(version);

document.querySelector('#btn').onclick = lazyLoad;
