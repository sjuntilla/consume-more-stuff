webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/grommet-controls/es6/chartjs/withChartTheme/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/chartjs/withChartTheme/index.js ***!
  \***************************************************************************/
/*! exports provided: withChartTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withChartTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withChartTheme */ "./node_modules/grommet-controls/es6/chartjs/withChartTheme/withChartTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withChartTheme", function() { return _withChartTheme__WEBPACK_IMPORTED_MODULE_0__["withChartTheme"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/chartjs/withChartTheme/withChartTheme.js":
/*!************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/chartjs/withChartTheme/withChartTheme.js ***!
  \************************************************************************************/
/*! exports provided: withChartTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withChartTheme", function() { return withChartTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_object__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/colors */ "./node_modules/grommet-controls/es6/utils/colors.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var normalizedColor = function normalizedColor(color, theme) {
  return Object(_utils_colors__WEBPACK_IMPORTED_MODULE_4__["colorForName"])(Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__["normalizeColor"])(color, theme), theme);
};

// eslint-disable-next-line import/prefer-default-export
var withChartTheme = function withChartTheme(WrappedComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$classOpacity = _ref.classOpacity,
      classOpacity = _ref$classOpacity === undefined ? 0.6 : _ref$classOpacity,
      _ref$defaultScales = _ref.defaultScales,
      defaultScales = _ref$defaultScales === undefined ? [{}] : _ref$defaultScales,
      other = _objectWithoutProperties(_ref, ['classOpacity', 'defaultScales']);

  return function (_ref2) {
    var options = _ref2.options,
        data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer,
      null,
      function (theme) {
        var textColor = normalizedColor('text', theme);
        var axisColors = {
          ticks: {
            fontColor: textColor
          },
          gridLines: {
            color: normalizedColor('border', theme)
          },
          scaleLabel: {
            fontColor: textColor
          }
        };
        var defaultOptions = {
          maintainAspectRatio: false,
          title: {
            fontColor: textColor
          },
          legend: {
            labels: {
              fontColor: textColor
            }
          },
          scales: {}
        };
        var themedOptions = Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_3__["deepMerge"])(defaultOptions, options);

        themedOptions.scales.xAxes = themedOptions.scales.xAxes || defaultScales;
        themedOptions.scales.yAxes = themedOptions.scales.yAxes || defaultScales;
        themedOptions.scales.xAxes = themedOptions.scales.xAxes.map(function (x) {
          return Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_3__["deepMerge"])(axisColors, x);
        });
        themedOptions.scales.yAxes = themedOptions.scales.yAxes.map(function (y) {
          return Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_3__["deepMerge"])(axisColors, y);
        });
        var datasets = void 0;
        if (data && Array.isArray(data.datasets)) {
          datasets = data.datasets.map(function (dataset, i) {
            var backgroundColor = dataset.backgroundColor,
                borderColor = dataset.borderColor,
                color = dataset.color,
                rest = _objectWithoutProperties(dataset, ['backgroundColor', 'borderColor', 'color']);

            var newOpts = void 0;
            var themeColors = function themeColors(index, itemOpacity) {
              var lineColor = borderColor || color || Object(_utils_colors__WEBPACK_IMPORTED_MODULE_4__["colorFromIndex"])(index);
              var lineColors = Array.isArray(lineColor) ? lineColor.map(function (c) {
                return normalizedColor(c, theme);
              }) : normalizedColor(lineColor, theme);
              var fillColor = backgroundColor || lineColor;
              var opacity = itemOpacity || dataset.opacity || options && options.opacity || classOpacity;
              var fillColors = Array.isArray(fillColor) ? fillColor.map(function (c) {
                return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__["getRGBA"])(normalizedColor(c, theme), opacity);
              }) : Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__["getRGBA"])(normalizedColor(fillColor, theme), opacity);
              return {
                backgroundColor: fillColors,
                borderColor: lineColors
              };
            };
            if (options && options.themedData && dataset.data) {
              newOpts = { backgroundColor: [], borderColor: [] };
              dataset.data.forEach(function (dataRow, rIndex) {
                var colors = themeColors(rIndex, dataRow.opacity);
                newOpts.backgroundColor.push(colors.backgroundColor);
                newOpts.borderColor.push(colors.borderColor);
              });
            } else {
              newOpts = themeColors(i);
            }
            return _extends({}, newOpts, other, rest);
          });
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
          options: themedOptions,
          data: _extends({}, data, { datasets: datasets })
        });
      }
    );
  };
};


/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Avatar/Avatar.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Avatar/Avatar.js ***!
  \***********************************************************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return AvatarWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ImageStamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ImageStamp */ "./node_modules/grommet-controls/es6/components/ImageStamp/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var Avatar = function Avatar(_ref) {
  var image = _ref.image,
      title = _ref.title,
      subTitle = _ref.subTitle,
      rest = _objectWithoutProperties(_ref, ['image', 'title', 'subTitle']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
    { direction: 'row', align: 'center', gap: 'small' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageStamp__WEBPACK_IMPORTED_MODULE_4__["ImageStamp"], _extends({
      src: image,
      round: 'full'
    }, rest)),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      { justify: 'between' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        { weight: 'bold', truncate: true },
        title
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        { size: 'small', truncate: true },
        subTitle
      )
    )
  );
};

var AvatarDoc = void 0;
if (true) {
  AvatarDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Avatar/doc.js").default(Avatar); // eslint-disable-line global-require
}

var AvatarWrapper = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(AvatarDoc || Avatar);



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Avatar/doc.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Avatar/doc.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('An image with some text, can be used as a user Avatar image.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Avatar } from \'grommet-controls\';\n\n      <Avatar image=\'...\' />\n    ');

  DocumentedElement.propTypes = {
    image: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.isRequired.description('Image to be displayed.'),
    title: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Main title(name) for the Avatar.'),
    subTitle: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.isRequired.description('Secondary title for the Avatar.')
  };
  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Avatar/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Avatar/index.js ***!
  \**********************************************************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./node_modules/grommet-controls/es6/components/Avatar/Avatar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Card/Card.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Card/Card.js ***!
  \*******************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return CardWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledCard */ "./node_modules/grommet-controls/es6/components/Card/StyledCard.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props, context) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.toggleInnerContent = function (showInnner) {
      var _this$props = _this.props,
          backContent = _this$props.backContent,
          onFlip = _this$props.onFlip;

      if (backContent) {
        var flipped = _this.state.flipped;

        if (flipped !== showInnner) {
          _this.setState({ flipped: showInnner }, function () {
            if (onFlip) {
              // timeout to allow event to propagate
              setTimeout(function () {
                onFlip(showInnner);
              }, 0);
            }
          });
        }
      }
    };

    _this.onHover = function (hover) {
      _this.toggleInnerContent(hover);
    };

    _this.state = { flipped: !!props.flipped };
    return _this;
  }

  Card.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var nextFlipped = _ref.flipped;
    var flipped = this.state.flipped;

    if (nextFlipped !== undefined && nextFlipped !== flipped) {
      this.toggleInnerContent(nextFlipped);
    }
  };

  Card.prototype.render = function render() {
    var _props = this.props,
        align = _props.align,
        gap = _props.gap,
        children = _props.children,
        rest = _objectWithoutProperties(_props, ['align', 'gap', 'children']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer,
      null,
      function (theme) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _StyledCard__WEBPACK_IMPORTED_MODULE_3__["StyledCard"],
          _extends({
            theme: theme,
            align: align,
            gap: gap,
            overflow: 'hidden'
          }, rest),
          children
        );
      }
    );
  };

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Card.defaultProps = {
  align: 'center',
  border: 'all',
  elevation: 'small',
  round: 'xsmall',
  flex: false,
  gap: 'small',
  backContent: undefined,
  flipped: false,
  fill: 'horizontal',
  flipOnHover: true,
  background: 'white',
  flipDuration: 0.3
};


var CardDoc = void 0;
if (true) {
  CardDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Card/doc.js").default(Card); // eslint-disable-line global-require
}
var CardWrapper = CardDoc || Card;

CardWrapper.CardActions = function (_ref2) {
  var children = _ref2.children,
      _ref2$pad = _ref2.pad,
      pad = _ref2$pad === undefined ? 'small' : _ref2$pad,
      rest = _objectWithoutProperties(_ref2, ['children', 'pad']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
    _extends({ justifySelf: 'end', align: 'center', pad: pad, gap: 'small', border: 'top', flex: false, fill: 'horizontal', direction: 'row' }, rest),
    children
  );
};

CardWrapper.CardTitle = function (_ref3) {
  var children = _ref3.children,
      color = _ref3.color,
      textAlign = _ref3.textAlign,
      truncate = _ref3.truncate,
      _ref3$level = _ref3.level,
      level = _ref3$level === undefined ? 4 : _ref3$level,
      _ref3$pad = _ref3.pad,
      pad = _ref3$pad === undefined ? 'small' : _ref3$pad,
      _ref3$strong = _ref3.strong,
      strong = _ref3$strong === undefined ? false : _ref3$strong,
      responsive = _ref3.responsive,
      rest = _objectWithoutProperties(_ref3, ['children', 'color', 'textAlign', 'truncate', 'level', 'pad', 'strong', 'responsive']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
    _extends({ responsive: responsive, direction: 'row', fill: 'horizontal', pad: pad, border: 'bottom', gap: 'small', flex: false }, rest),
    typeof children !== 'string' ? children : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"],
      {
        level: level,
        margin: 'none',
        color: color,
        textAlign: textAlign,
        truncate: truncate,
        responsive: responsive
      },
      strong ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'strong',
        null,
        children
      ) : children
    )
  );
};

CardWrapper.CardContent = function (_ref4) {
  var children = _ref4.children,
      _ref4$pad = _ref4.pad,
      pad = _ref4$pad === undefined ? 'small' : _ref4$pad,
      rest = _objectWithoutProperties(_ref4, ['children', 'pad']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
    _extends({ pad: pad, fill: true, flex: true }, rest),
    children
  );
};

// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Card/StyledCard.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Card/StyledCard.js ***!
  \*************************************************************************/
/*! exports provided: StyledCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCard", function() { return StyledCard; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");



// eslint-disable-next-line import/prefer-default-export
var StyledCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledCard',
  componentId: 'sc-1cfdley-0'
})(['@media (max-width:', 'px){flex-basis:100%;}'], function (props) {
  return props.theme.global.breakpoints.small;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Card/doc.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Card/doc.js ***!
  \******************************************************************/
/*! exports provided: default, docCardActions, docCardTitle, docCardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docCardActions", function() { return docCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docCardTitle", function() { return docCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docCardContent", function() { return docCardContent; });
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


var PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

var ANIMATION_TYPE = react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['fadeIn', 'fadeOut', 'jiggle', 'pulse', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);

var ANIMATION_SHAPE = react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
  type: ANIMATION_TYPE,
  delay: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number,
  duration: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number,
  size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
});

/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A Card-type container, all props of Box apply.').usage('$ npm install grommet-controls\n\n    import { Card } from \'grommet-controls\';\n\n    <Card>\n      <Card.CardTitle>\n        Title\n      </Card.CardTitle>\n      <Card.CardContent>\n        card content goes here\n      </Card.CardContent>  \n    </Card>  \n');

  DocumentedElement.propTypes = {
    animation: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]))]).description('Animation effect(s) to use. \'duration\' and \'delay\' should\n        be in milliseconds. \'jiggle\' and \'pulse\' types are intended for\n        small elements, like icons.'),
    background: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      color: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
      dark: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool,
      image: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
      position: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
      opacity: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['weak', 'medium', 'strong']), react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool])
    })]).description('Either a color identifier to use for the background\n        color. For example: \'neutral-1\'. Or, a \'url()\' for an image. Dark\n        is not needed if color is provided.'),
    border: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      color: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
      side: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['small', 'medium', 'large'])
    })]).description('Include a border.').defaultValue('all'),
    elevation: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']).description('Elevated height above the underlying context, indicated\n        via a drop shadow.').defaultValue('small'),
    gap: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('The amount of spacing between child elements (title, content).').defaultValue('small'),
    margin: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['none'].concat(PAD_SIZES)), react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      bottom: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      horizontal: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      left: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      right: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      top: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      vertical: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES)
    })]).description('The amount of margin around the card. An object can\n        be specified to distinguish horizontal margin, vertical margin, and\n        margin on a particular side of the card.').defaultValue('small'),
    pad: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['none'].concat(PAD_SIZES)), react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      bottom: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      horizontal: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      left: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      right: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      top: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES),
      vertical: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(PAD_SIZES)
    })]).description('The amount of padding inside the card content. An\n        object can be specified to distinguish horizontal padding, vertical\n        padding, and padding on a particular side of the box').defaultValue('small'),
    round: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners of the card.').defaultValue('xsmall')
  };

  return DocumentedElement;
});

var docCardActions = function docCardActions(Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('Actions container, aligned at bottom of the Card. All properties of Box apply.').usage('$ npm install grommet-controls\n\n    import { CardActions } from \'grommet-controls/components/Card\';\n\n    <Card>\n      <CardActions>\n        <Button ... />\n      </CardActions>\n    </Card>\n');

  DocumentedElement.propTypes = {
    children: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Content of card actions - usually Button or Anchor elements.').isRequired
  };

  return DocumentedElement;
};

var docCardTitle = function docCardTitle(Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('Card title component. All properties of Box and Heading apply.').usage('$ npm install grommet-controls\n\n    import { Card } from \'grommet-controls\';\n\n    <Card>\n      <Card.CardTitle>\n        Title\n      </Card.CardTitle>\n    </Card>\n');

  DocumentedElement.propTypes = {
    children: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node]).description('Content of the title - a string or a react node.').isRequired
  };

  return DocumentedElement;
};

var docCardContent = function docCardContent(Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('Card content component, fills the available space and allows for scrolling if needed. All properties of Box apply.').usage('$ npm install grommet-controls\n\n    import { CardContent } from \'grommet-controls/components/Card\';\n\n    <Card>\n      <CardContent>\n        Some content\n      </CardContent>\n    </Card>\n');

  DocumentedElement.propTypes = {
    children: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Content of the card.').isRequired
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Card/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Card/index.js ***!
  \********************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./node_modules/grommet-controls/es6/components/Card/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_0__["Card"]; });

// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/CheckBoxField/CheckBoxField.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/CheckBoxField/CheckBoxField.js ***!
  \*************************************************************************************/
/*! exports provided: CheckBoxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxField", function() { return CheckBoxField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var CheckBoxField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['value', 'onChange']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
    { pad: { vertical: 'small' } },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["CheckBox"], _extends({}, rest, { onChange: function onChange() {
        return _onChange({ target: { value: !value } });
      } }))
  );
});


/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/CheckBoxField/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/CheckBoxField/index.js ***!
  \*****************************************************************************/
/*! exports provided: CheckBoxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckBoxField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBoxField */ "./node_modules/grommet-controls/es6/components/CheckBoxField/CheckBoxField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxField", function() { return _CheckBoxField__WEBPACK_IMPORTED_MODULE_0__["CheckBoxField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ColorInput/ColorInput.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ColorInput/ColorInput.js ***!
  \*******************************************************************************/
/*! exports provided: ColorInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInput", function() { return ColorInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet_icons_icons_StopFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons/icons/StopFill */ "./node_modules/grommet-icons/icons/StopFill.js");
/* harmony import */ var grommet_icons_icons_StopFill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_StopFill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MaskedInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/es6/components/MaskedInput/index.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Colors */ "./node_modules/grommet-controls/es6/components/Colors/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var StyledColorButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: 'ColorInput__StyledColorButton',
  componentId: 'sc-1g5trqd-0'
})(['display:inline-flex;svg{border:', ';fill:', ';stroke:', ';transition:none;}'], function (props) {
  return props.theme.button.border.width + ' solid ' + props.theme.global.colors.border;
}, function (props) {
  return props.selectedColor;
}, function (props) {
  return props.selectedColor;
});

var ColorInput = function (_Component) {
  _inherits(ColorInput, _Component);

  function ColorInput(props) {
    _classCallCheck(this, ColorInput);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onChange = function (e) {
      var onChange = _this.props.onChange;

      _this.setState({ selectedColor: e.target.value });
      if (onChange) {
        onChange(e);
      }
    };

    _this.onSelect = function (_ref) {
      var color = _ref.color;

      _this.setState({ selectedColor: color });
      _this.upDateValue(color);
    };

    _this.state = { selectedColor: props.value || props.defaultValue };
    return _this;
  }

  ColorInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;

    if (value !== this.props.value) {
      this.setState({ selectedColor: value });
    }
  };

  ColorInput.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        columns = _props.columns,
        wrap = _props.wrap,
        colors = _props.colors,
        size = _props.size,
        rest = _objectWithoutProperties(_props, ['columns', 'wrap', 'colors', 'size']);

    var selectedColor = this.state.selectedColor;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer,
      null,
      function (theme) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaskedInput__WEBPACK_IMPORTED_MODULE_3__["MaskedInput"], _extends({
          update: function update(_update) {
            _this2.upDateValue = _update;
          },
          dropIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            StyledColorButton,
            { theme: theme, selectedColor: selectedColor },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_StopFill__WEBPACK_IMPORTED_MODULE_2__["StopFill"], null)
          ),
          dropContent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Colors__WEBPACK_IMPORTED_MODULE_4__["Colors"], {
            color: selectedColor,
            colors: colors,
            onSelect: _this2.onSelect,
            columns: columns,
            wrap: wrap,
            size: size
          }),
          onChange: _this2.onChange
        }, rest));
      }
    );
  };

  return ColorInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ColorInput.defaultProps = {
  size: 'small',
  mask: ['#', /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/]
};


var ColorInputDoc = void 0;
if (true) {
  ColorInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/ColorInput/doc.js").default(ColorInput); // eslint-disable-line global-require
}

var ColorInputWrapper = ColorInputDoc || ColorInput;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ColorInput/doc.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ColorInput/doc.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A masked color entry field, with a drop button to select a color.\n      All properties of MaskedInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { ColorInput } from \'grommet-controls\';\n\n      <ColorInput colors={...} value={...} />\n    ');

  DocumentedElement.propTypes = {
    colors: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.isRequired.description('Color palette for the user to choose a color from.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ColorInput/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ColorInput/index.js ***!
  \**************************************************************************/
/*! exports provided: ColorInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorInput */ "./node_modules/grommet-controls/es6/components/ColorInput/ColorInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorInput", function() { return _ColorInput__WEBPACK_IMPORTED_MODULE_0__["ColorInput"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ColorInputField/ColorInputField.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ColorInputField/ColorInputField.js ***!
  \*****************************************************************************************/
/*! exports provided: ColorInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInputField", function() { return ColorInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ColorInput_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ColorInput/index */ "./node_modules/grommet-controls/es6/components/ColorInput/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var ColorInputField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorInput_index__WEBPACK_IMPORTED_MODULE_1__["ColorInput"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ColorInputField/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ColorInputField/index.js ***!
  \*******************************************************************************/
/*! exports provided: ColorInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorInputField */ "./node_modules/grommet-controls/es6/components/ColorInputField/ColorInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorInputField", function() { return _ColorInputField__WEBPACK_IMPORTED_MODULE_0__["ColorInputField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Colors/Colors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Colors/Colors.js ***!
  \***********************************************************************/
/*! exports provided: Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return ColorsWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/utils/mixins */ "./node_modules/grommet/utils/mixins.js");
/* harmony import */ var grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _StyledColors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyledColors */ "./node_modules/grommet-controls/es6/components/Colors/StyledColors.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var buildState = function buildState(props) {
  var colors = props.colors,
      color = props.color,
      columns = props.columns,
      wrap = props.wrap;

  var colorRows = [];
  var lastRow = null;
  if (colors) {
    Object.keys(colors).forEach(function (item) {
      if (_typeof(colors[item]) === 'object') {
        var row = { name: item, colors: [] };
        Object.keys(colors[item]).forEach(function (colorName) {
          var colorsColor = colors[item][colorName];
          row.colors.push({ name: colorName, color: colorsColor });
        });
        colorRows.push(row);
      } else {
        if (!lastRow) {
          lastRow = { name: undefined, colors: [] };
          colorRows.push(lastRow);
        }
        lastRow.colors.push({ name: item, color: colors[item] });
      }
    });
  }
  var colorsPerRow = columns || (colorRows.length === 1 ? Math.sqrt(colorRows[0].colors.length) : colorRows.reduce(function (res, row) {
    return Math.min(res, row.colors.length);
  }, Number.MAX_SAFE_INTEGER));
  var wrapColors = wrap;
  if (wrapColors === undefined) {
    wrapColors = columns === undefined && colorRows.length === 1;
  }
  if (wrapColors) {
    var finalRows = [];
    colorRows.forEach(function (row) {
      while (row.colors.length > 0) {
        finalRows.push({ name: row.name, colors: row.colors.splice(0, colorsPerRow) });
      }
    });
    colorRows = finalRows;
  } else {
    colorRows = colorRows.map(function (row) {
      return _extends({}, row, { colors: row.colors.filter(function (_, index) {
          return index < colorsPerRow;
        }) });
    });
  }
  var activeRow = 0;
  var activeColor = 0;
  colorRows.find(function (row, rowIndex) {
    return row.colors.find(function (item, colorIndex) {
      var found = item.color === color;
      if (found) {
        activeRow = rowIndex;
        activeColor = colorIndex;
      }
      return found;
    });
  });
  return { colorRows: colorRows, activeRow: activeRow, activeColor: activeColor };
};

var Colors = function (_Component) {
  _inherits(Colors, _Component);

  function Colors(props) {
    _classCallCheck(this, Colors);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.setActive = function (_ref) {
      var rowIndex = _ref.rowIndex,
          colorIndex = _ref.colorIndex;
      var colorRows = _this.state.colorRows;

      _this.setFocus = true;
      var activeRow = Math.min(Math.max(0, rowIndex), colorRows.length - 1);
      var color = Math.max(0, colorIndex);
      var activeColor = Math.min(color, colorRows[activeRow].colors.length - 1);
      _this.setState({
        activeRow: activeRow,
        activeColor: activeColor
      });
    };

    _this.onClickColor = function (_ref2) {
      var color = _ref2.color,
          rowIndex = _ref2.rowIndex,
          colorIndex = _ref2.colorIndex,
          rowName = _ref2.rowName,
          colorName = _ref2.colorName;
      return function () {
        var onSelect = _this.props.onSelect;

        _this.setActive({ rowIndex: rowIndex, colorIndex: colorIndex });
        if (onSelect) {
          onSelect({ color: color, rowName: rowName, colorName: colorName });
        }
      };
    };

    _this.state = buildState(props);
    return _this;
  }

  Colors.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState(buildState(nextProps));
  };

  Colors.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.setFocus) {
      var _state = this.state,
          activeRow = _state.activeRow,
          activeColor = _state.activeColor,
          colorRows = _state.colorRows;


      this.setFocus = false;
      if (colorRows[activeRow] && colorRows[activeRow].colors[activeColor] && colorRows[activeRow].colors[activeColor].buttonRef) {
        var buttonNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(colorRows[activeRow].colors[activeColor].buttonRef);
        if (buttonNode) {
          buttonNode.scrollIntoView();
          buttonNode.focus();
        }
      }
    }
  };

  Colors.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  Colors.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        wrap = _props.wrap,
        column = _props.column,
        disabled = _props.disabled,
        onSelect = _props.onSelect,
        columns = _props.columns,
        size = _props.size,
        rest = _objectWithoutProperties(_props, ['wrap', 'column', 'disabled', 'onSelect', 'columns', 'size']);

    var _state2 = this.state,
        colorRows = _state2.colorRows,
        activeRow = _state2.activeRow,
        activeColor = _state2.activeColor;

    var colors = function colors(theme, cellSize) {
      return colorRows.map(function (row, rowIndex) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _StyledColors__WEBPACK_IMPORTED_MODULE_6__["StyledRow"],
          {
            key: 'row_' + rowIndex,
            theme: theme,
            style: { width: cellSize * row.colors.length + 'px', height: cellSize + 'px' }
          },
          row.colors.map(function (color, colorIndex) {
            var isActive = activeRow === rowIndex && activeColor === colorIndex;
            var colorStyle = {
              backgroundColor: color.color,
              color: Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_4__["normalizeColor"])('text', theme),
              left: cellSize * colorIndex + 'px'
            };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _StyledColors__WEBPACK_IMPORTED_MODULE_6__["StyledColorContainer"],
              { key: 'color_' + colorIndex, size: size, theme: theme },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _StyledColors__WEBPACK_IMPORTED_MODULE_6__["StyledColor"]
                // eslint-disable-next-line no-param-reassign
                ,
                { ref: function ref(_ref3) {
                    color.buttonRef = _ref3;
                  },
                  style: colorStyle,
                  size: size,
                  theme: theme,
                  tabIndex: isActive ? '0' : '-1',
                  a11yTitle: (row.name !== undefined ? row.name : '') + ' ' + color.name,
                  plain: true,
                  active: isActive,
                  hoverIndicator: 'background',
                  onClick: _this2.onClickColor({
                    color: color.color,
                    rowIndex: rowIndex,
                    colorIndex: colorIndex,
                    colorName: color.name,
                    rowName: row.name
                  })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'span',
                  null,
                  color.color
                )
              )
            );
          })
        );
      });
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer,
      null,
      function (theme) {
        var cellSize = Object(grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_5__["parseMetricToNum"])(theme.calendar[size].daySize);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _StyledColors__WEBPACK_IMPORTED_MODULE_6__["StyledColors"],
          _extends({ size: size, theme: theme }, rest),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            grommet__WEBPACK_IMPORTED_MODULE_3__["Keyboard"],
            {
              onUp: function onUp(event) {
                event.preventDefault();
                _this2.setActive({ rowIndex: activeRow - 1, colorIndex: activeColor });
              },
              onDown: function onDown(event) {
                event.preventDefault();
                _this2.setActive({ rowIndex: activeRow + 1, colorIndex: activeColor });
              },
              onLeft: function onLeft() {
                return _this2.setActive({ rowIndex: activeRow, colorIndex: activeColor - 1 });
              },
              onRight: function onRight() {
                return _this2.setActive({ rowIndex: activeRow, colorIndex: activeColor + 1 });
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              grommet__WEBPACK_IMPORTED_MODULE_3__["Box"],
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _StyledColors__WEBPACK_IMPORTED_MODULE_6__["StyledRows"],
                { style: { height: cellSize * colorRows.length + 'px' } },
                colors(theme, cellSize)
              )
            )
          )
        );
      }
    );
  };

  return Colors;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Colors.defaultProps = {
  size: 'medium'
};


var ColorsDoc = void 0;
if (true) {
  ColorsDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Colors/doc.js").default(Colors); // eslint-disable-line global-require
}

var ColorsWrapper = ColorsDoc || Colors;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Colors/StyledColors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Colors/StyledColors.js ***!
  \*****************************************************************************/
/*! exports provided: StyledColors, StyledRows, StyledRow, StyledColorContainer, StyledColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledColors", function() { return StyledColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRows", function() { return StyledRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRow", function() { return StyledRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledColorContainer", function() { return StyledColorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledColor", function() { return StyledColor; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");



var sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(['font-size:', ';line-height:', ';'], data.fontSize, data.lineHeight);
};

var StyledColors = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledColors',
  componentId: 'sc-1pzrl24-0'
})(['', ''], function (props) {
  return sizeStyle(props);
});

var StyledRows = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledColors__StyledRows',
  componentId: 'sc-1pzrl24-1'
})(['position:relative;']);

var StyledRow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledColors__StyledRow',
  componentId: 'sc-1pzrl24-2'
})(['position:relative;display:flex;flex-direction:row;flex-justify:between;']);

var StyledColorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledColors__StyledColorContainer',
  componentId: 'sc-1pzrl24-3'
})(['flex:0 0;']);

var colorSizeStyle = function colorSizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(['width:', ';height:', ';'], data.daySize, data.daySize);
};

var StyledColor = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: 'StyledColors__StyledColor',
  componentId: 'sc-1pzrl24-4'
})(['top:0;position:absolute;display:flex;justify-content:center;align-items:center;', ' span{visibility:hidden;};transition:transform .2s;&:hover{z-index:10;width:auto;-webkit-transform:scale(2);-moz-transform:scale(2);transform:scale(2);span{visibility:visible;};);'], function (props) {
  return colorSizeStyle(props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Colors/doc.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Colors/doc.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A color selection element, with custom color palettes.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Colors } from \'grommet-controls\';\n\n      <Colors colors={...} />\n    ');

  DocumentedElement.propTypes = {
    colors: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.isRequired.description('Color palette for the user to choose a color from.'),
    color: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The default selected color.'),
    onSelect: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Called with an object containing the selected color, rowName and colorName.'),
    size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['small', 'medium', 'large']).description('What size to make it.'),
    columns: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('The maximum number of colors per row, if left emty will be calculated automatically.'),
    wrap: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('If true, will wrap any rows of colors that exceed the columns limit, otherwise will truncate larger rows.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Colors/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Colors/index.js ***!
  \**********************************************************************/
/*! exports provided: Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors */ "./node_modules/grommet-controls/es6/components/Colors/Colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _Colors__WEBPACK_IMPORTED_MODULE_0__["Colors"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DateInput/DateInput.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DateInput/DateInput.js ***!
  \*****************************************************************************/
/*! exports provided: DateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons/icons/Calendar */ "./node_modules/grommet-icons/icons/Calendar.js");
/* harmony import */ var grommet_icons_icons_Calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MaskedInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/es6/components/MaskedInput/index.js");
/* harmony import */ var _utils_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/moment */ "./node_modules/grommet-controls/es6/utils/moment.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var DateInput = function (_Component) {
  _inherits(DateInput, _Component);

  function DateInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, DateInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onSelect = function (isoDate) {
      var date = new Date(isoDate);
      _this.upDateValue(Object(_utils_moment__WEBPACK_IMPORTED_MODULE_4__["smallDate"])(date));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DateInput.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        value = _props.value,
        bounds = _props.bounds,
        dates = _props.dates,
        disabledDates = _props.disabledDates,
        autocorrect = _props.autocorrect,
        firstDayOfWeek = _props.firstDayOfWeek,
        locale = _props.locale,
        size = _props.size,
        userMask = _props.mask,
        rest = _objectWithoutProperties(_props, ['value', 'bounds', 'dates', 'disabledDates', 'autocorrect', 'firstDayOfWeek', 'locale', 'size', 'mask']);

    var mask = void 0;
    if (userMask) {
      mask = { mask: userMask };
    } else if (autocorrect) {
      mask = {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        pipe: _MaskedInput__WEBPACK_IMPORTED_MODULE_3__["MaskedInput"].createAutoCorrectedDatePipe(),
        keepCharPositions: true
      };
    } else {
      mask = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] };
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaskedInput__WEBPACK_IMPORTED_MODULE_3__["MaskedInput"], _extends({
      update: function update(_update) {
        _this2.upDateValue = _update;
      },
      value: value,
      dropContent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
        { pad: 'small' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Calendar"], {
          date: value,
          onSelect: this.onSelect,
          bounds: bounds,
          dates: dates,
          disabled: disabledDates,
          firstDayOfWeek: firstDayOfWeek,
          locale: locale,
          size: size
        })
      )
    }, _extends({}, rest, mask)));
  };

  return DateInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DateInput.defaultProps = {
  dropIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_Calendar__WEBPACK_IMPORTED_MODULE_2__["Calendar"], null),
  size: 'small',
  a11yDropTitle: 'Open calendar'
};


var DateInputDoc = void 0;
if (true) {
  DateInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/DateInput/doc.js").default(DateInput); // eslint-disable-line global-require
}

var DateInputWrapper = DateInputDoc || DateInput;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DateInput/doc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DateInput/doc.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A masked date entry field with a drop down calendar.\n      All properties of MaskedInput apply\n      ').usage('\n    $ npm install grommet-controls\n\n    import { DateInput } from \'grommet-controls\';\n\n    <DateInput value={...} />\n    ');

  DocumentedElement.propTypes = {
    autocorrect: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Use mask that wil attempt to auto-correct the entry as the user types'),
    disabled: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Setting to true causes the input to be disabled.'),
    bounds: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string).description('An array of two numbers indicating the limits on\n        navigation in ISO8601 format'),
    disabledDates: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string)])).description('Multiple dates in ISO8601 format that should not be\n        selectable. Items that are an array indicate a range of dates.'),
    firstDayOfWeek: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf([0, 1]).description('The first day of the week. 0 for Sunday. 1 for Monday.'),
    locale: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The locale to use.'),
    size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['small', 'medium', 'large']).description('Size of the calendar drop.'),
    value: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].instanceOf(Date), react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string]).description('The date value is Date format of ISO string')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DateInput/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DateInput/index.js ***!
  \*************************************************************************/
/*! exports provided: DateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateInput */ "./node_modules/grommet-controls/es6/components/DateInput/DateInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return _DateInput__WEBPACK_IMPORTED_MODULE_0__["DateInput"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DateInputField/DateInputField.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DateInputField/DateInputField.js ***!
  \***************************************************************************************/
/*! exports provided: DateInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInputField", function() { return DateInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DateInput_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DateInput/index */ "./node_modules/grommet-controls/es6/components/DateInput/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var DateInputField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateInput_index__WEBPACK_IMPORTED_MODULE_1__["DateInput"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DateInputField/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DateInputField/index.js ***!
  \******************************************************************************/
