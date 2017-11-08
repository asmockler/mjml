'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _escapeRegExp = require('lodash/escapeRegExp');

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var matcher = exports.matcher = /^enum/gim;

exports.default = function (params) {
  var _class, _temp;

  var matchers = params.match(/\(([^)]+)\)/)[1].split(',');

  return _temp = _class = function (_Type) {
    _inherits(Enum, _Type);

    function Enum(value) {
      _classCallCheck(this, Enum);

      var _this = _possibleConstructorReturn(this, (Enum.__proto__ || Object.getPrototypeOf(Enum)).call(this, value));

      _this.matchers = matchers.map(function (m) {
        return new RegExp('^' + (0, _escapeRegExp2.default)(m) + '$');
      });
      return _this;
    }

    return Enum;
  }(_type2.default), _class.errorMessage = 'Invalid value: $value for type Enum, only accepts ' + matchers.join(', '), _temp;
};