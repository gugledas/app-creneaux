module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0630":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@shopify/app-bridge\",\"version\":\"2.0.3\",\"types\":\"index.d.ts\",\"main\":\"index.js\",\"unpkg\":\"umd/index.js\",\"jsdelivr\":\"umd/index.js\",\"files\":[\"/actions/\",\"/client/\",\"/umd/\",\"/util/\",\"/validate/\",\"/development.d.ts\",\"/development.js\",\"/index.d.ts\",\"/index.js\",\"/MessageTransport.d.ts\",\"/MessageTransport.js\",\"/production.d.ts\",\"/production.js\"],\"private\":false,\"publishConfig\":{\"access\":\"public\",\"@shopify:registry\":\"https://registry.npmjs.org\"},\"repository\":\"git@github.com:Shopify/app-bridge.git\",\"homepage\":\"https://shopify.dev/tools/app-bridge\",\"author\":\"Shopify Inc.\",\"license\":\"MIT\",\"scripts\":{\"build\":\"yarn build:tsc && yarn build:npm && yarn build:umd\",\"build:tsc\":\"NODE_ENV=production tsc\",\"build:umd\":\"NODE_ENV=production webpack -p\",\"build:npm\":\"shx cp -r ./npm/index.js ./index.js\",\"check\":\"tsc\",\"clean\":\"cat package.json | node -pe \\\"JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')\\\" | xargs rm -rf\",\"pack\":\"yarn pack\",\"size\":\"size-limit\"},\"sideEffects\":false,\"size-limit\":[{\"limit\":\"17 KB\",\"path\":\"production.js\"}],\"dependencies\":{\"base64url\":\"^3.0.1\"},\"devDependencies\":{\"@types/node\":\"^10.12.5\",\"shx\":\"^0.3.3\"},\"gitHead\":\"918566c332bf6863cc200e6be03be6cc2a5a5840\"}");

/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0e3e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.History = exports.replace = exports.push = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["PUSH"] = "APP::NAVIGATION::HISTORY::PUSH";
    Action["REPLACE"] = "APP::NAVIGATION::HISTORY::REPLACE";
})(Action = exports.Action || (exports.Action = {}));
function push(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: Action.PUSH,
    });
}
exports.push = push;
function replace(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: Action.REPLACE,
    });
}
exports.replace = replace;
var History = /** @class */ (function (_super) {
    __extends(History, _super);
    function History(app) {
        return _super.call(this, app, 'History', types_1.Group.Navigation) || this;
    }
    Object.defineProperty(History.prototype, "payload", {
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    History.prototype.dispatch = function (type, path) {
        var payload = __assign(__assign({}, this.payload), { path: path });
        switch (type) {
            case Action.PUSH:
                this.app.dispatch(push(payload));
                break;
            case Action.REPLACE:
                this.app.dispatch(replace(payload));
                break;
        }
        return this;
    };
    return History;
}(helper_1.ActionSet));
exports.History = History;
function create(app) {
    return new History(app);
}
exports.create = create;


/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "129f":
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "156c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAppPrint = void 0;
var redirect_1 = __webpack_require__("d3a0");
function isRunningOniOS() {
    return navigator.userAgent.indexOf('iOS') >= 0;
}
function createHiddenInput() {
    var currentWindow = redirect_1.getWindow();
    if (!currentWindow || !currentWindow.document || !currentWindow.document.body) {
        return;
    }
    var inputElement = window.document.createElement('input');
    inputElement.style.display = 'none';
    window.document.body.appendChild(inputElement);
    return inputElement;
}
function printWindow() {
    if (!redirect_1.getWindow()) {
        return;
    }
    // @ts-ignore: Fixed in TypeScript 2.8.2
    window.print();
}
function handleMobileAppPrint() {
    var input = createHiddenInput();
    if (!input) {
        return;
    }
    input.select();
    printWindow();
    input.remove();
}
function handleAppPrint() {
    if (isRunningOniOS()) {
        handleMobileAppPrint();
    }
    else {
        printWindow();
    }
}
exports.handleAppPrint = handleAppPrint;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "29ab":
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__("7f4b");
} else {}


/***/ }),

/***/ "2c09":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serverAppBridge = void 0;
var Error_1 = __webpack_require__("8aa1");
var noop = function () { };
/**
 * @internal
 */
