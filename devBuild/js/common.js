(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./app/component/common/Footer.jsx":
/*!*****************************************!*\
  !*** ./app/component/common/Footer.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Footer = function Footer() {\n    return _react2.default.createElement(\n        \"div\",\n        { className: \"bottom\" },\n        \"\\u9019\\u662F\\u5E95\\u90E8\"\n    );\n};\n\nexports.default = Footer;\n\n//# sourceURL=webpack:///./app/component/common/Footer.jsx?");

/***/ }),

/***/ "./app/component/common/Header.jsx":
/*!*****************************************!*\
  !*** ./app/component/common/Header.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../../public/css/common.less */ \"./app/public/css/common.less\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n    return _react2.default.createElement(\n        'div',\n        { className: 'top' },\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u9019\\u88E1\\u662F\\u982D\\u90E8'\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'nav' },\n            _react2.default.createElement(\n                'a',\n                { href: '/index.html' },\n                '\\u9996\\u9875'\n            ),\n            _react2.default.createElement(\n                'a',\n                { href: '/shop.html' },\n                '\\u5546\\u57CE'\n            ),\n            _react2.default.createElement(\n                'a',\n                { href: '/demo.html' },\n                'demo'\n            )\n        )\n    );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./app/component/common/Header.jsx?");

/***/ }),

/***/ "./app/public/css/common.less":
/*!************************************!*\
  !*** ./app/public/css/common.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/postcss-loader/lib?sourceMap!../../../node_modules/less-loader/dist/cjs.js!./common.less */ \"./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js!./app/public/css/common.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"sourceMap\":true,\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(true) {\n\tmodule.hot.accept(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/postcss-loader/lib?sourceMap!../../../node_modules/less-loader/dist/cjs.js!./common.less */ \"./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js!./app/public/css/common.less\", function() {\n\t\tvar newContent = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/postcss-loader/lib?sourceMap!../../../node_modules/less-loader/dist/cjs.js!./common.less */ \"./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js!./app/public/css/common.less\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//# sourceURL=webpack:///./app/public/css/common.less?");

/***/ }),

/***/ "./app/public/img/logo.png":
/*!*********************************!*\
  !*** ./app/public/img/logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resource/logo.png\";\n\n//# sourceURL=webpack:///./app/public/img/logo.png?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js!./app/public/css/common.less":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/postcss-loader/lib?sourceMap!./node_modules/less-loader/dist/cjs.js!./app/public/css/common.less ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".cont .top {\\n  color: #FF9302;\\n}\\n.cont .bottom {\\n  color: #F00000;\\n}\\n.cont .logo {\\n  display: inline-block;\\n  width: 40px;\\n  height: 40px;\\n  background-image: url(\" + escape(__webpack_require__(/*! ../img/logo.png */ \"./app/public/img/logo.png\")) + \");\\n  background-size: contain;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/lichengjie/Desktop/practice/UploadFile/app/public/css/common.less\"],\"names\":[],\"mappings\":\"AAAA;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,gDAAyC;EACzC,yBAAyB;CAC1B\",\"file\":\"common.less\",\"sourcesContent\":[\".cont .top {\\n  color: #FF9302;\\n}\\n.cont .bottom {\\n  color: #F00000;\\n}\\n.cont .logo {\\n  display: inline-block;\\n  width: 40px;\\n  height: 40px;\\n  background-image: url(\\\"../img/logo.png\\\");\\n  background-size: contain;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/public/css/common.less?./node_modules/css-loader?sourceMap!./node_modules/postcss-loader/lib?sourceMap!./node_modules/less-loader/dist/cjs.js");

/***/ })

}]);