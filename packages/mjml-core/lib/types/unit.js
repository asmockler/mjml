'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _escapeRegExp = require('lodash/escapeRegExp');

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var matcher = exports.matcher = /^unit\(.*\)/gim;

exports.default = function (params) {
  var _class, _temp;

  var units = params.match(/\(([^)]+)\)/)[1].split(',');
  var args = params.match(/\{([^}]+)\}/)[1].split(',');

  return _temp = _class = function (_Type) {
    _inherits(Unit, _Type);

    function Unit(value) {
      _classCallCheck(this, Unit);

      var _this = _possibleConstructorReturn(this, (Unit.__proto__ || Object.getPrototypeOf(Unit)).call(this, value));

      _this.matchers = [new RegExp('^((\\d){1,}(' + units.map(_escapeRegExp2.default).join('|') + ')( )?){' + args.join(',') + '}$')];
      return _this;
    }

    _createClass(Unit, [{
      key: 'convertAs',
      value: function convertAs() {
        var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'px';
        var base = arguments[1];
      }
    }]);

    return Unit;
  }(_type2.default), _class.errorMessage = 'Invalid value: $value for type Unit, only accepts (' + units.join(', ') + ') units and ' + args.join(' to ') + ' members', _temp;
};