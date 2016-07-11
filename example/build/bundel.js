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
	    function t(n) {
	      if (r[n]) return r[n].exports;var i = r[n] = { exports: {}, id: n, loaded: !1 };return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
	    }var r = {};return t.m = e, t.c = r, t.p = "", t(0);
	  }([function (e, t) {
	    "use strict";
	    function r(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(t, "__esModule", { value: !0 });var n = function () {
	      function e(e, t) {
	        for (var r = 0; r < t.length; r++) {
	          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
	        }
	      }return function (t, r, n) {
	        return r && e(t.prototype, r), n && e(t, n), t;
	      };
	    }(),
	        i = function () {
	      function e() {
	        r(this, e), this.render = this.render.bind(this), this.htmlFile = null, this._htmlString = null, this._dependencies = [], this._events = [];
	      }return n(e, [{ key: "addEventListener", value: function value(e, t, r) {
	          this._events.push({ selector: e, type: t, trigger: r });
	        } }, { key: "addDependency", value: function value(e) {
	          this._dependencies.push(e);
	        } }, { key: "_htmlFileRender", value: function value() {
	          var e = "<" + this.constructor.name + "(.*?)>(.*?)</" + this.constructor.name + ">",
	              t = new RegExp(e, "gi");return this.htmlFile.match(t).map(function (e) {
	            return e.replace(/(\\r\\n|\\n|\\r|\\")/gm, "");
	          }).join("");
	        } }, { key: "render", value: function value() {
	          var t = arguments.length <= 0 || void 0 === arguments[0] ? this.constructor.name : arguments[0];this._htmlString = this.htmlFile ? this._htmlFileRender() : this.html();var r = !0,
	              n = !1,
	              i = void 0;try {
	            for (var o, a = document.querySelectorAll(t)[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
	              var l = o.value;l.insertAdjacentHTML("afterend", this._htmlString), l.remove();
	            }
	          } catch (u) {
	            n = !0, i = u;
	          } finally {
	            try {
	              !r && a["return"] && a["return"]();
	            } finally {
	              if (n) throw i;
	            }
	          }var c = !0,
	              s = !1,
	              f = void 0;try {
	            for (var d, h = this._events[Symbol.iterator](); !(c = (d = h.next()).done); c = !0) {
	              var v = d.value,
	                  y = !0,
	                  m = !1,
	                  p = void 0;try {
	                for (var _, b = document.querySelectorAll(v.selector)[Symbol.iterator](); !(y = (_ = b.next()).done); y = !0) {
	                  var g = _.value;if (!g.getAttribute("event_id")) {
	                    var x = Math.random().toString(36).substr(2, 9);g.setAttribute("event_id", this.constructor.name + "_event_" + x), document.querySelector("[event_id=" + this.constructor.name + "_event_" + x + "]").addEventListener(v.type, v.trigger);
	                  }
	                }
	              } catch (u) {
	                m = !0, p = u;
	              } finally {
	                try {
	                  !y && b["return"] && b["return"]();
	                } finally {
	                  if (m) throw p;
	                }
	              }
	            }
	          } catch (u) {
	            s = !0, f = u;
	          } finally {
	            try {
	              !c && h["return"] && h["return"]();
	            } finally {
	              if (s) throw f;
	            }
	          }var S = !0,
	              w = !1,
	              A = void 0;try {
	            for (var j, k = function k() {
	              var t = j.value;if ("function" == typeof t) {
	                var r = new e();r.html = function () {
	                  return t();
	                }, r.render(t.name);
	              } else t.render();
	            }, F = this._dependencies[Symbol.iterator](); !(S = (j = F.next()).done); S = !0) {
	              k();
	            }
	          } catch (u) {
	            w = !0, A = u;
	          } finally {
	            try {
	              !S && F["return"] && F["return"]();
	            } finally {
	              if (w) throw A;
	            }
	          }
	        } }]), e;
	    }();t["default"] = i;
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