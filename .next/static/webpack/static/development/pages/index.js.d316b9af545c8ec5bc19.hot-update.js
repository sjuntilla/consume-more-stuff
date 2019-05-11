webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/grommet-controls/chartjs/withChartTheme/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/chartjs/withChartTheme/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _withChartTheme = __webpack_require__(/*! ./withChartTheme */ "./node_modules/grommet-controls/chartjs/withChartTheme/withChartTheme.js");

Object.defineProperty(exports, 'withChartTheme', {
  enumerable: true,
  get: function get() {
    return _withChartTheme.withChartTheme;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/chartjs/withChartTheme/withChartTheme.js":
/*!********************************************************************************!*\
  !*** ./node_modules/grommet-controls/chartjs/withChartTheme/withChartTheme.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withChartTheme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _colors = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");

var _object = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");

var _colors2 = __webpack_require__(/*! ../../utils/colors */ "./node_modules/grommet-controls/utils/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var normalizedColor = function normalizedColor(color, theme) {
  return (0, _colors2.colorForName)((0, _colors.normalizeColor)(color, theme), theme);
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
    return _react2.default.createElement(
      _grommet.ThemeContext.Consumer,
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
        var themedOptions = (0, _object.deepMerge)(defaultOptions, options);

        themedOptions.scales.xAxes = themedOptions.scales.xAxes || defaultScales;
        themedOptions.scales.yAxes = themedOptions.scales.yAxes || defaultScales;
        themedOptions.scales.xAxes = themedOptions.scales.xAxes.map(function (x) {
          return (0, _object.deepMerge)(axisColors, x);
        });
        themedOptions.scales.yAxes = themedOptions.scales.yAxes.map(function (y) {
          return (0, _object.deepMerge)(axisColors, y);
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
              var lineColor = borderColor || color || (0, _colors2.colorFromIndex)(index);
              var lineColors = Array.isArray(lineColor) ? lineColor.map(function (c) {
                return normalizedColor(c, theme);
              }) : normalizedColor(lineColor, theme);
              var fillColor = backgroundColor || lineColor;
              var opacity = itemOpacity || dataset.opacity || options && options.opacity || classOpacity;
              var fillColors = Array.isArray(fillColor) ? fillColor.map(function (c) {
                return (0, _colors.getRGBA)(normalizedColor(c, theme), opacity);
              }) : (0, _colors.getRGBA)(normalizedColor(fillColor, theme), opacity);
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
        return _react2.default.createElement(WrappedComponent, {
          options: themedOptions,
          data: _extends({}, data, { datasets: datasets })
        });
      }
    );
  };
};
exports.withChartTheme = withChartTheme;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Avatar/Avatar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Avatar/Avatar.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Avatar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _ImageStamp = __webpack_require__(/*! ../ImageStamp */ "./node_modules/grommet-controls/components/ImageStamp/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Avatar = function Avatar(_ref) {
  var image = _ref.image,
      title = _ref.title,
      subTitle = _ref.subTitle,
      rest = _objectWithoutProperties(_ref, ['image', 'title', 'subTitle']);

  return _react2.default.createElement(
    _grommet.Box,
    { direction: 'row', align: 'center', gap: 'small' },
    _react2.default.createElement(_ImageStamp.ImageStamp, _extends({
      src: image,
      round: 'full'
    }, rest)),
    _react2.default.createElement(
      _grommet.Box,
      { justify: 'between' },
      _react2.default.createElement(
        _grommet.Text,
        { weight: 'bold', truncate: true },
        title
      ),
      _react2.default.createElement(
        _grommet.Text,
        { size: 'small', truncate: true },
        subTitle
      )
    )
  );
};

var AvatarDoc = void 0;
if (true) {
  AvatarDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Avatar/doc.js").default(Avatar); // eslint-disable-line global-require
}

var AvatarWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(AvatarDoc || Avatar);

exports.Avatar = AvatarWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Avatar/doc.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Avatar/doc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('An image with some text, can be used as a user Avatar image.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Avatar } from \'grommet-controls\';\n\n      <Avatar image=\'...\' />\n    ');

  DocumentedElement.propTypes = {
    image: _reactDesc.PropTypes.string.isRequired.description('Image to be displayed.'),
    title: _reactDesc.PropTypes.string.description('Main title(name) for the Avatar.'),
    subTitle: _reactDesc.PropTypes.string.isRequired.description('Secondary title for the Avatar.')
  };
  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Avatar/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Avatar/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Avatar = __webpack_require__(/*! ./Avatar */ "./node_modules/grommet-controls/components/Avatar/Avatar.js");

Object.defineProperty(exports, 'Avatar', {
  enumerable: true,
  get: function get() {
    return _Avatar.Avatar;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Card/Card.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Card/Card.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Card = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _StyledCard = __webpack_require__(/*! ./StyledCard */ "./node_modules/grommet-controls/components/Card/StyledCard.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return _react2.default.createElement(
      _styledComponents.ThemeContext.Consumer,
      null,
      function (theme) {
        return _react2.default.createElement(
          _StyledCard.StyledCard,
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
}(_react.Component);

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
  CardDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Card/doc.js").default(Card); // eslint-disable-line global-require
}
var CardWrapper = CardDoc || Card;

CardWrapper.CardActions = function (_ref2) {
  var children = _ref2.children,
      _ref2$pad = _ref2.pad,
      pad = _ref2$pad === undefined ? 'small' : _ref2$pad,
      rest = _objectWithoutProperties(_ref2, ['children', 'pad']);

  return _react2.default.createElement(
    _grommet.Box,
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

  return _react2.default.createElement(
    _grommet.Box,
    _extends({ responsive: responsive, direction: 'row', fill: 'horizontal', pad: pad, border: 'bottom', gap: 'small', flex: false }, rest),
    typeof children !== 'string' ? children : _react2.default.createElement(
      _grommet.Heading,
      {
        level: level,
        margin: 'none',
        color: color,
        textAlign: textAlign,
        truncate: truncate,
        responsive: responsive
      },
      strong ? _react2.default.createElement(
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

  return _react2.default.createElement(
    _grommet.Box,
    _extends({ pad: pad, fill: true, flex: true }, rest),
    children
  );
};

// eslint-disable-next-line import/prefer-default-export
exports.Card = CardWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Card/StyledCard.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Card/StyledCard.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledCard = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
var StyledCard = exports.StyledCard = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledCard',
  componentId: 'sc-1cfdley-0'
})(['@media (max-width:', 'px){flex-basis:100%;}'], function (props) {
  return props.theme.global.breakpoints.small;
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Card/doc.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Card/doc.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.docCardContent = exports.docCardTitle = exports.docCardActions = undefined;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

var ANIMATION_TYPE = _reactDesc.PropTypes.oneOf(['fadeIn', 'fadeOut', 'jiggle', 'pulse', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);

var ANIMATION_SHAPE = _reactDesc.PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: _reactDesc.PropTypes.number,
  duration: _reactDesc.PropTypes.number,
  size: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
});

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A Card-type container, all props of Box apply.').usage('$ npm install grommet-controls\n\n    import { Card } from \'grommet-controls\';\n\n    <Card>\n      <Card.CardTitle>\n        Title\n      </Card.CardTitle>\n      <Card.CardContent>\n        card content goes here\n      </Card.CardContent>  \n    </Card>  \n');

  DocumentedElement.propTypes = {
    animation: _reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]))]).description('Animation effect(s) to use. \'duration\' and \'delay\' should\n        be in milliseconds. \'jiggle\' and \'pulse\' types are intended for\n        small elements, like icons.'),
    background: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      dark: _reactDesc.PropTypes.bool,
      image: _reactDesc.PropTypes.string,
      position: _reactDesc.PropTypes.string,
      opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
    })]).description('Either a color identifier to use for the background\n        color. For example: \'neutral-1\'. Or, a \'url()\' for an image. Dark\n        is not needed if color is provided.'),
    border: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      side: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('Include a border.').defaultValue('all'),
    elevation: _reactDesc.PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']).description('Elevated height above the underlying context, indicated\n        via a drop shadow.').defaultValue('small'),
    gap: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('The amount of spacing between child elements (title, content).').defaultValue('small'),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of margin around the card. An object can\n        be specified to distinguish horizontal margin, vertical margin, and\n        margin on a particular side of the card.').defaultValue('small'),
    pad: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of padding inside the card content. An\n        object can be specified to distinguish horizontal padding, vertical\n        padding, and padding on a particular side of the box').defaultValue('small'),
    round: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners of the card.').defaultValue('xsmall')
  };

  return DocumentedElement;
};

var docCardActions = exports.docCardActions = function docCardActions(Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('Actions container, aligned at bottom of the Card. All properties of Box apply.').usage('$ npm install grommet-controls\n\n    import { CardActions } from \'grommet-controls/components/Card\';\n\n    <Card>\n      <CardActions>\n        <Button ... />\n      </CardActions>\n    </Card>\n');

  DocumentedElement.propTypes = {
    children: _reactDesc.PropTypes.node.description('Content of card actions - usually Button or Anchor elements.').isRequired
  };

  return DocumentedElement;
};

var docCardTitle = exports.docCardTitle = function docCardTitle(Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('Card title component. All properties of Box and Heading apply.').usage('$ npm install grommet-controls\n\n    import { Card } from \'grommet-controls\';\n\n    <Card>\n      <Card.CardTitle>\n        Title\n      </Card.CardTitle>\n    </Card>\n');

  DocumentedElement.propTypes = {
    children: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Content of the title - a string or a react node.').isRequired
  };

  return DocumentedElement;
};

var docCardContent = exports.docCardContent = function docCardContent(Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('Card content component, fills the available space and allows for scrolling if needed. All properties of Box apply.').usage('$ npm install grommet-controls\n\n    import { CardContent } from \'grommet-controls/components/Card\';\n\n    <Card>\n      <CardContent>\n        Some content\n      </CardContent>\n    </Card>\n');

  DocumentedElement.propTypes = {
    children: _reactDesc.PropTypes.node.description('Content of the card.').isRequired
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Card/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Card/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Card = __webpack_require__(/*! ./Card */ "./node_modules/grommet-controls/components/Card/Card.js");

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _Card.Card;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/CheckBoxField/CheckBoxField.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/CheckBoxField/CheckBoxField.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CheckBoxField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckBoxField = (0, _withFormField.withFormField)(function (_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['value', 'onChange']);

  return _react2.default.createElement(
    _grommet.Box,
    { pad: { vertical: 'small' } },
    _react2.default.createElement(_grommet.CheckBox, _extends({}, rest, { onChange: function onChange() {
        return _onChange({ target: { value: !value } });
      } }))
  );
});
exports.CheckBoxField = CheckBoxField;

/***/ }),

/***/ "./node_modules/grommet-controls/components/CheckBoxField/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/CheckBoxField/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _CheckBoxField = __webpack_require__(/*! ./CheckBoxField */ "./node_modules/grommet-controls/components/CheckBoxField/CheckBoxField.js");

