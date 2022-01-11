/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n// import { useToken } from './hooks/useToken';\r\n// import { usePostsData } from './hooks/usePostsData';\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\n// import { tokenContext } from './shared/context/tokenContext';\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar actions_1 = __webpack_require__(/*! ./store/token/actions */ \"./src/store/token/actions.ts\");\r\nvar react_router_dom_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nvar Posts_1 = __webpack_require__(/*! ./shared/Posts */ \"./src/shared/Posts/index.ts\");\r\nvar NoRoute_1 = __webpack_require__(/*! ./shared/NoRoute */ \"./src/shared/NoRoute/index.ts\");\r\nvar easy_peasy_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'easy-peasy'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n// const token = localStorage.getItem('token') || window.__token__;\r\nvar store = redux_1.createStore(reducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nvar easyStore = easy_peasy_1.createStore(easy_peasy_1.persist({\r\n    commentText: { comment: 'Easy peasy lemon squeezy' },\r\n    add: easy_peasy_1.action(function (state, payload) {\r\n        state.commentText = payload;\r\n    })\r\n}));\r\nfunction AppComponent() {\r\n    var _a = react_1.useState(false), isMounted = _a[0], setIsMounted = _a[1];\r\n    react_1.useEffect(function () {\r\n        setIsMounted(true);\r\n    }, []);\r\n    // const [token] = useToken();\r\n    // const [posts] = usePostsData();\r\n    store.dispatch(actions_1.saveToken());\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(easy_peasy_1.StoreProvider, { store: easyStore }, isMounted && react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                            react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: ['/', '/auth'] },\r\n                                    react_1.default.createElement(react_router_dom_1.Redirect, { to: '/posts' })),\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: '/posts' },\r\n                                    react_1.default.createElement(CardsList_1.CardsList, null),\r\n                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id' },\r\n                                        react_1.default.createElement(Posts_1.Posts, null))),\r\n                                react_1.default.createElement(react_router_dom_1.Route, { component: NoRoute_1.NoRoute }))))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useComments.ts":
/*!**********************************!*\
  !*** ./src/hooks/useComments.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useComments = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction useComments(postId) {\r\n    var _a = react_1.useState(''), comments = _a[0], setComments = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    function getComments() {\r\n        axios_1.default.get(\"https://oauth.reddit.com/comments/\" + postId, {\r\n            headers: {\r\n                'Authorization': \"bearer \" + token,\r\n                'Content-Type': 'application/x-www-form-urlencoded'\r\n            }\r\n        })\r\n            .then(function (res) {\r\n            var commentsResp = res.data[1];\r\n            if (typeof commentsResp != 'string') {\r\n                setComments(commentsResp);\r\n            }\r\n        })\r\n            .catch(function (err) { console.log('[src/hooks/useComments.ts] Axios err: ', err); });\r\n    }\r\n    react_1.useEffect(function () {\r\n        if (token !== '' && typeof token !== 'undefined' && postId !== '' && typeof postId !== 'undefined') {\r\n            getComments();\r\n        }\r\n    }, [postId]);\r\n    return [comments];\r\n}\r\nexports.useComments = useComments;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useComments.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar R = __importStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ramda'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar pureUrl_1 = __webpack_require__(/*! ../utils/js/pureUrl */ \"./src/utils/js/pureUrl.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction usePostsData() {\r\n    // const [postsData, setPostsData] = useState<IPostsDataPicked>({});\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var _a = react_1.useState({ after: '', dist: 0, children: [], byIds: {}, loading: false, error: '', loadCount: 0 }), postsAndAuthor = _a[0], setPostsAndAuthor = _a[1];\r\n    var _b = react_1.useState(true), newPosts = _b[0], setNewPosts = _b[1];\r\n    // const token = useContext(tokenContext);\r\n    function addAuthorData(posts) {\r\n        if (typeof (posts === null || posts === void 0 ? void 0 : posts.children) !== 'undefined' && !!(posts === null || posts === void 0 ? void 0 : posts.children)) {\r\n            posts.children.forEach(function (item) {\r\n                var axiosUrl = \"https://oauth.reddit.com/user/\" + item.author + \"/about\";\r\n                axios_1.default.get(axiosUrl, {\r\n                    headers: {\r\n                        'Authorization': \"bearer \" + token,\r\n                        'Content-Type': 'application/x-www-form-urlencoded'\r\n                    },\r\n                    timeout: 5000\r\n                })\r\n                    .then(function (resp) {\r\n                    var _a;\r\n                    var authorData = resp.data;\r\n                    if (typeof ((_a = authorData.data) === null || _a === void 0 ? void 0 : _a.icon_img) !== 'undefined') {\r\n                        var icon_1 = pureUrl_1.pureUrl(authorData.data.icon_img);\r\n                        var newObjById_1 = {};\r\n                        if (typeof item.id !== 'undefined') {\r\n                            var key = item.id;\r\n                            newObjById_1[key] = __assign(__assign({}, item), { icon_img: icon_1 });\r\n                        }\r\n                        setPostsAndAuthor(function (prevState) {\r\n                            return {\r\n                                after: posts.after,\r\n                                dist: posts.dist,\r\n                                children: prevState.children.concat(__assign(__assign({}, item), { icon_img: icon_1 })),\r\n                                byIds: __assign(__assign({}, prevState.byIds), newObjById_1),\r\n                                loading: false,\r\n                                error: '',\r\n                                loadCount: posts.loadCount\r\n                            };\r\n                        });\r\n                        setNewPosts(false);\r\n                    }\r\n                })\r\n                    .catch(function (err) {\r\n                    console.log('[src/hooks/usePostsData.ts] Axios err: ', err);\r\n                });\r\n            });\r\n        }\r\n    }\r\n    function loadPosts() {\r\n        var _a, _b, _c;\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var resp, postsResp, postsOnlyResp, byIds, err_1;\r\n            return __generator(this, function (_d) {\r\n                switch (_d.label) {\r\n                    case 0:\r\n                        if (token === 'undefined' || token === '' || !newPosts)\r\n                            return [2 /*return*/];\r\n                        setPostsAndAuthor(function (prevPosts) {\r\n                            return __assign(__assign({}, prevPosts), { loading: true, error: '' });\r\n                        });\r\n                        _d.label = 1;\r\n                    case 1:\r\n                        _d.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/best', {\r\n                                headers: {\r\n                                    'Authorization': \"bearer \" + token,\r\n                                    'Content-Type': 'application/x-www-form-urlencoded'\r\n                                },\r\n                                params: {\r\n                                    limit: 10,\r\n                                    after: postsAndAuthor.after\r\n                                }\r\n                            })];\r\n                    case 2:\r\n                        resp = _d.sent();\r\n                        postsResp = resp.data;\r\n                        if (!!((_b = (_a = postsResp === null || postsResp === void 0 ? void 0 : postsResp.data) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) && typeof ((_c = postsResp === null || postsResp === void 0 ? void 0 : postsResp.data) === null || _c === void 0 ? void 0 : _c.children) !== 'undefined') {\r\n                            postsOnlyResp = postsResp.data.children.map(function (item) {\r\n                                if (typeof item.data !== 'undefined') {\r\n                                    return R.pick([\r\n                                        'thumbnail',\r\n                                        'author',\r\n                                        'title',\r\n                                        'name',\r\n                                        'created_utc',\r\n                                        'id',\r\n                                        'selftext',\r\n                                        'selftext_html',\r\n                                        'num_comments',\r\n                                        'preview',\r\n                                        'score',\r\n                                        'content_categories',\r\n                                        'icon_url',\r\n                                    ], item.data);\r\n                                }\r\n                                else {\r\n                                    return [];\r\n                                }\r\n                            });\r\n                            byIds = R.reduce(function (acc, post) {\r\n                                if (post.id !== '' && typeof post.id !== 'undefined') {\r\n                                    var postsNoId = R.omit(['id'], post);\r\n                                    var id = post.id;\r\n                                    return __assign(__assign({}, acc), { id: postsNoId });\r\n                                }\r\n                                else {\r\n                                    return acc;\r\n                                }\r\n                            }, {}, postsOnlyResp);\r\n                            addAuthorData({\r\n                                after: postsResp.data.after,\r\n                                dist: postsResp.data.dist,\r\n                                children: postsOnlyResp,\r\n                                byIds: {},\r\n                                loading: true,\r\n                                error: '',\r\n                                loadCount: postsAndAuthor.loadCount + 1\r\n                            });\r\n                        }\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        err_1 = _d.sent();\r\n                        console.log('[src/hooks/usePostsData.ts] Axios err: ', err_1);\r\n                        setPostsAndAuthor(function (prevPosts) {\r\n                            return __assign(__assign({}, prevPosts), { loading: false, error: String(err_1) });\r\n                        });\r\n                        return [3 /*break*/, 4];\r\n                    case 4:\r\n                        setPostsAndAuthor(function (prevPosts) {\r\n                            return __assign(__assign({}, prevPosts), { loading: false });\r\n                        });\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n    react_1.useEffect(function () {\r\n        loadPosts();\r\n    }, [token, newPosts]);\r\n    return [postsAndAuthor, setNewPosts, newPosts];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    // const [data, setData] = useState<IUserData>({});\r\n    // const token = useContext(tokenContext);\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (token === 'undefined' || !token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:   #333333;\\n  --orange:  #CC6633;\\n  --green:   #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:   hsl(0, 0%, var(--whiteLightness));\\n  --greyF4:  hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:  hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyD9:  hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:  hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:  hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:  hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--greyF4);\\n  font-size: 14px;\\n  line-height: 1.85em;\\n  /*\\n  line-height: 16px;\\n  */\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\n// ES6 template literals\r\n// indexTemplate is function that calls back content\r\n// template would send from server\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <title>mega chrenddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__ = '\" + token + \"'\\n  </script>\\n<body>\\n  <div id='react_root'>\" + content + \"</div>\\n  <div id='modal_root'></div>\\n  <div id='dropdown_root'></div>\\n</body>\\n</head>\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'helmet'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar IS_DEV = \"development\" !== 'production';\r\nvar app = express_1.default();\r\nif (!IS_DEV) {\r\n    app.use(compression_1.default());\r\n    app.use(helmet_1.default({\r\n        contentSecurityPolicy: false\r\n    }));\r\n}\r\napp.use('/static', express_1.default.static('./dist/client')); // route for static files\r\napp.get('/auth', function (req, res) {\r\n    console.log(\"code: \" + req.query.code);\r\n    console.log(\"uri: \" + 'undefined');\r\n    console.log(\"secret: \" + 'undefined');\r\n    console.log(\"client_id: \" + 'BA_9dzUzJI0Ue2b_3VC81A');\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', // url\r\n    \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=\" + 'undefined', // data\r\n    {\r\n        auth: { username: 'BA_9dzUzJI0Ue2b_3VC81A', password: 'undefined' },\r\n        headers: {\r\n            'Content-Type': 'application/x-www-form-urlencoded',\r\n            'User-Agent': 'linux:sb3000:v0.2.0 (by /u/lipinavpost)'\r\n        }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        // req.query.code;\r\n        console.log(\"access_token: \" + JSON.stringify(data.access_token));\r\n        res.send(indexTemplate_1.indexTemplate(// template would send from server\r\n        server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(console.log());\r\n});\r\napp.get('*', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(// template would send from server\r\n    server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/MetaData/index.ts\");\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/Title/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/KarmaCounter/index.ts\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CommentsButton/index.ts\");\r\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/ShareButton/index.ts\");\r\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/SaveButton/index.ts\");\r\nfunction Card(_a) {\r\n    var id = _a.id, title = _a.title, text = _a.text, cardImg = _a.cardImg, numComments = _a.numComments, contentCategories = _a.contentCategories, karma = _a.karma, createdAt = _a.createdAt, authorName = _a.authorName, avatar = _a.avatar;\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.textContent },\r\n            react_1.default.createElement(MetaData_1.MetaData, { author: authorName, avatar: avatar, createdAt: createdAt }),\r\n            react_1.default.createElement(Title_1.Title, { title: title, text: text, id: id, author: authorName })),\r\n        react_1.default.createElement(Preview_1.Preview, { cardImg: cardImg }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.controls },\r\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karma: karma }),\r\n            react_1.default.createElement(CommentsButton_1.CommentsButton, { numComments: numComments }),\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.actions },\r\n                react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n                react_1.default.createElement(SaveButton_1.SaveButton, null)))));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/CommentsButton/commentsbutton.css\"));\r\nvar CommentsButtonIcon_1 = __webpack_require__(/*! ./CommentsButtonIcon */ \"./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/index.ts\");\r\nfunction NOOP() {\r\n    // do nothing\r\n}\r\nfunction CommentsButton(_a) {\r\n    var numComments = _a.numComments, _b = _a.onClick, onClick = _b === void 0 ? NOOP : _b, _c = _a.userClassName, userClassName = _c === void 0 ? commentsbutton_css_1.default.commentsButton : _c;\r\n    var commentsSpan;\r\n    if (numComments) {\r\n        commentsSpan = react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsText }, numComments);\r\n    }\r\n    else {\r\n        commentsSpan = react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsText }, \"13\");\r\n    }\r\n    return (react_1.default.createElement(\"button\", { className: userClassName, onClick: function () { return onClick; } },\r\n        react_1.default.createElement(CommentsButtonIcon_1.CommentsButtonIcon, null),\r\n        commentsSpan));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/CommentsButtonIcon.tsx":
