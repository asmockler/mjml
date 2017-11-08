'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadComponent = exports.BodyComponent = exports.registerComponent = exports.initComponent = exports.components = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mjml2html;

var _createComponent = require('./createComponent');

Object.defineProperty(exports, 'BodyComponent', {
  enumerable: true,
  get: function get() {
    return _createComponent.BodyComponent;
  }
});
Object.defineProperty(exports, 'HeadComponent', {
  enumerable: true,
  get: function get() {
    return _createComponent.HeadComponent;
  }
});

var _lodash = require('lodash');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _juice = require('juice');

var _juice2 = _interopRequireDefault(_juice);

var _jsBeautify = require('js-beautify');

var _htmlMinifier = require('html-minifier');

var _mjmlParserXml = require('mjml-parser-xml');

var _mjmlParserXml2 = _interopRequireDefault(_mjmlParserXml);

var _mjmlValidator = require('mjml-validator');

var _mjmlValidator2 = _interopRequireDefault(_mjmlValidator);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _mergeOutlookConditionnals = require('./helpers/mergeOutlookConditionnals');

var _mergeOutlookConditionnals2 = _interopRequireDefault(_mergeOutlookConditionnals);

var _skeleton = require('./helpers/skeleton');

var _skeleton2 = _interopRequireDefault(_skeleton);

var _traverseMJML = require('./helpers/traverseMJML');

var _traverseMJML2 = _interopRequireDefault(_traverseMJML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidationError = function (_Error) {
  _inherits(ValidationError, _Error);

  function ValidationError(message, errors) {
    _classCallCheck(this, ValidationError);

    var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, message));

    _this.errors = errors;
    return _this;
  }

  return ValidationError;
}(Error);

