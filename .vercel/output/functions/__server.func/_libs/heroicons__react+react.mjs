import { r as __toESM, t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var assign = Object.assign;
	var emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	};
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result, thenable = ctor();
			thenable.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject, void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error, void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			});
			-1 === payload._status && (payload._status = 0, payload._result = thenable);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	function startTransition(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		currentTransition.types = null !== prevTransition ? prevTransition.types : null;
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	}
	function addTransitionType(type) {
		var transition = ReactSharedInternals.T;
		if (null !== transition) {
			var transitionTypes = transition.types;
			null === transitionTypes ? transition.types = [type] : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
		} else startTransition(addTransitionType.bind(null, type));
	}
	var Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.addTransitionType = addTransitionType;
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = startTransition;
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.3.0";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ArrowDownTrayIcon.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function ArrowDownTrayIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$35 = /*#__PURE__*/ import_react.forwardRef(ArrowDownTrayIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ArrowLeftIcon.js
function ArrowLeftIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$34 = /*#__PURE__*/ import_react.forwardRef(ArrowLeftIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ArrowRightIcon.js
function ArrowRightIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$33 = /*#__PURE__*/ import_react.forwardRef(ArrowRightIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/BellIcon.js
function BellIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$32 = /*#__PURE__*/ import_react.forwardRef(BellIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ChatBubbleLeftRightIcon.js
function ChatBubbleLeftRightIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" }), /*#__PURE__*/ import_react.createElement("path", { d: "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" }));
}
var ForwardRef$31 = /*#__PURE__*/ import_react.forwardRef(ChatBubbleLeftRightIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ChatBubbleLeftIcon.js
function ChatBubbleLeftIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$30 = /*#__PURE__*/ import_react.forwardRef(ChatBubbleLeftIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ChatBubbleOvalLeftEllipsisIcon.js
function ChatBubbleOvalLeftEllipsisIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$29 = /*#__PURE__*/ import_react.forwardRef(ChatBubbleOvalLeftEllipsisIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/CheckIcon.js
function CheckIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$28 = /*#__PURE__*/ import_react.forwardRef(CheckIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/Cog6ToothIcon.js
function Cog6ToothIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$27 = /*#__PURE__*/ import_react.forwardRef(Cog6ToothIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ComputerDesktopIcon.js
function ComputerDesktopIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$26 = /*#__PURE__*/ import_react.forwardRef(ComputerDesktopIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/DevicePhoneMobileIcon.js
function DevicePhoneMobileIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" }), /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$25 = /*#__PURE__*/ import_react.forwardRef(DevicePhoneMobileIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/DocumentDuplicateIcon.js
function DocumentDuplicateIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" }), /*#__PURE__*/ import_react.createElement("path", { d: "M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" }));
}
var ForwardRef$24 = /*#__PURE__*/ import_react.forwardRef(DocumentDuplicateIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/EllipsisVerticalIcon.js
function EllipsisVerticalIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$23 = /*#__PURE__*/ import_react.forwardRef(EllipsisVerticalIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/FaceSmileIcon.js
function FaceSmileIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$22 = /*#__PURE__*/ import_react.forwardRef(FaceSmileIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/HeartIcon.js
function HeartIcon$1({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" }));
}
var ForwardRef$21 = /*#__PURE__*/ import_react.forwardRef(HeartIcon$1);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/KeyIcon.js
function KeyIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$20 = /*#__PURE__*/ import_react.forwardRef(KeyIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/LinkIcon.js
function LinkIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$19 = /*#__PURE__*/ import_react.forwardRef(LinkIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/LockClosedIcon.js
function LockClosedIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$18 = /*#__PURE__*/ import_react.forwardRef(LockClosedIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/MagnifyingGlassIcon.js
function MagnifyingGlassIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$17 = /*#__PURE__*/ import_react.forwardRef(MagnifyingGlassIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/MicrophoneIcon.js
function MicrophoneIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" }), /*#__PURE__*/ import_react.createElement("path", { d: "M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" }));
}
var ForwardRef$16 = /*#__PURE__*/ import_react.forwardRef(MicrophoneIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/MoonIcon.js
function MoonIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$15 = /*#__PURE__*/ import_react.forwardRef(MoonIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/PaperAirplaneIcon.js
function PaperAirplaneIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" }));
}
var ForwardRef$14 = /*#__PURE__*/ import_react.forwardRef(PaperAirplaneIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/PaperClipIcon.js
function PaperClipIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$13 = /*#__PURE__*/ import_react.forwardRef(PaperClipIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/PhoneIcon.js
function PhoneIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$12 = /*#__PURE__*/ import_react.forwardRef(PhoneIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/PlusIcon.js
function PlusIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$11 = /*#__PURE__*/ import_react.forwardRef(PlusIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ShareIcon.js
function ShareIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$10 = /*#__PURE__*/ import_react.forwardRef(ShareIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/ShieldCheckIcon.js
function ShieldCheckIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$9 = /*#__PURE__*/ import_react.forwardRef(ShieldCheckIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/SparklesIcon.js
function SparklesIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$8 = /*#__PURE__*/ import_react.forwardRef(SparklesIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/StopIcon.js
function StopIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$7 = /*#__PURE__*/ import_react.forwardRef(StopIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/SunIcon.js
function SunIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" }));
}
var ForwardRef$6 = /*#__PURE__*/ import_react.forwardRef(SunIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/TrashIcon.js
function TrashIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$5 = /*#__PURE__*/ import_react.forwardRef(TrashIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/UserGroupIcon.js
function UserGroupIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",
		clipRule: "evenodd"
	}), /*#__PURE__*/ import_react.createElement("path", { d: "M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" }));
}
var ForwardRef$4 = /*#__PURE__*/ import_react.forwardRef(UserGroupIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/UserIcon.js
function UserIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$3 = /*#__PURE__*/ import_react.forwardRef(UserIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/UsersIcon.js
function UsersIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", { d: "M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" }));
}
var ForwardRef$2 = /*#__PURE__*/ import_react.forwardRef(UsersIcon);
//#endregion
//#region node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js
function XMarkIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		fillRule: "evenodd",
		d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
		clipRule: "evenodd"
	}));
}
var ForwardRef$1 = /*#__PURE__*/ import_react.forwardRef(XMarkIcon);
//#endregion
//#region node_modules/@heroicons/react/24/outline/esm/HeartIcon.js
function HeartIcon({ title, titleId, ...props }, svgRef) {
	return /*#__PURE__*/ import_react.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		stroke: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /*#__PURE__*/ import_react.createElement("title", { id: titleId }, title) : null, /*#__PURE__*/ import_react.createElement("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
	}));
}
var ForwardRef = /*#__PURE__*/ import_react.forwardRef(HeartIcon);
//#endregion
export { ForwardRef$29 as A, ForwardRef$22 as C, ForwardRef$26 as D, ForwardRef$25 as E, ForwardRef$34 as F, ForwardRef$35 as I, require_react as L, ForwardRef$31 as M, ForwardRef$32 as N, ForwardRef$27 as O, ForwardRef$33 as P, ForwardRef$21 as S, ForwardRef$24 as T, ForwardRef$16 as _, ForwardRef$4 as a, ForwardRef$19 as b, ForwardRef$7 as c, ForwardRef$10 as d, ForwardRef$11 as f, ForwardRef$15 as g, ForwardRef$14 as h, ForwardRef$3 as i, ForwardRef$30 as j, ForwardRef$28 as k, ForwardRef$8 as l, ForwardRef$13 as m, ForwardRef$1 as n, ForwardRef$5 as o, ForwardRef$12 as p, ForwardRef$2 as r, ForwardRef$6 as s, ForwardRef as t, ForwardRef$9 as u, ForwardRef$17 as v, ForwardRef$23 as w, ForwardRef$20 as x, ForwardRef$18 as y };
