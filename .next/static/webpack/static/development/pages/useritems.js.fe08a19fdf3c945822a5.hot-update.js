webpackHotUpdate("static/development/pages/useritems.js",{

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
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../logout */ "./pages/logout.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var grommet_controls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! grommet-controls */ "./node_modules/grommet-controls/es6/index.js");
var _jsxFileName = "/Users/djavancackley/Documents/devleague/consume-more-stuff/pages/components/header.js";
















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
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_12__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.title));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_12__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_13__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_14__["VerticalMenu"], {
    pad: "xxsmall",
    collapsible: false,
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
        id: "user",
        label: "PROFILE",
        href: "/userprofile"
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
      }, {
        id: "add",
        label: "ADD ITEM",
        href: "/itemForm"
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1435639402",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");h1.jsx-1435639402{font-family:\"Roboto\",sans-serif;font-weight:bold;}body.jsx-1435639402{font-family:\"Roboto\",sans-serif;}ul.jsx-1435639402{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kamF2YW5jYWNrbGV5L0RvY3VtZW50cy9kZXZsZWFndWUvY29uc3VtZS1tb3JlLXN0dWZmL3BhZ2VzL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGUyxBQUV3RSxBQUcxQixBQUtBLEFBR1gsc0JBQ1gsVUFSTSxBQUtuQixDQUlBLGdCQVJBIiwiZmlsZSI6Ii9Vc2Vycy9kamF2YW5jYWNrbGV5L0RvY3VtZW50cy9kZXZsZWFndWUvY29uc3VtZS1tb3JlLXN0dWZmL3BhZ2VzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4uL3JlZ2lzdGVyXCI7XG5pbXBvcnQgQWRkSXRlbSBmcm9tIFwiLi4vaXRlbUZvcm1cIjtcbmltcG9ydCBJdGVtcyBmcm9tIFwiLi4vaXRlbXNcIjtcbmltcG9ydCBVc2VySXRlbXMgZnJvbSBcIi4uL3VzZXJpdGVtc1wiO1xuaW1wb3J0IEluZGV4IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9sb2dpblwiO1xuaW1wb3J0IExvZ291dCBmcm9tIFwiLi4vbG9nb3V0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEdyb21tZXQsXG4gIEFuY2hvcixcbiAgQm94LFxuICBBY2NvcmRpb24sXG4gIE1lbnUsXG4gIEFjY29yZGlvblBhbmVsLFxuICBEcm9wQnV0dG9uLFxuICBUYWJzLFxuICBUYWIsXG4gIExheWVyLFxuICBCdXR0b24sXG4gIEZvcm1GaWVsZCxcbiAgVGV4dElucHV0LFxuICBTZWxlY3QsXG4gIFRleHRBcmVhLFxuICBvbkNsaWNrT3V0c2lkZVxufSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgZGFyayB9IGZyb20gXCJncm9tbWV0L3RoZW1lc1wiO1xuaW1wb3J0IHsgVmVydGljYWxNZW51IH0gZnJvbSBcImdyb21tZXQtY29udHJvbHNcIjtcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTUsXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIlxufTtcblxuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4gIDxMaW5rIGFzPXtgL3AvJHtwcm9wcy5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbiAgICA8QW5jaG9yIGNvbG9yPVwibmV1dHJhbC0yXCI+e3Byb3BzLnRpdGxlfTwvQW5jaG9yPlxuICA8L0xpbms+XG4pO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxHcm9tbWV0IHRoZW1lPXtkYXJrfT5cbiAgICA8Qm94IGZpdD1cImNvdmVyXCIgcGFkPVwic21hbGxcIj5cbiAgICAgIDxWZXJ0aWNhbE1lbnVcbiAgICAgICAgcGFkPVwieHhzbWFsbFwiXG4gICAgICAgIGNvbGxhcHNpYmxlPXtmYWxzZX1cbiAgICAgICAgYWN0aXZlSXRlbT17eyBpZDogXCJob21lXCIgfX1cbiAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJtYWluXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJOQVZJR0FUSU9OXCIsXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiSE9NRVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJ1c2VyXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUFJPRklMRVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL3VzZXJwcm9maWxlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcInJlZ2lzdGVyXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUkVHSVNURVJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJsb2dpblwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxPR0lOXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvbG9naW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJpdGVtc1wiLFxuICAgICAgICAgICAgbGFiZWw6IFwiSVRFTVNcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgaWQ6IFwiYWxsaXRlbXNcIiwgbGFiZWw6IFwiQUxMIElURU1TXCIsIGhyZWY6IFwiL2l0ZW1zXCIgfSxcbiAgICAgICAgICAgICAgeyBpZDogXCJhZGRcIiwgbGFiZWw6IFwiQUREIElURU1cIiwgaHJlZjogXCIvaXRlbUZvcm1cIiB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICAgIDxMb2dvdXQgLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0JveD5cbiAgPC9Hcm9tbWV0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/djavancackley/Documents/devleague/consume-more-stuff/pages/components/header.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=useritems.js.fe08a19fdf3c945822a5.hot-update.js.map