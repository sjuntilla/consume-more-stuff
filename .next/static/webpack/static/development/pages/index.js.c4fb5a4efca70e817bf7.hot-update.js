webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/search.js":
/*!************************************!*\
  !*** ./pages/components/search.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/sylvia/Documents/devleague/consume-more-stuff/pages/components/search.js";



var Search =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      query: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function () {
      _this.setState({
        query: _this.search.value
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        placeholder: "Search Item..",
        ref: function ref(input) {
          return _this2.search = input;
        },
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.state.query));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search */ "./pages/components/search.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/generator */ "./node_modules/@babel/generator/lib/index.js");
/* harmony import */ var _babel_generator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_generator__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/sylvia/Documents/devleague/consume-more-stuff/pages/index.js";









var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Anchor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.title));
};

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_6__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    key: "banner",
    pad: "large",
    animation: "fadeIn",
    background: {
      image: "url(https://i.imgur.com/JnPr8Hs.png)",
      size: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    key: "heading",
    elevation: "xxsmall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    color: "accent-3",
    size: "large",
    pad: "xxsmall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "silk code.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    key: "blurb",
    pad: "xxsmall",
    height: "small",
    width: "large",
    alignSelf: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    color: "accent-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Lorem Khaled Ipsum is a major key to success. To be successful you\u2019ve got to work hard, to make history, simple, you\u2019ve got to make it. In life there will be road blocks but we will over come it. Life is what you make it, so let\u2019s make it. Bless up. They will try to close the door on you, just open it. Look at the sunset, life is amazing, life is beautiful, life is what you make it. Major key, don\u2019t fall for the trap, stay focused. It\u2019s the ones closest to you that want to see you fail. Congratulations, you played yourself. Find peace, life is like a water fall, you\u2019ve gotta flow.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    key: "type",
    align: "start",
    pad: "hair",
    overflow: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    color: "accent-2",
    margin: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Featured Items"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Carousel"], {
    play: "30000",
    background: "backgroundColor",
    height: "small",
    fill: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    fit: "cover",
    src: "https://i.imgur.com/W6fcu6b.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    fit: "cover",
    src: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Pomeranian_02.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    fit: "cover",
    src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.759xh;0,0&resize=480:*",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1435639402",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");h1.jsx-1435639402{font-family:\"Roboto\",sans-serif;font-weight:bold;}body.jsx-1435639402{font-family:\"Roboto\",sans-serif;}ul.jsx-1435639402{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWx2aWEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZTLEFBRXdFLEFBRzFCLEFBS0EsQUFHWCxzQkFDWCxVQVJNLEFBS25CLENBSUEsZ0JBUkEiLCJmaWxlIjoiL1VzZXJzL3N5bHZpYS9Eb2N1bWVudHMvZGV2bGVhZ3VlL2NvbnN1bWUtbW9yZS1zdHVmZi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgR3JvbW1ldCxcbiAgSGVhZGluZyxcbiAgQW5jaG9yLFxuICBNZW51LFxuICBCb3gsXG4gIFRleHQsXG4gIENsb2NrLFxuICBDYXJvdXNlbCxcbiAgSW1hZ2Vcbn0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCB7IGRhcmsgfSBmcm9tIFwiZ3JvbW1ldC90aGVtZXNcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbiAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuICAgIDxBbmNob3I+e3Byb3BzLnRpdGxlfTwvQW5jaG9yPlxuICA8L0xpbms+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JvbW1ldCB0aGVtZT17ZGFya30+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Qm94XG4gICAgICAgICAga2V5PVwiYmFubmVyXCJcbiAgICAgICAgICBwYWQ9XCJsYXJnZVwiXG4gICAgICAgICAgYW5pbWF0aW9uPVwiZmFkZUluXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kPXt7XG4gICAgICAgICAgICBpbWFnZTogXCJ1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9KblByOEhzLnBuZylcIixcbiAgICAgICAgICAgIHNpemU6IFwiY292ZXJcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IGtleT1cImhlYWRpbmdcIiBlbGV2YXRpb249XCJ4eHNtYWxsXCI+XG4gICAgICAgICAgICA8SGVhZGluZyBjb2xvcj1cImFjY2VudC0zXCIgc2l6ZT1cImxhcmdlXCIgcGFkPVwieHhzbWFsbFwiPlxuICAgICAgICAgICAgICBzaWxrIGNvZGUuXG4gICAgICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PVwiYmx1cmJcIlxuICAgICAgICAgICAgICBwYWQ9XCJ4eHNtYWxsXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwic21hbGxcIlxuICAgICAgICAgICAgICB3aWR0aD1cImxhcmdlXCJcbiAgICAgICAgICAgICAgYWxpZ25TZWxmPVwic3RhcnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImFjY2VudC00XCI+XG4gICAgICAgICAgICAgICAgTG9yZW0gS2hhbGVkIElwc3VtIGlzIGEgbWFqb3Iga2V5IHRvIHN1Y2Nlc3MuIFRvIGJlIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgICAgICB5b3XigJl2ZSBnb3QgdG8gd29yayBoYXJkLCB0byBtYWtlIGhpc3RvcnksIHNpbXBsZSwgeW914oCZdmUgZ290IHRvXG4gICAgICAgICAgICAgICAgbWFrZSBpdC4gSW4gbGlmZSB0aGVyZSB3aWxsIGJlIHJvYWQgYmxvY2tzIGJ1dCB3ZSB3aWxsIG92ZXIgY29tZVxuICAgICAgICAgICAgICAgIGl0LiBMaWZlIGlzIHdoYXQgeW91IG1ha2UgaXQsIHNvIGxldOKAmXMgbWFrZSBpdC4gQmxlc3MgdXAuIFRoZXlcbiAgICAgICAgICAgICAgICB3aWxsIHRyeSB0byBjbG9zZSB0aGUgZG9vciBvbiB5b3UsIGp1c3Qgb3BlbiBpdC4gTG9vayBhdCB0aGVcbiAgICAgICAgICAgICAgICBzdW5zZXQsIGxpZmUgaXMgYW1hemluZywgbGlmZSBpcyBiZWF1dGlmdWwsIGxpZmUgaXMgd2hhdCB5b3VcbiAgICAgICAgICAgICAgICBtYWtlIGl0LiBNYWpvciBrZXksIGRvbuKAmXQgZmFsbCBmb3IgdGhlIHRyYXAsIHN0YXkgZm9jdXNlZC4gSXTigJlzXG4gICAgICAgICAgICAgICAgdGhlIG9uZXMgY2xvc2VzdCB0byB5b3UgdGhhdCB3YW50IHRvIHNlZSB5b3UgZmFpbC5cbiAgICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMsIHlvdSBwbGF5ZWQgeW91cnNlbGYuIEZpbmQgcGVhY2UsIGxpZmUgaXMgbGlrZSBhXG4gICAgICAgICAgICAgICAgd2F0ZXIgZmFsbCwgeW914oCZdmUgZ290dGEgZmxvdy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGtleT1cInR5cGVcIiBhbGlnbj1cInN0YXJ0XCIgcGFkPVwiaGFpclwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XG4gICAgICAgICAgPEhlYWRpbmcgY29sb3I9XCJhY2NlbnQtMlwiIG1hcmdpbj1cInNtYWxsXCI+XG4gICAgICAgICAgICBGZWF0dXJlZCBJdGVtc1xuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgIHBsYXk9XCIzMDAwMFwiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwiYmFja2dyb3VuZENvbG9yXCJcbiAgICAgICAgICAgIGhlaWdodD1cInNtYWxsXCJcbiAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2UgZml0PVwiY292ZXJcIiBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL1c2ZmN1NmIucG5nXCIgLz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZDE3Zm5xOWRrejloZ2ouY2xvdWRmcm9udC5uZXQvdXBsb2Fkcy8yMDE4LzA0L1BvbWVyYW5pYW5fMDIuanBnXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2hpcHMuaGVhcnN0YXBwcy5jb20vaG1nLXByb2QuczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvY2F0LXF1b3Rlcy0xNTQzNTk5MzkyLmpwZz9jcm9wPTEuMDB4dzowLjc1OXhoOzAsMCZyZXNpemU9NDgwOipcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIik7XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvR3JvbW1ldD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/sylvia/Documents/devleague/consume-more-stuff/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c4fb5a4efca70e817bf7.hot-update.js.map