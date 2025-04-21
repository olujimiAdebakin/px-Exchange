"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './wagmi'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6959);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6524);
/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_6__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Card() {
    const { address  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module './wagmi'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "py-6 sm:py-12 bg-[#1a1a1a] text-gray-100",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container p-6 mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-bold",
                                children: "All Listed Tokens For sale"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-serif text-sm text-gray-400"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4",
                        children: Object.entries(_utils_saleToken__WEBPACK_IMPORTED_MODULE_8__/* .tokenMap */ .NF).map(([key, name], index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                                index: index + 1,
                                name: name,
                                walletAddress: address
                            }, key))
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Footer"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 7673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import React, { useEffect, useState } from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useAccount } from "wagmi";
// import toast, { Toaster } from "react-hot-toast"
// // INTERNAL
// imp  ort { Menu, Logo, TokenBalance } from "./index"
// expor  t default function Header() {
//   const [tokenBalComp, setTokenBalComp] = useState();
//   const { address } = useAccount();
//   const notifyConnectWallet = () => {
//     toast.success("Wallet connected successfully!");
//     toast.error("Connect wallet.", { duration: 2000 });
//   };
//   useEffect(() => {
//     setTokenBalComp(
//       <>
//         <TokenBalance address={address} />
//         <ConnectButton onConnect={notifyConnectWallet} />
//       </>
//     );
//     if (!address) notifyConnectWallet();
//   }, [address]);
//   return (
//     <>
//       <header className="p-4 text-gray-100">
//         <div className="container flex justify-around h-16 mx-auto">
//           <div className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               aria-label="Back to homepage"
//               className="flex items-center p-2"
//             >
//               <Logo />
//             </a>
//             <ul>
//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="/"
//                   className="flex items-center px-4 -mb-1 dark:border-transparent text-[#7765f3] border-[#7765f3]"
//                 >
//                   Swap
//                 </a>
//               </li>
//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="/tokens"
//                   className="flex items-center px-4 -mb-1 dark:border-transparent "
//                 >
//                   Tokens
//                 </a>
//               </li>
//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center px-4 -mb-1 dark:border-transparen"
//                 >
//                   NFTs
//                 </a>
//               </li>
//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="/"
//                   className="flex items-center px-4 -mb-1 dark:border-transparent"
//                 >
//                   Pool
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="items-center flex-shrink-0 hidden lg:flex">
//             <TokenBalance name={"PASER"} walletAddress={address} />
//             <TokenBalance name={"PX"} walletAddress={address} />
//             <ConnectButton/>
//           </div>
//           <button className="p-4 lg:hidden">
//             <Menu/>
//           </button>
//         </div>
//         <Toaster/>
//       </header>
//     </>
//   );
// }




// INTERNAL

// const tokens = ["PASER", "PX"];
// Add more tokens here if needed
const tokens = [
    "PAX Coin",
    "PASER",
    "PX"
];
function Header() {
    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();
    const notifyConnectWallet = ()=>{
        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("Please connect your wallet.", {
            duration: 2000
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!address) notifyConnectWallet();
    }, [
        address
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: "p-4 text-gray-100",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container flex justify-around h-16 mx-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    href: "#",
                                    "aria-label": "Back to homepage",
                                    className: "flex items-center p-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-white text-3xl font-bold",
                                        children: "Peer X"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "/",
                                                className: "flex items-center px-4 text-[#7765f3]",
                                                children: "Swap"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "/tokens",
                                                className: "flex items-center px-4",
                                                children: "Tokens"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "flex items-center px-4",
                                                children: "NFTs"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "/",
                                                className: "flex items-center px-4",
                                                children: "Pool"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "items-center gap-4 flex-shrink-0 hidden lg:flex",
                            children: [
                                isConnected && tokens.map((token, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TokenBalance */ .F5, {
                                        name: token,
                                        walletAddress: address
                                    }, i)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "p-4 lg:hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .Menu */ .v2, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {})
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeroSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);
_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function HeroSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "bg-[#1A1A1A] text-gray-100",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-5xl font-bold leading sm:text-6xl",
                                children: [
                                    "Token",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#7765F3]",
                                        children: "Marketplace"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-6 mb-8 text-lg sm:mb-12",
                                children: " Power your crypto journey—swap tokens, earn rewards, and build on the most trusted decentralized trading protocol."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        rel: "noopener noreferrer",
                                        href: "#",
                                        className: "px-8 py-3 text-lg font-semibold rounded bg-[#7765F3] text-gray-900",
                                        children: "Get Started"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        rel: "noopener noreferrer",
                                        href: "#",
                                        className: "px-8 py-3 text-lg font-semibold rounded border border-gray-100",
                                        children: "Swap ERC20"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .SwapComponent */ .cU, {})
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5285:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Facebook = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 32 32",
        className: "w-5 h-5 fill-current",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Facebook)));


/***/ }),

