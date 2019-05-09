webpackHotUpdate("static/development/pages/items.js",{

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./pages/components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register */ "./pages/register.js");
/* harmony import */ var _itemForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../itemForm */ "./pages/itemForm.js");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../items */ "./pages/items.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js";












var linkStyle = {
  marginRight: 15,
  textDecoration: "none"
};

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.title));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_10__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    direction: "row-responsive",
    fit: "cover",
    pad: "small",
    background: "neutral-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "HOME",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "ALL ITEMS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Layer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_items__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "ADD ITEM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_itemForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "LOGIN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "REGISTER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_register__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "36998399",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto');h1.jsx-36998399{font-family:'Roboto',sans-serif;font-weight:bold;}body.jsx-36998399{font-family:'Roboto',sans-serif;}ul.jsx-36998399{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zanVudGlsbGEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURZLEFBQzhELEFBR2xCLEFBS0UsQUFHYixzQkFDWCxVQVJNLEFBS1gsQ0FJUixnQkFSQSIsImZpbGUiOiIvVXNlcnMvc2p1bnRpbGxhL0RvY3VtZW50cy9kZXZsZWFndWUvY29uc3VtZS1tb3JlLXN0dWZmL3BhZ2VzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vcmVnaXN0ZXInO1xuaW1wb3J0IEFkZEl0ZW0gZnJvbSAnLi4vaXRlbUZvcm0nO1xuaW1wb3J0IEl0ZW1zIGZyb20gJy4uL2l0ZW1zJztcbmltcG9ydCBJbmRleCBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcm9tbWV0LCBBbmNob3IsIEJveCwgQWNjb3JkaW9uLCBBY2NvcmRpb25QYW5lbCwgRHJvcEJ1dHRvbiwgVGFicywgVGFiLCBMYXllciwgQnV0dG9uLCBGb3JtRmllbGQsIFRleHRJbnB1dCwgU2VsZWN0LCBUZXh0QXJlYSwgb25DbGlja091dHNpZGUgfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7IGRhcmsgfSBmcm9tICdncm9tbWV0L3RoZW1lcyc7XG5cblxuY29uc3QgbGlua1N0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiAxNSxcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCJcbn1cblxuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4gICAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuICAgICAgICA8QW5jaG9yIGNvbG9yPVwibmV1dHJhbC0yXCI+e3Byb3BzLnRpdGxlfTwvQW5jaG9yPjwvTGluaz5cbilcblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPEdyb21tZXQgdGhlbWU9e2Rhcmt9PlxuXG4gICAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93LXJlc3BvbnNpdmVcIiBmaXQ9XCJjb3ZlclwiIHBhZD1cInNtYWxsXCIgYmFja2dyb3VuZD1cIm5ldXRyYWwtM1wiPlxuXG4gICAgICAgICAgICB7LyogVEFCUyBPUFRJT04gKi99XG4gICAgICAgICAgICA8VGFicz5cbiAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiSE9NRVwiIC8+XG4gICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkFMTCBJVEVNU1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGF5ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbXMgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiQUREIElURU1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEFkZEl0ZW0gLz5cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiTE9HSU5cIj5cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiUkVHSVNURVJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJlZ2lzdGVyIC8+XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8L1RhYnM+XG5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICBgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8nKTtcbiAgICAgICAgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9YFxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9Hcm9tbWV0ID5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=items.js.0c650705cf1c489e61f3.hot-update.js.map