exports.serverAppBridge = {
    dispatch: function () {
        return {};
    },
    error: function () {
        return noop;
    },
    featuresAvailable: function () {
        return Promise.reject(Error_1.fromAction('Feature detection is only available on the client side.', Error_1.AppActionType.WINDOW_UNDEFINED));
    },
    getState: function () {
        return Promise.reject(Error_1.fromAction('State is only available on the client side.', Error_1.AppActionType.WINDOW_UNDEFINED));
    },
    localOrigin: '',
    subscribe: function () {
        return noop;
    },
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2da5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ChannelMenu = exports.update = exports.Action = void 0;
var AppLink_1 = __webpack_require__("e4ca");
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var SUBGROUPS = ['Channel_Menu'];
var Action;
(function (Action) {
    Action["UPDATE"] = "APP::MENU::CHANNEL_MENU::UPDATE";
    Action["LINK_UPDATE"] = "APP::MENU::CHANNEL_MENU::LINK::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Menu,
        type: Action.UPDATE,
    });
}
exports.update = update;
var ChannelMenu = /** @class */ (function (_super) {
    __extends(ChannelMenu, _super);
    function ChannelMenu(app, options) {
        var _this = _super.call(this, app, 'Channel_Menu', types_1.Group.Menu) || this;
        _this.items = [];
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(ChannelMenu.prototype, "options", {
        get: function () {
            return {
                items: this.itemsOptions,
                active: this.activeOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChannelMenu.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    ChannelMenu.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var items = mergedOptions.items, active = mergedOptions.active;
        this.setItems(items);
        this.activeOptions = active;
        this.active = active && active.id;
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    ChannelMenu.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    ChannelMenu.prototype.updateItem = function (newPayload) {
        if (!this.items) {
            return;
        }
        var itemToUpdate = this.items.find(function (action) { return action.id === newPayload.id; });
        if (!itemToUpdate) {
            return;
        }
        if (helper_1.updateActionFromPayload(itemToUpdate, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    ChannelMenu.prototype.setItems = function (newOptions) {
        var _this = this;
        var newItems = newOptions || [];
        var currentItems = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(newItems, currentItems);
        this.items = this.itemsOptions
            ? this.itemsOptions.map(function (action) {
                _this.addChild(action, _this.group, SUBGROUPS);
                _this.subscribeToChild(action, AppLink_1.Action.UPDATE, _this.updateItem);
                return action.payload;
            })
            : [];
    };
    return ChannelMenu;
}(helper_1.ActionSetWithChildren));
exports.ChannelMenu = ChannelMenu;
function create(app, options) {
    return new ChannelMenu(app, options);
}
exports.create = create;


/***/ }),

/***/ "320c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "3309":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Cart = exports.setLineItemProperties = exports.removeLineItemDiscount = exports.setLineItemDiscount = exports.removeLineItem = exports.updateLineItem = exports.addLineItem = exports.removeProperties = exports.setProperties = exports.setDiscount = exports.updateCustomerAddress = exports.addCustomerAddress = exports.setCustomer = exports.update = exports.fetch = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["FETCH"] = "APP::CART::FETCH";
    Action["UPDATE"] = "APP::CART::UPDATE";
    Action["SET_CUSTOMER"] = "APP::CART::SET_CUSTOMER";
    Action["REMOVE_CUSTOMER"] = "APP::CART::REMOVE_CUSTOMER";
    Action["ADD_CUSTOMER_ADDRESS"] = "APP::CART::ADD_CUSTOMER_ADDRESS";
    Action["UPDATE_CUSTOMER_ADDRESS"] = "APP::CART::UPDATE_CUSTOMER_ADDRESS";
    Action["SET_DISCOUNT"] = "APP::CART::SET_DISCOUNT";
    Action["REMOVE_DISCOUNT"] = "APP::CART::REMOVE_DISCOUNT";
    Action["SET_PROPERTIES"] = "APP::CART::SET_PROPERTIES";
    Action["REMOVE_PROPERTIES"] = "APP::CART::REMOVE_PROPERTIES";
    Action["CLEAR"] = "APP::CART::CLEAR";
    Action["ADD_LINE_ITEM"] = "APP::CART::ADD_LINE_ITEM";
    Action["UPDATE_LINE_ITEM"] = "APP::CART::UPDATE_LINE_ITEM";
    Action["REMOVE_LINE_ITEM"] = "APP::CART::REMOVE_LINE_ITEM";
    Action["SET_LINE_ITEM_DISCOUNT"] = "APP::CART::SET_LINE_ITEM_DISCOUNT";
    Action["REMOVE_LINE_ITEM_DISCOUNT"] = "APP::CART::REMOVE_LINE_ITEM_DISCOUNT";
    Action["SET_LINE_ITEM_PROPERTIES"] = "APP::CART::SET_LINE_ITEM_PROPERTIES";
    Action["REMOVE_LINE_ITEM_PROPERTIES"] = "APP::CART::REMOVE_LINE_ITEM_PROPERTIES";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Cart action
 * @internal
 */
function createCartAction(type, payload) {
    if (payload === void 0) { payload = {}; }
    return helper_1.actionWrapper({
        group: types_1.Group.Cart,
        type: type,
        payload: payload,
    });
}
function fetch() {
    return createCartAction(Action.FETCH);
}
exports.fetch = fetch;
function update(payload) {
    return createCartAction(Action.UPDATE, payload);
}
exports.update = update;
function setCustomer(payload) {
    return createCartAction(Action.SET_CUSTOMER, payload);
}
exports.setCustomer = setCustomer;
function addCustomerAddress(payload) {
    return createCartAction(Action.ADD_CUSTOMER_ADDRESS, payload);
}
exports.addCustomerAddress = addCustomerAddress;
function updateCustomerAddress(payload) {
    return createCartAction(Action.UPDATE_CUSTOMER_ADDRESS, payload);
}
exports.updateCustomerAddress = updateCustomerAddress;
function setDiscount(payload) {
    return createCartAction(Action.SET_DISCOUNT, payload);
}
exports.setDiscount = setDiscount;
function setProperties(payload) {
    return createCartAction(Action.SET_PROPERTIES, payload);
}
exports.setProperties = setProperties;
function removeProperties(payload) {
    return createCartAction(Action.REMOVE_PROPERTIES, payload);
}
exports.removeProperties = removeProperties;
function addLineItem(payload) {
    return createCartAction(Action.ADD_LINE_ITEM, payload);
}
exports.addLineItem = addLineItem;
function updateLineItem(payload) {
    return createCartAction(Action.UPDATE_LINE_ITEM, payload);
}
exports.updateLineItem = updateLineItem;
function removeLineItem(payload) {
    return createCartAction(Action.REMOVE_LINE_ITEM, payload);
}
exports.removeLineItem = removeLineItem;
function setLineItemDiscount(payload) {
    return createCartAction(Action.SET_LINE_ITEM_DISCOUNT, payload);
}
exports.setLineItemDiscount = setLineItemDiscount;
function removeLineItemDiscount(payload) {
    return createCartAction(Action.REMOVE_LINE_ITEM_DISCOUNT, payload);
}
exports.removeLineItemDiscount = removeLineItemDiscount;
function setLineItemProperties(payload) {
    return createCartAction(Action.SET_LINE_ITEM_PROPERTIES, payload);
}
exports.setLineItemProperties = setLineItemProperties;
/**
 * Cart
 */
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart(app, options) {
        return _super.call(this, app, types_1.Group.Cart, types_1.Group.Cart, options ? options.id : undefined) || this;
    }
    Cart.prototype.dispatch = function (action, payload) {
        switch (action) {
            case Action.FETCH:
                this.dispatchCartAction(Action.FETCH);
                break;
            case Action.UPDATE:
                this.dispatchCartAction(Action.UPDATE, payload);
                break;
            case Action.SET_CUSTOMER:
                this.dispatchCartAction(Action.SET_CUSTOMER, payload);
                break;
            case Action.REMOVE_CUSTOMER:
                this.dispatchCartAction(Action.REMOVE_CUSTOMER, payload);
                break;
            case Action.ADD_CUSTOMER_ADDRESS:
                this.dispatchCartAction(Action.ADD_CUSTOMER_ADDRESS, payload);
                break;
            case Action.UPDATE_CUSTOMER_ADDRESS:
                this.dispatchCartAction(Action.UPDATE_CUSTOMER_ADDRESS, payload);
                break;
            case Action.SET_DISCOUNT:
                this.dispatchCartAction(Action.SET_DISCOUNT, payload);
                break;
            case Action.REMOVE_DISCOUNT:
                this.dispatchCartAction(Action.REMOVE_DISCOUNT, payload);
                break;
            case Action.SET_PROPERTIES:
                this.dispatchCartAction(Action.SET_PROPERTIES, payload);
                break;
            case Action.REMOVE_PROPERTIES:
                this.dispatchCartAction(Action.REMOVE_PROPERTIES, payload);
                break;
            case Action.CLEAR:
                this.dispatchCartAction(Action.CLEAR, payload);
                break;
            case Action.ADD_LINE_ITEM:
                this.dispatchCartAction(Action.ADD_LINE_ITEM, payload);
                break;
            case Action.UPDATE_LINE_ITEM:
                this.dispatchCartAction(Action.UPDATE_LINE_ITEM, payload);
                break;
            case Action.REMOVE_LINE_ITEM:
                this.dispatchCartAction(Action.REMOVE_LINE_ITEM, payload);
                break;
            case Action.SET_LINE_ITEM_DISCOUNT:
                this.dispatchCartAction(Action.SET_LINE_ITEM_DISCOUNT, payload);
                break;
            case Action.REMOVE_LINE_ITEM_DISCOUNT:
                this.dispatchCartAction(Action.REMOVE_LINE_ITEM_DISCOUNT, payload);
                break;
            case Action.SET_LINE_ITEM_PROPERTIES:
                this.dispatchCartAction(Action.SET_LINE_ITEM_PROPERTIES, payload);
                break;
            case Action.REMOVE_LINE_ITEM_PROPERTIES:
                this.dispatchCartAction(Action.REMOVE_LINE_ITEM_PROPERTIES, payload);
                break;
        }
        return this;
    };
    Cart.prototype.dispatchCartAction = function (type, payload) {
        this.app.dispatch(createCartAction(type, __assign(__assign({}, payload), { id: this.id })));
    };
    return Cart;
}(helper_1.ActionSet));
exports.Cart = Cart;
function create(app, options) {
    return new Cart(app, options);
}
exports.create = create;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "3447":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.TitleBar = exports.update = exports.clickBreadcrumb = exports.clickActionButton = exports.Action = void 0;
var Button_1 = __webpack_require__("45dd");
var ButtonGroup_1 = __webpack_require__("8302");
var buttonGroupHelper_1 = __webpack_require__("ecbb");
var buttonHelper_1 = __webpack_require__("dabe");
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["UPDATE"] = "APP::TITLEBAR::UPDATE";
    Action["BUTTON_CLICK"] = "APP::TITLEBAR::BUTTONS::BUTTON::CLICK";
    Action["BUTTON_UPDATE"] = "APP::TITLEBAR::BUTTONS::BUTTON::UPDATE";
    Action["BUTTON_GROUP_UPDATE"] = "APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE";
    Action["BREADCRUMBS_CLICK"] = "APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK";
    Action["BREADCRUMBS_UPDATE"] = "APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var TITLEBAR_BUTTON_PROPS = {
    group: types_1.Group.TitleBar,
    subgroups: ['Buttons'],
};
var BREADCRUMB_BUTTON_PROPS = {
    group: types_1.Group.TitleBar,
    subgroups: ['Breadcrumbs'],
    type: types_1.ComponentType.Button,
};
function clickActionButton(id, payload) {
    var type = types_1.ComponentType.Button;
    var component = __assign({ id: id, type: type }, TITLEBAR_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.TitleBar, component, payload);
}
exports.clickActionButton = clickActionButton;
function clickBreadcrumb(id, payload) {
    var component = __assign({ id: id }, BREADCRUMB_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.TitleBar, component, payload);
}
exports.clickBreadcrumb = clickBreadcrumb;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.TitleBar,
        type: Action.UPDATE,
    });
}
exports.update = update;
var TitleBar = /** @class */ (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar(app, options) {
        var _this = _super.call(this, app, types_1.Group.TitleBar, types_1.Group.TitleBar) || this;
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(TitleBar.prototype, "buttons", {
        get: function () {
            if (!this.primary && !this.secondary) {
                return undefined;
            }
            return {
                primary: this.primary,
                secondary: this.secondary,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleBar.prototype, "buttonsOptions", {
        get: function () {
            if (!this.primaryOptions && !this.secondaryOptions) {
                return undefined;
            }
            return {
                primary: this.primaryOptions,
                secondary: this.secondaryOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleBar.prototype, "options", {
        get: function () {
            return {
                breadcrumbs: this.breadcrumbsOption,
                buttons: this.buttonsOptions,
                title: this.title,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleBar.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { breadcrumbs: this.breadcrumb, buttons: this.buttons, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    TitleBar.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, buttons = mergedOptions.buttons, breadcrumbs = mergedOptions.breadcrumbs;
        this.title = title;
        this.setBreadcrumbs(breadcrumbs);
        this.setPrimaryButton(buttons ? buttons.primary : undefined);
        this.setSecondaryButton(buttons ? buttons.secondary : undefined);
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    TitleBar.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    TitleBar.prototype.getButton = function (button, subgroups, updateCb) {
        if (button instanceof ButtonGroup_1.ButtonGroup) {
            return buttonGroupHelper_1.getGroupedButton(this, button, subgroups, updateCb);
        }
        return buttonHelper_1.getSingleButton(this, button, subgroups, updateCb);
    };
    TitleBar.prototype.updatePrimaryButton = function (newPayload) {
        if (!this.primary) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.primary, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    TitleBar.prototype.updateSecondaryButtons = function (newPayload) {
        if (!this.secondary) {
            return;
        }
        var buttonToUpdate = this.secondary.find(function (action) { return action.id === newPayload.id; });
        if (!buttonToUpdate) {
            return;
        }
        var updated = false;
        if (ButtonGroup_1.isGroupedButtonPayload(newPayload)) {
            updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
        }
        else {
            updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
        }
        if (updated) {
            this.dispatch(Action.UPDATE);
        }
    };
    TitleBar.prototype.updateBreadcrumbButton = function (newPayload) {
        if (!this.breadcrumb) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.breadcrumb, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    TitleBar.prototype.setPrimaryButton = function (newOptions) {
        this.primaryOptions = this.getChildButton(newOptions, this.primaryOptions);
        this.primary = this.primaryOptions
            ? this.getButton(this.primaryOptions, TITLEBAR_BUTTON_PROPS.subgroups, this.updatePrimaryButton)
            : undefined;
    };
    TitleBar.prototype.setSecondaryButton = function (newOptions) {
        var _this = this;
        var newButtons = newOptions || [];
        var currentButtons = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(newButtons, currentButtons);
        this.secondary = this.secondaryOptions
            ? this.secondaryOptions.map(function (action) {
                return _this.getButton(action, TITLEBAR_BUTTON_PROPS.subgroups, _this.updateSecondaryButtons);
            })
            : undefined;
    };
    TitleBar.prototype.setBreadcrumbs = function (breadcrumb) {
        this.breadcrumbsOption = this.getChildButton(breadcrumb, this.breadcrumbsOption);
        this.breadcrumb = this.breadcrumbsOption
            ? this.getButton(this.breadcrumbsOption, BREADCRUMB_BUTTON_PROPS.subgroups, this.updateBreadcrumbButton)
            : undefined;
    };
    TitleBar.prototype.getChildButton = function (newAction, currentAction) {
        var newButtons = newAction ? [newAction] : [];
        var currentButtons = currentAction ? [currentAction] : [];
        var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
        return updatedButton ? updatedButton[0] : undefined;
    };
    return TitleBar;
}(helper_1.ActionSetWithChildren));
exports.TitleBar = TitleBar;
function create(app, options) {
    return new TitleBar(app, options);
}
exports.create = create;


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "45dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Button = exports.isValidButtonProps = exports.update = exports.clickButton = exports.Style = exports.Icon = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["CLICK"] = "CLICK";
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var Icon;
(function (Icon) {
    Icon["Print"] = "print";
})(Icon = exports.Icon || (exports.Icon = {}));
var Style;
(function (Style) {
    Style["Danger"] = "danger";
})(Style = exports.Style || (exports.Style = {}));
function clickButton(group, component, payload) {
    var id = component.id;
    var action = helper_1.getEventNameSpace(group, Action.CLICK, component);
    var buttonPayload = {
        id: id,
        payload: payload,
    };
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}
exports.clickButton = clickButton;
function update(group, component, props) {
    var id = component.id;
    var label = props.label;
    var action = helper_1.getEventNameSpace(group, Action.UPDATE, component);
    var buttonPayload = __assign(__assign({}, props), { id: id,
        label: label });
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}
exports.update = update;
function isValidButtonProps(button) {
    return typeof button.id === 'string' && typeof button.label === 'string';
}
exports.isValidButtonProps = isValidButtonProps;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(app, options) {
        var _this = _super.call(this, app, types_1.ComponentType.Button, types_1.Group.Button) || this;
        _this.disabled = false;
        _this.loading = false;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(Button.prototype, "options", {
        get: function () {
            return {
                disabled: this.disabled,
                icon: this.icon,
                label: this.label,
                style: this.style,
                loading: this.loading,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var label = mergedOptions.label, disabled = mergedOptions.disabled, icon = mergedOptions.icon, style = mergedOptions.style, loading = mergedOptions.loading;
        this.label = label;
        this.disabled = Boolean(disabled);
        this.icon = icon;
        this.style = style;
        this.loading = Boolean(loading);
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    Button.prototype.dispatch = function (action, payload) {
        switch (action) {
            case Action.CLICK:
                this.app.dispatch(clickButton(this.group, this.component, payload));
                break;
            case Action.UPDATE:
                var updateAction = update(this.group, this.component, this.payload);
                this.app.dispatch(updateAction);
                break;
        }
        return this;
    };
    return Button;
}(helper_1.ActionSet));
exports.Button = Button;
function create(app, options) {
    return new Button(app, options);
}
exports.create = create;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "4d01":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Fullscreen = exports.exit = exports.enter = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
/**
 * Fullscreen action type enum
 * @remarks includes the action prefix and group
 *
 * @beta
 */
var Action;
(function (Action) {
    Action["ENTER"] = "APP::FULLSCREEN::ENTER";
    Action["EXIT"] = "APP::FULLSCREEN::EXIT";
})(Action = exports.Action || (exports.Action = {}));
function enter() {
    return helper_1.actionWrapper({
        group: types_1.Group.Fullscreen,
        type: Action.ENTER,
    });
}
exports.enter = enter;
function exit() {
    return helper_1.actionWrapper({
        group: types_1.Group.Fullscreen,
        type: Action.EXIT,
    });
}
exports.exit = exit;
/**
 * Fullscreen action set
 * @beta
 */
var Fullscreen = /** @class */ (function (_super) {
    __extends(Fullscreen, _super);
    /**
     * Returns a new instance of a Fullscreen action set
     * @param app the client application
     */
    function Fullscreen(app) {
        return _super.call(this, app, types_1.Group.Fullscreen, types_1.Group.Fullscreen) || this;
    }
    Object.defineProperty(Fullscreen.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    Fullscreen.prototype.dispatch = function (action) {
        this.app.dispatch(helper_1.actionWrapper({
            group: this.group,
            type: action,
            payload: this.payload,
        }));
        return this;
    };
    return Fullscreen;
}(helper_1.ActionSet));
exports.Fullscreen = Fullscreen;
/**
 * Returns a new instance of a Fullscreen action set
 * @param app the client application
 *
 * @beta
 */
function create(app) {
    return new Fullscreen(app);
}
exports.create = create;


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "523b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("8bac"), exports);


/***/ }),

/***/ "54df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.respond = exports.request = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["REQUEST"] = "APP::SESSION_TOKEN::REQUEST";
    Action["RESPOND"] = "APP::SESSION_TOKEN::RESPOND";
})(Action = exports.Action || (exports.Action = {}));
function request() {
    return helper_1.actionWrapper({
        group: types_1.Group.SessionToken,
        type: Action.REQUEST,
    });
}
exports.request = request;
function respond(sessionToken) {
    return helper_1.actionWrapper({
        payload: sessionToken,
        group: types_1.Group.SessionToken,
        type: Action.RESPOND,
    });
}
exports.respond = respond;


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5ee2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.show = exports.create = exports.Share = exports.Action = void 0;
var types_1 = __webpack_require__("bdf4");
var helper_1 = __webpack_require__("9c68");
/**
 * Types
 */
/**
 * @public
 */
var Action;
(function (Action) {
    Action["SHOW"] = "APP::SHARE::SHOW";
    Action["CLOSE"] = "APP::SHARE::CLOSE";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Action
 */
/**
 * A set of actions for displaying a Share Sheet component
 * @public
 */
var Share = /** @class */ (function (_super) {
    __extends(Share, _super);
    function Share(app) {
        return _super.call(this, app, types_1.Group.Share, types_1.Group.Share) || this;
    }
    /**
     * @public
     */
    Share.prototype.dispatch = function (action, payload) {
        switch (action) {
            case Action.SHOW:
                this.dispatchShareAction(Action.SHOW, payload);
                break;
            default:
                throw "Action: " + action + " not supported";
        }
        return this;
    };
    /**
     * @internal
     */
    Share.prototype.dispatchShareAction = function (actionType, payload) {
        this.app.dispatch(helper_1.actionWrapper({
            type: actionType,
            group: types_1.Group.Share,
            payload: __assign({ id: this.id }, payload),
        }));
    };
    return Share;
}(helper_1.ActionSet));
exports.Share = Share;
/**
 * @public
 */
function create(app) {
    return new Share(app);
}
exports.create = create;
function show() {
    return helper_1.actionWrapper({
        group: types_1.Group.Share,
        type: Action.SHOW,
    });
}
exports.show = show;
function close() {
    return helper_1.actionWrapper({
        group: types_1.Group.Share,
        type: Action.CLOSE,
    });
}
exports.close = close;


/***/ }),

/***/ "63d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ResourcePicker = exports.update = exports.close = exports.cancel = exports.open = exports.select = exports.ActionVerb = exports.ResourceType = exports.ProductStatus = exports.ProductVariantInventoryManagement = exports.ProductVariantInventoryPolicy = exports.WeightUnit = exports.FulfillmentServiceType = exports.CollectionSortOrder = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["OPEN"] = "APP::RESOURCE_PICKER::OPEN";
    Action["SELECT"] = "APP::RESOURCE_PICKER::SELECT";
    Action["CLOSE"] = "APP::RESOURCE_PICKER::CLOSE";
    Action["UPDATE"] = "APP::RESOURCE_PICKER::UPDATE";
    Action["CANCEL"] = "APP::RESOURCE_PICKER::CANCEL";
})(Action = exports.Action || (exports.Action = {}));
var CollectionSortOrder;
(function (CollectionSortOrder) {
    CollectionSortOrder["Manual"] = "MANUAL";
    CollectionSortOrder["BestSelling"] = "BEST_SELLING";
    CollectionSortOrder["AlphaAsc"] = "ALPHA_ASC";
    CollectionSortOrder["AlphaDesc"] = "ALPHA_DESC";
    CollectionSortOrder["PriceDesc"] = "PRICE_DESC";
    CollectionSortOrder["PriceAsc"] = "PRICE_ASC";
    CollectionSortOrder["CreatedDesc"] = "CREATED_DESC";
    CollectionSortOrder["Created"] = "CREATED";
})(CollectionSortOrder = exports.CollectionSortOrder || (exports.CollectionSortOrder = {}));
var FulfillmentServiceType;
(function (FulfillmentServiceType) {
    FulfillmentServiceType["GiftCard"] = "GIFT_CARD";
    FulfillmentServiceType["Manual"] = "MANUAL";
    FulfillmentServiceType["ThirdParty"] = "THIRD_PARTY";
})(FulfillmentServiceType = exports.FulfillmentServiceType || (exports.FulfillmentServiceType = {}));
var WeightUnit;
(function (WeightUnit) {
    WeightUnit["Kilograms"] = "KILOGRAMS";
    WeightUnit["Grams"] = "GRAMS";
    WeightUnit["Pounds"] = "POUNDS";
    WeightUnit["Ounces"] = "OUNCES";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
var ProductVariantInventoryPolicy;
(function (ProductVariantInventoryPolicy) {
    ProductVariantInventoryPolicy["Deny"] = "DENY";
    ProductVariantInventoryPolicy["Continue"] = "CONTINUE";
})(ProductVariantInventoryPolicy = exports.ProductVariantInventoryPolicy || (exports.ProductVariantInventoryPolicy = {}));
var ProductVariantInventoryManagement;
(function (ProductVariantInventoryManagement) {
    ProductVariantInventoryManagement["Shopify"] = "SHOPIFY";
    ProductVariantInventoryManagement["NotManaged"] = "NOT_MANAGED";
    ProductVariantInventoryManagement["FulfillmentService"] = "FULFILLMENT_SERVICE";
})(ProductVariantInventoryManagement = exports.ProductVariantInventoryManagement || (exports.ProductVariantInventoryManagement = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Active"] = "ACTIVE";
    ProductStatus["Archived"] = "ARCHIVED";
    ProductStatus["Draft"] = "DRAFT";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["Product"] = "product";
    ResourceType["ProductVariant"] = "variant";
    ResourceType["Collection"] = "collection";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ActionVerb;
(function (ActionVerb) {
    ActionVerb["Add"] = "add";
    ActionVerb["Select"] = "select";
})(ActionVerb = exports.ActionVerb || (exports.ActionVerb = {}));
function select(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: Action.SELECT,
    });
}
exports.select = select;
function open(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: Action.OPEN,
    });
}
exports.open = open;
function cancel(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: Action.CANCEL,
    });
}
exports.cancel = cancel;
function close(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: Action.CANCEL,
    });
}
exports.close = close;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: Action.UPDATE,
    });
}
exports.update = update;
var ResourcePicker = /** @class */ (function (_super) {
    __extends(ResourcePicker, _super);
    function ResourcePicker(app, options, resourceType) {
        var _this = _super.call(this, app, types_1.Group.ResourcePicker, types_1.Group.ResourcePicker) || this;
        _this.initialSelectionIds = [];
        _this.selection = [];
        _this.resourceType = resourceType;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ResourcePicker.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { id: this.id, resourceType: this.resourceType });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResourcePicker.prototype, "options", {
        get: function () {
            var options = {
                initialQuery: this.initialQuery,
                selectMultiple: this.selectMultiple,
                initialSelectionIds: this.initialSelectionIds,
                showHidden: this.showHidden,
                actionVerb: this.actionVerb,
            };
            if (this.resourceType === ResourceType.Product) {
                var productOptions = __assign(__assign({}, options), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
                return productOptions;
            }
            return options;
        },
        enumerable: false,
        configurable: true
    });
    ResourcePicker.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var initialQuery = mergedOptions.initialQuery, _a = mergedOptions.initialSelectionIds, initialSelectionIds = _a === void 0 ? [] : _a, _b = mergedOptions.showHidden, showHidden = _b === void 0 ? true : _b, _c = mergedOptions.showVariants, showVariants = _c === void 0 ? true : _c, _d = mergedOptions.showDraft, showDraft = _d === void 0 ? true : _d, _e = mergedOptions.showArchived, showArchived = _e === void 0 ? true : _e, _f = mergedOptions.showDraftBadge, showDraftBadge = _f === void 0 ? false : _f, _g = mergedOptions.showArchivedBadge, showArchivedBadge = _g === void 0 ? false : _g, _h = mergedOptions.selectMultiple, selectMultiple = _h === void 0 ? true : _h, _j = mergedOptions.actionVerb, actionVerb = _j === void 0 ? ActionVerb.Add : _j;
        this.initialQuery = initialQuery;
        this.initialSelectionIds = initialSelectionIds;
        this.showHidden = showHidden;
        this.showVariants = showVariants;
        this.showDraft = showDraft;
        this.showArchived = showArchived;
        this.showDraftBadge = showDraftBadge;
        this.showArchivedBadge = showArchivedBadge;
        this.selectMultiple = selectMultiple;
        this.actionVerb = actionVerb;
        if (shouldUpdate) {
            this.update();
        }
        return this;
    };
    ResourcePicker.prototype.dispatch = function (action, selection) {
        if (action === Action.OPEN) {
            this.open();
        }
        else if (action === Action.UPDATE) {
            this.update();
        }
        else if (action === Action.CLOSE || action === Action.CANCEL) {
            this.cancel();
        }
        else if (action === Action.SELECT) {
            this.selection = selection;
            this.app.dispatch(select({ id: this.id, selection: this.selection }));
        }
        return this;
    };
    ResourcePicker.prototype.update = function () {
        this.app.dispatch(update(this.payload));
    };
    ResourcePicker.prototype.open = function () {
        this.app.dispatch(open(this.payload));
    };
    ResourcePicker.prototype.cancel = function () {
        this.app.dispatch(cancel({ id: this.id }));
    };
    ResourcePicker.prototype.close = function () {
        this.cancel();
    };
    return ResourcePicker;
}(helper_1.ActionSet));
exports.ResourcePicker = ResourcePicker;
exports.create = function (app, baseOptions) {
    var resourceType = baseOptions.resourceType, _a = baseOptions.options, options = _a === void 0 ? {} : _a;
    return new ResourcePicker(app, options, resourceType);
};


/***/ }),

/***/ "6453":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "64af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["APP"] = "APP::PRINT::APP";
})(Action = exports.Action || (exports.Action = {}));
function app() {
    return helper_1.actionWrapper({
        group: types_1.Group.Print,
        type: Action.APP,
    });
}
exports.app = app;


