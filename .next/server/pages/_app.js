/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n// import { Chain } from \"wagmi\";\n\n\n\n\n// ✅ Set up chains: Sepolia (Ethereum testnet) and Base Sepolia (Base testnet)\n// const { chains, provider } = configureChains(\n//   [chain.sepolia],\n//   [\n//     infuraProvider({\n//       apiKey: \"25630b18689f49a3b0d9ba7b8aa74091\", // Infura for Sepolia\n//       priority: 1,\n//     }),\n//     // publicProvider(), // 👈\n//   ]\n// );\nconst baseSepolia = {\n    id: 84532,\n    name: \"Base Sepolia\",\n    network: \"base-sepolia\",\n    nativeCurrency: {\n        name: \"Ethereum\",\n        symbol: \"ETH\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: {\n            http: [\n                \"https://sepolia.base.org\"\n            ]\n        }\n    },\n    blockExplorers: {\n        default: {\n            name: \"Basescan\",\n            url: \"https://sepolia.basescan.org\"\n        }\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_6__.chain.sepolia,\n    baseSepolia\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_7__.infuraProvider)({\n        apiKey: \"25630b18689f49a3b0d9ba7b8aa74091\"\n    }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__.jsonRpcProvider)({\n        rpc: (chain)=>{\n            if (chain.id === 11155111) return {\n                http: `https://sepolia.infura.io/v3/25630b18689f49a3b0d9ba7b8aa74091`\n            };\n            if (chain.id === 84532) return {\n                http: \"https://sepolia.base.org\"\n            };\n            return null;\n        }\n    }), \n]);\n// ✅ Default wallet connectors\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.getDefaultWallets)({\n    appName: \"PeerX exchange\",\n    chains\n});\n// ✅ Create Wagmi client\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n// ✅  Customize theme (currently not used)\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#2ecc71\",\n        accentColorForeground: \"#ffffff\"\n    }\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Codes\\\\uniswapdapp\\\\pages\\\\_app.js\",\n                lineNumber: 106,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Codes\\\\uniswapdapp\\\\pages\\\\_app.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Codes\\\\uniswapdapp\\\\pages\\\\_app.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0s7QUFDRTtBQUNVO0FBQ2U7QUFDMUQsaUNBQWlDO0FBT0Q7QUFPakI7QUFFeUM7QUFDQTtBQUV4RCw4RUFBOEU7QUFDOUUsZ0RBQWdEO0FBQ2hELHFCQUFxQjtBQUNyQixNQUFNO0FBQ04sdUJBQXVCO0FBQ3ZCLDBFQUEwRTtBQUMxRSxxQkFBcUI7QUFDckIsVUFBVTtBQUNWLGdDQUFnQztBQUNoQyxNQUFNO0FBQ04sS0FBSztBQUNMLE1BQU1hLFdBQVcsR0FBRztJQUNsQkMsRUFBRSxFQUFFLEtBQUs7SUFDVEMsSUFBSSxFQUFFLGNBQWM7SUFDcEJDLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCQyxjQUFjLEVBQUU7UUFDZEYsSUFBSSxFQUFFLFVBQVU7UUFDaEJHLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFDREMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRTtZQUNQQyxJQUFJLEVBQUU7Z0JBQUMsMEJBQTBCO2FBQUM7U0FDbkM7S0FDRjtJQUNEQyxjQUFjLEVBQUU7UUFDZEYsT0FBTyxFQUFFO1lBQUVOLElBQUksRUFBRSxVQUFVO1lBQUVTLEdBQUcsRUFBRSw4QkFBOEI7U0FBRTtLQUNuRTtJQUNEQyxPQUFPLEVBQUUsSUFBSTtDQUNkO0FBR0QsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHbkIsc0RBQWUsQ0FDMUM7SUFBQ0QsZ0RBQWE7SUFBRU0sV0FBVztDQUFDLEVBQzVCO0lBQ0VGLHNFQUFjLENBQUM7UUFBRWtCLE1BQU0sRUFBRSxrQ0FBa0M7S0FBRSxDQUFDO0lBQzlEM0Isd0VBQWUsQ0FBQztRQUNkNEIsR0FBRyxFQUFFLENBQUN2QixLQUFLLEdBQUs7WUFDZCxJQUFJQSxLQUFLLENBQUNPLEVBQUUsS0FBSyxRQUFRLEVBQ3ZCLE9BQU87Z0JBQ0xRLElBQUksRUFBRSxDQUFDLDZEQUE2RCxDQUFDO2FBQ3RFLENBQUM7WUFDSixJQUFJZixLQUFLLENBQUNPLEVBQUUsS0FBSyxLQUFLLEVBQ3BCLE9BQU87Z0JBQ0xRLElBQUksRUFBRSwwQkFBMEI7YUFDakMsQ0FBQztZQUNKLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRixDQUFDO0NBQ0gsQ0FDRjtBQUdELDhCQUE4QjtBQUM5QixNQUFNLEVBQUVTLFVBQVUsR0FBRSxHQUFHNUIseUVBQWlCLENBQUM7SUFDdkM2QixPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCTixNQUFNO0NBQ1AsQ0FBQztBQUVGLHdCQUF3QjtBQUN4QixNQUFNTyxXQUFXLEdBQUd4QixtREFBWSxDQUFDO0lBQy9CeUIsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVkosUUFBUTtDQUNULENBQUM7QUFFRiwwQ0FBMEM7QUFDMUMsTUFBTVEsT0FBTyxHQUFHbEMsbURBQUssQ0FBQ0sscUVBQWEsRUFBRSxFQUFFO0lBQ3JDOEIsTUFBTSxFQUFFO1FBQ05DLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxxQkFBcUIsRUFBRSxTQUFTO0tBQ2pDO0NBQ0YsQ0FBQztBQUVhLFNBQVNDLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3BELHFCQUNFLDhEQUFDL0IsOENBQVc7UUFBQ2dDLE1BQU0sRUFBRVQsV0FBVztrQkFDOUIsNEVBQUM3QixzRUFBa0I7WUFDakJzQixNQUFNLEVBQUVBLE1BQU07WUFDZGlCLEtBQUssRUFBRVIsT0FBTztzQkFFZiw0RUFBQ0ssU0FBUztnQkFBRyxHQUFHQyxTQUFTOzs7OztvQkFBRzs7Ozs7Z0JBQ1I7Ozs7O1lBQ1QsQ0FDZDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcC10b2tlbi1tYXJrZXRwbGFjZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xyXG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9qc29uUnBjXCI7XHJcbi8vIGltcG9ydCB7IENoYWluIH0gZnJvbSBcIndhZ21pXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRXYWxsZXRzLFxyXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcclxuICBkYXJrVGhlbWUsXHJcbiAgbWlkbmlnaHRUaGVtZSxcclxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBjaGFpbixcclxuICBjb25maWd1cmVDaGFpbnMsXHJcbiAgY3JlYXRlQ2xpZW50LFxyXG4gIFdhZ21pQ29uZmlnLFxyXG59IGZyb20gXCJ3YWdtaVwiO1xyXG5cclxuaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2luZnVyYVwiO1xyXG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7IFxyXG5cclxuLy8g4pyFIFNldCB1cCBjaGFpbnM6IFNlcG9saWEgKEV0aGVyZXVtIHRlc3RuZXQpIGFuZCBCYXNlIFNlcG9saWEgKEJhc2UgdGVzdG5ldClcclxuLy8gY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbi8vICAgW2NoYWluLnNlcG9saWFdLFxyXG4vLyAgIFtcclxuLy8gICAgIGluZnVyYVByb3ZpZGVyKHtcclxuLy8gICAgICAgYXBpS2V5OiBcIjI1NjMwYjE4Njg5ZjQ5YTNiMGQ5YmE3YjhhYTc0MDkxXCIsIC8vIEluZnVyYSBmb3IgU2Vwb2xpYVxyXG4vLyAgICAgICBwcmlvcml0eTogMSxcclxuLy8gICAgIH0pLFxyXG4vLyAgICAgLy8gcHVibGljUHJvdmlkZXIoKSwgLy8g8J+RiFxyXG4vLyAgIF1cclxuLy8gKTtcclxuY29uc3QgYmFzZVNlcG9saWEgPSB7XHJcbiAgaWQ6IDg0NTMyLFxyXG4gIG5hbWU6IFwiQmFzZSBTZXBvbGlhXCIsXHJcbiAgbmV0d29yazogXCJiYXNlLXNlcG9saWFcIixcclxuICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgbmFtZTogXCJFdGhlcmV1bVwiLFxyXG4gICAgc3ltYm9sOiBcIkVUSFwiLFxyXG4gICAgZGVjaW1hbHM6IDE4LFxyXG4gIH0sXHJcbiAgcnBjVXJsczoge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBodHRwOiBbXCJodHRwczovL3NlcG9saWEuYmFzZS5vcmdcIl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmxvY2tFeHBsb3JlcnM6IHtcclxuICAgIGRlZmF1bHQ6IHsgbmFtZTogXCJCYXNlc2NhblwiLCB1cmw6IFwiaHR0cHM6Ly9zZXBvbGlhLmJhc2VzY2FuLm9yZ1wiIH0sXHJcbiAgfSxcclxuICB0ZXN0bmV0OiB0cnVlLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxyXG4gIFtjaGFpbi5zZXBvbGlhLCBiYXNlU2Vwb2xpYV0sXHJcbiAgW1xyXG4gICAgaW5mdXJhUHJvdmlkZXIoeyBhcGlLZXk6IFwiMjU2MzBiMTg2ODlmNDlhM2IwZDliYTdiOGFhNzQwOTFcIiB9KSxcclxuICAgIGpzb25ScGNQcm92aWRlcih7XHJcbiAgICAgIHJwYzogKGNoYWluKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYWluLmlkID09PSAxMTE1NTExMSlcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGh0dHA6IGBodHRwczovL3NlcG9saWEuaW5mdXJhLmlvL3YzLzI1NjMwYjE4Njg5ZjQ5YTNiMGQ5YmE3YjhhYTc0MDkxYCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgaWYgKGNoYWluLmlkID09PSA4NDUzMilcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGh0dHA6IFwiaHR0cHM6Ly9zZXBvbGlhLmJhc2Uub3JnXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXVxyXG4pO1xyXG5cclxuXHJcbi8vIOKchSBEZWZhdWx0IHdhbGxldCBjb25uZWN0b3JzXHJcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xyXG4gIGFwcE5hbWU6IFwiUGVlclggZXhjaGFuZ2VcIixcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuLy8g4pyFIENyZWF0ZSBXYWdtaSBjbGllbnRcclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4gIGNvbm5lY3RvcnMsXHJcbiAgcHJvdmlkZXIsXHJcbn0pO1xyXG5cclxuLy8g4pyFICBDdXN0b21pemUgdGhlbWUgKGN1cnJlbnRseSBub3QgdXNlZClcclxuY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xyXG4gIGNvbG9yczoge1xyXG4gICAgYWNjZW50Q29sb3I6IFwiIzJlY2M3MVwiLCBcclxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmZmZmXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlclxyXG4gICAgICAgIGNoYWlucz17Y2hhaW5zfVxyXG4gICAgICAgIHRoZW1lPXtteVRoZW1lfVxyXG4gICAgICA+XHJcbiAgICAgICA8Q29tcG9uZW50ICB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lcmdlIiwianNvblJwY1Byb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJtaWRuaWdodFRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImluZnVyYVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJiYXNlU2Vwb2xpYSIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImRlZmF1bHQiLCJodHRwIiwiYmxvY2tFeHBsb3JlcnMiLCJ1cmwiLCJ0ZXN0bmV0IiwiY2hhaW5zIiwicHJvdmlkZXIiLCJzZXBvbGlhIiwiYXBpS2V5IiwicnBjIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwibXlUaGVtZSIsImNvbG9ycyIsImFjY2VudENvbG9yIiwiYWNjZW50Q29sb3JGb3JlZ3JvdW5kIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();