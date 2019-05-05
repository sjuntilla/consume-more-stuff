webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js";





var linkStyle = {
  marginRight: 15,
  textDecoration: "none"
};

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.title));
};

var CornerLayer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CornerLayer, _Component);

  function CornerLayer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CornerLayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CornerLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpen", function () {
      return _this.setState({
        open: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClose", function () {
      return _this.setState({
        open: undefined
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CornerLayer, [{
    key: "render",
    value: function render() {
      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Grommet"], {
        theme: grommet_themes__WEBPACK_IMPORTED_MODULE_10__["dark"],
        full: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        fill: true,
        align: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        label: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "Add Corner Layer")),
        onClick: this.onOpen,
        plain: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), open && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Layer"], {
        position: "top-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        height: "small",
        overflow: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        pad: "xlarge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Corner top-right position"))));
    }
  }]);

  return CornerLayer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;

var FormLayer =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FormLayer, _Component2);

  function FormLayer() {
    var _getPrototypeOf3;

    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormLayer);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf3 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FormLayer)).call.apply(_getPrototypeOf3, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2), "state", {
      open: false,
      select: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2), "onOpen", function () {
      return _this2.setState({
        open: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2), "onClose", function () {
      _this2.setState({
        open: undefined
      });
    });

    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormLayer, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          select = _this$state.select;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Grommet"], {
        theme: grommet_themes__WEBPACK_IMPORTED_MODULE_10__["dark"],
        full: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        fill: true,
        align: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        label: "Add",
        onClick: this.onOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), open && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Layer"], {
        position: "right",
        full: "vertical",
        modal: true,
        onClickOutside: this.onClose,
        onEsc: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        as: "form",
        fill: "vertical",
        overflow: "auto",
        width: "medium",
        pad: "medium",
        onSubmit: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        flex: false,
        direction: "row",
        justify: "between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Heading"], {
        level: 2,
        margin: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        flex: "grow",
        overflow: "auto",
        pad: {
          vertical: "medium"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["FormField"], {
        label: "First",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["TextInput"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["FormField"], {
        label: "Third",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["TextArea"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        flex: false,
        as: "footer",
        align: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        label: "Submit",
        onClick: this.onClose,
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }))))));
    }
  }]);

  return FormLayer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_10__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    direction: "row-responsive",
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "HOME",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "SHOP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CornerLayer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "LOGIN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FormLayer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
    title: "REGISTER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.1e66c5345cc91ab23086.hot-update.js.map