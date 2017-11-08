'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlCore = require('mjml-core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjBody = (_temp = _class = function (_BodyComponent) {
  _inherits(MjBody, _BodyComponent);

  function MjBody() {
    _classCallCheck(this, MjBody);

    return _possibleConstructorReturn(this, (MjBody.__proto__ || Object.getPrototypeOf(MjBody)).apply(this, arguments));
  }

  _createClass(MjBody, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return _extends({}, this.context, {
        containerWidth: this.getAttribute('width')
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      return {
        div: {
          'background-color': this.getAttribute('background-color')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <div\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class'),
        style: 'div'
      }) + '\n      >\n        ' + this.renderChildren() + '\n      </div>\n    ';
    }
  }]);

  return MjBody;
}(_mjmlCore.BodyComponent), _class.defaultAttributes = {
  width: '600px'
}, _temp);
exports.default = MjBody;
module.exports = exports['default'];