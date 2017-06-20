"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 70 60" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Menu - NG"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M33.69 37c-1.46 0-4.87-2.69-3.91-4h-9.5c1 1.35-2.44 4-3.91 4L25 40.89z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M35.94 37.73l-21 21A40 40 0 0 1 0 51.22a27.09 27.09 0 0 1 18-14.78 13.06 13.06 0 0 0 7 2.1 13.29 13.29 0 0 0 7.05-2.1 28.24 28.24 0 0 1 3.89 1.29z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M50.1 51.22a40.19 40.19 0 0 1-35.1 7.5l21-21a26.86 26.86 0 0 1 14.1 13.5z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M25 0C16.52 0 9.61 7.66 9.61 17.11a18.12 18.12 0 0 0 4 11.46l22.9-22.92A14.78 14.78 0 0 0 25 0z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M13.58 28.58A14.78 14.78 0 0 0 25 34.23c8.53 0 15.44-7.66 15.44-17.11a18.12 18.12 0 0 0-4-11.46z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M62.47 28.23c-.67 0-2.23-1.24-1.79-1.85h-4.37c.44.62-1.12 1.85-1.79 1.85l4 1.77z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M63.5 28.55l-9.64 9.64A18.35 18.35 0 0 1 47 34.74 12.44 12.44 0 0 1 55.26 28a6 6 0 0 0 3.24 1 6.1 6.1 0 0 0 3.24-1 13 13 0 0 1 1.76.55z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M70 34.74a18.45 18.45 0 0 1-16.13 3.44l9.64-9.64a12.33 12.33 0 0 1 6.49 6.2z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M58.5 11.23c-3.92 0-7.09 3.52-7.09 7.86a8.32 8.32 0 0 0 1.83 5.26l10.52-10.53a6.79 6.79 0 0 0-5.26-2.59z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M53.24 24.35a6.79 6.79 0 0 0 5.26 2.59c3.92 0 7.09-3.52 7.09-7.86a8.32 8.32 0 0 0-1.83-5.26z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-name-generator.svg.react.js.map