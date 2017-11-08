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

var MjTitle = (_temp = _class = function (_HeadComponent) {
  _inherits(MjTitle, _HeadComponent);

  function MjTitle() {
    _classCallCheck(this, MjTitle);

    return _possibleConstructorReturn(this, (MjTitle.__proto__ || Object.getPrototypeOf(MjTitle)).apply(this, arguments));
  }

  _createClass(MjTitle, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;


      add('title', this.getContent());
    }
  }]);

  return MjTitle;
}(_mjmlCore.HeadComponent), _class.endingTag = true, _temp);
exports.default = MjTitle;
module.exports = exports['default'];