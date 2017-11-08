'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlCore = require('mjml-core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjButton = (_temp = _class = function (_BodyComponent) {
  _inherits(MjButton, _BodyComponent);

  function MjButton() {
    _classCallCheck(this, MjButton);

    return _possibleConstructorReturn(this, (MjButton.__proto__ || Object.getPrototypeOf(MjButton)).apply(this, arguments));
  }

  _createClass(MjButton, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        table: {
          'border-collapse': 'separate',
          width: this.getAttribute('width'),
          'line-height': '100%'
        },
        td: {
          border: this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-radius': this.getAttribute('border-radius'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          color: this.getAttribute('color'),
          cursor: 'auto',
          'font-style': this.getAttribute('font-style'),
          height: this.getAttribute('height'),
          padding: this.getAttribute('inner-padding')
        },
        content: {
          background: this.getAttribute('background-color'),
          color: this.getAttribute('color'),
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'font-style': this.getAttribute('font-style'),
          'font-weight': this.getAttribute('font-weight'),
          'line-height': this.getAttribute('line-height'),
          Margin: '0',
          'text-decoration': this.getAttribute('text-decoration'),
          'text-transform': this.getAttribute('text-transform')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var tag = this.getAttribute('href') ? 'a' : 'p';

      return '\n      <table\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n      >\n        <tr>\n          <td\n            ' + this.htmlAttributes({
        align: 'center',
        bgcolor: this.getAttribute('background-color') === 'none' ? undefined : this.getAttribute('background-color'),
        role: 'presentation',
        style: 'td',
        valign: this.getAttribute('vertical-align')
      }) + '\n          >\n            <' + tag + '\n              ' + this.htmlAttributes({
        href: this.getAttribute('href'),
        rel: this.getAttribute('rel'),
        style: 'content',
        target: tag === 'a' ? '_blank' : undefined
      }) + '\n            >\n              ' + this.getContent() + '\n            </' + tag + '>\n          </td>\n        </tr>\n      </table>\n    ';
    }
  }]);

  return MjButton;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = ['align', 'background-color', 'border-bottom', 'border-left', 'border-radius', 'border-right', 'border-top', 'border', 'color', 'container-background-color', 'font-family', 'font-size', 'font-style', 'font-weight', 'height', 'href', 'inner-padding', 'line-height', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'padding', 'rel', 'text-decoration', 'text-transform', 'vertical-align', 'width'], _class.defaultAttributes = {
  align: 'center',
  'background-color': '#414141',
  border: 'none',
  'border-radius': '3px',
  color: '#ffffff',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'font-weight': 'normal',
  'inner-padding': '10px 25px',
  'line-height': '120%',
  padding: '10px 25px',
  'text-decoration': 'none',
  'text-transform': 'none',
  'vertical-align': 'middle'
}, _temp);
exports.default = MjButton;
module.exports = exports['default'];