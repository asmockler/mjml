'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mjmlSection = require('mjml-section');

var _mjmlSection2 = _interopRequireDefault(_mjmlSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjWrapper = function (_MjSection) {
  _inherits(MjWrapper, _MjSection);

  function MjWrapper() {
    _classCallCheck(this, MjWrapper);

    return _possibleConstructorReturn(this, (MjWrapper.__proto__ || Object.getPrototypeOf(MjWrapper)).apply(this, arguments));
  }

  _createClass(MjWrapper, [{
    key: 'renderWrappedChildren',
    value: function renderWrappedChildren() {
      var children = this.props.children;
      var containerWidth = this.context.containerWidth;


      return '\n      ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return component.rawElement ? component.render() : '\n          <!--[if mso | IE]>\n            <tr>\n              <td\n                ' + component.htmlAttributes({
            align: component.getAttribute('align'),
            class: component.getAttribute('css-class') ? component.getAttribute('css-class').split(' ').map(function (c) {
              return c + '-outlook';
            }).join(' ') : null,
            width: containerWidth
          }) + '\n              >\n          <![endif]-->\n            ' + component.render() + '\n          <!--[if mso | IE]>\n              </td>\n            </tr>\n          <![endif]-->\n        ';
        }
      }) + '\n    ';
    }
  }]);

  return MjWrapper;
}(_mjmlSection2.default);

exports.default = MjWrapper;
module.exports = exports['default'];