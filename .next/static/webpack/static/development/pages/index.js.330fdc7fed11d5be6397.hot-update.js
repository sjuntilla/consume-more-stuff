webpackHotUpdate("static/development/pages/index.js",{

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
var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js",
    _this = undefined;





var linkStyle = {
  marginRight: 15,
  textDecoration: "none"
};

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.title));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_3__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    direction: "row-responsive",
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    title: "SHOP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    title: "LOGIN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Layer"], {
    position: "right",
    full: "vertical",
    modal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "form",
    fill: "vertical",
    overflow: "auto",
    width: "medium",
    pad: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: false,
    direction: "row",
    justify: "between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    level: 2,
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: "grow",
    overflow: "auto",
    pad: {
      vertical: "medium"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    label: "First",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    label: "Second",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    options: ["one", "two", "three", "four", "five", "six", "seven", "eight"],
    value: select,
    onSearch: function onSearch() {},
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return _this.setState({
        select: option
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    label: "Third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: false,
    as: "footer",
    align: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.330fdc7fed11d5be6397.hot-update.js.map