/*!********************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/CommentsButtonIcon.tsx ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButtonIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentsButtonIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.CommentsButtonIcon = CommentsButtonIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/CommentsButtonIcon.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/index.ts":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButtonIcon */ \"./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/CommentsButtonIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/CommentsButtonIcon/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/commentsbutton.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/commentsbutton.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--jg5NB\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--2iwO8\",\n\t\"commentsText\": \"commentsbutton__commentsText--3HhpX\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/KarmaCounter/KarmaCounter.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/KarmaCounter/KarmaCounter.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/KarmaCounter/karmacounter.css\"));\r\nfunction KarmaCounter(_a) {\r\n    var karma = _a.karma;\r\n    var karmaSpan;\r\n    if (karma) {\r\n        karmaSpan = react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, karma);\r\n    }\r\n    else {\r\n        karmaSpan = react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, \"234\");\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\r\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n        karmaSpan,\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\r\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/KarmaCounter/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/KarmaCounter/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/KarmaCounter/karmacounter.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/KarmaCounter/karmacounter.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--16k3C\",\n\t\"karmaValue\": \"karmacounter__karmaValue--1ubVr\",\n\t\"up\": \"karmacounter__up--3izf2\",\n\t\"down\": \"karmacounter__down--1yo8d\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar MenuButton_1 = __webpack_require__(/*! ./MenuButton */ \"./src/shared/CardsList/Card/Menu/MenuButton/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar LIST = [\r\n    {\r\n        text: 'Комментарии',\r\n        className: menu_css_1.default.genericListComments,\r\n        As: 'li',\r\n        icon: react_1.default.createElement(Icon_1.Icon, { name: 'comments', size: 16 }),\r\n        breakNode: react_1.default.createElement(Break_1.Break, { size: 4, inline: true })\r\n    },\r\n    {\r\n        text: 'Поделиться',\r\n        className: menu_css_1.default.genericListShare,\r\n        As: 'li',\r\n        icon: react_1.default.createElement(Icon_1.Icon, { name: 'share', size: 16 }),\r\n        breakNode: react_1.default.createElement(Break_1.Break, { size: 4, inline: true })\r\n    },\r\n    {\r\n        text: 'Скрыть',\r\n        className: menu_css_1.default.genericListHide,\r\n        As: 'li',\r\n        icon: react_1.default.createElement(Icon_1.Icon, { name: 'hide', size: 16 }),\r\n        breakNode: react_1.default.createElement(Break_1.Break, { size: 4, inline: true })\r\n    },\r\n    {\r\n        text: 'Сохранить',\r\n        className: menu_css_1.default.genericListSave,\r\n        As: 'li',\r\n        icon: react_1.default.createElement(Icon_1.Icon, { name: 'save', size: 16 }),\r\n        breakNode: react_1.default.createElement(Break_1.Break, { size: 4, inline: true })\r\n    },\r\n    {\r\n        text: 'Пожаловаться',\r\n        className: menu_css_1.default.genericListComplain,\r\n        icon: react_1.default.createElement(Icon_1.Icon, { name: 'complain', size: 16 }),\r\n        As: 'li',\r\n        breakNode: react_1.default.createElement(Break_1.Break, { size: 4, inline: true })\r\n    },\r\n    {\r\n        text: 'Закрыть',\r\n        className: menu_css_1.default.genericListClose,\r\n        As: 'li',\r\n    },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction NOOP() {\r\n    // do nothing\r\n}\r\nfunction Menu(props) {\r\n    var children = props.children, _a = props.isOpen, isOpen = _a === void 0 ? false : _a, _b = props.onFocus, onFocus = _b === void 0 ? NOOP : _b;\r\n    var _c = react_1.default.useState(isOpen), isDropdownOpen = _c[0], setIsDropdownOpen = _c[1];\r\n    // const [isMounted] = useIsMounted();\r\n    // React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu, onClick: function () { return setIsDropdownOpen(true); }, onBlur: function () { return setIsDropdownOpen(false); } },\r\n        react_1.default.createElement(MenuButton_1.MenuButton, null),\r\n        isDropdownOpen &&\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { classNameList: menu_css_1.default.dropdownList },\r\n                react_1.default.createElement(\"ul\", { className: menu_css_1.default.menuList },\r\n                    react_1.default.createElement(GenericList_1.GenericList, { list: LIST })))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menubutton_css_1 = __importDefault(__webpack_require__(/*! ./menubutton.css */ \"./src/shared/CardsList/Card/Menu/MenuButton/menubutton.css\"));\r\nfunction MenuButton(props) {\r\n    return (react_1.default.createElement(\"button\", { className: menubutton_css_1.default.menuButton },\r\n        react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" }))));\r\n}\r\nexports.MenuButton = MenuButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuButton/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuButton/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuButton */ \"./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuButton/menubutton.css":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuButton/menubutton.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuButton\": \"menubutton__menuButton--3i8lv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuButton/menubutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--22Yos\",\n\t\"dropdownList\": \"menu__dropdownList--FCFv-\",\n\t\"menuList\": \"menu__menuList--2DRrP\",\n\t\"genericListComments\": \"menu__genericListComments--ywCCJ\",\n\t\"genericListShare\": \"menu__genericListShare--3BOIv\",\n\t\"genericListHide\": \"menu__genericListHide--xgP7J\",\n\t\"genericListSave\": \"menu__genericListSave--2uVSI\",\n\t\"genericListComplain\": \"menu__genericListComplain--Z1zmd\",\n\t\"genericListClose\": \"menu__genericListClose--3b6hP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MetaData/MetaData.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/MetaData/MetaData.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar metadata_css_1 = __importDefault(__webpack_require__(/*! ./metadata.css */ \"./src/shared/CardsList/Card/MetaData/metadata.css\"));\r\nfunction MetaData(_a) {\r\n    var avatar = _a.avatar, author = _a.author, createdAt = _a.createdAt;\r\n    var avatarImage;\r\n    var authorA;\r\n    var createdAtSpan;\r\n    if (avatar && author) {\r\n        var avatarUrl = new URL(avatar);\r\n        var avatarIcon = avatarUrl.origin + avatarUrl.pathname;\r\n        avatarImage = react_1.default.createElement(\"img\", { className: metadata_css_1.default.avatar, src: avatarIcon, alt: author });\r\n    }\r\n    else {\r\n        avatarImage = react_1.default.createElement(\"img\", { className: metadata_css_1.default.avatar, src: \"https://cdn.dribbble.com/users/393931/screenshots/16653235/media/bb99f541ffc0e71f3a4d6d68364865ea.png?compress=1&resize=200x200\", alt: \"avatar\" });\r\n    }\r\n    if (author) {\r\n        authorA = react_1.default.createElement(\"a\", { href: \"#user-url\", className: metadata_css_1.default.username }, author);\r\n    }\r\n    else {\r\n        authorA = react_1.default.createElement(\"a\", { href: \"#user-url\", className: metadata_css_1.default.username }, \"Dimon\");\r\n    }\r\n    if (createdAt) {\r\n        createdAtSpan = react_1.default.createElement(\"span\", { className: metadata_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n            createdAt);\r\n    }\r\n    else {\r\n        createdAtSpan = react_1.default.createElement(\"span\", { className: metadata_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n            \"4 часа назад\");\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: metadata_css_1.default.metaData },\r\n        react_1.default.createElement(\"div\", { className: metadata_css_1.default.userLink },\r\n            avatarImage,\r\n            authorA),\r\n        createdAtSpan));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MetaData/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/MetaData/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MetaData/metadata.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/MetaData/metadata.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"metadata__userLink--23JVM\",\n\t\"avatar\": \"metadata__avatar--yGvQg\",\n\t\"username\": \"metadata__username--VBW18\",\n\t\"createdAt\": \"metadata__createdAt--3t60D\",\n\t\"publishedLabel\": \"metadata__publishedLabel--2IbaR\",\n\t\"metaData\": \"metadata__metaData--26SFt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/MetaData/metadata.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var cardImg = _a.cardImg;\r\n    var image;\r\n    if (cardImg && cardImg !== 'default' && cardImg !== 'self' && cardImg !== 'nsfw') {\r\n        image = react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: cardImg });\r\n    }\r\n    else {\r\n        image = react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: \"https://cdn.dribbble.com/users/3923578/screenshots/16649163/media/b14184fab233f1d9bdefde81cd592387.jpg?compress=1&resize=800x600\" });\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview }, image));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/SaveButton.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/SaveButton.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/CardsList/Card/SaveButton/savebutton.css\"));\r\nfunction SaveButton() {\r\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M6.57143 13.8889C6.57143 14.5 7.08571 15 7.71429 15H12.2857C12.9143 15 13.4286 14.5 13.4286 13.8889V7.22222H6.57143V13.8889ZM7.71429 8.33333H12.2857V13.8889H7.71429V8.33333ZM12 5.55556L11.4286 5H8.57143L8 5.55556H6V6.66667H14V5.55556H12Z\", fill: \"white\" }))));\r\n}\r\nexports.SaveButton = SaveButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/SaveButton/SaveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/savebutton.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/savebutton.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebutton__saveButton--2wDW0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/ShareButton.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/ShareButton.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardsList/Card/ShareButton/sharebutton.css\"));\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/ShareButton/ShareButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/sharebutton.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/sharebutton.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebutton__shareButton--tNoyt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Title/Title.tsx":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/Title/Title.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardsList/Card/Title/title.css\"));\r\nvar react_router_dom_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nfunction Title(_a) {\r\n    var id = _a.id, title = _a.title;\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.text },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/\" + id, className: title_css_1.default.postLink }, title)));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Title/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/Card/Title/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Title/title.css":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/Title/title.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--3HMA4\",\n\t\"text\": \"title__text--C7nDT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Title/title.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\",\n\t\"controls\": \"card__controls--1mm-w\",\n\t\"postLink\": \"card__postLink--1dr-s\",\n\t\"actions\": \"card__actions--1cmic\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar list = [\r\n    { text: 'one', As: 'a', id: \"asdf1\" },\r\n    { text: 'two', As: 'a', id: \"asdf2\" },\r\n    { text: 'three', As: 'a', id: \"asdf3\" }\r\n];\r\nfunction CardsList() {\r\n    var _a;\r\n    var _b = react_1.useState(false), isPosts = _b[0], setIsPosts = _b[1];\r\n    var _c = react_1.useState(false), isList = _c[0], setIsList = _c[1];\r\n    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];\r\n    var _e = react_1.useState(''), errorLoading = _e[0], setErrorLoading = _e[1];\r\n    var _f = react_1.useContext(postsContext_1.postsContext), posts = _f[0], setNewPosts = _f[1], newPosts = _f[2];\r\n    //const [posts, setNewPosts, newPosts] = usePostsData();\r\n    var bottomOfList = react_1.useRef(null);\r\n    var _g = react_1.useState(false), isMorePosts = _g[0], setIsMorePosts = _g[1];\r\n    var buttonRef = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        var _a, _b, _c;\r\n        setIsPosts(!!((_a = posts.children) === null || _a === void 0 ? void 0 : _a.length) && !posts.error);\r\n        setLoading(!((_b = posts.children) === null || _b === void 0 ? void 0 : _b.length) && !posts.error && posts.loading);\r\n        setErrorLoading(posts.error);\r\n        setIsList(!((_c = posts.children) === null || _c === void 0 ? void 0 : _c.length) && !posts.loading && !posts.error);\r\n        setIsMorePosts(posts.loadCount !== 0 && posts.loadCount % 3 === 0);\r\n    }, [posts]);\r\n    react_1.useEffect(function () {\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            var _a;\r\n            if (entries[0].isIntersecting && !!((_a = posts.children) === null || _a === void 0 ? void 0 : _a.length) && !isMorePosts) {\r\n                setNewPosts(true);\r\n            }\r\n        }, {\r\n            rootMargin: '200px'\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, newPosts]);\r\n    function handleClick() {\r\n        setNewPosts(true);\r\n        if (buttonRef.current)\r\n            buttonRef.current.innerHTML = 'Loading...';\r\n    }\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n            isPosts && ((_a = posts === null || posts === void 0 ? void 0 : posts.children) === null || _a === void 0 ? void 0 : _a.map(function (_a) {\r\n                var id = _a.id, title = _a.title, author = _a.author, created_utc = _a.created_utc, icon_img = _a.icon_img, num_comments = _a.num_comments, score = _a.score, thumbnail = _a.thumbnail, content_categories = _a.content_categories, selftext = _a.selftext;\r\n                return (react_1.default.createElement(Card_1.Card, { key: id, id: id, title: title, text: selftext, cardImg: thumbnail, numComments: num_comments, createdAt: created_utc, authorName: author, avatar: icon_img, karma: score, contentCategories: content_categories }));\r\n            })),\r\n            loading && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"Loading...\"),\r\n            errorLoading && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n                \"Loading posts: \",\r\n                errorLoading,\r\n                \" :(\"),\r\n            isList && list.map(function (item) { return react_1.default.createElement(Card_1.Card, { key: item.id, id: item.id, title: item.text, text: 'asdf' }); }),\r\n            isMorePosts && react_1.default.createElement(\"button\", { className: cardslist_css_1.default.button, ref: buttonRef, onClick: handleClick }, \"MORE POSTS!!!\")),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"button\": \"cardslist__button--2LFjd\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nfunction NOOP() {\r\n    // do nothing\r\n}\r\nvar validate = function (values) {\r\n    var errors = { comment: '' };\r\n    if (values.comment.length === 0)\r\n        errors.comment = 'Comment empty! White something, NOW!';\r\n    return errors;\r\n};\r\nfunction CommentForm(props) {\r\n    var _a = props.className, className = _a === void 0 ? commentform_css_1.default.form : _a, author = props.author, _b = props.onChange, onChange = _b === void 0 ? NOOP : _b, _c = props.onSubmit, onSubmit = _c === void 0 ? NOOP : _c, comment = props.comment;\r\n    var _d = react_hook_form_1.useForm({ defaultValues: comment, reValidateMode: 'onChange' }), setValue = _d.setValue, control = _d.control, setFocus = _d.setFocus, register = _d.register, handleSubmit = _d.handleSubmit, errors = _d.formState.errors;\r\n    var onSubmitForm = function (comment) { return onSubmit(comment); };\r\n    react_1.useEffect(function () {\r\n        setFocus('comment');\r\n    }, [setFocus]);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"form\", { className: className, onSubmit: handleSubmit(onSubmitForm) },\r\n            react_1.default.createElement(\"textarea\", __assign({ className: commentform_css_1.default.textarea }, register('comment', { required: true, minLength: { value: 3, message: 'Min 3 symbols required' } }), { onChange: function (e) {\r\n                    setValue('comment', e.target.value, { shouldValidate: true });\r\n                    onChange(e);\r\n                } })),\r\n            react_1.default.createElement(\"button\", { className: commentform_css_1.default.button, type: \"submit\", disabled: !!errors.comment }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"),\r\n            errors.comment && react_1.default.createElement(\"span\", null, errors.comment.message))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"componentForm\": \"commentform__componentForm--bpbJQ\",\n\t\"textarea\": \"commentform__textarea--15m8N\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar easy_peasy_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'easy-peasy'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nfunction CommentFormContainer(_a) {\r\n    var author = _a.author;\r\n    // const value = useSelector<TRootState, {comment:string}>(state => state.commentText);\r\n    var value = easy_peasy_1.useStoreState(function (state) { return state.commentText; });\r\n    var updateComment = easy_peasy_1.useStoreActions(function (actions) { return actions.add; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        // dispatch(updateComment({comment: event.target.value}));\r\n        updateComment({ comment: event.target.value });\r\n    }\r\n    function handleSubmit(value) {\r\n        console.log(\"Comment: \" + value);\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { author: author, comment: value, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.component }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\n/*eslint-env es6*/\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nfunction Dropdown(_a) {\r\n    var children = _a.children, classNameList = _a.classNameList;\r\n    var node = typeof window !== 'undefined' ? document.querySelector('#dropdown_root') : undefined;\r\n    if (!node) {\r\n        return react_1.default.createElement(react_1.default.Fragment, null);\r\n    }\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: \"styles.list \" + classNameList }, children)))), node);\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n// export function MyList({ list }: IGenericListProps) {\r\n//   return (\r\n//     <ul>\r\n//       {list.map((item) => (\r\n//         <li onClick={() => item.onClick(item.id)} key={item.id}>{item.title}</li>\r\n//       ))}\r\n//     </ul>\r\n//   );\r\n// }\r\nvar NOOP = function () { };\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? NOOP : _c, className = _a.className, id = _a.id, href = _a.href, children = _a.children, breakNode = _a.breakNode, icon = _a.icon;\r\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href },\r\n            icon,\r\n            breakNode,\r\n            text,\r\n            children));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction SearchBlock() {\r\n    // const { iconImg, name } = useContext(userContext);\r\n    var _a = react_redux_1.useSelector(function (state) { return state.me; }), loading = _a.loading, data = _a.data, error = _a.error;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ./../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ./../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ./../../../Break */ \"./src/shared/Break/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading, error = _a.error;\r\n    return (react_1.default.createElement(\"a\", { href: 'https://www.reddit.com/api/v1/authorize?client_id=' + 'BA_9dzUzJI0Ue2b_3VC81A' + '&response_type=code&state=random_string&redirect_uri=' + 'undefined' + '&duration=permanent&scope=read submit identity', className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'User avatar', className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(Icon_1.Icon, { name: 'avatarAnon', size: 50, viewBox: '0 0 50 50' })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, loading\r\n                ? 'Loading'\r\n                : username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nvar commentsIcon_svg_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Icons/commentsIcon.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar complainIcon_svg_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Icons/complainIcon.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar hideIcon_svg_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Icons/hideIcon.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar saveAdaptiveIcon_svg_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Icons/saveAdaptiveIcon.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar shareAdaptiveIcon_svg_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Icons/shareAdaptiveIcon.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar avatarAnonIcon_svg_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Icons/avatarAnonIcon.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar iconComponents = {\r\n    comments: commentsIcon_svg_1.default,\r\n    complain: complainIcon_svg_1.default,\r\n    hide: hideIcon_svg_1.default,\r\n    save: saveAdaptiveIcon_svg_1.default,\r\n    share: shareAdaptiveIcon_svg_1.default,\r\n    avatarAnon: avatarAnonIcon_svg_1.default\r\n};\r\n// const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>\r\n//     obj[key];\r\n// <SpecComponent width={size.toString()}/>\r\n// export function Icon({ name, size = 16 }: IIconProps) {\r\nfunction Icon(props) {\r\n    var name = props.name, _a = props.size, size = _a === void 0 ? 16 : _a, _b = props.viewBox, viewBox = _b === void 0 ? '0 0 16 16' : _b, className = props.className;\r\n    var SpecComponent = iconComponents[name || 'comments'];\r\n    return (react_1.default.createElement(\"div\", { className: icon_css_1.default.icon },\r\n        react_1.default.createElement(SpecComponent, { width: size.toString(), height: size.toString(), viewBox: viewBox, className: className })));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"icon\": \"icon__icon--1AjE9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/NoRoute/NoRoute.tsx":
/*!****************************************!*\
  !*** ./src/shared/NoRoute/NoRoute.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NoRoute = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction NoRoute() {\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"h2\", { style: { textAlign: 'center' } }, \"404 - Not Found!\")));\r\n}\r\nexports.NoRoute = NoRoute;\r\n\n\n//# sourceURL=webpack:///./src/shared/NoRoute/NoRoute.tsx?");

/***/ }),