/*! exports provided: DateInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateInputField */ "./node_modules/grommet-controls/es6/components/DateInputField/DateInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInputField", function() { return _DateInputField__WEBPACK_IMPORTED_MODULE_0__["DateInputField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DropInput/DropInput.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DropInput/DropInput.js ***!
  \*****************************************************************************/
/*! exports provided: DropInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropInput", function() { return DropInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons/icons/FormDown */ "./node_modules/grommet-icons/icons/FormDown.js");
/* harmony import */ var grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _StyledDropInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StyledDropInput */ "./node_modules/grommet-controls/es6/components/DropInput/StyledDropInput.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var DropInput = function (_Component) {
  _inherits(DropInput, _Component);

  function DropInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, DropInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { open: false }, _this.onUpdateValue = function (value) {
      var onChange = _this.props.onChange;

      _this.inputControlRef.value = value;
      _this.setState({ open: false });
      if (onChange) {
        onChange({ target: _this.inputControlRef });
      }
    }, _this.onOpen = function (e) {
      var _this$props = _this.props,
          onOpen = _this$props.onOpen,
          disabled = _this$props.disabled;

      _this.setState({ open: true });
      if (onOpen && !disabled) {
        onOpen(e);
      }
    }, _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          disabled = _this$props2.disabled;

      _this.setState({ open: false });
      if (onClose && !disabled) {
        onClose(e);
      }
    }, _this.onKeyDown = function (e) {
      var onKeyDown = _this.props.onKeyDown;

      _this.setState({ open: true });
      if (onKeyDown) {
        onKeyDown(e);
      }
    }, _this.onKeyUp = function (e) {
      var onKeyUp = _this.props.onKeyUp;

      _this.setState({ open: false });
      if (onKeyUp) {
        onKeyUp(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DropInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        defaultValue = nextProps.defaultValue;

    if (value !== this.props.value || defaultValue !== this.props.defaultValue) {
      this.onClose();
    }
  };

  DropInput.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        a11yDropTitle = _props.a11yDropTitle,
        dropAlign = _props.dropAlign,
        dropTarget = _props.dropTarget,
        update = _props.update,
        widgets = _props.widgets,
        onOpen = _props.onOpen,
        onClose = _props.onClose,
        onKeyDown = _props.onKeyDown,
        onKeyUp = _props.onKeyUp,
        dropContent = _props.dropContent,
        dropIcon = _props.dropIcon,
        disabled = _props.disabled,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'a11yDropTitle', 'dropAlign', 'dropTarget', 'update', 'widgets', 'onOpen', 'onClose', 'onKeyDown', 'onKeyUp', 'dropContent', 'dropIcon', 'disabled']);

    var open = this.state.open;

    if (typeof update === 'function') {
      update(this.onUpdateValue);
    }
    var numWidgets = (dropContent ? 1 : 0) + (widgets ? widgets.length : 0);
    var decorations = void 0;
    if (numWidgets > 0) {
      var drop = void 0;
      if (dropContent) {
        drop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["DropButton"], {
          a11yTitle: a11yDropTitle,
          disabled: disabled,
          dropAlign: dropAlign,
          dropTarget: dropTarget,
          open: open,
          tabIndex: '-1',
          focusIndicator: false,
          onOpen: this.onOpen,
          onClose: this.onClose,
          dropContent: dropContent,
          icon: dropIcon
        });
      }
      decorations = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _StyledDropInput__WEBPACK_IMPORTED_MODULE_5__["StyledWidgetsContainer"],
        {
          align: 'center',
          direction: 'row'
        },
        widgets.map(function (widget, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__["Button"], _extends({ disabled: disabled, tabIndex: '-1', key: 'widget_' + index }, widget));
        }),
        drop
      );
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_4__["Keyboard"],
      { onDown: this.onKeyDown, onUp: this.onKeyUp },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _StyledDropInput__WEBPACK_IMPORTED_MODULE_5__["StyledDropInputContainer"],
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer,
          null,
          function (theme) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledDropInput__WEBPACK_IMPORTED_MODULE_5__["StyledDropInput"], _extends({
              ref: function ref(_ref) {
                _this2.inputControlRef = _ref && Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(_ref);
              },
              theme: theme,
              disabled: disabled,
              numWidgets: numWidgets,
              'aria-label': a11yTitle
            }, rest));
          }
        ),
        decorations
      )
    );
  };

  return DropInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DropInput.defaultProps = {
  dropAlign: { top: 'bottom', right: 'left' },
  dropIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_3__["FormDown"], null),
  type: 'text',
  widgets: []
};


var DropInputDoc = void 0;
if (true) {
  DropInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/DropInput/doc.js").default(DropInput); // eslint-disable-line global-require
}

var DropInputWrapper = DropInputDoc || DropInput;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DropInput/StyledDropInput.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DropInput/StyledDropInput.js ***!
  \***********************************************************************************/
/*! exports provided: StyledDropInput, StyledDropInputContainer, StyledWidgetsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledDropInput", function() { return StyledDropInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledDropInputContainer", function() { return StyledDropInputContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledWidgetsContainer", function() { return StyledWidgetsContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet/utils/mixins */ "./node_modules/grommet/utils/mixins.js");
/* harmony import */ var grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_2__);




var StyledDropInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["TextInput"]).withConfig({
  displayName: 'StyledDropInput',
  componentId: 'mqzg2z-0'
})(['padding-right:', 'px;'], function (props) {
  var widgetsBox = props.numWidgets * (24 + 2 * Object(grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_2__["parseMetricToNum"])(props.theme.global.edgeSize.small));

  // eslint-disable-next-line no-mixed-operators
  return widgetsBox + Object(grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_2__["parseMetricToNum"])(props.theme.global.spacing) / 2 - Object(grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_2__["parseMetricToNum"])(props.theme.global.control.border.width);
});

var StyledDropInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledDropInput__StyledDropInputContainer',
  componentId: 'mqzg2z-1'
})(['position:relative;width:100%;cursor:pointer;']);

var StyledWidgetsContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledDropInput__StyledWidgetsContainer',
  componentId: 'mqzg2z-2'
})(['position:absolute;right:0;top:', ';'], function (props) {
  return -Object(grommet_utils_mixins__WEBPACK_IMPORTED_MODULE_2__["parseMetricToNum"])(props.theme.button.padding.vertical) + 'px';
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DropInput/doc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DropInput/doc.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('An Input control with an optional drop button with the specified \'dropContent\' or widgets.').usage('\n    $ npm install grommet-controls\n\n    import { DropInput } from \'grommet-controls\';\n\n    <DropInput dropContent={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__["a11yTitlePropType"],
    a11yDropTitle: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Custom drop button title to be used by screen readers..'),
    placeholder: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Placeholder text to use when no value is provided.'),
    value: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number]).description('Value for the field.'),
    id: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The id attribute of the input.'),
    name: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The name attribute of the input.'),
    disabled: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Setting to true causes the input to be disabled.'),
    onChange: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user enters a new valuu.'),
    focusIndicator: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether the plain text input should receive a focus outline.'),
    plain: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether this is a plain input with no border or padding.\nOnly use this when the containing context provides sufficient affordance'),
    dropContent: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Content to put inside the Drop.'),
    dropIcon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon for drop content.'),
    widgets: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      icon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.isRequired
    })).description('Additional widgets to be placed next to the input.'),
    onClose: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Callback for when the drop is closed')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/DropInput/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/DropInput/index.js ***!
  \*************************************************************************/
/*! exports provided: DropInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropInput */ "./node_modules/grommet-controls/es6/components/DropInput/DropInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropInput", function() { return _DropInput__WEBPACK_IMPORTED_MODULE_0__["DropInput"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/EmailInput/EmailInput.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/EmailInput/EmailInput.js ***!
  \*******************************************************************************/
/*! exports provided: EmailInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return EmailInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MaskedInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/es6/components/MaskedInput/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var EmailInput = function (_Component) {
  _inherits(EmailInput, _Component);

  function EmailInput() {
    _classCallCheck(this, EmailInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  EmailInput.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaskedInput__WEBPACK_IMPORTED_MODULE_1__["MaskedInput"], _extends({
      inputMode: 'email'
    }, this.props));
  };

  return EmailInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EmailInput.defaultProps = {
  mask: _MaskedInput__WEBPACK_IMPORTED_MODULE_1__["MaskedInput"].emailMask
};


var EmailInputDoc = void 0;
if (true) {
  EmailInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/EmailInput/doc.js").default(EmailInput); // eslint-disable-line global-require
}

var EmailInputWrapper = EmailInputDoc || EmailInput;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/EmailInput/doc.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/EmailInput/doc.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A masked input with a default mask for handling email addresses.\n      All properties of MaskedInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { EmailInput } from \'grommet-controls\';\n\n      <EmailInput value={...} />\n    ');

  DocumentedElement.propTypes = {};

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/EmailInput/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/EmailInput/index.js ***!
  \**************************************************************************/
/*! exports provided: EmailInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailInput */ "./node_modules/grommet-controls/es6/components/EmailInput/EmailInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return _EmailInput__WEBPACK_IMPORTED_MODULE_0__["EmailInput"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/EmailInputField/EmailInputField.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/EmailInputField/EmailInputField.js ***!
  \*****************************************************************************************/
/*! exports provided: EmailInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInputField", function() { return EmailInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EmailInput_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EmailInput/index */ "./node_modules/grommet-controls/es6/components/EmailInput/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var EmailInputField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmailInput_index__WEBPACK_IMPORTED_MODULE_1__["EmailInput"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/EmailInputField/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/EmailInputField/index.js ***!
  \*******************************************************************************/
/*! exports provided: EmailInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailInputField */ "./node_modules/grommet-controls/es6/components/EmailInputField/EmailInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailInputField", function() { return _EmailInputField__WEBPACK_IMPORTED_MODULE_0__["EmailInputField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Form/Form.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Form/Form.js ***!
  \*******************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return FormWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet/utils/DOM */ "./node_modules/grommet/utils/DOM.js");
/* harmony import */ var grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_object__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormState */ "./node_modules/grommet-controls/es6/components/Form/FormState.js");
/* harmony import */ var _StyledForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyledForm */ "./node_modules/grommet-controls/es6/components/Form/StyledForm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var styledComponents = {
  form: _StyledForm__WEBPACK_IMPORTED_MODULE_6__["StyledForm"]
};

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props, context) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.config = {};
    var formState = new _FormState__WEBPACK_IMPORTED_MODULE_5__["FormState"](_this.config, props.object, function () {
      var errors = _this.state.errors;

      if (errors) {
        _this.setState({ errors: formState.getErrors() });
      } else {
        if (_this.props.onValidForm) {
          _this.props.onValidForm();
        }
        _this.setState({ data: formState.get() });
      }
      if (_this.props.onInvalidForm) {
        _this.props.onInvalidForm(!formState.isValid());
      }
    });
    _this.state = {
      config: {}, errors: undefined, submitted: false, formState: formState, data: formState.get()
    };
    return _this;
  }

  Form.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.object && JSON.stringify(nextProps.object) !== JSON.stringify(this.state.object)) {
      var newObject = Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_4__["deepMerge"])(this.state.data, nextProps.object);
      this.state.formState.setObject(newObject);
      this.setState({ data: newObject });
    }
  };

  Form.prototype.componentDidMount = function componentDidMount() {
    var focusFirstChild = this.props.focusFirstChild;

    if (focusFirstChild) {
      var items = this.containerRef.getElementsByTagName('*');
      items = Object(grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_3__["filterByFocusable"])(items);
      if (items.length > 0) {
        setTimeout(function () {
          items[0].focus();
        }, 0);
      }
    }
    this.state.formState.updateFields(this.config);
  };

  Form.prototype.getChildContext = function getChildContext() {
    return {
      form: {
        attachToForm: this.attachToForm,
        detachFromForm: this.detachFromForm,
        getFieldValue: this.getFieldValue,
        getFieldErrors: this.getFieldErrors,
        onFieldChange: this.updateObject
      }
    };
  };

  Form.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        a11yTitle = _props.a11yTitle,
        onSubmitError = _props.onSubmitError,
        onValidForm = _props.onValidForm,
        onInvalidForm = _props.onInvalidForm,
        onSubmit = _props.onSubmit,
        tag = _props.tag,
        rest = _objectWithoutProperties(_props, ['children', 'a11yTitle', 'onSubmitError', 'onValidForm', 'onInvalidForm', 'onSubmit', 'tag']);

    var StyledComponent = styledComponents[tag];
    if (!StyledComponent) {
      StyledComponent = _StyledForm__WEBPACK_IMPORTED_MODULE_6__["StyledForm"].withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      StyledComponent,
      {
        onSubmit: this.onSubmit,
        'aria-label': a11yTitle
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
        { direction: 'row' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
          rest,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { ref: function ref(_ref) {
                _this2.containerRef = _ref;
              } },
            children
          )
        )
      )
    );
  };

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Form.childContextTypes = {
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onSubmit = function (event) {
    var formState = _this3.state.formState;
    var _props2 = _this3.props,
        onSubmit = _props2.onSubmit,
        onSubmitError = _props2.onSubmitError;

    event.preventDefault();
    if (formState.isValid()) {
      _this3.setState({ errors: undefined });
      if (onSubmit) {
        onSubmit(formState.get());
      }
    } else {
      var errors = formState.getErrors();
      if (onSubmitError) {
        onSubmitError(errors);
      }
      _this3.setState({ errors: errors });
    }
  };

  this.updateObject = function (name, value, e) {
    _this3.state.data[name] = value;
    if (_this3.props.onChange) {
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation();
      }
      _this3.props.onChange(e);
    }
  };

  this.attachToForm = function (name, props) {
    var _extends2;

    _this3.config = _extends({}, _this3.config, (_extends2 = {}, _extends2[name] = props, _extends2));
  };

  this.detachFromForm = function (name) {
    delete _this3.config[name];
  };

  this.getFieldValue = function (name) {
    return _this3.state.data[name];
  };

  this.getFieldErrors = function (name) {
    return _this3.state.errors ? _this3.state.errors[name] : null;
  };
};

Form.defaultProps = {
  focusFirstChild: true,
  onChange: undefined,
  onSubmit: undefined,
  onSubmitError: undefined,
  onInvalidForm: undefined,
  onValidForm: undefined,
  object: {},
  tag: 'form',
  basis: 'medium'
};

var FormDoc = void 0;
if (true) {
  FormDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Form/doc.js").default(Form); // eslint-disable-line global-require
}

var FormWrapper = FormDoc || Form;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Form/FormState.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Form/FormState.js ***!
  \************************************************************************/
/*! exports provided: FormState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormState", function() { return FormState; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-param-reassign */
var FormState = function FormState(fields, object, onChange) {
  _classCallCheck(this, FormState);

  _initialiseProps.call(this);

  this.fields = fields;
  this.onChange = onChange;
  this.setObject(object);
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.setObject = function () {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _this.validator = {
      set: function set(obj, prop, value) {
        if (Array.isArray(value)) {
          obj[prop] = value.map(function (v) {
            return new Proxy(v, _this.validator);
          });
        } else if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          obj[prop] = new Proxy(value, _this.validator);
        } else {
          obj[prop] = value;
        }
        if (_this.onChange) {
          _this.onChange(prop, value, object);
        }
        return true;
      }
    };
    _this.proxyObj = new Proxy(object, _this.validator);
  };

  this.get = function () {
    return _this.proxyObj;
  };

  this.updateFields = function (fields) {
    _this.fields = fields;
  };

  this.getErrors = function () {
    var errors = {};
    var addError = function addError(key, field, message) {
      if (!errors[key]) {
        errors[key] = [];
      }
      var msg = void 0;
      if (typeof message === 'function') {
        msg = message(field.description || field.label || key);
      } else {
        msg = message;
      }
      errors[key].push(msg);
    };
    Object.keys(_this.fields).forEach(function (key) {
      var field = _this.fields[key];
      var rules = field.validation;
      if (rules) {
        if (!Array.isArray(rules)) {
          rules = [rules];
        }

        var _loop = function _loop(i) {
          var rule = rules[i];
          if (typeof rule === 'function') {
            var value = _this.proxyObj[key];
            if (Array.isArray(value)) {
              var arrayErrors = [];
              value.forEach(function (v, index) {
                var message = rule(_this.proxyObj, _this.proxyObj[key], index);
                if (message) {
                  arrayErrors[index] = message;
                }
              });
              if (arrayErrors.length) {
                addError(key, field, arrayErrors);
              }
            } else {
              var message = rule(_this.proxyObj, _this.proxyObj[key]);
              if (message) {
                addError(key, field, message);
              }
            }
          } else if (rule !== null && (typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) === 'object') {
            if (rule.rule && typeof rule.rule === 'function') {
              var isValid = rule.rule(_this.proxyObj, _this.proxyObj[key]);
              if (!isValid) {
                if (typeof rule.message === 'function') {
                  addError(key, field, rule.message(field.label || key));
                } else {
                  addError(key, field, rule.message);
                }
              }
            }
          }
        };

        for (var i = 0; i < rules.length; i += 1) {
          _loop(i);
        }
      }
    });
    return errors;
  };

  this.isValid = function () {
    return !Object.keys(_this.getErrors()).length;
  };
};



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Form/StyledForm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Form/StyledForm.js ***!
  \*************************************************************************/
/*! exports provided: StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: 'StyledForm',
  componentId: 'rr1xyd-0'
})(['width:100%;']);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Form/doc.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Form/doc.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A Form with built-in validation.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Form } from \'grommet-controls\';\n\n      <Form onSubmit={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__["a11yTitlePropType"],
    basis: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4', 'auto']).description('A fixed or relative size along the form\'s container main axis.'),
    focusFirstChild: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether to focus the first form control on mounting.').defaultValue('true'),
    object: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Initial values of the form data object.'),
    onSubmit: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('A function called when the user successfully submits the form.'),
    onChange: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('A function invoked when any of the values in the form are changing.'),
    onSubmitError: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('A function invoked when an error occured during submitting.'),
    onInvalidForm: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('A function invoked on every change when the form is invalid.'),
    tag: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The DOM tag to use for the form.').defaultValue('form')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Form/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Form/index.js ***!
  \********************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./node_modules/grommet-controls/es6/components/Form/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["Form"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Header/Header.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Header/Header.js ***!
  \***********************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return HeaderWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledHeader */ "./node_modules/grommet-controls/es6/components/Header/StyledHeader.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Header = function Header(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _StyledHeader__WEBPACK_IMPORTED_MODULE_1__["StyledHeader"],
    _extends({
      tag: 'header'
    }, rest),
    children
  );
};

Header.defaultProps = {
  position: 'relative',
  zIndex: 10,
  direction: 'row',
  background: 'brand',
  fill: 'horizontal',
  justify: 'between',
  align: 'center',
  elevation: 'medium',
  pad: 'medium'
};

var HeaderDoc = void 0;
if (true) {
  HeaderDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Header/doc.js").default(Header); // eslint-disable-line global-require
}

var HeaderWrapper = HeaderDoc || Header;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Header/StyledHeader.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Header/StyledHeader.js ***!
  \*****************************************************************************/
/*! exports provided: StyledHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");



var StyledHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledHeader',
  componentId: 'sc-1gbif7k-0'
})(['position:', ';', ''], function (props) {
  return props.position;
}, function (props) {
  if (props.position === 'fixed' || props.position === 'absolute' || props.position === 'sticky') {
    return '\n        top: 0;\n        left: auto;\n        right: 0;  \n        z-index: ' + props.zIndex + ';\n      ';
  }
  return undefined;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Header/doc.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Header/doc.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A page header component.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Header } from \'grommet-controls\';\n\n      <Header>\n        ...\n      </Header>  \n    ');

  DocumentedElement.propTypes = {
    position: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']).description('Position property for the header element').defaultValue('relative'),
    zIndex: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('z-index for the header.').defaultValue(10)
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Header/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Header/index.js ***!
  \**********************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./node_modules/grommet-controls/es6/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/IconButton/IconButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/IconButton/IconButton.js ***!
  \*******************************************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButtonWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledIconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledIconButton */ "./node_modules/grommet-controls/es6/components/IconButton/StyledIconButton.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IconButton = function (_React$Component) {
  _inherits(IconButton, _React$Component);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  IconButton.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledIconButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.props, {
      hoverIndicator: {
        dark: {
          color: 'dark-2',
          opacity: '1'
        },
        light: {
          color: 'light-2',
          opacity: '1'
        },
        border: {
          radius: '50%'
        }
      }
    }));
  };

  return IconButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var IconButtonDoc = void 0;
if (true) {
  IconButtonDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/IconButton/doc.js").default(IconButton); // eslint-disable-line global-require
}

var IconButtonWrapper = IconButtonDoc || IconButton;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/IconButton/StyledIconButton.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/IconButton/StyledIconButton.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: 'StyledIconButton',
  componentId: 'jncvnb-0'
})(['border-radius:50%;']));

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/IconButton/doc.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/IconButton/doc.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A Button with a hover effect, all properties of Button apply.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { IconButton } from \'grommet-controls\';\n\n      <IconButton icon=\'...\' />\n    ');

  DocumentedElement.propTypes = {
    icon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon element to place in the button.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/IconButton/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/IconButton/index.js ***!
  \**************************************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconButton */ "./node_modules/grommet-controls/es6/components/IconButton/IconButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _IconButton__WEBPACK_IMPORTED_MODULE_0__["IconButton"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ImageStamp/ImageStamp.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ImageStamp/ImageStamp.js ***!
  \*******************************************************************************/
/*! exports provided: ImageStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStamp", function() { return ImageStampWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledImageStamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledImageStamp */ "./node_modules/grommet-controls/es6/components/ImageStamp/StyledImageStamp.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SIZE_MAP = {
  small: 'medium',
  medium: 'large',
  large: 'xlarge',
  xlarge: 'xxlarge'
};

var ImageStamp = function (_Component) {
  _inherits(ImageStamp, _Component);

  function ImageStamp() {
    _classCallCheck(this, ImageStamp);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ImageStamp.prototype.render = function render() {
    var _props = this.props,
        size = _props.size,
        rest = _objectWithoutProperties(_props, ['size']);

    return this.props.src ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledImageStamp__WEBPACK_IMPORTED_MODULE_1__["StyledImageStamp"], _extends({ size: SIZE_MAP[size] }, rest)) : null;
  };

  return ImageStamp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ImageStamp.defaultProps = {
  size: 'medium'
};


var ImageStampDoc = void 0;
if (true) {
  ImageStampDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/ImageStamp/doc.js").default(ImageStamp); // eslint-disable-line global-require
}

var ImageStampWrapper = ImageStampDoc || ImageStamp;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ImageStamp/StyledImageStamp.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ImageStamp/StyledImageStamp.js ***!
  \*************************************************************************************/
/*! exports provided: StyledImageStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledImageStamp", function() { return StyledImageStamp; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet_utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/styles */ "./node_modules/grommet/utils/styles.js");
/* harmony import */ var grommet_utils_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_styles__WEBPACK_IMPORTED_MODULE_1__);



var ROUND_MAP = {
  'full': '100%'
};

var StyledImageStamp = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: 'StyledImageStamp',
  componentId: 'sc-14qw7ay-0'
})(['', ';', ' ', ' overflow:hidden;object-fit:cover;border-radius:', ';-webkit-border-radius:', ';-moz-border-radius:', ';'], function (props) {
  return !props.plain && grommet_utils_styles__WEBPACK_IMPORTED_MODULE_1__["controlBorderStyle"];
}, function (props) {
  return (!props.contain || props.contain === 'width') && props.size && Object(grommet_utils_styles__WEBPACK_IMPORTED_MODULE_1__["edgeStyle"])('width', props.size, props.responsive, undefined, props.theme);
}, function (props) {
  return (!props.contain || props.contain === 'height') && props.size && Object(grommet_utils_styles__WEBPACK_IMPORTED_MODULE_1__["edgeStyle"])('height', props.size, props.responsive, undefined, props.theme);
}, function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
}, function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
}, function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ImageStamp/doc.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ImageStamp/doc.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A small image stamp used for avatars or image thumbnails.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { ImageStamp } from \'grommet-controls\';\n\n      <ImageStamp src=\'...\' />\n    ');

  DocumentedElement.propTypes = {
    contain: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['width', 'height']).description('Adjust width/heigh if image is not square. By default, the image is cut off square').defaultValue(null),
    round: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners of the stamp.'),
    size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['small', 'medium', 'large', 'xlarge']).description('The size of the image stamp.').defaultValue('medium'),
    plain: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether this is a plain image with no border.').defaultValue(false)
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/ImageStamp/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/ImageStamp/index.js ***!
  \**************************************************************************/
/*! exports provided: ImageStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageStamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageStamp */ "./node_modules/grommet-controls/es6/components/ImageStamp/ImageStamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageStamp", function() { return _ImageStamp__WEBPACK_IMPORTED_MODULE_0__["ImageStamp"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/MaskedInput/MaskedInput.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/MaskedInput/MaskedInput.js ***!
  \*********************************************************************************/
/*! exports provided: MaskedInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedInput", function() { return MaskedInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var text_mask_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! text-mask-core */ "./node_modules/text-mask-core/dist/textMaskCore.js");
/* harmony import */ var text_mask_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(text_mask_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var text_mask_addons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! text-mask-addons */ "./node_modules/text-mask-addons/dist/textMaskAddons.js");
/* harmony import */ var text_mask_addons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DropInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DropInput */ "./node_modules/grommet-controls/es6/components/DropInput/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/grommet-controls/es6/components/MaskedInput/utils.js");
/* harmony import */ var _minMaxNumberPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minMaxNumberPipe */ "./node_modules/grommet-controls/es6/components/MaskedInput/minMaxNumberPipe.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MaskedInput = function (_Component) {
  _inherits(MaskedInput, _Component);

  function MaskedInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, MaskedInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onInput = function (event) {
      var onInput = _this.props.onInput;

      if (_this.textMaskInputElement) {
        _this.textMaskInputElement.update(event.target.value);
      }
      if (onInput) {
        onInput(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MaskedInput.prototype.initTextMask = function initTextMask() {
    var props = this.props,
        value = this.props.value;

    if (props.mask && this.inputControlRef) {
      this.textMaskInputElement = Object(text_mask_core__WEBPACK_IMPORTED_MODULE_2__["createTextMaskInputElement"])(_extends({
        inputElement: this.inputControlRef
      }, props));
      this.textMaskInputElement.update(value);
    }
  };

  MaskedInput.prototype.componentDidMount = function componentDidMount() {
    this.initTextMask();
  };

  MaskedInput.prototype.componentDidUpdate = function componentDidUpdate() {
    this.initTextMask();
  };

  MaskedInput.prototype.maskedValue = function maskedValue(value) {
    if (value === undefined) {
      return undefined;
    }
    var mask = this.props.mask;

    if (value) {
      var conformed = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformMaskedValue"])(value, mask, this.props);
      return conformed;
    }
    return value;
  };

  MaskedInput.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        defaultValue = _props.defaultValue,
        value = _props.value,
        mask = _props.mask,
        guide = _props.guide,
        showMask = _props.showMask,
        pipe = _props.pipe,
        placeholderChar = _props.placeholderChar,
        keepCharPositions = _props.keepCharPositions,
        onMaskedValue = _props.onMaskedValue,
        rest = _objectWithoutProperties(_props, ['defaultValue', 'value', 'mask', 'guide', 'showMask', 'pipe', 'placeholderChar', 'keepCharPositions', 'onMaskedValue']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropInput__WEBPACK_IMPORTED_MODULE_4__["DropInput"], _extends({
      ref: function ref(_ref) {
        _this2.inputControlRef = _ref && Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(_ref).getElementsByTagName('input')[0];
      },
      value: this.maskedValue(value),
      defaultValue: this.maskedValue(defaultValue),
      onInput: this.onInput
    }, rest));
  };

  return MaskedInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

MaskedInput.defaultProps = {
  type: 'text',
  guide: true,
  showMask: false,
  placeholderChar: '\u2000'
};


var MaskedInputDoc = void 0;
if (true) {
  MaskedInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/MaskedInput/doc.js").default(MaskedInput); // eslint-disable-line global-require
}

var MaskedInputWrapper = MaskedInputDoc || MaskedInput;
MaskedInputWrapper.alphabetic = /[A-Z]/i;
MaskedInputWrapper.placeholderChars = {
  whitespace: '\u2000',
  underscore: '_'
};
MaskedInputWrapper.digit = /\d/;
MaskedInputWrapper.createAutoCorrectedDatePipe = text_mask_addons__WEBPACK_IMPORTED_MODULE_3__["createAutoCorrectedDatePipe"];
MaskedInputWrapper.emailMask = text_mask_addons__WEBPACK_IMPORTED_MODULE_3__["emailMask"];
MaskedInputWrapper.createNumberMask = text_mask_addons__WEBPACK_IMPORTED_MODULE_3__["createNumberMask"];
MaskedInputWrapper.createMinMaxInputPipe = _minMaxNumberPipe__WEBPACK_IMPORTED_MODULE_6__["createMinMaxInputPipe"];
MaskedInputWrapper.maskedNumberValue = _minMaxNumberPipe__WEBPACK_IMPORTED_MODULE_6__["maskedNumberValue"];



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/MaskedInput/doc.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/MaskedInput/doc.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A masked Input control with an optional drop button with the specified \'dropContent\'.').usage('\n    $ npm install grommet-controls\n\n    import { MakedInput } from \'grommet-controls\';\n\n    <MakedInput mask={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__["a11yTitlePropType"],
    a11yDropTitle: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Custom drop button title to be used by screen readers.'),
    placeholder: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Placeholder text to use when no value is provided.'),
    value: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number]).description('Value for the field.'),
    id: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The id attribute of the input.'),
    name: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The name attribute of the input.'),
    disabled: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Setting to true causes the input to be disabled.'),
    onChange: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user enters a new valuu.'),
    focusIndicator: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether the plain text input should receive a focus outline.'),
    plain: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether this is a plain input with no border or padding.\nOnly use this when the containing context provides sufficient affordance'),
    mask: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].array, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      mask: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].array, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]),
      pipe: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func
    })]).description('An array or a function that defines how the user input is going to be masked.'),
    guide: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('When masked, a boolean that tells the component whether to be in guide or no guide mode.'),
    pipe: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('When masked, a function that will give you the opportunity to modify the conformed value before it is displayed on the screen.'),
    placeholderChar: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('When masked, represents the fillable spot in the mask.'),
    keepCharPositions: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('For masked. When true, adding or deleting characters will not affect the positions of existing characters.\n      When false, adding characters causes existing characters to advance. And deleting characters causes existing characters to move back.'),
    showMask: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('When masked, displays the mask as a placeholder in place of the regular placeholder.'),
    dropContent: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Content to put inside the Drop.'),
    dropIcon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon for drop content.'),
    widgets: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      icon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.isRequired
    })).description('Additional widgets to be placed next to the input.'),
    onClose: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Callback for when the drop is closed')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/MaskedInput/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/MaskedInput/index.js ***!
  \***************************************************************************/
/*! exports provided: MaskedInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MaskedInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaskedInput */ "./node_modules/grommet-controls/es6/components/MaskedInput/MaskedInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedInput", function() { return _MaskedInput__WEBPACK_IMPORTED_MODULE_0__["MaskedInput"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/MaskedInput/minMaxNumberPipe.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/MaskedInput/minMaxNumberPipe.js ***!
  \**************************************************************************************/
/*! exports provided: maskedNumberValue, createMinMaxInputPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskedNumberValue", function() { return maskedNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMinMaxInputPipe", function() { return createMinMaxInputPipe; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/grommet-controls/es6/components/MaskedInput/utils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



var maskedNumberValue = function maskedNumberValue(_ref) {
  var value = _ref.value,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      thousandsSeparatorSymbol = _ref.thousandsSeparatorSymbol;

  var val = value;
  if (typeof val === 'string') {
    val = val.replace(new RegExp('[' + prefix + suffix + thousandsSeparatorSymbol + ']', 'g'), '');
    val = parseFloat(val);
    if (Number.isNaN(val)) {
      val = undefined;
    }
  }
  return val;
};

var createMinMaxInputPipe = function createMinMaxInputPipe(_ref2) {
  var min = _ref2.min,
      max = _ref2.max,
      mask = _ref2.mask,
      props = _objectWithoutProperties(_ref2, ['min', 'max', 'mask']);

  return function (conformedValue) {
    if (typeof min === 'number' || typeof max === 'number') {
      var value = maskedNumberValue(_extends({}, props, { value: conformedValue }));
      if (typeof value === 'number') {
        if (typeof min === 'number' && value < min) {
          var resolved = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["transformMaskedValue"])(min, mask, props);
          if (resolved === undefined) {
            return false;
          }
          return { value: resolved };
        }
        if (typeof max === 'number' && value > max) {
          var _resolved = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["transformMaskedValue"])(max, mask, props);
          if (_resolved === undefined) {
            return false;
          }
          return { value: _resolved };
        }
      }
    }
    return { value: conformedValue };
  };
};


/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/MaskedInput/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/MaskedInput/utils.js ***!
  \***************************************************************************/
/*! exports provided: transformMaskedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMaskedValue", function() { return transformMaskedValue; });
/* harmony import */ var text_mask_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-mask-core */ "./node_modules/text-mask-core/dist/textMaskCore.js");
/* harmony import */ var text_mask_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(text_mask_core__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var strCaretTrap = '[]';

var processCaretTraps = function processCaretTraps(mask) {
  var indexes = [];

  var indexOfCaretTrap = void 0;
  while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) {
    // eslint-disable-line
    indexes.push(indexOfCaretTrap);
    mask.splice(indexOfCaretTrap, 1);
  }
  return mask;
};

// eslint-disable-next-line import/prefer-default-export
var transformMaskedValue = function transformMaskedValue(value, providedMask) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!providedMask) {
    return value;
  }
  var pipe = props.pipe;

  var safeValue = void 0;
  if (value === undefined || value === null) {
    safeValue = '';
  } else {
    safeValue = value.toString();
  }
  var mask = void 0;
  if ((typeof providedMask === 'undefined' ? 'undefined' : _typeof(providedMask)) === 'object' && providedMask.pipe !== undefined && providedMask.mask !== undefined) {
    // eslint-disable-next-line no-param-reassign
    providedMask = providedMask.mask;
    var _providedMask = providedMask;
    pipe = _providedMask.pipe;
  }
  if (typeof providedMask === 'function') {
    mask = providedMask(safeValue, _extends({}, props, { pipe: pipe }));

    // disable masking if `mask` is `false`
    if (mask === false) {
      return safeValue;
    }
    // The processed mask is what we're interested in
    mask = processCaretTraps(mask);
    // If the `providedMask` is not a function, we just use it as-is.
  } else {
    mask = providedMask;
  }
  var conformedValue = value;
  var guide = props.guide,
      placeholderChar = props.placeholderChar,
      placeholder = props.placeholder,
      currentCaretPosition = props.currentCaretPosition,
      showMask = props.showMask,
      keepCharPositions = props.keepCharPositions;


  var conformToMaskConfig = {
    previousPlaceholder: placeholder,
    guide: guide,
    placeholderChar: placeholderChar,
    pipe: pipe,
    currentCaretPosition: currentCaretPosition,
    keepCharPositions: keepCharPositions
  };
  var conformed = Object(text_mask_core__WEBPACK_IMPORTED_MODULE_0__["conformToMask"])(safeValue, mask, conformToMaskConfig);
  if (conformed) {
    conformedValue = conformed.conformedValue;
  }
  if (typeof pipe === 'function') {
    var pipeResults = pipe(conformedValue, _extends({ rawValue: safeValue }, conformToMaskConfig));
    if (typeof pipeResults === 'string') {
      conformedValue = pipeResults;
    }
  }
  if (conformedValue === placeholder) {
    conformedValue = showMask ? placeholder : '';
  }
  return conformedValue;
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/MaskedInputField/MaskedInputField.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/MaskedInputField/MaskedInputField.js ***!
  \*******************************************************************************************/
