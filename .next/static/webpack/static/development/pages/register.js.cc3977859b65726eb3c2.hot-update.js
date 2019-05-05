webpackHotUpdate("static/development/pages/register.js",{

/***/ "./node_modules/grommet/themes/base.js":
/*!*********************************************!*\
  !*** ./node_modules/grommet/themes/base.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.base = exports.generate = void 0;

var _polished = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _Actions = __webpack_require__(/*! grommet-icons/icons/Actions */ "./node_modules/grommet-icons/icons/Actions.js");

var _ClosedCaption = __webpack_require__(/*! grommet-icons/icons/ClosedCaption */ "./node_modules/grommet-icons/icons/ClosedCaption.js");

var _Expand = __webpack_require__(/*! grommet-icons/icons/Expand */ "./node_modules/grommet-icons/icons/Expand.js");

var _FormDown = __webpack_require__(/*! grommet-icons/icons/FormDown */ "./node_modules/grommet-icons/icons/FormDown.js");

var _FormNext = __webpack_require__(/*! grommet-icons/icons/FormNext */ "./node_modules/grommet-icons/icons/FormNext.js");

var _FormPrevious = __webpack_require__(/*! grommet-icons/icons/FormPrevious */ "./node_modules/grommet-icons/icons/FormPrevious.js");

var _FormUp = __webpack_require__(/*! grommet-icons/icons/FormUp */ "./node_modules/grommet-icons/icons/FormUp.js");

var _Next = __webpack_require__(/*! grommet-icons/icons/Next */ "./node_modules/grommet-icons/icons/Next.js");

var _Pause = __webpack_require__(/*! grommet-icons/icons/Pause */ "./node_modules/grommet-icons/icons/Pause.js");

var _Play = __webpack_require__(/*! grommet-icons/icons/Play */ "./node_modules/grommet-icons/icons/Play.js");

var _Previous = __webpack_require__(/*! grommet-icons/icons/Previous */ "./node_modules/grommet-icons/icons/Previous.js");

var _Subtract = __webpack_require__(/*! grommet-icons/icons/Subtract */ "./node_modules/grommet-icons/icons/Subtract.js");

var _Volume = __webpack_require__(/*! grommet-icons/icons/Volume */ "./node_modules/grommet-icons/icons/Volume.js");

var _VolumeLow = __webpack_require__(/*! grommet-icons/icons/VolumeLow */ "./node_modules/grommet-icons/icons/VolumeLow.js");

var _base = __webpack_require__(/*! grommet-icons/themes/base */ "./node_modules/grommet-icons/themes/base.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var _colors = __webpack_require__(/*! ../utils/colors */ "./node_modules/grommet/utils/colors.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var brandColor = '#7D4CDB';
var accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
var neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
var statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
};
var darkColors = ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999'];
var lightColors = ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA'];
var focusColor = accentColors[0];
var colors = {
  active: (0, _polished.rgba)(221, 221, 221, 0.5),
  black: '#000000',
  border: {
    dark: (0, _polished.rgba)(255, 255, 255, 0.33),
    light: (0, _polished.rgba)(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand'
  },
  focus: focusColor,
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444'
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});

var generate = function generate(baseSpacing, scale) {
  if (baseSpacing === void 0) {
    baseSpacing = 24;
  }

  if (scale === void 0) {
    scale = 6;
  }

  // 24
  var baseFontSize = baseSpacing * 0.75; // 18

  var fontScale = baseSpacing / scale; // 4

  var fontSizing = function fontSizing(factor) {
    return {
      size: baseFontSize + factor * fontScale + "px",
      height: baseSpacing + factor * fontScale + "px",
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: baseSpacing * (baseFontSize + factor * fontScale) + "px"
    };
  };

  var borderWidth = 2;
  var result = (0, _object.deepMerge)(_base.base, {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + "px",
        // 4
        large: baseSpacing / 2 + "px",
        // 12
        xlarge: baseSpacing + "px" // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: baseSpacing / 6 + "px",
            // 4
            large: baseSpacing / 4 + "px",
            // 6
            xlarge: baseSpacing / 2 + "px" // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + "px",
            // 3
            small: baseSpacing / 4 + "px",
            // 6
            medium: baseSpacing / 2 + "px",
            // 12
            large: baseSpacing + "px",
            // 24
            xlarge: baseSpacing * 2 + "px" // 48

          },
          size: {
            xxsmall: baseSpacing + "px",
            // 24
            xsmall: baseSpacing * 2 + "px",
            // 48
            small: baseSpacing * 4 + "px",
            // 96
            medium: baseSpacing * 8 + "px",
            // 192
            large: baseSpacing * 16 + "px",
            // 384
            xlarge: baseSpacing * 32 + "px",
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {} // anything above 'medium'

      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large'
      },
      colors: colors,
      control: {
        border: {
          width: '1px',
          radius: '4px',
          color: 'border'
        },
        disabled: {
          opacity: 0.3
        }
      },
      debounceDelay: 300,
      // The time to wait after the user stopped typing, measured in ms.
      drop: {
        background: '#ffffff',
        border: {
          radius: '0px'
        },
        shadowSize: 'small',
        zIndex: '20'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: baseSpacing / 8 + "px",
        // 3
        xsmall: baseSpacing / 4 + "px",
        // 6
        small: baseSpacing / 2 + "px",
        // 12
        medium: baseSpacing + "px",
        // 24
        large: baseSpacing * 2 + "px",
        // 48
        xlarge: baseSpacing * 4 + "px",
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        border: {
          color: 'focus'
        }
      },
      font: _extends({}, fontSizing(0)),
      hover: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      input: {
        padding: baseSpacing / 2 + "px",
        weight: 600
      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1
      },
      selected: {
        background: 'selected',
        color: 'white'
      },
      spacing: baseSpacing + "px",
      size: {
        xxsmall: baseSpacing * 2 + "px",
        // 48
        xsmall: baseSpacing * 4 + "px",
        // 96
        small: baseSpacing * 8 + "px",
        // 192
        medium: baseSpacing * 16 + "px",
        // 384
        large: baseSpacing * 32 + "px",
        // 768
        xlarge: baseSpacing * 48 + "px",
        // 1152
        xxlarge: baseSpacing * 64 + "px",
        // 1536
        full: '100%'
      }
    },
    accordion: {
      border: {
        side: 'bottom',
        color: 'border'
      },
      heading: {
        level: '4'
      },
      // level ranges from 1-6
      icons: {
        collapse: _FormUp.FormUp,
        expand: _FormDown.FormDown // color: { dark: undefined, light: undefined },

      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'accent-1',
        light: 'brand'
      },
      hover: {
        textDecoration: 'underline' // fontWeight: undefined,
        // extend: undefined,

      } // extend: undefined,

    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns
      // extend: undefined,

    },
    button: {
      border: {
        // color: { dark: undefined, light: undefined }
        width: borderWidth + "px",
        radius: baseSpacing * 0.75 + "px"
      },
      // color: { dark: undefined, light: undefined }
      primary: {// color: { dark: undefined, light: undefined }
      },
      // disabled: { opacity: undefined },
      padding: {
        vertical: baseSpacing / 4 - borderWidth + "px",
        horizontal: baseSpacing - borderWidth + "px"
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: baseFontSize - fontScale + "px",
        lineHeight: 1.375,
        daySize: baseSpacing * 8 / 7 + "px",
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: baseFontSize + "px",
        lineHeight: 1.45,
        daySize: baseSpacing * 16 / 7 + "px",
        slideDuration: '0.5s'
      },
      large: {
        fontSize: baseFontSize + 3 * fontScale + "px",
        lineHeight: 1.11,
        daySize: baseSpacing * 32 / 7 + "px",
        slideDuration: '0.8s'
      },
      icons: {
        previous: _Previous.Previous,
        next: _Next.Next,
        small: {
          previous: _FormPrevious.FormPrevious,
          next: _FormNext.FormNext
        }
      }
    },
    carousel: {
      icons: {
        current: _Subtract.Subtract,
        next: _Next.Next,
        previous: _Previous.Previous // color: undefined,

      }
    },
    chart: {// extend: undefined,
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        // extend: undefined,
        radius: '4px',
        thickness: '4px'
      },
      // color: { dark: undefined, light: undefined },
      // extend: undefined,
      // gap: undefined
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// checked: undefined,
        // indeterminate: undefined,
      },
      size: baseSpacing + "px",
      toggle: {
        // background: undefined
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9'
        },
        knob: {// extend: undefined,
        },
        radius: baseSpacing + "px",
        size: baseSpacing * 2 + "px" // extend: undefined,

      }
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: baseSpacing / 3 + "px",
          size: baseSpacing + "px",
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          },
          width: baseSpacing / 6 + "px",
          size: Math.round(baseSpacing / 2) + "px",
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: baseSpacing / 8 + "px",
          size: Math.round(baseSpacing / 2.666) + "px",
          shape: 'round'
        },
        size: {
          small: baseSpacing * 3 + "px",
          medium: baseSpacing * 4 + "px",
          large: baseSpacing * 6 + "px",
          xlarge: baseSpacing * 9 + "px",
          huge: baseSpacing * 12 + "px"
        }
      },
      digital: {
        text: {
          xsmall: {
            size: baseFontSize - 2 * fontScale + "px",
            height: 1.5
          },
          small: {
            size: baseFontSize - fontScale + "px",
            height: 1.43
          },
          medium: {
            size: baseFontSize + "px",
            height: 1.375
          },
          large: {
            size: baseFontSize + fontScale + "px",
            height: 1.167
          },
          xlarge: {
            size: baseFontSize + 2 * fontScale + "px",
            height: 1.1875
          },
          xxlarge: {
            size: baseFontSize + 4 * fontScale + "px",
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dataTable: {
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2'
        },
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        fill: 'vertical',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        }
      },
      header: {},
      icons: {
        ascending: _FormDown.FormDown,
        contract: _FormUp.FormUp,
        descending: _FormUp.FormUp,
        expand: _FormDown.FormDown
      },
      primary: {
        weight: 'bold'
      },
      resize: {
        border: {
          color: 'border',
          side: 'right'
        }
      }
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'accent-1'
      }
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical'
          }
        },
        position: 'inner',
        side: 'bottom'
      },
      content: {
        pad: {
          horizontal: 'small',
          bottom: 'small'
        }
      },
      error: {
        color: {
          dark: 'status-critical',
          light: 'status-critical'
        },
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        }
      },
      // extend: undefined,
      help: {
        color: {
          dark: 'dark-3',
          light: 'dark-3'
        },
        margin: {
          left: 'small'
        }
      },
      label: {
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        }
      },
      margin: {
        bottom: 'small'
      }
    },
    grommet: {},
    heading: {
      font: {// family: undefined
      },
      level: {
        1: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(4)),
          medium: _extends({}, fontSizing(8)),
          large: _extends({}, fontSizing(16)),
          xlarge: _extends({}, fontSizing(24))
        },
        2: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(2)),
          medium: _extends({}, fontSizing(4)),
          large: _extends({}, fontSizing(8)),
          xlarge: _extends({}, fontSizing(12))
        },
        3: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(1)),
          medium: _extends({}, fontSizing(2)),
          large: _extends({}, fontSizing(4)),
          xlarge: _extends({}, fontSizing(6))
        },
        4: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(0)),
          medium: _extends({}, fontSizing(0)),
          large: _extends({}, fontSizing(0)),
          xlarge: _extends({}, fontSizing(0))
        },
        5: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-0.5)),
          medium: _extends({}, fontSizing(-0.5)),
          large: _extends({}, fontSizing(-0.5)),
          xlarge: _extends({}, fontSizing(-0.5))
        },
        6: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-1)),
          medium: _extends({}, fontSizing(-1)),
          large: _extends({}, fontSizing(-1)),
          xlarge: _extends({}, fontSizing(-1))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 600
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px'
      },
      container: {
        zIndex: '15'
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small',
      // when Layer takes over the full screen
      zIndex: '10'
    },
    maskedInput: {// extend: undefined,
    },
    menu: {
      // background: undefined,
      // extend: undefined,
      icons: {
        down: _FormDown.FormDown
      }
    },
    meter: {
      color: 'accent-1' // extend: undefined,

    },
    paragraph: {
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '100%' // color: { dark: undefined, light: undefined },
        // extend: undefined,

      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// circle: undefined,
      },
      gap: 'small',
      size: baseSpacing + "px"
    },
    rangeInput: {
      track: {
        height: '4px',
        color: (0, _styledComponents.css)(["", ";"], function (props) {
          return (0, _polished.rgba)((0, _colors.normalizeColor)('border', props.theme), 0.2);
        })
      },
      thumb: {// color: { dark: undefined, light: undefined },
      }
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4'
        }
      } // edge: {
      //   type: undefined,
      // },

    },
    select: {
      // background: undefined,
      container: {// extend: undefined,
      },
      control: {// extend: undefined,
      },
      icons: {
        // color: { dark: undefined, light: undefined },
        down: _FormDown.FormDown
      },
      options: {
        box: {
          align: 'start',
          pad: 'small'
        },
        text: {
          margin: 'none'
        }
      },
      // searchInput: undefined,
      step: 20
    },
    tab: {
      active: {
        color: 'text' // background: undefined,

      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'accent-1',
          light: 'brand'
        },
        active: {
          color: {
            dark: 'white',
            light: 'black'
          }
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black'
          } // extend: undefined,

        }
      },
      color: 'control',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small'
      },
      pad: {
        bottom: 'xsmall'
      }
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      // gap: undefined,
      header: {// background: undefined,
        // extend: undefined,
      },
      panel: {// extend: undefined,
      }
    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'bottom',
        verticalAlign: 'bottom',
        fill: 'vertical' // background: undefined,
        // extend: undefined,

      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        } // border: undefined,
        // extend: undefined,

      },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top',
        verticalAlign: 'top',
        fill: 'vertical' // extend: undefined,

      }
    },
    text: {
      xsmall: _extends({}, fontSizing(-1.5)),
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    textArea: {// extend: undefined,
      // disabled: { opacity: undefined },
    },
    textInput: {// extend: undefined,
      // disabled: { opacity: undefined },
    },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)'
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: _ClosedCaption.ClosedCaption,
        configure: _Actions.Actions,
        fullScreen: _Expand.Expand,
        pause: _Pause.Pause,
        play: _Play.Play,
        reduceVolume: _VolumeLow.VolumeLow,
        volume: _Volume.Volume // color: { dark: undefined, light: undefined },

      },
      // scrubber: { track: { color: undefined } },
      scrubber: {
        color: 'light-4'
      }
    },
    worldMap: {
      color: 'light-3',
      continent: {
        active: '8px',
        base: '6px'
      },
      hover: {
        color: 'light-4'
      },
      place: {
        active: '20px',
        base: '8px'
      }
    }
  });
  return (0, _object.deepFreeze)(result);
};

