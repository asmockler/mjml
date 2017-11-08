'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conditionalTag;
var startConditionalTag = exports.startConditionalTag = '<!--[if mso | IE]>';
var endConditionalTag = exports.endConditionalTag = '<![endif]-->';
var startNegationConditionalTag = exports.startNegationConditionalTag = '<!--[if !mso | IE]><!-->';
var endNegationConditionalTag = exports.endNegationConditionalTag = '<!--<![endif]-->';

function conditionalTag(content) {
  var negation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return '\n    ' + (negation ? startNegationConditionalTag : startConditionalTag) + '\n    ' + content + '\n    ' + (negation ? endNegationConditionalTag : endConditionalTag) + '\n  ';
}