webpackHotUpdate("static/development/pages/itemPosting.js",{

/***/ "./pages/itemPosting.js":
/*!******************************!*\
  !*** ./pages/itemPosting.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Items; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_myLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/myLayout */ "./pages/components/myLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/itemPosting.js";

// import { withRouter } from 'next/router'
// import Layout from './components/myLayout.js'
// const Page = withRouter(props => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the item post content.</p>
//     </Layout>
// ))
// export default Page
// import { withRouter } from 'next/router'
// import Layout from './components/myLayout.js';
// const Content = withRouter(props => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>holy shit man</p>
//     </div>
// ))
// const Page = props => (
//     <Layout>
//         <Content />
//     </Layout>
// )
// export default Page



const PostLink = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  as: `/p/${props.id}`,
  href: `/post?title=${props.title}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, props.title)));

function Items() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_myLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "My Items"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "lady-tech-gear",
    title: "Lady Tech Gear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Post, {
    Link: true,
    id: "tech-bling",
    title: "Tech Bling",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "tech-accessories",
    title: "Tech Accessories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=itemPosting.js.a300321dd757f821a26c.hot-update.js.map