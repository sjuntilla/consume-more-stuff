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
/* harmony import */ var _useritems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useritems */ "./pages/useritems.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login */ "./pages/login.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_12__);
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
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.title));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_12__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    direction: "row-responsive",
    fit: "cover",
    pad: "small",
    background: "neutral-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Tab"], {
    title: "HOME",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Tab"], {
    title: "ALL ITEMS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_items__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Tab"], {
    title: "ADD ITEM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_itemForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Tab"], {
    title: "LOGIN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Tab"], {
    title: "REGISTER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_register__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1883600651",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");h1.jsx-1883600651{font-family:\"Roboto\",sans-serif;font-weight:bold;}body.jsx-1883600651{font-family:\"Roboto\",sans-serif;}ul.jsx-1883600651{background-color:#ddd;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zanVudGlsbGEvRG9jdW1lbnRzL2RldmxlYWd1ZS9jb25zdW1lLW1vcmUtc3R1ZmYvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RhLEFBRXNFLEFBRzFCLEFBS0EsQUFHWCxzQkFDWCxVQVJNLEFBS25CLENBSUEsZ0JBUkEiLCJmaWxlIjoiL1VzZXJzL3NqdW50aWxsYS9Eb2N1bWVudHMvZGV2bGVhZ3VlL2NvbnN1bWUtbW9yZS1zdHVmZi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL3JlZ2lzdGVyJztcbmltcG9ydCBBZGRJdGVtIGZyb20gJy4uL2l0ZW1Gb3JtJztcbmltcG9ydCBJdGVtcyBmcm9tICcuLi9pdGVtcyc7XG5pbXBvcnQgVXNlckl0ZW1zIGZyb20gJy4uL3VzZXJpdGVtcyc7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2xvZ2luJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyb21tZXQsIEFuY2hvciwgQm94LCBBY2NvcmRpb24sIEFjY29yZGlvblBhbmVsLCBEcm9wQnV0dG9uLCBUYWJzLCBUYWIsIExheWVyLCBCdXR0b24sIEZvcm1GaWVsZCwgVGV4dElucHV0LCBTZWxlY3QsIFRleHRBcmVhLCBvbkNsaWNrT3V0c2lkZSB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHsgZGFyayB9IGZyb20gJ2dyb21tZXQvdGhlbWVzJztcblxuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IDE1LFxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIlxufTtcblxuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4gICAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuICAgICAgICA8QW5jaG9yIGNvbG9yPVwibmV1dHJhbC0yXCI+e3Byb3BzLnRpdGxlfTwvQW5jaG9yPlxuICAgIDwvTGluaz5cbik7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8R3JvbW1ldCB0aGVtZT17ZGFya30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvdy1yZXNwb25zaXZlXCJcbiAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgIHBhZD1cInNtYWxsXCJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCJuZXV0cmFsLTNcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7LyogVEFCUyBPUFRJT04gKi99XG4gICAgICAgICAgICA8VGFicz5cbiAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiSE9NRVwiIC8+XG4gICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkFMTCBJVEVNU1wiPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbXMgLz5cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiQUREIElURU1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEFkZEl0ZW0gLz5cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiTE9HSU5cIj5cbiAgICAgICAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cIlJFR0lTVEVSXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3RlciAvPlxuICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvR3JvbW1ldD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/itemForm.js":
/*!***************************!*\
  !*** ./pages/itemForm.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");








var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/itemForm.js";



 //should only show when user is logged in

var AddItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddItem, _Component);

  function AddItem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AddItem).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value));
    });

    _this.state = {
      name: "",
      description: "",
      price: "",
      category: "" // categories: ["WELLNESS", "OFFICE", "ACCESSORIES"]

    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AddItem, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      console.log("-----> ITEM STATE", this.state);
      fetch("http://localhost:8080/api/items", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          name: this.state.name.toLowerCase(),
          description: this.state.description.toLowerCase(),
          price: this.state.price,
          category: this.state.category.toLowerCase()
        })
      }).then(function () {
        console.log("ADDED ITEM TOOOOOO ITEM LIST");
      }).catch(function (err) {
        console.log(err);
      });
    } // delete = item => {
    //   const name = this.state.name.filter(itemName => item !== itemName.name)
    //   this.setState({ name })
    // }
    // deleteItem() {
    //   fetch("http://localhost:8080/api/items", {
    //     method: "DELETE",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       name: this.state.name.toLowerCase(),
    //       description: this.state.description.toLowerCase(),
    //       price: this.state.price,
    //       category: this.state.category.toLowerCase()
    //     })
    //   })
    //     .then(() => {
    //       console.log("DEEEEEELETEDDDDDD ITEM TOOOOOO ITEM LIST");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["Layer"], {
        position: "right",
        width: "large",
        full: "vertical",
        modal: false,
        animate: "true",
        onClickOutside: this.onClose,
        onEsc: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        pad: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["FormField"], {
        onChange: this.handleChange,
        name: "name",
        label: "Product Name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["FormField"], {
        onChange: this.handleChange,
        name: "description",
        label: "Product Description",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["FormField"], {
        onChange: this.handleChange,
        name: "price",
        label: "Product Price",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["Select"], (_React$createElement = {
        placeholder: "Category",
        onChange: this.handleChange,
        value: this.state.category,
        options: ["WELLNESS", "OFFICE", "ACCESSORIES"]
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$createElement, "onChange", function onChange(_ref) {
        var option = _ref.option;
        return _this2.setState({
          category: option
        });
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$createElement, "name", "category"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$createElement, "required", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 107
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "submit",
        label: "Add Item",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "delete",
        label: "Delete Item",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }))));
    }
  }]);

  return AddItem;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddItem);

/***/ }),

/***/ "./pages/useritems.js":
/*!****************************!*\
  !*** ./pages/useritems.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet-controls */ "./node_modules/grommet-controls/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/useritems.js",
    _this = undefined;










var UserItems = function UserItems(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_9__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    key: "wrapper",
    direction: "row",
    wrap: "true",
    alignContent: "between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_8__["Card"], {
      basis: "medium",
      animation: "fadeIn",
      background: "dark-1",
      elevation: "xxsmall",
      gap: "small",
      margin: "medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_8__["Card"].CardTitle, {
      color: "neutral-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, item.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_8__["Card"].CardContent, {
      color: "dark-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, item.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "$", item.price), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item.category)));
  }))));
};

UserItems.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref2) {
    var req, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:8080/api/items");

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              items: json
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}(); //THIS ALLOWS CLIENT TO DELETE ITEMS VIA BROWSER//


removedItem = function removedItem(id) {
  var headers = {
    'Content-Type': 'application/json'
  };
  var itemData = {
    items: id
  }; // console.log("THIS IS THE CARD DATA", cardData)

  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("/kanban", {
    method: 'DELETE',
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(itemData),
    headers: headers
  }).then(function (res) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:8080/api/items').then(function (res) {
      return res.json();
    }).then(function (body) {
      _this.setState({
        items: body
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserItems);

/***/ })

})
//# sourceMappingURL=items.js.2f54e4dfa183bec9eb85.hot-update.js.map