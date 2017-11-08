'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateTag;

var _ruleError = require('./ruleError');

var _ruleError2 = _interopRequireDefault(_ruleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateTag(element, _ref) {
  var components = _ref.components;
  var tagName = element.tagName;


  var Component = components[tagName];

  if (!Component) {
    return (0, _ruleError2.default)('Element ' + tagName + ' doesn\'t exist or is not registered', element);
  }

  return null;
}
module.exports = exports['default'];