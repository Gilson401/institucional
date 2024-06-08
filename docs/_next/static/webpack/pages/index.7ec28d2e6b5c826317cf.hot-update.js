self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/videobg.js":
/*!*******************************!*\
  !*** ./components/videobg.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layout_nav_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/nav/nav */ "./components/layout/nav/nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Users\\tomaz\\projetos\\react-projects\\drone3\\components\\videobg.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\n.bgvideobutton{\n    margin-left:100px;\n    margin-top: -100px;\n}\n\n.d-flex-jc-spbw{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n.d-grid-center{\n    display:grid;\n    place-items: center;\n}\n\n.gradiente-absolute{\n background-image: linear-gradient(103.62deg, #FFA061 27.6%, rgba(255, 160, 97, 0) 100%);\n mix-blend-mode: normal;\n z-index: 3;\n position: absolute;\n top:0%;\n right:0%;\n bottom: 0%;\n left: 0%;\n color :white;\n}\n\n\n.video-container {\n height: 100vh;\n width: 100vw;\n position: relative;\n \n}\n\n.video-container video {\n width: 100%;\n height: 100%;\n position: absolute;\n object-fit: cover;\n z-index: 0;\n \n}\n\n/* Just styling the content of the div, the *magic* in the previous rules */\n.video-container .caption {\n z-index: 1;\n position: relative;\n text-align: center;\n color: #dc0000;\n padding: 10px;\n \n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var VideoBgDiv = function VideoBgDiv() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var botao = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: function onClick() {
      return router.push('/contato');
    },
    className: "sbutton hidesmall bgvideobutton",
    variant: "light",
    children: "Saiba mais"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 19
  }, _this);

  var videoTag = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "video-container  hidesmall",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
        src: "/assets/VIDEOHOME.mp4",
        type: "video/mp4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "h-100 gradiente-absolute",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
        className: " h-100  ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
          className: "  h-100 w-100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
            className: " d-flex-jc-spbw",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_layout_nav_nav__WEBPACK_IMPORTED_MODULE_3__.default, {
              className: "XXvideoblog",
              ishome: "sim"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: botao
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StDivb, {
    children: videoTag
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};

_s(VideoBgDiv, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = VideoBgDiv;
/* harmony default export */ __webpack_exports__["default"] = (VideoBgDiv);
var StDivb = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject());
_c2 = StDivb;

var _c, _c2;

$RefreshReg$(_c, "VideoBgDiv");
$RefreshReg$(_c2, "StDivb");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlb2JnLmpzIl0sIm5hbWVzIjpbIlZpZGVvQmdEaXYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJib3RhbyIsInB1c2giLCJ2aWRlb1RhZyIsIlN0RGl2YiIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFHckIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxLQUFLLGdCQUFHLDhEQUFDLG1EQUFEO0FBQVcsV0FBTyxFQUFFO0FBQUEsYUFBTUYsTUFBTSxDQUFDRyxJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsS0FBcEI7QUFBc0QsYUFBUyxFQUFDLGlDQUFoRTtBQUFzRyxXQUFPLEVBQUMsT0FBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZDs7QUFFQSxNQUFNQyxRQUFRLGdCQUdWO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsNEJBRUk7QUFBTyxjQUFRLE1BQWY7QUFBZ0IsV0FBSyxNQUFyQjtBQUFzQixVQUFJLE1BQTFCO0FBQUEsNkJBQ0k7QUFFSSxXQUFHLEVBQUMsdUJBRlI7QUFHSSxZQUFJLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBUUk7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw2QkFDSSw4REFBQyxzREFBRDtBQUFXLGlCQUFTLEVBQUMsVUFBckI7QUFBQSwrQkFFSSw4REFBQyxnREFBRDtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNJLDhEQUFDLGdEQUFEO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNJLDhEQUFDLG9EQUFEO0FBQVUsdUJBQVMsRUFBQyxhQUFwQjtBQUFrQyxvQkFBTSxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLHdCQUVLRjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhKOztBQWdDQSxzQkFDSSw4REFBQyxNQUFEO0FBQUEsY0FDU0U7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQTVDRDs7R0FBTUwsVTtVQUdhRSxrRDs7O0tBSGJGLFU7QUE4Q04sK0RBQWVBLFVBQWY7QUFHQSxJQUFNTSxNQUFNLEdBQUdDLDBEQUFILG1CQUFaO01BQU1ELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2VjMjhkMmU2YjVjODI2MzE3Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29sLCBSb3csIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE5hdkRvQXBwIGZyb20gJy4vbGF5b3V0L25hdi9uYXYnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFZpZGVvQmdEaXYgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBib3RhbyA9IDxCdXR0b24gICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jb250YXRvJyl9ICAgIGNsYXNzTmFtZT0nc2J1dHRvbiBoaWRlc21hbGwgYmd2aWRlb2J1dHRvbicgICAgIHZhcmlhbnQ9J2xpZ2h0Jz5TYWliYSBtYWlzPC9CdXR0b24+XHJcblxyXG4gICAgY29uc3QgdmlkZW9UYWcgPSAoXHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWNvbnRhaW5lciAgaGlkZXNtYWxsXCI+XHJcblxyXG4gICAgICAgICAgICA8dmlkZW8gYXV0b1BsYXkgbXV0ZWQgbG9vcD5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9WSURFT0hPTUUubXA0XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMCBncmFkaWVudGUtYWJzb2x1dGVcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPScgaC0xMDAgICc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPScgIGgtMTAwIHctMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9JyBkLWZsZXgtamMtc3BidycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRvQXBwIGNsYXNzTmFtZT0nWFh2aWRlb2Jsb2cnIGlzaG9tZT0nc2ltJyAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdGFvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdERpdmIgID5cclxuICAgICAgICAgICAgICAgIHt2aWRlb1RhZ31cclxuXHJcbiAgICA8L1N0RGl2Yj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9CZ0RpdlxyXG5cclxuXHJcbmNvbnN0IFN0RGl2YiA9IHN0eWxlZC5kaXZgXHJcblxyXG4uYmd2aWRlb2J1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OjEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG59XHJcblxyXG4uZC1mbGV4LWpjLXNwYnd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcbi5kLWdyaWQtY2VudGVye1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYWRpZW50ZS1hYnNvbHV0ZXtcclxuIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMDMuNjJkZWcsICNGRkEwNjEgMjcuNiUsIHJnYmEoMjU1LCAxNjAsIDk3LCAwKSAxMDAlKTtcclxuIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiB6LWluZGV4OiAzO1xyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4gdG9wOjAlO1xyXG4gcmlnaHQ6MCU7XHJcbiBib3R0b206IDAlO1xyXG4gbGVmdDogMCU7XHJcbiBjb2xvciA6d2hpdGU7XHJcbn1cclxuXHJcblxyXG4udmlkZW8tY29udGFpbmVyIHtcclxuIGhlaWdodDogMTAwdmg7XHJcbiB3aWR0aDogMTAwdnc7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiBcclxufVxyXG5cclxuLnZpZGVvLWNvbnRhaW5lciB2aWRlbyB7XHJcbiB3aWR0aDogMTAwJTtcclxuIGhlaWdodDogMTAwJTtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gei1pbmRleDogMDtcclxuIFxyXG59XHJcblxyXG4vKiBKdXN0IHN0eWxpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGRpdiwgdGhlICptYWdpYyogaW4gdGhlIHByZXZpb3VzIHJ1bGVzICovXHJcbi52aWRlby1jb250YWluZXIgLmNhcHRpb24ge1xyXG4gei1pbmRleDogMTtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGNvbG9yOiAjZGMwMDAwO1xyXG4gcGFkZGluZzogMTBweDtcclxuIFxyXG59XHJcbmBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==