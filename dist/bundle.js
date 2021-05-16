(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var test = 'this is a module';

  var module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': test
  });

  var version$1 = "1.0.0";

  const getVersion = function() {
  	return version$1;
  };

  const lazyLoad = function() {
  	Promise.resolve().then(function () { return module; }).then(res => console.log(res));
  };

  console.log(test);
  const version = getVersion();

  document.querySelector('#btn').onclick = function() {
  	lazyLoad();
  };

  console.log(version);

})));
