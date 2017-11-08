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

var MjSocial = (_temp = _class = function (_BodyComponent) {
  _inherits(MjSocial, _BodyComponent);

  function MjSocial() {
    _classCallCheck(this, MjSocial);

    return _possibleConstructorReturn(this, (MjSocial.__proto__ || Object.getPrototypeOf(MjSocial)).apply(this, arguments));
  }

  _createClass(MjSocial, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        tableVertical: {
          'line-height': this.getAttribute('line-height'),
          margin: '0px'
        },
        tableHorizontal: {
          float: 'none',
          display: 'inline-table',
          'line-height': this.getAttribute('line-height')
        }
      };
    }
    // static allowedAttributes = {
    //   align: 'enum(left,right,center)',
    //   'border-radius': 'unit(px)',
    //   'container-background-color': 'color',
    //   color: 'color',
    //   'font-family': 'string',
    //   'font-size': 'unit(px,%)',
    //   'font-style': 'string',
    //   'font-weight': 'string',
    //   'inner-padding': 'unit(px,%)',
    //   'line-height': 'unit(px,%)',
    //   mode: 'enum(horizontal,vertical)',
    //   'padding-bottom': 'unit(px,%)',
    //   'padding-left': 'unit(px,%)',
    //   'padding-right': 'unit(px,%)',
    //   'padding-top': 'unit(px,%)',
    //   padding: 'unit(px,%){1,4}',
    //   'table-layout': 'enum(auto,fixed)',
    //   'vertical-align': 'enum(top,bottom,middle)',
    // }

  }, {
    key: 'getSocialElementAttributes',
    value: function getSocialElementAttributes() {
      var _this2 = this;

      return ['border-radius', 'color', 'font-family', 'font-size', 'font-weight', 'icon-size', 'inner-padding', 'line-height'].reduce(function (res, attr) {
        res[attr] = _this2.getAttribute(attr);
        return res;
      }, {});
    }
  }, {
    key: 'renderHorizontal',
    value: function renderHorizontal() {
      var children = this.props.children;


      return '\n     <!--[if mso | IE]>\n      <table\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation'
      }) + '\n      >\n        <tr>\n      <![endif]-->\n      ' + this.renderChildren(children, {
        attributes: this.getSocialElementAttributes(),
        renderer: function renderer(component) {
          return '\n            <!--[if mso | IE]>\n              <td>\n            <![endif]-->\n              <table\n                ' + component.htmlAttributes({
            align: component.getAttribute('align'),
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: 'tableHorizontal'
          }) + '\n              >\n                ' + component.render() + '\n              </table>\n            <!--[if mso | IE]>\n              </td>\n            <![endif]-->\n          ';
        }
      }) + '\n      <!--[if mso | IE]>\n          </tr>\n        </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderVertical',
    value: function renderVertical() {
      var children = this.props.children;


      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'tableVertical'
      }) + '\n      >\n        ' + this.renderChildren(children, {
        attributes: this.getSocialElementAttributes()
      }) + '\n      </table>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      ' + (this.getAttribute('mode') === 'horizontal' ? this.renderHorizontal() : this.renderVertical()) + '\n    ';
    }
  }]);

  return MjSocial;
}(_mjmlCore.BodyComponent), _class.defaultAttributes = {
  align: 'center',
  'border-radius': '3px',
  color: '#333333',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'icon-size': '20px',
  'inner-padding': null,
  'line-height': '22px',
  mode: 'horizontal',
  padding: '10px 25px',
  'text-decoration': 'none'
}, _temp);
exports.default = MjSocial;
module.exports = exports['default'];