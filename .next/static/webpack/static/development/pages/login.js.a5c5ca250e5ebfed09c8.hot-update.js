webpackHotUpdate("static/development/pages/login.js",{

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
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_12__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.title));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_12__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_13__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_14__["VerticalMenu"], {
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
        href: "/itemform"
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1435639402",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");h1.jsx-1435639402{font-family:\"Roboto\",sans-serif;font-weight:bold;}body.jsx-1435639402{font-family:\"Roboto\",sans-serif;}ul.jsx-1435639402{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zanVudGlsbGEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdTLEFBRXdFLEFBRzFCLEFBS0EsQUFHWCxzQkFDWCxVQVJNLEFBS25CLENBSUEsZ0JBUkEiLCJmaWxlIjoiL1VzZXJzL3NqdW50aWxsYS9Eb2N1bWVudHMvZGV2bGVhZ3VlL2NvbnN1bWUtbW9yZS1zdHVmZi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9yZWdpc3RlclwiO1xuaW1wb3J0IEFkZEl0ZW0gZnJvbSBcIi4uL2l0ZW1Gb3JtXCI7XG5pbXBvcnQgSXRlbXMgZnJvbSBcIi4uL2l0ZW1zXCI7XG5pbXBvcnQgVXNlckl0ZW1zIGZyb20gXCIuLi91c2VyaXRlbXNcIjtcbmltcG9ydCBJbmRleCBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vbG9naW5cIjtcbmltcG9ydCBMb2dvdXQgZnJvbSBcIi4uL2xvZ291dFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcm9tbWV0LFxuICBBbmNob3IsXG4gIEJveCxcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgRHJvcEJ1dHRvbixcbiAgVGFicyxcbiAgVGFiLFxuICBMYXllcixcbiAgQnV0dG9uLFxuICBGb3JtRmllbGQsXG4gIFRleHRJbnB1dCxcbiAgU2VsZWN0LFxuICBUZXh0QXJlYSxcbiAgb25DbGlja091dHNpZGVcbn0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCB7IGRhcmsgfSBmcm9tIFwiZ3JvbW1ldC90aGVtZXNcIjtcbmltcG9ydCB7IFZlcnRpY2FsTWVudSB9IGZyb20gXCJncm9tbWV0LWNvbnRyb2xzXCI7XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1LFxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCJcbn07XG5cbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuICA8TGluayBhcz17YC9wLyR7cHJvcHMuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4gICAgPEFuY2hvciBjb2xvcj1cIm5ldXRyYWwtMlwiPntwcm9wcy50aXRsZX08L0FuY2hvcj5cbiAgPC9MaW5rPlxuKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8R3JvbW1ldCB0aGVtZT17ZGFya30+XG4gICAgPEJveCBmaXQ9XCJjb3ZlclwiIHBhZD1cInNtYWxsXCI+XG4gICAgICB7LyogVEFCUyBPUFRJT04gKi99XG4gICAgICB7LyogPFRhYnM+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiSE9NRVwiIC8+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiQUxMIElURU1TXCI+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIC8+XG4gICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkFERCBJVEVNXCI+XG4gICAgICAgICAgICAgICAgPEFkZEl0ZW0gLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkxPR0lOXCI+XG4gICAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJSRUdJU1RFUlwiPlxuICAgICAgICAgICAgICAgIDxSZWdpc3RlciAvPlxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8VGFiIHRpdGxlPVwiVVNFUiBJVEVNU1wiPlxuICAgICAgICAgICAgICAgIDxVc2VySXRlbXMgLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICA8L1RhYnM+ICovfVxuXG4gICAgICA8VmVydGljYWxNZW51XG4gICAgICAgIHBhZD1cInh4c21hbGxcIlxuICAgICAgICBhY3RpdmVJdGVtPXt7IGlkOiBcImhvbWVcIiB9fVxuICAgICAgICBpdGVtcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIm1haW5cIixcbiAgICAgICAgICAgIGxhYmVsOiBcIk5BVklHQVRJT05cIixcblxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJIT01FXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcInVzZXJcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJQUk9GSUxFXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvdXNlcnByb2ZpbGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwicmVnaXN0ZXJcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJSRUdJU1RFUlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL3JlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImxvZ2luXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTE9HSU5cIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIi9sb2dpblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIml0ZW1zXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJJVEVNU1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBpZDogXCJhbGxpdGVtc1wiLCBsYWJlbDogXCJBTEwgSVRFTVNcIiwgaHJlZjogXCIvaXRlbXNcIiB9LFxuICAgICAgICAgICAgICB7IGlkOiBcImFkZFwiLCBsYWJlbDogXCJBREQgSVRFTVwiLCBocmVmOiBcIi9pdGVtZm9ybVwiIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAvPlxuICAgICAgPExvZ291dCAvPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIik7XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQm94PlxuICA8L0dyb21tZXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=login.js.a5c5ca250e5ebfed09c8.hot-update.js.map