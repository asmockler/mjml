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

var MjColumn = (_temp = _class = function (_BodyComponent) {
  _inherits(MjColumn, _BodyComponent);

  function MjColumn() {
    _classCallCheck(this, MjColumn);

    return _possibleConstructorReturn(this, (MjColumn.__proto__ || Object.getPrototypeOf(MjColumn)).apply(this, arguments));
  }

  _createClass(MjColumn, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var containerWidth = this.context.containerWidth;
      var sibling = this.props.sibling;


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
        parentWidth: parentWidth
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var tableStyle = {
        'background-color': this.getAttribute('background-color'),
        border: this.getAttribute('border'),
        'border-bottom': this.getAttribute('border-bottom'),
        'border-left': this.getAttribute('border-left'),
        'border-radius': this.getAttribute('border-radius'),
        'border-right': this.getAttribute('border-right'),
        'border-top': this.getAttribute('border-top'),
        'vertical-align': this.getAttribute('vertical-align')
      };

      return {
        div: {
          'font-size': '13px',
          'text-align': 'left',
          direction: this.getAttribute('direction'),
          display: 'inline-block',
          'vertical-align': this.getAttribute('vertical-align'),
          width: this.getMobileWidth()
        },
        table: _extends({}, this.hasGutter() ? {} : tableStyle),
        tdOutlook: {
          'vertical-align': this.getAttribute('vertical-align'),
          width: this.getWidthAsPixel()
        },
        gutter: _extends({}, tableStyle, {
          padding: this.getAttribute('padding'),
          'padding-top': this.getAttribute('padding-top'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left')
        })
      };
    }
  }, {
    key: 'getMobileWidth',
    value: function getMobileWidth() {
      var _context = this.context,
          sibling = _context.sibling,
          containerWidth = _context.containerWidth;

      var width = this.getAttribute('width');
      var mobileWidth = this.getAttribute('mobileWidth');

      if (mobileWidth !== 'mobileWidth') {
        return '100%';
      } else if (width === undefined) {
        return parseInt(100 / sibling, 10) + '%';
      }

      var _widthParser2 = (0, _widthParser6.default)(width, {
        parseFloatToInt: false
      }),
          unit = _widthParser2.unit,
          parsedWidth = _widthParser2.parsedWidth;

      switch (unit) {
        case '%':
          return width;
        case 'px':
        default:
          return parsedWidth / parseInt(containerWidth, 10) + '%';
      }
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
    key: 'getParsedWidth',
    value: function getParsedWidth(toString) {
      var sibling = this.props.sibling;


      var width = this.getAttribute('width') || 100 / sibling + '%';

      var _widthParser4 = (0, _widthParser6.default)(width, {
        parseFloatToInt: false
      }),
          unit = _widthParser4.unit,
          parsedWidth = _widthParser4.parsedWidth;

      if (toString) {
        return '' + parsedWidth + unit;
      }

      return {
        unit: unit,
        parsedWidth: parsedWidth
      };
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
    key: 'hasGutter',
    value: function hasGutter() {
      return this.getAttribute('padding') != null;
    }
  }, {
    key: 'renderGutter',
    value: function renderGutter() {
      return '\n      <table\n        ' + this.htmlAttributes({
        background: this.getAttribute('background-color'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        width: '100%'
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'gutter' }) + '>\n              ' + this.renderColumn() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }, {
    key: 'renderColumn',
    value: function renderColumn() {
      var children = this.props.children;


      return '\n      <table\n        ' + this.htmlAttributes({
        background: this.hasGutter() ? null : this.getAttribute('background-color'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        width: '100%'
      }) + '\n      >\n        ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return (// eslint-disable-line no-confusing-arrow
            component.rawElement ? component.render() : '\n            <tr>\n              <td\n                ' + component.htmlAttributes({
              align: component.getAttribute('align'),
              background: component.getAttribute('container-background-color'),
              class: component.getAttribute('css-class'),
              style: {
                background: component.getAttribute('container-background-color'),
                'font-size': '0px',
                padding: component.getAttribute('padding'),
                'padding-top': component.getAttribute('padding-top'),
                'padding-right': component.getAttribute('padding-right'),
                'padding-bottom': component.getAttribute('padding-bottom'),
                'padding-left': component.getAttribute('padding-left'),
                'word-break': 'break-word'
              }
            }) + '\n              >\n                ' + component.render() + '\n              </td>\n            </tr>\n          '
          );
        }
      }) + '\n      </table>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var classesName = this.getColumnClass() + ' outlook-group-fix';

      if (this.getAttribute('css-class')) {
        classesName += ' ' + this.getAttribute('css-class');
      }

      return '\n      <div\n        ' + this.htmlAttributes({
        class: classesName,
        style: 'div'
      }) + '\n      >\n        ' + (this.hasGutter() ? this.renderGutter() : this.renderColumn()) + '\n      </div>\n    ';
    }
  }]);

  return MjColumn;
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
exports.default = MjColumn;
module.exports = exports['default'];