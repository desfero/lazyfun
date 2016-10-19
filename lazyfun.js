(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.returnExportsGlobal = factory();
  }

}(this, function () {
  'use strict';

  return function lazyfun(func, milliseconds) {
    var timer, result, called = false,
      args = Array.prototype.slice.call(arguments, 2);

    function invoke() {
      called = true;
      result = func.apply(null, args);
    }

    if (!isNaN(parseFloat(milliseconds)) && isFinite(milliseconds)) {
      if (milliseconds >= 0) {
        timer = setTimeout(function () {
          invoke();
        }, milliseconds);
      } else {
        invoke()
      }
    }

    return function () {
      if (timer) {
        clearTimeout(timer);
      }

      if (!called) {
        invoke();
      }

      return (result instanceof Function) ? result.apply(null, arguments) : result;
    };
  };
}));