exports.generate = generate;
var base = generate(24);
exports.base = base;

/***/ }),

/***/ "./node_modules/grommet/themes/dark.js":
/*!*********************************************!*\
  !*** ./node_modules/grommet/themes/dark.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dark = void 0;

var _polished = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var _colors = __webpack_require__(/*! ../utils/colors */ "./node_modules/grommet/utils/colors.js");

var accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var backgroundColor = '#111111';
var colors = {
  active: (0, _polished.rgba)(102, 102, 102, 0.5),
  background: backgroundColor,
  black: '#000000',
  brand: '#FD6FFF',
  control: {
    dark: '#FFCA58',
    light: '#403216'
  },
  focus: '#FFCA58',
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  placeholder: '#AAAAAA',
  text: {
    dark: '#eeeeee',
    light: '#444444'
  },
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});
var dark = (0, _object.deepFreeze)({
  global: {
    colors: colors,
    drop: {
      background: '#333333'
    },
    focus: {
      border: {
        color: (0, _styledComponents.css)(["", ";"], function (props) {
          return (0, _colors.normalizeColor)('focus', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: 'Arial'
    },
    input: {
      weight: 700
    }
  },
  anchor: {
    color: 'control'
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: (0, _polished.rgba)(48, 48, 48, 0.5)
    }
  }
});
exports.dark = dark;

/***/ }),

/***/ "./node_modules/grommet/themes/grommet.js":
/*!************************************************!*\
  !*** ./node_modules/grommet/themes/grommet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.grommet = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var grommet = (0, _object.deepFreeze)({
  global: {
    colors: {
      background: '#ffffff'
    },
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",  "Helvetica Neue", Arial, sans-serif,  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  },
  button: {
    extend: (0, _styledComponents.css)(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});
exports.grommet = grommet;

/***/ }),

