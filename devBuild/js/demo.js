(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./app/component/demo/index.jsx":
/*!**************************************!*\
  !*** ./app/component/demo/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Index: {
        displayName: "Index"
    }
};

var _UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "/Users/lichengjie/Desktop/practice/UploadFile/app/component/demo/index.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "/Users/lichengjie/Desktop/practice/UploadFile/app/component/demo/index.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformHmrLibIndexJs2(_UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Index = _wrapComponent("Index")(function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: "render",
        value: function render() {
            return _react3.default.createElement(
                "div",
                { className: "cont" },
                _react3.default.createElement(
                    "div",
                    { className: "index" },
                    "\u8FD9\u91CC\u662Fdemo"
                )
            );
        }
    }]);

    return Index;
}(_react3.default.Component));

exports.default = Index;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./entryBuild/demo.js":
/*!****************************!*\
  !*** ./entryBuild/demo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(/*! ../app/component/demo/index.jsx */ "./app/component/demo/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _Header = __webpack_require__(/*! ../app/component/common/Header */ "./app/component/common/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ../app/component/common/Footer */ "./app/component/common/Footer.jsx");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render([_react2.default.createElement(_Header2.default, { key: 'Header' }), _react2.default.createElement(_index2.default, { key: 'Index' }), _react2.default.createElement(_Footer2.default, { key: 'Footer' })], document.getElementById('app'));

/***/ })

},[["./entryBuild/demo.js","manifest","common","vendor"]]]);
//# sourceMappingURL=demo.js.map