/***/ "./src/shared/NoRoute/index.ts":
/*!*************************************!*\
  !*** ./src/shared/NoRoute/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NoRoute */ \"./src/shared/NoRoute/NoRoute.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/NoRoute/index.ts?");

/***/ }),

/***/ "./src/shared/Posts/Comments/Comments.tsx":
/*!************************************************!*\
  !*** ./src/shared/Posts/Comments/Comments.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar comments_css_1 = __importDefault(__webpack_require__(/*! ./comments.css */ \"./src/shared/Posts/Comments/comments.css\"));\r\nvar MetaData_1 = __webpack_require__(/*! ../../CardsList/Card/MetaData */ \"./src/shared/CardsList/Card/MetaData/index.ts\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ../../CardsList/Card/CommentsButton */ \"./src/shared/CardsList/Card/CommentsButton/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/Break/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nfunction Comments(_a) {\r\n    var author = _a.author, createdAt = _a.createdAt, body = _a.body, replies = _a.replies;\r\n    var _b = react_1.useState(false), isCommentForm = _b[0], setIsCommentForm = _b[1];\r\n    var _c = react_1.useState(false), isReplies = _c[0], setIsReplies = _c[1];\r\n    var _d = react_1.useState([]), reply = _d[0], setReply = _d[1];\r\n    react_1.useEffect(function () {\r\n        var _a;\r\n        if (typeof replies != 'string' && typeof replies != 'undefined') {\r\n            if (typeof replies.data != 'undefined' && typeof ((_a = replies.data) === null || _a === void 0 ? void 0 : _a.children) != 'undefined') {\r\n                setIsReplies(true);\r\n                setReply(replies.data.children);\r\n            }\r\n        }\r\n        else {\r\n            setIsReplies(false);\r\n        }\r\n    }, [replies]);\r\n    var handleClick = function () {\r\n        setIsCommentForm(!isCommentForm);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: comments_css_1.default.commentBody },\r\n        react_1.default.createElement(MetaData_1.MetaData, { author: author, createdAt: createdAt }),\r\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.body },\r\n            react_1.default.createElement(\"p\", null, body)),\r\n        react_1.default.createElement(\"div\", { onClick: handleClick, className: comments_css_1.default.commentsButtonContainer },\r\n            react_1.default.createElement(CommentsButton_1.CommentsButton, { userClassName: comments_css_1.default.commentBody }),\r\n            react_1.default.createElement(Break_1.Break, { size: 4, inline: true }),\r\n            \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"),\r\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.componentForm }, isCommentForm &&\r\n            react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { author: author })),\r\n        isReplies &&\r\n            reply.map(function (item) {\r\n                var _a, _b, _c, _d, _e;\r\n                return react_1.default.createElement(Comments, { key: (_a = item.data) === null || _a === void 0 ? void 0 : _a.id, author: (_b = item.data) === null || _b === void 0 ? void 0 : _b.author, createdAt: (_c = item === null || item === void 0 ? void 0 : item.data) === null || _c === void 0 ? void 0 : _c.createdUtc, body: (_d = item.data) === null || _d === void 0 ? void 0 : _d.body, replies: (_e = item.data) === null || _e === void 0 ? void 0 : _e.replies });\r\n            })));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Posts/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Posts/Comments/comments.css":
