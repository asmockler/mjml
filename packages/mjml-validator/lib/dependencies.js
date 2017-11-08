'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDependencies = undefined;

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dependencies = {};

var registerDependencies = exports.registerDependencies = function registerDependencies(dep) {
  return (0, _merge2.default)(dependencies, dep);
};

exports.default = dependencies;