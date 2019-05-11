webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "/Users/sylvia/Documents/devleague/consume-more-stuff/pages/register.js";







var Register =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Register, _Component);

  function Register(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Register);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Register).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      // console.log("HITTT", e.target.value)
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value));
    });

    _this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      username: "",
      open: false,
      select: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Register, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      console.log("STATEEEE", this.state);
      fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        })
      }).then(function () {
        console.log("added to database");
        alert("Thank you for registering, " + _this2.state.first_name + "! You will now be redirected to log in with your registered email and password. :) ");
      }) // .then(function(response) {
      //   console.log(response);
      // })
      .catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var layerType = this.state.layerType;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Grommet"], {
        theme: grommet_themes__WEBPACK_IMPORTED_MODULE_10__["dark"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        pad: "large",
        background: "neutral-4",
        width: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["FormField"], {
        onChange: this.handleChange,
        name: "first_name",
        label: "First Name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["FormField"], {
        onChange: this.handleChange,
        name: "last_name",
        label: "Last Name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["FormField"], {
        onChange: this.handleChange,
        name: "email",
        label: "E-mail",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["FormField"], {
        onChange: this.handleChange,
        name: "username",
        label: "Username",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["FormField"], {
        onChange: this.handleChange,
        name: "password",
        type: "password",
        label: "Password",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/login');
        },
        type: "submit",
        label: "Register",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

})
//# sourceMappingURL=index.js.a89eb7c5da524ecfefb9.hot-update.js.map