/*!************************************************!*\
  !*** ./src/shared/Posts/Comments/comments.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentBody\": \"comments__commentBody--pxFJX\",\n\t\"commentsButtonContainer\": \"comments__commentsButtonContainer--37PtV\",\n\t\"commentsButton\": \"comments__commentsButton--2lKLy\",\n\t\"componentForm\": \"comments__componentForm--1YEHU\",\n\t\"body\": \"comments__body--2jYmz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Posts/Comments/comments.css?");

/***/ }),

/***/ "./src/shared/Posts/Comments/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Posts/Comments/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/Posts/Comments/Comments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Posts/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/Posts/Posts.tsx":
/*!************************************!*\
  !*** ./src/shared/Posts/Posts.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Posts = void 0;\r\n/*eslint-env es6*/\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar posts_css_1 = __importDefault(__webpack_require__(/*! ./posts.css */ \"./src/shared/Posts/posts.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar useComments_1 = __webpack_require__(/*! ../../hooks/useComments */ \"./src/hooks/useComments.ts\");\r\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/Posts/Comments/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nvar postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nfunction Posts() {\r\n    var _a = react_1.useState(false), isTitle = _a[0], setIsTitle = _a[1];\r\n    var _b = react_1.useState(false), isText = _b[0], setIsText = _b[1];\r\n    var ref = react_1.useRef(null);\r\n    var _c = react_1.useState(false), isReplies = _c[0], setIsReplies = _c[1];\r\n    var _d = react_1.useState([]), reply = _d[0], setReply = _d[1];\r\n    var history = react_router_dom_1.useHistory();\r\n    var posts = react_1.useContext(postsContext_1.postsContext)[0];\r\n    var id = react_router_dom_1.useParams().id;\r\n    var comments = useComments_1.useComments(id)[0];\r\n    // save for future\r\n    // const post = R.find(R.whereEq({id: id}), posts.children);\r\n    var post = posts.byIds[id];\r\n    var title;\r\n    var text;\r\n    var author;\r\n    react_1.useEffect(function () {\r\n        var _a;\r\n        if (typeof post !== 'undefined') {\r\n            _a = [post.title, post.selftext, post.author], title = _a[0], text = _a[1], author = _a[2];\r\n            setIsTitle(typeof title !== 'undefined');\r\n            setIsText(typeof text !== 'undefined');\r\n        }\r\n    }, [post]);\r\n    react_1.useEffect(function () {\r\n        var _a;\r\n        if (typeof comments !== 'string' && typeof comments !== 'undefined') {\r\n            if (typeof comments.data !== 'undefined' && typeof ((_a = comments.data) === null || _a === void 0 ? void 0 : _a.children) !== 'undefined') {\r\n                setIsReplies(true);\r\n                setReply(comments.data.children);\r\n            }\r\n        }\r\n        else {\r\n            setIsReplies(false);\r\n        }\r\n    }, [comments]);\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                history.push('/posts');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return react_1.default.createElement(react_1.default.Fragment, null);\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: posts_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: posts_css_1.default.containerInner, ref: ref },\r\n            react_1.default.createElement(\"h2\", { className: posts_css_1.default.title }, isTitle ? title : 'Title'),\r\n            react_1.default.createElement(\"div\", { className: posts_css_1.default.text },\r\n                react_1.default.createElement(\"p\", null, isText ? text : 'Text')),\r\n            react_1.default.createElement(\"div\", { className: posts_css_1.default.commentForm },\r\n                react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { author: author })),\r\n            isReplies &&\r\n                reply.map(function (item) {\r\n                    var _a, _b, _c, _d, _e;\r\n                    return react_1.default.createElement(Comments_1.Comments, { key: (_a = item.data) === null || _a === void 0 ? void 0 : _a.id, author: (_b = item.data) === null || _b === void 0 ? void 0 : _b.author, createdAt: (_c = item === null || item === void 0 ? void 0 : item.data) === null || _c === void 0 ? void 0 : _c.createdUtc, body: (_d = item.data) === null || _d === void 0 ? void 0 : _d.body, replies: (_e = item.data) === null || _e === void 0 ? void 0 : _e.replies });\r\n                })))), node);\r\n}\r\nexports.Posts = Posts;\r\n\n\n//# sourceURL=webpack:///./src/shared/Posts/Posts.tsx?");

/***/ }),