/*! exports provided: MaskedInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedInputField", function() { return MaskedInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MaskedInput_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MaskedInput/index */ "./node_modules/grommet-controls/es6/components/MaskedInput/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var MaskedInputField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaskedInput_index__WEBPACK_IMPORTED_MODULE_1__["MaskedInput"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/MaskedInputField/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/MaskedInputField/index.js ***!
  \********************************************************************************/
/*! exports provided: MaskedInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MaskedInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaskedInputField */ "./node_modules/grommet-controls/es6/components/MaskedInputField/MaskedInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedInputField", function() { return _MaskedInputField__WEBPACK_IMPORTED_MODULE_0__["MaskedInputField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Notification/Notification.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Notification/Notification.js ***!
  \***********************************************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return NotificationWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons/icons/Close */ "./node_modules/grommet-icons/icons/Close.js");
/* harmony import */ var grommet_icons_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_icons_icons_StatusGood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons/icons/StatusGood */ "./node_modules/grommet-icons/icons/StatusGood.js");
/* harmony import */ var grommet_icons_icons_StatusGood__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_StatusGood__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_icons_icons_StatusWarning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet-icons/icons/StatusWarning */ "./node_modules/grommet-icons/icons/StatusWarning.js");
/* harmony import */ var grommet_icons_icons_StatusWarning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_StatusWarning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet_icons_icons_StatusCritical__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet-icons/icons/StatusCritical */ "./node_modules/grommet-icons/icons/StatusCritical.js");
/* harmony import */ var grommet_icons_icons_StatusCritical__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_StatusCritical__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet_icons_icons_StatusUnknown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet-icons/icons/StatusUnknown */ "./node_modules/grommet-icons/icons/StatusUnknown.js");
/* harmony import */ var grommet_icons_icons_StatusUnknown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_StatusUnknown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet_icons_icons_StatusInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet-icons/icons/StatusInfo */ "./node_modules/grommet-icons/icons/StatusInfo.js");
/* harmony import */ var grommet_icons_icons_StatusInfo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_StatusInfo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var grommet_icons_icons_StatusDisabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet-icons/icons/StatusDisabled */ "./node_modules/grommet-icons/icons/StatusDisabled.js");
/* harmony import */ var grommet_icons_icons_StatusDisabled__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_StatusDisabled__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/moment */ "./node_modules/grommet-controls/es6/utils/moment.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var StatusIcons = {
  ok: grommet_icons_icons_StatusGood__WEBPACK_IMPORTED_MODULE_4__["StatusGood"],
  warning: grommet_icons_icons_StatusWarning__WEBPACK_IMPORTED_MODULE_5__["StatusWarning"],
  error: grommet_icons_icons_StatusCritical__WEBPACK_IMPORTED_MODULE_6__["StatusCritical"],
  unknown: grommet_icons_icons_StatusUnknown__WEBPACK_IMPORTED_MODULE_7__["StatusUnknown"],
  disabled: grommet_icons_icons_StatusDisabled__WEBPACK_IMPORTED_MODULE_9__["StatusDisabled"],
  info: grommet_icons_icons_StatusInfo__WEBPACK_IMPORTED_MODULE_8__["StatusInfo"]
};

var SIZE_LEVELS = {
  small: {
    level: 4,
    size: 'xsmall',
    meterSize: 'xsmall'
  },
  medium: {
    level: 3,
    size: 'small',
    meterSize: 'small'
  },
  large: {
    level: 1,
    size: 'medium',
    meterSize: 'large'
  }
};

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Notification.prototype.render = function render() {
    var _props = this.props,
        status = _props.status,
        message = _props.message,
        locale = _props.locale,
        closer = _props.closer,
        margin = _props.margin,
        reverse = _props.reverse,
        a11yTitle = _props.a11yTitle,
        background = _props.background,
        border = _props.border,
        timestamp = _props.timestamp,
        icon = _props.icon,
        strong = _props.strong,
        round = _props.round,
        pad = _props.pad,
        size = _props.size,
        state = _props.state,
        onClose = _props.onClose,
        percentComplete = _props.percentComplete,
        rest = _objectWithoutProperties(_props, ['status', 'message', 'locale', 'closer', 'margin', 'reverse', 'a11yTitle', 'background', 'border', 'timestamp', 'icon', 'strong', 'round', 'pad', 'size', 'state', 'onClose', 'percentComplete']);

    var sizeLevel = SIZE_LEVELS[size];
    var grommet = this.context.grommet;

    var closeBtn = void 0;
    if (onClose) {
      var closeIcon = closer || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_Close__WEBPACK_IMPORTED_MODULE_3__["Close"], { size: sizeLevel.size });
      closeBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
        { pad: pad },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grommet__WEBPACK_IMPORTED_MODULE_2__["Button"],
          {
            a11yTitle: a11yTitle,
            onClick: onClose
          },
          closeIcon
        )
      );
    }
    var heading = message;
    if (strong) {
      heading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'strong',
        null,
        heading
      );
    }
    var statusIcon = void 0;
    if (icon) {
      var StatusIcon = StatusIcons[status];
      statusIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(icon) ? icon : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatusIcon, { size: sizeLevel.size });
    }
    var progress = void 0;
    if (percentComplete || percentComplete === 0) {
      progress = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
        { direction: 'row', align: 'center', pad: { between: 'medium' }, style: { whiteSpace: 'nowrap' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Meter"], {
          size: sizeLevel.meterSize,
          thickness: 'small',
          values: [{
            label: percentComplete.toFixed(0),
            value: percentComplete,
            color: 'accent-1'
          }]
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
          { size: 'small' },
          ' ' + percentComplete + ' %'
        )
      );
    }
    var timeStamp = void 0;
    if (timestamp) {
      timeStamp = Object(_utils_moment__WEBPACK_IMPORTED_MODULE_10__["longDate"])(timestamp, locale);
    }
    var first = void 0;
    var second = void 0;
    if (reverse) {
      first = heading;
      second = statusIcon;
    } else {
      first = statusIcon;
      second = heading;
    }
    var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      { flex: 'grow', pad: pad },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"],
        { level: sizeLevel.level, margin: margin, style: { maxWidth: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
          { direction: 'row', align: 'center', gap: 'small' },
          first,
          second
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        { size: sizeLevel.size },
        state
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        { size: sizeLevel.size },
        timeStamp
      ),
      progress
    );
    if (reverse) {
      first = closeBtn;
      second = content;
    } else {
      first = content;
      second = closeBtn;
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      _extends({
        direction: 'row',
        fill: 'horizontal',
        border: border,
        round: round,
        onClick: this.clickTag,
        role: 'checkbox',
        'aria-checked': true,
        background: background || 'status-' + status,
        reverse: reverse,
        grommet: grommet
      }, rest),
      first,
      second
    );
  };

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Notification.contextTypes = {
  grommet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Notification.defaultProps = {
  status: 'info',
  size: 'medium',
  message: 'Notification...',
  icon: true,
  animation: 'fadeIn',
  closer: undefined,
  pad: 'small',
  margin: 'small',
  locale: 'en-us'
};


var NotificationDoc = void 0;
if (true) {
  NotificationDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Notification/doc.js").default(Notification); // eslint-disable-line global-require
}

var NotificationWrapper = NotificationDoc || Notification;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Notification/doc.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Notification/doc.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A Box to display notification messages.').usage('$ npm install grommet-controls\n \n    import { Notification } from \'grommet-controls\';\n\n    <Notification message={...} onClose={...} />');
  DocumentedElement.propTypes = {
    a11yTitle: grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__["a11yTitlePropType"],
    status: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['ok', 'info', 'warning', 'error', 'unknown', 'disabled']).description('Status color.'),
    size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['small', 'medium', 'large']).description('The font size of the notification message.'),

    state: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('State label.'),
    strong: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Heading bold state.'),
    message: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Message to be displayed.'),
    icon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element]).description('Notification icon.'),
    closer: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element]).description('Closer icon.'),
    onClose: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user closes the notification.'),
    percentComplete: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Percent complete Meter for task notifications.'),
    timestamp: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('timestamp for the notification (Date).'),
    locale: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The locale to use for timestamp, if provided.'),
    reverse: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('If true, reverse the order of the Notification elements.')
  };
  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Notification/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Notification/index.js ***!
  \****************************************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./node_modules/grommet-controls/es6/components/Notification/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_0__["Notification"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/NumberInput/NumberInput.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/NumberInput/NumberInput.js ***!
  \*********************************************************************************/
/*! exports provided: NumberInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return NumberInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons/icons/Add */ "./node_modules/grommet-icons/icons/Add.js");
/* harmony import */ var grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons/icons/Subtract */ "./node_modules/grommet-icons/icons/Subtract.js");
/* harmony import */ var grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MaskedInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/es6/components/MaskedInput/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var precision = function precision(n) {
  if (!isFinite(n)) return 0;
  var e = 1;
  var p = 0;
  while (Math.round(n * e) / e !== n) {
    e *= 10;
    p += 1;
  }
  return p;
};

var minMax = function minMax(_ref) {
  var value = _ref.value,
      min = _ref.min,
      max = _ref.max;

  var val = value;
  if (min !== undefined) {
    val = Math.max(val, min);
  }
  if (max !== undefined) {
    val = Math.min(val, max);
  }
  return val;
};

var NumberInput = function (_Component) {
  _inherits(NumberInput, _Component);

  function NumberInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, NumberInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.valueToNumber = function (value) {
      var _this$props = _this.props,
          prefix = _this$props.prefix,
          suffix = _this$props.suffix,
          thousandsSeparatorSymbol = _this$props.thousandsSeparatorSymbol,
          decimalSymbol = _this$props.decimalSymbol;

      return _MaskedInput__WEBPACK_IMPORTED_MODULE_3__["MaskedInput"].maskedNumberValue({
        value: value, prefix: prefix, suffix: suffix, thousandsSeparatorSymbol: thousandsSeparatorSymbol, decimalSymbol: decimalSymbol
      });
    }, _this.isFloat = function (val) {
      var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
      if (!floatRegex.test(val)) {
        return false;
      }
      if (isNaN(parseFloat(val))) {
        return false;
      }
      return true;
    }, _this.addStep = function () {
      var _this$props2 = _this.props,
          max = _this$props2.max,
          min = _this$props2.min,
          step = _this$props2.step,
          value = _this$props2.value;

      var val = _this.isFloat(value) ? (_this.valueToNumber(value) + step).toFixed(precision(step)) : min || 0;
      if (Number.isNaN(val)) {
        if (min !== undefined) {
          val = min;
        } else {
          val = undefined;
        }
      } else {
        val = minMax({ value: val, min: min, max: max });
      }
      _this.upDateValue(val);
    }, _this.subtractStep = function () {
      var _this$props3 = _this.props,
          max = _this$props3.max,
          min = _this$props3.min,
          step = _this$props3.step,
          value = _this$props3.value;

      var val = _this.isFloat(value) ? (_this.valueToNumber(value) - step).toFixed(precision(step)) : max || 0;
      if (Number.isNaN(val)) {
        if (max !== undefined) {
          val = max;
        } else {
          val = undefined;
        }
      } else {
        val = minMax({ value: val, min: min, max: max });
      }
      _this.upDateValue(val);
    }, _this.onChange = function (e) {
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          emptyValue = _this$props4.emptyValue;

      if (onChange) {
        var value = e.target.value;
        if (_this.value !== value) {
          if (value === undefined) {
            value = emptyValue;
          }
          _this.value = value;
          onChange(_extends({}, e, {
            target: _extends({}, e.target, {
              value: value
            })
          }));
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  NumberInput.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        onChange = _props.onChange,
        min = _props.min,
        max = _props.max,
        step = _props.step,
        userPipe = _props.pipe,
        prefix = _props.prefix,
        suffix = _props.suffix,
        thousandsSeparatorSymbol = _props.thousandsSeparatorSymbol,
        decimalSymbol = _props.decimalSymbol,
        decimals = _props.decimals,
        integers = _props.integers,
        a11yIncrement = _props.a11yIncrement,
        a11yDecrement = _props.a11yDecrement,
        userMask = _props.mask,
        addIcon = _props.addIcon,
        subtractIcon = _props.subtractIcon,
        disabled = _props.disabled,
        rest = _objectWithoutProperties(_props, ['onChange', 'min', 'max', 'step', 'pipe', 'prefix', 'suffix', 'thousandsSeparatorSymbol', 'decimalSymbol', 'decimals', 'integers', 'a11yIncrement', 'a11yDecrement', 'mask', 'addIcon', 'subtractIcon', 'disabled']);

    var allowNegative = typeof min !== 'number' || min < 0;
    var includeThousandsSeparator = !!thousandsSeparatorSymbol;
    var allowDecimal = decimals === null || typeof decimals === 'number' && decimals > 0;
    var mask = userMask || _MaskedInput__WEBPACK_IMPORTED_MODULE_3__["MaskedInput"].createNumberMask({
      prefix: prefix,
      suffix: suffix,
      includeThousandsSeparator: includeThousandsSeparator,
      thousandsSeparatorSymbol: thousandsSeparatorSymbol,
      allowDecimal: allowDecimal,
      decimalSymbol: decimalSymbol,
      decimalLimit: decimals,
      integerLimit: integers,
      allowNegative: allowNegative
    });
    var pipe = userPipe || _MaskedInput__WEBPACK_IMPORTED_MODULE_3__["MaskedInput"].createMinMaxInputPipe(_extends({
      mask: mask, prefix: prefix, suffix: suffix, thousandsSeparatorSymbol: thousandsSeparatorSymbol, decimalSymbol: decimalSymbol, min: min, max: max }, rest));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaskedInput__WEBPACK_IMPORTED_MODULE_3__["MaskedInput"], _extends({
      update: function update(_update) {
        _this2.upDateValue = _update;
      },
      pattern: '[0-9]*',
      inputMode: 'numeric',
      onKeyDown: this.subtractStep,
      onKeyUp: this.addStep,
      disabled: disabled,
      onChange: this.onChange,
      pipe: pipe,
      mask: mask,
      widgets: [{
        'icon': addIcon,
        'onClick': disabled ? undefined : this.addStep,
        'aria-label': a11yIncrement + ' ' + step
      }, {
        'icon': subtractIcon,
        'onClick': disabled ? undefined : this.subtractStep,
        'aria-label': a11yDecrement + ' ' + step
      }]
    }, rest));
  };

  return NumberInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

NumberInput.defaultProps = {
  emptyValue: '',
  step: 1,
  addIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1__["Add"], null),
  subtractIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2__["Subtract"], null),
  prefix: '',
  suffix: '',
  thousandsSeparatorSymbol: '',
  decimalSymbol: '.',
  decimals: null,
  integers: null,
  a11yIncrement: 'Increment by',
  a11yDecrement: 'Decrement by'

};


var NumberInputDoc = void 0;
if (true) {
  NumberInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/NumberInput/doc.js").default(NumberInput); // eslint-disable-line global-require
}

var NumberInputWrapper = NumberInputDoc || NumberInput;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/NumberInput/doc.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/NumberInput/doc.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A masked number input, with widgets to increment/decrement the value.\n      Additionally, all properties of MaskedInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { NumberInput } from \'grommet-controls\';\n\n      <NumberInput value={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yIncrement: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Custom increment button title to be used by screen readers.'),
    a11yDecrement: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Custom increment button title to be used by screen readers.'),
    decimals: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('How many digits to allow after the decimal.').defaultValue('null'),
    min: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Minimum value.'),
    max: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Maximum value.'),
    step: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Steps to increase and decrease by.').defaultValue('1'),
    value: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number]).description('The numeric value'),
    disabled: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Setting to true causes the input to be disabled.'),
    addIcon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon for button to increment by step.'),
    subtractIcon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon for button to subtract a step.'),
    prefix: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('What to display in front of the value.'),
    suffix: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('What to display at the end of the value.'),
    thousandsSeparatorSymbol: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('A character with which to separate thousands.'),
    integers: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Limit on the length of the integer number.').defaultValue('unlimited')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/NumberInput/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/NumberInput/index.js ***!
  \***************************************************************************/
/*! exports provided: NumberInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberInput */ "./node_modules/grommet-controls/es6/components/NumberInput/NumberInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return _NumberInput__WEBPACK_IMPORTED_MODULE_0__["NumberInput"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/NumberInputField/NumberInputField.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/NumberInputField/NumberInputField.js ***!
  \*******************************************************************************************/
/*! exports provided: NumberInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInputField", function() { return NumberInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NumberInput_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NumberInput/index */ "./node_modules/grommet-controls/es6/components/NumberInput/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var NumberInputField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NumberInput_index__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/NumberInputField/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/NumberInputField/index.js ***!
  \********************************************************************************/
/*! exports provided: NumberInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberInputField */ "./node_modules/grommet-controls/es6/components/NumberInputField/NumberInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInputField", function() { return _NumberInputField__WEBPACK_IMPORTED_MODULE_0__["NumberInputField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/DOM.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/DOM.js ***!
  \*************************************************************************/
/*! exports provided: focusableChildren, focusedChildIndex, focusChildByIndex, focusNextElement, focusPrevElement, hasKeyboardChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusableChildren", function() { return focusableChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusedChildIndex", function() { return focusedChildIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusChildByIndex", function() { return focusChildByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusNextElement", function() { return focusNextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusPrevElement", function() { return focusPrevElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasKeyboardChildren", function() { return hasKeyboardChildren; });
/* harmony import */ var grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet/utils/DOM */ "./node_modules/grommet/utils/DOM.js");
/* harmony import */ var grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_0__);


var focusableChildren = function focusableChildren(parent) {
  var list = [];
  if (parent && parent.childNodes) {
    parent.childNodes.forEach(function (node) {
      if (node.tagName) {
        list.push(node);
        if (Object(grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_0__["filterByFocusable"])([node]).length !== 1) {
          list = list.concat(focusableChildren(node));
        }
      }
    });
  }
  return Object(grommet_utils_DOM__WEBPACK_IMPORTED_MODULE_0__["filterByFocusable"])(list);
};

var focusedChildIndex = function focusedChildIndex(parent) {
  var focusable = focusableChildren(parent);
  var focused = document.activeElement;
  for (var i = 0; i < focusable.length; i += 1) {
    if (focusable[i] === focused) {
      return i;
    }
  }
  return 0;
};

var focusChildByIndex = function focusChildByIndex(parent, index) {
  var focusable = focusableChildren(parent);
  var focusIndex = Math.min(index, focusable.length - 1);
  if (focusIndex >= 0) {
    focusable[focusIndex].focus();
    return true;
  }
  return false;
};

var focusNextElement = function focusNextElement(parent) {
  var focusable = focusableChildren(parent);
  var focused = document.activeElement;
  var nextFocus = void 0;
  for (var i = 0; i < focusable.length; i += 1) {
    if (focusable[i] === focused) {
      if (i < focusable.length - 1) {
        nextFocus = focusable[i + 1];
      }
      break;
    }
  }
  if (nextFocus) {
    nextFocus.focus();
    return true;
  }
  return false;
};

var focusPrevElement = function focusPrevElement(parent) {
  var focusable = focusableChildren(parent);
  var focused = document.activeElement;
  var prevFocus = void 0;
  for (var i = 0; i < focusable.length; i += 1) {
    if (focusable[i] === focused) {
      if (i > 0) {
        prevFocus = focusable[i - 1];
      }
      break;
    }
  }
  if (prevFocus) {
    prevFocus.focus();
    return true;
  }
  return false;
};

var hasKeyboardChildren = function hasKeyboardChildren(element) {
  var currentTag = element.tagName.toLowerCase();
  var validTags = /(input|select|textarea)$/;
  if (currentTag.match(validTags)) {
    return true;
  }
  var focusable = focusableChildren(element);
  for (var i = 0; i < focusable.length; i += 1) {
    if (focusable[i].tagName && focusable[i].tagName.toLowerCase().match(validTags)) {
      return true;
    }
  }
  return false;
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/PagingTable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/PagingTable.js ***!
  \*********************************************************************************/
/*! exports provided: PagingTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingTable", function() { return PagingTableWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var responsiveColumns = function responsiveColumns(size, columns) {
  return Array.isArray(columns) ? columns.map(function (column) {
    if (size === undefined) {
      return column;
    }
    var show = column.show;
    if (column.responsiveShow) {
      var sizes = Array.isArray(column.responsiveShow) ? column.responsiveShow : [column.responsiveShow];
      if (sizes.indexOf(size) !== -1) {
        show = true;
      }
    }
    if (column.responsiveHide) {
      var _sizes = Array.isArray(column.responsiveHide) ? column.responsiveHide : [column.responsiveHide];
      if (_sizes.indexOf(size) !== -1) {
        show = false;
      }
    }
    if (show === undefined) {
      return column;
    }
    return _extends({}, column, { show: show });
  }) : columns;
};
var PagingTable = function PagingTable(_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      rest = _objectWithoutProperties(_ref, ['data', 'columns']);

  var defaults = {
    showPagination: rest.onFetchData !== undefined || data && data.length > (rest.defaultPageSize || 20),
    minRows: data && data.length < (rest.defaultPageSize || 20) ? 0 : undefined
  };
  var newProps = _extends({}, defaults, rest);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContext"].Consumer,
    null,
    function (size) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer,
        null,
        function (theme) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_3__["StyledPagingTable"], _extends({
            data: data || [],
            columns: responsiveColumns(size, columns),
            theme: theme
          }, newProps));
        }
      );
    }
  );
};

var PagingTableDoc = void 0;
if (true) {
  PagingTableDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/PagingTable/doc.js").default(PagingTable); // eslint-disable-line global-require
}

var PagingTableWrapper = PagingTableDoc || PagingTable;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js ***!
  \***************************************************************************************/
/*! exports provided: StyledTableComponent, StyledTableBodyComponent, StyledTHeadComponent, StyledResizerComponent, StyledThComponent, StyledTrGroupComponent, StyledTrComponent, StyledTdComponent, StyledExpander, StyledTfootComponent, StyledPagingTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTableComponent", function() { return StyledTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTableBodyComponent", function() { return StyledTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTHeadComponent", function() { return StyledTHeadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledResizerComponent", function() { return StyledResizerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledThComponent", function() { return StyledThComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTrGroupComponent", function() { return StyledTrGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTrComponent", function() { return StyledTrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTdComponent", function() { return StyledTdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledExpander", function() { return StyledExpander; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTfootComponent", function() { return StyledTfootComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPagingTable", function() { return StyledPagingTable; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_table_ReactTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./react-table/ReactTable */ "./node_modules/grommet-controls/es6/components/PagingTable/react-table/ReactTable.js");





var StyledTableComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledTableComponent',
  componentId: 'sc-1wbkk7c-0'
})(['align-items:stretch;width:100%;border-collapse:collapse;overflow:auto']);

var StyledTableBodyComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledTableBodyComponent',
  componentId: 'sc-1wbkk7c-1'
})(['']);

var StyledTHeadComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledTHeadComponent',
  componentId: 'sc-1wbkk7c-2'
})(['-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;']);

var StyledResizerComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledResizerComponent',
  componentId: 'sc-1wbkk7c-3'
})(['display:inline-block;position:absolute;width:36px;top:0;bottom:0;right:-18px;cursor:col-resize;z-index:10;']);

var StyledThComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledThComponent',
  componentId: 'sc-1wbkk7c-4'
})(['position:relative;', '     ', ' ', '   ', '  '], function (props) {
  return props.sortable && '\n    cursor: pointer;\n  ';
}, function (props) {
  return props.hidden && '\n    width: 0 !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    border: 0 !important;\n    opacity: 0 !important;\n  ';
}, function (props) {
  return props.pivot && '\n    &:after,:before {\n      left: 100%;\n      top: 50%;\n      border: solid transparent;\n      content: " ";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none\n    }\n  \n    &:after {\n      border-color: rgba(255, 255, 255, 0);\n      border-left-color: #fff;\n      border-width: 8px;\n      margin-top: -8px\n    }\n  \n    &:before {\n      border-color: rgba(102, 102, 102, 0);\n      border-left-color: #f7f7f7;\n      border-width: 10px;\n      margin-top: -10px\n    }\n\n  ';
}, function (props) {
  return props.resizable && '\n    overflow: visible;\n\n    &:last-child {\n      overflow: hidden\n    }\n  ';
});

var StyledTrGroupComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledTrGroupComponent',
  componentId: 'sc-1wbkk7c-5'
})(['align-items:stretch;']);

var StyledTrComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledTrComponent',
  componentId: 'sc-1wbkk7c-6'
})(['', ''], function (props) {
  return props.hover && '\n    &:hover {\n      background-color: ' + Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__["normalizeColor"])(props.hover.background || props.theme.global.hover.background, props.theme) + ';\n      color: ' + Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_2__["normalizeColor"])(props.hover.color || props.theme.global.hover.color, props.theme) + ';\n    }  \n  ';
});

var StyledTdComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledTdComponent',
  componentId: 'sc-1wbkk7c-7'
})(['text-overflow:ellipsis;overflow:hidden;display:block;white-space:nowrap;', ''], function (props) {
  return props.hidden && '\n    width: 0 !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    border: 0 !important;\n    opacity: 0 !important\n  ';
});

var StyledExpander = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: 'StyledPagingTable__StyledExpander',
  componentId: 'sc-1wbkk7c-8'
})(['position:relative;margin:0;padding:0;left:-5px;color:transparent;cursor:pointer;']);

var StyledTfootComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledPagingTable__StyledTfootComponent',
  componentId: 'sc-1wbkk7c-9'
})(['']);

var StyledPagingTable = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_react_table_ReactTable__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: 'StyledPagingTable',
  componentId: 'sc-1wbkk7c-10'
})(['max-width:100%;width:100%;overflow:hidden;']);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/CellTextComponent.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/CellTextComponent.js ***!
  \**************************************************************************************************/
/*! exports provided: extractTextProps, collectTextProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractTextProps", function() { return extractTextProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectTextProps", function() { return collectTextProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var extractTextProps = function extractTextProps(_ref) {
  var value = _ref.value,
      color = _ref.color,
      size = _ref.size,
      truncate = _ref.truncate,
      weight = _ref.weight,
      textAlign = _ref.textAlign,
      rest = _objectWithoutProperties(_ref, ['value', 'color', 'size', 'truncate', 'weight', 'textAlign']);

  return rest;
};


var collectTextProps = function collectTextProps(_ref2) {
  var value = _ref2.value,
      color = _ref2.color,
      size = _ref2.size,
      truncate = _ref2.truncate,
      weight = _ref2.weight,
      textAlign = _ref2.textAlign;
  return {
    value: value, color: color, size: size, truncate: truncate, weight: weight, textAlign: textAlign
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var value = _ref3.value,
      rest = _objectWithoutProperties(_ref3, ['value']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_1__["Text"],
    collectTextProps(rest),
    value
  );
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/ExpanderComponent.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/ExpanderComponent.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons/icons/Add */ "./node_modules/grommet-icons/icons/Add.js");
/* harmony import */ var grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons/icons/Subtract */ "./node_modules/grommet-icons/icons/Subtract.js");
/* harmony import */ var grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isExpanded = _ref.isExpanded,
      children = _ref.children,
      expanderProps = _ref.expanderProps;

  var props = _extends({
    CloseIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_2__["Subtract"], null),
    OpenIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_Add__WEBPACK_IMPORTED_MODULE_1__["Add"], null),
    tabIndex: '0',
    onClick: function onClick() {}
  }, expanderProps);

  var OpenIcon = props.OpenIcon,
      CloseIcon = props.CloseIcon,
      rest = _objectWithoutProperties(props, ['OpenIcon', 'CloseIcon']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _StyledPagingTable__WEBPACK_IMPORTED_MODULE_3__["StyledExpander"],
    _extends({
      a11yTitle: 'Press Enter to expand this row for more information',
      icon: isExpanded ? CloseIcon : OpenIcon
    }, rest),
    children
  );
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/FilterComponent.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/FilterComponent.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var filter = _ref.filter,
      _onChange = _ref.onChange,
      column = _ref.column,
      rest = _objectWithoutProperties(_ref, ['filter', 'onChange', 'column']);

  var props = _extends({ size: 'medium' }, rest);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["TextInput"], _extends({
    'aria-label': 'Filter data by ' + (typeof column.Header === 'string' ? column.Header : column.id),
    value: filter ? filter.value : '',
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  }, props));
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/LoadingComponent.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/LoadingComponent.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _Spinning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Spinning */ "./node_modules/grommet-controls/es6/components/Spinning/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
      { align: 'center', full: 'horizontal', pad: { vertical: 'large' } },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinning__WEBPACK_IMPORTED_MODULE_2__["Spinning"], null)
    )
  );
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/NoDataComponent.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/NoDataComponent.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
    _extends({}, rest, { align: 'center', pad: 'small' }),
    children
  );
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/Pagination.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/Pagination.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons/icons/Previous */ "./node_modules/grommet-icons/icons/Previous.js");
/* harmony import */ var grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons/icons/Next */ "./node_modules/grommet-icons/icons/Next.js");
/* harmony import */ var grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../NumberInput */ "./node_modules/grommet-controls/es6/components/NumberInput/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }









var defaultButton = function defaultButton(_ref) {
  var disabled = _ref.disabled,
      Icon = _ref.Icon,
      onClick = _ref.onClick,
      label = _ref.label,
      other = _objectWithoutProperties(_ref, ['disabled', 'Icon', 'onClick', 'label']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null),
    disabled: disabled,
    onClick: onClick,
    label: label,
    plain: true
  }, other));
};

var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultButton).withConfig({
  displayName: 'Pagination__StyledButton',
  componentId: 'bjf6y1-0'
})(['width:150px;padding:10px 0;']);

var StyledPageInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_NumberInput__WEBPACK_IMPORTED_MODULE_5__["NumberInput"]).withConfig({
  displayName: 'Pagination__StyledPageInput',
  componentId: 'bjf6y1-1'
})(['max-width:180px;']);

var StyledSelect = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Select"]).withConfig({
  displayName: 'Pagination__StyledSelect',
  componentId: 'bjf6y1-2'
})(['max-width:150px;']);

var ReactTablePagination = function (_Component) {
  _inherits(ReactTablePagination, _Component);

  function ReactTablePagination(props, context) {
    _classCallCheck(this, ReactTablePagination);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.getSafePage = function (page) {
      var pg = Number.isNaN(page) ? _this.props.page : page;
      return Math.min(Math.max(pg, 0), _this.props.pages - 1);
    };

    _this.changePage = function (page) {
      var pg = _this.getSafePage(page);
      _this.setState({ page: pg });
      if (_this.props.page !== pg) {
        _this.props.onPageChange(pg);
      }
    };

    _this.applyPage = function (e) {
      if (e) {
        e.preventDefault();
      }
      var page = _this.state.page;

      _this.changePage(page === '' ? _this.props.page : page);
    };

    _this.state = { page: props.page };
    return _this;
  }

  ReactTablePagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page });
  };

  ReactTablePagination.prototype.renderPaging = function renderPaging() {
    var _this2 = this;

    var _props = this.props,
        page = _props.page,
        showPageJump = _props.showPageJump,
        pageText = _props.pageText,
        ofText = _props.ofText,
        pages = _props.pages;

    var pageJump = void 0;
    if (showPageJump) {
      pageJump = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPageInput, {
        'aria-label': 'Select page to jump to',
        onChange: function onChange(e) {
          var val = e.target.value;
          var pg = val - 1;
          if (val === '') {
            return _this2.setState({ page: val });
          }
          _this2.setState({ page: _this2.getSafePage(pg) });
          return false;
        },
        value: this.state.page === '' ? '' : this.state.page + 1,
        onBlur: this.applyPage,
        onKeyPress: function onKeyPress(e) {
          if (e.which === 13 || e.keyCode === 13) {
            _this2.applyPage();
          }
        }
      });
    } else {
      pageJump = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        null,
        page + 1
      );
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      { direction: 'row', align: 'center', gap: 'small' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        null,
        pageText + ' '
      ),
      pageJump,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { style: { whiteSpace: 'nowrap' } },
        ofText + ' ' + (pages || 1)
      )
    );
  };

  ReactTablePagination.prototype.renderPageSize = function renderPageSize() {
    var _this3 = this;

    var _props2 = this.props,
        showPageSizeOptions = _props2.showPageSizeOptions,
        onPageSizeChange = _props2.onPageSizeChange,
        pageSizeOptions = _props2.pageSizeOptions,
        pageSize = _props2.pageSize;

    if (showPageSizeOptions) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
        { direction: 'row' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSelect, {
          'aria-label': 'Select rows per page',
          onChange: function onChange(e) {
            return onPageSizeChange(Number(e.option.split(' ')[0]));
          },
          value: pageSize + ' ' + this.props.rowsText,
          options: pageSizeOptions.map(function (option) {
            return option + ' ' + _this3.props.rowsText;
          })
        })
      );
    }
    return null;
  };

  ReactTablePagination.prototype.renderPrevious = function renderPrevious() {
    var _this4 = this;

    var _props3 = this.props,
        _props3$PreviousCompo = _props3.PreviousComponent,
        PreviousComponent = _props3$PreviousCompo === undefined ? StyledButton : _props3$PreviousCompo,
        canPrevious = _props3.canPrevious,
        page = _props3.page;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      { direction: 'row' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PreviousComponent, {
        'aria-label': 'Move to previous page',
        Icon: grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_3__["Previous"],
        label: this.props.previousText,
        onClick: canPrevious ? function () {
          return _this4.changePage(page - 1);
        } : null,
        disabled: !canPrevious
      })
    );
  };

  ReactTablePagination.prototype.renderNext = function renderNext() {
    var _this5 = this;

    var _props4 = this.props,
        page = _props4.page,
        canNext = _props4.canNext,
        _props4$NextComponent = _props4.NextComponent,
        NextComponent = _props4$NextComponent === undefined ? StyledButton : _props4$NextComponent;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      { direction: 'row' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextComponent, {
        'aria-label': 'Move to next page',
        reverse: true,
        Icon: grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_4__["Next"],
        label: this.props.nextText,
        onClick: canNext ? function () {
          return _this5.changePage(page + 1);
        } : null,
        disabled: !canNext
      })
    );
  };

  ReactTablePagination.prototype.render = function render() {
    var props = this.props.getPaginationProps(this.props);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      _extends({
        direction: 'row', align: 'center', justify: 'between', fill: 'horizontal'
      }, props),
      this.renderPrevious(),
      this.renderPaging(),
      this.renderPageSize(),
      this.renderNext()
    );
  };

  return ReactTablePagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ReactTablePagination);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/ResizerComponent.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/ResizerComponent.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");




