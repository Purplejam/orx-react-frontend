/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/products/[page]";
exports.ids = ["pages/products/[page]"];
exports.modules = {

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Admin/Desktop/Web/react/projects/sic-fits/frontend/components/AddToCart.js\";\n\n\n\nconst ADD_TO_CART = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n\tmutation ADD_TO_CART($productId: ID!) {\n\t\taddToCart(productId: $productId) {\n\t\t\tid\n\t\t}\n\t}\n\t`;\nfunction AddToCart({\n  id\n}) {\n  const [addToCart, {\n    loading\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(ADD_TO_CART, {\n    variables: {\n      productId: id\n    },\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_2__.CURRENT_USER\n    }]\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    disabled: loading,\n    type: \"button\",\n    onClick: addToCart,\n    children: [\"Add\", loading && 'ing', \" to cart \\uD83D\\uDED2\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0FkZFRvQ2FydC5qcz9kZDRjIl0sIm5hbWVzIjpbIkFERF9UT19DQVJUIiwiZ3FsIiwiQWRkVG9DYXJ0IiwiaWQiLCJhZGRUb0NhcnQiLCJsb2FkaW5nIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJwcm9kdWN0SWQiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxvREFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFOQTtBQVFlLFNBQVNDLFNBQVQsQ0FBbUI7QUFBQ0M7QUFBRCxDQUFuQixFQUF5QjtBQUN2QyxRQUFLLENBQUNDLFNBQUQsRUFBWTtBQUFDQztBQUFELEdBQVosSUFBeUJDLDJEQUFXLENBQUNOLFdBQUQsRUFBYztBQUN0RE8sYUFBUyxFQUFFO0FBQ1ZDLGVBQVMsRUFBRUw7QUFERCxLQUQyQztBQUl0RE0sa0JBQWMsRUFBRSxDQUNoQjtBQUFDQyxXQUFLLEVBQUVDLCtDQUFZQTtBQUFwQixLQURnQjtBQUpzQyxHQUFkLENBQXpDO0FBUUEsc0JBQ0M7QUFBUSxZQUFRLEVBQUVOLE9BQWxCO0FBQTJCLFFBQUksRUFBQyxRQUFoQztBQUF5QyxXQUFPLEVBQUVELFNBQWxEO0FBQUEsc0JBQWlFQyxPQUFPLElBQUksS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFHQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWRkVG9DYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VNdXRhdGlvbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtDVVJSRU5UX1VTRVJ9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgQUREX1RPX0NBUlQgPSBncWxgXG5cdG11dGF0aW9uIEFERF9UT19DQVJUKCRwcm9kdWN0SWQ6IElEISkge1xuXHRcdGFkZFRvQ2FydChwcm9kdWN0SWQ6ICRwcm9kdWN0SWQpIHtcblx0XHRcdGlkXG5cdFx0fVxuXHR9XG5cdGBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9DYXJ0KHtpZH0pIHtcblx0Y29uc3RbYWRkVG9DYXJ0LCB7bG9hZGluZ31dID0gdXNlTXV0YXRpb24oQUREX1RPX0NBUlQsIHtcblx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdHByb2R1Y3RJZDogaWRcblx0XHR9LFxuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbXG5cdFx0e3F1ZXJ5OiBDVVJSRU5UX1VTRVJ9XG5cdFx0XVxuXHR9KVxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b24gZGlzYWJsZWQ9e2xvYWRpbmd9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXthZGRUb0NhcnR9PkFkZHtsb2FkaW5nICYmICdpbmcnfSB0byBjYXJ0IPCfm5I8L2J1dHRvbj5cblx0XHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddToCart.js\n");

