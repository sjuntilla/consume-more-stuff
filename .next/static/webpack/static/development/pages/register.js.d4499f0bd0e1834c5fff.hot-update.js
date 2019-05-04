webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
var _jsxFileName = "/Users/sylvia/Documents/devleague/consume-more-stuff/pages/register.js";



function Register() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value;
      return console.log("Submit: ", value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    name: "fname",
    label: "First Name",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    name: "lname",
    label: "Last Name",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    label: "Continent",
    name: "select",
    component: grommet__WEBPACK_IMPORTED_MODULE_2__["Select"],
    options: ["North America", "South America", "Asia"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    name: "address",
    label: "Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    name: "acknowledge",
    component: grommet__WEBPACK_IMPORTED_MODULE_2__["CheckBox"],
    pad: true,
    label: "acknowledge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    name: "day",
    component: grommet__WEBPACK_IMPORTED_MODULE_2__["RadioButtonGroup"],
    pad: true,
    options: ["Tuesday", "Friday"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    label: "Submit",
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
} // export default function Register() {
//     return (
//         <Layout>
//             <p>Register new user here!</p>
//         </Layout>
//     )
// }

/***/ })

})
//# sourceMappingURL=register.js.d4499f0bd0e1834c5fff.hot-update.js.map