var ResizerComponent = function ResizerComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__["StyledResizerComponent"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (ResizerComponent);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/TableComponent.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/TableComponent.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TableComponent = function (_Component) {
  _inherits(TableComponent, _Component);

  function TableComponent() {
    _classCallCheck(this, TableComponent);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TableComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__["StyledTableComponent"], _extends({
      role: 'grid'
    }, this.props));
  };

  return TableComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TableComponent);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/TbodyComponent.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/TbodyComponent.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__["StyledTableBodyComponent"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/TdComponent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/TdComponent.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");
/* harmony import */ var _CellTextComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CellTextComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/CellTextComponent.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var style = props.style,
      rest = _objectWithoutProperties(props, ['style']);

  var boxProps = _extends({ pad: 'small' }, Object(_CellTextComponent__WEBPACK_IMPORTED_MODULE_3__["extractTextProps"])(rest));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _StyledPagingTable__WEBPACK_IMPORTED_MODULE_2__["StyledTdComponent"],
    { style: style, role: 'gridcell', align: 'center' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
      _extends({ fill: true }, boxProps),
      children
    )
  );
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/TfootComponent.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/TfootComponent.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__["StyledTfootComponent"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/ThComponent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/ThComponent.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_Blank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons/icons/Blank */ "./node_modules/grommet-icons/icons/Blank.js");
/* harmony import */ var grommet_icons_icons_Blank__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Blank__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet_icons_icons_LinkDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons/icons/LinkDown */ "./node_modules/grommet-icons/icons/LinkDown.js");
/* harmony import */ var grommet_icons_icons_LinkDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_LinkDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_icons_icons_LinkUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons/icons/LinkUp */ "./node_modules/grommet-icons/icons/LinkUp.js");
/* harmony import */ var grommet_icons_icons_LinkUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_LinkUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var toggleSort = _ref.toggleSort,
      sort = _ref.sort,
      resizable = _ref.resizable,
      children = _ref.children,
      pivot = _ref.pivot,
      hidden = _ref.hidden,
      sortable = _ref.sortable,
      expander = _ref.expander,
      CellTextComponent = _ref.CellTextComponent,
      props = _objectWithoutProperties(_ref, ['toggleSort', 'sort', 'resizable', 'children', 'pivot', 'hidden', 'sortable', 'expander', 'CellTextComponent']);

  if (!expander && Array.isArray(children) && children.length > 1 && !children[0] && !children[1]) {
    return null;
  }

  var style = props.style,
      rest = _objectWithoutProperties(props, ['style']);

  var childRendered = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellTextComponent, _extends({}, rest, { value: children }));
  var content = void 0;
  if (sortable) {
    var sortAsc = sort === '-sort-asc';
    var sortDesc = sort === '-sort-desc';
    var SortIcon = grommet_icons_icons_Blank__WEBPACK_IMPORTED_MODULE_2__["Blank"];
    if (sortAsc || sortDesc) {
      SortIcon = sortAsc ? grommet_icons_icons_LinkUp__WEBPACK_IMPORTED_MODULE_4__["LinkUp"] : grommet_icons_icons_LinkDown__WEBPACK_IMPORTED_MODULE_3__["LinkDown"];
    }
    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
      { direction: 'row', gap: 'xsmall', align: 'center' },
      childRendered,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_1__["Button"],
        { onClick: function onClick(e) {
            return toggleSort && toggleSort(e);
          } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortIcon, null)
      )
    );
  } else {
    content = childRendered;
  }

  var boxProps = _extends({ pad: 'xsmall' }, rest);
  return (

    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _StyledPagingTable__WEBPACK_IMPORTED_MODULE_5__["StyledThComponent"],
      {
        role: 'columnheader',
        onClick: function onClick(e) {
          return toggleSort && toggleSort(e);
        },
        direction: 'row',
        pivot: pivot,
        hidden: hidden,
        sortable: sortable,
        style: style,
        resizable: resizable
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
        _extends({}, boxProps, { fill: true }),
        content
      )
    )
  );
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/TheadComponent.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/TheadComponent.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__["StyledTHeadComponent"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/TrComponent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/TrComponent.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM */ "./node_modules/grommet-controls/es6/components/PagingTable/DOM.js");
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var TrComponent = function (_Component) {
  _inherits(TrComponent, _Component);

  function TrComponent() {
    var _temp, _this, _ret;

    _classCallCheck(this, TrComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.selectNextRow = function () {
      var selectRow = _this.props.selectRow;

      var activeChild = Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["focusedChildIndex"])(_this.container);
      return selectRow(true, activeChild);
    }, _this.selectPrevRow = function () {
      var selectRow = _this.props.selectRow;

      var activeChild = Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["focusedChildIndex"])(_this.container);
      return selectRow(false, activeChild);
    }, _this.selectNextChild = function () {
      if (Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["focusNextElement"])(_this.container)) {
        return true;
      }
      return _this.selectNextRow();
    }, _this.selectPrevChild = function () {
      if (Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["focusPrevElement"])(_this.container)) {
        return true;
      }
      return _this.selectPrevRow();
    }, _this.selectFirstChild = function (activeIndex) {
      return Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["focusChildByIndex"])(_this.container, activeIndex);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TrComponent.prototype.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Keyboard"],
      {
        onTab: function onTab(e) {
          e.preventDefault();
          if (e.shiftKey) {
            _this2.selectPrevChild();
          } else {
            _this2.selectNextChild();
          }
        },
        onLeft: function onLeft(e) {
          if (!Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["hasKeyboardChildren"])(document.activeElement)) {
            e.preventDefault();
            _this2.selectPrevChild();
          }
        },
        onRight: function onRight(e) {
          if (!Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["hasKeyboardChildren"])(document.activeElement)) {
            e.preventDefault();
            _this2.selectNextChild();
          }
        },
        onUp: function onUp(e) {
          if (!Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["hasKeyboardChildren"])(document.activeElement)) {
            e.preventDefault();
            _this2.selectPrevRow();
          }
        },
        onDown: function onDown(e) {
          if (!Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["hasKeyboardChildren"])(document.activeElement)) {
            e.preventDefault();
            _this2.selectNextRow();
          }
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_4__["StyledTrComponent"], _extends({
        direction: 'row',
        role: 'row',
        ref: function ref(el) {
          _this2.container = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(el);
        }
      }, this.props))
    );
  };

  return TrComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TrComponent);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/components/TrGroupComponent.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/components/TrGroupComponent.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/StyledPagingTable.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledPagingTable__WEBPACK_IMPORTED_MODULE_1__["StyledTrGroupComponent"], _extends({ role: 'rowgroup' }, props));
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/doc.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/doc.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A Grommet 2 table component with pagination, filtering, footer, child rows and grouping. Derived from https://github.com/react-tools/react-table. ').usage('\n    $ npm install grommet-controls\n\n    import { PagingTable } from \'grommet-controls\';\n\n    <PagingTable columns={...} data={...} />\n');

  DocumentedElement.propTypes = {
    decorations: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      table: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Table styling, all **`<Box />`** properties are valid.'),
      header: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Header cell styling, all **`<Box />`** properties are valid'),
      headerGroup: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Grouped columns header styling, all **`<Box />`** properties are valid.'),
      filter: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Filter row styling, all **`<Box />`** properties are valid.'),
      filterInput: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Filter input control styling, all **`<TextInput />`** properties are valid.'),
      body: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Body styling, all **`<Box />`** properties are valid.'),
      row: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Row of data styling, all **`<Box />`** properties are valid.'),
      rowOdd: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Odd row for striped styling, all **`<Box />`** properties are valid.'),
      rowEven: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Even row for striped styling, all **`<Box />`** properties are valid.'),
      cell: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Cell of data styling, all **`<Box />`** properties are valid.'),
      footer: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Footer row styling, all **`<Box />`** properties are valid.'),
      pagination: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Pagination box styling, all **`<Box />`** properties are valid.'),
      expander: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Expander button styling, all **`<Button />`** properties are valid, as well as icons OpenIcon and CloseIcon.')
    }).description('Visual settings of the various table elements. Where applicable, those settings can be overriden at the column level.'),
    columns: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      Cell: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]).description('Used to render a standard cell, defaults to the accessed value.'),
      Header: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]).description('Used to render the header of a column or column group.'),
      Footer: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]),
      Aggregated: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]),
      Pivot: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]),
      PivotValue: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]),
      Expander: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]),
      Filter: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]),

      // All Columns
      accessor: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
      decorations: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object,
      sortable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool, // use table default
      resizable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool, // use table default
      filterable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool, // use table default
      show: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool,
      minWidth: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number,

      // Cells only
      getProps: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func,

      // Pivot only
      aggregate: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func,

      // Headers only
      getHeaderProps: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func,

      // Footers only
      getFooterProps: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object,
      filterMethod: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func,
      filterAll: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool,
      sortMethod: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func
    })).isRequired.description('Array of column descriptors.'),
    data: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].array.description('Array of data objects.').isRequired,
    defaultPageSize: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Default page size.').defaultValue(20),
    defaultSorted: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      id: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
      desc: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool
    })).description('Array of default sorted columns and their sort order.'),
    onFetchData: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('If specified, a function responsible for loading the data.'),
    filterable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Wheter to display a filtering row.').defaultValue(false),
    loading: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Wheter to display the loading indicator.').defaultValue(false),
    manual: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('If true, the data is sorted manually in the onFetchData function.').defaultValue(false),
    pages: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Number of total pages of data, when loading the data manually.'),
    pageSizeOptions: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number.description('Page size')).description('Array of available page size options ([5, 10, 20, 25, 50, 100]).'),
    pivotBy: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string).description('Array of columns to pivot (group) by.'),
    resizable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Wheter the columns can be resized.').defaultValue(true),
    showPagination: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Wheter to display a paging row.').defaultValue(true),
    sortable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Wheter the table headers will allow sorting of the of the data.').defaultValue(true),
    SubComponent: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('If specified, a function with (row as parameter) to render the expading row.').defaultValue(true)
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/index.js ***!
  \***************************************************************************/
/*! exports provided: PagingTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PagingTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/PagingTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagingTable", function() { return _PagingTable__WEBPACK_IMPORTED_MODULE_0__["PagingTable"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/react-table/ReactTable.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/react-table/ReactTable.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/grommet-controls/es6/components/PagingTable/react-table/utils.js");
/* harmony import */ var _defaultProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultProps */ "./node_modules/grommet-controls/es6/components/PagingTable/react-table/defaultProps.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM */ "./node_modules/grommet-controls/es6/components/PagingTable/DOM.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-nested-ternary,no-shadow,no-param-reassign,
prefer-destructuring,no-mixed-operators */





