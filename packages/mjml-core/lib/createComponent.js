'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadComponent = exports.BodyComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _lodash = require('lodash');

var _mjmlParserXml = require('mjml-parser-xml');

var _mjmlParserXml2 = _interopRequireDefault(_mjmlParserXml);

var _shorthandParser = require('./helpers/shorthandParser');

var _shorthandParser2 = _interopRequireDefault(_shorthandParser);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = (_temp = _class = function () {
  _createClass(Component, null, [{
    key: 'getTagName',
    value: function getTagName() {
      return (0, _lodash.kebabCase)(this.name);
    }
  }]);

  function Component() {
    var initialDatas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Component);

    var _initialDatas$attribu = initialDatas.attributes,
        attributes = _initialDatas$attribu === undefined ? {} : _initialDatas$attribu,
        _initialDatas$childre = initialDatas.children,
        children = _initialDatas$childre === undefined ? [] : _initialDatas$childre,
        _initialDatas$content = initialDatas.content,
        content = _initialDatas$content === undefined ? '' : _initialDatas$content,
        _initialDatas$context = initialDatas.context,
        context = _initialDatas$context === undefined ? {} : _initialDatas$context,
        _initialDatas$props = initialDatas.props,
        props = _initialDatas$props === undefined ? {} : _initialDatas$props;


    this.props = _extends({}, props, {
      children: children,
      content: content
    });

    this.attributes = _extends({}, this.constructor.defaultAttributes, attributes);
    this.context = context;

    return this;
  }

  _createClass(Component, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.context;
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.attributes[name];
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.props.content.trim();
    }
  }, {
    key: 'renderMJML',
    value: function renderMJML(mjml) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (typeof mjml === 'string') {
        mjml = (0, _mjmlParserXml2.default)(mjml, _extends({}, options, {
          components: _components2.default,
          ignoreInclude: true
        }));
      }

      return this.context.processing(mjml, this.context);
    }
  }]);

  return Component;
}(), _class.defaultAttributes = {}, _temp);

var BodyComponent = function (_Component) {
  _inherits(BodyComponent, _Component);

  function BodyComponent() {
    _classCallCheck(this, BodyComponent);

    return _possibleConstructorReturn(this, (BodyComponent.__proto__ || Object.getPrototypeOf(BodyComponent)).apply(this, arguments));
  }

  _createClass(BodyComponent, [{
    key: 'getStyles',
    value: function getStyles() {
      // eslint-disable-line class-methods-use-this
      return {};
    }
  }, {
    key: 'getShorthandAttrValue',
    value: function getShorthandAttrValue(attribute, direction) {
      var mjAttributeDirection = this.getAttribute(attribute + '-' + direction);
      var mjAttribute = this.getAttribute(attribute);

      if (mjAttributeDirection) {
        return parseInt(mjAttributeDirection, 10);
      }

      if (!mjAttribute) {
        return 0;
      }

      return (0, _shorthandParser2.default)(mjAttribute, direction);
    }
  }, {
    key: 'htmlAttributes',
    value: function htmlAttributes(attributes) {
      var _this2 = this;

      var specialAttributes = {
        style: function style(v) {
          return _this2.styles(v);
        },
        default: _lodash.identity
      };

      return (0, _lodash.reduce)(attributes, function (output, v, name) {
        var value = (specialAttributes[name] || specialAttributes.default)(v);

        if (value) {
          return output + ' ' + name + '="' + value + '"';
        }

        return output;
      }, '');
    }
  }, {
    key: 'styles',
    value: function styles(_styles) {
      var stylesObject = this.getStyles;

      if (_styles) {
        if (typeof _styles === 'string') {
          stylesObject = (0, _lodash.get)(this.getStyles(), _styles);
        } else {
          stylesObject = _styles;
        }
      }

      return (0, _lodash.reduce)(stylesObject, function (output, value, name) {
        if (value) {
          return '' + output + name + ':' + value + ';';
        }
        return output;
      }, '');
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(childrens) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$props = options.props,
          props = _options$props === undefined ? {} : _options$props,
          _options$renderer = options.renderer,
          renderer = _options$renderer === undefined ? function (component) {
        return component.render();
      } : _options$renderer,
          _options$attributes = options.attributes,
          attributes = _options$attributes === undefined ? {} : _options$attributes;


      childrens = childrens || this.props.children;

      var sibling = childrens.length;

      var output = '';
      var index = 0;

      (0, _lodash.forEach)(childrens, function (children) {
        var component = (0, _components.initComponent)({
          name: children.tagName,
          initialDatas: _extends({}, children, {
            attributes: _extends({}, attributes, children.attributes),
            context: _this3.getChildContext(),
            props: _extends({}, props, {
              first: index === 0,
              index: index,
              last: index + 1 === sibling,
              sibling: sibling
            })
          })
        });

        if (component !== null) {
          output += renderer(component);
        }

        index++; // eslint-disable-line no-plusplus
      });

      return output;
    }
  }]);

  return BodyComponent;
}(Component);

exports.BodyComponent = BodyComponent;

var HeadComponent = exports.HeadComponent = function (_Component2) {
  _inherits(HeadComponent, _Component2);

  function HeadComponent() {
    _classCallCheck(this, HeadComponent);

    return _possibleConstructorReturn(this, (HeadComponent.__proto__ || Object.getPrototypeOf(HeadComponent)).apply(this, arguments));
  }

  _createClass(HeadComponent, [{
    key: 'handlerChildren',
    value: function handlerChildren() {
      var _this5 = this;

      var childrens = this.props.children;

      (0, _lodash.forEach)(childrens, function (children) {
        var component = (0, _components.initComponent)({
          name: children.tagName,
          initialDatas: _extends({}, children, {
            context: _this5.getChildContext()
          })
        });

        if (component.handler) {
          component.handler();
        }
      });
    }
  }], [{
    key: 'getTagName',
    value: function getTagName() {
      return (0, _lodash.kebabCase)(this.name);
    }
  }]);

  return HeadComponent;
}(Component);