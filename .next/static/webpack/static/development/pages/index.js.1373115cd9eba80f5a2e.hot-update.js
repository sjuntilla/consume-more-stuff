webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _useritems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useritems */ "./pages/useritems.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login */ "./pages/login.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var grommet_controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! grommet-controls */ "./node_modules/grommet-controls/es6/index.js");
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
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, props.title));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_12__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    direction: "row-responsive",
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_13__["VerticalMenu"], {
    items: [{
      id: 'home',
      label: 'HOME',
      href: '/'
    }, {
      id: 'items',
      label: 'ITEMS',
      href: '/items'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1883600651",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");h1.jsx-1883600651{font-family:\"Roboto\",sans-serif;font-weight:bold;}body.jsx-1883600651{font-family:\"Roboto\",sans-serif;}ul.jsx-1883600651{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zanVudGlsbGEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZhLEFBRXNFLEFBRzFCLEFBS0EsQUFHWCxzQkFDWCxVQVJNLEFBS25CLENBSUEsZ0JBUkEiLCJmaWxlIjoiL1VzZXJzL3NqdW50aWxsYS9Eb2N1bWVudHMvZGV2bGVhZ3VlL2NvbnN1bWUtbW9yZS1zdHVmZi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9yZWdpc3RlclwiO1xuaW1wb3J0IEFkZEl0ZW0gZnJvbSBcIi4uL2l0ZW1Gb3JtXCI7XG5pbXBvcnQgSXRlbXMgZnJvbSBcIi4uL2l0ZW1zXCI7XG5pbXBvcnQgVXNlckl0ZW1zIGZyb20gXCIuLi91c2VyaXRlbXNcIjtcbmltcG9ydCBJbmRleCBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vbG9naW5cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBHcm9tbWV0LFxuICAgIEFuY2hvcixcbiAgICBCb3gsXG4gICAgQWNjb3JkaW9uLFxuICAgIEFjY29yZGlvblBhbmVsLFxuICAgIERyb3BCdXR0b24sXG4gICAgVGFicyxcbiAgICBUYWIsXG4gICAgTGF5ZXIsXG4gICAgQnV0dG9uLFxuICAgIEZvcm1GaWVsZCxcbiAgICBUZXh0SW5wdXQsXG4gICAgU2VsZWN0LFxuICAgIFRleHRBcmVhLFxuICAgIG9uQ2xpY2tPdXRzaWRlXG59IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgeyBkYXJrIH0gZnJvbSBcImdyb21tZXQvdGhlbWVzXCI7XG5pbXBvcnQgeyBWZXJ0aWNhbE1lbnUgfSBmcm9tIFwiZ3JvbW1ldC1jb250cm9sc1wiO1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IDE1LFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIlxufTtcblxuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4gICAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuICAgICAgICA8QW5jaG9yIGNvbG9yPVwibmV1dHJhbC0yXCI+e3Byb3BzLnRpdGxlfTwvQW5jaG9yPlxuICAgIDwvTGluaz5cbik7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8R3JvbW1ldCB0aGVtZT17ZGFya30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvdy1yZXNwb25zaXZlXCJcbiAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgIHBhZD1cInNtYWxsXCJcbiAgICAgICAgLz5cblxuICAgICAgICB7LyogVEFCUyBPUFRJT04gKi99XG4gICAgICAgIHsvKiA8VGFicz5cbiAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJIT01FXCIgLz5cbiAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJBTEwgSVRFTVNcIj5cbiAgICAgICAgICAgICAgICA8SXRlbXMgLz5cbiAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiQUREIElURU1cIj5cbiAgICAgICAgICAgICAgICA8QWRkSXRlbSAvPlxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiTE9HSU5cIj5cbiAgICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIlJFR0lTVEVSXCI+XG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyIC8+XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJVU0VSIElURU1TXCI+XG4gICAgICAgICAgICAgICAgPFVzZXJJdGVtcyAvPlxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgIDwvVGFicz4gKi99XG5cbiAgICAgICAgPFZlcnRpY2FsTWVudVxuICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSE9NRScsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdJVEVNUycsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvaXRlbXMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgLz5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvR3JvbW1ldD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.1373115cd9eba80f5a2e.hot-update.js.map