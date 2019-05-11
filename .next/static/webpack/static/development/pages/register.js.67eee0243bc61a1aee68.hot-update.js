webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/useritems.js":
/*!****************************!*\
  !*** ./pages/useritems.js ***!
  \****************************/
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_controls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet-controls */ "./node_modules/grommet-controls/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/useritems.js";









 // const UserItems = ({ items }) => {
//   UserItems.getInitialProps = async ({ req }) => {
//     const res = await fetch("http://localhost:8080/api/items");
//     // console.log("ressssss", res)
//     const json = await res.json();
//     return { items: json };
//   };

var UserItems =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UserItems, _Component);

  function UserItems(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserItems);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserItems).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function (e) {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("http://localhost:8080/api/items").then(function (res) {
        return res.json();
      }).then(function (itemsData) {
        _this.setState({
          items: itemsData
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.state = {
      items: [],
      name: "",
      url: "",
      description: "",
      price: "",
      category: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserItems, [{
    key: "render",
    // componentDidMount = e => {
    //   e.preventDefault();
    //   console.log("-----> USERITEM STATE", this.state);
    //   fetch("http://localhost:8080/api/items", {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       name: this.state.name.toLowerCase(),
    //       url: this.state.url,
    //       description: this.state.description.toLowerCase(),
    //       price: this.state.price,
    //       category: this.state.category.toLowerCase()
    //     }),
    //     credentials: "include"
    //   })
    //     .then(() => {
    //       console.log("USERITEM LIST RENDERED");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    value: function render() {
      var items = this.state.items;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Grommet"], {
        theme: grommet_themes__WEBPACK_IMPORTED_MODULE_14__["dark"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        key: "wrapper",
        direction: "row",
        wrap: "true",
        alignContent: "between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_12__["Card"], {
          basis: "medium",
          animation: "fadeIn",
          background: "dark-1",
          elevation: "xxsmall",
          gap: "small",
          margin: "medium",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_12__["Card"].CardTitle, {
          color: "neutral-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_12__["Card"].CardContent, {
          color: "dark-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, item.description), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "$", item.price), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, item.category), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          icon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_13__["Edit"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }),
          label: "Edit",
          onClick: function onClick() {
            console.log("--->EDIT BUTTON FIRED");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          icon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_13__["FormTrash"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }),
          label: "Delete",
          onClick: function onClick() {
            console.log("--->DELETE BUTTON FIRED");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        })));
      }))));
    }
  }]);

  return UserItems;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserItems);

/***/ })

})
//# sourceMappingURL=register.js.67eee0243bc61a1aee68.hot-update.js.map