/***/ }),

/***/ "6619":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SEPARATOR = exports.PREFIX = void 0;
exports.PREFIX = 'APP';
exports.SEPARATOR = '::';


/***/ }),

/***/ "680e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Redirect = exports.isRemotePayload = exports.isAdminSectionPayload = exports.isAdminPathPayload = exports.isAppPayload = exports.toDestination = exports.toApp = exports.toRemote = exports.toAdminSection = exports.toAdminPath = exports.isProductVariantCreateResourcePayload = exports.isProductVariantResourcePayload = exports.isCreateResourcePayload = exports.isResourcePayload = exports.ResourceType = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["ADMIN_SECTION"] = "APP::NAVIGATION::REDIRECT::ADMIN::SECTION";
    Action["ADMIN_PATH"] = "APP::NAVIGATION::REDIRECT::ADMIN::PATH";
    Action["REMOTE"] = "APP::NAVIGATION::REDIRECT::REMOTE";
    Action["APP"] = "APP::NAVIGATION::REDIRECT::APP";
})(Action = exports.Action || (exports.Action = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["Product"] = "products";
    ResourceType["Collection"] = "collections";
    ResourceType["Order"] = "orders";
    ResourceType["Customer"] = "customers";
    ResourceType["Discount"] = "discounts";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
function isResourcePayload(resource) {
    // tslint:disable-next-line:no-boolean-literal-compare
    return typeof resource.id === 'string';
}
exports.isResourcePayload = isResourcePayload;
function isCreateResourcePayload(resource) {
    // tslint:disable-next-line:no-boolean-literal-compare
    return resource.create === true;
}
exports.isCreateResourcePayload = isCreateResourcePayload;
function isProductVariantResourcePayload(resource) {
    var castResource = resource;
    // tslint:disable-next-line:no-boolean-literal-compare
    return castResource.id !== undefined && castResource.variant !== undefined;
}
exports.isProductVariantResourcePayload = isProductVariantResourcePayload;
function isProductVariantCreateResourcePayload(resource) {
    if (!isProductVariantResourcePayload(resource)) {
        return false;
    }
    return isCreateResourcePayload(resource.variant);
}
exports.isProductVariantCreateResourcePayload = isProductVariantCreateResourcePayload;
function toAdminPath(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: Action.ADMIN_PATH,
    });
}
exports.toAdminPath = toAdminPath;
function toAdminSection(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: Action.ADMIN_SECTION,
    });
}
exports.toAdminSection = toAdminSection;
function toRemote(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: Action.REMOTE,
    });
}
exports.toRemote = toRemote;
function toApp(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: Action.APP,
    });
}
exports.toApp = toApp;
function toDestination(action, payload, id) {
    switch (action) {
        case Action.APP:
            var appPayload = isAppPayload(payload) ? payload : { path: payload };
            return toApp(__assign({ id: id }, appPayload));
        case Action.ADMIN_PATH:
            var adminPathPayload = isAdminPathPayload(payload) ? payload : { path: payload };
            return toAdminPath(__assign({ id: id }, adminPathPayload));
        case Action.ADMIN_SECTION:
            var adminSectionPayload = isAdminSectionPayload(payload)
                ? payload
                : { section: payload };
            return toAdminSection(__assign({ id: id }, adminSectionPayload));
        case Action.REMOTE:
            var remotePayload = isRemotePayload(payload) ? payload : { url: payload };
            return toRemote(__assign({ id: id }, remotePayload));
    }
}
exports.toDestination = toDestination;
function isAppPayload(payload) {
    return typeof payload === 'object' && payload.hasOwnProperty('path');
}
exports.isAppPayload = isAppPayload;
function isAdminPathPayload(payload) {
    return typeof payload === 'object' && payload.hasOwnProperty('path');
}
exports.isAdminPathPayload = isAdminPathPayload;
function isAdminSectionPayload(payload) {
    return (typeof payload === 'object' &&
        typeof payload.section === 'object' &&
        payload.section.hasOwnProperty('name'));
}
exports.isAdminSectionPayload = isAdminSectionPayload;
function isRemotePayload(payload) {
    return typeof payload === 'object' && payload.hasOwnProperty('url');
}
exports.isRemotePayload = isRemotePayload;
var Redirect = /** @class */ (function (_super) {
    __extends(Redirect, _super);
    function Redirect(app) {
        return _super.call(this, app, 'Redirect', types_1.Group.Navigation) || this;
    }
    Object.defineProperty(Redirect.prototype, "payload", {
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    Redirect.prototype.dispatch = function (action, payload) {
        var redirectAction = toDestination(action, payload, this.payload.id);
        this.app.dispatch(redirectAction);
        return this;
    };
    return Redirect;
}(helper_1.ActionSet));
exports.Redirect = Redirect;
function create(app) {
    return new Redirect(app);
}
exports.create = create;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6e74":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = exports.createAppWrapper = exports.createClientApp = exports.WINDOW_UNDEFINED_MESSAGE = void 0;
var helper_1 = __webpack_require__("9c68");
var Print_1 = __webpack_require__("64af");
var Error_1 = __webpack_require__("8aa1");
var MessageTransport_1 = __webpack_require__("c65b");
var shared_1 = __webpack_require__("2c09");
var env_1 = __webpack_require__("b9df");
var Client_1 = __webpack_require__("701b");
var print_1 = __webpack_require__("156c");
var redirect_1 = __webpack_require__("d3a0");
var types_1 = __webpack_require__("db6f");
var Hooks_1 = __importDefault(__webpack_require__("d1c5"));
exports.WINDOW_UNDEFINED_MESSAGE = 'window is not defined. Running an app outside a browser is not supported';
function redirectHandler(hostFrame, config) {
    var apiKey = config.apiKey, host = config.host, _a = config.forceRedirect, forceRedirect = _a === void 0 ? !env_1.isDevelopmentClient : _a;
    var location = redirect_1.getLocation();
    if (env_1.isFrameless ||
        !location ||
        !apiKey ||
        !host ||
        !forceRedirect ||
        !redirect_1.shouldRedirect(hostFrame)) {
        return;
    }
    var url = "https://" + host + "/apps/" + apiKey + location.pathname + (location.search || '');
    redirect_1.redirect(url);
}
function appSetUp(app) {
    app.subscribe(Print_1.Action.APP, print_1.handleAppPrint);
    app.dispatch(Client_1.initialize());
}
/**
 * @internal
 */
exports.createClientApp = function (transport, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    var getStateListeners = [];
    var transportListener = MessageTransport_1.createTransportListener();
    var handler = function (event) {
        var message = event.data;
        var type = message.type, payload = message.payload;
        switch (type) {
            case 'getState':
                var resolvers = getStateListeners.splice(0);
                resolvers.forEach(function (resolver) { return resolver(payload); });
                break;
            case 'dispatch':
                transportListener.handleMessage(payload);
                var hasCallback = transportListener.handleActionDispatch(payload);
                if (hasCallback) {
                    return;
                }
                // Throw an error if there are no subscriptions to this error
                var errorType = helper_1.findMatchInEnum(Error_1.Action, payload.type);
                if (errorType) {
                    Error_1.throwError(errorType, payload);
                }
                break;
            default:
            // Silently swallow unknown actions
        }
    };
    transport.subscribe(handler);
    return function (config) {
        if (!config.host) {
            throw Error_1.fromAction('host must be provided', Error_1.AppActionType.INVALID_CONFIG);
        }
        if (!config.apiKey) {
            throw Error_1.fromAction('apiKey must be provided', Error_1.AppActionType.INVALID_CONFIG);
        }
        var decodedConfig;
        try {
            decodedConfig = decodeConfig(config);
        }
        catch (_a) {
            var message = "not a valid host, please use the value provided by Shopify";
            throw Error_1.fromAction(message, Error_1.AppActionType.INVALID_CONFIG);
        }
        var dispatcher = createDispatcher(transport, decodedConfig);
        var subscribe = transportListener.createSubscribeHandler(dispatcher);
        // It is possible to initialize an app multiple times
        // Therefore we need to clear subscriptions to be safe
        dispatcher(types_1.MessageType.Unsubscribe);
        function dispatch(action) {
            dispatcher(types_1.MessageType.Dispatch, action);
            return action;
        }
        redirectHandler(transport.hostFrame, decodedConfig);
        var hooks = new Hooks_1.default();
        var app = {
            localOrigin: transport.localOrigin,
            hooks: hooks,
            dispatch: function (action) {
                if (!app.hooks) {
                    return dispatch(action);
                }
                return app.hooks.run(types_1.LifecycleHook.DispatchAction, dispatch, app, action);
            },
            featuresAvailable: function (features) {
                return app.getState('features').then(function (state) {
                    if (features) {
                        Object.keys(state).forEach(function (feature) {
                            if (!features.includes(feature)) {
                                delete state[feature];
                            }
                        });
                    }
                    return state;
                });
            },
            getState: function (query) {
                return new Promise(function (resolve) {
                    getStateListeners.push(resolve);
                    dispatcher(types_1.MessageType.GetState);
                }).then(function (state) {
                    if (query) {
                        return query.split('.').reduce(function (value, key) {
                            if (typeof state !== 'object' || Array.isArray(state)) {
                                return undefined;
                            }
                            value = state[key];
                            state = value;
                            return value;
                        }, undefined);
                    }
                    return state;
                });
            },
            subscribe: subscribe,
            error: function (listener, id) {
                var unsubscribeCb = [];
                helper_1.forEachInEnum(Error_1.Action, function (eventNameSpace) {
                    unsubscribeCb.push(subscribe(eventNameSpace, listener, id));
                });
                return function () {
                    unsubscribeCb.forEach(function (unsubscribe) { return unsubscribe(); });
                };
            },
        };
        for (var _i = 0, middlewares_1 = middlewares; _i < middlewares_1.length; _i++) {
            var middleware = middlewares_1[_i];
            middleware(hooks, app);
        }
        appSetUp(app);
        return app;
    };
};
/**
 * @internal
 */
function decodeConfig(config) {
    var _a;
    return __assign(__assign({}, config), { host: atob((_a = config.host) === null || _a === void 0 ? void 0 : _a.replace(/_/g, '/').replace(/-/g, '+')) });
}
/**
 * @public
 */
function createAppWrapper(frame, localOrigin, middleware) {
    if (middleware === void 0) { middleware = []; }
    if (!frame) {
        throw Error_1.fromAction(exports.WINDOW_UNDEFINED_MESSAGE, Error_1.AppActionType.WINDOW_UNDEFINED);
    }
    var location = redirect_1.getLocation();
    var origin = localOrigin || (location && location.origin);
    if (!origin) {
        throw Error_1.fromAction('local origin cannot be blank', Error_1.AppActionType.MISSING_LOCAL_ORIGIN);
    }
    var transport = MessageTransport_1.fromWindow(frame, origin);
    var appCreator = exports.createClientApp(transport, middleware);
    return appCreator;
}
exports.createAppWrapper = createAppWrapper;
/**
 * Creates your application instance.
 * @param config - `apiKey` and `host` are both required.
 * @remarks
 * You will need to store `host` during the authentication process and then retrieve it for the code to work properly. To learn more about this process, see {@link https://help.shopify.com/api/embedded-apps/shop-origin | Getting and storing the shop origin}.
 * @public
 */
function createApp(config) {
    var currentWindow = redirect_1.getWindow();
    if (!currentWindow) {
        return shared_1.serverAppBridge;
    }
    return createAppWrapper(currentWindow.top)(config);
}
exports.createApp = createApp;
function createDispatcher(transport, config) {
    return function (type, payload) {
        transport.dispatch({
            payload: payload,
            source: config,
            type: type,
        });
    };
}
/**
 * {@inheritdocs createApp}
 * @public
 */
exports.default = createApp;


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "701b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = exports.Action = void 0;
var types_1 = __webpack_require__("bdf4");
var helper_1 = __webpack_require__("9c68");
var Action;
(function (Action) {
    Action["INITIALIZE"] = "APP::CLIENT::INITIALIZE";
})(Action = exports.Action || (exports.Action = {}));
function initialize() {
    return helper_1.actionWrapper({
        group: types_1.Group.Client,
        type: Action.INITIALIZE,
    });
}
exports.initialize = initialize;


/***/ }),

/***/ "715f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ModalIframe = exports.ModalMessage = exports.Modal = exports.isMessageModal = exports.isIframeModal = exports.data = exports.update = exports.clickFooterButton = exports.updateModalSize = exports.closeModal = exports.openModal = exports.Size = exports.Action = void 0;
var buttonHelper_1 = __webpack_require__("dabe");
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Button_1 = __webpack_require__("45dd");
var Action;
(function (Action) {
    Action["OPEN"] = "APP::MODAL::OPEN";
    Action["CLOSE"] = "APP::MODAL::CLOSE";
    Action["UPDATE"] = "APP::MODAL::UPDATE";
    Action["UPDATE_CONTENT"] = "APP::MODAL::CONTENT::UPDATE";
    Action["FOOTER_BUTTON_CLICK"] = "APP::MODAL::FOOTER::BUTTON::CLICK";
    Action["FOOTER_BUTTON_UPDATE"] = "APP::MODAL::FOOTER::BUTTON::UPDATE";
    Action["UPDATE_SIZE"] = "APP::MODAL::UPDATE_SIZE";
    Action["DATA"] = "APP::MODAL::DATA";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Options available to the Modal `size` param
 * @public
 */
var Size;
(function (Size) {
    /** Small modal size */
    Size["Small"] = "small";
    /** Medium modal size */
    Size["Medium"] = "medium";
    /** Large modal size (wider than medium) */
    Size["Large"] = "large";
    /** @deprecated as of 1.6.5 */
    Size["Full"] = "full";
    /**
     * @deprecated as of 1.12.x
     * @remarks
     * This option has been removed in favour of the `setUpModalAutoSizing` utility.
     * See `app-bridge-utils` package for more information
     */
    Size["Auto"] = "auto";
})(Size = exports.Size || (exports.Size = {}));
var FOOTER_BUTTON_PROPS = {
    group: types_1.Group.Modal,
    subgroups: ['Footer'],
    type: types_1.ComponentType.Button,
};
function openModal(modalPayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalPayload,
        type: Action.OPEN,
    });
}
exports.openModal = openModal;
function closeModal(modalClosePayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalClosePayload,
        type: Action.CLOSE,
    });
}
exports.closeModal = closeModal;
/**
 * Action creator for modal update size action
 * @internal
 */
