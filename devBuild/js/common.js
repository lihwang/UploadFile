(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./app/component/common/Footer.jsx":
/*!*****************************************!*\
  !*** ./app/component/common/Footer.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        "div",
        { className: "bottom" },
        "\u9019\u662F\u5E95\u90E8"
    );
};

exports.default = Footer;

/***/ }),

/***/ "./app/component/common/Header.jsx":
/*!*****************************************!*\
  !*** ./app/component/common/Header.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import '../../public/css/common';

var Header = function Header() {
    return _react2.default.createElement(
        "div",
        { className: "top" },
        _react2.default.createElement(
            "div",
            null,
            "\u9019\u88E1\u662F\u982D\u90E8"
        ),
        _react2.default.createElement(
            "div",
            { className: "nav" },
            _react2.default.createElement(
                "a",
                { href: "/index.html" },
                "\u9996\u9875"
            ),
            _react2.default.createElement(
                "a",
                { href: "/shop.html" },
                "\u5546\u57CE"
            ),
            _react2.default.createElement(
                "a",
                { href: "/demo.html" },
                "demo"
            )
        )
    );
};

exports.default = Header;

/***/ })

}]);
//# sourceMappingURL=common.js.map