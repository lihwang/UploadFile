(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./app/component/index/index.jsx":
/*!***************************************!*\
  !*** ./app/component/index/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd-mobile/lib/button */ "./node_modules/antd-mobile/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd-mobile/lib/button/style */ "./node_modules/antd-mobile/lib/button/style/index.js");

__webpack_require__(/*! ../../public/css/index */ "./app/public/css/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Index: {
        displayName: 'Index'
    }
};

var _UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/lichengjie/Desktop/practice/UploadFile/app/component/index/index.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/lichengjie/Desktop/practice/UploadFile/app/component/index/index.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformHmrLibIndexJs2(_UsersLichengjieDesktopPracticeUploadFileNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Index = _wrapComponent('Index')(function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                { className: 'cont' },
                _react3.default.createElement(
                    'div',
                    { className: 'index' },
                    '\u9019\u88E1\u662F\u9996\u9801',
                    _react3.default.createElement(_button2.default, null)
                )
            );
        }
    }]);

    return Index;
}(_react3.default.Component));

exports.default = Index;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./app/public/css/index.less":
/*!***********************************!*\
  !*** ./app/public/css/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/postcss-loader/lib?sourceMap!!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./index.less */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?!./app/public/css/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/postcss-loader/lib?sourceMap!!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./index.less */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?!./app/public/css/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader?sourceMap!../../../node_modules/postcss-loader/lib?sourceMap!!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./index.less */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?!./app/public/css/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/public/img/logo.png":
/*!*********************************!*\
  !*** ./app/public/img/logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resource/logo.png";

/***/ }),

/***/ "./entryBuild/index.js":
/*!*****************************!*\
  !*** ./entryBuild/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(/*! ../app/component/index/index.jsx */ "./app/component/index/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _Header = __webpack_require__(/*! ../app/component/common/Header */ "./app/component/common/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ../app/component/common/Footer */ "./app/component/common/Footer.jsx");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render([_react2.default.createElement(_Header2.default, { key: 'Header' }), _react2.default.createElement(_index2.default, { key: 'Index' }), _react2.default.createElement(_Footer2.default, { key: 'Footer' })], document.getElementById('app'));

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/postcss-loader/lib/index.js?sourceMap!./node_modules/less-loader/dist/cjs.js?!./app/public/css/index.less":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/postcss-loader/lib?sourceMap!./node_modules/less-loader/dist/cjs.js??ref--6-3!./app/public/css/index.less ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".cont .top {\n  color: #FF9302;\n}\n.cont .bottom {\n  color: #F00000;\n}\n.cont .logo {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-image: url(" + escape(__webpack_require__(/*! ../img/logo.png */ "./app/public/img/logo.png")) + ");\n  background-size: contain;\n}\n.index {\n  color: brown;\n}\n", "", {"version":3,"sources":["/Users/lichengjie/Desktop/practice/UploadFile/app/public/css/index.less"],"names":[],"mappings":"AAAA;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,gDAAyC;EACzC,yBAAyB;CAC1B;AACD;EACE,aAAa;CACd","file":"index.less","sourcesContent":[".cont .top {\n  color: #FF9302;\n}\n.cont .bottom {\n  color: #F00000;\n}\n.cont .logo {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-image: url(\"../img/logo.png\");\n  background-size: contain;\n}\n.index {\n  color: brown;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

},[["./entryBuild/index.js","manifest","common","vendor"]]]);
//# sourceMappingURL=index.js.map