var ReactTable = function (_Component) {
  _inherits(ReactTable, _Component);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _initialiseProps.call(_this);

    _this.rowRef = [];
    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  ReactTable.prototype.componentWillMount = function componentWillMount() {
    this.setStateWithData(this.getDataModel(this.getResolvedState()));
  };

  ReactTable.prototype.componentDidMount = function componentDidMount() {
    this.fireFetchData();
  };

  ReactTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    var oldState = this.getResolvedState();
    var newState = this.getResolvedState(nextProps, nextState);

    // Do a deep compare of new and old `defaultOption` and
    // if they are different reset `option = defaultOption`
    var defaultableOptions = ['sorted', 'filtered', 'resized', 'expanded'];
    defaultableOptions.forEach(function (x) {
      var defaultName = 'default' + (x.charAt(0).toUpperCase() + x.slice(1));
      if (JSON.stringify(oldState[defaultName]) !== JSON.stringify(newState[defaultName])) {
        newState[x] = newState[defaultName];
      }
    });

    // If they change these table options, we need to reset defaults
    // or else we could get into a state where the user has changed the UI
    // and then disabled the ability to change it back.
    // e.g. If `filterable` has changed, set `filtered = defaultFiltered`
    var resettableOptions = ['sortable', 'filterable', 'resizable'];
    resettableOptions.forEach(function (x) {
      if (oldState[x] !== newState[x]) {
        var baseName = x.replace('able', '');
        var optionName = baseName + 'ed';
        var defaultName = 'default' + (optionName.charAt(0).toUpperCase() + optionName.slice(1));
        newState[optionName] = newState[defaultName];
      }
    });

    // Props that trigger a data update
    if (oldState.data !== newState.data || JSON.stringify(oldState.columns) !== JSON.stringify(newState.columns) || oldState.pivotBy !== newState.pivotBy || oldState.sorted !== newState.sorted || oldState.filtered !== newState.filtered) {
      this.setStateWithData(this.getDataModel(newState));
    }
  };

  ReactTable.prototype.setStateWithData = function setStateWithData(newState, cb) {
    var _this2 = this;

    var oldState = this.getResolvedState();
    var newResolvedState = this.getResolvedState({}, newState);
    var freezeWhenExpanded = newResolvedState.freezeWhenExpanded;

    // Default to unfrozen state

    newResolvedState.frozen = false;

    // If freezeWhenExpanded is set, check for frozen conditions
    if (freezeWhenExpanded) {
      // if any rows are expanded, freeze the existing data and sorting
      var keys = Object.keys(newResolvedState.expanded);
      for (var i = 0; i < keys.length; i += 1) {
        if (newResolvedState.expanded[keys[i]]) {
          newResolvedState.frozen = true;
          break;
        }
      }
    }

    // If the data isn't frozen and either the data or
    // sorting model has changed, update the data
    if (oldState.frozen && !newResolvedState.frozen || oldState.sorted !== newResolvedState.sorted || oldState.filtered !== newResolvedState.filtered || oldState.showFilters !== newResolvedState.showFilters || !newResolvedState.frozen && oldState.resolvedData !== newResolvedState.resolvedData) {
      // Handle collapseOnsortedChange & collapseOnDataChange
      if (oldState.sorted !== newResolvedState.sorted && this.props.collapseOnSortingChange || oldState.filtered !== newResolvedState.filtered || oldState.showFilters !== newResolvedState.showFilters || oldState.sortedData && !newResolvedState.frozen && oldState.resolvedData !== newResolvedState.resolvedData && this.props.collapseOnDataChange) {
        newResolvedState.expanded = {};
      }

      Object.assign(newResolvedState, this.getSortedData(newResolvedState));
    }

    // Set page to 0 if filters change
    if (oldState.filtered !== newResolvedState.filtered) {
      newResolvedState.page = 0;
    }

    // Calculate pageSize all the time
    if (newResolvedState.sortedData) {
      newResolvedState.pages = newResolvedState.manual ? newResolvedState.pages : Math.ceil(newResolvedState.sortedData.length / newResolvedState.pageSize);
      newResolvedState.page = Math.max(newResolvedState.page >= newResolvedState.pages ? newResolvedState.pages - 1 : newResolvedState.page, 0);
    }

    return this.setState(newResolvedState, function () {
      if (cb) {
        cb();
      }
      if (oldState.page !== newResolvedState.page || oldState.pageSize !== newResolvedState.pageSize || oldState.sorted !== newResolvedState.sorted || oldState.filtered !== newResolvedState.filtered) {
        _this2.fireFetchData();
      }
    });
  };

  // User actions


  ReactTable.prototype.render = function render() {
    var _this3 = this;

    var resolvedState = this.getResolvedState();
    var children = resolvedState.children,
        getProps = resolvedState.getProps,
        getTableProps = resolvedState.getTableProps,
        getTheadGroupProps = resolvedState.getTheadGroupProps,
        getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
        getTheadProps = resolvedState.getTheadProps,
        getTheadTrProps = resolvedState.getTheadTrProps,
        getTheadThProps = resolvedState.getTheadThProps,
        getTheadFilterProps = resolvedState.getTheadFilterProps,
        getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
        getTheadFilterThProps = resolvedState.getTheadFilterThProps,
        getFilterInputProps = resolvedState.getFilterInputProps,
        getTbodyProps = resolvedState.getTbodyProps,
        getTrGroupProps = resolvedState.getTrGroupProps,
        getTrProps = resolvedState.getTrProps,
        getTdProps = resolvedState.getTdProps,
        getExpanderProps = resolvedState.getExpanderProps,
        getTfootProps = resolvedState.getTfootProps,
        getTfootTrProps = resolvedState.getTfootTrProps,
        getTfootTdProps = resolvedState.getTfootTdProps,
        getPaginationProps = resolvedState.getPaginationProps,
        getLoadingProps = resolvedState.getLoadingProps,
        getNoDataProps = resolvedState.getNoDataProps,
        getResizerProps = resolvedState.getResizerProps,
        showPagination = resolvedState.showPagination,
        showPaginationTop = resolvedState.showPaginationTop,
        showPaginationBottom = resolvedState.showPaginationBottom,
        manual = resolvedState.manual,
        loadingText = resolvedState.loadingText,
        noDataText = resolvedState.noDataText,
        sortable = resolvedState.sortable,
        multiSort = resolvedState.multiSort,
        resizable = resolvedState.resizable,
        filterable = resolvedState.filterable,
        pivotIDKey = resolvedState.pivotIDKey,
        pivotValKey = resolvedState.pivotValKey,
        pivotBy = resolvedState.pivotBy,
        subRowsKey = resolvedState.subRowsKey,
        aggregatedKey = resolvedState.aggregatedKey,
        originalKey = resolvedState.originalKey,
        indexKey = resolvedState.indexKey,
        groupedByPivotKey = resolvedState.groupedByPivotKey,
        expanderTdDefaultProps = resolvedState.expanderTdDefaultProps,
        loading = resolvedState.loading,
        pageSize = resolvedState.pageSize,
        page = resolvedState.page,
        sorted = resolvedState.sorted,
        filtered = resolvedState.filtered,
        resized = resolvedState.resized,
        expanded = resolvedState.expanded,
        pages = resolvedState.pages,
        onExpandedChange = resolvedState.onExpandedChange,
        TableComponent = resolvedState.TableComponent,
        TheadComponent = resolvedState.TheadComponent,
        TbodyComponent = resolvedState.TbodyComponent,
        TrGroupComponent = resolvedState.TrGroupComponent,
        TrComponent = resolvedState.TrComponent,
        ThComponent = resolvedState.ThComponent,
        TdComponent = resolvedState.TdComponent,
        CellTextComponent = resolvedState.CellTextComponent,
        TfootComponent = resolvedState.TfootComponent,
        PaginationComponent = resolvedState.PaginationComponent,
        LoadingComponent = resolvedState.LoadingComponent,
        SubComponent = resolvedState.SubComponent,
        NoDataComponent = resolvedState.NoDataComponent,
        ResizerComponent = resolvedState.ResizerComponent,
        ExpanderComponent = resolvedState.ExpanderComponent,
        PivotValueComponent = resolvedState.PivotValueComponent,
        PivotComponent = resolvedState.PivotComponent,
        AggregatedComponent = resolvedState.AggregatedComponent,
        FilterComponent = resolvedState.FilterComponent,
        PadRowComponent = resolvedState.PadRowComponent,
        resolvedData = resolvedState.resolvedData,
        allVisibleColumns = resolvedState.allVisibleColumns,
        headerGroups = resolvedState.headerGroups,
        hasHeaderGroups = resolvedState.hasHeaderGroups,
        sortedData = resolvedState.sortedData;

    // Pagination

    var startRow = pageSize * page;
    var endRow = startRow + pageSize;
    var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
    var minRows = this.getMinRows();
    var padRows = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].range(Math.max(minRows - pageRows.length, 0));

    var hasColumnFooter = allVisibleColumns.some(function (d) {
      return d.Footer;
    });
    var hasFilters = filterable || allVisibleColumns.some(function (d) {
      return d.filterable;
    });

    var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      return [rows.map(function (row, i) {
        index += 1;
        var rowWithViewIndex = _extends({}, row, {
          viewIndex: index
        });
        var newPath = path.concat([i]);
        if (rowWithViewIndex[subRowsKey] && _utils__WEBPACK_IMPORTED_MODULE_1__["default"].get(expanded, newPath)) {
          var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

          rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex[0];
          index = _recurseRowsViewIndex[1];
        }
        return rowWithViewIndex;
      }), index];
    };

    var _recurseRowsViewIndex2 = recurseRowsViewIndex(pageRows);

    pageRows = _recurseRowsViewIndex2[0];


    var canPrevious = page > 0;
    var canNext = page + 1 < pages;

    var rowMinWidth = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].sum(allVisibleColumns.map(function (d) {
      var resizedColumn = resized.find(function (x) {
        return x.id === d.id;
      }) || {};
      return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedColumn.value, d.width, d.minWidth);
    }));

    var rowIndex = -1;

    var finalState = _extends({}, resolvedState, {
      startRow: startRow,
      endRow: endRow,
      pageRows: pageRows,
      minRows: minRows,
      padRows: padRows,
      hasColumnFooter: hasColumnFooter,
      canPrevious: canPrevious,
      canNext: canNext,
      rowMinWidth: rowMinWidth
    });

    var rootProps = getProps(finalState, undefined, undefined, this);
    var tableProps = getTableProps(finalState, undefined, undefined, this);
    var tBodyProps = getTbodyProps(finalState, undefined, undefined, this);
    var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
    var noDataProps = getNoDataProps(finalState, undefined, undefined, this);

    // Visual Components

    var makeHeaderGroup = function makeHeaderGroup(column, i) {
      var resizedValue = function resizedValue(col) {
        return (resized.find(function (x) {
          return x.id === col.id;
        }) || {}).value;
      };
      var flex = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].sum(column.columns.map(function (col) {
        return col.width || resizedValue(col) ? 0 : col.minWidth;
      }));
      var width = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].sum(column.columns.map(function (col) {
        return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedValue(col), col.width, col.minWidth);
      }));
      var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].sum(column.columns.map(function (col) {
        return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedValue(col), col.width, col.maxWidth);
      }));

      var theadGroupThProps = getTheadGroupProps(finalState, undefined, column, _this3);
      var columnHeaderProps = column.getHeaderProps(finalState, undefined, column, _this3);

      var rest = _extends({}, theadGroupThProps, columnHeaderProps, {
        CellTextComponent: CellTextComponent
      });
      var flexStyles = {
        flex: flex + ' 0 auto',
        width: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(width),
        maxWidth: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(maxWidth)
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          style: flexStyles
        }, rest),
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(column.Header, {
          data: sortedData,
          column: column
        })
      );
    };
    var selectRow = function selectRow(index) {
      return function (nextRow, childIndex) {
        var selectFirstAvailable = function selectFirstAvailable(rows) {
          for (var i = 0; i < rows.length; i += 1) {
            if (rows[i]) {
              return rows[i].selectFirstChild(childIndex);
            }
          }
          return false;
        };
        var found = void 0;
        if (typeof index === 'number') {
          var _state = _this3.state,
              _page = _state.page,
              _pages = _state.pages;

          if (nextRow) {
            if (pageRows.length > index + 1) {
              found = _this3.rowRef[index + 1].selectFirstChild(childIndex);
            } else if (_page < _pages - 1) {
              _this3.onPageChange(_page + 1);
              found = true;
            } else {
              found = selectFirstAvailable([_this3.footerRef]);
            }
          } else if (index > 0) {
            found = _this3.rowRef[index - 1].selectFirstChild(childIndex);
          } else if (_page > 0) {
            _this3.onPageChange(_page - 1);
            found = true;
          } else {
            found = selectFirstAvailable([_this3.filterRef, _this3.headerRef, _this3.headerGroupsRef]);
          }
        }
        if (!found) {
          if (nextRow) {
            Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["focusNextElement"])(document);
          } else {
            Object(_DOM__WEBPACK_IMPORTED_MODULE_3__["focusPrevElement"])(document);
          }
        }
      };
    };
    var makeHeaderGroups = function makeHeaderGroups() {
      var theadGroupProps = getTheadGroupProps(finalState, undefined, undefined, _this3);
      var theadGroupTrProps = getTheadGroupTrProps(finalState, undefined, undefined, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TheadComponent,
        _extends({
          style: { minWidth: rowMinWidth + 'px' }
        }, theadGroupProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TrComponent,
          _extends({
            ref: function ref(el) {
              _this3.headerGroupsRef = el;
            },
            selectRow: selectRow('headerGroup')
          }, theadGroupTrProps),
          headerGroups.map(makeHeaderGroup)
        )
      );
    };

    var makeHeader = function makeHeader(column, i) {
      var resizedCol = resized.find(function (x) {
        return x.id === column.id;
      }) || {};
      var sort = sorted.find(function (d) {
        return d.id === column.id;
      });
      var show = typeof column.show === 'function' ? column.show() : column.show;
      var width = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
      var theadThProps = getTheadThProps(finalState, undefined, column, _this3);
      var columnHeaderProps = column.getHeaderProps(finalState, undefined, column, _this3);

      var rest = _extends({}, theadThProps, columnHeaderProps, {
        CellTextComponent: CellTextComponent
      });

      var isResizable = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(column.resizable, resizable, false);
      var resizer = isResizable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResizerComponent, _extends({
        onMouseDown: function onMouseDown(e) {
          return _this3.resizeColumnStart(e, column, false);
        },
        onTouchStart: function onTouchStart(e) {
          return _this3.resizeColumnStart(e, column, true);
        }
      }, getResizerProps('finalState', undefined, column, _this3))) : null;

      var isSortable = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(column.sortable, sortable, false);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          sort: sort && (sort.desc ? '-sort-desc' : '-sort-asc'),
          resizable: isResizable,
          sortable: isSortable,
          hidden: !show,
          expander: column.expander,
          pivot: pivotBy && pivotBy.slice(0, -1).includes(column.id),

          style: {
            flex: width + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(maxWidth)
          },
          toggleSort: function toggleSort(e) {
            if (isSortable) _this3.sortColumn(column, multiSort ? e.shiftKey : false);
          }
        }, rest),
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(column.Header, {
          data: sortedData,
          column: column
        }),
        resizer
      );
    };

    var makeHeaders = function makeHeaders() {
      var theadProps = getTheadProps(finalState, undefined, undefined, _this3);
      var theadTrProps = getTheadTrProps(finalState, undefined, undefined, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TheadComponent,
        _extends({
          header: true,
          style: {
            minWidth: rowMinWidth + 'px'
          }
        }, theadProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TrComponent,
          _extends({
            ref: function ref(el) {
              _this3.headerRef = el;
            },
            selectRow: selectRow('header')
          }, theadTrProps),
          allVisibleColumns.map(makeHeader)
        )
      );
    };

    var makeFilter = function makeFilter(column, i) {
      var resizedCol = resized.find(function (x) {
        return x.id === column.id;
      }) || {};
      var width = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
      var theadFilterThProps = getTheadFilterThProps(finalState, undefined, column, _this3);
      var filterInputProps = getFilterInputProps(finalState, undefined, column, _this3);
      var columnHeaderProps = column.getFilterProps(finalState, undefined, column, _this3);

      var rest = _extends({}, theadFilterThProps, columnHeaderProps, {
        CellTextComponent: CellTextComponent
      });

      var filter = filtered.find(function (filter) {
        return filter.id === column.id;
      });

      var ResolvedFilterComponent = column.Filter || FilterComponent;

      var isFilterable = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(column.filterable, filterable, false);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          style: {
            flex: width + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(maxWidth)
          }
        }, rest),
        isFilterable ? _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(ResolvedFilterComponent, _extends({}, filterInputProps, {
          column: column,
          filter: filter,
          onChange: function onChange(value) {
            return _this3.filterColumn(column, value);
          }

        }), undefined) : null
      );
    };

    var makeFilters = function makeFilters() {
      var theadFilterProps = getTheadFilterProps(finalState, undefined, undefined, _this3);
      var theadFilterTrProps = getTheadFilterTrProps(finalState, undefined, undefined, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TheadComponent,
        _extends({
          filters: true,
          style: {
            minWidth: rowMinWidth + 'px'
          }
        }, theadFilterProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TrComponent,
          _extends({
            ref: function ref(el) {
              _this3.filterRef = el;
            },
            selectRow: selectRow('filter')
          }, theadFilterTrProps),
          allVisibleColumns.map(makeFilter)
        )
      );
    };

    var makePageRow = function makePageRow(row, i) {
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var rowInfo = {
        original: row[originalKey],
        row: row,
        index: row[indexKey],
        viewIndex: rowIndex += 1,
        pageSize: pageSize,
        page: page,
        level: path.length,
        nestingPath: path.concat([i]),
        aggregated: row[aggregatedKey],
        groupedByPivot: row[groupedByPivotKey],
        subRows: row[subRowsKey]
      };

      var isExpanded = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].get(expanded, rowInfo.nestingPath);
      var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this3);
      var expanderProps = getExpanderProps(finalState);
      var trProps = getTrProps(row.viewIndex % 2, finalState, rowInfo, undefined, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrGroupComponent,
        _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TrComponent,
          _extends({
            selectRow: selectRow(i),
            ref: function ref(el) {
              _this3.rowRef[i] = el;
            },
            rowIndex: row.viewIndex
          }, trProps),
          allVisibleColumns.map(function (column, i2) {
            var defaultTdProps = {};
            var resizedCol = resized.find(function (x) {
              return x.id === column.id;
            }) || {};
            var show = typeof column.show === 'function' ? column.show() : column.show;
            var width = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
            var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
            var tdProps = getTdProps(finalState, rowInfo, column, _this3);
            var columnProps = column.getProps(finalState, rowInfo, column, _this3);

            var cellInfo = _extends({}, rowInfo, {
              isExpanded: isExpanded,
              column: _extends({}, column),
              value: rowInfo.row[column.id],
              pivoted: column.pivoted,
              expander: column.expander,
              resized: resized,
              show: show,
              width: width,
              maxWidth: maxWidth,
              tdProps: tdProps,
              columnProps: columnProps
            });

            var value = cellInfo.value;

            var useOnExpanderClick = void 0;
            var isBranch = void 0;
            var isPreview = void 0;

            var onExpanderClick = function onExpanderClick(e) {
              var newExpanded = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].clone(expanded);
              if (isExpanded) {
                newExpanded = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].set(newExpanded, cellInfo.nestingPath, false);
              } else {
                newExpanded = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].set(newExpanded, cellInfo.nestingPath, {});
              }

              return _this3.setStateWithData({
                expanded: newExpanded
              }, function () {
                return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
              });
            };

            // Default to a standard cell
            if (column.Cell) {
              value = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(column.Cell, cellInfo, value);
            }
            var cellProps = _extends({}, tdProps, columnProps);
            var resolvedCell = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellTextComponent, _extends({ value: value }, cellProps));

            // Resolve Renderers
            var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
            var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
            var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
            var DefaultResolvedPivotComponent = PivotComponent || function (props) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResolvedExpanderComponent, _extends({}, props, { expanderProps: expanderProps })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResolvedPivotValueComponent, props)
              );
            };
            var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

            // Is this cell expandable?
            if (cellInfo.pivoted || cellInfo.expander) {
              // Make it expandable by defualt
              cellInfo.expandable = true;
              useOnExpanderClick = true;
              // If pivoted, has no subRows, and does not have a subComponent,
              // do not make expandable
              if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                cellInfo.expandable = false;
              }
            }

            if (cellInfo.pivoted) {
              // Is this column a branch?
              isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
              // Should this column be blank?
              isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
              // Pivot Cell Render Override
              if (isBranch) {
                // isPivot
                resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                  value: row[pivotValKey]
                }), row[pivotValKey]);
              } else if (isPreview) {
                // Show the pivot preview
                resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              } else {
                resolvedCell = null;
              }
            } else if (cellInfo.aggregated) {
              resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
            }

            if (cellInfo.expander) {
              defaultTdProps = expanderTdDefaultProps;
              resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(ResolvedExpanderComponent, _extends({}, cellInfo, { expanderProps: expanderProps }), row[pivotValKey]);
              if (pivotBy) {
                if (cellInfo.groupedByPivot) {
                  resolvedCell = null;
                }
                if (!cellInfo.subRows && !SubComponent) {
                  resolvedCell = null;
                }
              }
            }

            var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

            // If there are multiple onClick events, make sure they don't
            // override eachother. This should maybe be expanded to handle all
            // function attributes
            var interactionProps = {
              onClick: resolvedOnExpanderClick
            };

            if (tdProps.onClick) {
              interactionProps.onClick = function (e) {
                tdProps.onClick(e, function () {
                  return resolvedOnExpanderClick(e);
                });
              };
            }

            if (columnProps.onClick) {
              interactionProps.onClick = function (e) {
                columnProps.onClick(e, function () {
                  return resolvedOnExpanderClick(e);
                });
              };
            }

            // Return the cell
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              TdComponent
              // eslint-disable-next-line react/no-array-index-key
              ,
              _extends({ key: i2 + '-' + column.id,
                hidden: !show,
                style: {
                  flex: width + ' 0 auto',
                  width: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(width),
                  maxWidth: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(maxWidth)
                }
              }, tdProps, columnProps, interactionProps, defaultTdProps),
              resolvedCell
            );
          })
        ),
        rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
          return makePageRow(d, i, rowInfo.nestingPath);
        }),
        SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
      );
    };

    var makePadColumn = function makePadColumn(column, i) {
      var resizedCol = resized.find(function (x) {
        return x.id === column.id;
      }) || {};
      var show = typeof column.show === 'function' ? column.show() : column.show;
      var width = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var flex = width;
      var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
      var tdProps = getTdProps(finalState, undefined, column, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TdComponent,
        _extends({
          key: i + '-' + column.id,
          hidden: !show,
          style: {
            flex: flex + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(maxWidth)
          }
        }, tdProps),
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(PadRowComponent)
      );
    };

    var makePadRow = function makePadRow(row, i) {
      var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this3);
      var trProps = getTrProps(row.viewIndex % 2, finalState, undefined, undefined, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrGroupComponent,
        _extends({ key: i }, trGroupProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TrComponent,
          _extends({
            padrow: true,
            even: (pageRows.length + i) % 2
          }, trProps),
          allVisibleColumns.map(makePadColumn)
        )
      );
    };

    var makeColumnFooter = function makeColumnFooter(column, i) {
      var resizedCol = resized.find(function (x) {
        return x.id === column.id;
      }) || {};
      var show = typeof column.show === 'function' ? column.show() : column.show;
      var width = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
      var tFootTdProps = getTfootTdProps(finalState, undefined, undefined, _this3);
      var columnProps = column.getProps(finalState, undefined, column, _this3);
      var columnFooterProps = column.getFooterProps(finalState, undefined, column, _this3);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TdComponent,
        _extends({
          key: i + '-' + column.id,
          hidden: !show,
          style: {
            flex: width + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].asPx(maxWidth)
          }
        }, columnProps, tFootTdProps, columnFooterProps),
        _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(column.Footer, {
          data: sortedData,
          column: column
        })
      );
    };

    var makeColumnFooters = function makeColumnFooters() {
      var tFootProps = getTfootProps(finalState, undefined, undefined, _this3);
      var tFootTrProps = getTfootTrProps(finalState, undefined, undefined, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TfootComponent,
        _extends({
          style: {
            minWidth: rowMinWidth + 'px'
          }
        }, tFootProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TrComponent,
          _extends({
            ref: function ref(el) {
              _this3.footerRef = el;
            },
            selectRow: selectRow('footer')
          }, tFootTrProps),
          allVisibleColumns.map(makeColumnFooter)
        )
      );
    };

    var makePagination = function makePagination() {
      var paginationProps = getPaginationProps(finalState, undefined, undefined, _this3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginationComponent, _extends({}, resolvedState, {
        pages: pages,
        canPrevious: canPrevious,
        canNext: canNext,
        onPageChange: _this3.onPageChange,
        onPageSizeChange: _this3.onPageSizeChange
      }, paginationProps));
    };

    var makeTable = function makeTable() {
      var pagination = makePagination();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        rootProps,
        showPagination && showPaginationTop ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          pagination
        ) : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TableComponent,
          tableProps,
          hasHeaderGroups ? makeHeaderGroups() : null,
          makeHeaders(),
          hasFilters ? makeFilters() : null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            TbodyComponent,
            _extends({
              style: {
                minWidth: rowMinWidth + 'px'
              }
            }, tBodyProps),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingComponent, _extends({
              loading: loading,
              loadingText: loadingText
            }, loadingProps)),
            pageRows.map(function (d, i) {
              return makePageRow(d, i);
            }),
            padRows.map(makePadRow)
          ),
          hasColumnFooter ? makeColumnFooters() : null
        ),
        showPagination && showPaginationBottom ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          pagination
        ) : null,
        !pageRows.length && !loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          NoDataComponent,
          noDataProps,
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeComponent(noDataText)
        )
      );
    };

    // childProps are optionally passed to a function-as-a-child
    return children ? children(finalState, makeTable, this) : makeTable();
  };

  return ReactTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ReactTable.defaultProps = _defaultProps__WEBPACK_IMPORTED_MODULE_2__["default"];

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.getResolvedState = function (props, state) {
    var resolvedState = _extends({}, _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(_this4.state), _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(_this4.props), _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(state), _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(props));
    return resolvedState;
  };

  this.getDataModel = function (newState) {
    var columns = newState.columns,
        _newState$pivotBy = newState.pivotBy,
        pivotBy = _newState$pivotBy === undefined ? [] : _newState$pivotBy,
        data = newState.data,
        pivotIDKey = newState.pivotIDKey,
        pivotValKey = newState.pivotValKey,
        subRowsKey = newState.subRowsKey,
        aggregatedKey = newState.aggregatedKey,
        nestingLevelKey = newState.nestingLevelKey,
        originalKey = newState.originalKey,
        indexKey = newState.indexKey,
        groupedByPivotKey = newState.groupedByPivotKey,
        SubComponent = newState.SubComponent;

    // Determine Header Groups

    var hasHeaderGroups = false;
    columns.forEach(function (column) {
      if (column.columns) {
        hasHeaderGroups = true;
      }
    });

    var columnsWithExpander = [].concat(columns);

    var expanderColumn = columns.find(function (col) {
      return col.expander || col.columns && col.columns.some(function (col2) {
        return col2.expander;
      });
    });
    // The actual expander might be in the columns field of a group column
    if (expanderColumn && !expanderColumn.expander) {
      expanderColumn = expanderColumn.columns.find(function (col) {
        return col.expander;
      });
    }

    // If we have SubComponent's we need to make sure we have an expander column
    if (SubComponent && !expanderColumn) {
      expanderColumn = { expander: true };
      columnsWithExpander = [expanderColumn].concat(columnsWithExpander);
    }

    var makeDecoratedColumn = function makeDecoratedColumn(column, parentColumn) {
      var dcol = void 0;
      if (column.expander) {
        dcol = _extends({}, _this4.props.column, _this4.props.expanderDefaults, column);
      } else {
        dcol = _extends({}, _this4.props.column, column);
      }

      // Ensure minWidth is not greater than maxWidth if set
      if (dcol.maxWidth < dcol.minWidth) {
        dcol.minWidth = dcol.maxWidth;
      }

      if (parentColumn) {
        dcol.parentColumn = parentColumn;
      }

      // First check for string accessor
      if (typeof dcol.accessor === 'string') {
        dcol.id = dcol.id || dcol.accessor;
        var accessorString = dcol.accessor;
        dcol.accessor = function (row) {
          return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].get(row, accessorString);
        };
        return dcol;
      }

      // Fall back to functional accessor (but require an ID)
      if (dcol.accessor && !dcol.id) {
        console.warn(dcol);
        throw new Error('A column id is required if using a non-string accessor for column above.');
      }

      // Fall back to an undefined accessor
      if (!dcol.accessor) {
        dcol.accessor = function () {
          return undefined;
        };
      }

      return dcol;
    };

    var allDecoratedColumns = [];

    // Decorate the columns
    var decorateAndAddToAll = function decorateAndAddToAll(column, parentColumn) {
      var decoratedColumn = makeDecoratedColumn(column, parentColumn);
      allDecoratedColumns.push(decoratedColumn);
      return decoratedColumn;
    };

    var decoratedColumns = columnsWithExpander.map(function (column) {
      if (column.columns) {
        return _extends({}, column, {
          columns: column.columns.map(function (d) {
            return decorateAndAddToAll(d, column);
          })
        });
      }
      return decorateAndAddToAll(column);
    });

    // Build the visible columns, headers and flat column list
    var visibleColumns = decoratedColumns.slice();
    var allVisibleColumns = [];

    visibleColumns = visibleColumns.map(function (column) {
      if (column.columns) {
        var visibleSubColumns = column.columns.filter(function (d) {
          return pivotBy.indexOf(d.id) > -1 ? false : _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(d.show, true);
        });
        return _extends({}, column, {
          columns: visibleSubColumns
        });
      }
      return column;
    });

    visibleColumns = visibleColumns.filter(function (column) {
      return column.columns ? column.columns.length : pivotBy.indexOf(column.id) > -1 ? false : _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(column.show, true);
    });

    // Find any custom pivot location
    var pivotIndex = visibleColumns.findIndex(function (col) {
      return col.pivot;
    });

    // Handle Pivot Columns
    if (pivotBy.length) {
      // Retrieve the pivot columns in the correct pivot order
      var pivotColumns = [];
      pivotBy.forEach(function (pivotID) {
        var found = allDecoratedColumns.find(function (d) {
          return d.id === pivotID;
        });
        if (found) {
          pivotColumns.push(found);
        }
      });

      var PivotParentColumn = pivotColumns.reduce(function (prev, current) {
        return prev && prev === current.parentColumn && current.parentColumn;
      }, pivotColumns[0].parentColumn);

      var PivotGroupHeader = hasHeaderGroups && (PivotParentColumn ? PivotParentColumn.Header : pivotColumns[0].PivotHeader || pivotColumns[0].Header);

      var pivotColumnGroup = {
        Header: PivotGroupHeader,
        columns: pivotColumns.map(function (col) {
          return _extends({}, _this4.props.pivotDefaults, col, {
            pivoted: true
          });
        })
      };

      // Place the pivotColumns back into the visibleColumns
      if (pivotIndex >= 0) {
        pivotColumnGroup = _extends({}, visibleColumns[pivotIndex], pivotColumnGroup);
        visibleColumns.splice(pivotIndex, 1, pivotColumnGroup);
      } else {
        visibleColumns.unshift(pivotColumnGroup);
      }
    }

    // Build Header Groups
    var headerGroups = [];
    var currentSpan = [];

    // A convenience function to add a header and reset the currentSpan
    var addHeader = function addHeader(columns, column) {
      headerGroups.push(_extends({}, _this4.props.column, column, {
        columns: columns
      }));
      currentSpan = [];
    };

    // Build flast list of allVisibleColumns and HeaderGroups
    visibleColumns.forEach(function (column) {
      if (column.columns) {
        allVisibleColumns = allVisibleColumns.concat(column.columns);
        if (currentSpan.length > 0) {
          addHeader(currentSpan);
        }
        addHeader(column.columns, column);
        return;
      }
      allVisibleColumns.push(column);
      currentSpan.push(column);
    });
    if (hasHeaderGroups && currentSpan.length > 0) {
      addHeader(currentSpan);
    }

    // Access the data
    var accessRow = function accessRow(d, i) {
      var _row;

      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var row = (_row = {}, _row[originalKey] = d, _row[indexKey] = i, _row[subRowsKey] = d[subRowsKey], _row[nestingLevelKey] = level, _row);
      allDecoratedColumns.forEach(function (column) {
        if (column.expander) return;
        row[column.id] = column.accessor(d);
      });
      if (row[subRowsKey]) {
        row[subRowsKey] = row[subRowsKey].map(function (d, i) {
          return accessRow(d, i, level + 1);
        });
      }
      return row;
    };
    var resolvedData = data.map(function (d, i) {
      return accessRow(d, i);
    });

    var aggregatingColumns = allVisibleColumns.filter(function (d) {
      return !d.expander && d.aggregate;
    });

    // If pivoting, recursively group the data
    var aggregate = function aggregate(rows) {
      var aggregationValues = {};
      aggregatingColumns.forEach(function (column) {
        var values = rows.map(function (d) {
          return d[column.id];
        });
        aggregationValues[column.id] = column.aggregate(values, rows);
      });
      return aggregationValues;
    };
    if (pivotBy.length) {
      var groupRecursively = function groupRecursively(rows, keys) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        // This is the last level, just return the rows
        if (i === keys.length) {
          return rows;
        }
        // Group the rows together for this level
        var groupedRows = Object.entries(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].groupBy(rows, keys[i])).map(function (_ref) {
          var _ref2;

          var key = _ref[0],
              value = _ref[1];
          return _ref2 = {}, _ref2[pivotIDKey] = keys[i], _ref2[pivotValKey] = key, _ref2[keys[i]] = key, _ref2[subRowsKey] = value, _ref2[nestingLevelKey] = i, _ref2[groupedByPivotKey] = true, _ref2;
        });
        // Recurse into the subRows
        groupedRows = groupedRows.map(function (rowGroup) {
          var _extends2;

          var subRows = groupRecursively(rowGroup[subRowsKey], keys, i + 1);
          return _extends({}, rowGroup, (_extends2 = {}, _extends2[subRowsKey] = subRows, _extends2[aggregatedKey] = true, _extends2), aggregate(subRows));
        });
        return groupedRows;
      };
      resolvedData = groupRecursively(resolvedData, pivotBy);
    }

    return _extends({}, newState, {
      resolvedData: resolvedData,
      allVisibleColumns: allVisibleColumns,
      headerGroups: headerGroups,
      allDecoratedColumns: allDecoratedColumns,
      hasHeaderGroups: hasHeaderGroups
    });
  };

  this.getSortedData = function (resolvedState) {
    var manual = resolvedState.manual,
        sorted = resolvedState.sorted,
        filtered = resolvedState.filtered,
        defaultFilterMethod = resolvedState.defaultFilterMethod,
        resolvedData = resolvedState.resolvedData,
        allVisibleColumns = resolvedState.allVisibleColumns,
        allDecoratedColumns = resolvedState.allDecoratedColumns;


    var sortMethodsByColumnID = {};

    allDecoratedColumns.filter(function (col) {
      return col.sortMethod;
    }).forEach(function (col) {
      sortMethodsByColumnID[col.id] = col.sortMethod;
    });

    // Resolve the data from either manual data or sorted data
    return {
      sortedData: manual ? resolvedData : _this4.sortData(_this4.filterData(resolvedData, filtered, defaultFilterMethod, allVisibleColumns), sorted, sortMethodsByColumnID)
    };
  };

  this.fireFetchData = function () {
    _this4.props.onFetchData(_this4.getResolvedState(), _this4);
  };

  this.getStateOrProp = function (key) {
    return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(_this4.state[key], _this4.props[key]);
  };

  this.filterData = function (data, filtered, defaultFilterMethod, allVisibleColumns) {
    var filteredData = data;
    if (filtered.length) {
      filteredData = filtered.reduce(function (filteredSoFar, nextFilter) {
        var column = allVisibleColumns.find(function (x) {
          return x.id === nextFilter.id;
        });

        // Don't filter hidden columns or columns that have had their filters disabled
        if (!column || column.filterable === false) {
          return filteredSoFar;
        }

        var filterMethod = column.filterMethod || defaultFilterMethod;

        // If 'filterAll' is set to true, pass the entire dataset to the filter method
        if (column.filterAll) {
          return filterMethod(nextFilter, filteredSoFar, column);
        }
        return filteredSoFar.filter(function (row) {
          return filterMethod(nextFilter, row, column);
        });
      }, filteredData);

      // Apply the filter to the subrows if we are pivoting, and then
      // filter any rows without subcolumns because it would be strange to show
      filteredData = filteredData.map(function (row) {
        var _extends3;

        if (!row[_this4.props.subRowsKey]) {
          return row;
        }
        return _extends({}, row, (_extends3 = {}, _extends3[_this4.props.subRowsKey] = _this4.filterData(row[_this4.props.subRowsKey], filtered, defaultFilterMethod, allVisibleColumns), _extends3));
      }).filter(function (row) {
        if (!row[_this4.props.subRowsKey]) {
          return true;
        }
        return row[_this4.props.subRowsKey].length > 0;
      });
    }

    return filteredData;
  };

  this.sortData = function (data, sorted) {
    var sortMethodsByColumnID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!sorted.length) {
      return data;
    }

    var sortedData = (_this4.props.orderByMethod || _utils__WEBPACK_IMPORTED_MODULE_1__["default"].orderBy)(data, sorted.map(function (sort) {
      // Support custom sorting methods for each column
      if (sortMethodsByColumnID[sort.id]) {
        return function (a, b) {
          return sortMethodsByColumnID[sort.id](a[sort.id], b[sort.id], sort.desc);
        };
      }
      return function (a, b) {
        return _this4.props.defaultSortMethod(a[sort.id], b[sort.id], sort.desc);
      };
    }), sorted.map(function (d) {
      return !d.desc;
    }), _this4.props.indexKey);

    sortedData.forEach(function (row) {
      if (!row[_this4.props.subRowsKey]) {
        return;
      }
      row[_this4.props.subRowsKey] = _this4.sortData(row[_this4.props.subRowsKey], sorted, sortMethodsByColumnID);
    });

    return sortedData;
  };

  this.getMinRows = function () {
    return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(_this4.props.minRows, _this4.getStateOrProp('pageSize'));
  };

  this.onPageChange = function (page) {
    var _props = _this4.props,
        onPageChange = _props.onPageChange,
        collapseOnPageChange = _props.collapseOnPageChange;


    var newState = { page: page };
    if (collapseOnPageChange) {
      newState.expanded = {};
    }
    _this4.setStateWithData(newState, function () {
      return onPageChange && onPageChange(page);
    });
  };

  this.onPageSizeChange = function (newPageSize) {
    var onPageSizeChange = _this4.props.onPageSizeChange;

    var _getResolvedState = _this4.getResolvedState(),
        pageSize = _getResolvedState.pageSize,
        page = _getResolvedState.page;

    // Normalize the page to display


    var currentRow = pageSize * page;
    var newPage = Math.floor(currentRow / newPageSize);

    _this4.setStateWithData({
      pageSize: newPageSize,
      page: newPage
    }, function () {
      return onPageSizeChange && onPageSizeChange(newPageSize, newPage);
    });
  };

  this.sortColumn = function (column, additive) {
    var _getResolvedState2 = _this4.getResolvedState(),
        sorted = _getResolvedState2.sorted,
        skipNextSort = _getResolvedState2.skipNextSort,
        defaultSortDesc = _getResolvedState2.defaultSortDesc;

    var firstSortDirection = Object.prototype.hasOwnProperty.call(column, 'defaultSortDesc') ? column.defaultSortDesc : defaultSortDesc;
    var secondSortDirection = !firstSortDirection;

    // we can't stop event propagation from the column resize move handlers
    // attached to the document because of react's synthetic events
    // so we have to prevent the sort function from actually sorting
    // if we click on the column resize element within a header.
    if (skipNextSort) {
      _this4.setStateWithData({
        skipNextSort: false
      });
      return;
    }

    var onSortedChange = _this4.props.onSortedChange;


    var newSorted = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].clone(sorted || []).map(function (d) {
      d.desc = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].isSortingDesc(d);
      return d;
    });
    if (!_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(column)) {
      // Single-Sort
      var existingIndex = newSorted.findIndex(function (d) {
        return d.id === column.id;
      });
      if (existingIndex > -1) {
        var existing = newSorted[existingIndex];
        if (existing.desc === secondSortDirection) {
          if (additive) {
            newSorted.splice(existingIndex, 1);
          } else {
            existing.desc = firstSortDirection;
            newSorted = [existing];
          }
        } else {
          existing.desc = secondSortDirection;
          if (!additive) {
            newSorted = [existing];
          }
        }
      } else if (additive) {
        newSorted.push({
          id: column.id,
          desc: firstSortDirection
        });
      } else {
        newSorted = [{
          id: column.id,
          desc: firstSortDirection
        }];
      }
    } else {
      // Multi-Sort
      var _existingIndex = newSorted.findIndex(function (d) {
        return d.id === column[0].id;
      });
      // Existing Sorted Column
      if (_existingIndex > -1) {
        var _existing = newSorted[_existingIndex];
        if (_existing.desc === secondSortDirection) {
          if (additive) {
            newSorted.splice(_existingIndex, column.length);
          } else {
            column.forEach(function (d, i) {
              newSorted[_existingIndex + i].desc = firstSortDirection;
            });
          }
        } else {
          column.forEach(function (d, i) {
            newSorted[_existingIndex + i].desc = secondSortDirection;
          });
        }
        if (!additive) {
          newSorted = newSorted.slice(_existingIndex, column.length);
        }
        // New Sort Column
      } else if (additive) {
        newSorted = newSorted.concat(column.map(function (d) {
          return {
            id: d.id,
            desc: firstSortDirection
          };
        }));
      } else {
        newSorted = column.map(function (d) {
          return {
            id: d.id,
            desc: firstSortDirection
          };
        });
      }
    }

    _this4.setStateWithData({
      page: !sorted.length && newSorted.length || !additive ? 0 : _this4.state.page,
      sorted: newSorted
    }, function () {
      return onSortedChange && onSortedChange(newSorted, column, additive);
    });
  };

  this.filterColumn = function (column, value) {
    var _getResolvedState3 = _this4.getResolvedState(),
        filtered = _getResolvedState3.filtered;

    var onFilteredChange = _this4.props.onFilteredChange;

    // Remove old filter first if it exists

    var newFiltering = (filtered || []).filter(function (x) {
      return x.id !== column.id;
    });

    if (value !== '') {
      newFiltering.push({
        id: column.id,
        value: value
      });
    }

    _this4.setStateWithData({
      filtered: newFiltering
    }, function () {
      return onFilteredChange && onFilteredChange(newFiltering, column, value);
    });
  };

  this.resizeColumnStart = function (event, column, isTouch) {
    event.stopPropagation();
    var parentWidth = event.target.parentElement.getBoundingClientRect().width;

    var pageX = void 0;
    if (isTouch) {
      pageX = event.changedTouches[0].pageX;
    } else {
      pageX = event.pageX;
    }

    _this4.trapEvents = true;
    _this4.setStateWithData({
      currentlyResizing: {
        id: column.id,
        startX: pageX,
        parentWidth: parentWidth
      }
    }, function () {
      if (isTouch) {
        document.addEventListener('touchmove', _this4.resizeColumnMoving);
        document.addEventListener('touchcancel', _this4.resizeColumnEnd);
        document.addEventListener('touchend', _this4.resizeColumnEnd);
      } else {
        document.addEventListener('mousemove', _this4.resizeColumnMoving);
        document.addEventListener('mouseup', _this4.resizeColumnEnd);
        document.addEventListener('mouseleave', _this4.resizeColumnEnd);
      }
    });
  };

  this.resizeColumnMoving = function (event) {
    event.stopPropagation();
    var onResizedChange = _this4.props.onResizedChange;

    var _getResolvedState4 = _this4.getResolvedState(),
        resized = _getResolvedState4.resized,
        currentlyResizing = _getResolvedState4.currentlyResizing;

    // Delete old value


    var newResized = resized.filter(function (x) {
      return x.id !== currentlyResizing.id;
    });

    var pageX = void 0;

    if (event.type === 'touchmove') {
      pageX = event.changedTouches[0].pageX;
    } else if (event.type === 'mousemove') {
      pageX = event.pageX;
    }

    // Set the min size to 10 to account for margin and border or else the
    // group headers don't line up correctly
    var newWidth = Math.max(currentlyResizing.parentWidth + pageX - currentlyResizing.startX, 11);

    newResized.push({
      id: currentlyResizing.id,
      value: newWidth
    });

    _this4.setStateWithData({
      resized: newResized
    }, function () {
      return onResizedChange && onResizedChange(newResized, event);
    });
  };

  this.resizeColumnEnd = function (event) {
    event.stopPropagation();
    var isTouch = event.type === 'touchend' || event.type === 'touchcancel';

    if (isTouch) {
      document.removeEventListener('touchmove', _this4.resizeColumnMoving);
      document.removeEventListener('touchcancel', _this4.resizeColumnEnd);
      document.removeEventListener('touchend', _this4.resizeColumnEnd);
    }

    // If its a touch event clear the mouse one's as well because sometimes
    // the mouseDown event gets called as well, but the mouseUp event doesn't
    document.removeEventListener('mousemove', _this4.resizeColumnMoving);
    document.removeEventListener('mouseup', _this4.resizeColumnEnd);
    document.removeEventListener('mouseleave', _this4.resizeColumnEnd);

    // The touch events don't propagate up to the sorting's onMouseDown event so
    // no need to prevent it from happening or else the first click after a touch
    // event resize will not sort the column.
    if (!isTouch) {
      _this4.setStateWithData({
        skipNextSort: true,
        currentlyResizing: false
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ReactTable);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/react-table/defaultProps.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/react-table/defaultProps.js ***!
  \**********************************************************************************************/
/*! exports provided: expanderTdDefaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expanderTdDefaultProps", function() { return expanderTdDefaultProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TableComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/TableComponent.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pagination */ "./node_modules/grommet-controls/es6/components/PagingTable/components/Pagination.js");
/* harmony import */ var _components_TheadComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TheadComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/TheadComponent.js");
/* harmony import */ var _components_TbodyComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TbodyComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/TbodyComponent.js");
/* harmony import */ var _components_TfootComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TfootComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/TfootComponent.js");
/* harmony import */ var _components_NoDataComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NoDataComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/NoDataComponent.js");
/* harmony import */ var _components_ResizerComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ResizerComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/ResizerComponent.js");
/* harmony import */ var _components_ThComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ThComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/ThComponent.js");
/* harmony import */ var _components_TdComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TdComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/TdComponent.js");
/* harmony import */ var _components_CellTextComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CellTextComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/CellTextComponent.js");
/* harmony import */ var _components_FilterComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/FilterComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/FilterComponent.js");
/* harmony import */ var _components_ExpanderComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ExpanderComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/ExpanderComponent.js");
/* harmony import */ var _components_LoadingComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/LoadingComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/LoadingComponent.js");
/* harmony import */ var _components_TrGroupComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/TrGroupComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/TrGroupComponent.js");
/* harmony import */ var _components_TrComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/TrComponent */ "./node_modules/grommet-controls/es6/components/PagingTable/components/TrComponent.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-param-reassign */

















var emptyObj = function emptyObj() {
  return {};
};
var expanderTdDefaultProps = { pad: undefined };

var defaultTableProps = {};

var defaultHeaderProps = {
  background: 'brand', border: 'all', align: 'center'
};

var defaultBodyProps = {
  animation: { type: 'fadeIn', duration: 2000, size: 'large' }
};

var defaultRowOddProps = {};

var defaultRowEvenProps = {};
var defaultFooterProps = { background: 'light-1' };
var defaultPaginationProps = { pad: { vertical: 'medium' } };

var defaultFilterProps = { border: 'bottom' };
var defaultFilterInputProps = { size: 'small', placeholder: 'Filter...' };

/* harmony default export */ __webpack_exports__["default"] = ({
  // General
  data: [],
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  multiSort: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  // eslint-disable-next-line no-unused-vars
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    if (row[id] !== undefined && filter.value !== undefined) {
      return String(row[id]).toUpperCase().startsWith(filter.value.toUpperCase());
    }
    return true;
  },
  // eslint-disable-next-line no-unused-vars
  defaultSortMethod: function defaultSortMethod(a, b, desc) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },

  // Component decorators
  getProps: function getProps(_ref) {
    var className = _ref.className;
    return { className: className };
  },
  getTableProps: function getTableProps(_ref2) {
    var decorations = _ref2.decorations;
    return decorations && decorations.table || defaultTableProps;
  },
  getTheadGroupProps: function getTheadGroupProps(_ref3) {
    var decorations = _ref3.decorations;
    return decorations && (decorations.headerGroup || decorations.header) || {};
  },
  getTheadGroupTrProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: function getTheadThProps(_ref4) {
    var decorations = _ref4.decorations;
    return decorations && decorations.header || defaultHeaderProps;
  },
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: function getTheadFilterTrProps(_ref5) {
    var decorations = _ref5.decorations;
    return decorations && decorations.filterRow || {};
  },
  getFilterInputProps: function getFilterInputProps(_ref6) {
    var decorations = _ref6.decorations;
    return decorations && decorations.filterInput || defaultFilterInputProps;
  },
  getTheadFilterThProps: function getTheadFilterThProps(_ref7) {
    var decorations = _ref7.decorations;
    return decorations && decorations.filter || defaultFilterProps;
  },
  getTbodyProps: function getTbodyProps(_ref8) {
    var decorations = _ref8.decorations;
    return decorations && decorations.body || defaultBodyProps;
  },
  getTrGroupProps: emptyObj,
  getTrProps: function getTrProps(even, _ref9) {
    var decorations = _ref9.decorations;

    if (decorations) {
      var props = _extends({}, decorations.row);
      if (even) {
        props = _extends({}, props, decorations.rowEven || defaultRowEvenProps);
      } else {
        props = _extends({}, props, decorations.rowOdd || defaultRowOddProps);
      }
      return props;
    }
    return even ? defaultRowEvenProps : defaultRowOddProps;
  },
  getTdProps: function getTdProps(_ref10) {
    var decorations = _ref10.decorations;
    return decorations && decorations.cell || {};
  },
  getExpanderProps: function getExpanderProps(_ref11) {
    var decorations = _ref11.decorations;
    return decorations && decorations.expander || {};
  },
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: function getTfootTdProps(_ref12) {
    var decorations = _ref12.decorations;
    return decorations && decorations.footer || defaultFooterProps;
  },
  getPaginationProps: function getPaginationProps(_ref13) {
    var decorations = _ref13.decorations;
    return decorations && decorations.pagination || defaultPaginationProps;
  },
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 100,
    // Cells only
    getProps: function getProps(state, rowInfo, column) {
      if (column && column.decorations) {
        return column.decorations.cell || {};
      }
      return {};
    },
    // Pivot only
    aggregate: undefined,
    // Headers only
    getHeaderProps: function getHeaderProps(state, rowInfo, column) {
      return column && column.decorations && column.decorations.header || {};
    },
    getFilterProps: function getFilterProps(state, rowInfo, column) {
      return column && column.decorations && column.decorations.filter || {};
    },
    // Footers only
    getFooterProps: function getFooterProps(state, rowInfo, column) {
      return column && column.decorations && column.decorations.footer || {};
    },
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 46
  },

  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',

  // Components
  TableComponent: _components_TableComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
  TheadComponent: _components_TheadComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
  TbodyComponent: _components_TbodyComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
  TrGroupComponent: _components_TrGroupComponent__WEBPACK_IMPORTED_MODULE_14__["default"],
  TrComponent: _components_TrComponent__WEBPACK_IMPORTED_MODULE_15__["default"],
  ThComponent: _components_ThComponent__WEBPACK_IMPORTED_MODULE_8__["default"],
  TdComponent: _components_TdComponent__WEBPACK_IMPORTED_MODULE_9__["default"],
  CellTextComponent: _components_CellTextComponent__WEBPACK_IMPORTED_MODULE_10__["default"],
  TfootComponent: _components_TfootComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
  FilterComponent: _components_FilterComponent__WEBPACK_IMPORTED_MODULE_11__["default"],
  ExpanderComponent: _components_ExpanderComponent__WEBPACK_IMPORTED_MODULE_12__["default"],
  PivotValueComponent: function PivotValueComponent(_ref14) {
    var subRows = _ref14.subRows,
        value = _ref14.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      null,
      value,
      ' ',
      subRows && '(' + subRows.length + ')'
    );
  },
  AggregatedComponent: function AggregatedComponent(_ref15) {
    var subRows = _ref15.subRows,
        column = _ref15.column;

    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { key: i },
          row[column.id],
          i < subRows.length - 1 ? ', ' : ''
        )
      );
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      null,
      previewValues
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _components_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: _components_LoadingComponent__WEBPACK_IMPORTED_MODULE_13__["default"],
  NoDataComponent: _components_NoDataComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
  ResizerComponent: _components_ResizerComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
  PadRowComponent: function PadRowComponent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      null,
      '\xA0'
    );
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PagingTable/react-table/utils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PagingTable/react-table/utils.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign,no-nested-ternary */

//

// ########################################################################
// Non-exported Helpers
// ########################################################################

function isArray(a) {
  return Array.isArray(a);
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace(/\[/g, '.').replace(/]/g, '').split('.');
}

function get(obj, path, def) {
  if (!path) {
    return obj;
  }
  var pathObj = makePathArray(path);
  var val = void 0;
  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {
    // continue regardless of error
  }
  return typeof val !== 'undefined' ? val : def;
}

function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];

  var keys = makePathArray(path);
  var keyPart = void 0;
  var cursor = obj;
  // eslint-disable-next-line no-cond-assign
  while ((keyPart = keys.shift()) && keys.length) {
    if (!cursor[keyPart]) {
      cursor[keyPart] = {};
    }
    cursor = cursor[keyPart];
  }
  cursor[keyPart] = value;
  return obj;
}

function range(n) {
  var arr = [];
  for (var i = 0; i < n; i += 1) {
    arr.push(n);
  }
  return arr;
}

function orderBy(arr, funcs, dirs, indexKey) {
  return arr.sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i += 1) {
      var comp = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = comp(rowA, rowB);
      if (sortInt) {
        return desc ? -sortInt : sortInt;
      }
    }
    // Use the row index for tie breakers
    return dirs[0] ? rowA[indexKey] - rowB[indexKey] : rowB[indexKey] - rowA[indexKey];
  });
}

function remove(a, b) {
  return a.filter(function (o, i) {
    var r = b(o);
    if (r) {
      a.splice(i, 1);
      return true;
    }
    return false;
  });
}

function clone(a) {
  try {
    return JSON.parse(JSON.stringify(a, function (key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }));
  } catch (e) {
    return a;
  }
}

function getFirstDefined() {
  for (var i = 0; i < arguments.length; i += 1) {
    if (typeof (arguments.length <= i ? undefined : arguments[i]) !== 'undefined') {
      return arguments.length <= i ? undefined : arguments[i];
    }
  }
  return undefined;
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x, i) {
    var resKey = typeof key === 'function' ? key(x, i) : x[key];
    rv[resKey] = isArray(rv[resKey]) ? rv[resKey] : [];
    rv[resKey].push(x);
    return rv;
  }, {});
}

function asPx(value) {
  value = Number(value);
  return Number.isNaN(value) ? null : value + 'px';
}

function compactObject(obj) {
  var newObj = {};
  if (obj) {
    Object.keys(obj).map(function (key) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && typeof obj[key] !== 'undefined') {
        newObj[key] = obj[key];
      }
      return true;
    });
  }
  return newObj;
}

function isSortingDesc(d) {
  return !!(d.sort === 'desc' || d.desc === true || d.asc === false);
}

function normalizeComponent(Comp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  return typeof Comp === 'function' ? Object.getPrototypeOf(Comp).isReactComponent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, params) : Comp(params) : fallback;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  set: set,
  orderBy: orderBy,
  range: range,
  remove: remove,
  clone: clone,
  getFirstDefined: getFirstDefined,
  sum: sum,
  groupBy: groupBy,
  isArray: isArray,
  compactObject: compactObject,
  isSortingDesc: isSortingDesc,
  normalizeComponent: normalizeComponent,
  asPx: asPx
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PasswordInput/PasswordInput.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PasswordInput/PasswordInput.js ***!
  \*************************************************************************************/
/*! exports provided: PasswordInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return PasswordInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons_icons_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons/icons/View */ "./node_modules/grommet-icons/icons/View.js");
/* harmony import */ var grommet_icons_icons_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_View__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DropInput */ "./node_modules/grommet-controls/es6/components/DropInput/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PasswordInput = function (_Component) {
  _inherits(PasswordInput, _Component);

  function PasswordInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, PasswordInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { showPassword: false }, _this.toggleView = function (e) {
      var showPassword = _this.state.showPassword;

      e.stopPropagation();
      _this.setState({ showPassword: !showPassword });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PasswordInput.prototype.render = function render() {
    var _props = this.props,
        viewIcon = _props.viewIcon,
        hideIcon = _props.hideIcon,
        a11yViewPassword = _props.a11yViewPassword,
        a11yHidePassword = _props.a11yHidePassword,
        rest = _objectWithoutProperties(_props, ['viewIcon', 'hideIcon', 'a11yViewPassword', 'a11yHidePassword']);

    var showPassword = this.state.showPassword;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropInput__WEBPACK_IMPORTED_MODULE_2__["DropInput"], _extends({
      type: showPassword ? 'text' : 'password',
      widgets: [{
        'icon': showPassword ? hideIcon : viewIcon,
        'aria-label': showPassword ? a11yHidePassword : a11yViewPassword,
        'onClick': this.toggleView
      }]
    }, rest));
  };

  return PasswordInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PasswordInput.defaultProps = {
  viewIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_View__WEBPACK_IMPORTED_MODULE_1__["View"], null),
  hideIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_View__WEBPACK_IMPORTED_MODULE_1__["View"], null),
  a11yViewPassword: 'View password',
  a11yHidePassword: 'Hide password'
};


var PasswordInputDoc = void 0;
if (true) {
  PasswordInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/PasswordInput/doc.js").default(PasswordInput); // eslint-disable-line global-require
}

var PasswordInputWrapper = PasswordInputDoc || PasswordInput;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PasswordInput/doc.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PasswordInput/doc.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A password field with show/hide password toggle.\n      All properties of DropInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { PasswordInput } from \'grommet-controls\';\n\n      <PasswordInput value={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yViewPassword: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Custom view password title to be used by screen readers.'),
    a11yHidePassword: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Custom view password title to be used by screen readers.'),
    viewIcon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon to view the password.'),
    hideIcon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon to hide the password.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PasswordInput/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PasswordInput/index.js ***!
  \*****************************************************************************/
/*! exports provided: PasswordInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordInput */ "./node_modules/grommet-controls/es6/components/PasswordInput/PasswordInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return _PasswordInput__WEBPACK_IMPORTED_MODULE_0__["PasswordInput"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PasswordInputField/PasswordInputField.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PasswordInputField/PasswordInputField.js ***!
  \***********************************************************************************************/
