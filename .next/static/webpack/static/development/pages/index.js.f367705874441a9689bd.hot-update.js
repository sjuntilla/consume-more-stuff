webpackHotUpdate("static/development/pages/index.js",{

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

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_themes_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet/themes/base */ "./node_modules/grommet/themes/base.js");
/* harmony import */ var grommet_themes_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_themes_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/utils */ "./node_modules/grommet/utils/index.js");
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_utils__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/sjuntilla/Documents/devleague/consume-more-stuff/pages/components/header.js";






var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    margin: {
      top: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "items")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.f367705874441a9689bd.hot-update.js.map