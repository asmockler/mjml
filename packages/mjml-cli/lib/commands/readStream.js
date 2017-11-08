'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var stdinSync = function stdinSync() {
  return new Promise(function (res) {
    var buffer = '';

    var stream = process.stdin;

    stream.on('data', function (chunck) {
      buffer += chunck;
    });

    stream.on('end', function () {
      return res(buffer);
    });
  });
};

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var mjml;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return stdinSync();

        case 2:
          mjml = _context.sent;
          return _context.abrupt('return', { mjml: mjml });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));
module.exports = exports['default'];