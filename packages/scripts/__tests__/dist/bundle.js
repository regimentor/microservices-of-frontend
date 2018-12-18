'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));

function a() {
  console.log('222');
}

function asyncFuncTestFoo() {
  return _asyncFuncTestFoo.apply(this, arguments);
}

function _asyncFuncTestFoo() {
  _asyncFuncTestFoo = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", true);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _asyncFuncTestFoo.apply(this, arguments);
}

var Foo = function Foo() {
  _classCallCheck(this, Foo);

  _defineProperty(this, "state", {
    art: 'art'
  });
};

var fooIn = new Foo();
console.log(fooIn.state.art);
asyncFuncTestFoo();
a();
var t = 1;
var b = 1;
var r = 1;
var ae = 1;
a(t, b, r, ae);
//# sourceMappingURL=bundle.js.map