/***/ 8960:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Insta = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        className: "w-5 h-5 fill-current",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Insta)));


/***/ }),

/***/ 5601:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Logo = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 32 32",
        className: "w-8 h-8 text-[#7765F3]",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Logo)));


/***/ }),

/***/ 3562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Menu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        className: "w-6 h-6 dark:text-gray-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ 5061:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Twitter = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5 fill-current",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Twitter)));


/***/ }),

/***/ 8559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1843);




function Selector({ defaultValue , ignoreValue , setToken , id  }) {
    const menu = [
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .TETHER_USD */ .fY,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .TETHER_USD */ .fY
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .BNB */ .cc,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .BNB */ .cc
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .PAX_COIN */ .hD,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .PAX_COIN */ .hD
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .STETH */ ._S,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .STETH */ ._S
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .TRON */ .E8,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .TRON */ .E8
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .PASER */ .Zh,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .PASER */ .Zh
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__.PX,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__.PX
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .UNISWAP */ .sA,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .UNISWAP */ .sA
        }, 
    ];
    const { 0: selectedItem , 1: setSelectedItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const { 0: menuItems , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    function getFilteredItems(ignore) {
        return menu.filter((item)=>item.key !== ignore);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedItem(defaultValue);
    }, [
        defaultValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMenuItems(getFilteredItems(ignoreValue));
    }, [
        ignoreValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Button, {
                css: {
                    backgroundColor: selectedItem === _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_VALUE */ .PW ? "#7765F3" : "#2c2f36"
                },
                children: selectedItem
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
                "aria-label": "Dynamic Actions",
                items: menuItems,
                onAction: (key)=>{
                    setSelectedItem(key);
                    setToken(key);
                },
                children: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                        "aria-label": id,
                        color: item.key === "delete" ? "error" : "default",
                        children: item.name
                    }, item.key)
            })
        ]
    });
};


/***/ }),

