'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _mjmlCore = require('mjml-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjAttributes = function (_HeadComponent) {
  _inherits(MjAttributes, _HeadComponent);

  function MjAttributes() {
    _classCallCheck(this, MjAttributes);

    return _possibleConstructorReturn(this, (MjAttributes.__proto__ || Object.getPrototypeOf(MjAttributes)).apply(this, arguments));
  }

  _createClass(MjAttributes, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;
      var children = this.props.children;


      (0, _forEach2.default)(children, function (child) {
        var tagName = child.tagName,
            attributes = child.attributes,
            children = child.children;


        if (tagName === 'mj-class') {
          add('classes', attributes.name, (0, _omit2.default)(attributes, ['name']));

          add('classesDefault', attributes.name, children.reduce(function (acc, _ref) {
            var tagName = _ref.tagName,
                attributes = _ref.attributes;
            return _extends({}, acc, _defineProperty({}, tagName, attributes));
          }, {}));
        } else {
          add('defaultAttributes', tagName, attributes);
        }
      });
    }
  }]);

  return MjAttributes;
}(_mjmlCore.HeadComponent);

exports.default = MjAttributes;
module.exports = exports['default'];