function mjml2html(mjml) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var content = '';
  var errors = [];

  if (typeof options.skeleton === 'string') {
    options.skeleton = require(options.skeleton.charAt(0) == '.' ? _path2.default.resolve(process.cwd(), options.skeleton) : options.skeleton);
  }

  var _options$beautify = options.beautify,
      beautify = _options$beautify === undefined ? false : _options$beautify,
      _options$fonts = options.fonts,
      fonts = _options$fonts === undefined ? {
    'Open Sans': 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700',
    'Droid Sans': 'https://fonts.googleapis.com/css?family=Droid+Sans:300,400,500,700',
    Lato: 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700',
    Roboto: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
    Ubuntu: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700'
  } : _options$fonts,
      keepComments = options.keepComments,
      _options$minify = options.minify,
      minify = _options$minify === undefined ? false : _options$minify,
      _options$skeleton = options.skeleton,
      skeleton = _options$skeleton === undefined ? _skeleton2.default : _options$skeleton,
      _options$validationLe = options.validationLevel,
      validationLevel = _options$validationLe === undefined ? 'soft' : _options$validationLe;


  if (typeof mjml === 'string') {
    mjml = (0, _mjmlParserXml2.default)(mjml, {
      keepComments: keepComments,
      components: _components2.default
    });
  }

  var globalDatas = {
    breakpoint: '480px',
    classes: {},
    classesDefault: {},
    defaultAttributes: {},
    fonts: fonts,
    inlineStyle: [],
    mediaQueries: {},
    preview: '',
    style: [],
    title: '',
    forceOWADesktop: (0, _lodash.get)(mjml, 'attributes.owa', "mobile") === "desktop"
  };

  var validatorOptions = {
    components: _components2.default
  };

  switch (validationLevel) {
    case 'skip':
      break;

    case 'strict':
      errors = (0, _mjmlValidator2.default)(mjml, validatorOptions);

      if (errors.length > 0) {
        throw new ValidationError('ValidationError: \n ' + errors.map(function (e) {
          return e.formattedMessage;
        }).join('\n'), errors);
      }
      break;

    case 'soft':
    default:
      errors = (0, _mjmlValidator2.default)(mjml, validatorOptions);
      break;
  }

  var mjBody = (0, _traverseMJML2.default)(mjml, function (child) {
    return child.tagName === 'mj-body';
  });
  var mjHead = (0, _traverseMJML2.default)(mjml, function (child) {
    return child.tagName === 'mj-head';
  });

  var _processing = function _processing(node, context) {
    var parseMJML = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _lodash.identity;

    if (!node) {
      return;
    }

    var component = (0, _components.initComponent)({
      name: node.tagName,
      initialDatas: _extends({}, parseMJML(node), {
        context: context
      })
    });

    if (component !== null) {
      if ('handler' in component) {
        component.handler();
      }

      if ('render' in component) {
        return component.render(); // eslint-disable-line consistent-return
      }
    }
  };
  var applyAttributes = function applyAttributes(mjml) {
    var parse = function parse(mjml) {
      var parentMjClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var attributes = mjml.attributes,
          tagName = mjml.tagName,
          children = mjml.children;

      var classes = (0, _lodash.get)(mjml.attributes, 'mj-class', '').split(' ');
      var attributesClasses = (0, _lodash.reduce)(classes, function (acc, value) {
        return _extends({}, acc, globalDatas.classes[value]);
      }, {});
      var defaultAttributesForClasses = (0, _lodash.reduce)(parentMjClass.split(' '), function (acc, value) {
        return _extends({}, acc, (0, _lodash.get)(globalDatas.classesDefault, value + '.' + tagName));
      }, {});
      var nextParentMjClass = (0, _lodash.get)(attributes, 'mj-class', parentMjClass);

      return _extends({}, mjml, {
        attributes: _extends({}, globalDatas.defaultAttributes[tagName], globalDatas.defaultAttributes['mj-all'], attributesClasses, defaultAttributesForClasses, (0, _lodash.omit)(attributes, ['mj-class'])),
        children: (0, _lodash.map)(children, function (mjml) {
          return parse(mjml, nextParentMjClass);
        })
      });
    };

    return parse(mjml);
  };

  var bodyHelpers = {
    addMediaQuery: function addMediaQuery(className, _ref) {
      var parsedWidth = _ref.parsedWidth,
          unit = _ref.unit;

      globalDatas.mediaQueries[className] = '{ width:' + parsedWidth + unit + ' !important; }';
    },

    processing: function processing(node, context) {
      return _processing(node, context, applyAttributes);
    }
  };

  var headHelpers = {
    add: function add(attr) {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      if (Array.isArray(globalDatas[attr])) {
        var _globalDatas$attr;

        (_globalDatas$attr = globalDatas[attr]).push.apply(_globalDatas$attr, _toConsumableArray(params));
      } else if (Object.prototype.hasOwnProperty.call(globalDatas, attr)) {
        if (params.length > 1) {
          globalDatas[attr][params[0]] = params[1];
        } else {
          globalDatas[attr] = params[0];
        }
      } else {
        throw Error('An mj-head element add an unkown head attribute : ' + attr + ' with params ' + (Array.isArray(params) ? params.join('') : params));
      }
    }
  };

  _processing(mjHead, headHelpers);

  content = _processing(mjBody, bodyHelpers, applyAttributes);

  if (globalDatas.inlineStyle.length > 0) {
    content = (0, _juice2.default)(content, {
      applyStyleTags: false,
      extraCss: globalDatas.inlineStyle.join(''),
      insertPreservedExtraCss: false,
      removeStyleTags: false
    });
  }

  content = skeleton(_extends({
    content: content
  }, globalDatas));

  content = beautify ? (0, _jsBeautify.html)(content, {
    indent_size: 2,
    wrap_attributes_indent_size: 2,
    max_preserve_newline: 0,
    preserve_newlines: false
  }) : content;

  content = minify ? (0, _htmlMinifier.minify)(content, {
    collapseWhitespace: true,
    minifyCSS: true,
    removeEmptyAttributes: true
  }) : content;

  content = (0, _mergeOutlookConditionnals2.default)(content);

  return {
    html: content,
    errors: errors
  };
}

exports.components = _components2.default;
exports.initComponent = _components.initComponent;
exports.registerComponent = _components.registerComponent;