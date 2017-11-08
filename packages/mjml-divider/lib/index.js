'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlCore = require('mjml-core');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjDivider = (_temp = _class = function (_BodyComponent) {
  _inherits(MjDivider, _BodyComponent);

  function MjDivider() {
    _classCallCheck(this, MjDivider);

    return _possibleConstructorReturn(this, (MjDivider.__proto__ || Object.getPrototypeOf(MjDivider)).apply(this, arguments));
  }

  _createClass(MjDivider, [{
    key: 'getStyles',
    value: function getStyles() {
      var _this2 = this;

      var p = {
        'border-top': ['style', 'width', 'color'].map(function (attr) {
          return _this2.getAttribute('border-' + attr);
        }).join(' '),
        'font-size': 1,
        margin: '0px auto',
        width: this.getAttribute('width')
      };

      return {
        p: p,
        outlook: _extends({}, p, {
          width: this.getOutlookWidth()
        })
      };
    }
  }, {
    key: 'getOutlookWidth',
    value: function getOutlookWidth() {
      var containerWidth = this.context.containerWidth;


      var width = this.getAttribute('width');

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      switch (unit) {
        case '%':
          return parseInt(containerWidth, 10) * parseInt(parsedWidth, 10) / 100 + 'px';

        default:
          return containerWidth;
      }
    }
  }, {
    key: 'renderAfter',
    value: function renderAfter() {
      return '\n      <!--[if mso | IE]>\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        style: 'outlook',
        role: 'presentation',
        width: this.getOutlookWidth()
      }) + '\n        >\n          <tr>\n            <td style="height:0;line-height:0;">\n              &nbsp;\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <p\n        ' + this.htmlAttributes({
        style: 'p'
      }) + '\n      >\n      </p>\n      ' + this.renderAfter() + '\n    ';
    }
  }]);

  return MjDivider;
}(_mjmlCore.BodyComponent), _class.tagOmission = true, _class.defaultAttributes = {
  'border-color': '#000000',
  'border-style': 'solid',
  'border-width': '4px',
  padding: '10px 25px',
  width: '100%'
}, _temp);
exports.default = MjDivider;
module.exports = exports['default'];