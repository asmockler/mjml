'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlCore = require('mjml-core');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjTable = (_temp = _class = function (_BodyComponent) {
  _inherits(MjTable, _BodyComponent);

  function MjTable() {
    _classCallCheck(this, MjTable);

    return _possibleConstructorReturn(this, (MjTable.__proto__ || Object.getPrototypeOf(MjTable)).apply(this, arguments));
  }

  _createClass(MjTable, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        table: {
          cellpadding: this.getAttribute('cellspadding'),
          cellspacing: this.getAttribute('cellspacing'),
          color: this.getAttribute('color'),
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'line-height': this.getAttribute('line-height'),
          'table-layout': this.getAttribute('table-layout')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tableAttributes = ['cellpading', 'cellspacing', 'width'].map(function (v) {
        return _defineProperty({}, v, _this2.getAttribute(v));
      });

      return '\n      <table\n        ' + this.htmlAttributes(_extends({}, tableAttributes, {
        border: '0',
        style: 'table'
      })) + '\n      >\n        ' + this.getContent() + '\n      </table>\n    ';
    }
  }]);

  return MjTable;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,right,center)',
  cellpadding: 'integer',
  cellspacing: 'integer',
  'container-background-color': 'color',
  color: 'color',
  'font-family': 'string',
  'font-size': 'unit(px,%)',
  'font-style': 'string',
  'font-weight': 'string',
  'line-height': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'table-layout': 'enum(auto,fixed)',
  'vertical-align': 'enum(top,bottom,middle)',
  width: 'integer'
}, _class.defaultAttributes = {
  align: 'left',
  cellpadding: '0',
  cellspacing: '0',
  color: '#000',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '22px',
  padding: '10px 25px',
  'table-layout': 'auto',
  width: '100%'
}, _temp);
exports.default = MjTable;
module.exports = exports['default'];