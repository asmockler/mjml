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

var MjSpacer = (_temp = _class = function (_BodyComponent) {
  _inherits(MjSpacer, _BodyComponent);

  function MjSpacer() {
    _classCallCheck(this, MjSpacer);

    return _possibleConstructorReturn(this, (MjSpacer.__proto__ || Object.getPrototypeOf(MjSpacer)).apply(this, arguments));
  }

  _createClass(MjSpacer, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        div: {
          height: this.getAttribute('height')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.getAttribute('height');

      return '\n      ' + (0, _conditionalTag2.default)('\n        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="' + parseInt(height, 10) + '" style="vertical-align:top;height:' + height + ';">\n      ') + '\n      <div\n        ' + this.htmlAttributes({
        style: 'div'
      }) + '\n      >\n        &nbsp;\n      </div>\n      ' + (0, _conditionalTag2.default)('\n        </td></tr></table>\n      ') + '\n    ';
    }
  }]);

  return MjSpacer;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
  border: 'unit(px)',
  'border-bottom': 'unit(px)',
  'border-left': 'unit(px)',
  'border-radius': 'unit(px)',
  'border-right': 'unit(px)',
  'border-top': 'unit(px)',
  'container-background-color': 'color',
  direction: 'enum(ltr,rtl)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'vertical-align': 'string',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {}, _temp);
exports.default = MjSpacer;
module.exports = exports['default'];