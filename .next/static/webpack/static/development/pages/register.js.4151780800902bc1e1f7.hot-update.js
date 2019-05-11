webpackHotUpdate("static/development/pages/register.js",{

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
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_13__["VerticalMenu"], {
    width: "medium",
    items: [{
      id: 'main',
      label: 'NAVIGATION',
      items: [{
        id: 'home',
        label: 'HOME',
        href: '/'
      }, {
        id: 'items',
        label: 'ITEMS',
        href: '/items'
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1883600651",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");h1.jsx-1883600651{font-family:\"Roboto\",sans-serif;font-weight:bold;}body.jsx-1883600651{font-family:\"Roboto\",sans-serif;}ul.jsx-1883600651{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zanVudGlsbGEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZpQixBQUVzRSxBQUcxQixBQUtBLEFBR1gsc0JBQ1gsVUFSTSxBQUtuQixDQUlBLGdCQVJBIiwiZmlsZSI6Ii9Vc2Vycy9zanVudGlsbGEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vcmVnaXN0ZXJcIjtcbmltcG9ydCBBZGRJdGVtIGZyb20gXCIuLi9pdGVtRm9ybVwiO1xuaW1wb3J0IEl0ZW1zIGZyb20gXCIuLi9pdGVtc1wiO1xuaW1wb3J0IFVzZXJJdGVtcyBmcm9tIFwiLi4vdXNlcml0ZW1zXCI7XG5pbXBvcnQgSW5kZXggZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2xvZ2luXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgR3JvbW1ldCxcbiAgICBBbmNob3IsXG4gICAgQm94LFxuICAgIEFjY29yZGlvbixcbiAgICBBY2NvcmRpb25QYW5lbCxcbiAgICBEcm9wQnV0dG9uLFxuICAgIFRhYnMsXG4gICAgVGFiLFxuICAgIExheWVyLFxuICAgIEJ1dHRvbixcbiAgICBGb3JtRmllbGQsXG4gICAgVGV4dElucHV0LFxuICAgIFNlbGVjdCxcbiAgICBUZXh0QXJlYSxcbiAgICBvbkNsaWNrT3V0c2lkZVxufSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgZGFyayB9IGZyb20gXCJncm9tbWV0L3RoZW1lc1wiO1xuaW1wb3J0IHsgVmVydGljYWxNZW51IH0gZnJvbSBcImdyb21tZXQtY29udHJvbHNcIjtcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiAxNSxcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCJcbn07XG5cbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuICAgIDxMaW5rIGFzPXtgL3AvJHtwcm9wcy5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbiAgICAgICAgPEFuY2hvciBjb2xvcj1cIm5ldXRyYWwtMlwiPntwcm9wcy50aXRsZX08L0FuY2hvcj5cbiAgICA8L0xpbms+XG4pO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPEdyb21tZXQgdGhlbWU9e2Rhcmt9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBwYWQ9XCJzbWFsbFwiPlxuXG4gICAgICAgICAgICB7LyogVEFCUyBPUFRJT04gKi99XG4gICAgICAgICAgICB7LyogPFRhYnM+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiSE9NRVwiIC8+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiQUxMIElURU1TXCI+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIC8+XG4gICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkFERCBJVEVNXCI+XG4gICAgICAgICAgICAgICAgPEFkZEl0ZW0gLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkxPR0lOXCI+XG4gICAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJSRUdJU1RFUlwiPlxuICAgICAgICAgICAgICAgIDxSZWdpc3RlciAvPlxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiVVNFUiBJVEVNU1wiPlxuICAgICAgICAgICAgICAgIDxVc2VySXRlbXMgLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICA8L1RhYnM+ICovfVxuXG4gICAgICAgICAgICA8VmVydGljYWxNZW51IHdpZHRoPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ21haW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOQVZJR0FUSU9OJyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdob21lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hPTUUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0lURU1TJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2l0ZW1zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvQm94PlxuICAgIDwvR3JvbW1ldD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=register.js.4151780800902bc1e1f7.hot-update.js.map