function updateModalSize(updateSizePayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: updateSizePayload,
        type: Action.UPDATE_SIZE,
    });
}
exports.updateModalSize = updateModalSize;
function clickFooterButton(id, payload) {
    var component = __assign({ id: id }, FOOTER_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.Modal, component, payload);
}
exports.clickFooterButton = clickFooterButton;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Modal,
        type: Action.UPDATE,
    });
}
exports.update = update;
function data(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Modal,
        type: Action.DATA,
    });
}
exports.data = data;
function isIframeModal(options) {
    return (typeof options.url === 'string' ||
        typeof options.path === 'string');
}
exports.isIframeModal = isIframeModal;
function isMessageModal(options) {
    return typeof options.message === 'string';
}
exports.isMessageModal = isMessageModal;
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = Size.Small;
        return _this;
    }
    Object.defineProperty(Modal.prototype, "footer", {
        get: function () {
            if (!this.footerPrimary && !this.footerSecondary) {
                return undefined;
            }
            return {
                buttons: {
                    primary: this.footerPrimary,
                    secondary: this.footerSecondary,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "footerOptions", {
        get: function () {
            if (!this.footerPrimaryOptions && !this.footerSecondaryOptions) {
                return undefined;
            }
            return {
                buttons: {
                    primary: this.footerPrimaryOptions,
                    secondary: this.footerSecondaryOptions,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Modal.prototype.close = function () {
        this.app.dispatch(closeModal({ id: this.id }));
    };
    Modal.prototype.setFooterPrimaryButton = function (newOptions, updateCb) {
        var _this = this;
        var subgroups = FOOTER_BUTTON_PROPS.subgroups;
        this.footerPrimaryOptions = this.getChildButton(newOptions, this.footerPrimaryOptions);
        this.footerPrimary = this.footerPrimaryOptions
            ? buttonHelper_1.getSingleButton(this, this.footerPrimaryOptions, subgroups, function (newPayload) {
                _this.updatePrimaryFooterButton(newPayload, updateCb);
            })
            : undefined;
    };
    Modal.prototype.setFooterSecondaryButtons = function (newOptions, updateCb) {
        var _this = this;
        var subgroups = FOOTER_BUTTON_PROPS.subgroups;
        var newButtons = newOptions || [];
        var currentOptions = (this.footerOptions && this.footerOptions.buttons.secondary) || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(newButtons, currentOptions);
        this.footerSecondary = this.footerSecondaryOptions
            ? this.footerSecondaryOptions.map(function (action) {
                return buttonHelper_1.getSingleButton(_this, action, subgroups, function (newPayload) {
                    _this.updateSecondaryFooterButton(newPayload, updateCb);
                });
            })
            : undefined;
    };
    Modal.prototype.getChildButton = function (newAction, currentAction) {
        var newButtons = newAction ? [newAction] : [];
        var currentButtons = currentAction ? [currentAction] : [];
        var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
        return updatedButton ? updatedButton[0] : undefined;
    };
    Modal.prototype.updatePrimaryFooterButton = function (newPayload, updateCb) {
        if (!this.footer || !this.footer.buttons.primary) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.footer.buttons.primary, newPayload)) {
            updateCb();
        }
    };
    Modal.prototype.updateSecondaryFooterButton = function (newPayload, updateCb) {
        if (!this.footer || !this.footer.buttons || !this.footer.buttons.secondary) {
            return;
        }
        var updated;
        for (var _i = 0, _a = this.footer.buttons.secondary; _i < _a.length; _i++) {
            var action = _a[_i];
            updated = helper_1.updateActionFromPayload(action, newPayload);
            if (updated) {
                break;
            }
        }
        if (updated) {
            updateCb();
        }
    };
    return Modal;
}(helper_1.ActionSetWithChildren));
exports.Modal = Modal;
var ModalMessage = /** @class */ (function (_super) {
    __extends(ModalMessage, _super);
    function ModalMessage(app, options) {
        var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ModalMessage.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalMessage.prototype, "options", {
        get: function () {
            return {
                footer: this.footerOptions,
                message: this.message,
                size: this.size,
                title: this.title,
            };
        },
        enumerable: false,
        configurable: true
    });
    ModalMessage.prototype.set = function (options, shouldUpdate) {
        var _this = this;
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, footer = mergedOptions.footer, message = mergedOptions.message, size = mergedOptions.size;
        this.title = title;
        this.message = message;
        this.size = size;
        this.setFooterPrimaryButton(footer ? footer.buttons.primary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    ModalMessage.prototype.dispatch = function (action) {
        switch (action) {
            case Action.OPEN:
                this.app.dispatch(openModal(this.payload));
                break;
            case Action.CLOSE:
                this.close();
                break;
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    return ModalMessage;
}(Modal));
exports.ModalMessage = ModalMessage;
var ModalIframe = /** @class */ (function (_super) {
    __extends(ModalIframe, _super);
    function ModalIframe(app, options) {
        var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ModalIframe.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalIframe.prototype, "options", {
        get: function () {
            return {
                footer: this.footerOptions,
                path: this.path,
                size: this.size,
                title: this.title,
                url: this.url,
                loading: this.loading,
            };
        },
        enumerable: false,
        configurable: true
    });
    ModalIframe.prototype.set = function (options, shouldUpdate) {
        var _this = this;
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, footer = mergedOptions.footer, path = mergedOptions.path, url = mergedOptions.url, size = mergedOptions.size, loading = mergedOptions.loading;
        this.title = title;
        this.url = url;
        this.path = path;
        this.size = size;
        this.loading = loading;
        this.setFooterPrimaryButton(footer ? footer.buttons.primary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    ModalIframe.prototype.dispatch = function (action, payload) {
        switch (action) {
            case Action.OPEN:
                this.app.dispatch(openModal(this.payload));
                break;
            case Action.CLOSE:
                this.close();
                break;
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
            case Action.DATA:
                this.app.dispatch(data(payload || {}));
                break;
        }
        return this;
    };
    return ModalIframe;
}(Modal));
exports.ModalIframe = ModalIframe;
exports.create = function (app, options) {
    if (isIframeModal(options)) {
        return new ModalIframe(app, options);
    }
    return new ModalMessage(app, options);
};


/***/ }),

/***/ "72bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__("6453");
var objectAssign = __webpack_require__("320c");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "741c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isAppMessage = exports.isPermitted = exports.getPermissionKey = exports.isFromApp = exports.isAppBridgeAction = void 0;
var types_1 = __webpack_require__("db6f");
var constants_1 = __webpack_require__("6619");
var helper_1 = __webpack_require__("9c68");
/**
 * Predicate to determine if an action is an App Bridge action.
 * @public
 */
function isAppBridgeAction(action) {
    return (action instanceof Object &&
        action.hasOwnProperty('type') &&
        action.type.toString().startsWith(constants_1.PREFIX));
}
exports.isAppBridgeAction = isAppBridgeAction;
/**
 * Predicate to determine if an action originated from an application.
 * @internal
 */
function isFromApp(action) {
    if (typeof action !== 'object' || typeof action.source !== 'object') {
        return false;
    }
    return typeof action.source.apiKey === 'string';
}
exports.isFromApp = isFromApp;
/**
 * Returns the action type without the prefix and group
 * @internal
 */
function getPermissionKey(type) {
    return type.replace(new RegExp("^" + constants_1.PREFIX + constants_1.SEPARATOR + "\\w+" + constants_1.SEPARATOR), '');
}
exports.getPermissionKey = getPermissionKey;
/**
 * Predicate to determine if an action is permitted
 * @internal
 */
function isPermitted(features, _a, permissionType) {
    var group = _a.group, type = _a.type;
    if (!group || !features.hasOwnProperty(group)) {
        return false;
    }
    var feature = features[group];
    if (!feature) {
        return false;
    }
    var actionType = getPermissionKey(type);
    return feature[actionType] ? feature[actionType][permissionType] === true : false;
}
exports.isPermitted = isPermitted;
/**
 * Predicate to determine if an event originated from an application.
 * @internal
 */
function isAppMessage(event) {
    if (typeof event !== 'object' || !event.data || typeof event.data !== 'object') {
        return false;
    }
    var data = event.data;
    return data.hasOwnProperty('type') && helper_1.findMatchInEnum(types_1.MessageType, data.type) !== undefined;
}
exports.isAppMessage = isAppMessage;


/***/ }),

/***/ "7530":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Pos = exports.close = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
/**
 * Pos action type enum
 * @remarks includes the action prefix and group
 *
 */
var Action;
(function (Action) {
    Action["CLOSE"] = "APP::POS::CLOSE";
    Action["LOCATION_UPDATE"] = "APP::POS::LOCATION::UPDATE";
    Action["USER_UPDATE"] = "APP::POS::USER::UPDATE";
    Action["DEVICE_UPDATE"] = "APP::POS::DEVICE::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
function close() {
    return helper_1.actionWrapper({
        group: types_1.Group.Pos,
        type: Action.CLOSE,
    });
}
exports.close = close;
var Pos = /** @class */ (function (_super) {
    __extends(Pos, _super);
    function Pos(app) {
        return _super.call(this, app, types_1.Group.Pos, types_1.Group.Pos) || this;
    }
    Pos.prototype.dispatch = function (action) {
        switch (action) {
            case Action.CLOSE:
                this.app.dispatch(close());
                break;
        }
        return this;
    };
    return Pos;
}(helper_1.ActionSet));
exports.Pos = Pos;
function create(app) {
    return new Pos(app);
}
exports.create = create;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "791c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Loading = exports.stop = exports.start = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["START"] = "APP::LOADING::START";
    Action["STOP"] = "APP::LOADING::STOP";
})(Action = exports.Action || (exports.Action = {}));
function start(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Loading,
        type: Action.START,
    });
}
exports.start = start;
function stop(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Loading,
        type: Action.STOP,
    });
}
exports.stop = stop;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading(app) {
        return _super.call(this, app, types_1.Group.Loading, types_1.Group.Loading) || this;
    }
    Object.defineProperty(Loading.prototype, "payload", {
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    Loading.prototype.dispatch = function (action) {
        switch (action) {
            case Action.START:
                this.app.dispatch(start(this.payload));
                break;
            case Action.STOP:
                this.app.dispatch(stop(this.payload));
                break;
        }
        return this;
    };
    return Loading;
}(helper_1.ActionSet));
exports.Loading = Loading;
function create(app) {
    return new Loading(app);
}
exports.create = create;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f4b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__("f107");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return client_1.createApp; } });
__exportStar(__webpack_require__("c65b"), exports);
__exportStar(__webpack_require__("f107"), exports);


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "82eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.FeedbackModal = exports.close = exports.open = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
/**
 * Action for the Feedback Modal group
 * @public
 */
var Action;
(function (Action) {
    Action["OPEN"] = "APP::FEEDBACK_MODAL::OPEN";
    Action["CLOSE"] = "APP::FEEDBACK_MODAL::CLOSE";
})(Action = exports.Action || (exports.Action = {}));
function open(payload) {
    return helper_1.actionWrapper({
        group: types_1.Group.FeedbackModal,
        payload: payload,
        type: Action.OPEN,
    });
}
exports.open = open;
function close(payload) {
    return helper_1.actionWrapper({
        group: types_1.Group.FeedbackModal,
        payload: payload,
        type: Action.CLOSE,
    });
}
exports.close = close;
/**
 * FeedbackModal action set
 */
var FeedbackModal = /** @class */ (function (_super) {
    __extends(FeedbackModal, _super);
    /**
     * Returns a new instance of a FeedbackModal action set
     * @param app the client application
     */
    function FeedbackModal(app, options) {
        var _this = _super.call(this, app, types_1.Group.FeedbackModal, types_1.Group.FeedbackModal) || this;
        _this.options = options;
        _this.set(options);
        return _this;
    }
    Object.defineProperty(FeedbackModal.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    FeedbackModal.prototype.set = function (options) {
        this.options = helper_1.getMergedProps(this.options, options);
        return this;
    };
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    FeedbackModal.prototype.dispatch = function (action) {
        switch (action) {
            case Action.OPEN:
                var openAction = open(this.payload);
                this.app.dispatch(openAction);
                break;
            case Action.CLOSE:
                var closeAction = close(this.payload);
                this.app.dispatch(closeAction);
                break;
        }
        return this;
    };
    return FeedbackModal;
}(helper_1.ActionSet));
exports.FeedbackModal = FeedbackModal;
/**
 * Returns a new instance of a FeedbackModal action set
 * @param app the client application
 */
function create(app, options) {
    return new FeedbackModal(app, options);
}
exports.create = create;


/***/ }),

