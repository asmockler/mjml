'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlCore = require('mjml-core');

var _conditionalTag = require('mjml-core/lib/helpers/conditionalTag');

var _conditionalTag2 = _interopRequireDefault(_conditionalTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjText = (_temp = _class = function (_BodyComponent) {
  _inherits(MjText, _BodyComponent);

  function MjText() {
    _classCallCheck(this, MjText);

    return _possibleConstructorReturn(this, (MjText.__proto__ || Object.getPrototypeOf(MjText)).apply(this, arguments));
  }

  _createClass(MjText, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        text: {
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'font-weight': this.getAttribute('font-weight'),
          'letter-spacing': this.getAttribute('letter-spacing'),
          'line-height': this.getAttribute('line-height'),
          'text-align': this.getAttribute('align'),
          'text-decoration': this.getAttribute('text-decoration'),
          'text-transform': this.getAttribute('text-transform'),
          color: this.getAttribute('color'),
          height: this.getAttribute('height')
        }
      };
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return '\n      <div\n        ' + this.htmlAttributes({
        style: 'text'
      }) + '\n      >\n        ' + this.getContent() + '\n      </div>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.getAttribute('height');

      return height ? '\n        ' + (0, _conditionalTag2.default)('\n          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="' + height + '" style="vertical-align:top;height:' + height + 'px;">\n        ') + '\n        ' + this.renderContent() + '\n        ' + (0, _conditionalTag2.default)('\n          </td></tr></table>\n        ') + '\n      ' : this.renderContent();
    }
  }]);

  return MjText;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,right,center)',
  'background-color': 'color',
  color: 'color',
  'font-family': 'string',
  'font-size': 'unit(px,%)',
  'font-style': 'string',
  'font-weight': 'string',
  height: 'unit(px,%)',
  'letter-spacing': 'unit(px,%)',
  'line-height': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'text-decoration': 'string',
  'text-transform': 'string',
  'vertical-align': 'string'
}, _class.defaultAttributes = {
  align: 'left',
  color: '#000000',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '1',
  padding: '10px 25px'
}, _temp);
exports.default = MjText;
module.exports = exports['default'];