(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Preloader.js

const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        className: "preloaded",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "line"
        })
    });
};
/* harmony default export */ const components_Preloader = (Preloader);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Switcher.js



const colors = [
    {
        id: 1,
        name: "yellow"
    },
    {
        id: 2,
        name: "green"
    },
    {
        id: 3,
        name: "red"
    },
    {
        id: 4,
        name: "blue"
    },
    {
        id: 5,
        name: "orange"
    },
    {
        id: 6,
        name: "yellowgreen"
    },
    {
        id: 7,
        name: "pink"
    },
    {
        id: 8,
        name: "goldenrod"
    }
];
const Switcher = ()=>{
    const [color, setColor] = useState("yellow");
    const [toggle, setToggle] = useState(false);
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Head, {
                children: /*#__PURE__*/ _jsx("link", {
                    rel: "stylesheet",
                    href: `css/skins/${color}.css`
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                id: "switcher",
                className: toggle ? "open" : "close",
                style: {
                    display: "block"
                },
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "content-switcher",
                    children: [
                        /*#__PURE__*/ _jsx("h4", {
                            children: "COLOR SWITCHER"
                        }),
                        /*#__PURE__*/ _jsx("ul", {
                            children: colors.map((color)=>/*#__PURE__*/ _jsx("li", {
                                    children: /*#__PURE__*/ _jsx("a", {
                                        href: "#",
                                        title: color.name,
                                        className: "color",
                                        onClick: ()=>setColor(color.name),
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: `assets/styleswitcher/${color.name}.png`,
                                            alt: color.name
                                        })
                                    }, color.id)
                                }))
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            id: "hideSwitcher",
                            onClick: ()=>setToggle(false),
                            children: "\xd7"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                id: "showSwitcher",
                className: `styleSecondColor ${toggle ? "close" : "open"}`,
                onClick: ()=>setToggle(true),
                children: /*#__PURE__*/ _jsx("i", {
                    className: "fa fa-cog"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Switcher = ((/* unused pure expression or super */ null && (Switcher)));

;// CONCATENATED MODULE: ./src/TheamahHead.js


const TheamahHead = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Theamah | Portfolio"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            })
        ]
    });
};
/* harmony default export */ const src_TheamahHead = (TheamahHead);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js






const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(src_TheamahHead, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Preloader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7410));
module.exports = __webpack_exports__;

})();