Object.defineProperty(exports, 'CheckBoxField', {
  enumerable: true,
  get: function get() {
    return _CheckBoxField.CheckBoxField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/ColorInput/ColorInput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ColorInput/ColorInput.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ColorInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StopFill = __webpack_require__(/*! grommet-icons/icons/StopFill */ "./node_modules/grommet-icons/icons/StopFill.js");

var _MaskedInput = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/components/MaskedInput/index.js");

var _Colors = __webpack_require__(/*! ../Colors */ "./node_modules/grommet-controls/components/Colors/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledColorButton = _styledComponents2.default.span.withConfig({
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

    return _react2.default.createElement(
      _styledComponents.ThemeContext.Consumer,
      null,
      function (theme) {
        return _react2.default.createElement(_MaskedInput.MaskedInput, _extends({
          update: function update(_update) {
            _this2.upDateValue = _update;
          },
          dropIcon: _react2.default.createElement(
            StyledColorButton,
            { theme: theme, selectedColor: selectedColor },
            _react2.default.createElement(_StopFill.StopFill, null)
          ),
          dropContent: _react2.default.createElement(_Colors.Colors, {
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
}(_react.Component);

ColorInput.defaultProps = {
  size: 'small',
  mask: ['#', /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/]
};


var ColorInputDoc = void 0;
if (true) {
  ColorInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/ColorInput/doc.js").default(ColorInput); // eslint-disable-line global-require
}

var ColorInputWrapper = ColorInputDoc || ColorInput;

exports.ColorInput = ColorInputWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/ColorInput/doc.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ColorInput/doc.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A masked color entry field, with a drop button to select a color.\n      All properties of MaskedInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { ColorInput } from \'grommet-controls\';\n\n      <ColorInput colors={...} value={...} />\n    ');

  DocumentedElement.propTypes = {
    colors: _reactDesc.PropTypes.object.isRequired.description('Color palette for the user to choose a color from.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/ColorInput/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ColorInput/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ColorInput = __webpack_require__(/*! ./ColorInput */ "./node_modules/grommet-controls/components/ColorInput/ColorInput.js");

Object.defineProperty(exports, 'ColorInput', {
  enumerable: true,
  get: function get() {
    return _ColorInput.ColorInput;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/ColorInputField/ColorInputField.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ColorInputField/ColorInputField.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ColorInputField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../ColorInput/index */ "./node_modules/grommet-controls/components/ColorInput/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorInputField = exports.ColorInputField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_index.ColorInput, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/ColorInputField/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ColorInputField/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ColorInputField = __webpack_require__(/*! ./ColorInputField */ "./node_modules/grommet-controls/components/ColorInputField/ColorInputField.js");

Object.defineProperty(exports, 'ColorInputField', {
  enumerable: true,
  get: function get() {
    return _ColorInputField.ColorInputField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Colors/Colors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Colors/Colors.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Colors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _colors = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");

var _mixins = __webpack_require__(/*! grommet/utils/mixins */ "./node_modules/grommet/utils/mixins.js");

var _StyledColors = __webpack_require__(/*! ./StyledColors */ "./node_modules/grommet-controls/components/Colors/StyledColors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        var buttonNode = (0, _reactDom.findDOMNode)(colorRows[activeRow].colors[activeColor].buttonRef);
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
        return _react2.default.createElement(
          _StyledColors.StyledRow,
          {
            key: 'row_' + rowIndex,
            theme: theme,
            style: { width: cellSize * row.colors.length + 'px', height: cellSize + 'px' }
          },
          row.colors.map(function (color, colorIndex) {
            var isActive = activeRow === rowIndex && activeColor === colorIndex;
            var colorStyle = {
              backgroundColor: color.color,
              color: (0, _colors.normalizeColor)('text', theme),
              left: cellSize * colorIndex + 'px'
            };
            return _react2.default.createElement(
              _StyledColors.StyledColorContainer,
              { key: 'color_' + colorIndex, size: size, theme: theme },
              _react2.default.createElement(
                _StyledColors.StyledColor
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
                _react2.default.createElement(
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
    return _react2.default.createElement(
      _styledComponents.ThemeContext.Consumer,
      null,
      function (theme) {
        var cellSize = (0, _mixins.parseMetricToNum)(theme.calendar[size].daySize);
        return _react2.default.createElement(
          _StyledColors.StyledColors,
          _extends({ size: size, theme: theme }, rest),
          _react2.default.createElement(
            _grommet.Keyboard,
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
            _react2.default.createElement(
              _grommet.Box,
              null,
              _react2.default.createElement(
                _StyledColors.StyledRows,
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
}(_react.Component);

Colors.defaultProps = {
  size: 'medium'
};


var ColorsDoc = void 0;
if (true) {
  ColorsDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Colors/doc.js").default(Colors); // eslint-disable-line global-require
}

var ColorsWrapper = ColorsDoc || Colors;

exports.Colors = ColorsWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Colors/StyledColors.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Colors/StyledColors.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledColor = exports.StyledColorContainer = exports.StyledRow = exports.StyledRows = exports.StyledColors = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], data.fontSize, data.lineHeight);
};

var StyledColors = exports.StyledColors = _styledComponents2.default.div.withConfig({
  displayName: 'StyledColors',
  componentId: 'sc-1pzrl24-0'
})(['', ''], function (props) {
  return sizeStyle(props);
});

var StyledRows = exports.StyledRows = _styledComponents2.default.div.withConfig({
  displayName: 'StyledColors__StyledRows',
  componentId: 'sc-1pzrl24-1'
})(['position:relative;']);

var StyledRow = exports.StyledRow = _styledComponents2.default.div.withConfig({
  displayName: 'StyledColors__StyledRow',
  componentId: 'sc-1pzrl24-2'
})(['position:relative;display:flex;flex-direction:row;flex-justify:between;']);

var StyledColorContainer = exports.StyledColorContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledColors__StyledColorContainer',
  componentId: 'sc-1pzrl24-3'
})(['flex:0 0;']);

var colorSizeStyle = function colorSizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return (0, _styledComponents.css)(['width:', ';height:', ';'], data.daySize, data.daySize);
};

var StyledColor = exports.StyledColor = (0, _styledComponents2.default)(_grommet.Button).withConfig({
  displayName: 'StyledColors__StyledColor',
  componentId: 'sc-1pzrl24-4'
})(['top:0;position:absolute;display:flex;justify-content:center;align-items:center;', ' span{visibility:hidden;};transition:transform .2s;&:hover{z-index:10;width:auto;-webkit-transform:scale(2);-moz-transform:scale(2);transform:scale(2);span{visibility:visible;};);'], function (props) {
  return colorSizeStyle(props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Colors/doc.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Colors/doc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A color selection element, with custom color palettes.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Colors } from \'grommet-controls\';\n\n      <Colors colors={...} />\n    ');

  DocumentedElement.propTypes = {
    colors: _reactDesc.PropTypes.object.isRequired.description('Color palette for the user to choose a color from.'),
    color: _reactDesc.PropTypes.string.description('The default selected color.'),
    onSelect: _reactDesc.PropTypes.func.description('Called with an object containing the selected color, rowName and colorName.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']).description('What size to make it.'),
    columns: _reactDesc.PropTypes.number.description('The maximum number of colors per row, if left emty will be calculated automatically.'),
    wrap: _reactDesc.PropTypes.bool.description('If true, will wrap any rows of colors that exceed the columns limit, otherwise will truncate larger rows.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Colors/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Colors/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Colors = __webpack_require__(/*! ./Colors */ "./node_modules/grommet-controls/components/Colors/Colors.js");

Object.defineProperty(exports, 'Colors', {
  enumerable: true,
  get: function get() {
    return _Colors.Colors;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/DateInput/DateInput.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DateInput/DateInput.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DateInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _Calendar = __webpack_require__(/*! grommet-icons/icons/Calendar */ "./node_modules/grommet-icons/icons/Calendar.js");

var _MaskedInput = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/components/MaskedInput/index.js");

var _moment = __webpack_require__(/*! ../../utils/moment */ "./node_modules/grommet-controls/utils/moment.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _this.upDateValue((0, _moment.smallDate)(date));
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
        pipe: _MaskedInput.MaskedInput.createAutoCorrectedDatePipe(),
        keepCharPositions: true
      };
    } else {
      mask = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] };
    }
    return _react2.default.createElement(_MaskedInput.MaskedInput, _extends({
      update: function update(_update) {
        _this2.upDateValue = _update;
      },
      value: value,
      dropContent: _react2.default.createElement(
        _grommet.Box,
        { pad: 'small' },
        _react2.default.createElement(_grommet.Calendar, {
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
}(_react.Component);

DateInput.defaultProps = {
  dropIcon: _react2.default.createElement(_Calendar.Calendar, null),
  size: 'small',
  a11yDropTitle: 'Open calendar'
};


var DateInputDoc = void 0;
if (true) {
  DateInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/DateInput/doc.js").default(DateInput); // eslint-disable-line global-require
}

var DateInputWrapper = DateInputDoc || DateInput;

exports.DateInput = DateInputWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/DateInput/doc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DateInput/doc.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A masked date entry field with a drop down calendar.\n      All properties of MaskedInput apply\n      ').usage('\n    $ npm install grommet-controls\n\n    import { DateInput } from \'grommet-controls\';\n\n    <DateInput value={...} />\n    ');

  DocumentedElement.propTypes = {
    autocorrect: _reactDesc.PropTypes.bool.description('Use mask that wil attempt to auto-correct the entry as the user types'),
    disabled: _reactDesc.PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    bounds: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string).description('An array of two numbers indicating the limits on\n        navigation in ISO8601 format'),
    disabledDates: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string)])).description('Multiple dates in ISO8601 format that should not be\n        selectable. Items that are an array indicate a range of dates.'),
    firstDayOfWeek: _reactDesc.PropTypes.oneOf([0, 1]).description('The first day of the week. 0 for Sunday. 1 for Monday.'),
    locale: _reactDesc.PropTypes.string.description('The locale to use.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']).description('Size of the calendar drop.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.instanceOf(Date), _reactDesc.PropTypes.string]).description('The date value is Date format of ISO string')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/DateInput/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DateInput/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _DateInput = __webpack_require__(/*! ./DateInput */ "./node_modules/grommet-controls/components/DateInput/DateInput.js");

Object.defineProperty(exports, 'DateInput', {
  enumerable: true,
  get: function get() {
    return _DateInput.DateInput;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/DateInputField/DateInputField.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DateInputField/DateInputField.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DateInputField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../DateInput/index */ "./node_modules/grommet-controls/components/DateInput/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateInputField = exports.DateInputField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_index.DateInput, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/DateInputField/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DateInputField/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _DateInputField = __webpack_require__(/*! ./DateInputField */ "./node_modules/grommet-controls/components/DateInputField/DateInputField.js");

Object.defineProperty(exports, 'DateInputField', {
  enumerable: true,
  get: function get() {
    return _DateInputField.DateInputField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/DropInput/DropInput.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DropInput/DropInput.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DropInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _FormDown = __webpack_require__(/*! grommet-icons/icons/FormDown */ "./node_modules/grommet-icons/icons/FormDown.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _StyledDropInput = __webpack_require__(/*! ./StyledDropInput */ "./node_modules/grommet-controls/components/DropInput/StyledDropInput.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        drop = _react2.default.createElement(_grommet.DropButton, {
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
      decorations = _react2.default.createElement(
        _StyledDropInput.StyledWidgetsContainer,
        {
          align: 'center',
          direction: 'row'
        },
        widgets.map(function (widget, index) {
          return _react2.default.createElement(_grommet.Button, _extends({ disabled: disabled, tabIndex: '-1', key: 'widget_' + index }, widget));
        }),
        drop
      );
    }
    return _react2.default.createElement(
      _grommet.Keyboard,
      { onDown: this.onKeyDown, onUp: this.onKeyUp },
      _react2.default.createElement(
        _StyledDropInput.StyledDropInputContainer,
        null,
        _react2.default.createElement(
          _styledComponents.ThemeContext.Consumer,
          null,
          function (theme) {
            return _react2.default.createElement(_StyledDropInput.StyledDropInput, _extends({
              ref: function ref(_ref) {
                _this2.inputControlRef = _ref && (0, _reactDom.findDOMNode)(_ref);
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
}(_react.Component);

DropInput.defaultProps = {
  dropAlign: { top: 'bottom', right: 'left' },
  dropIcon: _react2.default.createElement(_FormDown.FormDown, null),
  type: 'text',
  widgets: []
};


var DropInputDoc = void 0;
if (true) {
  DropInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/DropInput/doc.js").default(DropInput); // eslint-disable-line global-require
}

var DropInputWrapper = DropInputDoc || DropInput;

exports.DropInput = DropInputWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/DropInput/StyledDropInput.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DropInput/StyledDropInput.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledWidgetsContainer = exports.StyledDropInputContainer = exports.StyledDropInput = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _mixins = __webpack_require__(/*! grommet/utils/mixins */ "./node_modules/grommet/utils/mixins.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDropInput = exports.StyledDropInput = (0, _styledComponents2.default)(_grommet.TextInput).withConfig({
  displayName: 'StyledDropInput',
  componentId: 'mqzg2z-0'
})(['padding-right:', 'px;'], function (props) {
  var widgetsBox = props.numWidgets * (24 + 2 * (0, _mixins.parseMetricToNum)(props.theme.global.edgeSize.small));

  // eslint-disable-next-line no-mixed-operators
  return widgetsBox + (0, _mixins.parseMetricToNum)(props.theme.global.spacing) / 2 - (0, _mixins.parseMetricToNum)(props.theme.global.control.border.width);
});

var StyledDropInputContainer = exports.StyledDropInputContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledDropInput__StyledDropInputContainer',
  componentId: 'mqzg2z-1'
})(['position:relative;width:100%;cursor:pointer;']);

var StyledWidgetsContainer = exports.StyledWidgetsContainer = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledDropInput__StyledWidgetsContainer',
  componentId: 'mqzg2z-2'
})(['position:absolute;right:0;top:', ';'], function (props) {
  return -(0, _mixins.parseMetricToNum)(props.theme.button.padding.vertical) + 'px';
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/DropInput/doc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DropInput/doc.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _propTypes = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('An Input control with an optional drop button with the specified \'dropContent\' or widgets.').usage('\n    $ npm install grommet-controls\n\n    import { DropInput } from \'grommet-controls\';\n\n    <DropInput dropContent={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: _propTypes.a11yTitlePropType,
    a11yDropTitle: _reactDesc.PropTypes.string.description('Custom drop button title to be used by screen readers..'),
    placeholder: _reactDesc.PropTypes.string.description('Placeholder text to use when no value is provided.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.number]).description('Value for the field.'),
    id: _reactDesc.PropTypes.string.description('The id attribute of the input.'),
    name: _reactDesc.PropTypes.string.description('The name attribute of the input.'),
    disabled: _reactDesc.PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user enters a new valuu.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether the plain text input should receive a focus outline.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain input with no border or padding.\nOnly use this when the containing context provides sufficient affordance'),
    dropContent: _reactDesc.PropTypes.element.description('Content to put inside the Drop.'),
    dropIcon: _reactDesc.PropTypes.element.description('Icon for drop content.'),
    widgets: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      icon: _reactDesc.PropTypes.element.isRequired
    })).description('Additional widgets to be placed next to the input.'),
    onClose: _reactDesc.PropTypes.func.description('Callback for when the drop is closed')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/DropInput/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/DropInput/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _DropInput = __webpack_require__(/*! ./DropInput */ "./node_modules/grommet-controls/components/DropInput/DropInput.js");

Object.defineProperty(exports, 'DropInput', {
  enumerable: true,
  get: function get() {
    return _DropInput.DropInput;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/EmailInput/EmailInput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/EmailInput/EmailInput.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EmailInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MaskedInput = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/components/MaskedInput/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(_MaskedInput.MaskedInput, _extends({
      inputMode: 'email'
    }, this.props));
  };

  return EmailInput;
}(_react.Component);

EmailInput.defaultProps = {
  mask: _MaskedInput.MaskedInput.emailMask
};


var EmailInputDoc = void 0;
if (true) {
  EmailInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/EmailInput/doc.js").default(EmailInput); // eslint-disable-line global-require
}

var EmailInputWrapper = EmailInputDoc || EmailInput;

exports.EmailInput = EmailInputWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/EmailInput/doc.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/EmailInput/doc.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A masked input with a default mask for handling email addresses.\n      All properties of MaskedInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { EmailInput } from \'grommet-controls\';\n\n      <EmailInput value={...} />\n    ');

  DocumentedElement.propTypes = {};

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/EmailInput/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/EmailInput/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _EmailInput = __webpack_require__(/*! ./EmailInput */ "./node_modules/grommet-controls/components/EmailInput/EmailInput.js");

Object.defineProperty(exports, 'EmailInput', {
  enumerable: true,
  get: function get() {
    return _EmailInput.EmailInput;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/EmailInputField/EmailInputField.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/EmailInputField/EmailInputField.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EmailInputField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../EmailInput/index */ "./node_modules/grommet-controls/components/EmailInput/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailInputField = exports.EmailInputField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_index.EmailInput, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/EmailInputField/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/EmailInputField/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _EmailInputField = __webpack_require__(/*! ./EmailInputField */ "./node_modules/grommet-controls/components/EmailInputField/EmailInputField.js");

Object.defineProperty(exports, 'EmailInputField', {
  enumerable: true,
  get: function get() {
    return _EmailInputField.EmailInputField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Form/Form.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Form/Form.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Form = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _DOM = __webpack_require__(/*! grommet/utils/DOM */ "./node_modules/grommet/utils/DOM.js");

var _object = __webpack_require__(/*! grommet/utils/object */ "./node_modules/grommet/utils/object.js");

var _FormState = __webpack_require__(/*! ./FormState */ "./node_modules/grommet-controls/components/Form/FormState.js");

var _StyledForm = __webpack_require__(/*! ./StyledForm */ "./node_modules/grommet-controls/components/Form/StyledForm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styledComponents = {
  form: _StyledForm.StyledForm
};

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props, context) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.config = {};
    var formState = new _FormState.FormState(_this.config, props.object, function () {
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
      var newObject = (0, _object.deepMerge)(this.state.data, nextProps.object);
      this.state.formState.setObject(newObject);
      this.setState({ data: newObject });
    }
  };

  Form.prototype.componentDidMount = function componentDidMount() {
    var focusFirstChild = this.props.focusFirstChild;

    if (focusFirstChild) {
      var items = this.containerRef.getElementsByTagName('*');
      items = (0, _DOM.filterByFocusable)(items);
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
      StyledComponent = _StyledForm.StyledForm.withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }
    return _react2.default.createElement(
      StyledComponent,
      {
        onSubmit: this.onSubmit,
        'aria-label': a11yTitle
      },
      _react2.default.createElement(
        _grommet.Box,
        { direction: 'row' },
        _react2.default.createElement(
          _grommet.Box,
          rest,
          _react2.default.createElement(
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
}(_react.Component);

Form.childContextTypes = {
  form: _propTypes2.default.object
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
  FormDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Form/doc.js").default(Form); // eslint-disable-line global-require
}

var FormWrapper = FormDoc || Form;

exports.Form = FormWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Form/FormState.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Form/FormState.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

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

exports.FormState = FormState;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Form/StyledForm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Form/StyledForm.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledForm = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledForm = exports.StyledForm = _styledComponents2.default.form.withConfig({
  displayName: 'StyledForm',
  componentId: 'rr1xyd-0'
})(['width:100%;']);

/***/ }),

/***/ "./node_modules/grommet-controls/components/Form/doc.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Form/doc.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _propTypes = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A Form with built-in validation.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Form } from \'grommet-controls\';\n\n      <Form onSubmit={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: _propTypes.a11yTitlePropType,
    basis: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4', 'auto']).description('A fixed or relative size along the form\'s container main axis.'),
    focusFirstChild: _reactDesc.PropTypes.bool.description('Whether to focus the first form control on mounting.').defaultValue('true'),
    object: _reactDesc.PropTypes.object.description('Initial values of the form data object.'),
    onSubmit: _reactDesc.PropTypes.func.description('A function called when the user successfully submits the form.'),
    onChange: _reactDesc.PropTypes.func.description('A function invoked when any of the values in the form are changing.'),
    onSubmitError: _reactDesc.PropTypes.func.description('A function invoked when an error occured during submitting.'),
    onInvalidForm: _reactDesc.PropTypes.func.description('A function invoked on every change when the form is invalid.'),
    tag: _reactDesc.PropTypes.string.description('The DOM tag to use for the form.').defaultValue('form')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Form/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Form/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Form = __webpack_require__(/*! ./Form */ "./node_modules/grommet-controls/components/Form/Form.js");

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _Form.Form;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Header/Header.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Header/Header.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Header = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledHeader = __webpack_require__(/*! ./StyledHeader */ "./node_modules/grommet-controls/components/Header/StyledHeader.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = function Header(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _StyledHeader.StyledHeader,
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
  HeaderDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Header/doc.js").default(Header); // eslint-disable-line global-require
}

var HeaderWrapper = HeaderDoc || Header;

exports.Header = HeaderWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Header/StyledHeader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Header/StyledHeader.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledHeader = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledHeader = exports.StyledHeader = (0, _styledComponents2.default)(_grommet.Box).withConfig({
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

/***/ "./node_modules/grommet-controls/components/Header/doc.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Header/doc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A page header component.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { Header } from \'grommet-controls\';\n\n      <Header>\n        ...\n      </Header>  \n    ');

  DocumentedElement.propTypes = {
    position: _reactDesc.PropTypes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']).description('Position property for the header element').defaultValue('relative'),
    zIndex: _reactDesc.PropTypes.number.description('z-index for the header.').defaultValue(10)
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Header/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Header/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Header = __webpack_require__(/*! ./Header */ "./node_modules/grommet-controls/components/Header/Header.js");

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _Header.Header;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/IconButton/IconButton.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/IconButton/IconButton.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.IconButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledIconButton = __webpack_require__(/*! ./StyledIconButton */ "./node_modules/grommet-controls/components/IconButton/StyledIconButton.js");

var _StyledIconButton2 = _interopRequireDefault(_StyledIconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(_StyledIconButton2.default, _extends({}, this.props, {
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
}(_react2.default.Component);

var IconButtonDoc = void 0;
if (true) {
  IconButtonDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/IconButton/doc.js").default(IconButton); // eslint-disable-line global-require
}

var IconButtonWrapper = IconButtonDoc || IconButton;

exports.IconButton = IconButtonWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/IconButton/StyledIconButton.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/IconButton/StyledIconButton.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _styledComponents2.default)(_grommet.Button).withConfig({
  displayName: 'StyledIconButton',
  componentId: 'jncvnb-0'
})(['border-radius:50%;']);

/***/ }),

/***/ "./node_modules/grommet-controls/components/IconButton/doc.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/IconButton/doc.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A Button with a hover effect, all properties of Button apply.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { IconButton } from \'grommet-controls\';\n\n      <IconButton icon=\'...\' />\n    ');

  DocumentedElement.propTypes = {
    icon: _reactDesc.PropTypes.element.description('Icon element to place in the button.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/IconButton/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/IconButton/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _IconButton = __webpack_require__(/*! ./IconButton */ "./node_modules/grommet-controls/components/IconButton/IconButton.js");

Object.defineProperty(exports, 'IconButton', {
  enumerable: true,
  get: function get() {
    return _IconButton.IconButton;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/ImageStamp/ImageStamp.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ImageStamp/ImageStamp.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ImageStamp = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledImageStamp = __webpack_require__(/*! ./StyledImageStamp */ "./node_modules/grommet-controls/components/ImageStamp/StyledImageStamp.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return this.props.src ? _react2.default.createElement(_StyledImageStamp.StyledImageStamp, _extends({ size: SIZE_MAP[size] }, rest)) : null;
  };

  return ImageStamp;
}(_react.Component);

ImageStamp.defaultProps = {
  size: 'medium'
};


var ImageStampDoc = void 0;
if (true) {
  ImageStampDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/ImageStamp/doc.js").default(ImageStamp); // eslint-disable-line global-require
}

var ImageStampWrapper = ImageStampDoc || ImageStamp;

exports.ImageStamp = ImageStampWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/ImageStamp/StyledImageStamp.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ImageStamp/StyledImageStamp.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledImageStamp = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(/*! grommet/utils/styles */ "./node_modules/grommet/utils/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROUND_MAP = {
  'full': '100%'
};

var StyledImageStamp = exports.StyledImageStamp = _styledComponents2.default.img.withConfig({
  displayName: 'StyledImageStamp',
  componentId: 'sc-14qw7ay-0'
})(['', ';', ' ', ' overflow:hidden;object-fit:cover;border-radius:', ';-webkit-border-radius:', ';-moz-border-radius:', ';'], function (props) {
  return !props.plain && _styles.controlBorderStyle;
}, function (props) {
  return (!props.contain || props.contain === 'width') && props.size && (0, _styles.edgeStyle)('width', props.size, props.responsive, undefined, props.theme);
}, function (props) {
  return (!props.contain || props.contain === 'height') && props.size && (0, _styles.edgeStyle)('height', props.size, props.responsive, undefined, props.theme);
}, function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
}, function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
}, function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/ImageStamp/doc.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ImageStamp/doc.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A small image stamp used for avatars or image thumbnails.\n      ').usage('\n      $ npm install grommet-controls\n \n      import { ImageStamp } from \'grommet-controls\';\n\n      <ImageStamp src=\'...\' />\n    ');

  DocumentedElement.propTypes = {
    contain: _reactDesc.PropTypes.oneOf(['width', 'height']).description('Adjust width/heigh if image is not square. By default, the image is cut off square').defaultValue(null),
    round: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners of the stamp.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).description('The size of the image stamp.').defaultValue('medium'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain image with no border.').defaultValue(false)
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/ImageStamp/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/ImageStamp/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ImageStamp = __webpack_require__(/*! ./ImageStamp */ "./node_modules/grommet-controls/components/ImageStamp/ImageStamp.js");

Object.defineProperty(exports, 'ImageStamp', {
  enumerable: true,
  get: function get() {
    return _ImageStamp.ImageStamp;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/MaskedInput/MaskedInput.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/MaskedInput/MaskedInput.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MaskedInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _textMaskCore = __webpack_require__(/*! text-mask-core */ "./node_modules/text-mask-core/dist/textMaskCore.js");

var _textMaskAddons = __webpack_require__(/*! text-mask-addons */ "./node_modules/text-mask-addons/dist/textMaskAddons.js");

var _DropInput = __webpack_require__(/*! ../DropInput */ "./node_modules/grommet-controls/components/DropInput/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/grommet-controls/components/MaskedInput/utils.js");

var _minMaxNumberPipe = __webpack_require__(/*! ./minMaxNumberPipe */ "./node_modules/grommet-controls/components/MaskedInput/minMaxNumberPipe.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      this.textMaskInputElement = (0, _textMaskCore.createTextMaskInputElement)(_extends({
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
      var conformed = (0, _utils.transformMaskedValue)(value, mask, this.props);
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

    return _react2.default.createElement(_DropInput.DropInput, _extends({
      ref: function ref(_ref) {
        _this2.inputControlRef = _ref && (0, _reactDom.findDOMNode)(_ref).getElementsByTagName('input')[0];
      },
      value: this.maskedValue(value),
      defaultValue: this.maskedValue(defaultValue),
      onInput: this.onInput
    }, rest));
  };

  return MaskedInput;
}(_react.Component);

MaskedInput.defaultProps = {
  type: 'text',
  guide: true,
  showMask: false,
  placeholderChar: '\u2000'
};


var MaskedInputDoc = void 0;
if (true) {
  MaskedInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/MaskedInput/doc.js").default(MaskedInput); // eslint-disable-line global-require
}

var MaskedInputWrapper = MaskedInputDoc || MaskedInput;
MaskedInputWrapper.alphabetic = /[A-Z]/i;
MaskedInputWrapper.placeholderChars = {
  whitespace: '\u2000',
  underscore: '_'
};
MaskedInputWrapper.digit = /\d/;
MaskedInputWrapper.createAutoCorrectedDatePipe = _textMaskAddons.createAutoCorrectedDatePipe;
MaskedInputWrapper.emailMask = _textMaskAddons.emailMask;
MaskedInputWrapper.createNumberMask = _textMaskAddons.createNumberMask;
MaskedInputWrapper.createMinMaxInputPipe = _minMaxNumberPipe.createMinMaxInputPipe;
MaskedInputWrapper.maskedNumberValue = _minMaxNumberPipe.maskedNumberValue;

exports.MaskedInput = MaskedInputWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/MaskedInput/doc.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/MaskedInput/doc.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _propTypes = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A masked Input control with an optional drop button with the specified \'dropContent\'.').usage('\n    $ npm install grommet-controls\n\n    import { MakedInput } from \'grommet-controls\';\n\n    <MakedInput mask={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: _propTypes.a11yTitlePropType,
    a11yDropTitle: _reactDesc.PropTypes.string.description('Custom drop button title to be used by screen readers.'),
    placeholder: _reactDesc.PropTypes.string.description('Placeholder text to use when no value is provided.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.number]).description('Value for the field.'),
    id: _reactDesc.PropTypes.string.description('The id attribute of the input.'),
    name: _reactDesc.PropTypes.string.description('The name attribute of the input.'),
    disabled: _reactDesc.PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user enters a new valuu.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether the plain text input should receive a focus outline.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain input with no border or padding.\nOnly use this when the containing context provides sufficient affordance'),
    mask: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.array, _reactDesc.PropTypes.func, _reactDesc.PropTypes.bool, _reactDesc.PropTypes.shape({
      mask: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.array, _reactDesc.PropTypes.func]),
      pipe: _reactDesc.PropTypes.func
    })]).description('An array or a function that defines how the user input is going to be masked.'),
    guide: _reactDesc.PropTypes.bool.description('When masked, a boolean that tells the component whether to be in guide or no guide mode.'),
    pipe: _reactDesc.PropTypes.func.description('When masked, a function that will give you the opportunity to modify the conformed value before it is displayed on the screen.'),
    placeholderChar: _reactDesc.PropTypes.string.description('When masked, represents the fillable spot in the mask.'),
    keepCharPositions: _reactDesc.PropTypes.bool.description('For masked. When true, adding or deleting characters will not affect the positions of existing characters.\n      When false, adding characters causes existing characters to advance. And deleting characters causes existing characters to move back.'),
    showMask: _reactDesc.PropTypes.bool.description('When masked, displays the mask as a placeholder in place of the regular placeholder.'),
    dropContent: _reactDesc.PropTypes.element.description('Content to put inside the Drop.'),
    dropIcon: _reactDesc.PropTypes.element.description('Icon for drop content.'),
    widgets: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      icon: _reactDesc.PropTypes.element.isRequired
    })).description('Additional widgets to be placed next to the input.'),
    onClose: _reactDesc.PropTypes.func.description('Callback for when the drop is closed')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/MaskedInput/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/MaskedInput/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _MaskedInput = __webpack_require__(/*! ./MaskedInput */ "./node_modules/grommet-controls/components/MaskedInput/MaskedInput.js");

Object.defineProperty(exports, 'MaskedInput', {
  enumerable: true,
  get: function get() {
    return _MaskedInput.MaskedInput;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/MaskedInput/minMaxNumberPipe.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/MaskedInput/minMaxNumberPipe.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createMinMaxInputPipe = exports.maskedNumberValue = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/grommet-controls/components/MaskedInput/utils.js");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var maskedNumberValue = exports.maskedNumberValue = function maskedNumberValue(_ref) {
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
          var resolved = (0, _utils.transformMaskedValue)(min, mask, props);
          if (resolved === undefined) {
            return false;
          }
          return { value: resolved };
        }
        if (typeof max === 'number' && value > max) {
          var _resolved = (0, _utils.transformMaskedValue)(max, mask, props);
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
exports.createMinMaxInputPipe = createMinMaxInputPipe;

/***/ }),

/***/ "./node_modules/grommet-controls/components/MaskedInput/utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/MaskedInput/utils.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.transformMaskedValue = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _textMaskCore = __webpack_require__(/*! text-mask-core */ "./node_modules/text-mask-core/dist/textMaskCore.js");

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
var transformMaskedValue = exports.transformMaskedValue = function transformMaskedValue(value, providedMask) {
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
  var conformed = (0, _textMaskCore.conformToMask)(safeValue, mask, conformToMaskConfig);
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

/***/ "./node_modules/grommet-controls/components/MaskedInputField/MaskedInputField.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/MaskedInputField/MaskedInputField.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MaskedInputField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../MaskedInput/index */ "./node_modules/grommet-controls/components/MaskedInput/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaskedInputField = exports.MaskedInputField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_index.MaskedInput, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/MaskedInputField/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/MaskedInputField/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _MaskedInputField = __webpack_require__(/*! ./MaskedInputField */ "./node_modules/grommet-controls/components/MaskedInputField/MaskedInputField.js");

Object.defineProperty(exports, 'MaskedInputField', {
  enumerable: true,
  get: function get() {
    return _MaskedInputField.MaskedInputField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Notification/Notification.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Notification/Notification.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Notification = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _Close = __webpack_require__(/*! grommet-icons/icons/Close */ "./node_modules/grommet-icons/icons/Close.js");

var _StatusGood = __webpack_require__(/*! grommet-icons/icons/StatusGood */ "./node_modules/grommet-icons/icons/StatusGood.js");

var _StatusWarning = __webpack_require__(/*! grommet-icons/icons/StatusWarning */ "./node_modules/grommet-icons/icons/StatusWarning.js");

var _StatusCritical = __webpack_require__(/*! grommet-icons/icons/StatusCritical */ "./node_modules/grommet-icons/icons/StatusCritical.js");

var _StatusUnknown = __webpack_require__(/*! grommet-icons/icons/StatusUnknown */ "./node_modules/grommet-icons/icons/StatusUnknown.js");

var _StatusInfo = __webpack_require__(/*! grommet-icons/icons/StatusInfo */ "./node_modules/grommet-icons/icons/StatusInfo.js");

var _StatusDisabled = __webpack_require__(/*! grommet-icons/icons/StatusDisabled */ "./node_modules/grommet-icons/icons/StatusDisabled.js");

var _moment = __webpack_require__(/*! ../../utils/moment */ "./node_modules/grommet-controls/utils/moment.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatusIcons = {
  ok: _StatusGood.StatusGood,
  warning: _StatusWarning.StatusWarning,
  error: _StatusCritical.StatusCritical,
  unknown: _StatusUnknown.StatusUnknown,
  disabled: _StatusDisabled.StatusDisabled,
  info: _StatusInfo.StatusInfo
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
      var closeIcon = closer || _react2.default.createElement(_Close.Close, { size: sizeLevel.size });
      closeBtn = _react2.default.createElement(
        _grommet.Box,
        { pad: pad },
        _react2.default.createElement(
          _grommet.Button,
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
      heading = _react2.default.createElement(
        'strong',
        null,
        heading
      );
    }
    var statusIcon = void 0;
    if (icon) {
      var StatusIcon = StatusIcons[status];
      statusIcon = _react2.default.isValidElement(icon) ? icon : _react2.default.createElement(StatusIcon, { size: sizeLevel.size });
    }
    var progress = void 0;
    if (percentComplete || percentComplete === 0) {
      progress = _react2.default.createElement(
        _grommet.Box,
        { direction: 'row', align: 'center', pad: { between: 'medium' }, style: { whiteSpace: 'nowrap' } },
        _react2.default.createElement(_grommet.Meter, {
          size: sizeLevel.meterSize,
          thickness: 'small',
          values: [{
            label: percentComplete.toFixed(0),
            value: percentComplete,
            color: 'accent-1'
          }]
        }),
        _react2.default.createElement(
          _grommet.Text,
          { size: 'small' },
          ' ' + percentComplete + ' %'
        )
      );
    }
    var timeStamp = void 0;
    if (timestamp) {
      timeStamp = (0, _moment.longDate)(timestamp, locale);
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
    var content = _react2.default.createElement(
      _grommet.Box,
      { flex: 'grow', pad: pad },
      _react2.default.createElement(
        _grommet.Heading,
        { level: sizeLevel.level, margin: margin, style: { maxWidth: '100%' } },
        _react2.default.createElement(
          _grommet.Box,
          { direction: 'row', align: 'center', gap: 'small' },
          first,
          second
        )
      ),
      _react2.default.createElement(
        _grommet.Text,
        { size: sizeLevel.size },
        state
      ),
      _react2.default.createElement(
        _grommet.Text,
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
    return _react2.default.createElement(
      _grommet.Box,
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
}(_react.Component);

Notification.contextTypes = {
  grommet: _propTypes2.default.object
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
  NotificationDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Notification/doc.js").default(Notification); // eslint-disable-line global-require
}

var NotificationWrapper = NotificationDoc || Notification;

exports.Notification = NotificationWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Notification/doc.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Notification/doc.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _propTypes = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A Box to display notification messages.').usage('$ npm install grommet-controls\n \n    import { Notification } from \'grommet-controls\';\n\n    <Notification message={...} onClose={...} />');
  DocumentedElement.propTypes = {
    a11yTitle: _propTypes.a11yTitlePropType,
    status: _reactDesc.PropTypes.oneOf(['ok', 'info', 'warning', 'error', 'unknown', 'disabled']).description('Status color.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']).description('The font size of the notification message.'),

    state: _reactDesc.PropTypes.string.description('State label.'),
    strong: _reactDesc.PropTypes.bool.description('Heading bold state.'),
    message: _reactDesc.PropTypes.string.description('Message to be displayed.'),
    icon: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.element]).description('Notification icon.'),
    closer: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.element]).description('Closer icon.'),
    onClose: _reactDesc.PropTypes.func.description('Function that will be called when the user closes the notification.'),
    percentComplete: _reactDesc.PropTypes.number.description('Percent complete Meter for task notifications.'),
    timestamp: _reactDesc.PropTypes.object.description('timestamp for the notification (Date).'),
    locale: _reactDesc.PropTypes.string.description('The locale to use for timestamp, if provided.'),
    reverse: _reactDesc.PropTypes.bool.description('If true, reverse the order of the Notification elements.')
  };
  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Notification/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Notification/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Notification = __webpack_require__(/*! ./Notification */ "./node_modules/grommet-controls/components/Notification/Notification.js");

Object.defineProperty(exports, 'Notification', {
  enumerable: true,
  get: function get() {
    return _Notification.Notification;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/NumberInput/NumberInput.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/NumberInput/NumberInput.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NumberInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Add = __webpack_require__(/*! grommet-icons/icons/Add */ "./node_modules/grommet-icons/icons/Add.js");

var _Subtract = __webpack_require__(/*! grommet-icons/icons/Subtract */ "./node_modules/grommet-icons/icons/Subtract.js");

var _MaskedInput = __webpack_require__(/*! ../MaskedInput */ "./node_modules/grommet-controls/components/MaskedInput/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _MaskedInput.MaskedInput.maskedNumberValue({
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
    var mask = userMask || _MaskedInput.MaskedInput.createNumberMask({
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
    var pipe = userPipe || _MaskedInput.MaskedInput.createMinMaxInputPipe(_extends({
      mask: mask, prefix: prefix, suffix: suffix, thousandsSeparatorSymbol: thousandsSeparatorSymbol, decimalSymbol: decimalSymbol, min: min, max: max }, rest));
    return _react2.default.createElement(_MaskedInput.MaskedInput, _extends({
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
}(_react.Component);

NumberInput.defaultProps = {
  emptyValue: '',
  step: 1,
  addIcon: _react2.default.createElement(_Add.Add, null),
  subtractIcon: _react2.default.createElement(_Subtract.Subtract, null),
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
  NumberInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/NumberInput/doc.js").default(NumberInput); // eslint-disable-line global-require
}

var NumberInputWrapper = NumberInputDoc || NumberInput;

exports.NumberInput = NumberInputWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/NumberInput/doc.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/NumberInput/doc.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A masked number input, with widgets to increment/decrement the value.\n      Additionally, all properties of MaskedInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { NumberInput } from \'grommet-controls\';\n\n      <NumberInput value={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yIncrement: _reactDesc.PropTypes.string.description('Custom increment button title to be used by screen readers.'),
    a11yDecrement: _reactDesc.PropTypes.string.description('Custom increment button title to be used by screen readers.'),
    decimals: _reactDesc.PropTypes.number.description('How many digits to allow after the decimal.').defaultValue('null'),
    min: _reactDesc.PropTypes.number.description('Minimum value.'),
    max: _reactDesc.PropTypes.number.description('Maximum value.'),
    step: _reactDesc.PropTypes.number.description('Steps to increase and decrease by.').defaultValue('1'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.number]).description('The numeric value'),
    disabled: _reactDesc.PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    addIcon: _reactDesc.PropTypes.element.description('Icon for button to increment by step.'),
    subtractIcon: _reactDesc.PropTypes.element.description('Icon for button to subtract a step.'),
    prefix: _reactDesc.PropTypes.string.description('What to display in front of the value.'),
    suffix: _reactDesc.PropTypes.string.description('What to display at the end of the value.'),
    thousandsSeparatorSymbol: _reactDesc.PropTypes.string.description('A character with which to separate thousands.'),
    integers: _reactDesc.PropTypes.number.description('Limit on the length of the integer number.').defaultValue('unlimited')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/NumberInput/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/NumberInput/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _NumberInput = __webpack_require__(/*! ./NumberInput */ "./node_modules/grommet-controls/components/NumberInput/NumberInput.js");

Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function get() {
    return _NumberInput.NumberInput;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/NumberInputField/NumberInputField.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/NumberInputField/NumberInputField.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NumberInputField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../NumberInput/index */ "./node_modules/grommet-controls/components/NumberInput/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberInputField = exports.NumberInputField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_index.NumberInput, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/NumberInputField/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/NumberInputField/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _NumberInputField = __webpack_require__(/*! ./NumberInputField */ "./node_modules/grommet-controls/components/NumberInputField/NumberInputField.js");

Object.defineProperty(exports, 'NumberInputField', {
  enumerable: true,
  get: function get() {
    return _NumberInputField.NumberInputField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/DOM.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/DOM.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasKeyboardChildren = exports.focusPrevElement = exports.focusNextElement = exports.focusChildByIndex = exports.focusedChildIndex = exports.focusableChildren = undefined;

var _DOM = __webpack_require__(/*! grommet/utils/DOM */ "./node_modules/grommet/utils/DOM.js");

var focusableChildren = exports.focusableChildren = function focusableChildren(parent) {
  var list = [];
  if (parent && parent.childNodes) {
    parent.childNodes.forEach(function (node) {
      if (node.tagName) {
        list.push(node);
        if ((0, _DOM.filterByFocusable)([node]).length !== 1) {
          list = list.concat(focusableChildren(node));
        }
      }
    });
  }
  return (0, _DOM.filterByFocusable)(list);
};

var focusedChildIndex = exports.focusedChildIndex = function focusedChildIndex(parent) {
  var focusable = focusableChildren(parent);
  var focused = document.activeElement;
  for (var i = 0; i < focusable.length; i += 1) {
    if (focusable[i] === focused) {
      return i;
    }
  }
  return 0;
};

var focusChildByIndex = exports.focusChildByIndex = function focusChildByIndex(parent, index) {
  var focusable = focusableChildren(parent);
  var focusIndex = Math.min(index, focusable.length - 1);
  if (focusIndex >= 0) {
    focusable[focusIndex].focus();
    return true;
  }
  return false;
};

var focusNextElement = exports.focusNextElement = function focusNextElement(parent) {
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

var focusPrevElement = exports.focusPrevElement = function focusPrevElement(parent) {
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

var hasKeyboardChildren = exports.hasKeyboardChildren = function hasKeyboardChildren(element) {
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

/***/ "./node_modules/grommet-controls/components/PagingTable/PagingTable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/PagingTable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PagingTable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _StyledPagingTable = __webpack_require__(/*! ./StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    _grommet.ResponsiveContext.Consumer,
    null,
    function (size) {
      return _react2.default.createElement(
        _styledComponents.ThemeContext.Consumer,
        null,
        function (theme) {
          return _react2.default.createElement(_StyledPagingTable.StyledPagingTable, _extends({
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
  PagingTableDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/PagingTable/doc.js").default(PagingTable); // eslint-disable-line global-require
}

var PagingTableWrapper = PagingTableDoc || PagingTable;

exports.PagingTable = PagingTableWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledPagingTable = exports.StyledTfootComponent = exports.StyledExpander = exports.StyledTdComponent = exports.StyledTrComponent = exports.StyledTrGroupComponent = exports.StyledThComponent = exports.StyledResizerComponent = exports.StyledTHeadComponent = exports.StyledTableBodyComponent = exports.StyledTableComponent = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _colors = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");

var _ReactTable = __webpack_require__(/*! ./react-table/ReactTable */ "./node_modules/grommet-controls/components/PagingTable/react-table/ReactTable.js");

var _ReactTable2 = _interopRequireDefault(_ReactTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledTableComponent = exports.StyledTableComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledTableComponent',
  componentId: 'sc-1wbkk7c-0'
})(['align-items:stretch;width:100%;border-collapse:collapse;overflow:auto']);

var StyledTableBodyComponent = exports.StyledTableBodyComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledTableBodyComponent',
  componentId: 'sc-1wbkk7c-1'
})(['']);

var StyledTHeadComponent = exports.StyledTHeadComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledTHeadComponent',
  componentId: 'sc-1wbkk7c-2'
})(['-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;']);

var StyledResizerComponent = exports.StyledResizerComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledResizerComponent',
  componentId: 'sc-1wbkk7c-3'
})(['display:inline-block;position:absolute;width:36px;top:0;bottom:0;right:-18px;cursor:col-resize;z-index:10;']);

var StyledThComponent = exports.StyledThComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
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

var StyledTrGroupComponent = exports.StyledTrGroupComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledTrGroupComponent',
  componentId: 'sc-1wbkk7c-5'
})(['align-items:stretch;']);

var StyledTrComponent = exports.StyledTrComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledTrComponent',
  componentId: 'sc-1wbkk7c-6'
})(['', ''], function (props) {
  return props.hover && '\n    &:hover {\n      background-color: ' + (0, _colors.normalizeColor)(props.hover.background || props.theme.global.hover.background, props.theme) + ';\n      color: ' + (0, _colors.normalizeColor)(props.hover.color || props.theme.global.hover.color, props.theme) + ';\n    }  \n  ';
});

var StyledTdComponent = exports.StyledTdComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledTdComponent',
  componentId: 'sc-1wbkk7c-7'
})(['text-overflow:ellipsis;overflow:hidden;display:block;white-space:nowrap;', ''], function (props) {
  return props.hidden && '\n    width: 0 !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    border: 0 !important;\n    opacity: 0 !important\n  ';
});

var StyledExpander = exports.StyledExpander = (0, _styledComponents2.default)(_grommet.Button).withConfig({
  displayName: 'StyledPagingTable__StyledExpander',
  componentId: 'sc-1wbkk7c-8'
})(['position:relative;margin:0;padding:0;left:-5px;color:transparent;cursor:pointer;']);

var StyledTfootComponent = exports.StyledTfootComponent = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledPagingTable__StyledTfootComponent',
  componentId: 'sc-1wbkk7c-9'
})(['']);

var StyledPagingTable = exports.StyledPagingTable = (0, _styledComponents2.default)(_ReactTable2.default).withConfig({
  displayName: 'StyledPagingTable',
  componentId: 'sc-1wbkk7c-10'
})(['max-width:100%;width:100%;overflow:hidden;']);

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/CellTextComponent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/CellTextComponent.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.collectTextProps = exports.extractTextProps = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.extractTextProps = extractTextProps;
var collectTextProps = exports.collectTextProps = function collectTextProps(_ref2) {
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

exports.default = function (_ref3) {
  var value = _ref3.value,
      rest = _objectWithoutProperties(_ref3, ['value']);

  return _react2.default.createElement(
    _grommet.Text,
    collectTextProps(rest),
    value
  );
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/ExpanderComponent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/ExpanderComponent.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Add = __webpack_require__(/*! grommet-icons/icons/Add */ "./node_modules/grommet-icons/icons/Add.js");

var _Subtract = __webpack_require__(/*! grommet-icons/icons/Subtract */ "./node_modules/grommet-icons/icons/Subtract.js");

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var isExpanded = _ref.isExpanded,
      children = _ref.children,
      expanderProps = _ref.expanderProps;

  var props = _extends({
    CloseIcon: _react2.default.createElement(_Subtract.Subtract, null),
    OpenIcon: _react2.default.createElement(_Add.Add, null),
    tabIndex: '0',
    onClick: function onClick() {}
  }, expanderProps);

  var OpenIcon = props.OpenIcon,
      CloseIcon = props.CloseIcon,
      rest = _objectWithoutProperties(props, ['OpenIcon', 'CloseIcon']);

  return _react2.default.createElement(
    _StyledPagingTable.StyledExpander,
    _extends({
      a11yTitle: 'Press Enter to expand this row for more information',
      icon: isExpanded ? CloseIcon : OpenIcon
    }, rest),
    children
  );
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/FilterComponent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/FilterComponent.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var filter = _ref.filter,
      _onChange = _ref.onChange,
      column = _ref.column,
      rest = _objectWithoutProperties(_ref, ['filter', 'onChange', 'column']);

  var props = _extends({ size: 'medium' }, rest);
  return _react2.default.createElement(_grommet.TextInput, _extends({
    'aria-label': 'Filter data by ' + (typeof column.Header === 'string' ? column.Header : column.id),
    value: filter ? filter.value : '',
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  }, props));
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/LoadingComponent.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/LoadingComponent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _Spinning = __webpack_require__(/*! ../../Spinning */ "./node_modules/grommet-controls/components/Spinning/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var loading = _ref.loading;
  return _react2.default.createElement(
    'div',
    null,
    loading && _react2.default.createElement(
      _grommet.Box,
      { align: 'center', full: 'horizontal', pad: { vertical: 'large' } },
      _react2.default.createElement(_Spinning.Spinning, null)
    )
  );
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/NoDataComponent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/NoDataComponent.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _grommet.Box,
    _extends({}, rest, { align: 'center', pad: 'small' }),
    children
  );
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/Pagination.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/Pagination.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _Previous = __webpack_require__(/*! grommet-icons/icons/Previous */ "./node_modules/grommet-icons/icons/Previous.js");

var _Next = __webpack_require__(/*! grommet-icons/icons/Next */ "./node_modules/grommet-icons/icons/Next.js");

var _NumberInput = __webpack_require__(/*! ../../NumberInput */ "./node_modules/grommet-controls/components/NumberInput/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return _react2.default.createElement(_grommet.Button, _extends({
    icon: _react2.default.createElement(Icon, null),
    disabled: disabled,
    onClick: onClick,
    label: label,
    plain: true
  }, other));
};

var StyledButton = (0, _styledComponents2.default)(defaultButton).withConfig({
  displayName: 'Pagination__StyledButton',
  componentId: 'bjf6y1-0'
})(['width:150px;padding:10px 0;']);

var StyledPageInput = (0, _styledComponents2.default)(_NumberInput.NumberInput).withConfig({
  displayName: 'Pagination__StyledPageInput',
  componentId: 'bjf6y1-1'
})(['max-width:180px;']);

var StyledSelect = (0, _styledComponents2.default)(_grommet.Select).withConfig({
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
      pageJump = _react2.default.createElement(StyledPageInput, {
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
      pageJump = _react2.default.createElement(
        _grommet.Text,
        null,
        page + 1
      );
    }
    return _react2.default.createElement(
      _grommet.Box,
      { direction: 'row', align: 'center', gap: 'small' },
      _react2.default.createElement(
        _grommet.Text,
        null,
        pageText + ' '
      ),
      pageJump,
      _react2.default.createElement(
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
      return _react2.default.createElement(
        _grommet.Box,
        { direction: 'row' },
        _react2.default.createElement(StyledSelect, {
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

    return _react2.default.createElement(
      _grommet.Box,
      { direction: 'row' },
      _react2.default.createElement(PreviousComponent, {
        'aria-label': 'Move to previous page',
        Icon: _Previous.Previous,
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

    return _react2.default.createElement(
      _grommet.Box,
      { direction: 'row' },
      _react2.default.createElement(NextComponent, {
        'aria-label': 'Move to next page',
        reverse: true,
        Icon: _Next.Next,
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
    return _react2.default.createElement(
      _grommet.Box,
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
}(_react.Component);

exports.default = ReactTablePagination;

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/ResizerComponent.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/ResizerComponent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResizerComponent = function ResizerComponent(props) {
  return _react2.default.createElement(_StyledPagingTable.StyledResizerComponent, props);
};

exports.default = ResizerComponent;

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/TableComponent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/TableComponent.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(_StyledPagingTable.StyledTableComponent, _extends({
      role: 'grid'
    }, this.props));
  };

  return TableComponent;
}(_react.Component);

exports.default = TableComponent;

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/TbodyComponent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/TbodyComponent.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_StyledPagingTable.StyledTableBodyComponent, props);
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/TdComponent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/TdComponent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

var _CellTextComponent = __webpack_require__(/*! ./CellTextComponent */ "./node_modules/grommet-controls/components/PagingTable/components/CellTextComponent.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var style = props.style,
      rest = _objectWithoutProperties(props, ['style']);

  var boxProps = _extends({ pad: 'small' }, (0, _CellTextComponent.extractTextProps)(rest));
  return _react2.default.createElement(
    _StyledPagingTable.StyledTdComponent,
    { style: style, role: 'gridcell', align: 'center' },
    _react2.default.createElement(
      _grommet.Box,
      _extends({ fill: true }, boxProps),
      children
    )
  );
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/TfootComponent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/TfootComponent.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_StyledPagingTable.StyledTfootComponent, props);
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/ThComponent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/ThComponent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _Blank = __webpack_require__(/*! grommet-icons/icons/Blank */ "./node_modules/grommet-icons/icons/Blank.js");

var _LinkDown = __webpack_require__(/*! grommet-icons/icons/LinkDown */ "./node_modules/grommet-icons/icons/LinkDown.js");

var _LinkUp = __webpack_require__(/*! grommet-icons/icons/LinkUp */ "./node_modules/grommet-icons/icons/LinkUp.js");

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
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

  var childRendered = _react2.default.createElement(CellTextComponent, _extends({}, rest, { value: children }));
  var content = void 0;
  if (sortable) {
    var sortAsc = sort === '-sort-asc';
    var sortDesc = sort === '-sort-desc';
    var SortIcon = _Blank.Blank;
    if (sortAsc || sortDesc) {
      SortIcon = sortAsc ? _LinkUp.LinkUp : _LinkDown.LinkDown;
    }
    content = _react2.default.createElement(
      _grommet.Box,
      { direction: 'row', gap: 'xsmall', align: 'center' },
      childRendered,
      _react2.default.createElement(
        _grommet.Button,
        { onClick: function onClick(e) {
            return toggleSort && toggleSort(e);
          } },
        _react2.default.createElement(SortIcon, null)
      )
    );
  } else {
    content = childRendered;
  }

  var boxProps = _extends({ pad: 'xsmall' }, rest);
  return (

    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    _react2.default.createElement(
      _StyledPagingTable.StyledThComponent,
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
      _react2.default.createElement(
        _grommet.Box,
        _extends({}, boxProps, { fill: true }),
        content
      )
    )
  );
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/TheadComponent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/TheadComponent.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_StyledPagingTable.StyledTHeadComponent, props);
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/TrComponent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/TrComponent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _DOM = __webpack_require__(/*! ../DOM */ "./node_modules/grommet-controls/components/PagingTable/DOM.js");

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      var activeChild = (0, _DOM.focusedChildIndex)(_this.container);
      return selectRow(true, activeChild);
    }, _this.selectPrevRow = function () {
      var selectRow = _this.props.selectRow;

      var activeChild = (0, _DOM.focusedChildIndex)(_this.container);
      return selectRow(false, activeChild);
    }, _this.selectNextChild = function () {
      if ((0, _DOM.focusNextElement)(_this.container)) {
        return true;
      }
      return _this.selectNextRow();
    }, _this.selectPrevChild = function () {
      if ((0, _DOM.focusPrevElement)(_this.container)) {
        return true;
      }
      return _this.selectPrevRow();
    }, _this.selectFirstChild = function (activeIndex) {
      return (0, _DOM.focusChildByIndex)(_this.container, activeIndex);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TrComponent.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _grommet.Keyboard,
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
          if (!(0, _DOM.hasKeyboardChildren)(document.activeElement)) {
            e.preventDefault();
            _this2.selectPrevChild();
          }
        },
        onRight: function onRight(e) {
          if (!(0, _DOM.hasKeyboardChildren)(document.activeElement)) {
            e.preventDefault();
            _this2.selectNextChild();
          }
        },
        onUp: function onUp(e) {
          if (!(0, _DOM.hasKeyboardChildren)(document.activeElement)) {
            e.preventDefault();
            _this2.selectPrevRow();
          }
        },
        onDown: function onDown(e) {
          if (!(0, _DOM.hasKeyboardChildren)(document.activeElement)) {
            e.preventDefault();
            _this2.selectNextRow();
          }
        }
      },
      _react2.default.createElement(_StyledPagingTable.StyledTrComponent, _extends({
        direction: 'row',
        role: 'row',
        ref: function ref(el) {
          _this2.container = (0, _reactDom.findDOMNode)(el);
        }
      }, this.props))
    );
  };

  return TrComponent;
}(_react.Component);

exports.default = TrComponent;

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/components/TrGroupComponent.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/components/TrGroupComponent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _StyledPagingTable = __webpack_require__(/*! ../StyledPagingTable */ "./node_modules/grommet-controls/components/PagingTable/StyledPagingTable.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_StyledPagingTable.StyledTrGroupComponent, _extends({ role: 'rowgroup' }, props));
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/doc.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/doc.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A Grommet 2 table component with pagination, filtering, footer, child rows and grouping. Derived from https://github.com/react-tools/react-table. ').usage('\n    $ npm install grommet-controls\n\n    import { PagingTable } from \'grommet-controls\';\n\n    <PagingTable columns={...} data={...} />\n');

  DocumentedElement.propTypes = {
    decorations: _reactDesc.PropTypes.shape({
      table: _reactDesc.PropTypes.object.description('Table styling, all **`<Box />`** properties are valid.'),
      header: _reactDesc.PropTypes.object.description('Header cell styling, all **`<Box />`** properties are valid'),
      headerGroup: _reactDesc.PropTypes.object.description('Grouped columns header styling, all **`<Box />`** properties are valid.'),
      filter: _reactDesc.PropTypes.object.description('Filter row styling, all **`<Box />`** properties are valid.'),
      filterInput: _reactDesc.PropTypes.object.description('Filter input control styling, all **`<TextInput />`** properties are valid.'),
      body: _reactDesc.PropTypes.object.description('Body styling, all **`<Box />`** properties are valid.'),
      row: _reactDesc.PropTypes.object.description('Row of data styling, all **`<Box />`** properties are valid.'),
      rowOdd: _reactDesc.PropTypes.object.description('Odd row for striped styling, all **`<Box />`** properties are valid.'),
      rowEven: _reactDesc.PropTypes.object.description('Even row for striped styling, all **`<Box />`** properties are valid.'),
      cell: _reactDesc.PropTypes.object.description('Cell of data styling, all **`<Box />`** properties are valid.'),
      footer: _reactDesc.PropTypes.object.description('Footer row styling, all **`<Box />`** properties are valid.'),
      pagination: _reactDesc.PropTypes.object.description('Pagination box styling, all **`<Box />`** properties are valid.'),
      expander: _reactDesc.PropTypes.object.description('Expander button styling, all **`<Button />`** properties are valid, as well as icons OpenIcon and CloseIcon.')
    }).description('Visual settings of the various table elements. Where applicable, those settings can be overriden at the column level.'),
    columns: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      Cell: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description('Used to render a standard cell, defaults to the accessed value.'),
      Header: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description('Used to render the header of a column or column group.'),
      Footer: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.string, _reactDesc.PropTypes.func]),
      Aggregated: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.string, _reactDesc.PropTypes.func]),
      Pivot: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.string, _reactDesc.PropTypes.func]),
      PivotValue: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.string, _reactDesc.PropTypes.func]),
      Expander: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.string, _reactDesc.PropTypes.func]),
      Filter: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.element, _reactDesc.PropTypes.func]),

      // All Columns
      accessor: _reactDesc.PropTypes.string,
      decorations: _reactDesc.PropTypes.object,
      sortable: _reactDesc.PropTypes.bool, // use table default
      resizable: _reactDesc.PropTypes.bool, // use table default
      filterable: _reactDesc.PropTypes.bool, // use table default
      show: _reactDesc.PropTypes.bool,
      minWidth: _reactDesc.PropTypes.number,

      // Cells only
      getProps: _reactDesc.PropTypes.func,

      // Pivot only
      aggregate: _reactDesc.PropTypes.func,

      // Headers only
      getHeaderProps: _reactDesc.PropTypes.func,

      // Footers only
      getFooterProps: _reactDesc.PropTypes.object,
      filterMethod: _reactDesc.PropTypes.func,
      filterAll: _reactDesc.PropTypes.bool,
      sortMethod: _reactDesc.PropTypes.func
    })).isRequired.description('Array of column descriptors.'),
    data: _reactDesc.PropTypes.array.description('Array of data objects.').isRequired,
    defaultPageSize: _reactDesc.PropTypes.number.description('Default page size.').defaultValue(20),
    defaultSorted: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      id: _reactDesc.PropTypes.string,
      desc: _reactDesc.PropTypes.bool
    })).description('Array of default sorted columns and their sort order.'),
    onFetchData: _reactDesc.PropTypes.func.description('If specified, a function responsible for loading the data.'),
    filterable: _reactDesc.PropTypes.bool.description('Wheter to display a filtering row.').defaultValue(false),
    loading: _reactDesc.PropTypes.bool.description('Wheter to display the loading indicator.').defaultValue(false),
    manual: _reactDesc.PropTypes.bool.description('If true, the data is sorted manually in the onFetchData function.').defaultValue(false),
    pages: _reactDesc.PropTypes.number.description('Number of total pages of data, when loading the data manually.'),
    pageSizeOptions: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number.description('Page size')).description('Array of available page size options ([5, 10, 20, 25, 50, 100]).'),
    pivotBy: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.string).description('Array of columns to pivot (group) by.'),
    resizable: _reactDesc.PropTypes.bool.description('Wheter the columns can be resized.').defaultValue(true),
    showPagination: _reactDesc.PropTypes.bool.description('Wheter to display a paging row.').defaultValue(true),
    sortable: _reactDesc.PropTypes.bool.description('Wheter the table headers will allow sorting of the of the data.').defaultValue(true),
    SubComponent: _reactDesc.PropTypes.func.description('If specified, a function with (row as parameter) to render the expading row.').defaultValue(true)
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PagingTable = __webpack_require__(/*! ./PagingTable */ "./node_modules/grommet-controls/components/PagingTable/PagingTable.js");

Object.defineProperty(exports, 'PagingTable', {
  enumerable: true,
  get: function get() {
    return _PagingTable.PagingTable;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/react-table/ReactTable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/react-table/ReactTable.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/grommet-controls/components/PagingTable/react-table/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _defaultProps = __webpack_require__(/*! ./defaultProps */ "./node_modules/grommet-controls/components/PagingTable/react-table/defaultProps.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _DOM = __webpack_require__(/*! ../DOM */ "./node_modules/grommet-controls/components/PagingTable/DOM.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-nested-ternary,no-shadow,no-param-reassign,
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
    var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

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
        if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
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

    var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
      var resizedColumn = resized.find(function (x) {
        return x.id === d.id;
      }) || {};
      return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
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
      var flex = _utils2.default.sum(column.columns.map(function (col) {
        return col.width || resizedValue(col) ? 0 : col.minWidth;
      }));
      var width = _utils2.default.sum(column.columns.map(function (col) {
        return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
      }));
      var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
        return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
      }));

      var theadGroupThProps = getTheadGroupProps(finalState, undefined, column, _this3);
      var columnHeaderProps = column.getHeaderProps(finalState, undefined, column, _this3);

      var rest = _extends({}, theadGroupThProps, columnHeaderProps, {
        CellTextComponent: CellTextComponent
      });
      var flexStyles = {
        flex: flex + ' 0 auto',
        width: _utils2.default.asPx(width),
        maxWidth: _utils2.default.asPx(maxWidth)
      };

      return _react2.default.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          style: flexStyles
        }, rest),
        _utils2.default.normalizeComponent(column.Header, {
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
            (0, _DOM.focusNextElement)(document);
          } else {
            (0, _DOM.focusPrevElement)(document);
          }
        }
      };
    };
    var makeHeaderGroups = function makeHeaderGroups() {
      var theadGroupProps = getTheadGroupProps(finalState, undefined, undefined, _this3);
      var theadGroupTrProps = getTheadGroupTrProps(finalState, undefined, undefined, _this3);
      return _react2.default.createElement(
        TheadComponent,
        _extends({
          style: { minWidth: rowMinWidth + 'px' }
        }, theadGroupProps),
        _react2.default.createElement(
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
      var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
      var theadThProps = getTheadThProps(finalState, undefined, column, _this3);
      var columnHeaderProps = column.getHeaderProps(finalState, undefined, column, _this3);

      var rest = _extends({}, theadThProps, columnHeaderProps, {
        CellTextComponent: CellTextComponent
      });

      var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
      var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
        onMouseDown: function onMouseDown(e) {
          return _this3.resizeColumnStart(e, column, false);
        },
        onTouchStart: function onTouchStart(e) {
          return _this3.resizeColumnStart(e, column, true);
        }
      }, getResizerProps('finalState', undefined, column, _this3))) : null;

      var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

      return _react2.default.createElement(
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
            width: _utils2.default.asPx(width),
            maxWidth: _utils2.default.asPx(maxWidth)
          },
          toggleSort: function toggleSort(e) {
            if (isSortable) _this3.sortColumn(column, multiSort ? e.shiftKey : false);
          }
        }, rest),
        _utils2.default.normalizeComponent(column.Header, {
          data: sortedData,
          column: column
        }),
        resizer
      );
    };

    var makeHeaders = function makeHeaders() {
      var theadProps = getTheadProps(finalState, undefined, undefined, _this3);
      var theadTrProps = getTheadTrProps(finalState, undefined, undefined, _this3);
      return _react2.default.createElement(
        TheadComponent,
        _extends({
          header: true,
          style: {
            minWidth: rowMinWidth + 'px'
          }
        }, theadProps),
        _react2.default.createElement(
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
      var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
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

      var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

      return _react2.default.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          style: {
            flex: width + ' 0 auto',
            width: _utils2.default.asPx(width),
            maxWidth: _utils2.default.asPx(maxWidth)
          }
        }, rest),
        isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, _extends({}, filterInputProps, {
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
      return _react2.default.createElement(
        TheadComponent,
        _extends({
          filters: true,
          style: {
            minWidth: rowMinWidth + 'px'
          }
        }, theadFilterProps),
        _react2.default.createElement(
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

      var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
      var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this3);
      var expanderProps = getExpanderProps(finalState);
      var trProps = getTrProps(row.viewIndex % 2, finalState, rowInfo, undefined, _this3);
      return _react2.default.createElement(
        TrGroupComponent,
        _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
        _react2.default.createElement(
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
            var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
            var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
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
              var newExpanded = _utils2.default.clone(expanded);
              if (isExpanded) {
                newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
              } else {
                newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
              }

              return _this3.setStateWithData({
                expanded: newExpanded
              }, function () {
                return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
              });
            };

            // Default to a standard cell
            if (column.Cell) {
              value = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);
            }
            var cellProps = _extends({}, tdProps, columnProps);
            var resolvedCell = _react2.default.createElement(CellTextComponent, _extends({ value: value }, cellProps));

            // Resolve Renderers
            var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
            var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
            var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
            var DefaultResolvedPivotComponent = PivotComponent || function (props) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(ResolvedExpanderComponent, _extends({}, props, { expanderProps: expanderProps })),
                _react2.default.createElement(ResolvedPivotValueComponent, props)
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
                resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                  value: row[pivotValKey]
                }), row[pivotValKey]);
              } else if (isPreview) {
                // Show the pivot preview
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              } else {
                resolvedCell = null;
              }
            } else if (cellInfo.aggregated) {
              resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
            }

            if (cellInfo.expander) {
              defaultTdProps = expanderTdDefaultProps;
              resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, _extends({}, cellInfo, { expanderProps: expanderProps }), row[pivotValKey]);
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
            return _react2.default.createElement(
              TdComponent
              // eslint-disable-next-line react/no-array-index-key
              ,
              _extends({ key: i2 + '-' + column.id,
                hidden: !show,
                style: {
                  flex: width + ' 0 auto',
                  width: _utils2.default.asPx(width),
                  maxWidth: _utils2.default.asPx(maxWidth)
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
      var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var flex = width;
      var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
      var tdProps = getTdProps(finalState, undefined, column, _this3);
      return _react2.default.createElement(
        TdComponent,
        _extends({
          key: i + '-' + column.id,
          hidden: !show,
          style: {
            flex: flex + ' 0 auto',
            width: _utils2.default.asPx(width),
            maxWidth: _utils2.default.asPx(maxWidth)
          }
        }, tdProps),
        _utils2.default.normalizeComponent(PadRowComponent)
      );
    };

    var makePadRow = function makePadRow(row, i) {
      var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this3);
      var trProps = getTrProps(row.viewIndex % 2, finalState, undefined, undefined, _this3);
      return _react2.default.createElement(
        TrGroupComponent,
        _extends({ key: i }, trGroupProps),
        _react2.default.createElement(
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
      var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
      var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
      var tFootTdProps = getTfootTdProps(finalState, undefined, undefined, _this3);
      var columnProps = column.getProps(finalState, undefined, column, _this3);
      var columnFooterProps = column.getFooterProps(finalState, undefined, column, _this3);

      return _react2.default.createElement(
        TdComponent,
        _extends({
          key: i + '-' + column.id,
          hidden: !show,
          style: {
            flex: width + ' 0 auto',
            width: _utils2.default.asPx(width),
            maxWidth: _utils2.default.asPx(maxWidth)
          }
        }, columnProps, tFootTdProps, columnFooterProps),
        _utils2.default.normalizeComponent(column.Footer, {
          data: sortedData,
          column: column
        })
      );
    };

    var makeColumnFooters = function makeColumnFooters() {
      var tFootProps = getTfootProps(finalState, undefined, undefined, _this3);
      var tFootTrProps = getTfootTrProps(finalState, undefined, undefined, _this3);
      return _react2.default.createElement(
        TfootComponent,
        _extends({
          style: {
            minWidth: rowMinWidth + 'px'
          }
        }, tFootProps),
        _react2.default.createElement(
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
      return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
        pages: pages,
        canPrevious: canPrevious,
        canNext: canNext,
        onPageChange: _this3.onPageChange,
        onPageSizeChange: _this3.onPageSizeChange
      }, paginationProps));
    };

    var makeTable = function makeTable() {
      var pagination = makePagination();
      return _react2.default.createElement(
        'div',
        rootProps,
        showPagination && showPaginationTop ? _react2.default.createElement(
          'div',
          null,
          pagination
        ) : null,
        _react2.default.createElement(
          TableComponent,
          tableProps,
          hasHeaderGroups ? makeHeaderGroups() : null,
          makeHeaders(),
          hasFilters ? makeFilters() : null,
          _react2.default.createElement(
            TbodyComponent,
            _extends({
              style: {
                minWidth: rowMinWidth + 'px'
              }
            }, tBodyProps),
            _react2.default.createElement(LoadingComponent, _extends({
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
        showPagination && showPaginationBottom ? _react2.default.createElement(
          'div',
          null,
          pagination
        ) : null,
        !pageRows.length && !loading && _react2.default.createElement(
          NoDataComponent,
          noDataProps,
          _utils2.default.normalizeComponent(noDataText)
        )
      );
    };

    // childProps are optionally passed to a function-as-a-child
    return children ? children(finalState, makeTable, this) : makeTable();
  };

  return ReactTable;
}(_react.Component);

ReactTable.defaultProps = _defaultProps2.default;

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.getResolvedState = function (props, state) {
    var resolvedState = _extends({}, _utils2.default.compactObject(_this4.state), _utils2.default.compactObject(_this4.props), _utils2.default.compactObject(state), _utils2.default.compactObject(props));
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
          return _utils2.default.get(row, accessorString);
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
          return pivotBy.indexOf(d.id) > -1 ? false : _utils2.default.getFirstDefined(d.show, true);
        });
        return _extends({}, column, {
          columns: visibleSubColumns
        });
      }
      return column;
    });

    visibleColumns = visibleColumns.filter(function (column) {
      return column.columns ? column.columns.length : pivotBy.indexOf(column.id) > -1 ? false : _utils2.default.getFirstDefined(column.show, true);
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
        var groupedRows = Object.entries(_utils2.default.groupBy(rows, keys[i])).map(function (_ref) {
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
    return _utils2.default.getFirstDefined(_this4.state[key], _this4.props[key]);
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

    var sortedData = (_this4.props.orderByMethod || _utils2.default.orderBy)(data, sorted.map(function (sort) {
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
    return _utils2.default.getFirstDefined(_this4.props.minRows, _this4.getStateOrProp('pageSize'));
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


    var newSorted = _utils2.default.clone(sorted || []).map(function (d) {
      d.desc = _utils2.default.isSortingDesc(d);
      return d;
    });
    if (!_utils2.default.isArray(column)) {
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

exports.default = ReactTable;

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/react-table/defaultProps.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/react-table/defaultProps.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.expanderTdDefaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-param-reassign */


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _TableComponent = __webpack_require__(/*! ../components/TableComponent */ "./node_modules/grommet-controls/components/PagingTable/components/TableComponent.js");

var _TableComponent2 = _interopRequireDefault(_TableComponent);

var _Pagination = __webpack_require__(/*! ../components/Pagination */ "./node_modules/grommet-controls/components/PagingTable/components/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _TheadComponent = __webpack_require__(/*! ../components/TheadComponent */ "./node_modules/grommet-controls/components/PagingTable/components/TheadComponent.js");

var _TheadComponent2 = _interopRequireDefault(_TheadComponent);

var _TbodyComponent = __webpack_require__(/*! ../components/TbodyComponent */ "./node_modules/grommet-controls/components/PagingTable/components/TbodyComponent.js");

var _TbodyComponent2 = _interopRequireDefault(_TbodyComponent);

var _TfootComponent = __webpack_require__(/*! ../components/TfootComponent */ "./node_modules/grommet-controls/components/PagingTable/components/TfootComponent.js");

var _TfootComponent2 = _interopRequireDefault(_TfootComponent);

var _NoDataComponent = __webpack_require__(/*! ../components/NoDataComponent */ "./node_modules/grommet-controls/components/PagingTable/components/NoDataComponent.js");

var _NoDataComponent2 = _interopRequireDefault(_NoDataComponent);

var _ResizerComponent = __webpack_require__(/*! ../components/ResizerComponent */ "./node_modules/grommet-controls/components/PagingTable/components/ResizerComponent.js");

var _ResizerComponent2 = _interopRequireDefault(_ResizerComponent);

var _ThComponent = __webpack_require__(/*! ../components/ThComponent */ "./node_modules/grommet-controls/components/PagingTable/components/ThComponent.js");

var _ThComponent2 = _interopRequireDefault(_ThComponent);

var _TdComponent = __webpack_require__(/*! ../components/TdComponent */ "./node_modules/grommet-controls/components/PagingTable/components/TdComponent.js");

var _TdComponent2 = _interopRequireDefault(_TdComponent);

var _CellTextComponent = __webpack_require__(/*! ../components/CellTextComponent */ "./node_modules/grommet-controls/components/PagingTable/components/CellTextComponent.js");

var _CellTextComponent2 = _interopRequireDefault(_CellTextComponent);

var _FilterComponent = __webpack_require__(/*! ../components/FilterComponent */ "./node_modules/grommet-controls/components/PagingTable/components/FilterComponent.js");

var _FilterComponent2 = _interopRequireDefault(_FilterComponent);

var _ExpanderComponent = __webpack_require__(/*! ../components/ExpanderComponent */ "./node_modules/grommet-controls/components/PagingTable/components/ExpanderComponent.js");

var _ExpanderComponent2 = _interopRequireDefault(_ExpanderComponent);

var _LoadingComponent = __webpack_require__(/*! ../components/LoadingComponent */ "./node_modules/grommet-controls/components/PagingTable/components/LoadingComponent.js");

var _LoadingComponent2 = _interopRequireDefault(_LoadingComponent);

var _TrGroupComponent = __webpack_require__(/*! ../components/TrGroupComponent */ "./node_modules/grommet-controls/components/PagingTable/components/TrGroupComponent.js");

var _TrGroupComponent2 = _interopRequireDefault(_TrGroupComponent);

var _TrComponent = __webpack_require__(/*! ../components/TrComponent */ "./node_modules/grommet-controls/components/PagingTable/components/TrComponent.js");

var _TrComponent2 = _interopRequireDefault(_TrComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyObj = function emptyObj() {
  return {};
};
var expanderTdDefaultProps = exports.expanderTdDefaultProps = { pad: undefined };

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

exports.default = {
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
  TableComponent: _TableComponent2.default,
  TheadComponent: _TheadComponent2.default,
  TbodyComponent: _TbodyComponent2.default,
  TrGroupComponent: _TrGroupComponent2.default,
  TrComponent: _TrComponent2.default,
  ThComponent: _ThComponent2.default,
  TdComponent: _TdComponent2.default,
  CellTextComponent: _CellTextComponent2.default,
  TfootComponent: _TfootComponent2.default,
  FilterComponent: _FilterComponent2.default,
  ExpanderComponent: _ExpanderComponent2.default,
  PivotValueComponent: function PivotValueComponent(_ref14) {
    var subRows = _ref14.subRows,
        value = _ref14.value;
    return _react2.default.createElement(
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
        _react2.default.createElement(
          'span',
          { key: i },
          row[column.id],
          i < subRows.length - 1 ? ', ' : ''
        )
      );
    });
    return _react2.default.createElement(
      'span',
      null,
      previewValues
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _Pagination2.default,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: _LoadingComponent2.default,
  NoDataComponent: _NoDataComponent2.default,
  ResizerComponent: _ResizerComponent2.default,
  PadRowComponent: function PadRowComponent() {
    return _react2.default.createElement(
      'span',
      null,
      '\xA0'
    );
  }
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PagingTable/react-table/utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PagingTable/react-table/utils.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// ########################################################################
// Non-exported Helpers
// ########################################################################

function isArray(a) {
  return Array.isArray(a);
} /* eslint-disable no-param-reassign,no-nested-ternary */


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

  return typeof Comp === 'function' ? Object.getPrototypeOf(Comp).isReactComponent ? _react2.default.createElement(Comp, params) : Comp(params) : fallback;
}

exports.default = {
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
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PasswordInput/PasswordInput.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PasswordInput/PasswordInput.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PasswordInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _View = __webpack_require__(/*! grommet-icons/icons/View */ "./node_modules/grommet-icons/icons/View.js");

var _DropInput = __webpack_require__(/*! ../DropInput */ "./node_modules/grommet-controls/components/DropInput/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return _react2.default.createElement(_DropInput.DropInput, _extends({
      type: showPassword ? 'text' : 'password',
      widgets: [{
        'icon': showPassword ? hideIcon : viewIcon,
        'aria-label': showPassword ? a11yHidePassword : a11yViewPassword,
        'onClick': this.toggleView
      }]
    }, rest));
  };

  return PasswordInput;
}(_react.Component);

PasswordInput.defaultProps = {
  viewIcon: _react2.default.createElement(_View.View, null),
  hideIcon: _react2.default.createElement(_View.View, null),
  a11yViewPassword: 'View password',
  a11yHidePassword: 'Hide password'
};


var PasswordInputDoc = void 0;
if (true) {
  PasswordInputDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/PasswordInput/doc.js").default(PasswordInput); // eslint-disable-line global-require
}

var PasswordInputWrapper = PasswordInputDoc || PasswordInput;

exports.PasswordInput = PasswordInputWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/PasswordInput/doc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PasswordInput/doc.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A password field with show/hide password toggle.\n      All properties of DropInput apply\n      ').usage('\n      $ npm install grommet-controls\n \n      import { PasswordInput } from \'grommet-controls\';\n\n      <PasswordInput value={...} />\n    ');

  DocumentedElement.propTypes = {
    a11yViewPassword: _reactDesc.PropTypes.string.description('Custom view password title to be used by screen readers.'),
    a11yHidePassword: _reactDesc.PropTypes.string.description('Custom view password title to be used by screen readers.'),
    viewIcon: _reactDesc.PropTypes.element.description('Icon to view the password.'),
    hideIcon: _reactDesc.PropTypes.element.description('Icon to hide the password.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/PasswordInput/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PasswordInput/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PasswordInput = __webpack_require__(/*! ./PasswordInput */ "./node_modules/grommet-controls/components/PasswordInput/PasswordInput.js");

Object.defineProperty(exports, 'PasswordInput', {
  enumerable: true,
  get: function get() {
    return _PasswordInput.PasswordInput;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/PasswordInputField/PasswordInputField.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PasswordInputField/PasswordInputField.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PasswordInputField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../PasswordInput/index */ "./node_modules/grommet-controls/components/PasswordInput/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordInputField = exports.PasswordInputField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_index.PasswordInput, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/PasswordInputField/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/PasswordInputField/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PasswordInputField = __webpack_require__(/*! ./PasswordInputField */ "./node_modules/grommet-controls/components/PasswordInputField/PasswordInputField.js");

Object.defineProperty(exports, 'PasswordInputField', {
  enumerable: true,
  get: function get() {
    return _PasswordInputField.PasswordInputField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/SelectField/SelectField.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/SelectField/SelectField.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SelectField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SelectField = (0, _withFormField.withFormField)(function (_ref) {
  var onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['onChange']);

  return _react2.default.createElement(_grommet.Select, _extends({
    onChange: onChange
  }, rest));
});
exports.SelectField = SelectField;

/***/ }),

/***/ "./node_modules/grommet-controls/components/SelectField/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/SelectField/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SelectField = __webpack_require__(/*! ./SelectField */ "./node_modules/grommet-controls/components/SelectField/SelectField.js");

Object.defineProperty(exports, 'SelectField', {
  enumerable: true,
  get: function get() {
    return _SelectField.SelectField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Sidebar/Sidebar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Sidebar/Sidebar.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Sidebar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _Menu = __webpack_require__(/*! grommet-icons/icons/Menu */ "./node_modules/grommet-icons/icons/Menu.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return collapsible ? _react2.default.createElement(_grommet.Button, { icon: _react2.default.createElement(_Menu.Menu, null), onClick: function onClick() {
          return _this2.setState({ collapsed: view !== 'collapsed' });
        } }) : null;
    };
    return _react2.default.createElement(
      _grommet.ResponsiveContext.Consumer,
      null,
      function (size) {
        return collapsible && size === 'small' && collapsed === undefined || collapsed === true ? _react2.default.createElement(
          _grommet.Box,
          { align: 'start' },
          _react2.default.createElement(BtnToggle, { view: 'collapsed' })
        ) : _react2.default.createElement(
          _grommet.Box,
          _extends({
            width: width
          }, rest),
          _react2.default.createElement(
            _grommet.Box,
            { pad: { bottom: 'small' }, gap: 'small', direction: 'row', align: 'center' },
            _react2.default.createElement(BtnToggle, { view: 'expanded' }),
            title && _react2.default.createElement(
              _grommet.Box,
              _extends({
                flex: false,
                tag: 'header'
              }, headingProps),
              typeof title === 'string' ? _react2.default.createElement(
                _grommet.Heading,
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
}(_react2.default.Component);

var SidebarDoc = void 0;
if (true) {
  SidebarDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Sidebar/doc.js").default(Sidebar); // eslint-disable-line global-require
}

var SidebaWrapper = SidebarDoc || Sidebar;

SidebaWrapper.defaultProps = {
  title: undefined,
  width: 'medium',
  collapsible: true
};

SidebaWrapper.propTypes = {
  title: _propTypes2.default.node,
  width: _propTypes2.default.string,
  collapsible: _propTypes2.default.bool
};

exports.Sidebar = SidebaWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Sidebar/doc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Sidebar/doc.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('Collapsible side bar component.').usage('$ npm install grommet-controls\n\n    import { Sidebar } from \'grommet-controls\';\n\n    <Sidebar title=\'My title\'>\n\n        ...\n    </Sidebar>\n');

  DocumentedElement.propTypes = {
    title: _reactDesc.PropTypes.node.description('Title string or any react node.'),
    width: _reactDesc.PropTypes.string.description('The width of the side bar.').defaultValue('medium'),
    collapsible: _reactDesc.PropTypes.bool.description('Whether the sidebar can be collapsed.').defaultValue(true)
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Sidebar/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Sidebar/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Sidebar = __webpack_require__(/*! ./Sidebar */ "./node_modules/grommet-controls/components/Sidebar/Sidebar.js");

Object.defineProperty(exports, 'Sidebar', {
  enumerable: true,
  get: function get() {
    return _Sidebar.Sidebar;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Spinning/Spinning.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Spinning/Spinning.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Spinning = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _spinners = __webpack_require__(/*! ./spinners */ "./node_modules/grommet-controls/components/Spinning/spinners.js");

var _StyledSpinning = __webpack_require__(/*! ./StyledSpinning */ "./node_modules/grommet-controls/components/Spinning/StyledSpinning.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ported to styled-componnets from
// https://github.com/KyleAMathews/react-spinkit


var styledComponents = {
  'circle': _StyledSpinning.CircleSpinner,
  'three-bounce': _StyledSpinning.ThreeBounceSpinner,
  'cube-grid': _StyledSpinning.CubeGridSpinner,
  'wave': _StyledSpinning.WaveSpinner,
  'folding-cube': _StyledSpinning.FoldingCubeSpinner,
  'double-bounce': _StyledSpinning.DoubleBounceSpinner,
  'wandering-cubes': _StyledSpinning.WanderingCubesSpinner,
  'chasing-dots': _StyledSpinning.ChasingDotsSpinner,
  'rotating-plane': _StyledSpinning.RotatingPlaneSpinner,
  'pulse': _StyledSpinning.PulseSpinner,
  'wordpress': _StyledSpinning.WordPressSpinner

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

    var spinnerInfo = _spinners.allSpinners[kind] || _spinners.allSpinners['three-bounce'];
    var StyledSpinning = styledComponents[kind];
    return _react2.default.createElement(
      _styledComponents.ThemeContext.Consumer,
      null,
      function (theme) {
        return _react2.default.createElement(
          StyledSpinning,
          { color: color || (theme.dark ? 'light-1' : 'dark-1'), fadeIn: fadeIn, theme: theme, size: size },
          Array.from(Array(spinnerInfo.divCount).keys()).map(function (_, idx) {
            return _react2.default.createElement('div', { key: idx });
          })
        );
      }
    );
  };

  return Spinning;
}(_react.Component);

Spinning.defaultProps = {
  kind: 'circle',
  fadeIn: 'full',
  color: undefined,
  size: 'medium'
};
Spinning.propTypes = {
  fadeIn: _propTypes2.default.oneOf(['full', 'half', 'quarter', 'none', 'wordpress']),
  color: _propTypes2.default.string
};


var SpinningDoc = void 0;
if (true) {
  SpinningDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Spinning/doc.js").default(Spinning); // eslint-disable-line global-require
}

var SpinningWrapper = SpinningDoc || Spinning;

exports.Spinning = SpinningWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Spinning/StyledSpinning.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Spinning/StyledSpinning.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.WordPressSpinner = exports.PulseSpinner = exports.RotatingPlaneSpinner = exports.ChasingDotsSpinner = exports.WanderingCubesSpinner = exports.DoubleBounceSpinner = exports.FoldingCubeSpinner = exports.WaveSpinner = exports.CubeGridSpinner = exports.CircleSpinner = exports.ThreeBounceSpinner = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = __webpack_require__(/*! grommet/utils/colors */ "./node_modules/grommet/utils/colors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animationFadeIn = (0, _styledComponents.keyframes)(['0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}']);

var animationBounceDelay = (0, _styledComponents.keyframes)(['0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}']);

var animationScaleDelay = (0, _styledComponents.keyframes)(['0%,70%,100%{-webkit-transform:scale3D(1.0,1.0,1.0)}35%{-webkit-transform:scale3D(0.0,0.0,1.0)}']);

var animationStretchDelay = (0, _styledComponents.keyframes)(['0%,40%,100%{-webkit-transform:scaleY(0.4)}20%{-webkit-transform:scaleY(1.0)}']);

var animationFoldCubeAngle = (0, _styledComponents.keyframes)(['0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);opacity:0;}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);opacity:1;}90%,100%{-webkit-transform:perspective(140px) rotateY(180deg);opacity:0;}']);

var animationBounce = (0, _styledComponents.keyframes)(['0%,100%{-webkit-transform:scale(0.0);}50%{-webkit-transform:scale(1.0);}']);

var animationCubeMove = (0, _styledComponents.keyframes)(['25%{-webkit-transform:translateX(42px) rotate(-90deg) scale(0.5);}50%{-webkit-transform:translateX(42px) translateY(42px) rotate(-179deg);}50.1%{-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg);}75%{-webkit-transform:translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);}100%{-webkit-transform:rotate(-360deg);}']);

var animationRotate = (0, _styledComponents.keyframes)(['100%{-webkit-transform:rotate(360deg)}']);

var animationRotatePlane = (0, _styledComponents.keyframes)(['0%{-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg);}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);}']);

var animationScaleOut = (0, _styledComponents.keyframes)(['0%{-webkit-transform:scale(0.0)}100%{-webkit-transform:scale(1.0);opacity:0;}']);

var animationInnerCircle = (0, _styledComponents.keyframes)(['0%{-webkit-transform:rotate(0);}100%{-webkit-transform:rotate(360deg);}']);

var ThreeBounceSpinner = exports.ThreeBounceSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__ThreeBounceSpinner',
  componentId: 'sc-1opb7yr-0'
})(['', ' & >div{background-color:', ';}height:', ';& >div{width:', ';height:', ';background-color:', ';border-radius:100%;display:inline-block;animation:', ' 1.4s infinite ease-in-out;animation-fill-mode:both;};& >div:first-child{animation-delay:-0.32s;};& >div:nth-child(2){animation-delay:-0.16s;};animation:', ' 2s;'], function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationBounceDelay, animationFadeIn);

var CircleSpinner = exports.CircleSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__CircleSpinner',
  componentId: 'sc-1opb7yr-1'
})(['width:', ';height:', ';position:relative;& > div{background-color:initial;width:100%;height:100%;position:absolute;left:0;top:0;}& > div::before{content:\'\';display:block;margin:0 auto;width:20%;height:20%;background-color:', ';border-radius:100%;animation:', ' 1.2s infinite ease-in-out;animation-fill-mode:both;}& > div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}& > div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}& > div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}& > div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}& > div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}& > div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}& > div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}& > div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}& > div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}& > div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}& > div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}& > div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}& > div:nth-child(3)::before{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}& > div:nth-child(4)::before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}& > div:nth-child(5)::before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}& > div:nth-child(6)::before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}& > div:nth-child(7)::before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}& > div:nth-child(8)::before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}& > div:nth-child(9)::before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}& > div:nth-child(10)::before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}& > div:nth-child(11)::before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}& > div:nth-child(12)::before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationBounceDelay);

var CubeGridSpinner = exports.CubeGridSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__CubeGridSpinner',
  componentId: 'sc-1opb7yr-2'
})(['width:', ';height:', ';& > div{width:33%;height:33%;background-color:', ';float:left;animation:', ' 1.3s infinite ease-in-out;}& > div:nth-child(1){-webkit-animation-delay:0.2s;animation-delay:0.2s}& > div:nth-child(2){-webkit-animation-delay:0.3s;animation-delay:0.3s}& > div:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s}& > div:nth-child(4){-webkit-animation-delay:0.1s;animation-delay:0.1s}& > div:nth-child(5){-webkit-animation-delay:0.2s;animation-delay:0.2s}& > div:nth-child(6){-webkit-animation-delay:0.3s;animation-delay:0.3s}& > div:nth-child(7){-webkit-animation-delay:0.0s;animation-delay:0.0s}& > div:nth-child(8){-webkit-animation-delay:0.1s;animation-delay:0.1s}& > div:nth-child(9){-webkit-animation-delay:0.2s;animation-delay:0.2s}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationScaleDelay);

var WaveSpinner = exports.WaveSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__WaveSpinner',
  componentId: 'sc-1opb7yr-3'
})(['width:30px;height:27px;& > div{background-color:', ';height:100%;width:6px;display:inline-block;animation:', ' 1.2s infinite ease-in-out;}$ > div:nth-child(2){animation-delay:-1.1s;}& > div:nth-child(3){animation-delay:-1.0s;}& > div:nth-child(4){animation-delay:-0.9s;}& > div:nth-child(5){animation-delay:-0.8s;}'], function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationStretchDelay);

var FoldingCubeSpinner = exports.FoldingCubeSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__FoldingCubeSpinner',
  componentId: 'sc-1opb7yr-4'
})(['width:', ';height:', ';position:relative;transform:rotateZ(45deg);& > div{background-color:initial;float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}& > div::before{content:\'\';position:absolute;top:0;left:0;width:100%;height:100%;background-color:', ';animation:', ' 2.4s infinite linear both;transform-origin:100% 100%;}& > div:nth-child(2){transform:scale(1.1) rotateZ(90deg);}& > div:nth-child(4){transform:scale(1.1) rotateZ(180deg);}& > div:nth-child(3){transform:scale(1.1) rotateZ(270deg);}& > div:nth-child(2)::before{animation-delay:0.3s;}& > div:nth-child(4)::before{animation-delay:0.6s;}& > div:nth-child(3)::before{animation-delay:0.9s;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationFoldCubeAngle);

var DoubleBounceSpinner = exports.DoubleBounceSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__DoubleBounceSpinner',
  componentId: 'sc-1opb7yr-5'
})(['width:', ';height:', ';position:relative;& > div{width:100%;height:100%;border-radius:50%;background-color:', ';opacity:0.6;position:absolute;top:0;left:0;animation:', ' 2.0s infinite ease-in-out;}& > div:last-child{-webkit-animation-delay:-1.0s;animation-delay:-1.0s;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationBounce);

var WanderingCubesSpinner = exports.WanderingCubesSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__WanderingCubesSpinner',
  componentId: 'sc-1opb7yr-6'
})(['width:52px;height:52px;position:relative;& > div{background-color:', ';width:10px;height:10px;position:absolute;top:0;left:0;animation:', ' 1.8s infinite ease-in-out;}& > div:last-child{-webkit-animation-delay:-0.9s;animation-delay:-0.9s;}'], function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationCubeMove);

var ChasingDotsSpinner = exports.ChasingDotsSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__ChasingDotsSpinner',
  componentId: 'sc-1opb7yr-7'
})(['width:', ';height:', ';position:relative;animation:', ' 2.0s infinite linear;& > div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:', ';border-radius:100%;animation:', ' 2.0s infinite ease-in-out;}& > div:last-child{top:auto;bottom:0;-webkit-animation-delay:-1.0s;animation-delay:-1.0s;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, animationRotate, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationBounce);

var RotatingPlaneSpinner = exports.RotatingPlaneSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__RotatingPlaneSpinner',
  componentId: 'sc-1opb7yr-8'
})(['width:', ';height:', ';background-color:', ';animation:', ' 1.2s infinite ease-in-out;'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationRotatePlane);

var PulseSpinner = exports.PulseSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__PulseSpinner',
  componentId: 'sc-1opb7yr-9'
})(['width:', ';height:', ';background-color:', ';border-radius:100%;animation:', ' 1.0s infinite ease-in-out;'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, animationScaleOut);

var WordPressSpinner = exports.WordPressSpinner = _styledComponents2.default.div.withConfig({
  displayName: 'StyledSpinning__WordPressSpinner',
  componentId: 'sc-1opb7yr-10'
})(['& > div{width:', ';height:', ';background-color:', ';display:inline-block;border-radius:', ';position:relative;animation:', ' 1s linear infinite;}& > div::after{content:\'\';display:block;background-color:#fff;width:8px;height:8px;position:absolute;border-radius:8px;top:5px;left:5px;}'], function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, function (props) {
  return (0, _colors.normalizeColor)(props.color, props.theme);
}, function (props) {
  return props.theme.global.edgeSize[props.size];
}, animationInnerCircle);

/***/ }),

/***/ "./node_modules/grommet-controls/components/Spinning/doc.js":
/*!******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Spinning/doc.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A spinning process indicator.').usage('\n      $ npm install grommet-controls\n \n      import { Spinning } from \'grommet-controls\';\n\n      <Spinning />\n    ');

  DocumentedElement.propTypes = {
    kind: _reactDesc.PropTypes.oneOf(['circle', 'pulse', 'three-bounce', 'cube-grid', 'wave', 'folding-cube', 'double-bounce', 'wandering-cubes', 'chasing-dots', 'rotating-plane']).description('Kind of spinner.').defaultValue('circle'),
    color: _reactDesc.PropTypes.string.description('A color identifier to use for the spinning color.'),
    size: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('A size for the spinning.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Spinning/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Spinning/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Spinning = __webpack_require__(/*! ./Spinning */ "./node_modules/grommet-controls/components/Spinning/Spinning.js");

Object.defineProperty(exports, 'Spinning', {
  enumerable: true,
  get: function get() {
    return _Spinning.Spinning;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Spinning/spinners.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Spinning/spinners.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "./node_modules/grommet-controls/components/Tag/StyledTag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Tag/StyledTag.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyledTag = exports.StyledIcon = undefined;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _background = __webpack_require__(/*! grommet/utils/background */ "./node_modules/grommet/utils/background.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var disabledStyle = '\n  opacity: 0.4;\n  cursor: default;\n';

var StyledIcon = exports.StyledIcon = _styledComponents2.default.span.withConfig({
  displayName: 'StyledTag__StyledIcon',
  componentId: 'sc-1cveylf-0'
})(['display:inline-block;> *{vertical-align:bottom;}', ''], function (props) {
  return !props.diabled && 'cursor: pointer;';
});

var StyledTag = exports.StyledTag = (0, _styledComponents2.default)(_grommet.Box).withConfig({
  displayName: 'StyledTag',
  componentId: 'sc-1cveylf-1'
})(['', ' ', ' user-select:none;', ''], function (props) {
  return (0, _background.backgroundStyle)(props.background || 'brand', props.theme);
}, function (props) {
  return props.onClick && 'cursor: pointer;';
}, function (props) {
  return props.disabled && disabledStyle;
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Tag/Tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Tag/Tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tag = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _FormClose = __webpack_require__(/*! grommet-icons/icons/FormClose */ "./node_modules/grommet-icons/icons/FormClose.js");

var _hocs = __webpack_require__(/*! grommet/components/hocs */ "./node_modules/grommet/components/hocs.js");

var _StyledTag = __webpack_require__(/*! ./StyledTag */ "./node_modules/grommet-controls/components/Tag/StyledTag.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(
      _grommet.Keyboard,
      {
        onEnter: this.clickTag,
        onSpace: this.toggleTag
      },
      _react2.default.createElement(
        _styledComponents.ThemeContext.Consumer,
        null,
        function (theme) {
          var closeIcon = void 0;
          if (icon || onChange) {
            closeIcon = _react2.default.createElement(
              _StyledTag.StyledIcon,
              { theme: theme, disabled: disabled, onClick: onChange },
              icon || _react2.default.createElement(_FormClose.FormClose, null)
            );
          }
          return _react2.default.createElement(
            _StyledTag.StyledTag,
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
            _react2.default.isValidElement(label) ? label : _react2.default.createElement(
              _grommet.Text,
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
}(_react.Component);

Tag.contextTypes = {
  grommet: _propTypes2.default.object
};
Tag.defaultProps = {
  label: 'Text',
  pad: { horizontal: 'xsmall' },
  focusable: true
};


var TagDoc = void 0;
if (true) {
  TagDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Tag/doc.js").default(Tag); // eslint-disable-line global-require
}

var TagWrapper = (0, _hocs.withFocus)()(TagDoc || Tag);

exports.Tag = TagWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Tag/doc.js":
/*!*************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Tag/doc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _propTypes = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A tag control with a label and icon.').usage('$ npm install grommet-controls\n\n    import { Tag } from \'grommet-controls\';\n\n    <Tag label={...} icon={...} />');

  DocumentedElement.propTypes = {
    a11yTitle: _propTypes.a11yTitlePropType,
    border: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      side: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('Include a border.'),
    background: _reactDesc.PropTypes.string.description('Fill color for the tag.'),
    disabled: _reactDesc.PropTypes.bool.description('Displays a disabled style for the tag'),
    focusable: _reactDesc.PropTypes.bool.description('Whether the tag is focusable'),
    icon: _reactDesc.PropTypes.element.description('Icon element to place in the tag.'),
    label: _reactDesc.PropTypes.node.description('Label text to place next to the control.'),
    onClick: _reactDesc.PropTypes.func.description('Function that will be called when the user clicks the background/label of the tag, or presses the Enter key.'),

    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user clicks the icon on the tag, or presses the Space key.'),
    reverse: _reactDesc.PropTypes.bool.description('Whether to show the label in front of the checkbox.'),
    round: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners of the tag.'),
    size: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']).description('The font size of the label.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Tag/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Tag/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Tag = __webpack_require__(/*! ./Tag */ "./node_modules/grommet-controls/components/Tag/Tag.js");

Object.defineProperty(exports, 'Tag', {
  enumerable: true,
  get: function get() {
    return _Tag.Tag;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Tags/Tags.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Tags/Tags.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tags = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _FormClose = __webpack_require__(/*! grommet-icons/icons/FormClose */ "./node_modules/grommet-icons/icons/FormClose.js");

var _Tag = __webpack_require__(/*! ../Tag */ "./node_modules/grommet-controls/components/Tag/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        onChange({ target: (0, _reactDom.findDOMNode)(_this.inputRef), option: selected, value: tags });
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
      (0, _reactDom.findDOMNode)(this.tagRefs[index]).focus();
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
      noValues = _react2.default.isValidElement(placeholder) ? placeholder :
      // placeholder. minimum height of icon to keep size
      _react2.default.createElement(
        _grommet.Text,
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
    return _react2.default.createElement(
      _grommet.Keyboard,
      {
        onEnter: this.onSelectTag,
        onSpace: this.onSelectTag,
        onLeft: this.onPreviousTag,
        onRight: this.onNextTag
      },
      _react2.default.createElement(
        _grommet.Box,
        _extends({
          tabIndex: focusable ? '0' : undefined,
          id: id ? id + '__tag-container' : undefined,
          direction: direction,
          overflow: 'auto',
          style: { minWidth: 'auto' }
        }, rest),
        noValues || values.map(function (tag, index) {
          return children ? children(tag, index, value) : _react2.default.createElement(_Tag.Tag, _extends({
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
}(_react.Component);

Tags.defaultProps = {
  pad: 'small',
  focusable: true,
  margin: { horizontal: 'xsmall', vertical: 'small' },
  value: [],
  gap: 'xsmall',
  direction: 'row-responsive',
  icon: _react2.default.createElement(_FormClose.FormClose, null)
};

var TagsDoc = void 0;
if (true) {
  TagsDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Tags/doc.js").default(Tags); // eslint-disable-line global-require
}

var TagsWrapper = TagsDoc || Tags;

exports.Tags = TagsWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Tags/doc.js":
/*!**************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Tags/doc.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

var _propTypes = __webpack_require__(/*! grommet/utils/prop-types */ "./node_modules/grommet/utils/prop-types.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A list of tags that can be removed.').usage('\n    $ npm install grommet-controls\n\n    import { Tags } from \'grommet-controls\';\n\n    <Tags />\n    ');

  DocumentedElement.propTypes = {
    a11yTitle: _propTypes.a11yTitlePropType,
    children: _reactDesc.PropTypes.func.description('Function that will be called when each option is rendered.'),
    focusable: _reactDesc.PropTypes.bool.description('Whether the tag list is focusable'),
    icon: _reactDesc.PropTypes.element.description('Icon element to remove the tag.'),
    tagProps: _reactDesc.PropTypes.object.description('Tag elements `<Box />` and `<Text />` properties'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user removes a tag.'),
    onClick: _reactDesc.PropTypes.func.description('Function that will be called when the user clicks on a tag.'),
    direction: _reactDesc.PropTypes.oneOf(['row', 'row-responsive', 'column']).description('The orientation to layout the child tags in.').defaultValue('column'),
    placeholder: _reactDesc.PropTypes.string.description('Placeholder text to use when no value is provided.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, _reactDesc.PropTypes.object, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, _reactDesc.PropTypes.object]))]).description('List of tag items to display.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Tags/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Tags/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Tags = exports.TagsSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Tags = __webpack_require__(/*! ./Tags */ "./node_modules/grommet-controls/components/Tags/Tags.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TagsSelect = function TagsSelect(props) {
  var _ref = props || {},
      tagProps = _ref.tagProps,
      rest = _objectWithoutProperties(_ref, ['tagProps']);

  return function (_ref2) {
    var placeholder = _ref2.placeholder,
        value = _ref2.value,
        onChange = _ref2.onChange;
    return _react2.default.createElement(_Tags.Tags, _extends({
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

exports.TagsSelect = TagsSelect;
exports.Tags = _Tags.Tags;

/***/ }),

/***/ "./node_modules/grommet-controls/components/TextAreaField/TextAreaField.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/TextAreaField/TextAreaField.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TextAreaField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAreaField = exports.TextAreaField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_grommet.TextArea, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/TextAreaField/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/TextAreaField/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _TextAreaField = __webpack_require__(/*! ./TextAreaField */ "./node_modules/grommet-controls/components/TextAreaField/TextAreaField.js");

Object.defineProperty(exports, 'TextAreaField', {
  enumerable: true,
  get: function get() {
    return _TextAreaField.TextAreaField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/TextInputField/TextInputField.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/TextInputField/TextInputField.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TextInputField = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _withFormField = __webpack_require__(/*! ../withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInputField = exports.TextInputField = (0, _withFormField.withFormField)(function (props) {
  return _react2.default.createElement(_grommet.TextInput, props);
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/TextInputField/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/TextInputField/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _TextInputField = __webpack_require__(/*! ./TextInputField */ "./node_modules/grommet-controls/components/TextInputField/TextInputField.js");

Object.defineProperty(exports, 'TextInputField', {
  enumerable: true,
  get: function get() {
    return _TextInputField.TextInputField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/Value/Value.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Value/Value.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Value = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    _grommet.Box,
    { gap: gap },
    _react2.default.isValidElement(value) ? value : _react2.default.createElement(
      _grommet.Text,
      { size: size, weight: weight, color: color },
      '' + (value !== undefined ? value : '-') + (units ? ' ' + units : '')
    ),
    _react2.default.createElement(
      _grommet.Box,
      { alignSelf: 'end' },
      _react2.default.createElement(
        _grommet.Text,
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
  label: _propTypes2.default.string,
  color: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.number]),
  weight: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['normal', 'bold']), _propTypes2.default.number]),
  gap: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'])
};

var ValueDoc = void 0;
if (true) {
  ValueDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/Value/doc.js").default(Value); // eslint-disable-line global-require
}

var ValueWrapper = ValueDoc || Value;

exports.Value = ValueWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/Value/doc.js":
/*!***************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Value/doc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('A single value visualization with a label.').usage('$ npm install grommet-controls\n\n    import { Value } from \'grommet-controls\';\n\n    <Value value={...} label={...} />');

  DocumentedElement.propTypes = {
    label: _reactDesc.PropTypes.node.description('Value label.'),
    color: _reactDesc.PropTypes.string.description('The value color.'),
    value: _reactDesc.PropTypes.node.description('The value.'),
    weight: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['normal', 'bold']), _reactDesc.PropTypes.number]).description('Font weight.'),
    gap: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('Spacing between the value and the label.'),
    size: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']).description('Value element size.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/Value/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/grommet-controls/components/Value/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Value = __webpack_require__(/*! ./Value */ "./node_modules/grommet-controls/components/Value/Value.js");

Object.defineProperty(exports, 'Value', {
  enumerable: true,
  get: function get() {
    return _Value.Value;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/VerticalMenu/VerticalMenu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/VerticalMenu/VerticalMenu.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VerticalMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

var _FormDown = __webpack_require__(/*! grommet-icons/icons/FormDown */ "./node_modules/grommet-icons/icons/FormDown.js");

var _FormNext = __webpack_require__(/*! grommet-icons/icons/FormNext */ "./node_modules/grommet-icons/icons/FormNext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var ButtonClass = items ? _grommet.Button : buttonClass || _grommet.Button;
      var itemKey = 'item_' + itemId + '_' + level;

      var background = void 0;
      if (activeItem && activeItem.id === id) {
        background = {
          color: 'active',
          opacity: 'strong'
        };
      }

      var content = _react2.default.createElement(
        _grommet.Box,
        {
          background: background
        },
        _react2.default.createElement(
          ButtonClass,
          _extends({
            onClick: !rest.route && !rest.path ? function () {
              return items ? _this.onMenuChange(itemId, isExpanded) : onSelect && onSelect(item);
            } : undefined,
            hoverIndicator: { color: 'active' }
          }, rest),
          _react2.default.createElement(
            _grommet.Box,
            {
              direction: 'row',
              align: 'center',
              pad: 'small',
              style: {
                marginLeft: items ? 12 * level + 'px' : 16 * level + 'px'
              }
            },
            items && (isExpanded ? _react2.default.createElement(_FormDown.FormDown, null) : _react2.default.createElement(_FormNext.FormNext, null)),
            _react2.default.createElement(
              _grommet.Box,
              { direction: 'row', justify: 'between', fill: 'horizontal', align: 'center' },
              _react2.default.createElement(
                _grommet.Box,
                { direction: 'row', align: 'center', gap: 'small' },
                icon,
                typeof label === 'string' ? _react2.default.createElement(
                  _grommet.Text,
                  null,
                  items ? _react2.default.createElement(
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
      return _react2.default.createElement(
        _grommet.Box,
        { key: itemKey },
        items ? _react2.default.createElement(
          _grommet.Keyboard,
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

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      filteredItems && filteredItems.map(function (item) {
        return _this2.renderItem(item, 1);
      })
    );
  };

  return VerticalMenu;
}(_react.Component);

var VerticalMenuDoc = void 0;
if (true) {
  VerticalMenuDoc = __webpack_require__(/*! ./doc */ "./node_modules/grommet-controls/components/VerticalMenu/doc.js").default(VerticalMenu); // eslint-disable-line global-require
}

var VerticalMenuWrapper = VerticalMenuDoc || VerticalMenu;

exports.VerticalMenu = VerticalMenuWrapper;

/***/ }),

/***/ "./node_modules/grommet-controls/components/VerticalMenu/doc.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/VerticalMenu/doc.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDesc = __webpack_require__(/*! react-desc */ "./node_modules/react-desc/lib/index.js");

exports.default = function (Element) {
  var DocumentedElement = (0, _reactDesc.describe)(Element).description('Hierarchical collapsible menu.').usage('$ npm install grommet-controls\n\n    import { VerticalMenu } from \'grommet-controls\';\n\n    <VerticalMenu items={...} onSelect={...} />');

  DocumentedElement.propTypes = {
    items: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      id: _reactDesc.PropTypes.string.description('Unique id'),
      label: _reactDesc.PropTypes.node.description('Label of the item'),
      expanded: _reactDesc.PropTypes.bool.description('Initial expanded state'),
      icon: _reactDesc.PropTypes.node.description('Icon in front of the label'),
      widget: _reactDesc.PropTypes.node.description('Widget or icon to place at the end of the item')
    })).description('Array of menu items.'),
    activeItem: _reactDesc.PropTypes.shape({
      id: _reactDesc.PropTypes.string
    }).description('Initially active menu item.'),
    buttonClass: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.func]).description('Custom class to use for the button instead of RoutedButton.'),
    expandAll: _reactDesc.PropTypes.bool.description('If specified, will expand all items with chidren.'),
    onSelect: _reactDesc.PropTypes.func.description('Function that will be called when the user selects a menu item.'),
    search: _reactDesc.PropTypes.string.description('If specified, will filter the items by the search terms.')
  };

  return DocumentedElement;
};

/***/ }),

/***/ "./node_modules/grommet-controls/components/VerticalMenu/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/VerticalMenu/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _VerticalMenu = __webpack_require__(/*! ./VerticalMenu */ "./node_modules/grommet-controls/components/VerticalMenu/VerticalMenu.js");

Object.defineProperty(exports, 'VerticalMenu', {
  enumerable: true,
  get: function get() {
    return _VerticalMenu.VerticalMenu;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/basicColors/basicColors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/basicColors/basicColors.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var white = exports.white = '#ffffff';
var silver = exports.silver = '#c0c0c0';
var gray = exports.gray = '#808080';
var black = exports.black = '#000000';
var red = exports.red = '#ff0000';
var maroon = exports.maroon = '#800000';
var yellow = exports.yellow = '#ffff00';
var olive = exports.olive = '#808000';
var lime = exports.lime = '#00ff00';
var green = exports.green = '#008000';
var aqua = exports.aqua = '#00ffff';
var teal = exports.teal = '#008080';
var blue = exports.blue = '#0000ff';
var navy = exports.navy = '#000080';
var fuchsia = exports.fuchsia = '#ff00ff';
var purple = exports.purple = '#800080';

var basicColors = exports.basicColors = {
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

/***/ "./node_modules/grommet-controls/components/basicColors/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/basicColors/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _basicColors = __webpack_require__(/*! ./basicColors */ "./node_modules/grommet-controls/components/basicColors/basicColors.js");

Object.defineProperty(exports, 'basicColors', {
  enumerable: true,
  get: function get() {
    return _basicColors.basicColors;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/grommet-controls/components/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Avatar = __webpack_require__(/*! ./Avatar */ "./node_modules/grommet-controls/components/Avatar/index.js");

Object.defineProperty(exports, 'Avatar', {
  enumerable: true,
  get: function get() {
    return _Avatar.Avatar;
  }
});

var _Card = __webpack_require__(/*! ./Card */ "./node_modules/grommet-controls/components/Card/index.js");

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _Card.Card;
  }
});

var _CheckBoxField = __webpack_require__(/*! ./CheckBoxField */ "./node_modules/grommet-controls/components/CheckBoxField/index.js");

Object.defineProperty(exports, 'CheckBoxField', {
  enumerable: true,
  get: function get() {
    return _CheckBoxField.CheckBoxField;
  }
});

var _ColorInput = __webpack_require__(/*! ./ColorInput */ "./node_modules/grommet-controls/components/ColorInput/index.js");

Object.defineProperty(exports, 'ColorInput', {
  enumerable: true,
  get: function get() {
    return _ColorInput.ColorInput;
  }
});

var _ColorInputField = __webpack_require__(/*! ./ColorInputField */ "./node_modules/grommet-controls/components/ColorInputField/index.js");

Object.defineProperty(exports, 'ColorInputField', {
  enumerable: true,
  get: function get() {
    return _ColorInputField.ColorInputField;
  }
});

var _Colors = __webpack_require__(/*! ./Colors */ "./node_modules/grommet-controls/components/Colors/index.js");

Object.defineProperty(exports, 'Colors', {
  enumerable: true,
  get: function get() {
    return _Colors.Colors;
  }
});

var _DateInput = __webpack_require__(/*! ./DateInput */ "./node_modules/grommet-controls/components/DateInput/index.js");

Object.defineProperty(exports, 'DateInput', {
  enumerable: true,
  get: function get() {
    return _DateInput.DateInput;
  }
});

var _DateInputField = __webpack_require__(/*! ./DateInputField */ "./node_modules/grommet-controls/components/DateInputField/index.js");

Object.defineProperty(exports, 'DateInputField', {
  enumerable: true,
  get: function get() {
    return _DateInputField.DateInputField;
  }
});

var _DropInput = __webpack_require__(/*! ./DropInput */ "./node_modules/grommet-controls/components/DropInput/index.js");

Object.defineProperty(exports, 'DropInput', {
  enumerable: true,
  get: function get() {
    return _DropInput.DropInput;
  }
});

var _EmailInput = __webpack_require__(/*! ./EmailInput */ "./node_modules/grommet-controls/components/EmailInput/index.js");

Object.defineProperty(exports, 'EmailInput', {
  enumerable: true,
  get: function get() {
    return _EmailInput.EmailInput;
  }
});

var _EmailInputField = __webpack_require__(/*! ./EmailInputField */ "./node_modules/grommet-controls/components/EmailInputField/index.js");

Object.defineProperty(exports, 'EmailInputField', {
  enumerable: true,
  get: function get() {
    return _EmailInputField.EmailInputField;
  }
});

var _Form = __webpack_require__(/*! ./Form */ "./node_modules/grommet-controls/components/Form/index.js");

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _Form.Form;
  }
});

var _Header = __webpack_require__(/*! ./Header */ "./node_modules/grommet-controls/components/Header/index.js");

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _Header.Header;
  }
});

var _IconButton = __webpack_require__(/*! ./IconButton */ "./node_modules/grommet-controls/components/IconButton/index.js");

Object.defineProperty(exports, 'IconButton', {
  enumerable: true,
  get: function get() {
    return _IconButton.IconButton;
  }
});

var _ImageStamp = __webpack_require__(/*! ./ImageStamp */ "./node_modules/grommet-controls/components/ImageStamp/index.js");

Object.defineProperty(exports, 'ImageStamp', {
  enumerable: true,
  get: function get() {
    return _ImageStamp.ImageStamp;
  }
});

var _MaskedInput = __webpack_require__(/*! ./MaskedInput */ "./node_modules/grommet-controls/components/MaskedInput/index.js");

Object.defineProperty(exports, 'MaskedInput', {
  enumerable: true,
  get: function get() {
    return _MaskedInput.MaskedInput;
  }
});

var _MaskedInputField = __webpack_require__(/*! ./MaskedInputField */ "./node_modules/grommet-controls/components/MaskedInputField/index.js");

Object.defineProperty(exports, 'MaskedInputField', {
  enumerable: true,
  get: function get() {
    return _MaskedInputField.MaskedInputField;
  }
});

var _Notification = __webpack_require__(/*! ./Notification */ "./node_modules/grommet-controls/components/Notification/index.js");

Object.defineProperty(exports, 'Notification', {
  enumerable: true,
  get: function get() {
    return _Notification.Notification;
  }
});

var _NumberInput = __webpack_require__(/*! ./NumberInput */ "./node_modules/grommet-controls/components/NumberInput/index.js");

Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function get() {
    return _NumberInput.NumberInput;
  }
});

var _NumberInputField = __webpack_require__(/*! ./NumberInputField */ "./node_modules/grommet-controls/components/NumberInputField/index.js");

Object.defineProperty(exports, 'NumberInputField', {
  enumerable: true,
  get: function get() {
    return _NumberInputField.NumberInputField;
  }
});

var _PagingTable = __webpack_require__(/*! ./PagingTable */ "./node_modules/grommet-controls/components/PagingTable/index.js");

Object.defineProperty(exports, 'PagingTable', {
  enumerable: true,
  get: function get() {
    return _PagingTable.PagingTable;
  }
});

var _PasswordInput = __webpack_require__(/*! ./PasswordInput */ "./node_modules/grommet-controls/components/PasswordInput/index.js");

Object.defineProperty(exports, 'PasswordInput', {
  enumerable: true,
  get: function get() {
    return _PasswordInput.PasswordInput;
  }
});

var _PasswordInputField = __webpack_require__(/*! ./PasswordInputField */ "./node_modules/grommet-controls/components/PasswordInputField/index.js");

Object.defineProperty(exports, 'PasswordInputField', {
  enumerable: true,
  get: function get() {
    return _PasswordInputField.PasswordInputField;
  }
});

var _SelectField = __webpack_require__(/*! ./SelectField */ "./node_modules/grommet-controls/components/SelectField/index.js");

Object.defineProperty(exports, 'SelectField', {
  enumerable: true,
  get: function get() {
    return _SelectField.SelectField;
  }
});

var _Sidebar = __webpack_require__(/*! ./Sidebar */ "./node_modules/grommet-controls/components/Sidebar/index.js");

Object.defineProperty(exports, 'Sidebar', {
  enumerable: true,
  get: function get() {
    return _Sidebar.Sidebar;
  }
});

var _Spinning = __webpack_require__(/*! ./Spinning */ "./node_modules/grommet-controls/components/Spinning/index.js");

Object.defineProperty(exports, 'Spinning', {
  enumerable: true,
  get: function get() {
    return _Spinning.Spinning;
  }
});

var _Tag = __webpack_require__(/*! ./Tag */ "./node_modules/grommet-controls/components/Tag/index.js");

Object.defineProperty(exports, 'Tag', {
  enumerable: true,
  get: function get() {
    return _Tag.Tag;
  }
});

var _Tags = __webpack_require__(/*! ./Tags */ "./node_modules/grommet-controls/components/Tags/index.js");

Object.defineProperty(exports, 'Tags', {
  enumerable: true,
  get: function get() {
    return _Tags.Tags;
  }
});

var _TextAreaField = __webpack_require__(/*! ./TextAreaField */ "./node_modules/grommet-controls/components/TextAreaField/index.js");

Object.defineProperty(exports, 'TextAreaField', {
  enumerable: true,
  get: function get() {
    return _TextAreaField.TextAreaField;
  }
});

var _TextInputField = __webpack_require__(/*! ./TextInputField */ "./node_modules/grommet-controls/components/TextInputField/index.js");

Object.defineProperty(exports, 'TextInputField', {
  enumerable: true,
  get: function get() {
    return _TextInputField.TextInputField;
  }
});

var _Value = __webpack_require__(/*! ./Value */ "./node_modules/grommet-controls/components/Value/index.js");

Object.defineProperty(exports, 'Value', {
  enumerable: true,
  get: function get() {
    return _Value.Value;
  }
});

var _VerticalMenu = __webpack_require__(/*! ./VerticalMenu */ "./node_modules/grommet-controls/components/VerticalMenu/index.js");

Object.defineProperty(exports, 'VerticalMenu', {
  enumerable: true,
  get: function get() {
    return _VerticalMenu.VerticalMenu;
  }
});

var _basicColors = __webpack_require__(/*! ./basicColors */ "./node_modules/grommet-controls/components/basicColors/index.js");

Object.defineProperty(exports, 'basicColors', {
  enumerable: true,
  get: function get() {
    return _basicColors.basicColors;
  }
});

var _materialColors = __webpack_require__(/*! ./materialColors */ "./node_modules/grommet-controls/components/materialColors/index.js");

Object.defineProperty(exports, 'materialColors', {
  enumerable: true,
  get: function get() {
    return _materialColors.materialColors;
  }
});

var _uiColors = __webpack_require__(/*! ./uiColors */ "./node_modules/grommet-controls/components/uiColors/index.js");

Object.defineProperty(exports, 'uiColors', {
  enumerable: true,
  get: function get() {
    return _uiColors.uiColors;
  }
});

var _validators = __webpack_require__(/*! ./validators */ "./node_modules/grommet-controls/components/validators/index.js");

Object.defineProperty(exports, 'validators', {
  enumerable: true,
  get: function get() {
    return _validators.validators;
  }
});

var _withChartTheme = __webpack_require__(/*! ../chartjs/withChartTheme */ "./node_modules/grommet-controls/chartjs/withChartTheme/index.js");

Object.defineProperty(exports, 'withChartTheme', {
  enumerable: true,
  get: function get() {
    return _withChartTheme.withChartTheme;
  }
});

var _withFormField = __webpack_require__(/*! ./withFormField */ "./node_modules/grommet-controls/components/withFormField/index.js");

Object.defineProperty(exports, 'withFormField', {
  enumerable: true,
  get: function get() {
    return _withFormField.withFormField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/materialColors/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/materialColors/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _materialColors = __webpack_require__(/*! ./materialColors */ "./node_modules/grommet-controls/components/materialColors/materialColors.js");

Object.defineProperty(exports, 'materialColors', {
  enumerable: true,
  get: function get() {
    return _materialColors.materialColors;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/materialColors/materialColors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/materialColors/materialColors.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var red = exports.red = {
  '50': '#ffebee', '100': '#ffcdd2', '200': '#ef9a9a', '300': '#e57373', '400': '#ef5350', '500': '#f44336', '600': '#e53935', '700': '#d32f2f', '800': '#c62828', '900': '#b71c1c', 'a100': '#ff8a80', 'a200': '#ff5252', 'a400': '#ff1744', 'a700': '#d50000'
};
var pink = exports.pink = {
  '50': '#fce4ec', '100': '#f8bbd0', '200': '#f48fb1', '300': '#f06292', '400': '#ec407a', '500': '#e91e63', '600': '#d81b60', '700': '#c2185b', '800': '#ad1457', '900': '#880e4f', 'a100': '#ff80ab', 'a200': '#ff4081', 'a400': '#f50057', 'a700': '#c51162'
};
var purple = exports.purple = {
  '50': '#f3e5f5', '100': '#e1bee7', '200': '#ce93d8', '300': '#ba68c8', '400': '#ab47bc', '500': '#9c27b0', '600': '#8e24aa', '700': '#7b1fa2', '800': '#6a1b9a', '900': '#4a148c', 'a100': '#ea80fc', 'a200': '#e040fb', 'a400': '#d500f9', 'a700': '#aa00ff'
};
var deepPurple = exports.deepPurple = {
  '50': '#ede7f6', '100': '#d1c4e9', '200': '#b39ddb', '300': '#9575cd', '400': '#7e57c2', '500': '#673ab7', '600': '#5e35b1', '700': '#512da8', '800': '#4527a0', '900': '#311b92', 'a100': '#b388ff', 'a200': '#7c4dff', 'a400': '#651fff', 'a700': '#6200ea'
};
var indigo = exports.indigo = {
  '50': '#e8eaf6', '100': '#c5cae9', '200': '#9fa8da', '300': '#7986cb', '400': '#5c6bc0', '500': '#3f51b5', '600': '#3949ab', '700': '#303f9f', '800': '#283593', '900': '#1a237e', 'a100': '#8c9eff', 'a200': '#536dfe', 'a400': '#3d5afe', 'a700': '#304ffe'
};
var blue = exports.blue = {
  '50': '#e3f2fd', '100': '#bbdefb', '200': '#90caf9', '300': '#64b5f6', '400': '#42a5f5', '500': '#2196f3', '600': '#1e88e5', '700': '#1976d2', '800': '#1565c0', '900': '#0d47a1', 'a100': '#82b1ff', 'a200': '#448aff', 'a400': '#2979ff', 'a700': '#2962ff'
};
var lightBlue = exports.lightBlue = {
  '50': '#e1f5fe', '100': '#b3e5fc', '200': '#81d4fa', '300': '#4fc3f7', '400': '#29b6f6', '500': '#03a9f4', '600': '#039be5', '700': '#0288d1', '800': '#0277bd', '900': '#01579b', 'a100': '#80d8ff', 'a200': '#40c4ff', 'a400': '#00b0ff', 'a700': '#0091ea'
};
var cyan = exports.cyan = {
  '50': '#e0f7fa', '100': '#b2ebf2', '200': '#80deea', '300': '#4dd0e1', '400': '#26c6da', '500': '#00bcd4', '600': '#00acc1', '700': '#0097a7', '800': '#00838f', '900': '#006064', 'a100': '#84ffff', 'a200': '#18ffff', 'a400': '#00e5ff', 'a700': '#00b8d4'
};
var teal = exports.teal = {
  '50': '#e0f2f1', '100': '#b2dfdb', '200': '#80cbc4', '300': '#4db6ac', '400': '#26a69a', '500': '#009688', '600': '#00897b', '700': '#00796b', '800': '#00695c', '900': '#004d40', 'a100': '#a7ffeb', 'a200': '#64ffda', 'a400': '#1de9b6', 'a700': '#00bfa5'
};
var green = exports.green = {
  '50': '#e8f5e9', '100': '#c8e6c9', '200': '#a5d6a7', '300': '#81c784', '400': '#66bb6a', '500': '#4caf50', '600': '#43a047', '700': '#388e3c', '800': '#2e7d32', '900': '#1b5e20', 'a100': '#b9f6ca', 'a200': '#69f0ae', 'a400': '#00e676', 'a700': '#00c853'
};
var lightGreen = exports.lightGreen = {
  '50': '#f1f8e9', '100': '#dcedc8', '200': '#c5e1a5', '300': '#aed581', '400': '#9ccc65', '500': '#8bc34a', '600': '#7cb342', '700': '#689f38', '800': '#558b2f', '900': '#33691e', 'a100': '#ccff90', 'a200': '#b2ff59', 'a400': '#76ff03', 'a700': '#64dd17'
};
var lime = exports.lime = {
  '50': '#f9fbe7', '100': '#f0f4c3', '200': '#e6ee9c', '300': '#dce775', '400': '#d4e157', '500': '#cddc39', '600': '#c0ca33', '700': '#afb42b', '800': '#9e9d24', '900': '#827717', 'a100': '#f4ff81', 'a200': '#eeff41', 'a400': '#c6ff00', 'a700': '#aeea00'
};
var yellow = exports.yellow = {
  '50': '#fffde7', '100': '#fff9c4', '200': '#fff59d', '300': '#fff176', '400': '#ffee58', '500': '#ffeb3b', '600': '#fdd835', '700': '#fbc02d', '800': '#f9a825', '900': '#f57f17', 'a100': '#ffff8d', 'a200': '#ffff00', 'a400': '#ffea00', 'a700': '#ffd600'
};
var amber = exports.amber = {
  '50': '#fff8e1', '100': '#ffecb3', '200': '#ffe082', '300': '#ffd54f', '400': '#ffca28', '500': '#ffc107', '600': '#ffb300', '700': '#ffa000', '800': '#ff8f00', '900': '#ff6f00', 'a100': '#ffe57f', 'a200': '#ffd740', 'a400': '#ffc400', 'a700': '#ffab00'
};
var orange = exports.orange = {
  '50': '#fff3e0', '100': '#ffe0b2', '200': '#ffcc80', '300': '#ffb74d', '400': '#ffa726', '500': '#ff9800', '600': '#fb8c00', '700': '#f57c00', '800': '#ef6c00', '900': '#e65100', 'a100': '#ffd180', 'a200': '#ffab40', 'a400': '#ff9100', 'a700': '#ff6d00'
};
var deepOrange = exports.deepOrange = {
  '50': '#fbe9e7', '100': '#ffccbc', '200': '#ffab91', '300': '#ff8a65', '400': '#ff7043', '500': '#ff5722', '600': '#f4511e', '700': '#e64a19', '800': '#d84315', '900': '#bf360c', 'a100': '#ff9e80', 'a200': '#ff6e40', 'a400': '#ff3d00', 'a700': '#dd2c00'
};
var brown = exports.brown = {
  '50': '#efebe9', '100': '#d7ccc8', '200': '#bcaaa4', '300': '#a1887f', '400': '#8d6e63', '500': '#795548', '600': '#6d4c41', '700': '#5d4037', '800': '#4e342e', '900': '#3e2723'
};
var grey = exports.grey = {
  '50': '#fafafa', '100': '#f5f5f5', '200': '#eeeeee', '300': '#e0e0e0', '400': '#bdbdbd', '500': '#9e9e9e', '600': '#757575', '700': '#616161', '800': '#424242', '900': '#212121'
};
var blueGrey = exports.blueGrey = {
  '50': '#eceff1', '100': '#cfd8dc', '200': '#b0bec5', '300': '#90a4ae', '400': '#78909c', '500': '#607d8b', '600': '#546e7a', '700': '#455a64', '800': '#37474f', '900': '#263238'
};
var darkText = exports.darkText = {
  'primary': 'rgba(0, 0, 0, 0.87)', 'secondary': 'rgba(0, 0, 0, 0.54)', 'disabled': 'rgba(0, 0, 0, 0.38)', 'dividers': 'rgba(0, 0, 0, 0.12)'
};
var lightText = exports.lightText = {
  'primary': 'rgba(255, 255, 255, 1)', 'secondary': 'rgba(255, 255, 255, 0.7)', 'disabled': 'rgba(255, 255, 255, 0.5)', 'dividers': 'rgba(255, 255, 255, 0.12)'
};
var darkIcons = exports.darkIcons = { 'active': 'rgba(0, 0, 0, 0.54)', 'inactive': 'rgba(0, 0, 0, 0.38)' };
var lightIcons = exports.lightIcons = { 'active': 'rgba(255, 255, 255, 1)', 'inactive': 'rgba(255, 255, 255, 0.5)' };
var white = exports.white = '#ffffff';
var black = exports.black = '#000000';

var materialColors = exports.materialColors = {
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

/***/ "./node_modules/grommet-controls/components/uiColors/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/uiColors/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _uiColors = __webpack_require__(/*! ./uiColors */ "./node_modules/grommet-controls/components/uiColors/uiColors.js");

Object.defineProperty(exports, 'uiColors', {
  enumerable: true,
  get: function get() {
    return _uiColors.uiColors;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/uiColors/uiColors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/uiColors/uiColors.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var aqua = exports.aqua = '#00ffff';
var azure = exports.azure = '#f0ffff';
var beige = exports.beige = '#f5f5dc';
var black = exports.black = '#000000';
var blue = exports.blue = '#0000ff';
var brown = exports.brown = '#a52a2a';
var cyan = exports.cyan = '#00ffff';
var darkblue = exports.darkblue = '#00008b';
var darkcyan = exports.darkcyan = '#008b8b';
var darkgrey = exports.darkgrey = '#a9a9a9';
var darkgreen = exports.darkgreen = '#006400';
var darkkhaki = exports.darkkhaki = '#bdb76b';
var darkmagenta = exports.darkmagenta = '#8b008b';
var darkolivegreen = exports.darkolivegreen = '#556b2f';
var darkorange = exports.darkorange = '#ff8c00';
var darkorchid = exports.darkorchid = '#9932cc';
var darkred = exports.darkred = '#8b0000';
var darksalmon = exports.darksalmon = '#e9967a';
var darkviolet = exports.darkviolet = '#9400d3';
var fuchsia = exports.fuchsia = '#ff00ff';
var gold = exports.gold = '#ffd700';
var green = exports.green = '#008000';
var indigo = exports.indigo = '#4b0082';
var khaki = exports.khaki = '#f0e68c';
var lightblue = exports.lightblue = '#add8e6';
var lightcyan = exports.lightcyan = '#e0ffff';
var lightgreen = exports.lightgreen = '#90ee90';
var lightgrey = exports.lightgrey = '#d3d3d3';
var lightpink = exports.lightpink = '#ffb6c1';
var lightyellow = exports.lightyellow = '#ffffe0';
var lime = exports.lime = '#00ff00';
var magenta = exports.magenta = '#ff00ff';
var maroon = exports.maroon = '#800000';
var navy = exports.navy = '#000080';
var olive = exports.olive = '#808000';
var orange = exports.orange = '#ffa500';
var pink = exports.pink = '#ffc0cb';
var purple = exports.purple = '#800080';
var violet = exports.violet = '#800080';
var red = exports.red = '#ff0000';
var silver = exports.silver = '#c0c0c0';
var white = exports.white = '#ffffff';
var yellow = exports.yellow = '#ffff00';

var uiColors = exports.uiColors = {
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

/***/ "./node_modules/grommet-controls/components/validators/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/grommet-controls/components/validators/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _validators = __webpack_require__(/*! ./validators */ "./node_modules/grommet-controls/components/validators/validators.js");

Object.defineProperty(exports, 'validators', {
  enumerable: true,
  get: function get() {
    return _validators.validators;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/validators/validators.js":
/*!***************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/validators/validators.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
exports.validators = validators;

/***/ }),

/***/ "./node_modules/grommet-controls/components/withFormField/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/withFormField/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _withFormField = __webpack_require__(/*! ./withFormField */ "./node_modules/grommet-controls/components/withFormField/withFormField.js");

Object.defineProperty(exports, 'withFormField', {
  enumerable: true,
  get: function get() {
    return _withFormField.withFormField;
  }
});

/***/ }),

/***/ "./node_modules/grommet-controls/components/withFormField/withFormField.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/grommet-controls/components/withFormField/withFormField.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withFormField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grommet = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var field = _react2.default.createElement(WrappedField, _extends({
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
      return _react2.default.createElement(
        _grommet.FormField,
        { htmlFor: name, label: label || controlLabel === true && name, error: error },
        field
      );
    };

    return GrommetField;
  }(_react2.default.Component), _class.defaultProps = {
    validation: undefined,
    inField: true,
    controlLabel: undefined
  }, _class.propTypes = {
    validation: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.func), _propTypes2.default.func]),
    name: _propTypes2.default.string.isRequired
  }, _class.contextTypes = {
    form: _propTypes2.default.object
  }, _temp2;
};
exports.withFormField = withFormField;

/***/ }),

/***/ "./node_modules/grommet-controls/utils/colors.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet-controls/utils/colors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var colorFromIndex = exports.colorFromIndex = function colorFromIndex(index) {
  var idx = index % 9 + 1;
  return idx <= 4 ? "accent-" + idx : "neutral-" + (idx - 4);
};

var colorForName = exports.colorForName = function colorForName(name, theme) {
  return theme.global.colors[name] || name;
};

/***/ }),

/***/ "./node_modules/grommet-controls/utils/moment.js":
/*!*******************************************************!*\
  !*** ./node_modules/grommet-controls/utils/moment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var smallDate = exports.smallDate = function smallDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-us';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

var shortDate = exports.shortDate = function shortDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-us';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

var longDate = exports.longDate = function longDate(date) {
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
    direction: "row",
    wrap: "true",
    alignContent: "between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_7__["Card"], {
      basis: "medium",
      animation: "fadeIn",
      background: "dark-1",
      elevation: "xxsmall",
      gap: "small",
      margin: "medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_7__["Card"].CardTitle, {
      color: "brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, item.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet_controls__WEBPACK_IMPORTED_MODULE_7__["Card"].CardContent, {
      color: "dark-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
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
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      height: "small",
      width: "medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Image"], {
      fit: "cover",
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, item.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "$", item.price), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.category), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      label: "Remove",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })));
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
//# sourceMappingURL=index.js.d316b9af545c8ec5bc19.hot-update.js.map