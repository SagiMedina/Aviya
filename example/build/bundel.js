/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Hello = __webpack_require__(1);

	var _Hello2 = _interopRequireDefault(_Hello);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Hello2.default.render('#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Aviya2 = __webpack_require__(2);

	var _Aviya3 = _interopRequireDefault(_Aviya2);

	var _World = __webpack_require__(4);

	var _World2 = _interopRequireDefault(_World);

	var _Dumb = __webpack_require__(5);

	var _Dumb2 = _interopRequireDefault(_Dumb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hello = function (_Aviya) {
	    _inherits(Hello, _Aviya);

	    function Hello() {
	        _classCallCheck(this, Hello);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Hello).call(this));

	        _this.addDependency(_World2.default);
	        _this.addDependency(_Dumb2.default);
	        return _this;
	    }

	    _createClass(Hello, [{
	        key: 'html',
	        value: function html() {
	            return '\n                <div>\n                    <h1 id="title">Hello</h1>\n                    <World></World>\n                    <Dumb></Dumb>\n                </div>\n            ';
	        }
	    }]);

	    return Hello;
	}(_Aviya3.default);

	exports.default = new Hello();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Aviya = t() : e.Aviya = t();
	}(undefined, function () {
	  return function (e) {
	    function t(r) {
	      if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
	    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
	  }([function (e, t) {
	    "use strict";
	    function n(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
	      function e(e, t) {
	        for (var n = 0; n < t.length; n++) {
	          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	        }
	      }return function (t, n, r) {
	        return n && e(t.prototype, n), r && e(t, r), t;
	      };
	    }(),
	        o = function () {
	      function e() {
	        n(this, e), this.htmlFile = null, this._htmlString = null, this._dependencies = [], this._events = [];
	      }return r(e, [{ key: "addEventListener", value: function value(e, t, n) {
	          this._events.push({ selector: e, type: t, trigger: n });
	        } }, { key: "addDependency", value: function value(e) {
	          this._dependencies.push(e);
	        } }, { key: "_htmlFileRender", value: function value() {
	          var e = "<" + this.constructor.name + "(.*?)>(.*?)</" + this.constructor.name + ">",
	              t = new RegExp(e, "gi");return this.htmlFile.match(t).map(function (e) {
	            return e.replace(/(\\r\\n|\\n|\\r|\\")/gm, "");
	          }).join("");
	        } }, { key: "_renderHtmlToDOMElement", value: function value(e) {
	          this._htmlString = this.htmlFile ? this._htmlFileRender() : this.html();var t = !0,
	              n = !1,
	              r = void 0;try {
	            for (var o, i = document.querySelectorAll(e)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
	              var l = o.value;l.insertAdjacentHTML("afterend", this._htmlString), l.remove();
	            }
	          } catch (a) {
	            n = !0, r = a;
	          } finally {
	            try {
	              !t && i["return"] && i["return"]();
	            } finally {
	              if (n) throw r;
	            }
	          }
	        } }, { key: "_bindEventsToComponent", value: function value() {
	          var e = !0,
	              t = !1,
	              n = void 0;try {
	            for (var r, o = this._events[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
	              var i = r.value,
	                  l = !0,
	                  a = !1,
	                  u = void 0;try {
	                for (var c, s = document.querySelectorAll(i.selector)[Symbol.iterator](); !(l = (c = s.next()).done); l = !0) {
	                  var f = c.value;if (!f.getAttribute("event_id")) {
	                    var d = Math.random().toString(36).substr(2, 9);f.setAttribute("event_id", this.constructor.name + "_event_" + d), document.querySelector("[event_id=" + this.constructor.name + "_event_" + d + "]").addEventListener(i.type, i.trigger);
	                  }
	                }
	              } catch (v) {
	                a = !0, u = v;
	              } finally {
	                try {
	                  !l && s["return"] && s["return"]();
	                } finally {
	                  if (a) throw u;
	                }
	              }
	            }
	          } catch (v) {
	            t = !0, n = v;
	          } finally {
	            try {
	              !e && o["return"] && o["return"]();
	            } finally {
	              if (t) throw n;
	            }
	          }
	        } }, { key: "_injectHtmlFromDependencyToComponent", value: function value() {
	          var t = !0,
	              n = !1,
	              r = void 0;try {
	            for (var o, i = function i() {
	              var t = o.value;if ("function" == typeof t) {
	                var n = new e();n.html = function () {
	                  return t();
	                }, n.render(t.name);
	              } else t.render();
	            }, l = this._dependencies[Symbol.iterator](); !(t = (o = l.next()).done); t = !0) {
	              i();
	            }
	          } catch (a) {
	            n = !0, r = a;
	          } finally {
	            try {
	              !t && l["return"] && l["return"]();
	            } finally {
	              if (n) throw r;
	            }
	          }
	        } }, { key: "render", value: function value() {
	          var e = arguments.length <= 0 || void 0 === arguments[0] ? this.constructor.name : arguments[0];this._renderHtmlToDOMElement(e), this._bindEventsToComponent(), this._injectHtmlFromDependencyToComponent();
	        } }]), e;
	    }();t["default"] = o;
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Aviya2 = __webpack_require__(2);

	var _Aviya3 = _interopRequireDefault(_Aviya2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var World = function (_Aviya) {
	    _inherits(World, _Aviya);

	    function World() {
	        _classCallCheck(this, World);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(World).call(this));

	        _this.addEventListener('#hello', 'input', _this.logHelloWorld);
	        _this.addEventListener('#reset', 'click', _this.Reset);
	        return _this;
	    }

	    _createClass(World, [{
	        key: 'html',
	        value: function html() {
	            return '\n              <div>\n                  <input id="hello" type="text"/>\n                  <button id="reset">Reset!</button>\n              </div>\n          ';
	        }
	    }, {
	        key: 'logHelloWorld',
	        value: function logHelloWorld() {
	            document.getElementById('title').innerHTML = 'Hello ' + document.getElementById('hello').value;
	        }
	    }, {
	        key: 'Reset',
	        value: function Reset() {
	            document.getElementById('title').innerHTML = 'Hello World';
	            document.getElementById('hello').value = 'World';
	        }
	    }]);

	    return World;
	}(_Aviya3.default);

	exports.default = new World();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Dumb;
	function Dumb() {
	    return "<p>This is a Dumb Component</p>";
	}

/***/ }
/******/ ]);