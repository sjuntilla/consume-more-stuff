webpackHotUpdate("static/development/pages/items.js",{

/***/ "./node_modules/grommet/themes/dark.js":
/*!*********************************************!*\
  !*** ./node_modules/grommet/themes/dark.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dark = void 0;

var _polished = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var _colors = __webpack_require__(/*! ../utils/colors */ "./node_modules/grommet/utils/colors.js");

var accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var backgroundColor = '#111111';
var colors = {
  active: (0, _polished.rgba)(102, 102, 102, 0.5),
  background: backgroundColor,
  black: '#000000',
  brand: '#FD6FFF',
  control: {
    dark: '#FFCA58',
    light: '#403216'
  },
  focus: '#FFCA58',
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  placeholder: '#AAAAAA',
  text: {
    dark: '#eeeeee',
    light: '#444444'
  },
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});
var dark = (0, _object.deepFreeze)({
  global: {
    colors: colors,
    drop: {
      background: '#333333'
    },
    focus: {
      border: {
        color: (0, _styledComponents.css)(["", ";"], function (props) {
          return (0, _colors.normalizeColor)('focus', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: 'Arial'
    },
    input: {
      weight: 700
    }
  },
  anchor: {
    color: 'control'
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: (0, _polished.rgba)(48, 48, 48, 0.5)
    }
  }
});
exports.dark = dark;

/***/ }),

/***/ "./node_modules/grommet/themes/grommet.js":
/*!************************************************!*\
  !*** ./node_modules/grommet/themes/grommet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.grommet = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var grommet = (0, _object.deepFreeze)({
  global: {
    colors: {
      background: '#ffffff'
    },
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",  "Helvetica Neue", Arial, sans-serif,  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  },
  button: {
    extend: (0, _styledComponents.css)(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});
exports.grommet = grommet;

/***/ }),

/***/ "./node_modules/grommet/themes/index.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/themes/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dark = exports.grommet = exports.generate = exports.base = void 0;

var _base = __webpack_require__(/*! ./base */ "./node_modules/grommet/themes/base.js");

exports.base = _base.base;
exports.generate = _base.generate;

var _grommet = __webpack_require__(/*! ./grommet */ "./node_modules/grommet/themes/grommet.js");

exports.grommet = _grommet.grommet;

var _dark = __webpack_require__(/*! ./dark */ "./node_modules/grommet/themes/dark.js");

exports.dark = _dark.dark;

/***/ }),

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_themes_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet/themes/base */ "./node_modules/grommet/themes/base.js");
/* harmony import */ var grommet_themes_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_themes_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/utils */ "./node_modules/grommet/utils/index.js");
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_utils__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js";






var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    margin: {
      top: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "items"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=items.js.e94ed86641ca2db77de5.hot-update.js.map