/***/ 6349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6524);
/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7703);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TransactionStatus__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
([_TransactionStatus__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SingleCard = ({ index , name , walletAddress  })=>{
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("-");
    const { 0: tokenAddress , 1: setTokenAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: copyIcon , 1: setCopyIcon  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ClipboardIcon
    });
    const { 0: txPending , 1: setTxPending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error(msg, {
            duration: 6000
        });
    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("Transaction Completed.", {
            duration: 4000
        });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (name && walletAddress) {
            fetchTokenBalance();
            fetchTokenAddress();
        } else setBalance("-");
    }, [
        name,
        walletAddress
    ]);
    async function fetchTokenBalance() {
        try {
            const bal = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .getTokenBalance */ .yX)(name, walletAddress);
            const fBal = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatUnits(bal.toString(), 18);
            setBalance(fBal.toString());
        } catch (err) {
            notifyError("Failed to fetch balance");
            setBalance("0");
        }
    }
    async function fetchTokenAddress() {
        try {
            const addr = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .getTokenAddress */ .DT)(name, walletAddress);
            setTokenAddress(addr);
        } catch (err) {
            notifyError("Failed to fetch token address");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "flex flex-col bg-[#212429]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                rel: "noopener noreferrer",
                href: "#",
                "aria-label": "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    alt: "",
                    className: "object-cover w-full h-62 bg-gray-500",
                    src: `img/${index + 1}.png`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-1 p-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        rel: "noopener noreferrer",
                        href: "#",
                        "aria-label": "",
                        className: "text-xs uppercase hover:underline text-[#7765f3]",
                        children: [
                            name,
                            " 10M Supply"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: "flex-1 py-2 text-lg font-semibold leading-5",
                        children: [
                            "Get ",
                            name,
                            " token, limited Supply available"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mx-2 pt-[10px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center bg-zinc-300 p-2 px-3 rounded-l-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm",
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100",
                                        children: balance
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(copyIcon.icon, {
                                    className: "h-6 cursor-pointer",
                                    onClick: ()=>{
                                        navigator.clipboard.writeText(tokenAddress);
                                        setCopyIcon({
                                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ClipboardCheckIcon
                                        });
                                        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("Address copied to clipboard", {
                                            duration: 3000
                                        });
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SwapComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6524);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8712);
/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7703);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1843);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4364);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__]);
([_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SwapComponent() {
    const { 0: srcToken , 1: setSrcToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB);
    const { 0: destToken , 1: setDestToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_VALUE */ .PW);
    const { 0: inputValue , 1: setInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: outPutValue , 1: setOutputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const outPutValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const INCREASE_ALLOWANCE = "Increase Allowance";
    const ENTER_AMOUNT = "Enter an Amount";
    const CONNECT_WALLET = "Connect Wallet";
    const SWAP = "Swap";
    const srcTokenObj = {
        id: "srcToken",
        value: inputValue,
        setValue: setInputValue,
        defaultValue: srcToken,
        ignoreValue: destToken,
        setToken: setSrcToken
    };
    const destTokenObj = {
        id: "srcToken",
        value: outPutValue,
        setValue: setOutputValue,
        defaultValue: destToken,
        ignoreValue: srcToken,
        setToken: setDestToken
    };
    const { 0: srcTokenComp , 1: setSrcTokenComp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: destTokenComp , 1: setDestTokenComp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: swapBtnText , 1: setSwapBtnText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT);
    const { 0: txPending , 1: setTxPending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].error(msg, {
            duration: 6000
        });
    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].success("Transaction Completed.");
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Handling the text of the submit button
        if (!address) setSwapBtnText(CONNECT_WALLET);
        else if (!inputValue || !outPutValue) setSwapBtnText(ENTER_AMOUNT);
        else setSwapBtnText(SWAP);
    }, [
        inputValue,
        outPutValue,
        address
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (document.activeElement !== outPutValueRef.current && document.activeElement.ariaLabel !== "srcToken" && !isReversed.current) populateOutputValue(inputValue);
        setSrcTokenComp(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwapField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            obj: srcTokenObj,
            ref: inputValueRef
        }));
        if (inputValue?.length === 0) setOutputValue("");
    }, [
        inputValue,
        destToken
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (document.activeElement !== inputValueRef.current && document.activeElement.ariaLabel !== "destToken" && isReversed.current) populateInputValue(outPutValue);
        setDestTokenComp(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwapField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            obj: destTokenObj,
            ref: outPutValueRef
        }));
        if (inputValue?.length === 0) setOutputValue("");
        // Reseting the isReversed value if its set
        if (isReversed.current) isReversed.current = false;
    }, [
        outPutValue,
        srcToken
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] p-4 px-6 rounded-xl",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between py-4 px-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Swap your tokens below:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CogIcon, {
                            className: "h-6"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600",
                    children: [
                        srcTokenComp,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ArrowSmDownIcon, {
                            className: "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110",
                            onClick: handleReverseExchange
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600",
                    children: destTokenComp
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: getSwapBtnClassName(),
                    onClick: ()=>{
                        if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
                        else if (swapBtnText === SWAP) handleSwap();
                    },
                    children: swapBtnText
                }),
                txPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {})
            ]
        })
    });
    async function handleSwap() {
        if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) {
            performSwap();
        } else {
            // check whether there is allowance when the swap deals with tokenToEth/tokenToToken
            setTxPending(true);
            const result = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .hasValidAllowance */ .aP)(address, srcToken, inputValue);
            setTxPending(false);
            if (result) performSwap();
            else handleInsufficientAllowance();
        }
    }
    async function handleIncreaseAllowance() {
        // increase the allowance
        setTxPending(true);
        await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .increaseAllowance */ .de)(srcToken, inputValue);
        setTxPending(false);
        // set the swapBtn to "Swap" again
        setSwapBtnText(SWAP);
    }
    function handleReverseExchange() {
        // setting the isReversed value to prevent the input.output values
        // being calculated in their respective side - efforts
        isReversed.current = true;
        // 1. Swap tokens (srcToken <--> destToken)
        // 2. Swap values (inputValue <--> outputValue)
        setInputValue(outPutValue);
        setOutputValue(inputValue);
        setSrcToken(destToken);
        setDestToken(srcToken);
    }
    // function getSwapBtnClassName() {
    //   let className = "p-4 w-full my-2 rounded-xl";
    //   className += swapBtnText == ENTER_AMOUNT || swapBtnText == CONNECT_WALLET
    //     ? " text-zinc-400 bg-zinc-800 pointer-events-none"
    //     : "bg-blue-700";
    //   className += swapBtnText === INCREASE_ALLOWANCE ? "bg-yellow-600" : "";
    //   return className;
    // }
    function getSwapBtnClassName() {
        let className = "p-4 w-full my-2 rounded-xl ";
        if (swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET) {
            className += "text-zinc-400 bg-zinc-800 pointer-events-none ";
        } else if (swapBtnText === INCREASE_ALLOWANCE) {
            className += "bg-yellow-600 ";
        } else {
            className += "bg-blue-700 ";
        }
        return className;
    }
    function populateOutputValue() {
        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_VALUE */ .PW || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_VALUE */ .PW || !inputValue) return;
        try {
            if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) setOutputValue(inputValue);
            else if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) {
                const outValue = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toWei */ .r)(inputValue), 14);
                setOutputValue(outValue);
            } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken == _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) {
                const outValue1 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toWei */ .r)(inputValue, 14));
                setOutputValue(outValue1);
            }
        } catch (error) {
            setOutputValue("0");
        }
    }
    function populateInputValue() {
        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_VALUE */ .PW || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_VALUE */ .PW || !inputValue) return;
        try {
            if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) setInputValue(outPutValue);
            else if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) {
                const outValue = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toWei */ .r)(outPutValue), 14);
                setInputValue(outValue);
            } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken == _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) {
                const outValue1 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .toWei */ .r)(inputValue, 14));
                setInputValue(outValue1);
            }
        } catch (error) {
            setOutputValue("0");
        }
    }
    async function performSwap() {
        setTxPending(true);
        let receipt;
        if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) {
            receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .swapEthToToken */ .hO)(destToken, inputValue);
        } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__/* .ETH */ .hB) {
            receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .swapTokenToEth */ .Jg)(srcToken, inputValue);
        } else {
            receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .swapTokenToToken */ .Ti)(srcToken, destToken, inputValue);
        }
        setTxPending(false);
        if (receipt && !receipt.hasOwnProperty("transactions")) {
            notifyError(receipt);
        } else {
            notifySuccess();
        }
    }
    function handleInsufficientAllowance() {
        notifyError("Insufficient allowance. Click 'Increase allowance' to increase it.");
        setSwapBtnText(INCREASE_ALLOWANCE);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8559);



