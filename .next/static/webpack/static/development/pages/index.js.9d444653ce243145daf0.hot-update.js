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
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_13__["VerticalMenu"], {
    pad: "xxsmall",
    activeItem: {
      id: "home"
    },
    items: [{
      id: "main",
      label: "NAVIGATION",
      items: [{
        id: "home",
        label: "HOME",
        href: "/"
      }, {
        id: "register",
        label: "REGISTER",
        href: "/register"
      }, {
        id: "login",
        label: "LOGIN",
        href: "/login"
      }]
    }, {
      id: "items",
      label: "ITEMS",
      items: [{
        id: "allitems",
        label: "ALL ITEMS",
        href: "/items"
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1435639402",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");h1.jsx-1435639402{font-family:\"Roboto\",sans-serif;font-weight:bold;}body.jsx-1435639402{font-family:\"Roboto\",sans-serif;}ul.jsx-1435639402{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zanVudGlsbGEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdTLEFBRXdFLEFBRzFCLEFBS0EsQUFHWCxzQkFDWCxVQVJNLEFBS25CLENBSUEsZ0JBUkEiLCJmaWxlIjoiL1VzZXJzL3NqdW50aWxsYS9Eb2N1bWVudHMvZGV2bGVhZ3VlL2NvbnN1bWUtbW9yZS1zdHVmZi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9yZWdpc3RlclwiO1xuaW1wb3J0IEFkZEl0ZW0gZnJvbSBcIi4uL2l0ZW1Gb3JtXCI7XG5pbXBvcnQgSXRlbXMgZnJvbSBcIi4uL2l0ZW1zXCI7XG5pbXBvcnQgVXNlckl0ZW1zIGZyb20gXCIuLi91c2VyaXRlbXNcIjtcbmltcG9ydCBJbmRleCBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vbG9naW5cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgR3JvbW1ldCxcbiAgQW5jaG9yLFxuICBCb3gsXG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIERyb3BCdXR0b24sXG4gIFRhYnMsXG4gIFRhYixcbiAgTGF5ZXIsXG4gIEJ1dHRvbixcbiAgRm9ybUZpZWxkLFxuICBUZXh0SW5wdXQsXG4gIFNlbGVjdCxcbiAgVGV4dEFyZWEsXG4gIG9uQ2xpY2tPdXRzaWRlXG59IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgeyBkYXJrIH0gZnJvbSBcImdyb21tZXQvdGhlbWVzXCI7XG5pbXBvcnQgeyBWZXJ0aWNhbE1lbnUgfSBmcm9tIFwiZ3JvbW1ldC1jb250cm9sc1wiO1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNSxcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiXG59O1xuXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbiAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuICAgIDxBbmNob3IgY29sb3I9XCJuZXV0cmFsLTJcIj57cHJvcHMudGl0bGV9PC9BbmNob3I+XG4gIDwvTGluaz5cbik7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPEdyb21tZXQgdGhlbWU9e2Rhcmt9PlxuICAgIDxCb3ggZml0PVwiY292ZXJcIiBwYWQ9XCJzbWFsbFwiPlxuICAgICAgey8qIFRBQlMgT1BUSU9OICovfVxuICAgICAgey8qIDxUYWJzPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkhPTUVcIiAvPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkFMTCBJVEVNU1wiPlxuICAgICAgICAgICAgICAgIDxJdGVtcyAvPlxuICAgICAgICAgICAgPC9UYWI+XG5cbiAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJBREQgSVRFTVwiPlxuICAgICAgICAgICAgICAgIDxBZGRJdGVtIC8+XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJMT0dJTlwiPlxuICAgICAgICAgICAgICAgIDxMb2dpbiAvPlxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiUkVHSVNURVJcIj5cbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIlVTRVIgSVRFTVNcIj5cbiAgICAgICAgICAgICAgICA8VXNlckl0ZW1zIC8+XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgPC9UYWJzPiAqL31cblxuICAgICAgPFZlcnRpY2FsTWVudVxuICAgICAgICBwYWQ9XCJ4eHNtYWxsXCJcbiAgICAgICAgYWN0aXZlSXRlbT17eyBpZDogXCJob21lXCIgfX1cbiAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJtYWluXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJOQVZJR0FUSU9OXCIsXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiSE9NRVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJyZWdpc3RlclwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJFR0lTVEVSXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJMT0dJTlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL2xvZ2luXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiaXRlbXNcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIklURU1TXCIsXG4gICAgICAgICAgICBpdGVtczogW3sgaWQ6IFwiYWxsaXRlbXNcIiwgbGFiZWw6IFwiQUxMIElURU1TXCIsIGhyZWY6IFwiL2l0ZW1zXCIgfV1cbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAvPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIik7XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQm94PlxuICA8L0dyb21tZXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.9d444653ce243145daf0.hot-update.js.map