/***/ "8302":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ButtonGroup = exports.isGroupedButtonPayload = exports.isGroupedButton = exports.update = exports.Action = void 0;
var buttonHelper_1 = __webpack_require__("dabe");
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
function update(group, component, props) {
    return buttonActionWrapper(group, component, Action.UPDATE, props);
}
exports.update = update;
function isGroupedButton(options) {
    var castOptions = options;
    return castOptions.buttons && castOptions.buttons.length > 0 && castOptions.label !== undefined;
}
exports.isGroupedButton = isGroupedButton;
function isGroupedButtonPayload(payload) {
    var castOptions = payload;
    return (Array.isArray(castOptions.buttons) &&
        typeof castOptions.id === 'string' &&
        typeof castOptions.label === 'string');
}
exports.isGroupedButtonPayload = isGroupedButtonPayload;
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup(app, options) {
        var _this = _super.call(this, app, types_1.ComponentType.ButtonGroup, types_1.Group.ButtonGroup) || this;
        _this.disabled = false;
        _this.buttonsOptions = [];
        _this.buttons = [];
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ButtonGroup.prototype, "options", {
        get: function () {
            return {
                buttons: this.buttonsOptions,
                disabled: this.disabled,
                label: this.label,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonGroup.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    ButtonGroup.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var label = mergedOptions.label, disabled = mergedOptions.disabled, buttons = mergedOptions.buttons;
        this.label = label;
        this.disabled = Boolean(disabled);
        this.buttons = this.getButtons(buttons);
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    ButtonGroup.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                var updateAction = update(this.group, this.component, this.payload);
                this.app.dispatch(updateAction);
                break;
        }
        return this;
    };
    ButtonGroup.prototype.updateButtons = function (newPayload) {
        if (!this.buttons || this.buttons.length === 0) {
            return;
        }
        var updated;
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var action = _a[_i];
            updated = helper_1.updateActionFromPayload(action, newPayload);
            if (updated) {
                break;
            }
        }
        if (updated) {
            this.dispatch(Action.UPDATE);
        }
    };
    ButtonGroup.prototype.getSingleButton = function (button) {
        return buttonHelper_1.getSingleButton(this, button, this.subgroups, this.updateButtons);
    };
    ButtonGroup.prototype.getButtons = function (buttonOptions) {
        var _this = this;
        var buttons = [];
        if (!buttonOptions) {
            return [];
        }
        buttonOptions.forEach(function (button) {
            var singleButton = buttonHelper_1.getSingleButton(_this, button, _this.subgroups, _this.updateButtons);
            buttons.push(singleButton);
        });
        this.buttonsOptions = buttonOptions;
        return buttons;
    };
    return ButtonGroup;
}(helper_1.ActionSetWithChildren));
exports.ButtonGroup = ButtonGroup;
function create(app, options) {
    return new ButtonGroup(app, options);
}
exports.create = create;
function buttonActionWrapper(group, component, eventName, props, payload) {
    var id = component.id;
    var label = props.label;
    var action = helper_1.getEventNameSpace(group, eventName, component);
    var buttonPayload = __assign(__assign({}, props), { id: id,
        label: label,
        payload: payload });
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "841c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var sameValue = __webpack_require__("129f");
var regExpExec = __webpack_require__("14c3");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var res = maybeCallNative(nativeSearch, this, string);
      if (res.done) return res.value;

      var rx = anObject(this);
      var S = String(string);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "86b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Performance = exports.Pos = exports.AppLink = exports.ChannelMenu = exports.NavigationMenu = exports.Share = exports.ContextualSaveBar = exports.MarketingExternalActivityTopBar = exports.TitleBar = exports.SessionToken = exports.ResourcePicker = exports.Redirect = exports.Print = exports.ModalContent = exports.Modal = exports.Loading = exports.LeaveConfirmation = exports.History = exports.Toast = exports.Fullscreen = exports.FeedbackModal = exports.Features = exports.Flash = exports.Error = exports.Client = exports.Cart = exports.Scanner = exports.ButtonGroup = exports.Button = exports.AuthCode = void 0;
var AuthCode = __importStar(__webpack_require__("c029"));
exports.AuthCode = AuthCode;
var Button = __importStar(__webpack_require__("45dd"));
exports.Button = Button;
var ButtonGroup = __importStar(__webpack_require__("8302"));
exports.ButtonGroup = ButtonGroup;
var Cart = __importStar(__webpack_require__("3309"));
exports.Cart = Cart;
var Client = __importStar(__webpack_require__("701b"));
exports.Client = Client;
var Error = __importStar(__webpack_require__("8aa1"));
exports.Error = Error;
var Flash = __importStar(__webpack_require__("523b"));
exports.Flash = Flash;
var Features = __importStar(__webpack_require__("a3df"));
exports.Features = Features;
var FeedbackModal = __importStar(__webpack_require__("82eb"));
exports.FeedbackModal = FeedbackModal;
var Fullscreen = __importStar(__webpack_require__("4d01"));
exports.Fullscreen = Fullscreen;
var LeaveConfirmation = __importStar(__webpack_require__("c49b"));
exports.LeaveConfirmation = LeaveConfirmation;
var Loading = __importStar(__webpack_require__("791c"));
exports.Loading = Loading;
var Modal = __importStar(__webpack_require__("715f"));
exports.Modal = Modal;
var ModalContent = __importStar(__webpack_require__("8cc2"));
exports.ModalContent = ModalContent;
var History = __importStar(__webpack_require__("0e3e"));
exports.History = History;
var Redirect = __importStar(__webpack_require__("680e"));
exports.Redirect = Redirect;
var Print = __importStar(__webpack_require__("64af"));
exports.Print = Print;
var ResourcePicker = __importStar(__webpack_require__("63d6"));
exports.ResourcePicker = ResourcePicker;
var Scanner = __importStar(__webpack_require__("997d"));
exports.Scanner = Scanner;
var SessionToken = __importStar(__webpack_require__("54df"));
exports.SessionToken = SessionToken;
var TitleBar = __importStar(__webpack_require__("3447"));
exports.TitleBar = TitleBar;
var Toast = __importStar(__webpack_require__("e858"));
exports.Toast = Toast;
var ContextualSaveBar = __importStar(__webpack_require__("ea39"));
exports.ContextualSaveBar = ContextualSaveBar;
var Share = __importStar(__webpack_require__("5ee2"));
exports.Share = Share;
var NavigationMenu = __importStar(__webpack_require__("a0f3"));
exports.NavigationMenu = NavigationMenu;
var ChannelMenu = __importStar(__webpack_require__("2da5"));
exports.ChannelMenu = ChannelMenu;
var AppLink = __importStar(__webpack_require__("e4ca"));
exports.AppLink = AppLink;
var Pos = __importStar(__webpack_require__("7530"));
exports.Pos = Pos;
var MarketingExternalActivityTopBar = __importStar(__webpack_require__("982f"));
exports.MarketingExternalActivityTopBar = MarketingExternalActivityTopBar;
var Performance = __importStar(__webpack_require__("b708"));
exports.Performance = Performance;
var validator_1 = __webpack_require__("741c");
Object.defineProperty(exports, "isAppBridgeAction", { enumerable: true, get: function () { return validator_1.isAppBridgeAction; } });
__exportStar(__webpack_require__("bdf4"), exports);


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = exports.fromAction = exports.AppBridgeError = exports.invalidOriginAction = exports.isErrorEventName = exports.permissionAction = exports.networkAction = exports.persistenceAction = exports.unsupportedOperationAction = exports.unexpectedAction = exports.invalidAction = exports.invalidActionType = exports.invalidPayload = exports.Message = exports.AppActionType = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
// Errors triggered in response to an action
var Action;
(function (Action) {
    Action["INVALID_ACTION"] = "APP::ERROR::INVALID_ACTION";
    Action["INVALID_ACTION_TYPE"] = "APP::ERROR::INVALID_ACTION_TYPE";
    Action["INVALID_PAYLOAD"] = "APP::ERROR::INVALID_PAYLOAD";
    Action["INVALID_OPTIONS"] = "APP::ERROR::INVALID_OPTIONS";
    Action["UNEXPECTED_ACTION"] = "APP::ERROR::UNEXPECTED_ACTION";
    Action["PERSISTENCE"] = "APP::ERROR::PERSISTENCE";
    Action["UNSUPPORTED_OPERATION"] = "APP::ERROR::UNSUPPORTED_OPERATION";
    Action["NETWORK"] = "APP::ERROR::NETWORK";
    Action["PERMISSION"] = "APP::ERROR::PERMISSION";
    Action["FAILED_AUTHENTICATION"] = "APP::ERROR::FAILED_AUTHENTICATION";
    Action["INVALID_ORIGIN"] = "APP::ERROR::INVALID_ORIGIN";
})(Action = exports.Action || (exports.Action = {}));
// Errors thrown in response to app setup
var AppActionType;
(function (AppActionType) {
    AppActionType["INVALID_CONFIG"] = "APP::ERROR::INVALID_CONFIG";
    AppActionType["MISSING_CONFIG"] = "APP::APP_ERROR::MISSING_CONFIG";
    AppActionType["MISSING_APP_BRIDGE_MIDDLEWARE"] = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE";
    AppActionType["WINDOW_UNDEFINED"] = "APP::APP_ERROR::WINDOW_UNDEFINED";
    AppActionType["MISSING_LOCAL_ORIGIN"] = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN";
    AppActionType["MISSING_HOST_PROVIDER"] = "APP::APP_ERROR::MISSING_HOST_PROVIDER";
    AppActionType["MISSING_ROUTER_CONTEXT"] = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT";
    AppActionType["MISSING_HISTORY_BLOCK"] = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
})(AppActionType = exports.AppActionType || (exports.AppActionType = {}));
function errorActionWrapperWithId(type, action, message) {
    var castPayload = action.payload;
    return helper_1.actionWrapper({
        type: type,
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message,
            type: type,
            id: castPayload && castPayload.id ? castPayload.id : undefined,
        },
    });
}
var Message;
(function (Message) {
    Message["MISSING_PAYLOAD"] = "Missing payload";
    Message["INVALID_PAYLOAD_ID"] = "Id in payload is missing or invalid";
})(Message = exports.Message || (exports.Message = {}));
function invalidPayload(action, message) {
    return errorActionWrapperWithId(Action.INVALID_PAYLOAD, action, message || "The action's payload is missing required properties or has invalid properties");
}
exports.invalidPayload = invalidPayload;
function invalidActionType(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || 'The action type is invalid or unsupported',
            type: Action.INVALID_ACTION_TYPE,
        },
        type: Action.INVALID_ACTION_TYPE,
    });
}
exports.invalidActionType = invalidActionType;
function invalidAction(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || "The action's has missing/invalid values for `group`, `type` or `version`",
            type: Action.INVALID_ACTION,
        },
        type: Action.INVALID_ACTION,
    });
}
exports.invalidAction = invalidAction;
function unexpectedAction(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || 'Action cannot be called at this time',
            type: Action.UNEXPECTED_ACTION,
        },
        type: Action.UNEXPECTED_ACTION,
    });
}
exports.unexpectedAction = unexpectedAction;
function unsupportedOperationAction(action, message) {
    return errorActionWrapperWithId(Action.UNSUPPORTED_OPERATION, action, message || 'The action type is unsupported');
}
exports.unsupportedOperationAction = unsupportedOperationAction;
function persistenceAction(action, message) {
    return errorActionWrapperWithId(Action.PERSISTENCE, action, message || 'Action cannot be persisted on server');
}
exports.persistenceAction = persistenceAction;
function networkAction(action, message) {
    return errorActionWrapperWithId(Action.NETWORK, action, message || 'Network error');
}
exports.networkAction = networkAction;
function permissionAction(action, message) {
    return errorActionWrapperWithId(Action.PERMISSION, action, message || 'Action is not permitted');
}
exports.permissionAction = permissionAction;
function isErrorEventName(eventName) {
    var match = helper_1.findMatchInEnum(Action, eventName);
    return typeof match === 'string';
}
exports.isErrorEventName = isErrorEventName;
function invalidOriginAction(message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            message: message,
            type: Action.INVALID_ORIGIN,
        },
        type: Action.INVALID_ORIGIN,
    });
}
exports.invalidOriginAction = invalidOriginAction;
var AppBridgeError = /** @class */ (function () {
    function AppBridgeError(message) {
        this.name = 'AppBridgeError';
        this.message = message;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = new Error(this.message).stack;
        }
    }
    return AppBridgeError;
}());
exports.AppBridgeError = AppBridgeError;
AppBridgeError.prototype = Object.create(Error.prototype);
function fromAction(message, type, action) {
    var errorMessage = message ? type + ": " + message : type;
    var error = new AppBridgeError(errorMessage);
    error.action = action;
    error.type = type;
    return error;
}
exports.fromAction = fromAction;
function throwError() {
    var type = arguments[0];
    var message;
    var action;
    if (typeof arguments[1] === 'string') {
        message = arguments[1];
    }
    else {
        action = arguments[1];
        message = arguments[2] || '';
    }
    throw fromAction(message, type, action);
}
exports.throwError = throwError;


/***/ }),

/***/ "8bac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Flash = void 0;
var Toast_1 = __webpack_require__("e858");
var Toast_2 = __webpack_require__("e858");
Object.defineProperty(exports, "clear", { enumerable: true, get: function () { return Toast_2.clear; } });
Object.defineProperty(exports, "show", { enumerable: true, get: function () { return Toast_2.show; } });
var Flash = /** @class */ (function (_super) {
    __extends(Flash, _super);
    function Flash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Flash;
}(Toast_1.Toast));
exports.Flash = Flash;
function create(app, options) {
    return new Flash(app, options);
}
exports.create = create;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8cc2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ModalContent = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var index_1 = __webpack_require__("715f");
var Action;
(function (Action) {
    Action["LOADING"] = "LOADING";
    Action["LOADED"] = "LOADED";
})(Action = exports.Action || (exports.Action = {}));
/**
 * A set of Actions for updating the modal component
 * @public
 */
var ModalContent = /** @class */ (function (_super) {
    __extends(ModalContent, _super);
    function ModalContent(app, options) {
        return _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal, options ? options.id : undefined) || this;
    }
    ModalContent.prototype.loaded = function () {
        this.dispatch(Action.LOADED);
    };
    ModalContent.prototype.loading = function () {
        this.dispatch(Action.LOADING);
    };
    /**
     * @private
     */
    ModalContent.prototype.dispatch = function (action) {
        switch (action) {
            case Action.LOADED:
                this.dispatchModalAction(index_1.Action.UPDATE_CONTENT, { loading: false });
                break;
            case Action.LOADING:
                this.dispatchModalAction(index_1.Action.UPDATE_CONTENT, { loading: true });
                break;
        }
        return this;
    };
    /**
     * @internal
     */
    ModalContent.prototype.dispatchModalAction = function (type, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var updateAction;
            return __generator(this, function (_a) {
                updateAction = helper_1.actionWrapper({
                    type: type,
                    group: types_1.Group.Modal,
                    payload: __assign({}, payload),
                });
                this.app.dispatch(updateAction);
                return [2 /*return*/];
            });
        });
    };
    return ModalContent;
}(helper_1.ActionSet));
exports.ModalContent = ModalContent;
/**
 * @public
 */
