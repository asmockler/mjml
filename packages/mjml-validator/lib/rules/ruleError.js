"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ruleError;
function ruleError(message, element) {
  var line = element.line,
      tagName = element.tagName;


  return {
    line: line,
    message: message,
    tagName: tagName,
    formattedMessage: "Line " + line + " (" + tagName + ") \u2014 " + message
  };
}
module.exports = exports["default"];