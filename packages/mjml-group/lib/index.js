'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlCore = require('mjml-core');

var _widthParser5 = require('mjml-core/lib/helpers/widthParser');

var _widthParser6 = _interopRequireDefault(_widthParser5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjGroup = (_temp = _class = function (_BodyComponent) {
  _inherits(MjGroup, _BodyComponent);

  function MjGroup() {
    _classCallCheck(this, MjGroup);

    return _possibleConstructorReturn(this, (MjGroup.__proto__ || Object.getPrototypeOf(MjGroup)).apply(this, arguments));
  }

  _createClass(MjGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var containerWidth = this.context.containerWidth;
      var _props = this.props,
          sibling = _props.sibling,
          children = _props.children;

      var paddingSize = this.getShorthandAttrValue('padding', 'left') + this.getShorthandAttrValue('padding', 'right');

      var parentWidth = this.getAttribute('width') || parseFloat(containerWidth) / sibling + 'px';

      var _widthParser = (0, _widthParser6.default)(parentWidth, {
        parseFloatToInt: false
      }),
          unit = _widthParser.unit,
          parsedWidth = _widthParser.parsedWidth;

      if (unit === '%') {
        parentWidth = parseFloat(containerWidth) * parsedWidth / 100 - paddingSize + 'px';
      } else {
        parentWidth = parsedWidth - paddingSize + 'px';
      }

      return _extends({}, this.context, {
        containerWidth: containerWidth,
        sibling: children.length
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      return {
        div: {
          'font-size': '0',
          'line-height': '0',
          'text-align': 'left',
          direction: this.getAttribute('direction'),
          display: 'inline-block',
          'vertical-align': this.getAttribute('vertical-align'),
          width: '100%'
        },
        table: {
          'background-color': this.getAttribute('background-color'),
          border: this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-radius': this.getAttribute('border-radius'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          'vertical-align': this.getAttribute('vertical-align')
        },
        tdOutlook: {
          'vertical-align': this.getAttribute('vertical-align'),
          width: this.getWidthAsPixel()
        }
      };
    }
  }, {
    key: 'getParsedWidth',
    value: function getParsedWidth(toString) {
      var sibling = this.props.sibling;


      var width = this.getAttribute('width') || 100 / sibling + '%';

      var _widthParser2 = (0, _widthParser6.default)(width, {
        parseFloatToInt: false
      }),
          unit = _widthParser2.unit,
          parsedWidth = _widthParser2.parsedWidth;

      if (toString) {
        return '' + parsedWidth + unit;
      }

      return {
        unit: unit,
        parsedWidth: parsedWidth
      };
    }
  }, {
    key: 'getWidthAsPixel',
    value: function getWidthAsPixel() {
      var containerWidth = this.context.containerWidth;

      var _widthParser3 = (0, _widthParser6.default)(this.getParsedWidth(true), {
        parseFloatToInt: false
      }),
          unit = _widthParser3.unit,
          parsedWidth = _widthParser3.parsedWidth;

      if (unit === '%') {
        return parseFloat(containerWidth) * parsedWidth / 100 + 'px';
      }
      return parsedWidth + 'px';
    }
  }, {
    key: 'getColumnClass',
    value: function getColumnClass() {
      var addMediaQuery = this.context.addMediaQuery;


      var className = '';

      var _getParsedWidth = this.getParsedWidth(),
          parsedWidth = _getParsedWidth.parsedWidth,
          unit = _getParsedWidth.unit;

      switch (unit) {
        case '%':
          className = 'mj-column-per-' + parseInt(parsedWidth, 10);
          break;

        case 'px':
        default:
          className = 'mj-column-px-' + parseInt(parsedWidth, 10);
          break;
      }

      // Add className to media queries
      addMediaQuery(className, {
        parsedWidth: parsedWidth,
        unit: unit
      });

      return className;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          sibling = _props2.sibling;

      var _getChildContext = this.getChildContext(),
          groupWidth = _getChildContext.containerWidth;

      var containerWidth = this.context.containerWidth;


      var getElementWidth = function getElementWidth(width) {
        if (!width) {
          return parseInt(containerWidth, 10) / parseInt(sibling, 10) + 'px';
        }

        var _widthParser4 = (0, _widthParser6.default)(width, {
          parseFloatToInt: false
        }),
            unit = _widthParser4.unit,
            parsedWidth = _widthParser4.parsedWidth;

        if (unit === '%') {
          return 100 * parsedWidth / groupWidth + 'px';
        }
        return '' + parsedWidth + unit;
      };

      var classesName = this.getColumnClass() + ' outlook-group-fix';

      if (this.getAttribute('css-class')) {
        classesName += ' ' + this.getAttribute('css-class');
      }

      return '\n      <div\n        ' + this.htmlAttributes({
        class: classesName,
        style: 'div'
      }) + '\n      >\n        <!--[if mso | IE]>\n        <table  role="presentation" border="0" cellpadding="0" cellspacing="0">\n          <tr>\n        <![endif]-->\n          ' + this.renderChildren(children, {
        attributes: { mobileWidth: 'mobileWidth' },
        renderer: function renderer(component) {
          return component.rawElement ? component.render() : '\n              <!--[if mso | IE]>\n              <td\n                ' + component.htmlAttributes({
            style: {
              align: component.getAttribute('align'),
              width: getElementWidth(component.getWidthAsPixel ? component.getWidthAsPixel() : component.getAttribute('width'))
            }
          }) + '\n              >\n              <![endif]-->\n                ' + component.render() + '\n              <!--[if mso | IE]>\n              </td>\n              <![endif]-->\n          ';
        }
      }) + '\n        <!--[if mso | IE]>\n          </tr>\n          </table>\n        <![endif]-->\n      </div>\n    ';
    }
  }]);

  return MjGroup;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
  'background-color': 'color',
  border: 'unit(px)',
  'border-bottom': 'unit(px)',
  'border-left': 'unit(px)',
  'border-radius': 'unit(px)',
  'border-right': 'unit(px)',
  'border-top': 'unit(px)',
  direction: 'enum(ltr,rtl)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'vertical-align': 'string',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {
  direction: 'ltr'
}, _temp);
exports.default = MjGroup;
module.exports = exports['default'];