function create(app, options) {
    return new ModalContent(app, options);
}
exports.create = create;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "982f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.MarketingExternalActivityTopBar = exports.update = exports.clickActionButton = exports.MarketingActivityStatusBadgeType = exports.Action = void 0;
var Button_1 = __webpack_require__("45dd");
var buttonHelper_1 = __webpack_require__("dabe");
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["UPDATE"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE";
    Action["BUTTON_CLICK"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK";
    Action["BUTTON_UPDATE"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var MarketingActivityStatusBadgeType;
(function (MarketingActivityStatusBadgeType) {
    MarketingActivityStatusBadgeType["Default"] = "DEFAULT";
    MarketingActivityStatusBadgeType["Success"] = "SUCCESS";
    MarketingActivityStatusBadgeType["Attention"] = "ATTENTION";
    MarketingActivityStatusBadgeType["Warning"] = "WARNING";
    MarketingActivityStatusBadgeType["Info"] = "INFO";
})(MarketingActivityStatusBadgeType = exports.MarketingActivityStatusBadgeType || (exports.MarketingActivityStatusBadgeType = {}));
var MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS = {
    group: types_1.Group.MarketingExternalActivityTopBar,
    subgroups: ['Buttons'],
};
function clickActionButton(id, payload) {
    var type = types_1.ComponentType.Button;
    var component = __assign({ id: id, type: type }, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.MarketingExternalActivityTopBar, component, payload);
}
exports.clickActionButton = clickActionButton;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.MarketingExternalActivityTopBar,
        type: Action.UPDATE,
    });
}
exports.update = update;
var MarketingExternalActivityTopBar = /** @class */ (function (_super) {
    __extends(MarketingExternalActivityTopBar, _super);
    function MarketingExternalActivityTopBar(app, options) {
        var _this = _super.call(this, app, types_1.Group.MarketingExternalActivityTopBar, types_1.Group.MarketingExternalActivityTopBar) || this;
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "buttons", {
        get: function () {
            if (!this.primary && !this.secondary) {
                return undefined;
            }
            return {
                primary: this.primary,
                secondary: this.secondary,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "buttonsOptions", {
        get: function () {
            if (!this.primaryOptions && !this.secondaryOptions) {
                return undefined;
            }
            return {
                primary: this.primaryOptions,
                secondary: this.secondaryOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "options", {
        get: function () {
            return {
                title: this.title,
                status: this.status,
                saving: this.saving,
                saved: this.saved,
                buttons: this.buttonsOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    MarketingExternalActivityTopBar.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, buttons = mergedOptions.buttons, saved = mergedOptions.saved, saving = mergedOptions.saving, status = mergedOptions.status;
        this.title = title;
        this.saving = saving;
        this.saved = saved;
        this.status = status;
        this.setPrimaryButton(buttons ? buttons.primary : undefined);
        this.setSecondaryButtons(buttons ? buttons.secondary : undefined);
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    MarketingExternalActivityTopBar.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    MarketingExternalActivityTopBar.prototype.getButton = function (button, subgroups, updateCb) {
        return buttonHelper_1.getSingleButton(this, button, subgroups, updateCb);
    };
    MarketingExternalActivityTopBar.prototype.updatePrimaryButton = function (newPayload) {
        if (!this.primary) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.primary, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    MarketingExternalActivityTopBar.prototype.updateSecondaryButtons = function (newPayload) {
        if (!this.secondary) {
            return;
        }
        var buttonToUpdate = this.secondary.find(function (action) { return action.id === newPayload.id; });
        if (!buttonToUpdate) {
            return;
        }
        var updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
        if (updated) {
            this.dispatch(Action.UPDATE);
        }
    };
    MarketingExternalActivityTopBar.prototype.setPrimaryButton = function (newOptions) {
        this.primaryOptions = this.getChildButton(newOptions, this.primaryOptions);
        this.primary = this.primaryOptions
            ? this.getButton(this.primaryOptions, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS.subgroups, this.updatePrimaryButton)
            : undefined;
    };
    MarketingExternalActivityTopBar.prototype.setSecondaryButtons = function (newOptions) {
        var _this = this;
        var newButtons = newOptions || [];
        var currentButtons = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(newButtons, currentButtons);
        this.secondary = this.secondaryOptions
            ? this.secondaryOptions.map(function (action) {
                return _this.getButton(action, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS.subgroups, _this.updateSecondaryButtons);
            })
            : undefined;
    };
    MarketingExternalActivityTopBar.prototype.updateSaving = function (saving) {
        this.saving = saving;
        this.dispatch(Action.UPDATE);
    };
    MarketingExternalActivityTopBar.prototype.updateSaved = function (saved) {
        this.saved = saved;
        this.dispatch(Action.UPDATE);
    };
    MarketingExternalActivityTopBar.prototype.updateStatus = function (newPayload) {
        this.status = newPayload;
        this.dispatch(Action.UPDATE);
    };
    MarketingExternalActivityTopBar.prototype.getChildButton = function (newAction, currentAction) {
        var newButtons = newAction ? [newAction] : [];
        var currentButtons = currentAction ? [currentAction] : [];
        var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
        return updatedButton ? updatedButton[0] : undefined;
    };
    return MarketingExternalActivityTopBar;
}(helper_1.ActionSetWithChildren));
exports.MarketingExternalActivityTopBar = MarketingExternalActivityTopBar;
function create(app, options) {
    return new MarketingExternalActivityTopBar(app, options);
}
exports.create = create;


/***/ }),

/***/ "997d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.capture = exports.openCamera = exports.create = exports.Scanner = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
/**
 * Action Types for the Features group
 * @public
 */
var Action;
(function (Action) {
    Action["OPEN_CAMERA"] = "APP::SCANNER::OPEN::CAMERA";
    Action["CAPTURE"] = "APP::SCANNER::CAPTURE";
})(Action = exports.Action || (exports.Action = {}));
/**
 * A set of Actions for displaying a Camera Scanner component
 * @public
 */
var Scanner = /** @class */ (function (_super) {
    __extends(Scanner, _super);
    function Scanner(app, options) {
        return _super.call(this, app, types_1.Group.Scanner, types_1.Group.Scanner, options ? options.id : undefined) || this;
    }
    /**
     * @public
     */
    Scanner.prototype.dispatch = function (action) {
        switch (action) {
            case Action.OPEN_CAMERA:
                this.dispatchScannerAction(Action.OPEN_CAMERA);
                break;
        }
        return this;
    };
    /**
     * @internal
     */
    Scanner.prototype.dispatchScannerAction = function (type) {
        this.app.dispatch(helper_1.actionWrapper({
            type: type,
            group: types_1.Group.Scanner,
            payload: {
                id: this.id,
            },
        }));
    };
    return Scanner;
}(helper_1.ActionSet));
exports.Scanner = Scanner;
/**
 * @public
 */
function create(app, options) {
    return new Scanner(app, options);
}
exports.create = create;
function openCamera() {
    return helper_1.actionWrapper({
        group: types_1.Group.Scanner,
        type: Action.OPEN_CAMERA,
    });
}
exports.openCamera = openCamera;
function capture() {
    return helper_1.actionWrapper({
        group: types_1.Group.Scanner,
        type: Action.CAPTURE,
    });
}
exports.capture = capture;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9c68":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonSnakeCaseGroup = exports.findMatchInEnum = exports.forEachInEnum = exports.getMergedProps = exports.updateActionFromPayload = exports.ActionSetWithChildren = exports.ActionSet = exports.isValidOptionalString = exports.isValidOptionalNumber = exports.getEventNameSpace = exports.getVersion = exports.actionWrapper = void 0;
var types_1 = __webpack_require__("db6f");
var collection_1 = __webpack_require__("c9ef");
var Error_1 = __webpack_require__("8aa1");
var constants_1 = __webpack_require__("6619");
var merge_1 = __importDefault(__webpack_require__("dca6"));
var types_2 = __webpack_require__("bdf4");
var uuid_1 = __importDefault(__webpack_require__("b85f"));
var packageJson = __webpack_require__("0630");
function actionWrapper(action) {
    return __assign(__assign({}, action), { version: getVersion(), clientInterface: {
            name: packageJson.name,
            version: getVersion(),
        } });
}
exports.actionWrapper = actionWrapper;
function getVersion() {
    return packageJson.version;
}
exports.getVersion = getVersion;
/**
 * Returns full event name with prefix, group, subgroups and type formatted with separators
 * @internal
 * */
function getEventNameSpace(group, eventName, component) {
    if (eventName.startsWith("" + constants_1.PREFIX + constants_1.SEPARATOR)) {
        return eventName;
    }
    var eventNameSpace = groupToEventNameSpace(group);
    if (component) {
        var subgroups_1 = component.subgroups, type = component.type;
        if (subgroups_1 && subgroups_1.length > 0) {
            eventNameSpace += eventNameSpace.length > 0 ? constants_1.SEPARATOR : '';
            subgroups_1.forEach(function (subgroup, index) {
                eventNameSpace += "" + subgroup.toUpperCase() + (index < subgroups_1.length - 1 ? constants_1.SEPARATOR : '');
            });
        }
        if (type !== group && type) {
            eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : '') + type.toUpperCase();
        }
    }
    if (eventNameSpace) {
        eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : '') + eventName.toUpperCase();
    }
    return "" + constants_1.PREFIX + constants_1.SEPARATOR + eventNameSpace;
}
exports.getEventNameSpace = getEventNameSpace;
function isValidOptionalNumber(value) {
    return value === null || value === undefined || typeof value === 'number';
}
exports.isValidOptionalNumber = isValidOptionalNumber;
function isValidOptionalString(value) {
    return value === null || value === undefined || typeof value === 'string';
}
exports.isValidOptionalString = isValidOptionalString;
var ActionSet = /** @class */ (function () {
    function ActionSet(app, type, group, id) {
        var _this = this;
        this.app = app;
        this.type = type;
        this.group = group;
        this.subgroups = [];
        this.subscriptions = [];
        if (!app) {
            Error_1.throwError(Error_1.Action.INVALID_ACTION, 'Missing required `app`');
        }
        this.id = id || uuid_1.default();
        this.defaultGroup = group;
        var defaultSet = this.set;
        this.set = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!_this.app.hooks) {
                return defaultSet.apply(_this, args);
            }
            return (_a = _this.app.hooks).run.apply(_a, __spreadArrays([types_1.LifecycleHook.UpdateAction, defaultSet, _this], args));
        };
    }
    ActionSet.prototype.set = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
    };
    Object.defineProperty(ActionSet.prototype, "component", {
        get: function () {
            return {
                id: this.id,
                subgroups: this.subgroups,
                type: this.type,
            };
        },
        enumerable: false,
        configurable: true
    });
    ActionSet.prototype.updateSubscription = function (subscriptionToRemove, group, subgroups) {
        var eventType = subscriptionToRemove.eventType, callback = subscriptionToRemove.callback, component = subscriptionToRemove.component;
        var currentIndex;
        currentIndex = this.subscriptions.findIndex(function (subscription) { return subscription === subscriptionToRemove; });
        if (currentIndex >= 0) {
            this.subscriptions[currentIndex].unsubscribe();
        }
        else {
            currentIndex = undefined;
        }
        this.group = group;
        this.subgroups = subgroups;
        Object.assign(component, { subgroups: this.subgroups });
        return this.subscribe(eventType, callback, component, currentIndex);
    };
    ActionSet.prototype.error = function (callback) {
        var _this = this;
        var subscriptionIndices = [];
        forEachInEnum(Error_1.Action, function (eventNameSpace) {
            // Keep track of subscription index so we can call unsubscribe later
            // This ensure it will continue to work even when the subscription has been updated
            subscriptionIndices.push(_this.subscriptions.length);
            _this.subscribe(eventNameSpace, callback);
        });
        return function () {
            var subscriptionsToRemove = subscriptionIndices.map(function (index) { return _this.subscriptions[index]; });
            subscriptionsToRemove.forEach(function (toRemove) {
                collection_1.removeFromCollection(_this.subscriptions, toRemove, function (removed) {
                    removed.unsubscribe();
                });
            });
        };
    };
    ActionSet.prototype.subscribe = function (eventName, callback, component, currentIndex) {
        var _this = this;
        var eventComponent = component || this.component;
        var eventType = eventName.toUpperCase();
        var boundedCallback = typeof currentIndex === 'number' ? callback : callback.bind(this);
        var eventNameSpace;
        if (Error_1.isErrorEventName(eventName)) {
            eventNameSpace = getEventNameSpace(types_2.Group.Error, eventName, __assign(__assign({}, eventComponent), { type: '' }));
        }
        else {
            eventNameSpace = getEventNameSpace(this.group, eventName, eventComponent);
        }
        var unsubscribe = this.app.subscribe(eventNameSpace, boundedCallback, component ? component.id : this.id);
        var subscription = {
            eventType: eventType,
            unsubscribe: unsubscribe,
            callback: boundedCallback,
            component: eventComponent,
            updateSubscribe: function (group, subgroups) {
                return _this.updateSubscription.call(_this, subscription, group, subgroups);
            },
        };
        if (typeof currentIndex === 'number' &&
            currentIndex >= 0 &&
            currentIndex < this.subscriptions.length) {
            this.subscriptions[currentIndex] = subscription;
        }
        else {
            this.subscriptions.push(subscription);
        }
        return unsubscribe;
    };
    ActionSet.prototype.unsubscribe = function (resetOnly) {
        if (resetOnly === void 0) { resetOnly = false; }
        unsubscribeActions(this.subscriptions, this.defaultGroup, resetOnly);
        return this;
    };
    return ActionSet;
}());
exports.ActionSet = ActionSet;
var ActionSetWithChildren = /** @class */ (function (_super) {
    __extends(ActionSetWithChildren, _super);
    function ActionSetWithChildren() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    ActionSetWithChildren.prototype.unsubscribe = function (unsubscribeChildren, resetParentOnly) {
        if (unsubscribeChildren === void 0) { unsubscribeChildren = true; }
        if (resetParentOnly === void 0) { resetParentOnly = false; }
        unsubscribeActions(this.subscriptions, this.defaultGroup, resetParentOnly);
        this.children.forEach(function (child) {
            if (ActionSetWithChildren.prototype.isPrototypeOf(child)) {
                child.unsubscribe(unsubscribeChildren, !unsubscribeChildren);
            }
            else {
                child.unsubscribe(!unsubscribeChildren);
            }
        });
        return this;
    };
    ActionSetWithChildren.prototype.getChild = function (id) {
        var childIndex = this.children.findIndex(function (child) { return child.id === id; });
        return childIndex >= 0 ? this.children[childIndex] : undefined;
    };
    ActionSetWithChildren.prototype.getChildIndex = function (id) {
        return this.children.findIndex(function (child) { return child.id === id; });
    };
    ActionSetWithChildren.prototype.getChildSubscriptions = function (id, eventType) {
        return this.subscriptions.filter(function (sub) { return sub.component.id === id && (!eventType || eventType === sub.eventType); });
    };
    ActionSetWithChildren.prototype.addChild = function (child, group, subgroups) {
        var _this = this;
        var subscriptions = child.subscriptions;
        var existingChild = this.getChild(child.id);
        // Add child if it doesn't already exist
        if (!existingChild) {
            this.children.push(child);
        }
        if (!subscriptions || (group === child.group && subgroups === child.subgroups)) {
            return this;
        }
        subscriptions.forEach(function (subscription) {
            var updateSubscribe = subscription.updateSubscribe;
            updateSubscribe(group, subgroups);
        });
        // Update child's group and subgroups
        Object.assign(child, { group: group, subgroups: subgroups });
        // Update child's children subscriptions
        if (ActionSetWithChildren.prototype.isPrototypeOf(child)) {
            child.children.forEach(function (c) { return _this.addChild(c, group, subgroups); });
        }
        return this;
    };
    ActionSetWithChildren.prototype.removeChild = function (id) {
        var _this = this;
        collection_1.removeFromCollection(this.children, this.getChild(id), function () {
            var toBeRemoved = _this.subscriptions.filter(function (subs) { return subs.component.id === id; });
            toBeRemoved.forEach(function (toRemove) {
                collection_1.removeFromCollection(_this.subscriptions, toRemove, function (removed) {
                    removed.unsubscribe();
                });
            });
        });
        return this;
    };
    ActionSetWithChildren.prototype.subscribeToChild = function (child, eventName, callback) {
        var _this = this;
        var boundedCallback = callback.bind(this);
        if (eventName instanceof Array) {
            eventName.forEach(function (e) { return _this.subscribeToChild(child, e, callback); });
            return this;
        }
        if (typeof eventName !== 'string') {
            return this;
        }
        var eventType = eventName.toUpperCase();
        var currentSubscriptions = this.getChildSubscriptions(child.id, eventType);
        if (currentSubscriptions.length > 0) {
            // Subscription is already there, simply update it
            currentSubscriptions.forEach(function (subs) { return subs.updateSubscribe(_this.group, child.subgroups); });
        }
        else {
            var childComponent = {
                id: child.id,
                subgroups: child.subgroups,
                type: child.type,
            };
            this.subscribe(eventType, boundedCallback, childComponent);
        }
        return this;
    };
    ActionSetWithChildren.prototype.getUpdatedChildActions = function (newActions, currentActions) {
        if (newActions.length === 0) {
            while (currentActions.length > 0) {
                var action = currentActions.pop();
                if (!action) {
                    break;
                }
                this.removeChild(action.id);
            }
            return undefined;
        }
        // Only allow unique actions
        var uniqueActions = newActions.filter(function (action, index, actionsArr) { return index === actionsArr.indexOf(action); });
        var newActionIds = uniqueActions.map(function (action) { return action.id; });
        // Remove unused actions
        var unusedActions = currentActions.filter(function (action) {
            return newActionIds.indexOf(action.id) < 0;
        });
        while (unusedActions.length > 0) {
            var action = unusedActions.pop();
            if (!action) {
                break;
            }
            this.removeChild(action.id);
        }
        return uniqueActions;
    };
    return ActionSetWithChildren;
}(ActionSet));
exports.ActionSetWithChildren = ActionSetWithChildren;
function unsubscribeActions(subscriptions, defaultGroup, reassign) {
    if (reassign === void 0) { reassign = false; }
    subscriptions.forEach(function (subscription) {
        if (reassign) {
            var updateSubscribe = subscription.updateSubscribe;
            // TODO: Support cases where we don't wipe out group and subgroups to defaults
            updateSubscribe(defaultGroup, []);
        }
        else {
            var unsubscribe = subscription.unsubscribe;
            unsubscribe();
        }
    });
    if (!reassign) {
        subscriptions.length = 0;
    }
}
function updateActionFromPayload(action, newProps) {
    var id = action.id;
    if (id === newProps.id) {
        // Merge new properties
        Object.assign(action, getMergedProps(action, newProps));
        return true;
    }
    return false;
}
exports.updateActionFromPayload = updateActionFromPayload;
function getMergedProps(props, newProps) {
    var merged = merge_1.default(props, newProps);
    if (!merged) {
        // tslint:disable-next-line:prefer-object-spread
        var cloned = Object.assign(props, newProps);
        return cloned;
    }
    return merged;
}
exports.getMergedProps = getMergedProps;
function forEachInEnum(types, callback) {
    Object.keys(types).forEach(function (key) {
        callback(types[key]);
    });
}
exports.forEachInEnum = forEachInEnum;
function findMatchInEnum(types, lookup) {
    var match = Object.keys(types).find(function (key) {
        return lookup === types[key];
    });
    return match ? types[match] : undefined;
}
exports.findMatchInEnum = findMatchInEnum;
function camelCaseToSnakeCase(value) {
    return value.replace(/([A-Z])/g, function (matcher, _val, index) {
        return "" + (index !== 0 ? '_' : '') + matcher[0].toLowerCase();
    });
}
exports.NonSnakeCaseGroup = [
    types_2.Group.AuthCode,
    types_2.Group.Button,
    types_2.Group.ButtonGroup,
    types_2.Group.Cart,
    types_2.Group.Error,
    types_2.Group.Features,
    types_2.Group.Fullscreen,
    types_2.Group.Link,
    types_2.Group.Loading,
    types_2.Group.Menu,
    types_2.Group.Modal,
    types_2.Group.Navigation,
    types_2.Group.Pos,
    types_2.Group.Print,
    types_2.Group.ResourcePicker,
    types_2.Group.Scanner,
    types_2.Group.SessionToken,
    types_2.Group.Share,
    types_2.Group.TitleBar,
    types_2.Group.Toast,
];
/**
 * Maps the group name to its event name
 * @internal
 * @remarks - This method is necessary for the new pattern of using snake case
 * which makes it more readable and easier to reconstruct the group from an event name.
 * Example: `ContextualSaveBar` becomes `CONTEXTUAL_SAVE_BAR`
 * */
function groupToEventNameSpace(group) {
    if (exports.NonSnakeCaseGroup.includes(group)) {
        return group.toUpperCase();
    }
    return camelCaseToSnakeCase(group).toUpperCase();
}


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
var RE = function (s, f) {
  return RegExp(s, f);
};

exports.UNSUPPORTED_Y = fails(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a0f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.NavigationMenu = exports.update = exports.Action = void 0;
var AppLink_1 = __webpack_require__("e4ca");
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var SUBGROUPS = ['Navigation_Menu'];
var Action;
(function (Action) {
    Action["UPDATE"] = "APP::MENU::NAVIGATION_MENU::UPDATE";
    Action["LINK_UPDATE"] = "APP::MENU::NAVIGATION_MENU::LINK::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Menu,
        type: Action.UPDATE,
    });
}
exports.update = update;
var NavigationMenu = /** @class */ (function (_super) {
    __extends(NavigationMenu, _super);
    function NavigationMenu(app, options) {
        var _this = _super.call(this, app, 'Navigation_Menu', types_1.Group.Menu) || this;
        _this.items = [];
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(NavigationMenu.prototype, "options", {
        get: function () {
            return {
                items: this.itemsOptions,
                active: this.activeOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigationMenu.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    NavigationMenu.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var items = mergedOptions.items, active = mergedOptions.active;
        this.setItems(items);
        this.activeOptions = active;
        this.active = active && active.id;
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    NavigationMenu.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    NavigationMenu.prototype.updateItem = function (newPayload) {
        if (!this.items) {
            return;
        }
        var itemToUpdate = this.items.find(function (action) { return action.id === newPayload.id; });
        if (!itemToUpdate) {
            return;
        }
        if (helper_1.updateActionFromPayload(itemToUpdate, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    NavigationMenu.prototype.setItems = function (newOptions) {
        var _this = this;
        var newItems = newOptions || [];
        var currentItems = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(newItems, currentItems);
        this.items = this.itemsOptions
            ? this.itemsOptions.map(function (action) {
                _this.addChild(action, _this.group, SUBGROUPS);
                _this.subscribeToChild(action, AppLink_1.Action.UPDATE, _this.updateItem);
                return action.payload;
            })
            : [];
    };
    return NavigationMenu;
}(helper_1.ActionSetWithChildren));
exports.NavigationMenu = NavigationMenu;
function create(app, options) {
    return new NavigationMenu(app, options);
}
exports.create = create;


/***/ }),

/***/ "a3df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("eebb"), exports);
__exportStar(__webpack_require__("dc05"), exports);


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b708":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fullPageLoad = exports.skeletonPageLoad = exports.Action = void 0;
var types_1 = __webpack_require__("bdf4");
var helper_1 = __webpack_require__("9c68");
var Action;
(function (Action) {
    Action["SKELETON_PAGE_LOAD"] = "APP::PERFORMANCE::SKELETON_PAGE_LOAD";
    Action["FULL_PAGE_LOAD"] = "APP::PERFORMANCE::FULL_PAGE_LOAD";
})(Action = exports.Action || (exports.Action = {}));
function skeletonPageLoad() {
    return helper_1.actionWrapper({
        group: types_1.Group.Performance,
        type: Action.SKELETON_PAGE_LOAD,
    });
}
exports.skeletonPageLoad = skeletonPageLoad;
function fullPageLoad() {
    return helper_1.actionWrapper({
        group: types_1.Group.Performance,
        type: Action.FULL_PAGE_LOAD,
    });
}
exports.fullPageLoad = fullPageLoad;


/***/ }),

/***/ "b85f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUuid = void 0;
/**
 * Convert a number or array of integers to a string of padded hex octets.
 */
function asHex(value) {
    return Array.from(value)
        .map(function (i) { return ("00" + i.toString(16)).slice(-2); })
        .join('');
}
/**
 * Attempt to securely generate random bytes/
 */
function getRandomBytes(size) {
    // SPRNG
    if (typeof Uint8Array === 'function' && typeof window === 'object' && window.crypto) {
        var buffer = new Uint8Array(size);
        var randomValues = window.crypto.getRandomValues(buffer);
        if (randomValues) {
            return randomValues;
        }
    }
    // Insecure random
    return Array.from(new Array(size), function () { return (Math.random() * 255) | 0; });
}
/**
 * Generate a RFC4122-compliant v4 UUID.
 *
 * @see http://www.ietf.org/rfc/rfc4122.txt
 */
function generateUuid() {
    var version = 64;
    var clockSeqHiAndReserved = getRandomBytes(1);
    var timeHiAndVersion = getRandomBytes(2);
    clockSeqHiAndReserved[0] &= 63 | 128;
    // tslint:disable-next-line:binary-expression-operand-order
    timeHiAndVersion[0] &= 15 | version;
    return [
        asHex(getRandomBytes(4)),
        '-',
        asHex(getRandomBytes(2)),
        '-',
        asHex(timeHiAndVersion),
        '-',
        asHex(clockSeqHiAndReserved),
        asHex(getRandomBytes(1)),
        '-',
        asHex(getRandomBytes(6)),
    ].join('');
}
exports.generateUuid = generateUuid;
// Default
exports.default = generateUuid;


/***/ }),

/***/ "b9df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFrameless = exports.isDevelopmentClient = exports.isProduction = exports.isDevelopment = exports.isClient = exports.isServer = void 0;
exports.isServer = typeof window === 'undefined';
exports.isClient = !exports.isServer;
exports.isDevelopment = typeof process !== 'undefined' && Object({"NODE_ENV":"production","BASE_URL":"/"}) && "production" === 'development';
exports.isProduction = !exports.isDevelopment;
exports.isDevelopmentClient = exports.isDevelopment && exports.isClient;
exports.isFrameless = exports.isClient && ((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.indexOf(' Frameless ')) > 0;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "bdf4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentType = exports.Group = void 0;
/**
 * Various action groups.
 * @public
 */
var Group;
(function (Group) {
    Group["AuthCode"] = "AuthCode";
    Group["Button"] = "Button";
    Group["ButtonGroup"] = "ButtonGroup";
    Group["Cart"] = "Cart";
    Group["Client"] = "Client";
    Group["ContextualSaveBar"] = "ContextualSaveBar";
    Group["Error"] = "Error";
    Group["Features"] = "Features";
    Group["FeedbackModal"] = "FeedbackModal";
    Group["Fullscreen"] = "Fullscreen";
    Group["LeaveConfirmation"] = "LeaveConfirmation";
    Group["Link"] = "Link";
    Group["Loading"] = "Loading";
    Group["Menu"] = "Menu";
    Group["Modal"] = "Modal";
    Group["Navigation"] = "Navigation";
    Group["Performance"] = "Performance";
    Group["Pos"] = "Pos";
    Group["Print"] = "Print";
    Group["ResourcePicker"] = "Resource_Picker";
    Group["Scanner"] = "Scanner";
    Group["SessionToken"] = "SessionToken";
    Group["Share"] = "Share";
    Group["TitleBar"] = "TitleBar";
    Group["Toast"] = "Toast";
    Group["MarketingExternalActivityTopBar"] = "MarketingExternalActivityTopBar";
})(Group = exports.Group || (exports.Group = {}));
/**
 * @internal
 */
var ComponentType;
(function (ComponentType) {
    ComponentType["Button"] = "Button";
    ComponentType["ButtonGroup"] = "ButtonGroup";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));


/***/ }),

/***/ "bf81":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c029":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.respond = exports.request = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["REQUEST"] = "APP::AUTH_CODE::REQUEST";
    Action["RESPOND"] = "APP::AUTH_CODE::RESPOND";
})(Action = exports.Action || (exports.Action = {}));
function request(id) {
    return helper_1.actionWrapper({
        group: types_1.Group.AuthCode,
        type: Action.REQUEST,
        payload: { id: id },
    });
}
exports.request = request;
function respond(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.AuthCode,
        type: Action.RESPOND,
    });
}
exports.respond = respond;


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c49b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.LeaveConfirmation = exports.confirm = exports.disable = exports.enable = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
/**
 * Action for the Leave Confirmation group
 * @public
 */
var Action;
(function (Action) {
    Action["ENABLE"] = "APP::LEAVE_CONFIRMATION::ENABLE";
    Action["DISABLE"] = "APP::LEAVE_CONFIRMATION::DISABLE";
    Action["CONFIRM"] = "APP::LEAVE_CONFIRMATION::CONFIRM";
})(Action = exports.Action || (exports.Action = {}));
function enable(payload) {
    if (payload === void 0) { payload = {}; }
    return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload: payload,
        type: Action.ENABLE,
    });
}
exports.enable = enable;
function disable(payload) {
    if (payload === void 0) { payload = {}; }
    return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload: payload,
        type: Action.DISABLE,
    });
}
exports.disable = disable;
function confirm(payload) {
    if (payload === void 0) { payload = {}; }
    return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload: payload,
        type: Action.CONFIRM,
    });
}
exports.confirm = confirm;
/**
 * Leave Confirmation action set
 */