/***/ "./node_modules/grommet/themes/index.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/themes/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dark = exports.grommet = exports.generate = exports.base = void 0;

var _base = __webpack_require__(/*! ./base */ "./node_modules/grommet/themes/base.js");

exports.base = _base.base;
exports.generate = _base.generate;

var _grommet = __webpack_require__(/*! ./grommet */ "./node_modules/grommet/themes/grommet.js");

exports.grommet = _grommet.grommet;

var _dark = __webpack_require__(/*! ./dark */ "./node_modules/grommet/themes/dark.js");

exports.dark = _dark.dark;

/***/ }),

/***/ "./node_modules/grommet/utils/colors.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/colors.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRGBA = exports.colorIsDark = exports.normalizeColor = void 0;

var normalizeColor = function normalizeColor(color, theme, required) {
  var colorSpec = theme.global.colors[color] || color; // If the color has a light or dark object, use that

  var result = colorSpec;

  if (colorSpec) {
    if (theme.dark && colorSpec.dark) {
      result = colorSpec.dark;
    } else if (!theme.dark && colorSpec.light) {
      result = colorSpec.light;
    }
  } // allow one level of indirection in color names


  if (result && theme.global.colors[result]) {
    result = normalizeColor(result, theme);
  }

  return required && result === color ? 'inherit' : result;
};