const SwapField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ obj  }, inputRef)=>{
    const { id , value ="" , setValue , defaultValue , setToken , ignoreValue  } = obj;
    // Define helper before usage
    const getInputClassname = ()=>{
        return "w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center rounded-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: inputRef,
                className: getInputClassname(),
                type: "number",
                value: value,
                placeholder: "0.0",
                onChange: (e)=>{
                    setValue(e.target.value);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Selector__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                id: id,
                setToken: setToken,
                defaultValue: defaultValue,
                ignoreValue: ignoreValue
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwapField);


/***/ }),

/***/ 6295:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Table = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "Table"
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Table)));


/***/ }),

/***/ 7347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6959);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6524);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_5__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const TokenBalance = ({ name , walletAddress  })=>{
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("-");
    const { 0: tokenAddress , 1: setTokenAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: copyIcon , 1: setCopyIcon  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ClipboardIcon
    });
    const { 0: txPending , 1: setPending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(msg, {
            duration: 6000
        });
    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Transaction Completed.");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (name && walletAddress) {
            fetchTokenBalance();
            fetchTokenAddress();
        } else setBalance("-");
    }, [
        name,
        walletAddress
    ]);
    async function fetchTokenBalance() {
        const bal = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_6__/* .getTokenBalance */ .yX)(name, walletAddress);
        console.log(bal);
        const fBal = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatUnits(bal.toString(), 18);
        setBalance(fBal.toString());
    }
    async function fetchTokenAddress() {
        const address = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_6__/* .getTokenAddress */ .DT)(name);
        setTokenAddress(address);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765f3]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center bg-zink-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm",
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "bg-zinc800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100",
                            children: balance
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center p-2 px-2 bg-[#7765f3] rounded-r-lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(copyIcon.icon, {
                    className: "h-6 cursor-pointer",
                    onClick: ()=>{
                        navigator.clipboard.writeText(tokenAddress);
                        setCopyIcon({
                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ClipboardCheckIcon
                        });
                    }
                })
            }),
            txPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStatus */ .LN, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TransactionStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TransactionStatus() {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // To prevent the closing of dialog
    function handleClose() {
        setOpen(true);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
            show: open,
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                as: "div",
                className: "fixed z-[99999] inset-0 overflow-y-auto",
                onClose: handleClose,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                            "aria-hidden": "true",
                            children: "​"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            enterTo: "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "status inline-block align-bottom py-6 bg-white border rounded-lg text-center overflow-hidden shadow-xl transform transition-all md:w-[35%] sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-4 py-4 items-center justify-center sm:px-6 sm:flex sm:flex-row-reverse",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Loading, {
                                            children: "Completing the transaction"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "px-4 py-4 text-black items-center text-sm justify-center sm:px-6 sm:flex sm:flex-row-reverse",
                                        children: "(Transaction would usually take < 12 secs...)"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "DH": () => (/* reexport safe */ _HeroSection__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "F5": () => (/* reexport safe */ _TokenBalance__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "LN": () => (/* reexport safe */ _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "Zb": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "cU": () => (/* reexport safe */ _SwapComponent__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "tR": () => (/* reexport safe */ _SingleCard__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "v2": () => (/* reexport safe */ _SVG_Menu__WEBPACK_IMPORTED_MODULE_10__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7673);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3193);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1702);
/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8688);
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8559);
/* harmony import */ var _SingleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6349);
/* harmony import */ var _SwapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1076);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6295);
/* harmony import */ var _TokenBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7347);
/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7703);
/* harmony import */ var _SVG_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3562);
/* harmony import */ var _SVG_Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5601);
/* harmony import */ var _SVG_Facebook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5285);
/* harmony import */ var _SVG_Insta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8960);
/* harmony import */ var _SVG_Twitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__, _Card__WEBPACK_IMPORTED_MODULE_2__, _HeroSection__WEBPACK_IMPORTED_MODULE_3__, _SingleCard__WEBPACK_IMPORTED_MODULE_5__, _SwapComponent__WEBPACK_IMPORTED_MODULE_6__, _TokenBalance__WEBPACK_IMPORTED_MODULE_8__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__]);
([_Header__WEBPACK_IMPORTED_MODULE_0__, _Card__WEBPACK_IMPORTED_MODULE_2__, _HeroSection__WEBPACK_IMPORTED_MODULE_3__, _SingleCard__WEBPACK_IMPORTED_MODULE_5__, _SwapComponent__WEBPACK_IMPORTED_MODULE_6__, _TokenBalance__WEBPACK_IMPORTED_MODULE_8__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// SVG ICON







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_index__WEBPACK_IMPORTED_MODULE_2__]);
_components_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Home = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-[#1A1A1A]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .HeroSection */ .DH, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Zb, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DT": () => (/* binding */ getTokenAddress),
  "yX": () => (/* binding */ getTokenBalance),
  "aP": () => (/* binding */ hasValidAllowance),
  "de": () => (/* binding */ increaseAllowance),
  "hO": () => (/* binding */ swapEthToToken),
  "Jg": () => (/* binding */ swapTokenToEth),
  "Ti": () => (/* binding */ swapTokenToToken)
});

