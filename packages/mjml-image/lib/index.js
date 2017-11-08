'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _min = require('lodash/min');

var _min2 = _interopRequireDefault(_min);

var _mjmlCore = require('mjml-core');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjImage = (_temp = _class = function (_BodyComponent) {
  _inherits(MjImage, _BodyComponent);

  function MjImage() {
    _classCallCheck(this, MjImage);

    return _possibleConstructorReturn(this, (MjImage.__proto__ || Object.getPrototypeOf(MjImage)).apply(this, arguments));
  }

  _createClass(MjImage, [{
    key: 'getStyles',
    value: function getStyles() {
      var width = this.getContentWidth();
      var fullWidth = this.getAttribute('full-width') === 'full-width';

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return {
        img: {
          border: this.getAttribute('border'),
          display: 'block',
          outline: 'none',
          'text-decoration': 'none',
          'min-width': fullWidth ? '100%' : null,
          width: fullWidth ? '' + parsedWidth + unit : '100%',
          'max-width': fullWidth ? '100%' : null
        },
        td: {
          width: fullWidth ? null : '' + parsedWidth + unit
        },
        table: {
          'min-width': fullWidth ? '100%' : null,
          'max-width': fullWidth ? '100%' : null,
          width: fullWidth ? '' + parsedWidth + unit : null,
          'border-collapse': 'collapse',
          'border-spacing': '0px'
        }
      };
    }
  }, {
    key: 'getContentWidth',
    value: function getContentWidth() {
      var containerWidth = this.context.containerWidth;


      var width = this.getAttribute('width') ? (0, _min2.default)([parseInt(this.getAttribute('width'), 10), containerWidth]) : containerWidth;

      var paddingRight = this.getShorthandAttrValue('padding', 'right');
      var paddingLeft = this.getShorthandAttrValue('padding', 'left');
      var widthOverflow = paddingLeft + paddingRight + parseFloat(width) - containerWidth;

      return widthOverflow > 0 ? parseFloat(width - widthOverflow) : parseFloat(width);
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var img = '\n      <img\n        ' + this.htmlAttributes({
        alt: this.getAttribute('href'),
        height: this.getAttribute('height'),
        src: this.getAttribute('src'),
        style: 'img',
        title: this.getAttribute('title'),
        width: this.getContentWidth()
      }) + '\n      />\n    ';

      if (this.getAttribute('href')) {
        return '\n        <a\n          ' + this.htmlAttributes({
          href: this.getAttribute('href'),
          target: this.getAttribute('target')
        }) + '\n        >\n          ' + img + '\n        </a>\n      ';
      }

      return img;
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <table\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'td' }) + '>\n              ' + this.renderImage() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }]);

  return MjImage;
}(_mjmlCore.BodyComponent), _class.tagOmission = true, _class.defaultAttributes = {
  align: 'center',
  border: '0',
  height: 'auto',
  padding: '10px 25px',
  target: '_blank'
}, _temp);
exports.default = MjImage;
module.exports = exports['default'];