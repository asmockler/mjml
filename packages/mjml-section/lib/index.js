'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _mjmlCore = require('mjml-core');

var _fp = require('lodash/fp');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var makeBackgroundString = (0, _fp.flow)((0, _fp.filter)(_fp.identity), (0, _fp.join)(' '));
var MjSection = (_temp2 = _class = function (_BodyComponent) {
  _inherits(MjSection, _BodyComponent);

  function MjSection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MjSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MjSection.__proto__ || Object.getPrototypeOf(MjSection)).call.apply(_ref, [this].concat(args))), _this), _this.getBackground = function () {
      return makeBackgroundString([_this.getAttribute('background-color')].concat(_toConsumableArray(_this.hasBackground() ? ['url(' + _this.getAttribute('background-url') + ')', 'top center / ' + _this.getAttribute('background-size'), _this.getAttribute('background-repeat')] : [])));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MjSection, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var containerWidth = this.context.containerWidth;


      var paddingSize = this.getShorthandAttrValue('padding', 'left') + this.getShorthandAttrValue('padding', 'right');

      var _widthParser = (0, _widthParser3.default)(containerWidth, {
        parseFloatToInt: false
      }),
          parsedWidth = _widthParser.parsedWidth;

      return _extends({}, this.context, {
        containerWidth: parsedWidth - paddingSize + 'px'
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var containerWidth = this.context.containerWidth;


      var fullWidth = this.isFullWidth();

      var background = this.getAttribute('background-url') ? this.getBackground() : {
        background: this.getAttribute('background-color'),
        'background-color': this.getAttribute('background-color')
      };

      return {
        tableFullwidth: _extends({}, fullWidth ? background : {}, {
          width: '100%',
          'border-radius': this.getAttribute('border-radius')
        }),
        table: _extends({}, fullWidth ? {} : background, {
          width: '100%',
          'border-radius': this.getAttribute('border-radius')
        }),
        td: {
          border: this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          direction: this.getAttribute('direction'),
          'font-size': '0px',
          padding: this.getAttribute('padding'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-top': this.getAttribute('padding-top'),
          'text-align': this.getAttribute('text-align'),
          'vertical-align': this.getAttribute('vertical-align')
        },
        div: _extends({}, fullWidth ? {} : background, {
          Margin: '0px auto',
          'border-radius': this.getAttribute('border-radius'),
          'max-width': containerWidth
        }),
        innerDiv: {
          'line-height': '0',
          'font-size': '0'
        }
      };
    }
  }, {
    key: 'hasBackground',
    value: function hasBackground() {
      return this.getAttribute('background-url') != null;
    }
  }, {
    key: 'isFullWidth',
    value: function isFullWidth() {
      return this.getAttribute('full-width') === 'full-width';
    }
  }, {
    key: 'renderBefore',
    value: function renderBefore() {
      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n      <table\n        ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        class: this.getAttribute('css-class') ? this.getAttribute('css-class').split(' ').map(function (c) {
          return c + '-outlook';
        }).join(' ') : null,
        style: { width: '' + containerWidth },
        width: parseInt(containerWidth, 10)
      }) + '\n      >\n        <tr>\n          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderAfter',
    value: function renderAfter() {
      // eslint-disable-line class-methods-use-this
      return '\n      <!--[if mso | IE]>\n          </td>\n        </tr>\n      </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderWrappedChildren',
    value: function renderWrappedChildren() {
      var children = this.props.children;


      return '\n      <!--[if mso | IE]>\n        <tr>\n      <![endif]-->\n      ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return component.rawElement ? component.render() : '\n          <!--[if mso | IE]>\n            <td\n              ' + component.htmlAttributes({
            align: component.getAttribute('align'),
            class: component.getAttribute('css-class') ? component.getAttribute('css-class').split(' ').map(function (c) {
              return c + '-outlook';
            }).join(' ') : null,
            style: 'tdOutlook'
          }) + '\n            >\n          <![endif]-->\n            ' + component.render() + '\n          <!--[if mso | IE]>\n            </td>\n          <![endif]-->\n    ';
        }
      }) + '\n\n      <!--[if mso | IE]>\n        </tr>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderWithBackground',
    value: function renderWithBackground(content) {
      var fullWidth = this.isFullWidth();

      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n        <v:rect ' + this.htmlAttributes({
        style: fullWidth ? { 'mso-width-percent': '1000' } : { width: containerWidth },
        'xmlns:v': 'urn:schemas-microsoft-com:vml',
        fill: 'true',
        stroke: 'false'
      }) + '>\n        <v:fill ' + this.htmlAttributes({
        origin: '0.5, 0',
        position: '0.5, 0',
        src: this.getAttribute('background-url'),
        color: this.getAttribute('background-color'),
        type: 'tile'
      }) + ' />\n        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">\n      <![endif]-->\n          ' + content + '\n        <!--[if mso | IE]>\n        </v:textbox>\n      </v:rect>\n    <![endif]-->\n    ';
    }
  }, {
    key: 'renderSection',
    value: function renderSection() {
      var hasBackground = this.hasBackground();

      return '\n      <div ' + this.htmlAttributes({
        class: this.isFullWidth() ? null : this.getAttribute('css-class'),
        style: 'div'
      }) + '>\n        ' + (hasBackground ? '<div ' + this.htmlAttributes({ style: 'innerDiv' }) + '>' : '') + '\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        background: this.isFullWidth() ? null : this.getAttribute('background-url'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n        >\n          <tbody>\n            <tr>\n              <td\n                ' + this.htmlAttributes({
        style: 'td'
      }) + '\n              >\n                <!--[if mso | IE]>\n                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                <![endif]-->\n                  ' + this.renderWrappedChildren() + '\n                <!--[if mso | IE]>\n                  </table>\n                <![endif]-->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        ' + (hasBackground ? '</div>' : '') + '\n      </div>\n    ';
    }
  }, {
    key: 'renderFullWidth',
    value: function renderFullWidth() {
      var content = this.hasBackground() ? this.renderWithBackground('\n        ' + this.renderBefore() + '\n        ' + this.renderSection() + '\n        ' + this.renderAfter() + '\n      ') : '\n        ' + this.renderBefore() + '\n        ' + this.renderSection() + '\n        ' + this.renderAfter() + '\n      ';

      return '\n      <table\n        ' + this.htmlAttributes({
        align: 'center',
        class: this.getAttribute('css-class'),
        background: this.getAttribute('background-url'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'tableFullwidth'
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td>\n              ' + content + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }, {
    key: 'renderSimple',
    value: function renderSimple() {
      var section = this.renderSection();

      return '\n      ' + this.renderBefore() + '\n      ' + (this.hasBackground() ? this.renderWithBackground(section) : section) + '\n      ' + this.renderAfter() + '\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return this.isFullWidth() ? this.renderFullWidth() : this.renderSimple();
    }
  }]);

  return MjSection;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
  'background-color': 'color',
  'background-url': 'string',
  'background-repeat': 'enum(repeat/no-repeat)',
  'background-size': 'string',
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-radius': 'string',
  'border-right': 'string',
  'border-top': 'string',
  direction: 'enum(ltr,rtl)',
  'full-width': 'enum(full-width)',
  padding: 'unit(px,%){1,4}',
  'padding-top': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'text-align': 'enum(left,center,right)',
  'text-padding': 'unit(px,%){1,4}',
  'vertical-align': 'enum(bottom,middle,top)'
}, _class.defaultAttributes = {
  'background-repeat': 'repeat',
  'background-size': 'auto',
  direction: 'ltr',
  padding: '20px 0',
  'text-align': 'center',
  'text-padding': '4px 4px 4px 0',
  'vertical-align': 'top'
}, _temp2);
exports.default = MjSection;
module.exports = exports['default'];