/*! exports provided: PasswordInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordInputField", function() { return PasswordInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PasswordInput_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PasswordInput/index */ "./node_modules/grommet-controls/es6/components/PasswordInput/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var PasswordInputField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordInput_index__WEBPACK_IMPORTED_MODULE_1__["PasswordInput"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/PasswordInputField/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/PasswordInputField/index.js ***!
  \**********************************************************************************/
/*! exports provided: PasswordInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordInputField */ "./node_modules/grommet-controls/es6/components/PasswordInputField/PasswordInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputField", function() { return _PasswordInputField__WEBPACK_IMPORTED_MODULE_0__["PasswordInputField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/SelectField/SelectField.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/SelectField/SelectField.js ***!
  \*********************************************************************************/
/*! exports provided: SelectField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectField", function() { return SelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var SelectField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (_ref) {
  var onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['onChange']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Select"], _extends({
    onChange: onChange
  }, rest));
});


/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/SelectField/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/SelectField/index.js ***!
  \***************************************************************************/
/*! exports provided: SelectField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectField */ "./node_modules/grommet-controls/es6/components/SelectField/SelectField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectField", function() { return _SelectField__WEBPACK_IMPORTED_MODULE_0__["SelectField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Sidebar/Sidebar.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Sidebar/Sidebar.js ***!
  \*************************************************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return SidebaWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons/icons/Menu */ "./node_modules/grommet-icons/icons/Menu.js");
/* harmony import */ var grommet_icons_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    var _temp, _this, _ret;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      collapsed: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Sidebar.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        title = _props.title,
        width = _props.width,
        children = _props.children,
        collapsible = _props.collapsible,
        headingProps = _props.headingProps,
        rest = _objectWithoutProperties(_props, ['title', 'width', 'children', 'collapsible', 'headingProps']);

    var collapsed = this.state.collapsed;

    var BtnToggle = function BtnToggle(_ref) {
      var view = _ref.view;
      return collapsible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_Menu__WEBPACK_IMPORTED_MODULE_3__["Menu"], null), onClick: function onClick() {
          return _this2.setState({ collapsed: view !== 'collapsed' });
        } }) : null;
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContext"].Consumer,
      null,
      function (size) {
        return collapsible && size === 'small' && collapsed === undefined || collapsed === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
          { align: 'start' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BtnToggle, { view: 'collapsed' })
        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
          _extends({
            width: width
          }, rest),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
            { pad: { bottom: 'small' }, gap: 'small', direction: 'row', align: 'center' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BtnToggle, { view: 'expanded' }),
            title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
              _extends({
                flex: false,
                tag: 'header'
              }, headingProps),
              typeof title === 'string' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"],
                { margin: 'none', level: 3 },
                title
              ) : title
            )
          ),
          children
        );
      }
    );
  };

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var SidebarDoc = void 0;
if (true) {
  SidebarDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Sidebar/doc.js").default(Sidebar); // eslint-disable-line global-require
}

var SidebaWrapper = SidebarDoc || Sidebar;

SidebaWrapper.defaultProps = {
  title: undefined,
  width: 'medium',
  collapsible: true
};

SidebaWrapper.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  collapsible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Sidebar/doc.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Sidebar/doc.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('Collapsible side bar component.').usage('$ npm install grommet-controls\n\n    import { Sidebar } from \'grommet-controls\';\n\n    <Sidebar title=\'My title\'>\n\n        ...\n    </Sidebar>\n');

  DocumentedElement.propTypes = {
    title: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Title string or any react node.'),
    width: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The width of the side bar.').defaultValue('medium'),
    collapsible: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether the sidebar can be collapsed.').defaultValue(true)
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Sidebar/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Sidebar/index.js ***!
  \***********************************************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./node_modules/grommet-controls/es6/components/Sidebar/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_0__["Sidebar"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Spinning/Spinning.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Spinning/Spinning.js ***!
  \***************************************************************************/
/*! exports provided: Spinning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinning", function() { return SpinningWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinners */ "./node_modules/grommet-controls/es6/components/Spinning/spinners.js");
/* harmony import */ var _spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spinners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledSpinning */ "./node_modules/grommet-controls/es6/components/Spinning/StyledSpinning.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ported to styled-componnets from
// https://github.com/KyleAMathews/react-spinkit






var styledComponents = {
  'circle': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["CircleSpinner"],
  'three-bounce': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["ThreeBounceSpinner"],
  'cube-grid': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["CubeGridSpinner"],
  'wave': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["WaveSpinner"],
  'folding-cube': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["FoldingCubeSpinner"],
  'double-bounce': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["DoubleBounceSpinner"],
  'wandering-cubes': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["WanderingCubesSpinner"],
  'chasing-dots': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["ChasingDotsSpinner"],
  'rotating-plane': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["RotatingPlaneSpinner"],
  'pulse': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["PulseSpinner"],
  'wordpress': _StyledSpinning__WEBPACK_IMPORTED_MODULE_4__["WordPressSpinner"]

};

var Spinning = function (_Component) {
  _inherits(Spinning, _Component);

  function Spinning() {
    _classCallCheck(this, Spinning);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Spinning.prototype.render = function render() {
    var _props = this.props,
        kind = _props.kind,
        fadeIn = _props.fadeIn,
        color = _props.color,
        size = _props.size;

    var spinnerInfo = _spinners__WEBPACK_IMPORTED_MODULE_3__["allSpinners"][kind] || _spinners__WEBPACK_IMPORTED_MODULE_3__["allSpinners"]['three-bounce'];
    var StyledSpinning = styledComponents[kind];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer,
      null,
      function (theme) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          StyledSpinning,
          { color: color || (theme.dark ? 'light-1' : 'dark-1'), fadeIn: fadeIn, theme: theme, size: size },
          Array.from(Array(spinnerInfo.divCount).keys()).map(function (_, idx) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { key: idx });
          })
        );
      }
    );
  };

  return Spinning;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Spinning.defaultProps = {
  kind: 'circle',
  fadeIn: 'full',
  color: undefined,
  size: 'medium'
};
Spinning.propTypes = {
  fadeIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['full', 'half', 'quarter', 'none', 'wordpress']),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};


var SpinningDoc = void 0;
if (true) {
  SpinningDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Spinning/doc.js").default(Spinning); // eslint-disable-line global-require
}

var SpinningWrapper = SpinningDoc || Spinning;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Spinning/StyledSpinning.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Spinning/StyledSpinning.js ***!
  \*********************************************************************************/
/*! exports provided: ThreeBounceSpinner, CircleSpinner, CubeGridSpinner, WaveSpinner, FoldingCubeSpinner, DoubleBounceSpinner, WanderingCubesSpinner, ChasingDotsSpinner, RotatingPlaneSpinner, PulseSpinner, WordPressSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeBounceSpinner", function() { return ThreeBounceSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleSpinner", function() { return CircleSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeGridSpinner", function() { return CubeGridSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveSpinner", function() { return WaveSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingCubeSpinner", function() { return FoldingCubeSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleBounceSpinner", function() { return DoubleBounceSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WanderingCubesSpinner", function() { return WanderingCubesSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChasingDotsSpinner", function() { return ChasingDotsSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatingPlaneSpinner", function() { return RotatingPlaneSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulseSpinner", function() { return PulseSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordPressSpinner", function() { return WordPressSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");
/* harmony import */ var grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__);



var animationFadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}']);

var animationBounceDelay = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}']);

var animationScaleDelay = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%,70%,100%{-webkit-transform:scale3D(1.0,1.0,1.0)}35%{-webkit-transform:scale3D(0.0,0.0,1.0)}']);

var animationStretchDelay = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%,40%,100%{-webkit-transform:scaleY(0.4)}20%{-webkit-transform:scaleY(1.0)}']);

var animationFoldCubeAngle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);opacity:0;}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);opacity:1;}90%,100%{-webkit-transform:perspective(140px) rotateY(180deg);opacity:0;}']);

var animationBounce = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%,100%{-webkit-transform:scale(0.0);}50%{-webkit-transform:scale(1.0);}']);

var animationCubeMove = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['25%{-webkit-transform:translateX(42px) rotate(-90deg) scale(0.5);}50%{-webkit-transform:translateX(42px) translateY(42px) rotate(-179deg);}50.1%{-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg);}75%{-webkit-transform:translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);}100%{-webkit-transform:rotate(-360deg);}']);

var animationRotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['100%{-webkit-transform:rotate(360deg)}']);

var animationRotatePlane = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%{-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg);}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);}']);

var animationScaleOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%{-webkit-transform:scale(0.0)}100%{-webkit-transform:scale(1.0);opacity:0;}']);

var animationInnerCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(['0%{-webkit-transform:rotate(0);}100%{-webkit-transform:rotate(360deg);}']);

var ThreeBounceSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__ThreeBounceSpinner',
  componentId: 'sc-1opb7yr-0'
})(['', ' & >div{background-color:', ';}height:', ';& >div{width:', ';height:', ';background-color:', ';border-radius:100%;display:inline-block;animation:', ' 1.4s infinite ease-in-out;animation-fill-mode:both;};& >div:first-child{animation-delay:-0.32s;};& >div:nth-child(2){animation-delay:-0.16s;};animation:', ' 2s;'], function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationBounceDelay, animationFadeIn);

var CircleSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__CircleSpinner',
  componentId: 'sc-1opb7yr-1'
})(['width:', ';height:', ';position:relative;& > div{background-color:initial;width:100%;height:100%;position:absolute;left:0;top:0;}& > div::before{content:\'\';display:block;margin:0 auto;width:20%;height:20%;background-color:', ';border-radius:100%;animation:', ' 1.2s infinite ease-in-out;animation-fill-mode:both;}& > div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}& > div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}& > div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}& > div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}& > div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}& > div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}& > div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}& > div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}& > div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}& > div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}& > div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}& > div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}& > div:nth-child(3)::before{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}& > div:nth-child(4)::before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}& > div:nth-child(5)::before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}& > div:nth-child(6)::before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}& > div:nth-child(7)::before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}& > div:nth-child(8)::before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}& > div:nth-child(9)::before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}& > div:nth-child(10)::before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}& > div:nth-child(11)::before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}& > div:nth-child(12)::before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationBounceDelay);

var CubeGridSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__CubeGridSpinner',
  componentId: 'sc-1opb7yr-2'
})(['width:', ';height:', ';& > div{width:33%;height:33%;background-color:', ';float:left;animation:', ' 1.3s infinite ease-in-out;}& > div:nth-child(1){-webkit-animation-delay:0.2s;animation-delay:0.2s}& > div:nth-child(2){-webkit-animation-delay:0.3s;animation-delay:0.3s}& > div:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s}& > div:nth-child(4){-webkit-animation-delay:0.1s;animation-delay:0.1s}& > div:nth-child(5){-webkit-animation-delay:0.2s;animation-delay:0.2s}& > div:nth-child(6){-webkit-animation-delay:0.3s;animation-delay:0.3s}& > div:nth-child(7){-webkit-animation-delay:0.0s;animation-delay:0.0s}& > div:nth-child(8){-webkit-animation-delay:0.1s;animation-delay:0.1s}& > div:nth-child(9){-webkit-animation-delay:0.2s;animation-delay:0.2s}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationScaleDelay);

var WaveSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__WaveSpinner',
  componentId: 'sc-1opb7yr-3'
})(['width:30px;height:27px;& > div{background-color:', ';height:100%;width:6px;display:inline-block;animation:', ' 1.2s infinite ease-in-out;}$ > div:nth-child(2){animation-delay:-1.1s;}& > div:nth-child(3){animation-delay:-1.0s;}& > div:nth-child(4){animation-delay:-0.9s;}& > div:nth-child(5){animation-delay:-0.8s;}'], function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationStretchDelay);

var FoldingCubeSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__FoldingCubeSpinner',
  componentId: 'sc-1opb7yr-4'
})(['width:', ';height:', ';position:relative;transform:rotateZ(45deg);& > div{background-color:initial;float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}& > div::before{content:\'\';position:absolute;top:0;left:0;width:100%;height:100%;background-color:', ';animation:', ' 2.4s infinite linear both;transform-origin:100% 100%;}& > div:nth-child(2){transform:scale(1.1) rotateZ(90deg);}& > div:nth-child(4){transform:scale(1.1) rotateZ(180deg);}& > div:nth-child(3){transform:scale(1.1) rotateZ(270deg);}& > div:nth-child(2)::before{animation-delay:0.3s;}& > div:nth-child(4)::before{animation-delay:0.6s;}& > div:nth-child(3)::before{animation-delay:0.9s;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationFoldCubeAngle);

var DoubleBounceSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__DoubleBounceSpinner',
  componentId: 'sc-1opb7yr-5'
})(['width:', ';height:', ';position:relative;& > div{width:100%;height:100%;border-radius:50%;background-color:', ';opacity:0.6;position:absolute;top:0;left:0;animation:', ' 2.0s infinite ease-in-out;}& > div:last-child{-webkit-animation-delay:-1.0s;animation-delay:-1.0s;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationBounce);

var WanderingCubesSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__WanderingCubesSpinner',
  componentId: 'sc-1opb7yr-6'
})(['width:52px;height:52px;position:relative;& > div{background-color:', ';width:10px;height:10px;position:absolute;top:0;left:0;animation:', ' 1.8s infinite ease-in-out;}& > div:last-child{-webkit-animation-delay:-0.9s;animation-delay:-0.9s;}'], function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationCubeMove);

var ChasingDotsSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__ChasingDotsSpinner',
  componentId: 'sc-1opb7yr-7'
})(['width:', ';height:', ';position:relative;animation:', ' 2.0s infinite linear;& > div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:', ';border-radius:100%;animation:', ' 2.0s infinite ease-in-out;}& > div:last-child{top:auto;bottom:0;-webkit-animation-delay:-1.0s;animation-delay:-1.0s;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, animationRotate, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationBounce);

var RotatingPlaneSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__RotatingPlaneSpinner',
  componentId: 'sc-1opb7yr-8'
})(['width:', ';height:', ';background-color:', ';animation:', ' 1.2s infinite ease-in-out;'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationRotatePlane);

var PulseSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__PulseSpinner',
  componentId: 'sc-1opb7yr-9'
})(['width:', ';height:', ';background-color:', ';border-radius:100%;animation:', ' 1.0s infinite ease-in-out;'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, animationScaleOut);

var WordPressSpinner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: 'StyledSpinning__WordPressSpinner',
  componentId: 'sc-1opb7yr-10'
})(['& > div{width:', ';height:', ';background-color:', ';display:inline-block;border-radius:', ';position:relative;animation:', ' 1s linear infinite;}& > div::after{content:\'\';display:block;background-color:#fff;width:8px;height:8px;position:absolute;border-radius:8px;top:5px;left:5px;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return Object(grommet_utils_colors__WEBPACK_IMPORTED_MODULE_1__["normalizeColor"])(props.color, props.theme);
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, animationInnerCircle);

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Spinning/doc.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Spinning/doc.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A spinning process indicator.').usage('\n      $ npm install grommet-controls\n \n      import { Spinning } from \'grommet-controls\';\n\n      <Spinning />\n    ');

  DocumentedElement.propTypes = {
    kind: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['circle', 'pulse', 'three-bounce', 'cube-grid', 'wave', 'folding-cube', 'double-bounce', 'wandering-cubes', 'chasing-dots', 'rotating-plane']).description('Kind of spinner.').defaultValue('circle'),
    color: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('A color identifier to use for the spinning color.'),
    size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('A size for the spinning.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Spinning/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Spinning/index.js ***!
  \************************************************************************/
/*! exports provided: Spinning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinning */ "./node_modules/grommet-controls/es6/components/Spinning/Spinning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinning", function() { return _Spinning__WEBPACK_IMPORTED_MODULE_0__["Spinning"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Spinning/spinners.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Spinning/spinners.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var spinkitSpinners = {
  'circle': { divCount: 12 },
  'cube-grid': { divCount: 9 },
  'wave': { divCount: 5 },
  'folding-cube': { divCount: 4 },
  'three-bounce': { divCount: 3 },
  'double-bounce': { divCount: 2 },
  'wandering-cubes': { divCount: 2 },
  'chasing-dots': { divCount: 2 },
  'rotating-plane': { divCount: 1 },
  'pulse': { divCount: 1 },
  'wordpress': { divCount: 1 }
};

var loadersCssSpinners = {
  'ball-grid-beat': { divCount: 9 },
  'ball-grid-pulse': { divCount: 9 },
  'line-spin-fade-loader': { divCount: 8 },
  'ball-spin-fade-loader': { divCount: 8 },
  'ball-pulse-rise': { divCount: 5 },
  'line-scale': { divCount: 5 },
  'line-scale-pulse-out': { divCount: 5 },
  'line-scale-pulse-out-rapid': { divCount: 5 },
  'pacman': { divCount: 5 },
  'line-scale-party': { divCount: 4 },
  'ball-triangle-path': { divCount: 3 },
  'ball-scale-multiple': { divCount: 3 },
  'ball-scale-ripple-multiple': { divCount: 3 },
  'ball-pulse-sync': { divCount: 3 },
  'ball-beat': { divCount: 3 },
  'ball-zig-zag': { divCount: 2 },
  'ball-zig-zag-deflect': { divCount: 2 },
  'ball-clip-rotate-pulse': { divCount: 2 },
  'ball-clip-rotate-multiple': { divCount: 2 },
  'ball-clip-rotate': { divCount: 1 },
  'ball-scale-ripple': { divCount: 1 },
  'triangle-skew-spin': { divCount: 1 }
};

module.exports = {
  spinkitSpinners: spinkitSpinners,
  loadersCssSpinners: loadersCssSpinners,
  allSpinners: _extends({}, spinkitSpinners, loadersCssSpinners)
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Tag/StyledTag.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Tag/StyledTag.js ***!
  \***********************************************************************/
/*! exports provided: StyledIcon, StyledTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledIcon", function() { return StyledIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTag", function() { return StyledTag; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_utils_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet/utils/background */ "./node_modules/grommet/utils/background.js");
/* harmony import */ var grommet_utils_background__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_background__WEBPACK_IMPORTED_MODULE_2__);




var disabledStyle = '\n  opacity: 0.4;\n  cursor: default;\n';

var StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: 'StyledTag__StyledIcon',
  componentId: 'sc-1cveylf-0'
})(['display:inline-block;> *{vertical-align:bottom;}', ''], function (props) {
  return !props.diabled && 'cursor: pointer;';
});

var StyledTag = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: 'StyledTag',
  componentId: 'sc-1cveylf-1'
})(['', ' ', ' user-select:none;', ''], function (props) {
  return Object(grommet_utils_background__WEBPACK_IMPORTED_MODULE_2__["backgroundStyle"])(props.background || 'brand', props.theme);
}, function (props) {
  return props.onClick && 'cursor: pointer;';
}, function (props) {
  return props.disabled && disabledStyle;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Tag/Tag.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Tag/Tag.js ***!
  \*****************************************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return TagWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons/icons/FormClose */ "./node_modules/grommet-icons/icons/FormClose.js");
/* harmony import */ var grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_components_hocs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/components/hocs */ "./node_modules/grommet/components/hocs.js");
/* harmony import */ var grommet_components_hocs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_components_hocs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyledTag */ "./node_modules/grommet-controls/es6/components/Tag/StyledTag.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.clickTag = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (!disabled && onClick) {
        onClick(e);
      }
      e.preventDefault();
      e.stopPropagation();
    }, _this.toggleTag = function (e) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          disabled = _this$props2.disabled;

      if (!disabled && onChange) {
        e.preventDefault();
        e.stopPropagation();
        onChange(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tag.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        disabled = _props.disabled,
        label = _props.label,
        a11yTitle = _props.a11yTitle,
        reverse = _props.reverse,
        background = _props.background,
        onClick = _props.onClick,
        onChange = _props.onChange,
        icon = _props.icon,
        color = _props.color,
        focusable = _props.focusable,
        round = _props.round,
        size = _props.size,
        truncate = _props.truncate,
        focus = _props.focus,
        rest = _objectWithoutProperties(_props, ['disabled', 'label', 'a11yTitle', 'reverse', 'background', 'onClick', 'onChange', 'icon', 'color', 'focusable', 'round', 'size', 'truncate', 'focus']);

    var grommet = this.context.grommet;

    var tagRound = round;
    var canFocus = focusable && !disabled && !!(onClick || onChange);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_3__["Keyboard"],
      {
        onEnter: this.clickTag,
        onSpace: this.toggleTag
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer,
        null,
        function (theme) {
          var closeIcon = void 0;
          if (icon || onChange) {
            closeIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _StyledTag__WEBPACK_IMPORTED_MODULE_6__["StyledIcon"],
              { theme: theme, disabled: disabled, onClick: onChange },
              icon || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_4__["FormClose"], null)
            );
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _StyledTag__WEBPACK_IMPORTED_MODULE_6__["StyledTag"],
            _extends({
              direction: 'row',
              justify: 'between',
              align: 'center',
              a11yTitle: a11yTitle,
              round: tagRound,
              onClick: onClick && _this2.clickTag,
              role: 'checkbox',
              'aria-checked': true,
              focus: focus,
              tabIndex: canFocus ? '0' : undefined,
              background: background,
              disabled: disabled,
              reverse: reverse,
              theme: theme,
              grommet: grommet
            }, rest),
            reverse && closeIcon,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(label) ? label : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              grommet__WEBPACK_IMPORTED_MODULE_3__["Text"],
              {
                color: color,
                size: size,
                truncate: truncate
              },
              label && label.toString()
            ),
            !reverse && closeIcon
          );
        }
      )
    );
  };

  return Tag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Tag.contextTypes = {
  grommet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Tag.defaultProps = {
  label: 'Text',
  pad: { horizontal: 'xsmall' },
  focusable: true
};


var TagDoc = void 0;
if (true) {
  TagDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Tag/doc.js").default(Tag); // eslint-disable-line global-require
}

var TagWrapper = Object(grommet_components_hocs__WEBPACK_IMPORTED_MODULE_5__["withFocus"])()(TagDoc || Tag);



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Tag/doc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Tag/doc.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A tag control with a label and icon.').usage('$ npm install grommet-controls\n\n    import { Tag } from \'grommet-controls\';\n\n    <Tag label={...} icon={...} />');

  DocumentedElement.propTypes = {
    a11yTitle: grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__["a11yTitlePropType"],
    border: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      color: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
      side: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['small', 'medium', 'large'])
    })]).description('Include a border.'),
    background: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Fill color for the tag.'),
    disabled: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Displays a disabled style for the tag'),
    focusable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether the tag is focusable'),
    icon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon element to place in the tag.'),
    label: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Label text to place next to the control.'),
    onClick: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user clicks the background/label of the tag, or presses the Enter key.'),

    onChange: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user clicks the icon on the tag, or presses the Space key.'),
    reverse: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether to show the label in front of the checkbox.'),
    round: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners of the tag.'),
    size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']).description('The font size of the label.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Tag/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Tag/index.js ***!
  \*******************************************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ "./node_modules/grommet-controls/es6/components/Tag/Tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _Tag__WEBPACK_IMPORTED_MODULE_0__["Tag"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Tags/Tags.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Tags/Tags.js ***!
  \*******************************************************************/
/*! exports provided: Tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return TagsWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons/icons/FormClose */ "./node_modules/grommet-icons/icons/FormClose.js");
/* harmony import */ var grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tag */ "./node_modules/grommet-controls/es6/components/Tag/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Tags = function (_Component) {
  _inherits(Tags, _Component);

  function Tags() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tags);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selectedTagIndex: -1
    }, _this.tagRefs = [], _this.selectTag = function (selected) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;

      if (onChange) {
        var tags = selected;
        if (Array.isArray(value)) {
          var index = value.indexOf(tags);
          if (index !== -1) {
            tags = value.filter(function (item) {
              return item !== selected;
            });
          } else {
            tags = [].concat(value, [tags]);
          }
        } else {
          tags = [tags];
        }
        onChange({ target: Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(_this.inputRef), option: selected, value: tags });
      }
    }, _this.onNextTag = function (event) {
      var value = _this.props.value;
      var selectedTagIndex = _this.state.selectedTagIndex;

      event.preventDefault();
      var index = selectedTagIndex + 1;
      if (index >= value.length) {
        index = 0;
      }
      _this.focusTag(index);
    }, _this.onPreviousTag = function (event) {
      var selectedTagIndex = _this.state.selectedTagIndex;
      var value = _this.props.value;

      event.preventDefault();
      var index = selectedTagIndex - 1;
      if (index < 0) {
        index = value.length - 1;
      }
      _this.focusTag(index);
    }, _this.onSelectTag = function (event) {
      var value = _this.props.value;
      var selectedTagIndex = _this.state.selectedTagIndex;

      if (selectedTagIndex >= 0 && selectedTagIndex < value.length) {
        event.preventDefault(); // prevent submitting forms
        event.stopPropagation();
        _this.selectTag(value[selectedTagIndex]);
      }
    }, _this.onCloseClick = function (e, tag) {
      e.stopPropagation();
      _this.selectTag(tag);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tags.prototype.focusTag = function focusTag(index) {
    if (index >= 0 && index < this.tagRefs.length) {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this.tagRefs[index]).focus();
      this.setState({ selectedTagIndex: index });
    }
  };

  Tags.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        placeholder = _props.placeholder,
        children = _props.children,
        id = _props.id,
        name = _props.name,
        value = _props.value,
        onChange = _props.onChange,
        focusable = _props.focusable,
        onClick = _props.onClick,
        direction = _props.direction,
        icon = _props.icon,
        tagProps = _props.tagProps,
        rest = _objectWithoutProperties(_props, ['placeholder', 'children', 'id', 'name', 'value', 'onChange', 'focusable', 'onClick', 'direction', 'icon', 'tagProps']);

    var noValues = void 0;
    if (!value || Array.isArray(value) && value.length === 0) {
      noValues = react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(placeholder) ? placeholder :
      // placeholder. minimum height of icon to keep size
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        { color: 'placeholder', style: { minHeight: '24px' } },
        placeholder || 'No selection'
      );
    }

    var values = void 0;
    if (Array.isArray(value)) {
      values = value;
    } else {
      values = value ? [value] : [];
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Keyboard"],
      {
        onEnter: this.onSelectTag,
        onSpace: this.onSelectTag,
        onLeft: this.onPreviousTag,
        onRight: this.onNextTag
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
        _extends({
          tabIndex: focusable ? '0' : undefined,
          id: id ? id + '__tag-container' : undefined,
          direction: direction,
          overflow: 'auto',
          style: { minWidth: 'auto' }
        }, rest),
        noValues || values.map(function (tag, index) {
          return children ? children(tag, index, value) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tag__WEBPACK_IMPORTED_MODULE_4__["Tag"], _extends({
            key: 'tag_' + (name || '') + '_' + index,
            ariaChecked: true,
            a11yTitle: 'Remove ' + tag.toString(),
            label: (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) !== 'object' ? tag.toString() : undefined,
            ref: function ref(_ref) {
              _this2.tagRefs[index] = _ref;
            },
            onClick: onClick ? function (e) {
              return onClick(e, tag);
            } : undefined,
            onChange: onChange ? function (e) {
              return _this2.onCloseClick(e, tag);
            } : undefined,
            icon: icon
          }, (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) === 'object' ? _extends({}, tagProps, tag) : tagProps));
        })
      )
    );
  };

  return Tags;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Tags.defaultProps = {
  pad: 'small',
  focusable: true,
  margin: { horizontal: 'xsmall', vertical: 'small' },
  value: [],
  gap: 'xsmall',
  direction: 'row-responsive',
  icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_3__["FormClose"], null)
};

var TagsDoc = void 0;
if (true) {
  TagsDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Tags/doc.js").default(Tags); // eslint-disable-line global-require
}

var TagsWrapper = TagsDoc || Tags;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Tags/doc.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Tags/doc.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");
/* harmony import */ var grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A list of tags that can be removed.').usage('\n    $ npm install grommet-controls\n\n    import { Tags } from \'grommet-controls\';\n\n    <Tags />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: grommet_utils_prop_types__WEBPACK_IMPORTED_MODULE_1__["a11yTitlePropType"],
    children: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when each option is rendered.'),
    focusable: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Whether the tag list is focusable'),
    icon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element.description('Icon element to remove the tag.'),
    tagProps: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object.description('Tag elements `<Box />` and `<Text />` properties'),
    onChange: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user removes a tag.'),
    onClick: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user clicks on a tag.'),
    direction: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['row', 'row-responsive', 'column']).description('The orientation to layout the child tags in.').defaultValue('column'),
    placeholder: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Placeholder text to use when no value is provided.'),
    value: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].element, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].object]))]).description('List of tag items to display.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Tags/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Tags/index.js ***!
  \********************************************************************/
/*! exports provided: TagsSelect, Tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsSelect", function() { return TagsSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags */ "./node_modules/grommet-controls/es6/components/Tags/Tags.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return _Tags__WEBPACK_IMPORTED_MODULE_1__["Tags"]; });

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var TagsSelect = function TagsSelect(props) {
  var _ref = props || {},
      tagProps = _ref.tagProps,
      rest = _objectWithoutProperties(_ref, ['tagProps']);

  return function (_ref2) {
    var placeholder = _ref2.placeholder,
        value = _ref2.value,
        onChange = _ref2.onChange;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_1__["Tags"], _extends({
      focusable: false,
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      tagProps: _extends({}, tagProps, { onClick: function onClick(e) {
          e.stopPropagation();
        } })
    }, rest));
  };
};




/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/TextAreaField/TextAreaField.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/TextAreaField/TextAreaField.js ***!
  \*************************************************************************************/
/*! exports provided: TextAreaField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return TextAreaField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var TextAreaField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["TextArea"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/TextAreaField/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/TextAreaField/index.js ***!
  \*****************************************************************************/
/*! exports provided: TextAreaField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextAreaField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextAreaField */ "./node_modules/grommet-controls/es6/components/TextAreaField/TextAreaField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return _TextAreaField__WEBPACK_IMPORTED_MODULE_0__["TextAreaField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/TextInputField/TextInputField.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/TextInputField/TextInputField.js ***!
  \***************************************************************************************/
/*! exports provided: TextInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputField", function() { return TextInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");




var TextInputField = Object(_withFormField__WEBPACK_IMPORTED_MODULE_2__["withFormField"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["TextInput"], props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/TextInputField/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/TextInputField/index.js ***!
  \******************************************************************************/
/*! exports provided: TextInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextInputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInputField */ "./node_modules/grommet-controls/es6/components/TextInputField/TextInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInputField", function() { return _TextInputField__WEBPACK_IMPORTED_MODULE_0__["TextInputField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Value/Value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Value/Value.js ***!
  \*********************************************************************/
/*! exports provided: Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return ValueWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");




var LABEL_SIZE_MAP = {
  xsmall: 'xsmall',
  small: 'xsmall',
  medium: 'xsmall',
  large: 'small',
  xlarge: 'medium',
  xxlarge: 'large'
};
var Value = function Value(_ref) {
  var label = _ref.label,
      value = _ref.value,
      size = _ref.size,
      weight = _ref.weight,
      gap = _ref.gap,
      units = _ref.units,
      color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
    { gap: gap },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(value) ? value : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
      { size: size, weight: weight, color: color },
      '' + (value !== undefined ? value : '-') + (units ? ' ' + units : '')
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grommet__WEBPACK_IMPORTED_MODULE_2__["Box"],
      { alignSelf: 'end' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["Text"],
        { size: LABEL_SIZE_MAP[size], color: color },
        label
      )
    )
  );
};

Value.defaultProps = {
  label: undefined,
  value: undefined,
  weight: 'bold',
  gap: 'small',
  size: 'large',
  color: undefined
};

Value.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  weight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['normal', 'bold']), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  gap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'])
};

var ValueDoc = void 0;
if (true) {
  ValueDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/Value/doc.js").default(Value); // eslint-disable-line global-require
}

var ValueWrapper = ValueDoc || Value;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Value/doc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Value/doc.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('A single value visualization with a label.').usage('$ npm install grommet-controls\n\n    import { Value } from \'grommet-controls\';\n\n    <Value value={...} label={...} />');

  DocumentedElement.propTypes = {
    label: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Value label.'),
    color: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('The value color.'),
    value: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('The value.'),
    weight: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['normal', 'bold']), react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number]).description('Font weight.'),
    gap: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('Spacing between the value and the label.'),
    size: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']).description('Value element size.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/Value/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/Value/index.js ***!
  \*********************************************************************/
/*! exports provided: Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Value */ "./node_modules/grommet-controls/es6/components/Value/Value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _Value__WEBPACK_IMPORTED_MODULE_0__["Value"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/VerticalMenu/VerticalMenu.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/VerticalMenu/VerticalMenu.js ***!
  \***********************************************************************************/
/*! exports provided: VerticalMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenu", function() { return VerticalMenuWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons/icons/FormDown */ "./node_modules/grommet-icons/icons/FormDown.js");
/* harmony import */ var grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet_icons_icons_FormNext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons/icons/FormNext */ "./node_modules/grommet-icons/icons/FormNext.js");
/* harmony import */ var grommet_icons_icons_FormNext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_icons_icons_FormNext__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isActive = function isActive(active, item) {
  return item.id === active.id || item.label === active.label;
};

var hasActiveChidlren = function hasActiveChidlren(active, item) {
  return isActive(active, item) || item.items && item.items.find(function (t) {
    return hasActiveChidlren(active, t);
  });
};
var getExpandedItems = function getExpandedItems(children, active) {
  return children.reduce(function (expandedItems, item) {
    var items = item.items,
        expanded = item.expanded,
        id = item.id,
        label = item.label;

    if (expanded || active && hasActiveChidlren(active, item)) {
      expandedItems.push(id || label);
    }
    var childrenExpandedItems = [];
    if (items) {
      childrenExpandedItems = getExpandedItems(items, active);
    }
    return expandedItems.concat(childrenExpandedItems);
  }, []);
};

var getCollapsibleItems = function getCollapsibleItems(children) {
  return children.reduce(function (collapsibleItems, _ref) {
    var items = _ref.items,
        id = _ref.id,
        label = _ref.label;

    var childrenCollapsibleItems = [];
    if (items) {
      collapsibleItems.push(id || label);

      childrenCollapsibleItems = getCollapsibleItems(items);
    }
    return collapsibleItems.concat(childrenCollapsibleItems);
  }, []);
};

var getFlatChildrenIds = function getFlatChildrenIds(children) {
  return children.reduce(function (flatChildren, item) {
    flatChildren.push(item.id || item.label);
    if (item.items) {
      // eslint-disable-next-line no-param-reassign
      flatChildren = flatChildren.concat(getFlatChildrenIds(item.items));
    }
    return flatChildren;
  }, []);
};