exports.normalizeColor = normalizeColor;

var parseHexToRGB = function parseHexToRGB(color) {
  return color.length === 4 ? color.match(/[A-Za-z0-9]{1}/g).map(function (v) {
    return parseInt(v, 16);
  }) : // https://stackoverflow.com/a/42429333
  color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  });
};

var canExtractRGBArray = function canExtractRGBArray(color) {
  return /^#/.test(color) || /^rgb/.test(color);
};

var getRGBArray = function getRGBArray(color) {
  if (/^#/.test(color)) {
    return parseHexToRGB(color);
  }

  if (/^rgb/.test(color)) {
    return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
  }

  return color;
};

var colorIsDark = function colorIsDark(color) {
  var _getRGBArray = getRGBArray(color),
      red = _getRGBArray[0],
      green = _getRGBArray[1],
      blue = _getRGBArray[2]; // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};

exports.colorIsDark = colorIsDark;

var getRGBA = function getRGBA(color, opacity) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray2 = getRGBArray(color),
        red = _getRGBArray2[0],
        green = _getRGBArray2[1],
        blue = _getRGBArray2[2];

    return "rgba(" + red + ", " + green + ", " + blue + ", " + (opacity || 1) + ")";
  }

  return undefined;
};

exports.getRGBA = getRGBA;

