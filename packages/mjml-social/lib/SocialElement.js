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

var defaultSocialNetworks = {
  facebook: {
    'share-url': 'https://www.facebook.com/sharer/sharer.php?u=[[URL]]',
    'background-color': '#3b5998',
    src: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png'
  },
  twitter: {
    'share-url': 'https://twitter.com/home?status=[[URL]]',
    'background-color': '#55acee',
    src: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png'
  },
  google: {
    'share-url': 'https://plus.google.com/share?url=[[URL]]',
    'background-color': '#dc4e41',
    src: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/google-plus.png'
  },
  pinterest: {
    'share-url': 'https://pinterest.com/pin/create/button/?url=[[URL]]&media=&description=',
    'background-color': '#bd081c',
    src: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/pinterest.png'
  },
  linkedin: {
    'share-url': 'https://www.linkedin.com/shareArticle?mini=true&url=[[URL]]&title=&summary=&source=',
    'background-color': '#0077b5',
    src: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png'
  },
  instagram: {
    'background-color': '#3f729b',
    src: 'https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png'
  }
};

var MjSocialElement = (_temp = _class = function (_BodyComponent) {
  _inherits(MjSocialElement, _BodyComponent);

  function MjSocialElement() {
    _classCallCheck(this, MjSocialElement);

    return _possibleConstructorReturn(this, (MjSocialElement.__proto__ || Object.getPrototypeOf(MjSocialElement)).apply(this, arguments));
  }

  _createClass(MjSocialElement, [{
    key: 'getStyles',
    value: function getStyles() {
      var _getSocialAttributes = this.getSocialAttributes(),
          iconSize = _getSocialAttributes['icon-size'],
          backgroundColor = _getSocialAttributes['background-color'];

      return {
        td: {
          padding: this.getAttribute('inner-padding')
        },
        table: {
          background: backgroundColor,
          'border-radius': this.getAttribute('border-radius'),
          width: iconSize
        },
        icon: {
          width: iconSize,
          height: iconSize
        },
        img: {
          'border-radius': this.getAttribute('border-radius')
        },
        text: {
          color: this.getAttribute('color'),
          'font-size': this.getAttribute('font-size'),
          'font-family': this.getAttribute('font-family'),
          'line-height': this.getAttribute('line-height'),
          'text-decoration': this.getAttribute('text-decoration')
        }
      };
    }
  }, {
    key: 'getSocialAttributes',
    value: function getSocialAttributes() {
      var _this2 = this;

      var socialNetwork = _extends({}, defaultSocialNetworks[this.getAttribute('name')]);

      if (socialNetwork['share-url']) {
        socialNetwork.href = socialNetwork['share-url'].replace('[[URL]]', this.getAttribute('href'));
      }

      return ['icon-size', 'href', 'src', 'background-color'].reduce(function (r, attr) {
        r[attr] = socialNetwork[attr] || _this2.getAttribute(attr);

        return r;
      }, {});
    }
  }, {
    key: 'render',
    value: function render() {
      var _getSocialAttributes2 = this.getSocialAttributes(),
          src = _getSocialAttributes2.src,
          href = _getSocialAttributes2.href,
          iconSize = _getSocialAttributes2['icon-size'];

      return '\n      <tr\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class')
      }) + '\n      >\n        <td ' + this.htmlAttributes({ style: 'td' }) + '>\n          <table\n            ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n          >\n            <tr>\n              <td ' + this.htmlAttributes({ style: 'icon' }) + '>\n                <a ' + this.htmlAttributes({
        href: href,
        rel: this.getAttribute('rel')
      }) + '>\n                    <img\n                      ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        height: parseInt(iconSize, 10),
        src: src,
        style: 'img',
        width: parseInt(iconSize, 10)
      }) + '\n                    />\n                  </a>\n                </td>\n                ' + (this.getContent() ? '\n                  <td>\n                    <a\n                      ' + this.htmlAttributes({
        href: href,
        style: 'text',
        rel: this.getAttribute('rel')
      }) + '>\n                      ' + this.getContent() + '\n                    </a>\n                  </td>\n                  ' : '') + '\n              </tr>\n          </table>\n        </td>\n      </tr>\n    ';
    }
  }]);

  return MjSocialElement;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,center,right)',
  color: 'color',
  'border-radius': 'unit(px)',
  'font-family': 'string',
  'font-size': 'unit(px,%)',
  'font-style': 'string',
  'font-weight': 'string',
  'line-height': 'unit(px,%)',
  name: 'string',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  target: 'string',
  'text-decoration': 'string',
  width: 'integer'
}, _class.defaultAttributes = {
  align: 'left',
  color: '#000',
  'border-radius': '3px',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '22px',
  padding: '10px 25px',
  target: '_blank',
  'text-decoration': 'none',
  width: '100%'
}, _temp);
exports.default = MjSocialElement;
module.exports = exports['default'];