var getChildrenById = function getChildrenById(children, id) {
  var items = void 0;
  children.some(function (item) {
    if (item.id === id || item.label === id) {
      items = item.items;

      return true;
    }
    if (item.items) {
      items = getChildrenById(item.items, id);

      if (items) {
        return true;
      }
    }
    return false;
  });
  return items;
};

var filterItems = function filterItems(items, search) {
  if (search && search.length) {
    var searchLC = search.toLowerCase();
    return items.map(function (item) {
      return Object.assign({}, item);
    }).filter(function (item) {
      var children = item.items,
          label = item.label;

      if (label.toLowerCase().indexOf(searchLC) >= 0) {
        return true;
      }
      if (children) {
        var childItems = filterItems(children, search);
        // eslint-disable-next-line no-param-reassign
        item.items = childItems;
        if (childItems.length) {
          return true;
        }
      }
      return false;
    });
  }
  return items;
};

var VerticalMenu = function (_Component) {
  _inherits(VerticalMenu, _Component);

  function VerticalMenu() {
    var _temp, _this, _ret;

    _classCallCheck(this, VerticalMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { expandedItems: [] }, _this.onMenuChange = function (id, expanded) {
      var _this$state = _this.state,
          expandedItems = _this$state.expandedItems,
          filteredItems = _this$state.filteredItems;


      var newExpandedItems = [].concat(expandedItems);
      if (expanded) {
        var toBeCollapsed = [id].concat(getFlatChildrenIds(getChildrenById(filteredItems, id)));
        newExpandedItems = newExpandedItems.filter(function (item) {
          return toBeCollapsed.indexOf(item) < 0;
        });
      } else {
        newExpandedItems.push(id);
      }

      _this.setState({
        expandedItems: newExpandedItems
      });
    }, _this.renderItem = function (item) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _this$props = _this.props,
          activeItem = _this$props.activeItem,
          onSelect = _this$props.onSelect,
          buttonClass = _this$props.buttonClass;
      var expandedItems = _this.state.expandedItems;

      var items = item.items,
          id = item.id,
          label = item.label,
          widget = item.widget,
          icon = item.icon,
          rest = _objectWithoutProperties(item, ['items', 'id', 'label', 'widget', 'icon']);

      var itemId = id || label;
      var isExpanded = expandedItems.includes(itemId);
      var ButtonClass = items ? grommet__WEBPACK_IMPORTED_MODULE_1__["Button"] : buttonClass || grommet__WEBPACK_IMPORTED_MODULE_1__["Button"];
      var itemKey = 'item_' + itemId + '_' + level;

      var background = void 0;
      if (activeItem && activeItem.id === id) {
        background = {
          color: 'active',
          opacity: 'strong'
        };
      }

      var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
        {
          background: background
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          ButtonClass,
          _extends({
            onClick: !rest.route && !rest.path ? function () {
              return items ? _this.onMenuChange(itemId, isExpanded) : onSelect && onSelect(item);
            } : undefined,
            hoverIndicator: { color: 'active' }
          }, rest),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
            {
              direction: 'row',
              align: 'center',
              pad: 'small',
              style: {
                marginLeft: items ? 12 * level + 'px' : 16 * level + 'px'
              }
            },
            items && (isExpanded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_2__["FormDown"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons_icons_FormNext__WEBPACK_IMPORTED_MODULE_3__["FormNext"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
              { direction: 'row', justify: 'between', fill: 'horizontal', align: 'center' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
                { direction: 'row', align: 'center', gap: 'small' },
                icon,
                typeof label === 'string' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  grommet__WEBPACK_IMPORTED_MODULE_1__["Text"],
                  null,
                  items ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'strong',
                    null,
                    label
                  ) : label
                ) : label
              ),
              widget
            )
          )
        )
      );
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_1__["Box"],
        { key: itemKey },
        items ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grommet__WEBPACK_IMPORTED_MODULE_1__["Keyboard"],
          {
            onDown: function onDown() {
              return _this.onMenuChange(itemId, false, false);
            },
            onRight: function onRight() {
              return _this.onMenuChange(itemId, false);
            },
            onUp: function onUp() {
              return _this.onMenuChange(itemId, true);
            },
            onLeft: function onLeft() {
              return _this.onMenuChange(itemId, true);
            }
          },
          content
        ) : content,
        items && isExpanded && items.map(function (child) {
          return _this.renderItem(child, level + 1);
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  VerticalMenu.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var prevState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var items = nextProps.items,
        expandAll = nextProps.expandAll,
        activeItem = nextProps.activeItem,
        search = nextProps.search;
    var originalExpandAll = prevState.originalExpandAll,
        stateSearch = prevState.search,
        _prevState$items = prevState.items,
        stateItems = _prevState$items === undefined ? [] : _prevState$items;


    if (items.toString() !== stateItems.toString() || expandAll !== originalExpandAll || search !== stateSearch) {
      var filteredItems = filterItems(items, search);
      var collapsibleItems = getCollapsibleItems(filteredItems);
      var expandedItems = void 0;
      if (expandAll || search && search.length) {
        expandedItems = collapsibleItems;
      } else {
        expandedItems = getExpandedItems(filteredItems, activeItem);
      }

      var allExpanded = typeof expandAll !== 'undefined' ? expandAll : collapsibleItems.length === expandedItems.length;
      return {
        expandedItems: expandedItems,
        items: items,
        filteredItems: filteredItems,
        search: search,
        collapsibleItems: collapsibleItems,
        allExpanded: allExpanded,
        expandAll: expandAll,
        originalExpandAll: expandAll
      };
    }

    return null;
  };

  VerticalMenu.prototype.render = function render() {
    var _this2 = this;

    var filteredItems = this.state.filteredItems;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
      null,
      filteredItems && filteredItems.map(function (item) {
        return _this2.renderItem(item, 1);
      })
    );
  };

  return VerticalMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var VerticalMenuDoc = void 0;
if (true) {
  VerticalMenuDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/es6/components/VerticalMenu/doc.js").default(VerticalMenu); // eslint-disable-line global-require
}

var VerticalMenuWrapper = VerticalMenuDoc || VerticalMenu;



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/VerticalMenu/doc.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/VerticalMenu/doc.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");
/* harmony import */ var react_desc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_desc__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (Element) {
  var DocumentedElement = Object(react_desc__WEBPACK_IMPORTED_MODULE_0__["describe"])(Element).description('Hierarchical collapsible menu.').usage('$ npm install grommet-controls\n\n    import { VerticalMenu } from \'grommet-controls\';\n\n    <VerticalMenu items={...} onSelect={...} />');

  DocumentedElement.propTypes = {
    items: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      id: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('Unique id'),
      label: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Label of the item'),
      expanded: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('Initial expanded state'),
      icon: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Icon in front of the label'),
      widget: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].node.description('Widget or icon to place at the end of the item')
    })).description('Array of menu items.'),
    activeItem: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
      id: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string
    }).description('Initially active menu item.'),
    buttonClass: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].oneOfType([react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string, react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func]).description('Custom class to use for the button instead of RoutedButton.'),
    expandAll: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.description('If specified, will expand all items with chidren.'),
    onSelect: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].func.description('Function that will be called when the user selects a menu item.'),
    search: react_desc__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.description('If specified, will filter the items by the search terms.')
  };

  return DocumentedElement;
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/VerticalMenu/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/VerticalMenu/index.js ***!
  \****************************************************************************/
/*! exports provided: VerticalMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalMenu */ "./node_modules/grommet-controls/es6/components/VerticalMenu/VerticalMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalMenu", function() { return _VerticalMenu__WEBPACK_IMPORTED_MODULE_0__["VerticalMenu"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/basicColors/basicColors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/basicColors/basicColors.js ***!
  \*********************************************************************************/
/*! exports provided: white, silver, gray, black, red, maroon, yellow, olive, lime, green, aqua, teal, blue, navy, fuchsia, purple, basicColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silver", function() { return silver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maroon", function() { return maroon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "olive", function() { return olive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aqua", function() { return aqua; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navy", function() { return navy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fuchsia", function() { return fuchsia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicColors", function() { return basicColors; });
var white = '#ffffff';
var silver = '#c0c0c0';
var gray = '#808080';
var black = '#000000';
var red = '#ff0000';
var maroon = '#800000';
var yellow = '#ffff00';
var olive = '#808000';
var lime = '#00ff00';
var green = '#008000';
var aqua = '#00ffff';
var teal = '#008080';
var blue = '#0000ff';
var navy = '#000080';
var fuchsia = '#ff00ff';
var purple = '#800080';

var basicColors = {
  white: white,
  silver: silver,
  gray: gray,
  black: black,
  red: red,
  maroon: maroon,
  yellow: yellow,
  olive: olive,
  lime: lime,
  green: green,
  aqua: aqua,
  teal: teal,
  blue: blue,
  navy: navy,
  fuchsia: fuchsia,
  purple: purple
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/basicColors/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/basicColors/index.js ***!
  \***************************************************************************/
/*! exports provided: basicColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicColors */ "./node_modules/grommet-controls/es6/components/basicColors/basicColors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basicColors", function() { return _basicColors__WEBPACK_IMPORTED_MODULE_0__["basicColors"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/index.js ***!
  \***************************************************************/
/*! exports provided: Avatar, Card, CheckBoxField, ColorInput, ColorInputField, Colors, DateInput, DateInputField, DropInput, EmailInput, EmailInputField, Form, Header, IconButton, ImageStamp, MaskedInput, MaskedInputField, Notification, NumberInput, NumberInputField, PagingTable, PasswordInput, PasswordInputField, SelectField, Sidebar, Spinning, Tag, Tags, TextAreaField, TextInputField, Value, VerticalMenu, basicColors, materialColors, uiColors, validators, withChartTheme, withFormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./node_modules/grommet-controls/es6/components/Avatar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"]; });

/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./node_modules/grommet-controls/es6/components/Card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_1__["Card"]; });

/* harmony import */ var _CheckBoxField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckBoxField */ "./node_modules/grommet-controls/es6/components/CheckBoxField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxField", function() { return _CheckBoxField__WEBPACK_IMPORTED_MODULE_2__["CheckBoxField"]; });

/* harmony import */ var _ColorInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorInput */ "./node_modules/grommet-controls/es6/components/ColorInput/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorInput", function() { return _ColorInput__WEBPACK_IMPORTED_MODULE_3__["ColorInput"]; });

/* harmony import */ var _ColorInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorInputField */ "./node_modules/grommet-controls/es6/components/ColorInputField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorInputField", function() { return _ColorInputField__WEBPACK_IMPORTED_MODULE_4__["ColorInputField"]; });

/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Colors */ "./node_modules/grommet-controls/es6/components/Colors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _Colors__WEBPACK_IMPORTED_MODULE_5__["Colors"]; });

/* harmony import */ var _DateInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateInput */ "./node_modules/grommet-controls/es6/components/DateInput/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return _DateInput__WEBPACK_IMPORTED_MODULE_6__["DateInput"]; });

/* harmony import */ var _DateInputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateInputField */ "./node_modules/grommet-controls/es6/components/DateInputField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInputField", function() { return _DateInputField__WEBPACK_IMPORTED_MODULE_7__["DateInputField"]; });

/* harmony import */ var _DropInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropInput */ "./node_modules/grommet-controls/es6/components/DropInput/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropInput", function() { return _DropInput__WEBPACK_IMPORTED_MODULE_8__["DropInput"]; });

/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EmailInput */ "./node_modules/grommet-controls/es6/components/EmailInput/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return _EmailInput__WEBPACK_IMPORTED_MODULE_9__["EmailInput"]; });

/* harmony import */ var _EmailInputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmailInputField */ "./node_modules/grommet-controls/es6/components/EmailInputField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailInputField", function() { return _EmailInputField__WEBPACK_IMPORTED_MODULE_10__["EmailInputField"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Form */ "./node_modules/grommet-controls/es6/components/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_11__["Form"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header */ "./node_modules/grommet-controls/es6/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_12__["Header"]; });

/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./IconButton */ "./node_modules/grommet-controls/es6/components/IconButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _IconButton__WEBPACK_IMPORTED_MODULE_13__["IconButton"]; });

/* harmony import */ var _ImageStamp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ImageStamp */ "./node_modules/grommet-controls/es6/components/ImageStamp/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageStamp", function() { return _ImageStamp__WEBPACK_IMPORTED_MODULE_14__["ImageStamp"]; });

/* harmony import */ var _MaskedInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MaskedInput */ "./node_modules/grommet-controls/es6/components/MaskedInput/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedInput", function() { return _MaskedInput__WEBPACK_IMPORTED_MODULE_15__["MaskedInput"]; });

/* harmony import */ var _MaskedInputField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MaskedInputField */ "./node_modules/grommet-controls/es6/components/MaskedInputField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedInputField", function() { return _MaskedInputField__WEBPACK_IMPORTED_MODULE_16__["MaskedInputField"]; });

/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Notification */ "./node_modules/grommet-controls/es6/components/Notification/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_17__["Notification"]; });

/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NumberInput */ "./node_modules/grommet-controls/es6/components/NumberInput/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return _NumberInput__WEBPACK_IMPORTED_MODULE_18__["NumberInput"]; });

/* harmony import */ var _NumberInputField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NumberInputField */ "./node_modules/grommet-controls/es6/components/NumberInputField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInputField", function() { return _NumberInputField__WEBPACK_IMPORTED_MODULE_19__["NumberInputField"]; });

/* harmony import */ var _PagingTable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PagingTable */ "./node_modules/grommet-controls/es6/components/PagingTable/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagingTable", function() { return _PagingTable__WEBPACK_IMPORTED_MODULE_20__["PagingTable"]; });

/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PasswordInput */ "./node_modules/grommet-controls/es6/components/PasswordInput/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return _PasswordInput__WEBPACK_IMPORTED_MODULE_21__["PasswordInput"]; });

/* harmony import */ var _PasswordInputField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PasswordInputField */ "./node_modules/grommet-controls/es6/components/PasswordInputField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputField", function() { return _PasswordInputField__WEBPACK_IMPORTED_MODULE_22__["PasswordInputField"]; });

/* harmony import */ var _SelectField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SelectField */ "./node_modules/grommet-controls/es6/components/SelectField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectField", function() { return _SelectField__WEBPACK_IMPORTED_MODULE_23__["SelectField"]; });

/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Sidebar */ "./node_modules/grommet-controls/es6/components/Sidebar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_24__["Sidebar"]; });

/* harmony import */ var _Spinning__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Spinning */ "./node_modules/grommet-controls/es6/components/Spinning/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinning", function() { return _Spinning__WEBPACK_IMPORTED_MODULE_25__["Spinning"]; });

/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Tag */ "./node_modules/grommet-controls/es6/components/Tag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _Tag__WEBPACK_IMPORTED_MODULE_26__["Tag"]; });

/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Tags */ "./node_modules/grommet-controls/es6/components/Tags/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return _Tags__WEBPACK_IMPORTED_MODULE_27__["Tags"]; });

/* harmony import */ var _TextAreaField__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./TextAreaField */ "./node_modules/grommet-controls/es6/components/TextAreaField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return _TextAreaField__WEBPACK_IMPORTED_MODULE_28__["TextAreaField"]; });

/* harmony import */ var _TextInputField__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./TextInputField */ "./node_modules/grommet-controls/es6/components/TextInputField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInputField", function() { return _TextInputField__WEBPACK_IMPORTED_MODULE_29__["TextInputField"]; });

/* harmony import */ var _Value__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Value */ "./node_modules/grommet-controls/es6/components/Value/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _Value__WEBPACK_IMPORTED_MODULE_30__["Value"]; });

/* harmony import */ var _VerticalMenu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./VerticalMenu */ "./node_modules/grommet-controls/es6/components/VerticalMenu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalMenu", function() { return _VerticalMenu__WEBPACK_IMPORTED_MODULE_31__["VerticalMenu"]; });

/* harmony import */ var _basicColors__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./basicColors */ "./node_modules/grommet-controls/es6/components/basicColors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basicColors", function() { return _basicColors__WEBPACK_IMPORTED_MODULE_32__["basicColors"]; });

/* harmony import */ var _materialColors__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./materialColors */ "./node_modules/grommet-controls/es6/components/materialColors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialColors", function() { return _materialColors__WEBPACK_IMPORTED_MODULE_33__["materialColors"]; });

/* harmony import */ var _uiColors__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./uiColors */ "./node_modules/grommet-controls/es6/components/uiColors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uiColors", function() { return _uiColors__WEBPACK_IMPORTED_MODULE_34__["uiColors"]; });

/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./validators */ "./node_modules/grommet-controls/es6/components/validators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return _validators__WEBPACK_IMPORTED_MODULE_35__["validators"]; });

/* harmony import */ var _chartjs_withChartTheme__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../chartjs/withChartTheme */ "./node_modules/grommet-controls/es6/chartjs/withChartTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withChartTheme", function() { return _chartjs_withChartTheme__WEBPACK_IMPORTED_MODULE_36__["withChartTheme"]; });

/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFormField", function() { return _withFormField__WEBPACK_IMPORTED_MODULE_37__["withFormField"]; });








































/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/materialColors/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/materialColors/index.js ***!
  \******************************************************************************/
/*! exports provided: materialColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _materialColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materialColors */ "./node_modules/grommet-controls/es6/components/materialColors/materialColors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialColors", function() { return _materialColors__WEBPACK_IMPORTED_MODULE_0__["materialColors"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/materialColors/materialColors.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/materialColors/materialColors.js ***!
  \***************************************************************************************/
/*! exports provided: red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, darkText, lightText, darkIcons, lightIcons, white, black, materialColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return deepPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return lightGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return deepOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return blueGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkText", function() { return darkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightText", function() { return lightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkIcons", function() { return darkIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightIcons", function() { return lightIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialColors", function() { return materialColors; });
var red = {
  '50': '#ffebee', '100': '#ffcdd2', '200': '#ef9a9a', '300': '#e57373', '400': '#ef5350', '500': '#f44336', '600': '#e53935', '700': '#d32f2f', '800': '#c62828', '900': '#b71c1c', 'a100': '#ff8a80', 'a200': '#ff5252', 'a400': '#ff1744', 'a700': '#d50000'
};
var pink = {
  '50': '#fce4ec', '100': '#f8bbd0', '200': '#f48fb1', '300': '#f06292', '400': '#ec407a', '500': '#e91e63', '600': '#d81b60', '700': '#c2185b', '800': '#ad1457', '900': '#880e4f', 'a100': '#ff80ab', 'a200': '#ff4081', 'a400': '#f50057', 'a700': '#c51162'
};
var purple = {
  '50': '#f3e5f5', '100': '#e1bee7', '200': '#ce93d8', '300': '#ba68c8', '400': '#ab47bc', '500': '#9c27b0', '600': '#8e24aa', '700': '#7b1fa2', '800': '#6a1b9a', '900': '#4a148c', 'a100': '#ea80fc', 'a200': '#e040fb', 'a400': '#d500f9', 'a700': '#aa00ff'
};
var deepPurple = {
  '50': '#ede7f6', '100': '#d1c4e9', '200': '#b39ddb', '300': '#9575cd', '400': '#7e57c2', '500': '#673ab7', '600': '#5e35b1', '700': '#512da8', '800': '#4527a0', '900': '#311b92', 'a100': '#b388ff', 'a200': '#7c4dff', 'a400': '#651fff', 'a700': '#6200ea'
};
var indigo = {
  '50': '#e8eaf6', '100': '#c5cae9', '200': '#9fa8da', '300': '#7986cb', '400': '#5c6bc0', '500': '#3f51b5', '600': '#3949ab', '700': '#303f9f', '800': '#283593', '900': '#1a237e', 'a100': '#8c9eff', 'a200': '#536dfe', 'a400': '#3d5afe', 'a700': '#304ffe'
};
var blue = {
  '50': '#e3f2fd', '100': '#bbdefb', '200': '#90caf9', '300': '#64b5f6', '400': '#42a5f5', '500': '#2196f3', '600': '#1e88e5', '700': '#1976d2', '800': '#1565c0', '900': '#0d47a1', 'a100': '#82b1ff', 'a200': '#448aff', 'a400': '#2979ff', 'a700': '#2962ff'
};
var lightBlue = {
  '50': '#e1f5fe', '100': '#b3e5fc', '200': '#81d4fa', '300': '#4fc3f7', '400': '#29b6f6', '500': '#03a9f4', '600': '#039be5', '700': '#0288d1', '800': '#0277bd', '900': '#01579b', 'a100': '#80d8ff', 'a200': '#40c4ff', 'a400': '#00b0ff', 'a700': '#0091ea'
};
var cyan = {
  '50': '#e0f7fa', '100': '#b2ebf2', '200': '#80deea', '300': '#4dd0e1', '400': '#26c6da', '500': '#00bcd4', '600': '#00acc1', '700': '#0097a7', '800': '#00838f', '900': '#006064', 'a100': '#84ffff', 'a200': '#18ffff', 'a400': '#00e5ff', 'a700': '#00b8d4'
};
var teal = {
  '50': '#e0f2f1', '100': '#b2dfdb', '200': '#80cbc4', '300': '#4db6ac', '400': '#26a69a', '500': '#009688', '600': '#00897b', '700': '#00796b', '800': '#00695c', '900': '#004d40', 'a100': '#a7ffeb', 'a200': '#64ffda', 'a400': '#1de9b6', 'a700': '#00bfa5'
};
var green = {
  '50': '#e8f5e9', '100': '#c8e6c9', '200': '#a5d6a7', '300': '#81c784', '400': '#66bb6a', '500': '#4caf50', '600': '#43a047', '700': '#388e3c', '800': '#2e7d32', '900': '#1b5e20', 'a100': '#b9f6ca', 'a200': '#69f0ae', 'a400': '#00e676', 'a700': '#00c853'
};
var lightGreen = {
  '50': '#f1f8e9', '100': '#dcedc8', '200': '#c5e1a5', '300': '#aed581', '400': '#9ccc65', '500': '#8bc34a', '600': '#7cb342', '700': '#689f38', '800': '#558b2f', '900': '#33691e', 'a100': '#ccff90', 'a200': '#b2ff59', 'a400': '#76ff03', 'a700': '#64dd17'
};
var lime = {
  '50': '#f9fbe7', '100': '#f0f4c3', '200': '#e6ee9c', '300': '#dce775', '400': '#d4e157', '500': '#cddc39', '600': '#c0ca33', '700': '#afb42b', '800': '#9e9d24', '900': '#827717', 'a100': '#f4ff81', 'a200': '#eeff41', 'a400': '#c6ff00', 'a700': '#aeea00'
};
var yellow = {
  '50': '#fffde7', '100': '#fff9c4', '200': '#fff59d', '300': '#fff176', '400': '#ffee58', '500': '#ffeb3b', '600': '#fdd835', '700': '#fbc02d', '800': '#f9a825', '900': '#f57f17', 'a100': '#ffff8d', 'a200': '#ffff00', 'a400': '#ffea00', 'a700': '#ffd600'
};
var amber = {
  '50': '#fff8e1', '100': '#ffecb3', '200': '#ffe082', '300': '#ffd54f', '400': '#ffca28', '500': '#ffc107', '600': '#ffb300', '700': '#ffa000', '800': '#ff8f00', '900': '#ff6f00', 'a100': '#ffe57f', 'a200': '#ffd740', 'a400': '#ffc400', 'a700': '#ffab00'
};
var orange = {
  '50': '#fff3e0', '100': '#ffe0b2', '200': '#ffcc80', '300': '#ffb74d', '400': '#ffa726', '500': '#ff9800', '600': '#fb8c00', '700': '#f57c00', '800': '#ef6c00', '900': '#e65100', 'a100': '#ffd180', 'a200': '#ffab40', 'a400': '#ff9100', 'a700': '#ff6d00'
};
var deepOrange = {
  '50': '#fbe9e7', '100': '#ffccbc', '200': '#ffab91', '300': '#ff8a65', '400': '#ff7043', '500': '#ff5722', '600': '#f4511e', '700': '#e64a19', '800': '#d84315', '900': '#bf360c', 'a100': '#ff9e80', 'a200': '#ff6e40', 'a400': '#ff3d00', 'a700': '#dd2c00'
};
var brown = {
  '50': '#efebe9', '100': '#d7ccc8', '200': '#bcaaa4', '300': '#a1887f', '400': '#8d6e63', '500': '#795548', '600': '#6d4c41', '700': '#5d4037', '800': '#4e342e', '900': '#3e2723'
};
var grey = {
  '50': '#fafafa', '100': '#f5f5f5', '200': '#eeeeee', '300': '#e0e0e0', '400': '#bdbdbd', '500': '#9e9e9e', '600': '#757575', '700': '#616161', '800': '#424242', '900': '#212121'
};
var blueGrey = {
  '50': '#eceff1', '100': '#cfd8dc', '200': '#b0bec5', '300': '#90a4ae', '400': '#78909c', '500': '#607d8b', '600': '#546e7a', '700': '#455a64', '800': '#37474f', '900': '#263238'
};
var darkText = {
  'primary': 'rgba(0, 0, 0, 0.87)', 'secondary': 'rgba(0, 0, 0, 0.54)', 'disabled': 'rgba(0, 0, 0, 0.38)', 'dividers': 'rgba(0, 0, 0, 0.12)'
};
var lightText = {
  'primary': 'rgba(255, 255, 255, 1)', 'secondary': 'rgba(255, 255, 255, 0.7)', 'disabled': 'rgba(255, 255, 255, 0.5)', 'dividers': 'rgba(255, 255, 255, 0.12)'
};
var darkIcons = { 'active': 'rgba(0, 0, 0, 0.54)', 'inactive': 'rgba(0, 0, 0, 0.38)' };
var lightIcons = { 'active': 'rgba(255, 255, 255, 1)', 'inactive': 'rgba(255, 255, 255, 0.5)' };
var white = '#ffffff';
var black = '#000000';

var materialColors = {
  amber: amber,
  blue: blue,
  blueGrey: blueGrey,
  brown: brown,
  cyan: cyan,
  deepOrange: deepOrange,
  deepPurple: deepPurple,
  green: green,
  grey: grey,
  indigo: indigo,
  lightBlue: lightBlue,
  lightGreen: lightGreen,
  lime: lime,
  orange: orange,
  pink: pink,
  purple: purple,
  teal: teal,
  yellow: yellow
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/uiColors/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/uiColors/index.js ***!
  \************************************************************************/
/*! exports provided: uiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uiColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiColors */ "./node_modules/grommet-controls/es6/components/uiColors/uiColors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uiColors", function() { return _uiColors__WEBPACK_IMPORTED_MODULE_0__["uiColors"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/uiColors/uiColors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/uiColors/uiColors.js ***!
  \***************************************************************************/
/*! exports provided: aqua, azure, beige, black, blue, brown, cyan, darkblue, darkcyan, darkgrey, darkgreen, darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkviolet, fuchsia, gold, green, indigo, khaki, lightblue, lightcyan, lightgreen, lightgrey, lightpink, lightyellow, lime, magenta, maroon, navy, olive, orange, pink, purple, violet, red, silver, white, yellow, uiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aqua", function() { return aqua; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azure", function() { return azure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beige", function() { return beige; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkblue", function() { return darkblue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkcyan", function() { return darkcyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkgrey", function() { return darkgrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkgreen", function() { return darkgreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkkhaki", function() { return darkkhaki; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkmagenta", function() { return darkmagenta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkolivegreen", function() { return darkolivegreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkorange", function() { return darkorange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkorchid", function() { return darkorchid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkred", function() { return darkred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darksalmon", function() { return darksalmon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkviolet", function() { return darkviolet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fuchsia", function() { return fuchsia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gold", function() { return gold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "khaki", function() { return khaki; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightblue", function() { return lightblue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightcyan", function() { return lightcyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightgreen", function() { return lightgreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightgrey", function() { return lightgrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightpink", function() { return lightpink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightyellow", function() { return lightyellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta", function() { return magenta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maroon", function() { return maroon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navy", function() { return navy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "olive", function() { return olive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "violet", function() { return violet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silver", function() { return silver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiColors", function() { return uiColors; });
var aqua = '#00ffff';
var azure = '#f0ffff';
var beige = '#f5f5dc';
var black = '#000000';
var blue = '#0000ff';
var brown = '#a52a2a';
var cyan = '#00ffff';
var darkblue = '#00008b';
var darkcyan = '#008b8b';
var darkgrey = '#a9a9a9';
var darkgreen = '#006400';
var darkkhaki = '#bdb76b';
var darkmagenta = '#8b008b';
var darkolivegreen = '#556b2f';
var darkorange = '#ff8c00';
var darkorchid = '#9932cc';
var darkred = '#8b0000';
var darksalmon = '#e9967a';
var darkviolet = '#9400d3';
var fuchsia = '#ff00ff';
var gold = '#ffd700';
var green = '#008000';
var indigo = '#4b0082';
var khaki = '#f0e68c';
var lightblue = '#add8e6';
var lightcyan = '#e0ffff';
var lightgreen = '#90ee90';
var lightgrey = '#d3d3d3';
var lightpink = '#ffb6c1';
var lightyellow = '#ffffe0';
var lime = '#00ff00';
var magenta = '#ff00ff';
var maroon = '#800000';
var navy = '#000080';
var olive = '#808000';
var orange = '#ffa500';
var pink = '#ffc0cb';
var purple = '#800080';
var violet = '#800080';
var red = '#ff0000';
var silver = '#c0c0c0';
var white = '#ffffff';
var yellow = '#ffff00';

var uiColors = {
  aqua: aqua,
  azure: azure,
  beige: beige,
  black: black,
  blue: blue,
  brown: brown,
  cyan: cyan,
  darkblue: darkblue,
  darkcyan: darkcyan,
  darkgrey: darkgrey,
  darkgreen: darkgreen,
  darkkhaki: darkkhaki,
  darkmagenta: darkmagenta,
  darkolivegreen: darkolivegreen,
  darkorange: darkorange,
  darkorchid: darkorchid,
  darkred: darkred,
  darksalmon: darksalmon,
  darkviolet: darkviolet,
  fuchsia: fuchsia,
  gold: gold,
  green: green,
  indigo: indigo,
  khaki: khaki,
  lightblue: lightblue,
  lightcyan: lightcyan,
  lightgreen: lightgreen,
  lightgrey: lightgrey,
  lightpink: lightpink,
  lightyellow: lightyellow,
  lime: lime,
  magenta: magenta,
  maroon: maroon,
  navy: navy,
  olive: olive,
  orange: orange,
  pink: pink,
  purple: purple,
  violet: violet,
  red: red,
  silver: silver,
  white: white,
  yellow: yellow
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/validators/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/validators/index.js ***!
  \**************************************************************************/
/*! exports provided: validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators */ "./node_modules/grommet-controls/es6/components/validators/validators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return _validators__WEBPACK_IMPORTED_MODULE_0__["validators"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/validators/validators.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/validators/validators.js ***!
  \*******************************************************************************/
/*! exports provided: validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return validators; });
// original validators https://github.com/christianalfoni/formsy-react/blob/master/src/validationRules.js

var isExisty = function isExisty(value) {
  return value !== null && value !== undefined;
};

var isEmpty = function isEmpty(value) {
  return value === '';
};

var isDefaultRequiredValue = function isDefaultRequiredValue(values, value) {
  return value === undefined || value === '';
};

var _required = function _required(values, value) {
  return isExisty(value) && !isEmpty(value);
};

var matchRegexp = function matchRegexp(values, value, regexp) {
  return !isExisty(value) || isEmpty(value) || regexp.test(value);
};

var _notEmptyString = function _notEmptyString(values, value) {
  return !isEmpty(value);
};

var isEmail = function isEmail(values, value) {
  return matchRegexp(values, value, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
};

var isUrl = function isUrl(values, value) {
  return matchRegexp(values, value, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|\/|\?)*)?$/i);
};

var isTrue = function isTrue(values, value) {
  return value === true;
};

var isFalse = function isFalse(values, value) {
  return value === false;
};

var isNumeric = function isNumeric(values, value) {
  return typeof value === 'number' ? true : matchRegexp(values, value, /^[-+]?(?:\d*[.])?\d+$/);
};

var isAlpha = function isAlpha(values, value) {
  return matchRegexp(values, value, /^[A-Z]+$/i);
};

var isAlphanumeric = function isAlphanumeric(values, value) {
  return matchRegexp(values, value, /^[0-9A-Z]+$/i);
};

var isInt = function isInt(values, value) {
  return matchRegexp(values, value, /^(?:[-+]?(?:0|[1-9]\d*))$/);
};

var isFloat = function isFloat(values, value) {
  return matchRegexp(values, value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE]?(?:\d+))?$/);
};

var isWords = function isWords(values, value) {
  return matchRegexp(values, value, /^[A-Z\s]+$/i);
};

var _startsWith = function _startsWith(str) {
  return function (values, value) {
    return !isEmpty(value) && value.startsWith(str);
  };
};

var isLength = function isLength(length) {
  return function (values, value) {
    return !isExisty(value) || isEmpty(value) || value.length === length;
  };
};

var _equals = function _equals(eql) {
  return function (values, value) {
    return !isExisty(value) || isEmpty(value) || value === eql;
  };
};
var _equalsField = function _equalsField(field) {
  return function (values, value) {
    return value === values[field];
  };
};
var _maxLength = function _maxLength(length) {
  return function (values, value) {
    return !isExisty(value) || value.length <= length;
  };
};
var _minLength = function _minLength(length) {
  return function (values, value) {
    return !isExisty(value) || isEmpty(value) || value.length >= length;
  };
};

var isBigger = function isBigger(number) {
  return function (values, value) {
    return !isExisty(value) || value > number;
  };
};

var isSmaller = function isSmaller(number) {
  return function (values, value) {
    return !isExisty(value) || value < number;
  };
};

var isBiggerOrEqual = function isBiggerOrEqual(number) {
  return function (values, value) {
    return !isExisty(value) || value >= number;
  };
};

var isSmallerOrEqual = function isSmallerOrEqual(number) {
  return function (values, value) {
    return !isExisty(value) || value <= number;
  };
};

var invalidFieldMessage = function invalidFieldMessage(label) {
  return label + ' is not valid';
};
var requiredFieldMessage = function requiredFieldMessage(label) {
  return label + ' is required';
};
var canNotBeEmptyFieldMessage = function canNotBeEmptyFieldMessage(label) {
  return label + ' can not be empty';
};

var ruleWrapper = function ruleWrapper(rule, customMessage, defaultMessage) {
  return function (values, value) {
    if (rule(values, value)) {
      return undefined;
    }
    return customMessage || defaultMessage;
  };
};

var validators = {
  email: function email(message) {
    return ruleWrapper(isEmail, message, invalidFieldMessage);
  },
  url: function url(message) {
    return ruleWrapper(isUrl, message, invalidFieldMessage);
  },
  required: function required(message) {
    return ruleWrapper(_required, message, requiredFieldMessage);
  },
  defaultRequired: function defaultRequired(message) {
    return ruleWrapper(isDefaultRequiredValue, message, requiredFieldMessage);
  },
  notEmptyString: function notEmptyString(message) {
    return ruleWrapper(_notEmptyString, message, canNotBeEmptyFieldMessage);
  },
  numeric: function numeric(message) {
    return ruleWrapper(isNumeric, message, function (label) {
      return label + ' must be a numeric value';
    });
  },
  alpha: function alpha(message) {
    return ruleWrapper(isAlpha, message, function (label) {
      return label + ' must be alphabetic';
    });
  },
  alphaNumeric: function alphaNumeric(message) {
    return ruleWrapper(isAlphanumeric, message, function (label) {
      return label + ' must be alphanumeric';
    });
  },
  int: function int(message) {
    return ruleWrapper(isInt, message, function (label) {
      return label + ' must be an integer';
    });
  },
  float: function float(message) {
    return ruleWrapper(isFloat, message, function (label) {
      return label + ' must be a number';
    });
  },
  words: function words(message) {
    return ruleWrapper(isWords, message, function (label) {
      return label + ' must be a collection of words';
    });
  },
  length: function length(_length, message) {
    return ruleWrapper(isLength(_length), message, function (label) {
      return label + ' must be ' + _length + ' characters long';
    });
  },
  minLength: function minLength(length, message) {
    return ruleWrapper(_minLength(length), message, function (label) {
      return label + ' must be at least ' + length + ' characters long';
    });
  },
  maxLength: function maxLength(length, message) {
    return ruleWrapper(_maxLength(length), message, function (label) {
      return label + ' must be up to ' + length + ' characters long';
    });
  },
  equals: function equals(value, message) {
    return ruleWrapper(_equals(value), message, function (label) {
      return label + ' must be equal to ' + value;
    });
  },
  equalsField: function equalsField(field, fieldLabel, message) {
    return ruleWrapper(_equalsField(field), message, function (label) {
      return label + ' does not match ' + (fieldLabel || field);
    });
  },
  True: function True(message) {
    return ruleWrapper(isTrue, message, function (label) {
      return label + ' must be True';
    });
  },
  False: function False(message) {
    return ruleWrapper(isFalse, message, function (label) {
      return label + ' must be False';
    });
  },
  bigger: function bigger(value, message) {
    return ruleWrapper(isBigger(value), message, function (label) {
      return label + ' must be bigger than ' + value;
    });
  },
  biggerOrEqual: function biggerOrEqual(value, message) {
    return ruleWrapper(isBiggerOrEqual(value), message, function (label) {
      return label + ' must be bigger or eqial to ' + value;
    });
  },
  smaller: function smaller(value, message) {
    return ruleWrapper(isSmaller(value), message, function (label) {
      return label + ' must be smaller than ' + value;
    });
  },
  smallerOrEqual: function smallerOrEqual(value, message) {
    return ruleWrapper(isSmallerOrEqual(value), message, function (label) {
      return label + ' must be smaller or equal to ' + value;
    });
  },
  startsWith: function startsWith(value, message) {
    return ruleWrapper(_startsWith(value), message, function (label) {
      return label + ' must start with ' + value;
    });
  }
};


/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/withFormField/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/withFormField/index.js ***!
  \*****************************************************************************/
/*! exports provided: withFormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withFormField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withFormField */ "./node_modules/grommet-controls/es6/components/withFormField/withFormField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFormField", function() { return _withFormField__WEBPACK_IMPORTED_MODULE_0__["withFormField"]; });



/***/ }),

/***/ "./node_modules/grommet-controls/es6/components/withFormField/withFormField.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/components/withFormField/withFormField.js ***!
  \*************************************************************************************/
/*! exports provided: withFormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFormField", function() { return withFormField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var withFormField = function withFormField(WrappedField) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(GrommetField, _React$Component);

    function GrommetField() {
      var _temp, _this, _ret;

      _classCallCheck(this, GrommetField);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onChange = function (e) {
        var value = e.value,
            target = e.target;

        var targetValue = target ? target.value : undefined;
        var name = _this.props.name;
        var onFieldChange = _this.context.form.onFieldChange;

        onFieldChange(name, value || targetValue, e);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    GrommetField.prototype.componentDidMount = function componentDidMount() {
      var _props = this.props,
          validation = _props.validation,
          label = _props.label,
          description = _props.description,
          name = _props.name;

      this.context.form.attachToForm(name, { label: label, description: description, validation: validation });
    };

    GrommetField.prototype.componentWillUnmount = function componentWillUnmount() {
      var name = this.props.name;

      this.context.form.detachFromForm(name);
    };

    GrommetField.prototype.getValue = function getValue() {
      var name = this.props.name;

      var value = this.context.form.getFieldValue(name);
      return value === undefined ? '' : value;
    };

    GrommetField.prototype.render = function render() {
      var _props2 = this.props,
          name = _props2.name,
          validation = _props2.validation,
          inField = _props2.inField,
          label = _props2.label,
          controlLabel = _props2.controlLabel,
          other = _objectWithoutProperties(_props2, ['name', 'validation', 'inField', 'label', 'controlLabel']);

      var errors = this.context.form.getFieldErrors(name);
      var error = Array.isArray(errors) ? errors[0] : errors;
      if (typeof error === 'function') {
        error = error(label || name);
      }
      var field = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedField, _extends({
        plain: true,
        id: name,
        name: name,
        label: inField ? controlLabel : label,
        value: this.getValue(),
        onChange: this.onChange
      }, other));
      if (!inField) {
        return field;
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"],
        { htmlFor: name, label: label || controlLabel === true && name, error: error },
        field
      );
    };

    return GrommetField;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _class.defaultProps = {
    validation: undefined,
    inField: true,
    controlLabel: undefined
  }, _class.propTypes = {
    validation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }, _class.contextTypes = {
    form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }, _temp2;
};


/***/ }),

