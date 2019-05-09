webpackHotUpdate("static/development/pages/items.js",{

/***/ "./node_modules/grommet/components/Accordion/Accordion.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/Accordion/Accordion.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Accordion = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _AccordionContext = __webpack_require__(/*! ./AccordionContext */ "./node_modules/grommet/components/Accordion/AccordionContext.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var activeAsArray = function activeAsArray(active) {
  return typeof active === 'number' ? [active] : active;
};

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Accordion, _Component);

  function Accordion() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeIndexes: []
    });

    _defineProperty(_assertThisInitialized(_this), "onPanelChange", function (index) {
      var activeIndexes = _this.state.activeIndexes;
      var nextActiveIndexes = [].concat(activeIndexes || []);
      var _this$props = _this.props,
          onActive = _this$props.onActive,
          multiple = _this$props.multiple;
      var activeIndex = nextActiveIndexes.indexOf(index);

      if (activeIndex > -1) {
        nextActiveIndexes.splice(activeIndex, 1);
      } else if (multiple) {
        nextActiveIndexes.push(index);
      } else {
        nextActiveIndexes = [index];
      }

      _this.setState({
        activeIndexes: nextActiveIndexes
      }, function () {
        if (onActive) {
          onActive(nextActiveIndexes);
        }
      });
    });

    return _this;
  }

  Accordion.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var activeIndex = nextProps.activeIndex;
    var stateActiveIndexes = prevState.activeIndexes,
        stateActiveIndex = prevState.activeIndex;
    var activeIndexes = activeAsArray(activeIndex) || [];

    if ((typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) && activeIndexes.join() !== stateActiveIndexes.join()) {
      return {
        activeIndexes: activeIndexes,
        activeIndex: activeIndex
      };
    }

    return null;
  };

  var _proto = Accordion.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        animate = _this$props2.animate,
        children = _this$props2.children,
        messages = _this$props2.messages,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["animate", "children", "messages"]);

    var activeIndexes = this.state.activeIndexes;
    delete rest.onActive;
    return _react.default.createElement(_Box.Box, _extends({
      role: "tablist"
    }, rest), _react.Children.toArray(children).map(function (panel, index) {
      return _react.default.createElement(_AccordionContext.AccordionContext.Provider, {
        key: "accordion-panel_" + (index + 0),
        value: {
          active: activeIndexes.indexOf(index) > -1,
          animate: animate,
          messages: messages,
          onPanelChange: function onPanelChange() {
            return _this2.onPanelChange(index);
          }
        }
      }, panel);
    }));
  };

  return Accordion;
}(_react.Component);

_defineProperty(Accordion, "defaultProps", {
  animate: true,
  messages: {
    tabContents: 'Tab Contents'
  }
});

var AccordionDoc;

if (true) {
  AccordionDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Accordion/doc.js").doc(Accordion); // eslint-disable-line global-require
}

var AccordionWrapper = AccordionDoc || Accordion;
exports.Accordion = AccordionWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Accordion/AccordionContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet/components/Accordion/AccordionContext.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AccordionContext = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var AccordionContext = (0, _react.createContext)({});
exports.AccordionContext = AccordionContext;

/***/ }),

/***/ "./node_modules/grommet/components/Accordion/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Accordion/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Accordion) {
  var DocumentedAccordion = (0, _reactDesc.describe)(Accordion).availableAt((0, _utils.getAvailableAtBadge)('Accordion')).description('An accordion containing collapsible panels.').usage("import { Accordion, AccordionPanel } from 'grommet';\n<Accordion>\n  <AccordionPanel label='Panel 1'>...</AccordionPanel>\n  <AccordionPanel label='Panek 2'>...</AccordionPanel>\n</Accordion>").intrinsicElement('div');
  DocumentedAccordion.propTypes = _extends({}, _utils.genericProps, {
    activeIndex: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)]).description("Active panel index. If specified, Accordion will be a controlled component. This means that future\npanel changes will not work unless you subscribe to onActive function and update activeIndex\naccordingly.").defaultValue(0),
    animate: _reactDesc.PropTypes.bool.description('Transition content in & out with a slide down animation.').defaultValue(true),
    children: _reactDesc.PropTypes.node.description('Array of AccordionPanels.'),
    onActive: _reactDesc.PropTypes.func.description("Function that will be called when the active index changes.\nIt will always send an array with currently active panel indexes."),
    multiple: _reactDesc.PropTypes.bool.description('Allow multiple panels to be opened at once.').defaultValue(false),
    messages: _reactDesc.PropTypes.shape({
      tabContents: _reactDesc.PropTypes.string
    }).description('Custom messages for Tabs. Used for accessibility by screen readers.').defaultValue({
      tabContents: 'Tab Contents'
    })
  });
  return DocumentedAccordion;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/Accordion/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Accordion/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Accordion = void 0;

var _Accordion = __webpack_require__(/*! ./Accordion */ "./node_modules/grommet/components/Accordion/Accordion.js");

exports.Accordion = _Accordion.Accordion;

/***/ }),

/***/ "./node_modules/grommet/components/AccordionPanel/AccordionPanel.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet/components/AccordionPanel/AccordionPanel.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AccordionPanel = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Collapsible = __webpack_require__(/*! ../Collapsible */ "./node_modules/grommet/components/Collapsible/index.js");

var _Heading = __webpack_require__(/*! ../Heading */ "./node_modules/grommet/components/Heading/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _AccordionContext = __webpack_require__(/*! ../Accordion/AccordionContext */ "./node_modules/grommet/components/Accordion/AccordionContext.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AccordionPanel =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(AccordionPanel, _Component);

  function AccordionPanel() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      hover: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function () {
      var _this$props = _this.props,
          onMouseOver = _this$props.onMouseOver,
          dark = _this$props.theme.dark;

      _this.setState({
        hover: dark ? 'light-4' : 'dark-3'
      });

      if (onMouseOver) {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        onMouseOver(args);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOut", function () {
      var onMouseOut = _this.props.onMouseOut;

      _this.setState({
        hover: undefined
      });

      if (onMouseOut) {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        onMouseOut(args);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      var _this$props2 = _this.props,
          onFocus = _this$props2.onFocus,
          dark = _this$props2.theme.dark;

      _this.setState({
        hover: dark ? 'light-4' : 'dark-3'
      });

      if (onFocus) {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        onFocus(args);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var onBlur = _this.props.onBlur;

      _this.setState({
        hover: undefined
      });

      if (onBlur) {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        onBlur(args);
      }
    });

    return _this;
  }

  var _proto = AccordionPanel.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        children = _this$props3.children,
        header = _this$props3.header,
        label = _this$props3.label,
        theme = _this$props3.theme,
        onMouseOut = _this$props3.onMouseOut,
        onMouseOver = _this$props3.onMouseOver,
        onFocus = _this$props3.onFocus,
        onBlur = _this$props3.onBlur,
        rest = _objectWithoutPropertiesLoose(_this$props3, ["children", "header", "label", "theme", "onMouseOut", "onMouseOver", "onFocus", "onBlur"]);

    var hover = this.state.hover;
    var iconColor = (0, _utils.normalizeColor)(theme.accordion.icons.color || 'control', theme);
    return _react.default.createElement(_AccordionContext.AccordionContext.Consumer, null, function (panelContext) {
      var active = panelContext.active,
          animate = panelContext.animate,
          onPanelChange = panelContext.onPanelChange;
      var AccordionIcon = active ? theme.accordion.icons.collapse : theme.accordion.icons.expand;
      return _react.default.createElement(_Box.Box, {
        flex: false
      }, _react.default.createElement(_Button.Button, {
        role: "tab",
        "aria-selected": active,
        "aria-expanded": active,
        onClick: onPanelChange,
        onMouseOver: _this2.onMouseOver,
        onMouseOut: _this2.onMouseOut,
        onFocus: _this2.onFocus,
        onBlur: _this2.onBlur
      }, header || _react.default.createElement(_Box.Box, _extends({
        align: "center",
        direction: "row",
        justify: "between"
      }, rest), typeof label === 'string' ? _react.default.createElement(_Box.Box, {
        pad: {
          horizontal: 'xsmall'
        }
      }, _react.default.createElement(_Heading.Heading, {
        level: theme.accordion.heading && theme.accordion.heading.level || 4,
        color: hover
      }, label)) : label, AccordionIcon && _react.default.createElement(_Box.Box, {
        pad: {
          horizontal: 'small'
        }
      }, _react.default.createElement(AccordionIcon, {
        color: iconColor
      })))), _react.default.createElement(_Box.Box, {
        border: theme.accordion.border
      }, animate ? _react.default.createElement(_Collapsible.Collapsible, {
        open: active
      }, children) : active && children));
    });
  };

  return AccordionPanel;
}(_react.Component);

AccordionPanel.defaultProps = {};
Object.setPrototypeOf(AccordionPanel.defaultProps, _defaultProps.defaultProps);
var AccordionPanelDoc;

if (true) {
  AccordionPanelDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/AccordionPanel/doc.js").doc(AccordionPanel); // eslint-disable-line global-require
}

var AccordionPanelWrapper = (0, _recompose.compose)(_styledComponents.withTheme, _hocs.withForwardRef)(AccordionPanelDoc || AccordionPanel);
exports.AccordionPanel = AccordionPanelWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/AccordionPanel/doc.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/AccordionPanel/doc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = doc;
exports.themeDoc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

function doc(Panel) {
  var DocumentedAccordionPanel = (0, _reactDesc.describe)(Panel).description('An Accordion panel.').intrinsicElement('div');
  DocumentedAccordionPanel.propTypes = {
    label: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('The panel label.'),
    header: _reactDesc.PropTypes.node.description('If specified, the entire panel header will be managed by the caller.')
  };
  return DocumentedAccordionPanel;
}

var themeDoc = {
  'accordion.heading.level': {
    description: 'The heading level used for the accordion.',
    type: 'number',
    defaultValue: '4'
  },
  'accordion.icons.collapse': {
    description: 'The icon to use when the panel is expanded.',
    type: 'React.Element',
    defaultValue: '<FormUp />'
  },
  'accordion.icons.expand': {
    description: 'The icon to use when the panel is collapsed.',
    type: 'React.Element',
    defaultValue: '<FormDown />'
  },
  'accordion.border.color': {
    description: 'The border color to use in the accordion.',
    type: 'string | { dark: string, light: string }',
    defaultValue: 'border'
  },
  'accordion.border.side': {
    description: 'The border side to use in the accordion.',
    type: 'string',
    defaultValue: 'bottom'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/AccordionPanel/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet/components/AccordionPanel/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AccordionPanel = void 0;

var _AccordionPanel = __webpack_require__(/*! ./AccordionPanel */ "./node_modules/grommet/components/AccordionPanel/AccordionPanel.js");

exports.AccordionPanel = _AccordionPanel.AccordionPanel;

/***/ }),

/***/ "./node_modules/grommet/components/Anchor/Anchor.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Anchor/Anchor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Anchor = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledAnchor = __webpack_require__(/*! ./StyledAnchor */ "./node_modules/grommet/components/Anchor/StyledAnchor.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Anchor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Anchor, _Component);

  function Anchor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Anchor should not have children if icon or label is provided');
    }

    return _this;
  }

  var _proto = Anchor.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        children = _this$props.children,
        color = _this$props.color,
        disabled = _this$props.disabled,
        forwardRef = _this$props.forwardRef,
        href = _this$props.href,
        icon = _this$props.icon,
        focus = _this$props.focus,
        label = _this$props.label,
        onClick = _this$props.onClick,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["a11yTitle", "children", "color", "disabled", "forwardRef", "href", "icon", "focus", "label", "onClick", "reverse", "theme"]);

    var coloredIcon = icon;

    if (icon && !icon.props.color) {
      coloredIcon = (0, _react.cloneElement)(icon, {
        color: (0, _utils.normalizeColor)(color || theme.anchor.color, theme)
      });
    }

    var first = reverse ? label : coloredIcon;
    var second = reverse ? coloredIcon : label;
    return _react.default.createElement(_StyledAnchor.StyledAnchor, _extends({}, rest, {
      ref: forwardRef,
      "aria-label": a11yTitle,
      colorProp: color,
      disabled: disabled,
      hasIcon: !!icon,
      focus: focus,
      hasLabel: label,
      reverse: reverse,
      href: !disabled ? href : undefined,
      onClick: !disabled ? onClick : undefined
    }), first && second ? _react.default.createElement(_Box.Box, {
      as: "span",
      direction: "row",
      align: "center",
      gap: "small",
      style: {
        display: 'inline-flex'
      }
    }, first, second) : first || second || children);
  };

  return Anchor;
}(_react.Component);

Anchor.defaultProps = {};
Object.setPrototypeOf(Anchor.defaultProps, _defaultProps.defaultProps);
var AnchorDoc;

if (true) {
  AnchorDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Anchor/doc.js").doc(Anchor); // eslint-disable-line global-require
}

var AnchorWrapper = (0, _recompose.compose)((0, _hocs.withFocus)(), _styledComponents.withTheme, _hocs.withForwardRef)(AnchorDoc || Anchor);
exports.Anchor = AnchorWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Anchor/StyledAnchor.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/Anchor/StyledAnchor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledAnchor = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";

var sizeStyle = function sizeStyle(props) {
  if (props.size) {
    var size = props.size || 'medium';
    var data = props.theme.text[size];
    return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
  }

  return (0, _styledComponents.css)(["font-size:inherit;line-height:inherit;"]);
};

var StyledAnchor = _styledComponents.default.a.withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-1rp7lwl-0"
})(["box-sizing:border-box;", " color:", ";", " text-decoration:", ";cursor:pointer;outline:none;", " ", " ", " ", " ", " ", ""], function (props) {
  return sizeStyle(props);
}, function (props) {
  return (0, _utils.normalizeColor)(props.colorProp || props.theme.anchor.color, props.theme);
}, function (props) {
  return props.theme.anchor.fontWeight && "font-weight: " + props.theme.anchor.fontWeight + ";";
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, _utils.genericStyles, function (props) {
  return !props.disabled && props.theme.anchor.hover && (0, _styledComponents.css)(["&:hover{", " ", " ", "}"], props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && _utils.focusStyle;
}, function (props) {
  return props.theme.anchor.extend;
});

exports.StyledAnchor = StyledAnchor;
StyledAnchor.defaultProps = {};
Object.setPrototypeOf(StyledAnchor.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Anchor/doc.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Anchor/doc.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Anchor) {
  var DocumentedAnchor = (0, _reactDesc.describe)(Anchor).availableAt((0, _utils.getAvailableAtBadge)('Anchor')).description('A text link.').details("We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children.").usage("import { Anchor } from 'grommet';\n<Anchor href={location} label='Label' />").intrinsicElement('a');
  DocumentedAnchor.propTypes = _extends({}, _utils.genericProps, {
    a11yTitle: _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.'),
    color: _utils.colorPropType.description('Label color and icon color, if not specified on the icon.'),
    href: _reactDesc.PropTypes.string.description('Hyperlink reference to place in the anchor.'),
    icon: _reactDesc.PropTypes.element.description('Icon element to place in the anchor.'),
    label: _reactDesc.PropTypes.node.description('Label text to place in the anchor.'),
    onClick: _reactDesc.PropTypes.func.description("Click handler. It can be used, for example,\n        to add analytics and track who clicked in the anchor."),
    reverse: _reactDesc.PropTypes.bool.description("Whether an icon and label should be reversed so that the\n        icon is at the end of the anchor.").defaultValue(false),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description("The font size is typically driven by the components containing\nthis component. But, it can be adjusted directly via this size property, typically\nwhen it is not contained in a 'Heading', 'Paragraph', or 'Text'."),
    as: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("The DOM tag or react component to use for the element.")
  });
  return DocumentedAnchor;
};

exports.doc = doc;

var themeDoc = _extends({
  'anchor.color': {
    description: 'The color of the label text and icon strokes.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ light: '#1D67E3', dark: '#6194EB' }"
  },
  'anchor.fontWeight': {
    description: 'The font weight of the label.',
    type: 'number',
    defaultValue: 600
  },
  'anchor.textDecoration': {
    description: 'The text decoration of the label. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values.',
    type: 'string',
    defaultValue: 'none'
  },
  'anchor.hover.fontWeight': {
    description: 'The font weight of the label when hovering.',
    type: 'number',
    defaultValue: undefined
  },
  'anchor.hover.textDecoration': {
    description: 'The text decoration of the label when hovering. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values.',
    type: 'string',
    defaultValue: 'underline'
  },
  'anchor.hover.extend': {
    description: 'Any additional style for the Anchor when hovering.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'anchor.extend': {
    description: 'Any additional style for the Anchor.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'text.medium.size': {
    description: 'The font size of the text label.',
    type: 'string',
    defaultValue: '18px'
  },
  'text.medium.height': {
    description: 'The line height of the text label.',
    type: 'string',
    defaultValue: '24px'
  }
}, _utils.themeDocUtils.focusStyle, _utils.themeDocUtils.edgeStyle('The possible sizes for margin.'));

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Anchor/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Anchor/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Anchor = void 0;

var _Anchor = __webpack_require__(/*! ./Anchor */ "./node_modules/grommet/components/Anchor/Anchor.js");

exports.Anchor = _Anchor.Anchor;

/***/ }),

/***/ "./node_modules/grommet/components/Box/Box.js":
/*!****************************************************!*\
  !*** ./node_modules/grommet/components/Box/Box.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Box = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./node_modules/grommet/contexts/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledBox = __webpack_require__(/*! ./StyledBox */ "./node_modules/grommet/components/Box/StyledBox.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Box, _Component);

  function Box() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Box.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        background = _this$props.background,
        children = _this$props.children,
        direction = _this$props.direction,
        elevation = _this$props.elevation,
        fill = _this$props.fill,
        forwardRef = _this$props.forwardRef,
        gap = _this$props.gap,
        overflow = _this$props.overflow,
        responsive = _this$props.responsive,
        tag = _this$props.tag,
        as = _this$props.as,
        wrap = _this$props.wrap,
        width = _this$props.width,
        height = _this$props.height,
        propsTheme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["a11yTitle", "background", "children", "direction", "elevation", "fill", "forwardRef", "gap", "overflow", "responsive", "tag", "as", "wrap", "width", "height", "theme"]);

    var theme = this.context || propsTheme;
    var contents = children;

    if (gap) {
      contents = [];
      var firstIndex;

      _react.Children.forEach(children, function (child, index) {
        if (child) {
          if (firstIndex === undefined) {
            firstIndex = index;
          } else {
            contents.push(_react.default.createElement(_StyledBox.StyledBoxGap // eslint-disable-next-line react/no-array-index-key
            , {
              key: index,
              gap: gap,
              directionProp: direction,
              responsive: responsive
            }));
          }
        }

        contents.push(child);
      });
    }

    var content = _react.default.createElement(_StyledBox.StyledBox, _extends({
      as: !as && tag ? tag : as,
      "aria-label": a11yTitle,
      background: background,
      ref: forwardRef,
      directionProp: direction,
      elevationProp: elevation,
      fillProp: fill,
      overflowProp: overflow,
      wrapProp: wrap,
      widthProp: width,
      heightProp: height,
      responsive: responsive
    }, rest), contents); // When a Box changes the darkness, it sets darkChanged so that StyledBox
    // can know what the underlying darkness is when deciding which elevation
    // to show.


    if (background || theme.darkChanged) {
      var dark = (0, _utils.backgroundIsDark)(background, theme);
      var darkChanged = dark !== undefined && dark !== theme.dark;

      if (darkChanged || theme.darkChanged) {
        dark = dark === undefined ? theme.dark : dark;
        content = _react.default.createElement(_contexts.ThemeContext.Provider, {
          value: _extends({}, theme, {
            dark: dark,
            darkChanged: darkChanged
          })
        }, content);
      }
    }

    return content;
  };

  return Box;
}(_react.Component);

_defineProperty(Box, "contextType", _contexts.ThemeContext);

_defineProperty(Box, "displayName", 'Box');

_defineProperty(Box, "defaultProps", {
  direction: 'column',
  margin: 'none',
  pad: 'none',
  responsive: true
});

Object.setPrototypeOf(Box.defaultProps, _defaultProps.defaultProps);
var BoxDoc;

if (true) {
  BoxDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Box/doc.js").doc(Box); // eslint-disable-line global-require
}

var BoxWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withForwardRef)(BoxDoc || Box);
exports.Box = BoxWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Box/StyledBox.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Box/StyledBox.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledBoxGap = exports.StyledBox = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _FLEX_MAP;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignStyle = (0, _styledComponents.css)(["align-items:", ";"], function (props) {
  return ALIGN_MAP[props.align];
});
var ALIGN_CONTENT_MAP = {
  around: 'around',
  between: 'between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignContentStyle = (0, _styledComponents.css)(["align-content:", ";"], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});
var BASIS_MAP = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var basisStyle = (0, _styledComponents.css)(["flex-basis:", ";"], function (props) {
  return BASIS_MAP[props.basis] || props.theme.global.size[props.basis] || props.basis;
}); // min-width and min-height needed because of this
// https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
// we assume we are in the context of a Box going the other direction
// TODO: revisit this

var directionStyle = function directionStyle(direction, theme) {
  var styles = [(0, _styledComponents.css)(["min-width:0;min-height:0;flex-direction:", ";"], direction === 'row-responsive' ? 'row' : direction)];

  if (direction === 'row-responsive' && theme.box.responsiveBreakpoint) {
    var breakpoint = theme.global.breakpoints[theme.box.responsiveBreakpoint];

    if (breakpoint) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "\n        flex-direction: column;\n        flex-basis: auto;\n        justify-content: flex-start;\n        align-items: stretch;\n      "));
    }
  }

  return styles;
};

var elevationStyle = (0, _styledComponents.css)(["box-shadow:", ";"], function (props) {
  return props.theme.global.elevation[props.theme.dark && !props.theme.darkChanged || !props.theme.dark && props.theme.darkChanged ? 'dark' : 'light'][props.elevationProp];
});
var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexGrowShrinkProp = function flexGrowShrinkProp(flex) {
  if (typeof flex === 'boolean' || typeof flex === 'string') {
    return FLEX_MAP[flex];
  }

  return (flex.grow ? flex.grow : 0) + " " + (flex.shrink ? flex.shrink : 0);
};

var flexStyle = (0, _styledComponents.css)(["flex:", ";"], function (props) {
  return "" + flexGrowShrinkProp(props.flex) + (props.flex !== true && !props.basis ? ' auto' : '');
});

var fillStyle = function fillStyle(fillProp) {
  if (fillProp === 'horizontal') {
    return 'width: 100%;';
  }

  if (fillProp === 'vertical') {
    return 'height: 100%;';
  }

  if (fillProp) {
    return "\n      width: 100%;\n      height: 100%;\n    ";
  }

  return undefined;
};

var JUSTIFY_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start'
};
var justifyStyle = (0, _styledComponents.css)(["justify-content:", ";"], function (props) {
  return JUSTIFY_MAP[props.justify];
});
var WRAP_MAP = {
  true: 'wrap',
  reverse: 'wrap-reverse'
};
var wrapStyle = (0, _styledComponents.css)(["flex-wrap:", ";"], function (props) {
  return WRAP_MAP[props.wrapProp];
});

var borderStyle = function borderStyle(data, responsive, theme) {
  var styles = [];
  var color = (0, _utils.normalizeColor)(data.color || 'border', theme);
  var borderSize = data.size || 'xsmall';
  var style = data.style || 'solid';
  var side = typeof data === 'string' ? data : data.side || 'all';
  var value = style + " " + (theme.global.borderSize[borderSize] || borderSize) + " " + color;
  var breakpoint = theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];
  var responsiveValue = breakpoint && (breakpoint.borderSize[borderSize] || borderSize) && style + " " + (breakpoint.borderSize[borderSize] || borderSize) + " " + color;

  if (side === 'top' || side === 'bottom' || side === 'left' || side === 'right') {
    styles.push((0, _styledComponents.css)(["border-", ":", ";"], side, value));

    if (responsiveValue) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "\n        border-" + side + ": " + responsiveValue + ";\n      "));
    }
  } else if (side === 'vertical') {
    styles.push((0, _styledComponents.css)(["border-left:", ";border-right:", ";"], value, value));

    if (responsiveValue) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "\n        border-left: " + responsiveValue + ";\n        border-right: " + responsiveValue + ";\n      "));
    }
  } else if (side === 'horizontal') {
    styles.push((0, _styledComponents.css)(["border-top:", ";border-bottom:", ";"], value, value));

    if (responsiveValue) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "\n        border-top: " + responsiveValue + ";\n        border-bottom: " + responsiveValue + ";\n      "));
    }
  } else {
    styles.push((0, _styledComponents.css)(["border:", ";"], value));

    if (responsiveValue) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "border: " + responsiveValue + ";"));
    }
  }

  return styles;
};

var ROUND_MAP = {
  full: '100%'
};

var roundStyle = function roundStyle(data, responsive, theme) {
  var breakpoint = theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];
  var styles = [];

  if (typeof data === 'object') {
    var size = ROUND_MAP[data.size] || theme.global.edgeSize[data.size || 'medium'] || data.size;
    var responsiveSize = breakpoint && breakpoint.edgeSize[data.size] && (breakpoint.edgeSize[data.size] || data.size);

    if (data.corner === 'top') {
      styles.push((0, _styledComponents.css)(["border-top-left-radius:", ";border-top-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-top-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'bottom') {
      styles.push((0, _styledComponents.css)(["border-bottom-left-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          border-bottom-left-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'left') {
      styles.push((0, _styledComponents.css)(["border-top-left-radius:", ";border-bottom-left-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-bottom-left-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'right') {
      styles.push((0, _styledComponents.css)(["border-top-right-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          border-top-right-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner) {
      styles.push((0, _styledComponents.css)(["border-", "-radius:", ";"], data.corner, size));

      if (responsiveSize) {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          border-" + data.corner + "-radius: " + responsiveSize + ";\n        "));
      }
    } else {
      styles.push((0, _styledComponents.css)(["border-radius:", ";"], size));

      if (responsiveSize) {
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          border-radius: " + responsiveSize + ";\n        "));
      }
    }
  } else {
    var _size = data === true ? 'medium' : data;

    styles.push((0, _styledComponents.css)(["border-radius:", ";"], ROUND_MAP[_size] || theme.global.edgeSize[_size] || _size));

    var _responsiveSize = breakpoint && breakpoint.edgeSize[_size];

    if (_responsiveSize) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "\n        border-radius: " + _responsiveSize + ";\n      "));
    }
  }

  return styles;
};

var SLIDE_SIZES = {
  xsmall: 1,
  small: 5,
  medium: 10,
  large: 50,
  xlarge: 200
};
var PULSE_SIZES = {
  xsmall: 1.001,
  small: 1.01,
  medium: 1.1,
  large: 1.5,
  xlarge: 2
};
var JIGGLE_SIZES = {
  xsmall: 0.1,
  small: 1,
  medium: 5,
  large: 400,
  xlarge: 1000
};
var ZOOM_SIZES = {
  xsmall: 0.001,
  small: 0.01,
  medium: 0.05,
  large: 0.1,
  xlarge: 0.5
};

var animationBounds = function animationBounds(type, size) {
  if (size === void 0) {
    size = 'medium';
  }

  if (type === 'fadeIn') {
    return ['opacity: 0;', 'opacity: 1;'];
  }

  if (type === 'fadeOut') {
    return ['opacity: 1;', 'opacity: 0;'];
  }

  if (type === 'jiggle') {
    var deg = JIGGLE_SIZES[size];
    return ["transform: rotate(-" + deg + "deg);", "transform: rotate(" + deg + "deg);"];
  }

  if (type === 'pulse') {
    return ['transform: scale(1);', "transform: scale(" + PULSE_SIZES[size] + ")"];
  }

  if (type === 'flipIn') {
    return ['transform: rotateY(90deg);', 'transform: rotateY(0);'];
  }

  if (type === 'flipOut') {
    return ['transform: rotateY(0);', 'transform: rotateY(90deg);'];
  }

  if (type === 'slideDown') {
    return ["transform: translateY(-" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideLeft') {
    return ["transform: translateX(" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideRight') {
    return ["transform: translateX(-" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideUp') {
    return ["transform: translateY(" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'zoomIn') {
    return ["transform: scale(" + (1 - ZOOM_SIZES[size]) + ");", 'transform: none;'];
  }

  if (type === 'zoomOut') {
    return ["transform: scale(" + (1 + ZOOM_SIZES[size]) + ");", 'transform: none;'];
  }

  return [];
};

var normalizeTiming = function normalizeTiming(time, defaultTiming) {
  return time ? time / 1000.0 + "s" : defaultTiming;
};

var animationEnding = function animationEnding(type) {
  if (type === 'jiggle') {
    return 'alternate infinite';
  }

  if (type === 'pulse') {
    return 'alternate infinite';
  }

  return 'forwards';
};

var animationObjectStyle = function animationObjectStyle(animation, theme) {
  var bounds = animationBounds(animation.type, animation.size);

  if (bounds) {
    var animationTransition = (0, _styledComponents.css)(["from{", ";}to{", ";}"], bounds[0], bounds[1]);
    return (0, _styledComponents.css)(["", " ", " ", " ", ""], (0, _styledComponents.keyframes)(["", ""], animationTransition), normalizeTiming(animation.duration, (theme.global.animation[animation.type] ? theme.global.animation[animation.type].duration : undefined) || theme.global.animation.duration), normalizeTiming(animation.delay, '0s'), animationEnding(animation.type));
  }

  return '';
};

var animationItemStyle = function animationItemStyle(item, theme) {
  if (typeof item === 'string') {
    return animationObjectStyle({
      type: item
    }, theme);
  }

  if (Array.isArray(item)) {
    return item.reduce(function (style, a, index) {
      return (0, _styledComponents.css)(["", "", " ", ""], style, index > 0 ? ',' : '', animationItemStyle(a, theme));
    }, '');
  }

  if (typeof item === 'object') {
    return animationObjectStyle(item, theme);
  }

  return '';
};

var animationAncilaries = function animationAncilaries(animation) {
  if (animation.type === 'flipIn' || animation.type === 'flipOut') {
    return 'perspective: 1000px; transform-style: preserve-3d;';
  }

  return '';
};

var animationObjectInitialStyle = function animationObjectInitialStyle(animation) {
  var bounds = animationBounds(animation.type, animation.size);

  if (bounds) {
    return bounds[0] + " " + animationAncilaries(animation);
  }

  return '';
};

var animationInitialStyle = function animationInitialStyle(item) {
  if (typeof item === 'string') {
    return animationObjectInitialStyle({
      type: item
    });
  }

  if (Array.isArray(item)) {
    return item.map(function (a) {
      return typeof a === 'string' ? animationObjectInitialStyle({
        type: a
      }) : animationObjectInitialStyle(a);
    }).join('');
  }

  if (typeof item === 'object') {
    return animationObjectInitialStyle(item);
  }

  return '';
};

var animationStyle = (0, _styledComponents.css)(["", ";"], function (props) {
  return (0, _styledComponents.css)(["", " animation:", ";"], animationInitialStyle(props.animation), animationItemStyle(props.animation, props.theme));
}); // NOTE: basis must be after flex! Otherwise, flex overrides basis

var StyledBox = _styledComponents.default.div.withConfig({
  displayName: "StyledBox",
  componentId: "sc-13pk1d4-0"
})(["display:flex;box-sizing:border-box;outline:none;", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return !props.basis && 'max-width: 100%;';
}, _utils.genericStyles, function (props) {
  return props.heightProp && "height: " + (props.theme.global.size[props.heightProp] || props.heightProp) + ";";
}, function (props) {
  return props.widthProp && "width: " + (props.theme.global.size[props.widthProp] || props.widthProp) + ";";
}, function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.background && (0, _utils.backgroundStyle)(props.background, props.theme);
}, function (props) {
  return props.border && borderStyle(props.border, props.responsive, props.theme);
}, function (props) {
  return props.directionProp && directionStyle(props.directionProp, props.theme);
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.fillProp && fillStyle(props.fillProp);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.pad && (0, _utils.edgeStyle)('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.round && roundStyle(props.round, props.responsive, props.theme);
}, function (props) {
  return props.wrapProp && wrapStyle;
}, function (props) {
  return props.overflowProp && (0, _utils.overflowStyle)(props.overflowProp);
}, function (props) {
  return props.elevationProp && elevationStyle;
}, function (props) {
  return props.animation && animationStyle;
}, function (props) {
  return props.theme.box && props.theme.box.extend;
});

exports.StyledBox = StyledBox;

var gapStyle = function gapStyle(directionProp, gap, responsive, theme) {
  var breakpoint = theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];
  var responsiveSize = breakpoint && breakpoint.edgeSize[gap] && breakpoint.edgeSize[gap];
  var styles = [];

  if (directionProp === 'column') {
    styles.push((0, _styledComponents.css)(["height:", ";"], theme.global.edgeSize[gap] || gap));

    if (responsiveSize) {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "height: " + responsiveSize + ";"));
    }
  } else {
    styles.push("width: " + (theme.global.edgeSize[gap] || gap) + ";");

    if (responsive && directionProp === 'row-responsive') {
      styles.push((0, _utils.breakpointStyle)(breakpoint, "\n        width: auto;\n        height: " + responsiveSize + ";\n      "));
    }
  }

  return styles;
};

StyledBox.defaultProps = {};
Object.setPrototypeOf(StyledBox.defaultProps, _defaultProps.defaultProps);

var StyledBoxGap = _styledComponents.default.div.withConfig({
  displayName: "StyledBox__StyledBoxGap",
  componentId: "sc-13pk1d4-1"
})(["flex:0 0 auto;", ";"], function (props) {
  return props.gap && gapStyle(props.directionProp, props.gap, props.responsive, props.theme);
});

exports.StyledBoxGap = StyledBoxGap;
StyledBoxGap.defaultProps = {};
Object.setPrototypeOf(StyledBoxGap.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Box/doc.js":
/*!****************************************************!*\
  !*** ./node_modules/grommet/components/Box/doc.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = exports.OVERFLOW_VALUES = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PAD_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var OVERFLOW_VALUES = ['auto', 'hidden', 'scroll', 'visible'];
exports.OVERFLOW_VALUES = OVERFLOW_VALUES;

var ANIMATION_TYPE = _reactDesc.PropTypes.oneOf(['fadeIn', 'fadeOut', 'jiggle', 'pulse', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);

var ANIMATION_SHAPE = _reactDesc.PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: _reactDesc.PropTypes.number,
  duration: _reactDesc.PropTypes.number,
  size: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
}); // if you update values here, make sure to update in Drop/doc too.


var overflowPropType = _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(OVERFLOW_VALUES), _reactDesc.PropTypes.shape({
  horizontal: _reactDesc.PropTypes.oneOf(OVERFLOW_VALUES),
  vertical: _reactDesc.PropTypes.oneOf(OVERFLOW_VALUES)
}), _reactDesc.PropTypes.string]);

var doc = function doc(Box) {
  var DocumentedBox = (0, _reactDesc.describe)(Box).availableAt((0, _utils.getAvailableAtBadge)('Box')).description("A container that lays out its contents in one direction. Box\n      provides CSS flexbox capabilities for layout, as well as general\n      styling of things like background color, border, and animation.").usage("import { Box } from 'grommet';\n<Box />").intrinsicElement('div');
  DocumentedBox.propTypes = _extends({}, _utils.genericProps, {
    align: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']).description('How to align the contents along the cross axis.'),
    alignContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description("How to align the contents when there is extra space in\n        the cross axis.").defaultValue('stretch'),
    animation: _reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]))]).description("Animation effect(s) to use. 'duration' and 'delay' should\n        be in milliseconds. 'jiggle' and 'pulse' types are intended for\n        small elements, like icons."),
    background: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      dark: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.string]),
      image: _reactDesc.PropTypes.string,
      position: _reactDesc.PropTypes.string,
      opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool, _reactDesc.PropTypes.number]),
      repeat: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['no-repeat', 'repeat']), _reactDesc.PropTypes.string]),
      size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['cover', 'contain']), _reactDesc.PropTypes.string]),
      light: _reactDesc.PropTypes.string
    })]).description("Either a color identifier to use for the background\n        color. For example: 'neutral-1'. Or, a 'url()' for an image. Dark\n        is not needed if color is provided."),
    basis: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'full', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', 'auto']), _reactDesc.PropTypes.string]).description("A fixed or relative size along its container's main axis."),
    border: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
        dark: _reactDesc.PropTypes.string,
        light: _reactDesc.PropTypes.string
      })]),
      side: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]),
      style: _reactDesc.PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'hidden']).defaultValue('solid')
    })]).description('Include a border.'),
    direction: _reactDesc.PropTypes.oneOf(['row', 'column', 'row-responsive', 'row-reverse', 'column-reverse']).description('The orientation to layout the child components in.').defaultValue('column'),
    elevation: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description("Elevated height above the underlying context, indicated\n        via a drop shadow.").defaultValue('none'),
    flex: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['grow', 'shrink']), _reactDesc.PropTypes.bool, _reactDesc.PropTypes.shape({
      grow: _reactDesc.PropTypes.number,
      shrink: _reactDesc.PropTypes.number
    })]).description('Whether flex-grow and/or flex-shrink is true and at a desired factor.'),
    fill: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['horizontal', 'vertical']), _reactDesc.PropTypes.bool]).description('Whether the width and/or height should fill the container.'),
    gap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description("The amount of spacing between child elements. This\n        should not be used in conjunction with 'wrap' as the gap elements\n        will not wrap gracefully."),
    height: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description('A fixed height.'),
    justify: _reactDesc.PropTypes.oneOf(['around', 'between', 'center', 'end', 'evenly', 'start', 'stretch']).description('How to align the contents along the main axis.').defaultValue('stretch'),
    overflow: overflowPropType.description('box overflow.'),
    pad: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      horizontal: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      left: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      right: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      top: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      vertical: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description("The amount of padding around the box contents. An\n        object can be specified to distinguish horizontal padding, vertical\n        padding, and padding on a particular side of the box").defaultValue('none'),
    responsive: _reactDesc.PropTypes.bool.description("Whether margin, pad, and border\n      sizes should be scaled for mobile environments.").defaultValue(true),
    round: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      corner: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
      size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string])
    })]).description('How much to round the corners.').defaultValue(false),
    tag: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("The DOM tag to use for the element. NOTE: This is deprecated in favor\nof indicating the DOM tag via the 'as' property."),
    as: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description('The DOM tag or react component to use for the element.').defaultValue('div'),
    width: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description('A fixed width.'),
    wrap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['reverse'])]).description("Whether children can wrap if they can't all fit.").defaultValue(false)
  });
  return DocumentedBox;
};

exports.doc = doc;

var themeDoc = _extends({
  'global.animation': {
    description: 'The animation configuration for the Box.',
    type: 'object',
    defaultValue: "{\n  duration: '1s',\n  jiggle: {\n    duration: '0.1s',\n  },\n}"
  },
  'global.borderSize': {
    description: 'The possible border sizes in the Box.',
    type: 'object',
    defaultValue: "{\n  xsmall: '1px',\n  small: '2px',\n  medium: '4px',\n  large: '12px',\n  xlarge: '24px,\n}"
  },
  'global.elevation': {
    description: 'The possible shadows in Box elevation.',
    type: 'object',
    defaultValue: "{\n  light: {\n    none: 'none',\n    xsmall: '0px 1px 2px rgba(100, 100, 100, 0.50)',\n    small: '0px 2px 4px rgba(100, 100, 100, 0.50)',\n    medium: '0px 3px 8px rgba(100, 100, 100, 0.50)',\n    large: '0px 6px 12px rgba(100, 100, 100, 0.50)',\n    xlarge: '0px 8px 16px rgba(100, 100, 100, 0.50)',\n  },\n  dark: {\n    none: 'none',\n    xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',\n    small: '0px 4px 4px rgba(255, 255, 255, 0.40)',\n    medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',\n    large: '0px 8px 16px rgba(255, 255, 255, 0.40)',\n    xlarge: '0px 10px 24px rgba(255, 255, 255, 0.40)',\n  },\n}"
  },
  'global.colors.border': {
    description: 'The color of the border',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: rgba(255, 255, 255, 0.33), light: rgba(0, 0, 0, 0.33), }'
  },
  'global.opacity.medium': {
    description: 'The value used when background opacity is set to true.',
    type: 'number',
    defaultValue: '0.4'
  },
  'global.size': {
    description: 'The possible sizes for width, height, and basis.',
    type: 'object',
    defaultValue: "{\n  xxsmall: '48px',\n  xsmall: '96px',\n  small: '192px',\n  medium: '384px',\n  large: '768px',\n  xlarge: '1152px',\n  xxlarge: '1536px',\n  full: '100%',\n}"
  },
  'box.extend': {
    description: 'Any additional style for the Box.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'box.responsiveBreakpoint': {
    description: 'The actual breakpoint to trigger changes in the border, direction, gap, margin, pad, and round.',
    type: 'string',
    defaultValue: 'small'
  }
}, _utils.themeDocUtils.edgeStyle('The possible sizes for any of gap, margin, and pad.'), _utils.themeDocUtils.breakpointStyle('The possible breakpoints that could affect border, direction, gap, margin, pad, and round.'));

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Box/index.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Box/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Box = void 0;

var _Box = __webpack_require__(/*! ./Box */ "./node_modules/grommet/components/Box/Box.js");

exports.Box = _Box.Box;

/***/ }),

/***/ "./node_modules/grommet/components/Button/Button.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Button/Button.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Button = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledButton = __webpack_require__(/*! ./StyledButton */ "./node_modules/grommet/components/Button/StyledButton.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isDarkBackground = function isDarkBackground(props) {
  var backgroundColor = (0, _utils.normalizeBackground)((0, _utils.normalizeColor)(props.color || props.theme.button.primary.color || props.theme.global.colors.control || 'brand', props.theme), props.theme);
  return (0, _utils.colorIsDark)(backgroundColor, props.theme);
};

var Button =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Button, _Component);

  function Button(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (event) {
      var onMouseOver = _this.props.onMouseOver;

      _this.setState({
        hover: true
      });

      if (onMouseOver) {
        onMouseOver(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOut", function (event) {
      var onMouseOut = _this.props.onMouseOut;

      _this.setState({
        hover: false
      });

      if (onMouseOut) {
        onMouseOut(event);
      }
    });

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Button should not have children if icon or label is provided');
    }

    return _this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        color = _this$props.color,
        forwardRef = _this$props.forwardRef,
        children = _this$props.children,
        disabled = _this$props.disabled,
        icon = _this$props.icon,
        fill = _this$props.fill,
        focus = _this$props.focus,
        href = _this$props.href,
        label = _this$props.label,
        onClick = _this$props.onClick,
        plain = _this$props.plain,
        primary = _this$props.primary,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        type = _this$props.type,
        as = _this$props.as,
        rest = _objectWithoutPropertiesLoose(_this$props, ["a11yTitle", "color", "forwardRef", "children", "disabled", "icon", "fill", "focus", "href", "label", "onClick", "plain", "primary", "reverse", "theme", "type", "as"]);

    var hover = this.state.hover;
    var buttonIcon = icon; // only change color if user did not specify the color themselves...

    if (primary && icon && !icon.props.color) {
      buttonIcon = (0, _react.cloneElement)(icon, {
        color: theme.global.colors.text[isDarkBackground(this.props) ? 'dark' : 'light']
      });
    }

    var domTag = !as && href ? 'a' : as;
    var first = reverse ? label : buttonIcon;
    var second = reverse ? buttonIcon : label;
    var contents;

    if (first && second) {
      contents = _react.default.createElement(_Box.Box, {
        direction: "row",
        align: "center",
        justify: "center",
        gap: "small"
      }, first, second);
    } else if (typeof children === 'function') {
      contents = children({
        hover: hover,
        focus: focus
      });
    } else {
      contents = first || second || children;
    } // the key events are covered by withFocus()

    /* eslint-disable jsx-a11y/mouse-events-have-key-events */


    return _react.default.createElement(_StyledButton.StyledButton, _extends({}, rest, {
      as: domTag,
      ref: forwardRef,
      "aria-label": a11yTitle,
      colorValue: color,
      disabled: disabled,
      hasIcon: !!icon,
      hasLabel: !!label,
      fillContainer: fill,
      focus: focus,
      href: href,
      onClick: onClick,
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      pad: !plain,
      plain: typeof plain !== 'undefined' ? plain : _react.Children.count(children) > 0 || icon && !label,
      primary: primary,
      type: !href ? type : undefined
    }), contents);
  };

  return Button;
}(_react.Component);

_defineProperty(Button, "defaultProps", {
  type: 'button',
  focusIndicator: true
});

Object.setPrototypeOf(Button.defaultProps, _defaultProps.defaultProps);
var ButtonDoc;

if (true) {
  ButtonDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Button/doc.js").doc(Button); // eslint-disable-line global-require
}

var ButtonWrapper = (0, _recompose.compose)((0, _hocs.withFocus)(), _styledComponents.withTheme, _hocs.withForwardRef)(ButtonDoc || Button);
exports.Button = ButtonWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Button/StyledButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/Button/StyledButton.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledButton = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var basicStyle = function basicStyle(props) {
  return (0, _styledComponents.css)(["border:", " solid ", ";border-radius:", ";color:", ";padding:", " ", ";font-size:", ";line-height:", ";"], props.theme.button.border.width, (0, _utils.normalizeColor)(props.colorValue || props.theme.button.border.color || 'control', props.theme), props.theme.button.border.radius, (0, _utils.normalizeColor)(props.theme.button.color || 'text', props.theme), props.theme.button.padding.vertical, props.theme.button.padding.horizontal, props.theme.text.medium.size, props.theme.text.medium.height);
};

var primaryStyle = function primaryStyle(props) {
  return (0, _styledComponents.css)(["", " border-radius:", ";"], (0, _utils.backgroundStyle)((0, _utils.normalizeColor)(props.colorValue || props.theme.button.primary.color || 'control', props.theme), props.theme, props.theme.button.color), props.theme.button.border.radius);
};

function getHoverColor(props) {
  if (props.colorValue) {
    return (0, _utils.normalizeColor)(props.colorValue, props.theme);
  }

  return (0, _utils.normalizeColor)(props.theme.button.border.color || 'control', props.theme);
}

function getHoverIndicatorStyle(hoverIndicator, theme) {
  var background;

  if (hoverIndicator === true || hoverIndicator === 'background') {
    background = theme.global.hover.background;
  } else {
    background = hoverIndicator;
  }

  return (0, _styledComponents.css)(["", " color:", ";"], (0, _utils.backgroundStyle)(background, theme), (0, _utils.normalizeColor)(theme.global.hover.color, theme));
}

var hoverStyle = (0, _styledComponents.css)(["&:hover{", " ", ";}"], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && (0, _styledComponents.css)(["box-shadow:0px 0px 0px 2px ", ";"], getHoverColor(props));
});
var fillStyle = "\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n";
var plainStyle = (0, _styledComponents.css)(["color:inherit;border:none;padding:0;text-align:inherit;"]); // Deprecate props.theme.button.disabled.opacity in V3

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "StyledButton",
  componentId: "sc-323bzc-0"
})(["display:inline-block;box-sizing:border-box;cursor:pointer;outline:none;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && _utils.activeStyle;
}, function (props) {
  return props.disabled && (0, _utils.disabledStyle)(props.theme.button.disabled && props.theme.button.disabled.opacity);
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && _utils.focusStyle;
}, function (props) {
  return !props.plain && "\n    transition: 0.1s ease-in-out;\n  ";
}, function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    line-height: 0;\n  ";
}, function (props) {
  return props.pad && props.hasIcon && !props.hasLabel && "\npadding: " + props.theme.global.edgeSize.small + ";\n";
}, function (props) {
  return props.theme.button.extend;
});

exports.StyledButton = StyledButton;
StyledButton.defaultProps = {};
Object.setPrototypeOf(StyledButton.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Button/doc.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Button/doc.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Button) {
  var DocumentedButton = (0, _reactDesc.describe)(Button).availableAt((0, _utils.getAvailableAtBadge)('Button')).description('A button.').details("You can provide a single function child that will be called with\n      'hover' and 'focus' keys. This allows you to customize the rendering\n      of the Button in those cases.").usage("import { Button } from 'grommet';\n<Button primary={true} label='Label' />").intrinsicElement('button');
  DocumentedButton.propTypes = _extends({}, _utils.genericProps, {
    active: _reactDesc.PropTypes.bool.description('Whether the button is active.').defaultValue(false),
    color: _utils.colorPropType.description('Fill color for primary, border color otherwise.'),
    disabled: _reactDesc.PropTypes.bool.description('Whether the button is disabled.').defaultValue(false),
    fill: _reactDesc.PropTypes.bool.description('Whether the button expands to fill all of the available width and height.').defaultValue(false),
    focusIndicator: _reactDesc.PropTypes.bool.description("Whether when 'plain' it should receive a focus outline.").defaultValue(true),
    hoverIndicator: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.string, _reactDesc.PropTypes.oneOf(['background']), _reactDesc.PropTypes.shape({
      background: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.string])
    })]).description("The hover indicator to apply when the user is mousing over the\nbutton. An object can be also be specified for color index support:\n{background: 'neutral-2'}. This prop is meant to be used only\nwith plain Buttons.").defaultValue(false),
    href: _reactDesc.PropTypes.string.description('If specified, the button will behave like an anchor tag.'),
    icon: _reactDesc.PropTypes.element.description('Icon element to place in the button.'),
    label: _reactDesc.PropTypes.node.description('Label text to place in the button.'),
    onClick: _reactDesc.PropTypes.func.description("Click handler. Not setting this property and not specifying a href\ncauses the Button to be disabled."),
    plain: _reactDesc.PropTypes.bool.description("Whether this is a plain button with no border or pad. \nNon plain button will show both pad and border. \nThe plain button has no border and unless the icon prop exist it has no pad as well.").defaultValue(false),
    primary: _reactDesc.PropTypes.bool.description('Whether this is a primary button. There should be at most one per page or screen.').defaultValue(false),
    reverse: _reactDesc.PropTypes.bool.description("Whether an icon and label should be reversed so that the icon is at the\nend of the anchor.").defaultValue(false),
    type: _reactDesc.PropTypes.oneOf(['button', 'reset', 'submit']).description('The type of button. Set the type to submit for the default button on forms.').defaultValue('button'),
    as: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("The DOM tag or react component to use for the element.")
  });
  return DocumentedButton;
};

exports.doc = doc;

var themeDoc = _extends({
  'global.hover.color': {
    description: 'The background color when hovering.',
    type: 'string',
    defaultValue: "{ dark: 'white', light: 'black' }"
  },
  'global.edgeSize.small': {
    description: 'The padding around an icon-only button.',
    type: 'string',
    defaultValue: '12px'
  },
  'global.colors.control': {
    description: 'The color of the border.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'accent-1', light: 'brand', }"
  },
  'global.colors.brand': {
    description: 'The light version of the border.',
    type: 'string',
    defaultValue: '#7D4CDB'
  },
  'global.colors.text': {
    description: 'The color of the text label.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }"
  },
  'text.medium.size': {
    description: 'The font size of the text label.',
    type: 'string',
    defaultValue: '18px'
  },
  'text.medium.height': {
    description: 'The line height of the text label.',
    type: 'string',
    defaultValue: '24px'
  },
  'button.border.color': {
    description: "The color of the border.",
    type: 'string | { dark: string, light: string }'
  },
  'button.border.radius': {
    description: 'The corner radius.',
    type: 'string',
    defaultValue: '18px'
  },
  'button.border.width': {
    description: 'The border width.',
    type: 'string',
    defaultValue: '2px'
  },
  'button.color': {
    description: "The color of the text label.",
    type: 'string | { dark: string, light: string }'
  },
  'button.primary.color': {
    description: "The color of the background for primary buttons.",
    type: 'string | { dark: string, light: string }'
  },
  'button.disabled.opacity': {
    description: 'The opacity when the button is disabled.',
    type: 'number',
    defaultValue: 0.3
  },
  'button.padding.horizontal': {
    description: 'The horizontal padding.',
    type: 'string',
    defaultValue: '22px'
  },
  'button.padding.vertical': {
    description: 'The vertical padding.',
    type: 'string',
    defaultValue: '4px'
  },
  'button.extend': {
    description: 'Any additional style for the Button.',
    type: 'string | (props) => {}'
  }
}, _utils.themeDocUtils.focusStyle, _utils.themeDocUtils.disabledStyle);

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Button/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Button/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Button = void 0;

var _Button = __webpack_require__(/*! ./Button */ "./node_modules/grommet/components/Button/Button.js");

exports.Button = _Button.Button;

/***/ }),

/***/ "./node_modules/grommet/components/Calendar/Calendar.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Calendar/Calendar.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Calendar = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Heading = __webpack_require__(/*! ../Heading */ "./node_modules/grommet/components/Heading/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _StyledCalendar = __webpack_require__(/*! ./StyledCalendar */ "./node_modules/grommet/components/Calendar/StyledCalendar.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/grommet/components/Calendar/utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var headingPadMap = {
  small: 'xsmall',
  medium: 'small',
  large: 'medium'
};

var buildStartEnd = function buildStartEnd(reference, firstDayOfWeek) {
  var start = new Date(reference);
  start.setDate(1); // first of month

  start = (0, _utils.subtractDays)(start, start.getDay() - firstDayOfWeek); // beginning of week

  var end = (0, _utils.addDays)(start, 7 * 5 + 7); // 5 weeks to end of week

  return {
    start: start,
    end: end
  };
};

var buildState = function buildState(props) {
  var date = props.date,
      dates = props.dates,
      firstDayOfWeek = props.firstDayOfWeek,
      reference = props.reference;
  var normalizedReference;

  if (reference) {
    normalizedReference = new Date(reference);
  } else if (date) {
    normalizedReference = new Date(date);
  } else if (dates && dates.length > 0) {
    if (typeof dates[0] === 'string') {
      normalizedReference = new Date(dates[0]);
    } else if (Array.isArray(dates[0])) {
      normalizedReference = new Date(dates[0][0]);
    } else {
      normalizedReference = new Date();
    }
  } else {
    normalizedReference = new Date();
  }

  return _extends({}, buildStartEnd(normalizedReference, firstDayOfWeek), {
    reference: normalizedReference
  });
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Calendar, _Component);

  function Calendar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "dayRefs", {});

    _defineProperty(_assertThisInitialized(_this), "clearSlideStateLater", function () {
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        var targetStartEnd = _this.state.targetStartEnd;

        if (targetStartEnd) {
          _this.setState({
            start: targetStartEnd.start,
            end: targetStartEnd.end,
            targetStartEnd: undefined,
            slide: undefined
          });
        } // Wait for animation to finish before cleaning up. Empirically determined.

      }, 800);
    });

    _defineProperty(_assertThisInitialized(_this), "setReference", function (reference) {
      var _this$props = _this.props,
          animate = _this$props.animate,
          bounds = _this$props.bounds,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          onReference = _this$props.onReference;
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end,
          targetStartEnd = _this$state.targetStartEnd;

      if ((0, _utils.betweenDates)(reference, bounds)) {
        var nextStartEnd = buildStartEnd(reference, firstDayOfWeek);
        var nextState = {
          reference: reference
        }; // if we're changing too fast, bypass animation

        if (!animate || targetStartEnd) {
          nextState.targetStartEnd = nextStartEnd;
          nextState.start = nextStartEnd.start;
          nextState.end = nextStartEnd.end;
          nextState.targetStartEnd = undefined;
          nextState.slide = undefined;
        } else {
          nextState.targetStartEnd = nextStartEnd;

          if (nextStartEnd.start.getTime() < start.getTime()) {
            nextState.start = nextStartEnd.start;
            nextState.slide = {
              direction: 'down',
              weeks: (0, _utils.daysApart)(start, nextStartEnd.start) / 7
            };
          } else if (nextStartEnd.end.getTime() > end.getTime()) {
            nextState.end = nextStartEnd.end;
            nextState.slide = {
              direction: 'up',
              weeks: (0, _utils.daysApart)(nextStartEnd.end, end) / 7
            };
          }
        }

        _this.clearSlideStateLater();

        _this.setState(nextState, function () {
          if (onReference) {
            onReference(reference.toISOString());
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (day) {
      return function () {
        var bounds = _this.props.bounds;
        var reference = _this.state.reference;

        if ((0, _utils.betweenDates)(day, bounds)) {
          _this.setState({
            focused: day
          }, function () {
            if (day.getMonth() !== reference.getMonth()) {
              _this.setReference(day);
            }
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onClickDay", function (dateString) {
      return function () {
        var _this$props2 = _this.props,
            onSelect = _this$props2.onSelect,
            range = _this$props2.range;

        if (range) {
          var nextState = (0, _utils.updateDateRange)(dateString, _this.state);

          _this.setState(nextState);

          if (onSelect) {
            onSelect(nextState.dates || nextState.date || undefined);
          }
        } else if (onSelect) {
          onSelect(dateString);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function (day) {
      var ref = _this.dayRefs[day.toISOString()];

      if (ref && ref.current) {
        ref.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderCalendarHeader", function (previousMonth, nextMonth) {
      var _this$props3 = _this.props,
          bounds = _this$props3.bounds,
          locale = _this$props3.locale,
          size = _this$props3.size,
          theme = _this$props3.theme;
      var reference = _this.state.reference;
      var PreviousIcon = size === 'small' ? theme.calendar.icons.small.previous : theme.calendar.icons.previous;
      var NextIcon = size === 'small' ? theme.calendar.icons.small.next : theme.calendar.icons.next;
      return _react.default.createElement(_Box.Box, {
        direction: "row",
        justify: "between",
        align: "center"
      }, _react.default.createElement(_Box.Box, {
        flex: true,
        pad: {
          horizontal: headingPadMap[size] || 'small'
        }
      }, _react.default.createElement(_Heading.Heading, {
        level: size === 'small' ? 4 : 3,
        size: size,
        margin: "none"
      }, reference.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      }))), _react.default.createElement(_Box.Box, {
        flex: false,
        direction: "row",
        align: "center"
      }, _react.default.createElement(_Button.Button, {
        a11yTitle: previousMonth.toLocaleDateString(locale, {
          month: 'long',
          year: 'numeric'
        }),
        icon: _react.default.createElement(PreviousIcon, {
          size: size !== 'small' ? size : undefined
        }),
        disabled: !(0, _utils.betweenDates)(previousMonth, bounds),
        onClick: function onClick() {
          return _this.setReference(previousMonth);
        }
      }), _react.default.createElement(_Button.Button, {
        a11yTitle: nextMonth.toLocaleDateString(locale, {
          month: 'long',
          year: 'numeric'
        }),
        icon: _react.default.createElement(NextIcon, {
          size: size !== 'small' ? size : undefined
        }),
        disabled: !(0, _utils.betweenDates)(nextMonth, bounds),
        onClick: function onClick() {
          return _this.setReference(nextMonth);
        }
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDaysOfWeek", function (locale, size, start) {
      var day = new Date(start);
      var days = [];

      while (days.length < 7) {
        days.push(_react.default.createElement(_StyledCalendar.StyledDayContainer, {
          key: days.length,
          sizeProp: size
        }, _react.default.createElement(_StyledCalendar.StyledDay, {
          otherMonth: true,
          sizeProp: size
        }, day.toLocaleDateString(locale, {
          weekday: 'narrow'
        }))));
        day = (0, _utils.addDays)(day, 1);
      }

      return _react.default.createElement(_StyledCalendar.StyledWeek, null, days);
    });

    return _this;
  }

  Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var reference = nextProps.reference;
    var prevReference = prevState.reference;

    if (Object.prototype.hasOwnProperty.call(nextProps, 'date') || Object.prototype.hasOwnProperty.call(nextProps, 'dates') || !prevReference || reference) {
      var state = {};

      if (Object.prototype.hasOwnProperty.call(nextProps, 'date') || Object.prototype.hasOwnProperty.call(nextProps, 'dates')) {
        state.date = nextProps.date;
        state.dates = nextProps.dates;
      }

      if (!prevReference || reference) {
        state = _extends({}, state, buildState(nextProps));
      }

      return state;
    }

    return null;
  };

  var _proto = Calendar.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var focused = this.state.focused;

    if (focused) {
      var ref = this.dayRefs[focused.toISOString()];

      if (ref && ref.current && ref.current !== document.activeElement) {
        ref.current.focus();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        bounds = _this$props4.bounds,
        dateProp = _this$props4.date,
        datesProp = _this$props4.dates,
        disabled = _this$props4.disabled,
        daysOfWeek = _this$props4.daysOfWeek,
        firstDayOfWeek = _this$props4.firstDayOfWeek,
        header = _this$props4.header,
        locale = _this$props4.locale,
        onReference = _this$props4.onReference,
        onSelect = _this$props4.onSelect,
        range = _this$props4.range,
        showAdjacentDays = _this$props4.showAdjacentDays,
        size = _this$props4.size,
        theme = _this$props4.theme,
        rest = _objectWithoutPropertiesLoose(_this$props4, ["bounds", "date", "dates", "disabled", "daysOfWeek", "firstDayOfWeek", "header", "locale", "onReference", "onSelect", "range", "showAdjacentDays", "size", "theme"]);

    var _this$state2 = this.state,
        date = _this$state2.date,
        dates = _this$state2.dates,
        focused = _this$state2.focused,
        start = _this$state2.start,
        reference = _this$state2.reference,
        end = _this$state2.end,
        slide = _this$state2.slide; // We have to deal with reference being the end of a month with more
    // days than the month we are changing to. So, we always set reference
    // to the first of the month before changing the month.

    var previousMonth = (0, _utils.endOfMonth)((0, _utils.subtractMonths)((0, _utils.startOfMonth)(reference), 1));
    var nextMonth = (0, _utils.startOfMonth)((0, _utils.addMonths)((0, _utils.startOfMonth)(reference), 1));
    var weeks = [];
    var day = new Date(start);
    var days;
    this.dayRefs = {};

    while (day.getTime() < end.getTime()) {
      if (day.getDay() === firstDayOfWeek) {
        if (days) {
          weeks.push(_react.default.createElement(_StyledCalendar.StyledWeek, {
            key: day.getTime()
          }, days));
        }

        days = [];
      }

      var otherMonth = day.getMonth() !== reference.getMonth();

      if (!showAdjacentDays && otherMonth) {
        days.push(_react.default.createElement(_StyledCalendar.StyledDayContainer, {
          key: day.getTime(),
          sizeProp: size
        }, _react.default.createElement(_StyledCalendar.StyledDay, {
          sizeProp: size
        })));
      } else {
        var dateString = day.toISOString();
        this.dayRefs[dateString] = _react.default.createRef();
        var selected = false;
        var inRange = false;
        var selectedState = (0, _utils.withinDates)(day, date || dates);

        if (selectedState === 2) {
          selected = true;
        } else if (selectedState === 1) {
          inRange = true;
        }

        var dayDisabled = (0, _utils.withinDates)(day, disabled) || bounds && !(0, _utils.betweenDates)(day, bounds);
        days.push(_react.default.createElement(_StyledCalendar.StyledDayContainer, {
          key: day.getTime(),
          sizeProp: size
        }, _react.default.createElement(_Button.Button, {
          ref: this.dayRefs[dateString],
          a11yTitle: day.toDateString(),
          plain: true,
          hoverIndicator: !dayDisabled,
          disabled: dayDisabled,
          onClick: this.onClickDay(dateString),
          onFocus: this.onFocus(day),
          onBlur: function onBlur() {
            return _this2.setState({
              focused: false
            });
          }
        }, _react.default.createElement(_StyledCalendar.StyledDay, {
          inRange: inRange,
          otherMonth: day.getMonth() !== reference.getMonth(),
          isSelected: selected,
          sizeProp: size
        }, day.getDate()))));
      }

      day = (0, _utils.addDays)(day, 1);
    }

    weeks.push(_react.default.createElement(_StyledCalendar.StyledWeek, {
      key: day.getTime()
    }, days));
    return _react.default.createElement(_StyledCalendar.StyledCalendar, _extends({
      sizeProp: size
    }, rest), _react.default.createElement(_Keyboard.Keyboard, {
      onUp: function onUp(event) {
        event.preventDefault();

        _this2.setFocus((0, _utils.addDays)(focused, -7));
      },
      onDown: function onDown(event) {
        event.preventDefault();

        _this2.setFocus((0, _utils.addDays)(focused, 7));
      },
      onLeft: function onLeft() {
        return focused && _this2.setFocus((0, _utils.addDays)(focused, -1));
      },
      onRight: function onRight() {
        return focused && _this2.setFocus((0, _utils.addDays)(focused, 1));
      }
    }, _react.default.createElement(_Box.Box, null, header ? header({
      date: reference,
      locale: locale,
      onPreviousMonth: function onPreviousMonth() {
        return _this2.setReference(previousMonth);
      },
      onNextMonth: function onNextMonth() {
        return _this2.setReference(nextMonth);
      },
      previousInBound: (0, _utils.betweenDates)(previousMonth, bounds),
      nextInBound: (0, _utils.betweenDates)(nextMonth, bounds)
    }) : this.renderCalendarHeader(previousMonth, nextMonth), daysOfWeek && this.renderDaysOfWeek(locale, size, start), _react.default.createElement(_StyledCalendar.StyledWeeksContainer, {
      sizeProp: size
    }, _react.default.createElement(_StyledCalendar.StyledWeeks, {
      slide: slide,
      sizeProp: size
    }, weeks)))));
  };

  return Calendar;
}(_react.Component);

_defineProperty(Calendar, "defaultProps", {
  animate: true,
  firstDayOfWeek: 0,
  size: 'medium',
  locale: 'en-US',
  showAdjacentDays: true
});

Object.setPrototypeOf(Calendar.defaultProps, _defaultProps.defaultProps);
var CalendarDoc;

if (true) {
  CalendarDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Calendar/doc.js").doc(Calendar); // eslint-disable-line global-require
}

var CalendarWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(CalendarDoc || Calendar);
exports.Calendar = CalendarWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Calendar/StyledCalendar.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/Calendar/StyledCalendar.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledDay = exports.StyledDayContainer = exports.StyledWeek = exports.StyledWeeks = exports.StyledWeeksContainer = exports.StyledCalendar = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";width:", ";"], data.fontSize, data.lineHeight, props.theme.global.size[props.sizeProp]);
};

var StyledCalendar = _styledComponents.default.div.withConfig({
  displayName: "StyledCalendar",
  componentId: "sc-1y4xhmp-0"
})(["", " ", " ", ""], _utils.genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.theme.calendar && props.theme.calendar.extend;
});

exports.StyledCalendar = StyledCalendar;
StyledCalendar.defaultProps = {};
Object.setPrototypeOf(StyledCalendar.defaultProps, _defaultProps.defaultProps);

var StyledWeeksContainer = _styledComponents.default.div.withConfig({
  displayName: "StyledCalendar__StyledWeeksContainer",
  componentId: "sc-1y4xhmp-1"
})(["overflow:hidden;", ";"], function (props) {
  return "height: " + (0, _utils.parseMetricToNum)(props.theme.calendar[props.sizeProp].daySize) * 6 + "px;";
});

exports.StyledWeeksContainer = StyledWeeksContainer;
StyledWeeksContainer.defaultProps = {};
Object.setPrototypeOf(StyledWeeksContainer.defaultProps, _defaultProps.defaultProps);

var slideStyle = function slideStyle(props) {
  var _props$slide = props.slide,
      direction = _props$slide.direction,
      weeks = _props$slide.weeks,
      sizeProp = props.sizeProp,
      theme = props.theme;
  var _theme$calendar$sizeP = theme.calendar[sizeProp],
      daySize = _theme$calendar$sizeP.daySize,
      slideDuration = _theme$calendar$sizeP.slideDuration;
  var amount = (0, _utils.parseMetricToNum)(daySize) * weeks;
  var translateYFrom = direction === 'down' ? "-" + amount + "px" : '0';
  var translateYTo = direction === 'up' ? "-" + amount + "px" : '0';
  var slideTransition = (0, _styledComponents.css)(["0%{transform:translateY(", ");}100%{transform:translateY(", ");}"], translateYFrom, translateYTo);
  return (0, _styledComponents.css)(["animation:", " ", " forwards;"], (0, _styledComponents.keyframes)(["", ""], slideTransition), slideDuration);
};

var StyledWeeks = _styledComponents.default.div.withConfig({
  displayName: "StyledCalendar__StyledWeeks",
  componentId: "sc-1y4xhmp-2"
})(["position:relative;", ";"], function (props) {
  return props.slide && slideStyle(props);
});

exports.StyledWeeks = StyledWeeks;
StyledWeeks.defaultProps = {};
Object.setPrototypeOf(StyledWeeks.defaultProps, _defaultProps.defaultProps);

var StyledWeek = _styledComponents.default.div.withConfig({
  displayName: "StyledCalendar__StyledWeek",
  componentId: "sc-1y4xhmp-3"
})(["display:flex;flex-direction:row;flex-justify:between;"]);

exports.StyledWeek = StyledWeek;
StyledWeek.defaultProps = {};
Object.setPrototypeOf(StyledWeek.defaultProps, _defaultProps.defaultProps);

var StyledDayContainer = _styledComponents.default.div.withConfig({
  displayName: "StyledCalendar__StyledDayContainer",
  componentId: "sc-1y4xhmp-4"
})(["flex:0 0 auto;"]);

exports.StyledDayContainer = StyledDayContainer;
StyledDayContainer.defaultProps = {};
Object.setPrototypeOf(StyledDayContainer.defaultProps, _defaultProps.defaultProps);

var daySizeStyle = function daySizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  return (0, _styledComponents.css)(["width:", ";height:", ";"], data.daySize, data.daySize);
};

var StyledDay = _styledComponents.default.div.withConfig({
  displayName: "StyledCalendar__StyledDay",
  componentId: "sc-1y4xhmp-5"
})(["display:flex;justify-content:center;align-items:center;", " ", " ", " ", " ", ""], function (props) {
  return daySizeStyle(props);
}, function (props) {
  return props.isSelected && (0, _utils.backgroundStyle)('control', props.theme) || props.inRange && (0, _utils.backgroundStyle)({
    color: 'control',
    opacity: 'weak'
  }, props.theme);
}, function (props) {
  return props.otherMonth && 'opacity: 0.5;';
}, function (props) {
  return props.isSelected && 'font-weight: bold;';
}, function (props) {
  return props.theme.calendar && props.theme.calendar.day && props.theme.calendar.day.extend;
});

exports.StyledDay = StyledDay;
StyledDay.defaultProps = {};
Object.setPrototypeOf(StyledDay.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Calendar/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Calendar/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Calendar) {
  var DocumentedCalendar = (0, _reactDesc.describe)(Calendar).availableAt((0, _utils.getAvailableAtBadge)('Calendar')).description("A calendar of days displayed by month.\n      It can be used to select a single date, a range of dates, or multiple\n      individual dates.").usage("import { Calendar } from 'grommet';\n<Calendar />").intrinsicElement('div');
  DocumentedCalendar.propTypes = _extends({}, _utils.genericProps, {
    animate: _reactDesc.PropTypes.bool.description("Whether to animate the calender as the user interacts with it.").defaultValue(true),
    bounds: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string).description("An array of two numbers indicating the limits on\n        navigation in ISO8601 format"),
    date: _reactDesc.PropTypes.string.description('The selected date in ISO8601 format'),
    dates: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string)])).description("Multiple selected dates in ISO8601 format.\n      Items that are an array indicate a range of dates."),
    disabled: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string)])).description("Multiple dates in ISO8601 format that should not be\n        selectable. Items that are an array indicate a range of dates."),
    daysOfWeek: _reactDesc.PropTypes.bool.description("Whether to show the days of the week.").defaultValue(false),
    firstDayOfWeek: _reactDesc.PropTypes.oneOf([0, 1]).description('The first day of the week. 0 for Sunday. 1 for Monday.').defaultValue(0),
    header: _reactDesc.PropTypes.func.description("If specified, the entire calendar header will be managed by the caller.\nThe function passes the following options:\n\n```\n  {\n    date: Date,\n    locale: string,\n    onPreviousMonth: func,\n    onNextMonth: func,\n    previousInBound: bool,\n    nextInBound: bool,\n  }\n```\n\n`onPreviousMonth` and `onNextMonth` are callbacks that will tell the calendar to move between months.\n`previousInBound` and `nextInBound` are booleans that tell, when using `bounds`, if the current date is within that range.\nYou can then use that to disable the previous and next buttons.\n"),
    locale: _reactDesc.PropTypes.string.description('The locale to use.').defaultValue('en-US'),
    onReference: _reactDesc.PropTypes.func.description("Called with an ISO8601 date when the user navigates to a different month."),
    onSelect: _reactDesc.PropTypes.func.description("Called with an ISO8601 date when\n      the user selects a day.\n      For single select, make this the subsequent `date` property value.\n      For multiple select or ranges, toggle values in `dates`.\n      Not specifying this property makes the component read only."),
    range: _reactDesc.PropTypes.bool.description("Whether to automatically manage multiple date selection as a range.\n        When the user clicks the first date, onSelect will be called with that\n        date. When the user selects another date, onSelect will be called with\n        an array of two dates.").defaultValue(false),
    reference: _reactDesc.PropTypes.string.description("The date to show if `date` isn't set, in ISO8601 format"),
    showAdjacentDays: _reactDesc.PropTypes.bool.description("Whether to show the days from the previous and next months.").defaultValue(true),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large']), _reactDesc.PropTypes.string]).description('What size to make it.').defaultValue('medium')
  });
  return DocumentedCalendar;
};

exports.doc = doc;
var themeDoc = {
  'global.size.small': {
    description: 'The width of the calendar when small.',
    type: 'string',
    defaultValue: '192px'
  },
  'global.size.medium': {
    description: 'The width of the calendar when medium.',
    type: 'string',
    defaultValue: '384px'
  },
  'global.size.large': {
    description: 'The width of the calendar when large.',
    type: 'string',
    defaultValue: '768px'
  },
  'calendar.small.fontSize': {
    description: 'The font size to use for days when small.',
    type: 'string',
    defaultValue: '14px'
  },
  'calendar.small.lineHeight': {
    description: 'The line height to use for days when small.',
    type: 'number',
    defaultValue: 1.375
  },
  'calendar.small.daySize': {
    description: 'The size of a day when small.',
    type: 'string',
    defaultValue: '27.42px'
  },
  'calendar.small.slideDuration': {
    description: 'How long it animate the slide between months when small.',
    type: 'string',
    defaultValue: '0.2s'
  },
  'calendar.medium.fontSize': {
    description: 'The font size to use for days when medium.',
    type: 'string',
    defaultValue: '18px'
  },
  'calendar.medium.lineHeight': {
    description: 'The line height to use for days when medium.',
    type: 'number',
    defaultValue: 1.45
  },
  'calendar.medium.daySize': {
    description: 'The size of a day when medium.',
    type: 'string',
    defaultValue: '54.84px'
  },
  'calendar.medium.slideDuration': {
    description: 'How long it animate the slide between months when medium.',
    type: 'string',
    defaultValue: '0.5s'
  },
  'calendar.large.fontSize': {
    description: 'The font size to use for days when large.',
    type: 'string',
    defaultValue: '30px'
  },
  'calendar.large.lineHeight': {
    description: 'The line height to use for days when large.',
    type: 'number',
    defaultValue: 1.11
  },
  'calendar.large.daySize': {
    description: 'The size of a day when large.',
    type: 'string',
    defaultValue: '109.7px'
  },
  'calendar.large.slideDuration': {
    description: 'How long it animate the slide between months when large.',
    type: 'string',
    defaultValue: '0.8s'
  },
  'calendar.icons.next': {
    description: 'The icon to use for the next month navigation control.',
    type: 'element',
    defaultValue: '<Next />'
  },
  'calendar.icons.previous': {
    description: 'The icon to use for the previous month navigation control.',
    type: 'element',
    defaultValue: '<Previous />'
  },
  'calendar.icons.small.next': {
    description: 'The icon to use for the next month navigation control when small.',
    type: 'element',
    defaultValue: '<FormNext />'
  },
  'calendar.icons.small.previous': {
    description: 'The icon to use for the previous month navigation control when small.',
    type: 'element',
    defaultValue: '<FormPrevious />'
  },
  'calendar.extend': {
    description: 'Any additional style for the Calendar.',
    type: 'string | (props) => {}'
  },
  'calendar.day.extend': {
    description: 'Any additional style for the day of Calendar.',
    type: 'string | (props) => {}'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Calendar/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/Calendar/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Calendar = void 0;

var _Calendar = __webpack_require__(/*! ./Calendar */ "./node_modules/grommet/components/Calendar/Calendar.js");

exports.Calendar = _Calendar.Calendar;

/***/ }),

/***/ "./node_modules/grommet/components/Calendar/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/Calendar/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.updateDateRange = exports.withinDates = exports.betweenDates = exports.daysApart = exports.sameDayOrBefore = exports.sameDayOrAfter = exports.sameDay = exports.endOfMonth = exports.startOfMonth = exports.subtractMonths = exports.addMonths = exports.subtractDays = exports.addDays = void 0;
// Utility functions for the Calendar.
// Just what's needed to avoid having to include a dependency like momentjs.
var DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

var addDays = function addDays(date, days) {
  var result = new Date(date.getTime() + DAY_MILLISECONDS * days); // Deal with crossing the daylight savings time boundary,
  // where adding a day's worth when the time is midnight results in
  // being a day off.

  var hourDelta = result.getHours() - date.getHours(); // At this point, hourDelta is typically 0 (normal day), +23 (November daylight saving), or -23 (March Daylight saving)
  // depending on which side of the switch we are on. Convert so that hourDelta is either +1 or -1.

  if (hourDelta === 23) {
    hourDelta -= 24;
  } else if (hourDelta === -23) {
    hourDelta += 24;
  }

  result.setHours(result.getHours() - hourDelta);
  return result;
};

exports.addDays = addDays;

var subtractDays = function subtractDays(date, days) {
  return addDays(date, -days);
};

exports.subtractDays = subtractDays;

var addMonths = function addMonths(date, months) {
  var result = new Date(date);
  var years = Math.floor((date.getMonth() + months) / 12);
  result.setFullYear(date.getFullYear() + years);
  var targetMonth = (date.getMonth() + months) % 12;
  result.setMonth(targetMonth < 0 ? 12 + targetMonth : targetMonth);
  return result;
};

exports.addMonths = addMonths;

var subtractMonths = function subtractMonths(date, months) {
  return addMonths(date, -months);
};

exports.subtractMonths = subtractMonths;

var startOfMonth = function startOfMonth(date) {
  var result = new Date(date);
  result.setDate(1);
  return result;
};

exports.startOfMonth = startOfMonth;

var endOfMonth = function endOfMonth(date) {
  var result = addMonths(date, 1);
  result.setDate(0);
  return result;
};

exports.endOfMonth = endOfMonth;

var sameDay = function sameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

exports.sameDay = sameDay;

var sameDayOrAfter = function sameDayOrAfter(date1, date2) {
  return date1.getFullYear() > date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() > date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() >= date2.getDate());
};

exports.sameDayOrAfter = sameDayOrAfter;

var sameDayOrBefore = function sameDayOrBefore(date1, date2) {
  return date1.getFullYear() < date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() < date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() <= date2.getDate());
};

exports.sameDayOrBefore = sameDayOrBefore;

var daysApart = function daysApart(date1, date2) {
  return Math.floor((date1.getTime() - date2.getTime()) / DAY_MILLISECONDS);
}; // betweenDates takes and array of two elements and checks if the
// supplied date lies between them, inclusive.
// returns 2 if exact match to one end, 1 if between, undefined otherwise


exports.daysApart = daysApart;

var betweenDates = function betweenDates(date, dates) {
  var result;

  if (dates) {
    var _dates$map = dates.map(function (d) {
      return new Date(d);
    }),
        from = _dates$map[0],
        to = _dates$map[1];

    if (sameDay(date, from) || sameDay(date, to)) {
      result = 2;
    } else if (sameDayOrAfter(date, from) && sameDayOrBefore(date, to)) {
      result = 1;
    }
  } else {
    result = 1;
  }

  return result;
}; // withinDates takes and array of string dates or 2 element arrays and
// checks whether the supplied date matches any string or is between
// any dates in arrays.
// returns 2 if exact match, 1 if between, undefined otherwise


exports.betweenDates = betweenDates;

var withinDates = function withinDates(date, dates) {
  var result;

  if (dates) {
    if (Array.isArray(dates)) {
      dates.some(function (d) {
        if (typeof d === 'string') {
          if (sameDay(date, new Date(d))) {
            result = 2;
          }
        } else {
          result = betweenDates(date, d);
        }

        return result;
      });
    } else if (sameDay(date, new Date(dates))) {
      result = 2;
    }
  }

  return result;
};

exports.withinDates = withinDates;

var updateDateRange = function updateDateRange(selectedDate, _ref) {
  var date = _ref.date,
      dates = _ref.dates,
      previousSelectedDate = _ref.previousSelectedDate;
  var result = {
    previousSelectedDate: selectedDate
  };

  if (!dates) {
    if (!date) {
      result.date = selectedDate;
    } else {
      var priorDate = new Date(date);
      var nextDate = new Date(selectedDate);

      if (priorDate.getTime() < nextDate.getTime()) {
        result.date = undefined;
        result.dates = [[date, selectedDate]];
      } else if (priorDate.getTime() > nextDate.getTime()) {
        result.date = undefined;
        result.dates = [[selectedDate, date]];
      } else {
        result.date = undefined;
      }
    }
  } else {
    var priorDates = dates[0].map(function (d) {
      return new Date(d);
    });
    var previousDate = new Date(previousSelectedDate);

    var _nextDate = new Date(selectedDate);

    if (_nextDate.getTime() === priorDates[0].getTime()) {
      result.dates = undefined;
      var _dates$ = dates[0];
      result.date = _dates$[1];
    } else if (_nextDate.getTime() === priorDates[1].getTime()) {
      result.dates = undefined;
      var _dates$2 = dates[0];
      result.date = _dates$2[0];
    } else if (_nextDate.getTime() < previousDate.getTime()) {
      if (_nextDate.getTime() < priorDates[0].getTime()) {
        result.dates = [[selectedDate, dates[0][1]]];
      } else if (_nextDate.getTime() > priorDates[0].getTime()) {
        result.dates = [[dates[0][0], selectedDate]];
      }
    } else if (_nextDate.getTime() > previousDate.getTime()) {
      if (_nextDate.getTime() > priorDates[1].getTime()) {
        result.dates = [[dates[0][0], selectedDate]];
      } else if (_nextDate.getTime() < priorDates[1].getTime()) {
        result.dates = [[selectedDate, dates[0][1]]];
      }
    }
  }

  return result;
};

exports.updateDateRange = updateDateRange;

/***/ }),

/***/ "./node_modules/grommet/components/Carousel/Carousel.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Carousel/Carousel.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Carousel = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _Stack = __webpack_require__(/*! ../Stack */ "./node_modules/grommet/components/Stack/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Carousel, _Component);

  function Carousel() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var play = _this.props.play;
      clearInterval(_this.timer);
      _this.timer = setInterval(function () {
        var children = _this.props.children;
        var activeIndex = _this.state.activeIndex;
        var lastIndex = _react.Children.count(children) - 1;

        if (activeIndex < lastIndex) {
          _this.setState({
            activeIndex: activeIndex + 1,
            priorActiveIndex: activeIndex
          });
        } else {
          _this.setState({
            activeIndex: 0,
            priorActiveIndex: activeIndex
          });
        }
      }, play);
    });

    _defineProperty(_assertThisInitialized(_this), "onRight", function () {
      var activeIndex = _this.state.activeIndex;
      clearInterval(_this.timer);

      _this.setState({
        activeIndex: activeIndex + 1,
        priorActiveIndex: activeIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLeft", function () {
      var activeIndex = _this.state.activeIndex;
      clearInterval(_this.timer);

      _this.setState({
        activeIndex: activeIndex - 1,
        priorActiveIndex: activeIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (index) {
      return function () {
        var activeIndex = _this.state.activeIndex;
        clearInterval(_this.timer);

        _this.setState({
          activeIndex: index,
          priorActiveIndex: activeIndex
        });
      };
    });

    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var play = this.props.play;

    if (play) {
      this.play();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var play = this.props.play;

    if (play && (!prevProps.play || play !== prevProps.play)) {
      this.play();
    } else if (!play && prevProps.play) {
      clearInterval(this.timer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        fill = _this$props.fill,
        focus = _this$props.focus,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "fill", "focus", "theme"]);

    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        priorActiveIndex = _this$state.priorActiveIndex;
    var lastIndex = _react.Children.count(children) - 1;
    var onLeft = activeIndex > 0 ? this.onLeft : undefined;
    var onRight = activeIndex < lastIndex ? this.onRight : undefined;
    var CurrentIcon = theme.carousel.icons.current;
    var iconColor = (0, _utils.normalizeColor)(theme.carousel.icons.color || 'control', theme);
    var selectors = [];

    var wrappedChildren = _react.Children.map(children, function (child, index) {
      selectors.push(_react.default.createElement(_Button.Button // eslint-disable-next-line react/no-array-index-key
      , {
        key: index,
        icon: _react.default.createElement(CurrentIcon, {
          color: activeIndex === index ? iconColor : undefined
        }),
        onClick: _this2.onSelect(index)
      }));
      var animation;

      if (index === activeIndex) {
        if (priorActiveIndex !== undefined) {
          animation = {
            type: priorActiveIndex < activeIndex ? 'slideLeft' : 'slideRight',
            size: 'xlarge'
          };
        }
      } else if (index === priorActiveIndex) {
        animation = {
          type: 'fadeOut'
        };
      } else {
        animation = {
          type: 'fadeOut',
          duration: 0
        };
      }

      return _react.default.createElement(_Box.Box, {
        overflow: "hidden"
      }, _react.default.createElement(_Box.Box, {
        animation: animation
      }, child));
    });

    var NextIcon = theme.carousel.icons.next;
    var PreviousIcon = theme.carousel.icons.previous;
    return _react.default.createElement(_Keyboard.Keyboard, {
      onLeft: onLeft,
      onRight: onRight
    }, _react.default.createElement(_Stack.Stack, _extends({
      guidingChild: activeIndex,
      fill: fill
    }, rest), wrappedChildren, _react.default.createElement(_Box.Box, {
      tabIndex: "0",
      focus: focus,
      fill: true,
      direction: "row",
      justify: "between"
    }, _react.default.createElement(_Box.Box, {
      fill: "vertical"
    }, _react.default.createElement(_Button.Button, {
      fill: true,
      disabled: activeIndex <= 0,
      onClick: onLeft,
      hoverIndicator: true
    }, _react.default.createElement(_Box.Box, {
      justify: "center"
    }, _react.default.createElement(PreviousIcon, null)))), _react.default.createElement(_Box.Box, {
      justify: "end"
    }, _react.default.createElement(_Box.Box, {
      direction: "row",
      justify: "center"
    }, selectors)), _react.default.createElement(_Box.Box, {
      fill: "vertical"
    }, _react.default.createElement(_Button.Button, {
      fill: true,
      disabled: activeIndex >= lastIndex,
      onClick: onRight,
      hoverIndicator: true
    }, _react.default.createElement(_Box.Box, {
      justify: "center"
    }, _react.default.createElement(NextIcon, null)))))));
  };

  return Carousel;
}(_react.Component);

Carousel.defaultProps = {};
Object.setPrototypeOf(Carousel.defaultProps, _defaultProps.defaultProps);
var CarouselDoc;

if (true) {
  CarouselDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Carousel/doc.js").doc(Carousel); // eslint-disable-line global-require
}

var CarouselWrapper = (0, _recompose.compose)((0, _hocs.withFocus)(), _styledComponents.withTheme)(CarouselDoc || Carousel);
exports.Carousel = CarouselWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Carousel/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Carousel/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Carousel) {
  var DocumentedCarousel = (0, _reactDesc.describe)(Carousel).availableAt((0, _utils.getAvailableAtBadge)('Carousel')).description("A carousel that cycles through children. Child components\n      would typically be Images. It is the caller's responsibility to ensure\n      that all children are the same size.").usage("import { Carousel } from 'grommet';\n<Carousel />").intrinsicElement('div');
  DocumentedCarousel.propTypes = _extends({}, _utils.genericProps, {
    fill: _reactDesc.PropTypes.bool.description("Whether to expand to fill\n      all of the available width and height in the parent container."),
    play: _reactDesc.PropTypes.number.description("If specified, the number of\n      milliseconds between automatically transitioning to the next child. It\n      will loop through all children indefinitely.")
  });
  return DocumentedCarousel;
};

exports.doc = doc;

var themeDoc = _extends({
  'carousel.icons.next': {
    description: 'The icon to use for the next image navigation control.',
    type: 'element',
    defaultValue: '<Next />'
  },
  'carousel.icons.previous': {
    description: 'The icon to use for the previous image navigation control.',
    type: 'element',
    defaultValue: '<Previous />'
  },
  'carousel.icons.current': {
    description: 'The icon to use on the middle navigation control. One icon per carousel image.',
    type: 'element',
    defaultValue: '<Next />'
  },
  'carousel.icons.color': {
    description: 'The color used for Carousel icons.',
    type: 'string',
    defaultValue: undefined
  },
  'global.colors.icon': {
    description: 'The color used for Carousel icons.',
    type: 'object',
    defaultValue: {
      dark: '#f8f8f8',
      light: '#666666'
    }
  }
}, _utils.themeDocUtils.edgeStyle('The possible sizes for margin.'));

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Carousel/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/Carousel/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Carousel = void 0;

var _Carousel = __webpack_require__(/*! ./Carousel */ "./node_modules/grommet/components/Carousel/Carousel.js");

exports.Carousel = _Carousel.Carousel;

/***/ }),

/***/ "./node_modules/grommet/components/Chart/Chart.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Chart/Chart.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Chart = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _StyledChart = __webpack_require__(/*! ./StyledChart */ "./node_modules/grommet/components/Chart/StyledChart.js");

var _utils2 = __webpack_require__(/*! ./utils */ "./node_modules/grommet/components/Chart/utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderBars = function renderBars(values, bounds, scale, height) {
  return (values || []).map(function (valueArg, index) {
    var label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        rest = _objectWithoutPropertiesLoose(valueArg, ["label", "onHover", "value"]);

    var key = "p-" + index;
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    var top = value.length === 2 ? value[1] : value[2];

    if (top !== 0) {
      var d = "M " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (bottom - bounds[1][0]) * scale[1])) + (" L " + (value[0] - bounds[0][0]) * scale[0] + ",") + ("" + (height - (top - bounds[1][0]) * scale[1]));
      var hoverProps;

      if (onHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return onHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(false);
          }
        };
      }

      return _react.default.createElement("g", {
        key: key,
        fill: "none"
      }, _react.default.createElement("title", null, label), _react.default.createElement("path", _extends({
        d: d
      }, hoverProps, rest)));
    }

    return undefined;
  });
};

var renderLine = function renderLine(values, bounds, scale, height, _ref) {
  var onClick = _ref.onClick,
      onHover = _ref.onHover;
  var d = '';
  (values || []).forEach(function (_ref2, index) {
    var value = _ref2.value;
    d += (index ? ' L' : 'M') + " " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (value[1] - bounds[1][0]) * scale[1]));
  });
  var hoverProps;

  if (onHover) {
    hoverProps = {
      onMouseOver: function onMouseOver() {
        return onHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(false);
      }
    };
  }

  var clickProps;

  if (onClick) {
    clickProps = {
      onClick: onClick
    };
  }

  return _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", _extends({
    d: d
  }, hoverProps, clickProps)));
};

var renderArea = function renderArea(values, bounds, scale, height, _ref3) {
  var color = _ref3.color,
      onClick = _ref3.onClick,
      onHover = _ref3.onHover,
      theme = _ref3.theme;
  var d = '';
  (values || []).forEach(function (_ref4, index) {
    var value = _ref4.value;
    var top = value.length === 2 ? value[1] : value[2];
    d += (!index ? 'M' : ' L') + " " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (top - bounds[1][0]) * scale[1]));
  });
  (values || []).reverse().forEach(function (_ref5) {
    var value = _ref5.value;
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    d += " L " + (value[0] - bounds[0][0]) * scale[0] + "," + ("" + (height - (bottom - bounds[1][0]) * scale[1]));
  });

  if (d.length > 0) {
    d += ' Z';
  }

  var hoverProps;

  if (onHover) {
    hoverProps = {
      onMouseOver: function onMouseOver() {
        return onHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(false);
      }
    };
  }

  var clickProps;

  if (onClick) {
    clickProps = {
      onClick: onClick
    };
  }

  return _react.default.createElement("g", {
    fill: (0, _utils.normalizeColor)(color.color || color, theme)
  }, _react.default.createElement("path", _extends({
    d: d
  }, hoverProps, clickProps)));
};

var Chart =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Chart, _Component);

  function Chart() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "containerRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "state", {
      containerWidth: 0,
      containerHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      var containerNode = _this.containerRef.current;

      if (containerNode) {
        var parentNode = containerNode.parentNode;

        if (parentNode) {
          var rect = parentNode.getBoundingClientRect();

          _this.setState({
            containerWidth: rect.width,
            containerHeight: rect.height
          });
        }
      }
    });

    return _this;
  }

  Chart.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var bounds = nextProps.bounds,
        values = nextProps.values;
    var stateBounds = prevState.bounds,
        stateValues = prevState.values;

    if (!stateValues || values !== stateValues || bounds !== stateBounds) {
      var nextValues = (0, _utils2.normalizeValues)(values);
      var nextBounds = (0, _utils2.normalizeBounds)(bounds, nextValues);
      return {
        bounds: nextBounds,
        values: nextValues
      };
    }

    return null;
  };

  var _proto = Chart.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        onClick = _this$props.onClick,
        onHover = _this$props.onHover,
        overflow = _this$props.overflow,
        round = _this$props.round,
        size = _this$props.size,
        theme = _this$props.theme,
        thickness = _this$props.thickness,
        type = _this$props.type,
        rest = _objectWithoutPropertiesLoose(_this$props, ["color", "onClick", "onHover", "overflow", "round", "size", "theme", "thickness", "type"]);

    delete rest.values;
    var _this$state = this.state,
        bounds = _this$state.bounds,
        containerWidth = _this$state.containerWidth,
        containerHeight = _this$state.containerHeight,
        values = _this$state.values;
    var sizeWidth = typeof size === 'string' ? size : size.width || 'medium';
    var sizeHeight = typeof size === 'string' ? size : size.height || 'medium';
    var width = sizeWidth === 'full' ? containerWidth : (0, _utils.parseMetricToNum)(theme.global.size[sizeWidth] || sizeWidth);
    var height = sizeHeight === 'full' ? containerHeight : (0, _utils.parseMetricToNum)(theme.global.size[sizeHeight] || sizeHeight);
    var strokeWidth = (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness]);
    var scale = [width / (bounds[0][1] - bounds[0][0]), height / (bounds[1][1] - bounds[1][0])];
    var viewBox = overflow ? "0 0 " + width + " " + height : "-" + strokeWidth / 2 + " -" + strokeWidth / 2 + " " + (width + strokeWidth) + " " + (height + strokeWidth);
    var colorName = typeof color === 'object' ? color.color : color;
    var opacity = color.opacity ? theme.global.opacity[color.opacity] : undefined;
    var contents;

    if (type === 'bar') {
      contents = renderBars(values, bounds, scale, height);
    } else if (type === 'line') {
      contents = renderLine(values, bounds, scale, height, this.props);
    } else if (type === 'area') {
      contents = renderArea(values, bounds, scale, height, this.props);
    }

    return _react.default.createElement(_StyledChart.StyledChart, _extends({
      ref: this.containerRef,
      viewBox: viewBox,
      preserveAspectRatio: "none",
      width: size === 'full' ? '100%' : width,
      height: size === 'full' ? '100%' : height
    }, rest), _react.default.createElement("g", {
      stroke: (0, _utils.normalizeColor)(colorName, theme),
      strokeWidth: strokeWidth,
      strokeLinecap: round ? 'round' : 'butt',
      strokeLinejoin: round ? 'round' : 'miter',
      opacity: opacity
    }, contents));
  };

  return Chart;
}(_react.Component);

_defineProperty(Chart, "defaultProps", {
  color: 'accent-1',
  overflow: false,
  size: {
    width: 'medium',
    height: 'small'
  },
  thickness: 'medium',
  type: 'bar'
});

Object.setPrototypeOf(Chart.defaultProps, _defaultProps.defaultProps);
var ChartDoc;

if (true) {
  ChartDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Chart/doc.js").doc(Chart); // eslint-disable-line global-require
}

var ChartWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(ChartDoc || Chart);
exports.Chart = ChartWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Chart/StyledChart.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Chart/StyledChart.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledChart = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledChart = _styledComponents.default.svg.withConfig({
  displayName: "StyledChart",
  componentId: "sc-1nae0gf-0"
})(["display:block;max-width:100%;overflow:visible;", " ", ";"], _utils.genericStyles, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});

exports.StyledChart = StyledChart;
StyledChart.defaultProps = {};
Object.setPrototypeOf(StyledChart.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Chart/calcs.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Chart/calcs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.calcs = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/grommet/components/Chart/utils.js");

var calcs = function calcs(values, options) {
  if (options === void 0) {
    options = {};
  }

  var coarseness = options.coarseness || 5;
  var steps = options.steps || [1, 1];
  var calcValues = (0, _utils.normalizeValues)(values || []);
  var min;
  var max;

  if (options.min !== undefined && options.max !== undefined) {
    var _options = options;
    min = _options.min;
    max = _options.max;
  } else if (calcValues.length) {
    // Calculate the max and min y values.
    min = calcValues[0].value[1] || 0;
    max = min;
    calcValues.forEach(function (value) {
      var y = value.value[1];
      min = Math.min(min, y);
      max = Math.max(max, y); // handle ranges of values

      if (value.value[2] !== undefined) {
        var y2 = value.value[2];
        min = Math.min(min, y2);
        max = Math.max(max, y2);
      }
    });
    min = options.min !== undefined ? options.min : min;
    max = options.max !== undefined ? options.max : max; // Calculate some reasonable y bounds based on the max and min y values.
    // This is so values like 87342.12 don't end up being displayed as the
    // graph axis edge label.

    var delta = max - min;
    var interval = Number.parseFloat((delta / coarseness).toPrecision(1));
    max = max - max % interval + interval;
    min -= min % interval;
  }

  var bounds = calcValues.length ? [[calcValues[0].value[0], calcValues[calcValues.length - 1].value[0]], [min, max]] : [[], []];
  var dimensions = [bounds[0][1] - bounds[0][0], bounds[1][1] - bounds[1][0]]; // Calculate x and y axis values across the specfied number of steps.

  var yAxis = [];
  var y = bounds[1][1];
  var yStepInterval = dimensions[1] / steps[1];

  while (y >= bounds[1][0]) {
    yAxis.push(y);
    y -= yStepInterval;
  }

  var xAxis = [];
  var x = bounds[0][0];
  var xStepInterval = dimensions[0] / steps[0];

  while (xStepInterval > 0 && x <= bounds[0][1] || xStepInterval < 0 && x >= bounds[0][1]) {
    xAxis.push(x);
    x += xStepInterval;
  } // Set bar thickness based on number of values being rendered.
  // Someday, it would be better to include the actual rendered size.
  // These values were emirically determined, trying to balance visibility
  // and overlap across resolutions.


  var thickness;
  var pad;

  if (calcValues.length < 5) {
    thickness = 'xlarge';
    pad = 'large';
  } else if (calcValues.length < 11) {
    thickness = 'large';
    pad = 'medium';
  } else if (calcValues.length < 21) {
    thickness = 'medium';
    pad = 'small';
  } else if (calcValues.length < 61) {
    thickness = 'small';
    pad = 'xsmall';
  } else if (calcValues.length < 121) {
    thickness = 'xsmall';
    pad = 'xxsmall';
  } else {
    thickness = 'hair';
  }

  return {
    axis: [xAxis, yAxis],
    bounds: bounds,
    dimensions: dimensions,
    pad: pad,
    thickness: thickness
  };
};

exports.calcs = calcs;

/***/ }),

/***/ "./node_modules/grommet/components/Chart/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Chart/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.docCalcs = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Chart) {
  var DocumentedChart = (0, _reactDesc.describe)(Chart).availableAt((0, _utils.getAvailableAtBadge)('Chart')).description('A graphical chart.').usage("import { Chart } from 'grommet';\n<Chart />"); // We don't include svg due to a collision on the values property
  // .intrinsicElement('svg');

  DocumentedChart.propTypes = _extends({}, _utils.genericProps, {
    bounds: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)).description("The limits for the values, specified as a two dimensional array.\n      If not specified, the bounds will automatically be set to fit\n      the provided values."),
    color: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
    })]).description('A color identifier to use for the graphic color.').defaultValue('accent-1'),
    onClick: _reactDesc.PropTypes.func.description("Called when the user clicks on it.\n      This is only available when the type is line or area."),
    onHover: _reactDesc.PropTypes.func.description("Called with a boolean argument\n      indicating when the user hovers onto or away from it.\n      This is only available when the type is line or area."),
    overflow: _reactDesc.PropTypes.bool.description("Whether the chart strokes should overflow the component. Set this\n      to true for precise positioning when stacking charts or including\n      precise axes. Set this to false to have the graphical elements\n      align with the component boundaries.").defaultValue(false),
    round: _reactDesc.PropTypes.bool.description('Whether to round the line ends.').defaultValue(false),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.shape({
      height: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.string]),
      width: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description('The size of the Chart.').defaultValue({
      width: 'medium',
      height: 'small'
    }),
    thickness: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['hair', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'none']), _reactDesc.PropTypes.string]).description('The width of the stroke.').defaultValue('medium'),
    type: _reactDesc.PropTypes.oneOf(['bar', 'line', 'area']).description('The visual type of meter.').defaultValue('bar'),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number), _reactDesc.PropTypes.shape({
      label: _reactDesc.PropTypes.string,
      // for accessibility of bars
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func,
      value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number.isRequired, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number).isRequired]).isRequired
    })])).description("Array of value objects describing the data.\n      'value' is a tuple indicating the coordinate of the value or a triple\n      indicating the x coordinate and a range of two y coordinates.\n      'label' is a text string describing it.\n      'onHover' and 'onClick' only work when type='bar'.").isRequired
  });
  return DocumentedChart;
};

exports.doc = doc;

var docCalcs = function docCalcs(calcs) {
  var DocumentedCalcs = (0, _reactDesc.describe)(calcs).description("\n      A function to help calculate values for bounds and axis. Use it via:\n      const data = calcs(<myValues>, { coarseness: 5, steps: [1, 1] });\n      where 'data' will contain 'bounds' and 'axis' properties.\n    ").usage("import { calcs } from 'grommet';\nconst data = calcs(<values>, { coarseness: 5, steps: [1, 1] });");
  return DocumentedCalcs;
};

exports.docCalcs = docCalcs;
var themeDoc = {
  'chart.extend': {
    description: 'Any additional style for the Chart.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'global.colors': {
    description: 'color options used for Chart fill area.',
    type: 'object',
    defaultValue: 'accent-1'
  },
  'global.edgeSize': {
    description: 'The possible sizes for the thickness in the Chart.',
    type: 'object',
    defaultValue: "{\n        none: '0px',\n        hair: '1px',\n        xxsmall: '3px',\n        xsmall: '6px',\n        small: '12px',\n        medium: '24px',\n        large: '48px',\n        xlarge: '96px',\n        responsiveBreakpoint: 'small',\n    }"
  },
  'global.opacity': {
    description: 'The opacity of the Chart stroke.',
    type: 'string',
    defaultValue: undefined
  },
  'global.size': {
    description: 'The possible sizes for Chart width and height.',
    type: 'object',
    defaultValue: "{\n      xxsmall: '48px',\n      xsmall: '96px',\n      small: '192px',\n      medium: '384px',\n      large: '768px',\n      xlarge: '1152px',\n      xxlarge: '1536px',\n      full: '100%',\n      }"
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Chart/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Chart/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.calcs = exports.Chart = void 0;

var _Chart = __webpack_require__(/*! ./Chart */ "./node_modules/grommet/components/Chart/Chart.js");

exports.Chart = _Chart.Chart;

var _calcs = __webpack_require__(/*! ./calcs */ "./node_modules/grommet/components/Chart/calcs.js");

exports.calcs = _calcs.calcs;

/***/ }),

/***/ "./node_modules/grommet/components/Chart/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Chart/utils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeBounds = exports.normalizeValues = void 0;

var normalizeValues = function normalizeValues(values) {
  return (values || []).map(function (value, index) {
    if (Array.isArray(value)) {
      return {
        value: value
      };
    }

    if (typeof value === 'number') {
      return {
        value: [index, value]
      };
    }

    return value;
  });
};

exports.normalizeValues = normalizeValues;

var normalizeBounds = function normalizeBounds(bounds, values) {
  var result = bounds;

  if (!result) {
    result = [[0, 1], [0, 1]];
    (values || []).forEach(function (value) {
      result[0][0] = Math.min(result[0][0], value.value[0]);
      result[0][1] = Math.max(result[0][1], value.value[0]);
      result[1][0] = Math.min(result[1][0], value.value[1]);
      result[1][1] = Math.max(result[1][1], value.value[1]);
    });
  }

  return result;
};

exports.normalizeBounds = normalizeBounds;

/***/ }),

/***/ "./node_modules/grommet/components/CheckBox/CheckBox.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/CheckBox/CheckBox.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CheckBox = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/grommet/utils/object.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledCheckBox = __webpack_require__(/*! ./StyledCheckBox */ "./node_modules/grommet/components/CheckBox/StyledCheckBox.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var stopLabelClick = function stopLabelClick(event) {
  // prevents clicking on the label trigging the event twice
  // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
  if (event.target.type !== 'checkbox') {
    event.stopPropagation();
  }
};

var CheckBox =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(CheckBox, _Component);

  function CheckBox(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var checked = props.checked,
        indeterminate = props.indeterminate,
        toggle = props.toggle;

    if (checked && indeterminate) {
      console.warn('Checkbox cannot be "checked" and "indeterminate" at the same time.');
    }

    if (toggle && indeterminate) {
      console.warn('Checkbox of type toggle does not have "indeterminate" state.');
    }

    return _this;
  }

  var _proto = CheckBox.prototype;

  _proto.render = function render() {
    var _ref;

    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        focus = _this$props.focus,
        forwardRef = _this$props.forwardRef,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        onChange = _this$props.onChange,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        toggle = _this$props.toggle,
        indeterminate = _this$props.indeterminate,
        rest = _objectWithoutPropertiesLoose(_this$props, ["checked", "disabled", "focus", "forwardRef", "id", "label", "name", "onChange", "reverse", "theme", "toggle", "indeterminate"]);

    var themeableProps = {
      checked: checked,
      disabled: disabled,
      focus: focus,
      reverse: reverse,
      toggle: toggle,
      indeterminate: indeterminate
    };
    var hidden;

    if (disabled && checked) {
      hidden = _react.default.createElement("input", {
        name: name,
        type: "hidden",
        value: "true"
      });
    }

    var _theme$checkBox$icons = theme.checkBox.icons,
        CheckedIcon = _theme$checkBox$icons.checked,
        IndeterminateIcon = _theme$checkBox$icons.indeterminate;
    var borderColor = (0, _utils.normalizeColor)(theme.checkBox.border.color, theme);

    if (checked) {
      borderColor = (0, _utils.normalizeColor)(theme.checkBox.color || 'control', theme);
    }

    var visual = toggle ? _react.default.createElement(_StyledCheckBox.StyledCheckBoxToggle, themeableProps, _react.default.createElement(_StyledCheckBox.StyledCheckBoxKnob, themeableProps)) : _react.default.createElement(_StyledCheckBox.StyledCheckBoxBox, _extends({
      as: _Box.Box,
      align: "center",
      justify: "center",
      width: theme.checkBox.size,
      height: theme.checkBox.size,
      border: {
        size: theme.checkBox.border.width,
        color: borderColor
      },
      round: theme.checkBox.check.radius
    }, themeableProps), !indeterminate && checked && (CheckedIcon ? _react.default.createElement(CheckedIcon, {
      theme: theme,
      as: _StyledCheckBox.StyledCheckBoxIcon
    }) : _react.default.createElement(_StyledCheckBox.StyledCheckBoxIcon, _extends({
      theme: theme,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, themeableProps), _react.default.createElement("path", {
      fill: "none",
      d: "M6,11.3 L10.3,16 L18,6.2"
    }))), !checked && indeterminate && (IndeterminateIcon ? _react.default.createElement(IndeterminateIcon, {
      theme: theme,
      as: _StyledCheckBox.StyledCheckBoxIcon
    }) : _react.default.createElement(_StyledCheckBox.StyledCheckBoxIcon, _extends({
      theme: theme,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, themeableProps), _react.default.createElement("path", {
      fill: "none",
      d: "M6,12 L18,12"
    }))));
    var side = reverse ? 'left' : 'right';

    var checkBoxNode = _react.default.createElement(_StyledCheckBox.StyledCheckBox, _extends({
      as: _Box.Box,
      align: "center",
      justify: "center",
      margin: label && (_ref = {}, _ref[side] = theme.checkBox.gap || 'small', _ref)
    }, themeableProps), _react.default.createElement(_StyledCheckBox.StyledCheckBoxInput, _extends({}, rest, {
      ref: forwardRef,
      type: "checkbox"
    }, (0, _object.removeUndefined)({
      id: id,
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }), themeableProps)), visual, hidden);

    var normalizedLabel = typeof label === 'string' ? _react.default.createElement("span", null, label) : label;
    var first = reverse ? normalizedLabel : checkBoxNode;
    var second = reverse ? checkBoxNode : normalizedLabel;
    return _react.default.createElement(_StyledCheckBox.StyledCheckBoxContainer, _extends({
      reverse: reverse
    }, (0, _object.removeUndefined)({
      htmlFor: id,
      disabled: disabled
    }), {
      checked: checked,
      onClick: stopLabelClick
    }, themeableProps), first, second);
  };

  return CheckBox;
}(_react.Component);

CheckBox.defaultProps = {};
Object.setPrototypeOf(CheckBox.defaultProps, _defaultProps.defaultProps);
var CheckBoxDoc;

if (true) {
  CheckBoxDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/CheckBox/doc.js").doc(CheckBox); // eslint-disable-line global-require
}

var CheckBoxWrapper = (0, _recompose.compose)((0, _hocs.withFocus)(), _styledComponents.withTheme, _hocs.withForwardRef)(CheckBoxDoc || CheckBox);
exports.CheckBox = CheckBoxWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/CheckBox/StyledCheckBox.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/CheckBox/StyledCheckBox.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledCheckBox = exports.StyledCheckBoxKnob = exports.StyledCheckBoxToggle = exports.StyledCheckBoxBox = exports.StyledCheckBoxInput = exports.StyledCheckBoxContainer = exports.StyledCheckBoxIcon = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var disabledStyle = "\n  opacity: 0.5;\n  cursor: default;\n";
var hoverStyle = (0, _styledComponents.css)([":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:", ";}"], function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.hover.border.color, props.theme);
});

var StyledCheckBoxIcon = _styledComponents.default.svg.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxIcon",
  componentId: "sc-1dbk5ju-0"
})(["box-sizing:border-box;stroke-width:", ";stroke:", ";width:", ";height:", ";", ";"], function (props) {
  return props.theme.checkBox.check.thickness;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.color || 'control', props.theme);
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.extend;
});

exports.StyledCheckBoxIcon = StyledCheckBoxIcon;
StyledCheckBoxIcon.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxIcon.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxContainer = _styledComponents.default.label.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxContainer",
  componentId: "sc-1dbk5ju-1"
})(["display:flex;flex-direction:row;align-items:center;user-select:none;", " ", " ", " ", ""], function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.theme.checkBox.hover.border.color && hoverStyle;
}, function (props) {
  return props.theme.checkBox.extend;
});

exports.StyledCheckBoxContainer = StyledCheckBoxContainer;
StyledCheckBoxContainer.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxContainer.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxInput = _styledComponents.default.input.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxInput",
  componentId: "sc-1dbk5ju-2"
})(["opacity:0;-moz-appearance:none;width:0;height:0;margin:0;", ":checked + span > span{left:calc( ", " - ", " );background:", ";}"], function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.color || 'control', props.theme);
});

exports.StyledCheckBoxInput = StyledCheckBoxInput;
StyledCheckBoxInput.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxInput.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxBox = _styledComponents.default.div.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxBox",
  componentId: "sc-1dbk5ju-3"
})(["", ";", ";"], function (props) {
  return props.focus && _utils.focusStyle;
}, function (props) {
  return props.theme.checkBox.check.extend;
});

exports.StyledCheckBoxBox = StyledCheckBoxBox;
StyledCheckBoxBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxBox.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxToggle = _styledComponents.default.span.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxToggle",
  componentId: "sc-1dbk5ju-4"
})(["box-sizing:border-box;vertical-align:middle;display:inline-block;width:", ";height:", ";border:", " solid;border-color:", ";border-radius:", ";background-color:", ";", ";", ";"], function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.border.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.background ? (0, _utils.normalizeColor)(props.theme.checkBox.toggle.background, props.theme) : 'transparent';
}, function (props) {
  return props.focus && _utils.focusStyle;
}, function (props) {
  return props.theme.checkBox.toggle.extend;
});

exports.StyledCheckBoxToggle = StyledCheckBoxToggle;
StyledCheckBoxToggle.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxToggle.defaultProps, _defaultProps.defaultProps);

var StyledCheckBoxKnob = _styledComponents.default.span.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxKnob",
  componentId: "sc-1dbk5ju-5"
})(["box-sizing:border-box;position:relative;display:inherit;top:-", ";left:-", ";transition:all 0.3s;width:", ";height:", ";background:", ";border-radius:", ";", ";"], function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.checkBox.toggle.color[props.theme.dark ? 'dark' : 'light'], props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.knob.extend;
});

exports.StyledCheckBoxKnob = StyledCheckBoxKnob;
StyledCheckBoxKnob.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxKnob.defaultProps, _defaultProps.defaultProps);

var StyledCheckBox = _styledComponents.default.div.withConfig({
  displayName: "StyledCheckBox",
  componentId: "sc-1dbk5ju-6"
})(["flex-shrink:0;"]);

exports.StyledCheckBox = StyledCheckBox;
StyledCheckBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBox.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/CheckBox/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/CheckBox/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(CheckBox) {
  var DocumentedCheckBox = (0, _reactDesc.describe)(CheckBox).availableAt((0, _utils.getAvailableAtBadge)('CheckBox')).description('A checkbox toggle control.').usage("import { CheckBox } from 'grommet';\n<CheckBox />").intrinsicElement('input');
  DocumentedCheckBox.propTypes = {
    checked: _reactDesc.PropTypes.bool.description('Same as React <input checked={} />').defaultValue(false),
    disabled: _reactDesc.PropTypes.bool.description("Same as React <input disabled={} />. Also adds a hidden input element\n      with the same name so form submissions work.").defaultValue(false),
    id: _reactDesc.PropTypes.string.description('The DOM id attribute value to use for the underlying <input/> element.'),
    label: _reactDesc.PropTypes.node.description('Label text to place next to the control.'),
    name: _reactDesc.PropTypes.string.description('The DOM name attribute value to use for the underlying <input/> element.'),
    onChange: _reactDesc.PropTypes.func.description("Function that will be called when the user clicks the check box. It\n      will be passed a React event object. The current state can be accessed\n      via event.target.checked. Same as React <input onChange={} />."),
    reverse: _reactDesc.PropTypes.bool.description('Whether to show the label in front of the checkbox.').defaultValue(false),
    toggle: _reactDesc.PropTypes.bool.description('Whether to visualize it as a toggle switch.').defaultValue(false),
    indeterminate: _reactDesc.PropTypes.bool.description("Whether state is indeterminate.\nNOTE: This can only be used with non-toggle components").defaultValue(false)
  };
  return DocumentedCheckBox;
};

exports.doc = doc;
var themeDoc = {
  'checkBox.border.color': {
    description: 'The border color when unchecked.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: "{ dark: 'rgba(255, 255, 255, 0.5)', light: 'rgba(0, 0, 0, 0.15)' }"
  },
  'checkBox.border.width': {
    description: 'The border width when unchecked.',
    type: 'string',
    defaultValue: '2px'
  },
  'checkBox.check.extend': {
    description: 'Any additional style for checked CheckBox.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'checkBox.check.radius': {
    description: 'The radius of the checked icon.',
    type: 'string',
    defaultValue: '4px'
  },
  'checkBox.check.thickness': {
    description: 'The stroke width of the checked icon.',
    type: 'string',
    defaultValue: '4px'
  },
  'checkBox.color': {
    description: 'The stroke color for the CheckBox icon, and the border when checked.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: undefined
  },
  'checkBox.extend': {
    description: 'Any additional style for CheckBox.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'checkBox.gap': {
    description: 'The right margin of the CheckBox to its label.',
    type: 'string',
    defaultValue: undefined
  },
  'checkBox.hover.border.color': {
    description: 'The border color on hover.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: "{ dark: 'white', light: 'black' }"
  },
  'checkBox.icon.size': {
    description: 'The size of the checked icon.',
    type: 'string',
    defaultValue: undefined
  },
  'checkBox.icon.extend': {
    description: 'Any additional style for CheckBox icon.',
    type: 'string | (props)=>{}',
    defaultValue: undefined
  },
  'checkBox.icons.checked': {
    description: 'The icon to use when checked.',
    type: 'React.Element',
    defaultValue: undefined
  },
  'checkBox.icons.indeterminate': {
    description: 'The icon to use when indeterminate.',
    type: 'React.Element',
    defaultValue: undefined
  },
  'checkBox.size': {
    description: 'The height and width used for the CheckBox icon.',
    type: 'string',
    defaultValue: '24px'
  },
  'checkBox.toggle.background': {
    description: 'The background color of the toggle.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: undefined
  },
  'checkBox.toggle.color': {
    description: 'The color of the toggle knob.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: "{ dark: '#d9d9d9', light: '#d9d9d9' }"
  },
  'checkBox.toggle.extend': {
    description: 'Any additional style for CheckBox toggle.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'checkBox.toggle.knob.extend': {
    description: 'Any additional style for the CheckBox toggle knob.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'checkBox.toggle.radius': {
    description: 'The border radius used for the toggle and the knob.',
    type: 'string',
    defaultValue: '24px'
  },
  'checkBox.toggle.size': {
    description: 'The width size of the toggle.',
    type: 'string',
    defaultValue: '42px'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/CheckBox/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/CheckBox/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CheckBox = void 0;

var _CheckBox = __webpack_require__(/*! ./CheckBox */ "./node_modules/grommet/components/CheckBox/CheckBox.js");

exports.CheckBox = _CheckBox.CheckBox;

/***/ }),

/***/ "./node_modules/grommet/components/Clock/Analog.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Clock/Analog.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Analog = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _StyledClock = __webpack_require__(/*! ./StyledClock */ "./node_modules/grommet/components/Clock/StyledClock.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// this will serve both minutes and hours (360 / 6)
var ANGLE_UNIT = 6; // 360 / 12

var HOUR_ANGLE_UNIT = 30;

var getClockDimensions = function getClockDimensions(theme) {
  return {
    size: (0, _utils.parseMetricToNum)(theme.clock.analog.size.medium),
    secondSize: (0, _utils.parseMetricToNum)(theme.clock.analog.second.size),
    minuteSize: (0, _utils.parseMetricToNum)(theme.clock.analog.minute.size),
    hourSize: (0, _utils.parseMetricToNum)(theme.clock.analog.hour.size)
  };
};

var getClockState = function getClockState(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  var hour12 = hours > 12 ? hours - 12 : hours;
  var minuteAngle = minutes * ANGLE_UNIT;
  return {
    // offset hour angle by half of the minute angle so that it gets closer to the next hour
    hourAngle: hour12 * HOUR_ANGLE_UNIT + minutes / 2,
    minuteAngle: minuteAngle,
    secondAngle: seconds * ANGLE_UNIT
  };
};

var Analog =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Analog, _Component);

  function Analog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  Analog.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var elements = nextProps.elements;
    var nextState = getClockState(elements);

    if (prevState.hourAngle === undefined || Object.keys(nextState).some(function (k) {
      return prevState[k] !== nextState[k];
    })) {
      return nextState;
    }

    return null;
  };

  var _proto = Analog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        precision = _this$props.precision,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["precision", "theme"]);

    var _this$state = this.state,
        hourAngle = _this$state.hourAngle,
        minuteAngle = _this$state.minuteAngle,
        secondAngle = _this$state.secondAngle;

    var _getClockDimensions = getClockDimensions(theme),
        size = _getClockDimensions.size,
        secondSize = _getClockDimensions.secondSize,
        minuteSize = _getClockDimensions.minuteSize,
        hourSize = _getClockDimensions.hourSize;

    var halfSize = size / 2;
    var secondHand;

    if (precision === 'seconds') {
      secondHand = _react.default.createElement(_StyledClock.StyledSecond, {
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: secondSize,
        stroke: "#000000",
        strokeLinecap: theme.clock.analog.second.shape,
        style: {
          transform: "rotate(" + secondAngle + "deg)",
          transformOrigin: halfSize + "px " + halfSize + "px"
        }
      });
    }

    var minuteHand;

    if (precision === 'seconds' || precision === 'minutes') {
      minuteHand = _react.default.createElement(_StyledClock.StyledMinute, {
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: minuteSize,
        stroke: "#000000",
        strokeLinecap: theme.clock.analog.minute.shape,
        style: {
          transform: "rotate(" + minuteAngle + "deg)",
          transformOrigin: halfSize + "px " + halfSize + "px"
        }
      });
    }

    return _react.default.createElement(_StyledClock.StyledAnalog, _extends({
      version: "1.1",
      width: size,
      height: size,
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 " + size + " " + size
    }, rest), secondHand, minuteHand, _react.default.createElement(_StyledClock.StyledHour, {
      x1: halfSize,
      y1: halfSize,
      x2: halfSize,
      y2: hourSize,
      stroke: "#000000",
      strokeLinecap: theme.clock.analog.hour.shape,
      style: {
        transform: "rotate(" + hourAngle + "deg)",
        transformOrigin: halfSize + "px " + halfSize + "px"
      }
    }));
  };

  return Analog;
}(_react.Component);

_defineProperty(Analog, "defaultProps", {
  size: 'medium'
});

Object.setPrototypeOf(Analog.defaultProps, _defaultProps.defaultProps);
var AnalogWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Analog);
exports.Analog = AnalogWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Clock/Clock.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Clock/Clock.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Clock = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Analog = __webpack_require__(/*! ./Analog */ "./node_modules/grommet/components/Clock/Analog.js");

var _Digital = __webpack_require__(/*! ./Digital */ "./node_modules/grommet/components/Clock/Digital.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TIME_REGEXP = /T([0-9]{2}):([0-9]{2})(?::([0-9.,]{2,}))?/;
var DURATION_REGEXP = /^(-|\+)?P.*T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?$/;

var parseTime = function parseTime(time, hourLimit) {
  var result = {};

  if (time) {
    var match = DURATION_REGEXP.exec(time);

    if (match) {
      result.hours = parseFloat(match[2]);

      if (hourLimit === 12) {
        result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
      }

      result.minutes = parseFloat(match[3]) || 0;
      result.seconds = parseFloat(match[4]) || 0;
      result.duration = true;
    } else {
      match = TIME_REGEXP.exec(time);

      if (match) {
        result.hours = parseFloat(match[1]);

        if (hourLimit === 12) {
          result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
        }

        result.minutes = parseFloat(match[2]) || 0;
        result.seconds = parseFloat(match[3]) || 0;
      } else {
        console.error("Grommet Clock cannot parse '" + time + "'");
      }
    }
  } else {
    var date = new Date();
    result.hours = date.getHours();
    result.minutes = date.getMinutes();
    result.seconds = date.getSeconds();
  }

  return result;
};

var Clock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Clock, _Component);

  function Clock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  Clock.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var hourLimit = nextProps.hourLimit,
        time = nextProps.time;
    var elements = prevState.elements;

    if (!elements || time) {
      var nextElements = parseTime(time, hourLimit);

      if (!elements) {
        return {
          elements: nextElements
        };
      }

      if (Object.keys(nextElements).some(function (k) {
        return elements[k] !== nextElements[k];
      })) {
        return {
          elements: nextElements
        };
      }
    }

    return null;
  };

  var _proto = Clock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var run = this.props.run;

    if (run) {
      this.run();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var run = this.props.run;

    if (run && !prevProps.run) {
      this.run();
    } else if (!run && prevProps.run) {
      clearInterval(this.timer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  _proto.run = function run() {
    var _this2 = this;

    var _this$props = this.props,
        hourLimit = _this$props.hourLimit,
        onChange = _this$props.onChange,
        precision = _this$props.precision,
        run = _this$props.run;
    var elements = this.state.elements; // set the interval time based on the precision

    var interval = 1000;
    var increment = 'seconds';

    if (precision !== 'seconds' && elements.seconds === 0) {
      interval *= 60;
      increment = 'minutes';

      if (precision !== 'minutes' && elements.minutes === 0) {
        interval *= 60;
        increment = 'hours';
      }
    }

    clearInterval(this.timer);
    this.timer = setInterval(function () {
      var previousElements = _this2.state.elements;

      var nextElements = _extends({}, previousElements); // adjust time based on precision


      if (increment === 'seconds') {
        if (run === 'backward') {
          nextElements.seconds -= 1;
        } else {
          nextElements.seconds += 1;
        }
      } else if (increment === 'minutes') {
        if (run === 'backward') {
          nextElements.minutes -= 1;
        } else {
          nextElements.minutes += 1;
        }
      } else if (increment === 'hours') {
        if (run === 'backward') {
          nextElements.hours -= 1;
        } else {
          nextElements.hours += 1;
        }
      } // deal with overflows


      if (nextElements.seconds >= 60) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 0;
      } else if (nextElements.seconds < 0) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 59;
      }

      if (nextElements.minutes >= 60) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 0;
      } else if (nextElements.minutes < 0) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 59;
      }

      if (nextElements.hours >= 24 || nextElements.hours < 0) {
        nextElements.hours = 0;
      }

      if (hourLimit === 12) {
        nextElements.hours12 = nextElements.hours > 12 ? nextElements.hours - 12 : nextElements.hours;
      }

      _this2.setState({
        elements: nextElements
      }, function () {
        if (onChange) {
          if (elements.duration) {
            onChange("P" + elements.hours + "H" + elements.minutes + "M" + elements.seconds + "S");
          } else {
            onChange("T" + elements.hours + ":" + elements.minutes + ":" + elements.seconds);
          }
        }
      });
    }, interval);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        type = _this$props2.type,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["type"]);

    var elements = this.state.elements;
    var content;

    if (type === 'analog') {
      content = _react.default.createElement(_Analog.Analog, _extends({
        elements: elements
      }, rest));
    } else if (type === 'digital') {
      content = _react.default.createElement(_Digital.Digital, _extends({
        elements: elements
      }, rest));
    }

    return content;
  };

  return Clock;
}(_react.Component);

_defineProperty(Clock, "defaultProps", {
  hourLimit: 24,
  precision: 'seconds',
  run: 'forward',
  size: 'medium',
  type: 'analog'
});

var ClockDoc;

if (true) {
  ClockDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Clock/doc.js").doc(Clock); // eslint-disable-line global-require
}

var ClockWrapper = ClockDoc || Clock;
exports.Clock = ClockWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Clock/Digital.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Clock/Digital.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Digital = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _StyledClock = __webpack_require__(/*! ./StyledClock */ "./node_modules/grommet/components/Clock/StyledClock.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Digit =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Digit, _Component);

  function Digit() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  Digit.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var number = nextProps.number;

    if (number !== prevState.number) {
      return {
        previous: prevState.number,
        number: number
      };
    }

    return null;
  };

  var _proto = Digit.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    var previous = this.state.previous;

    if (prevState.previous === undefined && previous !== undefined) {
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.setState({
          previous: undefined
        });
      }, 900);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  _proto.render = function render() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props = this.props,
        run = _this$props.run,
        size = _this$props.size;
    var _this$state = this.state,
        number = _this$state.number,
        previous = _this$state.previous;

    if (previous !== undefined) {
      var direction = run === 'backward' ? 'down' : 'up';
      return _react.default.createElement(_StyledClock.StyledDigitalDigit, {
        size: size
      }, _react.default.createElement(_StyledClock.StyledDigitalPrevious, {
        direction: direction
      }, Math.floor(previous)), _react.default.createElement(_StyledClock.StyledDigitalNext, {
        direction: direction
      }, Math.floor(number)));
    }

    return _react.default.createElement(_StyledClock.StyledDigitalDigit, {
      size: size
    }, Math.floor(number));
  };

  return Digit;
}(_react.Component);

var Element = function Element(_ref) {
  var number = _ref.number,
      run = _ref.run,
      sep = _ref.sep,
      size = _ref.size;
  var tens = Math.floor(number / 10);
  var ones = number % 10;
  var result = [_react.default.createElement(Digit, {
    key: "tens",
    run: run,
    size: size,
    number: tens
  }), _react.default.createElement(Digit, {
    key: "ones",
    run: run,
    size: size,
    number: ones
  })];

  if (sep) {
    result.unshift(_react.default.createElement(_StyledClock.StyledDigitalDigit, {
      key: "sep",
      size: size
    }, ":"));
  }

  return result;
};

var Digital = function Digital(props) {
  var elements = props.elements,
      precision = props.precision,
      run = props.run,
      size = props.size,
      rest = _objectWithoutPropertiesLoose(props, ["elements", "precision", "run", "size"]);

  var seconds;

  if (precision === 'seconds') {
    seconds = _react.default.createElement(Element, {
      number: elements.seconds,
      run: run,
      size: size,
      sep: true
    });
  }

  var minutes;

  if (precision === 'minutes' || precision === 'seconds') {
    minutes = _react.default.createElement(Element, {
      number: elements.minutes,
      run: run,
      size: size,
      sep: true
    });
  }

  return _react.default.createElement(_Box.Box, _extends({
    direction: "row"
  }, rest), _react.default.createElement(Element, {
    number: elements.hours12 || elements.hours,
    run: run,
    size: size
  }), minutes, seconds);
};

exports.Digital = Digital;

/***/ }),

/***/ "./node_modules/grommet/components/Clock/StyledClock.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Clock/StyledClock.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledDigitalNext = exports.StyledDigitalPrevious = exports.StyledDigitalDigit = exports.StyledAnalog = exports.StyledSecond = exports.StyledMinute = exports.StyledHour = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var StyledHour = _styledComponents.default.line.withConfig({
  displayName: "StyledClock__StyledHour",
  componentId: "y4xw8s-0"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.hour.width;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.clock.analog.hour.color, props.theme);
});

exports.StyledHour = StyledHour;
StyledHour.defaultProps = {};
Object.setPrototypeOf(StyledHour.defaultProps, _defaultProps.defaultProps);

var StyledMinute = _styledComponents.default.line.withConfig({
  displayName: "StyledClock__StyledMinute",
  componentId: "y4xw8s-1"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.minute.width;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.clock.analog.minute.color, props.theme);
});

exports.StyledMinute = StyledMinute;
StyledMinute.defaultProps = {};
Object.setPrototypeOf(StyledMinute.defaultProps, _defaultProps.defaultProps);

var StyledSecond = _styledComponents.default.line.withConfig({
  displayName: "StyledClock__StyledSecond",
  componentId: "y4xw8s-2"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.second.width;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.clock.analog.second.color, props.theme);
});

exports.StyledSecond = StyledSecond;
StyledSecond.defaultProps = {};
Object.setPrototypeOf(StyledSecond.defaultProps, _defaultProps.defaultProps);

var StyledAnalog = _styledComponents.default.svg.withConfig({
  displayName: "StyledClock__StyledAnalog",
  componentId: "y4xw8s-3"
})(["width:", ";height:", ";", " ", ";"], function (props) {
  return props.theme.clock.analog.size[props.size];
}, function (props) {
  return props.theme.clock.analog.size[props.size];
}, _utils.genericStyles, function (props) {
  return props.theme.clock.analog && props.theme.clock.analog.extend;
});

exports.StyledAnalog = StyledAnalog;
StyledAnalog.defaultProps = {};
Object.setPrototypeOf(StyledAnalog.defaultProps, _defaultProps.defaultProps);

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.clock.digital.text[size];
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var StyledDigitalDigit = _styledComponents.default.div.withConfig({
  displayName: "StyledClock__StyledDigitalDigit",
  componentId: "y4xw8s-4"
})(["position:relative;width:0.8em;text-align:center;overflow:hidden;", ";"], function (props) {
  return sizeStyle(props);
});

exports.StyledDigitalDigit = StyledDigitalDigit;
StyledDigitalDigit.defaultProps = {};
Object.setPrototypeOf(StyledDigitalDigit.defaultProps, _defaultProps.defaultProps);
var previousUp = (0, _styledComponents.keyframes)(["0%{transform:translateY(0);}100%{transform:translateY(-100%);}"]);
var previousDown = (0, _styledComponents.keyframes)(["0%{transform:translateY(0);}100%{transform:translateY(100%);}"]);

var StyledDigitalPrevious = _styledComponents.default.div.withConfig({
  displayName: "StyledClock__StyledDigitalPrevious",
  componentId: "y4xw8s-5"
})(["position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:", " 0.5s forwards;"], function (props) {
  return props.direction === 'down' ? previousDown : previousUp;
});

exports.StyledDigitalPrevious = StyledDigitalPrevious;
StyledDigitalPrevious.defaultProps = {};
Object.setPrototypeOf(StyledDigitalPrevious.defaultProps, _defaultProps.defaultProps);
var nextUp = (0, _styledComponents.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]);
var nextDown = (0, _styledComponents.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]);

var StyledDigitalNext = _styledComponents.default.div.withConfig({
  displayName: "StyledClock__StyledDigitalNext",
  componentId: "y4xw8s-6"
})(["position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:", " 0.5s forwards;"], function (props) {
  return props.direction === 'down' ? nextDown : nextUp;
});

exports.StyledDigitalNext = StyledDigitalNext;
StyledDigitalNext.defaultProps = {};
Object.setPrototypeOf(StyledDigitalNext.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Clock/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Clock/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Clock) {
  var DocumentedClock = (0, _reactDesc.describe)(Clock).availableAt((0, _utils.getAvailableAtBadge)('Clock')).description('A clock with timezone awareness.').usage("import { Clock } from 'grommet';\n<Clock />").intrinsicElement(['div', 'svg']);
  DocumentedClock.propTypes = _extends({}, _utils.genericProps, {
    hourLimit: _reactDesc.PropTypes.oneOf([12, 24, '12', '24']).description('Whether to roll over the hours after 12 or after 24.').defaultValue(24),
    onChange: _reactDesc.PropTypes.func.description("If the clock is running, this function will be called with the\n      current time value each time it changes."),
    precision: _reactDesc.PropTypes.oneOf(['hours', 'minutes', 'seconds']).description('How precise a time to represent.').defaultValue('seconds'),
    run: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['backward', 'forward'])]).description("Whether the clock should actively adjust time or be fixed to the\n      time specified. 'backward' could be used as a countdown timer.").defaultValue('forward'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('Clock size').defaultValue('medium'),
    time: _reactDesc.PropTypes.string.description("ISO8601 time or duration. For example: 'PT8H12M23S',\n      'T08:12:23', or '2015-02-22T08:12:23'. Any included date\n      portion will be ignored for an analog clock. If not provided, the\n      current browser time will be used."),
    type: _reactDesc.PropTypes.oneOf(['analog', 'digital']).description('What type of visualization to show.').defaultValue('analog')
  });
  return DocumentedClock;
};

exports.doc = doc;
var themeDoc = {
  'clock.analog.extend': {
    description: 'Any additional style for Clock.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'clock.analog.hour.color': {
    description: 'The color of the hour hand.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: light-2, light: dark-3 }'
  },
  'clock.analog.hour.shape': {
    description: 'The shape of the hour hand',
    type: 'string',
    defaultValue: 'round'
  },
  'clock.analog.hour.size': {
    description: 'The length of the hour hand.',
    type: 'string',
    defaultValue: '24px'
  },
  'clock.analog.hour.width': {
    description: 'The thickness of the hour hand',
    type: 'string',
    defaultValue: '8px'
  },
  'clock.analog.minute.color': {
    description: 'The color of the hour minute.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: light-4, light: dark-3 }'
  },
  'clock.analog.minute.shape': {
    description: 'The shape of the minute hand.',
    type: 'string',
    defaultValue: 'round'
  },
  'clock.analog.minute.size': {
    description: 'The length of the minute hand.',
    type: 'string',
    defaultValue: '12px'
  },
  'clock.analog.minute.width': {
    description: 'The thickness of the minute hand.',
    type: 'string',
    defaultValue: '4px'
  },
  'clock.analog.second.color': {
    description: 'The color of the seconds hand',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: accent-1, light: accent-1 }'
  },
  'clock.analog.second.shape': {
    description: 'The shape of the seconds hand.',
    type: 'string',
    defaultValue: 'round'
  },
  'clock.analog.second.size': {
    description: 'The length of the seconds hand.',
    type: 'string',
    defaultValue: '10px'
  },
  'clock.analog.second.width': {
    description: 'The thickness of the seconds hand.',
    type: 'string',
    defaultValue: '3px'
  },
  'clock.analog.size.medium': {
    description: 'The whole size of the Analog clock',
    type: 'string',
    defaultValue: '96px'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Clock/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Clock/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Clock = void 0;

var _Clock = __webpack_require__(/*! ./Clock */ "./node_modules/grommet/components/Clock/Clock.js");

exports.Clock = _Clock.Clock;

/***/ }),

/***/ "./node_modules/grommet/components/Collapsible/Collapsible.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/Collapsible/Collapsible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Collapsible = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var animatedBoxProperty = function animatedBoxProperty(direction) {
  return direction === 'horizontal' ? 'width' : 'height';
};

var AnimatedBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "Collapsible__AnimatedBox",
  componentId: "sc-15kniua-0"
})(["", ";"], function (props) {
  return !props.animate && (props.open ? "\n    max-" + animatedBoxProperty(props.collapsibleDirection) + ": unset;\n    visibility: visible;\n  " : "\n    max-" + animatedBoxProperty(props.collapsibleDirection) + ": 0;\n    visibility: hidden;\n    overflow: hidden;\n  ");
});

var Collapsible =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapsible, _Component);

  Collapsible.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var open = nextProps.open;

    if (open !== prevState.open) {
      return {
        animate: true,
        open: open
      };
    }

    return null;
  };

  function Collapsible(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    /* eslint-disable-next-line react/prop-types */

    _defineProperty(_assertThisInitialized(_this), "ref", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "getSnapshotBeforeUpdate", function () {
      return _this.ref.current && _this.ref.current.getBoundingClientRect();
    });

    _this.state = {
      open: props.open,
      animate: false
    };
    return _this;
  }

  var _proto = Collapsible.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    var _this2 = this;

    var _this$props = this.props,
        direction = _this$props.direction,
        _this$props$theme$col = _this$props.theme.collapsible,
        minSpeed = _this$props$theme$col.minSpeed,
        baseline = _this$props$theme$col.baseline;
    var _this$state = this.state,
        animate = _this$state.animate,
        open = _this$state.open;
    var container = this.ref.current;

    if (container) {
      var dimension = animatedBoxProperty(direction);
      var boudingClientRect = container.getBoundingClientRect();
      var dimensionSize = boudingClientRect[dimension];
      var shouldAnimate = animate && prevState.open !== open;

      if (open && snapshot[dimension] && dimensionSize !== snapshot[dimension]) {
        shouldAnimate = true;
      }

      if (shouldAnimate) {
        if (this.animationTimeout) {
          clearTimeout(this.animationTimeout);
        }

        var speed = Math.max(dimensionSize / baseline * minSpeed, minSpeed);
        container.style["max-" + dimension] = snapshot[dimension] + "px";
        container.style.overflow = 'hidden';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            container.style.transition = "max-" + dimension + " " + speed + "ms, visibility 50ms";
            container.style["max-" + dimension] = open ? dimensionSize + "px" : '0px';
            _this2.animationTimeout = setTimeout(function () {
              container.removeAttribute('style');

              _this2.setState({
                animate: false
              });
            }, speed);
          });
        });
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  };

  _proto.render = function render() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props2 = this.props,
        children = _this$props2.children,
        direction = _this$props2.direction;
    var _this$state2 = this.state,
        animate = _this$state2.animate,
        open = _this$state2.open;
    return _react.default.createElement(AnimatedBox, {
      "aria-hidden": !open,
      ref: this.ref,
      open: open,
      animate: animate,
      collapsibleDirection: direction
    }, children);
  };

  return Collapsible;
}(_react.Component);

Collapsible.defaultProps = {};
Object.setPrototypeOf(Collapsible.defaultProps, _defaultProps.defaultProps);
var CollapsibleDoc;

if (true) {
  CollapsibleDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Collapsible/doc.js").doc(Collapsible); // eslint-disable-line global-require
}

var CollapsibleWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(CollapsibleDoc || Collapsible);
exports.Collapsible = CollapsibleWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Collapsible/doc.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Collapsible/doc.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(Collapsible) {
  var DocumentedCollapsible = (0, _reactDesc.describe)(Collapsible).description('Expand or collapse animation.').usage("import { Collapsible } from 'grommet';\n<Collapsible open={true}>test</Collapsible>").intrinsicElement('div');
  DocumentedCollapsible.propTypes = {
    open: _reactDesc.PropTypes.bool.description('Whether or not the component should be open.'),
    direction: _reactDesc.PropTypes.oneOf(['horizontal', 'vertical']).description('Direction to animate the collapsible content.').defaultValue('vertical')
  };
  return DocumentedCollapsible;
};

exports.doc = doc;
var themeDoc = {
  'collapsible.minSpeed': {
    description: 'The minimum speed of Collapsible animation in milliseconds.',
    type: 'number',
    defaultValue: 200
  },
  'collapsible.baseline': {
    description: 'Default height to be used to calculate the optimal collapsible speed.',
    type: 'number',
    defaultValue: 500
  },
  'collapsible.extend': {
    description: 'Any additional style for Collapsible.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Collapsible/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Collapsible/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Collapsible = void 0;

var _Collapsible = __webpack_require__(/*! ./Collapsible */ "./node_modules/grommet/components/Collapsible/Collapsible.js");

exports.Collapsible = _Collapsible.Collapsible;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/Body.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/Body.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Body = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _InfiniteScroll = __webpack_require__(/*! ../InfiniteScroll */ "./node_modules/grommet/components/InfiniteScroll/index.js");

var _TableRow = __webpack_require__(/*! ../TableRow */ "./node_modules/grommet/components/TableRow/index.js");

var _TableCell = __webpack_require__(/*! ../TableCell */ "./node_modules/grommet/components/TableCell/index.js");

var _Cell = __webpack_require__(/*! ./Cell */ "./node_modules/grommet/components/DataTable/Cell.js");

var _StyledDataTable = __webpack_require__(/*! ./StyledDataTable */ "./node_modules/grommet/components/DataTable/StyledDataTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Body = function Body(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      onMore = _ref.onMore,
      primaryProperty = _ref.primaryProperty,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, ["columns", "data", "onMore", "primaryProperty", "size", "theme"]);

  return _react.default.createElement(_StyledDataTable.StyledDataTableBody, _extends({
    size: size
  }, rest), _react.default.createElement(_InfiniteScroll.InfiniteScroll, {
    items: data,
    onMore: onMore,
    scrollableAncestor: "window",
    renderMarker: function renderMarker(marker) {
      return _react.default.createElement(_TableRow.TableRow, null, _react.default.createElement(_TableCell.TableCell, null, marker));
    }
  }, function (datum) {
    return _react.default.createElement(_StyledDataTable.StyledDataTableRow, {
      key: datum[primaryProperty],
      size: size
    }, columns.map(function (column) {
      return _react.default.createElement(_Cell.Cell, {
        key: column.property,
        context: "body",
        column: column,
        datum: datum,
        primaryProperty: primaryProperty,
        scope: column.primary || column.property === primaryProperty ? 'row' : undefined
      });
    }));
  }));
};

exports.Body = Body;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/Cell.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/Cell.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Cell = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _TableCell = __webpack_require__(/*! ../TableCell */ "./node_modules/grommet/components/TableCell/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Cell = function Cell(_ref) {
  var _ref$column = _ref.column,
      align = _ref$column.align,
      property = _ref$column.property,
      render = _ref$column.render,
      context = _ref.context,
      datum = _ref.datum,
      primaryProperty = _ref.primaryProperty,
      scope = _ref.scope,
      theme = _ref.theme;
  var content;

  if (render) {
    content = render(datum);
  } else if (datum[property] !== undefined) {
    content = datum[property];
  }

  if (typeof content === 'string' || typeof content === 'number') {
    var textProps = property === primaryProperty ? theme.dataTable.primary : {};
    content = _react.default.createElement(_Text.Text, textProps, content);
  }

  return _react.default.createElement(_TableCell.TableCell, _extends({
    scope: scope
  }, theme.dataTable[context], {
    align: align
  }), content);
};

Cell.defaultProps = {};
Object.setPrototypeOf(Cell.defaultProps, _defaultProps.defaultProps);
var CellWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Cell);
exports.Cell = CellWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/DataTable.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/DataTable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DataTable = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Header = __webpack_require__(/*! ./Header */ "./node_modules/grommet/components/DataTable/Header.js");

var _Footer = __webpack_require__(/*! ./Footer */ "./node_modules/grommet/components/DataTable/Footer.js");

var _Body = __webpack_require__(/*! ./Body */ "./node_modules/grommet/components/DataTable/Body.js");

var _GroupedBody = __webpack_require__(/*! ./GroupedBody */ "./node_modules/grommet/components/DataTable/GroupedBody.js");

var _buildState = __webpack_require__(/*! ./buildState */ "./node_modules/grommet/components/DataTable/buildState.js");

var _StyledDataTable = __webpack_require__(/*! ./StyledDataTable */ "./node_modules/grommet/components/DataTable/StyledDataTable.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(DataTable, _Component);

  function DataTable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onFiltering", function (property) {
      _this.setState({
        filtering: property
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFilter", function (property, value) {
      /* eslint-disable-next-line react/prop-types */
      var onSearch = _this.props.onSearch;
      var filters = _this.state.filters;

      var nextFilters = _extends({}, filters);

      nextFilters[property] = value;

      _this.setState({
        filters: nextFilters
      }); // Let caller know about search, if interested


      if (onSearch) {
        onSearch(nextFilters);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSort", function (property) {
      return function () {
        var sort = _this.state.sort;
        var ascending = sort && property === sort.property ? !sort.ascending : true;

        _this.setState({
          sort: {
            property: property,
            ascending: ascending
          }
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleGroup", function (groupValue) {
      return function () {
        var groupState = _this.state.groupState;

        var nextGroupState = _extends({}, groupState);

        nextGroupState[groupValue] = _extends({}, nextGroupState[groupValue], {
          expanded: !nextGroupState[groupValue].expanded
        });

        _this.setState({
          groupState: nextGroupState
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleGroups", function () {
      var groupState = _this.state.groupState;
      var expanded = Object.keys(groupState).filter(function (k) {
        return !groupState[k].expanded;
      }).length === 0;
      var nextGroupState = {};
      Object.keys(groupState).forEach(function (k) {
        nextGroupState[k] = _extends({}, groupState[k], {
          expanded: !expanded
        });
      });

      _this.setState({
        groupState: nextGroupState
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (property) {
      return function (width) {
        var widths = _this.state.widths;

        var nextWidths = _extends({}, widths || {});

        nextWidths[property] = width;

        _this.setState({
          widths: nextWidths
        });
      };
    });

    return _this;
  }

  DataTable.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    return (0, _buildState.buildState)(nextProps, prevState);
  };

  var _proto = DataTable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        columns = _this$props.columns,
        propsData = _this$props.data,
        groupBy = _this$props.groupBy,
        onMore = _this$props.onMore,
        resizeable = _this$props.resizeable,
        size = _this$props.size,
        sortable = _this$props.sortable,
        onSearch = _this$props.onSearch,
        rest = _objectWithoutPropertiesLoose(_this$props, ["columns", "data", "groupBy", "onMore", "resizeable", "size", "sortable", "onSearch"]);

    var _this$state = this.state,
        data = _this$state.data,
        filtering = _this$state.filtering,
        filters = _this$state.filters,
        footerValues = _this$state.footerValues,
        groups = _this$state.groups,
        groupState = _this$state.groupState,
        primaryProperty = _this$state.primaryProperty,
        showFooter = _this$state.showFooter,
        sort = _this$state.sort,
        widths = _this$state.widths;

    if (size && resizeable) {
      console.warn('DataTable cannot combine "size" and "resizeble".');
    }

    return _react.default.createElement(_StyledDataTable.StyledDataTable, rest, _react.default.createElement(_Header.Header, {
      columns: columns,
      filtering: filtering,
      filters: filters,
      groups: groups,
      groupState: groupState,
      size: size,
      sort: sort,
      widths: widths,
      onFiltering: this.onFiltering,
      onFilter: this.onFilter,
      onResize: resizeable ? this.onResize : undefined,
      onSort: sortable ? this.onSort : undefined,
      onToggle: this.onToggleGroups
    }), groups ? _react.default.createElement(_GroupedBody.GroupedBody, {
      columns: columns,
      groupBy: groupBy,
      groups: groups,
      groupState: groupState,
      primaryProperty: primaryProperty,
      onToggle: this.onToggleGroup
    }) : _react.default.createElement(_Body.Body, {
      columns: columns,
      data: data,
      onMore: onMore,
      primaryProperty: primaryProperty,
      size: size
    }), showFooter && _react.default.createElement(_Footer.Footer, {
      columns: columns,
      footerValues: footerValues,
      groups: groups,
      primaryProperty: primaryProperty,
      size: size
    }));
  };

  return DataTable;
}(_react.Component);

_defineProperty(DataTable, "defaultProps", {
  columns: [],
  data: []
});

var DataTableDoc;

if (true) {
  DataTableDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/DataTable/doc.js").doc(DataTable); // eslint-disable-line global-require
}

var DataTableWrapper = DataTableDoc || DataTable;
exports.DataTable = DataTableWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/ExpanderCell.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/ExpanderCell.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ExpanderCell = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _TableCell = __webpack_require__(/*! ../TableCell */ "./node_modules/grommet/components/TableCell/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ExpanderCell = function ExpanderCell(_ref) {
  var context = _ref.context,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, ["context", "expanded", "onToggle", "theme"]);

  var ExpandIcon = theme.dataTable.icons[expanded ? 'contract' : 'expand'];

  if (onToggle) {
    return _react.default.createElement(_TableCell.TableCell, {
      size: "xxsmall",
      plain: true,
      verticalAlign: "top"
    }, _react.default.createElement(_Button.Button, {
      fill: true,
      a11yTitle: expanded ? 'collapse' : 'expand',
      hoverIndicator: true,
      disabled: !onToggle,
      onClick: onToggle
    }, _react.default.createElement(_Box.Box, _extends({}, _extends({}, theme.table[context], theme.dataTable[context]), rest, {
      align: "center",
      pad: "xsmall"
    }), _react.default.createElement(ExpandIcon, {
      color: (0, _utils.normalizeColor)('border', theme)
    }))));
  }

  return _react.default.createElement(_TableCell.TableCell, {
    size: "xxsmall",
    verticalAlign: "top"
  });
};

ExpanderCell.defaultProps = {};
Object.setPrototypeOf(ExpanderCell.defaultProps, _defaultProps.defaultProps);
var ExpanderCellWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(ExpanderCell);
exports.ExpanderCell = ExpanderCellWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/Footer.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/Footer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Footer = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _TableRow = __webpack_require__(/*! ../TableRow */ "./node_modules/grommet/components/TableRow/index.js");

var _TableCell = __webpack_require__(/*! ../TableCell */ "./node_modules/grommet/components/TableCell/index.js");

var _Cell = __webpack_require__(/*! ./Cell */ "./node_modules/grommet/components/DataTable/Cell.js");

var _StyledDataTable = __webpack_require__(/*! ./StyledDataTable */ "./node_modules/grommet/components/DataTable/StyledDataTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      footerValues = _ref.footerValues,
      groups = _ref.groups,
      primaryProperty = _ref.primaryProperty,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, ["columns", "footerValues", "groups", "primaryProperty", "theme"]);

  return _react.default.createElement(_StyledDataTable.StyledDataTableFooter, rest, _react.default.createElement(_TableRow.TableRow, null, groups && _react.default.createElement(_TableCell.TableCell, {
    size: "xxsmall",
    plain: true,
    verticalAlign: "top"
  }, _react.default.createElement(_Box.Box, _extends({}, theme.table.footer, theme.dataTable.footer))), columns.map(function (column) {
    return _react.default.createElement(_Cell.Cell, {
      key: column.property,
      context: "footer",
      column: column,
      datum: footerValues,
      primaryProperty: primaryProperty
    });
  })));
};

Footer.defaultProps = {};
Object.setPrototypeOf(Footer.defaultProps, _defaultProps.defaultProps);
var FooterWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Footer);
exports.Footer = FooterWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/GroupedBody.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/GroupedBody.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.GroupedBody = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TableCell = __webpack_require__(/*! ../TableCell */ "./node_modules/grommet/components/TableCell/index.js");

var _Cell = __webpack_require__(/*! ./Cell */ "./node_modules/grommet/components/DataTable/Cell.js");

var _ExpanderCell = __webpack_require__(/*! ./ExpanderCell */ "./node_modules/grommet/components/DataTable/ExpanderCell.js");

var _StyledDataTable = __webpack_require__(/*! ./StyledDataTable */ "./node_modules/grommet/components/DataTable/StyledDataTable.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GroupedBody = function GroupedBody(_ref) {
  var columns = _ref.columns,
      groupBy = _ref.groupBy,
      groups = _ref.groups,
      groupState = _ref.groupState,
      primaryProperty = _ref.primaryProperty,
      onToggle = _ref.onToggle,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, ["columns", "groupBy", "groups", "groupState", "primaryProperty", "onToggle", "size", "theme"]);

  return _react.default.createElement(_StyledDataTable.StyledDataTableBody, _extends({
    size: size
  }, rest), groups.map(function (group) {
    var expanded = groupState[group.key].expanded;

    var content = _react.default.createElement(_StyledDataTable.StyledDataTableRow, {
      key: group.key,
      size: size
    }, _react.default.createElement(_ExpanderCell.ExpanderCell, {
      context: expanded ? 'groupHeader' : 'body',
      expanded: expanded,
      onToggle: onToggle(group.key)
    }), columns.map(function (column) {
      return _react.default.createElement(_Cell.Cell, {
        key: column.property,
        context: expanded ? 'groupHeader' : 'body',
        column: column,
        datum: group.datum,
        scope: column.property === groupBy ? 'row' : undefined
      });
    }));

    if (expanded) {
      content = _react.default.createElement(_react.Fragment, {
        key: group.key
      }, content, group.data.map(function (datum) {
        return _react.default.createElement(_StyledDataTable.StyledDataTableRow, {
          key: datum[primaryProperty],
          size: size
        }, _react.default.createElement(_TableCell.TableCell, {
          verticalAlign: "bottom"
        }, groupState[group.key].expanded), columns.map(function (column) {
          return _react.default.createElement(_Cell.Cell, {
            key: column.property,
            context: "body",
            column: column,
            datum: datum,
            scope: column.primary ? 'row' : undefined
          });
        }));
      }), _react.default.createElement(_StyledDataTable.StyledDataTableRow, {
        size: size,
        "aria-hidden": true
      }, _react.default.createElement(_TableCell.TableCell, null)));
    }

    return content;
  }));
};

exports.GroupedBody = GroupedBody;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/Header.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/Header.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Header = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _TableCell = __webpack_require__(/*! ../TableCell */ "./node_modules/grommet/components/TableCell/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

var _Resizer = __webpack_require__(/*! ./Resizer */ "./node_modules/grommet/components/DataTable/Resizer.js");

var _Searcher = __webpack_require__(/*! ./Searcher */ "./node_modules/grommet/components/DataTable/Searcher.js");

var _Sorter = __webpack_require__(/*! ./Sorter */ "./node_modules/grommet/components/DataTable/Sorter.js");

var _ExpanderCell = __webpack_require__(/*! ./ExpanderCell */ "./node_modules/grommet/components/DataTable/ExpanderCell.js");

var _StyledDataTable = __webpack_require__(/*! ./StyledDataTable */ "./node_modules/grommet/components/DataTable/StyledDataTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Header = function Header(_ref) {
  var columns = _ref.columns,
      filtering = _ref.filtering,
      filters = _ref.filters,
      groups = _ref.groups,
      groupState = _ref.groupState,
      onFilter = _ref.onFilter,
      onFiltering = _ref.onFiltering,
      onResize = _ref.onResize,
      onSort = _ref.onSort,
      onToggle = _ref.onToggle,
      sort = _ref.sort,
      theme = _ref.theme,
      widths = _ref.widths,
      rest = _objectWithoutPropertiesLoose(_ref, ["columns", "filtering", "filters", "groups", "groupState", "onFilter", "onFiltering", "onResize", "onSort", "onToggle", "sort", "theme", "widths"]);

  var dataTableContextTheme = _extends({}, theme.table.header, theme.dataTable.header); // The tricky part here is that we need to manage the theme styling
  // to make sure that the background, border, and padding are applied
  // at the right places depending on the mix of controls in each header cell.


  var outerThemeProps = function (_ref2) {
    var border = _ref2.border,
        background = _ref2.background;
    return {
      border: border,
      background: background
    };
  }(dataTableContextTheme);

  var border = dataTableContextTheme.border,
      background = dataTableContextTheme.background,
      innerThemeProps = _objectWithoutPropertiesLoose(dataTableContextTheme, ["border", "background"]);

  return _react.default.createElement(_StyledDataTable.StyledDataTableHeader, rest, _react.default.createElement(_StyledDataTable.StyledDataTableRow, null, groups && _react.default.createElement(_ExpanderCell.ExpanderCell, {
    context: "header",
    expanded: Object.keys(groupState).filter(function (k) {
      return !groupState[k].expanded;
    }).length === 0,
    onToggle: onToggle
  }), columns.map(function (_ref3) {
    var property = _ref3.property,
        header = _ref3.header,
        align = _ref3.align,
        search = _ref3.search,
        sortable = _ref3.sortable;
    var content = typeof header === 'string' ? _react.default.createElement(_Text.Text, null, header) : header;

    if (onSort && sortable !== false) {
      content = _react.default.createElement(_Sorter.Sorter, {
        align: align,
        fill: !search,
        property: property,
        onSort: onSort,
        sort: sort,
        themeProps: search ? innerThemeProps : dataTableContextTheme
      }, content);
    }

    if (search && filters) {
      if (!onSort) {
        content = _react.default.createElement(_Box.Box, _extends({
          justify: "center",
          align: align
        }, innerThemeProps), content);
      }

      content = _react.default.createElement(_Box.Box, _extends({
        fill: true,
        direction: "row",
        justify: "between",
        align: "center"
      }, outerThemeProps), content, _react.default.createElement(_Searcher.Searcher, {
        filtering: filtering,
        filters: filters,
        property: property,
        onFilter: onFilter,
        onFiltering: onFiltering
      }));
    } else if (!onSort || sortable === false) {
      content = _react.default.createElement(_Box.Box, _extends({}, dataTableContextTheme, {
        fill: true,
        justify: "center",
        align: align
      }), content);
    }

    if (onResize) {
      content = _react.default.createElement(_Resizer.Resizer, {
        property: property,
        onResize: onResize
      }, content);
    }

    return _react.default.createElement(_TableCell.TableCell, {
      key: property,
      scope: "col",
      plain: true,
      style: widths && widths[property] ? {
        width: widths[property]
      } : undefined
    }, content);
  })));
};

Header.defaultProps = {};
Object.setPrototypeOf(Header.defaultProps, _defaultProps.defaultProps);
var HeaderWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Header);
exports.Header = HeaderWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/Resizer.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/Resizer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Resizer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResizerBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "Resizer__ResizerBox",
  componentId: "sc-8l808w-0"
})(["cursor:col-resize;"]);

var Resizer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Resizer, _Component);

  function Resizer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "ref", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      if (_this.ref.current) {
        var element = _this.ref.current;
        var rect = element.getBoundingClientRect();

        _this.setState({
          start: event.clientX,
          width: rect.width
        }, function () {
          document.addEventListener('mousemove', _this.onMouseMove);
          document.addEventListener('mouseup', _this.onMouseUp);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (event) {
      var _this$props = _this.props,
          onResize = _this$props.onResize,
          property = _this$props.property;
      var _this$state = _this.state,
          start = _this$state.start,
          width = _this$state.width; // We determined 12 empirically as being wide enough to hit but
      // not too wide to cause false hits.

      var nextWidth = Math.max(12, width + (event.clientX - start));
      onResize(property)(nextWidth);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      document.removeEventListener('mouseup', _this.onMouseUp);
      document.removeEventListener('mousemove', _this.onMouseMove);

      _this.setState({
        start: undefined,
        width: undefined
      });
    });

    return _this;
  }

  var _proto = Resizer.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        onResize = _this$props2.onResize,
        theme = _this$props2.theme;
    var start = this.state.start;

    if (onResize) {
      return _react.default.createElement(_Box.Box, {
        ref: this.ref,
        direction: "row",
        fill: true
      }, children, _react.default.createElement(ResizerBox, _extends({
        flex: false
      }, theme.dataTable.resize, {
        onMouseDown: this.onMouseDown,
        onMouseMove: start ? this.onMouseMove : undefined,
        onMouseUp: start ? this.onMouseUp : undefined
      })));
    }

    return children;
  };

  return Resizer;
}(_react.Component);

Resizer.defaultProps = {};
Object.setPrototypeOf(Resizer.defaultProps, _defaultProps.defaultProps);
var ResizerWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Resizer);
exports.Resizer = ResizerWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/Searcher.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/Searcher.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Searcher = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _FormSearch = __webpack_require__(/*! grommet-icons/icons/FormSearch */ "./node_modules/grommet-icons/icons/FormSearch.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

var _TextInput = __webpack_require__(/*! ../TextInput */ "./node_modules/grommet/components/TextInput/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Searcher =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Searcher, _Component);

  function Searcher() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "inputRef", _react.default.createRef());

    return _this;
  }

  var _proto = Searcher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props = this.props,
        filtering = _this$props.filtering,
        property = _this$props.property;

    if (this.inputRef.current && filtering === property) {
      this.inputRef.current.focus();
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        filtering = _this$props2.filtering,
        filters = _this$props2.filters,
        onFilter = _this$props2.onFilter,
        onFiltering = _this$props2.onFiltering,
        property = _this$props2.property,
        theme = _this$props2.theme;

    if (filtering === property) {
      return _react.default.createElement(_Keyboard.Keyboard, {
        onEsc: function onEsc() {
          return onFiltering(undefined);
        }
      }, _react.default.createElement(_Box.Box, {
        flex: true,
        pad: {
          horizontal: 'small'
        }
      }, _react.default.createElement(_TextInput.TextInput, {
        ref: this.inputRef,
        value: filters[property],
        onChange: function onChange(event) {
          return onFilter(property, event.target.value);
        },
        onBlur: function onBlur() {
          return onFiltering(undefined);
        }
      })));
    }

    return _react.default.createElement(_react.Fragment, null, filters[property] ? _react.default.createElement(_Box.Box, {
      flex: false,
      pad: {
        horizontal: 'small'
      }
    }, _react.default.createElement(_Text.Text, null, filters[property])) : null, _react.default.createElement(_Button.Button, {
      icon: _react.default.createElement(_FormSearch.FormSearch, {
        color: (0, _utils.normalizeColor)(filtering === property ? 'brand' : 'border', theme)
      }),
      hoverIndicator: true,
      onClick: function onClick() {
        return onFiltering(filtering === property ? undefined : property);
      }
    }));
  };

  return Searcher;
}(_react.Component);

Searcher.defaultProps = {};
Object.setPrototypeOf(Searcher.defaultProps, _defaultProps.defaultProps);
var SearcherWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Searcher);
exports.Searcher = SearcherWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/Sorter.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/Sorter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Sorter = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SorterButton = (0, _styledComponents.default)(_Button.Button).withConfig({
  displayName: "Sorter__SorterButton",
  componentId: "fzr2yb-0"
})(["flex-shrink:1;height:100%;"]);

var Sorter = function Sorter(_ref) {
  var align = _ref.align,
      children = _ref.children,
      fill = _ref.fill,
      onSort = _ref.onSort,
      property = _ref.property,
      sort = _ref.sort,
      theme = _ref.theme,
      themeProps = _ref.themeProps;
  var icon;

  if (sort && sort.property === property) {
    var Icon = theme.dataTable.icons[sort.ascending ? 'ascending' : 'descending'];
    icon = _react.default.createElement(Icon, null);
  }

  var content = _react.default.createElement(_Box.Box, _extends({}, themeProps, {
    flex: "shrink",
    direction: "row",
    justify: align,
    align: "center",
    gap: "xsmall",
    fill: fill
  }), children, icon);

  if (onSort) {
    content = _react.default.createElement(SorterButton, {
      fill: fill,
      hoverIndicator: true,
      onClick: onSort(property)
    }, content);
  }

  return content;
};

Sorter.defaultProps = {};
Object.setPrototypeOf(Sorter.defaultProps, _defaultProps.defaultProps);
var SorterWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Sorter);
exports.Sorter = SorterWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/StyledDataTable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/StyledDataTable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledDataTableFooter = exports.StyledDataTableHeader = exports.StyledDataTableBody = exports.StyledDataTableRow = exports.StyledDataTable = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _TableRow = __webpack_require__(/*! ../TableRow */ "./node_modules/grommet/components/TableRow/index.js");

var _Table = __webpack_require__(/*! ../Table */ "./node_modules/grommet/components/Table/index.js");

var _TableBody = __webpack_require__(/*! ../TableBody */ "./node_modules/grommet/components/TableBody/index.js");

var _TableHeader = __webpack_require__(/*! ../TableHeader */ "./node_modules/grommet/components/TableHeader/index.js");

var _TableFooter = __webpack_require__(/*! ../TableFooter */ "./node_modules/grommet/components/TableFooter/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDataTable = (0, _styledComponents.default)(_Table.Table).withConfig({
  displayName: "StyledDataTable",
  componentId: "xrlyjm-0"
})(["border-spacing:0;border-collapse:collapse;height:100%;", ";"], _utils.genericStyles);
exports.StyledDataTable = StyledDataTable;
StyledDataTable.defaultProps = {};
Object.setPrototypeOf(StyledDataTable.defaultProps, _defaultProps.defaultProps);
var StyledDataTableRow = (0, _styledComponents.default)(_TableRow.TableRow).withConfig({
  displayName: "StyledDataTable__StyledDataTableRow",
  componentId: "xrlyjm-1"
})(["", ";"], function (props) {
  return props.size && "\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ";
});
exports.StyledDataTableRow = StyledDataTableRow;
StyledDataTableRow.defaultProps = {};
Object.setPrototypeOf(StyledDataTableRow.defaultProps, _defaultProps.defaultProps);
var StyledDataTableBody = (0, _styledComponents.default)(_TableBody.TableBody).withConfig({
  displayName: "StyledDataTable__StyledDataTableBody",
  componentId: "xrlyjm-2"
})(["", ";"], function (props) {
  return props.size && "\n    display: block;\n    width: 100%;\n    max-height: " + props.theme.global.size[props.size] + ";\n    overflow: auto;\n  ";
});
exports.StyledDataTableBody = StyledDataTableBody;
StyledDataTableBody.defaultProps = {};
Object.setPrototypeOf(StyledDataTableBody.defaultProps, _defaultProps.defaultProps);
var StyledDataTableHeader = (0, _styledComponents.default)(_TableHeader.TableHeader).withConfig({
  displayName: "StyledDataTable__StyledDataTableHeader",
  componentId: "xrlyjm-3"
})(["", ";"], function (props) {
  return props.size && "\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ";
});
exports.StyledDataTableHeader = StyledDataTableHeader;
StyledDataTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledDataTableHeader.defaultProps, _defaultProps.defaultProps);
var StyledDataTableFooter = (0, _styledComponents.default)(_TableFooter.TableFooter).withConfig({
  displayName: "StyledDataTable__StyledDataTableFooter",
  componentId: "xrlyjm-4"
})(["", ";"], function (props) {
  return props.size && "\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ";
});
exports.StyledDataTableFooter = StyledDataTableFooter;
StyledDataTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledDataTableFooter.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/buildState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/buildState.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.buildState = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var sumReducer = function sumReducer(accumulated, next) {
  return accumulated + next;
};

var minReducer = function minReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.min(accumulated, next);
};

var maxReducer = function maxReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.max(accumulated, next);
};

var reducers = {
  max: maxReducer,
  min: minReducer,
  sum: sumReducer
};

var aggregateColumn = function aggregateColumn(column, data) {
  var value;

  if (column.aggregate === 'avg') {
    value = data.map(function (d) {
      return d[column.property];
    }).reduce(sumReducer);
    value /= data.length;
  } else {
    value = data.map(function (d) {
      return d[column.property];
    }).reduce(reducers[column.aggregate], 0);
  }

  return value;
};

var findPrimary = function findPrimary(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      primaryKey = nextProps.primaryKey;
  var primaryProperty;
  columns.forEach(function (column) {
    // remember the first key property
    if (column.primary && !primaryProperty) {
      primaryProperty = column.property;
    }
  });

  if (!primaryProperty && columns.length > 0) {
    primaryProperty = primaryKey || columns[0].property;
  }

  return _extends({}, nextState, {
    primaryProperty: primaryProperty
  });
};

var filter = function filter(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      onSearch = nextProps.onSearch;
  var data = nextState.data,
      filters = nextState.filters;
  var nextFilters;
  var regexps;
  columns.forEach(function (column) {
    if (column.search) {
      if (!nextFilters) {
        nextFilters = {};
        regexps = {};
      }

      nextFilters[column.property] = filters ? filters[column.property] || '' : ''; // don't do filtering if the caller has supplied onSearch

      if (nextFilters[column.property] && column.search && !onSearch) {
        regexps[column.property] = new RegExp(nextFilters[column.property], 'i');
      }
    }
  });
  var nextData = data;

  if (nextFilters) {
    nextData = data.filter(function (datum) {
      return !Object.keys(regexps).some(function (property) {
        return !regexps[property].test(datum[property]);
      });
    });
  }

  return _extends({}, nextState, {
    filters: nextFilters,
    data: nextData
  });
};

var aggregate = function aggregate(nextProps, prevState, nextState) {
  var columns = nextProps.columns;
  var data = nextState.data;
  var aggregateValues = {};
  columns.forEach(function (column) {
    if (column.aggregate) {
      aggregateValues[column.property] = aggregateColumn(column, data);
    }
  });
  return _extends({}, nextState, {
    aggregateValues: aggregateValues
  });
};

var buildFooterValues = function buildFooterValues(nextProps, prevState, nextState) {
  var columns = nextProps.columns;
  var aggregateValues = nextState.aggregateValues;
  var showFooter;
  var footerValues = {};
  columns.forEach(function (column) {
    if (column.footer) {
      showFooter = true;

      if (typeof column.footer === 'string') {
        footerValues[column.property] = column.footer;
      } else if (column.footer.aggregate) {
        footerValues[column.property] = aggregateValues[column.property];
      }
    }
  });
  return _extends({}, nextState, {
    footerValues: footerValues,
    showFooter: showFooter
  });
};

var sortData = function sortData(nextProps, prevState, nextState) {
  var sort = prevState.sort;
  var data = nextState.data;
  var nextData = data;

  if (sort) {
    var property = sort.property,
        ascending = sort.ascending;
    nextData = [].concat(data);
    var before = ascending ? 1 : -1;
    var after = ascending ? -1 : 1;
    nextData.sort(function (d1, d2) {
      if (d1[property] > d2[property]) return before;
      if (d1[property] < d2[property]) return after;
      return 0;
    });
  }

  return _extends({}, nextState, {
    data: nextData
  });
};

var groupData = function groupData(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      groupBy = nextProps.groupBy;
  var data = nextState.data;
  var groups;
  var groupState;

  if (groupBy) {
    groups = [];
    groupState = {};
    var groupMap = {};
    data.forEach(function (datum) {
      var groupValue = datum[groupBy];

      if (!groupMap[groupValue]) {
        var group = {
          data: [],
          datum: {},
          key: groupValue
        };
        group.datum[groupBy] = groupValue;
        groups.push(group);
        groupState[groupValue] = {
          expanded: prevState.groupState && prevState.groupState[groupValue] ? prevState.groupState[groupValue].expanded : false
        };
        groupMap[groupValue] = group;
      }

      groupMap[groupValue].data.push(datum);
    }); // calculate any aggregates

    columns.forEach(function (column) {
      if (column.aggregate) {
        groups.forEach(function (group) {
          group.datum[column.property] = aggregateColumn(column, group.data); // eslint-disable-line
        });
      }
    });
  }

  return _extends({}, nextState, {
    groups: groups,
    groupState: groupState
  });
};

var buildState = function buildState(nextProps, prevState) {
  var data = nextProps.data;
  var filters = prevState.filters,
      sort = prevState.sort,
      widths = prevState.widths;
  var nextState = {
    data: data,
    filters: filters,
    sort: sort,
    widths: widths
  };
  nextState = findPrimary(nextProps, prevState, nextState);
  nextState = filter(nextProps, prevState, nextState);
  nextState = aggregate(nextProps, prevState, nextState);
  nextState = buildFooterValues(nextProps, prevState, nextState);
  nextState = sortData(nextProps, prevState, nextState);
  nextState = groupData(nextProps, prevState, nextState);
  return nextState;
};

exports.buildState = buildState;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(DataTable) {
  var DocumentedDataTable = (0, _reactDesc.describe)(DataTable).availableAt((0, _utils.getAvailableAtBadge)('DataTable')).description('A data driven table.').usage("import { DataTable } from 'grommet';\n<DataTable />").intrinsicElement('table');
  DocumentedDataTable.propTypes = _extends({}, _utils.genericProps, {
    columns: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      align: _reactDesc.PropTypes.oneOf(['center', 'start', 'end']),
      aggregate: _reactDesc.PropTypes.oneOf(['avg', 'max', 'min', 'sum']),
      footer: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.node, _reactDesc.PropTypes.shape({
        aggregate: _reactDesc.PropTypes.bool
      })]),
      header: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node, _reactDesc.PropTypes.shape({
        aggregate: _reactDesc.PropTypes.bool
      })]),
      primary: _reactDesc.PropTypes.bool,
      property: _reactDesc.PropTypes.string.isRequired,
      render: _reactDesc.PropTypes.func,
      search: _reactDesc.PropTypes.bool,
      sortable: _reactDesc.PropTypes.bool
    })).description("A description of the data. The order controls the column order.\n      'property' indicates which property in the data objects to associate\n      the column with. 'header' indicates what to display in the column\n      header. 'render' allows for custom rendering of body cells. Use 'render'\n      for custom formatting for things like currency and date or to\n      display rich content like Meters. 'align' indicates how the cells in\n      the column are aligned. 'aggregate' indicates how the data in the\n      column should be aggregated. This only applies to a footer or groupBy\n      context. 'footer' indicates what should be shown in the footer for\n      the column. 'search' indicates whether a search filter should be\n      made available for the column. 'primary' indicates that this property\n      should be used as the unique identifier, which gives the cell 'row' scope\n      for accessibility. If 'primary' is not used for any column, and\n      'primaryKey' isn't specified either, then the first column will be used."),
    data: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({})).description('Array of data objects.'),
    groupBy: _reactDesc.PropTypes.string.description('Property to group data by.'),
    onMore: _reactDesc.PropTypes.func.description("Use this to indicate that 'data' doesn't contain all that it could.\n      It will be called when all of the data rows have been rendered.\n      This might be used when the total number of items that could be retrieved\n      is more than you'd want to load into the browser. 'onMore' allows you\n      to lazily fetch more from the server only when needed. This cannot\n      be combined with properties that expect all data to be present in the\n      browser, such as columns.search, sortable, groupBy, or columns.aggregate."),
    onSearch: _reactDesc.PropTypes.func.description("When supplied, and when at least one column has 'search' enabled,\n      this function will be called with an object with keys for property\n      names and values which are the search text strings. This is typically\n      employed so a back-end can be used to search through the data."),
    primaryKey: _reactDesc.PropTypes.string.description("When supplied, indicates the property for a data object to use to\n      get a unique identifier. See also the 'columns.primary' description.\n      Use this property when the columns approach will not work for your\n      data set."),
    resizeable: _reactDesc.PropTypes.bool.description('Whether to allow the user to resize column widths.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description("The height of the table body. If set, the table body will have a fixed\n      height and the rows will be scrollable within it. In order to preserve\n      header and footer cell alignment, all cells will have the same\n      width. This cannot be used in combination with 'resizeable'."),
    sortable: _reactDesc.PropTypes.bool.description('Whether to allow the user to sort columns.')
  });
  return DocumentedDataTable;
};

exports.doc = doc;
var themeDoc = {
  'dataTable.groupHeader.background': {
    description: 'The background color of the group header.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'dark-2', light: 'light-2' }"
  },
  'dataTable.groupHeader.border.side': {
    description: 'The border side rendered for the group header.',
    type: 'string',
    defaultValue: 'bottom'
  },
  'dataTable.groupHeader.border.size': {
    description: 'The border size of the group header border.',
    type: 'string',
    defaultValue: 'xsmall'
  },
  'dataTable.groupHeader.fill': {
    description: 'Whether the height should fill the group header.',
    type: 'string',
    defaultValue: 'vertical'
  },
  'dataTable.groupHeader.pad': {
    description: 'The pad used for the group header.',
    type: 'string | object',
    defaultValue: "{ horizontal: 'small', vertical: 'xsmall' }"
  },
  'dataTable.header': {
    description: 'Styles for the header.',
    type: 'object',
    defaultValue: '{}'
  },
  'dataTable.icons.ascending': {
    description: 'The ascending icon.',
    type: 'React.Element',
    defaultValue: '<FormDown />'
  },
  'dataTable.icons.contract': {
    description: 'The contract icon.',
    type: 'React.Element',
    defaultValue: '<FormUp />'
  },
  'dataTable.icons.descending': {
    description: 'The descending icon.',
    type: 'React.Element',
    defaultValue: '<FormUp />'
  },
  'dataTable.icons.expand': {
    description: 'The expand icon.',
    type: 'React.Element',
    defaultValue: '<FormDown />'
  },
  'dataTable.primary.weight': {
    description: 'The font weight for primary cells.',
    type: 'string',
    defaultValue: 'bold'
  },
  'dataTable.resize.border.color': {
    description: 'The border color for resize.',
    type: 'string | { dark: string, light: string }',
    defaultValue: 'border'
  },
  'dataTable.resize.border.side': {
    description: 'The border side used for resize.',
    type: 'string',
    defaultValue: 'right'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/DataTable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/DataTable/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DataTable = void 0;

var _DataTable = __webpack_require__(/*! ./DataTable */ "./node_modules/grommet/components/DataTable/DataTable.js");

exports.DataTable = _DataTable.DataTable;

/***/ }),

/***/ "./node_modules/grommet/components/Diagram/Diagram.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Diagram/Diagram.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Diagram = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledDiagram = __webpack_require__(/*! ./StyledDiagram */ "./node_modules/grommet/components/Diagram/StyledDiagram.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var computeMidPoint = function computeMidPoint(fromPoint, toPoint) {
  return [fromPoint[0] > toPoint[0] ? toPoint[0] + (fromPoint[0] - toPoint[0]) / 2 : fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] > toPoint[1] ? toPoint[1] + (fromPoint[1] - toPoint[1]) / 2 : fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
};

var COMMANDS = {
  curved: function curved(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " ";

    if (anchor === 'horizontal') {
      cmds += "Q " + (midPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + (midPoint[0] + offset + "," + (midPoint[1] + offset) + " ");
    } else {
      cmds += "Q " + (fromPoint[0] + offset) + "," + (midPoint[1] + offset) + " " + (midPoint[0] + offset + "," + (midPoint[1] + offset) + " ");
    }

    cmds += "T " + (toPoint[0] + offset) + "," + (toPoint[1] + offset);
    return cmds;
  },
  direct: function direct(fromPoint, toPoint, offset) {
    return "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + ("L " + (toPoint[0] + offset) + "," + (toPoint[1] + offset));
  },
  rectilinear: function rectilinear(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " ";

    if (anchor === 'horizontal') {
      cmds += "L " + (midPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + ("L " + (midPoint[0] + offset) + "," + (toPoint[1] + offset) + " ");
    } else {
      cmds += "L " + (fromPoint[0] + offset) + "," + (midPoint[1] + offset) + " " + ("L " + (toPoint[0] + offset) + "," + (midPoint[1] + offset) + " ");
    }

    cmds += "L " + (toPoint[0] + offset) + "," + (toPoint[1] + offset);
    return cmds;
  }
};

var findTarget = function findTarget(target) {
  if (typeof target === 'string') {
    return document.getElementById(target);
  }

  return target;
};

var Diagram =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Diagram, _Component);

  function Diagram() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      height: 0,
      width: 0
    });

    _defineProperty(_assertThisInitialized(_this), "svgRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      var _this$state = _this.state,
          width = _this$state.width,
          height = _this$state.height;
      var svg = _this.svgRef.current;

      if (svg) {
        var rect = svg.getBoundingClientRect();

        if (rect.width !== width || rect.height !== height) {
          _this.setState({
            width: rect.width,
            height: rect.height,
            connectionPoints: undefined
          });
        }
      }
    });

    return _this;
  }

  Diagram.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    // track whether the connections array changes so we can trigger re-placing
    if (nextProps.connections !== prevState.connections) {
      return {
        connections: nextProps.connections,
        connectionPoints: undefined
      };
    }

    return null;
  };

  var _proto = Diagram.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var connectionPoints = this.state.connectionPoints;

    if (!connectionPoints) {
      this.placeConnections();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  _proto.placeConnections = function placeConnections() {
    var connections = this.props.connections;
    var containerRect = this.svgRef.current.getBoundingClientRect();
    var connectionPoints = connections.map(function (_ref) {
      var anchor = _ref.anchor,
          fromTarget = _ref.fromTarget,
          toTarget = _ref.toTarget;
      var points;
      var fromElement = findTarget(fromTarget);
      var toElement = findTarget(toTarget);

      if (!fromElement) {
        console.warn("Diagram cannot find " + fromTarget);
      }

      if (!toElement) {
        console.warn("Diagram cannot find " + toTarget);
      }

      if (fromElement && toElement) {
        var fromRect = fromElement.getBoundingClientRect();
        var toRect = toElement.getBoundingClientRect(); // There is no x and y when unit testing.

        var fromPoint = [fromRect.x - containerRect.x || 0, fromRect.y - containerRect.y || 0];
        var toPoint = [toRect.x - containerRect.x || 0, toRect.y - containerRect.y || 0];

        if (anchor === 'vertical') {
          fromPoint[0] += fromRect.width / 2;
          toPoint[0] += toRect.width / 2;

          if (fromRect.y < toRect.y) {
            fromPoint[1] += fromRect.height;
          } else {
            toPoint[1] += toRect.height;
          }
        } else if (anchor === 'horizontal') {
          fromPoint[1] += fromRect.height / 2;
          toPoint[1] += toRect.height / 2;

          if (fromRect.x < toRect.x) {
            fromPoint[0] += fromRect.width;
          } else {
            toPoint[0] += toRect.width;
          }
        } else {
          // center
          fromPoint[0] += fromRect.width / 2;
          fromPoint[1] += fromRect.height / 2;
          toPoint[0] += toRect.width / 2;
          toPoint[1] += toRect.height / 2;
        }

        points = [fromPoint, toPoint];
      }

      return points;
    });
    this.setState({
      connectionPoints: connectionPoints
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        connections = _this$props.connections,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["connections", "theme"]);

    var _this$state2 = this.state,
        connectionPoints = _this$state2.connectionPoints,
        height = _this$state2.height,
        width = _this$state2.width;
    var paths;

    if (connectionPoints) {
      paths = connections.map(function (_ref2, index) {
        var anchor = _ref2.anchor,
            color = _ref2.color,
            offset = _ref2.offset,
            round = _ref2.round,
            thickness = _ref2.thickness,
            type = _ref2.type,
            connectionRest = _objectWithoutPropertiesLoose(_ref2, ["anchor", "color", "offset", "round", "thickness", "type"]);

        var path;

        var cleanedRest = _extends({}, connectionRest);

        delete cleanedRest.fromTarget;
        delete cleanedRest.toTarget;
        var points = connectionPoints[index];

        if (points) {
          var offsetWidth = offset ? (0, _utils.parseMetricToNum)(theme.global.edgeSize[offset]) : 0;
          var d = COMMANDS[type || 'curved'](points[0], points[1], offsetWidth, anchor);
          var strokeWidth = thickness ? (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness] || thickness) : 1;
          path = _react.default.createElement("path", _extends({
            // eslint-disable-next-line react/no-array-index-key
            key: index
          }, cleanedRest, {
            stroke: (0, _utils.normalizeColor)(color || theme.diagram.line.color, theme),
            strokeWidth: strokeWidth,
            strokeLinecap: round ? 'round' : 'butt',
            strokeLinejoin: round ? 'round' : 'miter',
            fill: "none",
            d: d
          }));
        }

        return path;
      });
    }

    return _react.default.createElement(_StyledDiagram.StyledDiagram, _extends({
      ref: this.svgRef,
      viewBox: "0 0 " + width + " " + height,
      preserveAspectRatio: "xMinYMin meet"
    }, rest), _react.default.createElement("g", null, paths));
  };

  return Diagram;
}(_react.Component);

_defineProperty(Diagram, "defaultProps", {
  connections: []
});

Object.setPrototypeOf(Diagram.defaultProps, _defaultProps.defaultProps);
var DiagramDoc;

if (true) {
  DiagramDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Diagram/doc.js").doc(Diagram); // eslint-disable-line global-require
}

var DiagramWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(DiagramDoc || Diagram);
exports.Diagram = DiagramWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Diagram/StyledDiagram.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet/components/Diagram/StyledDiagram.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledDiagram = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDiagram = _styledComponents.default.svg.withConfig({
  displayName: "StyledDiagram",
  componentId: "sc-1vzeu9f-0"
})(["max-width:100%;width:100%;height:100%;", ";"], function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});

exports.StyledDiagram = StyledDiagram;
StyledDiagram.defaultProps = {};
Object.setPrototypeOf(StyledDiagram.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Diagram/doc.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Diagram/doc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(Diagram) {
  var DocumentedDiagram = (0, _reactDesc.describe)(Diagram).availableAt((0, _utils.getAvailableAtBadge)('Diagram')).description("Graphical connection lines. Diagram is meant to be used with Stack.\n      Boxes can be used in the `guidingChild` layer of Stack and then\n      Diagram can be used to draw lines connecting the Boxes.").usage("import { Diagram } from 'grommet';\n<Diagram />").intrinsicElement('svg');
  DocumentedDiagram.propTypes = {
    connections: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      anchor: _reactDesc.PropTypes.oneOf(['center', 'vertical', 'horizontal']),
      color: _utils.colorPropType,
      fromTarget: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.object]).isRequired,
      label: _reactDesc.PropTypes.string,
      // for accessibility
      offset: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']), _reactDesc.PropTypes.string]),
      thickness: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['hair', 'xxsmall', 'xsmall', 'small', 'medium', 'large']), _reactDesc.PropTypes.string]),
      toTarget: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.object]).isRequired,
      type: _reactDesc.PropTypes.oneOf(['direct', 'curved', 'rectilinear'])
    })).description("Array of objects describing the connections.\n      The 'fromTarget' and 'toTarget' may be either DOM element ids or\n      React references.\n      'offset' can be used to shift a bit to reduce the amount of overlap\n      with other connection lines to make the lines easier to distinguish.").isRequired
  };
  return DocumentedDiagram;
};

exports.doc = doc;
var themeDoc = {
  'global.edgeSize': {
    description: 'The possible sizes for the connections thickness and offset.',
    type: 'object',
    defaultValue: "{\n        none: '0px',\n        hair: '1px',\n        xxsmall: '3px',\n        xsmall: '6px',\n        small: '12px',\n        medium: '24px',\n        large: '48px',\n        xlarge: '96px',\n        responsiveBreakpoint: 'small',\n    }"
  },
  'diagram.extend': {
    description: 'Any additional style for Diagram.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'diagram.line.color': {
    description: 'The color of the connection line.',
    type: 'string',
    defaultValue: 'accent-1'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Diagram/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Diagram/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Diagram = void 0;

var _Diagram = __webpack_require__(/*! ./Diagram */ "./node_modules/grommet/components/Diagram/Diagram.js");

exports.Diagram = _Diagram.Diagram;

/***/ }),

/***/ "./node_modules/grommet/components/Distribution/Distribution.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet/components/Distribution/Distribution.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Distribution = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Value = function Value(_ref) {
  var basis = _ref.basis,
      children = _ref.children;
  return _react.default.createElement(_Box.Box, {
    basis: basis,
    flex: "shrink",
    overflow: "hidden"
  }, children);
};

Value.propTypes = {
  basis: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
};

var Distribution =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Distribution, _Component);

  function Distribution() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Distribution.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        basis = _this$props.basis,
        children = _this$props.children,
        direction = _this$props.direction,
        fill = _this$props.fill,
        gap = _this$props.gap,
        values = _this$props.values,
        rest = _objectWithoutPropertiesLoose(_this$props, ["basis", "children", "direction", "fill", "gap", "values"]);

    if (values.length === 1) {
      var value = values[0];
      return _react.default.createElement(Value, {
        value: value,
        basis: basis
      }, children(value));
    }

    if (values.length > 1) {
      // calculate total
      var total = 0;
      values.forEach(function (v) {
        total += v.value;
      }); // figure out how many of the values area needed to represent half of the total

      var subTotal = 0;
      var subIndex;
      values.some(function (v, index) {
        subTotal += v.value;

        if (subTotal >= total * 0.4) {
          subIndex = index + 1;
          return true;
        }

        return false;
      });

      if (subIndex === values.length) {
        var _value = values[0];
        return _react.default.createElement(Value, {
          value: _value,
          basis: basis
        }, children(_value));
      }

      var childBasis;

      if (subTotal > total * 0.7) {
        childBasis = ['3/4', '1/4'];
      } else if (subTotal > total * 0.6) {
        childBasis = ['2/3', '1/3'];
      } else {
        childBasis = ['1/2', '1/2'];
      }

      return _react.default.createElement(_Box.Box, _extends({
        direction: direction,
        basis: basis,
        flex: basis ? 'shrink' : true,
        overflow: "hidden",
        gap: gap,
        fill: fill
      }, rest), _react.default.createElement(Distribution, {
        values: values.slice(0, subIndex),
        basis: childBasis[0],
        direction: direction === 'row' ? 'column' : 'row',
        gap: gap
      }, children), _react.default.createElement(Distribution, {
        values: values.slice(subIndex),
        basis: childBasis[1],
        direction: direction === 'row' ? 'column' : 'row',
        gap: gap
      }, children));
    }

    return null;
  };

  return Distribution;
}(_react.Component);

_defineProperty(Distribution, "defaultProps", {
  basis: undefined,
  children: function children(value) {
    return _react.default.createElement(_Box.Box, {
      fill: true,
      border: true
    }, _react.default.createElement(_Text.Text, null, value.value));
  },
  direction: 'row',
  gap: 'xsmall',
  values: []
});

var DistributionDoc;

if (true) {
  DistributionDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Distribution/doc.js").doc(Distribution); // eslint-disable-line global-require
}

var DistributionWrapper = DistributionDoc || Distribution;
exports.Distribution = DistributionWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Distribution/doc.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/Distribution/doc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Distribution) {
  var DocumentedDistribution = (0, _reactDesc.describe)(Distribution).availableAt((0, _utils.getAvailableAtBadge)('Distribution')).description("Proportionally sized grid of boxes. The proportions are approximate. The\n      area given to each box isn't mathematically precise according to the\n      ratio to the total values. Instead, the boxes are laid out in a\n      manner that makes them more visually easy to scan. For example,\n      two values of 48 and 52 will actually each get 50% of the area.").usage("import { Distribution } from 'grommet';\n<Distribution />").intrinsicElement('div');
  DocumentedDistribution.propTypes = _extends({}, _utils.genericProps, {
    children: _reactDesc.PropTypes.func.description('Function that will be called when each value is rendered.'),
    fill: _reactDesc.PropTypes.bool.description('Whether the distribution expands to fill all of the available width and height.').defaultValue(false),
    gap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The amount of spacing between child elements.').defaultValue('xsmall'),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      value: _reactDesc.PropTypes.number.isRequired
    })).description("Array of objects containing a value. The array should already be\n      sorted from largest to smallest value. The caller can put other\n      properties in the object. The children function will be called to\n      render the contents of each value.").isRequired
  });
  return DocumentedDistribution;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/Distribution/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/Distribution/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Distribution = void 0;

var _Distribution = __webpack_require__(/*! ./Distribution */ "./node_modules/grommet/components/Distribution/Distribution.js");

exports.Distribution = _Distribution.Distribution;

/***/ }),

/***/ "./node_modules/grommet/components/Drop/Drop.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Drop/Drop.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Drop = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _DropContainer = __webpack_require__(/*! ./DropContainer */ "./node_modules/grommet/components/Drop/DropContainer.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Drop =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Drop, _Component);

  function Drop() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "originalFocusedElement", document.activeElement);

    _defineProperty(_assertThisInitialized(_this), "dropContainer", (0, _utils.getNewContainer)());

    return _this;
  }

  var _proto = Drop.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    var restrictFocus = this.props.restrictFocus;

    if (restrictFocus && this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        (0, _utils.setFocusWithoutScroll)(this.originalFocusedElement);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        (0, _utils.setFocusWithoutScroll)(this.originalFocusedElement.parentNode);
      }
    }

    document.body.removeChild(this.dropContainer);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        dropTarget = _this$props.target,
        rest = _objectWithoutPropertiesLoose(_this$props, ["target"]);

    return (0, _reactDom.createPortal)(_react.default.createElement(_DropContainer.DropContainer, _extends({
      dropTarget: dropTarget
    }, rest)), this.dropContainer);
  };

  return Drop;
}(_react.Component);

_defineProperty(Drop, "defaultProps", {
  align: {
    top: 'top',
    left: 'left'
  },
  plain: false
});

var DropDoc;

if (true) {
  DropDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Drop/doc.js").doc(Drop); // eslint-disable-line global-require
}

var DropWrapper = DropDoc || Drop;
exports.Drop = DropWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Drop/DropContainer.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/Drop/DropContainer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DropContainer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./node_modules/grommet/contexts/index.js");

var _FocusedContainer = __webpack_require__(/*! ../FocusedContainer */ "./node_modules/grommet/components/FocusedContainer.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _StyledDrop = __webpack_require__(/*! ./StyledDrop */ "./node_modules/grommet/components/Drop/StyledDrop.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// using react synthetic event to be able to stop propagation that
// would otherwise close the layer on ESC.
var preventLayerClose = function preventLayerClose(event) {
  var key = event.keyCode ? event.keyCode : event.which;

  if (key === 27) {
    event.stopPropagation();
  }
};

var DropContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(DropContainer, _Component);

  function DropContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "dropRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "addScrollListener", function () {
      var dropTarget = _this.props.dropTarget;
      _this.scrollParents = (0, _utils.findScrollParents)(dropTarget);

      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.addEventListener('scroll', _this.place);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeScrollListener", function () {
      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.removeEventListener('scroll', _this.place);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickDocument", function (event) {
      var _this$props = _this.props,
          dropTarget = _this$props.dropTarget,
          onClickOutside = _this$props.onClickOutside;
      var dropTargetNode = dropTarget;
      var dropNode = _this.dropRef.current;

      if (onClickOutside && dropNode && // need this for ie11
      !dropTargetNode.contains(event.target) && !dropNode.contains(event.target)) {
        onClickOutside();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.removeScrollListener();

      _this.addScrollListener();

      _this.place(false);
    });

    _defineProperty(_assertThisInitialized(_this), "place", function (preserveHeight) {
      var _this$props2 = _this.props,
          align = _this$props2.align,
          dropTarget = _this$props2.dropTarget,
          responsive = _this$props2.responsive,
          stretch = _this$props2.stretch,
          theme = _this$props2.theme;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var target = dropTarget;
      var container = _this.dropRef.current;

      if (container && target) {
        // clear prior styling
        container.style.left = '';
        container.style.top = '';
        container.style.bottom = '';
        container.style.width = '';

        if (!preserveHeight) {
          container.style.maxHeight = '';
        } // get bounds


        var targetRect = (0, _utils.findVisibleParent)(target).getBoundingClientRect();
        var containerRect = container.getBoundingClientRect(); // determine width

        var width = Math.min(stretch ? Math.max(targetRect.width, containerRect.width) : containerRect.width, windowWidth); // set left position

        var left;

        if (align.left) {
          if (align.left === 'left') {
            left = targetRect.left;
          } else if (align.left === 'right') {
            left = targetRect.left + targetRect.width;
          }
        } else if (align.right) {
          if (align.right === 'left') {
            left = targetRect.left - width;
          } else if (align.right === 'right') {
            left = targetRect.left + targetRect.width - width;
          }
        } else {
          left = targetRect.left + targetRect.width / 2 - width / 2;
        }

        if (left + width > windowWidth) {
          left -= left + width - windowWidth;
        } else if (left < 0) {
          left = 0;
        } // set top or bottom position


        var top;
        var bottom;
        var maxHeight = containerRect.height;

        if (align.top) {
          if (align.top === 'top') {
            top = targetRect.top;
          } else {
            top = targetRect.bottom;
          }

          maxHeight = windowHeight - top;
        } else if (align.bottom) {
          if (align.bottom === 'bottom') {
            bottom = targetRect.bottom;
          } else {
            bottom = targetRect.top;
          }

          maxHeight = bottom;
        } else {
          // center
          top = targetRect.top + targetRect.height / 2 - containerRect.height / 2;
          maxHeight = windowHeight - top;
        } // if we can't fit it all, or we're rather close,
        // see if there's more room the other direction


        if (responsive && (containerRect.height > maxHeight || maxHeight < windowHeight / 10)) {
          // We need more room than we have.
          if (align.top && top > windowHeight / 2) {
            // We put it below, but there's more room above, put it above
            top = '';

            if (align.top === 'bottom') {
              // top = Math.max(targetRect.top - containerRect.height, 0);
              // maxHeight = targetRect.top - top;
              bottom = targetRect.top;
            } else {
              // top = Math.max(targetRect.bottom - containerRect.height, 0);
              // maxHeight = targetRect.bottom - top;
              bottom = targetRect.bottom;
            }

            maxHeight = bottom;
          } else if (align.bottom && maxHeight < windowHeight / 2) {
            // We put it above but there's more room below, put it below
            bottom = '';

            if (align.bottom === 'bottom') {
              top = targetRect.top;
            } else {
              top = targetRect.bottom;
            }

            maxHeight = windowHeight - top;
          }
        }

        container.style.left = left + "px";

        if (stretch) {
          // offset width by 0.1 to avoid a bug in ie11 that
          // unnecessarily wraps the text if width is the same
          // NOTE: turned off for now
          container.style.width = width + 0.1 + "px";
        } // the (position:absolute + scrollTop)
        // is presenting issues with desktop scroll flickering


        if (top !== '') {
          container.style.top = top + "px";
        }

        if (bottom !== '') {
          container.style.bottom = windowHeight - bottom + "px";
        }

        if (!preserveHeight) {
          if (theme.drop && theme.drop.maxHeight) {
            maxHeight = Math.min(maxHeight, (0, _utils.parseMetricToNum)(theme.drop.maxHeight));
          }

          container.style.maxHeight = maxHeight + "px";
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (event) {
      var onEsc = _this.props.onEsc;
      event.stopPropagation();

      if (onEsc) {
        onEsc(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "preventClickBubbling", function (event) {
      event.stopPropagation();
      /**
       * the React event system actually listens to all events at the top level
       * and then handles its own bubbling / capturing virtually. This means that
       * even if we call stopPropagation, it only affects the React synthetic
       * event, and the native event still bubbles upward.
       * Any code that uses native events (like the close listener in this class)
       * will still get the bubbled event, unless we also call
       * event.nativeEvent.stopImmediatePropagation, which bridges the gap from
       * React synthetic event to native DOM event.
       */

      event.nativeEvent.stopImmediatePropagation();
    });

    return _this;
  }

  var _proto = DropContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var restrictFocus = this.props.restrictFocus;
    this.addScrollListener();
    window.addEventListener('resize', this.onResize);
    document.addEventListener('mousedown', this.onClickDocument);
    this.place(false);

    if (restrictFocus) {
      this.dropRef.current.focus();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.place(true);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeScrollListener();
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('mousedown', this.onClickDocument);
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        alignProp = _this$props3.align,
        children = _this$props3.children,
        elevation = _this$props3.elevation,
        onClickOutside = _this$props3.onClickOutside,
        onEsc = _this$props3.onEsc,
        onKeyDown = _this$props3.onKeyDown,
        plain = _this$props3.plain,
        propsTheme = _this$props3.theme,
        rest = _objectWithoutPropertiesLoose(_this$props3, ["align", "children", "elevation", "onClickOutside", "onEsc", "onKeyDown", "plain", "theme"]);

    var theme = this.context || propsTheme;

    var content = _react.default.createElement(_StyledDrop.StyledDrop, _extends({
      as: _Box.Box,
      plain: plain,
      elevation: !plain ? elevation || theme.global.drop.shadowSize || 'small' : undefined,
      tabIndex: "-1",
      ref: this.dropRef,
      alignProp: alignProp,
      onMouseDown: this.preventClickBubbling
    }, rest), children);

    if (theme.global.drop.background) {
      var dark = (0, _utils.backgroundIsDark)(theme.global.drop.background, theme);

      if (dark !== theme.dark) {
        content = _react.default.createElement(_contexts.ThemeContext.Provider, {
          value: _extends({}, theme, {
            dark: dark
          })
        }, content);
      }
    }

    return _react.default.createElement(_FocusedContainer.FocusedContainer, {
      onKeyDown: onEsc && preventLayerClose
    }, _react.default.createElement(_Keyboard.Keyboard, {
      onEsc: onEsc && this.onEsc,
      onKeyDown: onKeyDown,
      target: "document"
    }, content));
  };

  return DropContainer;
}(_react.Component);

exports.DropContainer = DropContainer;

_defineProperty(DropContainer, "contextType", _contexts.ThemeContext);

_defineProperty(DropContainer, "defaultProps", {
  align: {
    top: 'top',
    left: 'left'
  },
  overflow: 'auto',
  stretch: 'width'
});

Object.setPrototypeOf(DropContainer.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Drop/StyledDrop.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Drop/StyledDrop.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledDrop = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _background = __webpack_require__(/*! ../../utils/background */ "./node_modules/grommet/utils/background.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function getTransformOriginStyle(align) {
  var vertical = 'top';

  if (align.bottom) {
    vertical = 'bottom';
  }

  var horizontal = 'left';

  if (align.right) {
    horizontal = 'right';
  }

  return vertical + " " + horizontal;
}

var dropKeyFrames = (0, _styledComponents.keyframes)(["0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}"]);

var StyledDrop = _styledComponents.default.div.withConfig({
  displayName: "StyledDrop",
  componentId: "sc-16s5rx8-0"
})(["", " border-radius:", ";position:fixed;z-index:", ";outline:none;", " opacity:0;transform-origin:", ";animation:", " 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}", ""], _utils.baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return props.theme.global.drop.zIndex;
}, function (props) {
  return !props.plain && (0, _background.backgroundStyle)(props.theme.global.drop.background, props.theme);
}, function (props) {
  return getTransformOriginStyle(props.alignProp);
}, dropKeyFrames, function (props) {
  return props.theme.global.drop && props.theme.global.drop.extend;
});

exports.StyledDrop = StyledDrop;
StyledDrop.defaultProps = {};
Object.setPrototypeOf(StyledDrop.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Drop/doc.js":
/*!*****************************************************!*\
  !*** ./node_modules/grommet/components/Drop/doc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _doc = __webpack_require__(/*! ../Box/doc */ "./node_modules/grommet/components/Box/doc.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

// if you update values here, make sure to update in Box/doc too.
var dropOverflowPropTypes = _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(_doc.OVERFLOW_VALUES), _reactDesc.PropTypes.shape({
  horizontal: _reactDesc.PropTypes.oneOf(_doc.OVERFLOW_VALUES),
  vertical: _reactDesc.PropTypes.oneOf(_doc.OVERFLOW_VALUES)
}), _reactDesc.PropTypes.string]);

var doc = function doc(Drop) {
  var DocumentedDrop = (0, _reactDesc.describe)(Drop).availableAt((0, _utils.getAvailableAtBadge)('Drop')).description('A container that is overlaid next to a target.').usage("import { Drop } from 'grommet';\n<Drop target={reference}>...</Drop>").intrinsicElement('div');
  DocumentedDrop.propTypes = {
    align: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description("How to align the drop with respect to the target element. Not specifying\n      a vertical or horizontal alignment will cause it to be aligned in the\n      center.").defaultValue({
      top: 'top',
      left: 'left'
    }),
    onClickOutside: _reactDesc.PropTypes.func.description('Function that will be invoked when the user clicks outside the drop.'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the escape key inside the drop.'),
    overflow: dropOverflowPropTypes.description('How to control the overflow inside the drop.').defaultValue('auto'),
    responsive: _reactDesc.PropTypes.bool.description('Whether to dynamically re-place when resized.').defaultValue(true),
    restrictFocus: _reactDesc.PropTypes.bool.description('Whether the drop should control focus.').defaultValue(false),
    stretch: _reactDesc.PropTypes.bool.description("Whether the drop element should be stretched to at least match the\n      width of the target element. The default is true because\n      that is what most uses of Drop want, like Select and Menu.").defaultValue(true),
    target: _reactDesc.PropTypes.object.description('Target where the drop will be aligned to. This should be a React reference.').isRequired,
    elevation: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description("Elevated height of the target, indicated via a drop shadow."),
    plain: _reactDesc.PropTypes.bool.description("Whether the drop element should have no background nor shadow").defaultValue(false)
  };
  return DocumentedDrop;
};

exports.doc = doc;
var themeDoc = {
  'drop.maxHeight': {
    description: 'The max height of the Drop container',
    type: 'string',
    defaultValue: undefined
  },
  'global.drop.background': {
    description: 'The background color of Drop',
    type: 'string | { dark: string, light: string }',
    defaultValue: '#ffffff'
  },
  'global.drop.border.radius': {
    description: 'The corner radius',
    type: 'string',
    defaultValue: '0px'
  },
  'global.drop.extend': {
    description: 'Any additional style for Drop.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'global.drop.shadowSize': {
    description: 'Elevated height of the Drop',
    type: 'string',
    defaultValue: 'small'
  },
  'global.drop.zIndex': {
    description: 'The stack order of the Drop',
    type: 'number',
    defaultValue: 20
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Drop/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Drop/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Drop = void 0;

var _Drop = __webpack_require__(/*! ./Drop */ "./node_modules/grommet/components/Drop/Drop.js");

exports.Drop = _Drop.Drop;

/***/ }),

/***/ "./node_modules/grommet/components/DropButton/DropButton.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet/components/DropButton/DropButton.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DropButton = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Drop = __webpack_require__(/*! ../Drop */ "./node_modules/grommet/components/Drop/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(DropButton, _Component);

  function DropButton(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "buttonRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "onDropClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        show: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onToggle", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen;
      var show = _this.state.show;

      _this.setState({
        show: !show
      }, function () {
        return show ? onClose && onClose() : onOpen && onOpen();
      });
    });

    _this.state = {
      show: props.open || false
    };
    return _this;
  }

  DropButton.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var show = prevState.show;
    var open = nextProps.open;

    if (open !== undefined && open !== show) {
      return {
        show: open
      };
    }

    return null;
  };

  var _proto = DropButton.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var open = this.props.open;

    if (open) {
      this.forceUpdate();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var forwardRef = this.props.forwardRef;
    var show = this.state.show;

    if (!show && prevState.show) {
      // focus on the button if the drop is closed
      (0, _utils.setFocusWithoutScroll)((forwardRef || this.buttonRef).current);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        dropAlign = _this$props2.dropAlign,
        dropProps = _this$props2.dropProps,
        forwardRef = _this$props2.forwardRef,
        dropContent = _this$props2.dropContent,
        dropTarget = _this$props2.dropTarget,
        id = _this$props2.id,
        open = _this$props2.open,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["disabled", "dropAlign", "dropProps", "forwardRef", "dropContent", "dropTarget", "id", "open"]);

    var show = this.state.show;
    delete rest.onClose;
    delete rest.onOpen;
    var drop;

    if (show && (forwardRef || this.buttonRef).current) {
      drop = _react.default.createElement(_Drop.Drop, _extends({
        id: id ? id + "__drop" : undefined,
        restrictFocus: true,
        align: dropAlign,
        target: dropTarget || (forwardRef || this.buttonRef).current,
        onClickOutside: this.onDropClose,
        onEsc: this.onDropClose
      }, dropProps), dropContent);
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.Button, _extends({
      id: id,
      ref: forwardRef || this.buttonRef,
      disabled: disabled,
      onClick: this.onToggle
    }, rest)), drop);
  };

  return DropButton;
}(_react.Component);

_defineProperty(DropButton, "defaultProps", {
  a11yTitle: 'Open Drop',
  dropAlign: {
    top: 'top',
    left: 'left'
  }
});

var DropButtonDoc;

if (true) {
  DropButtonDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/DropButton/doc.js").doc(DropButton); // eslint-disable-line global-require
}

var DropButtonWrapper = (0, _recompose.compose)(_hocs.withForwardRef)(DropButtonDoc || DropButton);
exports.DropButton = DropButtonWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/DropButton/doc.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/DropButton/doc.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(DropButton) {
  var DocumentedDropButton = (0, _reactDesc.describe)(DropButton).availableAt((0, _utils.getAvailableAtBadge)('DropButton')).description("A Button that controls a Drop. When opened, the Drop will contain\n      whatever is specified via `dropContent`. The Drop will control the focus\n      so that the contents behind it are not focusable. All properties and theme properties of\n      Button or Drop can be passed through.\n      ").usage("import { DropButton } from 'grommet';\n<DropButton dropContent={...} />").intrinsicElement('button');
  DocumentedDropButton.propTypes = _extends({}, _utils.genericProps, {
    disabled: _reactDesc.PropTypes.bool.description('Whether the button should be disabled.').defaultValue(false),
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop with respect to the button.').defaultValue({
      top: 'top',
      left: 'left'
    }),
    dropContent: _reactDesc.PropTypes.element.description('Content to put inside the Drop.').isRequired,
    dropTarget: _reactDesc.PropTypes.object.description("Target where the drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the DropButton itself by default."),
    dropProps: _reactDesc.PropTypes.object.description('Any valid Drop prop.'),
    onClose: _reactDesc.PropTypes.func.description('Callback for when the drop is closed'),
    onOpen: _reactDesc.PropTypes.func.description('Callback for when the drop is opened'),
    open: _reactDesc.PropTypes.bool.description("Whether the drop should be open or not. Setting this property does not\n      influence user interaction after it has been rendered.").defaultValue(false)
  });
  return DocumentedDropButton;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/DropButton/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/DropButton/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DropButton = void 0;

var _DropButton = __webpack_require__(/*! ./DropButton */ "./node_modules/grommet/components/DropButton/DropButton.js");

exports.DropButton = _DropButton.DropButton;

/***/ }),

/***/ "./node_modules/grommet/components/FocusedContainer.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/FocusedContainer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FocusedContainer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isNotAncestorOf = function isNotAncestorOf(child) {
  return function (parent) {
    return !parent.contains(child);
  };
};

var FocusedContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FocusedContainer, _Component);

  function FocusedContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "ref", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "removeTrap", function () {
      var restrictScroll = _this.props.restrictScroll;
      var child = _this.ref.current;
      (0, _utils.getBodyChildElements)().filter(isNotAncestorOf(child)).forEach(_utils.makeNodeFocusable);

      if (restrictScroll) {
        document.body.style.overflow = _this.bodyOverflowStyle;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "trapFocus", function () {
      var restrictScroll = _this.props.restrictScroll;
      var child = _this.ref.current;
      (0, _utils.getBodyChildElements)().filter(isNotAncestorOf(child)).forEach(_utils.makeNodeUnfocusable);

      if (restrictScroll) {
        _this.bodyOverflowStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    });

    return _this;
  }

  var _proto = FocusedContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var hidden = this.props.hidden; // making sure trap focus always execute
    // after removeTrap for the case where two drops
    // are open at the same time

    setTimeout(function () {
      if (!hidden) {
        _this2.trapFocus();
      }
    }, 0);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeTrap();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        hidden = _this$props.hidden,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "hidden"]);

    delete rest.restrictScroll;
    return _react.default.createElement("div", _extends({
      ref: this.ref,
      "aria-hidden": hidden
    }, rest), children);
  };

  return FocusedContainer;
}(_react.Component);

exports.FocusedContainer = FocusedContainer;

_defineProperty(FocusedContainer, "defaultProps", {
  hidden: false,
  restrictScroll: false
});

_defineProperty(FocusedContainer, "propTypes", {
  hidden: _propTypes.default.bool,
  restrictScroll: _propTypes.default.bool
});

/***/ }),

/***/ "./node_modules/grommet/components/Form/Form.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Form/Form.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Form = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _FormContext = __webpack_require__(/*! ./FormContext */ "./node_modules/grommet/components/Form/FormContext.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultMessages = {
  invalid: 'invalid',
  required: 'required'
};

var Form =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      errors: {},
      value: {},
      touched: {}
    });

    _defineProperty(_assertThisInitialized(_this), "validations", {});

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      var onSubmit = _this.props.onSubmit;
      var _this$state = _this.state,
          errors = _this$state.errors,
          value = _this$state.value; // Don't submit the form via browser form action. We don't want it
      // if the validation fails. And, we assume a javascript action handler
      // otherwise.

      event.preventDefault();

      var nextErrors = _extends({}, errors);

      Object.keys(_this.validations).forEach(function (name) {
        var validate = _this.validations[name];
        var error = validate && validate(value[name], value);

        if (error) {
          nextErrors[name] = error;
        } else {
          delete nextErrors[name];
        }
      });

      if (Object.keys(nextErrors).length === 0 && onSubmit) {
        event.persist(); // extract from React's synthetic event pool

        var adjustedEvent = event;
        adjustedEvent.value = value;
        onSubmit(adjustedEvent);
      } else {
        _this.setState({
          errors: nextErrors
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onReset", function (event) {
      var onReset = _this.props.onReset;

      if (onReset) {
        onReset(event);
      }

      _this.setState({
        errors: {},
        value: {},
        touched: {}
      });
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (name, data, error) {
      var _this$state2 = _this.state,
          errors = _this$state2.errors,
          touched = _this$state2.touched,
          value = _this$state2.value;

      var nextValue = _extends({}, value);

      nextValue[name] = data;

      var nextTouched = _extends({}, touched);

      nextTouched[name] = true;

      var nextErrors = _extends({}, errors);

      if (errors[name]) {
        var nextError = error || _this.validations[name] && _this.validations[name](data, nextValue);

        if (nextError) {
          nextErrors[name] = nextError;
        } else {
          delete nextErrors[name];
        }
      }

      _this.setState({
        value: nextValue,
        errors: nextErrors,
        touched: nextTouched
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addValidation", function (name, validate) {
      _this.validations[name] = validate;
    });

    return _this;
  }

  Form.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var value = nextProps.value,
        errors = nextProps.errors,
        messages = nextProps.messages;
    var stateValue = prevState.value,
        stateErrors = prevState.errors,
        priorValue = prevState.priorValue,
        priorErrors = prevState.priorErrors,
        priorMessages = prevState.priorMessages;

    if (!priorValue || value !== priorValue || errors !== priorErrors || messages !== priorMessages) {
      return {
        value: value !== priorValue ? value : stateValue,
        priorValue: value,
        errors: (errors !== priorErrors ? errors : stateErrors) || {},
        priorErrors: errors,
        messages: _extends({}, defaultMessages, messages),
        priorMessages: messages
      };
    }

    return null;
  };

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    delete rest.messages;
    delete rest.theme;
    delete rest.value;
    var _this$state3 = this.state,
        errors = _this$state3.errors,
        touched = _this$state3.touched,
        value = _this$state3.value,
        messages = _this$state3.messages;
    return _react.default.createElement("form", _extends({}, rest, {
      onReset: this.onReset,
      onSubmit: this.onSubmit
    }), _react.default.createElement(_FormContext.FormContext.Provider, {
      value: {
        addValidation: this.addValidation,
        errors: errors,
        messages: messages,
        touched: touched,
        update: this.update,
        value: value
      }
    }, children));
  };

  return Form;
}(_react.Component);

_defineProperty(Form, "defaultProps", {
  messages: defaultMessages,
  value: {}
});

Object.setPrototypeOf(Form.defaultProps, _defaultProps.defaultProps);
var FormDoc;

if (true) {
  FormDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Form/doc.js").doc(Form); // eslint-disable-line global-require
}

var FormWrapper = FormDoc || Form;
exports.Form = FormWrapper;
FormWrapper.displayName = 'Form';

/***/ }),

/***/ "./node_modules/grommet/components/Form/FormContext.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/Form/FormContext.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FormContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContext = _react.default.createContext(undefined);

exports.FormContext = FormContext;

/***/ }),

/***/ "./node_modules/grommet/components/Form/doc.js":
/*!*****************************************************!*\
  !*** ./node_modules/grommet/components/Form/doc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(Form) {
  var DocumentedForm = (0, _reactDesc.describe)(Form).availableAt((0, _utils.getAvailableAtBadge)('Form')).description('A form that manages state for its fields.').usage("import { Form } from 'grommet';\n<Form />").intrinsicElement('form');
  DocumentedForm.propTypes = {
    errors: _reactDesc.PropTypes.shape({}).description("An object representing any errors in the data. They keys should\n        match the keys in the value object.").defaultValue({}),
    messages: _reactDesc.PropTypes.shape({
      invalid: _reactDesc.PropTypes.string,
      required: _reactDesc.PropTypes.string
    }).description('Custom validation messages.').defaultValue({
      invalid: 'invalid',
      required: 'required'
    }),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when any fields are updated.'),
    onSubmit: _reactDesc.PropTypes.func.description("Function that will be called when the form is submitted. The\n      single argument is an event containing the latest value object\n      via `event.value`."),
    onReset: _reactDesc.PropTypes.func.description("Function that will be called when the form is reset. The\n      single argument is the event provided by react."),
    value: _reactDesc.PropTypes.shape({}).description('An object representing all of the data in the form.').defaultValue({})
  };
  return DocumentedForm;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/Form/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Form/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FormContext = exports.Form = void 0;

var _Form = __webpack_require__(/*! ./Form */ "./node_modules/grommet/components/Form/Form.js");

exports.Form = _Form.Form;

var _FormContext = __webpack_require__(/*! ./FormContext */ "./node_modules/grommet/components/Form/FormContext.js");

exports.FormContext = _FormContext.FormContext;

/***/ }),

/***/ "./node_modules/grommet/components/FormField/FormField.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/FormField/FormField.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FormField = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _CheckBox = __webpack_require__(/*! ../CheckBox */ "./node_modules/grommet/components/CheckBox/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

var _TextInput = __webpack_require__(/*! ../TextInput */ "./node_modules/grommet/components/TextInput/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _FormContext = __webpack_require__(/*! ../Form/FormContext */ "./node_modules/grommet/components/Form/FormContext.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validateField = function validateField(required, validate, messages) {
  return function (value, data) {
    var error;

    if (required && (value === undefined || value === '')) {
      error = messages.required;
    } else if (validate) {
      if (typeof validate === 'function') {
        error = validate(value, data);
      } else if (validate.regexp) {
        if (!validate.regexp.test(value)) {
          error = validate.message || messages.invalid;
        }
      }
    }

    return error;
  };
};

var FormFieldBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "FormField__FormFieldBox",
  componentId: "m9hood-0"
})(["", ""], function (props) {
  return props.theme.formField.extend;
});

var FormField =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FormField, _Component);

  function FormField() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (value, update) {
      var _this$props = _this.props,
          name = _this$props.name,
          component = _this$props.component,
          required = _this$props.required,
          _onChange = _this$props.onChange,
          rest = _objectWithoutPropertiesLoose(_this$props, ["name", "component", "required", "onChange"]);

      delete rest.className;
      var Input = component || _TextInput.TextInput;

      if (Input === _CheckBox.CheckBox) {
        return _react.default.createElement(Input, _extends({
          name: name,
          checked: value[name] || false,
          onChange: function onChange(event) {
            update(name, event.target.checked);
            if (_onChange) _onChange(event);
          }
        }, rest));
      }

      return _react.default.createElement(Input, _extends({
        name: name,
        value: value[name] || '',
        onChange: function onChange(event) {
          update(name, event.value || event.target.value);
          if (_onChange) _onChange(event);
        },
        plain: true,
        focusIndicator: false
      }, rest));
    });

    return _this;
  }

  var _proto = FormField.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        component = _this$props2.component,
        error = _this$props2.error,
        focus = _this$props2.focus,
        help = _this$props2.help,
        htmlFor = _this$props2.htmlFor,
        label = _this$props2.label,
        name = _this$props2.name,
        pad = _this$props2.pad,
        required = _this$props2.required,
        style = _this$props2.style,
        theme = _this$props2.theme,
        validate = _this$props2.validate,
        onBlur = _this$props2.onBlur,
        onFocus = _this$props2.onFocus;
    var formField = theme.formField;
    var border = formField.border;
    return _react.default.createElement(_FormContext.FormContext.Consumer, null, function (context) {
      var normalizedError = error;
      var contents = children;

      if (context) {
        var addValidation = context.addValidation,
            errors = context.errors,
            value = context.value,
            update = context.update,
            messages = context.messages;
        addValidation(name, validateField(required, validate, messages));
        normalizedError = error || errors[name];
        contents = children || _this2.renderChildren(value, update);
      }

      if (pad) {
        contents = _react.default.createElement(_Box.Box, formField.content, contents);
      }

      var borderColor;

      if (focus && !normalizedError) {
        borderColor = 'focus';
      } else if (normalizedError) {
        borderColor = border && border.error.color || 'status-critical';
      } else {
        borderColor = border && border.color || 'border';
      }

      var abut;
      var outerStyle = style;

      if (border) {
        var normalizedChildren = children ? _react.Children.map(children, function (child) {
          if (child) {
            return (0, _react.cloneElement)(child, {
              plain: true,
              focusIndicator: false,
              onBlur: onBlur,
              onFocus: onFocus
            });
          }

          return child;
        }) : contents;
        contents = _react.default.createElement(_Box.Box, {
          ref: function ref(_ref) {
            _this2.childContainerRef = _ref;
          },
          border: border.position === 'inner' ? _extends({}, border, {
            side: border.side || 'bottom',
            color: borderColor
          }) : undefined
        }, normalizedChildren);
        abut = border.position === 'outer' && (border.side === 'all' || border.side === 'horizontal' || !border.side);

        if (abut) {
          // marginBottom is set to overlap adjacent fields
          var marginBottom = '-1px';

          if (border.size) {
            marginBottom = "-" + (0, _utils.parseMetricToNum)(theme.global.borderSize[border.size]) + "px";
          }

          outerStyle = _extends({
            position: focus ? 'relative' : undefined,
            marginBottom: marginBottom,
            zIndex: focus ? 10 : undefined
          }, style);
        }
      }

      return _react.default.createElement(FormFieldBox, {
        className: className,
        border: border && border.position === 'outer' ? _extends({}, border, {
          color: borderColor
        }) : undefined,
        margin: abut ? undefined : _extends({}, formField.margin),
        style: outerStyle
      }, label && component !== _CheckBox.CheckBox || help ? _react.default.createElement(_react.default.Fragment, null, label && component !== _CheckBox.CheckBox && _react.default.createElement(_Text.Text, _extends({
        as: "label",
        htmlFor: htmlFor
      }, formField.label), label), help && _react.default.createElement(_Text.Text, _extends({}, formField.help, {
        color: formField.help.color[theme.dark ? 'dark' : 'light']
      }), help)) : undefined, contents, normalizedError && _react.default.createElement(_Text.Text, _extends({}, formField.error, {
        color: formField.error.color[theme.dark ? 'dark' : 'light']
      }), normalizedError));
    });
  };

  return FormField;
}(_react.Component);

FormField.defaultProps = {};
Object.setPrototypeOf(FormField.defaultProps, _defaultProps.defaultProps);
var FormFieldDoc;

if (true) {
  FormFieldDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/FormField/doc.js").doc(FormField); // eslint-disable-line global-require
}

var FormFieldWrapper = (0, _recompose.compose)((0, _hocs.withFocus)({
  focusWithMouse: true
}), _styledComponents.withTheme)(FormFieldDoc || FormField);
exports.FormField = FormFieldWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/FormField/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/FormField/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(FormField) {
  var DocumentedFormField = (0, _reactDesc.describe)(FormField).availableAt((0, _utils.getAvailableAtBadge)('FormField')).description("A single field in a form. FormField wraps an input component with\n      a label, help, and/or error messaging. It typically contains an input\n      control like TextInput, TextArea, Select, etc.").usage("import { FormField } from 'grommet';\n<FormField />").intrinsicElement('div');
  DocumentedFormField.propTypes = {
    component: _reactDesc.PropTypes.func.description("The component to insert in the FormField. Grommet will add update the form values when this field changes. Any additional properties (such as initial value) you pass to FormField will be forwarded to this component."),
    error: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Any error text describing issues with the field'),
    help: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Any help text describing how the field works'),
    htmlFor: _reactDesc.PropTypes.string.description('The id of the input element contained in this field'),
    label: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('A short label describing the field'),
    name: _reactDesc.PropTypes.string.description("The name of the value data when in a Form and the name of\n      the input field."),
    pad: _reactDesc.PropTypes.bool.description('Whether to add padding to align with the padding of TextInput.'),
    required: _reactDesc.PropTypes.bool.description('Whether the field is required.'),
    validate: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.shape({
      regexp: _reactDesc.PropTypes.object,
      // regular expression
      message: _reactDesc.PropTypes.string
    }), _reactDesc.PropTypes.func]).description("Validation rule. Provide a regular expression or a function. If a\n      function is provided, it will be called with two arguments, the value\n      for this field and the entire value object. This permits validation to\n      encompass multiple fields. The function should return a string message\n      describing the validation issue, if any.")
  };
  return DocumentedFormField;
};

exports.doc = doc;
var themeDoc = {
  'formField.border.color': {
    description: 'The border color.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: 'border'
  },
  'formField.border.error.color': {
    description: 'The border color of the error.',
    type: "string | {'dark': string, 'light': string}",
    defaultValue: "{ dark: 'white', light: 'status-critical' },"
  },
  'formField.border.position': {
    description: 'The border position.',
    type: 'string',
    defaultValue: 'inner'
  },
  'formField.border.side': {
    description: 'The border side of the FormField.',
    type: 'string',
    defaultValue: 'bottom'
  },
  'formField.content.pad': {
    description: 'The pad of the FormField content.',
    type: 'object',
    defaultValue: "{ horizontal: 'small', bottom: 'small' }"
  },
  'formField.error.color': {
    description: 'The color of the FormField error.',
    type: "string | {'dark': string, 'light': string}",
    defaultValue: "{ dark: 'status-critical', light: 'status-critical' }"
  },
  'formField.error.margin': {
    description: 'The margin used for the FormField error.',
    type: 'string | object',
    defaultValue: "{ vertical: 'xsmall', horizontal: 'small' }"
  },
  'formField.extend': {
    description: 'Any additional style for FormField.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'formField.help.color': {
    description: 'The color of the FormField help.',
    type: "string | {'dark': string, 'light': string}",
    defaultValue: "{ dark: 'dark-3', light: 'dark-3' }"
  },
  'formField.help.margin': {
    description: 'The margin for the FormField help.',
    type: 'string | object',
    defaultValue: "{ left: 'small' }"
  },
  'formField.label.margin': {
    description: 'The margin for the FormField label.',
    type: 'string | object',
    defaultValue: "{ vertical: 'xsmall', horizontal: 'small' }"
  },
  'formField.margin': {
    description: 'The margin of FormField.',
    type: 'string | object',
    defaultValue: "{ bottom: 'small' }"
  },
  'global.borderSize': {
    description: 'The possible border sizes for FormField.',
    type: 'object',
    defaultValue: "{\n  xsmall: '1px',\n  small: '2px',\n  medium: '4px',\n  large: '12px',\n  xlarge: '24px,\n}"
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/FormField/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/FormField/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FormField = void 0;

var _FormField = __webpack_require__(/*! ./FormField */ "./node_modules/grommet/components/FormField/FormField.js");

exports.FormField = _FormField.FormField;

/***/ }),

/***/ "./node_modules/grommet/components/Grid/Grid.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Grid/Grid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Grid = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledGrid = __webpack_require__(/*! ./StyledGrid */ "./node_modules/grommet/components/Grid/StyledGrid.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Grid = function Grid(props) {
  var fill = props.fill,
      rows = props.rows,
      tag = props.tag,
      as = props.as,
      rest = _objectWithoutPropertiesLoose(props, ["fill", "rows", "tag", "as"]);

  return _react.default.createElement(_StyledGrid.StyledGrid, _extends({
    as: !as && tag ? tag : as,
    fillContainer: fill,
    rowsProp: rows
  }, rest));
};

var GridDoc;

if (true) {
  GridDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Grid/doc.js").doc(Grid); // eslint-disable-line global-require
}

var GridWrapper = GridDoc || Grid;
exports.Grid = GridWrapper;
GridWrapper.available = typeof window !== 'undefined' && window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');

/***/ }),

/***/ "./node_modules/grommet/components/Grid/StyledGrid.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Grid/StyledGrid.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledGrid = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var fillStyle = function fillStyle(fill) {
  if (fill === 'horizontal') {
    return 'width: 100%;';
  }

  if (fill === 'vertical') {
    return 'height: 100%;';
  }

  if (fill) {
    return "\n      width: 100%;\n      height: 100%;\n    ";
  }

  return undefined;
};

var ALIGN_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignStyle = (0, _styledComponents.css)(["align-items:", ";"], function (props) {
  return ALIGN_MAP[props.align];
});
var ALIGN_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignContentStyle = (0, _styledComponents.css)(["align-content:", ";"], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});
var JUSTIFY_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var justifyStyle = (0, _styledComponents.css)(["justify-items:", ";"], function (props) {
  return JUSTIFY_MAP[props.justify];
});
var JUSTIFY_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var justifyContentStyle = (0, _styledComponents.css)(["justify-content:", ";"], function (props) {
  return JUSTIFY_CONTENT_MAP[props.justifyContent];
});

var gapStyle = function gapStyle(props) {
  if (typeof props.gap === 'string') {
    var gapSize = props.theme.global.edgeSize[props.gap];
    return "grid-gap: " + gapSize + " " + gapSize + ";";
  }

  if (props.gap.row && props.gap.column) {
    return "\n      grid-row-gap: " + props.theme.global.edgeSize[props.gap.row] + ";\n      grid-column-gap: " + props.theme.global.edgeSize[props.gap.column] + ";\n    ";
  }

  if (props.gap.row) {
    return "\n      grid-row-gap: " + props.theme.global.edgeSize[props.gap.row] + ";\n    ";
  }

  if (props.gap.column) {
    return "\n      grid-column-gap: " + props.theme.global.edgeSize[props.gap.column] + ";\n    ";
  }

  return '';
};

var SIZE_MAP = {
  flex: '1fr',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var getRepeatCount = function getRepeatCount(count) {
  return typeof count === 'number' ? count : "auto-" + count;
};

var getRepeatSize = function getRepeatSize(size, theme) {
  if (Array.isArray(size)) {
    return "minmax(" + (theme.global.size[size[0]] || size[0]) + ", " + (theme.global.size[size[1]] || size[1]) + ")";
  }

  return "minmax(" + (theme.global.size[size] || size) + ", 1fr)";
};

var sizeFor = function sizeFor(size, props, isRow) {
  var mapped = SIZE_MAP[size];

  if (isRow && mapped && (!props.fillContainer || props.fillContainer === 'horizontal')) {
    console.warn('Grid needs `fill` when using fractional row sizes');
  }

  return mapped || props.theme.global.size[size] || size;
};

var columnsStyle = function columnsStyle(props) {
  if (Array.isArray(props.columns)) {
    return (0, _styledComponents.css)(["grid-template-columns:", ";"], props.columns.map(function (s) {
      if (Array.isArray(s)) {
        return "minmax(" + sizeFor(s[0], props) + ", " + sizeFor(s[1], props) + ")";
      }

      return sizeFor(s, props);
    }).join(' '));
  }

  if (typeof props.columns === 'object') {
    return (0, _styledComponents.css)(["grid-template-columns:repeat( ", ",", " );"], getRepeatCount(props.columns.count), getRepeatSize(props.columns.size, props.theme));
  }

  return (0, _styledComponents.css)(["grid-template-columns:repeat( auto-fill,", " );"], getRepeatSize(props.columns, props.theme));
};

var rowsStyle = function rowsStyle(props) {
  if (Array.isArray(props.rowsProp)) {
    return (0, _styledComponents.css)(["grid-template-rows:", ";"], props.rowsProp.map(function (s) {
      if (Array.isArray(s)) {
        return "minmax(" + sizeFor(s[0], props, true) + ", " + sizeFor(s[1], props, true) + ")";
      }

      return sizeFor(s, props, true);
    }).join(' '));
  }

  return (0, _styledComponents.css)(["grid-auto-rows:", ";"], props.theme.global.size[props.rowsProp]);
};

var areasStyle = function areasStyle(props) {
  // translate areas objects into grid-template-areas syntax
  if (!Array.isArray(props.rowsProp) || !Array.isArray(props.columns)) {
    console.warn('Grid `areas` requires `rows` and `columns` to be arrays.');
  }

  var cells = props.rowsProp.map(function () {
    return props.columns.map(function () {
      return '.';
    });
  });
  props.areas.forEach(function (area) {
    for (var row = area.start[1]; row <= area.end[1]; row += 1) {
      for (var column = area.start[0]; column <= area.end[0]; column += 1) {
        cells[row][column] = area.name;
      }
    }
  });
  return "grid-template-areas: " + cells.map(function (r) {
    return "\"" + r.join(' ') + "\"";
  }).join(' ') + ";";
};

var StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "StyledGrid",
  componentId: "sc-1wofa1l-0"
})(["display:grid;box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return props.fillContainer && fillStyle(props.fillContainer);
}, function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.areas && areasStyle(props);
}, function (props) {
  return props.columns && columnsStyle(props);
}, function (props) {
  return props.gap && gapStyle(props);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.justifyContent && justifyContentStyle;
}, function (props) {
  return props.rowsProp && rowsStyle(props);
}, function (props) {
  return props.theme.grid && props.theme.grid.extend;
});

exports.StyledGrid = StyledGrid;
StyledGrid.defaultProps = {};
Object.setPrototypeOf(StyledGrid.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Grid/doc.js":
/*!*****************************************************!*\
  !*** ./node_modules/grommet/components/Grid/doc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var fixedSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
var sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', 'flex', 'auto'];
var edgeSizes = ['small', 'medium', 'large', 'none'];

var doc = function doc(Grid) {
  var DocumentedGrid = (0, _reactDesc.describe)(Grid).availableAt((0, _utils.getAvailableAtBadge)('Grid')).description("A grid system for laying out content. To use, define the\nrows and columns, create area names for adjacent cells, and then\nplace Box components inside those areas using the gridArea property.\nSee https://css-tricks.com/snippets/css/complete-guide-grid/.\nThe availability of Grid can be tested via `Grid.available`. Use this\nto create fallback rendering for older browsers, like ie11.").usage("import { Grid } from 'grommet';\n<Grid />").intrinsicElement('div');
  DocumentedGrid.propTypes = _extends({}, _utils.genericProps, {
    align: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description("How to align the individual items inside the grid when there is extra\nspace in the column axis.").defaultValue('stretch'),
    alignContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents along the column axis.'),
    areas: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      name: _reactDesc.PropTypes.string,
      start: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number),
      end: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)
    })).description('Area names and column,row coordinates.'),
    columns: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(sizes), _reactDesc.PropTypes.string])), _reactDesc.PropTypes.oneOf(sizes), _reactDesc.PropTypes.string])), _reactDesc.PropTypes.oneOf(fixedSizes), _reactDesc.PropTypes.shape({
      count: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['fit', 'fill']), _reactDesc.PropTypes.number]),
      size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(fixedSizes), _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description("Column sizes.\n      If an array value is an array, the inner array indicates the\n      minimum and maximum sizes for the column.\n      Specifying a single string will repeat multiple columns\n      of that size, as long as there is room for more.\n      Specifying an object allows indicating how the columns\n      stretch to fit the available space."),
    fill: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['horizontal', 'vertical']), _reactDesc.PropTypes.bool]).description('Whether the width and/or height should fill the container.'),
    gap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.shape({
      row: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.string]),
      column: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description('Gap sizes between rows and/or columns.'),
    justify: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description("How to align the individual items inside the grid when there is extra\nspace in the row axis.").defaultValue('stretch'),
    justifyContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents along the row axis.'),
    rows: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(sizes), _reactDesc.PropTypes.string])), _reactDesc.PropTypes.oneOf(sizes), _reactDesc.PropTypes.string])), _reactDesc.PropTypes.oneOf(fixedSizes), _reactDesc.PropTypes.string]).description("Row sizes.\n      If an array value is an array, the inner array indicates the\n      minimum and maximum sizes for the row.\n      Specifying a single string will cause automatically added rows to be\n      the specified size."),
    tag: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("The DOM tag to use for the element. NOTE: This is deprecated\n      in favor of indicating the DOM tag via the 'as' property."),
    as: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description('The DOM tag or react component to use for the element.').defaultValue('div')
  });
  return DocumentedGrid;
};

exports.doc = doc;

var themeDoc = _extends({
  'global.size': {
    description: 'The possible sizes for row and column.',
    type: 'object',
    defaultValue: "{\n      xxsmall: '48px',\n      xsmall: '96px',\n      small: '192px',\n      medium: '384px',\n      large: '768px',\n      xlarge: '1152px',\n      xxlarge: '1536px',\n      full: '100%',\n    }"
  },
  'grid.extend': {
    description: 'Any additional style for the Grid.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
}, _utils.themeDocUtils.edgeStyle('The possible sizes for the grid margin and gap.'));

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Grid/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Grid/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Grid = void 0;

var _Grid = __webpack_require__(/*! ./Grid */ "./node_modules/grommet/components/Grid/Grid.js");

exports.Grid = _Grid.Grid;

/***/ }),

/***/ "./node_modules/grommet/components/Grommet/Grommet.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Grommet/Grommet.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Grommet = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _grommetStyles = __webpack_require__(/*! grommet-styles */ "./node_modules/grommet-styles/es6/index.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./node_modules/grommet/contexts/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _themes = __webpack_require__(/*! ../../themes */ "./node_modules/grommet/themes/index.js");

var _StyledGrommet = __webpack_require__(/*! ./StyledGrommet */ "./node_modules/grommet/components/Grommet/StyledGrommet.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  body { margin: 0; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var FullGlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var Grommet =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Grommet, _Component);

  function Grommet() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      var _this$state = _this.state,
          theme = _this$state.theme,
          responsive = _this$state.responsive;
      var breakpoint = (0, _utils.getBreakpoint)(window.innerWidth, theme);

      if (breakpoint !== responsive) {
        _this.setState({
          responsive: breakpoint
        });
      }
    });

    return _this;
  }

  Grommet.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var _nextProps$theme = nextProps.theme,
        theme = _nextProps$theme === void 0 ? {} : _nextProps$theme;
    var stateTheme = prevState.theme,
        themeProp = prevState.themeProp;
    var nextTheme = (0, _utils.deepMerge)(_themes.base, theme);

    if (!stateTheme || theme !== themeProp) {
      if (typeof theme.dark === 'undefined') {
        // calculate if background is dark or not
        // otherwise respect the property passed in the theme
        var colors = nextTheme.global.colors;
        var color = colors.background;
        nextTheme.dark = color ? (0, _grommetStyles.colorIsDark)(color) : false;
      }

      return {
        theme: nextTheme,
        themeProp: theme
      };
    }

    return null;
  };

  var _proto = Grommet.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  _proto.deviceResponsive = function deviceResponsive() {
    var userAgent = this.props.userAgent;
    var theme = this.state.theme;
    /*
     * Regexes provided for mobile and tablet detection are meant to replace
     * a full-featured specific library due to contributing a considerable size
     * into the bundle.
     *
     * User agents found https://deviceatlas.com/blog/list-of-user-agent-strings
     */

    if (userAgent) {
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent)) {
        return (0, _utils.getDeviceBreakpoint)('tablet', theme);
      }

      if (/Mobile|iPhone|Android/.test(userAgent)) {
        return (0, _utils.getDeviceBreakpoint)('phone', theme);
      }

      return (0, _utils.getDeviceBreakpoint)('computer', theme);
    }

    return undefined;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        full = _this$props.full,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "full"]);

    delete rest.theme;
    var _this$state2 = this.state,
        theme = _this$state2.theme,
        stateResponsive = _this$state2.responsive; // Value from state should be correct once we resize
    // On first render we try to guess otherwise set the default as a tablet

    var responsive = stateResponsive || this.deviceResponsive() || theme.global.deviceBreakpoints.tablet;
    return _react.default.createElement(_contexts.ThemeContext.Provider, {
      value: theme
    }, _react.default.createElement(_contexts.ResponsiveContext.Provider, {
      value: responsive
    }, _react.default.createElement(_StyledGrommet.StyledGrommet, _extends({
      full: full
    }, rest), children), full && _react.default.createElement(FullGlobalStyle, null)));
  };

  return Grommet;
}(_react.Component);

_defineProperty(Grommet, "displayName", 'Grommet');

var GrommetDoc;

if (true) {
  GrommetDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Grommet/doc.js").doc(Grommet); // eslint-disable-line global-require
}

var GrommetWrapper = GrommetDoc || Grommet;
exports.Grommet = GrommetWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Grommet/StyledGrommet.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet/components/Grommet/StyledGrommet.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledGrommet = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var fullStyle = (0, _styledComponents.css)(["width:100vw;height:100vh;overflow:auto;"]);

var StyledGrommet = _styledComponents.default.div.withConfig({
  displayName: "StyledGrommet",
  componentId: "sc-19lkkz7-0"
})(["", " ", " ", " ", " ", ""], function (props) {
  return !props.plain && _utils.baseStyle;
}, function (props) {
  return props.full && fullStyle;
}, function (props) {
  return props.theme.global.font.face;
}, function (props) {
  return props.theme.grommet.extend;
}, function (props) {
  return props.cssVars && Object.keys(props.theme.global.colors).filter(function (k) {
    return typeof props.theme.global.colors[k] === 'string';
  }).map(function (k) {
    return "--" + k + ": " + props.theme.global.colors[k] + ";";
  }).join('\n');
});

exports.StyledGrommet = StyledGrommet;
StyledGrommet.defaultProps = {};
Object.setPrototypeOf(StyledGrommet.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Grommet/doc.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Grommet/doc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(Grommet) {
  var DocumentedGrommet = (0, _reactDesc.describe)(Grommet).availableAt((0, _utils.getAvailableAtBadge)('Grommet')).description('The top level Grommet container.').usage("import { Grommet } from 'grommet';\n<Grommet>...</Grommet>").intrinsicElement('div');
  DocumentedGrommet.propTypes = {
    full: _reactDesc.PropTypes.bool.description('Whether to take the whole viewport.').defaultValue(false),
    plain: _reactDesc.PropTypes.bool.description('Whether or not Grommet should apply a global font-family, font-size, and line-height.').defaultValue(false),
    cssVars: _reactDesc.PropTypes.bool.description('Whether to expose the css variables.').defaultValue(false),
    theme: _reactDesc.PropTypes.object.description('Custom styles for Grommet app component.'),
    userAgent: _reactDesc.PropTypes.string.description('User agent used to detect the device width for setting the initial breakpoint.')
  };
  return DocumentedGrommet;
};

exports.doc = doc;
var themeDoc = {
  'grommet.extend': {
    description: 'Any additional style for Grommet.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'global.font.face': {
    description: 'Custom font face declaration',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Grommet/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Grommet/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Grommet = void 0;

var _Grommet = __webpack_require__(/*! ./Grommet */ "./node_modules/grommet/components/Grommet/Grommet.js");

exports.Grommet = _Grommet.Grommet;

/***/ }),

/***/ "./node_modules/grommet/components/Heading/Heading.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Heading/Heading.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Heading = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledHeading = __webpack_require__(/*! ./StyledHeading */ "./node_modules/grommet/components/Heading/StyledHeading.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Heading = function Heading(props) {
  var color = props.color,
      level = props.level,
      rest = _objectWithoutPropertiesLoose(props, ["color", "level"]); // enforce level to be a number


  return _react.default.createElement(_StyledHeading.StyledHeading, _extends({
    as: "h" + level,
    colorProp: color,
    level: +level
  }, rest));
};

Heading.defaultProps = {
  level: 1,
  responsive: true
};
var HeadingDoc;

if (true) {
  HeadingDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Heading/doc.js").doc(Heading); // eslint-disable-line global-require
}

var HeadingWrapper = HeadingDoc || Heading;
exports.Heading = HeadingWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Heading/StyledHeading.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet/components/Heading/StyledHeading.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledHeading = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var headingTheme = props.theme.heading;
  var levelStyle = headingTheme.level[props.level];

  if (levelStyle) {
    var data = levelStyle[size];
    var styles = [(0, _styledComponents.css)(["font-size:", ";line-height:", ";max-width:", ";font-weight:", ";"], data.size, data.height, data.maxWidth, levelStyle.font.weight || headingTheme.weight)];

    if (props.responsive && headingTheme.responsiveBreakpoint) {
      var breakpoint = props.theme.global.breakpoints[headingTheme.responsiveBreakpoint];

      if (breakpoint) {
        var responsiveData = headingTheme.level[Math.min(props.level + 1, 4)][size];
        styles.push((0, _utils.breakpointStyle)(breakpoint, "\n          font-size: " + responsiveData.size + ";\n          line-height: " + responsiveData.height + ";\n          max-width: " + responsiveData.maxWidth + ";\n        "));
      }
    }

    return styles;
  }

  console.warn("Heading level " + props.level + " is not defined in your theme.");
  return '';
};

var fontFamily = function fontFamily(props) {
  var font = props.theme.heading.level[props.level].font;

  if (font && font.family) {
    return (0, _styledComponents.css)(["font-family:", ";"], font.family);
  }

  return props.theme.heading.font ? (0, _styledComponents.css)(["font-family:", ";"], props.theme.heading.font.family) : '';
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle = (0, _styledComponents.css)(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});
var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return (0, _utils.normalizeColor)(props.colorProp, props.theme);
});

var StyledHeading = _styledComponents.default.h1.withConfig({
  displayName: "StyledHeading",
  componentId: "sc-1rdh4aw-0"
})(["", " ", " ", " ", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return fontFamily(props);
}, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});

exports.StyledHeading = StyledHeading;
StyledHeading.defaultProps = {};
Object.setPrototypeOf(StyledHeading.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Heading/doc.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Heading/doc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Heading) {
  var DocumentedHeading = (0, _reactDesc.describe)(Heading).availableAt((0, _utils.getAvailableAtBadge)('Heading')).description('Heading text structed in levels.').usage("import { Heading } from 'grommet';\n<Heading />").intrinsicElement(['h1', 'h2', 'h3', 'h4']);
  DocumentedHeading.propTypes = _extends({}, _utils.genericProps, {
    color: _utils.colorPropType.description('A color identifier to use for the text color.'),
    level: _reactDesc.PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']).description("The heading level. It corresponds to the number after the 'H' for\nthe DOM tag. Set the level for semantic accuracy and accessibility.\nThe sizing can be further adjusted using the size property.").defaultValue(1),
    responsive: _reactDesc.PropTypes.bool.description("Whether the font size should be scaled for\n      mobile environments.").defaultValue(true),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description("The font size is primarily driven by the chosen tag. But, it can\nbe adjusted via this size property. The tag should be set for semantic\ncorrectness and accessibility. This size property allows for stylistic\nadjustments.").defaultValue('medium'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the heading.').defaultValue('start'),
    truncate: _reactDesc.PropTypes.bool.description("Restrict the text to a single line and truncate with ellipsis if it\nis too long to all fit.").defaultValue(false)
  });
  return DocumentedHeading;
};

exports.doc = doc;

var themeDoc = _extends({}, _utils.themeDocUtils.breakpointStyle('The possible breakpoints that could affect font-size and max-width'), _utils.themeDocUtils.edgeStyle('The possible sizes for margin.'), {
  'heading.extend': {
    description: 'Any additional style for Heading.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'heading.level': {
    description: 'The level that impacts line height, max width, font size, weight and family of the Heading.',
    type: 'object',
    defaultValue: "\n      1: {\n        medium: {\n          size: 34px,\n          height: 40px,\n          width: 826px,\n        },\n      },\n      weight: 600,\n      font:\n        {\n          family: undefined,\n        }"
  },
  'heading.weight': {
    description: 'Default heading weight used unless a per level heading is defined.',
    type: 'number',
    defaultValue: 600
  },
  'heading.font': {
    description: 'Default heading font used unless a per level heading is defined.',
    type: 'object',
    defaultValue: undefined
  },
  'heading.responsiveBreakpoint': {
    description: 'The breakpoint to trigger changes in the Heading layout. The actual values will be derived from global.breakpoints.',
    type: 'string',
    defaultValue: 'small'
  }
});

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Heading/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Heading/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Heading = void 0;

var _Heading = __webpack_require__(/*! ./Heading */ "./node_modules/grommet/components/Heading/Heading.js");

exports.Heading = _Heading.Heading;

/***/ }),

/***/ "./node_modules/grommet/components/Image/Image.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Image/Image.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Image = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledImage = __webpack_require__(/*! ./StyledImage */ "./node_modules/grommet/components/Image/StyledImage.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Image = function Image(_ref) {
  var fallback = _ref.fallback,
      onError = _ref.onError,
      opacity = _ref.opacity,
      src = _ref.src,
      rest = _objectWithoutPropertiesLoose(_ref, ["fallback", "onError", "opacity", "src"]);

  var _useState = (0, _react.useState)(false),
      imageMissing = _useState[0],
      setImageMissing = _useState[1];

  var handleError = function handleError(event) {
    if (onError) {
      onError(event);
    }

    setImageMissing(true);
  };

  var extraProps = {
    onError: (onError || fallback) && handleError
  };
  return _react.default.createElement(_StyledImage.StyledImage, _extends({}, rest, extraProps, {
    opacityProp: opacity,
    src: !imageMissing ? src : fallback
  }));
};

var ImageDoc;

if (true) {
  ImageDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Image/doc.js").doc(Image); // eslint-disable-line global-require
}

var ImageWrapper = ImageDoc || Image;
exports.Image = ImageWrapper;
ImageWrapper.displayName = 'Image';

/***/ }),

/***/ "./node_modules/grommet/components/Image/StyledImage.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Image/StyledImage.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledImage = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = (0, _styledComponents.css)(["flex:1 1;overflow:hidden;object-fit:", ";"], function (props) {
  return FIT_MAP[props.fit];
});

var StyledImage = _styledComponents.default.img.withConfig({
  displayName: "StyledImage",
  componentId: "ey4zx9-0"
})(["", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.image && props.theme.image.extend;
}, function (props) {
  return props.opacityProp && "opacity: " + (props.opacityProp === true ? props.theme.global.opacity.medium : props.theme.global.opacity[props.opacityProp] || props.opacityProp) + ";\n  ";
});

exports.StyledImage = StyledImage;
StyledImage.defaultProps = {};
Object.setPrototypeOf(StyledImage.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Image/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Image/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Image) {
  var DocumentedImage = (0, _reactDesc.describe)(Image).availableAt((0, _utils.getAvailableAtBadge)('Image')).description('An image.').usage("import { Image } from 'grommet';\n<Image/>").intrinsicElement('img');
  DocumentedImage.propTypes = _extends({}, _utils.genericProps, {
    fit: _reactDesc.PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.'),
    fallback: _reactDesc.PropTypes.string.description('Specifies the URL of the fallback image used when src is failing to load'),
    opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.string, _reactDesc.PropTypes.bool]).description('Transparency of the image.')
  });
  return DocumentedImage;
};

exports.doc = doc;
var themeDoc = {
  'global.opacity.medium': {
    description: 'The value used when opacity is set to true.',
    type: 'number',
    defaultValue: '0.4'
  },
  'image.extend': {
    description: 'Any additional style for the Image.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Image/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Image/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Image = void 0;

var _Image = __webpack_require__(/*! ./Image */ "./node_modules/grommet/components/Image/Image.js");

exports.Image = _Image.Image;

/***/ }),

/***/ "./node_modules/grommet/components/InfiniteScroll/InfiniteScroll.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet/components/InfiniteScroll/InfiniteScroll.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.InfiniteScroll = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// Wraps an item to ensure we can get a ref to it

/* eslint-disable react/no-multi-comp, react/no-find-dom-node */
var Ref =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Ref, _Component);

  function Ref() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Ref.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return children;
  };

  return Ref;
}(_react.Component);

var InfiniteScroll =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(InfiniteScroll, _PureComponent);

  function InfiniteScroll() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "initialScroll", false);

    _defineProperty(_assertThisInitialized(_this), "belowMarkerRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "firstPageItemRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "lastPageItemRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "showRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "addScrollListener", function () {
      var pageHeight = _this.state.pageHeight;

      if (pageHeight && _this.belowMarkerRef.current && !_this.scrollParents) {
        _this.scrollParents = (0, _utils.findScrollParents)(_this.belowMarkerRef.current);

        _this.scrollParents.forEach(function (scrollParent) {
          return scrollParent.addEventListener('scroll', _this.onScroll);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeScrollListener", function () {
      if (_this.scrollParents) {
        _this.scrollParents.forEach(function (scrollParent) {
          return scrollParent.removeEventListener('scroll', _this.place);
        });

        _this.scrollParents = undefined;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollShow", function () {
      var show = _this.props.show;

      if (show && !_this.initialScroll && _this.showRef.current) {
        _this.initialScroll = true; // on initial render, scroll to any 'show'

        (0, _reactDom.findDOMNode)(_this.showRef.current).scrollIntoView();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPageHeight", function () {
      var step = _this.props.step;
      var pageHeight = _this.state.pageHeight;

      if (_this.firstPageItemRef.current && _this.lastPageItemRef.current && !pageHeight) {
        /* eslint-disable react/no-find-dom-node */
        var beginRect = (0, _reactDom.findDOMNode)(_this.firstPageItemRef.current).getBoundingClientRect();
        var endRect = (0, _reactDom.findDOMNode)(_this.lastPageItemRef.current).getBoundingClientRect();
        /* eslint-enable react/no-find-dom-node */

        var nextPageHeight = endRect.y + endRect.height - beginRect.y; // Check if the items are arranged in a single column or not.

        var multiColumn = nextPageHeight / step < endRect.height;
        var pageArea = endRect.height * endRect.width * step; // In case the pageHeight is smaller than the visible area,
        // we call onScroll to set the page boundaries appropriately.

        _this.setState({
          multiColumn: multiColumn,
          pageArea: pageArea,
          pageHeight: nextPageHeight
        }, _this.onScroll);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      var _this$props = _this.props,
          onMore = _this$props.onMore,
          replace = _this$props.replace;
      var _this$state = _this.state,
          beginPage = _this$state.beginPage,
          endPage = _this$state.endPage,
          lastPage = _this$state.lastPage,
          multiColumn = _this$state.multiColumn,
          pageArea = _this$state.pageArea,
          pageHeight = _this$state.pageHeight;

      if (_this.scrollParents && _this.scrollParents[0] && pageHeight) {
        var scrollParent = _this.scrollParents[0]; // Determine the window into the first scroll parent

        var top;
        var height;
        var width;

        if (scrollParent === document) {
          top = document.documentElement.scrollTop || document.body.scrollTop;
          height = window.innerHeight;
          width = window.innerWidth;
        } else {
          top = scrollParent.scrollTop;
          var rect = scrollParent.getBoundingClientRect();
          height = rect.height;
          width = rect.width;
        } // Figure out which pages we should make visible based on the scroll
        // window.


        var offset = height / 4;
        var nextBeginPage = replace ? Math.min(lastPage, Math.max(0, multiColumn ? Math.floor(Math.max(0, top - offset) * width / pageArea) : Math.floor(Math.max(0, top - offset) / pageHeight))) : 0;
        var nextEndPage = Math.min(lastPage, Math.max(!replace && endPage || 0, multiColumn ? Math.ceil((top + height + offset) * width / pageArea) : Math.floor((top + height + offset) / pageHeight)));

        if (nextBeginPage !== beginPage || nextEndPage !== endPage) {
          _this.setState({
            beginPage: nextBeginPage,
            endPage: nextEndPage
          }, function () {
            if (onMore && nextEndPage === lastPage) {
              onMore();
            }
          });
        }
      }
    });

    return _this;
  }

  InfiniteScroll.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var items = nextProps.items,
        show = nextProps.show,
        step = nextProps.step;
    var lastPage = Math.ceil(items.length / step) - 1;

    if (prevState.beginPage === undefined || show && show >= step * (prevState.lastPage + 1) || lastPage !== prevState.lastPage) {
      var endPage = prevState.endPage || 0;

      if (show && show >= step * (endPage + 1)) {
        endPage = Math.floor((show + step) / step) - 1;
      }

      return {
        beginPage: 0,
        endPage: endPage,
        lastPage: lastPage,
        pageHeight: undefined
      };
    }

    return null;
  };

  var _proto2 = InfiniteScroll.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // ride out any animation, 100ms was chosen empirically
    clearTimeout(this.animationDelayTimer);
    this.animationDelayTimer = setTimeout(function () {
      _this2.setPageHeight();

      _this2.addScrollListener();

      _this2.scrollShow();

      _this2.onScroll();
    }, 100);
  };

  _proto2.componentDidUpdate = function componentDidUpdate() {
    this.setPageHeight();
    this.removeScrollListener();
    this.addScrollListener();
    this.scrollShow();
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    this.removeScrollListener();
    clearTimeout(this.animationDelayTimer);
    clearTimeout(this.scrollTimer);
  };

  _proto2.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        items = _this$props2.items,
        onMore = _this$props2.onMore,
        renderMarker = _this$props2.renderMarker,
        replace = _this$props2.replace,
        show = _this$props2.show,
        step = _this$props2.step;
    var _this$state2 = this.state,
        beginPage = _this$state2.beginPage,
        endPage = _this$state2.endPage,
        lastPage = _this$state2.lastPage,
        pageHeight = _this$state2.pageHeight;
    var firstIndex = beginPage * step;
    var lastIndex = (endPage + 1) * step - 1;
    var result = [];

    if (replace && pageHeight && firstIndex) {
      var marker = _react.default.createElement(_Box.Box, {
        key: "above",
        flex: false,
        height: beginPage * pageHeight + "px"
      });

      if (renderMarker) {
        // need to give it a key
        marker = _react.default.cloneElement(renderMarker(marker), {
          key: 'above'
        });
      }

      result.push(marker);
    }

    items.slice(firstIndex, lastIndex + 1).forEach(function (item, index) {
      var itemsIndex = firstIndex + index;
      var child = children(item, itemsIndex);

      if (!pageHeight && itemsIndex === 0) {
        child = _react.default.createElement(Ref, {
          key: "first",
          ref: _this3.firstPageItemRef
        }, child);
      } else if (!pageHeight && itemsIndex === step - 1) {
        child = _react.default.createElement(Ref, {
          key: "last",
          ref: _this3.lastPageItemRef
        }, child);
      }

      if (show && show === itemsIndex) {
        child = _react.default.createElement(Ref, {
          key: "show",
          ref: _this3.showRef
        }, child);
      }

      result.push(child);
    });

    if (endPage < lastPage || replace || onMore) {
      var _marker = _react.default.createElement(_Box.Box, {
        key: "below",
        ref: this.belowMarkerRef,
        flex: false,
        height: (replace ? (lastPage - endPage) * pageHeight : 0) + "px"
      });

      if (renderMarker) {
        // need to give it a key
        _marker = _react.default.cloneElement(renderMarker(_marker), {
          key: 'below'
        });
      }

      result.push(_marker);
    }

    return result;
  };

  return InfiniteScroll;
}(_react.PureComponent);

_defineProperty(InfiniteScroll, "defaultProps", {
  items: [],
  step: 50
});

var InfiniteScrollDoc;

if (true) {
  InfiniteScrollDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/InfiniteScroll/doc.js").doc(InfiniteScroll); // eslint-disable-line global-require
}

var InfiniteScrollWrapper = InfiniteScrollDoc || InfiniteScroll;
/* eslint-enable react/no-find-dom-node, react/no-multi-comp */

exports.InfiniteScroll = InfiniteScrollWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/InfiniteScroll/doc.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/InfiniteScroll/doc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(InfiniteScroll) {
  var DocumentedInfiniteScroll = (0, _reactDesc.describe)(InfiniteScroll).availableAt((0, _utils.getAvailableAtBadge)('InfiniteScroll')).description('A container that lazily renders items.').usage("import { InfiniteScroll } from 'grommet';\n<InfiniteScroll />");
  DocumentedInfiniteScroll.propTypes = {
    children: _reactDesc.PropTypes.func.description('Function that will be called when each item is rendered.'),
    items: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.any).description('The children callback will be called to render each item.'),
    onMore: _reactDesc.PropTypes.func.description("Use this to indicate that 'items' doesn't contain all that it could.\n      It will be called when the entire list of items has been rendered.\n      This might be used when the total number of items that could be retrieved\n      is more than you'd want to load into the browser. 'onMore' allows you\n      to lazily fetch more from the server only when needed."),
    renderMarker: _reactDesc.PropTypes.func.description("Function that will be called to render the marker element that\n      is inserted into the DOM to track when scrolling nears the end of the\n      rendered items. It will be called with a single element that should\n      be wrapped appropriately. This is needed when the default\n      element, a <span>, isn't sufficient, such as a row of a table body."),
    replace: _reactDesc.PropTypes.bool.description("Whether to replace previously rendered items with a generic spacing\n      element when they have scrolled out of view. This is more performant but\n      means that in-page searching will not find elements that have been\n      replaced. In general, this should be set to true within Drop containers\n      and false otherwise.").defaultValue(false),
    scrollableAncestor: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.node, _reactDesc.PropTypes.oneOf(['window'])]).description("A custom ancestor to determine if the marker is visible in it.\n      This is useful in cases where you do not want the immediate\n      scrollable ancestor to be the container. For example, when your\n      marker is in a div that has overflow auto but you are detecting\n      visibility based on the window.\n      This should typically be a reference to a DOM node, but it will\n      also work to pass it the string \"window\" if you are using server\n      rendering."),
    show: _reactDesc.PropTypes.number.description('Ensure that the item at this index is visible initially.'),
    step: _reactDesc.PropTypes.number.description('How many items to render at a time.').defaultValue(50)
  };
  return DocumentedInfiniteScroll;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/InfiniteScroll/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet/components/InfiniteScroll/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.InfiniteScroll = void 0;

var _InfiniteScroll = __webpack_require__(/*! ./InfiniteScroll */ "./node_modules/grommet/components/InfiniteScroll/InfiniteScroll.js");

exports.InfiniteScroll = _InfiniteScroll.InfiniteScroll;

/***/ }),

/***/ "./node_modules/grommet/components/Keyboard/Keyboard.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Keyboard/Keyboard.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Keyboard = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift'
};

var Keyboard =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Keyboard, _Component);

  function Keyboard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      /* eslint-disable-next-line react/prop-types */
      var onKeyDown = _this.props.onKeyDown;
      var key = event.keyCode ? event.keyCode : event.which;
      var callbackName = KEYS[key];
      /* eslint-disable react/destructuring-assignment */

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      if (callbackName && _this.props[callbackName]) {
        var _this$props;

        (_this$props = _this.props)[callbackName].apply(_this$props, [event].concat(rest));
      }
      /* eslint-enable react/destructuring-assignment */


      if (onKeyDown) {
        onKeyDown.apply(void 0, [event].concat(rest));
      }
    });

    return _this;
  }

  var _proto = Keyboard.prototype;

  _proto.componentDidMount = function componentDidMount() {
    /* eslint-disable-next-line react/prop-types */
    var target = this.props.target;

    if (target === 'document') {
      document.addEventListener('keydown', this.onKeyDown);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var target = this.props.target;

    if (target === 'document') {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  };

  _proto.render = function render() {
    /* eslint-disable-next-line react/prop-types */
    var _this$props2 = this.props,
        children = _this$props2.children,
        target = _this$props2.target;
    return target === 'document' ? children : (0, _react.cloneElement)(_react.Children.only(children), {
      onKeyDown: this.onKeyDown
    });
  };

  return Keyboard;
}(_react.Component);

var KeyboardDoc;

if (true) {
  KeyboardDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Keyboard/doc.js").doc(Keyboard); // eslint-disable-line global-require
}

var KeyboardWrapper = KeyboardDoc || Keyboard;
exports.Keyboard = KeyboardWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Keyboard/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Keyboard/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(Keyboard) {
  var DocumentedKeyboard = (0, _reactDesc.describe)(Keyboard).description('A handler of keyboard key presses.').usage("import { Keyboard } from 'grommet';\n<Keyboard onUp={() => {}} />");
  DocumentedKeyboard.propTypes = {
    target: _reactDesc.PropTypes.oneOf(['component', 'document']).description('Where to listen for the keyboard presses.').defaultValue('component'),
    onBackspace: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the backspace key.'),
    onComma: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the comma key.'),
    onDown: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the down key.'),
    onEnter: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the enter key.'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the esc key.'),
    onKeyDown: _reactDesc.PropTypes.func.description('Function that will be called when the user presses any key.'),
    onLeft: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the left key.'),
    onRight: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the right key.'),
    onShift: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the shift key.'),
    onSpace: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the space key.'),
    onTab: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the tab key.'),
    onUp: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the up key.')
  };
  return DocumentedKeyboard;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/Keyboard/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/Keyboard/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Keyboard = void 0;

var _Keyboard = __webpack_require__(/*! ./Keyboard */ "./node_modules/grommet/components/Keyboard/Keyboard.js");

exports.Keyboard = _Keyboard.Keyboard;

/***/ }),

/***/ "./node_modules/grommet/components/Layer/Layer.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Layer/Layer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Layer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _LayerContainer = __webpack_require__(/*! ./LayerContainer */ "./node_modules/grommet/components/Layer/LayerContainer.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Layer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Layer, _Component);

  function Layer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "originalFocusedElement", document.activeElement);

    _defineProperty(_assertThisInitialized(_this), "layerContainer", (0, _utils.getNewContainer)());

    return _this;
  }

  var _proto = Layer.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        // wait for the fixed positioning to come back to normal
        // see layer styling for reference
        setTimeout(function () {
          _this2.originalFocusedElement.focus();
        }, 0);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }

    document.body.removeChild(this.layerContainer);
  };

  _proto.render = function render() {
    return (0, _reactDom.createPortal)(_react.default.createElement(_LayerContainer.LayerContainer, this.props), this.layerContainer);
  };

  return Layer;
}(_react.Component);

_defineProperty(Layer, "defaultProps", {
  full: false,
  margin: 'none',
  modal: true,
  position: 'center',
  responsive: true
});

var LayerDoc;

if (true) {
  LayerDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Layer/doc.js").doc(Layer); // eslint-disable-line global-require
}

var LayerWrapper = LayerDoc || Layer;
exports.Layer = LayerWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Layer/LayerContainer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet/components/Layer/LayerContainer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LayerContainer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./node_modules/grommet/contexts/index.js");

var _FocusedContainer = __webpack_require__(/*! ../FocusedContainer */ "./node_modules/grommet/components/FocusedContainer.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledLayer = __webpack_require__(/*! ./StyledLayer */ "./node_modules/grommet/components/Layer/StyledLayer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HiddenAnchor = _styledComponents.default.a.withConfig({
  displayName: "LayerContainer__HiddenAnchor",
  componentId: "sc-1srj14c-0"
})(["width:0;height:0;overflow:hidden;position:absolute;"]);

var LayerContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(LayerContainer, _Component);

  function LayerContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "anchorRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "containerRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "layerRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "makeLayerVisible", function () {
      var node = _this.layerRef.current || _this.containerRef.current;

      if (node && node.scrollIntoView) {
        node.scrollIntoView();
      }
    });

    return _this;
  }

  var _proto = LayerContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var position = this.props.position;

    if (position !== 'hidden') {
      this.makeLayerVisible(); // once layer is open we set the focus in the hidden
      // anchor so that you can start tabbing inside the layer

      if (this.anchorRef.current) {
        this.anchorRef.current.focus();
      }
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var position = this.props.position;

    if (prevProps.position !== position && position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        modal = _this$props.modal,
        onClickOutside = _this$props.onClickOutside,
        onEsc = _this$props.onEsc,
        plain = _this$props.plain,
        position = _this$props.position,
        responsive = _this$props.responsive,
        propsTheme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "id", "modal", "onClickOutside", "onEsc", "plain", "position", "responsive", "theme"]);

    var theme = this.context || propsTheme;

    var content = _react.default.createElement(_StyledLayer.StyledContainer, _extends({
      id: id
    }, rest, {
      position: position,
      plain: plain,
      responsive: responsive,
      ref: this.containerRef
    }), _react.default.createElement(HiddenAnchor, {
      ref: this.anchorRef,
      tabIndex: "-1",
      "aria-hidden": "true"
    }), children);

    if (modal) {
      content = _react.default.createElement(_StyledLayer.StyledLayer, {
        id: id,
        plain: plain,
        position: position,
        responsive: responsive,
        tabIndex: "-1",
        ref: this.layerRef
      }, _react.default.createElement(_StyledLayer.StyledOverlay, {
        plain: plain,
        onMouseDown: onClickOutside,
        responsive: responsive
      }), content);
      /* eslint-enable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
    }

    if (onEsc) {
      content = _react.default.createElement(_Keyboard.Keyboard, {
        onEsc: onEsc
      }, content);
    }

    if (theme.layer.background) {
      var dark = (0, _utils.backgroundIsDark)(theme.layer.background, theme);

      if (dark !== theme.dark) {
        content = _react.default.createElement(_contexts.ThemeContext.Provider, {
          value: _extends({}, theme, {
            dark: dark
          })
        }, content);
      }
    }

    if (modal) {
      content = _react.default.createElement(_FocusedContainer.FocusedContainer, {
        hidden: position === 'hidden',
        restrictScroll: true
      }, content);
    }

    return content;
  };

  return LayerContainer;
}(_react.Component);

exports.LayerContainer = LayerContainer;

_defineProperty(LayerContainer, "contextType", _contexts.ThemeContext);

_defineProperty(LayerContainer, "defaultProps", {
  full: false,
  margin: 'none',
  modal: true,
  position: 'center'
});

Object.setPrototypeOf(LayerContainer.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Layer/StyledLayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Layer/StyledLayer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledContainer = exports.StyledOverlay = exports.StyledLayer = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var hiddenPositionStyle = (0, _styledComponents.css)(["left:-100%;right:100%;z-index:-1;position:fixed;"]);
var desktopLayerStyle = "\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  width: 100vw;\n  height: 100vh;\n";
var responsiveLayerStyle = "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n";

var StyledLayer = _styledComponents.default.div.withConfig({
  displayName: "StyledLayer",
  componentId: "rmtehz-0"
})(["", " background:unset;position:relative;z-index:", ";pointer-events:none;outline:none;", " ", ";"], _utils.baseStyle, function (props) {
  return props.theme.layer.zIndex;
}, function (props) {
  if (props.position === 'hidden') {
    return hiddenPositionStyle;
  }

  var styles = [desktopLayerStyle];

  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    styles.push((0, _utils.breakpointStyle)(breakpoint, responsiveLayerStyle));
  }

  return styles;
}, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});

exports.StyledLayer = StyledLayer;
StyledLayer.defaultProps = {};
Object.setPrototypeOf(StyledLayer.defaultProps, _defaultProps.defaultProps);

var StyledOverlay = _styledComponents.default.div.withConfig({
  displayName: "StyledLayer__StyledOverlay",
  componentId: "rmtehz-1"
})(["position:absolute;", " top:0px;left:0px;right:0px;bottom:0px;", " pointer-events:all;"], function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    return (0, _utils.breakpointStyle)(breakpoint, 'position: relative;');
  }

  return '';
}, function (props) {
  return !props.plain && props.theme.layer.overlay.background && (0, _utils.backgroundStyle)(props.theme.layer.overlay.background, props.theme);
});

exports.StyledOverlay = StyledOverlay;

var getMargin = function getMargin(margin, theme, position) {
  var axis = position.includes('top') || position.includes('bottom') ? 'vertical' : 'horizontal';
  var marginValue = margin[position] || margin[axis] || margin;
  var marginApplied = theme.global.edgeSize[marginValue] || marginValue;
  var marginInTheme = !!theme.global.edgeSize[marginValue];
  return !marginInTheme && typeof marginValue !== 'string' ? '0px' : marginApplied;
};

var MARGINS = function MARGINS(margin, theme, position) {
  if (position === void 0) {
    position = undefined;
  }

  if (position) {
    return getMargin(margin, theme, position);
  }

  return {
    bottom: getMargin(margin, theme, 'bottom'),
    'bottom-left': getMargin(margin, theme, 'bottom-left'),
    'bottom-right': getMargin(margin, theme, 'bottom-right'),
    left: getMargin(margin, theme, 'left'),
    right: getMargin(margin, theme, 'right'),
    top: getMargin(margin, theme, 'top'),
    'top-right': getMargin(margin, theme, 'top-right'),
    'top-left': getMargin(margin, theme, 'top-left')
  };
};

var KEYFRAMES = {
  center: {
    vertical: (0, _styledComponents.keyframes)(["0%{transform:translateX(-50%) scale(0.8);}100%{transform:translateX(-50%) scale(1);}"]),
    horizontal: (0, _styledComponents.keyframes)(["0%{transform:translateY(-50%) scale(0.8);}100%{transform:translateY(-50) scale(1);}"]),
    true: (0, _styledComponents.keyframes)(["0%{transform:scale(0.8);}100%{transform:scale(1);}"]),
    false: (0, _styledComponents.keyframes)(["0%{transform:translate(-50%,-50%) scale(0.8);}100%{transform:translate(-50%,-50%) scale(1);}"])
  },
  top: {
    vertical: (0, _styledComponents.keyframes)(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"]),
    horizontal: (0, _styledComponents.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),
    true: (0, _styledComponents.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),
    false: (0, _styledComponents.keyframes)(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"])
  },
  bottom: {
    vertical: (0, _styledComponents.keyframes)(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"]),
    horizontal: (0, _styledComponents.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),
    true: (0, _styledComponents.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),
    false: (0, _styledComponents.keyframes)(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"])
  },
  left: {
    vertical: (0, _styledComponents.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    horizontal: (0, _styledComponents.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"]),
    true: (0, _styledComponents.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    false: (0, _styledComponents.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"])
  },
  right: {
    vertical: (0, _styledComponents.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    horizontal: (0, _styledComponents.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"]),
    true: (0, _styledComponents.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    false: (0, _styledComponents.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"])
  }
};

var getAnimationStyle = function getAnimationStyle(animate, position, full) {
  if (animate === void 0) {
    animate = true;
  }

  var defaultAnimation = (0, _styledComponents.css)(["animation:", " 0.2s ease-in-out forwards"], KEYFRAMES[position][full]);
  return animate ? defaultAnimation : '';
}; // POSITIONS combines 'position', 'full', and 'margin' properties, since
// they are all interdependent.
// Basically, non-full axes combine 50% position with -50% translation.
// full axes pin to the window edges offset by any margin.
// The keyframe animations are included as they are done via translations
// as well so they must take into account the non-animated positioning.


var POSITIONS = {
  center: {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:50%;transform:translateX(-50%);", ""], margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'center', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";top:50%;transform:translateY(-50%);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'center', 'horizontal');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'center', 'true');
      });
    },
    false: function _false() {
      return (0, _styledComponents.css)(["top:50%;left:50%;transform:translate(-50%,-50%);", ""], function (props) {
        return getAnimationStyle(props.animate, 'center', 'false');
      });
    }
  },
  top: {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:50%;transform:translate(-50%,0%);", ""], margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'top', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";top:", ";transform:translateY(0);", ""], margin.left, margin.right, margin.top, function (props) {
        return getAnimationStyle(props.animate, 'top', 'horizontal');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateY(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["top:", ";left:50%;transform:translate(-50%,0);", ""], margin.top, function (props) {
        return getAnimationStyle(props.animate, 'top', 'false');
      });
    }
  },
  bottom: {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", " bottom:", ";left:50%;transform:translate(-50%,0);", ""], margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";bottom:", ";transform:translateY(0);", ""], margin.left, margin.top, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'horizontal');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateY(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["bottom:", ";left:50%;transform:translate(-50%,0);", ""], margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'false');
      });
    }
  },
  left: {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'left', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";top:50%;transform:translate(0,-50%);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'left', 'horizontal');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'left', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["left:", ";top:50%;transform:translate(0,-50%);", ""], margin.left, function (props) {
        return getAnimationStyle(props.animate, 'left', 'false');
      });
    }
  },
  right: {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'vertical');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";top:50%;transform:translate(0,-50%);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'horizontal');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["right:", ";top:50%;transform:translate(0,-50%);", ""], margin.right, function (props) {
        return getAnimationStyle(props.animate, 'right', 'false');
      });
    }
  },
  'top-right': {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";right:", ";transform:translateX(0);", ";"], margin.top, margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";top:0;transform:translateX(0);", ";"], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ";"], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["top:", ";right:", ";transform:translateY(0);", ";"], margin.top, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    }
  },
  'top-left': {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";top:0;transform:translateX(0);", ""], margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["top:", ";left:", ";transform:translateY(0);", ""], margin.top, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'top', 'true');
      });
    }
  },
  'bottom-right': {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";bottom:", ";transform:translateY(0);", ""], margin.left, margin.right, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["bottom:", ";right:", ";transform:translateY(0);", ""], margin.bottom, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    }
  },
  'bottom-left': {
    vertical: function vertical(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(margin) {
      return (0, _styledComponents.css)(["left:", ";right:", ";bottom:", ";transform:translateY(0);", ""], margin.left, margin.right, margin.bottom, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    true: function _true(margin) {
      return (0, _styledComponents.css)(["top:", ";bottom:", ";left:", ";right:", ";transform:translateX(0);", ""], margin.top, margin.bottom, margin.left, margin.right, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    },
    false: function _false(margin) {
      return (0, _styledComponents.css)(["bottom:", ";left:", ";transform:translateY(0);", ""], margin.bottom, margin.left, function (props) {
        return getAnimationStyle(props.animate, 'bottom', 'true');
      });
    }
  }
};
var desktopContainerStyle = (0, _styledComponents.css)(["position:", ";max-height:", ";max-width:", ";border-radius:", ";", ";"], function (props) {
  return props.modal ? 'absolute' : 'fixed';
}, function (props) {
  return "calc(100% - " + MARGINS(props.margin, props.theme, 'top') + " - " + MARGINS(props.margin, props.theme, 'bottom') + ")";
}, function (props) {
  return "calc(100% - " + MARGINS(props.margin, props.theme, 'left') + " - " + MARGINS(props.margin, props.theme, 'right') + ")";
}, function (props) {
  return props.plain ? 0 : props.theme.layer.border.radius;
}, function (props) {
  return props.position !== 'hidden' && POSITIONS[props.position][props.full](MARGINS(props.margin, props.theme)) || '';
});
var responsiveContainerStyle = (0, _styledComponents.css)(["position:relative;max-height:none;max-width:none;border-radius:0;top:0;bottom:0;left:0;right:0;transform:none;animation:none;height:100vh;width:100vw;"]);

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "StyledLayer__StyledContainer",
  componentId: "rmtehz-2"
})(["", " display:flex;flex-direction:column;min-height:", ";", " outline:none;pointer-events:all;z-index:", ";", " ", ";"], function (props) {
  return !props.modal ? _utils.baseStyle : '';
}, function (props) {
  return props.theme.global.size.xxsmall;
}, function (props) {
  return !props.plain && props.theme.layer.background && (0, _utils.backgroundStyle)(props.theme.layer.background, props.theme);
}, function (props) {
  return props.theme.layer.container.zIndex;
}, desktopContainerStyle, function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];

    if (breakpoint) {
      return (0, _utils.breakpointStyle)(breakpoint, responsiveContainerStyle);
    }
  }

  return '';
});

exports.StyledContainer = StyledContainer;
StyledContainer.defaultProps = {};
Object.setPrototypeOf(StyledContainer.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Layer/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Layer/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PAD_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large'];

var doc = function doc(Layer) {
  var DocumentedLayer = (0, _reactDesc.describe)(Layer).availableAt((0, _utils.getAvailableAtBadge)('Layer')).description("An overlay. Layer is typically modal and anchored to an edge, corner, or\n      center of the window. It is the caller's responsibility to provide a\n      control for the user to close the layer.").usage("import { Layer } from 'grommet';\n<Layer />").intrinsicElement('div');
  DocumentedLayer.propTypes = {
    animate: _reactDesc.PropTypes.bool.description('Animation transition of the Layer content when it opens.').defaultValue(true),
    full: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['vertical', 'horizontal'])]).description('Whether the width and/or height should fill the current viewport size.').defaultValue(false),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      horizontal: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      left: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      right: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      top: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      vertical: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description("The amount of margin around the Layer. An object can be specified to\ndistinguish horizontal margin, vertical margin, and margin on a\nparticular side of the layer"),
    modal: _reactDesc.PropTypes.bool.description('Whether there should be an overlay preventing interaction underneath the layer.').defaultValue(true),
    onClickOutside: _reactDesc.PropTypes.func.description('Function that will be invoked on modal layers when the user clicks outside the layer.'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the escape key inside the layer.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain Layer with no background color or border.').defaultValue(false),
    position: _reactDesc.PropTypes.oneOf(['bottom', 'bottom-left', 'bottom-right', 'center', 'hidden', 'left', 'right', 'top', 'top-left', 'top-right']).description('Position of the layer content.').defaultValue('center'),
    responsive: _reactDesc.PropTypes.bool.description('Whether the layer should take full width and height on mobile').defaultValue(true)
  };
  return DocumentedLayer;
};

exports.doc = doc;

var themeDoc = _extends({
  'global.size.xxsmall': {
    description: 'The minimal height of the Layer.',
    type: 'string',
    defaultValue: '48px'
  },
  'layer.background': {
    description: 'The background color of the Layer Container.',
    type: 'string',
    defaultValue: 'white'
  },
  'layer.container.zIndex': {
    description: 'The stack order of Layer Container.',
    type: 'number',
    defaultValue: '15'
  },
  'layer.extend': {
    description: 'Any additional style for Layer.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'layer.overlay.background': {
    description: 'The background of the Layer overlay.',
    type: 'string',
    defaultValue: 'rgba(0, 0, 0, 0.5)'
  },
  'layer.responsiveBreakpoint': {
    description: 'The actual breakpoint to trigger changes in the border, direction, gap, margin, pad, and round.',
    type: 'string',
    defaultValue: 'small'
  },
  'layer.zIndex': {
    description: 'The stack order of Layer.',
    type: 'number',
    defaultValue: '10'
  }
}, _utils.themeDocUtils.breakpointStyle('The possible breakpoints that could affect border, direction, gap, margin, pad, and round.'));

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Layer/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Layer/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Layer = void 0;

var _Layer = __webpack_require__(/*! ./Layer */ "./node_modules/grommet/components/Layer/Layer.js");

exports.Layer = _Layer.Layer;

/***/ }),

/***/ "./node_modules/grommet/components/Markdown/Markdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Markdown/Markdown.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Markdown = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _markdownToJsx = _interopRequireDefault(__webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _Heading = __webpack_require__(/*! ../Heading */ "./node_modules/grommet/components/Heading/index.js");

var _Paragraph = __webpack_require__(/*! ../Paragraph */ "./node_modules/grommet/components/Paragraph/index.js");

var _Anchor = __webpack_require__(/*! ../Anchor */ "./node_modules/grommet/components/Anchor/index.js");

var _Image = __webpack_require__(/*! ../Image */ "./node_modules/grommet/components/Image/index.js");

var _Table = __webpack_require__(/*! ../Table */ "./node_modules/grommet/components/Table/index.js");

var _TableBody = __webpack_require__(/*! ../TableBody */ "./node_modules/grommet/components/TableBody/index.js");

var _TableCell = __webpack_require__(/*! ../TableCell */ "./node_modules/grommet/components/TableCell/index.js");

var _TableFooter = __webpack_require__(/*! ../TableFooter */ "./node_modules/grommet/components/TableFooter/index.js");

var _TableHeader = __webpack_require__(/*! ../TableHeader */ "./node_modules/grommet/components/TableHeader/index.js");

var _TableRow = __webpack_require__(/*! ../TableRow */ "./node_modules/grommet/components/TableRow/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var GrommetMarkdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(GrommetMarkdown, _Component);

  function GrommetMarkdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GrommetMarkdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        components = _this$props.components,
        options = _this$props.options,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["components", "options", "theme"]);

    var heading = [1, 2, 3, 4].reduce(function (obj, level) {
      var result = _extends({}, obj);

      result["h" + level] = {
        component: _Heading.Heading,
        props: {
          level: level
        }
      };
      return result;
    }, {});
    var overrides = (0, _utils.deepMerge)({
      a: {
        component: _Anchor.Anchor
      },
      img: {
        component: _Image.Image
      },
      p: {
        component: _Paragraph.Paragraph
      },
      table: {
        component: _Table.Table
      },
      td: {
        component: _TableCell.TableCell
      },
      tbody: {
        component: _TableBody.TableBody
      },
      tfoot: {
        component: _TableFooter.TableFooter
      },
      th: {
        component: _TableCell.TableCell
      },
      thead: {
        component: _TableHeader.TableHeader
      },
      tr: {
        component: _TableRow.TableRow
      }
    }, heading, components, options && options.overrides);
    return _react.default.createElement(_markdownToJsx.default, _extends({
      options: _extends({}, options, {
        overrides: overrides
      })
    }, rest));
  };

  return GrommetMarkdown;
}(_react.Component);

var GrommetMarkdownDoc;

if (true) {
  GrommetMarkdownDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Markdown/doc.js").doc(GrommetMarkdown); // eslint-disable-line global-require
}

var GrommetMarkdownWrapper = GrommetMarkdownDoc || GrommetMarkdown;
exports.Markdown = GrommetMarkdownWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Markdown/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Markdown/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(Markdown) {
  var DocumentedMarkdown = (0, _reactDesc.describe)(Markdown).availableAt((0, _utils.getAvailableAtBadge)('Markdown')).description('Markdown formatting using Grommet components.').usage("import { Markdown } from 'grommet';\n      <Markdown>{content}</Markdown>").intrinsicElement('div');
  DocumentedMarkdown.propTypes = {
    components: _reactDesc.PropTypes.shape({}).description("Custom components and props to override html elements such as 'img'\n      or 'pre'. By default 'a', 'p', 'img', and table elements are overriden\n      with grommet components")
  };
  return DocumentedMarkdown;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/Markdown/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/Markdown/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Markdown = void 0;

var _Markdown = __webpack_require__(/*! ./Markdown */ "./node_modules/grommet/components/Markdown/Markdown.js");

exports.Markdown = _Markdown.Markdown;

/***/ }),

/***/ "./node_modules/grommet/components/MaskedInput/MaskedInput.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/MaskedInput/MaskedInput.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MaskedInput = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./node_modules/grommet/contexts/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Drop = __webpack_require__(/*! ../Drop */ "./node_modules/grommet/components/Drop/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledMaskedInput = __webpack_require__(/*! ./StyledMaskedInput */ "./node_modules/grommet/components/MaskedInput/StyledMaskedInput.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var parseValue = function parseValue(mask, value) {
  // break the value up into mask parts
  var valueParts = []; // { part, beginIndex, endIndex }

  var valueIndex = 0;
  var maskIndex = 0;

  while (value !== undefined && valueIndex < value.length && maskIndex < mask.length) {
    var item = mask[maskIndex];
    var found = void 0;

    if (item.fixed) {
      var length = item.fixed.length;
      valueParts.push({
        part: item.fixed,
        beginIndex: valueIndex,
        endIndex: valueIndex + length - 1
      });
      var part = value.slice(valueIndex, valueIndex + length);

      if (part === item.fixed) {
        valueIndex += length;
      }

      maskIndex += 1;
      found = true;
    } else if (item.options) {
      // reverse assuming larger is later
      found = item.options.slice(0).reverse() // eslint-disable-next-line no-loop-func
      .some(function (option) {
        var length = option.length;
        var part = value.slice(valueIndex, valueIndex + length);

        if (part === option) {
          valueParts.push({
            part: part,
            beginIndex: valueIndex,
            endIndex: valueIndex + length - 1
          });
          valueIndex += length;
          maskIndex += 1;
          return true;
        }

        return false;
      });
    }

    if (!found) {
      if (item.regexp) {
        var minLength = Array.isArray(item.length) && item.length[0] || item.length || 1;
        var maxLength = Array.isArray(item.length) && item.length[1] || item.length || value.length - valueIndex;
        var _length = maxLength;

        while (!found && _length >= minLength) {
          var _part = value.slice(valueIndex, valueIndex + _length);

          if (item.regexp.test(_part)) {
            valueParts.push({
              part: _part,
              beginIndex: valueIndex,
              endIndex: valueIndex + _length - 1
            });
            valueIndex += _length;
            maskIndex += 1;
            found = true;
          }

          _length -= 1;
        }

        if (!found) {
          valueIndex = value.length;
        }
      } else {
        var _length2 = Array.isArray(item.length) ? item.length[1] : item.length || value.length - valueIndex;

        var _part2 = value.slice(valueIndex, valueIndex + _length2);

        valueParts.push({
          part: _part2,
          beginIndex: valueIndex,
          endIndex: valueIndex + _length2 - 1
        });
        valueIndex += _length2;
        maskIndex += 1;
      }
    }
  }

  return valueParts;
};

var MaskedInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MaskedInput, _Component);

  function MaskedInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "inputRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "dropRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "locateCaret", function () {
      // leave time for caret to be placed after receiving focus
      clearTimeout(_this.caretTimeout);
      _this.caretTimeout = setTimeout(function () {
        var mask = _this.props.mask;
        var _this$state = _this.state,
            activeMaskIndex = _this$state.activeMaskIndex,
            valueParts = _this$state.valueParts;

        if (_this.inputRef.current) {
          // determine which mask element the caret is at
          var caretIndex = _this.inputRef.current.selectionStart;
          var maskIndex;
          valueParts.some(function (part, index) {
            if (part.beginIndex <= caretIndex && part.endIndex >= caretIndex) {
              maskIndex = index;
              return true;
            }

            return false;
          });

          if (maskIndex === undefined && valueParts.length < mask.length) {
            maskIndex = valueParts.length; // first unused one
          }

          if (maskIndex && mask[maskIndex].fixed) {
            maskIndex -= 1; // fixed mask parts are never "active"
          }

          if (activeMaskIndex !== maskIndex) {
            // eslint-disable-next-line react/no-did-update-set-state
            _this.setState({
              activeMaskIndex: maskIndex,
              activeOptionIndex: -1
            });
          }
        }
      }, 10); // 10ms empirically chosen
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var onFocus = _this.props.onFocus;

      _this.locateCaret();

      _this.setState({
        focused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      // delay so we don't remove the drop before Button events can be processed
      var onBlur = _this.props.onBlur;
      clearTimeout(_this.blurTimeout);
      _this.blurTimeout = setTimeout(function () {
        if (!_this.dropRef.current || !_this.dropRef.current.contains || !_this.dropRef.current.contains(document.activeElement)) {
          _this.setState({
            activeMaskIndex: undefined,
            focused: false
          });
        }
      }, 10); // 10ms empirically chosen

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          mask = _this$props.mask;
      var value = event.target.value; // Align with the mask.

      var valueParts = parseValue(mask, value);
      var nextValue = valueParts.map(function (part) {
        return part.part;
      }).join('');

      if (onChange) {
        onChange({
          target: _extends({}, event.target, {
            value: nextValue
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onOption", function (option) {
      return function () {
        var _this$props2 = _this.props,
            onChange = _this$props2.onChange,
            mask = _this$props2.mask;
        var _this$state2 = _this.state,
            activeMaskIndex = _this$state2.activeMaskIndex,
            valueParts = _this$state2.valueParts;
        var nextValueParts = [].concat(valueParts);
        nextValueParts[activeMaskIndex] = {
          part: option
        }; // add any fixed parts that follow

        var index = activeMaskIndex + 1;

        while (index < mask.length && !nextValueParts[index] && mask[index].fixed) {
          nextValueParts[index] = {
            part: mask[index].fixed
          };
          index += 1;
        }

        var nextValue = nextValueParts.map(function (part) {
          return part.part;
        }).join(''); // restore focus to input

        _this.inputRef.current.focus();

        if (onChange) {
          onChange({
            target: {
              value: nextValue
            }
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onNextOption", function (event) {
      var mask = _this.props.mask;
      var _this$state3 = _this.state,
          activeMaskIndex = _this$state3.activeMaskIndex,
          activeOptionIndex = _this$state3.activeOptionIndex;
      var item = mask[activeMaskIndex];

      if (item && item.options) {
        event.preventDefault();
        var index = Math.min(activeOptionIndex + 1, item.options.length - 1);

        _this.setState({
          activeOptionIndex: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviousOption", function (event) {
      var mask = _this.props.mask;
      var _this$state4 = _this.state,
          activeMaskIndex = _this$state4.activeMaskIndex,
          activeOptionIndex = _this$state4.activeOptionIndex;

      if (activeMaskIndex >= 0 && mask[activeMaskIndex].options) {
        event.preventDefault();
        var index = Math.max(activeOptionIndex - 1, 0);

        _this.setState({
          activeOptionIndex: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectOption", function (event) {
      var mask = _this.props.mask;
      var _this$state5 = _this.state,
          activeMaskIndex = _this$state5.activeMaskIndex,
          activeOptionIndex = _this$state5.activeOptionIndex;

      if (activeMaskIndex >= 0 && activeOptionIndex >= 0) {
        event.preventDefault();
        var option = mask[activeMaskIndex].options[activeOptionIndex];

        _this.onOption(option)();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (event) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      _this.inputRef.current.blur();
    });

    _defineProperty(_assertThisInitialized(_this), "renderPlaceholder", function () {
      var mask = _this.props.mask;
      return mask.map(function (item) {
        return item.placeholder || item.fixed;
      }).join('');
    });

    return _this;
  }

  MaskedInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var mask = nextProps.mask,
        value = nextProps.value;
    var priorMask = prevState.priorMask,
        priorValue = prevState.priorValue;

    if (priorMask !== mask || priorValue !== value) {
      var valueParts = parseValue(mask, value);
      return {
        priorMask: mask,
        priorValue: value,
        valueParts: valueParts
      };
    }

    return null;
  };

  var _proto = MaskedInput.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var focused = this.state.focused;

    if (focused) {
      this.locateCaret();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.caretTimeout);
    clearTimeout(this.blurTimeout);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        defaultValue = _this$props3.defaultValue,
        forwardRef = _this$props3.forwardRef,
        id = _this$props3.id,
        placeholder = _this$props3.placeholder,
        plain = _this$props3.plain,
        mask = _this$props3.mask,
        value = _this$props3.value,
        onChange = _this$props3.onChange,
        onKeyDown = _this$props3.onKeyDown,
        propsTheme = _this$props3.theme,
        rest = _objectWithoutPropertiesLoose(_this$props3, ["defaultValue", "forwardRef", "id", "placeholder", "plain", "mask", "value", "onChange", "onKeyDown", "theme"]);

    var theme = this.context || propsTheme;
    var _this$state6 = this.state,
        activeMaskIndex = _this$state6.activeMaskIndex,
        activeOptionIndex = _this$state6.activeOptionIndex;
    return _react.default.createElement(_StyledMaskedInput.StyledMaskedInputContainer, {
      plain: plain
    }, _react.default.createElement(_Keyboard.Keyboard, {
      onEsc: this.onEsc,
      onTab: this.onTab,
      onLeft: this.locateCaret,
      onRight: this.locateCaret,
      onUp: this.onPreviousOption,
      onDown: this.onNextOption,
      onEnter: this.onSelectOption,
      onKeyDown: onKeyDown
    }, _react.default.createElement(_StyledMaskedInput.StyledMaskedInput, _extends({
      id: id,
      ref: function ref(node) {
        _this2.inputRef.current = node;

        if (forwardRef) {
          if (typeof forwardRef === 'object') {
            forwardRef.current = node;
          } else {
            forwardRef(node);
          }
        }
      },
      autoComplete: "off",
      plain: plain,
      placeholder: placeholder || this.renderPlaceholder()
    }, rest, {
      defaultValue: defaultValue,
      value: value,
      theme: theme,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }))), activeMaskIndex >= 0 && mask[activeMaskIndex].options && _react.default.createElement(_Drop.Drop, {
      id: id ? "masked-input-drop__" + id : undefined,
      align: {
        top: 'bottom',
        left: 'left'
      },
      responsive: false,
      target: this.inputRef.current
    }, _react.default.createElement(_Box.Box, {
      ref: this.dropRef
    }, mask[activeMaskIndex].options.map(function (option, index) {
      return _react.default.createElement(_Box.Box, {
        key: option,
        flex: false
      }, _react.default.createElement(_Button.Button, {
        tabIndex: "-1",
        onClick: _this2.onOption(option),
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            activeOptionIndex: index
          });
        },
        onFocus: function onFocus() {}
      }, _react.default.createElement(_Box.Box, {
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        background: activeOptionIndex === index ? 'active' : undefined
      }, option)));
    }))));
  };

  return MaskedInput;
}(_react.Component);

_defineProperty(MaskedInput, "contextType", _contexts.ThemeContext);

_defineProperty(MaskedInput, "defaultProps", {
  mask: []
});

Object.setPrototypeOf(MaskedInput.defaultProps, _defaultProps.defaultProps);
var MaskedInputDoc;

if (true) {
  MaskedInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/MaskedInput/doc.js").doc(MaskedInput); // eslint-disable-line global-require
}

var MaskedInputWrapper = (0, _recompose.compose)((0, _hocs.withFocus)({
  focusWithMouse: true
}), _hocs.withForwardRef)(MaskedInputDoc || MaskedInput);
exports.MaskedInput = MaskedInputWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/MaskedInput/StyledMaskedInput.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet/components/MaskedInput/StyledMaskedInput.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledMaskedInputContainer = exports.StyledMaskedInput = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle = (0, _styledComponents.css)(["border:none;"]);

var StyledMaskedInput = _styledComponents.default.input.withConfig({
  displayName: "StyledMaskedInput",
  componentId: "sc-99vkfa-0"
})(["", " width:100%;", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", ";"], _utils.inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, _utils.placeholderStyle, function (props) {
  return props.focus && !props.plain && _utils.focusStyle;
}, function (props) {
  return props.theme.MaskedInput && props.theme.MaskedInput.extend;
});

exports.StyledMaskedInput = StyledMaskedInput;

var StyledMaskedInputContainer = _styledComponents.default.div.withConfig({
  displayName: "StyledMaskedInput__StyledMaskedInputContainer",
  componentId: "sc-99vkfa-1"
})(["position:relative;width:100%;"]);

exports.StyledMaskedInputContainer = StyledMaskedInputContainer;

/***/ }),

/***/ "./node_modules/grommet/components/MaskedInput/doc.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/MaskedInput/doc.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(MaskedInput) {
  var DocumentedMaskedInput = (0, _reactDesc.describe)(MaskedInput).availableAt((0, _utils.getAvailableAtBadge)('MaskedInput')).description('An input field with formalized syntax.').usage("import { MaskedInput } from 'grommet';\n<MaskedInput id='item' name='item' />").intrinsicElement('input');
  DocumentedMaskedInput.propTypes = {
    id: _reactDesc.PropTypes.string.description('The id attribute of the input.'),
    name: _reactDesc.PropTypes.string.description('The name attribute of the input.'),
    onChange: _reactDesc.PropTypes.func.description("Function that will be called when the user types or pastes text."),
    onBlur: _reactDesc.PropTypes.func.description("Function that will be called when the user leaves the field."),
    mask: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      length: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)]),
      fixed: _reactDesc.PropTypes.string,
      options: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string),
      regexp: _reactDesc.PropTypes.shape({}) // RegExp

    })).description("Describes the structure of the mask. If a regexp is provided, it should\n      allow both the final full string element as well as partial strings\n      as the user types characters one by one."),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the text.'),
    value: _reactDesc.PropTypes.string.description("What text to put in the input. The caller should ensure that it\n      is initially valid with respect to the mask.")
  };
  return DocumentedMaskedInput;
};

exports.doc = doc;

var themeDoc = _extends({
  'maskedInput.extend': {
    description: 'Any additional style for MaskedInput.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'text.medium': {
    description: 'The size of the text for MaskedInput.',
    type: 'string',
    defaultValue: '18px'
  }
}, _utils.themeDocUtils.focusStyle, _utils.themeDocUtils.placeholderStyle, _utils.themeDocUtils.inputStyle);

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/MaskedInput/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/MaskedInput/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MaskedInput = void 0;

var _MaskedInput = __webpack_require__(/*! ./MaskedInput */ "./node_modules/grommet/components/MaskedInput/MaskedInput.js");

exports.MaskedInput = _MaskedInput.MaskedInput;

/***/ }),

/***/ "./node_modules/grommet/components/Menu/Menu.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Menu/Menu.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Menu = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _DropButton = __webpack_require__(/*! ../DropButton */ "./node_modules/grommet/components/DropButton/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ContainerBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "Menu__ContainerBox",
  componentId: "sc-17fcys9-0"
})(["max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";"], function (props) {
  return props.theme.menu.extend;
});

var Menu =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Menu, _Component);

  function Menu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeItemIndex: -1,
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "buttonRefs", {});

    _defineProperty(_assertThisInitialized(_this), "onDropClose", function () {
      _this.setState({
        activeItemIndex: -1,
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectMenuItem", function (event) {
      var activeItemIndex = _this.state.activeItemIndex;

      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();

        _this.buttonRefs[activeItemIndex].click();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextMenuItem", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          activeItemIndex = _this$state.activeItemIndex,
          open = _this$state.open;

      if (!open) {
        _this.setState({
          open: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;
        var index = Math.min(activeItemIndex + 1, items.length - 1);

        _this.setState({
          activeItemIndex: index
        }); // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));

      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviousMenuItem", function (event) {
      event.preventDefault();
      var _this$state2 = _this.state,
          activeItemIndex = _this$state2.activeItemIndex,
          open = _this$state2.open;

      if (!open) {
        _this.setState({
          open: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;
        var index = activeItemIndex === -1 ? items.length - 1 : Math.max(activeItemIndex - 1, 0);

        _this.setState({
          activeItemIndex: index
        }); // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));

      }
    });

    return _this;
  }

  var _proto = Menu.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        disabled = _this$props.disabled,
        dropAlign = _this$props.dropAlign,
        dropBackground = _this$props.dropBackground,
        dropProps = _this$props.dropProps,
        dropTarget = _this$props.dropTarget,
        forwardRef = _this$props.forwardRef,
        justifyContent = _this$props.justifyContent,
        icon = _this$props.icon,
        items = _this$props.items,
        label = _this$props.label,
        messages = _this$props.messages,
        onKeyDown = _this$props.onKeyDown,
        plain = _this$props.plain,
        size = _this$props.size,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "disabled", "dropAlign", "dropBackground", "dropProps", "dropTarget", "forwardRef", "justifyContent", "icon", "items", "label", "messages", "onKeyDown", "plain", "size", "theme"]);

    var _this$state3 = this.state,
        activeItemIndex = _this$state3.activeItemIndex,
        open = _this$state3.open;
    var MenuIcon = theme.menu.icons.down;
    var iconColor = (0, _utils.normalizeColor)('control', theme);

    var content = children || _react.default.createElement(_Box.Box, {
      direction: "row",
      justify: justifyContent,
      align: "center",
      pad: "small",
      gap: label && icon !== false ? 'small' : undefined
    }, _react.default.createElement(_Text.Text, {
      size: size
    }, label), icon !== false ? icon !== true && icon || _react.default.createElement(MenuIcon, {
      color: iconColor,
      size: size
    }) : null);

    var controlMirror = _react.default.createElement(_Box.Box, {
      flex: false
    }, _react.default.createElement(_Button.Button, {
      a11yTitle: messages.closeMenu || 'Close Menu',
      plain: plain,
      onClick: this.onDropClose
    }, typeof content === 'function' ? function (props) {
      return content(_extends({}, props, {
        drop: true
      }));
    } : content));

    var align = dropProps.align || dropAlign;
    return _react.default.createElement(_Keyboard.Keyboard, {
      onEnter: this.onSelectMenuItem,
      onSpace: this.onSelectMenuItem,
      onDown: this.onNextMenuItem,
      onUp: this.onPreviousMenuItem,
      onEsc: this.onDropClose,
      onTab: this.onDropClose,
      onKeyDown: onKeyDown
    }, _react.default.createElement(_DropButton.DropButton, _extends({
      ref: forwardRef
    }, rest, {
      a11yTitle: messages.openMenu || 'Open Menu',
      disabled: disabled,
      dropAlign: align,
      dropTarget: dropTarget,
      plain: plain,
      open: open,
      onOpen: function onOpen() {
        return _this2.setState({
          open: true
        });
      },
      onClose: function onClose() {
        return _this2.setState({
          open: false
        });
      },
      dropContent: _react.default.createElement(ContainerBox, {
        background: dropBackground || theme.menu.background
      }, align.top === 'top' ? controlMirror : undefined, _react.default.createElement(_Box.Box, {
        overflow: "auto"
      }, items.map(function (item, index) {
        return (// eslint-disable-next-line react/no-array-index-key
          _react.default.createElement(_Box.Box, {
            key: index,
            flex: false
          }, _react.default.createElement(_Button.Button, {
            ref: function ref(_ref) {
              _this2.buttonRefs[index] = _ref;
            },
            active: activeItemIndex === index,
            hoverIndicator: "background",
            disabled: item.disabled,
            onClick: function onClick() {
              item.onClick.apply(item, arguments);

              if (item.close !== false) {
                _this2.onDropClose();
              }
            },
            href: item.href
          }, _react.default.createElement(_Box.Box, {
            align: "start",
            pad: "small",
            direction: "row"
          }, item.icon, item.label)))
        );
      })), align.bottom === 'bottom' ? controlMirror : undefined)
    }), content));
  };

  return Menu;
}(_react.Component);

_defineProperty(Menu, "defaultProps", {
  dropAlign: {
    top: 'top',
    left: 'left'
  },
  dropProps: {},
  items: [],
  messages: {
    openMenu: 'Open Menu',
    closeMenu: 'Close Menu'
  },
  justifyContent: 'start'
});

Object.setPrototypeOf(Menu.defaultProps, _defaultProps.defaultProps);
var MenuDoc;

if (true) {
  MenuDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Menu/doc.js").doc(Menu); // eslint-disable-line global-require
}

var MenuWrapper = (0, _recompose.compose)(_styledComponents.withTheme, _hocs.withForwardRef)(MenuDoc || Menu);
exports.Menu = MenuWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Menu/doc.js":
/*!*****************************************************!*\
  !*** ./node_modules/grommet/components/Menu/doc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VERTICAL_ALIGN_OPTIONS = ['top', 'bottom'];
var HORIZONTAL_ALIGN_OPTIONS = ['right', 'left'];

var doc = function doc(Menu) {
  var DocumentedMenu = (0, _reactDesc.describe)(Menu).availableAt((0, _utils.getAvailableAtBadge)('Menu')).description("A control that opens a Drop containing plain Buttons.").details("The labels and behavior of the contained Buttons are described\n      via the `items` property.\n      You can provide a single function child that will be called with\n      'hover', 'focus', and 'drop' keys. This allows you to customize\n      the rendering of the Menu button in those cases.").usage("import { Menu } from 'grommet';\n<Menu />").intrinsicElement('button');
  DocumentedMenu.propTypes = _extends({}, _utils.genericProps, {
    disabled: _reactDesc.PropTypes.bool.description('Whether the menu should be disabled.').defaultValue(false),
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      bottom: _reactDesc.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      left: _reactDesc.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
      right: _reactDesc.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS)
    }).description("Where to place the drop down. The keys correspond to a side of the drop down.\nThe values correspond to a side of the control. For instance,\n{left: 'left', top: 'bottom'} would align the left edges and the top of\nthe drop down to the bottom of the control. At most one of left or right and\none of top or bottom should be specified.").defaultValue({
      top: 'top',
      left: 'left'
    }),
    dropBackground: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
    })]).description('Background color when drop is active'),
    dropTarget: _reactDesc.PropTypes.object.description("Target where the drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the Menu itself by default."),
    dropProps: _reactDesc.PropTypes.object.description('Any valid Drop prop.'),
    justifyContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents along the row axis.').defaultValue('start'),
    icon: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.node]).description('Indicates the icon shown as a control to open it.'),
    items: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.object).description("Menu items to be placed inside the drop down.\nThe object values can be any Button prop, for example: label and onClick.").isRequired,
    label: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Indicates the label shown as a control to open it.'),
    messages: _reactDesc.PropTypes.shape({
      closeMenu: _reactDesc.PropTypes.string,
      openMenu: _reactDesc.PropTypes.string
    }).description('Custom messages. Used for accessibility by screen readers.').defaultValue({
      openMenu: 'Open Menu',
      closeMenu: 'Close Menu'
    }),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the menu.').defaultValue('medium')
  });
  return DocumentedMenu;
};

exports.doc = doc;
var themeDoc = {
  'global.colors.control': {
    description: 'The color to use for the icon.',
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined
  },
  'menu.background': {
    description: 'The color for the background of the menu Drop when it is open.',
    type: 'string',
    defaultValue: undefined
  },
  'menu.extend': {
    description: 'Any additional style for the Menu.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'menu.icons.down': {
    description: 'The icon to show to the right of the label.',
    type: 'React.Element',
    defaultValue: '<FormDown />'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Menu/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Menu/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Menu = void 0;

var _Menu = __webpack_require__(/*! ./Menu */ "./node_modules/grommet/components/Menu/Menu.js");

exports.Menu = _Menu.Menu;

/***/ }),

/***/ "./node_modules/grommet/components/Meter/Bar.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Meter/Bar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Bar = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledMeter = __webpack_require__(/*! ./StyledMeter */ "./node_modules/grommet/components/Meter/StyledMeter.js");

var _utils2 = __webpack_require__(/*! ./utils */ "./node_modules/grommet/components/Meter/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Bar = function Bar(props) {
  var background = props.background,
      max = props.max,
      round = props.round,
      size = props.size,
      theme = props.theme,
      thickness = props.thickness,
      values = props.values,
      rest = _objectWithoutPropertiesLoose(props, ["background", "max", "round", "size", "theme", "thickness", "values"]);

  var width = size === 'full' ? 288 : (0, _utils.parseMetricToNum)(theme.global.size[size]);
  var height = (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness] || thickness); // account for the round cap, if any

  var capOffset = round ? height / 2 : 0;
  var mid = height / 2;
  var someHighlight = (values || []).some(function (v) {
    return v.highlight;
  });
  var start = capOffset;
  var paths = (values || []).filter(function (v) {
    return v.value > 0;
  }).map(function (valueArg, index) {
    var color = valueArg.color,
        highlight = valueArg.highlight,
        label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        pathRest = _objectWithoutPropertiesLoose(valueArg, ["color", "highlight", "label", "onHover", "value"]);

    var key = "p-" + index;
    var delta = value * (width - 2 * capOffset) / max;
    var d = "M " + start + "," + mid + " L " + (start + delta) + "," + mid;
    var colorName = color || (index === values.length - 1 ? theme.meter.color : (0, _utils2.defaultColor)(index, theme));
    var hoverProps;

    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }

    start += delta;
    return _react.default.createElement("path", _extends({
      key: key,
      d: d,
      fill: "none"
    }, (0, _utils2.strokeProps)(someHighlight && !highlight ? background : colorName, theme), {
      strokeWidth: height,
      strokeLinecap: round ? 'round' : 'butt'
    }, hoverProps, pathRest));
  }).reverse(); // reverse so the caps looks right

  return _react.default.createElement(_StyledMeter.StyledMeter, _extends({
    viewBox: "0 0 " + width + " " + height,
    preserveAspectRatio: "none",
    width: size === 'full' ? '100%' : width,
    height: height,
    round: round ? {
      size: thickness
    } : undefined
  }, rest), _react.default.createElement("path", _extends({
    d: "M " + capOffset + "," + mid + " L " + (width - capOffset) + "," + mid,
    fill: "none"
  }, (0, _utils2.strokeProps)(background, theme), {
    strokeWidth: height,
    strokeLinecap: round ? 'round' : 'square'
  })), paths);
};

Bar.defaultProps = {
  background: 'light-1'
};
Object.setPrototypeOf(Bar.defaultProps, _defaultProps.defaultProps);
var BarWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Bar);
exports.Bar = BarWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Meter/Circle.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Meter/Circle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Circle = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledMeter = __webpack_require__(/*! ./StyledMeter */ "./node_modules/grommet/components/Meter/StyledMeter.js");

var _utils2 = __webpack_require__(/*! ./utils */ "./node_modules/grommet/components/Meter/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Circle = function Circle(props) {
  var background = props.background,
      max = props.max,
      round = props.round,
      size = props.size,
      theme = props.theme,
      thickness = props.thickness,
      values = props.values,
      rest = _objectWithoutPropertiesLoose(props, ["background", "max", "round", "size", "theme", "thickness", "values"]);

  var width = size === 'full' ? 288 : (0, _utils.parseMetricToNum)(theme.global.size[size]);
  var height = (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness] || thickness);
  var mid = width / 2;
  var radius = width / 2 - height / 2;
  var anglePer = 360 / max;
  var someHighlight = (values || []).some(function (v) {
    return v.highlight;
  });
  var startValue = 0;
  var startAngle = 0;
  var paths = [];
  var pathCaps = [];
  (values || []).filter(function (v) {
    return v.value > 0;
  }).forEach(function (valueArg, index) {
    var color = valueArg.color,
        highlight = valueArg.highlight,
        label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        pathRest = _objectWithoutPropertiesLoose(valueArg, ["color", "highlight", "label", "onHover", "value"]);

    var key = "p-" + index;
    var colorName = color || (index === values.length - 1 ? theme.meter.color : (0, _utils2.defaultColor)(index, theme));
    var endAngle;

    if (startValue + value >= max) {
      endAngle = 360;
    } else {
      endAngle = Math.min(360, (0, _utils.translateEndAngle)(startAngle, anglePer, value));
    }

    var hoverProps;

    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }

    var stroke = (0, _utils2.strokeProps)(someHighlight && !highlight ? background : colorName, theme);

    if (round) {
      var d1 = (0, _utils.arcCommands)(width / 2, width / 2, radius, startAngle, endAngle);
      paths.unshift(_react.default.createElement("path", _extends({
        key: key,
        d: d1,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "round"
      }, hoverProps, pathRest))); // To handle situations where the last values are small, redraw
      // a dot at the end. Give just a bit of angle to avoid anti-aliasing
      // leakage around the edge.

      var d2 = (0, _utils.arcCommands)(width / 2, width / 2, radius, endAngle - 0.5, endAngle);

      var pathCap = _react.default.createElement("path", _extends({
        key: key + "-",
        d: d2,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "round"
      }, hoverProps, pathRest)); // If we are on a large enough path to not need re-drawing previous ones,
      // clear the pathCaps we've collected already.


      if (endAngle - startAngle > 2 * anglePer) {
        pathCaps = [];
      }

      pathCaps.unshift(pathCap);
    } else {
      var d = (0, _utils.arcCommands)(width / 2, width / 2, radius, startAngle, endAngle);
      paths.push(_react.default.createElement("path", _extends({
        key: key,
        d: d,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "butt"
      }, hoverProps, pathRest)));
    }

    startValue += value;
    startAngle = endAngle;
  });
  return _react.default.createElement(_StyledMeter.StyledMeter, _extends({
    viewBox: "0 0 " + width + " " + width,
    width: size === 'full' ? '100%' : width,
    height: size === 'full' ? '100%' : width
  }, rest), _react.default.createElement("circle", _extends({
    cx: mid,
    cy: mid,
    r: radius
  }, (0, _utils2.strokeProps)(background, theme), {
    strokeWidth: height,
    strokeLinecap: round ? 'round' : 'square',
    fill: "none"
  })), paths, pathCaps);
};

Circle.defaultProps = {};
Object.setPrototypeOf(Circle.defaultProps, _defaultProps.defaultProps);
var CircleWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Circle);
exports.Circle = CircleWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Meter/Meter.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Meter/Meter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Meter = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Bar = __webpack_require__(/*! ./Bar */ "./node_modules/grommet/components/Meter/Bar.js");

var _Circle = __webpack_require__(/*! ./Circle */ "./node_modules/grommet/components/Meter/Circle.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deriveMax = function deriveMax(values) {
  var max = 100;

  if (values && values.length > 1) {
    max = 0;
    values.forEach(function (v) {
      max += v.value;
    });
  }

  return max;
};

var Meter =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Meter, _Component);

  function Meter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  Meter.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var max = prevState.max;
    var nextMax = deriveMax(nextProps.values);

    if (!max || nextMax !== max) {
      return {
        max: nextMax
      };
    }

    return null;
  };

  var _proto = Meter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        rest = _objectWithoutPropertiesLoose(_this$props, ["type"]);

    var max = this.state.max;
    var content;

    if (type === 'bar') {
      content = _react.default.createElement(_Bar.Bar, _extends({
        max: max
      }, rest));
    } else if (type === 'circle') {
      content = _react.default.createElement(_Circle.Circle, _extends({
        max: max
      }, rest));
    }

    return content;
  };

  return Meter;
}(_react.Component);

_defineProperty(Meter, "defaultProps", {
  background: {
    color: 'light-2',
    opacity: 'medium'
  },
  size: 'medium',
  thickness: 'medium',
  type: 'bar'
});

var MeterDoc;

if (true) {
  MeterDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Meter/doc.js").doc(Meter); // eslint-disable-line global-require
}

var MeterWrapper = MeterDoc || Meter;
exports.Meter = MeterWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Meter/StyledMeter.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Meter/StyledMeter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledMeter = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var roundStyle = (0, _styledComponents.css)(["border-radius:", ";"], function (props) {
  return props.theme.global.edgeSize[props.round.size];
}); // overflow: hidden is needed for ie11

var StyledMeter = _styledComponents.default.svg.withConfig({
  displayName: "StyledMeter",
  componentId: "nsxarx-0"
})(["max-width:100%;overflow:hidden;", " ", " path{transition:stroke 0.3s,stroke-width 0.3s;}", ";"], _utils.genericStyles, function (props) {
  return props.round && roundStyle;
}, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});

exports.StyledMeter = StyledMeter;
StyledMeter.defaultProps = {};
Object.setPrototypeOf(StyledMeter.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Meter/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Meter/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Meter) {
  var DocumentedMeter = (0, _reactDesc.describe)(Meter).availableAt((0, _utils.getAvailableAtBadge)('Meter')).description('A graphical meter.').usage("import { Meter } from 'grommet';\n<Meter />"); // We don't include svg due to a collision on the values property
  // .intrinsicElement('svg');

  DocumentedMeter.propTypes = _extends({}, _utils.genericProps, {
    background: _utils.backgroundPropType.defaultValue({
      color: 'light-2',
      opacity: 'medium'
    }),
    round: _reactDesc.PropTypes.bool.description('Whether to round the line ends').defaultValue(false),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.string]).description('The size of the Meter.').defaultValue('medium'),
    thickness: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the Meter.').defaultValue('medium'),
    type: _reactDesc.PropTypes.oneOf(['bar', 'circle']).description('The visual type of meter.').defaultValue('bar'),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      highlight: _reactDesc.PropTypes.bool,
      label: _reactDesc.PropTypes.string.isRequired,
      // for accessibility
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func,
      value: _reactDesc.PropTypes.number.isRequired
    })).description("Array of value objects describing the data.\n      'value' is the actual numeric value.\n      'label' is a text string describing it.\n      'color' indicates the color name to use. If not specified a default one\n      will be chosen.\n      'onClick' will be called when the user clicks on it.\n      Set 'highlight' to call attention to it.\n      'onHover' will be called with a boolean argument indicating when the\n      user hovers onto or away from it.")
  });
  return DocumentedMeter;
};

exports.doc = doc;
var themeDoc = {
  'global.edgeSize': {
    description: 'The border-radius of the styled Meter. thickness, height and width of the Bar Meter, height of the Circle Meter.',
    type: 'object',
    defaultValue: "{\n        none: '0px',\n        hair: '1px',\n        xxsmall: '3px',\n        xsmall: '6px',\n        small: '12px',\n        medium: '24px',\n        large: '48px',\n        xlarge: '96px',\n        responsiveBreakpoint: 'small',\n    }"
  },
  'global.opacity.medium': {
    description: 'The opacity value used on the Meter color.',
    type: 'number',
    defaultValue: '0.4'
  },
  'global.size': {
    description: 'The possible sizes for Circle Meter width.',
    type: 'object',
    defaultValue: "{\n      xxsmall: '48px',\n      xsmall: '96px',\n      small: '192px',\n      medium: '384px',\n      large: '768px',\n      xlarge: '1152px',\n      xxlarge: '1536px',\n      full: '100%',\n    }"
  },
  'meter.color': {
    description: 'The color used for the Meter.',
    type: 'string',
    defaultValue: 'accent-1'
  },
  'meter.extend': {
    description: 'Any additional style for Meter.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Meter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Meter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Meter = void 0;

var _Meter = __webpack_require__(/*! ./Meter */ "./node_modules/grommet/components/Meter/Meter.js");

exports.Meter = _Meter.Meter;

/***/ }),

/***/ "./node_modules/grommet/components/Meter/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Meter/utils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultColor = exports.strokeProps = void 0;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var strokeProps = function strokeProps(color, theme) {
  var result = {};

  if (color) {
    if (typeof color === 'object') {
      result.stroke = (0, _utils.normalizeColor)(color.color, theme);

      if (color.opacity) {
        result.strokeOpacity = "" + (color.opacity === true ? theme.global.opacity.medium : theme.global.opacity[color.opacity]);
      }
    } else {
      result.stroke = (0, _utils.normalizeColor)(color, theme);
    }
  }

  return result;
};

exports.strokeProps = strokeProps;
var neutralExp = /^neutral-\d+/;

var defaultColor = function defaultColor(index, theme) {
  var neutralColors = Object.keys(theme.global.colors).filter(function (k) {
    return neutralExp.test(k);
  });
  return neutralColors[index % neutralColors.length];
};

exports.defaultColor = defaultColor;

/***/ }),

/***/ "./node_modules/grommet/components/Paragraph/Paragraph.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/Paragraph/Paragraph.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Paragraph = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledParagraph = __webpack_require__(/*! ./StyledParagraph */ "./node_modules/grommet/components/Paragraph/StyledParagraph.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Paragraph = function Paragraph(_ref) {
  var color = _ref.color,
      rest = _objectWithoutPropertiesLoose(_ref, ["color"]);

  return _react.default.createElement(_StyledParagraph.StyledParagraph, _extends({
    colorProp: color
  }, rest));
};

var ParagraphDoc;

if (true) {
  ParagraphDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Paragraph/doc.js").doc(Paragraph); // eslint-disable-line global-require
}

var ParagraphWrapper = ParagraphDoc || Paragraph;
exports.Paragraph = ParagraphWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Paragraph/StyledParagraph.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet/components/Paragraph/StyledParagraph.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledParagraph = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var colorStyle = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return (0, _utils.normalizeColor)(props.colorProp, props.theme);
});

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.paragraph[size];
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";max-width:", ";"], data.size, data.height, data.maxWidth);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle = (0, _styledComponents.css)(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var StyledParagraph = _styledComponents.default.p.withConfig({
  displayName: "StyledParagraph",
  componentId: "tbetod-0"
})(["", " ", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.theme.paragraph && props.theme.paragraph.extend;
});

exports.StyledParagraph = StyledParagraph;
StyledParagraph.defaultProps = {};
Object.setPrototypeOf(StyledParagraph.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Paragraph/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Paragraph/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Paragraph) {
  var DocumentedParagraph = (0, _reactDesc.describe)(Paragraph).availableAt((0, _utils.getAvailableAtBadge)('Paragraph')).description('A paragraph of text.').usage("import { Paragraph } from 'grommet';\n<Paragraph />").intrinsicElement('p');
  DocumentedParagraph.propTypes = _extends({}, _utils.genericProps, {
    color: _utils.colorPropType.description('A color identifier to use for the text color.'),
    responsive: _reactDesc.PropTypes.bool.description("Whether margin should be scaled for mobile environments.").defaultValue(true),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description('The size of the Paragraph text.').defaultValue('medium'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the paragraph.').defaultValue('start')
  });
  return DocumentedParagraph;
};

exports.doc = doc;

var themeDoc = _extends({
  paragraph: {
    description: "The possible sizes of the paragraph in terms of its max-width, font-size and line-height.",
    type: 'object',
    defaultValue: "{\n      small: {\n        size: '14px',\n        height: '20px',\n        maxWidth: '336px',\n       },\n      medium: {\n        size: '18px',\n        height: '24px',\n        maxWidth: '432px',\n      },\n      large: {\n        size: '22px',\n        height: '28px',\n        maxWidth: '528px',\n      },\n      xlarge: {\n        size: '26px',\n        height: '32px',\n        maxWidth: '624px',\n      },\n      xxlarge: {\n        size: '34px',\n        height: '40px',\n        maxWidth: '816px',\n      },\n    }"
  },
  'paragraph.textAlign': {
    description: "How to align the text inside the Paragraph.",
    type: 'string',
    defaultValue: 'start'
  },
  'paragraph.extend': {
    description: 'Any additional style for the Paragraph.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
}, _utils.themeDocUtils.edgeStyle('The possible sizes for margin.'));

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Paragraph/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Paragraph/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Paragraph = void 0;

var _Paragraph = __webpack_require__(/*! ./Paragraph */ "./node_modules/grommet/components/Paragraph/Paragraph.js");

exports.Paragraph = _Paragraph.Paragraph;

/***/ }),

/***/ "./node_modules/grommet/components/RadioButton/RadioButton.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/RadioButton/RadioButton.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RadioButton = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledRadioButton = __webpack_require__(/*! ./StyledRadioButton */ "./node_modules/grommet/components/RadioButton/StyledRadioButton.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var RadioButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RadioButton, _Component);

  function RadioButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RadioButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        focus = _this$props.focus,
        forwardRef = _this$props.forwardRef,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        onChange = _this$props.onChange,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["checked", "disabled", "focus", "forwardRef", "id", "label", "name", "onChange", "theme"]);

    var normalizedLabel = typeof label === 'string' ? _react.default.createElement("span", null, label) : label;
    var Icon = theme.radioButton.icons.circle;
    var borderColor = (0, _utils.normalizeColor)(theme.radioButton.border.color, theme);

    if (checked) {
      borderColor = (0, _utils.normalizeColor)(theme.radioButton.color || 'control', theme);
    }

    return _react.default.createElement(_StyledRadioButton.StyledRadioButtonContainer, _extends({
      as: function as(props) {
        return _react.default.createElement(_Box.Box, _extends({
          as: "label"
        }, props));
      },
      direction: "row",
      align: "center"
    }, (0, _utils.removeUndefined)({
      htmlFor: id,
      disabled: disabled
    }), {
      onClick: function onClick(event) {
        // prevents clicking on the label trigging the event twice
        // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
        if (event.target.type !== 'radio') {
          event.stopPropagation();
        }
      }
    }), _react.default.createElement(_StyledRadioButton.StyledRadioButton, {
      as: _Box.Box,
      margin: {
        right: theme.radioButton.gap || 'small'
      }
    }, _react.default.createElement(_StyledRadioButton.StyledRadioButtonInput, _extends({}, rest, {
      ref: forwardRef,
      type: "radio"
    }, (0, _utils.removeUndefined)({
      id: id,
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }))), _react.default.createElement(_StyledRadioButton.StyledRadioButtonBox, {
      focus: focus,
      as: _Box.Box,
      align: "center",
      justify: "center",
      width: theme.radioButton.size,
      height: theme.radioButton.size,
      border: {
        size: theme.radioButton.border.width,
        color: borderColor
      },
      round: theme.radioButton.check.radius
    }, checked && (Icon ? _react.default.createElement(Icon, {
      as: _StyledRadioButton.StyledRadioButtonIcon
    }) : _react.default.createElement(_StyledRadioButton.StyledRadioButtonIcon, {
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, _react.default.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 6
    }))))), normalizedLabel);
  };

  return RadioButton;
}(_react.Component);

RadioButton.defaultProps = {};
Object.setPrototypeOf(RadioButton.defaultProps, _defaultProps.defaultProps);
var RadioButtonDoc;

if (true) {
  RadioButtonDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/RadioButton/doc.js").doc(RadioButton); // eslint-disable-line global-require
}

var RadioButtonWrapper = (0, _recompose.compose)(_styledComponents.withTheme, _hocs.withForwardRef)(RadioButtonDoc || RadioButton);
exports.RadioButton = RadioButtonWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/RadioButton/StyledRadioButton.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet/components/RadioButton/StyledRadioButton.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledRadioButton = exports.StyledRadioButtonBox = exports.StyledRadioButtonIcon = exports.StyledRadioButtonInput = exports.StyledRadioButtonContainer = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var disabledStyle = "\n  opacity: 0.5;\n  cursor: default;\n";

var StyledRadioButtonContainer = _styledComponents.default.label.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonContainer",
  componentId: "g1f6ld-0"
})(["user-select:none;", " ", ":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:", ";}", ";"], function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.radioButton.hover.border.color, props.theme);
}, function (props) {
  return props.theme.radioButton.extend;
});

exports.StyledRadioButtonContainer = StyledRadioButtonContainer;
StyledRadioButtonContainer.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonContainer.defaultProps, _defaultProps.defaultProps);

var StyledRadioButtonInput = _styledComponents.default.input.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonInput",
  componentId: "g1f6ld-1"
})(["opacity:0;-moz-appearance:none;width:0;height:0;margin:0;", ";"], function (props) {
  return !props.disabled && 'cursor: pointer;';
});

exports.StyledRadioButtonInput = StyledRadioButtonInput;
StyledRadioButtonInput.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonInput.defaultProps, _defaultProps.defaultProps);

var StyledRadioButtonIcon = _styledComponents.default.svg.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonIcon",
  componentId: "g1f6ld-2"
})(["box-sizing:border-box;width:", ";height:", ";fill:", ";", ";"], function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.radioButton.check.color || 'control', props.theme);
}, function (props) {
  return props.theme.radioButton.icon.extend;
});

exports.StyledRadioButtonIcon = StyledRadioButtonIcon;
StyledRadioButtonIcon.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonIcon.defaultProps, _defaultProps.defaultProps);

var StyledRadioButtonBox = _styledComponents.default.div.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonBox",
  componentId: "g1f6ld-3"
})(["", ";", ";"], function (props) {
  return props.focus && _utils.focusStyle;
}, function (props) {
  return props.theme.radioButton.check.extend;
});

exports.StyledRadioButtonBox = StyledRadioButtonBox;
StyledRadioButtonBox.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonBox.defaultProps, _defaultProps.defaultProps);

var StyledRadioButton = _styledComponents.default.div.withConfig({
  displayName: "StyledRadioButton",
  componentId: "g1f6ld-4"
})(["", ";"], function (props) {
  return props.theme.radioButton && props.theme.radioButton.extend;
});

exports.StyledRadioButton = StyledRadioButton;
StyledRadioButton.defaultProps = {};
Object.setPrototypeOf(StyledRadioButton.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/RadioButton/doc.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/RadioButton/doc.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(RadioButton) {
  var DocumentedRadioButton = (0, _reactDesc.describe)(RadioButton).availableAt((0, _utils.getAvailableAtBadge)('RadioButton')).description('A radio button control.').details("RadioButton should typically not be used directly.\n      Instead, use RadioButtonGroup.").usage("import { RadioButton } from 'grommet';\n<RadioButton />").intrinsicElement('input');
  DocumentedRadioButton.propTypes = {
    checked: _reactDesc.PropTypes.bool.description('Same as React <input checked={} />'),
    disabled: _reactDesc.PropTypes.bool.description("Same as React <input disabled={} />. Also adds a hidden input element\nwith the same name so form submissions work."),
    id: _reactDesc.PropTypes.string.description('The DOM id attribute value to use for the underlying <input/> element.'),
    label: _reactDesc.PropTypes.node.description('Label text to place next to the control.'),
    name: _reactDesc.PropTypes.string.description('The DOM name attribute value to use for the underlying <input/> element.').isRequired,
    onChange: _reactDesc.PropTypes.func.description("Function that will be called when the user clicks the radio button. It\n      will be passed a React event object. The current state can be accessed\n      via event.target.checked. Same as React <input onChange={} />.")
  };
  return DocumentedRadioButton;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/RadioButton/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/RadioButton/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RadioButton = void 0;

var _RadioButton = __webpack_require__(/*! ./RadioButton */ "./node_modules/grommet/components/RadioButton/RadioButton.js");

exports.RadioButton = _RadioButton.RadioButton;

/***/ }),

/***/ "./node_modules/grommet/components/RadioButtonGroup/RadioButtonGroup.js":
/*!******************************************************************************!*\
  !*** ./node_modules/grommet/components/RadioButtonGroup/RadioButtonGroup.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RadioButtonGroup = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _RadioButton = __webpack_require__(/*! ../RadioButton */ "./node_modules/grommet/components/RadioButton/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioButtonGroup =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RadioButtonGroup, _Component);

  function RadioButtonGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "optionRefs", []);

    _defineProperty(_assertThisInitialized(_this), "valueIndex", function () {
      var _this$state = _this.state,
          options = _this$state.options,
          value = _this$state.value;
      var result;
      options.some(function (option, index) {
        if (option.value === value) {
          result = index;
          return true;
        }

        return false;
      });
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "onNext", function () {
      var onChange = _this.props.onChange;
      var options = _this.state.options;

      var valueIndex = _this.valueIndex();

      if (valueIndex !== undefined && valueIndex < options.length - 1) {
        var nextIndex = valueIndex + 1;
        var nextValue = options[nextIndex].value;

        _this.setState({
          value: nextValue
        }, function () {
          _this.optionRefs[nextIndex].focus();
        });

        if (onChange) {
          onChange({
            target: {
              value: nextValue
            }
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevious", function () {
      var onChange = _this.props.onChange;
      var options = _this.state.options;

      var valueIndex = _this.valueIndex();

      if (valueIndex > 0) {
        var nextIndex = valueIndex - 1;
        var nextValue = options[nextIndex].value;

        _this.setState({
          value: nextValue
        }, function () {
          _this.optionRefs[nextIndex].focus();
        });

        if (onChange) {
          onChange({
            target: {
              value: nextValue
            }
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      // Delay just a wee bit so Chrome doesn't missing turning the button on.
      // Chrome behaves differently in that focus is given to radio buttons
      // when the user selects one, unlike Safari and Firefox.
      setTimeout(function () {
        var focus = _this.state.focus;

        if (!focus) {
          _this.setState({
            focus: true
          });
        }
      }, 1);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var focus = _this.state.focus;

      if (focus) {
        _this.setState({
          focus: false
        });
      }
    });

    return _this;
  }

  RadioButtonGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var options = nextProps.options,
        value = nextProps.value;
    return {
      options: options.map(function (o) {
        return typeof o === 'string' ? {
          id: o,
          label: o,
          value: o
        } : o;
      }),
      value: value
    };
  };

  var _proto = RadioButtonGroup.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        forwardRef = _this$props.forwardRef,
        name = _this$props.name,
        onChange = _this$props.onChange,
        rest = _objectWithoutPropertiesLoose(_this$props, ["forwardRef", "name", "onChange"]);

    var _this$state2 = this.state,
        focus = _this$state2.focus,
        options = _this$state2.options,
        selectedValue = _this$state2.value;
    return _react.default.createElement(_Keyboard.Keyboard, {
      target: "document",
      onUp: focus ? this.onPrevious : undefined,
      onDown: focus ? this.onNext : undefined,
      onLeft: focus ? this.onPrevious : undefined,
      onRight: focus ? this.onNext : undefined
    }, _react.default.createElement(_Box.Box, _extends({
      ref: forwardRef,
      gap: "small"
    }, rest), options.map(function (_ref, index) {
      var disabled = _ref.disabled,
          id = _ref.id,
          label = _ref.label,
          value = _ref.value;
      return _react.default.createElement(_RadioButton.RadioButton, {
        ref: function ref(_ref2) {
          _this2.optionRefs[index] = _ref2;
        },
        key: value,
        name: name,
        label: label,
        disabled: disabled,
        checked: value === selectedValue,
        focus: focus && (value === selectedValue || selectedValue === undefined && !index),
        id: id,
        value: value,
        onChange: onChange,
        onFocus: _this2.onFocus,
        onBlur: _this2.onBlur
      });
    })));
  };

  return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.defaultProps = {};
Object.setPrototypeOf(RadioButtonGroup.defaultProps, _defaultProps.defaultProps);
var RadioButtonGroupDoc;

if (true) {
  RadioButtonGroupDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/RadioButtonGroup/doc.js").doc(RadioButtonGroup); // eslint-disable-line global-require
}

var RadioButtonGroupWrapper = (0, _recompose.compose)(_hocs.withForwardRef)(RadioButtonGroupDoc || RadioButtonGroup);
exports.RadioButtonGroup = RadioButtonGroupWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/RadioButtonGroup/doc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet/components/RadioButtonGroup/doc.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(RadioButtonGroup) {
  var DocumentedRadioButtonGroup = (0, _reactDesc.describe)(RadioButtonGroup).availableAt((0, _utils.getAvailableAtBadge)('RadioButtonGroup')).description('A group of radio buttons.').usage("import { RadioButtonGroup } from 'grommet';\n<RadioButtonGroup />").intrinsicElement('div');
  DocumentedRadioButtonGroup.propTypes = {
    name: _reactDesc.PropTypes.string.description('The DOM name attribute value to use for the underlying <input/> elements.').isRequired,
    onChange: _reactDesc.PropTypes.func.description("Function that will be called when the user clicks on of the radio\n      buttons. It will be passed a React event object."),
    options: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string), _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      disabled: _reactDesc.PropTypes.bool,
      id: _reactDesc.PropTypes.string,
      label: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element]),
      value: _reactDesc.PropTypes.string.isRequired
    }))]).description("Options can be either a string or an object.").isRequired,
    value: _reactDesc.PropTypes.string.description("Currently selected option value.")
  };
  return DocumentedRadioButtonGroup;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/RadioButtonGroup/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet/components/RadioButtonGroup/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RadioButtonGroup = void 0;

var _RadioButtonGroup = __webpack_require__(/*! ./RadioButtonGroup */ "./node_modules/grommet/components/RadioButtonGroup/RadioButtonGroup.js");

exports.RadioButtonGroup = _RadioButtonGroup.RadioButtonGroup;

/***/ }),

/***/ "./node_modules/grommet/components/RangeInput/RangeInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet/components/RangeInput/RangeInput.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RangeInput = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledRangeInput = __webpack_require__(/*! ./StyledRangeInput */ "./node_modules/grommet/components/RangeInput/StyledRangeInput.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var RangeInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RangeInput, _Component);

  function RangeInput() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RangeInput.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        forwardRef = _this$props.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props, ["forwardRef"]);

    return _react.default.createElement(_StyledRangeInput.StyledRangeInput, _extends({}, rest, {
      ref: forwardRef,
      type: "range"
    }));
  };

  return RangeInput;
}(_react.Component);

var RangeInputDoc;

if (true) {
  RangeInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/RangeInput/doc.js").doc(RangeInput); // eslint-disable-line global-require
}

var RangeInputWrapper = (0, _recompose.compose)((0, _hocs.withFocus)(), _hocs.withForwardRef)(RangeInputDoc || RangeInput);
exports.RangeInput = RangeInputWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/RangeInput/StyledRangeInput.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet/components/RangeInput/StyledRangeInput.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledRangeInput = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var rangeTrackStyle = (0, _styledComponents.css)(["box-sizing:border-box;width:100%;height:", ";background:", ";", ""], function (props) {
  return props.theme.rangeInput.track.height;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme);
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.track && props.theme.rangeInput.track.extend;
});
var rangeThumbStyle = (0, _styledComponents.css)(["box-sizing:border-box;position:relative;border-radius:", ";height:", ";width:", ";overflow:visible;background:", ";-webkit-appearance:none;cursor:pointer;", ""], function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme);
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.thumb && props.theme.rangeInput.thumb.extend;
});
var firefoxMicrosoftThumbStyle = (0, _styledComponents.css)(["", " margin-top:0px;height:", ";width:", ";", ""], rangeThumbStyle, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.thumb && props.theme.rangeInput.thumb.extend;
});

var StyledRangeInput = _styledComponents.default.input.withConfig({
  displayName: "StyledRangeInput",
  componentId: "sc-15st9ck-0"
})(["box-sizing:border-box;position:relative;-webkit-appearance:none;border-color:transparent;height:", ";width:100%;padding:0px;cursor:pointer;background:transparent;&:focus{outline:none;}&::-moz-focus-inner{border:none;}&::-moz-focus-outer{border:none;}&::-webkit-slider-runnable-track{", "}&::-webkit-slider-thumb{margin-top:-", "px;", " ", "}&::-moz-range-track{", "}&::-moz-range-thumb{", "}&::-ms-thumb{", "}", " &::-ms-track{", " border-color:transparent;color:transparent;}&::-ms-fill-lower{background:", ";border-color:transparent;}&::-ms-fill-upper{background:", ";border-color:transparent;}", " ", ""], function (props) {
  return props.theme.global.spacing;
}, rangeTrackStyle, function (props) {
  return ((0, _utils.parseMetricToNum)(props.theme.global.spacing) - (0, _utils.parseMetricToNum)(props.theme.rangeInput.track.height || 0)) * 0.5;
}, rangeThumbStyle, function (props) {
  return !props.disabled && (0, _styledComponents.css)(["&:hover{box-shadow:0px 0px 0px 2px ", ";}"], (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, firefoxMicrosoftThumbStyle, firefoxMicrosoftThumbStyle, function (props) {
  return !props.disabled && (0, _styledComponents.css)(["&:hover::-moz-range-thumb{box-shadow:0px 0px 0px 2px ", ";}&:hover::-ms-thumb{box-shadow:0px 0px 0px 2px ", ";}"], (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme), (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme);
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme);
}, function (props) {
  return props.focus && _utils.focusStyle;
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.extend;
});

exports.StyledRangeInput = StyledRangeInput;
StyledRangeInput.defaultProps = {};
Object.setPrototypeOf(StyledRangeInput.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/RangeInput/doc.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/RangeInput/doc.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(RangeInput) {
  var DocumentedRangeInput = (0, _reactDesc.describe)(RangeInput).availableAt((0, _utils.getAvailableAtBadge)('RangeInput')).description('A slider control to input a value within a fixed range.').usage("import { RangeInput } from 'grommet';\n<RangeInput />").intrinsicElement('input');
  DocumentedRangeInput.propTypes = {
    id: _reactDesc.PropTypes.string.description('The id attribute of the range input.'),
    min: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.string]).description('The minimum value permitted.'),
    max: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.string]).description('The maximum value permitted.'),
    name: _reactDesc.PropTypes.string.description('The name attribute of the range input.'),
    onChange: _reactDesc.PropTypes.func.description("Function that will be called when the user changes the value. It will\n      be passed an event object. The new input value will be available\n      via 'event.target.value'."),
    step: _reactDesc.PropTypes.number.description('The step interval between values.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.string]).description('The current value.')
  };
  return DocumentedRangeInput;
};

exports.doc = doc;

var themeDoc = _extends({}, _utils.themeDocUtils.focusStyle, {
  'global.spacing': {
    description: 'The height, width and border-radius of the range thumb.',
    type: 'string',
    defaultValue: '24px'
  },
  'rangeInput.extend': {
    description: 'Any additional style for the RangeInput.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'rangeInput.thumb.color': {
    description: 'The color of the thumb.',
    type: 'string | { dark: undefined, light: undefined }',
    defaultValue: undefined
  },
  'rangeInput.thumb.extend': {
    description: 'Any additional style for the thumb.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'rangeInput.track.color': {
    description: 'The color of the track.',
    type: 'string',
    defaultValue: '{ dark: rgba(255, 255, 255, 0.33), light: rgba(0, 0, 0, 0.33) }'
  },
  'rangeInput.track.extend': {
    description: 'Any additional style for the track.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'rangeInput.track.height': {
    description: 'The height of the track.',
    type: 'string',
    defaultValue: '4px'
  }
});

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/RangeInput/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/RangeInput/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RangeInput = void 0;

var _RangeInput = __webpack_require__(/*! ./RangeInput */ "./node_modules/grommet/components/RangeInput/RangeInput.js");

exports.RangeInput = _RangeInput.RangeInput;

/***/ }),

/***/ "./node_modules/grommet/components/RangeSelector/EdgeControl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet/components/RangeSelector/EdgeControl.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EdgeControl = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DIRECTION_PROPS = {
  horizontal: {
    cursor: 'col-resize',
    fill: 'vertical'
  },
  vertical: {
    cursor: 'row-resize',
    fill: 'horizontal'
  }
};

var EdgeControl =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(EdgeControl, _Component);

  function EdgeControl() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  var _proto = EdgeControl.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        color = _this$props.color,
        direction = _this$props.direction,
        edge = _this$props.edge,
        forwardRef = _this$props.forwardRef,
        onDecrease = _this$props.onDecrease,
        onIncrease = _this$props.onIncrease,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["color", "direction", "edge", "forwardRef", "onDecrease", "onIncrease", "theme"]);

    var focused = this.state.focused;
    var _DIRECTION_PROPS$dire = DIRECTION_PROPS[direction],
        cursor = _DIRECTION_PROPS$dire.cursor,
        fill = _DIRECTION_PROPS$dire.fill;
    var size = (0, _utils.parseMetricToNum)(theme.global.spacing) / 2;
    var keyboardProps = direction === 'vertical' ? {
      onUp: onDecrease,
      onDown: onIncrease
    } : {
      onLeft: onDecrease,
      onRight: onIncrease
    };
    var boxDirection = direction === 'vertical' ? 'row' : 'column';
    var type = theme.rangeSelector && theme.rangeSelector.edge && theme.rangeSelector.edge.type || 'disc';
    return _react.default.createElement(_Keyboard.Keyboard, keyboardProps, _react.default.createElement(_Box.Box, {
      direction: boxDirection,
      style: {
        flex: '0 0 1px'
      },
      overflow: "visible",
      align: "center"
    }, _react.default.createElement(_Box.Box, _extends({
      ref: forwardRef,
      direction: boxDirection,
      justify: type === 'bar' ? 'stretch' : 'center',
      align: "center",
      basis: "full",
      fill: fill,
      margin: type === 'bar' ? undefined : 'xsmall',
      style: {
        cursor: cursor,
        minWidth: size,
        minHeight: size,
        zIndex: 10
      },
      onFocus: function onFocus() {
        return _this2.setState({
          focused: true
        });
      },
      onBlur: function onBlur() {
        return _this2.setState({
          focused: false
        });
      }
    }, rest), type === 'bar' ? _react.default.createElement(_Box.Box, {
      flex: true,
      width: size + "px",
      background: (0, _utils.normalizeColor)(color || 'control', theme),
      border: focused ? {
        color: (0, _utils.normalizeColor)('focus', theme)
      } : undefined
    }) : _react.default.createElement(_Box.Box, {
      width: size + (focused ? 2 : 0) + "px",
      height: size + (focused ? 2 : 0) + "px",
      round: "full",
      background: (0, _utils.normalizeColor)(color || 'control', theme),
      border: focused ? {
        color: (0, _utils.normalizeColor)('focus', theme)
      } : undefined
    }))));
  };

  return EdgeControl;
}(_react.Component);

EdgeControl.defaultProps = {};
Object.setPrototypeOf(EdgeControl.defaultProps, _defaultProps.defaultProps);
var EdgeControlWrapper = (0, _recompose.compose)(_hocs.withForwardRef, _styledComponents.withTheme)(EdgeControl);
exports.EdgeControl = EdgeControlWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/RangeSelector/RangeSelector.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet/components/RangeSelector/RangeSelector.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RangeSelector = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _contexts = __webpack_require__(/*! ../../contexts */ "./node_modules/grommet/contexts/index.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _EdgeControl = __webpack_require__(/*! ./EdgeControl */ "./node_modules/grommet/components/RangeSelector/EdgeControl.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "RangeSelector__Container",
  componentId: "siof5p-0"
})(["user-select:none;"]);

var RangeSelector =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RangeSelector, _Component);

  function RangeSelector() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "containerRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "valueForMouseCoord", function (event) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step;

      var rect = _this.containerRef.current.getBoundingClientRect();

      var value;

      if (direction === 'vertical') {
        var y = event.clientY - (rect.y || 0); // unit test resilience

        var scaleY = rect.height / (max - min + 1) || 1; // unit test resilience

        value = Math.floor(y / scaleY) + min;
      } else {
        var x = event.clientX - (rect.x || 0); // unit test resilience

        var scaleX = rect.width / (max - min + 1) || 1; // unit test resilience

        value = Math.floor(x / scaleX) + min;
      } // align with closest step within [min, max]


      var result = value + value % step;

      if (result < min) {
        return min;
      }

      if (result > max) {
        return max;
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          values = _this$props2.values;
      var lastChange = _this.state.lastChange;

      var value = _this.valueForMouseCoord(event);

      if (value <= values[0] || value < values[1] && lastChange === 'lower') {
        _this.setState({
          lastChange: 'lower'
        }, function () {
          return onChange([value, values[1]]);
        });
      } else if (value >= values[1] || value > values[0] && lastChange === 'upper') {
        _this.setState({
          lastChange: 'upper'
        }, function () {
          return onChange([values[0], value]);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "lowerMouseDown", function () {
      _this.setState({
        changing: 'lower'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "upperMouseDown", function () {
      _this.setState({
        changing: 'upper'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "selectionMouseDown", function (event) {
      var moveValue = _this.valueForMouseCoord(event);

      _this.setState({
        changing: 'selection',
        moveValue: moveValue
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "mouseMove", function (event) {
      var _this$props3 = _this.props,
          max = _this$props3.max,
          min = _this$props3.min,
          onChange = _this$props3.onChange,
          values = _this$props3.values;
      var _this$state = _this.state,
          changing = _this$state.changing,
          moveValue = _this$state.moveValue;

      var value = _this.valueForMouseCoord(event);

      var nextValues;

      if (changing === 'lower' && value <= values[1] && value !== moveValue) {
        nextValues = [value, values[1]];
      } else if (changing === 'upper' && value >= values[0] && value !== moveValue) {
        nextValues = [values[0], value];
      } else if (changing === 'selection' && value !== moveValue) {
        var delta = value - moveValue;

        if (values[0] + delta >= min && values[1] + delta <= max) {
          nextValues = [values[0] + delta, values[1] + delta];
        }
      }

      if (nextValues) {
        _this.setState({
          lastChange: changing,
          moveValue: value
        }, function () {
          onChange(nextValues);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseUp", function () {
      _this.setState({
        changing: undefined
      });

      window.removeEventListener('mousemove', _this.mouseMove);
      window.removeEventListener('mouseup', _this.mouseMove);
    });

    return _this;
  }

  var _proto = RangeSelector.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseMove);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        color = _this$props4.color,
        direction = _this$props4.direction,
        forwardRef = _this$props4.forwardRef,
        invert = _this$props4.invert,
        max = _this$props4.max,
        messages = _this$props4.messages,
        min = _this$props4.min,
        onChange = _this$props4.onChange,
        opacity = _this$props4.opacity,
        round = _this$props4.round,
        size = _this$props4.size,
        step = _this$props4.step,
        values = _this$props4.values,
        propsTheme = _this$props4.theme,
        rest = _objectWithoutPropertiesLoose(_this$props4, ["color", "direction", "forwardRef", "invert", "max", "messages", "min", "onChange", "opacity", "round", "size", "step", "values", "theme"]);

    var theme = this.context || propsTheme;
    var _this$state2 = this.state,
        nextLower = _this$state2.nextLower,
        nextUpper = _this$state2.nextUpper;
    var lower = nextLower !== undefined ? nextLower : values[0];
    var upper = nextUpper !== undefined ? nextUpper : values[1]; // It needs to be true when vertical, due to how browsers manage height

    var fill = direction === 'vertical' ? true : 'vertical';
    return _react.default.createElement(Container, _extends({
      ref: this.containerRef,
      direction: direction === 'vertical' ? 'column' : 'row',
      fill: fill
    }, rest, {
      onClick: onChange ? this.onClick : undefined
    }), _react.default.createElement(_Box.Box, {
      style: {
        flex: lower - min + " 0 0"
      },
      background: invert ? // preserve existing dark, instead of using darknes of this color
      {
        color: color || theme.rangeSelector.background.invert.color,
        opacity: opacity,
        dark: theme.dark
      } : undefined,
      fill: fill,
      round: round
    }), _react.default.createElement(_EdgeControl.EdgeControl, {
      a11yTitle: messages.lower,
      tabIndex: 0,
      ref: forwardRef,
      color: color,
      direction: direction,
      edge: "lower",
      onMouseDown: onChange ? this.lowerMouseDown : undefined,
      onDecrease: onChange && lower - step >= min ? function () {
        return onChange([lower - step, upper]);
      } : undefined,
      onIncrease: onChange && lower + step <= upper ? function () {
        return onChange([lower + step, upper]);
      } : undefined
    }), _react.default.createElement(_Box.Box, {
      style: {
        flex: upper - lower + 1 + " 0 0",
        cursor: direction === 'vertical' ? 'ns-resize' : 'ew-resize'
      },
      background: invert ? undefined : // preserve existing dark, instead of using darknes of this color
      {
        color: color || 'control',
        opacity: opacity,
        dark: theme.dark
      },
      fill: fill,
      round: round,
      onMouseDown: onChange ? this.selectionMouseDown : undefined
    }), _react.default.createElement(_EdgeControl.EdgeControl, {
      a11yTitle: messages.upper,
      tabIndex: 0,
      color: color,
      direction: direction,
      edge: "upper",
      onMouseDown: onChange ? this.upperMouseDown : undefined,
      onDecrease: onChange && upper - step >= lower ? function () {
        return onChange([lower, upper - step]);
      } : undefined,
      onIncrease: onChange && upper + step <= max ? function () {
        return onChange([lower, upper + step]);
      } : undefined
    }), _react.default.createElement(_Box.Box, {
      style: {
        flex: max - upper + " 0 0"
      },
      background: invert ? // preserve existing dark, instead of using darknes of this color
      {
        color: color || theme.rangeSelector.background.invert.color,
        opacity: opacity,
        dark: theme.dark
      } : undefined,
      fill: fill,
      round: round
    }));
  };

  return RangeSelector;
}(_react.Component);

_defineProperty(RangeSelector, "contextType", _contexts.ThemeContext);

_defineProperty(RangeSelector, "defaultProps", {
  direction: 'horizontal',
  max: 100,
  messages: {
    lower: 'Lower Bounds',
    upper: 'Upper Bounds'
  },
  min: 0,
  opacity: 'medium',
  size: 'medium',
  step: 1,
  values: []
});

var RangeSelectorDoc;

if (true) {
  RangeSelectorDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/RangeSelector/doc.js").doc(RangeSelector); // eslint-disable-line global-require
}

var RangeSelectorWrapper = (0, _recompose.compose)(_hocs.withForwardRef)(RangeSelectorDoc || RangeSelector);
exports.RangeSelector = RangeSelectorWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/RangeSelector/doc.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/RangeSelector/doc.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(RangeSelector) {
  var DocumentedRangeSelector = (0, _reactDesc.describe)(RangeSelector).availableAt((0, _utils.getAvailableAtBadge)('RangeSelector')).description('A control to input a range of values.').usage("import { RangeSelector } from 'grommet';\n<RangeSelector />").intrinsicElement('div');
  DocumentedRangeSelector.propTypes = {
    color: _utils.colorPropType.description('What color to use to indicate the selection.'),
    direction: _reactDesc.PropTypes.oneOf(['horizontal', 'vertical']).description('').defaultValue('horizontal'),
    invert: _reactDesc.PropTypes.bool.description('Whether to indicate what has not been selected.'),
    max: _reactDesc.PropTypes.number.description('The maximum value permitted.').defaultValue(100),
    messages: _reactDesc.PropTypes.shape({
      lower: _reactDesc.PropTypes.string,
      upper: _reactDesc.PropTypes.string
    }).description('Custom messages. Used for accessibility by screen readers.'),
    min: _reactDesc.PropTypes.number.description('The minimum value permitted.').defaultValue(0),
    onChange: _reactDesc.PropTypes.func.description("Function that will be called when the user changes one of the\n      values. It will be passed an array of two numbers indicating\n      the new values selected."),
    opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.string, _reactDesc.PropTypes.bool]).description('Transparency of the selection indicator.').defaultValue('medium'),
    round: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']), _reactDesc.PropTypes.string]).description('How much to round the corners.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.string]).description('How thick to make the selection indicator.').defaultValue('medium'),
    step: _reactDesc.PropTypes.number.description('The step interval between values.').defaultValue(1),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number).description('The current values.').isRequired
  };
  return DocumentedRangeSelector;
};

exports.doc = doc;
var themeDoc = {
  'global.borderSize': {
    description: 'The size of the border.',
    type: 'string',
    defaultValue: "{\n      xsmall: '1px',\n      small: '2px',\n      medium: '4px',\n      large: '12px',\n      xlarge: '24px,\n    }"
  },
  'global.colors.border': {
    description: 'The color for the border.',
    type: 'string | { dark: string, light: string }',
    defaultValue: {
      dark: 'rgba(255, 255, 255, 0.33)',
      light: 'rgba(0, 0, 0, 0.33)'
    }
  },
  'global.colors.control': {
    description: 'The color for the edge controls.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{dark: accent-1, light: brand}'
  },
  'global.colors.focus': {
    description: 'The color of the focus.',
    type: 'string',
    defaultValue: 'accent-1'
  },
  'global.edgeSize.small': {
    description: 'The possible sizes for the margin, padding and gap.',
    type: 'string',
    defaultValue: '6px'
  },
  'rangeSelector.background.invert.color': {
    description: 'The background color on an invert display.',
    type: 'string',
    defaultValue: 'light-4'
  },
  'rangeSelector.edge.type': {
    description: 'The edge style type.',
    type: "'bar' | 'disc'",
    defaultValue: undefined
  },
  'global.spacing': {
    description: 'The size of the edge controls thumb.',
    type: 'string',
    defaultValue: '24px'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/RangeSelector/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/RangeSelector/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RangeSelector = void 0;

var _RangeSelector = __webpack_require__(/*! ./RangeSelector */ "./node_modules/grommet/components/RangeSelector/RangeSelector.js");

exports.RangeSelector = _RangeSelector.RangeSelector;

/***/ }),

/***/ "./node_modules/grommet/components/RoutedAnchor/RoutedAnchor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet/components/RoutedAnchor/RoutedAnchor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RoutedAnchor = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Anchor = __webpack_require__(/*! ../Anchor */ "./node_modules/grommet/components/Anchor/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RoutedAnchor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RoutedAnchor, _Component);

  function RoutedAnchor() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RoutedAnchor.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        path = _this$props.path,
        method = _this$props.method,
        rest = _objectWithoutPropertiesLoose(_this$props, ["path", "method"]);

    if (true) {
      console.warn("This component will be deprecated in the upcoming releases. Please refer to https://github.com/grommet/grommet/issues/2855 for more information.");
    }

    return _react.default.createElement(_Anchor.Anchor, _extends({}, rest, {
      href: path,
      onClick: function onClick(event) {
        var onClick = _this.props.onClick;
        var router = _this.context.router;

        if (event) {
          var modifierKey = event.ctrlKey || event.metaKey; // if the user right-clicked in the Anchor we should let it go

          if (modifierKey) {
            return;
          }
        }

        if (router) {
          event.preventDefault();
          (router.history || router)[method](path);
        }

        if (onClick) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          onClick.apply(void 0, [event].concat(args));
        }
      }
    }));
  };

  return RoutedAnchor;
}(_react.Component);

_defineProperty(RoutedAnchor, "contextTypes", {
  router: _propTypes.default.shape({}).isRequired
});

_defineProperty(RoutedAnchor, "defaultProps", {
  method: 'push'
});

var RoutedAnchorDoc;

if (true) {
  RoutedAnchorDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/RoutedAnchor/doc.js").doc(RoutedAnchor); // eslint-disable-line global-require
}

var RoutedAnchorWrapper = RoutedAnchorDoc || RoutedAnchor;
exports.RoutedAnchor = RoutedAnchorWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/RoutedAnchor/doc.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/RoutedAnchor/doc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(RoutedAnchor) {
  var DocumentedRoutedAnchor = (0, _reactDesc.describe)(RoutedAnchor).availableAt((0, _utils.getAvailableAtBadge)('RoutedAnchor')).description('An Anchor with support for React Router.').usage("import { RoutedAnchor } from 'grommet';\n<RoutedAnchor primary={true} path='/documentation' />").intrinsicElement('a');
  DocumentedRoutedAnchor.propTypes = _extends({}, _utils.ROUTER_PROPS);
  return DocumentedRoutedAnchor;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/RoutedAnchor/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/RoutedAnchor/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RoutedAnchor = void 0;

var _RoutedAnchor = __webpack_require__(/*! ./RoutedAnchor */ "./node_modules/grommet/components/RoutedAnchor/RoutedAnchor.js");

exports.RoutedAnchor = _RoutedAnchor.RoutedAnchor;

/***/ }),

/***/ "./node_modules/grommet/components/RoutedButton/RoutedButton.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet/components/RoutedButton/RoutedButton.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RoutedButton = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RoutedButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RoutedButton, _Component);

  function RoutedButton() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          method = _this$props.method,
          onClick = _this$props.onClick,
          path = _this$props.path;
      var router = _this.context.router;

      if (event) {
        var modifierKey = event.ctrlKey || event.metaKey; // if the user right-clicked in the button we should let it go

        if (modifierKey) {
          return;
        }
      }

      if (router) {
        event.preventDefault();
        (router.history || router)[method](path);
      }

      if (onClick) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        onClick.apply(void 0, [event].concat(args));
      }
    });

    return _this;
  }

  var _proto = RoutedButton.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        href = _this$props2.href,
        path = _this$props2.path,
        method = _this$props2.method,
        onClick = _this$props2.onClick,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["href", "path", "method", "onClick"]);

    if (true) {
      console.warn("This component will be deprecated in the upcoming releases. Please refer to https://github.com/grommet/grommet/issues/2855 for more information.");
    }

    return _react.default.createElement(_Button.Button, _extends({}, rest, {
      href: path || href,
      disabled: !path && !onClick,
      onClick: this.onClick
    }));
  };

  return RoutedButton;
}(_react.Component);

_defineProperty(RoutedButton, "contextTypes", {
  router: _propTypes.default.shape({}).isRequired
});

_defineProperty(RoutedButton, "defaultProps", {
  method: 'push'
});

var RoutedButtonDoc;

if (true) {
  RoutedButtonDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/RoutedButton/doc.js").doc(RoutedButton); // eslint-disable-line global-require
}

var RoutedButtonWrapper = RoutedButtonDoc || RoutedButton;
exports.RoutedButton = RoutedButtonWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/RoutedButton/doc.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/components/RoutedButton/doc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(RoutedButton) {
  var DocumentedRoutedButton = (0, _reactDesc.describe)(RoutedButton).availableAt((0, _utils.getAvailableAtBadge)('RoutedButton')).description('A button with support for React Router.').usage("import { RoutedButton } from 'grommet';\n<RoutedButton primary={true} path='/documentation' />").intrinsicElement('button');
  DocumentedRoutedButton.propTypes = _extends({}, _utils.ROUTER_PROPS);
  return DocumentedRoutedButton;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/RoutedButton/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/RoutedButton/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RoutedButton = void 0;

var _RoutedButton = __webpack_require__(/*! ./RoutedButton */ "./node_modules/grommet/components/RoutedButton/RoutedButton.js");

exports.RoutedButton = _RoutedButton.RoutedButton;

/***/ }),

/***/ "./node_modules/grommet/components/Select/Select.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Select/Select.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Select = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _DropButton = __webpack_require__(/*! ../DropButton */ "./node_modules/grommet/components/DropButton/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _TextInput = __webpack_require__(/*! ../TextInput */ "./node_modules/grommet/components/TextInput/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _SelectContainer = __webpack_require__(/*! ./SelectContainer */ "./node_modules/grommet/components/Select/SelectContainer.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SelectTextInput = (0, _styledComponents.default)(_TextInput.TextInput).withConfig({
  displayName: "Select__SelectTextInput",
  componentId: "sc-17idtfo-0"
})(["cursor:pointer;"]);
var StyledSelectDropButton = (0, _styledComponents.default)(_DropButton.DropButton).withConfig({
  displayName: "Select__StyledSelectDropButton",
  componentId: "sc-17idtfo-1"
})(["", ";", ";"], function (props) {
  return !props.plain && _utils.controlBorderStyle;
}, function (props) {
  return props.theme.select && props.theme.select.control && props.theme.select.control.extend;
});
StyledSelectDropButton.defaultProps = {};
Object.setPrototypeOf(StyledSelectDropButton.defaultProps, _defaultProps.defaultProps);

var Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Select, _Component);

  function Select(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "inputRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onOpen", function () {
      var onOpen = _this.props.onOpen;

      _this.setState({
        open: true
      }, function () {
        if (onOpen) {
          onOpen();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        open: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    });

    _this.state = {
      open: props.open
    };
    return _this;
  }

  var _proto = Select.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        alignSelf = _this$props.alignSelf,
        children = _this$props.children,
        closeOnChange = _this$props.closeOnChange,
        disabled = _this$props.disabled,
        dropAlign = _this$props.dropAlign,
        dropProps = _this$props.dropProps,
        dropTarget = _this$props.dropTarget,
        forwardRef = _this$props.forwardRef,
        gridArea = _this$props.gridArea,
        id = _this$props.id,
        icon = _this$props.icon,
        labelKey = _this$props.labelKey,
        margin = _this$props.margin,
        messages = _this$props.messages,
        onChange = _this$props.onChange,
        onClose = _this$props.onClose,
        options = _this$props.options,
        placeholder = _this$props.placeholder,
        plain = _this$props.plain,
        selected = _this$props.selected,
        size = _this$props.size,
        theme = _this$props.theme,
        value = _this$props.value,
        valueLabel = _this$props.valueLabel,
        rest = _objectWithoutPropertiesLoose(_this$props, ["a11yTitle", "alignSelf", "children", "closeOnChange", "disabled", "dropAlign", "dropProps", "dropTarget", "forwardRef", "gridArea", "id", "icon", "labelKey", "margin", "messages", "onChange", "onClose", "options", "placeholder", "plain", "selected", "size", "theme", "value", "valueLabel"]);

    var open = this.state.open;
    delete rest.onSearch;

    var onSelectChange = function onSelectChange(event) {
      if (closeOnChange) {
        _this2.onClose();
      }

      if (onChange) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        onChange.apply(void 0, [_extends({}, event, {
          target: _this2.inputRef.current
        })].concat(args));
      }
    };

    var SelectIcon;

    switch (icon) {
      case false:
        break;

      case true:
      case undefined:
        SelectIcon = theme.select.icons.down;
        break;

      default:
        SelectIcon = icon;
    }

    var selectValue;
    var inputValue = '';

    if (valueLabel) {
      selectValue = valueLabel;
    } else if (Array.isArray(value)) {
      if (value.length > 1) {
        if (_react.default.isValidElement(value[0])) {
          selectValue = value;
        } else {
          inputValue = messages.multiple;
        }
      } else if (value.length === 1) {
        if (_react.default.isValidElement(value[0])) {
          selectValue = value[0];
        } else if (labelKey && typeof value[0] === 'object') {
          if (typeof labelKey === 'function') {
            inputValue = labelKey(value[0]);
          } else {
            inputValue = value[0][labelKey];
          }
        } else {
          inputValue = value[0];
        }
      } else {
        inputValue = '';
      }
    } else if (labelKey && typeof value === 'object') {
      if (typeof labelKey === 'function') {
        inputValue = labelKey(value);
      } else {
        inputValue = value[labelKey];
      }
    } else if (_react.default.isValidElement(value)) {
      selectValue = value; // deprecated in favor of valueLabel
    } else if (selected !== undefined) {
      if (Array.isArray(selected)) {
        if (selected.length > 1) {
          inputValue = messages.multiple;
        } else if (selected.length === 1) {
          inputValue = options[selected[0]];
        }
      } else {
        inputValue = options[selected];
      }
    } else {
      inputValue = value;
    } // const dark = theme.select.background ? colorIsDark(theme.select.background) : theme.dark;


    var iconColor = (0, _utils.normalizeColor)(theme.select.icons.color || 'control', theme);
    return _react.default.createElement(_Keyboard.Keyboard, {
      onDown: this.onOpen,
      onUp: this.onOpen
    }, _react.default.createElement(StyledSelectDropButton, {
      ref: forwardRef,
      id: id,
      disabled: disabled === true || undefined,
      dropAlign: dropAlign,
      dropTarget: dropTarget,
      open: open,
      alignSelf: alignSelf,
      gridArea: gridArea,
      margin: margin,
      onOpen: this.onOpen,
      onClose: this.onClose,
      dropContent: _react.default.createElement(_SelectContainer.SelectContainer, _extends({}, this.props, {
        onChange: onSelectChange
      })),
      plain: plain,
      dropProps: _extends({}, dropProps)
    }, _react.default.createElement(_Box.Box, {
      align: "center",
      direction: "row",
      justify: "between",
      background: theme.select.background
    }, _react.default.createElement(_Box.Box, {
      direction: "row",
      flex: true,
      basis: "auto"
    }, selectValue || _react.default.createElement(SelectTextInput, _extends({
      a11yTitle: a11yTitle && "" + a11yTitle + (typeof value === 'string' ? ", " + value : ''),
      id: id ? id + "__input" : undefined,
      ref: this.inputRef
    }, rest, {
      tabIndex: "-1",
      type: "text",
      placeholder: placeholder,
      plain: true,
      readOnly: true,
      value: inputValue,
      size: size,
      onClick: disabled === true ? undefined : this.onOpen
    }))), SelectIcon && _react.default.createElement(_Box.Box, {
      margin: {
        horizontal: 'small'
      },
      flex: false,
      style: {
        minWidth: 'auto'
      }
    }, _react.default.createElement(SelectIcon, {
      color: iconColor,
      size: size
    })))));
  };

  return Select;
}(_react.Component);

_defineProperty(Select, "defaultProps", {
  closeOnChange: true,
  dropAlign: {
    top: 'bottom',
    left: 'left'
  },
  messages: {
    multiple: 'multiple'
  }
});

Object.setPrototypeOf(Select.defaultProps, _defaultProps.defaultProps);
var SelectDoc;

if (true) {
  SelectDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Select/doc.js").doc(Select); // eslint-disable-line global-require
}

var SelectWrapper = (0, _recompose.compose)(_styledComponents.withTheme, _hocs.withForwardRef)(SelectDoc || Select);
exports.Select = SelectWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Select/SelectContainer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet/components/Select/SelectContainer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SelectContainer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _InfiniteScroll = __webpack_require__(/*! ../InfiniteScroll */ "./node_modules/grommet/components/InfiniteScroll/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

var _TextInput = __webpack_require__(/*! ../TextInput */ "./node_modules/grommet/components/TextInput/index.js");

var _SelectOption = __webpack_require__(/*! ./SelectOption */ "./node_modules/grommet/components/Select/SelectOption.js");

var _StyledSelect = __webpack_require__(/*! ./StyledSelect */ "./node_modules/grommet/components/Select/StyledSelect.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// position relative is so scroll can be managed correctly
var OptionsBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "SelectContainer__OptionsBox",
  componentId: "sc-1wi0ul8-0"
})(["position:relative;scroll-behavior:smooth;"]);
var OptionBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "SelectContainer__OptionBox",
  componentId: "sc-1wi0ul8-1"
})(["", ""], function (props) {
  return props.selected && _utils.selectedStyle;
});

var SelectContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SelectContainer, _Component);

  function SelectContainer(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "optionRefs", {});

    _defineProperty(_assertThisInitialized(_this), "searchRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "optionsRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (event) {
      _this.setState({
        search: event.target.value,
        activeIndex: -1
      }, function () {
        var search = _this.state.search;

        _this.onSearch(search);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSearch", (0, _utils.debounce)(function (search) {
      var onSearch = _this.props.onSearch;
      onSearch(search);
    }, (0, _utils.debounceDelay)(_this.props)));

    _defineProperty(_assertThisInitialized(_this), "selectOption", function (option) {
      return function () {
        var _this$props = _this.props,
            multiple = _this$props.multiple,
            onChange = _this$props.onChange,
            value = _this$props.value,
            selected = _this$props.selected;
        var initialOptions = _this.state.initialOptions;

        if (onChange) {
          var nextValue = Array.isArray(value) ? value.slice() : []; // preserve compatibility until selected is deprecated

          if (selected) {
            nextValue = selected.map(function (s) {
              return initialOptions[s];
            });
          }

          if (multiple) {
            if (nextValue.indexOf(option) !== -1) {
              nextValue = nextValue.filter(function (v) {
                return v !== option;
              });
            } else {
              nextValue.push(option);
            }
          } else {
            nextValue = option;
          }

          var nextSelected = Array.isArray(nextValue) ? nextValue.map(function (v) {
            return initialOptions.indexOf(v);
          }) : initialOptions.indexOf(nextValue);
          onChange({
            option: option,
            value: nextValue,
            selected: nextSelected
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "clearKeyboardNavigation", function () {
      clearTimeout(_this.keyboardNavTimer);
      _this.keyboardNavTimer = setTimeout(function () {
        _this.setState({
          keyboardNavigating: false
        });
      }, 100); // 100ms was empirically determined
    });

    _defineProperty(_assertThisInitialized(_this), "onNextOption", function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;
      event.preventDefault();
      var nextActiveIndex = activeIndex + 1;

      while (nextActiveIndex < options.length && _this.isDisabled(nextActiveIndex)) {
        nextActiveIndex += 1;
      }

      if (nextActiveIndex !== options.length) {
        _this.setState({
          activeIndex: nextActiveIndex,
          keyboardNavigating: true
        }, function () {
          var buttonNode = _this.optionRefs[nextActiveIndex];
          var optionsNode = _this.optionsRef.current;

          if (buttonNode && (0, _utils.isNodeAfterScroll)(buttonNode, optionsNode) && optionsNode.scrollTo) {
            optionsNode.scrollTo(0, buttonNode.offsetTop - (optionsNode.getBoundingClientRect().height - buttonNode.getBoundingClientRect().height));
          }

          _this.clearKeyboardNavigation();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviousOption", function (event) {
      var activeIndex = _this.state.activeIndex;
      event.preventDefault();
      var nextActiveIndex = activeIndex - 1;

      while (nextActiveIndex >= 0 && _this.isDisabled(nextActiveIndex)) {
        nextActiveIndex -= 1;
      }

      if (nextActiveIndex >= 0) {
        _this.setState({
          activeIndex: nextActiveIndex,
          keyboardNavigating: true
        }, function () {
          var buttonNode = _this.optionRefs[nextActiveIndex];
          var optionsNode = _this.optionsRef.current;

          if (buttonNode && (0, _utils.isNodeBeforeScroll)(buttonNode, optionsNode) && optionsNode.scrollTo) {
            optionsNode.scrollTo(0, buttonNode.offsetTop);
          }

          _this.clearKeyboardNavigation();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onActiveOption", function (index) {
      return function () {
        var keyboardNavigating = _this.state.keyboardNavigating;

        if (!keyboardNavigating) {
          _this.setState({
            activeIndex: index
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectOption", function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;

      if (activeIndex >= 0) {
        event.preventDefault(); // prevent submitting forms

        _this.selectOption(options[activeIndex])();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "optionLabel", function (index) {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          labelKey = _this$props2.labelKey;
      var option = options[index];
      var optionLabel;

      if (labelKey) {
        if (typeof labelKey === 'function') {
          optionLabel = labelKey(option);
        } else {
          optionLabel = option[labelKey];
        }
      } else {
        optionLabel = option;
      }

      return optionLabel;
    });

    _defineProperty(_assertThisInitialized(_this), "optionValue", function (index) {
      var _this$props3 = _this.props,
          options = _this$props3.options,
          valueKey = _this$props3.valueKey;
      var option = options[index];
      var optionValue;

      if (valueKey) {
        if (typeof valueKey === 'function') {
          optionValue = valueKey(option);
        } else {
          optionValue = option[valueKey];
        }
      } else {
        optionValue = option;
      }

      return optionValue;
    });

    _defineProperty(_assertThisInitialized(_this), "isDisabled", function (index) {
      var _this$props4 = _this.props,
          disabled = _this$props4.disabled,
          disabledKey = _this$props4.disabledKey,
          options = _this$props4.options;
      var option = options[index];
      var result;

      if (disabledKey) {
        if (typeof disabledKey === 'function') {
          result = disabledKey(option, index);
        } else {
          result = option[disabledKey];
        }
      } else if (Array.isArray(disabled)) {
        if (typeof disabled[0] === 'number') {
          result = disabled.indexOf(index) !== -1;
        } else {
          var optionValue = _this.optionValue(index);

          result = disabled.indexOf(optionValue) !== -1;
        }
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (index) {
      var _this$props5 = _this.props,
          selected = _this$props5.selected,
          value = _this$props5.value,
          valueKey = _this$props5.valueKey;
      var result;

      if (selected) {
        // deprecated in favor of value
        result = selected.indexOf(index) !== -1;
      } else {
        var optionValue = _this.optionValue(index);

        if (Array.isArray(value)) {
          if (value.length === 0) {
            result = false;
          } else if (typeof value[0] !== 'object') {
            result = value.indexOf(optionValue) !== -1;
          } else if (valueKey) {
            result = value.some(function (valueItem) {
              var valueValue = typeof valueKey === 'function' ? valueKey(valueItem) : valueItem[valueKey];
              return valueValue === optionValue;
            });
          }
        } else if (valueKey && typeof value === 'object') {
          var valueValue = typeof valueKey === 'function' ? valueKey(value) : value[valueKey];
          result = valueValue === optionValue;
        } else {
          result = value === optionValue;
        }
      }

      return result;
    });

    _this.state = {
      initialOptions: props.options,
      search: '',
      activeIndex: -1
    };
    return _this;
  }

  SelectContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var options = nextProps.options,
        value = nextProps.value,
        onSearch = nextProps.onSearch;

    if (onSearch) {
      if (prevState.activeIndex === -1 && prevState.search === '' && options && value) {
        var optionValue = Array.isArray(value) && value.length ? value[0] : value;
        var activeIndex = options.indexOf(optionValue);
        return {
          activeIndex: activeIndex
        };
      }

      if (prevState.activeIndex === -1 && prevState.search !== '') {
        return {
          activeIndex: 0
        };
      }
    }

    return null;
  };

  var _proto = SelectContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var onSearch = this.props.onSearch;
    var activeIndex = this.state.activeIndex; // timeout need to send the operation through event loop and allow time to the portal
    // to be available

    setTimeout(function () {
      var optionsNode = _this2.optionsRef.current;

      if (onSearch) {
        var input = _this2.searchRef.current;

        if (input && input.focus) {
          (0, _utils.setFocusWithoutScroll)(input);
        }
      } else if (optionsNode) {
        (0, _utils.setFocusWithoutScroll)(optionsNode);
      } // scroll to active option if it is below the fold


      if (activeIndex >= 0 && optionsNode) {
        var optionNode = _this2.optionRefs[activeIndex];

        var _optionsNode$getBound = optionsNode.getBoundingClientRect(),
            containerBottom = _optionsNode$getBound.bottom;

        if (optionNode) {
          var _optionNode$getBoundi = optionNode.getBoundingClientRect(),
              optionTop = _optionNode$getBoundi.bottom;

          if (containerBottom < optionTop) {
            optionNode.scrollIntoView();
          }
        }
      }
    }, 0);
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props6 = this.props,
        children = _this$props6.children,
        dropHeight = _this$props6.dropHeight,
        emptySearchMessage = _this$props6.emptySearchMessage,
        id = _this$props6.id,
        onKeyDown = _this$props6.onKeyDown,
        onSearch = _this$props6.onSearch,
        options = _this$props6.options,
        searchPlaceholder = _this$props6.searchPlaceholder,
        theme = _this$props6.theme;
    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        search = _this$state.search;
    var customSearchInput = theme.select.searchInput;
    var SelectTextInput = customSearchInput || _TextInput.TextInput;
    return _react.default.createElement(_Keyboard.Keyboard, {
      onEnter: this.onSelectOption,
      onUp: this.onPreviousOption,
      onDown: this.onNextOption,
      onKeyDown: onKeyDown
    }, _react.default.createElement(_StyledSelect.StyledContainer, {
      as: _Box.Box,
      id: id ? id + "__select-drop" : undefined,
      dropHeight: dropHeight
    }, onSearch && _react.default.createElement(_Box.Box, {
      pad: !customSearchInput ? 'xsmall' : undefined,
      flex: false
    }, _react.default.createElement(SelectTextInput, {
      focusIndicator: !customSearchInput,
      size: "small",
      ref: this.searchRef,
      type: "search",
      value: search,
      placeholder: searchPlaceholder,
      onChange: this.onSearchChange
    })), _react.default.createElement(OptionsBox, {
      flex: "shrink",
      role: "menubar",
      tabIndex: "-1",
      ref: this.optionsRef,
      overflow: "auto"
    }, options.length > 0 ? _react.default.createElement(_InfiniteScroll.InfiniteScroll, {
      items: options,
      step: theme.select.step,
      replace: true
    }, function (option, index) {
      var isDisabled = _this3.isDisabled(index);

      var isSelected = _this3.isSelected(index);

      var isActive = activeIndex === index;
      return _react.default.createElement(_SelectOption.SelectOption // eslint-disable-next-line react/no-array-index-key
      , {
        key: index,
        ref: function ref(_ref) {
          _this3.optionRefs[index] = _ref;
        },
        disabled: isDisabled || undefined,
        active: isActive,
        selected: isSelected,
        option: option,
        onMouseOver: !isDisabled ? _this3.onActiveOption(index) : undefined,
        onClick: !isDisabled ? _this3.selectOption(option) : undefined
      }, children ? children(option, index, options, {
        active: isActive,
        disabled: isDisabled,
        selected: isSelected
      }) : _react.default.createElement(OptionBox, _extends({}, theme.select.options.box, {
        selected: isSelected
      }), _react.default.createElement(_Text.Text, theme.select.options.text, _this3.optionLabel(index))));
    }) : _react.default.createElement(_SelectOption.SelectOption, {
      key: "search_empty",
      disabled: true,
      option: emptySearchMessage
    }, _react.default.createElement(OptionBox, theme.select.options.box, _react.default.createElement(_Text.Text, theme.select.container.text, emptySearchMessage))))));
  };

  return SelectContainer;
}(_react.Component);

_defineProperty(SelectContainer, "defaultProps", {
  children: null,
  disabled: undefined,
  emptySearchMessage: 'No matches found',
  id: undefined,
  multiple: false,
  name: undefined,
  onKeyDown: undefined,
  onSearch: undefined,
  options: undefined,
  searchPlaceholder: undefined,
  selected: undefined,
  value: ''
});

Object.setPrototypeOf(SelectContainer.defaultProps, _defaultProps.defaultProps);
var SelectContainerWrapper = (0, _styledComponents.withTheme)(SelectContainer);
exports.SelectContainer = SelectContainerWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Select/SelectOption.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/Select/SelectOption.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SelectOption = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SelectOption =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SelectOption, _Component);

  function SelectOption() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SelectOption.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this$props = this.props,
        active = _this$props.active,
        disabled = _this$props.disabled,
        option = _this$props.option,
        selected = _this$props.selected;
    var nextActive = nextProps.active,
        nextDisabled = nextProps.disabled,
        nextOption = nextProps.option,
        nextSelected = nextProps.selected;
    return active !== nextActive || selected !== nextSelected || disabled !== nextDisabled || option !== nextOption;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["forwardRef"]);

    return _react.default.createElement(_Box.Box, {
      flex: false
    }, _react.default.createElement(_Button.Button, _extends({
      tabIndex: "-1",
      ref: forwardRef,
      role: "menuitem"
    }, rest)));
  };

  return SelectOption;
}(_react.Component);

var SelectOptionWrapper = (0, _hocs.withForwardRef)(SelectOption);
exports.SelectOption = SelectOptionWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Select/StyledSelect.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/Select/StyledSelect.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledContainer = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _grommetStyles = __webpack_require__(/*! grommet-styles */ "./node_modules/grommet-styles/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "StyledSelect__StyledContainer",
  componentId: "znp66n-0"
})(["@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";", ";"], function (props) {
  return props.dropHeight ? (0, _grommetStyles.sizeStyle)('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
}, function (props) {
  return props.theme.select.container && props.theme.select.container.extend;
});

exports.StyledContainer = StyledContainer;

/***/ }),

/***/ "./node_modules/grommet/components/Select/doc.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Select/doc.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Select) {
  var DocumentedSelect = (0, _reactDesc.describe)(Select).availableAt((0, _utils.getAvailableAtBadge)('Select')).description('A control to select a value, with optional search.').usage("import { Select } from 'grommet';\n<Select />"); // We don't include svg due to a collision on the values property
  // .intrinsicElement('select');

  DocumentedSelect.propTypes = _extends({}, _utils.genericProps, {
    children: _reactDesc.PropTypes.func.description("Function that will be called when each option is rendered.\n      It will be passed (option, index, options, state) where option\n      is the option to render, index is the index of that option in the\n      options array, and state is an object with\n      { active, disabled, selected } keys indicating the current state\n      of the option."),
    closeOnChange: _reactDesc.PropTypes.bool.description('Wether to close the drop when a selection is made.').defaultValue(true),
    disabled: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.string, _reactDesc.PropTypes.object]))]).description("Whether the entire select or individual options should be disabled.\n        An array of numbers indicates the indexes into 'options' of the\n        disabled options. An array of strings or objects work the same way\n        as the 'value' to indicate which options are disabled.").defaultValue(false),
    disabledKey: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("When the options array contains objects, this property indicates how\n      to determine which options should be disabled. If a string is\n      provided, it is used as the key for each item object and if that key\n      returns truthy, the option is disabled. If a function is provided, it is\n      called with the option and the return value determines if the option\n      is disabled."),
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop.').defaultValue({
      top: 'bottom',
      left: 'left'
    }),
    dropHeight: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The height of the drop container.'),
    dropTarget: _reactDesc.PropTypes.object.description("Target where the options drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the Select itself by default."),
    dropProps: _reactDesc.PropTypes.object.description('Any valid Drop prop.'),
    focusIndicator: _reactDesc.PropTypes.bool.description("Whether when 'plain' it should receive a focus outline."),
    icon: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.func]).description('A custom icon to be used when rendering the select. You can use false to not render an icon at all.'),
    labelKey: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("When the options array contains objects, this property indicates how\n      to determine the label of each option. If a string is\n      provided, it is used as the key to retrieve each option's label.\n      If a function is provided, it is called with the option and the\n      return value indicates the label."),
    messages: _reactDesc.PropTypes.shape({
      multiple: _reactDesc.PropTypes.string
    }).description('Custom messages.'),
    multiple: _reactDesc.PropTypes.bool.description('Whether to allow multiple options to be selected.'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user selects an option.'),
    onClose: _reactDesc.PropTypes.func.description('Function that will be called when the Select drop closes.'),
    onOpen: _reactDesc.PropTypes.func.description('Function that will be called when the Select drop opens.'),
    onSearch: _reactDesc.PropTypes.func.description("Function that will be called when the user types in the search input.\n      If this property is not provided, no search field will be rendered."),
    options: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, _reactDesc.PropTypes.object])).description("Options can be either a string or an object. If an object is used, use\n      children callback in order to render anything based on the current item.").isRequired,
    open: _reactDesc.PropTypes.bool.description("Initial state of the select component"),
    placeholder: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Placeholder text to use when no value is provided.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain Select input with no border or padding.'),
    searchPlaceholder: _reactDesc.PropTypes.string.description('Placeholder text to use in the search box when the search input is empty.'),
    selected: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)]).description("Index of the currently selected option. When multiple, the set of\n      options selected. NOTE: This is deprecated in favor of indicating\n      the selected values via the 'value' property."),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the select.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, // deprecated, use valueLabel
    _reactDesc.PropTypes.object, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.object]))]).description("Currently selected value. This can be an array\n      when multiple. Passing an element allows the caller to control how\n      the value is rendered. Passing an element is deprecated. Instead,\n      use the 'valueLabel' property."),
    valueLabel: _reactDesc.PropTypes.node.description("Provides custom rendering of the value. If not provided, Select\n      will render the value automatically."),
    valueKey: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("When the options array contains objects, this property indicates how\n      to determine the value of each option. If a string is\n      provided, it is used as the key to retrieve each option's value.\n      If a function is provided, it is called with the option and the\n      return value indicates the value."),
    emptySearchMessage: _reactDesc.PropTypes.string.description("Empty option message to display when no matching results were found").defaultValue('No matches found')
  });
  return DocumentedSelect;
};

exports.doc = doc;
var themeDoc = {
  'select.background': {
    description: 'The background color used for Select.',
    type: 'string',
    defaultValue: undefined
  },
  'select.options.container': {
    description: 'Any valid Box prop for the options container.',
    type: 'object',
    defaultValue: "{ align: 'start', pad: 'small' }"
  },
  'select.options.text': {
    description: 'Any valid Text prop for text used inside the options container.',
    type: 'object',
    defaultValue: "{ margin: 'none }"
  },
  'select.container.extend': {
    description: 'Any additional style for the container of the Select component.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'select.control.extend': {
    description: 'Any additional style for the control of the Select component.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'select.icons.color': {
    description: 'The color used for Select icons.',
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined
  },
  'select.icons.down': {
    description: 'The down icon to use for opening the Select.',
    type: 'React.Element',
    defaultValue: '<FormDown />'
  },
  'select.searchInput': {
    description: "Component for the Select search input field.",
    type: 'React.Component',
    defaultValue: undefined
  },
  'select.step': {
    description: "How many items to render at a time.",
    type: 'number',
    defaultValue: 20
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Select/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/Select/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Select = void 0;

var _Select = __webpack_require__(/*! ./Select */ "./node_modules/grommet/components/Select/Select.js");

exports.Select = _Select.Select;

/***/ }),

/***/ "./node_modules/grommet/components/SkipLink/SkipLink.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/SkipLink/SkipLink.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SkipLink = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Anchor = __webpack_require__(/*! ../Anchor */ "./node_modules/grommet/components/Anchor/index.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SkipLink = function SkipLink(_ref) {
  var id = _ref.id,
      label = _ref.label,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "label"]);

  return _react.default.createElement(_Box.Box, {
    margin: "small"
  }, _react.default.createElement(_Anchor.Anchor, _extends({
    href: "#" + id,
    label: label
  }, rest)));
};

exports.SkipLink = SkipLink;

/***/ }),

/***/ "./node_modules/grommet/components/SkipLink/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/SkipLink/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SkipLink = void 0;

var _SkipLink = __webpack_require__(/*! ./SkipLink */ "./node_modules/grommet/components/SkipLink/SkipLink.js");

exports.SkipLink = _SkipLink.SkipLink;

/***/ }),

/***/ "./node_modules/grommet/components/SkipLinkTarget/SkipLinkTarget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet/components/SkipLinkTarget/SkipLinkTarget.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SkipLinkTarget = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _Anchor = __webpack_require__(/*! ../Anchor */ "./node_modules/grommet/components/Anchor/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HiddenAnchor = (0, _styledComponents.default)(_Anchor.Anchor).withConfig({
  displayName: "SkipLinkTarget__HiddenAnchor",
  componentId: "sc-16wjfgk-0"
})(["width:0;height:0;overflow:hidden;position:absolute;"]);

var SkipLinkTarget = function SkipLinkTarget(_ref) {
  var label = _ref.label,
      rest = _objectWithoutPropertiesLoose(_ref, ["label"]);

  return _react.default.createElement(HiddenAnchor, _extends({}, rest, {
    tabIndex: "-1",
    "aria-hidden": "true"
  }), label);
};

exports.SkipLinkTarget = SkipLinkTarget;

/***/ }),

/***/ "./node_modules/grommet/components/SkipLinkTarget/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet/components/SkipLinkTarget/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SkipLinkTarget = void 0;

var _SkipLinkTarget = __webpack_require__(/*! ./SkipLinkTarget */ "./node_modules/grommet/components/SkipLinkTarget/SkipLinkTarget.js");

exports.SkipLinkTarget = _SkipLinkTarget.SkipLinkTarget;

/***/ }),

/***/ "./node_modules/grommet/components/SkipLinks/SkipLinks.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/SkipLinks/SkipLinks.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SkipLinks = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Heading = __webpack_require__(/*! ../Heading */ "./node_modules/grommet/components/Heading/index.js");

var _Layer = __webpack_require__(/*! ../Layer */ "./node_modules/grommet/components/Layer/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SkipLinks =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SkipLinks, _Component);

  function SkipLinks() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      showLayer: false
    });

    _defineProperty(_assertThisInitialized(_this), "layerRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      // timeout needed so it gives enough time for activeElement to be updated
      setTimeout(function () {
        var layerNode = _this.layerRef.current;

        if (layerNode && layerNode.layerContainer.contains && !layerNode.layerContainer.contains(document.activeElement)) {
          _this.removeLayer();
        }
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      _this.setState({
        showLayer: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeLayer", function () {
      _this.setState({
        showLayer: false
      });
    });

    return _this;
  }

  var _proto = SkipLinks.prototype;

  _proto.render = function render() {
    var _this2 = this;

    /* eslint-disable-next-line react/prop-types */
    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        messages = _this$props.messages;
    var showLayer = this.state.showLayer;
    return _react.default.createElement(_Layer.Layer, {
      id: id,
      position: showLayer ? 'top' : 'hidden',
      ref: this.layerRef,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, _react.default.createElement(_Box.Box, {
      pad: {
        horizontal: 'medium'
      }
    }, _react.default.createElement(_Heading.Heading, {
      level: 2
    }, messages.skipTo, ":"), _react.default.createElement(_Box.Box, {
      direction: "row",
      align: "center",
      pad: {
        bottom: 'medium'
      }
    }, children.map(function (element, index) {
      return (0, _react.cloneElement)(element, {
        key: "skip-link-" + index,
        onClick: _this2.removeLayer
      });
    }))));
  };

  return SkipLinks;
}(_react.Component);

_defineProperty(SkipLinks, "defaultProps", {
  messages: {
    skipTo: 'Skip To'
  }
});

var SkipLinksDoc;

if (true) {
  SkipLinksDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/SkipLinks/doc.js").doc(SkipLinks); // eslint-disable-line global-require
}

var SkipLinksWrapper = SkipLinksDoc || SkipLinks;
exports.SkipLinks = SkipLinksWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/SkipLinks/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/SkipLinks/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var doc = function doc(SkipLinks) {
  var DocumentedSkipLinks = (0, _reactDesc.describe)(SkipLinks).availableAt((0, _utils.getAvailableAtBadge)('SkipLinks')).description('Describe a list of elements to skip to.').usage("import { SkipLinks } from 'grommet';\n<SkipLinks elements={['main', 'footer']} />");
  DocumentedSkipLinks.propTypes = {
    children: _reactDesc.PropTypes.node.description('Array of SkipLink').isRequired,
    messages: _reactDesc.PropTypes.shape({
      skipTo: _reactDesc.PropTypes.string
    }).description('Custom messages for SkipLinks. Used for accessibility by screen readers.')
  };
  return DocumentedSkipLinks;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/SkipLinks/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/SkipLinks/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SkipLinks = void 0;

var _SkipLinks = __webpack_require__(/*! ./SkipLinks */ "./node_modules/grommet/components/SkipLinks/SkipLinks.js");

exports.SkipLinks = _SkipLinks.SkipLinks;

/***/ }),

/***/ "./node_modules/grommet/components/Stack/Stack.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Stack/Stack.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Stack = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledStack = __webpack_require__(/*! ./StyledStack */ "./node_modules/grommet/components/Stack/StyledStack.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stack =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Stack, _Component);

  function Stack() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "toChildIndex", function (child) {
      var children = _this.props.children;
      var index = child;

      if (index === 'first' || !index) {
        index = 0;
      } else if (index === 'last') {
        index = _react.default.Children.count(children) - 1;
      }

      return index;
    });

    return _this;
  }

  var _proto = Stack.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        anchor = _this$props.anchor,
        children = _this$props.children,
        fill = _this$props.fill,
        guidingChild = _this$props.guidingChild,
        interactiveChild = _this$props.interactiveChild,
        rest = _objectWithoutPropertiesLoose(_this$props, ["anchor", "children", "fill", "guidingChild", "interactiveChild"]);

    var guidingIndex = this.toChildIndex(guidingChild);
    var interactiveIndex = interactiveChild && this.toChildIndex(interactiveChild);
    var childIndex = 0;

    var styledChildren = _react.Children.map(children, function (child) {
      if (child) {
        var interactive = interactiveChild === undefined || interactiveIndex === childIndex;
        var layer;

        if (childIndex === guidingIndex) {
          layer = _react.default.createElement(_StyledStack.StyledStackLayer, {
            guiding: true,
            fillContainer: fill,
            interactive: interactive
          }, child);
        } else {
          layer = _react.default.createElement(_StyledStack.StyledStackLayer, {
            anchor: anchor,
            interactive: interactive
          }, child);
        }

        childIndex += 1;
        return layer;
      }

      return child;
    });

    return _react.default.createElement(_StyledStack.StyledStack, _extends({
      fillContainer: fill
    }, rest), styledChildren);
  };

  return Stack;
}(_react.Component);

var StackDoc;

if (true) {
  StackDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Stack/doc.js").doc(Stack); // eslint-disable-line global-require
}

var StackWrapper = StackDoc || Stack;
exports.Stack = StackWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Stack/StyledStack.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Stack/StyledStack.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledStackLayer = exports.StyledStack = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillStyle = "\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n";

var StyledStack = _styledComponents.default.div.withConfig({
  displayName: "StyledStack",
  componentId: "ajspsk-0"
})(["position:relative;", " ", " ", ""], _utils.genericStyles, function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});

exports.StyledStack = StyledStack;
StyledStack.defaultProps = {};
Object.setPrototypeOf(StyledStack.defaultProps, _defaultProps.defaultProps);
var styleMap = {
  fill: "\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",
  center: "\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",
  left: "\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",
  right: "\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",
  top: "\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  bottom: "\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  'top-left': "\n    top: 0;\n    left: 0;\n  ",
  'bottom-left': "\n    bottom: 0;\n    left: 0;\n  ",
  'top-right': "\n    top: 0;\n    right: 0;\n  ",
  'bottom-right': "\n    bottom: 0;\n    right: 0;\n  "
};

var StyledStackLayer = _styledComponents.default.div.withConfig({
  displayName: "StyledStack__StyledStackLayer",
  componentId: "ajspsk-1"
})(["position:", ";", " ", " ", " ", ""], function (props) {
  return props.guiding ? 'relative' : 'absolute';
}, function (props) {
  return props.guiding && 'display: block;';
}, function (props) {
  return !props.guiding && styleMap[props.anchor || 'fill'] + ";";
}, function (props) {
  return props.fillContainer && "\n    width: 100%;\n    height: 100%;\n  ";
}, function (props) {
  return !props.interactive && "pointer-events: none;";
});

exports.StyledStackLayer = StyledStackLayer;
StyledStackLayer.defaultProps = {};
Object.setPrototypeOf(StyledStackLayer.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Stack/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Stack/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Stack) {
  var DocumentedStack = (0, _reactDesc.describe)(Stack).availableAt((0, _utils.getAvailableAtBadge)('Stack')).description("A container that stacks contents on top of each other. One child is\n      designated as the `guidingChild` which determines the size. All\n      other children are placed within that size, either above or below\n      based on their order. Stack is typically used to decorate Meter, Chart,\n      or icons.").usage("import { Stack } from 'grommet';\n<Stack />").intrinsicElement('div');
  DocumentedStack.propTypes = _extends({}, _utils.genericProps, {
    anchor: _reactDesc.PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'bottom-left', 'top-right', 'bottom-right']).description("Where to anchor children from. If not specified, children\n      fill the guiding child's area."),
    fill: _reactDesc.PropTypes.bool.description("Whether to expand to fill\n      all of the available width and height in the parent container.").defaultValue(false),
    guidingChild: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.oneOf(['first', 'last'])]).description("Which child to guide layout from. All other children\n      will be positioned within that area. Defaults to 'first'.").defaultValue('first'),
    interactiveChild: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.oneOf(['first', 'last'])]).description("Which child to restrict user interaction to. All other children\n      will have user interaction disabled.")
  });
  return DocumentedStack;
};

exports.doc = doc;
var themeDoc = {
  'stack.extend': {
    description: 'Any additional style for the control of the Stack component.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Stack/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Stack/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Stack = void 0;

var _Stack = __webpack_require__(/*! ./Stack */ "./node_modules/grommet/components/Stack/Stack.js");

exports.Stack = _Stack.Stack;

/***/ }),

/***/ "./node_modules/grommet/components/Tab/StyledTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/Tab/StyledTab.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledTab = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var tabHoverStyle = (0, _styledComponents.css)(["&:hover{", " ", " ", ";}"], function (props) {
  return props.theme.tab.hover.background && (0, _styledComponents.css)(["background:", ";"], (0, _utils.normalizeColor)(props.theme.tab.hover.background, props.theme));
}, function (props) {
  return props.theme.tab.hover.color && (0, _styledComponents.css)(["color:", ";"], (0, _utils.normalizeColor)(props.theme.tab.hover.color, props.theme));
}, function (props) {
  return props.theme.tab.hover.extend;
});

var StyledTab = _styledComponents.default.div.withConfig({
  displayName: "StyledTab",
  componentId: "sc-1nnwnsb-0"
})(["", " ", " ", ""], _utils.genericStyles, function (props) {
  return !props.plain && props.theme.tab.hover && tabHoverStyle;
}, function (props) {
  return props.theme.tab.extend;
});

exports.StyledTab = StyledTab;
StyledTab.defaultProps = {};
Object.setPrototypeOf(StyledTab.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Tab/Tab.js":
/*!****************************************************!*\
  !*** ./node_modules/grommet/components/Tab/Tab.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tab = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledTab = __webpack_require__(/*! ./StyledTab */ "./node_modules/grommet/components/Tab/StyledTab.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tab =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Tab, _Component);

  function Tab() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (event) {
      var onMouseOver = _this.props.onMouseOver;

      _this.setState({
        over: true
      });

      if (onMouseOver) {
        onMouseOver(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOut", function (event) {
      var onMouseOut = _this.props.onMouseOut;

      _this.setState({
        over: undefined
      });

      if (onMouseOut) {
        onMouseOut(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickTab", function (event) {
      var onActivate = _this.props.onActivate;

      if (event) {
        event.preventDefault();
      }

      onActivate();
    });

    return _this;
  }

  Tab.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var active = nextProps.active;
    var over = prevState.over;

    if (active && over) {
      return {
        over: undefined
      };
    }

    return null;
  };

  var _proto = Tab.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        forwardRef = _this$props.forwardRef,
        plain = _this$props.plain,
        title = _this$props.title,
        onMouseOver = _this$props.onMouseOver,
        onMouseOut = _this$props.onMouseOut,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["active", "forwardRef", "plain", "title", "onMouseOver", "onMouseOut", "theme"]);

    var over = this.state.over;
    delete rest.onActivate;
    var normalizedTitle = title;
    var tabStyles = {};

    if (!plain) {
      if (typeof title !== 'string') {
        normalizedTitle = title;
      } else if (active) {
        normalizedTitle = _react.default.createElement(_Text.Text, theme.tab.active, title);
      } else {
        normalizedTitle = _react.default.createElement(_Text.Text, {
          color: over ? theme.tab.hover.color : theme.tab.color
        }, title);
      }

      if (theme.tab.border) {
        var borderColor = theme.tab.border.color || theme.global.control.border.color;

        if (active) {
          borderColor = theme.tab.border.active.color || borderColor;
        } else if (over) {
          borderColor = theme.tab.border.hover.color || borderColor;
        }

        borderColor = (0, _utils.normalizeColor)(borderColor, theme);
        tabStyles.border = {
          side: theme.tab.border.side,
          size: theme.tab.border.size,
          color: borderColor
        };
      }

      tabStyles.background = active ? theme.tab.active.background || theme.tab.background : theme.tab.background;
      tabStyles.pad = theme.tab.pad;
      tabStyles.margin = theme.tab.margin;
    }

    return _react.default.createElement(_Button.Button, _extends({
      ref: forwardRef,
      plain: true,
      role: "tab",
      "aria-selected": active,
      "aria-expanded": active
    }, rest, {
      onClick: this.onClickTab,
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      onFocus: this.onMouseOver,
      onBlur: this.onMouseOut
    }), _react.default.createElement(_StyledTab.StyledTab, _extends({
      as: _Box.Box,
      plain: plain
    }, tabStyles), normalizedTitle));
  };

  return Tab;
}(_react.Component);

Tab.defaultProps = {};
Object.setPrototypeOf(Tab.defaultProps, _defaultProps.defaultProps);
var TabDoc;

if (true) {
  TabDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Tab/doc.js").doc(Tab); // eslint-disable-line global-require
}

var TabWrapper = (0, _recompose.compose)(_styledComponents.withTheme, _hocs.withForwardRef)(TabDoc || Tab);
exports.Tab = TabWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Tab/doc.js":
/*!****************************************************!*\
  !*** ./node_modules/grommet/components/Tab/doc.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(Tab) {
  var DocumentedTab = (0, _reactDesc.describe)(Tab).description('One tab within Tabs.').usage("import { Tab } from 'grommet';\n<Tab />").intrinsicElement('button');
  DocumentedTab.propTypes = {
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain tab with no style.').defaultValue(false),
    title: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('The title of the tab.')
  };
  return DocumentedTab;
};

exports.doc = doc;
var themeDoc = {
  'tab.active': {
    description: 'styles for the active tab.',
    type: 'object',
    defaultValue: "{color: 'text', background: undefined }"
  },
  'tab.background': {
    description: 'background styling of Tab.',
    type: 'object',
    defaultValue: undefined
  },
  'tab.border': {
    description: 'border styles of the tab',
    type: 'object',
    defaultValue: "{\n      side: 'bottom',\n      size: 'small',\n      color: {\n        dark: 'accent-1',\n        light: 'brand',\n      },\n      active: {\n        color: {\n          dark: 'white',\n          light: 'black',\n        },\n      },\n      hover: {\n        color: {\n          dark: 'white',\n          light: 'black',\n        },\n        // extend: undefined,\n      },\n    }"
  },
  'tab.color': {
    description: 'text color for the Tab.',
    type: 'string',
    defaultValue: 'control'
  },
  'tab.hover.background': {
    description: 'background style of the Tab on hover.',
    type: 'string | object',
    defaultValue: undefined
  },
  'tab.hover.color': {
    description: 'text color of the tab on hover.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'white', light: 'black' }"
  },
  'tab.hover.extend': {
    description: 'Any additional style for Tab hover.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'tab.margin': {
    description: 'The margin of Tab.',
    type: 'string | object',
    defaultValue: "{ vertical: 'xxsmall', horizontal: 'small' }"
  },
  'tab.pad': {
    description: 'The pad of Tab.',
    type: 'string | object',
    defaultValue: "{ bottom: 'xsmall' }"
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Tab/index.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Tab/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tab = void 0;

var _Tab = __webpack_require__(/*! ./Tab */ "./node_modules/grommet/components/Tab/Tab.js");

exports.Tab = _Tab.Tab;

/***/ }),

/***/ "./node_modules/grommet/components/Table/StyledTable.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Table/StyledTable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledTable = exports.StyledTableFooter = exports.StyledTableHeader = exports.StyledTableBody = exports.StyledTableRow = exports.StyledTableDataCaption = exports.StyledTableCell = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var sizeStyle = (0, _styledComponents.css)(["width:", ";max-width:", ";overflow:hidden;"], function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
}, function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
});

var StyledTableCell = _styledComponents.default.td.withConfig({
  displayName: "StyledTable__StyledTableCell",
  componentId: "sc-1m3u5g-0"
})(["margin:0;padding:0;font-weight:inherit;text-align:inherit;height:100%;", " ", " ", ""], function (props) {
  return props.size && sizeStyle;
}, function (props) {
  return props.verticalAlign && "vertical-align: " + props.verticalAlign + ";";
}, function (props) {
  return props.tableContextTheme && props.tableContextTheme.extend;
});

exports.StyledTableCell = StyledTableCell;
StyledTableCell.defaultProps = {};
Object.setPrototypeOf(StyledTableCell.defaultProps, _defaultProps.defaultProps);

var StyledTableDataCaption = _styledComponents.default.caption.withConfig({
  displayName: "StyledTable__StyledTableDataCaption",
  componentId: "sc-1m3u5g-1"
})(["display:none;"]);

exports.StyledTableDataCaption = StyledTableDataCaption;
StyledTableDataCaption.defaultProps = {};
Object.setPrototypeOf(StyledTableDataCaption.defaultProps, _defaultProps.defaultProps);

var StyledTableRow = _styledComponents.default.tr.withConfig({
  displayName: "StyledTable__StyledTableRow",
  componentId: "sc-1m3u5g-2"
})(["height:100%;"]);

exports.StyledTableRow = StyledTableRow;
StyledTableRow.defaultProps = {};
Object.setPrototypeOf(StyledTableRow.defaultProps, _defaultProps.defaultProps);

var StyledTableBody = _styledComponents.default.tbody.withConfig({
  displayName: "StyledTable__StyledTableBody",
  componentId: "sc-1m3u5g-3"
})([""]);

exports.StyledTableBody = StyledTableBody;
StyledTableBody.defaultProps = {};
Object.setPrototypeOf(StyledTableBody.defaultProps, _defaultProps.defaultProps);

var StyledTableHeader = _styledComponents.default.thead.withConfig({
  displayName: "StyledTable__StyledTableHeader",
  componentId: "sc-1m3u5g-4"
})([""]);

exports.StyledTableHeader = StyledTableHeader;
StyledTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledTableHeader.defaultProps, _defaultProps.defaultProps);

var StyledTableFooter = _styledComponents.default.tfoot.withConfig({
  displayName: "StyledTable__StyledTableFooter",
  componentId: "sc-1m3u5g-5"
})([""]);

exports.StyledTableFooter = StyledTableFooter;
StyledTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledTableFooter.defaultProps, _defaultProps.defaultProps);

var StyledTable = _styledComponents.default.table.withConfig({
  displayName: "StyledTable",
  componentId: "sc-1m3u5g-6"
})(["border-spacing:0;border-collapse:collapse;width:inherit;@media all and (min--moz-device-pixel-ratio:0){table-layout:fixed;}", " ", ";"], _utils.genericStyles, function (props) {
  return props.theme.table && props.theme.table.extend;
});

exports.StyledTable = StyledTable;
StyledTable.defaultProps = {};
Object.setPrototypeOf(StyledTable.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Table/Table.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Table/Table.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Table = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledTable = __webpack_require__(/*! ./StyledTable */ "./node_modules/grommet/components/Table/StyledTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Table = function Table(_ref) {
  var caption = _ref.caption,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["caption", "children"]);

  return _react.default.createElement(_StyledTable.StyledTable, rest, caption ? _react.default.createElement(_StyledTable.StyledTableDataCaption, null, caption) : null, children);
};

var TableDoc;

if (true) {
  TableDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Table/doc.js").doc(Table); // eslint-disable-line global-require
}

var TableWrapper = TableDoc || Table;
exports.Table = TableWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Table/TableContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet/components/Table/TableContext.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableContext = _react.default.createContext(undefined);

exports.TableContext = TableContext;

/***/ }),

/***/ "./node_modules/grommet/components/Table/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Table/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _themeDocUtils = __webpack_require__(/*! ../../utils/themeDocUtils */ "./node_modules/grommet/utils/themeDocUtils.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Table) {
  var DocumentedTable = (0, _reactDesc.describe)(Table).availableAt((0, _utils.getAvailableAtBadge)('Table')).description('A table of data organized in cells.').usage("import { Table, TableHeader, TableFooter, TableBody, TableRow } from 'grommet';\n<Table />").intrinsicElement('table');
  DocumentedTable.propTypes = _extends({}, _utils.genericProps, {
    caption: _reactDesc.PropTypes.string.description('One line description.')
  });
  return DocumentedTable;
};

exports.doc = doc;

var themeDoc = _extends({}, _themeDocUtils.themeDocUtils.responsiveBreakpoint('The actual breakpoint to trigger changes in Table.'), {
  'global.size': {
    description: 'The size that impacts max-width and width.',
    defaultValue: "{\n      xxsmall: '48px',\n      xsmall: '96px',\n      small: '192px',\n      medium: '384px',\n      large: '768px',\n      xlarge: '1152px',\n      xxlarge: '1536px',\n      full: '100%',\n      }"
  },
  'table.extend': {
    description: 'Any additional style for Table.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
});

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Table/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Table/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Table = void 0;

var _Table = __webpack_require__(/*! ./Table */ "./node_modules/grommet/components/Table/Table.js");

exports.Table = _Table.Table;

/***/ }),

/***/ "./node_modules/grommet/components/TableBody/TableBody.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/TableBody/TableBody.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableBody = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TableContext = __webpack_require__(/*! ../Table/TableContext */ "./node_modules/grommet/components/Table/TableContext.js");

var _StyledTable = __webpack_require__(/*! ../Table/StyledTable */ "./node_modules/grommet/components/Table/StyledTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(props) {
  return _react.default.createElement(_TableContext.TableContext.Provider, {
    value: "body"
  }, _react.default.createElement(_StyledTable.StyledTableBody, props));
};

var TableBodyDoc;

if (true) {
  TableBodyDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/TableBody/doc.js").doc(TableBody); // eslint-disable-line global-require
}

var TableBodyWrapper = TableBodyDoc || TableBody;
exports.TableBody = TableBodyWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/TableBody/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/TableBody/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(TableBody) {
  var DocumentedTableBody = (0, _reactDesc.describe)(TableBody).description('The body of a table.').usage("import { TableBody } from 'grommet';\n<TableBody />").intrinsicElement('tbody');
  return DocumentedTableBody;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/TableBody/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/TableBody/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableBody = void 0;

var _TableBody = __webpack_require__(/*! ./TableBody */ "./node_modules/grommet/components/TableBody/TableBody.js");

exports.TableBody = _TableBody.TableBody;

/***/ }),

/***/ "./node_modules/grommet/components/TableCell/TableCell.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/TableCell/TableCell.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableCell = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _TableContext = __webpack_require__(/*! ../Table/TableContext */ "./node_modules/grommet/components/Table/TableContext.js");

var _StyledTable = __webpack_require__(/*! ../Table/StyledTable */ "./node_modules/grommet/components/Table/StyledTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      colSpan = _ref.colSpan,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      theme = _ref.theme,
      verticalAlign = _ref.verticalAlign,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "colSpan", "plain", "scope", "size", "theme", "verticalAlign"]);

  return _react.default.createElement(_TableContext.TableContext.Consumer, null, function (tableContext) {
    var tableContextTheme;

    if (tableContext === 'header') {
      tableContextTheme = theme.table && theme.table.header;
    } else if (tableContext === 'footer') {
      tableContextTheme = theme.table && theme.table.footer;
    } else {
      tableContextTheme = theme.table && theme.table.body;
    }

    var boxProps = _extends({}, rest);

    Object.keys(boxProps).forEach(function (key) {
      if (tableContextTheme[key] && boxProps[key] === undefined) {
        delete boxProps[key];
      }
    });
    return _react.default.createElement(_StyledTable.StyledTableCell, _extends({
      as: scope ? 'th' : undefined,
      scope: scope,
      size: size,
      colSpan: colSpan,
      tableContext: tableContext,
      tableContextTheme: tableContextTheme,
      verticalAlign: verticalAlign || (tableContextTheme ? tableContextTheme.verticalAlign : undefined)
    }, plain ? rest : {}), plain ? children : _react.default.createElement(_Box.Box, _extends({}, tableContextTheme, boxProps), children));
  });
};

TableCell.defaultProps = {};
Object.setPrototypeOf(TableCell.defaultProps, _defaultProps.defaultProps);
var TableCellDoc;

if (true) {
  TableCellDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/TableCell/doc.js").doc(TableCell); // eslint-disable-line global-require
}

var TableCellWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(TableCellDoc || TableCell);
exports.TableCell = TableCellWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/TableCell/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/TableCell/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(TableCell) {
  var DocumentedTableCell = (0, _reactDesc.describe)(TableCell).description('A cell of data in a table.').usage("import { TableCell } from 'grommet';\n<TableCell />").intrinsicElement('td');
  DocumentedTableCell.propTypes = {
    plain: _reactDesc.PropTypes.bool.description('Whether default styling context should be removed.').defaultValue(false),
    scope: _reactDesc.PropTypes.oneOf(['col', 'row']).description("For header cells, what scope the header is for.\n        Typically, the cells in a TableHeader have 'col' scope and\n        the primary cell in each row in the TableBody has 'row' scope."),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4']), _reactDesc.PropTypes.string]).description("What size the cell should be. Typically, this is not needed\n      unless you are trying to align multiple tables."),
    verticalAlign: _reactDesc.PropTypes.oneOf(['top', 'middle', 'bottom']).description('How to align the contents vertically.')
  };
  return DocumentedTableCell;
};

exports.doc = doc;
var themeDoc = {
  'table.body.align': {
    description: 'How to align the body inside the Table.',
    type: 'string',
    defaultValue: 'start'
  },
  'table.body.border': {
    description: 'The border side of the body.',
    type: 'string',
    defaultValue: undefined
  },
  'table.body.extend': {
    description: 'Any additional style for Table body.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'table.body.pad': {
    description: 'The padding of the body.',
    type: 'string | object',
    defaultValue: "{ horizontal: 'small', vertical: 'xsmall' }"
  },
  'table.footer.align': {
    description: 'How to align the footer inside the Table.',
    type: 'string',
    defaultValue: 'start'
  },
  'table.footer.border': {
    description: 'The border side of the footer.',
    type: 'string',
    defaultValue: 'top'
  },
  'table.footer.extend': {
    description: 'Any additional style for Table footer.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'table.footer.fill': {
    description: 'Whether the height should fill the footer.',
    type: 'string',
    defaultValue: 'vertical'
  },
  'table.footer.pad': {
    description: 'The padding of the footer.',
    type: 'string | object',
    defaultValue: "{ horizontal: 'small', vertical: 'xsmall' }"
  },
  'table.footer.verticalAlign': {
    description: 'How to align the content vertically.',
    type: 'string',
    defaultValue: 'top'
  },
  'table.header.align': {
    description: 'How to align the header inside the Table.',
    type: 'string',
    defaultValue: 'start'
  },
  'table.header.background': {
    description: 'The background color of the header.',
    type: 'string | object',
    defaultValue: undefined
  },
  'table.header.border': {
    description: 'The border side of the header.',
    type: 'string',
    defaultValue: 'bottom'
  },
  'table.header.fill': {
    description: 'Whether the height should fill the header.',
    type: 'string',
    defaultValue: 'vertical'
  },
  'table.header.extend': {
    description: 'Any additional style for Table header.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'table.header.pad': {
    description: 'The padding of the header.',
    type: 'string | object',
    defaultValue: "{ horizontal: 'small', vertical: 'xsmall' }"
  },
  'table.header.verticalAlign': {
    description: 'How to align the content vertically.',
    type: 'string',
    defaultValue: 'bottom'
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/TableCell/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/TableCell/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableCell = void 0;

var _TableCell = __webpack_require__(/*! ./TableCell */ "./node_modules/grommet/components/TableCell/TableCell.js");

exports.TableCell = _TableCell.TableCell;

/***/ }),

/***/ "./node_modules/grommet/components/TableFooter/TableFooter.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/TableFooter/TableFooter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableFooter = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TableContext = __webpack_require__(/*! ../Table/TableContext */ "./node_modules/grommet/components/Table/TableContext.js");

var _StyledTable = __webpack_require__(/*! ../Table/StyledTable */ "./node_modules/grommet/components/Table/StyledTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableFooter = function TableFooter(props) {
  return _react.default.createElement(_TableContext.TableContext.Provider, {
    value: "footer"
  }, _react.default.createElement(_StyledTable.StyledTableFooter, props));
};

var TableFooterDoc;

if (true) {
  TableFooterDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/TableFooter/doc.js").doc(TableFooter); // eslint-disable-line global-require
}

var TableFooterWrapper = TableFooterDoc || TableFooter;
exports.TableFooter = TableFooterWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/TableFooter/doc.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/TableFooter/doc.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(TableFooter) {
  var DocumentedTableFooter = (0, _reactDesc.describe)(TableFooter).description('The footer of a table.').usage("import { TableFooter } from 'grommet';\n<TableFooter />").intrinsicElement('tfoot');
  return DocumentedTableFooter;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/TableFooter/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/TableFooter/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableFooter = void 0;

var _TableFooter = __webpack_require__(/*! ./TableFooter */ "./node_modules/grommet/components/TableFooter/TableFooter.js");

exports.TableFooter = _TableFooter.TableFooter;

/***/ }),

/***/ "./node_modules/grommet/components/TableHeader/TableHeader.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/TableHeader/TableHeader.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableHeader = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TableContext = __webpack_require__(/*! ../Table/TableContext */ "./node_modules/grommet/components/Table/TableContext.js");

var _StyledTable = __webpack_require__(/*! ../Table/StyledTable */ "./node_modules/grommet/components/Table/StyledTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeader = function TableHeader(props) {
  return _react.default.createElement(_TableContext.TableContext.Provider, {
    value: "header"
  }, _react.default.createElement(_StyledTable.StyledTableHeader, props));
};

var TableHeaderDoc;

if (true) {
  TableHeaderDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/TableHeader/doc.js").doc(TableHeader); // eslint-disable-line global-require
}

var TableHeaderWrapper = TableHeaderDoc || TableHeader;
exports.TableHeader = TableHeaderWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/TableHeader/doc.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/TableHeader/doc.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(TableHeader) {
  var DocumentedTableHeader = (0, _reactDesc.describe)(TableHeader).description('The header of a table.').usage("import { TableHeader } from 'grommet';\n<TableHeader />").intrinsicElement('thead');
  return DocumentedTableHeader;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/TableHeader/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/TableHeader/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableHeader = void 0;

var _TableHeader = __webpack_require__(/*! ./TableHeader */ "./node_modules/grommet/components/TableHeader/TableHeader.js");

exports.TableHeader = _TableHeader.TableHeader;

/***/ }),

/***/ "./node_modules/grommet/components/TableRow/TableRow.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/TableRow/TableRow.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableRow = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledTable = __webpack_require__(/*! ../Table/StyledTable */ "./node_modules/grommet/components/Table/StyledTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(props) {
  return _react.default.createElement(_StyledTable.StyledTableRow, props);
};

var TableRowDoc;

if (true) {
  TableRowDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/TableRow/doc.js").doc(TableRow); // eslint-disable-line global-require
}

var TableRowWrapper = TableRowDoc || TableRow;
exports.TableRow = TableRowWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/TableRow/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/TableRow/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var doc = function doc(TableRow) {
  var DocumentedTableRow = (0, _reactDesc.describe)(TableRow).description('A row of cells in a table.').usage("import { TableRow } from 'grommet';\n<TableRow />").intrinsicElement('tr');
  return DocumentedTableRow;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/TableRow/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/TableRow/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TableRow = void 0;

var _TableRow = __webpack_require__(/*! ./TableRow */ "./node_modules/grommet/components/TableRow/TableRow.js");

exports.TableRow = _TableRow.TableRow;

/***/ }),

/***/ "./node_modules/grommet/components/Tabs/StyledTabs.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Tabs/StyledTabs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledTabs = exports.StyledTabPanel = exports.StyledTabsHeader = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _FLEX_MAP;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var StyledTabsHeader = _styledComponents.default.div.withConfig({
  displayName: "StyledTabs__StyledTabsHeader",
  componentId: "a4fwxl-0"
})(["", ";"], function (props) {
  return props.theme.tabs.header.extend;
});

exports.StyledTabsHeader = StyledTabsHeader;
StyledTabsHeader.defaultProps = {};
Object.setPrototypeOf(StyledTabsHeader.defaultProps, _defaultProps.defaultProps);
var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);
var flexStyle = (0, _styledComponents.css)(["flex:", ";"], function (props) {
  return "" + FLEX_MAP[props.flex] + (props.flex !== true ? ' auto' : '');
});

var StyledTabPanel = _styledComponents.default.div.withConfig({
  displayName: "StyledTabs__StyledTabPanel",
  componentId: "a4fwxl-1"
})(["min-height:0;", " ", ";"], function (props) {
  return props.flex && flexStyle;
}, function (props) {
  return props.theme.tabs.panel.extend;
});

exports.StyledTabPanel = StyledTabPanel;
StyledTabPanel.defaultProps = {};
Object.setPrototypeOf(StyledTabPanel.defaultProps, _defaultProps.defaultProps);

var StyledTabs = _styledComponents.default.div.withConfig({
  displayName: "StyledTabs",
  componentId: "a4fwxl-2"
})(["", " ", ";"], _utils.genericStyles, function (props) {
  return props.theme.tabs.extend;
});

exports.StyledTabs = StyledTabs;
StyledTabs.defaultProps = {};
Object.setPrototypeOf(StyledTabs.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Tabs/Tabs.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Tabs/Tabs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tabs = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _StyledTabs = __webpack_require__(/*! ./StyledTabs */ "./node_modules/grommet/components/Tabs/StyledTabs.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Tabs, _Component);

  function Tabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "activateTab", function (index) {
      var _this$props = _this.props,
          activeIndex = _this$props.activeIndex,
          onActive = _this$props.onActive;

      if (activeIndex === undefined) {
        _this.setState({
          activeIndex: index
        });
      }

      if (onActive) {
        onActive(index);
      }
    });

    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var activeIndex = nextProps.activeIndex;
    var stateActiveIndex = prevState.activeIndex;

    if (stateActiveIndex !== activeIndex && activeIndex !== undefined) {
      return {
        activeIndex: activeIndex
      };
    }

    return {
      activeIndex: stateActiveIndex || 0
    };
  };

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        flex = _this$props2.flex,
        justify = _this$props2.justify,
        tabContents = _this$props2.messages.tabContents,
        theme = _this$props2.theme,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["children", "flex", "justify", "messages", "theme"]);

    delete rest.activeIndex;
    delete rest.onActive;
    var activeIndex = this.state.activeIndex;
    var activeContent;
    var activeTitle;

    var tabs = _react.Children.map(children, function (tab, index) {
      if (!tab) return undefined;
      var tabProps = tab.props || {};
      var isTabActive = index === activeIndex;

      if (isTabActive) {
        activeContent = tabProps.children;

        if (typeof tabProps.title === 'string') {
          activeTitle = tabProps.title;
        } else {
          activeTitle = index + 1;
        }
      }

      return (0, _react.cloneElement)(tab, {
        active: isTabActive,
        onActivate: function onActivate() {
          return _this2.activateTab(index);
        }
      });
    }, this);

    var tabContentTitle = (activeTitle || '') + " " + tabContents;
    return _react.default.createElement(_StyledTabs.StyledTabs, _extends({
      as: _Box.Box,
      role: "tablist",
      flex: flex
    }, rest, {
      background: theme.tabs.background
    }), _react.default.createElement(_StyledTabs.StyledTabsHeader, {
      as: _Box.Box,
      direction: "row",
      justify: justify,
      flex: false,
      wrap: true,
      background: theme.tabs.header.background,
      gap: theme.tabs.gap
    }, tabs), _react.default.createElement(_StyledTabs.StyledTabPanel, {
      flex: flex,
      "aria-label": tabContentTitle,
      role: "tabpanel"
    }, activeContent));
  };

  return Tabs;
}(_react.Component);

_defineProperty(Tabs, "defaultProps", {
  justify: 'center',
  messages: {
    tabContents: 'Tab Contents'
  },
  responsive: true
});

Object.setPrototypeOf(Tabs.defaultProps, _defaultProps.defaultProps);
var TabsDoc;

if (true) {
  TabsDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Tabs/doc.js").doc(Tabs); // eslint-disable-line global-require
}

var TabsWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(TabsDoc || Tabs);
exports.Tabs = TabsWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Tabs/doc.js":
/*!*****************************************************!*\
  !*** ./node_modules/grommet/components/Tabs/doc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Tabs) {
  var DocumentedTabs = (0, _reactDesc.describe)(Tabs).availableAt((0, _utils.getAvailableAtBadge)('Tabs')).description('A container with controls to show one Tab at a time.').usage("import { Tabs, Tab } from 'grommet';\n<Tabs>\n  <Tab title='Tab 1'>...</Tab>\n  <Tab title='Tab 2'>...</Tab>\n</Tabs>").intrinsicElement('div');
  DocumentedTabs.propTypes = _extends({}, _utils.genericProps, {
    activeIndex: _reactDesc.PropTypes.number.description("Active tab index. If specified, Tabs will be a controlled component.\nThis means that future tab changes will not work unless you subscribe to\nonActive function and update activeIndex accordingly."),
    children: _reactDesc.PropTypes.node.description('Array of Tab.').isRequired,
    flex: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['grow', 'shrink']), _reactDesc.PropTypes.bool]).description('Whether flex-grow and/or flex-shrink is true.'),
    justify: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the tabs along the main axis.').defaultValue('center'),
    messages: _reactDesc.PropTypes.shape({
      tabContents: _reactDesc.PropTypes.string
    }).description('Custom messages for Tabs. Used for accessibility by screen readers.').defaultValue({
      tabContents: 'Tab Contents'
    }),
    onActive: _reactDesc.PropTypes.func.description("Function that will be called with the active tab index when the\ncurrently active tab changes.")
  });
  return DocumentedTabs;
};

exports.doc = doc;
var themeDoc = {
  'global.borderSize': {
    description: 'The size of the border.',
    type: 'string',
    defaultValue: "{\n      xsmall: '1px',\n      small: '2px',\n      medium: '4px',\n      large: '12px',\n      xlarge: '24px,\n    }"
  },
  'global.colors.border': {
    description: 'The color of tabs border.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: rgba(255, 255, 255, 0.33), light: rgba(0, 0, 0, 0.33) }'
  },
  'global.edgeSize.small': {
    description: 'The possible sizes for margin, pad and gap.',
    type: 'string',
    defaultValue: '6px'
  },
  'tabs.background': {
    description: 'background styling of Tabs.',
    type: 'string | object',
    defaultValue: undefined
  },
  'tabs.extend': {
    description: 'Any additional style for Tabs.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'tabs.gap': {
    description: 'The gap size between the Tabs.',
    type: 'string',
    defaultValue: undefined
  },
  'tabs.header.background': {
    description: 'The background styles of Tabs header.',
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined
  },
  'tabs.header.extend': {
    description: 'Any additional style for Tabs header.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'tabs.panel.extend': {
    description: 'Any additional style for Tabs panel.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Tabs/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Tabs/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tabs = void 0;

var _Tabs = __webpack_require__(/*! ./Tabs */ "./node_modules/grommet/components/Tabs/Tabs.js");

exports.Tabs = _Tabs.Tabs;

/***/ }),

/***/ "./node_modules/grommet/components/Text/StyledText.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/Text/StyledText.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledText = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.text[size];

  if (data) {
    return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
  }

  return (0, _styledComponents.css)(["font-size:", ";line-height:normal;"], size);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle = (0, _styledComponents.css)(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});
var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return (0, _utils.normalizeColor)(props.colorProp, props.theme);
});
var weightStyle = (0, _styledComponents.css)(["font-weight:", ";"], function (props) {
  return props.weight;
});

var StyledText = _styledComponents.default.span.withConfig({
  displayName: "StyledText",
  componentId: "sc-1sadyjn-0"
})(["", " ", " ", " ", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.weight && weightStyle;
}, function (props) {
  return props.theme.text && props.theme.text.extend;
});

exports.StyledText = StyledText;
StyledText.defaultProps = {};
Object.setPrototypeOf(StyledText.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Text/Text.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Text/Text.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Text = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledText = __webpack_require__(/*! ./StyledText */ "./node_modules/grommet/components/Text/StyledText.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var color = _ref.color,
      tag = _ref.tag,
      as = _ref.as,
      rest = _objectWithoutPropertiesLoose(_ref, ["color", "tag", "as"]);

  return _react.default.createElement(_StyledText.StyledText, _extends({
    as: !as && tag ? tag : as,
    colorProp: color
  }, rest));
};

Text.defaultProps = {
  level: 1
};
var TextDoc;

if (true) {
  TextDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Text/doc.js").doc(Text); // eslint-disable-line global-require
}

var TextWrapper = TextDoc || Text;
exports.Text = TextWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Text/doc.js":
/*!*****************************************************!*\
  !*** ./node_modules/grommet/components/Text/doc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Text) {
  var DocumentedText = (0, _reactDesc.describe)(Text).availableAt((0, _utils.getAvailableAtBadge)('Text')).description('Arbitrary text.').usage("import { Text } from 'grommet';\n<Text />").intrinsicElement('span');
  DocumentedText.propTypes = _extends({}, _utils.genericProps, {
    color: _utils.colorPropType.description('A color identifier to use for the text color.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description("The font size and line height are primarily driven by the chosen tag. But, it can\nbe adjusted via this size property. The tag should be set for semantic\ncorrectness and accessibility. This size property allows for stylistic\nadjustments."),
    tag: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("The DOM tag to use for the element. NOTE: This is deprecated in favor\n         of indicating the DOM tag via the 'as' property."),
    as: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description("The DOM tag or react component to use for the element.").defaultValue('span'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the component.').defaultValue('start'),
    truncate: _reactDesc.PropTypes.bool.description("Restrict the text to a single line and truncate with ellipsis if it\nis too long to all fit.").defaultValue(false),
    weight: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['normal', 'bold']), _reactDesc.PropTypes.number]).description('Font weight')
  });
  return DocumentedText;
};

exports.doc = doc;

var themeDoc = _extends({
  'global.colors.text': {
    description: 'The text color used for Text.',
    type: 'object | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }"
  },
  text: {
    description: "The possible sizes of the text in terms of its font-size and line-height.",
    type: 'object',
    defaultValue: "{\n      xsmall: {\n        size: '12px',\n        height: '18px',\n       },\n      small: {\n        size: '14px',\n        height: '20px',\n       },\n      medium: {\n        size: '18px',\n        height: '24px',\n      },\n      large: {\n        size: '22px',\n        height: '28px',\n      },\n      xlarge: {\n        size: '26px',\n        height: '32px',\n      },\n      xxlarge: {\n        size: '34px',\n        height: '40px',\n      },\n    }"
  },
  'text.extend': {
    description: 'Any additional style for Text.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
}, _utils.themeDocUtils.edgeStyle('The possible sizes for margin.'));

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Text/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet/components/Text/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Text = void 0;

var _Text = __webpack_require__(/*! ./Text */ "./node_modules/grommet/components/Text/Text.js");

exports.Text = _Text.Text;

/***/ }),

/***/ "./node_modules/grommet/components/TextArea/StyledTextArea.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/TextArea/StyledTextArea.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledTextArea = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var plainStyle = (0, _styledComponents.css)(["border:none;width:100%;-webkit-appearance:none;"]);

var resizeStyle = function resizeStyle(resize) {
  if (resize === 'horizontal') {
    return 'resize: horizontal;';
  }

  if (resize === 'vertical') {
    return 'resize: vertical;';
  }

  if (resize) {
    return 'resize: both;';
  }

  return 'resize: none;';
};

var StyledTextArea = _styledComponents.default.textarea.withConfig({
  displayName: "StyledTextArea",
  componentId: "sc-17i3mwp-0"
})(["", " width:100%;", " ", " ", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", ";"], _utils.inputStyle, function (props) {
  return props.resize !== undefined && resizeStyle(props.resize);
}, function (props) {
  return props.fillArg && 'height: 100%;';
}, function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return props.disabled && (0, _utils.disabledStyle)(props.theme.textArea.disabled && props.theme.textArea.disabled.opacity);
}, _utils.placeholderStyle, function (props) {
  return props.focus && !props.plain && _utils.focusStyle;
}, function (props) {
  return props.theme.textArea && props.theme.textArea.extend;
});

exports.StyledTextArea = StyledTextArea;
StyledTextArea.defaultProps = {};
Object.setPrototypeOf(StyledTextArea.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/TextArea/TextArea.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/TextArea/TextArea.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TextArea = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledTextArea = __webpack_require__(/*! ./StyledTextArea */ "./node_modules/grommet/components/TextArea/StyledTextArea.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextArea =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TextArea, _Component);

  function TextArea() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (event) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    });

    return _this;
  }

  var _proto = TextArea.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fill = _this$props.fill,
        forwardRef = _this$props.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props, ["fill", "forwardRef"]);

    return _react.default.createElement(_Keyboard.Keyboard, {
      onEsc: this.onEsc
    }, _react.default.createElement(_StyledTextArea.StyledTextArea, _extends({
      ref: forwardRef,
      fillArg: fill
    }, rest)));
  };

  return TextArea;
}(_react.Component);

var TextAreaDoc;

if (true) {
  TextAreaDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/TextArea/doc.js").doc(TextArea); // eslint-disable-line global-require
}

var TextAreaWrapper = (0, _recompose.compose)((0, _hocs.withFocus)({
  focusWithMouse: true
}), _hocs.withForwardRef)(TextAreaDoc || TextArea);
exports.TextArea = TextAreaWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/TextArea/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/TextArea/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(TextArea) {
  var DocumentedTextArea = (0, _reactDesc.describe)(TextArea).availableAt((0, _utils.getAvailableAtBadge)('TextArea')).description('A control to input multiple lines of text.').usage("import { TextArea } from 'grommet';\n<TextArea id='item' name='item' />").intrinsicElement('textarea');
  DocumentedTextArea.propTypes = {
    id: _reactDesc.PropTypes.string.description('The id attribute of the textarea.'),
    fill: _reactDesc.PropTypes.bool.description('Whether the width and height should fill the container.').defaultValue(false),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether the plain textarea should receive a focus outline.'),
    name: _reactDesc.PropTypes.string.description('The name attribute of the textarea.'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user types in the textarea.'),
    placeholder: _reactDesc.PropTypes.string.description('Placeholder text to use when no value is provided.'),
    plain: _reactDesc.PropTypes.bool.description("Whether this is a plain textarea with no border or padding.\nOnly use this when the containing context provides sufficient affordance."),
    value: _reactDesc.PropTypes.string.description('What text to put in the textarea.'),
    resize: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['vertical', 'horizontal']), _reactDesc.PropTypes.bool]).description('Whether user is allowed to resize the textarea.').defaultValue(true)
  };
  return DocumentedTextArea;
};

exports.doc = doc;

var themeDoc = _extends({
  'global.colors.border': {
    description: 'The color of the border.',
    type: 'string | { dark: string, light: string }',
    defaultValue: {
      dark: 'rgba(255, 255, 255, 0.33)',
      light: 'rgba(0, 0, 0, 0.33)'
    }
  },
  'global.control.border.color': {
    description: 'The border color.',
    type: 'string',
    defaultValue: 'border'
  },
  'global.control.border.radius': {
    description: 'The border radius.',
    type: 'string',
    defaultValue: '4px'
  },
  'global.control.border.width': {
    description: 'The border width.',
    type: 'string',
    defaultValue: '1px'
  },
  'textArea.extend': {
    description: 'Any additional style for Text.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'textArea.disabled.opacity': {
    description: 'The opacity when the textArea is disabled.',
    type: 'number',
    defaultValue: 0.3
  }
}, _utils.themeDocUtils.focusStyle, _utils.themeDocUtils.placeholderStyle, _utils.themeDocUtils.inputStyle, _utils.themeDocUtils.disabledStyle);

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/TextArea/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/TextArea/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TextArea = void 0;

var _TextArea = __webpack_require__(/*! ./TextArea */ "./node_modules/grommet/components/TextArea/TextArea.js");

exports.TextArea = _TextArea.TextArea;

/***/ }),

/***/ "./node_modules/grommet/components/TextInput/StyledTextInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet/components/TextInput/StyledTextInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledSuggestions = exports.StyledPlaceholder = exports.StyledTextInputContainer = exports.StyledTextInput = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle = (0, _styledComponents.css)(["border:none;"]);

var StyledTextInput = _styledComponents.default.input.withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-1x30a0s-0"
})(["", " width:100%;", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", " ", ";"], _utils.inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, _utils.placeholderStyle, function (props) {
  return props.focus && !props.plain && _utils.focusStyle;
}, function (props) {
  return props.disabled && (0, _utils.disabledStyle)(props.theme.textInput.disabled && props.theme.textInput.disabled.opacity);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});

exports.StyledTextInput = StyledTextInput;
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, _defaultProps.defaultProps);

var StyledTextInputContainer = _styledComponents.default.div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "sc-1x30a0s-1"
})(["position:relative;width:100%;"]);

exports.StyledTextInputContainer = StyledTextInputContainer;
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, _defaultProps.defaultProps);

var StyledPlaceholder = _styledComponents.default.div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "sc-1x30a0s-2"
})(["position:absolute;left:", "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;", ";"], function (props) {
  return (0, _utils.parseMetricToNum)(props.theme.global.input.padding) - (0, _utils.parseMetricToNum)(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.placeholder && props.theme.textInput.placeholder.extend;
});

exports.StyledPlaceholder = StyledPlaceholder;
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, _defaultProps.defaultProps);

var StyledSuggestions = _styledComponents.default.ol.withConfig({
  displayName: "StyledTextInput__StyledSuggestions",
  componentId: "sc-1x30a0s-3"
})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.suggestions && props.theme.textInput.suggestions.extend;
});

exports.StyledSuggestions = StyledSuggestions;
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/TextInput/TextInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/components/TextInput/TextInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TextInput = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _grommetStyles = __webpack_require__(/*! grommet-styles */ "./node_modules/grommet-styles/es6/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Drop = __webpack_require__(/*! ../Drop */ "./node_modules/grommet/components/Drop/index.js");

var _InfiniteScroll = __webpack_require__(/*! ../InfiniteScroll */ "./node_modules/grommet/components/InfiniteScroll/index.js");

var _Keyboard = __webpack_require__(/*! ../Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledTextInput = __webpack_require__(/*! ./StyledTextInput */ "./node_modules/grommet/components/TextInput/StyledTextInput.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    return suggestion.label || suggestion.value;
  }

  return suggestion;
}

function stringLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    if (suggestion.label && typeof suggestion.label === 'string') {
      return suggestion.label;
    }

    return suggestion.value;
  }

  return suggestion;
}

var ContainerBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "TextInput__ContainerBox",
  componentId: "sc-1ai0c08-0"
})(["", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"], function (props) {
  return props.dropHeight ? (0, _grommetStyles.sizeStyle)('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
});

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TextInput, _Component);

  function TextInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeSuggestionIndex: -1,
      showDrop: false
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "announce", function (message, mode) {
      var _this$props = _this.props,
          announce = _this$props.announce,
          suggestions = _this$props.suggestions;

      if (suggestions && suggestions.length > 0) {
        announce(message, mode);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "announceSuggestionsCount", function () {
      var _this$props2 = _this.props,
          suggestions = _this$props2.suggestions,
          suggestionsCount = _this$props2.messages.suggestionsCount;

      _this.announce(suggestions.length + " " + suggestionsCount);
    });

    _defineProperty(_assertThisInitialized(_this), "announceSuggestionsExist", function () {
      var suggestionsExist = _this.props.messages.suggestionsExist;

      _this.announce(suggestionsExist);
    });

    _defineProperty(_assertThisInitialized(_this), "announceSuggestionsIsOpen", function () {
      var suggestionIsOpen = _this.props.messages.suggestionIsOpen;

      _this.announce(suggestionIsOpen);
    });

    _defineProperty(_assertThisInitialized(_this), "announceSuggestion", function (index) {
      var _this$props3 = _this.props,
          suggestions = _this$props3.suggestions,
          enterSelect = _this$props3.messages.enterSelect;

      if (suggestions && suggestions.length > 0) {
        var labelMessage = stringLabel(suggestions[index]);

        _this.announce(labelMessage + " " + enterSelect);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetSuggestions", function () {
      // delay this to avoid re-render interupting event delivery
      // https://github.com/grommet/grommet/issues/2154
      // 10ms was chosen empirically based on ie11 using TextInput
      // with and without a FormField.
      clearTimeout(_this.resetTimer);
      _this.resetTimer = setTimeout(function () {
        var suggestions = _this.props.suggestions;

        if (suggestions && suggestions.length) {
          _this.setState({
            activeSuggestionIndex: -1,
            showDrop: true,
            selectedSuggestionIndex: -1
          }, _this.announceSuggestionsCount);
        }
      }, 10);
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedSuggestionIndex", function () {
      var _this$props4 = _this.props,
          suggestions = _this$props4.suggestions,
          value = _this$props4.value;
      var suggestionValues = suggestions.map(function (suggestion) {
        if (typeof suggestion === 'object') {
          return suggestion.value;
        }

        return suggestion;
      });
      return suggestionValues.indexOf(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onShowSuggestions", function () {
      // Get values of suggestions, so we can highlight selected suggestion
      var selectedSuggestionIndex = _this.getSelectedSuggestionIndex();

      _this.setState({
        showDrop: true,
        activeSuggestionIndex: -1,
        selectedSuggestionIndex: selectedSuggestionIndex
      }, _this.announceSuggestionsIsOpen);
    });

    _defineProperty(_assertThisInitialized(_this), "onNextSuggestion", function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state = _this.state,
          activeSuggestionIndex = _this$state.activeSuggestionIndex,
          showDrop = _this$state.showDrop;

      if (suggestions && suggestions.length > 0) {
        if (!showDrop) {
          _this.onShowSuggestions();
        } else {
          event.preventDefault();
          var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);

          _this.setState({
            activeSuggestionIndex: index
          }, function () {
            return _this.announceSuggestion(index);
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviousSuggestion", function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state2 = _this.state,
          activeSuggestionIndex = _this$state2.activeSuggestionIndex,
          showDrop = _this$state2.showDrop;

      if (suggestions && suggestions.length > 0 && showDrop) {
        event.preventDefault();
        var index = Math.max(activeSuggestionIndex - 1, 0);

        _this.setState({
          activeSuggestionIndex: index
        }, function () {
          return _this.announceSuggestion(index);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickSuggestion", function (suggestion) {
      var _this$props5 = _this.props,
          forwardRef = _this$props5.forwardRef,
          onSelect = _this$props5.onSelect;

      _this.setState({
        showDrop: false
      });

      if (onSelect) {
        onSelect({
          target: (forwardRef || _this.inputRef).current,
          suggestion: suggestion
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionSelect", function (event) {
      var _this$props6 = _this.props,
          forwardRef = _this$props6.forwardRef,
          onSelect = _this$props6.onSelect,
          suggestions = _this$props6.suggestions;
      var activeSuggestionIndex = _this.state.activeSuggestionIndex;

      _this.setState({
        showDrop: false
      });

      if (activeSuggestionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms

        var suggestion = suggestions[activeSuggestionIndex];

        if (onSelect) {
          onSelect({
            target: (forwardRef || _this.inputRef).current,
            suggestion: suggestion
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var _this$props7 = _this.props,
          onFocus = _this$props7.onFocus,
          suggestions = _this$props7.suggestions;

      if (suggestions && suggestions.length > 0) {
        _this.announceSuggestionsExist();
      }

      _this.resetSuggestions();

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      var onBlur = _this.props.onBlur;
      clearTimeout(_this.resetTimer);

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var onChange = _this.props.onChange;

      _this.resetSuggestions();

      if (onChange) {
        onChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (event) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      _this.setState({
        showDrop: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTab", function () {
      _this.setState({
        showDrop: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestions", function () {
      var _this$props8 = _this.props,
          suggestions = _this$props8.suggestions,
          theme = _this$props8.theme;
      var _this$state3 = _this.state,
          activeSuggestionIndex = _this$state3.activeSuggestionIndex,
          selectedSuggestionIndex = _this$state3.selectedSuggestionIndex;
      return _react.default.createElement(_StyledTextInput.StyledSuggestions, null, _react.default.createElement(_InfiniteScroll.InfiniteScroll, {
        items: suggestions,
        step: theme.select.step
      }, function (suggestion, index) {
        var plain = typeof suggestion === 'object' && typeof (0, _react.isValidElement)(suggestion.label);
        return _react.default.createElement("li", {
          key: stringLabel(suggestion) + "-" + index
        }, _react.default.createElement(_Button.Button, {
          active: activeSuggestionIndex === index || selectedSuggestionIndex === index,
          fill: true,
          hoverIndicator: "background",
          onClick: function onClick() {
            return _this.onClickSuggestion(suggestion);
          }
        }, plain ? renderLabel(suggestion) : _react.default.createElement(_Box.Box, {
          align: "start",
          pad: "small"
        }, renderLabel(suggestion))));
      }));
    });

    return _this;
  }

  TextInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var suggestions = nextProps.suggestions;
    var showDrop = prevState.showDrop;

    if (showDrop && (!suggestions || !suggestions.length)) {
      return {
        showDrop: false
      };
    }

    return null;
  };

  var _proto = TextInput.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props9 = this.props,
        onSuggestionsOpen = _this$props9.onSuggestionsOpen,
        onSuggestionsClose = _this$props9.onSuggestionsClose,
        suggestions = _this$props9.suggestions;
    var showDrop = this.state.showDrop;

    if (showDrop !== prevState.showDrop) {
      if (showDrop && onSuggestionsOpen) {
        onSuggestionsOpen();
      } else if (onSuggestionsClose) {
        onSuggestionsClose();
      }
    }

    if (!showDrop && suggestions && (!prevProps.suggestions || !prevProps.suggestions.length)) {
      this.resetSuggestions();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.resetTimer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props10 = this.props,
        defaultValue = _this$props10.defaultValue,
        dropAlign = _this$props10.dropAlign,
        dropHeight = _this$props10.dropHeight,
        dropTarget = _this$props10.dropTarget,
        dropProps = _this$props10.dropProps,
        forwardRef = _this$props10.forwardRef,
        id = _this$props10.id,
        placeholder = _this$props10.placeholder,
        plain = _this$props10.plain,
        theme = _this$props10.theme,
        value = _this$props10.value,
        onKeyDown = _this$props10.onKeyDown,
        rest = _objectWithoutPropertiesLoose(_this$props10, ["defaultValue", "dropAlign", "dropHeight", "dropTarget", "dropProps", "forwardRef", "id", "placeholder", "plain", "theme", "value", "onKeyDown"]);

    delete rest.onChange; // se we can manage in this.onChange()

    delete rest.onSuggestionsOpen;
    delete rest.onSuggestionsClose;
    var showDrop = this.state.showDrop; // needed so that styled components does not invoke
    // onSelect when text input is clicked

    delete rest.onSelect;
    var drop;

    if (showDrop) {
      drop = _react.default.createElement(_Drop.Drop, _extends({
        id: id ? "text-input-drop__" + id : undefined,
        align: dropAlign,
        responsive: false,
        target: dropTarget || (forwardRef || this.inputRef).current,
        onClickOutside: function onClickOutside() {
          return _this2.setState({
            showDrop: false
          });
        },
        onEsc: function onEsc() {
          return _this2.setState({
            showDrop: false
          });
        }
      }, dropProps), _react.default.createElement(ContainerBox, {
        overflow: "auto",
        dropHeight: dropHeight
      }, this.renderSuggestions()));
    }

    return _react.default.createElement(_StyledTextInput.StyledTextInputContainer, {
      plain: plain
    }, placeholder && typeof placeholder !== 'string' && !value ? _react.default.createElement(_StyledTextInput.StyledPlaceholder, null, placeholder) : null, _react.default.createElement(_Keyboard.Keyboard, {
      onEnter: this.onSuggestionSelect,
      onEsc: this.onEsc,
      onTab: this.onTab,
      onUp: this.onPreviousSuggestion,
      onDown: this.onNextSuggestion,
      onKeyDown: onKeyDown
    }, _react.default.createElement(_StyledTextInput.StyledTextInput, _extends({
      id: id,
      ref: forwardRef || this.inputRef,
      autoComplete: "off",
      plain: plain,
      placeholder: typeof placeholder === 'string' ? placeholder : undefined
    }, rest, {
      defaultValue: renderLabel(defaultValue),
      value: renderLabel(value),
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }))), drop);
  };

  return TextInput;
}(_react.Component);

_defineProperty(TextInput, "defaultProps", {
  dropAlign: {
    top: 'bottom',
    left: 'left'
  },
  messages: {
    enterSelect: '(Press Enter to Select)',
    suggestionsCount: 'suggestions available',
    suggestionsExist: 'This input has suggestions use arrow keys to navigate',
    suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
  }
});

Object.setPrototypeOf(TextInput.defaultProps, _defaultProps.defaultProps);
var TextInputDoc;

if (true) {
  TextInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/TextInput/doc.js").doc(TextInput); // eslint-disable-line global-require
}

var TextInputWrapper = (0, _recompose.compose)((0, _hocs.withFocus)({
  focusWithMouse: true
}), _styledComponents.withTheme, _hocs.withAnnounce, _hocs.withForwardRef)(TextInputDoc || TextInput);
exports.TextInput = TextInputWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/TextInput/doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet/components/TextInput/doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(TextInput) {
  var DocumentedTextInput = (0, _reactDesc.describe)(TextInput).availableAt((0, _utils.getAvailableAtBadge)('TextInput')).description('A control to input a single line of text, with optional suggestions.').usage("import { TextInput } from 'grommet';\n<TextInput id='item' name='item' />").intrinsicElement('input');
  DocumentedTextInput.propTypes = {
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop.').defaultValue({
      top: 'bottom',
      left: 'left'
    }),
    dropHeight: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The height of the drop container.'),
    dropTarget: _reactDesc.PropTypes.object.description("Target where any suggestions drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the TextInput itself by default."),
    dropProps: _reactDesc.PropTypes.object.description('Any valid Drop prop.'),
    id: _reactDesc.PropTypes.string.description('The id attribute of the input.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether the plain text input should receive a focus outline.'),
    messages: _reactDesc.PropTypes.shape({
      enterSelect: _reactDesc.PropTypes.string,
      suggestionsCount: _reactDesc.PropTypes.string,
      suggestionsExist: _reactDesc.PropTypes.string,
      suggestionIsOpen: _reactDesc.PropTypes.string
    }).description('Custom messages for TextInput. Used for accessibility by screen readers.').defaultValue({
      enterSelect: '(Press Enter to Select)',
      suggestionsCount: 'suggestions available',
      suggestionsExist: 'This input has suggestions use arrow keys to navigate',
      suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
    }),
    name: _reactDesc.PropTypes.string.description('The name attribute of the input.'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user types in the input.'),
    onSelect: _reactDesc.PropTypes.func.description("Function that will be called when the user selects a suggestion.\nThe suggestion contains the object chosen from the supplied suggestions."),
    onSuggestionsOpen: _reactDesc.PropTypes.func.description('Function that will be called when the suggestions drop is opened.'),
    onSuggestionsClose: _reactDesc.PropTypes.func.description('Function that will be called when the suggestions drop is closed.'),
    placeholder: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Placeholder to use when no value is provided.'),
    plain: _reactDesc.PropTypes.bool.description("Whether this is a plain input with no border or padding.\nOnly use this when the containing context provides sufficient affordance"),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the TextInput.'),
    suggestions: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.shape({
      label: _reactDesc.PropTypes.node,
      value: _reactDesc.PropTypes.any
    }), _reactDesc.PropTypes.string])).description("Suggestions to show. It is recommended to avoid showing too many\nsuggestions and instead rely on the user to type more."),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.number]).description('What text to put in the input.')
  };
  return DocumentedTextInput;
};

exports.doc = doc;

var themeDoc = _extends({
  'global.colors.border': {
    description: 'The color of the border.',
    type: 'object',
    defaultValue: {
      dark: 'rgba(255, 255, 255, 0.33)',
      light: 'rgba(0, 0, 0, 0.33)'
    }
  },
  'global.control.border.color': {
    description: 'The border color.',
    type: 'string',
    defaultValue: 'border'
  },
  'global.control.border.radius': {
    description: 'The border radius.',
    type: 'string',
    defaultValue: '4px'
  },
  'global.control.border.width': {
    description: 'The border width.',
    type: 'string',
    defaultValue: '1px'
  },
  'select.step': {
    description: 'How many suggestions to render at a time.',
    type: 'number',
    defaultValue: 20
  },
  text: {
    description: "The possible sizes of the text in terms of its font-size and line-height.",
    type: 'object',
    defaultValue: "{\n      xsmall: {\n        size: '12px',\n        height: '18px',\n       },\n      small: {\n        size: '14px',\n        height: '20px',\n       },\n      medium: {\n        size: '18px',\n        height: '24px',\n      },\n      large: {\n        size: '22px',\n        height: '28px',\n      },\n      xlarge: {\n        size: '26px',\n        height: '32px',\n      },\n      xxlarge: {\n        size: '34px',\n        height: '40px',\n      },\n    }"
  },
  'textInput.extend': {
    description: 'Any additional style for TextInput.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'textInput.placeholder.extend': {
    description: 'Any additional style for non-string placeholder inside TextInput.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'textInput.suggestions.extend': {
    description: 'Any additional style for TextInput suggestions.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'textInput.disabled.opacity': {
    description: 'The opacity when the textInput is disabled.',
    type: 'number',
    defaultValue: 0.3
  }
}, _utils.themeDocUtils.focusStyle, _utils.themeDocUtils.placeholderStyle, _utils.themeDocUtils.disabledStyle, _utils.themeDocUtils.inputStyle);

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/TextInput/index.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet/components/TextInput/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TextInput = void 0;

var _TextInput = __webpack_require__(/*! ./TextInput */ "./node_modules/grommet/components/TextInput/TextInput.js");

exports.TextInput = _TextInput.TextInput;

/***/ }),

/***/ "./node_modules/grommet/components/Video/StyledVideo.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/Video/StyledVideo.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledVideoScrubber = exports.StyledVideoControls = exports.StyledVideoContainer = exports.StyledVideo = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = (0, _styledComponents.css)(["flex:1 1;min-height:0;object-fit:", ";"], function (props) {
  return FIT_MAP[props.fit];
});

var StyledVideo = _styledComponents.default.video.withConfig({
  displayName: "StyledVideo",
  componentId: "w4v8h9-0"
})(["max-width:100%;", "::cue{background:", ";}", ";"], function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.video.captions.background;
}, function (props) {
  return props.theme.video && props.theme.video.extend;
});

exports.StyledVideo = StyledVideo;
StyledVideo.defaultProps = {};
Object.setPrototypeOf(StyledVideo.defaultProps, _defaultProps.defaultProps);

var StyledVideoContainer = _styledComponents.default.div.withConfig({
  displayName: "StyledVideo__StyledVideoContainer",
  componentId: "w4v8h9-1"
})(["flex:1 1;display:flex;flex-direction:column;overflow:hidden;position:relative;", ";"], _utils.genericStyles);

exports.StyledVideoContainer = StyledVideoContainer;
StyledVideoContainer.defaultProps = {};
Object.setPrototypeOf(StyledVideoContainer.defaultProps, _defaultProps.defaultProps);
var positionStyle = (0, _styledComponents.css)(["position:absolute;left:0;right:0;bottom:0;"]);

var StyledVideoControls = _styledComponents.default.div.withConfig({
  displayName: "StyledVideo__StyledVideoControls",
  componentId: "w4v8h9-2"
})(["flex:0 0;", " opacity:0;transition:opacity 0.3s;", ";"], function (props) {
  return props.over && positionStyle;
}, function (props) {
  return props.active ? 'opacity: 1;' : 'pointer-events: none';
});

exports.StyledVideoControls = StyledVideoControls;
StyledVideoControls.defaultProps = {};
Object.setPrototypeOf(StyledVideoControls.defaultProps, _defaultProps.defaultProps);
var headStyle = (0, _styledComponents.css)(["::after{content:'';height:100%;width:", ";background:", ";position:absolute;left:", ";}"], function (props) {
  return props.theme.global.edgeSize.xsmall;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.video.scrubber.color, props.theme);
}, function (props) {
  return props.value + "%";
});

var StyledVideoScrubber = _styledComponents.default.div.withConfig({
  displayName: "StyledVideo__StyledVideoScrubber",
  componentId: "w4v8h9-3"
})(["cursor:pointer;width:100%;height:100%;", ";"], function (props) {
  return props.value && headStyle;
});

exports.StyledVideoScrubber = StyledVideoScrubber;
StyledVideoScrubber.defaultProps = {};
Object.setPrototypeOf(StyledVideoScrubber.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/Video/Video.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Video/Video.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Video = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _Box = __webpack_require__(/*! ../Box */ "./node_modules/grommet/components/Box/index.js");

var _Button = __webpack_require__(/*! ../Button */ "./node_modules/grommet/components/Button/index.js");

var _Menu = __webpack_require__(/*! ../Menu */ "./node_modules/grommet/components/Menu/index.js");

var _Meter = __webpack_require__(/*! ../Meter */ "./node_modules/grommet/components/Meter/index.js");

var _Stack = __webpack_require__(/*! ../Stack */ "./node_modules/grommet/components/Stack/index.js");

var _Text = __webpack_require__(/*! ../Text */ "./node_modules/grommet/components/Text/index.js");

var _hocs = __webpack_require__(/*! ../hocs */ "./node_modules/grommet/components/hocs.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledVideo = __webpack_require__(/*! ./StyledVideo */ "./node_modules/grommet/components/Video/StyledVideo.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Split the volume control into 6 segments. Empirically determined.
var VOLUME_STEP = 0.166667;

var formatTime = function formatTime(time) {
  var minutes = Math.round(time / 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var seconds = Math.round(time) % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
};

var videoEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

var Video =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Video, _Component);

  Video.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var forwardRef = nextProps.forwardRef;
    var videoRef = prevState.videoRef;
    var nextVideoRef = forwardRef || videoRef;

    if (nextVideoRef !== videoRef) {
      return {
        videoRef: nextVideoRef
      };
    }

    return null;
  };

  function Video(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      captions: [],
      scrubberRef: _react.default.createRef(),
      videoRef: _react.default.createRef()
    });

    _defineProperty(_assertThisInitialized(_this), "hasPlayed", false);

    _defineProperty(_assertThisInitialized(_this), "injectUpdateVideoEvents", function () {
      return videoEvents.reduce(function (previousValue, currentValue) {
        var nextValue = _extends({}, previousValue);

        nextValue[currentValue] = function (e) {
          if (currentValue in _this.props &&
          /* eslint-disable react/destructuring-assignment */
          typeof _this.props[currentValue] === 'function') {
            _this.props[currentValue](e);
            /* eslint-enable react/destructuring-assignment */

          }

          _this.update();
        };

        return nextValue;
      }, {});
    });

    _defineProperty(_assertThisInitialized(_this), "update", function () {
      var videoRef = _this.state.videoRef;
      var video = videoRef.current; // Set flag for Video first play

      if (!_this.hasPlayed && !video.paused && !video.loading || video.currentTime) {
        _this.hasPlayed = true;
      }

      var interacting = _this.state.interacting;

      if (video.ended) {
        interacting = false;
      }

      _this.setState({
        duration: video.duration,
        currentTime: video.currentTime,
        // buffered: video.buffered,
        // paused: video.paused,
        // muted: video.muted,
        volume: video.volume,
        // ended: video.ended,
        // readyState: video.readyState,
        interacting: interacting,
        // computed values
        // hasPlayed: this.hasPlayed,
        playing: !video.paused && !video.loading,
        // percentageBuffered: video.buffered.length &&
        //   (video.buffered.end(video.buffered.length - 1) /
        //   video.duration) * 100,
        percentagePlayed: video.currentTime / video.duration * 100 // loading: video.readyState < video.HAVE_ENOUGH_DATA,

      });
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.play();
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.pause();
    });

    _defineProperty(_assertThisInitialized(_this), "scrub", function (event) {
      var _this$state = _this.state,
          duration = _this$state.duration,
          scrubberRef = _this$state.scrubberRef;

      if (scrubberRef.current) {
        var scrubberRect = scrubberRef.current.getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;

        _this.setState({
          scrubTime: duration * percent
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "seek", function (event) {
      var _this$state2 = _this.state,
          duration = _this$state2.duration,
          scrubberRef = _this$state2.scrubberRef,
          videoRef = _this$state2.videoRef;

      if (scrubberRef.current) {
        var scrubberRect = scrubberRef.current.getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        videoRef.current.currentTime = duration * percent;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      var videoRef = _this.state.videoRef;

      if (videoRef.current) {
        videoRef.current.muted = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      var videoRef = _this.state.videoRef;

      if (videoRef.current) {
        videoRef.current.muted = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "louder", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.volume += VOLUME_STEP;
    });

    _defineProperty(_assertThisInitialized(_this), "quieter", function () {
      var videoRef = _this.state.videoRef;
      videoRef.current.volume -= VOLUME_STEP;
    });

    _defineProperty(_assertThisInitialized(_this), "showCaptions", function (index) {
      var videoRef = _this.state.videoRef;
      var textTracks = videoRef.current.textTracks;

      for (var i = 0; i < textTracks.length; i += 1) {
        textTracks[i].mode = i === index ? 'showing' : 'hidden';
      } // Using forceUpdate to force redraw of controls when changing captions


      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "fullscreen", function () {
      var videoRef = _this.state.videoRef;
      var video = videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else {
        console.warn("Your browser doesn't support fullscreen.");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "interactionStart", function () {
      _this.setState({
        interacting: true
      });

      clearTimeout(_this.interactionTimer);
      _this.interactionTimer = setTimeout(_this.interactionStop, 3000);
    });

    _defineProperty(_assertThisInitialized(_this), "interactionStop", function () {
      var focus = _this.state.focus;

      if (!focus && !_this.unmounted) {
        _this.setState({
          interacting: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "restate", function () {
      var _this$state3 = _this.state,
          captions = _this$state3.captions,
          height = _this$state3.height,
          videoRef = _this$state3.videoRef,
          width = _this$state3.width;
      var video = videoRef.current;

      if (video) {
        if (video.videoHeight) {
          // set the size based on the video aspect ratio
          var rect = video.getBoundingClientRect();
          var ratio = rect.width / rect.height;
          var videoRatio = video.videoWidth / video.videoHeight;

          if (videoRatio > ratio) {
            var nextHeight = rect.width / videoRatio;

            if (nextHeight !== height) {
              _this.setState({
                height: nextHeight,
                width: undefined
              });
            }
          } else {
            var nextWidth = rect.height * videoRatio;

            if (nextWidth !== width) {
              _this.setState({
                height: undefined,
                width: nextWidth
              });
            }
          }
        } // remember the state of the text tracks for subsequent rendering


        var textTracks = video.textTracks;

        if (textTracks.length > 0) {
          if (textTracks.length === 1) {
            var active = textTracks[0].mode === 'showing';

            if (!captions || !captions[0] || captions[0].active !== active) {
              _this.setState({
                captions: [{
                  active: active
                }]
              });
            }
          } else {
            var nextCaptions = [];
            var set = false;

            for (var i = 0; i < textTracks.length; i += 1) {
              var track = textTracks[i];

              var _active = track.mode === 'showing';

              nextCaptions.push({
                label: track.label,
                active: _active
              });

              if (!captions || !captions[i] || captions[i].active !== _active) {
                set = true;
              }
            }

            if (set) {
              _this.setState({
                captions: nextCaptions
              });
            }
          }
        }
      }
    });

    _this.update = (0, _utils.throttle)(_this.update, 100, _assertThisInitialized(_this));
    _this.mediaEventProps = _this.injectUpdateVideoEvents();
    return _this;
  }

  var _proto = Video.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var mute = this.props.mute;
    var videoRef = this.state.videoRef;
    var video = videoRef.current;

    if (mute) {
      this.mute();
    }

    if (video) {
      // hide all captioning to start with
      var textTracks = video.textTracks;

      for (var i = 0; i < textTracks.length; i += 1) {
        textTracks[i].mode = 'hidden';
      }

      this.restate();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var autoPlay = this.props.autoPlay;

    if (autoPlay && !prevProps.autoPlay) {
      // Caller wants the video to play now.
      this.play();
    }

    this.restate();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
  };

  _proto.renderControls = function renderControls() {
    var _this2 = this;

    var _this$props = this.props,
        controls = _this$props.controls,
        theme = _this$props.theme;
    var _this$state4 = this.state,
        captions = _this$state4.captions,
        currentTime = _this$state4.currentTime,
        duration = _this$state4.duration,
        interacting = _this$state4.interacting,
        percentagePlayed = _this$state4.percentagePlayed,
        playing = _this$state4.playing,
        scrubberRef = _this$state4.scrubberRef,
        scrubTime = _this$state4.scrubTime,
        volume = _this$state4.volume;
    var over = controls === 'over';
    var background = over ? theme.video.controls && theme.video.controls.background || {
      color: 'dark-1',
      opacity: 'strong'
    } : undefined;
    var iconColor = over && (theme.video.icons.color || 'light-1');
    var formattedTime = formatTime(scrubTime || currentTime || duration);
    var Icons = {
      ClosedCaption: theme.video.icons.closedCaption,
      Configure: theme.video.icons.configure,
      FullScreen: theme.video.icons.fullScreen,
      Pause: theme.video.icons.pause,
      Play: theme.video.icons.play,
      ReduceVolume: theme.video.icons.reduceVolume,
      Volume: theme.video.icons.volume
    };
    var captionControls = captions.map(function (caption) {
      return {
        icon: caption.label ? undefined : _react.default.createElement(Icons.ClosedCaption, {
          color: iconColor
        }),
        label: caption.label,
        active: caption.active,
        onClick: function onClick() {
          return _this2.showCaptions(caption.active ? -1 : 0);
        }
      };
    });
    return _react.default.createElement(_StyledVideo.StyledVideoControls, {
      over: over,
      active: !this.hasPlayed || controls === 'below' || over && interacting
    }, _react.default.createElement(_Box.Box, {
      direction: "row",
      align: "center",
      justify: "between",
      background: background
    }, _react.default.createElement(_Button.Button, {
      icon: playing ? _react.default.createElement(Icons.Pause, {
        color: iconColor
      }) : _react.default.createElement(Icons.Play, {
        color: iconColor
      }),
      hoverIndicator: "background",
      onClick: playing ? this.pause : this.play
    }), _react.default.createElement(_Box.Box, {
      direction: "row",
      align: "center",
      flex: true
    }, _react.default.createElement(_Box.Box, {
      flex: true
    }, _react.default.createElement(_Stack.Stack, null, _react.default.createElement(_Meter.Meter, {
      "aria-label": "Video progress",
      background: over ? theme.video.scrubber && theme.video.scrubber.track && theme.video.scrubber.track.color || 'dark-3' : undefined,
      size: "full",
      thickness: "small",
      values: [{
        value: percentagePlayed || 0
      }]
    }), _react.default.createElement(_StyledVideo.StyledVideoScrubber, {
      ref: scrubberRef,
      tabIndex: 0,
      role: "button",
      value: scrubTime ? Math.round(scrubTime / duration * 100) : undefined,
      onMouseMove: this.scrub,
      onMouseLeave: function onMouseLeave() {
        return _this2.setState({
          scrubTime: undefined
        });
      },
      onClick: this.seek
    }))), _react.default.createElement(_Box.Box, {
      pad: {
        horizontal: 'small'
      }
    }, _react.default.createElement(_Text.Text, {
      margin: "none"
    }, formattedTime))), _react.default.createElement(_Menu.Menu, {
      icon: _react.default.createElement(Icons.Configure, {
        color: iconColor
      }),
      dropAlign: {
        bottom: 'top',
        right: 'right'
      },
      dropBackground: background,
      items: [{
        icon: _react.default.createElement(Icons.Volume, {
          color: iconColor
        }),
        onClick: volume <= 1 - VOLUME_STEP ? this.louder : undefined,
        close: false
      }, {
        icon: _react.default.createElement(Icons.ReduceVolume, {
          color: iconColor
        }),
        onClick: volume >= VOLUME_STEP ? this.quieter : undefined,
        close: false
      }].concat(captionControls, [{
        icon: _react.default.createElement(Icons.FullScreen, {
          color: iconColor
        }),
        onClick: this.fullscreen
      }])
    })));
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        alignSelf = _this$props2.alignSelf,
        autoPlay = _this$props2.autoPlay,
        children = _this$props2.children,
        controls = _this$props2.controls,
        gridArea = _this$props2.gridArea,
        loop = _this$props2.loop,
        margin = _this$props2.margin,
        theme = _this$props2.theme,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["alignSelf", "autoPlay", "children", "controls", "gridArea", "loop", "margin", "theme"]);

    var _this$state5 = this.state,
        height = _this$state5.height,
        videoRef = _this$state5.videoRef,
        width = _this$state5.width;
    var controlsElement = controls ? this.renderControls() : undefined;
    var mouseEventListeners;

    if (controls === 'over') {
      mouseEventListeners = {
        onMouseEnter: this.interactionStart,
        onMouseMove: this.interactionStart,
        onTouchStart: this.interactionStart
      };
    }

    var style;

    if (rest.fit === 'contain' && controls === 'over') {
      // constrain the size to fit the aspect ratio so the controls overlap correctly
      if (width) {
        style = {
          width: width
        };
      } else if (height) {
        style = {
          height: height
        };
      }
    }

    return _react.default.createElement(_StyledVideo.StyledVideoContainer, _extends({}, mouseEventListeners, {
      alignSelf: alignSelf,
      gridArea: gridArea,
      margin: margin,
      style: style
    }), _react.default.createElement(_StyledVideo.StyledVideo, _extends({}, rest, {
      ref: videoRef
    }, this.mediaEventProps, {
      autoPlay: autoPlay || false,
      loop: loop || false
    }), children), controlsElement);
  };

  return Video;
}(_react.Component);

_defineProperty(Video, "defaultProps", {
  controls: 'over'
});

Object.setPrototypeOf(Video.defaultProps, _defaultProps.defaultProps);
var VideoDoc;

if (true) {
  VideoDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/Video/doc.js").doc(Video); // eslint-disable-line global-require
}

var VideoWrapper = (0, _recompose.compose)(_styledComponents.withTheme, _hocs.withForwardRef)(VideoDoc || Video);
exports.Video = VideoWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/Video/doc.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet/components/Video/doc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _themeDocUtils = __webpack_require__(/*! ../../utils/themeDocUtils */ "./node_modules/grommet/utils/themeDocUtils.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Video) {
  var DocumentedVideo = (0, _reactDesc.describe)(Video).availableAt((0, _utils.getAvailableAtBadge)('Video')).description('A video player.').usage("import { Video } from 'grommet';\n<Video />").intrinsicElement('video');
  DocumentedVideo.propTypes = _extends({}, _utils.genericProps, {
    autoPlay: _reactDesc.PropTypes.bool.description('Enables automatic playback of the video as soon as it is loaded.'),
    controls: _reactDesc.PropTypes.oneOf([false, 'over', 'below']).description('Whether to show playback controls and where to place them.').defaultValue('over'),
    fit: _reactDesc.PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.'),
    loop: _reactDesc.PropTypes.bool.description('Enables continuous video looping.'),
    mute: _reactDesc.PropTypes.bool.description('Enables video muting. This option is best used with the autoPlay flag.')
  });
  return DocumentedVideo;
};

exports.doc = doc;

var themeDoc = _extends({}, _themeDocUtils.themeDocUtils.responsiveBreakpoint('The actual breakpoint to trigger changes in the video component layout.'), {
  'global.edgeSize.xsmall': {
    description: 'The width of the video scrubber.',
    type: 'object',
    defaultValue: '6px'
  },
  'video.captions.background': {
    description: 'The caption background color of the video ',
    type: 'string',
    defaultValue: 'rgba(0, 0, 0, 0.7)'
  },
  'video.scrubber.color': {
    description: 'The background color of the video scrubber.',
    type: 'string',
    defaultValue: 'light-4'
  },
  'video.extend': {
    description: 'Any additional style for Video.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
});

exports.themeDoc = themeDoc;

/***/ }),

/***/ "./node_modules/grommet/components/Video/index.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet/components/Video/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Video = void 0;

var _Video = __webpack_require__(/*! ./Video */ "./node_modules/grommet/components/Video/Video.js");

exports.Video = _Video.Video;

/***/ }),

/***/ "./node_modules/grommet/components/WorldMap/StyledWorldMap.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/components/WorldMap/StyledWorldMap.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledWorldMap = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledWorldMap = _styledComponents.default.svg.withConfig({
  displayName: "StyledWorldMap",
  componentId: "had4c3-0"
})(["width:100%;", " ", ";"], _utils.genericStyles, function (props) {
  return props.theme.worldMap && props.theme.worldMap.extend;
});

exports.StyledWorldMap = StyledWorldMap;
StyledWorldMap.defaultProps = {};
Object.setPrototypeOf(StyledWorldMap.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ "./node_modules/grommet/components/WorldMap/WorldMap.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet/components/WorldMap/WorldMap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.WorldMap = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _defaultProps = __webpack_require__(/*! ../../default-props */ "./node_modules/grommet/default-props.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

var _StyledWorldMap = __webpack_require__(/*! ./StyledWorldMap */ "./node_modules/grommet/components/WorldMap/StyledWorldMap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// The graphic is drawn as a rectangular grid using coordinates spaced
// by FACTOR pixels. The contents have both an area boundary for interaction
// and dots described as rows where each row is described by three values:
// a starting coordinate and a length. This approach is more efficient than
// describing it via SVG elements, keeping the code/library size smaller.
var CONTINENTS = [{
  name: 'Australia',
  origin: [74, 32],
  area: [[4, 0], [7, 1], [15, 7], [13, 9], [0, 6], [0, 2]],
  dots: [[4, 0, 1], [2, 1, 6], [0, 2, 9], [0, 3, 10], [0, 4, 10], [0, 5, 3], [5, 5, 5], [5, 6, 4], [15, 7, 1], [14, 8, 1], [13, 9, 1]]
}, {
  name: 'Asia',
  origin: [52, 1],
  area: [[16, 0], [38, 5], [40, 7], [28, 17], [24, 25], [29, 29], [19, 29], [11, 24], [3, 23], [0, 20], [0, 19], [6, 13], [7, 6]],
  dots: [[16, 0, 1], [17, 1, 2], [18, 2, 2], [15, 3, 6], [28, 3, 1], [30, 3, 1], [10, 4, 2], [13, 4, 10], [24, 4, 1], [9, 5, 22], [32, 5, 1], [38, 5, 1], [7, 6, 2], [10, 6, 1], [12, 6, 27], [7, 7, 34], [7, 8, 31], [7, 9, 26], [34, 9, 3], [7, 10, 22], [31, 10, 1], [33, 10, 1], [7, 11, 21], [32, 11, 2], [7, 12, 21], [32, 12, 1], [6, 13, 22], [32, 13, 1], [6, 14, 22], [5, 15, 22], [3, 16, 2], [6, 16, 20], [2, 17, 3], [6, 17, 16], [24, 17, 1], [28, 17, 1], [1, 18, 22], [26, 18, 2], [0, 19, 24], [0, 20, 5], [6, 20, 17], [2, 21, 5], [10, 21, 14], [2, 22, 5], [11, 22, 4], [16, 22, 4], [3, 23, 3], [11, 23, 2], [17, 23, 3], [23, 23, 1], [11, 24, 2], [18, 24, 2], [23, 24, 1], [24, 25, 1], [18, 26, 1], [22, 26, 1], [18, 27, 1], [20, 27, 4], [18, 28, 1], [21, 28, 1], [23, 28, 1], [26, 28, 3], [19, 29, 1], [28, 29, 2]]
}, {
  // 21X, 40Y
  name: 'Africa',
  origin: [40, 19],
  area: [[3, 0], [6, 0], [11, 2], [16, 7], [16, 15], [11, 18], [9, 18], [0, 6], [0, 3]],
  dots: [[3, 0, 4], [2, 1, 6], [9, 1, 2], [1, 2, 11], [0, 3, 13], [0, 4, 14], [0, 5, 14], [0, 6, 16], [1, 7, 16], [2, 8, 2], [6, 8, 11], [7, 9, 9], [7, 10, 8], [7, 11, 7], [8, 12, 7], [7, 13, 8], [7, 14, 7], [16, 14, 1], [8, 15, 5], [15, 15, 2], [8, 16, 5], [9, 17, 3], [9, 18, 3]]
}, {
  name: 'Europe',
  origin: [39, 2],
  area: [[8, 0], [10, 0], [20, 2], [19, 11], [18, 13], [14, 16], [3, 16], [0, 7]],
  dots: [[8, 0, 3], [9, 1, 1], [20, 2, 1], [19, 3, 1], [12, 4, 1], [19, 4, 1], [9, 5, 6], [9, 6, 7], [17, 6, 3], [0, 7, 1], [8, 7, 12], [7, 8, 3], [11, 8, 9], [7, 9, 3], [11, 9, 9], [4, 10, 1], [7, 10, 1], [9, 10, 1], [11, 10, 9], [3, 11, 2], [7, 11, 13], [4, 12, 1], [6, 12, 13], [4, 13, 15], [5, 14, 3], [9, 14, 4], [15, 14, 2], [3, 15, 3], [8, 15, 1], [10, 15, 5], [6, 15, 2], [3, 16, 2], [10, 16, 5]]
}, {
  name: 'South America',
  origin: [22, 26],
  area: [[2, 0], [5, 0], [11, 4], [11, 8], [3, 18], [2, 17], [0, 4], [0, 3]],
  dots: [[2, 0, 4], [1, 1, 7], [1, 2, 7], [0, 3, 10], [0, 4, 12], [1, 5, 11], [2, 6, 9], [3, 7, 8], [3, 8, 8], [3, 9, 6], [3, 10, 6], [3, 11, 5], [3, 12, 3], [2, 13, 3], [2, 14, 3], [2, 15, 2], [2, 16, 2], [2, 17, 2], [3, 18, 1]]
}, {
  name: 'North America',
  origin: [0, 0],
  area: [[21, 0], [39, 0], [39, 6], [22, 26], [16, 23], [2, 12], [0, 7]],
  dots: [[22, 0, 6], [29, 0, 1], [31, 0, 1], [33, 0, 5], [20, 1, 1], [22, 1, 1], [24, 1, 2], [27, 1, 13], [17, 2, 1], [20, 2, 5], [26, 2, 13], [13, 3, 1], [19, 3, 1], [21, 3, 3], [26, 3, 14], [14, 4, 1], [16, 4, 4], [21, 4, 3], [29, 4, 11], [12, 5, 3], [16, 5, 1], [18, 5, 1], [20, 5, 3], [24, 5, 1], [30, 5, 8], [14, 6, 3], [19, 6, 1], [22, 6, 4], [31, 6, 8], [0, 7, 15], [16, 7, 1], [18, 7, 4], [24, 7, 2], [30, 7, 7], [2, 8, 20], [24, 8, 3], [29, 8, 5], [2, 9, 20], [24, 9, 2], [30, 9, 3], [1, 10, 18], [23, 10, 2], [31, 10, 1], [2, 11, 2], [8, 11, 11], [23, 11, 2], [26, 11, 1], [2, 12, 1], [8, 12, 13], [24, 12, 3], [10, 13, 12], [23, 13, 5], [11, 14, 17], [11, 15, 9], [21, 15, 6], [28, 15, 2], [11, 16, 11], [23, 16, 4], [11, 17, 14], [12, 18, 11], [12, 19, 12], [13, 20, 9], [15, 21, 3], [22, 21, 1], [16, 22, 2], [16, 23, 2], [20, 23, 1], [23, 23, 1], [18, 24, 3], [21, 25, 1], [22, 26, 1]]
}]; // FACTOR is the distance in pixels between coordinates

var FACTOR = 10;

var maxCoordinate = function maxCoordinate(a, b) {
  return [Math.max(a[0], b[0]), Math.max(a[1], b[1])];
}; // const minCoordinate = (a, b) =>
//   [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
// Based on https://stackoverflow.com/a/43861247


var MAP_LAT_BOTTOM = -50.0; // empirically determined

var MAP_LAT_BOTTOM_RAD = MAP_LAT_BOTTOM * Math.PI / 180;
var MAP_LON_LEFT = -171.0; // empirically determined

var MAP_LON_RIGHT = 184.0; // empirically determined

var MAP_LON_DELTA = MAP_LON_RIGHT - MAP_LON_LEFT;

var mapValues = function mapValues(extent) {
  var mapRadius = extent[0] / MAP_LON_DELTA * 360 / (2 * Math.PI);
  var mapOffsetY = Math.round(mapRadius / 2 * Math.log((1 + Math.sin(MAP_LAT_BOTTOM_RAD)) / (1 - Math.sin(MAP_LAT_BOTTOM_RAD))));
  return {
    mapRadius: mapRadius,
    mapOffsetY: mapOffsetY
  };
};

var latLonToCoord = function latLonToCoord(latLon, origin, extent) {
  var _mapValues = mapValues(extent),
      mapRadius = _mapValues.mapRadius,
      mapOffsetY = _mapValues.mapOffsetY;

  var x = Math.round((latLon[1] - MAP_LON_LEFT) * extent[0] / MAP_LON_DELTA);
  var latitudeRad = latLon[0] * Math.PI / 180;
  var y = extent[1] + mapOffsetY - Math.round(mapRadius / 2 * Math.log((1 + Math.sin(latitudeRad)) / (1 - Math.sin(latitudeRad))));
  return [x, y]; // the coordinate value of this point on the map image
};

var coordToLatLon = function coordToLatLon(coord, origin, extent) {
  var _mapValues2 = mapValues(extent),
      mapRadius = _mapValues2.mapRadius,
      mapOffsetY = _mapValues2.mapOffsetY;

  var a = (extent[1] + mapOffsetY - coord[1]) / mapRadius;
  var lat = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
  var lon = coord[0] * MAP_LON_DELTA / extent[0] + MAP_LON_LEFT;
  return [lat, lon];
};

var buildContinentState = function buildContinentState(_ref) {
  var area = _ref.area,
      dots = _ref.dots,
      origin = _ref.origin;
  var extent = [].concat(origin);
  var stateDots = dots.map(function (segment) {
    var count = segment[2];
    var spots = [];

    for (var i = 0; i < count; i += 1) {
      spots.push('h0');
    }

    var dotCommands = spots.join(' m10,0 ');
    var x = FACTOR * (origin[0] + segment[0] + 1);
    var y = FACTOR * (origin[1] + segment[1] + 1);
    extent = maxCoordinate(extent, [origin[0] + segment[0] + segment[2], origin[1] + segment[1]]);
    return "M" + x + "," + y + " " + dotCommands;
  }).join(' ');
  var stateArea = area.map(function (point, index) {
    var x = FACTOR * (point[0] + origin[0] + 1);
    var y = FACTOR * (point[1] + origin[1] + 1);
    return "" + (index === 0 ? 'M' : 'L') + x + "," + y;
  }).join(' ') + " Z";
  var mid = [origin[0] + (extent[0] - origin[0]) / 2, origin[1] + (extent[1] - origin[1]) / 2];
  return {
    area: stateArea,
    dots: stateDots,
    origin: origin,
    extent: extent,
    mid: mid
  };
};

var buildState = function buildState() {
  var continents = {}; // Build the SVG paths describing the individual dots

  var origin = [0, 0];
  var extent = [0, 0];
  CONTINENTS.forEach(function (continent) {
    continents[continent.name] = buildContinentState(continent);
    extent = maxCoordinate(extent, continents[continent.name].extent);
  });
  return {
    continents: continents,
    extent: extent,
    origin: origin,
    x: origin[0] * FACTOR,
    y: origin[1] * FACTOR,
    width: (extent[0] - origin[0] + 1) * FACTOR,
    height: (extent[1] - origin[1] + 2) * FACTOR
  };
};

var updateState = function updateState(state, _ref2) {
  var continents = _ref2.continents,
      places = _ref2.places;

  var nextState = _extends({}, state);

  if (continents) {
    continents.forEach(function (continent) {
      nextState.continents[continent.name] = _extends({}, state.continents[continent.name], continent);
    });
  }

  nextState.places = (places || []).map(function (_ref3) {
    var location = _ref3.location,
        place = _objectWithoutPropertiesLoose(_ref3, ["location"]);

    var coords = latLonToCoord(location, state.origin, state.extent);
    return _extends({
      coords: coords,
      key: location.join(',')
    }, place);
  });
  return nextState;
};

var buildInteractiveProps = function buildInteractiveProps(_ref4, activeFunc, active) {
  var name = _ref4.name,
      onClick = _ref4.onClick,
      onHover = _ref4.onHover;
  return {
    role: 'button',
    'aria-label': name,
    tabIndex: '0',
    onClick: onClick ? function () {
      return onClick(name);
    } : undefined,
    onMouseOver: function onMouseOver() {
      if (!active) {
        activeFunc(name);

        if (onHover) {
          onHover(true);
        }
      }
    },
    onMouseLeave: function onMouseLeave() {
      if (active) {
        activeFunc(undefined);

        if (onHover) {
          onHover(false);
        }
      }
    },
    onFocus: function onFocus() {
      // This moves the map unnecessarily. Instead, we should check
      // the position and scroll if it isn't already visible
      // this._worldMapRef.scrollIntoView();
      if (!active) {
        activeFunc(name);
      }
    },
    onBlur: function onBlur() {
      if (active) {
        activeFunc(undefined);
      }
    }
  };
};

var WorldMap =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(WorldMap, _Component);

  function WorldMap() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function () {
      // track when we're over the map to avoid dealing with mouse moves
      _this.setState({
        over: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (event) {
      var width = _this.state.width; // determine the map coordinates for where the mouse is
      // containerRef uses the group so we can handle aspect ratio scaling

      var rect = _this.containerRef.getBoundingClientRect();

      var scale = rect.width / width; // since the SVG viewBox might be scaled

      var coords = [Math.round((event.clientX - rect.left) / scale / FACTOR), Math.round((event.clientY - rect.top) / scale / FACTOR)];

      _this.setState({
        activeCoords: coords
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        over: false,
        activeCoords: undefined
      });
    });

    return _this;
  }

  WorldMap.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.continents) {
      return updateState(buildState(), nextProps);
    }

    return updateState(prevState, nextProps);
  };

  var _proto = WorldMap.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        color = _this$props.color,
        onSelectPlace = _this$props.onSelectPlace,
        hoverColor = _this$props.hoverColor,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["color", "onSelectPlace", "hoverColor", "theme"]);

    delete rest.places;
    delete rest.continents;
    var _this$state = this.state,
        activeContinent = _this$state.activeContinent,
        activeCoords = _this$state.activeCoords,
        activePlace = _this$state.activePlace,
        continentStates = _this$state.continents,
        extent = _this$state.extent,
        origin = _this$state.origin,
        over = _this$state.over,
        placeStates = _this$state.places,
        x = _this$state.x,
        y = _this$state.y,
        width = _this$state.width,
        height = _this$state.height;
    var continents = Object.keys(continentStates).map(function (name) {
      var _continentStates$name = continentStates[name],
          area = _continentStates$name.area,
          continentColor = _continentStates$name.color,
          dots = _continentStates$name.dots,
          onClick = _continentStates$name.onClick,
          onHover = _continentStates$name.onHover;
      var active = activeContinent && activeContinent === name;
      var interactiveProps = {};

      if (onClick || onHover) {
        interactiveProps = buildInteractiveProps(continentStates[name], function (activate) {
          return _this2.setState({
            activeContinent: activate
          });
        }, active);
      }

      return _react.default.createElement("g", _extends({
        key: name
      }, interactiveProps), _react.default.createElement("path", {
        stroke: "none",
        fill: "#fff",
        fillOpacity: "0.01",
        d: area
      }), _react.default.createElement("path", {
        d: dots,
        strokeLinecap: "round",
        strokeWidth: (0, _utils.parseMetricToNum)(theme.worldMap.continent[active ? 'active' : 'base']),
        stroke: (0, _utils.normalizeColor)(continentColor || color || theme.worldMap.color, theme)
      }));
    });
    var places = placeStates.map(function (place) {
      var placeColor = place.color,
          coords = place.coords,
          key = place.key,
          name = place.name,
          onClick = place.onClick,
          onHover = place.onHover,
          restPlace = _objectWithoutPropertiesLoose(place, ["color", "coords", "key", "name", "onClick", "onHover"]);

      var d = "M" + FACTOR * coords[0] + ", " + FACTOR * coords[1] + " h0";
      var active = activePlace && activePlace === name;
      var interactiveProps = {};

      if (onClick || onHover) {
        interactiveProps = buildInteractiveProps(place, function (activate) {
          return _this2.setState({
            activePlace: activate
          });
        }, active);
      }

      return _react.default.createElement("path", _extends({
        key: key,
        strokeLinecap: "round",
        strokeWidth: (0, _utils.parseMetricToNum)(theme.worldMap.place[active ? 'active' : 'base']),
        stroke: (0, _utils.normalizeColor)(placeColor || color || theme.worldMap.color, theme)
      }, interactiveProps, restPlace, {
        d: d
      }));
    }); // If the caller is interested in onSelectPlace changes, track where the

    var interactiveProps = {};

    if (onSelectPlace) {
      interactiveProps = {
        onMouseOver: this.onMouseOver,
        onMouseMove: over ? this.onMouseMove : undefined,
        onMouseLeave: this.onMouseLeave
      };
    }

    var active;

    if (activeCoords) {
      var d = "M" + FACTOR * activeCoords[0] + ", " + FACTOR * activeCoords[1] + " h0";
      active = _react.default.createElement("g", {
        stroke: "none",
        fill: "none",
        fillRule: "evenodd",
        onClick: function onClick() {
          return onSelectPlace(coordToLatLon(activeCoords, origin, extent));
        }
      }, _react.default.createElement("path", {
        strokeLinecap: "round",
        strokeWidth: (0, _utils.parseMetricToNum)(theme.worldMap.place.active),
        stroke: (0, _utils.normalizeColor)(hoverColor || color || theme.worldMap.hover.color, theme),
        d: d
      }));
    }

    return _react.default.createElement(_StyledWorldMap.StyledWorldMap, _extends({
      viewBox: x + " " + y + " " + width + " " + height,
      preserveAspectRatio: "xMinYMin meet",
      width: width,
      height: height
    }, interactiveProps, rest), _react.default.createElement("g", {
      ref: function ref(_ref5) {
        _this2.containerRef = _ref5;
      },
      stroke: "none",
      fill: "none",
      fillRule: "evenodd"
    }, continents), places, active);
  };

  return WorldMap;
}(_react.Component);

WorldMap.defaultProps = {};
Object.setPrototypeOf(WorldMap.defaultProps, _defaultProps.defaultProps);
var WorldMapDoc;

if (true) {
  WorldMapDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet/components/WorldMap/doc.js").doc(WorldMap); // eslint-disable-line global-require
}

var WorldMapWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(WorldMapDoc || WorldMap);
exports.WorldMap = WorldMapWrapper;

/***/ }),

/***/ "./node_modules/grommet/components/WorldMap/doc.js":
/*!*********************************************************!*\
  !*** ./node_modules/grommet/components/WorldMap/doc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.doc = exports.themeDoc = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var themeDoc = {
  'worldMap.color': {
    description: 'The color for each individual dot when a color is not passed as a prop',
    type: 'string',
    defaultValue: 'light-3'
  },
  'worldMap.continent.active': {
    description: 'The size of the visual dots belonging to a continent when the continent is being hovered.',
    type: 'string',
    defaultValue: '8px'
  },
  'worldMap.continent.base': {
    description: 'The size of the visual dots belonging to a continent that is not being hovered.',
    type: 'string',
    defaultValue: '6px'
  },
  'worldMap.hover.color': {
    description: 'The color for an individual dot when it is being hovered',
    type: 'string',
    defaultValue: 'light-4'
  },
  'worldMap.place.active': {
    description: 'The size of a visual dot for an individual place in the map when it is being hovered.',
    type: 'string',
    defaultValue: '20px'
  },
  'worldMap.place.base': {
    description: 'The size of the visual dot representing an individual place in the map when it is not being hovered.',
    type: 'string',
    defaultValue: '8px'
  },
  'worldMap.extend': {
    description: 'Any additional style for the WorldMap.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

var doc = function doc(WorldMap) {
  var DocumentedWorldMap = (0, _reactDesc.describe)(WorldMap).availableAt((0, _utils.getAvailableAtBadge)('WorldMap')).description('A map of the world, or a continent.').usage("import { WorldMap } from 'grommet';\n<WorldMap />").intrinsicElement('svg');
  DocumentedWorldMap.propTypes = _extends({}, _utils.genericProps, {
    color: _utils.colorPropType.description('Default color'),
    continents: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _utils.colorPropType,
      name: _reactDesc.PropTypes.oneOf(['Africa', 'Asia', 'Australia', 'Europe', 'North America', 'South America']).isRequired,
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func
    })).description('Continent details.'),
    onSelectPlace: _reactDesc.PropTypes.func.description("Called when the user clicks on a place.\n        It is passed the location."),
    places: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _utils.colorPropType,
      name: _reactDesc.PropTypes.string,
      // for a11y aria-label
      location: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number).isRequired,
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func
    })).description('Place details.'),
    hoverColor: _utils.colorPropType.description('Color when hovering over places while selecting.')
  });
  return DocumentedWorldMap;
};

exports.doc = doc;

/***/ }),

/***/ "./node_modules/grommet/components/WorldMap/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet/components/WorldMap/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.WorldMap = void 0;

var _WorldMap = __webpack_require__(/*! ./WorldMap */ "./node_modules/grommet/components/WorldMap/WorldMap.js");

exports.WorldMap = _WorldMap.WorldMap;

/***/ }),

/***/ "./node_modules/grommet/components/hocs.js":
/*!*************************************************!*\
  !*** ./node_modules/grommet/components/hocs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withAnnounce = exports.withForwardRef = exports.withFocus = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _getDisplayName = _interopRequireDefault(__webpack_require__(/*! recompose/getDisplayName */ "./node_modules/recompose/getDisplayName.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

exports.withTheme = _styledComponents.withTheme;

var _contexts = __webpack_require__(/*! ../contexts */ "./node_modules/grommet/contexts/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withFocus = function withFocus(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      focusWithMouse = _ref.focusWithMouse;

  return function (WrappedComponent) {
    var FocusableComponent =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(FocusableComponent, _Component);

      function FocusableComponent() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;

        _defineProperty(_assertThisInitialized(_this), "mouseActive", false);

        _defineProperty(_assertThisInitialized(_this), "state", {
          focus: false,
          wrappedRef: _react.default.createRef()
        });

        _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
          var wrappedRef = _this.state.wrappedRef; // components such as anchors and buttons should not retain focus after
          // being clicked while text-based components should

          if (!focusWithMouse) {
            window.addEventListener('mousedown', _this.handleActiveMouse);
          } // we could be using onFocus in the wrapper node itself
          // but react does not invoke it if you programically
          // call wrapperNode.focus() inside componentWillUnmount
          // see Drop "this.originalFocusedElement.focus();" for reference


          var wrapperNode = wrappedRef.current;

          if (wrapperNode && wrapperNode.addEventListener) {
            wrapperNode.addEventListener('focus', _this.setFocus);
          }
        });

        _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
          var wrappedRef = _this.state.wrappedRef;
          window.removeEventListener('mousedown', _this.handleActiveMouse);
          var wrapperNode = wrappedRef.current;

          if (wrapperNode && wrapperNode.addEventListener) {
            wrapperNode.removeEventListener('focus', _this.setFocus);
          }

          clearTimeout(_this.focusTimer);
          clearTimeout(_this.mouseTimer);
        });

        _defineProperty(_assertThisInitialized(_this), "handleActiveMouse", function () {
          // from https://marcysutton.com/button-focus-hell/
          _this.mouseActive = true; // this avoids showing focus when clicking around

          clearTimeout(_this.mouseTimer); // empirical number to reset mouseActive after
          // some time has passed without mousedown

          _this.mouseTimer = setTimeout(function () {
            _this.mouseActive = false;
          }, 150);
        });

        _defineProperty(_assertThisInitialized(_this), "setFocus", function () {
          // delay setting focus to avoid interupting events,
          // 1ms was chosen empirically based on ie11 using Select and TextInput
          // with and without a FormField.
          clearTimeout(_this.focusTimer);
          _this.focusTimer = setTimeout(function () {
            var focus = _this.state.focus;

            if (!focus && !_this.mouseActive) {
              _this.setState({
                focus: true
              });
            }
          }, 1);
        });

        _defineProperty(_assertThisInitialized(_this), "resetFocus", function () {
          clearTimeout(_this.focusTimer);
          _this.focusTimer = setTimeout(function () {
            var focus = _this.state.focus;

            if (focus) {
              _this.setState({
                focus: false
              });
            }
          }, 1);
        });

        return _this;
      }

      FocusableComponent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var withFocusRef = nextProps.withFocusRef;
        var wrappedRef = prevState.wrappedRef;
        var nextWrappedRef = withFocusRef || wrappedRef;

        if (nextWrappedRef !== wrappedRef) {
          return {
            wrappedRef: nextWrappedRef
          };
        }

        return null;
      };

      var _proto = FocusableComponent.prototype;

      _proto.render = function render() {
        var _this2 = this;

        var _this$props = this.props,
            _onFocus = _this$props.onFocus,
            _onBlur = _this$props.onBlur,
            withFocusRef = _this$props.withFocusRef,
            rest = _objectWithoutPropertiesLoose(_this$props, ["onFocus", "onBlur", "withFocusRef"]);

        var _this$state = this.state,
            focus = _this$state.focus,
            wrappedRef = _this$state.wrappedRef;
        return _react.default.createElement(WrappedComponent, _extends({
          ref: wrappedRef,
          focus: focus
        }, rest, {
          onFocus: function onFocus(event) {
            _this2.setFocus();

            if (_onFocus) {
              _onFocus(event);
            }
          },
          onBlur: function onBlur(event) {
            _this2.resetFocus();

            if (_onBlur) {
              _onBlur(event);
            }
          }
        }));
      };

      return FocusableComponent;
    }(_react.Component);

    var ForwardRef = _react.default.forwardRef(function (props, ref) {
      return _react.default.createElement(FocusableComponent, _extends({}, props, {
        withFocusRef: ref
      }));
    });

    ForwardRef.displayName = (0, _getDisplayName.default)(WrappedComponent);
    ForwardRef.name = ForwardRef.displayName;
    ForwardRef.defaultProps = WrappedComponent.defaultProps;
    (0, _hoistNonReactStatics.default)(ForwardRef, WrappedComponent);
    return ForwardRef;
  };
};

exports.withFocus = withFocus;

var withForwardRef = function withForwardRef(WrappedComponent) {
  var ForwardRefComponent = _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(WrappedComponent, _extends({
      forwardRef: ref
    }, props));
  });

  ForwardRefComponent.displayName = (0, _getDisplayName.default)(WrappedComponent);
  ForwardRefComponent.name = ForwardRefComponent.displayName;
  ForwardRefComponent.defaultProps = WrappedComponent.defaultProps;
  (0, _hoistNonReactStatics.default)(ForwardRefComponent, WrappedComponent);
  return ForwardRefComponent;
};

exports.withForwardRef = withForwardRef;

var withAnnounce = function withAnnounce(WrappedComponent) {
  var ForwardRef = _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_contexts.AnnounceContext.Consumer, null, function (announce) {
      return _react.default.createElement(WrappedComponent, _extends({}, props, {
        announce: announce,
        ref: ref
      }));
    });
  });

  ForwardRef.displayName = (0, _getDisplayName.default)(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;
  ForwardRef.defaultProps = WrappedComponent.defaultProps;
  (0, _hoistNonReactStatics.default)(ForwardRef, WrappedComponent);
  return ForwardRef;
};

exports.withAnnounce = withAnnounce;

/***/ }),

/***/ "./node_modules/grommet/components/index.js":
/*!**************************************************!*\
  !*** ./node_modules/grommet/components/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Accordion = __webpack_require__(/*! ./Accordion */ "./node_modules/grommet/components/Accordion/index.js");

Object.keys(_Accordion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Accordion[key];
});

var _AccordionPanel = __webpack_require__(/*! ./AccordionPanel */ "./node_modules/grommet/components/AccordionPanel/index.js");

Object.keys(_AccordionPanel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _AccordionPanel[key];
});

var _Anchor = __webpack_require__(/*! ./Anchor */ "./node_modules/grommet/components/Anchor/index.js");

Object.keys(_Anchor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Anchor[key];
});

var _Box = __webpack_require__(/*! ./Box */ "./node_modules/grommet/components/Box/index.js");

Object.keys(_Box).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Box[key];
});

var _Button = __webpack_require__(/*! ./Button */ "./node_modules/grommet/components/Button/index.js");

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Button[key];
});

var _Calendar = __webpack_require__(/*! ./Calendar */ "./node_modules/grommet/components/Calendar/index.js");

Object.keys(_Calendar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Calendar[key];
});

var _Carousel = __webpack_require__(/*! ./Carousel */ "./node_modules/grommet/components/Carousel/index.js");

Object.keys(_Carousel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Carousel[key];
});

var _Chart = __webpack_require__(/*! ./Chart */ "./node_modules/grommet/components/Chart/index.js");

Object.keys(_Chart).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Chart[key];
});

var _CheckBox = __webpack_require__(/*! ./CheckBox */ "./node_modules/grommet/components/CheckBox/index.js");

Object.keys(_CheckBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _CheckBox[key];
});

var _Clock = __webpack_require__(/*! ./Clock */ "./node_modules/grommet/components/Clock/index.js");

Object.keys(_Clock).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Clock[key];
});

var _Collapsible = __webpack_require__(/*! ./Collapsible */ "./node_modules/grommet/components/Collapsible/index.js");

Object.keys(_Collapsible).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Collapsible[key];
});

var _DataTable = __webpack_require__(/*! ./DataTable */ "./node_modules/grommet/components/DataTable/index.js");

Object.keys(_DataTable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _DataTable[key];
});

var _Diagram = __webpack_require__(/*! ./Diagram */ "./node_modules/grommet/components/Diagram/index.js");

Object.keys(_Diagram).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Diagram[key];
});

var _Distribution = __webpack_require__(/*! ./Distribution */ "./node_modules/grommet/components/Distribution/index.js");

Object.keys(_Distribution).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Distribution[key];
});

var _Drop = __webpack_require__(/*! ./Drop */ "./node_modules/grommet/components/Drop/index.js");

Object.keys(_Drop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Drop[key];
});

var _DropButton = __webpack_require__(/*! ./DropButton */ "./node_modules/grommet/components/DropButton/index.js");

Object.keys(_DropButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _DropButton[key];
});

var _Form = __webpack_require__(/*! ./Form */ "./node_modules/grommet/components/Form/index.js");

Object.keys(_Form).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Form[key];
});

var _FormField = __webpack_require__(/*! ./FormField */ "./node_modules/grommet/components/FormField/index.js");

Object.keys(_FormField).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _FormField[key];
});

var _Grid = __webpack_require__(/*! ./Grid */ "./node_modules/grommet/components/Grid/index.js");

Object.keys(_Grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Grid[key];
});

var _Grommet = __webpack_require__(/*! ./Grommet */ "./node_modules/grommet/components/Grommet/index.js");

Object.keys(_Grommet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Grommet[key];
});

var _Heading = __webpack_require__(/*! ./Heading */ "./node_modules/grommet/components/Heading/index.js");

Object.keys(_Heading).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Heading[key];
});

var _Image = __webpack_require__(/*! ./Image */ "./node_modules/grommet/components/Image/index.js");

Object.keys(_Image).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Image[key];
});

var _InfiniteScroll = __webpack_require__(/*! ./InfiniteScroll */ "./node_modules/grommet/components/InfiniteScroll/index.js");

Object.keys(_InfiniteScroll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _InfiniteScroll[key];
});

var _Keyboard = __webpack_require__(/*! ./Keyboard */ "./node_modules/grommet/components/Keyboard/index.js");

Object.keys(_Keyboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Keyboard[key];
});

var _Layer = __webpack_require__(/*! ./Layer */ "./node_modules/grommet/components/Layer/index.js");

Object.keys(_Layer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Layer[key];
});

var _Markdown = __webpack_require__(/*! ./Markdown */ "./node_modules/grommet/components/Markdown/index.js");

Object.keys(_Markdown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Markdown[key];
});

var _MaskedInput = __webpack_require__(/*! ./MaskedInput */ "./node_modules/grommet/components/MaskedInput/index.js");

Object.keys(_MaskedInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _MaskedInput[key];
});

var _Menu = __webpack_require__(/*! ./Menu */ "./node_modules/grommet/components/Menu/index.js");

Object.keys(_Menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Menu[key];
});

var _Meter = __webpack_require__(/*! ./Meter */ "./node_modules/grommet/components/Meter/index.js");

Object.keys(_Meter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Meter[key];
});

var _Paragraph = __webpack_require__(/*! ./Paragraph */ "./node_modules/grommet/components/Paragraph/index.js");

Object.keys(_Paragraph).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Paragraph[key];
});

var _RadioButton = __webpack_require__(/*! ./RadioButton */ "./node_modules/grommet/components/RadioButton/index.js");

Object.keys(_RadioButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _RadioButton[key];
});

var _RadioButtonGroup = __webpack_require__(/*! ./RadioButtonGroup */ "./node_modules/grommet/components/RadioButtonGroup/index.js");

Object.keys(_RadioButtonGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _RadioButtonGroup[key];
});

var _RangeInput = __webpack_require__(/*! ./RangeInput */ "./node_modules/grommet/components/RangeInput/index.js");

Object.keys(_RangeInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _RangeInput[key];
});

var _RangeSelector = __webpack_require__(/*! ./RangeSelector */ "./node_modules/grommet/components/RangeSelector/index.js");

Object.keys(_RangeSelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _RangeSelector[key];
});

var _RoutedAnchor = __webpack_require__(/*! ./RoutedAnchor */ "./node_modules/grommet/components/RoutedAnchor/index.js");

Object.keys(_RoutedAnchor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _RoutedAnchor[key];
});

var _RoutedButton = __webpack_require__(/*! ./RoutedButton */ "./node_modules/grommet/components/RoutedButton/index.js");

Object.keys(_RoutedButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _RoutedButton[key];
});

var _Select = __webpack_require__(/*! ./Select */ "./node_modules/grommet/components/Select/index.js");

Object.keys(_Select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Select[key];
});

var _SkipLink = __webpack_require__(/*! ./SkipLink */ "./node_modules/grommet/components/SkipLink/index.js");

Object.keys(_SkipLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _SkipLink[key];
});

var _SkipLinks = __webpack_require__(/*! ./SkipLinks */ "./node_modules/grommet/components/SkipLinks/index.js");

Object.keys(_SkipLinks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _SkipLinks[key];
});

var _SkipLinkTarget = __webpack_require__(/*! ./SkipLinkTarget */ "./node_modules/grommet/components/SkipLinkTarget/index.js");

Object.keys(_SkipLinkTarget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _SkipLinkTarget[key];
});

var _Stack = __webpack_require__(/*! ./Stack */ "./node_modules/grommet/components/Stack/index.js");

Object.keys(_Stack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Stack[key];
});

var _Table = __webpack_require__(/*! ./Table */ "./node_modules/grommet/components/Table/index.js");

Object.keys(_Table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Table[key];
});

var _TableBody = __webpack_require__(/*! ./TableBody */ "./node_modules/grommet/components/TableBody/index.js");

Object.keys(_TableBody).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _TableBody[key];
});

var _TableCell = __webpack_require__(/*! ./TableCell */ "./node_modules/grommet/components/TableCell/index.js");

Object.keys(_TableCell).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _TableCell[key];
});

var _TableFooter = __webpack_require__(/*! ./TableFooter */ "./node_modules/grommet/components/TableFooter/index.js");

Object.keys(_TableFooter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _TableFooter[key];
});

var _TableHeader = __webpack_require__(/*! ./TableHeader */ "./node_modules/grommet/components/TableHeader/index.js");

Object.keys(_TableHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _TableHeader[key];
});

var _TableRow = __webpack_require__(/*! ./TableRow */ "./node_modules/grommet/components/TableRow/index.js");

Object.keys(_TableRow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _TableRow[key];
});

var _Tab = __webpack_require__(/*! ./Tab */ "./node_modules/grommet/components/Tab/index.js");

Object.keys(_Tab).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Tab[key];
});

var _Tabs = __webpack_require__(/*! ./Tabs */ "./node_modules/grommet/components/Tabs/index.js");

Object.keys(_Tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Tabs[key];
});

var _Text = __webpack_require__(/*! ./Text */ "./node_modules/grommet/components/Text/index.js");

Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Text[key];
});

var _TextArea = __webpack_require__(/*! ./TextArea */ "./node_modules/grommet/components/TextArea/index.js");

Object.keys(_TextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _TextArea[key];
});

var _TextInput = __webpack_require__(/*! ./TextInput */ "./node_modules/grommet/components/TextInput/index.js");

Object.keys(_TextInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _TextInput[key];
});

var _Video = __webpack_require__(/*! ./Video */ "./node_modules/grommet/components/Video/index.js");

Object.keys(_Video).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _Video[key];
});

var _WorldMap = __webpack_require__(/*! ./WorldMap */ "./node_modules/grommet/components/WorldMap/index.js");

Object.keys(_WorldMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _WorldMap[key];
});

/***/ }),

/***/ "./node_modules/grommet/contexts/AnnounceContext/AnnounceContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet/contexts/AnnounceContext/AnnounceContext.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AnnounceContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createAnnouncer = function createAnnouncer() {
  var announcer = document.createElement('div');
  announcer.style.left = '-100%';
  announcer.style.right = '100%';
  announcer.style.position = 'fixed';
  announcer.style['z-index'] = '-1';
  document.body.insertBefore(announcer, document.body.firstChild);
  return announcer;
};

var AnnounceContext = _react.default.createContext(function (message, mode, timeout) {
  if (mode === void 0) {
    mode = 'polite';
  }

  if (timeout === void 0) {
    timeout = 500;
  }

  // we only create a new container if we don't have one already
  // we create a separate node so that grommet does not set aria-hidden to it
  var announcer = document.body.querySelector('[aria-live]') || createAnnouncer();
  announcer.setAttribute('aria-live', 'off');
  announcer.innerHTML = message;
  announcer.setAttribute('aria-live', mode);
  setTimeout(function () {
    announcer.innerHTML = '';
  }, timeout);
});

exports.AnnounceContext = AnnounceContext;

/***/ }),

/***/ "./node_modules/grommet/contexts/AnnounceContext/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet/contexts/AnnounceContext/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AnnounceContext = void 0;

var _AnnounceContext = __webpack_require__(/*! ./AnnounceContext */ "./node_modules/grommet/contexts/AnnounceContext/AnnounceContext.js");

exports.AnnounceContext = _AnnounceContext.AnnounceContext;

/***/ }),

/***/ "./node_modules/grommet/contexts/ResponsiveContext/ResponsiveContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/grommet/contexts/ResponsiveContext/ResponsiveContext.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ResponsiveContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponsiveContext = _react.default.createContext(undefined);

exports.ResponsiveContext = ResponsiveContext;

/***/ }),

/***/ "./node_modules/grommet/contexts/ResponsiveContext/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet/contexts/ResponsiveContext/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ResponsiveContext = void 0;

var _ResponsiveContext = __webpack_require__(/*! ./ResponsiveContext */ "./node_modules/grommet/contexts/ResponsiveContext/ResponsiveContext.js");

exports.ResponsiveContext = _ResponsiveContext.ResponsiveContext;

/***/ }),

/***/ "./node_modules/grommet/contexts/ThemeContext/ThemeContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet/contexts/ThemeContext/ThemeContext.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

exports.ThemeContext = _styledComponents.ThemeContext;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/grommet/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styledComponents.ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react.default.createElement(_styledComponents.ThemeContext.Consumer, null, function (theme) {
    return _react.default.createElement(_styledComponents.ThemeContext.Provider, {
      value: (0, _utils.deepMerge)(theme, value)
    }, children);
  });
};

_styledComponents.ThemeContext.Extend.propTypes = {
  children: _propTypes.default.node.isRequired,
  value: _propTypes.default.shape({}).isRequired
};

/***/ }),

/***/ "./node_modules/grommet/contexts/ThemeContext/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet/contexts/ThemeContext/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ThemeContext = void 0;

var _ThemeContext = __webpack_require__(/*! ./ThemeContext */ "./node_modules/grommet/contexts/ThemeContext/ThemeContext.js");

exports.ThemeContext = _ThemeContext.ThemeContext;

/***/ }),

/***/ "./node_modules/grommet/contexts/index.js":
/*!************************************************!*\
  !*** ./node_modules/grommet/contexts/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AnnounceContext = __webpack_require__(/*! ./AnnounceContext */ "./node_modules/grommet/contexts/AnnounceContext/index.js");

Object.keys(_AnnounceContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _AnnounceContext[key];
});

var _ResponsiveContext = __webpack_require__(/*! ./ResponsiveContext */ "./node_modules/grommet/contexts/ResponsiveContext/index.js");

Object.keys(_ResponsiveContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _ResponsiveContext[key];
});

var _ThemeContext = __webpack_require__(/*! ./ThemeContext */ "./node_modules/grommet/contexts/ThemeContext/index.js");

Object.keys(_ThemeContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _ThemeContext[key];
});

/***/ }),

/***/ "./node_modules/grommet/default-props.js":
/*!***********************************************!*\
  !*** ./node_modules/grommet/default-props.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extendDefaultTheme = exports.defaultProps = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/grommet/utils/index.js");

var _base = __webpack_require__(/*! ./themes/base */ "./node_modules/grommet/themes/base.js");

var defaultProps = {
  theme: _base.base
};
exports.defaultProps = defaultProps;

var extendDefaultTheme = function extendDefaultTheme(theme) {
  defaultProps.theme = (0, _utils.deepMerge)(_base.base, theme);
};

exports.extendDefaultTheme = extendDefaultTheme;

/***/ }),

/***/ "./node_modules/grommet/utils/DOM.js":
/*!*******************************************!*\
  !*** ./node_modules/grommet/utils/DOM.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isNodeBeforeScroll = exports.isNodeAfterScroll = exports.findVisibleParent = exports.makeNodeUnfocusable = exports.makeNodeFocusable = exports.copyAttribute = exports.setTabIndex = exports.setFocusWithoutScroll = exports.getNewContainer = exports.getBodyChildElements = exports.getFirstFocusableDescendant = exports.findScrollParents = exports.filterByFocusable = void 0;

var filterByFocusable = function filterByFocusable(elements) {
  return Array.prototype.filter.call(elements || [], function (element) {
    var currentTag = element.tagName.toLowerCase();
    var validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
    var isValidTag = currentTag.match(validTags) && element.focus;

    if (currentTag === 'a') {
      return isValidTag && element.childNodes.length > 0 && element.getAttribute('href');
    }

    if (currentTag === 'svg' || currentTag === 'div') {
      return isValidTag && element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1';
    }

    return isValidTag;
  });
};

exports.filterByFocusable = filterByFocusable;

var findScrollParents = function findScrollParents(element, horizontal) {
  var result = [];

  if (element) {
    var parent = element.parentNode;

    while (parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect(); // 10px is to account for borders and scrollbars in a lazy way

      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result.push(parent);
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }

      parent = parent.parentNode;
    } // last scrollable element will be the document
    // if nothing else is scrollable in the page


    if (result.length === 0) {
      result.push(document);
    } else if (result[0].tagName.toLowerCase() === 'body') {
      result.length = 0;
      result.push(document);
    }
  }

  return result;
};

exports.findScrollParents = findScrollParents;

var getFirstFocusableDescendant = function getFirstFocusableDescendant(element) {
  var children = element.getElementsByTagName('*');

  for (var i = 0; i < children.length; i += 1) {
    var child = children[i];
    var tagName = child.tagName.toLowerCase();

    if (tagName === 'input' || tagName === 'select') {
      return child;
    }
  }

  return undefined;
};

exports.getFirstFocusableDescendant = getFirstFocusableDescendant;

var getBodyChildElements = function getBodyChildElements() {
  var excludeMatch = /^(script|link)$/i;
  var children = [];
  [].forEach.call(document.body.children, function (node) {
    if (!excludeMatch.test(node.tagName)) {
      children.push(node);
    }
  });
  return children;
};

exports.getBodyChildElements = getBodyChildElements;

var getNewContainer = function getNewContainer() {
  // setup DOM
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
};

exports.getNewContainer = getNewContainer;

var setFocusWithoutScroll = function setFocusWithoutScroll(element) {
  var x = window.scrollX;
  var y = window.scrollY;
  element.focus();
  window.scrollTo(x, y);
};

exports.setFocusWithoutScroll = setFocusWithoutScroll;

var setTabIndex = function setTabIndex(tabIndex) {
  return function (element) {
    element.setAttribute('tabindex', tabIndex);
  };
};

exports.setTabIndex = setTabIndex;

var copyAttribute = function copyAttribute(source) {
  return function (target) {
    return function (element) {
      element.setAttribute(target, element.getAttribute(source));
    };
  };
};

exports.copyAttribute = copyAttribute;

var deleteAttribute = function deleteAttribute(attribute) {
  return function (element) {
    return element.removeAttribute(attribute);
  };
};

var unsetTabIndex = setTabIndex(-1);
var saveTabIndex = copyAttribute('tabindex')('data-g-tabindex');
var restoreTabIndex = copyAttribute('data-g-tabindex')('tabindex');
var deleteTabIndex = deleteAttribute('tabindex');
var deleteTabIndexCopy = deleteAttribute('data-g-tabindex');

var makeNodeFocusable = function makeNodeFocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', false); // allow children to receive focus again

    filterByFocusable(node.getElementsByTagName('*')).forEach(function (child) {
      if (child.hasAttribute('data-g-tabindex')) {
        restoreTabIndex(child);
      } else {
        deleteTabIndex(child);
      }

      deleteTabIndexCopy(child);
    });
  }
};

exports.makeNodeFocusable = makeNodeFocusable;

var makeNodeUnfocusable = function makeNodeUnfocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', true); // prevent children to receive focus

    filterByFocusable(node.getElementsByTagName('*')).forEach(function (child) {
      if (child.hasAttribute('tabindex')) {
        saveTabIndex(child);
      }

      unsetTabIndex(child);
    });
  }
};

exports.makeNodeUnfocusable = makeNodeUnfocusable;

var findVisibleParent = function findVisibleParent(element) {
  if (element) {
    return element.offsetParent ? element : findVisibleParent(element.parentElement) || element;
  }

  return undefined;
};

exports.findVisibleParent = findVisibleParent;

var isNodeAfterScroll = function isNodeAfterScroll(node, target) {
  if (target === void 0) {
    target = window;
  }

  var _node$getBoundingClie = node.getBoundingClientRect(),
      bottom = _node$getBoundingClie.bottom;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      height = _target$getBoundingCl.height,
      top = _target$getBoundingCl.top;

  return bottom >= top + height;
};

exports.isNodeAfterScroll = isNodeAfterScroll;

var isNodeBeforeScroll = function isNodeBeforeScroll(node, target) {
  if (target === void 0) {
    target = window;
  }

  var _node$getBoundingClie2 = node.getBoundingClientRect(),
      top = _node$getBoundingClie2.top;

  var _target$getBoundingCl2 = target.getBoundingClientRect(),
      targetTop = _target$getBoundingCl2.top;

  return top <= targetTop;
};

exports.isNodeBeforeScroll = isNodeBeforeScroll;

/***/ }),

/***/ "./node_modules/grommet/utils/background.js":
/*!**************************************************!*\
  !*** ./node_modules/grommet/utils/background.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.selectedStyle = exports.activeStyle = exports.backgroundStyle = exports.backgroundIsDark = exports.normalizeBackground = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _colors = __webpack_require__(/*! ./colors */ "./node_modules/grommet/utils/colors.js");

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/grommet/utils/styles.js");

var normalizeBackground = function normalizeBackground(background, theme) {
  // If the background has a light or dark object, use that
  var result = background;

  if (background) {
    if (theme.dark && background.dark && typeof background.dark !== 'boolean') {
      result = background.dark;
    } else if (!theme.dark && background.light && typeof background.light !== 'boolean') {
      result = background.light;
    }

    result = (0, _styles.evalStyle)(result, theme);
  }

  return result;
};

exports.normalizeBackground = normalizeBackground;

var backgroundIsDark = function backgroundIsDark(backgroundArg, theme) {
  var background = normalizeBackground(backgroundArg, theme);
  var result;

  if (background) {
    if (typeof background === 'object') {
      var color = background.color,
          dark = background.dark,
          opacity = background.opacity;

      if (typeof dark === 'boolean') {
        result = dark;
      } else if (color && ( // weak opacity means we keep the existing darkness
      !opacity || opacity !== 'weak')) {
        var backgroundColor = (0, _colors.normalizeColor)(background.color, theme);

        if (backgroundColor) {
          result = (0, _colors.colorIsDark)(backgroundColor);
        }
      }
    } else {
      var _color = (0, _colors.normalizeColor)(background, theme);

      if (_color) {
        result = (0, _colors.colorIsDark)(_color);
      }
    }
  }

  return result;
};

exports.backgroundIsDark = backgroundIsDark;

var backgroundStyle = function backgroundStyle(backgroundArg, theme, textColorArg) {
  // If the background has a light or dark object, use that
  var background = normalizeBackground(backgroundArg, theme);
  var textColor = textColorArg || theme.global.colors.text;

  if (typeof background === 'object') {
    var styles = [];

    if (background.image) {
      var color;

      if (background.dark === false) {
        color = textColor.light;
      } else if (background.dark) {
        color = textColor.dark;
      } else if (!textColorArg) {
        color = 'inherit';
      }

      styles.push((0, _styledComponents.css)(["background-image:", ";background-repeat:", ";background-position:", ";background-size:", ";color:", ";"], background.image, background.repeat || 'no-repeat', background.position || 'center center', background.size || 'cover', color));
    }

    if (background.color) {
      var _color2 = (0, _colors.normalizeColor)(background.color, theme);

      var backgroundColor = (0, _colors.getRGBA)(_color2, background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity] || background.opacity) || _color2;

      styles.push((0, _styledComponents.css)(["background-color:", ";", ""], backgroundColor, (!background.opacity || background.opacity !== 'weak') && "color: " + textColor[background.dark || (0, _colors.colorIsDark)(backgroundColor) ? 'dark' : 'light'] + ";"));
    }

    if (background.dark === false) {
      styles.push((0, _styledComponents.css)(["color:", ";"], textColor.light));
    } else if (background.dark) {
      styles.push((0, _styledComponents.css)(["color:", ";"], textColor.dark));
    }

    return styles;
  }

  if (background) {
    if (background.lastIndexOf('url', 0) === 0) {
      return (0, _styledComponents.css)(["background:", " no-repeat center center;background-size:cover;"], background);
    }

    var _color3 = (0, _colors.normalizeColor)(background, theme);

    if (_color3) {
      return (0, _styledComponents.css)(["background:", ";color:", ";"], _color3, textColor[(0, _colors.colorIsDark)(_color3) ? 'dark' : 'light']);
    }
  }

  return undefined;
};

exports.backgroundStyle = backgroundStyle;
var activeStyle = (0, _styledComponents.css)(["", " color:", ";"], function (props) {
  return backgroundStyle((0, _colors.normalizeColor)(props.theme.global.active.background, props.theme), props.theme);
}, function (props) {
  return (0, _colors.normalizeColor)(props.theme.global.active.color, props.theme);
});
exports.activeStyle = activeStyle;
var selectedStyle = (0, _styledComponents.css)(["", " color:", ";"], function (props) {
  return backgroundStyle((0, _colors.normalizeColor)(props.theme.global.selected.background, props.theme), props.theme);
}, function (props) {
  return (0, _colors.normalizeColor)(props.theme.global.selected.color, props.theme);
});
exports.selectedStyle = selectedStyle;

/***/ }),

/***/ "./node_modules/grommet/utils/debounce.js":
/*!************************************************!*\
  !*** ./node_modules/grommet/utils/debounce.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.debounceDelay = exports.debounce = void 0;

var _this = void 0;

var debounce = function debounce(cb, timer) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = _this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return cb.apply(context, args);
    }, timer);
  };
};

exports.debounce = debounce;

var debounceDelay = function debounceDelay(_ref) {
  var theme = _ref.theme;
  return theme.global.debounceDelay;
};

exports.debounceDelay = debounceDelay;

/***/ }),

/***/ "./node_modules/grommet/utils/graphics.js":
/*!************************************************!*\
  !*** ./node_modules/grommet/utils/graphics.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.translateEndAngle = exports.arcCommands = exports.polarToCartesian = exports.baseUnit = void 0;
var POST_DECIMAL_DIGITS = 10;
var baseUnit = 24;
exports.baseUnit = baseUnit;

var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};

exports.polarToCartesian = polarToCartesian;

var arcCommands = function arcCommands(centerX, centerY, radius, startAngle, endAngle) {
  // handle that we can't draw a complete circle
  var normalizedEndAngle = endAngle;

  if (endAngle - startAngle >= 360) {
    normalizedEndAngle = startAngle + 359.99;
  }

  var start = polarToCartesian(centerX, centerY, radius, normalizedEndAngle);
  var end = polarToCartesian(centerX, centerY, radius, startAngle);
  var arcSweep = normalizedEndAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x.toFixed(POST_DECIMAL_DIGITS), start.y.toFixed(POST_DECIMAL_DIGITS), 'A', radius.toFixed(POST_DECIMAL_DIGITS), radius.toFixed(POST_DECIMAL_DIGITS), 0, arcSweep, 0, end.x.toFixed(POST_DECIMAL_DIGITS), end.y.toFixed(POST_DECIMAL_DIGITS)].join(' ');
  return d;
};

exports.arcCommands = arcCommands;

var translateEndAngle = function translateEndAngle(startAngle, anglePer, value) {
  return Math.min(360, Math.max(0, startAngle + anglePer * value));
};

exports.translateEndAngle = translateEndAngle;

/***/ }),

/***/ "./node_modules/grommet/utils/index.js":
/*!*********************************************!*\
  !*** ./node_modules/grommet/utils/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _mixins = __webpack_require__(/*! ./mixins */ "./node_modules/grommet/utils/mixins.js");

Object.keys(_mixins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _mixins[key];
});

var _background = __webpack_require__(/*! ./background */ "./node_modules/grommet/utils/background.js");

Object.keys(_background).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _background[key];
});

var _colors = __webpack_require__(/*! ./colors */ "./node_modules/grommet/utils/colors.js");

Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _colors[key];
});

var _debounce = __webpack_require__(/*! ./debounce */ "./node_modules/grommet/utils/debounce.js");

Object.keys(_debounce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _debounce[key];
});

var _DOM = __webpack_require__(/*! ./DOM */ "./node_modules/grommet/utils/DOM.js");

Object.keys(_DOM).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _DOM[key];
});

var _graphics = __webpack_require__(/*! ./graphics */ "./node_modules/grommet/utils/graphics.js");

Object.keys(_graphics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _graphics[key];
});

var _propTypes = __webpack_require__(/*! ./prop-types */ "./node_modules/grommet/utils/prop-types.js");

Object.keys(_propTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _propTypes[key];
});

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/grommet/utils/styles.js");

Object.keys(_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _styles[key];
});

var _object = __webpack_require__(/*! ./object */ "./node_modules/grommet/utils/object.js");

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _object[key];
});

var _responsive = __webpack_require__(/*! ./responsive */ "./node_modules/grommet/utils/responsive.js");

Object.keys(_responsive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _responsive[key];
});

var _router = __webpack_require__(/*! ./router */ "./node_modules/grommet/utils/router.js");

Object.keys(_router).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _router[key];
});

var _throttle = __webpack_require__(/*! ./throttle */ "./node_modules/grommet/utils/throttle.js");

Object.keys(_throttle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _throttle[key];
});

var _themeDocUtils = __webpack_require__(/*! ./themeDocUtils */ "./node_modules/grommet/utils/themeDocUtils.js");

Object.keys(_themeDocUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _themeDocUtils[key];
});

/***/ }),

/***/ "./node_modules/grommet/utils/mixins.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/mixins.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getAvailableAtBadge = exports.findAllByType = exports.breakpointStyle = exports.fontSize = exports.parseMetricToNum = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var parseMetricToNum = function parseMetricToNum(fontAsString) {
  return parseFloat(fontAsString.replace(/[^0-9/.]/g, ''), 10);
};

exports.parseMetricToNum = parseMetricToNum;

var fontSize = function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], function (props) {
    return parseMetricToNum(size) / parseMetricToNum(props.theme.global.font.size) * 1 + "rem";
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToNum(size) / parseMetricToNum(props.theme.global.lineHeight)) * (parseMetricToNum(props.theme.global.lineHeight) / parseMetricToNum(size)) + "px";
  });
};

exports.fontSize = fontSize;

var breakpointStyle = function breakpointStyle(breakpoint, content) {
  return (0, _styledComponents.css)(["@media only screen ", "{", ";}"], breakpoint.value && "and (max-width: " + breakpoint.value + "px)", content);
};

exports.breakpointStyle = breakpointStyle;

var findAllByType = function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
};

exports.findAllByType = findAllByType;

var getAvailableAtBadge = function getAvailableAtBadge(availableAt) {
  return [{
    url: "https://storybook.grommet.io/?selectedKind=" + availableAt + "&full=0&addons=0&stories=1&panelRight=0",
    badge: 'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
    label: 'Storybook'
  }, {
    url: "https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=" + availableAt.toLowerCase() + "&module=%2Fsrc%2F" + availableAt + ".js",
    badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
    label: 'CodeSandbox'
  }];
};

exports.getAvailableAtBadge = getAvailableAtBadge;

/***/ }),

/***/ "./node_modules/grommet/utils/prop-types.js":
/*!**************************************************!*\
  !*** ./node_modules/grommet/utils/prop-types.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.genericProps = exports.colorPropType = exports.backgroundPropType = exports.a11yTitlePropType = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var a11yTitlePropType = _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.');

exports.a11yTitlePropType = a11yTitlePropType;

var backgroundPropType = _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
  color: _reactDesc.PropTypes.string,
  opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
})]).description('Background color');

exports.backgroundPropType = backgroundPropType;

var colorPropType = _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
  dark: _reactDesc.PropTypes.string,
  light: _reactDesc.PropTypes.string
})]);

exports.colorPropType = colorPropType;
var MARGIN_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var genericProps = {
  a11yTitle: a11yTitlePropType,
  alignSelf: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description("How to align along the cross axis when contained in\n      a Box or along the column axis when contained in a Grid."),
  gridArea: _reactDesc.PropTypes.string.description("The name of the area to place\n    this inside a parent Grid."),
  margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(MARGIN_SIZES)), _reactDesc.PropTypes.shape({
    bottom: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(MARGIN_SIZES), _reactDesc.PropTypes.string]),
    horizontal: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(MARGIN_SIZES), _reactDesc.PropTypes.string]),
    left: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(MARGIN_SIZES), _reactDesc.PropTypes.string]),
    right: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(MARGIN_SIZES), _reactDesc.PropTypes.string]),
    top: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(MARGIN_SIZES), _reactDesc.PropTypes.string]),
    vertical: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(MARGIN_SIZES), _reactDesc.PropTypes.string])
  }), _reactDesc.PropTypes.string]).description("The amount of margin around the component. An object can\n      be specified to distinguish horizontal margin, vertical margin, and\n      margin on a particular side.")
};
exports.genericProps = genericProps;

/***/ }),

/***/ "./node_modules/grommet/utils/responsive.js":
/*!**************************************************!*\
  !*** ./node_modules/grommet/utils/responsive.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDeviceBreakpoint = exports.getBreakpoint = void 0;

var getBreakpoint = function getBreakpoint(windowWidth, theme) {
  var result;
  Object.keys(theme.global.breakpoints).sort(function (a, b) {
    var first = theme.global.breakpoints[a];
    var second = theme.global.breakpoints[b];
    if (!first) return 1;
    if (!second) return -1;
    if (!first.value) return 1;
    if (!second.value) return -1;
    return first.value - second.value;
  }).some(function (name) {
    var breakpoint = theme.global.breakpoints[name];

    if (breakpoint) {
      if (!breakpoint.value || breakpoint.value >= windowWidth) {
        result = name;
        return true;
      }
    }

    return false;
  });
  return result;
};

exports.getBreakpoint = getBreakpoint;

var getDeviceBreakpoint = function getDeviceBreakpoint(type, theme) {
  return theme.global.deviceBreakpoints[type];
};

exports.getDeviceBreakpoint = getDeviceBreakpoint;

/***/ }),

/***/ "./node_modules/grommet/utils/router.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/router.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ROUTER_PROPS = void 0;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var ROUTER_PROPS = {
  path: _reactDesc.PropTypes.string.description('Indicates the path to be used for react-router link.').isRequired,
  method: _reactDesc.PropTypes.oneOf(['push', 'replace']).description('Indicates whether the browser history should be appended to or replaced.').defaultValue('push')
};
exports.ROUTER_PROPS = ROUTER_PROPS;

/***/ }),

/***/ "./node_modules/grommet/utils/styles.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/styles.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.disabledStyle = exports.genericStyles = exports.evalStyle = exports.placeholderStyle = exports.overflowStyle = exports.inputStyle = exports.focusStyle = exports.edgeStyle = exports.controlBorderStyle = exports.baseStyle = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _colors = __webpack_require__(/*! ./colors */ "./node_modules/grommet/utils/colors.js");

var _mixins = __webpack_require__(/*! ./mixins */ "./node_modules/grommet/utils/mixins.js");

var baseStyle = (0, _styledComponents.css)(["font-family:", ";font-size:", ";line-height:", ";font-weight:", ";", " box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;"], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return props.theme.global.font.size;
}, function (props) {
  return props.theme.global.font.height;
}, function (props) {
  return props.theme.global.font.weight;
}, function (props) {
  return !props.plain && props.theme.global.colors.background && (0, _styledComponents.css)(["background:", ";color:", ";"], (0, _colors.normalizeColor)('background', props.theme, true), (0, _colors.normalizeColor)('text', props.theme, true));
});
exports.baseStyle = baseStyle;
var controlBorderStyle = (0, _styledComponents.css)(["border:", " solid ", ";border-radius:", ";"], function (props) {
  return props.theme.global.control.border.width;
}, function (props) {
  return (0, _colors.normalizeColor)(props.theme.global.control.border.color || 'border', props.theme);
}, function (props) {
  return props.theme.global.control.border.radius;
});
exports.controlBorderStyle = controlBorderStyle;

var edgeStyle = function edgeStyle(kind, data, responsive, responsiveBreakpoint, theme) {
  var breakpoint = responsiveBreakpoint && theme.global.breakpoints[responsiveBreakpoint];

  if (typeof data === 'string') {
    return (0, _styledComponents.css)(["", ":", ";", ";"], kind, theme.global.edgeSize[data] || data, responsive && breakpoint ? (0, _mixins.breakpointStyle)(breakpoint, "\n        " + kind + ": " + (breakpoint.edgeSize[data] || data) + ";\n      ") : '');
  }

  var result = [];

  if (data.horizontal) {
    result.push((0, _styledComponents.css)(["", "-left:", ";", "-right:", ";", ";"], kind, theme.global.edgeSize[data.horizontal] || data.horizontal, kind, theme.global.edgeSize[data.horizontal] || data.horizontal, responsive && breakpoint ? (0, _mixins.breakpointStyle)(breakpoint, "\n        " + kind + "-left: " + (breakpoint.edgeSize[data.horizontal] || data.horizontal) + ";\n        " + kind + "-right: " + (breakpoint.edgeSize[data.horizontal] || data.horizontal) + ";\n      ") : ''));
  }

  if (data.vertical) {
    result.push((0, _styledComponents.css)(["", "-top:", ";", "-bottom:", ";", ";"], kind, theme.global.edgeSize[data.vertical] || data.vertical, kind, theme.global.edgeSize[data.vertical] || data.vertical, responsive && breakpoint ? (0, _mixins.breakpointStyle)(breakpoint, "\n        " + kind + "-top: " + (breakpoint.edgeSize[data.vertical] || data.vertical) + ";\n        " + kind + "-bottom: " + (breakpoint.edgeSize[data.vertical] || data.vertical) + ";\n      ") : ''));
  }

  if (data.top) {
    result.push((0, _styledComponents.css)(["", "-top:", ";", ";"], kind, theme.global.edgeSize[data.top] || data.top, responsive && breakpoint ? (0, _mixins.breakpointStyle)(breakpoint, "\n        " + kind + "-top: " + (breakpoint.edgeSize[data.top] || data.top) + ";\n      ") : ''));
  }

  if (data.bottom) {
    result.push((0, _styledComponents.css)(["", "-bottom:", ";", ";"], kind, theme.global.edgeSize[data.bottom] || data.bottom, responsive && breakpoint ? (0, _mixins.breakpointStyle)(breakpoint, "\n        " + kind + "-bottom: " + (breakpoint.edgeSize[data.bottom] || data.bottom) + ";\n      ") : ''));
  }

  if (data.left) {
    result.push((0, _styledComponents.css)(["", "-left:", ";", ";"], kind, theme.global.edgeSize[data.left] || data.left, responsive && breakpoint ? (0, _mixins.breakpointStyle)(breakpoint, "\n        " + kind + "-left: " + (breakpoint.edgeSize[data.left] || data.left) + ";\n      ") : ''));
  }

  if (data.right) {
    result.push((0, _styledComponents.css)(["", "-right:", ";", ";"], kind, theme.global.edgeSize[data.right] || data.right, responsive && breakpoint ? (0, _mixins.breakpointStyle)(breakpoint, "\n        " + kind + "-right: " + (breakpoint.edgeSize[data.right] || data.right) + ";\n      ") : ''));
  }

  return result;
}; // focus also supports clickable elements inside svg


exports.edgeStyle = edgeStyle;
var focusStyle = (0, _styledComponents.css)(["> circle,> ellipse,> line,> path,> polygon,> polyline,> rect{outline:", " solid 2px;}border-color:", ";box-shadow:0 0 2px 2px ", ";::-moz-focus-inner{border:0;}"], function (props) {
  return (0, _colors.normalizeColor)(props.theme.global.focus.border.color, props.theme);
}, function (props) {
  return (0, _colors.normalizeColor)(props.theme.global.focus.border.color, props.theme);
}, function (props) {
  return (0, _colors.normalizeColor)(props.theme.global.focus.border.color, props.theme);
});
exports.focusStyle = focusStyle;
var inputStyle = (0, _styledComponents.css)(["box-sizing:border-box;font-size:inherit;border:none;-webkit-appearance:none;padding:", "px;outline:none;background:transparent;color:inherit;", " margin:0;", " ", "::-webkit-search-decoration{-webkit-appearance:none;}"], function (props) {
  return (0, _mixins.parseMetricToNum)(props.theme.global.input.padding) - (0, _mixins.parseMetricToNum)(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.global.input.weight && (0, _styledComponents.css)(["font-weight:", ";"], props.theme.global.input.weight);
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, controlBorderStyle);
exports.inputStyle = inputStyle;

var overflowStyle = function overflowStyle(overflowProp) {
  if (typeof overflowProp === 'string') {
    return (0, _styledComponents.css)(["overflow:", ";"], overflowProp);
  }

  return (0, _styledComponents.css)(["", " ", ";"], overflowProp.horizontal && "overflow-x: " + overflowProp.horizontal + ";", overflowProp.vertical && "overflow-y: " + overflowProp.vertical + ";");
};

exports.overflowStyle = overflowStyle;
var placeholderColor = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return props.theme.global.colors.placeholder;
});
var placeholderStyle = (0, _styledComponents.css)(["&::-webkit-input-placeholder{", ";}&::-moz-placeholder{", ";}&:-ms-input-placeholder{", ";}"], placeholderColor, placeholderColor, placeholderColor); // evalStyle() converts a styled-components item into a string

exports.placeholderStyle = placeholderStyle;

var evalStyle = function evalStyle(arg, theme) {
  if (arg && Array.isArray(arg) && typeof arg[0] === 'function') {
    return arg[0]({
      theme: theme
    });
  }

  return arg;
};

exports.evalStyle = evalStyle;
var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var genericStyles = (0, _styledComponents.css)(["", " ", " ", ""], function (props) {
  return props.alignSelf && "align-self: " + ALIGN_SELF_MAP[props.alignSelf] + ";";
}, function (props) {
  return props.gridArea && "grid-area: " + props.gridArea + ";";
}, function (props) {
  return props.margin && edgeStyle('margin', props.margin, props.responsive, props.theme.global.edgeSize.responsiveBreakpoint, props.theme);
});
exports.genericStyles = genericStyles;

var disabledStyle = function disabledStyle(componentStyle) {
  return (0, _styledComponents.css)(["opacity:", ";cursor:default;"], function (props) {
    return componentStyle || props.theme.global.control.disabled.opacity;
  });
};

exports.disabledStyle = disabledStyle;

/***/ }),

/***/ "./node_modules/grommet/utils/themeDocUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/grommet/utils/themeDocUtils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.themeDocUtils = void 0;
var themeDocUtils = {
  // 'The possible breakpoints that could affect border, direction, gap, margin, pad, and round.',
  breakpointStyle: function breakpointStyle(description) {
    return {
      'global.breakpoints': {
        description: description,
        type: 'object',
        defaultValue: "{\n    small: {\n      value: '768px',\n      borderSize: {\n        xsmall: '1px',\n        small: '2px',\n        medium: '4px',\n        large: '6px',\n        xlarge: '12px',\n      },\n      edgeSize: {\n        none: '0px',\n        hair: '1px',\n        xxsmall: '2px',\n        xsmall: '3px',\n        small: '6px',\n        medium: '12px',\n        large: '24px',\n        xlarge: '48px',\n      },\n      size: {\n        xxsmall: '24px',\n        xsmall: '48px',\n        small: '96px',\n        medium: '192px',\n        large: '384px',\n        xlarge: '768px',\n        full: '100%',\n      },\n    },\n    medium: {\n      value: '1536px',\n    },\n    large: {},\n  }"
      }
    };
  },
  disabledStyle: {
    'global.control.disabled.opacity': {
      description: 'The opacity when a component is disabled.',
      type: 'number',
      defaultValue: 0.3
    }
  },
  edgeStyle: function edgeStyle(description) {
    return {
      'global.edgeSize': {
        description: description,
        type: 'object',
        defaultValue: "{\n    edgeSize: {\n      none: '0px',\n      hair: '1px',\n      xxsmall: '3px',\n      xsmall: '6px',\n      small: '12px',\n      medium: '24px',\n      large: '48px',\n      xlarge: '96px',\n      responsiveBreakpoint: 'small',\n    },\n  }"
      }
    };
  },
  focusStyle: {
    'global.focus.border.color': {
      description: 'The color around the component when in focus.',
      type: 'string | { dark: string, light: string }',
      defaultValue: 'focus'
    }
  },
  inputStyle: {
    'global.input.weight': {
      description: 'The font weight of the text entered.',
      type: 'number',
      defaultValue: 600
    },
    'global.input.padding': {
      description: 'The padding of the text.',
      type: 'string',
      defaultValue: '12px'
    }
  },
  placeholderStyle: {
    'global.colors.placeholder': {
      description: 'The placeholder color used for the component.',
      type: 'string',
      defaultValue: '#AAAAAA'
    }
  },
  responsiveBreakpoint: function responsiveBreakpoint(description) {
    return {
      'global.edgeSize.responsiveBreakpoint': {
        description: description,
        type: 'string',
        defaultValue: 'small'
      }
    };
  }
};
exports.themeDocUtils = themeDocUtils;

/***/ }),

/***/ "./node_modules/grommet/utils/throttle.js":
/*!************************************************!*\
  !*** ./node_modules/grommet/utils/throttle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.throttle = void 0;

var _this = void 0;

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
var throttle = function throttle(fn, threshhold, scope) {
  if (threshhold === void 0) {
    threshhold = 250;
  }

  if (scope === void 0) {
    scope = _this;
  }

  var last;
  var deferTimer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var now = Date.now();

    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(scope, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(scope, args);
    }
  };
};

exports.throttle = throttle;

/***/ }),

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
/* harmony import */ var grommet_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet/components */ "./node_modules/grommet/components/index.js");
/* harmony import */ var grommet_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/items.js";









var Items = function Items(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_8__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    key: "wrapper",
    direction: "row-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_components__WEBPACK_IMPORTED_MODULE_7__["Card"], {
      key: item.id,
      label: item.name,
      heading: item.name,
      description: item.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  } //     <Text>{item.name}</Text>
  //     <Text>{item.description}</Text>
  //     <Text>${item.price}</Text>
  //     <Text>{item.category}</Text>
  // </Box>
  ))));
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('http://localhost:8080/api/items');

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
//# sourceMappingURL=items.js.e2ea69b2ca396f606398.hot-update.js.map