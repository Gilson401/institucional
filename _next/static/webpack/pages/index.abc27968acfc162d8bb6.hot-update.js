self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_nav_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/nav/nav */ "./components/layout/nav/nav.js");
/* harmony import */ var _videobg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../videobg */ "./components/videobg.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Users\\tomaz\\projetos\\react-projects\\drone3\\components\\layout\\header.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\nheight: 100vh; /* You must set a specified height */\nwidth: 100vw;\n\nbackground: linear-gradient(103.62deg, #FFA061 27.6%, rgba(255, 160, 97, 0) 100%);\nbackground-image: url(", ");\nbackground-color: #84C9E9; /* Used if the image is unavailable */\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: 100% 100%;\n\n\n.parte1texto{\n    color: white;\n}\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,D_Users_tomaz_projetos_react_projects_drone3_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\nheight: 100vh;\nwidth: 100%;\nposition:relative;\n\n\n.video-background {\n    \n  height: 100%;  \n    @media screen and (max-width: 600px) { height: 120vw; }  \n}\n\n@media screen and (max-width: 600px) {\n    background-size: cover;\n    \n    background-image: \n             linear-gradient(45deg, #FFA061 27.6%, rgba(255, 160, 97, 0) 100%),\n             url('/assets/casas.png');\n\n    height: 120vw; \n}\n\n\n.imgName {    \nwidth: 320px ;\n}\n\n.imgDroneHeader , .mobileheaddronelogo{    \nwidth: 85%;\nmargin: 0% 0% 0% 50px;\n\n\n\n@media screen and (max-width: 600px) {\n    position:absolute; \n    \n    transform-origin: 50% 50%  ;\n    transform: translateY(-45%);\n    margin-left: 25px;\n    margin-right: auto;\nz-index: 999;\n}\n}\n\n.mobileheaddronelogo{\n    transform: translateY(-200%);\n}\n\n.nav-link {\ncolor: white!important;\nfont-family: Gayathri;\nfont-weight: 600;\nline-height: 23px;\n}\n\n\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







/**Bloco1 */

var HeaderComponent = function HeaderComponent() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var botao = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
    onClick: function onClick() {
      return router.push('/contato');
    },
    className: "inbtn sbutton hidesmall",
    variant: "light",
    children: "Saiba mais"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 19
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContent, {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_videobg__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "video-background ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "hidelarge",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout_nav_nav__WEBPACK_IMPORTED_MODULE_4__.default, {
          ishome: "sim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 18
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "hidelarge mobileheaddronelogo centro text-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Your Hero Here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(HeaderComponent, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = HeaderComponent;
/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);
var HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject()); //https://codeconvey.com/background-image-gradient-overlay/

_c2 = HeaderContent;
var StSection = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject2(), function (props) {
  return props.image;
});

var _c, _c2;

$RefreshReg$(_c, "HeaderComponent");
$RefreshReg$(_c2, "HeaderContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlckNvbXBvbmVudCIsInJvdXRlciIsInVzZVJvdXRlciIsImJvdGFvIiwicHVzaCIsIkhlYWRlckNvbnRlbnQiLCJzdHlsZWQiLCJTdFNlY3Rpb24iLCJwcm9wcyIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBRzFCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsS0FBSyxnQkFBRyw4REFBQyxtREFBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1GLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFVBQVosQ0FBTjtBQUFBLEtBQWpCO0FBQWdELGFBQVMsRUFBQyx5QkFBMUQ7QUFBb0YsV0FBTyxFQUFDLE9BQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWQ7O0FBQ0Esc0JBR0ksOERBQUMsYUFBRDtBQUFlLGFBQVMsRUFBQyxFQUF6QjtBQUFBLDRCQUVJLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDQyw4REFBQywrREFBRDtBQUFXLGdCQUFNLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFTSTtBQUFLLGVBQVMsRUFBQyxpREFBZjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhKO0FBdUJILENBN0JEOztHQUFNSixlO1VBR2FFLGtEOzs7S0FIYkYsZTtBQStCTiwrREFBZUEsZUFBZjtBQUtBLElBQU1LLGFBQWEsR0FBR0MsMERBQUgsbUJBQW5CLEMsQ0ErRUE7O01BL0VNRCxhO0FBZ0ZOLElBQU1FLFNBQVMsR0FBR0QsMERBQUgscUJBS1MsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBVjtBQUFBLENBTGQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYmMyNzk2OGFjZmMxNjJkOGJiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uICB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTmF2RG9BcHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbmF2L25hdidcclxuaW1wb3J0IFZpZGVvQmdEaXYgZnJvbSAnLi4vdmlkZW9iZyc7XHJcblxyXG5cclxuLyoqQmxvY28xICovXHJcbmNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBib3RhbyA9IDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jb250YXRvJyl9IGNsYXNzTmFtZT0naW5idG4gc2J1dHRvbiBoaWRlc21hbGwnIHZhcmlhbnQ9J2xpZ2h0Jz5TYWliYSBtYWlzPC9CdXR0b24+XHJcbiAgICByZXR1cm4gKFxyXG5cclxuXHJcbiAgICAgICAgPEhlYWRlckNvbnRlbnQgY2xhc3NOYW1lPScnPlxyXG5cclxuICAgICAgICAgICAgPFZpZGVvQmdEaXYgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1iYWNrZ3JvdW5kIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGVsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICAgPE5hdkRvQXBwICBpc2hvbWU9J3NpbScgLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZWxhcmdlIG1vYmlsZWhlYWRkcm9uZWxvZ28gY2VudHJvIHRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgPGgxPllvdXIgSGVybyBIZXJlPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2hpZGVsYXJnZSAnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZ0Ryb25lSGVhZGVyJyBzcmM9XCIvYXNzZXRzL2Ryb25lRG9IZWFkZXIucG5nXCIgYWx0PSdpdGVtLmFsdFRleHQnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L0hlYWRlckNvbnRlbnQ+XHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcG9uZW50XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBIZWFkZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuXHJcbmhlaWdodDogMTAwdmg7XHJcbndpZHRoOiAxMDAlO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcblxyXG4udmlkZW8tYmFja2dyb3VuZCB7XHJcbiAgICBcclxuICBoZWlnaHQ6IDEwMCU7ICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7IGhlaWdodDogMTIwdnc7IH0gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRkEwNjEgMjcuNiUsIHJnYmEoMjU1LCAxNjAsIDk3LCAwKSAxMDAlKSxcclxuICAgICAgICAgICAgIHVybCgnL2Fzc2V0cy9jYXNhcy5wbmcnKTtcclxuXHJcbiAgICBoZWlnaHQ6IDEyMHZ3OyBcclxufVxyXG5cclxuXHJcbi5pbWdOYW1lIHsgICAgXHJcbndpZHRoOiAzMjBweCA7XHJcbn1cclxuXHJcbi5pbWdEcm9uZUhlYWRlciAsIC5tb2JpbGVoZWFkZHJvbmVsb2dveyAgICBcclxud2lkdGg6IDg1JTtcclxubWFyZ2luOiAwJSAwJSAwJSA1MHB4O1xyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlICA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1JSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuei1pbmRleDogOTk5O1xyXG59XHJcbn1cclxuXHJcbi5tb2JpbGVoZWFkZHJvbmVsb2dve1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuZm9udC1mYW1pbHk6IEdheWF0aHJpO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5saW5lLWhlaWdodDogMjNweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9odHRwczovL2NvZGVjb252ZXkuY29tL2JhY2tncm91bmQtaW1hZ2UtZ3JhZGllbnQtb3ZlcmxheS9cclxuY29uc3QgU3RTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuaGVpZ2h0OiAxMDB2aDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG53aWR0aDogMTAwdnc7XHJcblxyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTAzLjYyZGVnLCAjRkZBMDYxIDI3LjYlLCByZ2JhKDI1NSwgMTYwLCA5NywgMCkgMTAwJSk7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb3BzID0+IHByb3BzLmltYWdlfSk7XHJcbmJhY2tncm91bmQtY29sb3I6ICM4NEM5RTk7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG5cclxuLnBhcnRlMXRleHRve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==