var LeaveConfirmation = /** @class */ (function (_super) {
    __extends(LeaveConfirmation, _super);
    /**
     * Returns a new instance of a Leave Confirmation action set
     * @param app the client application
     */
    function LeaveConfirmation(app, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, app, types_1.Group.LeaveConfirmation, types_1.Group.LeaveConfirmation) || this;
        _this.options = options;
        _this.set(options);
        return _this;
    }
    Object.defineProperty(LeaveConfirmation.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    LeaveConfirmation.prototype.set = function (options) {
        this.options = helper_1.getMergedProps(this.options, options);
        return this;
    };
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    LeaveConfirmation.prototype.dispatch = function (action) {
        switch (action) {
            case Action.ENABLE:
                var enableAction = enable(this.payload);
                this.app.dispatch(enableAction);
                break;
            case Action.DISABLE:
                var disableAction = disable(this.payload);
                this.app.dispatch(disableAction);
                break;
            case Action.CONFIRM:
                var confirmAction = confirm(this.payload);
                this.app.dispatch(confirmAction);
                break;
        }
        return this;
    };
    return LeaveConfirmation;
}(helper_1.ActionSet));
exports.LeaveConfirmation = LeaveConfirmation;
/**
 * Returns a new instance of a Leave Confirmation action set
 * @param app the client application
 */
function create(app, options) {
    if (options === void 0) { options = {}; }
    return new LeaveConfirmation(app, options);
}
exports.create = create;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransportListener = exports.fromWindow = exports.fromFrame = exports.Context = void 0;
var Error_1 = __webpack_require__("8aa1");
var validator_1 = __webpack_require__("741c");
var types_1 = __webpack_require__("db6f");
var collection_1 = __webpack_require__("c9ef");
var env_1 = __webpack_require__("b9df");
var Context;
(function (Context) {
    Context["Modal"] = "Modal";
    Context["Main"] = "Main";
})(Context = exports.Context || (exports.Context = {}));
/**
 * Create a MessageTransport from an IFrame.
 * @remarks
 * Used on the host-side to create a postMessage MessageTransport.
 * @beta
 */
function fromFrame(frame, localOrigin, context) {
    var handlers = [];
    if (typeof frame === 'undefined' || !frame.ownerDocument || !frame.ownerDocument.defaultView) {
        throw Error_1.fromAction('App frame is undefined', Error_1.AppActionType.WINDOW_UNDEFINED);
    }
    var parent = frame.ownerDocument.defaultView;
    parent.addEventListener('message', function (event) {
        if (!validator_1.isAppMessage(event)) {
            return;
        }
        if (event.origin !== localOrigin) {
            var contentWindow = frame.contentWindow;
            if (contentWindow) {
                var errorMessage = "Message origin '" + event.origin + "' does not match app origin '" + localOrigin + "'.";
                var payload = Error_1.invalidOriginAction(errorMessage);
                var message = {
                    type: 'dispatch',
                    payload: payload,
                };
                contentWindow.postMessage(message, event.origin);
            }
            return;
        }
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            handler(event);
        }
    });
    return {
        context: context,
        localOrigin: localOrigin,
        frameWindow: frame.contentWindow,
        hostFrame: parent,
        dispatch: function (message) {
            var contentWindow = frame.contentWindow;
            if (contentWindow) {
                contentWindow.postMessage(message, localOrigin);
            }
        },
        subscribe: function (handler) {
            return collection_1.addAndRemoveFromCollection(handlers, handler);
        },
    };
}
exports.fromFrame = fromFrame;
/**
 * Create a MessageTransport from a parent window.
 * @remarks
 * Used on the client-side to create a postMessage MessageTransport.
 * @internalremarks
 * In frameless mode, message should be dispatched via SmartWebView.handleMessage instead of postMessage.
 * @beta
 */
function fromWindow(contentWindow, localOrigin) {
    var handlers = [];
    if (typeof window !== undefined) {
        window.addEventListener('message', function (event) {
            if ((window === contentWindow && !env_1.isFrameless) ||
                event.source !== contentWindow ||
                !(validator_1.isAppBridgeAction(event.data.payload) || validator_1.isAppMessage(event))) {
                return;
            }
            for (var _i = 0, handlers_2 = handlers; _i < handlers_2.length; _i++) {
                var handler = handlers_2[_i];
                handler(event);
            }
        });
    }
    return {
        localOrigin: localOrigin,
        hostFrame: contentWindow,
        dispatch: function (message) {
            var _a;
            if (!((_a = message.source) === null || _a === void 0 ? void 0 : _a.host)) {
                return;
            }
            if (env_1.isFrameless && window && window.SmartWebView) {
                window.SmartWebView.handleMessage('frameless://fromClient', JSON.stringify(message));
                return;
            }
            var messageOrigin = new URL("https://" + message.source.host).origin;
            contentWindow.postMessage(message, messageOrigin);
        },
        subscribe: function (handler) {
            return collection_1.addAndRemoveFromCollection(handlers, handler);
        },
    };
}
exports.fromWindow = fromWindow;
function createTransportListener() {
    var listeners = [];
    var actionListeners = {};
    function createSubscribeHandler(dispatcher) {
        function subscribe() {
            if (arguments.length < 2) {
                // eslint-disable-next-line prefer-rest-params
                return collection_1.addAndRemoveFromCollection(listeners, { callback: arguments[0] });
            }
            // eslint-disable-next-line prefer-rest-params
            var _a = Array.from(arguments), type = _a[0], callback = _a[1], id = _a[2];
            var actionCallback = { callback: callback, id: id };
            var payload = { type: type, id: id };
            if (!Object.prototype.hasOwnProperty.call(actionListeners, type)) {
                actionListeners[type] = [];
            }
            if (dispatcher) {
                dispatcher(types_1.MessageType.Subscribe, payload);
            }
            return collection_1.addAndRemoveFromCollection(actionListeners[type], actionCallback, function () {
                if (dispatcher) {
                    dispatcher(types_1.MessageType.Unsubscribe, payload);
                }
            });
        }
        return subscribe;
    }
    return {
        createSubscribeHandler: createSubscribeHandler,
        handleMessage: function (message) {
            listeners.forEach(function (listener) { return listener.callback(message); });
        },
        handleActionDispatch: function (_a) {
            var type = _a.type, payload = _a.payload;
            var hasCallback = false;
            if (Object.prototype.hasOwnProperty.call(actionListeners, type)) {
                for (var _i = 0, _b = actionListeners[type]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    var id = listener.id, callback = listener.callback;
                    var matchId = payload && payload.id === id;
                    if (matchId || !id) {
                        callback(payload);
                        hasCallback = true;
                    }
                }
            }
            return hasCallback;
        },
    };
}
exports.createTransportListener = createTransportListener;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c9ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCollection = exports.addAndRemoveFromCollection = void 0;
/**
 * Add an item to a collection, return a function that can then be used to
 * remove the item from the collection. Optionally accepting a callback that is
 * invoked when the item is removed from the collection.
 *
 * @internal
 */
function addAndRemoveFromCollection(collection, item, then) {
    collection.push(item);
    return function () {
        return removeFromCollection(collection, item, then);
    };
}
exports.addAndRemoveFromCollection = addAndRemoveFromCollection;
/**
 * Remove the item from the collection. Optionally accepting a callback that is
 * invoked when the item is removed from the collection.
 *
 * @internal
 */
function removeFromCollection(collection, item, then) {
    var idx = collection.findIndex(function (i) { return i === item; });
    if (idx >= 0) {
        collection.splice(idx, 1);
        if (then) {
            then(item);
        }
        return true;
    }
    return false;
}
exports.removeFromCollection = removeFromCollection;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cf05":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.82b9c7a5.png";

/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collection_1 = __webpack_require__("c9ef");
/**
 * Shopify App Bridge can be extended with hooks, which run when actions are dispatched and updated.
 * Hooks are middleware functions that can modify or cancel actions.
 *
 * The [validation middleware](../validate/README.md) is implemented using hooks.
 *
 * @remarks
 * Here’s an example hook that modifies all Toast show actions to have a duration of five seconds.
 *
 * ```ts
 * import createApp, {LifecycleHook, DispatchActionHook} from '@shopify/app-bridge';
 * import {Toast} from '@shopify/app-bridge/actions'
 *
 * const app = createApp({apiKey: API_KEY, host: HOST});
 *
 * function makeToastsFiveSeconds: DispatchActionHook(next) {
 *   return function(action){
 *       if(action.type === Toast.Action.SHOW) {
 *         const modifiedAction = {
 *           ...action,
 *           payload: {
 *             ...action.payload,
 *             duration: 5000,
 *           },
 *         };
 *         return next(modifiedAction);
 *       } else {
 *         // don’t modify non-Toast actions
 *         return next(action);
 *       }
 *   }
 * }
 *
 * app.hooks.set(LifecycleHook.DispatchAction, makeToastsFiveSeconds);
 * ```
 *
 * The hook function `makeToastsFiveSeconds()` takes a `next()` function as its argument.
 * The hook function returns an anonymous function, which takes the action being dispatched as its argument.
 *
 * To modify an action, call `next()` with the modified action, as in the example.
 * To cancel an action, don’t call `next()`, and the action will not be dispatched.
 */
var Hooks = /** @class */ (function () {
    function Hooks() {
        this.map = {};
    }
    Hooks.prototype.set = function (hook, handler) {
        if (!this.map.hasOwnProperty(hook)) {
            this.map[hook] = [];
        }
        var value = { handler: handler, remove: function () { } };
        var remove = collection_1.addAndRemoveFromCollection(this.map[hook], value);
        value = { handler: handler, remove: remove };
        return remove;
    };
    Hooks.prototype.get = function (hook) {
        var value = this.map[hook];
        return value ? value.map(function (val) { return val.handler; }) : undefined;
    };
    Hooks.prototype.run = function (hook, final, context) {
        var initialArgs = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            initialArgs[_i - 3] = arguments[_i];
        }
        var index = 0;
        var handlers = this.get(hook) || [];
        function handler() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var childHandler = handlers[index++];
            if (childHandler) {
                return childHandler(handler).apply(context, args);
            }
            return final.apply(context, args);
        }
        return handler.apply(context, initialArgs);
    };
    return Hooks;
}());
exports.default = Hooks;


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d3a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getWindow = exports.getLocation = exports.redirect = exports.shouldRedirect = void 0;
function shouldRedirect(frame) {
    return frame === window;
}
exports.shouldRedirect = shouldRedirect;
function redirect(url) {
    var location = getLocation();
    if (!location) {
        return;
    }
    location.assign(url);
}
exports.redirect = redirect;
function getLocation() {
    return hasWindow() ? window.location : undefined;
}
exports.getLocation = getLocation;
function getWindow() {
    return hasWindow() ? window : undefined;
}
exports.getWindow = getWindow;
function hasWindow() {
    return typeof window !== 'undefined';
}


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dabe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleButton = void 0;
var Button_1 = __webpack_require__("45dd");
function getSingleButton(action, button, subgroups, updateCb) {
    action.addChild(button, action.group, subgroups);
    action.subscribeToChild(button, Button_1.Action.UPDATE, updateCb);
    return button.payload;
}
exports.getSingleButton = getSingleButton;


/***/ }),

/***/ "db6f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LifecycleHook = exports.MessageType = exports.PermissionType = exports.isV1Config = void 0;
/**
 * @internal
 * @param config
 */
function isV1Config(config) {
    return config.shopOrigin !== undefined;
}
exports.isV1Config = isV1Config;
/**
 * @internal
 */