/***/ "./node_modules/grommet-controls/es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/grommet-controls/es6/index.js ***!
  \****************************************************/
/*! exports provided: Avatar, Card, CheckBoxField, ColorInput, ColorInputField, Colors, DateInput, DateInputField, DropInput, EmailInput, EmailInputField, Form, Header, IconButton, ImageStamp, MaskedInput, MaskedInputField, Notification, NumberInput, NumberInputField, PagingTable, PasswordInput, PasswordInputField, SelectField, Sidebar, Spinning, Tag, Tags, TextAreaField, TextInputField, Value, VerticalMenu, basicColors, materialColors, uiColors, validators, withChartTheme, withFormField, base, black, light, materiallight, materialdark, metro, colorsFromArray, colorsFromObject, colorFromIndex, colorForName, smallDate, shortDate, longDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/grommet-controls/es6/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Avatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["CheckBoxField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorInput", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ColorInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorInputField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ColorInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Colors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DateInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInputField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DateInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropInput", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DropInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["EmailInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailInputField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["EmailInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["IconButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageStamp", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ImageStamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedInput", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["MaskedInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedInputField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["MaskedInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["NumberInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInputField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["NumberInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagingTable", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PagingTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PasswordInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInputField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PasswordInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SelectField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Sidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinning", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Spinning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Tag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Tags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["TextAreaField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInputField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["TextInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["Value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["VerticalMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basicColors", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["basicColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialColors", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["materialColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uiColors", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["uiColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["validators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withChartTheme", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["withChartTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFormField", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["withFormField"]; });

/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes */ "./node_modules/grommet-controls/es6/themes/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["base"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "black", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["black"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "light", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["light"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materiallight", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["materiallight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialdark", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["materialdark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metro", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["metro"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorsFromArray", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["colorsFromArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorsFromObject", function() { return _themes__WEBPACK_IMPORTED_MODULE_1__["colorsFromObject"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/grommet-controls/es6/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorFromIndex", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["colorFromIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorForName", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["colorForName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smallDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["smallDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shortDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["shortDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "longDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["longDate"]; });





/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/base.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/base.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  box: {
    responsiveBreakpoint: 'small' // when we switch rows to columns
  },
  heading: {
    responsiveBreakpoint: 'small'
  },
  layer: {
    responsiveBreakpoint: 'small'
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/black.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/black.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/grommet-controls/es6/themes/base.js");
/* harmony import */ var _colorsFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorsFromArray */ "./node_modules/grommet-controls/es6/themes/colorsFromArray.js");




var brandColor = '#000000';
var accentColors = ['#FF4081', '#4eadeb', '#56cf98', '#765bba'];
var neutralColors = ['#a4c400', '#006766', '#f3741c', '#8F6C53', '#e82121'];
var backgroundColor = '#5e5e5e';

var colors = {
  'active': {
    light: '#3a82b1',
    dark: '#52b7f9'
  },
  'background': '#444444',
  'brand': brandColor,
  'focus': accentColors[0],
  'control': {
    'dark': '#f8f8f8',
    'light': '#444444'
  }
};
Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, accentColors, 'accent');
Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, neutralColors, 'neutral');

/* harmony default export */ __webpack_exports__["default"] = (Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepFreeze"])(Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepMerge"])(_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
  global: {
    colors: colors,
    drop: {
      background: '#444444'
    },
    font: {
      family: "'Inconsolata', monospace",
      size: '16px'
    },
    hover: {
      background: {
        light: '#dddddd',
        dark: '#222222'
      },
      color: {
        light: '#333333',
        dark: '#ffffff'
      }
    },
    control: {
      border: {
        radius: '0px'
      }
    }
  },
  icon: {
    colors: colors
  },
  anchor: {
    color: {
      light: '#0a466e',
      dark: '#4eadeb'
    }
  },
  button: {
    border: {
      radius: '0px'
    },
    primary: {
      color: {
        light: '#0a466e',
        dark: '#4eadeb'
      }
    }
  },
  checkBox: {
    check: {
      radius: '0px'
    },
    toggle: {
      radius: '0px'
    }
  },
  layer: {
    background: backgroundColor
  },
  rangeInput: {
    track: {
      color: {
        'dark': '#3a82b1',
        'light': '#52b7f9'
      }
    }
  }
})));

/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/colorsFromArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/colorsFromArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-param-reassign */

/* harmony default export */ __webpack_exports__["default"] = (function (colors, array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/colorsFromObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/colorsFromObject.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-param-reassign */

/* harmony default export */ __webpack_exports__["default"] = (function (colors, obj, prefix) {
  return Object.keys(obj).forEach(function (color) {
    colors[prefix + "-" + color] = obj[color];
  });
});

/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/index.js ***!
  \***********************************************************/
/*! exports provided: base, black, light, materiallight, materialdark, metro, colorsFromArray, colorsFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/grommet-controls/es6/themes/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _black__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./black */ "./node_modules/grommet-controls/es6/themes/black.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "black", function() { return _black__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./light */ "./node_modules/grommet-controls/es6/themes/light.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "light", function() { return _light__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _materiallight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materiallight */ "./node_modules/grommet-controls/es6/themes/materiallight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materiallight", function() { return _materiallight__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _materialdark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materialdark */ "./node_modules/grommet-controls/es6/themes/materialdark.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialdark", function() { return _materialdark__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _metro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metro */ "./node_modules/grommet-controls/es6/themes/metro.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metro", function() { return _metro__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _colorsFromArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colorsFromArray */ "./node_modules/grommet-controls/es6/themes/colorsFromArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorsFromArray", function() { return _colorsFromArray__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _colorsFromObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colorsFromObject */ "./node_modules/grommet-controls/es6/themes/colorsFromObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorsFromObject", function() { return _colorsFromObject__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/light.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/light.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/grommet-controls/es6/themes/base.js");



var colors = {
  'background': '#ffffff',
  'brand': '#ffffff',
  'active': {
    light: '#57b457',
    dark: '#52b7f9'
  },
  'control': {
    dark: '#52b7f9',
    light: '#4a984a'
  },
  'focus': '#5ec660',
  'accent-1': '#367bd5',
  'accent-2': '#5ec660',
  'accent-3': '#d4293d',
  'accent-4': '#9C27B0',
  'neutral-1': '#795548',
  'neutral-2': '#CDDC39',
  'neutral-3': '#607D8B',
  'neutral-4': '#9cb6d7',
  'neutral-5': '#FF9800'
};

var baseSpacing = 16;

/* harmony default export */ __webpack_exports__["default"] = (Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepFreeze"])(Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepMerge"])(_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
  global: {
    breakpoints: {
      small: {
        size: {
          none: '0',
          hair: '1px', // for Chart
          xxsmall: '2px',
          xsmall: baseSpacing / 8 + 'px', // 3
          small: baseSpacing / 4 + 'px', // 6
          medium: baseSpacing / 2 + 'px', // 12
          large: baseSpacing + 'px', // 24
          xlarge: baseSpacing * 2 + 'px' // 48
        }
      }
    },
    colors: colors,
    font: {
      family: "'Montserrat', sans-serif;",
      size: '14px'
    },
    edgeSize: {
      none: '0',
      hair: '1px', // for Chart
      xxsmall: baseSpacing / 8 + 'px', // 3
      xsmall: baseSpacing / 4 + 'px', // 6
      small: baseSpacing / 2 + 'px', // 12
      medium: baseSpacing + 'px', // 24
      large: baseSpacing * 2 + 'px', // 48
      xlarge: baseSpacing * 4 + 'px' // 96
    },
    hover: {
      background: {
        light: '#c8c8c8',
        dark: '#333333'
      },
      color: {
        light: '#333333',
        dark: '#f8f8f8'
      }
    },
    selected: {
      background: '#635d60',
      color: '#f8f8f8'
    }
  },
  text: {
    xsmall: { size: '10px', height: 1.5 },
    small: { size: '12px', height: 1.43 },
    medium: { size: '14px', height: 1.375 },
    large: { size: '20px', height: 1.167 },
    xlarge: { size: '28px', height: 1.1875 },
    xxlarge: { size: '26px', height: 1.125 }
  },
  heading: {
    font: false,
    weight: 500
  },
  icon: {
    size: {
      xsmall: '14px'
    }
  },
  button: {
    border: {
      radius: '1px',
      color: {
        dark: '#fbf9ff',
        light: '#28599e'
      }
    },
    // color: { dark: undefined, light: undefined }
    primary: {
      color: {
        dark: '#0093ff',
        light: '#316cbe'
      }
    }
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
    color: {
      dark: '#f7efff',
      light: '#275596'
    }
  },
  checkBox: {
    border: {
      width: '2px'
    },
    check: {
      radius: '4px',
      thickness: '4px'
    }
  },
  rangeInput: {
    track: {
      color: {
        'dark': '#3a82b1',
        'light': '#52b7f9'
      }
    }
  }
})));

/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/materialdark.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/materialdark.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/grommet-controls/es6/themes/base.js");
/* harmony import */ var _colorsFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorsFromArray */ "./node_modules/grommet-controls/es6/themes/colorsFromArray.js");
/* harmony import */ var _colorsFromObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorsFromObject */ "./node_modules/grommet-controls/es6/themes/colorsFromObject.js");





var brandColor = '#000000';
var backgroundColor = '#444444';
var accentColors = ['#2AD2C9', '#FFC107', '#9C27B0', '#673AB7'];
var neutralColors = ['#795548', '#009688', '#8BC34A', '#CDDC39', '#FF9800'];
var statusColors = {
  critical: '#FF4081',
  error: '#F44336',
  warning: '#FFEB3B',
  ok: '#4CAF50',
  unknown: '#9E9E9E',
  disabled: '#9E9E9E'
};

var focusColor = accentColors[0];
var colors = {
  active: {
    light: '#f50057',
    dark: '#ff4081'
  },
  brand: brandColor,
  background: backgroundColor,
  focus: focusColor,
  control: {
    'dark': '#f8f8f8',
    'light': '#444444'
  }

};

Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, accentColors, 'accent');
Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, neutralColors, 'neutral');
Object(_colorsFromObject__WEBPACK_IMPORTED_MODULE_3__["default"])(colors, statusColors, 'status');

/* harmony default export */ __webpack_exports__["default"] = (Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepFreeze"])(Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepMerge"])(_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
  global: {
    colors: colors,
    drop: {
      background: '#2a2a2a'
    },
    hover: {
      background: {
        light: '#dddddd',
        dark: '#222222'
      },
      text: {
        light: '#000000',
        dark: '#f8f8f8'
      }
    },
    focus: {
      border: {
        color: '#f50057'
      }
    },
    font: {
      family: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    control: {
      border: {
        radius: '0px'
      }
    }
  },
  button: {
    border: {
      radius: '0px'
    },
    primary: {
      color: {
        light: '#f50057',
        dark: '#ff4081'
      }
    }
  },
  checkBox: {
    check: {
      radius: '0px'
    }
  },
  layer: {
    background: backgroundColor
  },
  anchor: {
    color: {
      light: '#f50057',
      dark: '#ff4081'
    }
  }
})));

/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/materiallight.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/materiallight.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/grommet-controls/es6/themes/base.js");
/* harmony import */ var _colorsFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorsFromArray */ "./node_modules/grommet-controls/es6/themes/colorsFromArray.js");
/* harmony import */ var _colorsFromObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorsFromObject */ "./node_modules/grommet-controls/es6/themes/colorsFromObject.js");





var brandColor = '#00ABD4';
var accentColors = ['#2AD2C9', '#FFC107', '#9C27B0', '#673AB7'];
var neutralColors = ['#795548', '#009688', '#8BC34A', '#CDDC39', '#FF9800'];
var statusColors = {
  critical: '#FF4081',
  error: '#F44336',
  warning: '#FFEB3B',
  ok: '#4CAF50',
  unknown: '#9E9E9E',
  disabled: '#9E9E9E'
};

var focusColor = accentColors[0];
var colors = {
  active: {
    light: '#f50057',
    dark: '#ff4081'
  },
  background: '#ffffff',
  brand: brandColor,
  focus: focusColor,
  control: {
    dark: '#ffffff',
    light: '#00ABD4'
  }
};

Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, accentColors, 'accent');
Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, neutralColors, 'neutral');
Object(_colorsFromObject__WEBPACK_IMPORTED_MODULE_3__["default"])(colors, statusColors, 'status');

/* harmony default export */ __webpack_exports__["default"] = (Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepFreeze"])(Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepMerge"])(_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
  global: {
    colors: colors,
    drop: {
      background: '#f8f8f8',
      border: {
        width: '0px',
        radius: '0px'
      }
    },
    hover: {
      background: {
        light: '#d5f3ff',
        dark: '#5a5a5a'
      },
      text: {
        light: '#000000',
        dark: '#f8f8f8'
      }
    },
    focus: {
      border: {
        color: '#f50057'
      }
    },
    font: {
      family: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    control: {
      border: {
        radius: '0px'
      }
    }
  },
  button: {
    border: {
      radius: '0px'
    },
    primary: {
      color: {
        light: '#3f51b5',
        dark: '#7986cb'
      }
    }
  },
  checkBox: {
    check: {
      radius: '0px'
    },
    color: {
      light: brandColor,
      dark: '#a7ecff'
    },
    toggle: {
      color: {
        dark: '#bdbdbd',
        light: brandColor
      }
    }
  },
  radioButton: {
    border: {
      color: {
        light: 'rgba(0, 98, 186, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
  anchor: {
    color: {
      light: '#3f51b5',
      dark: '#7986cb'
    }
  }
})));

/***/ }),

/***/ "./node_modules/grommet-controls/es6/themes/metro.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/themes/metro.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");
/* harmony import */ var grommet_utils_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/grommet-controls/es6/themes/base.js");
/* harmony import */ var _colorsFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorsFromArray */ "./node_modules/grommet-controls/es6/themes/colorsFromArray.js");




var brandColor = '#0072c6';
var accentColors = ['#fa6800', '#128023', '#0050ef', '#d80073'];
var neutralColors = ['#a4c400', '#00aba9', '#BF5A15', '#8F6C53', '#9A1616'];

var colors = {
  'background': '#ffffff',
  'brand': brandColor,
  'control': {
    'dark': '#f8f8f8',
    'light': '#444444'
  }
};

Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, accentColors, 'accent');
Object(_colorsFromArray__WEBPACK_IMPORTED_MODULE_2__["default"])(colors, neutralColors, 'neutral');

/* harmony default export */ __webpack_exports__["default"] = (Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepFreeze"])(Object(grommet_utils_object__WEBPACK_IMPORTED_MODULE_0__["deepMerge"])(_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
  global: {
    colors: colors,
    drop: {
      background: '#005696',
      border: {
        width: '0px',
        radius: '0px'
      }
    },
    hover: {
      background: {
        light: '#a5cdff',
        dark: '#405063'
      },
      color: {
        light: '#333333',
        dark: '#cccccc'
      }
    },
    focus: {
      border: {
        color: {
          light: brandColor,
          dark: '#003967'
        }
      }
    },
    font: {
      family: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif'
    },
    control: {
      border: {
        radius: '0px'
      }
    }
  },
  button: {
    border: {
      radius: '0px'
    },
    primary: {
      color: {
        light: brandColor,
        dark: 'accent-1'
      }
    }
  },
  anchor: {
    color: {
      light: '#0078D4',
      dark: '#ffffff'
    }
  },
  checkBox: {
    border: {
      color: {
        light: 'rgba(0, 98, 186, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)'
      }
    },
    check: {
      radius: '0px'
    },
    color: {
      light: brandColor,
      dark: '#a6cfff'
    },
    toggle: {
      color: {
        dark: '#bdbdbd',
        light: brandColor
      },
      radius: '0px'
    }
  },
  layer: {
    backgroundColor: '#eef3fc',
    border: {
      radius: '0px'
    }
  },
  radioButton: {
    border: {
      color: {
        light: 'rgba(0, 98, 186, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)'
      }
    }
  }
})));

/***/ }),

/***/ "./node_modules/grommet-controls/es6/utils/colors.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/utils/colors.js ***!
  \***********************************************************/
/*! exports provided: colorFromIndex, colorForName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorFromIndex", function() { return colorFromIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorForName", function() { return colorForName; });
var colorFromIndex = function colorFromIndex(index) {
  var idx = index % 9 + 1;
  return idx <= 4 ? "accent-" + idx : "neutral-" + (idx - 4);
};

var colorForName = function colorForName(name, theme) {
  return theme.global.colors[name] || name;
};

/***/ }),

/***/ "./node_modules/grommet-controls/es6/utils/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/utils/index.js ***!
  \**********************************************************/
/*! exports provided: colorFromIndex, colorForName, smallDate, shortDate, longDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./node_modules/grommet-controls/es6/utils/colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorFromIndex", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["colorFromIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorForName", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["colorForName"]; });

/* harmony import */ var _moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moment */ "./node_modules/grommet-controls/es6/utils/moment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smallDate", function() { return _moment__WEBPACK_IMPORTED_MODULE_1__["smallDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shortDate", function() { return _moment__WEBPACK_IMPORTED_MODULE_1__["shortDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "longDate", function() { return _moment__WEBPACK_IMPORTED_MODULE_1__["longDate"]; });




/***/ }),

/***/ "./node_modules/grommet-controls/es6/utils/moment.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-controls/es6/utils/moment.js ***!
  \***********************************************************/
/*! exports provided: smallDate, shortDate, longDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallDate", function() { return smallDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortDate", function() { return shortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longDate", function() { return longDate; });

var smallDate = function smallDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-us';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

var shortDate = function shortDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-us';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

var longDate = function longDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-us';
  return new Date(date).toLocaleDateString(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/***/ }),

/***/ "./node_modules/grommet-icons/icons/Add.js":
/*!*************************************************!*\
  !*** ./node_modules/grommet-icons/icons/Add.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Add = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Add = function Add(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Add"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,22 L12,2 M2,12 L22,12"
  }));
};

exports.Add = Add;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/Blank.js":
/*!***************************************************!*\
  !*** ./node_modules/grommet-icons/icons/Blank.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Blank = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Blank = function Blank(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    "aria-hidden": true
  }, props));
};

exports.Blank = Blank;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/Calendar.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet-icons/icons/Calendar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Calendar = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Calendar = function Calendar(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Calendar"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,5 L22,5 L22,22 L2,22 L2,5 Z M18,5 L18,1 M6,5 L6,1 M2,10 L22,10"
  }));
};

exports.Calendar = Calendar;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/Close.js":
/*!***************************************************!*\
  !*** ./node_modules/grommet-icons/icons/Close.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Close = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Close = function Close(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Close"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3,3 L21,21 M3,21 L21,3"
  }));
};

exports.Close = Close;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/FormClose.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet-icons/icons/FormClose.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FormClose = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormClose = function FormClose(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormClose"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7,7 L17,17 M7,17 L17,7"
  }));
};

exports.FormClose = FormClose;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/LinkDown.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet-icons/icons/LinkDown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LinkDown = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LinkDown = function LinkDown(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkDown"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,2 L12,22 M3,11 L12,2 L21,11",
    transform: "matrix(1 0 0 -1 0 24)"
  }));
};

exports.LinkDown = LinkDown;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/LinkUp.js":
/*!****************************************************!*\
  !*** ./node_modules/grommet-icons/icons/LinkUp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LinkUp = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LinkUp = function LinkUp(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkUp"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,2 L12,22 M3,11 L12,2 L21,11"
  }));
};

exports.LinkUp = LinkUp;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/Menu.js":
/*!**************************************************!*\
  !*** ./node_modules/grommet-icons/icons/Menu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Menu = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Menu = function Menu(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Menu"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"
  }));
};

exports.Menu = Menu;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/StatusCritical.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet-icons/icons/StatusCritical.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StatusCritical = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusCritical = function StatusCritical(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusCritical"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12.7031806,2.70318058 C12.3148247,2.31482467 11.6897542,2.31024575 11.2968194,2.70318058 L2.70318058,11.2968194 C2.31482467,11.6851753 2.31024575,12.3102458 2.70318058,12.7031806 L11.2968194,21.2968194 C11.6851753,21.6851753 12.3102458,21.6897542 12.7031806,21.2968194 L21.2968194,12.7031806 C21.6851753,12.3148247 21.6897542,11.6897542 21.2968194,11.2968194 L12.7031806,2.70318058 Z M8.98264552,14.7001725 L14.7001725,8.98264552 M8.98264552,8.98264552 L14.7001725,14.7001725"
  }));
};

exports.StatusCritical = StatusCritical;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/StatusDisabled.js":
/*!************************************************************!*\
  !*** ./node_modules/grommet-icons/icons/StatusDisabled.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StatusDisabled = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusDisabled = function StatusDisabled(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusDisabled"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M18,12 L6,12"
  }));
};

exports.StatusDisabled = StatusDisabled;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/StatusGood.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet-icons/icons/StatusGood.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StatusGood = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusGood = function StatusGood(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusGood"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8"
  }));
};

exports.StatusGood = StatusGood;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/StatusInfo.js":
/*!********************************************************!*\
  !*** ./node_modules/grommet-icons/icons/StatusInfo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StatusInfo = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusInfo = function StatusInfo(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusInfo"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M12,10 L12,18 M12,6 L12,8"
  }));
};

exports.StatusInfo = StatusInfo;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/StatusUnknown.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-icons/icons/StatusUnknown.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StatusUnknown = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusUnknown = function StatusUnknown(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusUnknown"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26413718 9,10 M12,16 L12,18"
  }));
};

exports.StatusUnknown = StatusUnknown;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/StatusWarning.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-icons/icons/StatusWarning.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StatusWarning = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusWarning = function StatusWarning(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusWarning"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18"
  }));
};

exports.StatusWarning = StatusWarning;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/StopFill.js":
/*!******************************************************!*\
  !*** ./node_modules/grommet-icons/icons/StopFill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StopFill = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StopFill = function StopFill(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StopFill"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4,4 L20,4 L20,20 L4,20 L4,4 Z M6,6 L18,6 L18,18 L6,18 L6,6 Z M8,8 L16,8 L16,16 L8,16 L8,8 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z"
  }));
};

exports.StopFill = StopFill;

/***/ }),

/***/ "./node_modules/grommet-icons/icons/View.js":
/*!**************************************************!*\
  !*** ./node_modules/grommet-icons/icons/View.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.View = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyledIcon = __webpack_require__(/*! ../StyledIcon */ "./node_modules/grommet-icons/StyledIcon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var View = function View(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "View"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"
  }));
};

exports.View = View;

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

/***/ "./node_modules/text-mask-addons/dist/textMaskAddons.js":
/*!**************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/textMaskAddons.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);Object.defineProperty(t,"createAutoCorrectedDatePipe",{enumerable:!0,get:function(){return r(i).default}});var o=n(2);Object.defineProperty(t,"createNumberMask",{enumerable:!0,get:function(){return r(o).default}});var u=n(3);Object.defineProperty(t,"emailMask",{enumerable:!0,get:function(){return r(u).default}})},function(e,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm dd yyyy",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.minYear,o=void 0===n?1:n,u=t.maxYear,a=void 0===u?9999:u,c=e.split(/[^dmyHMS]+/).sort(function(e,t){return i.indexOf(e)-i.indexOf(t)});return function(t){var n=[],i={dd:31,mm:12,yy:99,yyyy:a,HH:23,MM:59,SS:59},u={dd:1,mm:1,yy:0,yyyy:o,HH:0,MM:0,SS:0},l=t.split("");c.forEach(function(t){var r=e.indexOf(t),o=parseInt(i[t].toString().substr(0,1),10);parseInt(l[r],10)>o&&(l[r+1]=l[r],l[r]=0,n.push(r))});var s=0,d=c.some(function(n){var c=e.indexOf(n),l=n.length,d=t.substr(c,l).replace(/\D/g,""),f=parseInt(d,10);"mm"===n&&(s=f||0);var p="dd"===n?r[s]:i[n];if("yyyy"===n&&(1!==o||9999!==a)){var v=parseInt(i[n].toString().substring(0,d.length),10),y=parseInt(u[n].toString().substring(0,d.length),10);return f<y||f>v}return f>p||d.length===l&&f<u[n]});return!d&&{value:l.join(""),indexesOfPipedChars:n}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=[31,31,29,31,30,31,30,31,31,30,31,30,31],i=["yyyy","yy","mm","dd","HH","MM","SS"]},function(e,t){"use strict";function n(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=e.length;if(e===a||e[0]===g[0]&&1===t)return g.split(a).concat([v]).concat(h.split(a));if(e===P&&_)return g.split(a).concat(["0",P,v]).concat(h.split(a));var n=e[0]===s&&D;n&&(e=e.toString().substr(1));var u=e.lastIndexOf(P),c=u!==-1,l=void 0,m=void 0,b=void 0;if(e.slice($*-1)===h&&(e=e.slice(0,$*-1)),c&&(_||I)?(l=e.slice(e.slice(0,N)===g?N:0,u),m=e.slice(u+1,t),m=r(m.replace(f,a))):l=e.slice(0,N)===g?e.slice(N):e,L&&("undefined"==typeof L?"undefined":o(L))===p){var O="."===S?"[.]":""+S,M=(l.match(new RegExp(O,"g"))||[]).length;l=l.slice(0,L+M*V)}return l=l.replace(f,a),R||(l=l.replace(/^0+(0$|[^0])/,"$1")),l=x?i(l,S):l,b=r(l),(c&&_||I===!0)&&(e[u-1]!==P&&b.push(y),b.push(P,y),m&&(("undefined"==typeof C?"undefined":o(C))===p&&(m=m.slice(0,C)),b=b.concat(m)),I===!0&&e[u-1]===P&&b.push(v)),N>0&&(b=g.split(a).concat(b)),n&&(b.length===N&&b.push(v),b=[d].concat(b)),h.length>0&&(b=b.concat(h.split(a))),b}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.prefix,g=void 0===n?u:n,m=t.suffix,h=void 0===m?a:m,b=t.includeThousandsSeparator,x=void 0===b||b,O=t.thousandsSeparatorSymbol,S=void 0===O?c:O,M=t.allowDecimal,_=void 0!==M&&M,j=t.decimalSymbol,P=void 0===j?l:j,w=t.decimalLimit,C=void 0===w?2:w,H=t.requireDecimal,I=void 0!==H&&H,k=t.allowNegative,D=void 0!==k&&k,E=t.allowLeadingZeroes,R=void 0!==E&&E,A=t.integerLimit,L=void 0===A?null:A,N=g&&g.length||0,$=h&&h.length||0,V=S&&S.length||0;return e.instanceOf="createNumberMask",e}function r(e){return e.split(a).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var u="$",a="",c=",",l=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,y="[]"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){e=e.replace(O,v);var n=t.placeholderChar,r=t.currentCaretPosition,i=e.indexOf(y),s=e.lastIndexOf(p),d=s<i?-1:s,f=o(e,i+1,y),g=o(e,d-1,p),m=u(e,i,n),h=a(e,i,d,n),b=c(e,d,n,r);m=l(m),h=l(h),b=l(b,!0);var x=m.concat(f).concat(h).concat(g).concat(b);return x}function o(e,t,n){var r=[];return e[t]===n?r.push(n):r.push(g,n),r.push(g),r}function u(e,t){return t===-1?e:e.slice(0,t)}function a(e,t,n,r){var i=v;return t!==-1&&(i=n===-1?e.slice(t+1,e.length):e.slice(t+1,n)),i=i.replace(new RegExp("[\\s"+r+"]",h),v),i===y?f:i.length<1?m:i[i.length-1]===p?i.slice(0,i.length-1):i}function c(e,t,n,r){var i=v;return t!==-1&&(i=e.slice(t+1,e.length)),i=i.replace(new RegExp("[\\s"+n+".]",h),v),0===i.length?e[t-1]===p&&r!==e.length?f:v:i}function l(e,t){return e.split(v).map(function(e){return e===m?e:t?x:b})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),d=r(s),f="*",p=".",v="",y="@",g="[]",m=" ",h="g",b=/[^\s]/,x=/[^.\s]/,O=/\s/g;t.default={mask:i,pipe:d.default}},function(e,t){"use strict";function n(e,t){var n=t.currentCaretPosition,o=t.rawValue,f=t.previousConformedValue,p=t.placeholderChar,v=e;v=r(v);var y=v.indexOf(a),g=null===o.match(new RegExp("[^@\\s."+p+"]"));if(g)return u;if(v.indexOf(l)!==-1||y!==-1&&n!==y+1||o.indexOf(i)===-1&&f!==u&&o.indexOf(c)!==-1)return!1;var m=v.indexOf(i),h=v.slice(m+1,v.length);return(h.match(d)||s).length>1&&v.substr(-1)===c&&n!==o.length&&(v=v.slice(0,v.length-1)),v}function r(e){var t=0;return e.replace(o,function(){return t++,1===t?i:u})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i="@",o=/@/g,u="",a="@.",c=".",l="..",s=[],d=/\./g}])});

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

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
/* harmony import */ var grommet_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet-controls */ "./node_modules/grommet-controls/es6/index.js");
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
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_7__["Card"], {
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
//# sourceMappingURL=index.js.7843a0e5cf09ce9145c8.hot-update.js.map