/***/ }),

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DeleteProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Admin/Desktop/Web/react/projects/sic-fits/frontend/components/DeleteProduct.js\";\n\n\nconst DELETE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n\tmutation DELETE_PRODUCT_MUTATION($id: ID!) {\n\t\tdeleteProduct(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n`;\n\nfunction update(cache, result) {\n  cache.evict(cache.identify(result.data.deleteProduct));\n}\n\nfunction DeleteProduct({\n  id,\n  children\n}) {\n  const [deleteProduct, {\n    loading,\n    error\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(DELETE_PRODUCT_MUTATION, {\n    variables: {\n      id: id\n    },\n    update: update\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    disabled: loading,\n    type: \"button\",\n    onClick: () => {\n      if (confirm('Are you sure you want to delete rhis item?')) {\n        //use mutation to delete\n        deleteProduct().catch(error => alert(error.message));\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 6\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0RlbGV0ZVByb2R1Y3QuanM/ZDNlMyJdLCJuYW1lcyI6WyJERUxFVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsInVwZGF0ZSIsImNhY2hlIiwicmVzdWx0IiwiZXZpY3QiLCJpZGVudGlmeSIsImRhdGEiLCJkZWxldGVQcm9kdWN0IiwiRGVsZXRlUHJvZHVjdCIsImlkIiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsImNvbmZpcm0iLCJjYXRjaCIsImFsZXJ0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLHVCQUF1QixHQUFHQyxvREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBOztBQVNBLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxNQUF2QixFQUErQjtBQUM5QkQsT0FBSyxDQUFDRSxLQUFOLENBQVlGLEtBQUssQ0FBQ0csUUFBTixDQUFlRixNQUFNLENBQUNHLElBQVAsQ0FBWUMsYUFBM0IsQ0FBWjtBQUNBOztBQUVjLFNBQVNDLGFBQVQsQ0FBdUI7QUFBQ0MsSUFBRDtBQUFLQztBQUFMLENBQXZCLEVBQXVDO0FBQ3JELFFBQU0sQ0FBQ0gsYUFBRCxFQUFnQjtBQUFDSSxXQUFEO0FBQVVDO0FBQVYsR0FBaEIsSUFBb0NDLDJEQUFXLENBQUNkLHVCQUFELEVBQTBCO0FBQzlFZSxhQUFTLEVBQUU7QUFDVkwsUUFBRSxFQUFFQTtBQURNLEtBRG1FO0FBSTlFUixVQUFNLEVBQUVBO0FBSnNFLEdBQTFCLENBQXJEO0FBT0Esc0JBQ0k7QUFBUSxZQUFRLEVBQUVVLE9BQWxCO0FBQTJCLFFBQUksRUFBQyxRQUFoQztBQUF5QyxXQUFPLEVBQUUsTUFBTTtBQUN2RCxVQUFHSSxPQUFPLENBQUMsNENBQUQsQ0FBVixFQUEwRDtBQUN6RDtBQUNBUixxQkFBYSxHQUFHUyxLQUFoQixDQUF1QkosS0FBRCxJQUFXSyxLQUFLLENBQUNMLEtBQUssQ0FBQ00sT0FBUCxDQUF0QztBQUNBO0FBQ0EsS0FMRjtBQUFBLGNBTUVSO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlbGV0ZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7dXNlTXV0YXRpb259IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY29uc3QgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG5cdG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XG5cdFx0ZGVsZXRlUHJvZHVjdChpZDogJGlkKSB7XG5cdFx0XHRpZFxuXHRcdFx0bmFtZVxuXHRcdH1cblx0fVxuYFxuXG5mdW5jdGlvbiB1cGRhdGUoY2FjaGUsIHJlc3VsdCkge1xuXHRjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShyZXN1bHQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3Qoe2lkLCBjaGlsZHJlbn0pIHtcblx0Y29uc3QgW2RlbGV0ZVByb2R1Y3QsIHtsb2FkaW5nLCBlcnJvcn1dID0gdXNlTXV0YXRpb24oREVMRVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcblx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdGlkOiBpZFxuXHRcdH0sXG5cdFx0dXBkYXRlOiB1cGRhdGVcblx0fSlcblxuXHRyZXR1cm4oXG5cdFx0XHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdGlmKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgcmhpcyBpdGVtPycpKSB7XG5cdFx0XHRcdFx0XHRcdC8vdXNlIG11dGF0aW9uIHRvIGRlbGV0ZVxuXHRcdFx0XHRcdFx0XHRkZWxldGVQcm9kdWN0KCkuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DeleteProduct.js\n");

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ \"./components/styles/ItemStyles.js\");\n/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ \"./components/styles/Title.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PriceTag */ \"./components/styles/PriceTag.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteProduct */ \"./components/DeleteProduct.js\");\n/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddToCart */ \"./components/AddToCart.js\");\n\nvar _jsxFileName = \"/Users/Admin/Desktop/Web/react/projects/sic-fits/frontend/components/Product.js\";\n\n\n\n\n\n\n\n\nfunction Product({\n  product\n}) {\n  var _product$photo, _product$photo$image, _product$photo2;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,\n      alt: product === null || product === void 0 ? void 0 : (_product$photo2 = product.photo) === null || _product$photo2 === void 0 ? void 0 : _product$photo2.altText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: `/product/${product.id}`,\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__.default, {\n      children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(product.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"buttonList\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: {\n          pathname: '/update',\n          query: {\n            id: product.id\n          }\n        },\n        children: \"update \\u270F\\uFE0F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddToCart__WEBPACK_IMPORTED_MODULE_8__.default, {\n        id: product.id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 6\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_7__.default, {\n        id: product.id,\n        children: \"Delete Item\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3QuanM/OWQwNiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImFsdFRleHQiLCJpZCIsIm5hbWUiLCJmb3JtYXRGdW5jdGlvbiIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJwYXRobmFtZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQjtBQUFDQztBQUFELENBQWpCLEVBQTRCO0FBQUE7O0FBQzFDLHNCQUNDLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0M7QUFBSyxTQUFHLEVBQUVBLE9BQUYsYUFBRUEsT0FBRix5Q0FBRUEsT0FBTyxDQUFFQyxLQUFYLDJFQUFFLGVBQWdCQyxLQUFsQix5REFBRSxxQkFBdUJDLG9CQUFqQztBQUF1RCxTQUFHLEVBQUVILE9BQUYsYUFBRUEsT0FBRiwwQ0FBRUEsT0FBTyxDQUFFQyxLQUFYLG9EQUFFLGdCQUFnQkc7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMsOERBQUMsa0RBQUQ7QUFBQSw2QkFDQyw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxZQUFXSixPQUFPLENBQUNLLEVBQUcsRUFBbkM7QUFBQSxrQkFBdUNMLE9BQU8sQ0FBQ007QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUtDLDhEQUFDLHFEQUFEO0FBQUEsZ0JBQVdDLHlEQUFjLENBQUNQLE9BQU8sQ0FBQ1EsS0FBVDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQztBQUFBLGdCQUFJUixPQUFPLENBQUNTO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQ1hDLGtCQUFRLEVBQUUsU0FEQztBQUVYQyxlQUFLLEVBQUU7QUFBQ04sY0FBRSxFQUFFTCxPQUFPLENBQUNLO0FBQWI7QUFGSSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFLRSw4REFBQywrQ0FBRDtBQUFXLFVBQUUsRUFBRUwsT0FBTyxDQUFDSztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRSw4REFBQyxtREFBRDtBQUFlLFVBQUUsRUFBRUwsT0FBTyxDQUFDSyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0JBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSXRlbVN0eWxlcyBmcm9tICcuL3N0eWxlcy9JdGVtU3R5bGVzJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vc3R5bGVzL1RpdGxlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi9zdHlsZXMvUHJpY2VUYWcnO1xuaW1wb3J0IGZvcm1hdEZ1bmN0aW9uIGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tICcuL0RlbGV0ZVByb2R1Y3QnO1xuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3Qoe3Byb2R1Y3R9KSB7XG5cdHJldHVybihcblx0XHQ8SXRlbVN0eWxlcz5cblx0XHRcdDxpbWcgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e3Byb2R1Y3Q/LnBob3RvPy5hbHRUZXh0fS8+XG5cdFx0XHQ8VGl0bGU+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XG5cdFx0XHQ8L1RpdGxlPlxuXHRcdFx0PFByaWNlVGFnPntmb3JtYXRGdW5jdGlvbihwcm9kdWN0LnByaWNlKX08L1ByaWNlVGFnPlxuXHRcdFx0PHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e3tcblx0XHRcdFx0XHRwYXRobmFtZTogJy91cGRhdGUnLFxuXHRcdFx0XHRcdHF1ZXJ5OiB7aWQ6IHByb2R1Y3QuaWR9XG5cdFx0XHRcdFx0fX0+dXBkYXRlIOKcj++4jzwvTGluaz5cblx0XHRcdFx0XHQ8QWRkVG9DYXJ0IGlkPXtwcm9kdWN0LmlkfS8+XG5cdFx0XHRcdFx0PERlbGV0ZVByb2R1Y3QgaWQ9e3Byb2R1Y3QuaWR9PkRlbGV0ZSBJdGVtPC9EZWxldGVQcm9kdWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9JdGVtU3R5bGVzPlxuXHRcdClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_PRODUCTS_QUERY\": function() { return /* binding */ ALL_PRODUCTS_QUERY; },\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n\nvar _jsxFileName = \"/Users/Admin/Desktop/Web/react/projects/sic-fits/frontend/components/Products.js\";\n\n\n\n\n\nconst ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\nquery ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int){\n  allProducts(skip: $skip, first: $first) {\n\t\tname\n  id\n  description\n  status\n  price\n  photo {\n    id\n    image {\n      publicUrlTransformed\n    }\n  \t}\n  }\n}\t\n`;\nconst ProductsListStyle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"Products__ProductsListStyle\",\n  componentId: \"sc-1uv5x8m-0\"\n})([\"display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;\"]);\nfunction Products({\n  page\n}) {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY, {\n    variables: {\n      first: _config_js__WEBPACK_IMPORTED_MODULE_5__.perPage,\n      skip: page * _config_js__WEBPACK_IMPORTED_MODULE_5__.perPage - _config_js__WEBPACK_IMPORTED_MODULE_5__.perPage\n    }\n  });\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 22\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyle, {\n      children: data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {\n        product: product\n      }, product.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 6\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzPzcxNDAiXSwibmFtZXMiOlsiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdHNMaXN0U3R5bGUiLCJzdHlsZWQiLCJQcm9kdWN0cyIsInBhZ2UiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJmaXJzdCIsInBlclBhZ2UiLCJza2lwIiwibWVzc2FnZSIsImFsbFByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxrQkFBa0IsR0FBR0Msb0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoQk87QUFrQlAsTUFBTUMsaUJBQWlCLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUF2QjtBQU1lLFNBQVNDLFFBQVQsQ0FBa0I7QUFBQ0M7QUFBRCxDQUFsQixFQUEwQjtBQUN4QyxRQUFNO0FBQUNDLFFBQUQ7QUFBT0MsU0FBUDtBQUFjQztBQUFkLE1BQXlCQyx3REFBUSxDQUFDVCxrQkFBRCxFQUFxQjtBQUMzRFUsYUFBUyxFQUFFO0FBQ1ZDLFdBQUssRUFBRUMsK0NBREc7QUFFVkMsVUFBSSxFQUFFUixJQUFJLEdBQUdPLCtDQUFQLEdBQWlCQSwrQ0FBT0E7QUFGcEI7QUFEZ0QsR0FBckIsQ0FBdkM7QUFNQSxNQUFJSixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNaLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNPLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRVosc0JBQ0M7QUFBQSwyQkFDQyw4REFBQyxpQkFBRDtBQUFBLGdCQUNFUixJQUFJLENBQUNTLFdBQUwsQ0FBaUJDLEdBQWpCLENBQXFCQyxPQUFPLGlCQUM1Qiw4REFBQyw2Q0FBRDtBQUFTLGVBQU8sRUFBRUE7QUFBbEIsU0FBZ0NBLE9BQU8sQ0FBQ0MsRUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuaW1wb3J0IHtwZXJQYWdlfSBmcm9tICcuLi9jb25maWcuanMnO1xuXG5leHBvcnQgY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxucXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZKCRza2lwOiBJbnQgPSAwLCAkZmlyc3Q6IEludCl7XG4gIGFsbFByb2R1Y3RzKHNraXA6ICRza2lwLCBmaXJzdDogJGZpcnN0KSB7XG5cdFx0bmFtZVxuICBpZFxuICBkZXNjcmlwdGlvblxuICBzdGF0dXNcbiAgcHJpY2VcbiAgcGhvdG8ge1xuICAgIGlkXG4gICAgaW1hZ2Uge1xuICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICB9XG4gIFx0fVxuICB9XG59XHRcbmBcblxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGUgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cdGdyaWQtZ2FwOiA2MHB4O1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cyh7cGFnZX0pIHtcblx0Y29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSwge1xuXHRcdHZhcmlhYmxlczoge1xuXHRcdFx0Zmlyc3Q6IHBlclBhZ2UsXG5cdFx0XHRza2lwOiBwYWdlICogcGVyUGFnZSAtIHBlclBhZ2Vcblx0XHR9XG5cdH0pO1xuXHRpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG5cdFx0aWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD5cblxuXHRyZXR1cm4oXG5cdFx0PGRpdj5cblx0XHRcdDxQcm9kdWN0c0xpc3RTdHlsZT5cblx0XHRcdFx0e2RhdGEuYWxsUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuXHRcdFx0XHRcdDxQcm9kdWN0IHByb2R1Y3Q9e3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0vPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0PC9Qcm9kdWN0c0xpc3RTdHlsZT5cblx0XHQ8L2Rpdj5cblx0XHQpXG59ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"ItemStyles__Item\",\n  componentId: \"sc-16pk14u-0\"\n})([\"background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9JdGVtU3R5bGVzLmpzPzU1MGUiXSwibmFtZXMiOlsiSXRlbSIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHllQUFWO0FBbUNBLCtEQUFlRCxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdHlsZXMvSXRlbVN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmJ1dHRvbkxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xuICAgICYgPiAqIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/styles/ItemStyles.js\n");

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({\n  displayName: \"PriceTag\",\n  componentId: \"sc-nwbk6t-0\"\n})([\"background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceTag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QcmljZVRhZy5qcz9jNmQ5Il0sIm5hbWVzIjpbIlByaWNlVGFnIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLFFBQVEsR0FBR0Msd0VBQUg7QUFBQTtBQUFBO0FBQUEscUxBQWQ7QUFjQSwrREFBZUQsUUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL1ByaWNlVGFnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByaWNlVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/PriceTag.js\n");

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({\n  displayName: \"Title\",\n  componentId: \"sc-16nq74k-0\"\n})([\"margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcz8yYTEwIl0sIm5hbWVzIjpbIlRpdGxlIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLEtBQUssR0FBR0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsdVBBQVg7QUFpQkEsK0RBQWVELEtBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnKSByb3RhdGUoLTFkZWcpO1xuICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/Title.js\n");

/***/ }),