var PermissionType;
(function (PermissionType) {
    PermissionType["Dispatch"] = "Dispatch";
    PermissionType["Subscribe"] = "Subscribe";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
/**
 * @internal
 */
var MessageType;
(function (MessageType) {
    MessageType["GetState"] = "getState";
    MessageType["Dispatch"] = "dispatch";
    MessageType["Subscribe"] = "subscribe";
    MessageType["Unsubscribe"] = "unsubscribe";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 *
 * There are two types of hooks: `LifecycleHook.DispatchAction` and `LifecycleHook.UpdateAction`.
 *
 * @remarks
 * `DispatchAction` hooks are run when an action is dispatched with the `.dispatch()` function:
 *
 * ```js
 * const toastNotice = Toast.create(app, {message: 'Product saved'});
 * toastNotice.dispatch(Toast.Action.SHOW);
 * ```
 *
 * `UpdateAction` hooks are run when an action is updated, using the `.set()` function:
 *
 * ```js
 * toastNotice.set({message: 'Product could not be saved', isError: true});
 * ```
 *
 * @public
 */
var LifecycleHook;
(function (LifecycleHook) {
    LifecycleHook["UpdateAction"] = "UpdateAction";
    LifecycleHook["DispatchAction"] = "DispatchAction";
})(LifecycleHook = exports.LifecycleHook || (exports.LifecycleHook = {}));


/***/ }),

/***/ "dc05":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
/**
 * Action Types for the Features group
 * @public
 */
var Action;
(function (Action) {
    Action["UPDATE"] = "APP::FEATURES::UPDATE";
    Action["REQUEST"] = "APP::FEATURES::REQUEST";
    Action["REQUEST_UPDATE"] = "APP::FEATURES::REQUEST::UPDATE";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "dca6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a deeply merged object with properties from the 2 provided objects
 * @remarks - Only deeply merge objects. The second argument overrides the
 * first if it is provided as `null`, `undefined` or an array.
 * @public
 * */
function mergeProps(obj, newObj) {
    if (newObj == null) {
        return newObj;
    }
    // If setting to a different prototype or a non-object or non-array, don't merge any props
    if (typeof obj === 'undefined' ||
        !Object.getPrototypeOf(obj).isPrototypeOf(newObj) ||
        (newObj.constructor.name !== 'Object' && newObj.constructor.name !== 'Array')) {
        return newObj;
    }
    var clone = {};
    Object.keys(newObj).forEach(function (key) {
        var exists = obj.hasOwnProperty(key);
        if (!exists) {
            clone[key] = newObj[key];
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            clone[key] = mergeProps(obj[key], newObj[key]);
        }
        else {
            clone[key] = newObj[key];
        }
    });
    // Copy old props that are not present in new object only if this is a simple object
    Object.keys(obj).forEach(function (key) {
        var exists = newObj.hasOwnProperty(key);
        if (!exists) {
            clone[key] = obj[key];
        }
    });
    // Set prototype of cloned object to match original
    Object.setPrototypeOf(clone, Object.getPrototypeOf(obj));
    return clone;
}
exports.default = mergeProps;


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e4ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.AppLink = exports.update = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Redirect_1 = __webpack_require__("680e");
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
function update(group, component, updatePayload) {
    var id = component.id;
    var label = updatePayload.label, destination = updatePayload.destination;
    var linkPayload = __assign(__assign({}, updatePayload), { id: id,
        label: label,
        destination: destination });
    return helper_1.actionWrapper({
        group: group,
        type: helper_1.getEventNameSpace(group, Action.UPDATE, component),
        payload: linkPayload,
    });
}
exports.update = update;
var AppLink = /** @class */ (function (_super) {
    __extends(AppLink, _super);
    function AppLink(app, options) {
        var _this = _super.call(this, app, types_1.Group.Link, types_1.Group.Link) || this;
        _this.label = '';
        _this.destination = '';
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(AppLink.prototype, "options", {
        get: function () {
            var _a = this, label = _a.label, destination = _a.destination;
            return {
                label: label,
                destination: destination,
                redirectType: Redirect_1.Action.APP,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppLink.prototype, "payload", {
        get: function () {
            var _a = this.options, label = _a.label, destination = _a.destination, redirectType = _a.redirectType;
            var path = destination;
            return {
                id: this.id,
                label: label,
                destination: { path: path },
                redirectType: redirectType,
            };
        },
        enumerable: false,
        configurable: true
    });
    AppLink.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var _a = helper_1.getMergedProps(this.options, options), label = _a.label, destination = _a.destination;
        this.label = label;
        this.destination = destination;
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    AppLink.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                var updateAction = update(this.group, this.component, this.payload);
                this.app.dispatch(updateAction);
                break;
        }
        return this;
    };
    return AppLink;
}(helper_1.ActionSet));
exports.AppLink = AppLink;
function create(app, options) {
    return new AppLink(app, options);
}
exports.create = create;


/***/ }),

/***/ "e72f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_547d826b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bf81");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_547d826b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_547d826b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e858":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Toast = exports.clear = exports.show = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var Action;
(function (Action) {
    Action["SHOW"] = "APP::TOAST::SHOW";
    Action["CLEAR"] = "APP::TOAST::CLEAR";
})(Action = exports.Action || (exports.Action = {}));
function show(toastMessage) {
    return helper_1.actionWrapper({
        group: types_1.Group.Toast,
        payload: toastMessage,
        type: Action.SHOW,
    });
}
exports.show = show;
function clear(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Toast,
        type: Action.CLEAR,
    });
}
exports.clear = clear;
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast(app, options) {
        var _this = _super.call(this, app, types_1.Group.Toast, types_1.Group.Toast) || this;
        _this.message = '';
        _this.duration = 5000;
        _this.set(options);
        return _this;
    }
    Object.defineProperty(Toast.prototype, "options", {
        get: function () {
            return {
                duration: this.duration,
                isError: this.isError,
                message: this.message,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Toast.prototype, "payload", {
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    Toast.prototype.set = function (options) {
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var message = mergedOptions.message, duration = mergedOptions.duration, isError = mergedOptions.isError;
        this.message = message;
        this.duration = duration;
        this.isError = isError;
        return this;
    };
    Toast.prototype.dispatch = function (action) {
        switch (action) {
            case Action.SHOW:
                var openAction = show(this.payload);
                this.app.dispatch(openAction);
                break;
            case Action.CLEAR:
                this.app.dispatch(clear({ id: this.id }));
                break;
        }
        return this;
    };
    return Toast;
}(helper_1.ActionSet));
exports.Toast = Toast;
function create(app, options) {
    return new Toast(app, options);
}
exports.create = create;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "ea39":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ContextualSaveBar = exports.discard = exports.save = exports.hide = exports.show = exports.Action = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
/**
 * ContextualSaveBar action enum
 */
var Action;
(function (Action) {
    Action["DISCARD"] = "APP::CONTEXTUAL_SAVE_BAR::DISCARD";
    Action["SAVE"] = "APP::CONTEXTUAL_SAVE_BAR::SAVE";
    Action["SHOW"] = "APP::CONTEXTUAL_SAVE_BAR::SHOW";
    Action["HIDE"] = "APP::CONTEXTUAL_SAVE_BAR::HIDE";
    Action["UPDATE"] = "APP::CONTEXTUAL_SAVE_BAR::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
function createContextBarAction(action, payload) {
    return helper_1.actionWrapper({
        group: types_1.Group.ContextualSaveBar,
        type: action,
        payload: payload,
    });
}
function show(payload) {
    return createContextBarAction(Action.SHOW, payload);
}
exports.show = show;
function hide(payload) {
    return createContextBarAction(Action.HIDE, payload);
}
exports.hide = hide;
function save(payload) {
    return createContextBarAction(Action.SAVE, payload);
}
exports.save = save;
function discard(payload) {
    return createContextBarAction(Action.DISCARD, payload);
}
exports.discard = discard;
/**
 * ContextualSaveBar action set
 */
var ContextualSaveBar = /** @class */ (function (_super) {
    __extends(ContextualSaveBar, _super);
    /**
     * Returns a new instance of a ContextualSaveBar action set
     * @param app the client application
     */
    function ContextualSaveBar(app, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, app, types_1.Group.ContextualSaveBar, types_1.Group.ContextualSaveBar) || this;
        _this.options = options;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ContextualSaveBar.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    ContextualSaveBar.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        this.options = mergedOptions;
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    ContextualSaveBar.prototype.dispatch = function (action) {
        this.app.dispatch(createContextBarAction(action, this.payload));
        return this;
    };
    return ContextualSaveBar;
}(helper_1.ActionSet));
exports.ContextualSaveBar = ContextualSaveBar;
/**
 * Returns a new instance of a ContextualSaveBar action set
 * @param app the client application
 *
 */
function create(app, options) {
    return new ContextualSaveBar(app, options);
}
exports.create = create;


/***/ }),

/***/ "ecbb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupedButton = void 0;
var ButtonGroup_1 = __webpack_require__("8302");
function getGroupedButton(action, button, subgroups, updateCb) {
    action.addChild(button, action.group, subgroups);
    var id = button.id, label = button.label, disabled = button.disabled, buttons = button.buttons;
    action.subscribeToChild(button, ButtonGroup_1.Action.UPDATE, updateCb);
    return { id: id, label: label, buttons: buttons, disabled: disabled };
}
exports.getGroupedButton = getGroupedButton;


/***/ }),

/***/ "eebb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Features = void 0;
var helper_1 = __webpack_require__("9c68");
var types_1 = __webpack_require__("bdf4");
var types_2 = __webpack_require__("dc05");
/**
 * A set of Actions for Updating, Requesting Features of AppBridge
 * @public
 */
var Features = /** @class */ (function (_super) {
    __extends(Features, _super);
    function Features(app, options) {
        return _super.call(this, app, types_1.Group.Features, types_1.Group.Features, options ? options.id : undefined) || this;
    }
    /**
     * @public
     */
    Features.prototype.dispatch = function (action, payload) {
        switch (action) {
            case types_2.Action.REQUEST:
                this.dispatchFeaturesAction(types_2.Action.REQUEST, payload);
                break;
        }
        return this;
    };
    /**
     * @internal
     */
    Features.prototype.dispatchFeaturesAction = function (type, payload) {
        this.app.dispatch(helper_1.actionWrapper({
            group: types_1.Group.Features,
            type: type,
            payload: __assign(__assign({}, (payload || {})), { id: this.id }),
        }));
    };
    return Features;
}(helper_1.ActionSet));
exports.Features = Features;
/**
 * @public
 */
function create(app, options) {
    return new Features(app, options);
}
exports.create = create;


/***/ }),

/***/ "f107":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = __webpack_require__("6e74");
__exportStar(__webpack_require__("db6f"), exports);
__exportStar(__webpack_require__("6e74"), exports);
exports.default = Client_1.createClientApp;


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79e429bf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=69262432&
var Appvue_type_template_id_69262432_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('img',{attrs:{"alt":"Vue logo","src":__webpack_require__("cf05")}}),_c('HelloWorld',{attrs:{"msg":"Welcome to Your Vue.js App"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=69262432&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79e429bf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=547d826b&scoped=true&
var HelloWorldvue_type_template_id_547d826b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_c('p',[_vm._v("Application de test, Shopify and app-bridge")])])}
var HelloWorldvue_type_template_id_547d826b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=547d826b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=547d826b&scoped=true&lang=css&
var HelloWorldvue_type_style_index_0_id_547d826b_scoped_true_lang_css_ = __webpack_require__("e72f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/HelloWorld.vue






/* normalize component */

var component = normalizeComponent(
  components_HelloWorldvue_type_script_lang_js_,
  HelloWorldvue_type_template_id_547d826b_scoped_true_render,
  HelloWorldvue_type_template_id_547d826b_scoped_true_staticRenderFns,
  false,
  null,
  "547d826b",
  null
  
)

/* harmony default export */ var HelloWorld = (component.exports);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// EXTERNAL MODULE: ./node_modules/@shopify/app-bridge/index.js
var app_bridge = __webpack_require__("29ab");
var app_bridge_default = /*#__PURE__*/__webpack_require__.n(app_bridge);

// EXTERNAL MODULE: ./node_modules/@shopify/app-bridge/actions/index.js
var actions = __webpack_require__("86b8");

// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__("72bf");
var query_string_default = /*#__PURE__*/__webpack_require__.n(query_string);

// CONCATENATED MODULE: ./src/shopify.js






 // https://habeuk.online/app/creneaux/shopify-v2?hmac=2cb74988dbe8d885f0da869451cdf37f07140e0ce5b7b8306a6e2552922dfb85&shop=stephane-kouwa.myshopify.com&timestamp=1626934463

/**
 * @param() apiKey
 * @param() redirectUri
 */

var shopify_InitShopifyAppBridge = /*#__PURE__*/function () {
  function InitShopifyAppBridge(apiKey, redirectUri) {
    _classCallCheck(this, InitShopifyAppBridge);

    this.apiKey = apiKey;
    this.redirectUri = redirectUri;
    this.query = query_string_default.a.parse(window.location.search);
    this.permissionUrl = "https://" + this.query.shop + "/admin/oauth/authorize?client_id=" + this.apiKey + "&scope=read_products,read_content&redirect_uri=" + this.redirectUri;
  }

  _createClass(InitShopifyAppBridge, [{
    key: "run",
    value: function run() {
      if (window.parent != window.top) {
        console.log("Nous sommes dans l'IFRAME");
      }

      if (window.top != window.self) {
        console.log("Nous sommes dans l'IFRAME 2");
      } // If the current window is the 'parent', change the URL by setting location.href


      if (!this.query.host && !this.query.code) {
        console.log(" Initialisation de l'application ");
        window.location.assign(this.permissionUrl);
      } else if (this.query.host && this.query.code) {
        if (window.location.host !== this.query.host) {
          console.log("Redirection vers le tableau de bord de l'utilisateur ");
          var app = app_bridge_default()({
            apiKey: this.apiKey,
            host: this.query.host,
            shopOrigin: this.query.shop,
            forceRedirect: true
          });
          actions["Redirect"].create(app).dispatch(actions["Redirect"].Action.REMOTE, "/");
        } else {
          console.log("Ouverture de l'application dans l'iframe");

          var _app = app_bridge_default()({
            apiKey: this.apiKey,
            host: this.query.host,
            shopOrigin: this.query.shop
          });

          actions["Redirect"].create(_app).dispatch(actions["Redirect"].Action.REMOTE, "/");
        }
      } else {
        console.log("Application chargée");
      }
    }
  }, {
    key: "test",
    value: function test() {
      console.log("WBU :: InitShopifyAppBridge test");
    }
  }]);

  return InitShopifyAppBridge;
}();

/* harmony default export */ var shopify = (shopify_InitShopifyAppBridge); // export default {
//   query: queryString.parse(window.location.search),
//   apiKey: "38aab48d0208f4ccd19aabbc413a2f18",
//   redirectUri:
//     "https://habeuk.online/app/creneaux/shopify/valid-permissions-v2",
//   permissionUrl:
//     "https://" +
//     this.query.shop +
//     "/admin/oauth/authorize?client_id=" +
//     this.apiKey +
//     "&scope=read_products,read_content&redirect_uri=" +
//     this.redirectUri,
// };
// const query = queryString.parse(window.location.search);
// console.log("query : ", query, "\n url : ", window.location);
// const apiKey = "38aab48d0208f4ccd19aabbc413a2f18";
// const redirectUri =
//   "https://habeuk.online/creneaux-mylittlepressing/permission";
// const permissionUrl = `https://${query.shop}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;
// console.log("window", window.self);
// console.log("window.frameElement, ", window.frameElement);
// if (window.parent != window.top) {
//   console.log("Nous sommes dans l'IFRAME");
// }
// if (window.top != window.self) {
//   console.log("Nous sommes dans l'IFRAME 2");
// }
// // If the current window is the 'parent', change the URL by setting location.href
// if (!query.host && !query.code) {
//   console.log(" Initialisation de l'application ");
//   window.location.assign(permissionUrl);
// } else if (query.host && query.code) {
//   if (window.location.host !== query.host) {
//     console.log("Redirection vers le tableau de bord de l'utilisateur ");
//     const app = createApp({
//       apiKey: apiKey,
//       host: query.host,
//       shopOrigin: query.shop,
//       forceRedirect: true,
//     });
//     Redirect.create(app).dispatch(Redirect.Action.REMOTE, "/");
//   } else {
//     console.log("Ouverture de l'application dans l'iframe");
//     const app = createApp({
//       apiKey: apiKey,
//       host: query.host,
//       shopOrigin: query.shop,
//     });
//     Redirect.create(app).dispatch(Redirect.Action.REMOTE, "/");
//   }
// } else {
//   console.log("Application chargée");
// }
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


var Sp = new shopify("38aab48d0208f4ccd19aabbc413a2f18", "https://habeuk.online/app/creneaux/shopify/valid-permissions-v2");
Sp.run();
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App",
  components: {
    HelloWorld: HelloWorld
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_69262432_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./src/main.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;
new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
  render: function render(h) {
    return h(App);
  }
}).$mount("#app");
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
//# sourceMappingURL=appCreneau.common.js.map