self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./components/componentPortfolio.js":
/*!******************************************!*\
  !*** ./components/componentPortfolio.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Users\\tomaz\\projetos\\react-projects\\drone3\\components\\componentPortfolio.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\ncursor: pointer;\nposition: relative;\nheight: auto;\nwidth: 100%;\nbackground-repeat: no-repeat;\nbackground-position: center bottom;  \nbackground-size: cover;\npadding-top: 5px;\nmargin: 1px 0 0px 0;\n\n\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\nmin-height: 100vh;\n\n.imgdoModal{\n    width: 500px!important;\n    height: 100px;\n}\n\n.rightCol{\n    /* /* padding-right: 25px; */\n    @media screen and (min-width: 600px) {\n    padding-right:25px;\n    } \n}\n\n.leftColCOntent{\n    margin: 20px 5px auto 100px;  \n    @media screen and (max-width: 600px) {\n        margin: auto;\n    }\n}\n\n\n.ifcontainer {\n                position: relative;\n                overflow: hidden;\n                width: 100%;\n                padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n              }\n              \n\n.titulo{\n    font-style: normal;\nfont-weight: bold;\nfont-size: 30px;\nline-height: 37px;\nmargin-top: 20px;\n}\n\n.descript{\n    font-family: Montserrat;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 15px;\nline-height: 18px;  \nmargin-bottom: 30px;\n}\n\n.portfolio{\nfont-family: Montserrat;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 55px;\nline-height: 67px;\ncolor: #4D4D4D;\n\nmargin: 40px 0 30px 8px;\n\n}\n\n\n.scroll {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  text-align: center;\n}\n\n/* Esconder scrollbar for Chrome, Safari and Opera */\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n\n/* Esconder scrollbar for IE, Edge and Firefox */\n.scroll {\n  -ms-overflow-style: none;  \n  scrollbar-width: none;  \n}\n.prow{\n    height:  120vh; \n}\n\n   \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ComponentPortfolio = function ComponentPortfolio() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    show: false,
    item: 0
  }),
      lgShow = _useState[0],
      setLgShow = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    item: 0,
    tipo: "video"
  }),
      servico = _useState2[0],
      setservico = _useState2[1];

  var changeVideo = function changeVideo(num, modo) {
    setservico({
      item: num,
      tipo: modo
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var droneitem = parseInt(localStorage.getItem('DRONEITEM'));
    var choose = 0; // debugger

    if (!droneitem || droneitem == "") {
      choose = 0;
    } else if (droneitem > items.length) {
      choose = items.length - 1;
    } else {
      choose = droneitem;
    }

    setservico(_objectSpread(_objectSpread({}, servico), {}, {
      item: choose || 0
    }));
  }, []);
  var items = [{
    altText: 'Deserto do Saara é quente. Deserto do Saara é quente. Deserto do Saara é quente. Deserto do Saara é quente.',
    caption: 'Deserto do Saara',
    youtube: 'RdFkC6Gtb5A'
  }, {
    altText: 'Ilhas de Bermudas são lindas',
    foto: '/assets/phantom1.png',
    caption: 'Ilhas de Bermudas',
    youtube: 'mA30W2dHQIo'
  }, {
    altText: 'Deserto do Atacama de noite Deserto do Atacama de noite Deserto do Atacama de noite Deserto do Atacama de noite',
    caption: 'Deserto do Atacama',
    youtube: 'x2D7jHfitzk',
    foto: '/assets/imgsAereas.png'
  }, {
    altText: 'Planeta Terra Planeta Terra Planeta Terra Lorem Lorem Loresm',
    caption: 'Planeta Terra ',
    foto: '/assets/CIRCULAR13.png',
    youtube: 'W0LHTWG-UmQ'
  }, {
    altText: 'Praia Bonita',
    foto: '/assets/error.png',
    caption: 'Mar lindo',
    youtube: 'mA30W2dHQIo'
  }, {
    altText: 'Lorem do Deserto',
    caption: 'Deserto',
    youtube: 'RdFkC6Gtb5A'
  }];

  var Popupfoto2 = function Popupfoto2(props) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal, {
      size: "lg",
      show: lgShow.show,
      onHide: function onHide() {
        return setLgShow({
          show: false,
          item: 0
        });
      },
      "aria-labelledby": "example-modal-sizes-title-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Title, {
          id: "example-modal-sizes-title-lg",
          children: items[lgShow.item].caption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          width: "100%",
          alt: "img",
          src: items[lgShow.item].portrait || "https://img.youtube.com/vi/".concat(items[lgShow.item].youtube, "/0.jpg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StContainer, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Popupfoto2, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
      xs: 1,
      md: 2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
        xs: 12,
        md: 8,
        className: "mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
          className: "paginaTitulos2",
          children: "Portfolio "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 18
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "leftColCOntent",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "ifcontainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("iframe", {
              className: "responsive-iframe",
              width: "560",
              height: "315",
              src: "https://www.youtube.com/embed/".concat(items[servico.item || 0].youtube),
              title: "".concat(items[servico.item || 0].titulo),
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            className: "titulo",
            children: items[servico.item || 0].titulo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "descript",
            children: items[servico.item || 0].subtitulo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
        className: " rightCol",
        md: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
          className: " prow",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
            className: "h-100",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: " scroll ",
              children: items.map(function (item, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GradImage, {
                  alt: item.youtube,
                  onClick: function onClick() {
                    return changeVideo(i, "video");
                  },
                  src: "https://img.youtube.com/vi/".concat(item.youtube, "/1.jpg")
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 57
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
            className: "h-100",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "scroll",
              children: items.map(function (item, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GradImage, {
                  altText: item.youtube,
                  alt: item.youtube // onClick={() => changeVideo(i, "foto")}
                  // onClick={() => popupfoto(`https://img.youtube.com/vi/${item.youtube}/0.jpg`)}
                  ,
                  onClick: function onClick() {
                    return setLgShow({
                      show: true,
                      item: i
                    });
                  },
                  src: "https://img.youtube.com/vi/".concat(item.youtube, "/0.jpg") // src={item.portrait}

                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 57
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 9
  }, _this);
};

_s(ComponentPortfolio, "dcNea/e900hKiIJHEE/W55KdLGw=");

_c = ComponentPortfolio;
/* harmony default export */ __webpack_exports__["default"] = (ComponentPortfolio);
var StContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container)(_templateObject());
/**Observe que é uma IMG */

_c2 = StContainer;
var GradImage = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.img(_templateObject2());
_c3 = GradImage;

var _c, _c2, _c3;

$RefreshReg$(_c, "ComponentPortfolio");
$RefreshReg$(_c2, "StContainer");
$RefreshReg$(_c3, "GradImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wb25lbnRQb3J0Zm9saW8uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50UG9ydGZvbGlvIiwidXNlU3RhdGUiLCJzaG93IiwiaXRlbSIsImxnU2hvdyIsInNldExnU2hvdyIsInRpcG8iLCJzZXJ2aWNvIiwic2V0c2VydmljbyIsImNoYW5nZVZpZGVvIiwibnVtIiwibW9kbyIsInVzZUVmZmVjdCIsImRyb25laXRlbSIsInBhcnNlSW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNob29zZSIsIml0ZW1zIiwibGVuZ3RoIiwiYWx0VGV4dCIsImNhcHRpb24iLCJ5b3V0dWJlIiwiZm90byIsIlBvcHVwZm90bzIiLCJwcm9wcyIsInBvcnRyYWl0IiwidGl0dWxvIiwic3VidGl0dWxvIiwibWFwIiwiaSIsIlN0Q29udGFpbmVyIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiR3JhZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBQUEsa0JBRURDLCtDQUFRLENBQUM7QUFBQ0MsUUFBSSxFQUFFLEtBQVA7QUFBZUMsUUFBSSxFQUFFO0FBQXJCLEdBQUQsQ0FGUDtBQUFBLE1BRXRCQyxNQUZzQjtBQUFBLE1BRWRDLFNBRmM7O0FBQUEsbUJBSUNKLCtDQUFRLENBQUM7QUFDbkNFLFFBQUksRUFBRSxDQUQ2QjtBQUVuQ0csUUFBSSxFQUFFO0FBRjZCLEdBQUQsQ0FKVDtBQUFBLE1BSXRCQyxPQUpzQjtBQUFBLE1BSWJDLFVBSmE7O0FBVzdCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQy9CSCxjQUFVLENBQUM7QUFDUEwsVUFBSSxFQUFF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QUUsSUFBUDtBQUFjQywwQkFBSSxFQUFFMkI7QUFBcEIscUJBQUQsQ0FBZjtBQUFBLG1CQUxXO0FBTXBCLHFCQUFHLHVDQUFnQzNCLElBQUksQ0FBQ21CLE9BQXJDLFdBTmlCLENBT3BCOztBQVBvQixtQkFRZlEsQ0FSZTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFiO0FBQUEsZUFBVjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1RUgsQ0F0TEQ7O0dBQU05QixrQjs7S0FBQUEsa0I7QUEwTE4sK0RBQWVBLGtCQUFmO0FBT0EsSUFBTStCLFdBQVcsR0FBR0MsMERBQU0sQ0FBQ0Msc0RBQUQsQ0FBVCxtQkFBakI7QUF3RkE7O01BeEZNRixXO0FBeUZOLElBQU1HLFNBQVMsR0FBR0YsMERBQUgsb0JBQWY7TUFBTUUsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3J0Zm9saW8uZjIyNzE2ODUzNDdlNDk0YTg3ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ29sLCBSb3csIENvbnRhaW5lciwgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcbmNvbnN0IENvbXBvbmVudFBvcnRmb2xpbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbGdTaG93LCBzZXRMZ1Nob3ddID0gdXNlU3RhdGUoe3Nob3c6IGZhbHNlLCAgaXRlbTogMH0pO1xyXG5cclxuICAgIGNvbnN0IFtzZXJ2aWNvLCBzZXRzZXJ2aWNvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpdGVtOiAwLFxyXG4gICAgICAgIHRpcG86IFwidmlkZW9cIlxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVZpZGVvID0gKG51bSwgbW9kbykgPT4ge1xyXG4gICAgICAgIHNldHNlcnZpY28oe1xyXG4gICAgICAgICAgICBpdGVtOiBudW0sXHJcbiAgICAgICAgICAgIHRpcG86IG1vZG9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb25laXRlbSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdEUk9ORUlURU0nKSlcclxuICAgICAgICBsZXQgY2hvb3NlID0gMFxyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgaWYgKCFkcm9uZWl0ZW0gfHwgZHJvbmVpdGVtID09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2hvb3NlID0gMFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZHJvbmVpdGVtID4gaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNob29zZSA9IGl0ZW1zLmxlbmd0aCAtIDFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaG9vc2UgPSBkcm9uZWl0ZW1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldHNlcnZpY28oe1xyXG4gICAgICAgICAgICAuLi5zZXJ2aWNvLFxyXG4gICAgICAgICAgICBpdGVtOiBjaG9vc2UgfHwgMFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGFsdFRleHQ6ICdEZXNlcnRvIGRvIFNhYXJhIMOpIHF1ZW50ZS4gRGVzZXJ0byBkbyBTYWFyYSDDqSBxdWVudGUuIERlc2VydG8gZG8gU2FhcmEgw6kgcXVlbnRlLiBEZXNlcnRvIGRvIFNhYXJhIMOpIHF1ZW50ZS4nLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRGVzZXJ0byBkbyBTYWFyYScsXHJcbiAgICAgICAgICAgIHlvdXR1YmU6ICdSZEZrQzZHdGI1QScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsdFRleHQ6ICdJbGhhcyBkZSBCZXJtdWRhcyBzw6NvIGxpbmRhcycsXHJcbiAgICAgICAgICAgIGZvdG86ICcvYXNzZXRzL3BoYW50b20xLnBuZycsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdJbGhhcyBkZSBCZXJtdWRhcycsXHJcbiAgICAgICAgICAgIHlvdXR1YmU6ICdtQTMwVzJkSFFJbycsXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbHRUZXh0OiAnRGVzZXJ0byBkbyBBdGFjYW1hIGRlIG5vaXRlIERlc2VydG8gZG8gQXRhY2FtYSBkZSBub2l0ZSBEZXNlcnRvIGRvIEF0YWNhbWEgZGUgbm9pdGUgRGVzZXJ0byBkbyBBdGFjYW1hIGRlIG5vaXRlJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0Rlc2VydG8gZG8gQXRhY2FtYScsXHJcbiAgICAgICAgICAgIHlvdXR1YmU6ICd4MkQ3akhmaXR6aycsXHJcbiAgICAgICAgICAgIGZvdG86ICcvYXNzZXRzL2ltZ3NBZXJlYXMucG5nJ1xyXG4gICAgICAgIH0sIHtcclxuXHJcbiAgICAgICAgICAgIGFsdFRleHQ6ICdQbGFuZXRhIFRlcnJhIFBsYW5ldGEgVGVycmEgUGxhbmV0YSBUZXJyYSBMb3JlbSBMb3JlbSBMb3Jlc20nLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGxhbmV0YSBUZXJyYSAnLFxyXG4gICAgICAgICAgICBmb3RvOiAnL2Fzc2V0cy9DSVJDVUxBUjEzLnBuZycsXHJcbiAgICAgICAgICAgIHlvdXR1YmU6ICdXMExIVFdHLVVtUScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBhbHRUZXh0OiAnUHJhaWEgQm9uaXRhJyxcclxuICAgICAgICAgICAgZm90bzogJy9hc3NldHMvZXJyb3IucG5nJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ01hciBsaW5kbycsXHJcbiAgICAgICAgICAgIHlvdXR1YmU6ICdtQTMwVzJkSFFJbycsXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbHRUZXh0OiAnTG9yZW0gZG8gRGVzZXJ0bycsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdEZXNlcnRvJyxcclxuICAgICAgICAgICAgeW91dHViZTogJ1JkRmtDNkd0YjVBJ1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgUG9wdXBmb3RvMiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICBzaG93PXtsZ1Nob3cuc2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TGdTaG93KHtzaG93OiBmYWxzZSwgIGl0ZW06IDB9KX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtbW9kYWwtc2l6ZXMtdGl0bGUtbGdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImV4YW1wbGUtbW9kYWwtc2l6ZXMtdGl0bGUtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXNbbGdTaG93Lml0ZW1dLmNhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMCVcIiAgICBhbHQ9J2ltZycgICAgc3JjPXtpdGVtc1tsZ1Nob3cuaXRlbV0ucG9ydHJhaXQgfHwgYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7aXRlbXNbbGdTaG93Lml0ZW1dLnlvdXR1YmV9LzAuanBnYH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKVxyXG4gICAgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgICAgPFBvcHVwZm90bzIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSb3cgeHM9ezF9IG1kPXsyfSA+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezh9IGNsYXNzTmFtZT1cIm14LWF1dG9cIiA+XHJcbiAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ncGFnaW5hVGl0dWxvczInICA+UG9ydGZvbGlvIDwvaDQ+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnRDb2xDT250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWZjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWlmcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aXRlbXNbc2Vydmljby5pdGVtIHx8IDBdLnlvdXR1YmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YCR7aXRlbXNbc2Vydmljby5pdGVtIHx8IDBdLnRpdHVsb31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0aXR1bG8nPntpdGVtc1tzZXJ2aWNvLml0ZW0gfHwgMF0udGl0dWxvfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHQnPntpdGVtc1tzZXJ2aWNvLml0ZW0gfHwgMF0uc3VidGl0dWxvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPScgcmlnaHRDb2wnIG1kPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCIgcHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzY3JvbGwgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiA8R3JhZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS55b3V0dWJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VWaWRlbyhpLCBcInZpZGVvXCIpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfSBzcmM9e2BodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke2l0ZW0ueW91dHViZX0vMS5qcGdgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImgtMTAwXCIgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiA8R3JhZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHQ9e2l0ZW0ueW91dHViZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnlvdXR1YmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IGNoYW5nZVZpZGVvKGksIFwiZm90b1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gcG9wdXBmb3RvKGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke2l0ZW0ueW91dHViZX0vMC5qcGdgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGdTaG93KHtzaG93OiB0cnVlLCAgaXRlbTogaX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke2l0ZW0ueW91dHViZX0vMC5qcGdgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3JjPXtpdGVtLnBvcnRyYWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcblxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L1N0Q29udGFpbmVyPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRQb3J0Zm9saW9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU3RDb250YWluZXIgPSBzdHlsZWQoQ29udGFpbmVyKWBcclxuXHJcbm1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuLmltZ2RvTW9kYWx7XHJcbiAgICB3aWR0aDogNTAwcHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnJpZ2h0Q29se1xyXG4gICAgLyogLyogcGFkZGluZy1yaWdodDogMjVweDsgKi9cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjI1cHg7XHJcbiAgICB9IFxyXG59XHJcblxyXG4ubGVmdENvbENPbnRlbnR7XHJcbiAgICBtYXJnaW46IDIwcHggNXB4IGF1dG8gMTAwcHg7ICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmlmY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7IC8qIDE2OjkgQXNwZWN0IFJhdGlvIChkaXZpZGUgOSBieSAxNiA9IDAuNTYyNSkgKi9cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcblxyXG4udGl0dWxve1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAzMHB4O1xyXG5saW5lLWhlaWdodDogMzdweDtcclxubWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0e1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5saW5lLWhlaWdodDogMThweDsgIFxyXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlve1xyXG5mb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG5mb250LXNpemU6IDU1cHg7XHJcbmxpbmUtaGVpZ2h0OiA2N3B4O1xyXG5jb2xvcjogIzRENEQ0RDtcclxuXHJcbm1hcmdpbjogNDBweCAwIDMwcHggOHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5zY3JvbGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEVzY29uZGVyIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbi5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBFc2NvbmRlciBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbi5zY3JvbGwge1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIFxyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIFxyXG59XHJcbi5wcm93e1xyXG4gICAgaGVpZ2h0OiAgMTIwdmg7IFxyXG59XHJcblxyXG4gICBcclxuYFxyXG5cclxuXHJcbi8qKk9ic2VydmUgcXVlIMOpIHVtYSBJTUcgKi9cclxuY29uc3QgR3JhZEltYWdlID0gc3R5bGVkLmltZ2BcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmhlaWdodDogYXV0bztcclxud2lkdGg6IDEwMCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207ICBcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxucGFkZGluZy10b3A6IDVweDtcclxubWFyZ2luOiAxcHggMCAwcHggMDtcclxuXHJcblxyXG4gIGAiXSwic291cmNlUm9vdCI6IiJ9