/***/ "./src/shared/Posts/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Posts/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Posts */ \"./src/shared/Posts/Posts.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Posts/index.ts?");

/***/ }),

/***/ "./src/shared/Posts/posts.css":
/*!************************************!*\
  !*** ./src/shared/Posts/posts.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"posts__container--3VBsW\",\n\t\"containerInner\": \"posts__containerInner--2T9mp\",\n\t\"title\": \"posts__title--3Xzlp\",\n\t\"text\": \"posts__text--2wMHk\",\n\t\"commentForm\": \"posts__commentForm--2-TSx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Posts/posts.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColors = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"greyF4\"] = \"greyF4\";\r\n    EColors[\"greyF3\"] = \"greyF3\";\r\n    EColors[\"greyD9\"] = \"greyD9\";\r\n    EColors[\"greyC4\"] = \"greyC4\";\r\n    EColors[\"grey99\"] = \"grey99\";\r\n    EColors[\"grey66\"] = \"grey66\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColors.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;\r\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _d));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"greyF4\": \"text__greyF4--V0fR0\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postsContext = react_1.default.createContext([\r\n    { after: '', dist: 0, children: [], byIds: {}, loading: false, error: '', loadCount: 0 },\r\n    function () { return; },\r\n    true\r\n]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var _b = usePostsData_1.usePostsData(), postsAndAuthor = _b[0], setNewPosts = _b[1], newPosts = _b[2];\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: [postsAndAuthor, setNewPosts, newPosts] }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = useUserData_1.useUserData()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data },\r\n        react_1.default.createElement(react_1.default.Fragment, null, children)));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar pureUrl_1 = __webpack_require__(/*! ../../utils/js/pureUrl */ \"./src/utils/js/pureUrl.ts\");\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    if (getState().token === 'undefined' || !getState().token)\r\n        return;\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: {\r\n            'Authorization': \"bearer \" + getState().token,\r\n            'Content-Type': 'application/x-www-form-urlencoded'\r\n        }\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: pureUrl_1.pureUrl(userData.icon_img) }));\r\n    })\r\n        .catch(function (err) {\r\n        console.log('err: ', err);\r\n        dispatch(exports.meRequestError(String(err)));\r\n    });\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\n// import {Reducer} from 'redux';\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nvar initialMeState = {\r\n    loading: false,\r\n    data: {},\r\n    error: ''\r\n};\r\nvar meReducer = function (state, action) {\r\n    if (state === void 0) { state = initialMeState; }\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { loading: false, data: action.data });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { loading: false, error: action.error });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = exports.initialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\n//import {Reducer} from 'react';\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./token/actions */ \"./src/store/token/actions.ts\");\r\nvar reducer_2 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\r\nexports.initialState = {\r\n    token: '',\r\n    commentText: {\r\n        comment: 'ept) '\r\n    },\r\n    me: {\r\n        loading: false,\r\n        data: {},\r\n        error: ''\r\n    },\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = exports.initialState; }\r\n    switch (action.type) {\r\n        case actions_2.SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: reducer_2.tokenReducer(state.token, action) });\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/actions.ts":