// UNUSED EXPORTS: getAllHistory, parseErrorMsg, toWei

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./utils/CustomDex.json
const CustomDex_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_historyIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllHistory","outputs":[{"components":[{"internalType":"uint256","name":"historyId","type":"uint256"},{"internalType":"string","name":"tokenA","type":"string"},{"internalType":"string","name":"tokenB","type":"string"},{"internalType":"uint256","name":"inputValue","type":"uint256"},{"internalType":"uint256","name":"outputValue","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"internalType":"struct CustomDex.History[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"address","name":"_address","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"address","name":"_address","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"}],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"}],"name":"getTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"histories","outputs":[{"internalType":"uint256","name":"historyId","type":"uint256"},{"internalType":"string","name":"tokenA","type":"string"},{"internalType":"string","name":"tokenB","type":"string"},{"internalType":"uint256","name":"inputValue","type":"uint256"},{"internalType":"uint256","name":"outputValue","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"}],"name":"swapEthToToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"swapTokenToEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"srcTokenName","type":"string"},{"internalType":"string","name":"destTokenName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"swapTokenToToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tokenInstanceMap","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokens","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./utils/CustomToken.json
const CustomToken_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./utils/contract.js
// import { ethers } from "ethers";
// import CustomDexABI from "../utils/CustomDex.json";
// import CustomTokenABI from "../utils/CustomToken.json";
// export const tokenContract = async (address) => {
//   const { ethereum } = window;
//   if (!ethereum) {
//     alert("Please install MetaMask!");
//     return;
//   }
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   return new ethers.Contract(address, CustomTokenABI.abi, signer);
// };
// export const contract = async () => {
//   const { ethereum } = window;
//   if (!ethereum) {
//     alert("Please install MetaMask!");
//     return;
//   }
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   return new ethers.Contract(
//     "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3", // CustomDex address
//     CustomDexABI.abi,
//     signer
//   );
// };



const tokenContract = async (address)=>{
    const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
    const { ethereum  } = window;
    if (ethereum) {
        const signer = provider.getSigner();
        const contractReader = new external_ethers_.ethers.Contract(address, CustomToken_namespaceObject.Mt, signer);
        return contractReader;
    }
};
const contract_contract = async ()=>{
    const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
    const { ethereum  } = window;
    if (ethereum) {
        const signer = provider.getSigner();
        const contractReader = new external_ethers_.ethers.Contract("0xA0760CE96cF48bf206D5dE2beC04083d675de4c3", CustomDex_namespaceObject.Mt, signer);
        return contractReader;
    }
    ;
};

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(4364);
;// CONCATENATED MODULE: ./utils/context.js
// import { BigNumber, ethers } from "ethers";
// import { contract, tokenContract } from "./contract";
// import { toEth } from "./utils";
// export async function swapEthToToken(tokenName, amount) {
//     try {
//         let tx = { value: toWei(amount) };
//         const contractObj = await contract();
//         const data = await contractObj.swapEthToToken(tokenName, tx);
//         const receipt = await data.wait();
//         return receipt;
//     } catch (e) {
//         return parseErrorMsg(e);
//     }
// };
// export async function hasValidAllowance(owner, tokenName, amount) {
//     try {
//         const contractObj = await contract();
//         const address = await contractObj.getTokenAddress(tokenName);
//         const tokenContractObj = await tokenContract(address);
//         const data = await tokenContractObj.allowance(
//             owner,
//             "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3"
//         );
//         const result = BigNumber.from(data.toString()).gte(
//             BigNumber.from(toWei(amount))
//         );
//         return result;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// };
// export async function swapTokenToEth(tokenName, amount) {
//     try {
//         const contractObj = await contract();
//         const data = await contractObj.swapTokenToEth(tokenName,toWei(amount));
//         const receipt = await data.wait();
//         return receipt;
//     } catch (e) {
//         return parseErrorMsg(e);
//     };
// }
// export async function swapTokenToToken(srcToken, destToken, amount){
//     try{
//         const contractObj = await contract();
//         const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));
//         const receipt = await data.wait();
//         return receipt;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// }
// export async function getTokenBalance(tokenName, address){
//     const contractObj = await contract();
//     const balance = contractObj.getBalance(tokenName, address);
//     return balance;
// }
// export async function getTokenAddress(tokenName){
//     try {
//         const contractObj = await contract();
//         const address = await contractObj.getTokenAddress(tokenName);
//         return address;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// }
// export async function increaseAllowance(tokenName, amount){
//     try {
//         const contractObj = await contract();
//         const address = await contractObj.getTokenAddress(tokenName);
//         const tokenContractObj = await tokenContract(address);
//         const data = await tokenContractObj.approve(
//             "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3"
//             toWei(amount)
//         );
//         const receipt = await data.wait();
//         return receipt;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// }
// export async function getAllHistory(){
//     try {
//         const contractObj = await contract();
//         const getAllHistory = await contractObj.getAllHistory();
//         const historyTransaction = gtAllHistory.map((history, i)=>{
//             historyId: historyId.toNumber(),
//             tokenA: history.tokenA,
//             tokenB: history.tokenB,
//             inputValue: toEth(history?.inputValue),
//             outputValue: toEth(history?.outputValue),
//         });
//         return historyTransaction;
//     } catch (e) {
//         return parseErrorMsg(e);
//     }
// }
// export async function toWei(amount){
//     const toWei = ethers.utils.parseUnits(amount.toString());
//     return towei.toString();
// }
// export async function parseErrorMsg(e){
//     const json = JSON.parse(JSON.stringify(e));
//     return json?.reason || json.error?.message;
// }



// Convert amount to Wei
function toWei(amount) {
    return external_ethers_.ethers.utils.parseUnits(amount.toString()).toString();
}
// Parse Error Messages
function parseErrorMsg(e) {
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json.error?.message || "Unknown error occurred";
}
// Swap ETH to Token
async function swapEthToToken(tokenName, amount) {
    try {
        const tx = {
            value: toWei(amount)
        };
        const contractObj = await contract_contract();
        const data = await contractObj.swapEthToToken(tokenName, tx);
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
// Check Allowance
async function hasValidAllowance(owner, tokenName, amount) {
    try {
        const contractObj = await contract_contract();
        const tokenAddress = await contractObj.getTokenAddress(tokenName);
        const tokenContractObj = await tokenContract(tokenAddress);
        const allowance = await tokenContractObj.allowance(owner, "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3" // DEX contract address
        );
        return external_ethers_.BigNumber.from(allowance.toString()).gte(external_ethers_.BigNumber.from(toWei(amount)));
    } catch (e) {
        return parseErrorMsg(e);
    }
}
// Swap Token to ETH
async function swapTokenToEth(tokenName, amount) {
    try {
        const contractObj = await contract_contract();
        const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
// Swap Token to Token
async function swapTokenToToken(srcToken, destToken, amount) {
    try {
        const contractObj = await contract_contract();
        const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
// Get Token Balance
async function getTokenBalance(tokenName, address) {
    try {
        const contractObj = await contract_contract();
        const balance = await contractObj.getBalance(tokenName, address);
        return balance;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
// Get Token Address
async function getTokenAddress(tokenName) {
    try {
        const contractObj = await contract_contract();
        const address = await contractObj.getTokenAddress(tokenName);
        return address;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
// Increase Allowance
async function increaseAllowance(tokenName, amount) {
    try {
        const contractObj = await contract_contract();
        const tokenAddress = await contractObj.getTokenAddress(tokenName);
        const tokenContractObj = await tokenContract(tokenAddress);
        const tx = await tokenContractObj.approve("0xA0760CE96cF48bf206D5dE2beC04083d675de4c3", toWei(amount));
        const receipt = await tx.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
// Get All Transaction History
async function getAllHistory() {
    try {
        const contractObj = await contract();
        const allHistory = await contractObj.getAllHistory();
        const historyTransaction = allHistory.map((history)=>({
                historyId: history.historyId.toNumber(),
                tokenA: history.tokenA,
                tokenB: history.tokenB,
                inputValue: toEth(history?.inputValue),
                outputValue: toEth(history?.outputValue)
            }));
        return historyTransaction;
    } catch (e) {
        return parseErrorMsg(e);
    }
}


/***/ }),

/***/ 1843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E8": () => (/* binding */ TRON),
/* harmony export */   "NF": () => (/* binding */ tokenMap),
/* harmony export */   "PW": () => (/* binding */ DEFAULT_VALUE),
/* harmony export */   "PX": () => (/* binding */ PX),
/* harmony export */   "Zh": () => (/* binding */ PASER),
/* harmony export */   "_S": () => (/* binding */ STETH),
/* harmony export */   "cc": () => (/* binding */ BNB),
/* harmony export */   "fY": () => (/* binding */ TETHER_USD),
/* harmony export */   "hB": () => (/* binding */ ETH),
/* harmony export */   "hD": () => (/* binding */ PAX_COIN),
/* harmony export */   "sA": () => (/* binding */ UNISWAP)
/* harmony export */ });
/* unused harmony export tokens */
// export const ETH ="Eth";
// saleToken.js or saleToken.ts
// Export ETH constant
const ETH = "Eth";
// Export all token names as individual constants
const TETHER_USD = "Tether USD";
const BNB = "BNB";
const PAX_COIN = "PAX Coin";
const STETH = "stETH";
const TRON = "TRON";
const PASER = "PASER";
const PX = "PX";
const UNISWAP = "Uniswap";
const DEFAULT_VALUE = "Select a token";
// Export the full array of token names
const tokens = (/* unused pure expression or super */ null && ([
    "Tether USD",
    "BNB",
    "PAX Coin",
    "stETH",
    "TRON",
    "PASER",
    "PX",
    "Uniswap",
    "DEFAULT_VALUE"
]));
// If you need an object/mapping
const tokenMap = {
    TETHER_USD: "Tether USD",
    BNB: "BNB",
    PAX_COIN: "PAX Coin",
    STETH: "stETH",
    TRON: "TRON",
    PASER: "PASER",
    PX: "PX",
    UNISWAP: "Uniswap"
};


/***/ }),

/***/ 4364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ toEth),
/* harmony export */   "r": () => (/* binding */ toWei)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

// function to convert to WEI
function toWei(amount, decimals = 18) {
    const toWei = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.parseUnits(amount, decimals);
    return toWei.tostring();
}
// function to convert to ETH
function toEth(amount, decimals = 18) {
    const toEth = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatUnits(amount, decimals);
    return toEth.toString();
}


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3678));
module.exports = __webpack_exports__;

})();