/***/ }),

/***/ "./node_modules/grommet/utils/object.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/object.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeUndefined = exports.deepMerge = exports.deepFreeze = exports.isObject = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};

exports.isObject = isObject;

var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};

exports.deepFreeze = deepFreeze;

var deepMerge = function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) {
    return target;
  } // making sure to not change target (immutable)


  var output = _extends({}, target);

  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
};

exports.deepMerge = deepMerge;

var removeUndefined = function removeUndefined(obj) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  });
  return result;
};

exports.removeUndefined = removeUndefined;

/***/ }),

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

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
var _jsxFileName = "/Users/hugomcmittens/devleague/consume-more-stuff/pages/components/header.js";




var linkStyle = {
  marginRight: 15,
  textDecoration: "none"
};

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    color: "neutral-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.title));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_3__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    direction: "row-responsive",
    fit: "cover",
    pad: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    title: "SHOP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    title: "LOGIN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Layer"], {
    position: "right",
    full: "vertical",
    onClickOutside: {
      open: false
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "form",
    fill: "vertical",
    overflow: "auto",
    width: "medium",
    pad: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: false,
    direction: "row",
    justify: "between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    level: 2,
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: "grow",
    overflow: "auto",
    pad: {
      vertical: "medium"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    label: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
    label: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["TextArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: false,
    as: "footer",
    align: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/components/layout.js":
/*!************************************!*\
  !*** ./pages/components/layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./pages/components/header.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/hugomcmittens/devleague/consume-more-stuff/pages/components/layout.js";




var wrapperStyle = {
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: "#111111"
};
var headerStyle = {
  margin: 15,
  display: "flex",
  alignContent: "center"
};
var layoutWidth = {
  margin: 0,
  padding: 0
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], {
    theme: grommet_themes__WEBPACK_IMPORTED_MODULE_3__["dark"],
    full: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: wrapperStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=register.js.cc3977859b65726eb3c2.hot-update.js.map