/*!************************************!*\
  !*** ./src/store/token/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.setToken = exports.SET_TOKEN = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nvar setToken = function (token) { return ({\r\n    type: exports.SET_TOKEN,\r\n    token: token\r\n}); };\r\nexports.setToken = setToken;\r\nvar saveToken = function () { return function (dispatch) {\r\n    react_1.useEffect(function () {\r\n        if (window.__token__ && typeof window.__token__ !== 'undefined' && window.__token__ !== 'undefined') {\r\n            dispatch(exports.setToken(window.__token__));\r\n        }\r\n    }, []);\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/token/actions.ts\");\r\nvar tokenReducer = function (state, action) {\r\n    if (state === void 0) { state = ''; }\r\n    switch (action.type) {\r\n        case actions_1.SET_TOKEN:\r\n            return action.token;\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/pureUrl.ts":
/*!*********************************!*\
  !*** ./src/utils/js/pureUrl.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.pureUrl = void 0;\r\nfunction pureUrl(uri) {\r\n    var url = new URL(uri);\r\n    return url.origin + url.pathname;\r\n}\r\nexports.pureUrl = pureUrl;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/pureUrl.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\n// can use nanoid, if renders big lists\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString());\r\nvar generateId = function (obj) { return (assoc_1.assoc('id', exports.generateRandomString())(__assign({}, obj))); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });