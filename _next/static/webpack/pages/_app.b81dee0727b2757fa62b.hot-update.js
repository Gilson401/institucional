self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Imgsmp": function() { return /* binding */ Imgsmp; },
/* harmony export */   "Codeblock": function() { return /* binding */ Codeblock; },
/* harmony export */   "getFullAddress": function() { return /* binding */ getFullAddress; },
/* harmony export */   "Sharegroup": function() { return /* binding */ Sharegroup; },
/* harmony export */   "ResponsiveIframe": function() { return /* binding */ ResponsiveIframe; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Users\\tomaz\\projetos\\react-projects\\drone3\\lib\\util.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




function Imgsmp(props) {
  var addmedia = function addmedia(value) {
    var temp = "";

    if (value.includes('http')) {
      return props.src;
    }

    if (!value.includes('/media')) {
      temp = '/media' + props.src;
    }

    return temp;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: " centro boximages",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "responsive",
        src: addmedia(props.src) || "/TODO.JPG",
        alt: props.src || "/TODO.JPG"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = Imgsmp;
function Codeblock(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "codeblock",
      children: "".concat(props.code)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)
  }, void 0, false);
}
_c2 = Codeblock;
var getFullAddress = function getFullAddress() {
  _s();

  var rroute = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return "https://arquitetardrone.com.br/" + rroute.route;
};
/**requeres props quote, hashtag, shareUrl */

_s(getFullAddress, "G/sGYQ3w35KZ1zwrGl2J1AlFKoQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

function Sharegroup(props) {
  _s2();

  var rroute = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var shareUrl = props.shareUrl || "https://arquitetardrone.com.br/" + rroute.route;
  var quote = props.quote || "Confira este artigo.";
  var hashtag = props.hashtag || "#GPWEB_POST";
  var size = props.size || 32;
  var round = props.round || false;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.FacebookShareButton, {
      quote: quote,
      hashtag: hashtag,
      url: shareUrl,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.FacebookIcon, {
        size: size,
        round: round
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.WorkplaceShareButton, {
      quote: quote,
      hashtag: hashtag,
      url: shareUrl,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.WorkplaceIcon, {
        size: size,
        round: round
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.LinkedinShareButton, {
      quote: quote,
      hashtag: hashtag,
      url: shareUrl,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.LinkedinIcon, {
        size: size,
        round: round
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.TwitterShareButton, {
      quote: quote,
      hashtag: hashtag,
      url: shareUrl,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.TwitterIcon, {
        size: size,
        round: round
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.WhatsappShareButton, {
      quote: quote,
      hashtag: hashtag,
      url: shareUrl,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_3__.WhatsappIcon, {
        size: size,
        round: round
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
/**A props URL deve terminar com o código do vídeo contendo 11 caracteres*/

_s2(Sharegroup, "G/sGYQ3w35KZ1zwrGl2J1AlFKoQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c3 = Sharegroup;
function ResponsiveIframe(props) {
  var embebed = props.url.substr(props.url.length - 11);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3527579846" + " " + "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
        title: "c",
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/".concat(embebed),
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        className: "jsx-3527579846" + " " + "responsive-iframe"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3527579846",
      children: ".container.jsx-3527579846{position:relative;overflow:hidden;width:100%;padding-top:56.25%;}.responsive-iframe.jsx-3527579846{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxVc2Vyc1xcdG9tYXpcXHByb2pldG9zXFxyZWFjdC1wcm9qZWN0c1xcZHJvbmUzXFxsaWJcXHV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0h3QixBQUdtQyxBQVFBLGtCQVBGLEFBUVYsTUFDQyxPQUNFLEdBVEUsTUFVSCxLQVRXLEdBVVIsV0FDQyxLQVZkLE9BV0EiLCJmaWxlIjoiRDpcXFVzZXJzXFx0b21helxccHJvamV0b3NcXHJlYWN0LXByb2plY3RzXFxkcm9uZTNcXGxpYlxcdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBGYWNlYm9va0ljb24sIEZhY2Vib29rU2hhcmVCdXR0b24sIExpbmtlZGluSWNvbiwgTGlua2VkaW5TaGFyZUJ1dHRvbixcclxuICAgIFR3aXR0ZXJJY29uLFxyXG4gICAgVHdpdHRlclNoYXJlQnV0dG9uLCBXaGF0c2FwcEljb24sIFdoYXRzYXBwU2hhcmVCdXR0b24sIFdvcmtwbGFjZUljb24sIFdvcmtwbGFjZVNoYXJlQnV0dG9uXHJcbn0gZnJvbSBcInJlYWN0LXNoYXJlXCJcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEltZ3NtcChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGFkZG1lZGlhID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnaHR0cCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLnNyY1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlLmluY2x1ZGVzKCcvbWVkaWEnKSkge1xyXG4gICAgICAgICAgICAgICAgdGVtcCA9ICcvbWVkaWEnICsgcHJvcHMuc3JjXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGVtcFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjZW50cm8gYm94aW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJlc3BvbnNpdmVcIiBzcmM9e2FkZG1lZGlhKHByb3BzLnNyYykgfHwgXCIvVE9ETy5KUEdcIn0gYWx0PXtwcm9wcy5zcmMgfHwgXCIvVE9ETy5KUEdcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2RlYmxvY2socHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIHtgJHtwcm9wcy5jb2RlfWB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxBZGRyZXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcnJvdXRlID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiBcImh0dHBzOi8vYXJxdWl0ZXRhcmRyb25lLmNvbS5ici9cIiArIHJyb3V0ZS5yb3V0ZVxyXG59XHJcblxyXG5cclxuXHJcbi8qKnJlcXVlcmVzIHByb3BzIHF1b3RlLCBoYXNodGFnLCBzaGFyZVVybCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gU2hhcmVncm91cChwcm9wcykge1xyXG4gICAgY29uc3QgcnJvdXRlID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBzaGFyZVVybCA9IHByb3BzLnNoYXJlVXJsIHx8IFwiaHR0cHM6Ly9hcnF1aXRldGFyZHJvbmUuY29tLmJyL1wiICsgcnJvdXRlLnJvdXRlXHJcbiAgICBjb25zdCBxdW90ZSA9IHByb3BzLnF1b3RlIHx8IFwiQ29uZmlyYSBlc3RlIGFydGlnby5cIlxyXG4gICAgY29uc3QgaGFzaHRhZyA9IHByb3BzLmhhc2h0YWcgfHwgXCIjR1BXRUJfUE9TVFwiXHJcbiAgICBjb25zdCBzaXplID0gcHJvcHMuc2l6ZSB8fCAzMlxyXG4gICAgY29uc3Qgcm91bmQgPSBwcm9wcy5yb3VuZCB8fCBmYWxzZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiBxdW90ZT17cXVvdGV9IGhhc2h0YWc9e2hhc2h0YWd9IHVybD17c2hhcmVVcmx9PlxyXG4gICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxXb3JrcGxhY2VTaGFyZUJ1dHRvbiBxdW90ZT17cXVvdGV9IGhhc2h0YWc9e2hhc2h0YWd9IHVybD17c2hhcmVVcmx9PlxyXG4gICAgICAgICAgICAgICAgPFdvcmtwbGFjZUljb24gc2l6ZT17c2l6ZX0gcm91bmQ9e3JvdW5kfSAvPlxyXG4gICAgICAgICAgICA8L1dvcmtwbGFjZVNoYXJlQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPExpbmtlZGluU2hhcmVCdXR0b24gcXVvdGU9e3F1b3RlfSBoYXNodGFnPXtoYXNodGFnfSB1cmw9e3NoYXJlVXJsfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rZWRpbkljb24gc2l6ZT17c2l6ZX0gcm91bmQ9e3JvdW5kfSAvPlxyXG4gICAgICAgICAgICA8L0xpbmtlZGluU2hhcmVCdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uIHF1b3RlPXtxdW90ZX0gaGFzaHRhZz17aGFzaHRhZ30gdXJsPXtzaGFyZVVybH0+XHJcbiAgICAgICAgICAgICAgICA8VHdpdHRlckljb24gc2l6ZT17c2l6ZX0gcm91bmQ9e3JvdW5kfSAvPlxyXG4gICAgICAgICAgICA8L1R3aXR0ZXJTaGFyZUJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxXaGF0c2FwcFNoYXJlQnV0dG9uIHF1b3RlPXtxdW90ZX0gaGFzaHRhZz17aGFzaHRhZ30gdXJsPXtzaGFyZVVybH0+XHJcbiAgICAgICAgICAgICAgICA8V2hhdHNhcHBJY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgICAgICAgPC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHsvKiA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+ICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbi8qKkEgcHJvcHMgVVJMIGRldmUgdGVybWluYXIgY29tIG8gY8OzZGlnbyBkbyB2w61kZW8gY29udGVuZG8gMTEgY2FyYWN0ZXJlcyovXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNwb25zaXZlSWZyYW1lKHByb3BzKSB7XHJcblxyXG4gICAgdmFyIGVtYmViZWQgPSBwcm9wcy51cmwuc3Vic3RyKHByb3BzLnVybC5sZW5ndGggLSAxMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9IFwiY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1pZnJhbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2VtYmViZWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPlxyXG4gICAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDU2LjI1JTsgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8qIFRoZW4gc3R5bGUgdGhlIGlmcmFtZSB0byBmaXQgaW4gdGhlIGNvbnRhaW5lciBkaXYgd2l0aCBmdWxsIGhlaWdodCBhbmQgd2lkdGggKi9cclxuICAgICAgICAgICAgICAucmVzcG9uc2l2ZS1pZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Users\\\\tomaz\\\\projetos\\\\react-projects\\\\drone3\\\\lib\\\\util.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}
_c4 = ResponsiveIframe;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Imgsmp");
$RefreshReg$(_c2, "Codeblock");
$RefreshReg$(_c3, "Sharegroup");
$RefreshReg$(_c4, "ResponsiveIframe");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWwuanMiXSwibmFtZXMiOlsiSW1nc21wIiwicHJvcHMiLCJhZGRtZWRpYSIsInZhbHVlIiwidGVtcCIsImluY2x1ZGVzIiwic3JjIiwiQ29kZWJsb2NrIiwiY29kZSIsImdldEZ1bGxBZGRyZXNzIiwicnJvdXRlIiwidXNlUm91dGVyIiwicm91dGUiLCJTaGFyZWdyb3VwIiwic2hhcmVVcmwiLCJxdW90ZSIsImhhc2h0YWciLCJzaXplIiwicm91bmQiLCJSZXNwb25zaXZlSWZyYW1lIiwiZW1iZWJlZCIsInVybCIsInN1YnN0ciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUVPLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBRTFCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4QixRQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFFQSxRQUFJRCxLQUFLLENBQUNFLFFBQU4sQ0FBZSxNQUFmLENBQUosRUFBNEI7QUFDNUIsYUFBT0osS0FBSyxDQUFDSyxHQUFiO0FBQ0M7O0FBRUcsUUFBSSxDQUFDSCxLQUFLLENBQUNFLFFBQU4sQ0FBZSxRQUFmLENBQUwsRUFBK0I7QUFDM0JELFVBQUksR0FBRyxXQUFXSCxLQUFLLENBQUNLLEdBQXhCO0FBQ0g7O0FBRUwsV0FBT0YsSUFBUDtBQUNILEdBWkQ7O0FBZUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQTRCLFdBQUcsRUFBRUYsUUFBUSxDQUFDRCxLQUFLLENBQUNLLEdBQVAsQ0FBUixJQUF1QixXQUF4RDtBQUFxRSxXQUFHLEVBQUVMLEtBQUssQ0FBQ0ssR0FBTixJQUFhO0FBQXZGO0FBQUE7QUFBQTtBQUFB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QTtBQUFBLFlBbkJKLGVBdUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Qko7QUFBQSxrQkFESjtBQThCSDtBQUlEOztJQTNDZ0JMLFU7VUFDR0Ysa0Q7OztNQURIRSxVO0FBNENULFNBQVNNLGdCQUFULENBQTBCbEIsS0FBMUIsRUFBaUM7QUFFcEMsTUFBSW1CLE9BQU8sR0FBR25CLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVUMsTUFBVixDQUFpQnJCLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVUUsTUFBVixHQUFtQixFQUFwQyxDQUFkO0FBQ0Esc0JBQ0k7QUFBQSw0QkFFSTtBQUFBLDBDQUFlLFdBQWY7QUFBQSw2QkFDSTtBQUNBLGFBQUssRUFBRSxHQURQO0FBR0ksYUFBSyxFQUFDLEtBSFY7QUFHZ0IsY0FBTSxFQUFDLEtBSHZCO0FBSUksV0FBRywwQ0FBbUNILE9BQW5DLENBSlA7QUFLSSxtQkFBVyxFQUFDLEdBTGhCO0FBTUksYUFBSyxFQUFDLDBGQU5WO0FBT0ksdUJBQWUsTUFQbkI7QUFBQSw0Q0FFYztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQW1DSDtNQXRDZUQsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iODFkZWUwNzI3YjI3NTdmYTYyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEZhY2Vib29rSWNvbiwgRmFjZWJvb2tTaGFyZUJ1dHRvbiwgTGlua2VkaW5JY29uLCBMaW5rZWRpblNoYXJlQnV0dG9uLFxyXG4gICAgVHdpdHRlckljb24sXHJcbiAgICBUd2l0dGVyU2hhcmVCdXR0b24sIFdoYXRzYXBwSWNvbiwgV2hhdHNhcHBTaGFyZUJ1dHRvbiwgV29ya3BsYWNlSWNvbiwgV29ya3BsYWNlU2hhcmVCdXR0b25cclxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIlxyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1nc21wKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgYWRkbWVkaWEgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgdGVtcCA9IFwiXCJcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCdodHRwJykpIHtcclxuICAgICAgICByZXR1cm4gcHJvcHMuc3JjXHJcbiAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgICAgIGlmICghdmFsdWUuaW5jbHVkZXMoJy9tZWRpYScpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wID0gJy9tZWRpYScgKyBwcm9wcy5zcmNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNlbnRybyBib3hpbWFnZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZVwiIHNyYz17YWRkbWVkaWEocHJvcHMuc3JjKSB8fCBcIi9UT0RPLkpQR1wifSBhbHQ9e3Byb3BzLnNyYyB8fCBcIi9UT0RPLkpQR1wifSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvZGVibG9jayhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAge2Ake3Byb3BzLmNvZGV9YH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RnVsbEFkZHJlc3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBycm91dGUgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9hcnF1aXRldGFyZHJvbmUuY29tLmJyL1wiICsgcnJvdXRlLnJvdXRlXHJcbn1cclxuXHJcblxyXG5cclxuLyoqcmVxdWVyZXMgcHJvcHMgcXVvdGUsIGhhc2h0YWcsIHNoYXJlVXJsICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTaGFyZWdyb3VwKHByb3BzKSB7XHJcbiAgICBjb25zdCBycm91dGUgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IHNoYXJlVXJsID0gcHJvcHMuc2hhcmVVcmwgfHwgXCJodHRwczovL2FycXVpdGV0YXJkcm9uZS5jb20uYnIvXCIgKyBycm91dGUucm91dGVcclxuICAgIGNvbnN0IHF1b3RlID0gcHJvcHMucXVvdGUgfHwgXCJDb25maXJhIGVzdGUgYXJ0aWdvLlwiXHJcbiAgICBjb25zdCBoYXNodGFnID0gcHJvcHMuaGFzaHRhZyB8fCBcIiNHUFdFQl9QT1NUXCJcclxuICAgIGNvbnN0IHNpemUgPSBwcm9wcy5zaXplIHx8IDMyXHJcbiAgICBjb25zdCByb3VuZCA9IHByb3BzLnJvdW5kIHx8IGZhbHNlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uIHF1b3RlPXtxdW90ZX0gaGFzaHRhZz17aGFzaHRhZ30gdXJsPXtzaGFyZVVybH0+XHJcbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9e3NpemV9IHJvdW5kPXtyb3VuZH0gLz5cclxuICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPFdvcmtwbGFjZVNoYXJlQnV0dG9uIHF1b3RlPXtxdW90ZX0gaGFzaHRhZz17aGFzaHRhZ30gdXJsPXtzaGFyZVVybH0+XHJcbiAgICAgICAgICAgICAgICA8V29ya3BsYWNlSWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgICAgICAgIDwvV29ya3BsYWNlU2hhcmVCdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8TGlua2VkaW5TaGFyZUJ1dHRvbiBxdW90ZT17cXVvdGV9IGhhc2h0YWc9e2hhc2h0YWd9IHVybD17c2hhcmVVcmx9PlxyXG4gICAgICAgICAgICAgICAgPExpbmtlZGluSWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlua2VkaW5TaGFyZUJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b24gcXVvdGU9e3F1b3RlfSBoYXNodGFnPXtoYXNodGFnfSB1cmw9e3NoYXJlVXJsfT5cclxuICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBzaXplPXtzaXplfSByb3VuZD17cm91bmR9IC8+XHJcbiAgICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b24gcXVvdGU9e3F1b3RlfSBoYXNodGFnPXtoYXNodGFnfSB1cmw9e3NoYXJlVXJsfT5cclxuICAgICAgICAgICAgICAgIDxXaGF0c2FwcEljb24gc2l6ZT17c2l6ZX0gcm91bmQ9e3JvdW5kfSAvPlxyXG4gICAgICAgICAgICA8L1doYXRzYXBwU2hhcmVCdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgey8qIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT4gKi99XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuLyoqQSBwcm9wcyBVUkwgZGV2ZSB0ZXJtaW5hciBjb20gbyBjw7NkaWdvIGRvIHbDrWRlbyBjb250ZW5kbyAxMSBjYXJhY3RlcmVzKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNpdmVJZnJhbWUocHJvcHMpIHtcclxuXHJcbiAgICB2YXIgZW1iZWJlZCA9IHByb3BzLnVybC5zdWJzdHIocHJvcHMudXJsLmxlbmd0aCAtIDExKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICB0aXRsZT0gXCJjXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWlmcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7ZW1iZWJlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW4+XHJcbiAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTYuMjUlOyBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLyogVGhlbiBzdHlsZSB0aGUgaWZyYW1lIHRvIGZpdCBpbiB0aGUgY29udGFpbmVyIGRpdiB3aXRoIGZ1bGwgaGVpZ2h0IGFuZCB3aWR0aCAqL1xyXG4gICAgICAgICAgICAgIC5yZXNwb25zaXZlLWlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=