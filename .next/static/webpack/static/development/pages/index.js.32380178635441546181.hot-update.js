webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/items.js":
/*!************************!*\
  !*** ./pages/items.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet-controls */ "./node_modules/grommet-controls/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var grommet_controls_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet-controls/components */ "./node_modules/grommet-controls/components/index.js");
/* harmony import */ var grommet_controls_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(grommet_controls_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/items.js";












var Items = function Items(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_8__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "row",
    wrap: "true",
    alignContent: "around",
    pad: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_7__["Card"], {
      basis: "medium",
      height: "small",
      animation: "fadeIn",
      background: "dark-1",
      elevation: "xxsmall",
      gap: "medium",
      margin: "medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_7__["Card"].CardTitle, {
      color: "brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_7__["Card"].CardContent, {
      color: "dark-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      direction: "row",
      border: {
        color: 'brand',
        size: 'large'
      },
      pad: "medium",
      round: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      height: "small",
      width: "medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Image"], {
      fit: "cover",
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "$", item.price), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, item.category)));
  }))));
};

Items.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8080/api/items");

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
}();

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ })

})
//# sourceMappingURL=index.js.32380178635441546181.hot-update.js.map