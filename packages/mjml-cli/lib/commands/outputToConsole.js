"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var html = _ref.compiled.html,
      file = _ref.file;
  return new Promise(function (resolve) {
    // eslint-disable-next-line
    console.log("<!-- FILE: " + file + " -->\n" + html);
    resolve();
  });
};

module.exports = exports["default"];