/***/ "./pages/products/[page].js":
/*!**********************************!*\
  !*** ./pages/products/[page].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./pages/products/index.js");


/***/ }),

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsIndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Products */ \"./components/Products.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Admin/Desktop/Web/react/projects/sic-fits/frontend/pages/products/index.js\";\n\n\n\nfunction ProductsIndexPage() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const page = parseInt(router.query.page);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_1__.default, {\n      page: page\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 4\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcz85YjJlIl0sIm5hbWVzIjpbIlByb2R1Y3RzSW5kZXhQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInBhcnNlSW50IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULEdBQTZCO0FBQzNDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDSSxLQUFQLENBQWFGLElBQWQsQ0FBckI7QUFFQyxzQkFDQztBQUFBLDRCQUNHLDhEQUFDLDJEQUFEO0FBQVksVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBRUcsOERBQUMseURBQUQ7QUFBVSxVQUFJLEVBQUVBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSCxlQUdHLDhEQUFDLDJEQUFEO0FBQVksVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBTUQiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzSW5kZXhQYWdlKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5wYWdlKTtcblxuICByZXR1cm4gKFxuICBcdDxkaXY+XG4gIFx0XHRcdFx0PFBhZ2luYXRpb24gcGFnZT17cGFnZSB8fCAxfS8+XG4gICAgICA8UHJvZHVjdHMgcGFnZT17cGFnZX0vPlxuICAgICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZSB8fCAxfS8+XG4gICA8L2Rpdj4pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Pagination_js-components_User_js-lib_formatMoney_js"], function() { return __webpack_exec__("./pages/products/[page].js"); });
module.exports = __webpack_exports__;

})();