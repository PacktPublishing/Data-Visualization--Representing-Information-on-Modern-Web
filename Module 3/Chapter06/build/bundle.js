(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// import PoliticalDonorChart from './chapter5';
	// new PoliticalDonorChart('histogram');
	// new PoliticalDonorChart('pie', 'The Rt Hon Edward Miliband MP');
	// new PoliticalDonorChart('streamgraph');
	// new PoliticalDonorChart('chord', 'Miliband');
	// new PoliticalDonorChart('force');
	// new PoliticalDonorChart('tree', 'Miliband');
	// new PoliticalDonorChart('cluster', 'Miliband');
	// new PoliticalDonorChart('partition', 'Miliband');
	// new PoliticalDonorChart('pack');
	// new PoliticalDonorChart('treemap', 'Miliband');
	
	var _voronoiAirports = __webpack_require__(2);
	
	var _voronoiAirports2 = _interopRequireDefault(_voronoiAirports);
	
	window.d3 = undefined;
	
	new _voronoiAirports2['default']('41.961571, -87.959659');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var d3 = __webpack_require__(3);
	
	exports['default'] = function (location) {
	  var svg = d3.select('body').append('svg');
	  svg.attr('width', 960).attr('height', 500);
	
	  var topojson = __webpack_require__(4);
	  var projection = d3.geo.mercator().scale(250);
	
	  var boundaries = __webpack_require__(5);
	  var path = d3.geo.path().projection(projection);
	
	  svg.append('g').selectAll('path').data(topojson.feature(boundaries, boundaries.objects.countries).features).enter().append('path').attr('d', d3.geo.path().projection(projection));
	};
	
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
	  var d3 = {
	    version: "3.5.16"
	  };
	  var d3_arraySlice = [].slice, d3_array = function(list) {
	    return d3_arraySlice.call(list);
	  };
	  var d3_document = this.document;
	  function d3_documentElement(node) {
	    return node && (node.ownerDocument || node.document || node).documentElement;
	  }
	  function d3_window(node) {
	    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
	  }
	  if (d3_document) {
	    try {
	      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
	    } catch (e) {
	      d3_array = function(list) {
	        var i = list.length, array = new Array(i);
	        while (i--) array[i] = list[i];
	        return array;
	      };
	    }
	  }
	  if (!Date.now) Date.now = function() {
	    return +new Date();
	  };
	  if (d3_document) {
	    try {
	      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
	    } catch (error) {
	      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
	      d3_element_prototype.setAttribute = function(name, value) {
	        d3_element_setAttribute.call(this, name, value + "");
	      };
	      d3_element_prototype.setAttributeNS = function(space, local, value) {
	        d3_element_setAttributeNS.call(this, space, local, value + "");
	      };
	      d3_style_prototype.setProperty = function(name, value, priority) {
	        d3_style_setProperty.call(this, name, value + "", priority);
	      };
	    }
	  }
	  d3.ascending = d3_ascending;
	  function d3_ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	  d3.descending = function(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  };
	  d3.min = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
	    }
	    return a;
	  };
	  d3.max = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
	    }
	    return a;
	  };
	  d3.extent = function(array, f) {
	    var i = -1, n = array.length, a, b, c;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	    return [ a, c ];
	  };
	  function d3_number(x) {
	    return x === null ? NaN : +x;
	  }
	  function d3_numeric(x) {
	    return !isNaN(x);
	  }
	  d3.sum = function(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
	    } else {
	      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
	    }
	    return s;
	  };
	  d3.mean = function(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
	    }
	    if (j) return s / j;
	  };
	  d3.quantile = function(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	  };
	  d3.median = function(array, f) {
	    var numbers = [], n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
	    }
	    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
	  };
	  d3.variance = function(array, f) {
	    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
	    if (arguments.length === 1) {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    } else {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	    if (j > 1) return s / (j - 1);
	  };
	  d3.deviation = function() {
	    var v = d3.variance.apply(this, arguments);
	    return v ? Math.sqrt(v) : v;
	  };
	  function d3_bisector(compare) {
	    return {
	      left: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	  var d3_bisect = d3_bisector(d3_ascending);
	  d3.bisectLeft = d3_bisect.left;
	  d3.bisect = d3.bisectRight = d3_bisect.right;
	  d3.bisector = function(f) {
	    return d3_bisector(f.length === 1 ? function(d, x) {
	      return d3_ascending(f(d), x);
	    } : f);
	  };
	  d3.shuffle = function(array, i0, i1) {
	    if ((m = arguments.length) < 3) {
	      i1 = array.length;
	      if (m < 2) i0 = 0;
	    }
	    var m = i1 - i0, t, i;
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
	    }
	    return array;
	  };
	  d3.permute = function(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  };
	  d3.pairs = function(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
	    return pairs;
	  };
	  d3.transpose = function(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  };
	  function d3_transposeLength(d) {
	    return d.length;
	  }
	  d3.zip = function() {
	    return d3.transpose(arguments);
	  };
	  d3.keys = function(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  };
	  d3.values = function(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  };
	  d3.entries = function(map) {
	    var entries = [];
	    for (var key in map) entries.push({
	      key: key,
	      value: map[key]
	    });
	    return entries;
	  };
	  d3.merge = function(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	    return merged;
	  };
	  var abs = Math.abs;
	  d3.range = function(start, stop, step) {
	    if (arguments.length < 3) {
	      step = 1;
	      if (arguments.length < 2) {
	        stop = start;
	        start = 0;
	      }
	    }
	    if ((stop - start) / step === Infinity) throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
	    return range;
	  };
	  function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1) k *= 10;
	    return k;
	  }
	  function d3_class(ctor, properties) {
	    for (var key in properties) {
	      Object.defineProperty(ctor.prototype, key, {
	        value: properties[key],
	        enumerable: false
	      });
	    }
	  }
	  d3.map = function(object, f) {
	    var map = new d3_Map();
	    if (object instanceof d3_Map) {
	      object.forEach(function(key, value) {
	        map.set(key, value);
	      });
	    } else if (Array.isArray(object)) {
	      var i = -1, n = object.length, o;
	      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
	    } else {
	      for (var key in object) map.set(key, object[key]);
	    }
	    return map;
	  };
	  function d3_Map() {
	    this._ = Object.create(null);
	  }
	  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
	  d3_class(d3_Map, {
	    has: d3_map_has,
	    get: function(key) {
	      return this._[d3_map_escape(key)];
	    },
	    set: function(key, value) {
	      return this._[d3_map_escape(key)] = value;
	    },
	    remove: d3_map_remove,
	    keys: d3_map_keys,
	    values: function() {
	      var values = [];
	      for (var key in this._) values.push(this._[key]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var key in this._) entries.push({
	        key: d3_map_unescape(key),
	        value: this._[key]
	      });
	      return entries;
	    },
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
	    }
	  });
	  function d3_map_escape(key) {
	    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
	  }
	  function d3_map_unescape(key) {
	    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
	  }
	  function d3_map_has(key) {
	    return d3_map_escape(key) in this._;
	  }
	  function d3_map_remove(key) {
	    return (key = d3_map_escape(key)) in this._ && delete this._[key];
	  }
	  function d3_map_keys() {
	    var keys = [];
	    for (var key in this._) keys.push(d3_map_unescape(key));
	    return keys;
	  }
	  function d3_map_size() {
	    var size = 0;
	    for (var key in this._) ++size;
	    return size;
	  }
	  function d3_map_empty() {
	    for (var key in this._) return false;
	    return true;
	  }
	  d3.nest = function() {
	    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
	    function map(mapType, array, depth) {
	      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
	      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	          values.push(object);
	        } else {
	          valuesByKey.set(keyValue, [ object ]);
	        }
	      }
	      if (mapType) {
	        object = mapType();
	        setter = function(keyValue, values) {
	          object.set(keyValue, map(mapType, values, depth));
	        };
	      } else {
	        object = {};
	        setter = function(keyValue, values) {
	          object[keyValue] = map(mapType, values, depth);
	        };
	      }
	      valuesByKey.forEach(setter);
	      return object;
	    }
	    function entries(map, depth) {
	      if (depth >= keys.length) return map;
	      var array = [], sortKey = sortKeys[depth++];
	      map.forEach(function(key, keyMap) {
	        array.push({
	          key: key,
	          values: entries(keyMap, depth)
	        });
	      });
	      return sortKey ? array.sort(function(a, b) {
	        return sortKey(a.key, b.key);
	      }) : array;
	    }
	    nest.map = function(array, mapType) {
	      return map(mapType, array, 0);
	    };
	    nest.entries = function(array) {
	      return entries(map(d3.map, array, 0), 0);
	    };
	    nest.key = function(d) {
	      keys.push(d);
	      return nest;
	    };
	    nest.sortKeys = function(order) {
	      sortKeys[keys.length - 1] = order;
	      return nest;
	    };
	    nest.sortValues = function(order) {
	      sortValues = order;
	      return nest;
	    };
	    nest.rollup = function(f) {
	      rollup = f;
	      return nest;
	    };
	    return nest;
	  };
	  d3.set = function(array) {
	    var set = new d3_Set();
	    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
	    return set;
	  };
	  function d3_Set() {
	    this._ = Object.create(null);
	  }
	  d3_class(d3_Set, {
	    has: d3_map_has,
	    add: function(key) {
	      this._[d3_map_escape(key += "")] = true;
	      return key;
	    },
	    remove: d3_map_remove,
	    values: d3_map_keys,
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key));
	    }
	  });
	  d3.behavior = {};
	  function d3_identity(d) {
	    return d;
	  }
	  d3.rebind = function(target, source) {
	    var i = 1, n = arguments.length, method;
	    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
	    return target;
	  };
	  function d3_rebind(target, source, method) {
	    return function() {
	      var value = method.apply(source, arguments);
	      return value === source ? target : value;
	    };
	  }
	  function d3_vendorSymbol(object, name) {
	    if (name in object) return name;
	    name = name.charAt(0).toUpperCase() + name.slice(1);
	    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
	      var prefixName = d3_vendorPrefixes[i] + name;
	      if (prefixName in object) return prefixName;
	    }
	  }
	  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
	  function d3_noop() {}
	  d3.dispatch = function() {
	    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    return dispatch;
	  };
	  function d3_dispatch() {}
	  d3_dispatch.prototype.on = function(type, listener) {
	    var i = type.indexOf("."), name = "";
	    if (i >= 0) {
	      name = type.slice(i + 1);
	      type = type.slice(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	      if (listener == null) for (type in this) {
	        if (this.hasOwnProperty(type)) this[type].on(name, null);
	      }
	      return this;
	    }
	  };
	  function d3_dispatch_event(dispatch) {
	    var listeners = [], listenerByName = new d3_Map();
	    function event() {
	      var z = listeners, i = -1, n = z.length, l;
	      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
	      return dispatch;
	    }
	    event.on = function(name, listener) {
	      var l = listenerByName.get(name), i;
	      if (arguments.length < 2) return l && l.on;
	      if (l) {
	        l.on = null;
	        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	        listenerByName.remove(name);
	      }
	      if (listener) listeners.push(listenerByName.set(name, {
	        on: listener
	      }));
	      return dispatch;
	    };
	    return event;
	  }
	  d3.event = null;
	  function d3_eventPreventDefault() {
	    d3.event.preventDefault();
	  }
	  function d3_eventSource() {
	    var e = d3.event, s;
	    while (s = e.sourceEvent) e = s;
	    return e;
	  }
	  function d3_eventDispatch(target) {
	    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    dispatch.of = function(thiz, argumentz) {
	      return function(e1) {
	        try {
	          var e0 = e1.sourceEvent = d3.event;
	          e1.target = target;
	          d3.event = e1;
	          dispatch[e1.type].apply(thiz, argumentz);
	        } finally {
	          d3.event = e0;
	        }
	      };
	    };
	    return dispatch;
	  }
	  d3.requote = function(s) {
	    return s.replace(d3_requote_re, "\\$&");
	  };
	  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  var d3_subclass = {}.__proto__ ? function(object, prototype) {
	    object.__proto__ = prototype;
	  } : function(object, prototype) {
	    for (var property in prototype) object[property] = prototype[property];
	  };
	  function d3_selection(groups) {
	    d3_subclass(groups, d3_selectionPrototype);
	    return groups;
	  }
	  var d3_select = function(s, n) {
	    return n.querySelector(s);
	  }, d3_selectAll = function(s, n) {
	    return n.querySelectorAll(s);
	  }, d3_selectMatches = function(n, s) {
	    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
	    d3_selectMatches = function(n, s) {
	      return d3_selectMatcher.call(n, s);
	    };
	    return d3_selectMatches(n, s);
	  };
	  if (typeof Sizzle === "function") {
	    d3_select = function(s, n) {
	      return Sizzle(s, n)[0] || null;
	    };
	    d3_selectAll = Sizzle;
	    d3_selectMatches = Sizzle.matchesSelector;
	  }
	  d3.selection = function() {
	    return d3.select(d3_document.documentElement);
	  };
	  var d3_selectionPrototype = d3.selection.prototype = [];
	  d3_selectionPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, group, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
	          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selector(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_select(selector, this);
	    };
	  }
	  d3_selectionPrototype.selectAll = function(selector) {
	    var subgroups = [], subgroup, node;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
	          subgroup.parentNode = node;
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selectorAll(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_selectAll(selector, this);
	    };
	  }
	  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
	  var d3_nsPrefix = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: d3_nsXhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	  d3.ns = {
	    prefix: d3_nsPrefix,
	    qualify: function(name) {
	      var i = name.indexOf(":"), prefix = name;
	      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	      return d3_nsPrefix.hasOwnProperty(prefix) ? {
	        space: d3_nsPrefix[prefix],
	        local: name
	      } : name;
	    }
	  };
	  d3_selectionPrototype.attr = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node();
	        name = d3.ns.qualify(name);
	        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	      }
	      for (value in name) this.each(d3_selection_attr(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_attr(name, value));
	  };
	  function d3_selection_attr(name, value) {
	    name = d3.ns.qualify(name);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrConstant() {
	      this.setAttribute(name, value);
	    }
	    function attrConstantNS() {
	      this.setAttributeNS(name.space, name.local, value);
	    }
	    function attrFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
	    }
	    function attrFunctionNS() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
	    }
	    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
	  }
	  function d3_collapse(s) {
	    return s.trim().replace(/\s+/g, " ");
	  }
	  d3_selectionPrototype.classed = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
	        if (value = node.classList) {
	          while (++i < n) if (!value.contains(name[i])) return false;
	        } else {
	          value = node.getAttribute("class");
	          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
	        }
	        return true;
	      }
	      for (value in name) this.each(d3_selection_classed(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_classed(name, value));
	  };
	  function d3_selection_classedRe(name) {
	    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
	  }
	  function d3_selection_classes(name) {
	    return (name + "").trim().split(/^|\s+/);
	  }
	  function d3_selection_classed(name, value) {
	    name = d3_selection_classes(name).map(d3_selection_classedName);
	    var n = name.length;
	    function classedConstant() {
	      var i = -1;
	      while (++i < n) name[i](this, value);
	    }
	    function classedFunction() {
	      var i = -1, x = value.apply(this, arguments);
	      while (++i < n) name[i](this, x);
	    }
	    return typeof value === "function" ? classedFunction : classedConstant;
	  }
	  function d3_selection_classedName(name) {
	    var re = d3_selection_classedRe(name);
	    return function(node, value) {
	      if (c = node.classList) return value ? c.add(name) : c.remove(name);
	      var c = node.getAttribute("class") || "";
	      if (value) {
	        re.lastIndex = 0;
	        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
	      } else {
	        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
	      }
	    };
	  }
	  d3_selectionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
	        return this;
	      }
	      if (n < 2) {
	        var node = this.node();
	        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
	      }
	      priority = "";
	    }
	    return this.each(d3_selection_style(name, value, priority));
	  };
	  function d3_selection_style(name, value, priority) {
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleConstant() {
	      this.style.setProperty(name, value, priority);
	    }
	    function styleFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
	    }
	    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
	  }
	  d3_selectionPrototype.property = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") return this.node()[name];
	      for (value in name) this.each(d3_selection_property(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_property(name, value));
	  };
	  function d3_selection_property(name, value) {
	    function propertyNull() {
	      delete this[name];
	    }
	    function propertyConstant() {
	      this[name] = value;
	    }
	    function propertyFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) delete this[name]; else this[name] = x;
	    }
	    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
	  }
	  d3_selectionPrototype.text = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    } : value == null ? function() {
	      this.textContent = "";
	    } : function() {
	      this.textContent = value;
	    }) : this.node().textContent;
	  };
	  d3_selectionPrototype.html = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    } : value == null ? function() {
	      this.innerHTML = "";
	    } : function() {
	      this.innerHTML = value;
	    }) : this.node().innerHTML;
	  };
	  d3_selectionPrototype.append = function(name) {
	    name = d3_selection_creator(name);
	    return this.select(function() {
	      return this.appendChild(name.apply(this, arguments));
	    });
	  };
	  function d3_selection_creator(name) {
	    function create() {
	      var document = this.ownerDocument, namespace = this.namespaceURI;
	      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
	    }
	    function createNS() {
	      return this.ownerDocument.createElementNS(name.space, name.local);
	    }
	    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
	  }
	  d3_selectionPrototype.insert = function(name, before) {
	    name = d3_selection_creator(name);
	    before = d3_selection_selector(before);
	    return this.select(function() {
	      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
	    });
	  };
	  d3_selectionPrototype.remove = function() {
	    return this.each(d3_selectionRemove);
	  };
	  function d3_selectionRemove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }
	  d3_selectionPrototype.data = function(value, key) {
	    var i = -1, n = this.length, group, node;
	    if (!arguments.length) {
	      value = new Array(n = (group = this[0]).length);
	      while (++i < n) {
	        if (node = group[i]) {
	          value[i] = node.__data__;
	        }
	      }
	      return value;
	    }
	    function bind(group, groupData) {
	      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
	      if (key) {
	        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
	        for (i = -1; ++i < n; ) {
	          if (node = group[i]) {
	            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
	              exitNodes[i] = node;
	            } else {
	              nodeByKeyValue.set(keyValue, node);
	            }
	            keyValues[i] = keyValue;
	          }
	        }
	        for (i = -1; ++i < m; ) {
	          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          } else if (node !== true) {
	            updateNodes[i] = node;
	            node.__data__ = nodeData;
	          }
	          nodeByKeyValue.set(keyValue, true);
	        }
	        for (i = -1; ++i < n; ) {
	          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
	            exitNodes[i] = group[i];
	          }
	        }
	      } else {
	        for (i = -1; ++i < n0; ) {
	          node = group[i];
	          nodeData = groupData[i];
	          if (node) {
	            node.__data__ = nodeData;
	            updateNodes[i] = node;
	          } else {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	        }
	        for (;i < m; ++i) {
	          enterNodes[i] = d3_selection_dataNode(groupData[i]);
	        }
	        for (;i < n; ++i) {
	          exitNodes[i] = group[i];
	        }
	      }
	      enterNodes.update = updateNodes;
	      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
	      enter.push(enterNodes);
	      update.push(updateNodes);
	      exit.push(exitNodes);
	    }
	    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
	    if (typeof value === "function") {
	      while (++i < n) {
	        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
	      }
	    } else {
	      while (++i < n) {
	        bind(group = this[i], value);
	      }
	    }
	    update.enter = function() {
	      return enter;
	    };
	    update.exit = function() {
	      return exit;
	    };
	    return update;
	  };
	  function d3_selection_dataNode(data) {
	    return {
	      __data__: data
	    };
	  }
	  d3_selectionPrototype.datum = function(value) {
	    return arguments.length ? this.property("__data__", value) : this.property("__data__");
	  };
	  d3_selectionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_filter(selector) {
	    return function() {
	      return d3_selectMatches(this, selector);
	    };
	  }
	  d3_selectionPrototype.order = function() {
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	    return this;
	  };
	  d3_selectionPrototype.sort = function(comparator) {
	    comparator = d3_selection_sortComparator.apply(this, arguments);
	    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
	    return this.order();
	  };
	  function d3_selection_sortComparator(comparator) {
	    if (!arguments.length) comparator = d3_ascending;
	    return function(a, b) {
	      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	    };
	  }
	  d3_selectionPrototype.each = function(callback) {
	    return d3_selection_each(this, function(node, i, j) {
	      callback.call(node, node.__data__, i, j);
	    });
	  };
	  function d3_selection_each(groups, callback) {
	    for (var j = 0, m = groups.length; j < m; j++) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
	        if (node = group[i]) callback(node, i, j);
	      }
	    }
	    return groups;
	  }
	  d3_selectionPrototype.call = function(callback) {
	    var args = d3_array(arguments);
	    callback.apply(args[0] = this, args);
	    return this;
	  };
	  d3_selectionPrototype.empty = function() {
	    return !this.node();
	  };
	  d3_selectionPrototype.node = function() {
	    for (var j = 0, m = this.length; j < m; j++) {
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	    return null;
	  };
	  d3_selectionPrototype.size = function() {
	    var n = 0;
	    d3_selection_each(this, function() {
	      ++n;
	    });
	    return n;
	  };
	  function d3_selection_enter(selection) {
	    d3_subclass(selection, d3_selection_enterPrototype);
	    return selection;
	  }
	  var d3_selection_enterPrototype = [];
	  d3.selection.enter = d3_selection_enter;
	  d3.selection.enter.prototype = d3_selection_enterPrototype;
	  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
	  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
	  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
	  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
	  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
	  d3_selection_enterPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, upgroup, group, node;
	    for (var j = -1, m = this.length; ++j < m; ) {
	      upgroup = (group = this[j]).update;
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = group.parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
	          subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  d3_selection_enterPrototype.insert = function(name, before) {
	    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
	    return d3_selectionPrototype.insert.call(this, name, before);
	  };
	  function d3_selection_enterInsertBefore(enter) {
	    var i0, j0;
	    return function(d, i, j) {
	      var group = enter[j].update, n = group.length, node;
	      if (j != j0) j0 = j, i0 = 0;
	      if (i >= i0) i0 = i + 1;
	      while (!(node = group[i0]) && ++i0 < n) ;
	      return node;
	    };
	  }
	  d3.select = function(node) {
	    var group;
	    if (typeof node === "string") {
	      group = [ d3_select(node, d3_document) ];
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = [ node ];
	      group.parentNode = d3_documentElement(node);
	    }
	    return d3_selection([ group ]);
	  };
	  d3.selectAll = function(nodes) {
	    var group;
	    if (typeof nodes === "string") {
	      group = d3_array(d3_selectAll(nodes, d3_document));
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = d3_array(nodes);
	      group.parentNode = null;
	    }
	    return d3_selection([ group ]);
	  };
	  d3_selectionPrototype.on = function(type, listener, capture) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof type !== "string") {
	        if (n < 2) listener = false;
	        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
	        return this;
	      }
	      if (n < 2) return (n = this.node()["__on" + type]) && n._;
	      capture = false;
	    }
	    return this.each(d3_selection_on(type, listener, capture));
	  };
	  function d3_selection_on(type, listener, capture) {
	    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
	    if (i > 0) type = type.slice(0, i);
	    var filter = d3_selection_onFilters.get(type);
	    if (filter) type = filter, wrap = d3_selection_onFilter;
	    function onRemove() {
	      var l = this[name];
	      if (l) {
	        this.removeEventListener(type, l, l.$);
	        delete this[name];
	      }
	    }
	    function onAdd() {
	      var l = wrap(listener, d3_array(arguments));
	      onRemove.call(this);
	      this.addEventListener(type, this[name] = l, l.$ = capture);
	      l._ = listener;
	    }
	    function removeAll() {
	      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
	      for (var name in this) {
	        if (match = name.match(re)) {
	          var l = this[name];
	          this.removeEventListener(match[1], l, l.$);
	          delete this[name];
	        }
	      }
	    }
	    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
	  }
	  var d3_selection_onFilters = d3.map({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout"
	  });
	  if (d3_document) {
	    d3_selection_onFilters.forEach(function(k) {
	      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
	    });
	  }
	  function d3_selection_onListener(listener, argumentz) {
	    return function(e) {
	      var o = d3.event;
	      d3.event = e;
	      argumentz[0] = this.__data__;
	      try {
	        listener.apply(this, argumentz);
	      } finally {
	        d3.event = o;
	      }
	    };
	  }
	  function d3_selection_onFilter(listener, argumentz) {
	    var l = d3_selection_onListener(listener, argumentz);
	    return function(e) {
	      var target = this, related = e.relatedTarget;
	      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
	        l.call(target, e);
	      }
	    };
	  }
	  var d3_event_dragSelect, d3_event_dragId = 0;
	  function d3_event_dragSuppress(node) {
	    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
	    if (d3_event_dragSelect == null) {
	      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
	    }
	    if (d3_event_dragSelect) {
	      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
	      style[d3_event_dragSelect] = "none";
	    }
	    return function(suppressClick) {
	      w.on(name, null);
	      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
	      if (suppressClick) {
	        var off = function() {
	          w.on(click, null);
	        };
	        w.on(click, function() {
	          d3_eventPreventDefault();
	          off();
	        }, true);
	        setTimeout(off, 0);
	      }
	    };
	  }
	  d3.mouse = function(container) {
	    return d3_mousePoint(container, d3_eventSource());
	  };
	  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
	  function d3_mousePoint(container, e) {
	    if (e.changedTouches) e = e.changedTouches[0];
	    var svg = container.ownerSVGElement || container;
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      if (d3_mouse_bug44083 < 0) {
	        var window = d3_window(container);
	        if (window.scrollX || window.scrollY) {
	          svg = d3.select("body").append("svg").style({
	            position: "absolute",
	            top: 0,
	            left: 0,
	            margin: 0,
	            padding: 0,
	            border: "none"
	          }, "important");
	          var ctm = svg[0][0].getScreenCTM();
	          d3_mouse_bug44083 = !(ctm.f || ctm.e);
	          svg.remove();
	        }
	      }
	      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
	      point.y = e.clientY;
	      point = point.matrixTransform(container.getScreenCTM().inverse());
	      return [ point.x, point.y ];
	    }
	    var rect = container.getBoundingClientRect();
	    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
	  }
	  d3.touch = function(container, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
	    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return d3_mousePoint(container, touch);
	      }
	    }
	  };
	  d3.behavior.drag = function() {
	    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
	    function drag() {
	      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
	    }
	    function dragstart(id, position, subject, move, end) {
	      return function() {
	        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
	        if (origin) {
	          dragOffset = origin.apply(that, arguments);
	          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
	        } else {
	          dragOffset = [ 0, 0 ];
	        }
	        dispatch({
	          type: "dragstart"
	        });
	        function moved() {
	          var position1 = position(parent, dragId), dx, dy;
	          if (!position1) return;
	          dx = position1[0] - position0[0];
	          dy = position1[1] - position0[1];
	          dragged |= dx | dy;
	          position0 = position1;
	          dispatch({
	            type: "drag",
	            x: position1[0] + dragOffset[0],
	            y: position1[1] + dragOffset[1],
	            dx: dx,
	            dy: dy
	          });
	        }
	        function ended() {
	          if (!position(parent, dragId)) return;
	          dragSubject.on(move + dragName, null).on(end + dragName, null);
	          dragRestore(dragged);
	          dispatch({
	            type: "dragend"
	          });
	        }
	      };
	    }
	    drag.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return drag;
	    };
	    return d3.rebind(drag, event, "on");
	  };
	  function d3_behavior_dragTouchId() {
	    return d3.event.changedTouches[0].identifier;
	  }
	  d3.touches = function(container, touches) {
	    if (arguments.length < 2) touches = d3_eventSource().touches;
	    return touches ? d3_array(touches).map(function(touch) {
	      var point = d3_mousePoint(container, touch);
	      point.identifier = touch.identifier;
	      return point;
	    }) : [];
	  };
	  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
	  function d3_sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function d3_cross2d(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	  function d3_acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function d3_asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function d3_sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	  function d3_cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	  function d3_tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	  function d3_haversin(x) {
	    return (x = Math.sin(x / 2)) * x;
	  }
	  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
	  d3.interpolateZoom = function(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
	    if (d2 < ε2) {
	      S = Math.log(w1 / w0) / ρ;
	      i = function(t) {
	        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
	      };
	    } else {
	      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / ρ;
	      i = function(t) {
	        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
	      };
	    }
	    i.duration = S * 1e3;
	    return i;
	  };
	  d3.behavior.zoom = function() {
	    var view = {
	      x: 0,
	      y: 0,
	      k: 1
	    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
	    if (!d3_behavior_zoomWheel) {
	      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
	      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return d3.event.wheelDelta;
	      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
	        return -d3.event.detail;
	      }, "MozMousePixelScroll");
	    }
	    function zoom(g) {
	      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
	    }
	    zoom.event = function(g) {
	      g.each(function() {
	        var dispatch = event.of(this, arguments), view1 = view;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.zoom", function() {
	            view = this.__chart__ || {
	              x: 0,
	              y: 0,
	              k: 1
	            };
	            zoomstarted(dispatch);
	          }).tween("zoom:zoom", function() {
	            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
	            return function(t) {
	              var l = i(t), k = dx / l[2];
	              this.__chart__ = view = {
	                x: cx - l[0] * k,
	                y: cy - l[1] * k,
	                k: k
	              };
	              zoomed(dispatch);
	            };
	          }).each("interrupt.zoom", function() {
	            zoomended(dispatch);
	          }).each("end.zoom", function() {
	            zoomended(dispatch);
	          });
	        } else {
	          this.__chart__ = view;
	          zoomstarted(dispatch);
	          zoomed(dispatch);
	          zoomended(dispatch);
	        }
	      });
	    };
	    zoom.translate = function(_) {
	      if (!arguments.length) return [ view.x, view.y ];
	      view = {
	        x: +_[0],
	        y: +_[1],
	        k: view.k
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scale = function(_) {
	      if (!arguments.length) return view.k;
	      view = {
	        x: view.x,
	        y: view.y,
	        k: null
	      };
	      scaleTo(+_);
	      rescale();
	      return zoom;
	    };
	    zoom.scaleExtent = function(_) {
	      if (!arguments.length) return scaleExtent;
	      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.center = function(_) {
	      if (!arguments.length) return center;
	      center = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.size = function(_) {
	      if (!arguments.length) return size;
	      size = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.duration = function(_) {
	      if (!arguments.length) return duration;
	      duration = +_;
	      return zoom;
	    };
	    zoom.x = function(z) {
	      if (!arguments.length) return x1;
	      x1 = z;
	      x0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    zoom.y = function(z) {
	      if (!arguments.length) return y1;
	      y1 = z;
	      y0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    function location(p) {
	      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
	    }
	    function point(l) {
	      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
	    }
	    function scaleTo(s) {
	      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
	    }
	    function translateTo(p, l) {
	      l = point(l);
	      view.x += p[0] - l[0];
	      view.y += p[1] - l[1];
	    }
	    function zoomTo(that, p, l, k) {
	      that.__chart__ = {
	        x: view.x,
	        y: view.y,
	        k: view.k
	      };
	      scaleTo(Math.pow(2, k));
	      translateTo(center0 = p, l);
	      that = d3.select(that);
	      if (duration > 0) that = that.transition().duration(duration);
	      that.call(zoom.event);
	    }
	    function rescale() {
	      if (x1) x1.domain(x0.range().map(function(x) {
	        return (x - view.x) / view.k;
	      }).map(x0.invert));
	      if (y1) y1.domain(y0.range().map(function(y) {
	        return (y - view.y) / view.k;
	      }).map(y0.invert));
	    }
	    function zoomstarted(dispatch) {
	      if (!zooming++) dispatch({
	        type: "zoomstart"
	      });
	    }
	    function zoomed(dispatch) {
	      rescale();
	      dispatch({
	        type: "zoom",
	        scale: view.k,
	        translate: [ view.x, view.y ]
	      });
	    }
	    function zoomended(dispatch) {
	      if (!--zooming) dispatch({
	        type: "zoomend"
	      }), center0 = null;
	    }
	    function mousedowned() {
	      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
	      d3_selection_interrupt.call(that);
	      zoomstarted(dispatch);
	      function moved() {
	        dragged = 1;
	        translateTo(d3.mouse(that), location0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        subject.on(mousemove, null).on(mouseup, null);
	        dragRestore(dragged);
	        zoomended(dispatch);
	      }
	    }
	    function touchstarted() {
	      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
	      started();
	      zoomstarted(dispatch);
	      subject.on(mousedown, null).on(touchstart, started);
	      function relocate() {
	        var touches = d3.touches(that);
	        scale0 = view.k;
	        touches.forEach(function(t) {
	          if (t.identifier in locations0) locations0[t.identifier] = location(t);
	        });
	        return touches;
	      }
	      function started() {
	        var target = d3.event.target;
	        d3.select(target).on(touchmove, moved).on(touchend, ended);
	        targets.push(target);
	        var changed = d3.event.changedTouches;
	        for (var i = 0, n = changed.length; i < n; ++i) {
	          locations0[changed[i].identifier] = null;
	        }
	        var touches = relocate(), now = Date.now();
	        if (touches.length === 1) {
	          if (now - touchtime < 500) {
	            var p = touches[0];
	            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
	            d3_eventPreventDefault();
	          }
	          touchtime = now;
	        } else if (touches.length > 1) {
	          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
	          distance0 = dx * dx + dy * dy;
	        }
	      }
	      function moved() {
	        var touches = d3.touches(that), p0, l0, p1, l1;
	        d3_selection_interrupt.call(that);
	        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
	          p1 = touches[i];
	          if (l1 = locations0[p1.identifier]) {
	            if (l0) break;
	            p0 = p1, l0 = l1;
	          }
	        }
	        if (l1) {
	          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
	          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
	          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
	          scaleTo(scale1 * scale0);
	        }
	        touchtime = null;
	        translateTo(p0, l0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        if (d3.event.touches.length) {
	          var changed = d3.event.changedTouches;
	          for (var i = 0, n = changed.length; i < n; ++i) {
	            delete locations0[changed[i].identifier];
	          }
	          for (var identifier in locations0) {
	            return void relocate();
	          }
	        }
	        d3.selectAll(targets).on(zoomName, null);
	        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
	        dragRestore();
	        zoomended(dispatch);
	      }
	    }
	    function mousewheeled() {
	      var dispatch = event.of(this, arguments);
	      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
	      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
	      mousewheelTimer = setTimeout(function() {
	        mousewheelTimer = null;
	        zoomended(dispatch);
	      }, 50);
	      d3_eventPreventDefault();
	      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
	      translateTo(center0, translate0);
	      zoomed(dispatch);
	    }
	    function dblclicked() {
	      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
	      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
	    }
	    return d3.rebind(zoom, event, "on");
	  };
	  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
	  d3.color = d3_color;
	  function d3_color() {}
	  d3_color.prototype.toString = function() {
	    return this.rgb() + "";
	  };
	  d3.hsl = d3_hsl;
	  function d3_hsl(h, s, l) {
	    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
	  }
	  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
	  d3_hslPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, this.l / k);
	  };
	  d3_hslPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, k * this.l);
	  };
	  d3_hslPrototype.rgb = function() {
	    return d3_hsl_rgb(this.h, this.s, this.l);
	  };
	  function d3_hsl_rgb(h, s, l) {
	    var m1, m2;
	    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	    l = l < 0 ? 0 : l > 1 ? 1 : l;
	    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	    m1 = 2 * l - m2;
	    function v(h) {
	      if (h > 360) h -= 360; else if (h < 0) h += 360;
	      if (h < 60) return m1 + (m2 - m1) * h / 60;
	      if (h < 180) return m2;
	      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	      return m1;
	    }
	    function vv(h) {
	      return Math.round(v(h) * 255);
	    }
	    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	  }
	  d3.hcl = d3_hcl;
	  function d3_hcl(h, c, l) {
	    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
	  }
	  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
	  d3_hclPrototype.brighter = function(k) {
	    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.darker = function(k) {
	    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.rgb = function() {
	    return d3_hcl_lab(this.h, this.c, this.l).rgb();
	  };
	  function d3_hcl_lab(h, c, l) {
	    if (isNaN(h)) h = 0;
	    if (isNaN(c)) c = 0;
	    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	  }
	  d3.lab = d3_lab;
	  function d3_lab(l, a, b) {
	    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
	  }
	  var d3_lab_K = 18;
	  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
	  var d3_labPrototype = d3_lab.prototype = new d3_color();
	  d3_labPrototype.brighter = function(k) {
	    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.darker = function(k) {
	    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.rgb = function() {
	    return d3_lab_rgb(this.l, this.a, this.b);
	  };
	  function d3_lab_rgb(l, a, b) {
	    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
	    x = d3_lab_xyz(x) * d3_lab_X;
	    y = d3_lab_xyz(y) * d3_lab_Y;
	    z = d3_lab_xyz(z) * d3_lab_Z;
	    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
	  }
	  function d3_lab_hcl(l, a, b) {
	    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
	  }
	  function d3_lab_xyz(x) {
	    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	  }
	  function d3_xyz_lab(x) {
	    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	  }
	  function d3_xyz_rgb(r) {
	    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
	  }
	  d3.rgb = d3_rgb;
	  function d3_rgb(r, g, b) {
	    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
	  }
	  function d3_rgbNumber(value) {
	    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
	  }
	  function d3_rgbString(value) {
	    return d3_rgbNumber(value) + "";
	  }
	  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
	  d3_rgbPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    var r = this.r, g = this.g, b = this.b, i = 30;
	    if (!r && !g && !b) return new d3_rgb(i, i, i);
	    if (r && r < i) r = i;
	    if (g && g < i) g = i;
	    if (b && b < i) b = i;
	    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	  };
	  d3_rgbPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_rgb(k * this.r, k * this.g, k * this.b);
	  };
	  d3_rgbPrototype.hsl = function() {
	    return d3_rgb_hsl(this.r, this.g, this.b);
	  };
	  d3_rgbPrototype.toString = function() {
	    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	  };
	  function d3_rgb_hex(v) {
	    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
	  }
	  function d3_rgb_parse(format, rgb, hsl) {
	    var r = 0, g = 0, b = 0, m1, m2, color;
	    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
	    if (m1) {
	      m2 = m1[2].split(",");
	      switch (m1[1]) {
	       case "hsl":
	        {
	          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
	        }
	
	       case "rgb":
	        {
	          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
	        }
	      }
	    }
	    if (color = d3_rgb_names.get(format)) {
	      return rgb(color.r, color.g, color.b);
	    }
	    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
	      if (format.length === 4) {
	        r = (color & 3840) >> 4;
	        r = r >> 4 | r;
	        g = color & 240;
	        g = g >> 4 | g;
	        b = color & 15;
	        b = b << 4 | b;
	      } else if (format.length === 7) {
	        r = (color & 16711680) >> 16;
	        g = (color & 65280) >> 8;
	        b = color & 255;
	      }
	    }
	    return rgb(r, g, b);
	  }
	  function d3_rgb_hsl(r, g, b) {
	    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
	    if (d) {
	      s = l < .5 ? d / (max + min) : d / (2 - max - min);
	      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
	      h *= 60;
	    } else {
	      h = NaN;
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new d3_hsl(h, s, l);
	  }
	  function d3_rgb_lab(r, g, b) {
	    r = d3_rgb_xyz(r);
	    g = d3_rgb_xyz(g);
	    b = d3_rgb_xyz(b);
	    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
	    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	  }
	  function d3_rgb_xyz(r) {
	    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
	  }
	  function d3_rgb_parseNumber(c) {
	    var f = parseFloat(c);
	    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	  }
	  var d3_rgb_names = d3.map({
	    aliceblue: 15792383,
	    antiquewhite: 16444375,
	    aqua: 65535,
	    aquamarine: 8388564,
	    azure: 15794175,
	    beige: 16119260,
	    bisque: 16770244,
	    black: 0,
	    blanchedalmond: 16772045,
	    blue: 255,
	    blueviolet: 9055202,
	    brown: 10824234,
	    burlywood: 14596231,
	    cadetblue: 6266528,
	    chartreuse: 8388352,
	    chocolate: 13789470,
	    coral: 16744272,
	    cornflowerblue: 6591981,
	    cornsilk: 16775388,
	    crimson: 14423100,
	    cyan: 65535,
	    darkblue: 139,
	    darkcyan: 35723,
	    darkgoldenrod: 12092939,
	    darkgray: 11119017,
	    darkgreen: 25600,
	    darkgrey: 11119017,
	    darkkhaki: 12433259,
	    darkmagenta: 9109643,
	    darkolivegreen: 5597999,
	    darkorange: 16747520,
	    darkorchid: 10040012,
	    darkred: 9109504,
	    darksalmon: 15308410,
	    darkseagreen: 9419919,
	    darkslateblue: 4734347,
	    darkslategray: 3100495,
	    darkslategrey: 3100495,
	    darkturquoise: 52945,
	    darkviolet: 9699539,
	    deeppink: 16716947,
	    deepskyblue: 49151,
	    dimgray: 6908265,
	    dimgrey: 6908265,
	    dodgerblue: 2003199,
	    firebrick: 11674146,
	    floralwhite: 16775920,
	    forestgreen: 2263842,
	    fuchsia: 16711935,
	    gainsboro: 14474460,
	    ghostwhite: 16316671,
	    gold: 16766720,
	    goldenrod: 14329120,
	    gray: 8421504,
	    green: 32768,
	    greenyellow: 11403055,
	    grey: 8421504,
	    honeydew: 15794160,
	    hotpink: 16738740,
	    indianred: 13458524,
	    indigo: 4915330,
	    ivory: 16777200,
	    khaki: 15787660,
	    lavender: 15132410,
	    lavenderblush: 16773365,
	    lawngreen: 8190976,
	    lemonchiffon: 16775885,
	    lightblue: 11393254,
	    lightcoral: 15761536,
	    lightcyan: 14745599,
	    lightgoldenrodyellow: 16448210,
	    lightgray: 13882323,
	    lightgreen: 9498256,
	    lightgrey: 13882323,
	    lightpink: 16758465,
	    lightsalmon: 16752762,
	    lightseagreen: 2142890,
	    lightskyblue: 8900346,
	    lightslategray: 7833753,
	    lightslategrey: 7833753,
	    lightsteelblue: 11584734,
	    lightyellow: 16777184,
	    lime: 65280,
	    limegreen: 3329330,
	    linen: 16445670,
	    magenta: 16711935,
	    maroon: 8388608,
	    mediumaquamarine: 6737322,
	    mediumblue: 205,
	    mediumorchid: 12211667,
	    mediumpurple: 9662683,
	    mediumseagreen: 3978097,
	    mediumslateblue: 8087790,
	    mediumspringgreen: 64154,
	    mediumturquoise: 4772300,
	    mediumvioletred: 13047173,
	    midnightblue: 1644912,
	    mintcream: 16121850,
	    mistyrose: 16770273,
	    moccasin: 16770229,
	    navajowhite: 16768685,
	    navy: 128,
	    oldlace: 16643558,
	    olive: 8421376,
	    olivedrab: 7048739,
	    orange: 16753920,
	    orangered: 16729344,
	    orchid: 14315734,
	    palegoldenrod: 15657130,
	    palegreen: 10025880,
	    paleturquoise: 11529966,
	    palevioletred: 14381203,
	    papayawhip: 16773077,
	    peachpuff: 16767673,
	    peru: 13468991,
	    pink: 16761035,
	    plum: 14524637,
	    powderblue: 11591910,
	    purple: 8388736,
	    rebeccapurple: 6697881,
	    red: 16711680,
	    rosybrown: 12357519,
	    royalblue: 4286945,
	    saddlebrown: 9127187,
	    salmon: 16416882,
	    sandybrown: 16032864,
	    seagreen: 3050327,
	    seashell: 16774638,
	    sienna: 10506797,
	    silver: 12632256,
	    skyblue: 8900331,
	    slateblue: 6970061,
	    slategray: 7372944,
	    slategrey: 7372944,
	    snow: 16775930,
	    springgreen: 65407,
	    steelblue: 4620980,
	    tan: 13808780,
	    teal: 32896,
	    thistle: 14204888,
	    tomato: 16737095,
	    turquoise: 4251856,
	    violet: 15631086,
	    wheat: 16113331,
	    white: 16777215,
	    whitesmoke: 16119285,
	    yellow: 16776960,
	    yellowgreen: 10145074
	  });
	  d3_rgb_names.forEach(function(key, value) {
	    d3_rgb_names.set(key, d3_rgbNumber(value));
	  });
	  function d3_functor(v) {
	    return typeof v === "function" ? v : function() {
	      return v;
	    };
	  }
	  d3.functor = d3_functor;
	  d3.xhr = d3_xhrType(d3_identity);
	  function d3_xhrType(response) {
	    return function(url, mimeType, callback) {
	      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
	      mimeType = null;
	      return d3_xhr(url, mimeType, response, callback);
	    };
	  }
	  function d3_xhr(url, mimeType, response, callback) {
	    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
	    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
	    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
	      request.readyState > 3 && respond();
	    };
	    function respond() {
	      var status = request.status, result;
	      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
	        try {
	          result = response.call(xhr, request);
	        } catch (e) {
	          dispatch.error.call(xhr, e);
	          return;
	        }
	        dispatch.load.call(xhr, result);
	      } else {
	        dispatch.error.call(xhr, request);
	      }
	    }
	    request.onprogress = function(event) {
	      var o = d3.event;
	      d3.event = event;
	      try {
	        dispatch.progress.call(xhr, request);
	      } finally {
	        d3.event = o;
	      }
	    };
	    xhr.header = function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers[name];
	      if (value == null) delete headers[name]; else headers[name] = value + "";
	      return xhr;
	    };
	    xhr.mimeType = function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return xhr;
	    };
	    xhr.responseType = function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return xhr;
	    };
	    xhr.response = function(value) {
	      response = value;
	      return xhr;
	    };
	    [ "get", "post" ].forEach(function(method) {
	      xhr[method] = function() {
	        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
	      };
	    });
	    xhr.send = function(method, data, callback) {
	      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
	      request.open(method, url, true);
	      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
	      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
	      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
	      if (responseType != null) request.responseType = responseType;
	      if (callback != null) xhr.on("error", callback).on("load", function(request) {
	        callback(null, request);
	      });
	      dispatch.beforesend.call(xhr, request);
	      request.send(data == null ? null : data);
	      return xhr;
	    };
	    xhr.abort = function() {
	      request.abort();
	      return xhr;
	    };
	    d3.rebind(xhr, dispatch, "on");
	    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
	  }
	  function d3_xhr_fixCallback(callback) {
	    return callback.length === 1 ? function(error, request) {
	      callback(error == null ? request : null);
	    } : callback;
	  }
	  function d3_xhrHasResponse(request) {
	    var type = request.responseType;
	    return type && type !== "text" ? request.response : request.responseText;
	  }
	  d3.dsv = function(delimiter, mimeType) {
	    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
	    function dsv(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
	      xhr.row = function(_) {
	        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
	      };
	      return xhr;
	    }
	    function response(request) {
	      return dsv.parse(request.responseText);
	    }
	    function typedResponse(f) {
	      return function(request) {
	        return dsv.parse(request.responseText, f);
	      };
	    }
	    dsv.parse = function(text, f) {
	      var o;
	      return dsv.parseRows(text, function(row, i) {
	        if (o) return o(row, i - 1);
	        var a = new Function("d", "return {" + row.map(function(name, i) {
	          return JSON.stringify(name) + ": d[" + i + "]";
	        }).join(",") + "}");
	        o = f ? function(row, i) {
	          return f(a(row), i);
	        } : a;
	      });
	    };
	    dsv.parseRows = function(text, f) {
	      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
	      function token() {
	        if (I >= N) return EOF;
	        if (eol) return eol = false, EOL;
	        var j = I;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          var c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, '"');
	        }
	        while (I < N) {
	          var c = text.charCodeAt(I++), k = 1;
	          if (c === 10) eol = true; else if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(I) === 10) ++I, ++k;
	          } else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }
	        return text.slice(j);
	      }
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }
	      return rows;
	    };
	    dsv.format = function(rows) {
	      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
	      var fieldSet = new d3_Set(), fields = [];
	      rows.forEach(function(row) {
	        for (var field in row) {
	          if (!fieldSet.has(field)) {
	            fields.push(fieldSet.add(field));
	          }
	        }
	      });
	      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
	        return fields.map(function(field) {
	          return formatValue(row[field]);
	        }).join(delimiter);
	      })).join("\n");
	    };
	    dsv.formatRows = function(rows) {
	      return rows.map(formatRow).join("\n");
	    };
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	    function formatValue(text) {
	      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
	    }
	    return dsv;
	  };
	  d3.csv = d3.dsv(",", "text/csv");
	  d3.tsv = d3.dsv("	", "text/tab-separated-values");
	  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
	    setTimeout(callback, 17);
	  };
	  d3.timer = function() {
	    d3_timer.apply(this, arguments);
	  };
	  function d3_timer(callback, delay, then) {
	    var n = arguments.length;
	    if (n < 2) delay = 0;
	    if (n < 3) then = Date.now();
	    var time = then + delay, timer = {
	      c: callback,
	      t: time,
	      n: null
	    };
	    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
	    d3_timer_queueTail = timer;
	    if (!d3_timer_interval) {
	      d3_timer_timeout = clearTimeout(d3_timer_timeout);
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	    return timer;
	  }
	  function d3_timer_step() {
	    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
	    if (delay > 24) {
	      if (isFinite(delay)) {
	        clearTimeout(d3_timer_timeout);
	        d3_timer_timeout = setTimeout(d3_timer_step, delay);
	      }
	      d3_timer_interval = 0;
	    } else {
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  }
	  d3.timer.flush = function() {
	    d3_timer_mark();
	    d3_timer_sweep();
	  };
	  function d3_timer_mark() {
	    var now = Date.now(), timer = d3_timer_queueHead;
	    while (timer) {
	      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
	      timer = timer.n;
	    }
	    return now;
	  }
	  function d3_timer_sweep() {
	    var t0, t1 = d3_timer_queueHead, time = Infinity;
	    while (t1) {
	      if (t1.c) {
	        if (t1.t < time) time = t1.t;
	        t1 = (t0 = t1).n;
	      } else {
	        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
	      }
	    }
	    d3_timer_queueTail = t0;
	    return time;
	  }
	  function d3_format_precision(x, p) {
	    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
	  }
	  d3.round = function(x, n) {
	    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
	  };
	  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
	  d3.formatPrefix = function(value, precision) {
	    var i = 0;
	    if (value = +value) {
	      if (value < 0) value *= -1;
	      if (precision) value = d3.round(value, d3_format_precision(value, precision));
	      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
	      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
	    }
	    return d3_formatPrefixes[8 + i / 3];
	  };
	  function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	  function d3_locale_numberFormat(locale) {
	    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
	      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = locale_grouping[j = (j + 1) % locale_grouping.length];
	      }
	      return t.reverse().join(locale_thousands);
	    } : d3_identity;
	    return function(specifier) {
	      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
	      if (precision) precision = +precision.substring(1);
	      if (zfill || fill === "0" && align === "=") {
	        zfill = fill = "0";
	        align = "=";
	      }
	      switch (type) {
	       case "n":
	        comma = true;
	        type = "g";
	        break;
	
	       case "%":
	        scale = 100;
	        suffix = "%";
	        type = "f";
	        break;
	
	       case "p":
	        scale = 100;
	        suffix = "%";
	        type = "r";
	        break;
	
	       case "b":
	       case "o":
	       case "x":
	       case "X":
	        if (symbol === "#") prefix = "0" + type.toLowerCase();
	
	       case "c":
	        exponent = false;
	
	       case "d":
	        integer = true;
	        precision = 0;
	        break;
	
	       case "s":
	        scale = -1;
	        type = "r";
	        break;
	      }
	      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
	      if (type == "r" && !precision) type = "g";
	      if (precision != null) {
	        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
	      }
	      type = d3_format_types.get(type) || d3_format_typeDefault;
	      var zcomma = zfill && comma;
	      return function(value) {
	        var fullSuffix = suffix;
	        if (integer && value % 1) return "";
	        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
	        if (scale < 0) {
	          var unit = d3.formatPrefix(value, precision);
	          value = unit.scale(value);
	          fullSuffix = unit.symbol + suffix;
	        } else {
	          value *= scale;
	        }
	        value = type(value, precision);
	        var i = value.lastIndexOf("."), before, after;
	        if (i < 0) {
	          var j = exponent ? value.lastIndexOf("e") : -1;
	          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
	        } else {
	          before = value.substring(0, i);
	          after = locale_decimal + value.substring(i + 1);
	        }
	        if (!zfill && comma) before = formatGroup(before, Infinity);
	        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
	        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
	        negative += prefix;
	        value = before + after;
	        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
	      };
	    };
	  }
	  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
	  var d3_format_types = d3.map({
	    b: function(x) {
	      return x.toString(2);
	    },
	    c: function(x) {
	      return String.fromCharCode(x);
	    },
	    o: function(x) {
	      return x.toString(8);
	    },
	    x: function(x) {
	      return x.toString(16);
	    },
	    X: function(x) {
	      return x.toString(16).toUpperCase();
	    },
	    g: function(x, p) {
	      return x.toPrecision(p);
	    },
	    e: function(x, p) {
	      return x.toExponential(p);
	    },
	    f: function(x, p) {
	      return x.toFixed(p);
	    },
	    r: function(x, p) {
	      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
	    }
	  });
	  function d3_format_typeDefault(x) {
	    return x + "";
	  }
	  var d3_time = d3.time = {}, d3_date = Date;
	  function d3_date_utc() {
	    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
	  }
	  d3_date_utc.prototype = {
	    getDate: function() {
	      return this._.getUTCDate();
	    },
	    getDay: function() {
	      return this._.getUTCDay();
	    },
	    getFullYear: function() {
	      return this._.getUTCFullYear();
	    },
	    getHours: function() {
	      return this._.getUTCHours();
	    },
	    getMilliseconds: function() {
	      return this._.getUTCMilliseconds();
	    },
	    getMinutes: function() {
	      return this._.getUTCMinutes();
	    },
	    getMonth: function() {
	      return this._.getUTCMonth();
	    },
	    getSeconds: function() {
	      return this._.getUTCSeconds();
	    },
	    getTime: function() {
	      return this._.getTime();
	    },
	    getTimezoneOffset: function() {
	      return 0;
	    },
	    valueOf: function() {
	      return this._.valueOf();
	    },
	    setDate: function() {
	      d3_time_prototype.setUTCDate.apply(this._, arguments);
	    },
	    setDay: function() {
	      d3_time_prototype.setUTCDay.apply(this._, arguments);
	    },
	    setFullYear: function() {
	      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
	    },
	    setHours: function() {
	      d3_time_prototype.setUTCHours.apply(this._, arguments);
	    },
	    setMilliseconds: function() {
	      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
	    },
	    setMinutes: function() {
	      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
	    },
	    setMonth: function() {
	      d3_time_prototype.setUTCMonth.apply(this._, arguments);
	    },
	    setSeconds: function() {
	      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
	    },
	    setTime: function() {
	      d3_time_prototype.setTime.apply(this._, arguments);
	    }
	  };
	  var d3_time_prototype = Date.prototype;
	  function d3_time_interval(local, step, number) {
	    function round(date) {
	      var d0 = local(date), d1 = offset(d0, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    }
	    function ceil(date) {
	      step(date = local(new d3_date(date - 1)), 1);
	      return date;
	    }
	    function offset(date, k) {
	      step(date = new d3_date(+date), k);
	      return date;
	    }
	    function range(t0, t1, dt) {
	      var time = ceil(t0), times = [];
	      if (dt > 1) {
	        while (time < t1) {
	          if (!(number(time) % dt)) times.push(new Date(+time));
	          step(time, 1);
	        }
	      } else {
	        while (time < t1) times.push(new Date(+time)), step(time, 1);
	      }
	      return times;
	    }
	    function range_utc(t0, t1, dt) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = t0;
	        return range(utc, t1, dt);
	      } finally {
	        d3_date = Date;
	      }
	    }
	    local.floor = local;
	    local.round = round;
	    local.ceil = ceil;
	    local.offset = offset;
	    local.range = range;
	    var utc = local.utc = d3_time_interval_utc(local);
	    utc.floor = utc;
	    utc.round = d3_time_interval_utc(round);
	    utc.ceil = d3_time_interval_utc(ceil);
	    utc.offset = d3_time_interval_utc(offset);
	    utc.range = range_utc;
	    return local;
	  }
	  function d3_time_interval_utc(method) {
	    return function(date, k) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = date;
	        return method(utc, k)._;
	      } finally {
	        d3_date = Date;
	      }
	    };
	  }
	  d3_time.year = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setMonth(0, 1);
	    return date;
	  }, function(date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	  }, function(date) {
	    return date.getFullYear();
	  });
	  d3_time.years = d3_time.year.range;
	  d3_time.years.utc = d3_time.year.utc.range;
	  d3_time.day = d3_time_interval(function(date) {
	    var day = new d3_date(2e3, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	  }, function(date, offset) {
	    date.setDate(date.getDate() + offset);
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	  d3_time.days = d3_time.day.range;
	  d3_time.days.utc = d3_time.day.utc.range;
	  d3_time.dayOfYear = function(date) {
	    var year = d3_time.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	  };
	  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
	    i = 7 - i;
	    var interval = d3_time[day] = d3_time_interval(function(date) {
	      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	      return date;
	    }, function(date, offset) {
	      date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });
	    d3_time[day + "s"] = interval.range;
	    d3_time[day + "s"].utc = interval.utc.range;
	    d3_time[day + "OfYear"] = function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
	    };
	  });
	  d3_time.week = d3_time.sunday;
	  d3_time.weeks = d3_time.sunday.range;
	  d3_time.weeks.utc = d3_time.sunday.utc.range;
	  d3_time.weekOfYear = d3_time.sundayOfYear;
	  function d3_locale_timeFormat(locale) {
	    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	    function d3_time_format(template) {
	      var n = template.length;
	      function format(date) {
	        var string = [], i = -1, j = 0, c, p, f;
	        while (++i < n) {
	          if (template.charCodeAt(i) === 37) {
	            string.push(template.slice(j, i));
	            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
	            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	        string.push(template.slice(j, i));
	        return string.join("");
	      }
	      format.parse = function(string) {
	        var d = {
	          y: 1900,
	          m: 0,
	          d: 1,
	          H: 0,
	          M: 0,
	          S: 0,
	          L: 0,
	          Z: null
	        }, i = d3_time_parse(d, template, string, 0);
	        if (i != string.length) return null;
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
	        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          date.setFullYear(d.y, 0, 1);
	          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
	        } else date.setFullYear(d.y, d.m, d.d);
	        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
	        return localZ ? date._ : date;
	      };
	      format.toString = function() {
	        return template;
	      };
	      return format;
	    }
	    function d3_time_parse(date, template, string, j) {
	      var c, p, t, i = 0, n = template.length, m = string.length;
	      while (i < n) {
	        if (j >= m) return -1;
	        c = template.charCodeAt(i++);
	        if (c === 37) {
	          t = template.charAt(i++);
	          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
	          if (!p || (j = p(date, string, j)) < 0) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	      return j;
	    }
	    d3_time_format.utc = function(template) {
	      var local = d3_time_format(template);
	      function format(date) {
	        try {
	          d3_date = d3_date_utc;
	          var utc = new d3_date();
	          utc._ = date;
	          return local(utc);
	        } finally {
	          d3_date = Date;
	        }
	      }
	      format.parse = function(string) {
	        try {
	          d3_date = d3_date_utc;
	          var date = local.parse(string);
	          return date && date._;
	        } finally {
	          d3_date = Date;
	        }
	      };
	      format.toString = local.toString;
	      return format;
	    };
	    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
	    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
	    locale_periods.forEach(function(p, i) {
	      d3_time_periodLookup.set(p.toLowerCase(), i);
	    });
	    var d3_time_formats = {
	      a: function(d) {
	        return locale_shortDays[d.getDay()];
	      },
	      A: function(d) {
	        return locale_days[d.getDay()];
	      },
	      b: function(d) {
	        return locale_shortMonths[d.getMonth()];
	      },
	      B: function(d) {
	        return locale_months[d.getMonth()];
	      },
	      c: d3_time_format(locale_dateTime),
	      d: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      e: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      H: function(d, p) {
	        return d3_time_formatPad(d.getHours(), p, 2);
	      },
	      I: function(d, p) {
	        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
	      },
	      j: function(d, p) {
	        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
	      },
	      L: function(d, p) {
	        return d3_time_formatPad(d.getMilliseconds(), p, 3);
	      },
	      m: function(d, p) {
	        return d3_time_formatPad(d.getMonth() + 1, p, 2);
	      },
	      M: function(d, p) {
	        return d3_time_formatPad(d.getMinutes(), p, 2);
	      },
	      p: function(d) {
	        return locale_periods[+(d.getHours() >= 12)];
	      },
	      S: function(d, p) {
	        return d3_time_formatPad(d.getSeconds(), p, 2);
	      },
	      U: function(d, p) {
	        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
	      },
	      w: function(d) {
	        return d.getDay();
	      },
	      W: function(d, p) {
	        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
	      },
	      x: d3_time_format(locale_date),
	      X: d3_time_format(locale_time),
	      y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
	      },
	      Y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
	      },
	      Z: d3_time_zone,
	      "%": function() {
	        return "%";
	      }
	    };
	    var d3_time_parsers = {
	      a: d3_time_parseWeekdayAbbrev,
	      A: d3_time_parseWeekday,
	      b: d3_time_parseMonthAbbrev,
	      B: d3_time_parseMonth,
	      c: d3_time_parseLocaleFull,
	      d: d3_time_parseDay,
	      e: d3_time_parseDay,
	      H: d3_time_parseHour24,
	      I: d3_time_parseHour24,
	      j: d3_time_parseDayOfYear,
	      L: d3_time_parseMilliseconds,
	      m: d3_time_parseMonthNumber,
	      M: d3_time_parseMinutes,
	      p: d3_time_parseAmPm,
	      S: d3_time_parseSeconds,
	      U: d3_time_parseWeekNumberSunday,
	      w: d3_time_parseWeekdayNumber,
	      W: d3_time_parseWeekNumberMonday,
	      x: d3_time_parseLocaleDate,
	      X: d3_time_parseLocaleTime,
	      y: d3_time_parseYear,
	      Y: d3_time_parseFullYear,
	      Z: d3_time_parseZone,
	      "%": d3_time_parseLiteralPercent
	    };
	    function d3_time_parseWeekdayAbbrev(date, string, i) {
	      d3_time_dayAbbrevRe.lastIndex = 0;
	      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseWeekday(date, string, i) {
	      d3_time_dayRe.lastIndex = 0;
	      var n = d3_time_dayRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonthAbbrev(date, string, i) {
	      d3_time_monthAbbrevRe.lastIndex = 0;
	      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonth(date, string, i) {
	      d3_time_monthRe.lastIndex = 0;
	      var n = d3_time_monthRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseLocaleFull(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
	    }
	    function d3_time_parseLocaleDate(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
	    }
	    function d3_time_parseLocaleTime(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
	    }
	    function d3_time_parseAmPm(date, string, i) {
	      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
	      return n == null ? -1 : (date.p = n, i);
	    }
	    return d3_time_format;
	  }
	  var d3_time_formatPads = {
	    "-": "",
	    _: " ",
	    "0": "0"
	  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
	  function d3_time_formatPad(value, fill, width) {
	    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	  function d3_time_formatRe(names) {
	    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
	  }
	  function d3_time_formatLookup(names) {
	    var map = new d3_Map(), i = -1, n = names.length;
	    while (++i < n) map.set(names[i].toLowerCase(), i);
	    return map;
	  }
	  function d3_time_parseWeekdayNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
	    return n ? (date.w = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberSunday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.U = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberMonday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.W = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseFullYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
	    return n ? (date.y = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
	  }
	  function d3_time_parseZone(date, string, i) {
	    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
	    i + 5) : -1;
	  }
	  function d3_time_expandYear(d) {
	    return d + (d > 68 ? 1900 : 2e3);
	  }
	  function d3_time_parseMonthNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
	  }
	  function d3_time_parseDay(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.d = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseDayOfYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.j = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseHour24(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.H = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMinutes(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.M = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseSeconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.S = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMilliseconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.L = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_zone(d) {
	    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
	    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
	  }
	  function d3_time_parseLiteralPercent(date, string, i) {
	    d3_time_percentRe.lastIndex = 0;
	    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	  function d3_time_formatMulti(formats) {
	    var n = formats.length, i = -1;
	    while (++i < n) formats[i][0] = this(formats[i][0]);
	    return function(date) {
	      var i = 0, f = formats[i];
	      while (!f[1](date)) f = formats[++i];
	      return f[0](date);
	    };
	  }
	  d3.locale = function(locale) {
	    return {
	      numberFormat: d3_locale_numberFormat(locale),
	      timeFormat: d3_locale_timeFormat(locale)
	    };
	  };
	  var d3_locale_enUS = d3.locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [ 3 ],
	    currency: [ "$", "" ],
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: [ "AM", "PM" ],
	    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	  });
	  d3.format = d3_locale_enUS.numberFormat;
	  d3.geo = {};
	  function d3_adder() {}
	  d3_adder.prototype = {
	    s: 0,
	    t: 0,
	    add: function(y) {
	      d3_adderSum(y, this.t, d3_adderTemp);
	      d3_adderSum(d3_adderTemp.s, this.s, this);
	      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
	    },
	    reset: function() {
	      this.s = this.t = 0;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	  var d3_adderTemp = new d3_adder();
	  function d3_adderSum(a, b, o) {
	    var x = o.s = a + b, bv = x - a, av = x - bv;
	    o.t = a - av + (b - bv);
	  }
	  d3.geo.stream = function(object, listener) {
	    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
	      d3_geo_streamObjectType[object.type](object, listener);
	    } else {
	      d3_geo_streamGeometry(object, listener);
	    }
	  };
	  function d3_geo_streamGeometry(geometry, listener) {
	    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
	      d3_geo_streamGeometryType[geometry.type](geometry, listener);
	    }
	  }
	  var d3_geo_streamObjectType = {
	    Feature: function(feature, listener) {
	      d3_geo_streamGeometry(feature.geometry, listener);
	    },
	    FeatureCollection: function(object, listener) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
	    }
	  };
	  var d3_geo_streamGeometryType = {
	    Sphere: function(object, listener) {
	      listener.sphere();
	    },
	    Point: function(object, listener) {
	      object = object.coordinates;
	      listener.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, listener) {
	      d3_geo_streamLine(object.coordinates, listener, 0);
	    },
	    MultiLineString: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
	    },
	    Polygon: function(object, listener) {
	      d3_geo_streamPolygon(object.coordinates, listener);
	    },
	    MultiPolygon: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
	    },
	    GeometryCollection: function(object, listener) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
	    }
	  };
	  function d3_geo_streamLine(coordinates, listener, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    listener.lineStart();
	    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
	    listener.lineEnd();
	  }
	  function d3_geo_streamPolygon(coordinates, listener) {
	    var i = -1, n = coordinates.length;
	    listener.polygonStart();
	    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
	    listener.polygonEnd();
	  }
	  d3.geo.area = function(object) {
	    d3_geo_areaSum = 0;
	    d3.geo.stream(object, d3_geo_area);
	    return d3_geo_areaSum;
	  };
	  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
	  var d3_geo_area = {
	    sphere: function() {
	      d3_geo_areaSum += 4 * π;
	    },
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_areaRingSum.reset();
	      d3_geo_area.lineStart = d3_geo_areaRingStart;
	    },
	    polygonEnd: function() {
	      var area = 2 * d3_geo_areaRingSum;
	      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
	      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
	    }
	  };
	  function d3_geo_areaRingStart() {
	    var λ00, φ00, λ0, cosφ0, sinφ0;
	    d3_geo_area.point = function(λ, φ) {
	      d3_geo_area.point = nextPoint;
	      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
	      sinφ0 = Math.sin(φ);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      φ = φ * d3_radians / 2 + π / 4;
	      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
	      d3_geo_areaRingSum.add(Math.atan2(v, u));
	      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
	    }
	    d3_geo_area.lineEnd = function() {
	      nextPoint(λ00, φ00);
	    };
	  }
	  function d3_geo_cartesian(spherical) {
	    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
	    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
	  }
	  function d3_geo_cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	  function d3_geo_cartesianCross(a, b) {
	    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
	  }
	  function d3_geo_cartesianAdd(a, b) {
	    a[0] += b[0];
	    a[1] += b[1];
	    a[2] += b[2];
	  }
	  function d3_geo_cartesianScale(vector, k) {
	    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
	  }
	  function d3_geo_cartesianNormalize(d) {
	    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l;
	    d[1] /= l;
	    d[2] /= l;
	  }
	  function d3_geo_spherical(cartesian) {
	    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
	  }
	  function d3_geo_sphericalEqual(a, b) {
	    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
	  }
	  d3.geo.bounds = function() {
	    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
	    var bound = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        bound.point = ringPoint;
	        bound.lineStart = ringStart;
	        bound.lineEnd = ringEnd;
	        dλSum = 0;
	        d3_geo_area.polygonStart();
	      },
	      polygonEnd: function() {
	        d3_geo_area.polygonEnd();
	        bound.point = point;
	        bound.lineStart = lineStart;
	        bound.lineEnd = lineEnd;
	        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
	        range[0] = λ0, range[1] = λ1;
	      }
	    };
	    function point(λ, φ) {
	      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
	      if (φ < φ0) φ0 = φ;
	      if (φ > φ1) φ1 = φ;
	    }
	    function linePoint(λ, φ) {
	      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
	      if (p0) {
	        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
	        d3_geo_cartesianNormalize(inflection);
	        inflection = d3_geo_spherical(inflection);
	        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
	        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = inflection[1] * d3_degrees;
	          if (φi > φ1) φ1 = φi;
	        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = -inflection[1] * d3_degrees;
	          if (φi < φ0) φ0 = φi;
	        } else {
	          if (φ < φ0) φ0 = φ;
	          if (φ > φ1) φ1 = φ;
	        }
	        if (antimeridian) {
	          if (λ < λ_) {
	            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	          } else {
	            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	          }
	        } else {
	          if (λ1 >= λ0) {
	            if (λ < λ0) λ0 = λ;
	            if (λ > λ1) λ1 = λ;
	          } else {
	            if (λ > λ_) {
	              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	            } else {
	              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	            }
	          }
	        }
	      } else {
	        point(λ, φ);
	      }
	      p0 = p, λ_ = λ;
	    }
	    function lineStart() {
	      bound.point = linePoint;
	    }
	    function lineEnd() {
	      range[0] = λ0, range[1] = λ1;
	      bound.point = point;
	      p0 = null;
	    }
	    function ringPoint(λ, φ) {
	      if (p0) {
	        var dλ = λ - λ_;
	        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
	      } else λ__ = λ, φ__ = φ;
	      d3_geo_area.point(λ, φ);
	      linePoint(λ, φ);
	    }
	    function ringStart() {
	      d3_geo_area.lineStart();
	    }
	    function ringEnd() {
	      ringPoint(λ__, φ__);
	      d3_geo_area.lineEnd();
	      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
	      range[0] = λ0, range[1] = λ1;
	      p0 = null;
	    }
	    function angle(λ0, λ1) {
	      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
	    }
	    function compareRanges(a, b) {
	      return a[0] - b[0];
	    }
	    function withinRange(x, range) {
	      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	    }
	    return function(feature) {
	      φ1 = λ1 = -(λ0 = φ0 = Infinity);
	      ranges = [];
	      d3.geo.stream(feature, bound);
	      var n = ranges.length;
	      if (n) {
	        ranges.sort(compareRanges);
	        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
	          b = ranges[i];
	          if (withinRange(b[0], a) || withinRange(b[1], a)) {
	            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	          } else {
	            merged.push(a = b);
	          }
	        }
	        var best = -Infinity, dλ;
	        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
	          b = merged[i];
	          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
	        }
	      }
	      ranges = range = null;
	      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
	    };
	  }();
	  d3.geo.centroid = function(object) {
	    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	    d3.geo.stream(object, d3_geo_centroid);
	    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
	    if (m < ε2) {
	      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
	      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
	      m = x * x + y * y + z * z;
	      if (m < ε2) return [ NaN, NaN ];
	    }
	    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
	  };
	  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
	  var d3_geo_centroid = {
	    sphere: d3_noop,
	    point: d3_geo_centroidPoint,
	    lineStart: d3_geo_centroidLineStart,
	    lineEnd: d3_geo_centroidLineEnd,
	    polygonStart: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
	    }
	  };
	  function d3_geo_centroidPoint(λ, φ) {
	    λ *= d3_radians;
	    var cosφ = Math.cos(φ *= d3_radians);
	    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
	  }
	  function d3_geo_centroidPointXYZ(x, y, z) {
	    ++d3_geo_centroidW0;
	    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
	    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
	    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
	  }
	  function d3_geo_centroidLineStart() {
	    var x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroid.point = nextPoint;
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_centroidLineEnd() {
	    d3_geo_centroid.point = d3_geo_centroidPoint;
	  }
	  function d3_geo_centroidRingStart() {
	    var λ00, φ00, x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ00 = λ, φ00 = φ;
	      d3_geo_centroid.point = nextPoint;
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    d3_geo_centroid.lineEnd = function() {
	      nextPoint(λ00, φ00);
	      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
	      d3_geo_centroid.point = d3_geo_centroidPoint;
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
	      d3_geo_centroidX2 += v * cx;
	      d3_geo_centroidY2 += v * cy;
	      d3_geo_centroidZ2 += v * cz;
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_compose(a, b) {
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	    return compose;
	  }
	  function d3_true() {
	    return true;
	  }
	  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
	    var subject = [], clip = [];
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n];
	      if (d3_geo_sphericalEqual(p0, p1)) {
	        listener.lineStart();
	        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
	        listener.lineEnd();
	        return;
	      }
	      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
	      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	    });
	    clip.sort(compare);
	    d3_geo_clipPolygonLinkCircular(subject);
	    d3_geo_clipPolygonLinkCircular(clip);
	    if (!subject.length) return;
	    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
	      clip[i].e = entry = !entry;
	    }
	    var start = subject[0], points, point;
	    while (1) {
	      var current = start, isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      listener.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, listener);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, listener);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      listener.lineEnd();
	    }
	  }
	  function d3_geo_clipPolygonLinkCircular(array) {
	    if (!(n = array.length)) return;
	    var n, i = 0, a = array[0], b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other;
	    this.e = entry;
	    this.v = false;
	    this.n = this.p = null;
	  }
	  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
	    return function(rotate, listener) {
	      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = d3.merge(segments);
	          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
	          if (segments.length) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
	          } else if (clipStartInside) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            interpolate(null, null, 1, listener);
	            listener.lineEnd();
	          }
	          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          listener.polygonStart();
	          listener.lineStart();
	          interpolate(null, null, 1, listener);
	          listener.lineEnd();
	          listener.polygonEnd();
	        }
	      };
	      function point(λ, φ) {
	        var point = rotate(λ, φ);
	        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
	      }
	      function pointLine(λ, φ) {
	        var point = rotate(λ, φ);
	        line.point(point[0], point[1]);
	      }
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	      var segments;
	      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
	      function pointRing(λ, φ) {
	        ring.push([ λ, φ ]);
	        var point = rotate(λ, φ);
	        ringListener.point(point[0], point[1]);
	      }
	      function ringStart() {
	        ringListener.lineStart();
	        ring = [];
	      }
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringListener.lineEnd();
	        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	        if (!n) return;
	        if (clean & 1) {
	          segment = ringSegments[0];
	          var n = segment.length - 1, i = -1, point;
	          if (n > 0) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            while (++i < n) listener.point((point = segment[i])[0], point[1]);
	            listener.lineEnd();
	          }
	          return;
	        }
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
	      }
	      return clip;
	    };
	  }
	  function d3_geo_clipSegmentLength1(segment) {
	    return segment.length > 1;
	  }
	  function d3_geo_clipBufferListener() {
	    var lines = [], line;
	    return {
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      point: function(λ, φ) {
	        line.push([ λ, φ ]);
	      },
	      lineEnd: d3_noop,
	      buffer: function() {
	        var buffer = lines;
	        lines = [];
	        line = null;
	        return buffer;
	      },
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      }
	    };
	  }
	  function d3_geo_clipSort(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
	  }
	  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
	  function d3_geo_clipAntimeridianLine(listener) {
	    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
	    return {
	      lineStart: function() {
	        listener.lineStart();
	        clean = 1;
	      },
	      point: function(λ1, φ1) {
	        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
	        if (abs(dλ - π) < ε) {
	          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          listener.point(λ1, φ0);
	          clean = 0;
	        } else if (sλ0 !== sλ1 && dλ >= π) {
	          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
	          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
	          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          clean = 0;
	        }
	        listener.point(λ0 = λ1, φ0 = φ1);
	        sλ0 = sλ1;
	      },
	      lineEnd: function() {
	        listener.lineEnd();
	        λ0 = φ0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean;
	      }
	    };
	  }
	  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
	    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
	    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
	  }
	  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
	    var φ;
	    if (from == null) {
	      φ = direction * halfπ;
	      listener.point(-π, φ);
	      listener.point(0, φ);
	      listener.point(π, φ);
	      listener.point(π, 0);
	      listener.point(π, -φ);
	      listener.point(0, -φ);
	      listener.point(-π, -φ);
	      listener.point(-π, 0);
	      listener.point(-π, φ);
	    } else if (abs(from[0] - to[0]) > ε) {
	      var s = from[0] < to[0] ? π : -π;
	      φ = direction * s / 2;
	      listener.point(-s, φ);
	      listener.point(0, φ);
	      listener.point(s, φ);
	    } else {
	      listener.point(to[0], to[1]);
	    }
	  }
	  function d3_geo_pointInPolygon(point, polygon) {
	    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
	    d3_geo_areaRingSum.reset();
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      var ring = polygon[i], m = ring.length;
	      if (!m) continue;
	      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
	      while (true) {
	        if (j === m) j = 0;
	        point = ring[j];
	        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
	        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
	        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
	        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
	          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
	          d3_geo_cartesianNormalize(arc);
	          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
	          d3_geo_cartesianNormalize(intersection);
	          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
	          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
	          }
	        }
	        if (!j++) break;
	        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
	      }
	    }
	    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
	  }
	  function d3_geo_clipCircle(radius) {
	    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
	    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
	    function visible(λ, φ) {
	      return Math.cos(λ) * Math.cos(φ) > cr;
	    }
	    function clipLine(listener) {
	      var point0, c0, v0, v00, clean;
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(λ, φ) {
	          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
	          if (!point0 && (v00 = v0 = v)) listener.lineStart();
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
	              point1[0] += ε;
	              point1[1] += ε;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              listener.lineStart();
	              point2 = intersect(point1, point0);
	              listener.point(point2[0], point2[1]);
	            } else {
	              point2 = intersect(point0, point1);
	              listener.point(point2[0], point2[1]);
	              listener.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	              } else {
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
	            listener.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) listener.lineEnd();
	          point0 = null;
	        },
	        clean: function() {
	          return clean | (v00 && v0) << 1;
	        }
	      };
	    }
	    function intersect(a, b, two) {
	      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
	      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
	      if (!determinant) return !two && a;
	      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
	      d3_geo_cartesianAdd(A, B);
	      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
	      if (t2 < 0) return;
	      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
	      d3_geo_cartesianAdd(q, A);
	      q = d3_geo_spherical(q);
	      if (!two) return q;
	      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
	      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
	      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
	      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
	      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
	        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
	        d3_geo_cartesianAdd(q1, A);
	        return [ q, d3_geo_spherical(q1) ];
	      }
	    }
	    function code(λ, φ) {
	      var r = smallRadius ? radius : π - radius, code = 0;
	      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
	      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
	      return code;
	    }
	  }
	  function d3_geom_clipLine(x0, y0, x1, y1) {
	    return function(line) {
	      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
	      r = x0 - ax;
	      if (!dx && r > 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dx > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = x1 - ax;
	      if (!dx && r < 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dx > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      r = y0 - ay;
	      if (!dy && r > 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dy > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = y1 - ay;
	      if (!dy && r < 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dy > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      if (t0 > 0) line.a = {
	        x: ax + t0 * dx,
	        y: ay + t0 * dy
	      };
	      if (t1 < 1) line.b = {
	        x: ax + t1 * dx,
	        y: ay + t1 * dy
	      };
	      return line;
	    };
	  }
	  var d3_geo_clipExtentMAX = 1e9;
	  d3.geo.clipExtent = function() {
	    var x0, y0, x1, y1, stream, clip, clipExtent = {
	      stream: function(output) {
	        if (stream) stream.valid = false;
	        stream = clip(output);
	        stream.valid = true;
	        return stream;
	      },
	      extent: function(_) {
	        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
	        if (stream) stream.valid = false, stream = null;
	        return clipExtent;
	      }
	    };
	    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
	  };
	  function d3_geo_clipExtent(x0, y0, x1, y1) {
	    return function(listener) {
	      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          listener = bufferListener;
	          segments = [];
	          polygon = [];
	          clean = true;
	        },
	        polygonEnd: function() {
	          listener = listener_;
	          segments = d3.merge(segments);
	          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
	          if (inside || visible) {
	            listener.polygonStart();
	            if (inside) {
	              listener.lineStart();
	              interpolate(null, null, 1, listener);
	              listener.lineEnd();
	            }
	            if (visible) {
	              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
	            }
	            listener.polygonEnd();
	          }
	          segments = polygon = ring = null;
	        }
	      };
	      function insidePolygon(p) {
	        var wn = 0, n = polygon.length, y = p[1];
	        for (var i = 0; i < n; ++i) {
	          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
	            b = v[j];
	            if (a[1] <= y) {
	              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
	            } else {
	              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
	            }
	            a = b;
	          }
	        }
	        return wn !== 0;
	      }
	      function interpolate(from, to, direction, listener) {
	        var a = 0, a1 = 0;
	        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
	          do {
	            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	          } while ((a = (a + direction + 4) % 4) !== a1);
	        } else {
	          listener.point(to[0], to[1]);
	        }
	      }
	      function pointVisible(x, y) {
	        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	      }
	      function point(x, y) {
	        if (pointVisible(x, y)) listener.point(x, y);
	      }
	      var x__, y__, v__, x_, y_, v_, first, clean;
	      function lineStart() {
	        clip.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferListener.rejoin();
	          segments.push(bufferListener.buffer());
	        }
	        clip.point = point;
	        if (v_) listener.lineEnd();
	      }
	      function linePoint(x, y) {
	        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
	        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
	        var v = pointVisible(x, y);
	        if (polygon) ring.push([ x, y ]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            listener.lineStart();
	            listener.point(x, y);
	          }
	        } else {
	          if (v && v_) listener.point(x, y); else {
	            var l = {
	              a: {
	                x: x_,
	                y: y_
	              },
	              b: {
	                x: x,
	                y: y
	              }
	            };
	            if (clipLine(l)) {
	              if (!v_) {
	                listener.lineStart();
	                listener.point(l.a.x, l.a.y);
	              }
	              listener.point(l.b.x, l.b.y);
	              if (!v) listener.lineEnd();
	              clean = false;
	            } else if (v) {
	              listener.lineStart();
	              listener.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	      return clip;
	    };
	    function corner(p, direction) {
	      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
	    }
	    function compare(a, b) {
	      return comparePoints(a.x, b.x);
	    }
	    function comparePoints(a, b) {
	      var ca = corner(a, 1), cb = corner(b, 1);
	      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
	    }
	  }
	  function d3_geo_conic(projectAt) {
	    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
	    p.parallels = function(_) {
	      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
	      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
	    };
	    return p;
	  }
	  function d3_geo_conicEqualArea(φ0, φ1) {
	    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
	    function forward(λ, φ) {
	      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
	      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = ρ0 - y;
	      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEqualArea = function() {
	    return d3_geo_conic(d3_geo_conicEqualArea);
	  }).raw = d3_geo_conicEqualArea;
	  d3.geo.albers = function() {
	    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
	  };
	  d3.geo.albersUsa = function() {
	    var lower48 = d3.geo.albers();
	    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
	    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
	    var point, pointStream = {
	      point: function(x, y) {
	        point = [ x, y ];
	      }
	    }, lower48Point, alaskaPoint, hawaiiPoint;
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      point = null;
	      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
	      return point;
	    }
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
	      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
	    };
	    albersUsa.stream = function(stream) {
	      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
	      return {
	        point: function(x, y) {
	          lower48Stream.point(x, y);
	          alaskaStream.point(x, y);
	          hawaiiStream.point(x, y);
	        },
	        sphere: function() {
	          lower48Stream.sphere();
	          alaskaStream.sphere();
	          hawaiiStream.sphere();
	        },
	        lineStart: function() {
	          lower48Stream.lineStart();
	          alaskaStream.lineStart();
	          hawaiiStream.lineStart();
	        },
	        lineEnd: function() {
	          lower48Stream.lineEnd();
	          alaskaStream.lineEnd();
	          hawaiiStream.lineEnd();
	        },
	        polygonStart: function() {
	          lower48Stream.polygonStart();
	          alaskaStream.polygonStart();
	          hawaiiStream.polygonStart();
	        },
	        polygonEnd: function() {
	          lower48Stream.polygonEnd();
	          alaskaStream.polygonEnd();
	          hawaiiStream.polygonEnd();
	        }
	      };
	    };
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_);
	      alaska.precision(_);
	      hawaii.precision(_);
	      return albersUsa;
	    };
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_);
	      alaska.scale(_ * .35);
	      hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
	      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      return albersUsa;
	    };
	    return albersUsa.scale(1070);
	  };
	  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_pathAreaPolygon = 0;
	      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
	      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
	    }
	  };
	  function d3_geo_pathAreaRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathArea.point = function(x, y) {
	      d3_geo_pathArea.point = nextPoint;
	      x00 = x0 = x, y00 = y0 = y;
	    };
	    function nextPoint(x, y) {
	      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
	      x0 = x, y0 = y;
	    }
	    d3_geo_pathArea.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
	  var d3_geo_pathBounds = {
	    point: d3_geo_pathBoundsPoint,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_pathBoundsPoint(x, y) {
	    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
	    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
	    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
	    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
	  }
	  function d3_geo_pathBuffer() {
	    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = d3_geo_pathBufferCircle(_);
	        return stream;
	      },
	      result: function() {
	        if (buffer.length) {
	          var result = buffer.join("");
	          buffer = [];
	          return result;
	        }
	      }
	    };
	    function point(x, y) {
	      buffer.push("M", x, ",", y, pointCircle);
	    }
	    function pointLineStart(x, y) {
	      buffer.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      buffer.push("L", x, ",", y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      buffer.push("Z");
	    }
	    return stream;
	  }
	  function d3_geo_pathBufferCircle(radius) {
	    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
	  }
	  var d3_geo_pathCentroid = {
	    point: d3_geo_pathCentroidPoint,
	    lineStart: d3_geo_pathCentroidLineStart,
	    lineEnd: d3_geo_pathCentroidLineEnd,
	    polygonStart: function() {
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
	      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
	    }
	  };
	  function d3_geo_pathCentroidPoint(x, y) {
	    d3_geo_centroidX0 += x;
	    d3_geo_centroidY0 += y;
	    ++d3_geo_centroidZ0;
	  }
	  function d3_geo_pathCentroidLineStart() {
	    var x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	  }
	  function d3_geo_pathCentroidLineEnd() {
	    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	  }
	  function d3_geo_pathCentroidRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      z = y0 * x - x0 * y;
	      d3_geo_centroidX2 += z * (x0 + x);
	      d3_geo_centroidY2 += z * (y0 + y);
	      d3_geo_centroidZ2 += z * 3;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	    d3_geo_pathCentroid.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  function d3_geo_pathContext(context) {
	    var pointRadius = 4.5;
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	      result: d3_noop
	    };
	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, τ);
	    }
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      context.closePath();
	    }
	    return stream;
	  }
	  function d3_geo_resample(project) {
	    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
	    function resample(stream) {
	      return (maxDepth ? resampleRecursive : resampleNone)(stream);
	    }
	    function resampleNone(stream) {
	      return d3_geo_transformPoint(stream, function(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      });
	    }
	    function resampleRecursive(stream) {
	      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
	      var resample = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          stream.polygonStart();
	          resample.lineStart = ringStart;
	        },
	        polygonEnd: function() {
	          stream.polygonEnd();
	          resample.lineStart = lineStart;
	        }
	      };
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	      function lineStart() {
	        x0 = NaN;
	        resample.point = linePoint;
	        stream.lineStart();
	      }
	      function linePoint(λ, φ) {
	        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	      function lineEnd() {
	        resample.point = point;
	        stream.lineEnd();
	      }
	      function ringStart() {
	        lineStart();
	        resample.point = ringPoint;
	        resample.lineEnd = ringEnd;
	      }
	      function ringPoint(λ, φ) {
	        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resample.point = linePoint;
	      }
	      function ringEnd() {
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
	        resample.lineEnd = lineEnd;
	        lineEnd();
	      }
	      return resample;
	    }
	    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
	      if (d2 > 4 * δ2 && depth--) {
	        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
	          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    resample.precision = function(_) {
	      if (!arguments.length) return Math.sqrt(δ2);
	      maxDepth = (δ2 = _ * _) > 0 && 16;
	      return resample;
	    };
	    return resample;
	  }
	  d3.geo.path = function() {
	    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
	        d3.geo.stream(object, cacheStream);
	      }
	      return contextStream.result();
	    }
	    path.area = function(object) {
	      d3_geo_pathAreaSum = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathArea));
	      return d3_geo_pathAreaSum;
	    };
	    path.centroid = function(object) {
	      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
	      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
	    };
	    path.bounds = function(object) {
	      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
	      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
	      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
	    };
	    path.projection = function(_) {
	      if (!arguments.length) return projection;
	      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
	      return reset();
	    };
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return reset();
	    };
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	    function reset() {
	      cacheStream = null;
	      return path;
	    }
	    return path.projection(d3.geo.albersUsa()).context(null);
	  };
	  function d3_geo_pathProjectStream(project) {
	    var resample = d3_geo_resample(function(x, y) {
	      return project([ x * d3_degrees, y * d3_degrees ]);
	    });
	    return function(stream) {
	      return d3_geo_projectionRadians(resample(stream));
	    };
	  }
	  d3.geo.transform = function(methods) {
	    return {
	      stream: function(stream) {
	        var transform = new d3_geo_transform(stream);
	        for (var k in methods) transform[k] = methods[k];
	        return transform;
	      }
	    };
	  };
	  function d3_geo_transform(stream) {
	    this.stream = stream;
	  }
	  d3_geo_transform.prototype = {
	    point: function(x, y) {
	      this.stream.point(x, y);
	    },
	    sphere: function() {
	      this.stream.sphere();
	    },
	    lineStart: function() {
	      this.stream.lineStart();
	    },
	    lineEnd: function() {
	      this.stream.lineEnd();
	    },
	    polygonStart: function() {
	      this.stream.polygonStart();
	    },
	    polygonEnd: function() {
	      this.stream.polygonEnd();
	    }
	  };
	  function d3_geo_transformPoint(stream, point) {
	    return {
	      point: point,
	      sphere: function() {
	        stream.sphere();
	      },
	      lineStart: function() {
	        stream.lineStart();
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	      },
	      polygonStart: function() {
	        stream.polygonStart();
	      },
	      polygonEnd: function() {
	        stream.polygonEnd();
	      }
	    };
	  }
	  d3.geo.projection = d3_geo_projection;
	  d3.geo.projectionMutator = d3_geo_projectionMutator;
	  function d3_geo_projection(project) {
	    return d3_geo_projectionMutator(function() {
	      return project;
	    })();
	  }
	  function d3_geo_projectionMutator(projectAt) {
	    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
	      x = project(x, y);
	      return [ x[0] * k + δx, δy - x[1] * k ];
	    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
	    function projection(point) {
	      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
	      return [ point[0] * k + δx, δy - point[1] * k ];
	    }
	    function invert(point) {
	      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
	      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
	    }
	    projection.stream = function(output) {
	      if (stream) stream.valid = false;
	      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
	      stream.valid = true;
	      return stream;
	    };
	    projection.clipAngle = function(_) {
	      if (!arguments.length) return clipAngle;
	      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
	      return invalidate();
	    };
	    projection.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent;
	      clipExtent = _;
	      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
	      return invalidate();
	    };
	    projection.scale = function(_) {
	      if (!arguments.length) return k;
	      k = +_;
	      return reset();
	    };
	    projection.translate = function(_) {
	      if (!arguments.length) return [ x, y ];
	      x = +_[0];
	      y = +_[1];
	      return reset();
	    };
	    projection.center = function(_) {
	      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
	      λ = _[0] % 360 * d3_radians;
	      φ = _[1] % 360 * d3_radians;
	      return reset();
	    };
	    projection.rotate = function(_) {
	      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
	      δλ = _[0] % 360 * d3_radians;
	      δφ = _[1] % 360 * d3_radians;
	      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
	      return reset();
	    };
	    d3.rebind(projection, projectResample, "precision");
	    function reset() {
	      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
	      var center = project(λ, φ);
	      δx = x - center[0] * k;
	      δy = y + center[1] * k;
	      return invalidate();
	    }
	    function invalidate() {
	      if (stream) stream.valid = false, stream = null;
	      return projection;
	    }
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return reset();
	    };
	  }
	  function d3_geo_projectionRadians(stream) {
	    return d3_geo_transformPoint(stream, function(x, y) {
	      stream.point(x * d3_radians, y * d3_radians);
	    });
	  }
	  function d3_geo_equirectangular(λ, φ) {
	    return [ λ, φ ];
	  }
	  (d3.geo.equirectangular = function() {
	    return d3_geo_projection(d3_geo_equirectangular);
	  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
	  d3.geo.rotation = function(rotate) {
	    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    }
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    };
	    return forward;
	  };
	  function d3_geo_identityRotation(λ, φ) {
	    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	  }
	  d3_geo_identityRotation.invert = d3_geo_equirectangular;
	  function d3_geo_rotation(δλ, δφ, δγ) {
	    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
	  }
	  function d3_geo_forwardRotationλ(δλ) {
	    return function(λ, φ) {
	      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	    };
	  }
	  function d3_geo_rotationλ(δλ) {
	    var rotation = d3_geo_forwardRotationλ(δλ);
	    rotation.invert = d3_geo_forwardRotationλ(-δλ);
	    return rotation;
	  }
	  function d3_geo_rotationφγ(δφ, δγ) {
	    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
	    function rotation(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
	      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
	    }
	    rotation.invert = function(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
	      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
	    };
	    return rotation;
	  }
	  d3.geo.circle = function() {
	    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
	    function circle() {
	      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
	      interpolate(null, null, 1, {
	        point: function(x, y) {
	          ring.push(x = rotate(x, y));
	          x[0] *= d3_degrees, x[1] *= d3_degrees;
	        }
	      });
	      return {
	        type: "Polygon",
	        coordinates: [ ring ]
	      };
	    }
	    circle.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return circle;
	    };
	    circle.angle = function(x) {
	      if (!arguments.length) return angle;
	      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
	      return circle;
	    };
	    circle.precision = function(_) {
	      if (!arguments.length) return precision;
	      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
	      return circle;
	    };
	    return circle.angle(90);
	  };
	  function d3_geo_circleInterpolate(radius, precision) {
	    var cr = Math.cos(radius), sr = Math.sin(radius);
	    return function(from, to, direction, listener) {
	      var step = direction * precision;
	      if (from != null) {
	        from = d3_geo_circleAngle(cr, from);
	        to = d3_geo_circleAngle(cr, to);
	        if (direction > 0 ? from < to : from > to) from += direction * τ;
	      } else {
	        from = radius + direction * τ;
	        to = radius - .5 * step;
	      }
	      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
	        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
	      }
	    };
	  }
	  function d3_geo_circleAngle(cr, point) {
	    var a = d3_geo_cartesian(point);
	    a[0] -= cr;
	    d3_geo_cartesianNormalize(a);
	    var angle = d3_acos(-a[1]);
	    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
	  }
	  d3.geo.distance = function(a, b) {
	    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
	    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
	  };
	  d3.geo.graticule = function() {
	    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	    function graticule() {
	      return {
	        type: "MultiLineString",
	        coordinates: lines()
	      };
	    }
	    function lines() {
	      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
	        return abs(x % DX) > ε;
	      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
	        return abs(y % DY) > ε;
	      }).map(y));
	    }
	    graticule.lines = function() {
	      return lines().map(function(coordinates) {
	        return {
	          type: "LineString",
	          coordinates: coordinates
	        };
	      });
	    };
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
	      };
	    };
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.minorExtent();
	      return graticule.majorExtent(_).minorExtent(_);
	    };
	    graticule.majorExtent = function(_) {
	      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.minorExtent = function(_) {
	      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.minorStep();
	      return graticule.majorStep(_).minorStep(_);
	    };
	    graticule.majorStep = function(_) {
	      if (!arguments.length) return [ DX, DY ];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	    graticule.minorStep = function(_) {
	      if (!arguments.length) return [ dx, dy ];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = d3_geo_graticuleX(y0, y1, 90);
	      y = d3_geo_graticuleY(x0, x1, precision);
	      X = d3_geo_graticuleX(Y0, Y1, 90);
	      Y = d3_geo_graticuleY(X0, X1, precision);
	      return graticule;
	    };
	    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
	  };
	  function d3_geo_graticuleX(y0, y1, dy) {
	    var y = d3.range(y0, y1 - ε, dy).concat(y1);
	    return function(x) {
	      return y.map(function(y) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_geo_graticuleY(x0, x1, dx) {
	    var x = d3.range(x0, x1 - ε, dx).concat(x1);
	    return function(y) {
	      return x.map(function(x) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_source(d) {
	    return d.source;
	  }
	  function d3_target(d) {
	    return d.target;
	  }
	  d3.geo.greatArc = function() {
	    var source = d3_source, source_, target = d3_target, target_;
	    function greatArc() {
	      return {
	        type: "LineString",
	        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
	      };
	    }
	    greatArc.distance = function() {
	      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
	    };
	    greatArc.source = function(_) {
	      if (!arguments.length) return source;
	      source = _, source_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.target = function(_) {
	      if (!arguments.length) return target;
	      target = _, target_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.precision = function() {
	      return arguments.length ? greatArc : 0;
	    };
	    return greatArc;
	  };
	  d3.geo.interpolate = function(source, target) {
	    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
	  };
	  function d3_geo_interpolate(x0, y0, x1, y1) {
	    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
	    var interpolate = d ? function(t) {
	      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
	      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
	    } : function() {
	      return [ x0 * d3_degrees, y0 * d3_degrees ];
	    };
	    interpolate.distance = d;
	    return interpolate;
	  }
	  d3.geo.length = function(object) {
	    d3_geo_lengthSum = 0;
	    d3.geo.stream(object, d3_geo_length);
	    return d3_geo_lengthSum;
	  };
	  var d3_geo_lengthSum;
	  var d3_geo_length = {
	    sphere: d3_noop,
	    point: d3_noop,
	    lineStart: d3_geo_lengthLineStart,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_lengthLineStart() {
	    var λ0, sinφ0, cosφ0;
	    d3_geo_length.point = function(λ, φ) {
	      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
	      d3_geo_length.point = nextPoint;
	    };
	    d3_geo_length.lineEnd = function() {
	      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
	    };
	    function nextPoint(λ, φ) {
	      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
	      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
	      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
	    }
	  }
	  function d3_geo_azimuthal(scale, angle) {
	    function azimuthal(λ, φ) {
	      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
	      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
	    }
	    azimuthal.invert = function(x, y) {
	      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
	      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
	    };
	    return azimuthal;
	  }
	  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
	    return Math.sqrt(2 / (1 + cosλcosφ));
	  }, function(ρ) {
	    return 2 * Math.asin(ρ / 2);
	  });
	  (d3.geo.azimuthalEqualArea = function() {
	    return d3_geo_projection(d3_geo_azimuthalEqualArea);
	  }).raw = d3_geo_azimuthalEqualArea;
	  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
	    var c = Math.acos(cosλcosφ);
	    return c && c / Math.sin(c);
	  }, d3_identity);
	  (d3.geo.azimuthalEquidistant = function() {
	    return d3_geo_projection(d3_geo_azimuthalEquidistant);
	  }).raw = d3_geo_azimuthalEquidistant;
	  function d3_geo_conicConformal(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), t = function(φ) {
	      return Math.tan(π / 4 + φ / 2);
	    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
	    if (!n) return d3_geo_mercator;
	    function forward(λ, φ) {
	      if (F > 0) {
	        if (φ < -halfπ + ε) φ = -halfπ + ε;
	      } else {
	        if (φ > halfπ - ε) φ = halfπ - ε;
	      }
	      var ρ = F / Math.pow(t(φ), n);
	      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
	      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
	    };
	    return forward;
	  }
	  (d3.geo.conicConformal = function() {
	    return d3_geo_conic(d3_geo_conicConformal);
	  }).raw = d3_geo_conicConformal;
	  function d3_geo_conicEquidistant(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
	    if (abs(n) < ε) return d3_geo_equirectangular;
	    function forward(λ, φ) {
	      var ρ = G - φ;
	      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = G - y;
	      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEquidistant = function() {
	    return d3_geo_conic(d3_geo_conicEquidistant);
	  }).raw = d3_geo_conicEquidistant;
	  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / cosλcosφ;
	  }, Math.atan);
	  (d3.geo.gnomonic = function() {
	    return d3_geo_projection(d3_geo_gnomonic);
	  }).raw = d3_geo_gnomonic;
	  function d3_geo_mercator(λ, φ) {
	    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
	  }
	  d3_geo_mercator.invert = function(x, y) {
	    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
	  };
	  function d3_geo_mercatorProjection(project) {
	    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
	    m.scale = function() {
	      var v = scale.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.translate = function() {
	      var v = translate.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.clipExtent = function(_) {
	      var v = clipExtent.apply(m, arguments);
	      if (v === m) {
	        if (clipAuto = _ == null) {
	          var k = π * scale(), t = translate();
	          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
	        }
	      } else if (clipAuto) {
	        v = null;
	      }
	      return v;
	    };
	    return m.clipExtent(null);
	  }
	  (d3.geo.mercator = function() {
	    return d3_geo_mercatorProjection(d3_geo_mercator);
	  }).raw = d3_geo_mercator;
	  var d3_geo_orthographic = d3_geo_azimuthal(function() {
	    return 1;
	  }, Math.asin);
	  (d3.geo.orthographic = function() {
	    return d3_geo_projection(d3_geo_orthographic);
	  }).raw = d3_geo_orthographic;
	  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / (1 + cosλcosφ);
	  }, function(ρ) {
	    return 2 * Math.atan(ρ);
	  });
	  (d3.geo.stereographic = function() {
	    return d3_geo_projection(d3_geo_stereographic);
	  }).raw = d3_geo_stereographic;
	  function d3_geo_transverseMercator(λ, φ) {
	    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
	  }
	  d3_geo_transverseMercator.invert = function(x, y) {
	    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
	  };
	  (d3.geo.transverseMercator = function() {
	    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
	    projection.center = function(_) {
	      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
	    };
	    projection.rotate = function(_) {
	      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
	      [ _[0], _[1], _[2] - 90 ]);
	    };
	    return rotate([ 0, 0, 90 ]);
	  }).raw = d3_geo_transverseMercator;
	  d3.geom = {};
	  function d3_geom_pointX(d) {
	    return d[0];
	  }
	  function d3_geom_pointY(d) {
	    return d[1];
	  }
	  d3.geom.hull = function(vertices) {
	    var x = d3_geom_pointX, y = d3_geom_pointY;
	    if (arguments.length) return hull(vertices);
	    function hull(data) {
	      if (data.length < 3) return [];
	      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
	      for (i = 0; i < n; i++) {
	        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
	      }
	      points.sort(d3_geom_hullOrder);
	      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
	      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
	      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
	      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
	      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
	      return polygon;
	    }
	    hull.x = function(_) {
	      return arguments.length ? (x = _, hull) : x;
	    };
	    hull.y = function(_) {
	      return arguments.length ? (y = _, hull) : y;
	    };
	    return hull;
	  };
	  function d3_geom_hullUpper(points) {
	    var n = points.length, hull = [ 0, 1 ], hs = 2;
	    for (var i = 2; i < n; i++) {
	      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
	      hull[hs++] = i;
	    }
	    return hull.slice(0, hs);
	  }
	  function d3_geom_hullOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	  d3.geom.polygon = function(coordinates) {
	    d3_subclass(coordinates, d3_geom_polygonPrototype);
	    return coordinates;
	  };
	  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
	  d3_geom_polygonPrototype.area = function() {
	    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	    return area * .5;
	  };
	  d3_geom_polygonPrototype.centroid = function(k) {
	    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
	    if (!arguments.length) k = -1 / (6 * this.area());
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	    return [ x * k, y * k ];
	  };
	  d3_geom_polygonPrototype.clip = function(subject) {
	    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
	    while (++i < n) {
	      input = subject.slice();
	      subject.length = 0;
	      b = this[i];
	      c = input[(m = input.length - closed) - 1];
	      j = -1;
	      while (++j < m) {
	        d = input[j];
	        if (d3_geom_polygonInside(d, a, b)) {
	          if (!d3_geom_polygonInside(c, a, b)) {
	            subject.push(d3_geom_polygonIntersect(c, d, a, b));
	          }
	          subject.push(d);
	        } else if (d3_geom_polygonInside(c, a, b)) {
	          subject.push(d3_geom_polygonIntersect(c, d, a, b));
	        }
	        c = d;
	      }
	      if (closed) subject.push(subject[0]);
	      a = b;
	    }
	    return subject;
	  };
	  function d3_geom_polygonInside(p, a, b) {
	    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
	  }
	  function d3_geom_polygonIntersect(c, d, a, b) {
	    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
	    return [ x1 + ua * x21, y1 + ua * y21 ];
	  }
	  function d3_geom_polygonClosed(coordinates) {
	    var a = coordinates[0], b = coordinates[coordinates.length - 1];
	    return !(a[0] - b[0] || a[1] - b[1]);
	  }
	  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
	  function d3_geom_voronoiBeach() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }
	  function d3_geom_voronoiCreateBeach(site) {
	    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
	    beach.site = site;
	    return beach;
	  }
	  function d3_geom_voronoiDetachBeach(beach) {
	    d3_geom_voronoiDetachCircle(beach);
	    d3_geom_voronoiBeaches.remove(beach);
	    d3_geom_voronoiBeachPool.push(beach);
	    d3_geom_voronoiRedBlackNode(beach);
	  }
	  function d3_geom_voronoiRemoveBeach(beach) {
	    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
	      x: x,
	      y: y
	    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
	    d3_geom_voronoiDetachBeach(beach);
	    var lArc = previous;
	    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      d3_geom_voronoiDetachBeach(lArc);
	      lArc = previous;
	    }
	    disappearing.unshift(lArc);
	    d3_geom_voronoiDetachCircle(lArc);
	    var rArc = next;
	    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      d3_geom_voronoiDetachBeach(rArc);
	      rArc = next;
	    }
	    disappearing.push(rArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var nArcs = disappearing.length, iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiAddBeach(site) {
	    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
	    while (node) {
	      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
	      if (dxl > ε) node = node.L; else {
	        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
	        if (dxr > ε) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -ε) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -ε) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	    var newArc = d3_geom_voronoiCreateBeach(site);
	    d3_geom_voronoiBeaches.insert(lArc, newArc);
	    if (!lArc && !rArc) return;
	    if (lArc === rArc) {
	      d3_geom_voronoiDetachCircle(lArc);
	      rArc = d3_geom_voronoiCreateBeach(lArc.site);
	      d3_geom_voronoiBeaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      d3_geom_voronoiAttachCircle(lArc);
	      d3_geom_voronoiAttachCircle(rArc);
	      return;
	    }
	    if (!rArc) {
	      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      return;
	    }
	    d3_geom_voronoiDetachCircle(lArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
	      x: (cy * hb - by * hc) / d + ax,
	      y: (bx * hc - cx * hb) / d + ay
	    };
	    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
	    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
	    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
	    if (!pby2) return rfocx;
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	    site = lArc.site;
	    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
	    if (!plby2) return lfocx;
	    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	    return (rfocx + lfocx) / 2;
	  }
	  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site.y === directrix ? site.x : Infinity;
	  }
	  function d3_geom_voronoiCell(site) {
	    this.site = site;
	    this.edges = [];
	  }
	  d3_geom_voronoiCell.prototype.prepare = function() {
	    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
	    while (iHalfEdge--) {
	      edge = halfEdges[iHalfEdge].edge;
	      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
	    }
	    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
	    return halfEdges.length;
	  };
	  function d3_geom_voronoiCloseCells(extent) {
	    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
	    while (iCell--) {
	      cell = cells[iCell];
	      if (!cell || !cell.prepare()) continue;
	      halfEdges = cell.edges;
	      nHalfEdges = halfEdges.length;
	      iHalfEdge = 0;
	      while (iHalfEdge < nHalfEdges) {
	        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
	        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
	        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
	          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
	            x: x0,
	            y: abs(x2 - x0) < ε ? y2 : y1
	          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
	            x: abs(y2 - y1) < ε ? x2 : x1,
	            y: y1
	          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
	            x: x1,
	            y: abs(x2 - x1) < ε ? y2 : y0
	          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
	            x: abs(y2 - y0) < ε ? x2 : x0,
	            y: y0
	          } : null), cell.site, null));
	          ++nHalfEdges;
	        }
	      }
	    }
	  }
	  function d3_geom_voronoiHalfEdgeOrder(a, b) {
	    return b.angle - a.angle;
	  }
	  function d3_geom_voronoiCircle() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }
	  function d3_geom_voronoiAttachCircle(arc) {
	    var lArc = arc.P, rArc = arc.N;
	    if (!lArc || !rArc) return;
	    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
	    if (lSite === rSite) return;
	    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -ε2) return;
	    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
	    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = cy + Math.sqrt(x * x + y * y);
	    circle.cy = cy;
	    arc.circle = circle;
	    var before = null, node = d3_geom_voronoiCircles._;
	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L; else {
	          before = node.P;
	          break;
	        }
	      } else {
	        if (node.R) node = node.R; else {
	          before = node;
	          break;
	        }
	      }
	    }
	    d3_geom_voronoiCircles.insert(before, circle);
	    if (!before) d3_geom_voronoiFirstCircle = circle;
	  }
	  function d3_geom_voronoiDetachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
	      d3_geom_voronoiCircles.remove(circle);
	      d3_geom_voronoiCirclePool.push(circle);
	      d3_geom_voronoiRedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	  function d3_geom_voronoiClipEdges(extent) {
	    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
	    while (i--) {
	      e = edges[i];
	      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
	        e.a = e.b = null;
	        edges.splice(i, 1);
	      }
	    }
	  }
	  function d3_geom_voronoiConnectEdge(edge, extent) {
	    var vb = edge.b;
	    if (vb) return true;
	    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!va) va = {
	          x: fx,
	          y: y0
	        }; else if (va.y >= y1) return;
	        vb = {
	          x: fx,
	          y: y1
	        };
	      } else {
	        if (!va) va = {
	          x: fx,
	          y: y1
	        }; else if (va.y < y0) return;
	        vb = {
	          x: fx,
	          y: y0
	        };
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!va) va = {
	            x: (y0 - fb) / fm,
	            y: y0
	          }; else if (va.y >= y1) return;
	          vb = {
	            x: (y1 - fb) / fm,
	            y: y1
	          };
	        } else {
	          if (!va) va = {
	            x: (y1 - fb) / fm,
	            y: y1
	          }; else if (va.y < y0) return;
	          vb = {
	            x: (y0 - fb) / fm,
	            y: y0
	          };
	        }
	      } else {
	        if (ly < ry) {
	          if (!va) va = {
	            x: x0,
	            y: fm * x0 + fb
	          }; else if (va.x >= x1) return;
	          vb = {
	            x: x1,
	            y: fm * x1 + fb
	          };
	        } else {
	          if (!va) va = {
	            x: x1,
	            y: fm * x1 + fb
	          }; else if (va.x < x0) return;
	          vb = {
	            x: x0,
	            y: fm * x0 + fb
	          };
	        }
	      }
	    }
	    edge.a = va;
	    edge.b = vb;
	    return true;
	  }
	  function d3_geom_voronoiEdge(lSite, rSite) {
	    this.l = lSite;
	    this.r = rSite;
	    this.a = this.b = null;
	  }
	  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, rSite);
	    d3_geom_voronoiEdges.push(edge);
	    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
	    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
	    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
	    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
	    return edge;
	  }
	  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, null);
	    edge.a = va;
	    edge.b = vb;
	    d3_geom_voronoiEdges.push(edge);
	    return edge;
	  }
	  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
	    if (!edge.a && !edge.b) {
	      edge.a = vertex;
	      edge.l = lSite;
	      edge.r = rSite;
	    } else if (edge.l === rSite) {
	      edge.b = vertex;
	    } else {
	      edge.a = vertex;
	    }
	  }
	  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
	    var va = edge.a, vb = edge.b;
	    this.edge = edge;
	    this.site = lSite;
	    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
	  }
	  d3_geom_voronoiHalfEdge.prototype = {
	    start: function() {
	      return this.edge.l === this.site ? this.edge.a : this.edge.b;
	    },
	    end: function() {
	      return this.edge.l === this.site ? this.edge.b : this.edge.a;
	    }
	  };
	  function d3_geom_voronoiRedBlackTree() {
	    this._ = null;
	  }
	  function d3_geom_voronoiRedBlackNode(node) {
	    node.U = node.C = node.L = node.R = node.P = node.N = null;
	  }
	  d3_geom_voronoiRedBlackTree.prototype = {
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = d3_geom_voronoiRedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              d3_geom_voronoiRedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              d3_geom_voronoiRedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
	      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
	      if (parent) {
	        if (parent.L === node) parent.L = next; else parent.R = next;
	      } else {
	        this._ = next;
	      }
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;
	        return;
	      }
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	      if (node) node.C = false;
	    }
	  };
	  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
	    var p = node, q = node.R, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
	    var p = node, q = node.L, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	  function d3_geom_voronoiRedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	  function d3_geom_voronoi(sites, bbox) {
	    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
	    d3_geom_voronoiEdges = [];
	    d3_geom_voronoiCells = new Array(sites.length);
	    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
	    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
	    while (true) {
	      circle = d3_geom_voronoiFirstCircle;
	      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
	        if (site.x !== x0 || site.y !== y0) {
	          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
	          d3_geom_voronoiAddBeach(site);
	          x0 = site.x, y0 = site.y;
	        }
	        site = sites.pop();
	      } else if (circle) {
	        d3_geom_voronoiRemoveBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
	    var diagram = {
	      cells: d3_geom_voronoiCells,
	      edges: d3_geom_voronoiEdges
	    };
	    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
	    return diagram;
	  }
	  function d3_geom_voronoiVertexOrder(a, b) {
	    return b.y - a.y || b.x - a.x;
	  }
	  d3.geom.voronoi = function(points) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
	    if (points) return voronoi(points);
	    function voronoi(data) {
	      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
	      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
	        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
	          var s = e.start();
	          return [ s.x, s.y ];
	        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
	        polygon.point = data[i];
	      });
	      return polygons;
	    }
	    function sites(data) {
	      return data.map(function(d, i) {
	        return {
	          x: Math.round(fx(d, i) / ε) * ε,
	          y: Math.round(fy(d, i) / ε) * ε,
	          i: i
	        };
	      });
	    }
	    voronoi.links = function(data) {
	      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
	        return edge.l && edge.r;
	      }).map(function(edge) {
	        return {
	          source: data[edge.l.i],
	          target: data[edge.r.i]
	        };
	      });
	    };
	    voronoi.triangles = function(data) {
	      var triangles = [];
	      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
	        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
	        while (++j < m) {
	          e0 = e1;
	          s0 = s1;
	          e1 = edges[j].edge;
	          s1 = e1.l === site ? e1.r : e1.l;
	          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
	            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
	          }
	        }
	      });
	      return triangles;
	    };
	    voronoi.x = function(_) {
	      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
	    };
	    voronoi.y = function(_) {
	      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
	    };
	    voronoi.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
	      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
	      return voronoi;
	    };
	    voronoi.size = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
	      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
	    };
	    return voronoi;
	  };
	  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
	  function d3_geom_voronoiTriangleArea(a, b, c) {
	    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
	  }
	  d3.geom.delaunay = function(vertices) {
	    return d3.geom.voronoi().triangles(vertices);
	  };
	  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
	    if (compat = arguments.length) {
	      x = d3_geom_quadtreeCompatX;
	      y = d3_geom_quadtreeCompatY;
	      if (compat === 3) {
	        y2 = y1;
	        x2 = x1;
	        y1 = x1 = 0;
	      }
	      return quadtree(points);
	    }
	    function quadtree(data) {
	      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
	      if (x1 != null) {
	        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
	      } else {
	        x2_ = y2_ = -(x1_ = y1_ = Infinity);
	        xs = [], ys = [];
	        n = data.length;
	        if (compat) for (i = 0; i < n; ++i) {
	          d = data[i];
	          if (d.x < x1_) x1_ = d.x;
	          if (d.y < y1_) y1_ = d.y;
	          if (d.x > x2_) x2_ = d.x;
	          if (d.y > y2_) y2_ = d.y;
	          xs.push(d.x);
	          ys.push(d.y);
	        } else for (i = 0; i < n; ++i) {
	          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
	          if (x_ < x1_) x1_ = x_;
	          if (y_ < y1_) y1_ = y_;
	          if (x_ > x2_) x2_ = x_;
	          if (y_ > y2_) y2_ = y_;
	          xs.push(x_);
	          ys.push(y_);
	        }
	      }
	      var dx = x2_ - x1_, dy = y2_ - y1_;
	      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
	      function insert(n, d, x, y, x1, y1, x2, y2) {
	        if (isNaN(x) || isNaN(y)) return;
	        if (n.leaf) {
	          var nx = n.x, ny = n.y;
	          if (nx != null) {
	            if (abs(nx - x) + abs(ny - y) < .01) {
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            } else {
	              var nPoint = n.point;
	              n.x = n.y = n.point = null;
	              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            }
	          } else {
	            n.x = x, n.y = y, n.point = d;
	          }
	        } else {
	          insertChild(n, d, x, y, x1, y1, x2, y2);
	        }
	      }
	      function insertChild(n, d, x, y, x1, y1, x2, y2) {
	        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
	        n.leaf = false;
	        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
	        if (right) x1 = xm; else x2 = xm;
	        if (below) y1 = ym; else y2 = ym;
	        insert(n, d, x, y, x1, y1, x2, y2);
	      }
	      var root = d3_geom_quadtreeNode();
	      root.add = function(d) {
	        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
	      };
	      root.visit = function(f) {
	        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
	      };
	      root.find = function(point) {
	        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
	      };
	      i = -1;
	      if (x1 == null) {
	        while (++i < n) {
	          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
	        }
	        --i;
	      } else data.forEach(root.add);
	      xs = ys = data = d = null;
	      return root;
	    }
	    quadtree.x = function(_) {
	      return arguments.length ? (x = _, quadtree) : x;
	    };
	    quadtree.y = function(_) {
	      return arguments.length ? (y = _, quadtree) : y;
	    };
	    quadtree.extent = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
	      y2 = +_[1][1];
	      return quadtree;
	    };
	    quadtree.size = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
	      return quadtree;
	    };
	    return quadtree;
	  };
	  function d3_geom_quadtreeCompatX(d) {
	    return d.x;
	  }
	  function d3_geom_quadtreeCompatY(d) {
	    return d.y;
	  }
	  function d3_geom_quadtreeNode() {
	    return {
	      leaf: true,
	      nodes: [],
	      point: null,
	      x: null,
	      y: null
	    };
	  }
	  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
	    if (!f(node, x1, y1, x2, y2)) {
	      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
	      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
	      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
	      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
	      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
	    }
	  }
	  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
	    var minDistance2 = Infinity, closestPoint;
	    (function find(node, x1, y1, x2, y2) {
	      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
	      if (point = node.point) {
	        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
	        if (distance2 < minDistance2) {
	          var distance = Math.sqrt(minDistance2 = distance2);
	          x0 = x - distance, y0 = y - distance;
	          x3 = x + distance, y3 = y + distance;
	          closestPoint = point;
	        }
	      }
	      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
	      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
	        if (node = children[i & 3]) switch (i & 3) {
	         case 0:
	          find(node, x1, y1, xm, ym);
	          break;
	
	         case 1:
	          find(node, xm, y1, x2, ym);
	          break;
	
	         case 2:
	          find(node, x1, ym, xm, y2);
	          break;
	
	         case 3:
	          find(node, xm, ym, x2, y2);
	          break;
	        }
	      }
	    })(root, x0, y0, x3, y3);
	    return closestPoint;
	  }
	  d3.interpolateRgb = d3_interpolateRgb;
	  function d3_interpolateRgb(a, b) {
	    a = d3.rgb(a);
	    b = d3.rgb(b);
	    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
	    return function(t) {
	      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
	    };
	  }
	  d3.interpolateObject = d3_interpolateObject;
	  function d3_interpolateObject(a, b) {
	    var i = {}, c = {}, k;
	    for (k in a) {
	      if (k in b) {
	        i[k] = d3_interpolate(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }
	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	  d3.interpolateNumber = d3_interpolateNumber;
	  function d3_interpolateNumber(a, b) {
	    a = +a, b = +b;
	    return function(t) {
	      return a * (1 - t) + b * t;
	    };
	  }
	  d3.interpolateString = d3_interpolateString;
	  function d3_interpolateString(a, b) {
	    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	    a = a + "", b = b + "";
	    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
	      if ((bs = bm.index) > bi) {
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) {
	        if (s[i]) s[i] += bm; else s[++i] = bm;
	      } else {
	        s[++i] = null;
	        q.push({
	          i: i,
	          x: d3_interpolateNumber(am, bm)
	        });
	      }
	      bi = d3_interpolate_numberB.lastIndex;
	    }
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; else s[++i] = bs;
	    }
	    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
	      return b(t) + "";
	    }) : function() {
	      return b;
	    } : (b = q.length, function(t) {
	      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    });
	  }
	  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
	  d3.interpolate = d3_interpolate;
	  function d3_interpolate(a, b) {
	    var i = d3.interpolators.length, f;
	    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
	    return f;
	  }
	  d3.interpolators = [ function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
	  } ];
	  d3.interpolateArray = d3_interpolateArray;
	  function d3_interpolateArray(a, b) {
	    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
	    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	    for (;i < na; ++i) c[i] = a[i];
	    for (;i < nb; ++i) c[i] = b[i];
	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	  var d3_ease_default = function() {
	    return d3_identity;
	  };
	  var d3_ease = d3.map({
	    linear: d3_ease_default,
	    poly: d3_ease_poly,
	    quad: function() {
	      return d3_ease_quad;
	    },
	    cubic: function() {
	      return d3_ease_cubic;
	    },
	    sin: function() {
	      return d3_ease_sin;
	    },
	    exp: function() {
	      return d3_ease_exp;
	    },
	    circle: function() {
	      return d3_ease_circle;
	    },
	    elastic: d3_ease_elastic,
	    back: d3_ease_back,
	    bounce: function() {
	      return d3_ease_bounce;
	    }
	  });
	  var d3_ease_mode = d3.map({
	    "in": d3_identity,
	    out: d3_ease_reverse,
	    "in-out": d3_ease_reflect,
	    "out-in": function(f) {
	      return d3_ease_reflect(d3_ease_reverse(f));
	    }
	  });
	  d3.ease = function(name) {
	    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
	    t = d3_ease.get(t) || d3_ease_default;
	    m = d3_ease_mode.get(m) || d3_identity;
	    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	  };
	  function d3_ease_clamp(f) {
	    return function(t) {
	      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	    };
	  }
	  function d3_ease_reverse(f) {
	    return function(t) {
	      return 1 - f(1 - t);
	    };
	  }
	  function d3_ease_reflect(f) {
	    return function(t) {
	      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
	    };
	  }
	  function d3_ease_quad(t) {
	    return t * t;
	  }
	  function d3_ease_cubic(t) {
	    return t * t * t;
	  }
	  function d3_ease_cubicInOut(t) {
	    if (t <= 0) return 0;
	    if (t >= 1) return 1;
	    var t2 = t * t, t3 = t2 * t;
	    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	  }
	  function d3_ease_poly(e) {
	    return function(t) {
	      return Math.pow(t, e);
	    };
	  }
	  function d3_ease_sin(t) {
	    return 1 - Math.cos(t * halfπ);
	  }
	  function d3_ease_exp(t) {
	    return Math.pow(2, 10 * (t - 1));
	  }
	  function d3_ease_circle(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	  function d3_ease_elastic(a, p) {
	    var s;
	    if (arguments.length < 2) p = .45;
	    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
	    return function(t) {
	      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	    };
	  }
	  function d3_ease_back(s) {
	    if (!s) s = 1.70158;
	    return function(t) {
	      return t * t * ((s + 1) * t - s);
	    };
	  }
	  function d3_ease_bounce(t) {
	    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	  }
	  d3.interpolateHcl = d3_interpolateHcl;
	  function d3_interpolateHcl(a, b) {
	    a = d3.hcl(a);
	    b = d3.hcl(b);
	    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
	    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateHsl = d3_interpolateHsl;
	  function d3_interpolateHsl(a, b) {
	    a = d3.hsl(a);
	    b = d3.hsl(b);
	    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
	    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateLab = d3_interpolateLab;
	  function d3_interpolateLab(a, b) {
	    a = d3.lab(a);
	    b = d3.lab(b);
	    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
	    return function(t) {
	      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	    };
	  }
	  d3.interpolateRound = d3_interpolateRound;
	  function d3_interpolateRound(a, b) {
	    b -= a;
	    return function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	  d3.transform = function(string) {
	    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	    return (d3.transform = function(string) {
	      if (string != null) {
	        g.setAttribute("transform", string);
	        var t = g.transform.baseVal.consolidate();
	      }
	      return new d3_transform(t ? t.matrix : d3_transformIdentity);
	    })(string);
	  };
	  function d3_transform(m) {
	    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }
	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	    this.translate = [ m.e, m.f ];
	    this.scale = [ kx, ky ];
	    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	  }
	  d3_transform.prototype.toString = function() {
	    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
	  };
	  function d3_transformDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }
	  function d3_transformNormalize(a) {
	    var k = Math.sqrt(d3_transformDot(a, a));
	    if (k) {
	      a[0] /= k;
	      a[1] /= k;
	    }
	    return k;
	  }
	  function d3_transformCombine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }
	  var d3_transformIdentity = {
	    a: 1,
	    b: 0,
	    c: 0,
	    d: 1,
	    e: 0,
	    f: 0
	  };
	  d3.interpolateTransform = d3_interpolateTransform;
	  function d3_interpolateTransformPop(s) {
	    return s.length ? s.pop() + "," : "";
	  }
	  function d3_interpolateTranslate(ta, tb, s, q) {
	    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
	      var i = s.push("translate(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ta[0], tb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ta[1], tb[1])
	      });
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    }
	  }
	  function d3_interpolateRotate(ra, rb, s, q) {
	    if (ra !== rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
	        x: d3_interpolateNumber(ra, rb)
	      });
	    } else if (rb) {
	      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
	    }
	  }
	  function d3_interpolateSkew(wa, wb, s, q) {
	    if (wa !== wb) {
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
	        x: d3_interpolateNumber(wa, wb)
	      });
	    } else if (wb) {
	      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
	    }
	  }
	  function d3_interpolateScale(ka, kb, s, q) {
	    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
	      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ka[0], kb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ka[1], kb[1])
	      });
	    } else if (kb[0] !== 1 || kb[1] !== 1) {
	      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
	    }
	  }
	  function d3_interpolateTransform(a, b) {
	    var s = [], q = [];
	    a = d3.transform(a), b = d3.transform(b);
	    d3_interpolateTranslate(a.translate, b.translate, s, q);
	    d3_interpolateRotate(a.rotate, b.rotate, s, q);
	    d3_interpolateSkew(a.skew, b.skew, s, q);
	    d3_interpolateScale(a.scale, b.scale, s, q);
	    a = b = null;
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }
	  function d3_uninterpolateNumber(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return (x - a) / b;
	    };
	  }
	  function d3_uninterpolateClamp(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return Math.max(0, Math.min(1, (x - a) / b));
	    };
	  }
	  d3.layout = {};
	  d3.layout.bundle = function() {
	    return function(links) {
	      var paths = [], i = -1, n = links.length;
	      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
	      return paths;
	    };
	  };
	  function d3_layout_bundlePath(link) {
	    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
	    while (start !== lca) {
	      start = start.parent;
	      points.push(start);
	    }
	    var k = points.length;
	    while (end !== lca) {
	      points.splice(k, 0, end);
	      end = end.parent;
	    }
	    return points;
	  }
	  function d3_layout_bundleAncestors(node) {
	    var ancestors = [], parent = node.parent;
	    while (parent != null) {
	      ancestors.push(node);
	      node = parent;
	      parent = parent.parent;
	    }
	    ancestors.push(node);
	    return ancestors;
	  }
	  function d3_layout_bundleLeastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
	    while (aNode === bNode) {
	      sharedNode = aNode;
	      aNode = aNodes.pop();
	      bNode = bNodes.pop();
	    }
	    return sharedNode;
	  }
	  d3.layout.chord = function() {
	    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
	    function relayout() {
	      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
	      chords = [];
	      groups = [];
	      k = 0, i = -1;
	      while (++i < n) {
	        x = 0, j = -1;
	        while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(d3.range(n));
	        k += x;
	      }
	      if (sortGroups) {
	        groupIndex.sort(function(a, b) {
	          return sortGroups(groupSums[a], groupSums[b]);
	        });
	      }
	      if (sortSubgroups) {
	        subgroupIndex.forEach(function(d, i) {
	          d.sort(function(a, b) {
	            return sortSubgroups(matrix[i][a], matrix[i][b]);
	          });
	        });
	      }
	      k = (τ - padding * n) / k;
	      x = 0, i = -1;
	      while (++i < n) {
	        x0 = x, j = -1;
	        while (++j < n) {
	          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
	          subgroups[di + "-" + dj] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += padding;
	      }
	      i = -1;
	      while (++i < n) {
	        j = i - 1;
	        while (++j < n) {
	          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value ? {
	              source: target,
	              target: source
	            } : {
	              source: source,
	              target: target
	            });
	          }
	        }
	      }
	      if (sortChords) resort();
	    }
	    function resort() {
	      chords.sort(function(a, b) {
	        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
	      });
	    }
	    chord.matrix = function(x) {
	      if (!arguments.length) return matrix;
	      n = (matrix = x) && matrix.length;
	      chords = groups = null;
	      return chord;
	    };
	    chord.padding = function(x) {
	      if (!arguments.length) return padding;
	      padding = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortGroups = function(x) {
	      if (!arguments.length) return sortGroups;
	      sortGroups = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortSubgroups = function(x) {
	      if (!arguments.length) return sortSubgroups;
	      sortSubgroups = x;
	      chords = null;
	      return chord;
	    };
	    chord.sortChords = function(x) {
	      if (!arguments.length) return sortChords;
	      sortChords = x;
	      if (chords) resort();
	      return chord;
	    };
	    chord.chords = function() {
	      if (!chords) relayout();
	      return chords;
	    };
	    chord.groups = function() {
	      if (!groups) relayout();
	      return groups;
	    };
	    return chord;
	  };
	  d3.layout.force = function() {
	    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
	    function repulse(node) {
	      return function(quad, x1, _, x2) {
	        if (quad.point !== node) {
	          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
	          if (dw * dw / theta2 < dn) {
	            if (dn < chargeDistance2) {
	              var k = quad.charge / dn;
	              node.px -= dx * k;
	              node.py -= dy * k;
	            }
	            return true;
	          }
	          if (quad.point && dn && dn < chargeDistance2) {
	            var k = quad.pointCharge / dn;
	            node.px -= dx * k;
	            node.py -= dy * k;
	          }
	        }
	        return !quad.charge;
	      };
	    }
	    force.tick = function() {
	      if ((alpha *= .99) < .005) {
	        timer = null;
	        event.end({
	          type: "end",
	          alpha: alpha = 0
	        });
	        return true;
	      }
	      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        s = o.source;
	        t = o.target;
	        x = t.x - s.x;
	        y = t.y - s.y;
	        if (l = x * x + y * y) {
	          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
	          x *= l;
	          y *= l;
	          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
	          t.y -= y * k;
	          s.x += x * (k = 1 - k);
	          s.y += y * k;
	        }
	      }
	      if (k = alpha * gravity) {
	        x = size[0] / 2;
	        y = size[1] / 2;
	        i = -1;
	        if (k) while (++i < n) {
	          o = nodes[i];
	          o.x += (x - o.x) * k;
	          o.y += (y - o.y) * k;
	        }
	      }
	      if (charge) {
	        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
	        i = -1;
	        while (++i < n) {
	          if (!(o = nodes[i]).fixed) {
	            q.visit(repulse(o));
	          }
	        }
	      }
	      i = -1;
	      while (++i < n) {
	        o = nodes[i];
	        if (o.fixed) {
	          o.x = o.px;
	          o.y = o.py;
	        } else {
	          o.x -= (o.px - (o.px = o.x)) * friction;
	          o.y -= (o.py - (o.py = o.y)) * friction;
	        }
	      }
	      event.tick({
	        type: "tick",
	        alpha: alpha
	      });
	    };
	    force.nodes = function(x) {
	      if (!arguments.length) return nodes;
	      nodes = x;
	      return force;
	    };
	    force.links = function(x) {
	      if (!arguments.length) return links;
	      links = x;
	      return force;
	    };
	    force.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return force;
	    };
	    force.linkDistance = function(x) {
	      if (!arguments.length) return linkDistance;
	      linkDistance = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.distance = force.linkDistance;
	    force.linkStrength = function(x) {
	      if (!arguments.length) return linkStrength;
	      linkStrength = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.friction = function(x) {
	      if (!arguments.length) return friction;
	      friction = +x;
	      return force;
	    };
	    force.charge = function(x) {
	      if (!arguments.length) return charge;
	      charge = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.chargeDistance = function(x) {
	      if (!arguments.length) return Math.sqrt(chargeDistance2);
	      chargeDistance2 = x * x;
	      return force;
	    };
	    force.gravity = function(x) {
	      if (!arguments.length) return gravity;
	      gravity = +x;
	      return force;
	    };
	    force.theta = function(x) {
	      if (!arguments.length) return Math.sqrt(theta2);
	      theta2 = x * x;
	      return force;
	    };
	    force.alpha = function(x) {
	      if (!arguments.length) return alpha;
	      x = +x;
	      if (alpha) {
	        if (x > 0) {
	          alpha = x;
	        } else {
	          timer.c = null, timer.t = NaN, timer = null;
	          event.end({
	            type: "end",
	            alpha: alpha = 0
	          });
	        }
	      } else if (x > 0) {
	        event.start({
	          type: "start",
	          alpha: alpha = x
	        });
	        timer = d3_timer(force.tick);
	      }
	      return force;
	    };
	    force.start = function() {
	      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
	      for (i = 0; i < n; ++i) {
	        (o = nodes[i]).index = i;
	        o.weight = 0;
	      }
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        if (typeof o.source == "number") o.source = nodes[o.source];
	        if (typeof o.target == "number") o.target = nodes[o.target];
	        ++o.source.weight;
	        ++o.target.weight;
	      }
	      for (i = 0; i < n; ++i) {
	        o = nodes[i];
	        if (isNaN(o.x)) o.x = position("x", w);
	        if (isNaN(o.y)) o.y = position("y", h);
	        if (isNaN(o.px)) o.px = o.x;
	        if (isNaN(o.py)) o.py = o.y;
	      }
	      distances = [];
	      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
	      strengths = [];
	      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
	      charges = [];
	      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
	      function position(dimension, size) {
	        if (!neighbors) {
	          neighbors = new Array(n);
	          for (j = 0; j < n; ++j) {
	            neighbors[j] = [];
	          }
	          for (j = 0; j < m; ++j) {
	            var o = links[j];
	            neighbors[o.source.index].push(o.target);
	            neighbors[o.target.index].push(o.source);
	          }
	        }
	        var candidates = neighbors[i], j = -1, l = candidates.length, x;
	        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
	        return Math.random() * size;
	      }
	      return force.resume();
	    };
	    force.resume = function() {
	      return force.alpha(.1);
	    };
	    force.stop = function() {
	      return force.alpha(0);
	    };
	    force.drag = function() {
	      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
	      if (!arguments.length) return drag;
	      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
	    };
	    function dragmove(d) {
	      d.px = d3.event.x, d.py = d3.event.y;
	      force.resume();
	    }
	    return d3.rebind(force, event, "on");
	  };
	  function d3_layout_forceDragstart(d) {
	    d.fixed |= 2;
	  }
	  function d3_layout_forceDragend(d) {
	    d.fixed &= ~6;
	  }
	  function d3_layout_forceMouseover(d) {
	    d.fixed |= 4;
	    d.px = d.x, d.py = d.y;
	  }
	  function d3_layout_forceMouseout(d) {
	    d.fixed &= ~4;
	  }
	  function d3_layout_forceAccumulate(quad, alpha, charges) {
	    var cx = 0, cy = 0;
	    quad.charge = 0;
	    if (!quad.leaf) {
	      var nodes = quad.nodes, n = nodes.length, i = -1, c;
	      while (++i < n) {
	        c = nodes[i];
	        if (c == null) continue;
	        d3_layout_forceAccumulate(c, alpha, charges);
	        quad.charge += c.charge;
	        cx += c.charge * c.cx;
	        cy += c.charge * c.cy;
	      }
	    }
	    if (quad.point) {
	      if (!quad.leaf) {
	        quad.point.x += Math.random() - .5;
	        quad.point.y += Math.random() - .5;
	      }
	      var k = alpha * charges[quad.point.index];
	      quad.charge += quad.pointCharge = k;
	      cx += k * quad.point.x;
	      cy += k * quad.point.y;
	    }
	    quad.cx = cx / quad.charge;
	    quad.cy = cy / quad.charge;
	  }
	  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
	  d3.layout.hierarchy = function() {
	    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
	    function hierarchy(root) {
	      var stack = [ root ], nodes = [], node;
	      root.depth = 0;
	      while ((node = stack.pop()) != null) {
	        nodes.push(node);
	        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
	          var n, childs, child;
	          while (--n >= 0) {
	            stack.push(child = childs[n]);
	            child.parent = node;
	            child.depth = node.depth + 1;
	          }
	          if (value) node.value = 0;
	          node.children = childs;
	        } else {
	          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          delete node.children;
	        }
	      }
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var childs, parent;
	        if (sort && (childs = node.children)) childs.sort(sort);
	        if (value && (parent = node.parent)) parent.value += node.value;
	      });
	      return nodes;
	    }
	    hierarchy.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return hierarchy;
	    };
	    hierarchy.children = function(x) {
	      if (!arguments.length) return children;
	      children = x;
	      return hierarchy;
	    };
	    hierarchy.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return hierarchy;
	    };
	    hierarchy.revalue = function(root) {
	      if (value) {
	        d3_layout_hierarchyVisitBefore(root, function(node) {
	          if (node.children) node.value = 0;
	        });
	        d3_layout_hierarchyVisitAfter(root, function(node) {
	          var parent;
	          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          if (parent = node.parent) parent.value += node.value;
	        });
	      }
	      return root;
	    };
	    return hierarchy;
	  };
	  function d3_layout_hierarchyRebind(object, hierarchy) {
	    d3.rebind(object, hierarchy, "sort", "children", "value");
	    object.nodes = object;
	    object.links = d3_layout_hierarchyLinks;
	    return object;
	  }
	  function d3_layout_hierarchyVisitBefore(node, callback) {
	    var nodes = [ node ];
	    while ((node = nodes.pop()) != null) {
	      callback(node);
	      if ((children = node.children) && (n = children.length)) {
	        var n, children;
	        while (--n >= 0) nodes.push(children[n]);
	      }
	    }
	  }
	  function d3_layout_hierarchyVisitAfter(node, callback) {
	    var nodes = [ node ], nodes2 = [];
	    while ((node = nodes.pop()) != null) {
	      nodes2.push(node);
	      if ((children = node.children) && (n = children.length)) {
	        var i = -1, n, children;
	        while (++i < n) nodes.push(children[i]);
	      }
	    }
	    while ((node = nodes2.pop()) != null) {
	      callback(node);
	    }
	  }
	  function d3_layout_hierarchyChildren(d) {
	    return d.children;
	  }
	  function d3_layout_hierarchyValue(d) {
	    return d.value;
	  }
	  function d3_layout_hierarchySort(a, b) {
	    return b.value - a.value;
	  }
	  function d3_layout_hierarchyLinks(nodes) {
	    return d3.merge(nodes.map(function(parent) {
	      return (parent.children || []).map(function(child) {
	        return {
	          source: parent,
	          target: child
	        };
	      });
	    }));
	  }
	  d3.layout.partition = function() {
	    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
	    function position(node, x, dx, dy) {
	      var children = node.children;
	      node.x = x;
	      node.y = node.depth * dy;
	      node.dx = dx;
	      node.dy = dy;
	      if (children && (n = children.length)) {
	        var i = -1, n, c, d;
	        dx = node.value ? dx / node.value : 0;
	        while (++i < n) {
	          position(c = children[i], x, d = c.value * dx, dy);
	          x += d;
	        }
	      }
	    }
	    function depth(node) {
	      var children = node.children, d = 0;
	      if (children && (n = children.length)) {
	        var i = -1, n;
	        while (++i < n) d = Math.max(d, depth(children[i]));
	      }
	      return 1 + d;
	    }
	    function partition(d, i) {
	      var nodes = hierarchy.call(this, d, i);
	      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
	      return nodes;
	    }
	    partition.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return partition;
	    };
	    return d3_layout_hierarchyRebind(partition, hierarchy);
	  };
	  d3.layout.pie = function() {
	    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
	    function pie(data) {
	      var n = data.length, values = data.map(function(d, i) {
	        return +value.call(pie, d, i);
	      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
	      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
	        return values[j] - values[i];
	      } : function(i, j) {
	        return sort(data[i], data[j]);
	      });
	      index.forEach(function(i) {
	        arcs[i] = {
	          data: data[i],
	          value: v = values[i],
	          startAngle: a,
	          endAngle: a += v * k + pa,
	          padAngle: p
	        };
	      });
	      return arcs;
	    }
	    pie.value = function(_) {
	      if (!arguments.length) return value;
	      value = _;
	      return pie;
	    };
	    pie.sort = function(_) {
	      if (!arguments.length) return sort;
	      sort = _;
	      return pie;
	    };
	    pie.startAngle = function(_) {
	      if (!arguments.length) return startAngle;
	      startAngle = _;
	      return pie;
	    };
	    pie.endAngle = function(_) {
	      if (!arguments.length) return endAngle;
	      endAngle = _;
	      return pie;
	    };
	    pie.padAngle = function(_) {
	      if (!arguments.length) return padAngle;
	      padAngle = _;
	      return pie;
	    };
	    return pie;
	  };
	  var d3_layout_pieSortByValue = {};
	  d3.layout.stack = function() {
	    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
	    function stack(data, index) {
	      if (!(n = data.length)) return data;
	      var series = data.map(function(d, i) {
	        return values.call(stack, d, i);
	      });
	      var points = series.map(function(d) {
	        return d.map(function(v, i) {
	          return [ x.call(stack, v, i), y.call(stack, v, i) ];
	        });
	      });
	      var orders = order.call(stack, points, index);
	      series = d3.permute(series, orders);
	      points = d3.permute(points, orders);
	      var offsets = offset.call(stack, points, index);
	      var m = series[0].length, n, i, j, o;
	      for (j = 0; j < m; ++j) {
	        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
	        for (i = 1; i < n; ++i) {
	          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
	        }
	      }
	      return data;
	    }
	    stack.values = function(x) {
	      if (!arguments.length) return values;
	      values = x;
	      return stack;
	    };
	    stack.order = function(x) {
	      if (!arguments.length) return order;
	      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
	      return stack;
	    };
	    stack.offset = function(x) {
	      if (!arguments.length) return offset;
	      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
	      return stack;
	    };
	    stack.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      return stack;
	    };
	    stack.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      return stack;
	    };
	    stack.out = function(z) {
	      if (!arguments.length) return out;
	      out = z;
	      return stack;
	    };
	    return stack;
	  };
	  function d3_layout_stackX(d) {
	    return d.x;
	  }
	  function d3_layout_stackY(d) {
	    return d.y;
	  }
	  function d3_layout_stackOut(d, y0, y) {
	    d.y0 = y0;
	    d.y = y;
	  }
	  var d3_layout_stackOrders = d3.map({
	    "inside-out": function(data) {
	      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
	        return max[a] - max[b];
	      }), top = 0, bottom = 0, tops = [], bottoms = [];
	      for (i = 0; i < n; ++i) {
	        j = index[i];
	        if (top < bottom) {
	          top += sums[j];
	          tops.push(j);
	        } else {
	          bottom += sums[j];
	          bottoms.push(j);
	        }
	      }
	      return bottoms.reverse().concat(tops);
	    },
	    reverse: function(data) {
	      return d3.range(data.length).reverse();
	    },
	    "default": d3_layout_stackOrderDefault
	  });
	  var d3_layout_stackOffsets = d3.map({
	    silhouette: function(data) {
	      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o > max) max = o;
	        sums.push(o);
	      }
	      for (j = 0; j < m; ++j) {
	        y0[j] = (max - sums[j]) / 2;
	      }
	      return y0;
	    },
	    wiggle: function(data) {
	      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
	      y0[0] = o = o0 = 0;
	      for (j = 1; j < m; ++j) {
	        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
	        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
	          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
	            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
	          }
	          s2 += s3 * data[i][j][1];
	        }
	        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
	        if (o < o0) o0 = o;
	      }
	      for (j = 0; j < m; ++j) y0[j] -= o0;
	      return y0;
	    },
	    expand: function(data) {
	      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
	      }
	      for (j = 0; j < m; ++j) y0[j] = 0;
	      return y0;
	    },
	    zero: d3_layout_stackOffsetZero
	  });
	  function d3_layout_stackOrderDefault(data) {
	    return d3.range(data.length);
	  }
	  function d3_layout_stackOffsetZero(data) {
	    var j = -1, m = data[0].length, y0 = [];
	    while (++j < m) y0[j] = 0;
	    return y0;
	  }
	  function d3_layout_stackMaxIndex(array) {
	    var i = 1, j = 0, v = array[0][1], k, n = array.length;
	    for (;i < n; ++i) {
	      if ((k = array[i][1]) > v) {
	        j = i;
	        v = k;
	      }
	    }
	    return j;
	  }
	  function d3_layout_stackReduceSum(d) {
	    return d.reduce(d3_layout_stackSum, 0);
	  }
	  function d3_layout_stackSum(p, d) {
	    return p + d[1];
	  }
	  d3.layout.histogram = function() {
	    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
	    function histogram(data, i) {
	      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
	      while (++i < m) {
	        bin = bins[i] = [];
	        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
	        bin.y = 0;
	      }
	      if (m > 0) {
	        i = -1;
	        while (++i < n) {
	          x = values[i];
	          if (x >= range[0] && x <= range[1]) {
	            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
	            bin.y += k;
	            bin.push(data[i]);
	          }
	        }
	      }
	      return bins;
	    }
	    histogram.value = function(x) {
	      if (!arguments.length) return valuer;
	      valuer = x;
	      return histogram;
	    };
	    histogram.range = function(x) {
	      if (!arguments.length) return ranger;
	      ranger = d3_functor(x);
	      return histogram;
	    };
	    histogram.bins = function(x) {
	      if (!arguments.length) return binner;
	      binner = typeof x === "number" ? function(range) {
	        return d3_layout_histogramBinFixed(range, x);
	      } : d3_functor(x);
	      return histogram;
	    };
	    histogram.frequency = function(x) {
	      if (!arguments.length) return frequency;
	      frequency = !!x;
	      return histogram;
	    };
	    return histogram;
	  };
	  function d3_layout_histogramBinSturges(range, values) {
	    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
	  }
	  function d3_layout_histogramBinFixed(range, n) {
	    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
	    while (++x <= n) f[x] = m * x + b;
	    return f;
	  }
	  function d3_layout_histogramRange(values) {
	    return [ d3.min(values), d3.max(values) ];
	  }
	  d3.layout.pack = function() {
	    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
	    function pack(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
	        return radius;
	      };
	      root.x = root.y = 0;
	      d3_layout_hierarchyVisitAfter(root, function(d) {
	        d.r = +r(d.value);
	      });
	      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	      if (padding) {
	        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r += dr;
	        });
	        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r -= dr;
	        });
	      }
	      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
	      return nodes;
	    }
	    pack.size = function(_) {
	      if (!arguments.length) return size;
	      size = _;
	      return pack;
	    };
	    pack.radius = function(_) {
	      if (!arguments.length) return radius;
	      radius = _ == null || typeof _ === "function" ? _ : +_;
	      return pack;
	    };
	    pack.padding = function(_) {
	      if (!arguments.length) return padding;
	      padding = +_;
	      return pack;
	    };
	    return d3_layout_hierarchyRebind(pack, hierarchy);
	  };
	  function d3_layout_packSort(a, b) {
	    return a.value - b.value;
	  }
	  function d3_layout_packInsert(a, b) {
	    var c = a._pack_next;
	    a._pack_next = b;
	    b._pack_prev = a;
	    b._pack_next = c;
	    c._pack_prev = b;
	  }
	  function d3_layout_packSplice(a, b) {
	    a._pack_next = b;
	    b._pack_prev = a;
	  }
	  function d3_layout_packIntersects(a, b) {
	    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
	    return .999 * dr * dr > dx * dx + dy * dy;
	  }
	  function d3_layout_packSiblings(node) {
	    if (!(nodes = node.children) || !(n = nodes.length)) return;
	    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
	    function bound(node) {
	      xMin = Math.min(node.x - node.r, xMin);
	      xMax = Math.max(node.x + node.r, xMax);
	      yMin = Math.min(node.y - node.r, yMin);
	      yMax = Math.max(node.y + node.r, yMax);
	    }
	    nodes.forEach(d3_layout_packLink);
	    a = nodes[0];
	    a.x = -a.r;
	    a.y = 0;
	    bound(a);
	    if (n > 1) {
	      b = nodes[1];
	      b.x = b.r;
	      b.y = 0;
	      bound(b);
	      if (n > 2) {
	        c = nodes[2];
	        d3_layout_packPlace(a, b, c);
	        bound(c);
	        d3_layout_packInsert(a, c);
	        a._pack_prev = c;
	        d3_layout_packInsert(c, b);
	        b = a._pack_next;
	        for (i = 3; i < n; i++) {
	          d3_layout_packPlace(a, b, c = nodes[i]);
	          var isect = 0, s1 = 1, s2 = 1;
	          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
	            if (d3_layout_packIntersects(j, c)) {
	              isect = 1;
	              break;
	            }
	          }
	          if (isect == 1) {
	            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
	              if (d3_layout_packIntersects(k, c)) {
	                break;
	              }
	            }
	          }
	          if (isect) {
	            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
	            i--;
	          } else {
	            d3_layout_packInsert(a, c);
	            b = c;
	            bound(c);
	          }
	        }
	      }
	    }
	    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
	    for (i = 0; i < n; i++) {
	      c = nodes[i];
	      c.x -= cx;
	      c.y -= cy;
	      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
	    }
	    node.r = cr;
	    nodes.forEach(d3_layout_packUnlink);
	  }
	  function d3_layout_packLink(node) {
	    node._pack_next = node._pack_prev = node;
	  }
	  function d3_layout_packUnlink(node) {
	    delete node._pack_next;
	    delete node._pack_prev;
	  }
	  function d3_layout_packTransform(node, x, y, k) {
	    var children = node.children;
	    node.x = x += k * node.x;
	    node.y = y += k * node.y;
	    node.r *= k;
	    if (children) {
	      var i = -1, n = children.length;
	      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
	    }
	  }
	  function d3_layout_packPlace(a, b, c) {
	    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
	    if (db && (dx || dy)) {
	      var da = b.r + c.r, dc = dx * dx + dy * dy;
	      da *= da;
	      db *= db;
	      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = a.x + x * dx + y * dy;
	      c.y = a.y + x * dy - y * dx;
	    } else {
	      c.x = a.x + db;
	      c.y = a.y;
	    }
	  }
	  d3.layout.tree = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
	    function tree(d, i) {
	      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
	      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
	      d3_layout_hierarchyVisitBefore(root1, secondWalk);
	      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
	        var left = root0, right = root0, bottom = root0;
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	      return nodes;
	    }
	    function wrapTree(root0) {
	      var root1 = {
	        A: null,
	        children: [ root0 ]
	      }, queue = [ root1 ], node1;
	      while ((node1 = queue.pop()) != null) {
	        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
	          queue.push((children[i] = child = {
	            _: children[i],
	            parent: node1,
	            children: (child = children[i].children) && child.slice() || [],
	            A: null,
	            a: null,
	            z: 0,
	            m: 0,
	            c: 0,
	            s: 0,
	            t: null,
	            i: i
	          }).a = child);
	        }
	      }
	      return root1.children[0];
	    }
	    function firstWalk(v) {
	      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
	      if (children.length) {
	        d3_layout_treeShift(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
	        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
	          vom = d3_layout_treeLeft(vom);
	          vop = d3_layout_treeRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !d3_layout_treeRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !d3_layout_treeLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	    function sizeNode(node) {
	      node.x *= size[0];
	      node.y = node.depth * size[1];
	    }
	    tree.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return tree;
	    };
	    tree.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null ? sizeNode : null;
	      return tree;
	    };
	    tree.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) == null ? null : sizeNode;
	      return tree;
	    };
	    return d3_layout_hierarchyRebind(tree, hierarchy);
	  };
	  function d3_layout_treeSeparation(a, b) {
	    return a.parent == b.parent ? 1 : 2;
	  }
	  function d3_layout_treeLeft(v) {
	    var children = v.children;
	    return children.length ? children[0] : v.t;
	  }
	  function d3_layout_treeRight(v) {
	    var children = v.children, n;
	    return (n = children.length) ? children[n - 1] : v.t;
	  }
	  function d3_layout_treeMove(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	  function d3_layout_treeShift(v) {
	    var shift = 0, change = 0, children = v.children, i = children.length, w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	  function d3_layout_treeAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	  d3.layout.cluster = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
	    function cluster(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var children = node.children;
	        if (children && children.length) {
	          node.x = d3_layout_clusterX(children);
	          node.y = d3_layout_clusterY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
	      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
	        node.x = (node.x - root.x) * size[0];
	        node.y = (root.y - node.y) * size[1];
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * size[0];
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
	      });
	      return nodes;
	    }
	    cluster.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return cluster;
	    };
	    cluster.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null;
	      return cluster;
	    };
	    cluster.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) != null;
	      return cluster;
	    };
	    return d3_layout_hierarchyRebind(cluster, hierarchy);
	  };
	  function d3_layout_clusterY(children) {
	    return 1 + d3.max(children, function(child) {
	      return child.y;
	    });
	  }
	  function d3_layout_clusterX(children) {
	    return children.reduce(function(x, child) {
	      return x + child.x;
	    }, 0) / children.length;
	  }
	  function d3_layout_clusterLeft(node) {
	    var children = node.children;
	    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
	  }
	  function d3_layout_clusterRight(node) {
	    var children = node.children, n;
	    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
	  }
	  d3.layout.treemap = function() {
	    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
	    function scale(children, k) {
	      var i = -1, n = children.length, child, area;
	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }
	    function squarify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while ((n = remaining.length) > 0) {
	          row.push(child = remaining[n - 1]);
	          row.area += child.area;
	          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
	            remaining.pop();
	            best = score;
	          } else {
	            row.area -= row.pop().area;
	            position(row, u, rect, false);
	            u = Math.min(rect.dx, rect.dy);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(squarify);
	      }
	    }
	    function stickify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), remaining = children.slice(), child, row = [];
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while (child = remaining.pop()) {
	          row.push(child);
	          row.area += child.area;
	          if (child.z != null) {
	            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
	            row.length = row.area = 0;
	          }
	        }
	        children.forEach(stickify);
	      }
	    }
	    function worst(row, u) {
	      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
	      while (++i < n) {
	        if (!(r = row[i].area)) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      u *= u;
	      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
	    }
	    function position(row, u, rect, flush) {
	      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
	      if (u == rect.dx) {
	        if (flush || v > rect.dy) v = rect.dy;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dy = v;
	          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.dx += rect.x + rect.dx - x;
	        rect.y += v;
	        rect.dy -= v;
	      } else {
	        if (flush || v > rect.dx) v = rect.dx;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dx = v;
	          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.dy += rect.y + rect.dy - y;
	        rect.x += v;
	        rect.dx -= v;
	      }
	    }
	    function treemap(d) {
	      var nodes = stickies || hierarchy(d), root = nodes[0];
	      root.x = root.y = 0;
	      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
	      if (stickies) hierarchy.revalue(root);
	      scale([ root ], root.dx * root.dy / root.value);
	      (stickies ? stickify : squarify)(root);
	      if (sticky) stickies = nodes;
	      return nodes;
	    }
	    treemap.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return treemap;
	    };
	    treemap.padding = function(x) {
	      if (!arguments.length) return padding;
	      function padFunction(node) {
	        var p = x.call(treemap, node, node.depth);
	        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
	      }
	      function padConstant(node) {
	        return d3_layout_treemapPad(node, x);
	      }
	      var type;
	      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
	      padConstant) : padConstant;
	      return treemap;
	    };
	    treemap.round = function(x) {
	      if (!arguments.length) return round != Number;
	      round = x ? Math.round : Number;
	      return treemap;
	    };
	    treemap.sticky = function(x) {
	      if (!arguments.length) return sticky;
	      sticky = x;
	      stickies = null;
	      return treemap;
	    };
	    treemap.ratio = function(x) {
	      if (!arguments.length) return ratio;
	      ratio = x;
	      return treemap;
	    };
	    treemap.mode = function(x) {
	      if (!arguments.length) return mode;
	      mode = x + "";
	      return treemap;
	    };
	    return d3_layout_hierarchyRebind(treemap, hierarchy);
	  };
	  function d3_layout_treemapPadNull(node) {
	    return {
	      x: node.x,
	      y: node.y,
	      dx: node.dx,
	      dy: node.dy
	    };
	  }
	  function d3_layout_treemapPad(node, padding) {
	    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
	    if (dx < 0) {
	      x += dx / 2;
	      dx = 0;
	    }
	    if (dy < 0) {
	      y += dy / 2;
	      dy = 0;
	    }
	    return {
	      x: x,
	      y: y,
	      dx: dx,
	      dy: dy
	    };
	  }
	  d3.random = {
	    normal: function(µ, σ) {
	      var n = arguments.length;
	      if (n < 2) σ = 1;
	      if (n < 1) µ = 0;
	      return function() {
	        var x, y, r;
	        do {
	          x = Math.random() * 2 - 1;
	          y = Math.random() * 2 - 1;
	          r = x * x + y * y;
	        } while (!r || r > 1);
	        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
	      };
	    },
	    logNormal: function() {
	      var random = d3.random.normal.apply(d3, arguments);
	      return function() {
	        return Math.exp(random());
	      };
	    },
	    bates: function(m) {
	      var random = d3.random.irwinHall(m);
	      return function() {
	        return random() / m;
	      };
	    },
	    irwinHall: function(m) {
	      return function() {
	        for (var s = 0, j = 0; j < m; j++) s += Math.random();
	        return s;
	      };
	    }
	  };
	  d3.scale = {};
	  function d3_scaleExtent(domain) {
	    var start = domain[0], stop = domain[domain.length - 1];
	    return start < stop ? [ start, stop ] : [ stop, start ];
	  }
	  function d3_scaleRange(scale) {
	    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	  }
	  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
	    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
	    return function(x) {
	      return i(u(x));
	    };
	  }
	  function d3_scale_nice(domain, nice) {
	    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
	    if (x1 < x0) {
	      dx = i0, i0 = i1, i1 = dx;
	      dx = x0, x0 = x1, x1 = dx;
	    }
	    domain[i0] = nice.floor(x0);
	    domain[i1] = nice.ceil(x1);
	    return domain;
	  }
	  function d3_scale_niceStep(step) {
	    return step ? {
	      floor: function(x) {
	        return Math.floor(x / step) * step;
	      },
	      ceil: function(x) {
	        return Math.ceil(x / step) * step;
	      }
	    } : d3_scale_niceIdentity;
	  }
	  var d3_scale_niceIdentity = {
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
	    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
	    if (domain[k] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	    while (++j <= k) {
	      u.push(uninterpolate(domain[j - 1], domain[j]));
	      i.push(interpolate(range[j - 1], range[j]));
	    }
	    return function(x) {
	      var j = d3.bisect(domain, x, 1, k) - 1;
	      return i[j](u[j](x));
	    };
	  }
	  d3.scale.linear = function() {
	    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
	  };
	  function d3_scale_linear(domain, range, interpolate, clamp) {
	    var output, input;
	    function rescale() {
	      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
	      output = linear(domain, range, uninterpolate, interpolate);
	      input = linear(range, domain, uninterpolate, d3_interpolate);
	      return scale;
	    }
	    function scale(x) {
	      return output(x);
	    }
	    scale.invert = function(y) {
	      return input(y);
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(Number);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.rangeRound = function(x) {
	      return scale.range(x).interpolate(d3_interpolateRound);
	    };
	    scale.clamp = function(x) {
	      if (!arguments.length) return clamp;
	      clamp = x;
	      return rescale();
	    };
	    scale.interpolate = function(x) {
	      if (!arguments.length) return interpolate;
	      interpolate = x;
	      return rescale();
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      d3_scale_linearNice(domain, m);
	      return rescale();
	    };
	    scale.copy = function() {
	      return d3_scale_linear(domain, range, interpolate, clamp);
	    };
	    return rescale();
	  }
	  function d3_scale_linearRebind(scale, linear) {
	    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
	  }
	  function d3_scale_linearNice(domain, m) {
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    return domain;
	  }
	  function d3_scale_linearTickRange(domain, m) {
	    if (m == null) m = 10;
	    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
	    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
	    extent[0] = Math.ceil(extent[0] / step) * step;
	    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
	    extent[2] = step;
	    return extent;
	  }
	  function d3_scale_linearTicks(domain, m) {
	    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
	  }
	  function d3_scale_linearTickFormat(domain, m, format) {
	    var range = d3_scale_linearTickRange(domain, m);
	    if (format) {
	      var match = d3_format_re.exec(format);
	      match.shift();
	      if (match[8] === "s") {
	        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
	        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
	        match[8] = "f";
	        format = d3.format(match.join(""));
	        return function(d) {
	          return format(prefix.scale(d)) + prefix.symbol;
	        };
	      }
	      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
	      format = match.join("");
	    } else {
	      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
	    }
	    return d3.format(format);
	  }
	  var d3_scale_linearFormatSignificant = {
	    s: 1,
	    g: 1,
	    p: 1,
	    r: 1,
	    e: 1
	  };
	  function d3_scale_linearPrecision(value) {
	    return -Math.floor(Math.log(value) / Math.LN10 + .01);
	  }
	  function d3_scale_linearFormatPrecision(type, range) {
	    var p = d3_scale_linearPrecision(range[2]);
	    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
	  }
	  d3.scale.log = function() {
	    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
	  };
	  function d3_scale_log(linear, base, positive, domain) {
	    function log(x) {
	      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
	    }
	    function pow(x) {
	      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
	    }
	    function scale(x) {
	      return linear(log(x));
	    }
	    scale.invert = function(x) {
	      return pow(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      positive = x[0] >= 0;
	      linear.domain((domain = x.map(Number)).map(log));
	      return scale;
	    };
	    scale.base = function(_) {
	      if (!arguments.length) return base;
	      base = +_;
	      linear.domain(domain.map(log));
	      return scale;
	    };
	    scale.nice = function() {
	      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
	      linear.domain(niced);
	      domain = niced.map(pow);
	      return scale;
	    };
	    scale.ticks = function() {
	      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
	      if (isFinite(j - i)) {
	        if (positive) {
	          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
	          ticks.push(pow(i));
	        } else {
	          ticks.push(pow(i));
	          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
	        }
	        for (i = 0; ticks[i] < u; i++) {}
	        for (j = ticks.length; ticks[j - 1] > v; j--) {}
	        ticks = ticks.slice(i, j);
	      }
	      return ticks;
	    };
	    scale.tickFormat = function(n, format) {
	      if (!arguments.length) return d3_scale_logFormat;
	      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
	      var k = Math.max(1, base * n / scale.ticks().length);
	      return function(d) {
	        var i = d / pow(Math.round(log(d)));
	        if (i * base < base - .5) i *= base;
	        return i <= k ? format(d) : "";
	      };
	    };
	    scale.copy = function() {
	      return d3_scale_log(linear.copy(), base, positive, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
	    floor: function(x) {
	      return -Math.ceil(-x);
	    },
	    ceil: function(x) {
	      return -Math.floor(-x);
	    }
	  };
	  d3.scale.pow = function() {
	    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
	  };
	  function d3_scale_pow(linear, exponent, domain) {
	    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
	    function scale(x) {
	      return linear(powp(x));
	    }
	    scale.invert = function(x) {
	      return powb(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      linear.domain((domain = x.map(Number)).map(powp));
	      return scale;
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      return scale.domain(d3_scale_linearNice(domain, m));
	    };
	    scale.exponent = function(x) {
	      if (!arguments.length) return exponent;
	      powp = d3_scale_powPow(exponent = x);
	      powb = d3_scale_powPow(1 / exponent);
	      linear.domain(domain.map(powp));
	      return scale;
	    };
	    scale.copy = function() {
	      return d3_scale_pow(linear.copy(), exponent, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_scale_powPow(e) {
	    return function(x) {
	      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
	    };
	  }
	  d3.scale.sqrt = function() {
	    return d3.scale.pow().exponent(.5);
	  };
	  d3.scale.ordinal = function() {
	    return d3_scale_ordinal([], {
	      t: "range",
	      a: [ [] ]
	    });
	  };
	  function d3_scale_ordinal(domain, ranger) {
	    var index, range, rangeBand;
	    function scale(x) {
	      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
	    }
	    function steps(start, step) {
	      return d3.range(domain.length).map(function(i) {
	        return start + step * i;
	      });
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = [];
	      index = new d3_Map();
	      var i = -1, n = x.length, xi;
	      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
	      return scale[ranger.t].apply(scale, ranger.a);
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      rangeBand = 0;
	      ranger = {
	        t: "range",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangePoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
	      0) : (stop - start) / (domain.length - 1 + padding);
	      range = steps(start + step * padding / 2, step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangePoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundPoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
	      0) : (stop - start) / (domain.length - 1 + padding) | 0;
	      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangeRoundPoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
	      range = steps(start + step * outerPadding, step);
	      if (reverse) range.reverse();
	      rangeBand = step * (1 - padding);
	      ranger = {
	        t: "rangeBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
	      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
	      if (reverse) range.reverse();
	      rangeBand = Math.round(step * (1 - padding));
	      ranger = {
	        t: "rangeRoundBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBand = function() {
	      return rangeBand;
	    };
	    scale.rangeExtent = function() {
	      return d3_scaleExtent(ranger.a[0]);
	    };
	    scale.copy = function() {
	      return d3_scale_ordinal(domain, ranger);
	    };
	    return scale.domain(domain);
	  }
	  d3.scale.category10 = function() {
	    return d3.scale.ordinal().range(d3_category10);
	  };
	  d3.scale.category20 = function() {
	    return d3.scale.ordinal().range(d3_category20);
	  };
	  d3.scale.category20b = function() {
	    return d3.scale.ordinal().range(d3_category20b);
	  };
	  d3.scale.category20c = function() {
	    return d3.scale.ordinal().range(d3_category20c);
	  };
	  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
	  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
	  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
	  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
	  d3.scale.quantile = function() {
	    return d3_scale_quantile([], []);
	  };
	  function d3_scale_quantile(domain, range) {
	    var thresholds;
	    function rescale() {
	      var k = 0, q = range.length;
	      thresholds = [];
	      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
	      return scale;
	    }
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.quantiles = function() {
	      return thresholds;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantile(domain, range);
	    };
	    return rescale();
	  }
	  d3.scale.quantize = function() {
	    return d3_scale_quantize(0, 1, [ 0, 1 ]);
	  };
	  function d3_scale_quantize(x0, x1, range) {
	    var kx, i;
	    function scale(x) {
	      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
	    }
	    function rescale() {
	      kx = range.length / (x1 - x0);
	      i = range.length - 1;
	      return scale;
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return [ x0, x1 ];
	      x0 = +x[0];
	      x1 = +x[x.length - 1];
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      y = y < 0 ? NaN : y / kx + x0;
	      return [ y, y + 1 / kx ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantize(x0, x1, range);
	    };
	    return rescale();
	  }
	  d3.scale.threshold = function() {
	    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
	  };
	  function d3_scale_threshold(domain, range) {
	    function scale(x) {
	      if (x <= x) return range[d3.bisect(domain, x)];
	    }
	    scale.domain = function(_) {
	      if (!arguments.length) return domain;
	      domain = _;
	      return scale;
	    };
	    scale.range = function(_) {
	      if (!arguments.length) return range;
	      range = _;
	      return scale;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return [ domain[y - 1], domain[y] ];
	    };
	    scale.copy = function() {
	      return d3_scale_threshold(domain, range);
	    };
	    return scale;
	  }
	  d3.scale.identity = function() {
	    return d3_scale_identity([ 0, 1 ]);
	  };
	  function d3_scale_identity(domain) {
	    function identity(x) {
	      return +x;
	    }
	    identity.invert = identity;
	    identity.domain = identity.range = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(identity);
	      return identity;
	    };
	    identity.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    identity.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    identity.copy = function() {
	      return d3_scale_identity(domain);
	    };
	    return identity;
	  }
	  d3.svg = {};
	  function d3_zero() {
	    return 0;
	  }
	  d3.svg.arc = function() {
	    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
	    function arc() {
	      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
	      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
	      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
	      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
	      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
	        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
	        if (!cw) p1 *= -1;
	        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
	        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
	      }
	      if (r1) {
	        x0 = r1 * Math.cos(a0 + p1);
	        y0 = r1 * Math.sin(a0 + p1);
	        x1 = r1 * Math.cos(a1 - p1);
	        y1 = r1 * Math.sin(a1 - p1);
	        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
	        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
	          var h1 = (a0 + a1) / 2;
	          x0 = r1 * Math.cos(h1);
	          y0 = r1 * Math.sin(h1);
	          x1 = y1 = null;
	        }
	      } else {
	        x0 = y0 = 0;
	      }
	      if (r0) {
	        x2 = r0 * Math.cos(a1 - p0);
	        y2 = r0 * Math.sin(a1 - p0);
	        x3 = r0 * Math.cos(a0 + p0);
	        y3 = r0 * Math.sin(a0 + p0);
	        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
	        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
	          var h0 = (a0 + a1) / 2;
	          x2 = r0 * Math.cos(h0);
	          y2 = r0 * Math.sin(h0);
	          x3 = y3 = null;
	        }
	      } else {
	        x2 = y2 = 0;
	      }
	      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
	        cr = r0 < r1 ^ cw ? 0 : 1;
	        var rc1 = rc, rc0 = rc;
	        if (da < π) {
	          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	        }
	        if (x1 != null) {
	          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
	          if (rc === rc1) {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
	          } else {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
	          }
	        } else {
	          path.push("M", x0, ",", y0);
	        }
	        if (x3 != null) {
	          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
	          if (rc === rc0) {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          } else {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          }
	        } else {
	          path.push("L", x2, ",", y2);
	        }
	      } else {
	        path.push("M", x0, ",", y0);
	        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
	        path.push("L", x2, ",", y2);
	        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
	      }
	      path.push("Z");
	      return path.join("");
	    }
	    function circleSegment(r1, cw) {
	      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
	    }
	    arc.innerRadius = function(v) {
	      if (!arguments.length) return innerRadius;
	      innerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.outerRadius = function(v) {
	      if (!arguments.length) return outerRadius;
	      outerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.cornerRadius = function(v) {
	      if (!arguments.length) return cornerRadius;
	      cornerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.padRadius = function(v) {
	      if (!arguments.length) return padRadius;
	      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
	      return arc;
	    };
	    arc.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return arc;
	    };
	    arc.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return arc;
	    };
	    arc.padAngle = function(v) {
	      if (!arguments.length) return padAngle;
	      padAngle = d3_functor(v);
	      return arc;
	    };
	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
	      return [ Math.cos(a) * r, Math.sin(a) * r ];
	    };
	    return arc;
	  };
	  var d3_svg_arcAuto = "auto";
	  function d3_svg_arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	  function d3_svg_arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	  function d3_svg_arcStartAngle(d) {
	    return d.startAngle;
	  }
	  function d3_svg_arcEndAngle(d) {
	    return d.endAngle;
	  }
	  function d3_svg_arcPadAngle(d) {
	    return d && d.padAngle;
	  }
	  function d3_svg_arcSweep(x0, y0, x1, y1) {
	    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
	  }
	  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
	    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
	  }
	  function d3_svg_line(projection) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
	    function line(data) {
	      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
	      function segment() {
	        segments.push("M", interpolate(projection(points), tension));
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
	        } else if (points.length) {
	          segment();
	          points = [];
	        }
	      }
	      if (points.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    line.x = function(_) {
	      if (!arguments.length) return x;
	      x = _;
	      return line;
	    };
	    line.y = function(_) {
	      if (!arguments.length) return y;
	      y = _;
	      return line;
	    };
	    line.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return line;
	    };
	    line.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      return line;
	    };
	    line.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return line;
	    };
	    return line;
	  }
	  d3.svg.line = function() {
	    return d3_svg_line(d3_identity);
	  };
	  var d3_svg_lineInterpolators = d3.map({
	    linear: d3_svg_lineLinear,
	    "linear-closed": d3_svg_lineLinearClosed,
	    step: d3_svg_lineStep,
	    "step-before": d3_svg_lineStepBefore,
	    "step-after": d3_svg_lineStepAfter,
	    basis: d3_svg_lineBasis,
	    "basis-open": d3_svg_lineBasisOpen,
	    "basis-closed": d3_svg_lineBasisClosed,
	    bundle: d3_svg_lineBundle,
	    cardinal: d3_svg_lineCardinal,
	    "cardinal-open": d3_svg_lineCardinalOpen,
	    "cardinal-closed": d3_svg_lineCardinalClosed,
	    monotone: d3_svg_lineMonotone
	  });
	  d3_svg_lineInterpolators.forEach(function(key, value) {
	    value.key = key;
	    value.closed = /-closed$/.test(key);
	  });
	  function d3_svg_lineLinear(points) {
	    return points.length > 1 ? points.join("L") : points + "Z";
	  }
	  function d3_svg_lineLinearClosed(points) {
	    return points.join("L") + "Z";
	  }
	  function d3_svg_lineStep(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
	    if (n > 1) path.push("H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepBefore(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepAfter(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
	    return path.join("");
	  }
	  function d3_svg_lineCardinalOpen(points, tension) {
	    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineCardinalClosed(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
	    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
	  }
	  function d3_svg_lineCardinal(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineHermite(points, tangents) {
	    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
	      return d3_svg_lineLinear(points);
	    }
	    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	    if (quad) {
	      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
	      p0 = points[1];
	      pi = 2;
	    }
	    if (tangents.length > 1) {
	      t = tangents[1];
	      p = points[pi];
	      pi++;
	      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      for (var i = 2; i < tangents.length; i++, pi++) {
	        p = points[pi];
	        t = tangents[i];
	        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      }
	    }
	    if (quad) {
	      var lp = points[pi];
	      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	    }
	    return path;
	  }
	  function d3_svg_lineCardinalTangents(points, tension) {
	    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
	    while (++i < n) {
	      p0 = p1;
	      p1 = p2;
	      p2 = points[i];
	      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineBasis(points) {
	    if (points.length < 3) return d3_svg_lineLinear(points);
	    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    points.push(points[n - 1]);
	    while (++i <= n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    points.pop();
	    path.push("L", pi);
	    return path.join("");
	  }
	  function d3_svg_lineBasisOpen(points) {
	    if (points.length < 4) return d3_svg_lineLinear(points);
	    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
	    while (++i < 3) {
	      pi = points[i];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
	    --i;
	    while (++i < n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBasisClosed(points) {
	    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
	    while (++i < 4) {
	      pi = points[i % n];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    --i;
	    while (++i < m) {
	      pi = points[i % n];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBundle(points, tension) {
	    var n = points.length - 1;
	    if (n) {
	      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
	      while (++i <= n) {
	        p = points[i];
	        t = i / n;
	        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
	        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
	      }
	    }
	    return d3_svg_lineBasis(points);
	  }
	  function d3_svg_lineDot4(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	  }
	  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
	  function d3_svg_lineBasisBezier(path, x, y) {
	    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
	  }
	  function d3_svg_lineSlope(p0, p1) {
	    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
	  }
	  function d3_svg_lineFiniteDifferences(points) {
	    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
	    while (++i < j) {
	      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
	    }
	    m[i] = d;
	    return m;
	  }
	  function d3_svg_lineMonotoneTangents(points) {
	    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
	    while (++i < j) {
	      d = d3_svg_lineSlope(points[i], points[i + 1]);
	      if (abs(d) < ε) {
	        m[i] = m[i + 1] = 0;
	      } else {
	        a = m[i] / d;
	        b = m[i + 1] / d;
	        s = a * a + b * b;
	        if (s > 9) {
	          s = d * 3 / Math.sqrt(s);
	          m[i] = s * a;
	          m[i + 1] = s * b;
	        }
	      }
	    }
	    i = -1;
	    while (++i <= j) {
	      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
	      tangents.push([ s || 0, m[i] * s || 0 ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineMonotone(points) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
	  }
	  d3.svg.line.radial = function() {
	    var line = d3_svg_line(d3_svg_lineRadial);
	    line.radius = line.x, delete line.x;
	    line.angle = line.y, delete line.y;
	    return line;
	  };
	  function d3_svg_lineRadial(points) {
	    var point, i = -1, n = points.length, r, a;
	    while (++i < n) {
	      point = points[i];
	      r = point[0];
	      a = point[1] - halfπ;
	      point[0] = r * Math.cos(a);
	      point[1] = r * Math.sin(a);
	    }
	    return points;
	  }
	  function d3_svg_area(projection) {
	    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
	    function area(data) {
	      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
	        return x;
	      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
	        return y;
	      } : d3_functor(y1), x, y;
	      function segment() {
	        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
	          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
	        } else if (points0.length) {
	          segment();
	          points0 = [];
	          points1 = [];
	        }
	      }
	      if (points0.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    area.x = function(_) {
	      if (!arguments.length) return x1;
	      x0 = x1 = _;
	      return area;
	    };
	    area.x0 = function(_) {
	      if (!arguments.length) return x0;
	      x0 = _;
	      return area;
	    };
	    area.x1 = function(_) {
	      if (!arguments.length) return x1;
	      x1 = _;
	      return area;
	    };
	    area.y = function(_) {
	      if (!arguments.length) return y1;
	      y0 = y1 = _;
	      return area;
	    };
	    area.y0 = function(_) {
	      if (!arguments.length) return y0;
	      y0 = _;
	      return area;
	    };
	    area.y1 = function(_) {
	      if (!arguments.length) return y1;
	      y1 = _;
	      return area;
	    };
	    area.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return area;
	    };
	    area.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      interpolateReverse = interpolate.reverse || interpolate;
	      L = interpolate.closed ? "M" : "L";
	      return area;
	    };
	    area.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return area;
	    };
	    return area;
	  }
	  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
	  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
	  d3.svg.area = function() {
	    return d3_svg_area(d3_identity);
	  };
	  d3.svg.area.radial = function() {
	    var area = d3_svg_area(d3_svg_lineRadial);
	    area.radius = area.x, delete area.x;
	    area.innerRadius = area.x0, delete area.x0;
	    area.outerRadius = area.x1, delete area.x1;
	    area.angle = area.y, delete area.y;
	    area.startAngle = area.y0, delete area.y0;
	    area.endAngle = area.y1, delete area.y1;
	    return area;
	  };
	  d3.svg.chord = function() {
	    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function chord(d, i) {
	      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
	      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
	    }
	    function subgroup(self, f, d, i) {
	      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
	      return {
	        r: r,
	        a0: a0,
	        a1: a1,
	        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
	        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
	      };
	    }
	    function equals(a, b) {
	      return a.a0 == b.a0 && a.a1 == b.a1;
	    }
	    function arc(r, p, a) {
	      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
	    }
	    function curve(r0, p0, r1, p1) {
	      return "Q 0,0 " + p1;
	    }
	    chord.radius = function(v) {
	      if (!arguments.length) return radius;
	      radius = d3_functor(v);
	      return chord;
	    };
	    chord.source = function(v) {
	      if (!arguments.length) return source;
	      source = d3_functor(v);
	      return chord;
	    };
	    chord.target = function(v) {
	      if (!arguments.length) return target;
	      target = d3_functor(v);
	      return chord;
	    };
	    chord.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return chord;
	    };
	    chord.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return chord;
	    };
	    return chord;
	  };
	  function d3_svg_chordRadius(d) {
	    return d.radius;
	  }
	  d3.svg.diagonal = function() {
	    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
	    function diagonal(d, i) {
	      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
	        x: p0.x,
	        y: m
	      }, {
	        x: p3.x,
	        y: m
	      }, p3 ];
	      p = p.map(projection);
	      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
	    }
	    diagonal.source = function(x) {
	      if (!arguments.length) return source;
	      source = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.target = function(x) {
	      if (!arguments.length) return target;
	      target = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.projection = function(x) {
	      if (!arguments.length) return projection;
	      projection = x;
	      return diagonal;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalProjection(d) {
	    return [ d.x, d.y ];
	  }
	  d3.svg.diagonal.radial = function() {
	    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
	    diagonal.projection = function(x) {
	      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalRadialProjection(projection) {
	    return function() {
	      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
	      return [ r * Math.cos(a), r * Math.sin(a) ];
	    };
	  }
	  d3.svg.symbol = function() {
	    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
	    function symbol(d, i) {
	      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
	    }
	    symbol.type = function(x) {
	      if (!arguments.length) return type;
	      type = d3_functor(x);
	      return symbol;
	    };
	    symbol.size = function(x) {
	      if (!arguments.length) return size;
	      size = d3_functor(x);
	      return symbol;
	    };
	    return symbol;
	  };
	  function d3_svg_symbolSize() {
	    return 64;
	  }
	  function d3_svg_symbolType() {
	    return "circle";
	  }
	  function d3_svg_symbolCircle(size) {
	    var r = Math.sqrt(size / π);
	    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	  }
	  var d3_svg_symbols = d3.map({
	    circle: d3_svg_symbolCircle,
	    cross: function(size) {
	      var r = Math.sqrt(size / 5) / 2;
	      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	    },
	    diamond: function(size) {
	      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
	      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	    },
	    square: function(size) {
	      var r = Math.sqrt(size) / 2;
	      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	    },
	    "triangle-down": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	    },
	    "triangle-up": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	    }
	  });
	  d3.svg.symbolTypes = d3_svg_symbols.keys();
	  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
	  d3_selectionPrototype.transition = function(name) {
	    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
	      time: Date.now(),
	      ease: d3_ease_cubicInOut,
	      delay: 0,
	      duration: 250
	    };
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_selectionPrototype.interrupt = function(name) {
	    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
	  };
	  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
	  function d3_selection_interruptNS(ns) {
	    return function() {
	      var lock, activeId, active;
	      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        if (--lock.count) delete lock[activeId]; else delete this[ns];
	        lock.active += .5;
	        active.event && active.event.interrupt.call(this, this.__data__, active.index);
	      }
	    };
	  }
	  function d3_transition(groups, ns, id) {
	    d3_subclass(groups, d3_transitionPrototype);
	    groups.namespace = ns;
	    groups.id = id;
	    return groups;
	  }
	  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
	  d3_transitionPrototype.call = d3_selectionPrototype.call;
	  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
	  d3_transitionPrototype.node = d3_selectionPrototype.node;
	  d3_transitionPrototype.size = d3_selectionPrototype.size;
	  d3.transition = function(selection, name) {
	    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
	  };
	  d3.transition.prototype = d3_transitionPrototype;
	  d3_transitionPrototype.select = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
	          subgroup.push(subnode);
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.selectAll = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          transition = node[ns][id];
	          subnodes = selector.call(node, node.__data__, i, j);
	          subgroups.push(subgroup = []);
	          for (var k = -1, o = subnodes.length; ++k < o; ) {
	            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
	            subgroup.push(subnode);
	          }
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_transition(subgroups, this.namespace, this.id);
	  };
	  d3_transitionPrototype.tween = function(name, tween) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
	    return d3_selection_each(this, tween == null ? function(node) {
	      node[ns][id].tween.remove(name);
	    } : function(node) {
	      node[ns][id].tween.set(name, tween);
	    });
	  };
	  function d3_transition_tween(groups, name, value, tween) {
	    var id = groups.id, ns = groups.namespace;
	    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
	    } : (value = tween(value), function(node) {
	      node[ns][id].tween.set(name, value);
	    }));
	  }
	  d3_transitionPrototype.attr = function(nameNS, value) {
	    if (arguments.length < 2) {
	      for (value in nameNS) this.attr(value, nameNS[value]);
	      return this;
	    }
	    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrTween(b) {
	      return b == null ? attrNull : (b += "", function() {
	        var a = this.getAttribute(name), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttribute(name, i(t));
	        });
	      });
	    }
	    function attrTweenNS(b) {
	      return b == null ? attrNullNS : (b += "", function() {
	        var a = this.getAttributeNS(name.space, name.local), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttributeNS(name.space, name.local, i(t));
	        });
	      });
	    }
	    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.attrTween = function(nameNS, tween) {
	    var name = d3.ns.qualify(nameNS);
	    function attrTween(d, i) {
	      var f = tween.call(this, d, i, this.getAttribute(name));
	      return f && function(t) {
	        this.setAttribute(name, f(t));
	      };
	    }
	    function attrTweenNS(d, i) {
	      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
	      return f && function(t) {
	        this.setAttributeNS(name.space, name.local, f(t));
	      };
	    }
	    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.style(priority, name[priority], value);
	        return this;
	      }
	      priority = "";
	    }
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleString(b) {
	      return b == null ? styleNull : (b += "", function() {
	        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
	        return a !== b && (i = d3_interpolate(a, b), function(t) {
	          this.style.setProperty(name, i(t), priority);
	        });
	      });
	    }
	    return d3_transition_tween(this, "style." + name, value, styleString);
	  };
	  d3_transitionPrototype.styleTween = function(name, tween, priority) {
	    if (arguments.length < 3) priority = "";
	    function styleTween(d, i) {
	      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
	      return f && function(t) {
	        this.style.setProperty(name, f(t), priority);
	      };
	    }
	    return this.tween("style." + name, styleTween);
	  };
	  d3_transitionPrototype.text = function(value) {
	    return d3_transition_tween(this, "text", value, d3_transition_text);
	  };
	  function d3_transition_text(b) {
	    if (b == null) b = "";
	    return function() {
	      this.textContent = b;
	    };
	  }
	  d3_transitionPrototype.remove = function() {
	    var ns = this.namespace;
	    return this.each("end.transition", function() {
	      var p;
	      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
	    });
	  };
	  d3_transitionPrototype.ease = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].ease;
	    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
	    return d3_selection_each(this, function(node) {
	      node[ns][id].ease = value;
	    });
	  };
	  d3_transitionPrototype.delay = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].delay;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].delay = +value.call(node, node.__data__, i, j);
	    } : (value = +value, function(node) {
	      node[ns][id].delay = value;
	    }));
	  };
	  d3_transitionPrototype.duration = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].duration;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
	    } : (value = Math.max(1, value), function(node) {
	      node[ns][id].duration = value;
	    }));
	  };
	  d3_transitionPrototype.each = function(type, listener) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) {
	      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
	      try {
	        d3_transitionInheritId = id;
	        d3_selection_each(this, function(node, i, j) {
	          d3_transitionInherit = node[ns][id];
	          type.call(node, node.__data__, i, j);
	        });
	      } finally {
	        d3_transitionInherit = inherit;
	        d3_transitionInheritId = inheritId;
	      }
	    } else {
	      d3_selection_each(this, function(node) {
	        var transition = node[ns][id];
	        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
	      });
	    }
	    return this;
	  };
	  d3_transitionPrototype.transition = function() {
	    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if (node = group[i]) {
	          transition = node[ns][id0];
	          d3_transitionNode(node, i, ns, id1, {
	            time: transition.time,
	            ease: transition.ease,
	            delay: transition.delay + transition.duration,
	            duration: transition.duration
	          });
	        }
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id1);
	  };
	  function d3_transitionNamespace(name) {
	    return name == null ? "__transition__" : "__transition_" + name + "__";
	  }
	  function d3_transitionNode(node, i, ns, id, inherit) {
	    var lock = node[ns] || (node[ns] = {
	      active: 0,
	      count: 0
	    }), transition = lock[id], time, timer, duration, ease, tweens;
	    function schedule(elapsed) {
	      var delay = transition.delay;
	      timer.t = delay + time;
	      if (delay <= elapsed) return start(elapsed - delay);
	      timer.c = start;
	    }
	    function start(elapsed) {
	      var activeId = lock.active, active = lock[activeId];
	      if (active) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        --lock.count;
	        delete lock[activeId];
	        active.event && active.event.interrupt.call(node, node.__data__, active.index);
	      }
	      for (var cancelId in lock) {
	        if (+cancelId < id) {
	          var cancel = lock[cancelId];
	          cancel.timer.c = null;
	          cancel.timer.t = NaN;
	          --lock.count;
	          delete lock[cancelId];
	        }
	      }
	      timer.c = tick;
	      d3_timer(function() {
	        if (timer.c && tick(elapsed || 1)) {
	          timer.c = null;
	          timer.t = NaN;
	        }
	        return 1;
	      }, 0, time);
	      lock.active = id;
	      transition.event && transition.event.start.call(node, node.__data__, i);
	      tweens = [];
	      transition.tween.forEach(function(key, value) {
	        if (value = value.call(node, node.__data__, i)) {
	          tweens.push(value);
	        }
	      });
	      ease = transition.ease;
	      duration = transition.duration;
	    }
	    function tick(elapsed) {
	      var t = elapsed / duration, e = ease(t), n = tweens.length;
	      while (n > 0) {
	        tweens[--n].call(node, e);
	      }
	      if (t >= 1) {
	        transition.event && transition.event.end.call(node, node.__data__, i);
	        if (--lock.count) delete lock[id]; else delete node[ns];
	        return 1;
	      }
	    }
	    if (!transition) {
	      time = inherit.time;
	      timer = d3_timer(schedule, 0, time);
	      transition = lock[id] = {
	        tween: new d3_Map(),
	        time: time,
	        timer: timer,
	        delay: inherit.delay,
	        duration: inherit.duration,
	        ease: inherit.ease,
	        index: i
	      };
	      inherit = null;
	      ++lock.count;
	    }
	  }
	  d3.svg.axis = function() {
	    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
	    function axis(g) {
	      g.each(function() {
	        var g = d3.select(this);
	        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
	        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
	        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
	        d3.transition(path));
	        tickEnter.append("line");
	        tickEnter.append("text");
	        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
	        if (orient === "bottom" || orient === "top") {
	          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
	          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
	          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
	        } else {
	          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
	          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
	          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
	        }
	        lineEnter.attr(y2, sign * innerTickSize);
	        textEnter.attr(y1, sign * tickSpacing);
	        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
	        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
	        if (scale1.rangeBand) {
	          var x = scale1, dx = x.rangeBand() / 2;
	          scale0 = scale1 = function(d) {
	            return x(d) + dx;
	          };
	        } else if (scale0.rangeBand) {
	          scale0 = scale1;
	        } else {
	          tickExit.call(tickTransform, scale1, scale0);
	        }
	        tickEnter.call(tickTransform, scale0, scale1);
	        tickUpdate.call(tickTransform, scale1, scale1);
	      });
	    }
	    axis.scale = function(x) {
	      if (!arguments.length) return scale;
	      scale = x;
	      return axis;
	    };
	    axis.orient = function(x) {
	      if (!arguments.length) return orient;
	      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
	      return axis;
	    };
	    axis.ticks = function() {
	      if (!arguments.length) return tickArguments_;
	      tickArguments_ = d3_array(arguments);
	      return axis;
	    };
	    axis.tickValues = function(x) {
	      if (!arguments.length) return tickValues;
	      tickValues = x;
	      return axis;
	    };
	    axis.tickFormat = function(x) {
	      if (!arguments.length) return tickFormat_;
	      tickFormat_ = x;
	      return axis;
	    };
	    axis.tickSize = function(x) {
	      var n = arguments.length;
	      if (!n) return innerTickSize;
	      innerTickSize = +x;
	      outerTickSize = +arguments[n - 1];
	      return axis;
	    };
	    axis.innerTickSize = function(x) {
	      if (!arguments.length) return innerTickSize;
	      innerTickSize = +x;
	      return axis;
	    };
	    axis.outerTickSize = function(x) {
	      if (!arguments.length) return outerTickSize;
	      outerTickSize = +x;
	      return axis;
	    };
	    axis.tickPadding = function(x) {
	      if (!arguments.length) return tickPadding;
	      tickPadding = +x;
	      return axis;
	    };
	    axis.tickSubdivide = function() {
	      return arguments.length && axis;
	    };
	    return axis;
	  };
	  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
	    top: 1,
	    right: 1,
	    bottom: 1,
	    left: 1
	  };
	  function d3_svg_axisX(selection, x0, x1) {
	    selection.attr("transform", function(d) {
	      var v0 = x0(d);
	      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
	    });
	  }
	  function d3_svg_axisY(selection, y0, y1) {
	    selection.attr("transform", function(d) {
	      var v0 = y0(d);
	      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
	    });
	  }
	  d3.svg.brush = function() {
	    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
	    function brush(g) {
	      g.each(function() {
	        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
	        var background = g.selectAll(".background").data([ 0 ]);
	        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
	        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
	        var resize = g.selectAll(".resize").data(resizes, d3_identity);
	        resize.exit().remove();
	        resize.enter().append("g").attr("class", function(d) {
	          return "resize " + d;
	        }).style("cursor", function(d) {
	          return d3_svg_brushCursor[d];
	        }).append("rect").attr("x", function(d) {
	          return /[ew]$/.test(d) ? -3 : null;
	        }).attr("y", function(d) {
	          return /^[ns]/.test(d) ? -3 : null;
	        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
	        resize.style("display", brush.empty() ? "none" : null);
	        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
	        if (x) {
	          range = d3_scaleRange(x);
	          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
	          redrawX(gUpdate);
	        }
	        if (y) {
	          range = d3_scaleRange(y);
	          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
	          redrawY(gUpdate);
	        }
	        redraw(gUpdate);
	      });
	    }
	    brush.event = function(g) {
	      g.each(function() {
	        var event_ = event.of(this, arguments), extent1 = {
	          x: xExtent,
	          y: yExtent,
	          i: xExtentDomain,
	          j: yExtentDomain
	        }, extent0 = this.__chart__ || extent1;
	        this.__chart__ = extent1;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.brush", function() {
	            xExtentDomain = extent0.i;
	            yExtentDomain = extent0.j;
	            xExtent = extent0.x;
	            yExtent = extent0.y;
	            event_({
	              type: "brushstart"
	            });
	          }).tween("brush:brush", function() {
	            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
	            xExtentDomain = yExtentDomain = null;
	            return function(t) {
	              xExtent = extent1.x = xi(t);
	              yExtent = extent1.y = yi(t);
	              event_({
	                type: "brush",
	                mode: "resize"
	              });
	            };
	          }).each("end.brush", function() {
	            xExtentDomain = extent1.i;
	            yExtentDomain = extent1.j;
	            event_({
	              type: "brush",
	              mode: "resize"
	            });
	            event_({
	              type: "brushend"
	            });
	          });
	        } else {
	          event_({
	            type: "brushstart"
	          });
	          event_({
	            type: "brush",
	            mode: "resize"
	          });
	          event_({
	            type: "brushend"
	          });
	        }
	      });
	    };
	    function redraw(g) {
	      g.selectAll(".resize").attr("transform", function(d) {
	        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
	      });
	    }
	    function redrawX(g) {
	      g.select(".extent").attr("x", xExtent[0]);
	      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
	    }
	    function redrawY(g) {
	      g.select(".extent").attr("y", yExtent[0]);
	      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
	    }
	    function brushstart() {
	      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
	      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
	      if (d3.event.changedTouches) {
	        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
	      } else {
	        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
	      }
	      g.interrupt().selectAll("*").interrupt();
	      if (dragging) {
	        origin[0] = xExtent[0] - origin[0];
	        origin[1] = yExtent[0] - origin[1];
	      } else if (resizing) {
	        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
	        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
	        origin[0] = xExtent[ex];
	        origin[1] = yExtent[ey];
	      } else if (d3.event.altKey) center = origin.slice();
	      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
	      d3.select("body").style("cursor", eventTarget.style("cursor"));
	      event_({
	        type: "brushstart"
	      });
	      brushmove();
	      function keydown() {
	        if (d3.event.keyCode == 32) {
	          if (!dragging) {
	            center = null;
	            origin[0] -= xExtent[1];
	            origin[1] -= yExtent[1];
	            dragging = 2;
	          }
	          d3_eventPreventDefault();
	        }
	      }
	      function keyup() {
	        if (d3.event.keyCode == 32 && dragging == 2) {
	          origin[0] += xExtent[1];
	          origin[1] += yExtent[1];
	          dragging = 0;
	          d3_eventPreventDefault();
	        }
	      }
	      function brushmove() {
	        var point = d3.mouse(target), moved = false;
	        if (offset) {
	          point[0] += offset[0];
	          point[1] += offset[1];
	        }
	        if (!dragging) {
	          if (d3.event.altKey) {
	            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
	            origin[0] = xExtent[+(point[0] < center[0])];
	            origin[1] = yExtent[+(point[1] < center[1])];
	          } else center = null;
	        }
	        if (resizingX && move1(point, x, 0)) {
	          redrawX(g);
	          moved = true;
	        }
	        if (resizingY && move1(point, y, 1)) {
	          redrawY(g);
	          moved = true;
	        }
	        if (moved) {
	          redraw(g);
	          event_({
	            type: "brush",
	            mode: dragging ? "move" : "resize"
	          });
	        }
	      }
	      function move1(point, scale, i) {
	        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
	        if (dragging) {
	          r0 -= position;
	          r1 -= size + position;
	        }
	        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
	        if (dragging) {
	          max = (min += position) + size;
	        } else {
	          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
	          if (position < min) {
	            max = min;
	            min = position;
	          } else {
	            max = position;
	          }
	        }
	        if (extent[0] != min || extent[1] != max) {
	          if (i) yExtentDomain = null; else xExtentDomain = null;
	          extent[0] = min;
	          extent[1] = max;
	          return true;
	        }
	      }
	      function brushend() {
	        brushmove();
	        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
	        d3.select("body").style("cursor", null);
	        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
	        dragRestore();
	        event_({
	          type: "brushend"
	        });
	      }
	    }
	    brush.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.clamp = function(z) {
	      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
	      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
	      return brush;
	    };
	    brush.extent = function(z) {
	      var x0, x1, y0, y1, t;
	      if (!arguments.length) {
	        if (x) {
	          if (xExtentDomain) {
	            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
	          } else {
	            x0 = xExtent[0], x1 = xExtent[1];
	            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
	            if (x1 < x0) t = x0, x0 = x1, x1 = t;
	          }
	        }
	        if (y) {
	          if (yExtentDomain) {
	            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
	          } else {
	            y0 = yExtent[0], y1 = yExtent[1];
	            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
	            if (y1 < y0) t = y0, y0 = y1, y1 = t;
	          }
	        }
	        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
	      }
	      if (x) {
	        x0 = z[0], x1 = z[1];
	        if (y) x0 = x0[0], x1 = x1[0];
	        xExtentDomain = [ x0, x1 ];
	        if (x.invert) x0 = x(x0), x1 = x(x1);
	        if (x1 < x0) t = x0, x0 = x1, x1 = t;
	        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
	      }
	      if (y) {
	        y0 = z[0], y1 = z[1];
	        if (x) y0 = y0[1], y1 = y1[1];
	        yExtentDomain = [ y0, y1 ];
	        if (y.invert) y0 = y(y0), y1 = y(y1);
	        if (y1 < y0) t = y0, y0 = y1, y1 = t;
	        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
	      }
	      return brush;
	    };
	    brush.clear = function() {
	      if (!brush.empty()) {
	        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
	        xExtentDomain = yExtentDomain = null;
	      }
	      return brush;
	    };
	    brush.empty = function() {
	      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
	    };
	    return d3.rebind(brush, event, "on");
	  };
	  var d3_svg_brushCursor = {
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
	  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
	  var d3_time_formatUtc = d3_time_format.utc;
	  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
	  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
	  function d3_time_formatIsoNative(date) {
	    return date.toISOString();
	  }
	  d3_time_formatIsoNative.parse = function(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  };
	  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
	  d3_time.second = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 1e3) * 1e3);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	  }, function(date) {
	    return date.getSeconds();
	  });
	  d3_time.seconds = d3_time.second.range;
	  d3_time.seconds.utc = d3_time.second.utc.range;
	  d3_time.minute = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 6e4) * 6e4);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	  }, function(date) {
	    return date.getMinutes();
	  });
	  d3_time.minutes = d3_time.minute.range;
	  d3_time.minutes.utc = d3_time.minute.utc.range;
	  d3_time.hour = d3_time_interval(function(date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	  }, function(date) {
	    return date.getHours();
	  });
	  d3_time.hours = d3_time.hour.range;
	  d3_time.hours.utc = d3_time.hour.utc.range;
	  d3_time.month = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setDate(1);
	    return date;
	  }, function(date, offset) {
	    date.setMonth(date.getMonth() + offset);
	  }, function(date) {
	    return date.getMonth();
	  });
	  d3_time.months = d3_time.month.range;
	  d3_time.months.utc = d3_time.month.utc.range;
	  function d3_time_scale(linear, methods, format) {
	    function scale(x) {
	      return linear(x);
	    }
	    scale.invert = function(x) {
	      return d3_time_scaleDate(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
	      linear.domain(x);
	      return scale;
	    };
	    function tickMethod(extent, count) {
	      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
	      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
	        return d / 31536e6;
	      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
	    }
	    scale.nice = function(interval, skip) {
	      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
	      if (method) interval = method[0], skip = method[1];
	      function skipped(date) {
	        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
	      }
	      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
	        floor: function(date) {
	          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
	          return date;
	        },
	        ceil: function(date) {
	          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
	          return date;
	        }
	      } : interval));
	    };
	    scale.ticks = function(interval, skip) {
	      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
	        range: interval
	      }, skip ];
	      if (method) interval = method[0], skip = method[1];
	      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
	    };
	    scale.tickFormat = function() {
	      return format;
	    };
	    scale.copy = function() {
	      return d3_time_scale(linear.copy(), methods, format);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_time_scaleDate(t) {
	    return new Date(t);
	  }
	  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
	  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
	  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
	    return d.getMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getHours();
	  } ], [ "%a %d", function(d) {
	    return d.getDay() && d.getDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getMonth();
	  } ], [ "%Y", d3_true ] ]);
	  var d3_time_scaleMilliseconds = {
	    range: function(start, stop, step) {
	      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
	    },
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  d3_time_scaleLocalMethods.year = d3_time.year;
	  d3_time.scale = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
	  };
	  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
	    return [ m[0].utc, m[1] ];
	  });
	  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
	    return d.getUTCMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getUTCSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getUTCMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getUTCHours();
	  } ], [ "%a %d", function(d) {
	    return d.getUTCDay() && d.getUTCDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getUTCDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getUTCMonth();
	  } ], [ "%Y", d3_true ] ]);
	  d3_time_scaleUtcMethods.year = d3_time.year.utc;
	  d3_time.scale.utc = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
	  };
	  d3.text = d3_xhrType(function(request) {
	    return request.responseText;
	  });
	  d3.json = function(url, callback) {
	    return d3_xhr(url, "application/json", d3_json, callback);
	  };
	  function d3_json(request) {
	    return JSON.parse(request.responseText);
	  }
	  d3.html = function(url, callback) {
	    return d3_xhr(url, "text/html", d3_html, callback);
	  };
	  function d3_html(request) {
	    var range = d3_document.createRange();
	    range.selectNode(d3_document.body);
	    return range.createContextualFragment(request.responseText);
	  }
	  d3.xml = d3_xhrType(function(request) {
	    return request.responseXML;
	  });
	  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.topojson = {})));
	}(this, function (exports) { 'use strict';
	
	  function noop() {}
	
	  function absolute(transform) {
	    if (!transform) return noop;
	    var x0,
	        y0,
	        kx = transform.scale[0],
	        ky = transform.scale[1],
	        dx = transform.translate[0],
	        dy = transform.translate[1];
	    return function(point, i) {
	      if (!i) x0 = y0 = 0;
	      point[0] = (x0 += point[0]) * kx + dx;
	      point[1] = (y0 += point[1]) * ky + dy;
	    };
	  }
	
	  function relative(transform) {
	    if (!transform) return noop;
	    var x0,
	        y0,
	        kx = transform.scale[0],
	        ky = transform.scale[1],
	        dx = transform.translate[0],
	        dy = transform.translate[1];
	    return function(point, i) {
	      if (!i) x0 = y0 = 0;
	      var x1 = (point[0] - dx) / kx | 0,
	          y1 = (point[1] - dy) / ky | 0;
	      point[0] = x1 - x0;
	      point[1] = y1 - y0;
	      x0 = x1;
	      y0 = y1;
	    };
	  }
	
	  function reverse(array, n) {
	    var t, j = array.length, i = j - n;
	    while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
	  }
	
	  function bisect(a, x) {
	    var lo = 0, hi = a.length;
	    while (lo < hi) {
	      var mid = lo + hi >>> 1;
	      if (a[mid] < x) lo = mid + 1;
	      else hi = mid;
	    }
	    return lo;
	  }
	
	  function feature(topology, o) {
	    return o.type === "GeometryCollection" ? {
	      type: "FeatureCollection",
	      features: o.geometries.map(function(o) { return feature$1(topology, o); })
	    } : feature$1(topology, o);
	  }
	
	  function feature$1(topology, o) {
	    var f = {
	      type: "Feature",
	      id: o.id,
	      properties: o.properties || {},
	      geometry: object(topology, o)
	    };
	    if (o.id == null) delete f.id;
	    return f;
	  }
	
	  function object(topology, o) {
	    var absolute$$ = absolute(topology.transform),
	        arcs = topology.arcs;
	
	    function arc(i, points) {
	      if (points.length) points.pop();
	      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length, p; k < n; ++k) {
	        points.push(p = a[k].slice());
	        absolute$$(p, k);
	      }
	      if (i < 0) reverse(points, n);
	    }
	
	    function point(p) {
	      p = p.slice();
	      absolute$$(p, 0);
	      return p;
	    }
	
	    function line(arcs) {
	      var points = [];
	      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
	      if (points.length < 2) points.push(points[0].slice());
	      return points;
	    }
	
	    function ring(arcs) {
	      var points = line(arcs);
	      while (points.length < 4) points.push(points[0].slice());
	      return points;
	    }
	
	    function polygon(arcs) {
	      return arcs.map(ring);
	    }
	
	    function geometry(o) {
	      var t = o.type;
	      return t === "GeometryCollection" ? {type: t, geometries: o.geometries.map(geometry)}
	          : t in geometryType ? {type: t, coordinates: geometryType[t](o)}
	          : null;
	    }
	
	    var geometryType = {
	      Point: function(o) { return point(o.coordinates); },
	      MultiPoint: function(o) { return o.coordinates.map(point); },
	      LineString: function(o) { return line(o.arcs); },
	      MultiLineString: function(o) { return o.arcs.map(line); },
	      Polygon: function(o) { return polygon(o.arcs); },
	      MultiPolygon: function(o) { return o.arcs.map(polygon); }
	    };
	
	    return geometry(o);
	  }
	
	  function stitchArcs(topology, arcs) {
	    var stitchedArcs = {},
	        fragmentByStart = {},
	        fragmentByEnd = {},
	        fragments = [],
	        emptyIndex = -1;
	
	    // Stitch empty arcs first, since they may be subsumed by other arcs.
	    arcs.forEach(function(i, j) {
	      var arc = topology.arcs[i < 0 ? ~i : i], t;
	      if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
	        t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
	      }
	    });
	
	    arcs.forEach(function(i) {
	      var e = ends(i),
	          start = e[0],
	          end = e[1],
	          f, g;
	
	      if (f = fragmentByEnd[start]) {
	        delete fragmentByEnd[f.end];
	        f.push(i);
	        f.end = end;
	        if (g = fragmentByStart[end]) {
	          delete fragmentByStart[g.start];
	          var fg = g === f ? f : f.concat(g);
	          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
	        } else {
	          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
	        }
	      } else if (f = fragmentByStart[end]) {
	        delete fragmentByStart[f.start];
	        f.unshift(i);
	        f.start = start;
	        if (g = fragmentByEnd[start]) {
	          delete fragmentByEnd[g.end];
	          var gf = g === f ? f : g.concat(f);
	          fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
	        } else {
	          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
	        }
	      } else {
	        f = [i];
	        fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
	      }
	    });
	
	    function ends(i) {
	      var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
	      if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
	      else p1 = arc[arc.length - 1];
	      return i < 0 ? [p1, p0] : [p0, p1];
	    }
	
	    function flush(fragmentByEnd, fragmentByStart) {
	      for (var k in fragmentByEnd) {
	        var f = fragmentByEnd[k];
	        delete fragmentByStart[f.start];
	        delete f.start;
	        delete f.end;
	        f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
	        fragments.push(f);
	      }
	    }
	
	    flush(fragmentByEnd, fragmentByStart);
	    flush(fragmentByStart, fragmentByEnd);
	    arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });
	
	    return fragments;
	  }
	
	  function mesh(topology) {
	    return object(topology, meshArcs.apply(this, arguments));
	  }
	
	  function meshArcs(topology, o, filter) {
	    var arcs = [];
	
	    function arc(i) {
	      var j = i < 0 ? ~i : i;
	      (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
	    }
	
	    function line(arcs) {
	      arcs.forEach(arc);
	    }
	
	    function polygon(arcs) {
	      arcs.forEach(line);
	    }
	
	    function geometry(o) {
	      if (o.type === "GeometryCollection") o.geometries.forEach(geometry);
	      else if (o.type in geometryType) geom = o, geometryType[o.type](o.arcs);
	    }
	
	    if (arguments.length > 1) {
	      var geomsByArc = [],
	          geom;
	
	      var geometryType = {
	        LineString: line,
	        MultiLineString: polygon,
	        Polygon: polygon,
	        MultiPolygon: function(arcs) { arcs.forEach(polygon); }
	      };
	
	      geometry(o);
	
	      geomsByArc.forEach(arguments.length < 3
	          ? function(geoms) { arcs.push(geoms[0].i); }
	          : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });
	    } else {
	      for (var i = 0, n = topology.arcs.length; i < n; ++i) arcs.push(i);
	    }
	
	    return {type: "MultiLineString", arcs: stitchArcs(topology, arcs)};
	  }
	
	  function triangle(triangle) {
	    var a = triangle[0], b = triangle[1], c = triangle[2];
	    return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]));
	  }
	
	  function ring(ring) {
	    var i = -1,
	        n = ring.length,
	        a,
	        b = ring[n - 1],
	        area = 0;
	
	    while (++i < n) {
	      a = b;
	      b = ring[i];
	      area += a[0] * b[1] - a[1] * b[0];
	    }
	
	    return area / 2;
	  }
	
	  function merge(topology) {
	    return object(topology, mergeArcs.apply(this, arguments));
	  }
	
	  function mergeArcs(topology, objects) {
	    var polygonsByArc = {},
	        polygons = [],
	        components = [];
	
	    objects.forEach(function(o) {
	      if (o.type === "Polygon") register(o.arcs);
	      else if (o.type === "MultiPolygon") o.arcs.forEach(register);
	    });
	
	    function register(polygon) {
	      polygon.forEach(function(ring$$) {
	        ring$$.forEach(function(arc) {
	          (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
	        });
	      });
	      polygons.push(polygon);
	    }
	
	    function exterior(ring$$) {
	      return ring(object(topology, {type: "Polygon", arcs: [ring$$]}).coordinates[0]) > 0; // TODO allow spherical?
	    }
	
	    polygons.forEach(function(polygon) {
	      if (!polygon._) {
	        var component = [],
	            neighbors = [polygon];
	        polygon._ = 1;
	        components.push(component);
	        while (polygon = neighbors.pop()) {
	          component.push(polygon);
	          polygon.forEach(function(ring$$) {
	            ring$$.forEach(function(arc) {
	              polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
	                if (!polygon._) {
	                  polygon._ = 1;
	                  neighbors.push(polygon);
	                }
	              });
	            });
	          });
	        }
	      }
	    });
	
	    polygons.forEach(function(polygon) {
	      delete polygon._;
	    });
	
	    return {
	      type: "MultiPolygon",
	      arcs: components.map(function(polygons) {
	        var arcs = [], n;
	
	        // Extract the exterior (unique) arcs.
	        polygons.forEach(function(polygon) {
	          polygon.forEach(function(ring$$) {
	            ring$$.forEach(function(arc) {
	              if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
	                arcs.push(arc);
	              }
	            });
	          });
	        });
	
	        // Stitch the arcs into one or more rings.
	        arcs = stitchArcs(topology, arcs);
	
	        // If more than one ring is returned,
	        // at most one of these rings can be the exterior;
	        // this exterior ring has the same winding order
	        // as any exterior ring in the original polygons.
	        if ((n = arcs.length) > 1) {
	          var sgn = exterior(polygons[0][0]);
	          for (var i = 0, t; i < n; ++i) {
	            if (sgn === exterior(arcs[i])) {
	              t = arcs[0], arcs[0] = arcs[i], arcs[i] = t;
	              break;
	            }
	          }
	        }
	
	        return arcs;
	      })
	    };
	  }
	
	  function neighbors(objects) {
	    var indexesByArc = {}, // arc index -> array of object indexes
	        neighbors = objects.map(function() { return []; });
	
	    function line(arcs, i) {
	      arcs.forEach(function(a) {
	        if (a < 0) a = ~a;
	        var o = indexesByArc[a];
	        if (o) o.push(i);
	        else indexesByArc[a] = [i];
	      });
	    }
	
	    function polygon(arcs, i) {
	      arcs.forEach(function(arc) { line(arc, i); });
	    }
	
	    function geometry(o, i) {
	      if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
	      else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
	    }
	
	    var geometryType = {
	      LineString: line,
	      MultiLineString: polygon,
	      Polygon: polygon,
	      MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
	    };
	
	    objects.forEach(geometry);
	
	    for (var i in indexesByArc) {
	      for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
	        for (var k = j + 1; k < m; ++k) {
	          var ij = indexes[j], ik = indexes[k], n;
	          if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
	          if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
	        }
	      }
	    }
	
	    return neighbors;
	  }
	
	  function compareArea(a, b) {
	    return a[1][2] - b[1][2];
	  }
	
	  function minAreaHeap() {
	    var heap = {},
	        array = [],
	        size = 0;
	
	    heap.push = function(object) {
	      up(array[object._ = size] = object, size++);
	      return size;
	    };
	
	    heap.pop = function() {
	      if (size <= 0) return;
	      var removed = array[0], object;
	      if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
	      return removed;
	    };
	
	    heap.remove = function(removed) {
	      var i = removed._, object;
	      if (array[i] !== removed) return; // invalid request
	      if (i !== --size) object = array[size], (compareArea(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
	      return i;
	    };
	
	    function up(object, i) {
	      while (i > 0) {
	        var j = ((i + 1) >> 1) - 1,
	            parent = array[j];
	        if (compareArea(object, parent) >= 0) break;
	        array[parent._ = i] = parent;
	        array[object._ = i = j] = object;
	      }
	    }
	
	    function down(object, i) {
	      while (true) {
	        var r = (i + 1) << 1,
	            l = r - 1,
	            j = i,
	            child = array[j];
	        if (l < size && compareArea(array[l], child) < 0) child = array[j = l];
	        if (r < size && compareArea(array[r], child) < 0) child = array[j = r];
	        if (j === i) break;
	        array[child._ = i] = child;
	        array[object._ = i = j] = object;
	      }
	    }
	
	    return heap;
	  }
	
	  function presimplify(topology, triangleArea) {
	    var absolute$$ = absolute(topology.transform),
	        relative$$ = relative(topology.transform),
	        heap = minAreaHeap();
	
	    if (!triangleArea) triangleArea = triangle;
	
	    topology.arcs.forEach(function(arc) {
	      var triangles = [],
	          maxArea = 0,
	          triangle,
	          i,
	          n,
	          p;
	
	      // To store each point’s effective area, we create a new array rather than
	      // extending the passed-in point to workaround a Chrome/V8 bug (getting
	      // stuck in smi mode). For midpoints, the initial effective area of
	      // Infinity will be computed in the next step.
	      for (i = 0, n = arc.length; i < n; ++i) {
	        p = arc[i];
	        absolute$$(arc[i] = [p[0], p[1], Infinity], i);
	      }
	
	      for (i = 1, n = arc.length - 1; i < n; ++i) {
	        triangle = arc.slice(i - 1, i + 2);
	        triangle[1][2] = triangleArea(triangle);
	        triangles.push(triangle);
	        heap.push(triangle);
	      }
	
	      for (i = 0, n = triangles.length; i < n; ++i) {
	        triangle = triangles[i];
	        triangle.previous = triangles[i - 1];
	        triangle.next = triangles[i + 1];
	      }
	
	      while (triangle = heap.pop()) {
	        var previous = triangle.previous,
	            next = triangle.next;
	
	        // If the area of the current point is less than that of the previous point
	        // to be eliminated, use the latter's area instead. This ensures that the
	        // current point cannot be eliminated without eliminating previously-
	        // eliminated points.
	        if (triangle[1][2] < maxArea) triangle[1][2] = maxArea;
	        else maxArea = triangle[1][2];
	
	        if (previous) {
	          previous.next = next;
	          previous[2] = triangle[2];
	          update(previous);
	        }
	
	        if (next) {
	          next.previous = previous;
	          next[0] = triangle[0];
	          update(next);
	        }
	      }
	
	      arc.forEach(relative$$);
	    });
	
	    function update(triangle) {
	      heap.remove(triangle);
	      triangle[1][2] = triangleArea(triangle);
	      heap.push(triangle);
	    }
	
	    return topology;
	  }
	
	  var version = "1.6.24";
	
	  exports.version = version;
	  exports.mesh = mesh;
	  exports.meshArcs = meshArcs;
	  exports.merge = merge;
	  exports.mergeArcs = mergeArcs;
	  exports.feature = feature;
	  exports.neighbors = neighbors;
	  exports.presimplify = presimplify;
	
	}));

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"type": "Topology",
		"objects": {
			"countries": {
				"type": "GeometryCollection",
				"bbox": [
					-179.99999999999997,
					-90.00000000000003,
					180.00000000000014,
					83.64513000000001
				],
				"geometries": [
					{
						"type": "Polygon",
						"id": "AFG",
						"arcs": [
							[
								0,
								1,
								2,
								3,
								4,
								5
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Afghanistan",
							"sov_a3": "AFG",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Afghanistan",
							"adm0_a3": "AFG",
							"geou_dif": 0,
							"geounit": "Afghanistan",
							"gu_a3": "AFG",
							"su_dif": 0,
							"subunit": "Afghanistan",
							"su_a3": "AFG",
							"brk_diff": 0,
							"name": "Afghanistan",
							"name_long": "Afghanistan",
							"brk_a3": "AFG",
							"brk_name": "Afghanistan",
							"brk_group": null,
							"abbrev": "Afg.",
							"postal": "AF",
							"formal_en": "Islamic State of Afghanistan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Afghanistan",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 6,
							"mapcolor9": 8,
							"mapcolor13": 7,
							"pop_est": 28400000,
							"gdp_md_est": 22270,
							"pop_year": -99,
							"lastcensus": 1979,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AF",
							"iso_a3": "AFG",
							"iso_n3": "004",
							"un_a3": "004",
							"wb_a2": "AF",
							"wb_a3": "AFG",
							"woe_id": -99,
							"adm0_a3_is": "AFG",
							"adm0_a3_us": "AFG",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "South Asia",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "AGO",
						"arcs": [
							[
								[
									6,
									7,
									8,
									9
								]
							],
							[
								[
									10,
									11,
									12
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Angola",
							"sov_a3": "AGO",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Angola",
							"adm0_a3": "AGO",
							"geou_dif": 0,
							"geounit": "Angola",
							"gu_a3": "AGO",
							"su_dif": 0,
							"subunit": "Angola",
							"su_a3": "AGO",
							"brk_diff": 0,
							"name": "Angola",
							"name_long": "Angola",
							"brk_a3": "AGO",
							"brk_name": "Angola",
							"brk_group": null,
							"abbrev": "Ang.",
							"postal": "AO",
							"formal_en": "People's Republic of Angola",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Angola",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 6,
							"mapcolor13": 1,
							"pop_est": 12799293,
							"gdp_md_est": 110300,
							"pop_year": -99,
							"lastcensus": 1970,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AO",
							"iso_a3": "AGO",
							"iso_n3": "024",
							"un_a3": "024",
							"wb_a2": "AO",
							"wb_a3": "AGO",
							"woe_id": -99,
							"adm0_a3_is": "AGO",
							"adm0_a3_us": "AGO",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ALB",
						"arcs": [
							[
								13,
								14,
								15,
								16,
								17
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Albania",
							"sov_a3": "ALB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Albania",
							"adm0_a3": "ALB",
							"geou_dif": 0,
							"geounit": "Albania",
							"gu_a3": "ALB",
							"su_dif": 0,
							"subunit": "Albania",
							"su_a3": "ALB",
							"brk_diff": 0,
							"name": "Albania",
							"name_long": "Albania",
							"brk_a3": "ALB",
							"brk_name": "Albania",
							"brk_group": null,
							"abbrev": "Alb.",
							"postal": "AL",
							"formal_en": "Republic of Albania",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Albania",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 6,
							"pop_est": 3639453,
							"gdp_md_est": 21810,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AL",
							"iso_a3": "ALB",
							"iso_n3": "008",
							"un_a3": "008",
							"wb_a2": "AL",
							"wb_a3": "ALB",
							"woe_id": -99,
							"adm0_a3_is": "ALB",
							"adm0_a3_us": "ALB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ARE",
						"arcs": [
							[
								18,
								19,
								20,
								21,
								22
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "United Arab Emirates",
							"sov_a3": "ARE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "United Arab Emirates",
							"adm0_a3": "ARE",
							"geou_dif": 0,
							"geounit": "United Arab Emirates",
							"gu_a3": "ARE",
							"su_dif": 0,
							"subunit": "United Arab Emirates",
							"su_a3": "ARE",
							"brk_diff": 0,
							"name": "United Arab Emirates",
							"name_long": "United Arab Emirates",
							"brk_a3": "ARE",
							"brk_name": "United Arab Emirates",
							"brk_group": null,
							"abbrev": "U.A.E.",
							"postal": "AE",
							"formal_en": "United Arab Emirates",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "United Arab Emirates",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 3,
							"pop_est": 4798491,
							"gdp_md_est": 184300,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AE",
							"iso_a3": "ARE",
							"iso_n3": "784",
							"un_a3": "784",
							"wb_a2": "AE",
							"wb_a3": "ARE",
							"woe_id": -99,
							"adm0_a3_is": "ARE",
							"adm0_a3_us": "ARE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 20,
							"long_len": 20,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "ARG",
						"arcs": [
							[
								[
									23,
									24
								]
							],
							[
								[
									25,
									26,
									27,
									28,
									29,
									30
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Argentina",
							"sov_a3": "ARG",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Argentina",
							"adm0_a3": "ARG",
							"geou_dif": 0,
							"geounit": "Argentina",
							"gu_a3": "ARG",
							"su_dif": 0,
							"subunit": "Argentina",
							"su_a3": "ARG",
							"brk_diff": 0,
							"name": "Argentina",
							"name_long": "Argentina",
							"brk_a3": "ARG",
							"brk_name": "Argentina",
							"brk_group": null,
							"abbrev": "Arg.",
							"postal": "AR",
							"formal_en": "Argentine Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Argentina",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 13,
							"pop_est": 40913584,
							"gdp_md_est": 573900,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AR",
							"iso_a3": "ARG",
							"iso_n3": "032",
							"un_a3": "032",
							"wb_a2": "AR",
							"wb_a3": "ARG",
							"woe_id": -99,
							"adm0_a3_is": "ARG",
							"adm0_a3_us": "ARG",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ARM",
						"arcs": [
							[
								31,
								32,
								33,
								34,
								35
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Armenia",
							"sov_a3": "ARM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Armenia",
							"adm0_a3": "ARM",
							"geou_dif": 0,
							"geounit": "Armenia",
							"gu_a3": "ARM",
							"su_dif": 0,
							"subunit": "Armenia",
							"su_a3": "ARM",
							"brk_diff": 0,
							"name": "Armenia",
							"name_long": "Armenia",
							"brk_a3": "ARM",
							"brk_name": "Armenia",
							"brk_group": null,
							"abbrev": "Arm.",
							"postal": "ARM",
							"formal_en": "Republic of Armenia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Armenia",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 1,
							"mapcolor9": 2,
							"mapcolor13": 10,
							"pop_est": 2967004,
							"gdp_md_est": 18770,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AM",
							"iso_a3": "ARM",
							"iso_n3": "051",
							"un_a3": "051",
							"wb_a2": "AM",
							"wb_a3": "ARM",
							"woe_id": -99,
							"adm0_a3_is": "ARM",
							"adm0_a3_us": "ARM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "ATA",
						"arcs": [
							[
								[
									36
								]
							],
							[
								[
									37
								]
							],
							[
								[
									38
								]
							],
							[
								[
									39
								]
							],
							[
								[
									40
								]
							],
							[
								[
									41
								]
							],
							[
								[
									42
								]
							],
							[
								[
									43
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Antarctica",
							"sov_a3": "ATA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Indeterminate",
							"admin": "Antarctica",
							"adm0_a3": "ATA",
							"geou_dif": 0,
							"geounit": "Antarctica",
							"gu_a3": "ATA",
							"su_dif": 0,
							"subunit": "Antarctica",
							"su_a3": "ATA",
							"brk_diff": 0,
							"name": "Antarctica",
							"name_long": "Antarctica",
							"brk_a3": "ATA",
							"brk_name": "Antarctica",
							"brk_group": null,
							"abbrev": "Ant.",
							"postal": "AQ",
							"formal_en": null,
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": "Multiple claims held in abeyance",
							"name_sort": "Antarctica",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 5,
							"mapcolor9": 1,
							"mapcolor13": -99,
							"pop_est": 3802,
							"gdp_md_est": 760.4,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AQ",
							"iso_a3": "ATA",
							"iso_n3": "010",
							"un_a3": "-099",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "ATA",
							"adm0_a3_us": "ATA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Antarctica",
							"region_un": "Antarctica",
							"subregion": "Antarctica",
							"region_wb": "Antarctica",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ATF",
						"arcs": [
							[
								44
							]
						],
						"properties": {
							"scalerank": 3,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "France",
							"sov_a3": "FR1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Dependency",
							"admin": "French Southern and Antarctic Lands",
							"adm0_a3": "ATF",
							"geou_dif": 0,
							"geounit": "French Southern and Antarctic Lands",
							"gu_a3": "ATF",
							"su_dif": 0,
							"subunit": "French Southern and Antarctic Lands",
							"su_a3": "ATF",
							"brk_diff": 0,
							"name": "Fr. S. Antarctic Lands",
							"name_long": "French Southern and Antarctic Lands",
							"brk_a3": "ATF",
							"brk_name": "Fr. S. and Antarctic Lands",
							"brk_group": null,
							"abbrev": "Fr. S.A.L.",
							"postal": "TF",
							"formal_en": "Territory of the French Southern and Antarctic Lands",
							"formal_fr": null,
							"note_adm0": "Fr.",
							"note_brk": null,
							"name_sort": "French Southern and Antarctic Lands",
							"name_alt": null,
							"mapcolor7": 7,
							"mapcolor8": 5,
							"mapcolor9": 9,
							"mapcolor13": 11,
							"pop_est": 140,
							"gdp_md_est": 16,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TF",
							"iso_a3": "ATF",
							"iso_n3": "260",
							"un_a3": "-099",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "ATF",
							"adm0_a3_us": "ATF",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Seven seas (open ocean)",
							"region_un": "Seven seas (open ocean)",
							"subregion": "Seven seas (open ocean)",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 22,
							"long_len": 35,
							"abbrev_len": 10,
							"tiny": 2,
							"homepart": -99
						}
					},
					{
						"type": "MultiPolygon",
						"id": "AUS",
						"arcs": [
							[
								[
									45
								]
							],
							[
								[
									46
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Australia",
							"sov_a3": "AU1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "Australia",
							"adm0_a3": "AUS",
							"geou_dif": 0,
							"geounit": "Australia",
							"gu_a3": "AUS",
							"su_dif": 0,
							"subunit": "Australia",
							"su_a3": "AUS",
							"brk_diff": 0,
							"name": "Australia",
							"name_long": "Australia",
							"brk_a3": "AUS",
							"brk_name": "Australia",
							"brk_group": null,
							"abbrev": "Auz.",
							"postal": "AU",
							"formal_en": "Commonwealth of Australia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Australia",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 7,
							"pop_est": 21262641,
							"gdp_md_est": 800200,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AU",
							"iso_a3": "AUS",
							"iso_n3": "036",
							"un_a3": "036",
							"wb_a2": "AU",
							"wb_a3": "AUS",
							"woe_id": -99,
							"adm0_a3_is": "AUS",
							"adm0_a3_us": "AUS",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Oceania",
							"region_un": "Oceania",
							"subregion": "Australia and New Zealand",
							"region_wb": "East Asia & Pacific",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "AUT",
						"arcs": [
							[
								47,
								48,
								49,
								50,
								51,
								52,
								53
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Austria",
							"sov_a3": "AUT",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Austria",
							"adm0_a3": "AUT",
							"geou_dif": 0,
							"geounit": "Austria",
							"gu_a3": "AUT",
							"su_dif": 0,
							"subunit": "Austria",
							"su_a3": "AUT",
							"brk_diff": 0,
							"name": "Austria",
							"name_long": "Austria",
							"brk_a3": "AUT",
							"brk_name": "Austria",
							"brk_group": null,
							"abbrev": "Aust.",
							"postal": "A",
							"formal_en": "Republic of Austria",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Austria",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 4,
							"pop_est": 8210281,
							"gdp_md_est": 329500,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AT",
							"iso_a3": "AUT",
							"iso_n3": "040",
							"un_a3": "040",
							"wb_a2": "AT",
							"wb_a3": "AUT",
							"woe_id": -99,
							"adm0_a3_is": "AUT",
							"adm0_a3_us": "AUT",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Western Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "AZE",
						"arcs": [
							[
								[
									54,
									-35
								]
							],
							[
								[
									55,
									56,
									-33,
									57,
									58
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Azerbaijan",
							"sov_a3": "AZE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Azerbaijan",
							"adm0_a3": "AZE",
							"geou_dif": 0,
							"geounit": "Azerbaijan",
							"gu_a3": "AZE",
							"su_dif": 0,
							"subunit": "Azerbaijan",
							"su_a3": "AZE",
							"brk_diff": 0,
							"name": "Azerbaijan",
							"name_long": "Azerbaijan",
							"brk_a3": "AZE",
							"brk_name": "Azerbaijan",
							"brk_group": null,
							"abbrev": "Aze.",
							"postal": "AZ",
							"formal_en": "Republic of Azerbaijan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Azerbaijan",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 6,
							"mapcolor9": 5,
							"mapcolor13": 8,
							"pop_est": 8238672,
							"gdp_md_est": 77610,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "AZ",
							"iso_a3": "AZE",
							"iso_n3": "031",
							"un_a3": "031",
							"wb_a2": "AZ",
							"wb_a3": "AZE",
							"woe_id": -99,
							"adm0_a3_is": "AZE",
							"adm0_a3_us": "AZE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BDI",
						"arcs": [
							[
								59,
								60,
								61
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Burundi",
							"sov_a3": "BDI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Burundi",
							"adm0_a3": "BDI",
							"geou_dif": 0,
							"geounit": "Burundi",
							"gu_a3": "BDI",
							"su_dif": 0,
							"subunit": "Burundi",
							"su_a3": "BDI",
							"brk_diff": 0,
							"name": "Burundi",
							"name_long": "Burundi",
							"brk_a3": "BDI",
							"brk_name": "Burundi",
							"brk_group": null,
							"abbrev": "Bur.",
							"postal": "BI",
							"formal_en": "Republic of Burundi",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Burundi",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 5,
							"mapcolor13": 8,
							"pop_est": 8988091,
							"gdp_md_est": 3102,
							"pop_year": -99,
							"lastcensus": 2008,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BI",
							"iso_a3": "BDI",
							"iso_n3": "108",
							"un_a3": "108",
							"wb_a2": "BI",
							"wb_a3": "BDI",
							"woe_id": -99,
							"adm0_a3_is": "BDI",
							"adm0_a3_us": "BDI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BEL",
						"arcs": [
							[
								62,
								63,
								64,
								65,
								66
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Belgium",
							"sov_a3": "BEL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Belgium",
							"adm0_a3": "BEL",
							"geou_dif": 0,
							"geounit": "Belgium",
							"gu_a3": "BEL",
							"su_dif": 0,
							"subunit": "Belgium",
							"su_a3": "BEL",
							"brk_diff": 0,
							"name": "Belgium",
							"name_long": "Belgium",
							"brk_a3": "BEL",
							"brk_name": "Belgium",
							"brk_group": null,
							"abbrev": "Belg.",
							"postal": "B",
							"formal_en": "Kingdom of Belgium",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Belgium",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 1,
							"mapcolor13": 8,
							"pop_est": 10414336,
							"gdp_md_est": 389300,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BE",
							"iso_a3": "BEL",
							"iso_n3": "056",
							"un_a3": "056",
							"wb_a2": "BE",
							"wb_a3": "BEL",
							"woe_id": -99,
							"adm0_a3_is": "BEL",
							"adm0_a3_us": "BEL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Western Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BEN",
						"arcs": [
							[
								67,
								68,
								69,
								70,
								71
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Benin",
							"sov_a3": "BEN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Benin",
							"adm0_a3": "BEN",
							"geou_dif": 0,
							"geounit": "Benin",
							"gu_a3": "BEN",
							"su_dif": 0,
							"subunit": "Benin",
							"su_a3": "BEN",
							"brk_diff": 0,
							"name": "Benin",
							"name_long": "Benin",
							"brk_a3": "BEN",
							"brk_name": "Benin",
							"brk_group": null,
							"abbrev": "Benin",
							"postal": "BJ",
							"formal_en": "Republic of Benin",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Benin",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 12,
							"pop_est": 8791832,
							"gdp_md_est": 12830,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BJ",
							"iso_a3": "BEN",
							"iso_n3": "204",
							"un_a3": "204",
							"wb_a2": "BJ",
							"wb_a3": "BEN",
							"woe_id": -99,
							"adm0_a3_is": "BEN",
							"adm0_a3_us": "BEN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BFA",
						"arcs": [
							[
								72,
								73,
								74,
								-70,
								75,
								76
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Burkina Faso",
							"sov_a3": "BFA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Burkina Faso",
							"adm0_a3": "BFA",
							"geou_dif": 0,
							"geounit": "Burkina Faso",
							"gu_a3": "BFA",
							"su_dif": 0,
							"subunit": "Burkina Faso",
							"su_a3": "BFA",
							"brk_diff": 0,
							"name": "Burkina Faso",
							"name_long": "Burkina Faso",
							"brk_a3": "BFA",
							"brk_name": "Burkina Faso",
							"brk_group": null,
							"abbrev": "B.F.",
							"postal": "BF",
							"formal_en": "Burkina Faso",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Burkina Faso",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 1,
							"mapcolor9": 5,
							"mapcolor13": 11,
							"pop_est": 15746232,
							"gdp_md_est": 17820,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BF",
							"iso_a3": "BFA",
							"iso_n3": "854",
							"un_a3": "854",
							"wb_a2": "BF",
							"wb_a3": "BFA",
							"woe_id": -99,
							"adm0_a3_is": "BFA",
							"adm0_a3_us": "BFA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 12,
							"long_len": 12,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BGD",
						"arcs": [
							[
								77,
								78,
								79
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Bangladesh",
							"sov_a3": "BGD",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Bangladesh",
							"adm0_a3": "BGD",
							"geou_dif": 0,
							"geounit": "Bangladesh",
							"gu_a3": "BGD",
							"su_dif": 0,
							"subunit": "Bangladesh",
							"su_a3": "BGD",
							"brk_diff": 0,
							"name": "Bangladesh",
							"name_long": "Bangladesh",
							"brk_a3": "BGD",
							"brk_name": "Bangladesh",
							"brk_group": null,
							"abbrev": "Bang.",
							"postal": "BD",
							"formal_en": "People's Republic of Bangladesh",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Bangladesh",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 4,
							"mapcolor9": 7,
							"mapcolor13": 7,
							"pop_est": 156050883,
							"gdp_md_est": 224000,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BD",
							"iso_a3": "BGD",
							"iso_n3": "050",
							"un_a3": "050",
							"wb_a2": "BD",
							"wb_a3": "BGD",
							"woe_id": -99,
							"adm0_a3_is": "BGD",
							"adm0_a3_us": "BGD",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "South Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BGR",
						"arcs": [
							[
								80,
								81,
								82,
								83,
								84,
								85
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Bulgaria",
							"sov_a3": "BGR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Bulgaria",
							"adm0_a3": "BGR",
							"geou_dif": 0,
							"geounit": "Bulgaria",
							"gu_a3": "BGR",
							"su_dif": 0,
							"subunit": "Bulgaria",
							"su_a3": "BGR",
							"brk_diff": 0,
							"name": "Bulgaria",
							"name_long": "Bulgaria",
							"brk_a3": "BGR",
							"brk_name": "Bulgaria",
							"brk_group": null,
							"abbrev": "Bulg.",
							"postal": "BG",
							"formal_en": "Republic of Bulgaria",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Bulgaria",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 5,
							"mapcolor9": 1,
							"mapcolor13": 8,
							"pop_est": 7204687,
							"gdp_md_est": 93750,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BG",
							"iso_a3": "BGR",
							"iso_n3": "100",
							"un_a3": "100",
							"wb_a2": "BG",
							"wb_a3": "BGR",
							"woe_id": -99,
							"adm0_a3_is": "BGR",
							"adm0_a3_us": "BGR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "BHS",
						"arcs": [
							[
								[
									86
								]
							],
							[
								[
									87
								]
							],
							[
								[
									88
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "The Bahamas",
							"sov_a3": "BHS",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "The Bahamas",
							"adm0_a3": "BHS",
							"geou_dif": 0,
							"geounit": "The Bahamas",
							"gu_a3": "BHS",
							"su_dif": 0,
							"subunit": "The Bahamas",
							"su_a3": "BHS",
							"brk_diff": 0,
							"name": "Bahamas",
							"name_long": "Bahamas",
							"brk_a3": "BHS",
							"brk_name": "Bahamas",
							"brk_group": null,
							"abbrev": "Bhs.",
							"postal": "BS",
							"formal_en": "Commonwealth of the Bahamas",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Bahamas, The",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 1,
							"mapcolor9": 2,
							"mapcolor13": 5,
							"pop_est": 309156,
							"gdp_md_est": 9093,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BS",
							"iso_a3": "BHS",
							"iso_n3": "044",
							"un_a3": "044",
							"wb_a2": "BS",
							"wb_a3": "BHS",
							"woe_id": -99,
							"adm0_a3_is": "BHS",
							"adm0_a3_us": "BHS",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Caribbean",
							"region_wb": "Latin America & Caribbean",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BIH",
						"arcs": [
							[
								89,
								90,
								91
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Bosnia and Herzegovina",
							"sov_a3": "BIH",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Bosnia and Herzegovina",
							"adm0_a3": "BIH",
							"geou_dif": 0,
							"geounit": "Bosnia and Herzegovina",
							"gu_a3": "BIH",
							"su_dif": 0,
							"subunit": "Bosnia and Herzegovina",
							"su_a3": "BIH",
							"brk_diff": 0,
							"name": "Bosnia and Herz.",
							"name_long": "Bosnia and Herzegovina",
							"brk_a3": "BIH",
							"brk_name": "Bosnia and Herz.",
							"brk_group": null,
							"abbrev": "B.H.",
							"postal": "BiH",
							"formal_en": "Bosnia and Herzegovina",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Bosnia and Herzegovina",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 1,
							"mapcolor9": 1,
							"mapcolor13": 2,
							"pop_est": 4613414,
							"gdp_md_est": 29700,
							"pop_year": -99,
							"lastcensus": 1991,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BA",
							"iso_a3": "BIH",
							"iso_n3": "070",
							"un_a3": "070",
							"wb_a2": "BA",
							"wb_a3": "BIH",
							"woe_id": -99,
							"adm0_a3_is": "BIH",
							"adm0_a3_us": "BIH",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 16,
							"long_len": 22,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BLR",
						"arcs": [
							[
								92,
								93,
								94,
								95,
								96
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Belarus",
							"sov_a3": "BLR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Belarus",
							"adm0_a3": "BLR",
							"geou_dif": 0,
							"geounit": "Belarus",
							"gu_a3": "BLR",
							"su_dif": 0,
							"subunit": "Belarus",
							"su_a3": "BLR",
							"brk_diff": 0,
							"name": "Belarus",
							"name_long": "Belarus",
							"brk_a3": "BLR",
							"brk_name": "Belarus",
							"brk_group": null,
							"abbrev": "Bela.",
							"postal": "BY",
							"formal_en": "Republic of Belarus",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Belarus",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 1,
							"mapcolor9": 5,
							"mapcolor13": 11,
							"pop_est": 9648533,
							"gdp_md_est": 114100,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BY",
							"iso_a3": "BLR",
							"iso_n3": "112",
							"un_a3": "112",
							"wb_a2": "BY",
							"wb_a3": "BLR",
							"woe_id": -99,
							"adm0_a3_is": "BLR",
							"adm0_a3_us": "BLR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BLZ",
						"arcs": [
							[
								97,
								98,
								99
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Belize",
							"sov_a3": "BLZ",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Belize",
							"adm0_a3": "BLZ",
							"geou_dif": 0,
							"geounit": "Belize",
							"gu_a3": "BLZ",
							"su_dif": 0,
							"subunit": "Belize",
							"su_a3": "BLZ",
							"brk_diff": 0,
							"name": "Belize",
							"name_long": "Belize",
							"brk_a3": "BLZ",
							"brk_name": "Belize",
							"brk_group": null,
							"abbrev": "Belize",
							"postal": "BZ",
							"formal_en": "Belize",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Belize",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 5,
							"mapcolor13": 7,
							"pop_est": 307899,
							"gdp_md_est": 2536,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BZ",
							"iso_a3": "BLZ",
							"iso_n3": "084",
							"un_a3": "084",
							"wb_a2": "BZ",
							"wb_a3": "BLZ",
							"woe_id": -99,
							"adm0_a3_is": "BLZ",
							"adm0_a3_us": "BLZ",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BOL",
						"arcs": [
							[
								100,
								101,
								102,
								103,
								-31
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Bolivia",
							"sov_a3": "BOL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Bolivia",
							"adm0_a3": "BOL",
							"geou_dif": 0,
							"geounit": "Bolivia",
							"gu_a3": "BOL",
							"su_dif": 0,
							"subunit": "Bolivia",
							"su_a3": "BOL",
							"brk_diff": 0,
							"name": "Bolivia",
							"name_long": "Bolivia",
							"brk_a3": "BOL",
							"brk_name": "Bolivia",
							"brk_group": null,
							"abbrev": "Bolivia",
							"postal": "BO",
							"formal_en": "Plurinational State of Bolivia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Bolivia",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 5,
							"mapcolor9": 2,
							"mapcolor13": 3,
							"pop_est": 9775246,
							"gdp_md_est": 43270,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BO",
							"iso_a3": "BOL",
							"iso_n3": "068",
							"un_a3": "068",
							"wb_a2": "BO",
							"wb_a3": "BOL",
							"woe_id": -99,
							"adm0_a3_is": "BOL",
							"adm0_a3_us": "BOL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 7,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BRA",
						"arcs": [
							[
								-27,
								104,
								-103,
								105,
								106,
								107,
								108,
								109,
								110,
								111,
								112
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Brazil",
							"sov_a3": "BRA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Brazil",
							"adm0_a3": "BRA",
							"geou_dif": 0,
							"geounit": "Brazil",
							"gu_a3": "BRA",
							"su_dif": 0,
							"subunit": "Brazil",
							"su_a3": "BRA",
							"brk_diff": 0,
							"name": "Brazil",
							"name_long": "Brazil",
							"brk_a3": "BRA",
							"brk_name": "Brazil",
							"brk_group": null,
							"abbrev": "Brazil",
							"postal": "BR",
							"formal_en": "Federative Republic of Brazil",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Brazil",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 6,
							"mapcolor9": 5,
							"mapcolor13": 7,
							"pop_est": 198739269,
							"gdp_md_est": 1993000,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "3. Emerging region: BRIC",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BR",
							"iso_a3": "BRA",
							"iso_n3": "076",
							"un_a3": "076",
							"wb_a2": "BR",
							"wb_a3": "BRA",
							"woe_id": -99,
							"adm0_a3_is": "BRA",
							"adm0_a3_us": "BRA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BRN",
						"arcs": [
							[
								113,
								114
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Brunei",
							"sov_a3": "BRN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Brunei",
							"adm0_a3": "BRN",
							"geou_dif": 0,
							"geounit": "Brunei",
							"gu_a3": "BRN",
							"su_dif": 0,
							"subunit": "Brunei",
							"su_a3": "BRN",
							"brk_diff": 0,
							"name": "Brunei",
							"name_long": "Brunei Darussalam",
							"brk_a3": "BRN",
							"brk_name": "Brunei",
							"brk_group": null,
							"abbrev": "Brunei",
							"postal": "BN",
							"formal_en": "Negara Brunei Darussalam",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Brunei",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 6,
							"mapcolor9": 6,
							"mapcolor13": 12,
							"pop_est": 388190,
							"gdp_md_est": 20250,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BN",
							"iso_a3": "BRN",
							"iso_n3": "096",
							"un_a3": "096",
							"wb_a2": "BN",
							"wb_a3": "BRN",
							"woe_id": -99,
							"adm0_a3_is": "BRN",
							"adm0_a3_us": "BRN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 6,
							"long_len": 17,
							"abbrev_len": 6,
							"tiny": 2,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BTN",
						"arcs": [
							[
								115,
								116
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Bhutan",
							"sov_a3": "BTN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Bhutan",
							"adm0_a3": "BTN",
							"geou_dif": 0,
							"geounit": "Bhutan",
							"gu_a3": "BTN",
							"su_dif": 0,
							"subunit": "Bhutan",
							"su_a3": "BTN",
							"brk_diff": 0,
							"name": "Bhutan",
							"name_long": "Bhutan",
							"brk_a3": "BTN",
							"brk_name": "Bhutan",
							"brk_group": null,
							"abbrev": "Bhutan",
							"postal": "BT",
							"formal_en": "Kingdom of Bhutan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Bhutan",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 6,
							"mapcolor9": 1,
							"mapcolor13": 8,
							"pop_est": 691141,
							"gdp_md_est": 3524,
							"pop_year": -99,
							"lastcensus": 2005,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BT",
							"iso_a3": "BTN",
							"iso_n3": "064",
							"un_a3": "064",
							"wb_a2": "BT",
							"wb_a3": "BTN",
							"woe_id": -99,
							"adm0_a3_is": "BTN",
							"adm0_a3_us": "BTN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "South Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "BWA",
						"arcs": [
							[
								117,
								118,
								119,
								120
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Botswana",
							"sov_a3": "BWA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Botswana",
							"adm0_a3": "BWA",
							"geou_dif": 0,
							"geounit": "Botswana",
							"gu_a3": "BWA",
							"su_dif": 0,
							"subunit": "Botswana",
							"su_a3": "BWA",
							"brk_diff": 0,
							"name": "Botswana",
							"name_long": "Botswana",
							"brk_a3": "BWA",
							"brk_name": "Botswana",
							"brk_group": null,
							"abbrev": "Bwa.",
							"postal": "BW",
							"formal_en": "Republic of Botswana",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Botswana",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 5,
							"mapcolor9": 7,
							"mapcolor13": 3,
							"pop_est": 1990876,
							"gdp_md_est": 27060,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "BW",
							"iso_a3": "BWA",
							"iso_n3": "072",
							"un_a3": "072",
							"wb_a2": "BW",
							"wb_a3": "BWA",
							"woe_id": -99,
							"adm0_a3_is": "BWA",
							"adm0_a3_us": "BWA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Southern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CAF",
						"arcs": [
							[
								121,
								122,
								123,
								124,
								125,
								126,
								127
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Central African Republic",
							"sov_a3": "CAF",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Central African Republic",
							"adm0_a3": "CAF",
							"geou_dif": 0,
							"geounit": "Central African Republic",
							"gu_a3": "CAF",
							"su_dif": 0,
							"subunit": "Central African Republic",
							"su_a3": "CAF",
							"brk_diff": 0,
							"name": "Central African Rep.",
							"name_long": "Central African Republic",
							"brk_a3": "CAF",
							"brk_name": "Central African Rep.",
							"brk_group": null,
							"abbrev": "C.A.R.",
							"postal": "CF",
							"formal_en": "Central African Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Central African Republic",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 6,
							"mapcolor9": 6,
							"mapcolor13": 9,
							"pop_est": 4511488,
							"gdp_md_est": 3198,
							"pop_year": -99,
							"lastcensus": 2003,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CF",
							"iso_a3": "CAF",
							"iso_n3": "140",
							"un_a3": "140",
							"wb_a2": "CF",
							"wb_a3": "CAF",
							"woe_id": -99,
							"adm0_a3_is": "CAF",
							"adm0_a3_us": "CAF",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 20,
							"long_len": 24,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "CAN",
						"arcs": [
							[
								[
									128
								]
							],
							[
								[
									129
								]
							],
							[
								[
									130
								]
							],
							[
								[
									131
								]
							],
							[
								[
									132
								]
							],
							[
								[
									133
								]
							],
							[
								[
									134
								]
							],
							[
								[
									135
								]
							],
							[
								[
									136
								]
							],
							[
								[
									137
								]
							],
							[
								[
									138,
									139,
									140,
									141
								]
							],
							[
								[
									142
								]
							],
							[
								[
									143
								]
							],
							[
								[
									144
								]
							],
							[
								[
									145
								]
							],
							[
								[
									146
								]
							],
							[
								[
									147
								]
							],
							[
								[
									148
								]
							],
							[
								[
									149
								]
							],
							[
								[
									150
								]
							],
							[
								[
									151
								]
							],
							[
								[
									152
								]
							],
							[
								[
									153
								]
							],
							[
								[
									154
								]
							],
							[
								[
									155
								]
							],
							[
								[
									156
								]
							],
							[
								[
									157
								]
							],
							[
								[
									158
								]
							],
							[
								[
									159
								]
							],
							[
								[
									160
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Canada",
							"sov_a3": "CAN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Canada",
							"adm0_a3": "CAN",
							"geou_dif": 0,
							"geounit": "Canada",
							"gu_a3": "CAN",
							"su_dif": 0,
							"subunit": "Canada",
							"su_a3": "CAN",
							"brk_diff": 0,
							"name": "Canada",
							"name_long": "Canada",
							"brk_a3": "CAN",
							"brk_name": "Canada",
							"brk_group": null,
							"abbrev": "Can.",
							"postal": "CA",
							"formal_en": "Canada",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Canada",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 6,
							"mapcolor9": 2,
							"mapcolor13": 2,
							"pop_est": 33487208,
							"gdp_md_est": 1300000,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "1. Developed region: G7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CA",
							"iso_a3": "CAN",
							"iso_n3": "124",
							"un_a3": "124",
							"wb_a2": "CA",
							"wb_a3": "CAN",
							"woe_id": -99,
							"adm0_a3_is": "CAN",
							"adm0_a3_us": "CAN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Northern America",
							"region_wb": "North America",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CHE",
						"arcs": [
							[
								-51,
								161,
								162,
								163
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Switzerland",
							"sov_a3": "CHE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Switzerland",
							"adm0_a3": "CHE",
							"geou_dif": 0,
							"geounit": "Switzerland",
							"gu_a3": "CHE",
							"su_dif": 0,
							"subunit": "Switzerland",
							"su_a3": "CHE",
							"brk_diff": 0,
							"name": "Switzerland",
							"name_long": "Switzerland",
							"brk_a3": "CHE",
							"brk_name": "Switzerland",
							"brk_group": null,
							"abbrev": "Switz.",
							"postal": "CH",
							"formal_en": "Swiss Confederation",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Switzerland",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 2,
							"mapcolor9": 7,
							"mapcolor13": 3,
							"pop_est": 7604467,
							"gdp_md_est": 316700,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CH",
							"iso_a3": "CHE",
							"iso_n3": "756",
							"un_a3": "756",
							"wb_a2": "CH",
							"wb_a3": "CHE",
							"woe_id": -99,
							"adm0_a3_is": "CHE",
							"adm0_a3_us": "CHE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Western Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "CHL",
						"arcs": [
							[
								[
									-24,
									164
								]
							],
							[
								[
									-30,
									165,
									166,
									-101
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Chile",
							"sov_a3": "CHL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Chile",
							"adm0_a3": "CHL",
							"geou_dif": 0,
							"geounit": "Chile",
							"gu_a3": "CHL",
							"su_dif": 0,
							"subunit": "Chile",
							"su_a3": "CHL",
							"brk_diff": 0,
							"name": "Chile",
							"name_long": "Chile",
							"brk_a3": "CHL",
							"brk_name": "Chile",
							"brk_group": null,
							"abbrev": "Chile",
							"postal": "CL",
							"formal_en": "Republic of Chile",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Chile",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 1,
							"mapcolor9": 5,
							"mapcolor13": 9,
							"pop_est": 16601707,
							"gdp_md_est": 244500,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CL",
							"iso_a3": "CHL",
							"iso_n3": "152",
							"un_a3": "152",
							"wb_a2": "CL",
							"wb_a3": "CHL",
							"woe_id": -99,
							"adm0_a3_is": "CHL",
							"adm0_a3_us": "CHL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "CHN",
						"arcs": [
							[
								[
									167
								]
							],
							[
								[
									168,
									169,
									170,
									171,
									172,
									173,
									-117,
									174,
									175,
									176,
									177,
									-4,
									178,
									179,
									180,
									181,
									182,
									183
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "China",
							"sov_a3": "CH1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "China",
							"adm0_a3": "CHN",
							"geou_dif": 0,
							"geounit": "China",
							"gu_a3": "CHN",
							"su_dif": 0,
							"subunit": "China",
							"su_a3": "CHN",
							"brk_diff": 0,
							"name": "China",
							"name_long": "China",
							"brk_a3": "CHN",
							"brk_name": "China",
							"brk_group": null,
							"abbrev": "China",
							"postal": "CN",
							"formal_en": "People's Republic of China",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "China",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 4,
							"mapcolor9": 4,
							"mapcolor13": 3,
							"pop_est": 1338612970,
							"gdp_md_est": 7973000,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "3. Emerging region: BRIC",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CN",
							"iso_a3": "CHN",
							"iso_n3": "156",
							"un_a3": "156",
							"wb_a2": "CN",
							"wb_a3": "CHN",
							"woe_id": -99,
							"adm0_a3_is": "CHN",
							"adm0_a3_us": "CHN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CIV",
						"arcs": [
							[
								184,
								185,
								186,
								187,
								-73,
								188
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Ivory Coast",
							"sov_a3": "CIV",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Ivory Coast",
							"adm0_a3": "CIV",
							"geou_dif": 0,
							"geounit": "Ivory Coast",
							"gu_a3": "CIV",
							"su_dif": 0,
							"subunit": "Ivory Coast",
							"su_a3": "CIV",
							"brk_diff": 0,
							"name": "Côte d'Ivoire",
							"name_long": "Côte d'Ivoire",
							"brk_a3": "CIV",
							"brk_name": "Côte d'Ivoire",
							"brk_group": null,
							"abbrev": "I.C.",
							"postal": "CI",
							"formal_en": "Republic of Ivory Coast",
							"formal_fr": "Republic of Cote D'Ivoire",
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Côte d'Ivoire",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 6,
							"mapcolor9": 3,
							"mapcolor13": 3,
							"pop_est": 20617068,
							"gdp_md_est": 33850,
							"pop_year": -99,
							"lastcensus": 1998,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CI",
							"iso_a3": "CIV",
							"iso_n3": "384",
							"un_a3": "384",
							"wb_a2": "CI",
							"wb_a3": "CIV",
							"woe_id": -99,
							"adm0_a3_is": "CIV",
							"adm0_a3_us": "CIV",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 13,
							"long_len": 13,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CMR",
						"arcs": [
							[
								189,
								190,
								191,
								192,
								193,
								194,
								-128,
								195
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Cameroon",
							"sov_a3": "CMR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Cameroon",
							"adm0_a3": "CMR",
							"geou_dif": 0,
							"geounit": "Cameroon",
							"gu_a3": "CMR",
							"su_dif": 0,
							"subunit": "Cameroon",
							"su_a3": "CMR",
							"brk_diff": 0,
							"name": "Cameroon",
							"name_long": "Cameroon",
							"brk_a3": "CMR",
							"brk_name": "Cameroon",
							"brk_group": null,
							"abbrev": "Cam.",
							"postal": "CM",
							"formal_en": "Republic of Cameroon",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Cameroon",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 3,
							"pop_est": 18879301,
							"gdp_md_est": 42750,
							"pop_year": -99,
							"lastcensus": 2005,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CM",
							"iso_a3": "CMR",
							"iso_n3": "120",
							"un_a3": "120",
							"wb_a2": "CM",
							"wb_a3": "CMR",
							"woe_id": -99,
							"adm0_a3_is": "CMR",
							"adm0_a3_us": "CMR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "COD",
						"arcs": [
							[
								196,
								197,
								-60,
								198,
								199,
								-10,
								200,
								-13,
								201,
								-126,
								202
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Democratic Republic of the Congo",
							"sov_a3": "COD",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Democratic Republic of the Congo",
							"adm0_a3": "COD",
							"geou_dif": 0,
							"geounit": "Democratic Republic of the Congo",
							"gu_a3": "COD",
							"su_dif": 0,
							"subunit": "Democratic Republic of the Congo",
							"su_a3": "COD",
							"brk_diff": 0,
							"name": "Dem. Rep. Congo",
							"name_long": "Democratic Republic of the Congo",
							"brk_a3": "COD",
							"brk_name": "Democratic Republic of the Congo",
							"brk_group": null,
							"abbrev": "D.R.C.",
							"postal": "DRC",
							"formal_en": "Democratic Republic of the Congo",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Congo, Dem. Rep.",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 4,
							"mapcolor9": 4,
							"mapcolor13": 7,
							"pop_est": 68692542,
							"gdp_md_est": 20640,
							"pop_year": -99,
							"lastcensus": 1984,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CD",
							"iso_a3": "COD",
							"iso_n3": "180",
							"un_a3": "180",
							"wb_a2": "ZR",
							"wb_a3": "ZAR",
							"woe_id": -99,
							"adm0_a3_is": "COD",
							"adm0_a3_us": "COD",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 15,
							"long_len": 32,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "COG",
						"arcs": [
							[
								-12,
								203,
								204,
								-196,
								-127,
								-202
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Republic of Congo",
							"sov_a3": "COG",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Republic of Congo",
							"adm0_a3": "COG",
							"geou_dif": 0,
							"geounit": "Republic of Congo",
							"gu_a3": "COG",
							"su_dif": 0,
							"subunit": "Republic of Congo",
							"su_a3": "COG",
							"brk_diff": 0,
							"name": "Congo",
							"name_long": "Republic of Congo",
							"brk_a3": "COG",
							"brk_name": "Republic of Congo",
							"brk_group": null,
							"abbrev": "Rep. Congo",
							"postal": "CG",
							"formal_en": "Republic of Congo",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Congo, Rep.",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 10,
							"pop_est": 4012809,
							"gdp_md_est": 15350,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CG",
							"iso_a3": "COG",
							"iso_n3": "178",
							"un_a3": "178",
							"wb_a2": "CG",
							"wb_a3": "COG",
							"woe_id": -99,
							"adm0_a3_is": "COG",
							"adm0_a3_us": "COG",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 5,
							"long_len": 17,
							"abbrev_len": 10,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "COL",
						"arcs": [
							[
								205,
								206,
								207,
								208,
								209,
								-107,
								210
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Colombia",
							"sov_a3": "COL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Colombia",
							"adm0_a3": "COL",
							"geou_dif": 0,
							"geounit": "Colombia",
							"gu_a3": "COL",
							"su_dif": 0,
							"subunit": "Colombia",
							"su_a3": "COL",
							"brk_diff": 0,
							"name": "Colombia",
							"name_long": "Colombia",
							"brk_a3": "COL",
							"brk_name": "Colombia",
							"brk_group": null,
							"abbrev": "Col.",
							"postal": "CO",
							"formal_en": "Republic of Colombia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Colombia",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 1,
							"pop_est": 45644023,
							"gdp_md_est": 395400,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CO",
							"iso_a3": "COL",
							"iso_n3": "170",
							"un_a3": "170",
							"wb_a2": "CO",
							"wb_a3": "COL",
							"woe_id": -99,
							"adm0_a3_is": "COL",
							"adm0_a3_us": "COL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CRI",
						"arcs": [
							[
								211,
								212,
								213,
								214
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Costa Rica",
							"sov_a3": "CRI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Costa Rica",
							"adm0_a3": "CRI",
							"geou_dif": 0,
							"geounit": "Costa Rica",
							"gu_a3": "CRI",
							"su_dif": 0,
							"subunit": "Costa Rica",
							"su_a3": "CRI",
							"brk_diff": 0,
							"name": "Costa Rica",
							"name_long": "Costa Rica",
							"brk_a3": "CRI",
							"brk_name": "Costa Rica",
							"brk_group": null,
							"abbrev": "C.R.",
							"postal": "CR",
							"formal_en": "Republic of Costa Rica",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Costa Rica",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 4,
							"mapcolor13": 2,
							"pop_est": 4253877,
							"gdp_md_est": 48320,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CR",
							"iso_a3": "CRI",
							"iso_n3": "188",
							"un_a3": "188",
							"wb_a2": "CR",
							"wb_a3": "CRI",
							"woe_id": -99,
							"adm0_a3_is": "CRI",
							"adm0_a3_us": "CRI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CUB",
						"arcs": [
							[
								215
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Cuba",
							"sov_a3": "CUB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Cuba",
							"adm0_a3": "CUB",
							"geou_dif": 0,
							"geounit": "Cuba",
							"gu_a3": "CUB",
							"su_dif": 0,
							"subunit": "Cuba",
							"su_a3": "CUB",
							"brk_diff": 0,
							"name": "Cuba",
							"name_long": "Cuba",
							"brk_a3": "CUB",
							"brk_name": "Cuba",
							"brk_group": null,
							"abbrev": "Cuba",
							"postal": "CU",
							"formal_en": "Republic of Cuba",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Cuba",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 5,
							"mapcolor9": 3,
							"mapcolor13": 4,
							"pop_est": 11451652,
							"gdp_md_est": 108200,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CU",
							"iso_a3": "CUB",
							"iso_n3": "192",
							"un_a3": "192",
							"wb_a2": "CU",
							"wb_a3": "CUB",
							"woe_id": -99,
							"adm0_a3_is": "CUB",
							"adm0_a3_us": "CUB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Caribbean",
							"region_wb": "Latin America & Caribbean",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "-99",
						"arcs": [
							[
								216,
								217
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Somaliland",
							"sov_a3": "SOL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Indeterminate",
							"admin": "Somaliland",
							"adm0_a3": "SOL",
							"geou_dif": 0,
							"geounit": "Somaliland",
							"gu_a3": "SOL",
							"su_dif": 0,
							"subunit": "Somaliland",
							"su_a3": "SOL",
							"brk_diff": 1,
							"name": "Somaliland",
							"name_long": "Somaliland",
							"brk_a3": "B30",
							"brk_name": "Somaliland",
							"brk_group": null,
							"abbrev": "Solnd.",
							"postal": "SL",
							"formal_en": "Republic of Somaliland",
							"formal_fr": null,
							"note_adm0": "Self admin.",
							"note_brk": "Self admin.; Claimed by Somalia",
							"name_sort": "Somaliland",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 5,
							"mapcolor13": 2,
							"pop_est": 3500000,
							"gdp_md_est": 12250,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "-99",
							"iso_a3": "-99",
							"iso_n3": "-99",
							"un_a3": "-099",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "SOM",
							"adm0_a3_us": "SOM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CYP",
						"arcs": [
							[
								218,
								-218
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Cyprus",
							"sov_a3": "CYP",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Cyprus",
							"adm0_a3": "CYP",
							"geou_dif": 0,
							"geounit": "Cyprus",
							"gu_a3": "CYP",
							"su_dif": 0,
							"subunit": "Cyprus",
							"su_a3": "CYP",
							"brk_diff": 0,
							"name": "Cyprus",
							"name_long": "Cyprus",
							"brk_a3": "CYP",
							"brk_name": "Cyprus",
							"brk_group": null,
							"abbrev": "Cyp.",
							"postal": "CY",
							"formal_en": "Republic of Cyprus",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Cyprus",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 2,
							"mapcolor9": 3,
							"mapcolor13": 7,
							"pop_est": 531640,
							"gdp_md_est": 22700,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CY",
							"iso_a3": "CYP",
							"iso_n3": "196",
							"un_a3": "196",
							"wb_a2": "CY",
							"wb_a3": "CYP",
							"woe_id": -99,
							"adm0_a3_is": "CYP",
							"adm0_a3_us": "CYP",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "CZE",
						"arcs": [
							[
								-53,
								219,
								220,
								221
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Czech Republic",
							"sov_a3": "CZE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Czech Republic",
							"adm0_a3": "CZE",
							"geou_dif": 0,
							"geounit": "Czech Republic",
							"gu_a3": "CZE",
							"su_dif": 0,
							"subunit": "Czech Republic",
							"su_a3": "CZE",
							"brk_diff": 0,
							"name": "Czech Rep.",
							"name_long": "Czech Republic",
							"brk_a3": "CZE",
							"brk_name": "Czech Rep.",
							"brk_group": null,
							"abbrev": "Cz. Rep.",
							"postal": "CZ",
							"formal_en": "Czech Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Czech Republic",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 1,
							"mapcolor9": 2,
							"mapcolor13": 6,
							"pop_est": 10211904,
							"gdp_md_est": 265200,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "CZ",
							"iso_a3": "CZE",
							"iso_n3": "203",
							"un_a3": "203",
							"wb_a2": "CZ",
							"wb_a3": "CZE",
							"woe_id": -99,
							"adm0_a3_is": "CZE",
							"adm0_a3_us": "CZE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 14,
							"abbrev_len": 8,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "DEU",
						"arcs": [
							[
								222,
								223,
								-220,
								-52,
								-164,
								224,
								225,
								-64,
								226,
								227,
								228
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Germany",
							"sov_a3": "DEU",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Germany",
							"adm0_a3": "DEU",
							"geou_dif": 0,
							"geounit": "Germany",
							"gu_a3": "DEU",
							"su_dif": 0,
							"subunit": "Germany",
							"su_a3": "DEU",
							"brk_diff": 0,
							"name": "Germany",
							"name_long": "Germany",
							"brk_a3": "DEU",
							"brk_name": "Germany",
							"brk_group": null,
							"abbrev": "Ger.",
							"postal": "D",
							"formal_en": "Federal Republic of Germany",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Germany",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 5,
							"mapcolor9": 5,
							"mapcolor13": 1,
							"pop_est": 82329758,
							"gdp_md_est": 2918000,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "1. Developed region: G7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "DE",
							"iso_a3": "DEU",
							"iso_n3": "276",
							"un_a3": "276",
							"wb_a2": "DE",
							"wb_a3": "DEU",
							"woe_id": -99,
							"adm0_a3_is": "DEU",
							"adm0_a3_us": "DEU",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Western Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "DJI",
						"arcs": [
							[
								229,
								230,
								231,
								232
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Djibouti",
							"sov_a3": "DJI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Djibouti",
							"adm0_a3": "DJI",
							"geou_dif": 0,
							"geounit": "Djibouti",
							"gu_a3": "DJI",
							"su_dif": 0,
							"subunit": "Djibouti",
							"su_a3": "DJI",
							"brk_diff": 0,
							"name": "Djibouti",
							"name_long": "Djibouti",
							"brk_a3": "DJI",
							"brk_name": "Djibouti",
							"brk_group": null,
							"abbrev": "Dji.",
							"postal": "DJ",
							"formal_en": "Republic of Djibouti",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Djibouti",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 2,
							"mapcolor9": 4,
							"mapcolor13": 8,
							"pop_est": 516055,
							"gdp_md_est": 1885,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "DJ",
							"iso_a3": "DJI",
							"iso_n3": "262",
							"un_a3": "262",
							"wb_a2": "DJ",
							"wb_a3": "DJI",
							"woe_id": -99,
							"adm0_a3_is": "DJI",
							"adm0_a3_us": "DJI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Middle East & North Africa",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "DNK",
						"arcs": [
							[
								[
									233
								]
							],
							[
								[
									-229,
									234
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Denmark",
							"sov_a3": "DN1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "Denmark",
							"adm0_a3": "DNK",
							"geou_dif": 0,
							"geounit": "Denmark",
							"gu_a3": "DNK",
							"su_dif": 0,
							"subunit": "Denmark",
							"su_a3": "DNK",
							"brk_diff": 0,
							"name": "Denmark",
							"name_long": "Denmark",
							"brk_a3": "DNK",
							"brk_name": "Denmark",
							"brk_group": null,
							"abbrev": "Den.",
							"postal": "DK",
							"formal_en": "Kingdom of Denmark",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Denmark",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 12,
							"pop_est": 5500510,
							"gdp_md_est": 203600,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "DK",
							"iso_a3": "DNK",
							"iso_n3": "208",
							"un_a3": "208",
							"wb_a2": "DK",
							"wb_a3": "DNK",
							"woe_id": -99,
							"adm0_a3_is": "DNK",
							"adm0_a3_us": "DNK",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "DOM",
						"arcs": [
							[
								235,
								236
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Dominican Republic",
							"sov_a3": "DOM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Dominican Republic",
							"adm0_a3": "DOM",
							"geou_dif": 0,
							"geounit": "Dominican Republic",
							"gu_a3": "DOM",
							"su_dif": 0,
							"subunit": "Dominican Republic",
							"su_a3": "DOM",
							"brk_diff": 0,
							"name": "Dominican Rep.",
							"name_long": "Dominican Republic",
							"brk_a3": "DOM",
							"brk_name": "Dominican Rep.",
							"brk_group": null,
							"abbrev": "Dom. Rep.",
							"postal": "DO",
							"formal_en": "Dominican Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Dominican Republic",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 2,
							"mapcolor9": 5,
							"mapcolor13": 7,
							"pop_est": 9650054,
							"gdp_md_est": 78000,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "DO",
							"iso_a3": "DOM",
							"iso_n3": "214",
							"un_a3": "214",
							"wb_a2": "DO",
							"wb_a3": "DOM",
							"woe_id": -99,
							"adm0_a3_is": "DOM",
							"adm0_a3_us": "DOM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Caribbean",
							"region_wb": "Latin America & Caribbean",
							"name_len": 14,
							"long_len": 18,
							"abbrev_len": 9,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "DZA",
						"arcs": [
							[
								237,
								238,
								239,
								240,
								241,
								242,
								243,
								244
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Algeria",
							"sov_a3": "DZA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Algeria",
							"adm0_a3": "DZA",
							"geou_dif": 0,
							"geounit": "Algeria",
							"gu_a3": "DZA",
							"su_dif": 0,
							"subunit": "Algeria",
							"su_a3": "DZA",
							"brk_diff": 0,
							"name": "Algeria",
							"name_long": "Algeria",
							"brk_a3": "DZA",
							"brk_name": "Algeria",
							"brk_group": null,
							"abbrev": "Alg.",
							"postal": "DZ",
							"formal_en": "People's Democratic Republic of Algeria",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Algeria",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 1,
							"mapcolor9": 6,
							"mapcolor13": 3,
							"pop_est": 34178188,
							"gdp_md_est": 232900,
							"pop_year": -99,
							"lastcensus": 2008,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "DZ",
							"iso_a3": "DZA",
							"iso_n3": "012",
							"un_a3": "012",
							"wb_a2": "DZ",
							"wb_a3": "DZA",
							"woe_id": -99,
							"adm0_a3_is": "DZA",
							"adm0_a3_us": "DZA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Northern Africa",
							"region_wb": "Middle East & North Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ECU",
						"arcs": [
							[
								245,
								-206,
								246
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Ecuador",
							"sov_a3": "ECU",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Ecuador",
							"adm0_a3": "ECU",
							"geou_dif": 0,
							"geounit": "Ecuador",
							"gu_a3": "ECU",
							"su_dif": 0,
							"subunit": "Ecuador",
							"su_a3": "ECU",
							"brk_diff": 0,
							"name": "Ecuador",
							"name_long": "Ecuador",
							"brk_a3": "ECU",
							"brk_name": "Ecuador",
							"brk_group": null,
							"abbrev": "Ecu.",
							"postal": "EC",
							"formal_en": "Republic of Ecuador",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Ecuador",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 5,
							"mapcolor9": 2,
							"mapcolor13": 12,
							"pop_est": 14573101,
							"gdp_md_est": 107700,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "EC",
							"iso_a3": "ECU",
							"iso_n3": "218",
							"un_a3": "218",
							"wb_a2": "EC",
							"wb_a3": "ECU",
							"woe_id": -99,
							"adm0_a3_is": "ECU",
							"adm0_a3_us": "ECU",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "EGY",
						"arcs": [
							[
								247,
								248,
								249,
								250,
								251
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Egypt",
							"sov_a3": "EGY",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Egypt",
							"adm0_a3": "EGY",
							"geou_dif": 0,
							"geounit": "Egypt",
							"gu_a3": "EGY",
							"su_dif": 0,
							"subunit": "Egypt",
							"su_a3": "EGY",
							"brk_diff": 0,
							"name": "Egypt",
							"name_long": "Egypt",
							"brk_a3": "EGY",
							"brk_name": "Egypt",
							"brk_group": null,
							"abbrev": "Egypt",
							"postal": "EG",
							"formal_en": "Arab Republic of Egypt",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Egypt, Arab Rep.",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 6,
							"mapcolor9": 7,
							"mapcolor13": 2,
							"pop_est": 83082869,
							"gdp_md_est": 443700,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "EG",
							"iso_a3": "EGY",
							"iso_n3": "818",
							"un_a3": "818",
							"wb_a2": "EG",
							"wb_a3": "EGY",
							"woe_id": -99,
							"adm0_a3_is": "EGY",
							"adm0_a3_us": "EGY",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Northern Africa",
							"region_wb": "Middle East & North Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ERI",
						"arcs": [
							[
								252,
								253,
								254,
								-233
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Eritrea",
							"sov_a3": "ERI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Eritrea",
							"adm0_a3": "ERI",
							"geou_dif": 0,
							"geounit": "Eritrea",
							"gu_a3": "ERI",
							"su_dif": 0,
							"subunit": "Eritrea",
							"su_a3": "ERI",
							"brk_diff": 0,
							"name": "Eritrea",
							"name_long": "Eritrea",
							"brk_a3": "ERI",
							"brk_name": "Eritrea",
							"brk_group": null,
							"abbrev": "Erit.",
							"postal": "ER",
							"formal_en": "State of Eritrea",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Eritrea",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 1,
							"mapcolor9": 2,
							"mapcolor13": 12,
							"pop_est": 5647168,
							"gdp_md_est": 3945,
							"pop_year": -99,
							"lastcensus": 1984,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ER",
							"iso_a3": "ERI",
							"iso_n3": "232",
							"un_a3": "232",
							"wb_a2": "ER",
							"wb_a3": "ERI",
							"woe_id": -99,
							"adm0_a3_is": "ERI",
							"adm0_a3_us": "ERI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ESP",
						"arcs": [
							[
								255,
								256,
								257,
								258
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Spain",
							"sov_a3": "ESP",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Spain",
							"adm0_a3": "ESP",
							"geou_dif": 0,
							"geounit": "Spain",
							"gu_a3": "ESP",
							"su_dif": 0,
							"subunit": "Spain",
							"su_a3": "ESP",
							"brk_diff": 0,
							"name": "Spain",
							"name_long": "Spain",
							"brk_a3": "ESP",
							"brk_name": "Spain",
							"brk_group": null,
							"abbrev": "Sp.",
							"postal": "E",
							"formal_en": "Kingdom of Spain",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Spain",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 5,
							"mapcolor9": 5,
							"mapcolor13": 5,
							"pop_est": 40525002,
							"gdp_md_est": 1403000,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ES",
							"iso_a3": "ESP",
							"iso_n3": "724",
							"un_a3": "724",
							"wb_a2": "ES",
							"wb_a3": "ESP",
							"woe_id": -99,
							"adm0_a3_is": "ESP",
							"adm0_a3_us": "ESP",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 3,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "EST",
						"arcs": [
							[
								259,
								260,
								261
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Estonia",
							"sov_a3": "EST",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Estonia",
							"adm0_a3": "EST",
							"geou_dif": 0,
							"geounit": "Estonia",
							"gu_a3": "EST",
							"su_dif": 0,
							"subunit": "Estonia",
							"su_a3": "EST",
							"brk_diff": 0,
							"name": "Estonia",
							"name_long": "Estonia",
							"brk_a3": "EST",
							"brk_name": "Estonia",
							"brk_group": null,
							"abbrev": "Est.",
							"postal": "EST",
							"formal_en": "Republic of Estonia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Estonia",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 1,
							"mapcolor13": 10,
							"pop_est": 1299371,
							"gdp_md_est": 27410,
							"pop_year": -99,
							"lastcensus": 2000,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "EE",
							"iso_a3": "EST",
							"iso_n3": "233",
							"un_a3": "233",
							"wb_a2": "EE",
							"wb_a3": "EST",
							"woe_id": -99,
							"adm0_a3_is": "EST",
							"adm0_a3_us": "EST",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ETH",
						"arcs": [
							[
								-232,
								262,
								263,
								264,
								265,
								266,
								267,
								-253
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Ethiopia",
							"sov_a3": "ETH",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Ethiopia",
							"adm0_a3": "ETH",
							"geou_dif": 0,
							"geounit": "Ethiopia",
							"gu_a3": "ETH",
							"su_dif": 0,
							"subunit": "Ethiopia",
							"su_a3": "ETH",
							"brk_diff": 0,
							"name": "Ethiopia",
							"name_long": "Ethiopia",
							"brk_a3": "ETH",
							"brk_name": "Ethiopia",
							"brk_group": null,
							"abbrev": "Eth.",
							"postal": "ET",
							"formal_en": "Federal Democratic Republic of Ethiopia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Ethiopia",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 13,
							"pop_est": 85237338,
							"gdp_md_est": 68770,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ET",
							"iso_a3": "ETH",
							"iso_n3": "231",
							"un_a3": "231",
							"wb_a2": "ET",
							"wb_a3": "ETH",
							"woe_id": -99,
							"adm0_a3_is": "ETH",
							"adm0_a3_us": "ETH",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "FIN",
						"arcs": [
							[
								268,
								269,
								270,
								271
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Finland",
							"sov_a3": "FI1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "Finland",
							"adm0_a3": "FIN",
							"geou_dif": 0,
							"geounit": "Finland",
							"gu_a3": "FIN",
							"su_dif": 0,
							"subunit": "Finland",
							"su_a3": "FIN",
							"brk_diff": 0,
							"name": "Finland",
							"name_long": "Finland",
							"brk_a3": "FIN",
							"brk_name": "Finland",
							"brk_group": null,
							"abbrev": "Fin.",
							"postal": "FIN",
							"formal_en": "Republic of Finland",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Finland",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 1,
							"mapcolor9": 4,
							"mapcolor13": 6,
							"pop_est": 5250275,
							"gdp_md_est": 193500,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "FI",
							"iso_a3": "FIN",
							"iso_n3": "246",
							"un_a3": "246",
							"wb_a2": "FI",
							"wb_a3": "FIN",
							"woe_id": -99,
							"adm0_a3_is": "FIN",
							"adm0_a3_us": "FIN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "FJI",
						"arcs": [
							[
								[
									272
								]
							],
							[
								[
									273
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Fiji",
							"sov_a3": "FJI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Fiji",
							"adm0_a3": "FJI",
							"geou_dif": 0,
							"geounit": "Fiji",
							"gu_a3": "FJI",
							"su_dif": 0,
							"subunit": "Fiji",
							"su_a3": "FJI",
							"brk_diff": 0,
							"name": "Fiji",
							"name_long": "Fiji",
							"brk_a3": "FJI",
							"brk_name": "Fiji",
							"brk_group": null,
							"abbrev": "Fiji",
							"postal": "FJ",
							"formal_en": "Republic of Fiji",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Fiji",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 1,
							"mapcolor9": 2,
							"mapcolor13": 2,
							"pop_est": 944720,
							"gdp_md_est": 3579,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "FJ",
							"iso_a3": "FJI",
							"iso_n3": "242",
							"un_a3": "242",
							"wb_a2": "FJ",
							"wb_a3": "FJI",
							"woe_id": -99,
							"adm0_a3_is": "FJI",
							"adm0_a3_us": "FJI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Oceania",
							"region_un": "Oceania",
							"subregion": "Melanesia",
							"region_wb": "East Asia & Pacific",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "FLK",
						"arcs": [
							[
								274
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "United Kingdom",
							"sov_a3": "GB1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Dependency",
							"admin": "Falkland Islands",
							"adm0_a3": "FLK",
							"geou_dif": 0,
							"geounit": "Falkland Islands",
							"gu_a3": "FLK",
							"su_dif": 0,
							"subunit": "Falkland Islands",
							"su_a3": "FLK",
							"brk_diff": 1,
							"name": "Falkland Is.",
							"name_long": "Falkland Islands",
							"brk_a3": "B12",
							"brk_name": "Falkland Is.",
							"brk_group": null,
							"abbrev": "Flk. Is.",
							"postal": "FK",
							"formal_en": "Falkland Islands",
							"formal_fr": null,
							"note_adm0": "U.K.",
							"note_brk": "Admin. by U.K.; Claimed by Argentina",
							"name_sort": "Falkland Islands",
							"name_alt": "Islas Malvinas",
							"mapcolor7": 6,
							"mapcolor8": 6,
							"mapcolor9": 6,
							"mapcolor13": 3,
							"pop_est": 3140,
							"gdp_md_est": 105.1,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "FK",
							"iso_a3": "FLK",
							"iso_n3": "238",
							"un_a3": "238",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "FLK",
							"adm0_a3_us": "FLK",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 12,
							"long_len": 16,
							"abbrev_len": 8,
							"tiny": -99,
							"homepart": -99
						}
					},
					{
						"type": "MultiPolygon",
						"id": "FRA",
						"arcs": [
							[
								[
									275,
									276,
									277,
									278,
									-111
								]
							],
							[
								[
									279
								]
							],
							[
								[
									280,
									-225,
									-163,
									281,
									282,
									-257,
									283,
									-66
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "France",
							"sov_a3": "FR1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "France",
							"adm0_a3": "FRA",
							"geou_dif": 0,
							"geounit": "France",
							"gu_a3": "FRA",
							"su_dif": 0,
							"subunit": "France",
							"su_a3": "FRA",
							"brk_diff": 0,
							"name": "France",
							"name_long": "France",
							"brk_a3": "FRA",
							"brk_name": "France",
							"brk_group": null,
							"abbrev": "Fr.",
							"postal": "F",
							"formal_en": "French Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "France",
							"name_alt": null,
							"mapcolor7": 7,
							"mapcolor8": 5,
							"mapcolor9": 9,
							"mapcolor13": 11,
							"pop_est": 64057792,
							"gdp_md_est": 2128000,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "1. Developed region: G7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "FR",
							"iso_a3": "FRA",
							"iso_n3": "250",
							"un_a3": "250",
							"wb_a2": "FR",
							"wb_a3": "FRA",
							"woe_id": -99,
							"adm0_a3_is": "FRA",
							"adm0_a3_us": "FRA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Western Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 3,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GAB",
						"arcs": [
							[
								284,
								285,
								-190,
								-205
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Gabon",
							"sov_a3": "GAB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Gabon",
							"adm0_a3": "GAB",
							"geou_dif": 0,
							"geounit": "Gabon",
							"gu_a3": "GAB",
							"su_dif": 0,
							"subunit": "Gabon",
							"su_a3": "GAB",
							"brk_diff": 0,
							"name": "Gabon",
							"name_long": "Gabon",
							"brk_a3": "GAB",
							"brk_name": "Gabon",
							"brk_group": null,
							"abbrev": "Gabon",
							"postal": "GA",
							"formal_en": "Gabonese Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Gabon",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 2,
							"mapcolor9": 5,
							"mapcolor13": 5,
							"pop_est": 1514993,
							"gdp_md_est": 21110,
							"pop_year": -99,
							"lastcensus": 2003,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GA",
							"iso_a3": "GAB",
							"iso_n3": "266",
							"un_a3": "266",
							"wb_a2": "GA",
							"wb_a3": "GAB",
							"woe_id": -99,
							"adm0_a3_is": "GAB",
							"adm0_a3_us": "GAB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": 3,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "GBR",
						"arcs": [
							[
								[
									286,
									287
								]
							],
							[
								[
									288
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "United Kingdom",
							"sov_a3": "GB1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "United Kingdom",
							"adm0_a3": "GBR",
							"geou_dif": 0,
							"geounit": "United Kingdom",
							"gu_a3": "GBR",
							"su_dif": 0,
							"subunit": "United Kingdom",
							"su_a3": "GBR",
							"brk_diff": 0,
							"name": "United Kingdom",
							"name_long": "United Kingdom",
							"brk_a3": "GBR",
							"brk_name": "United Kingdom",
							"brk_group": null,
							"abbrev": "U.K.",
							"postal": "GB",
							"formal_en": "United Kingdom of Great Britain and Northern Ireland",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "United Kingdom",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 6,
							"mapcolor9": 6,
							"mapcolor13": 3,
							"pop_est": 62262000,
							"gdp_md_est": 1977704,
							"pop_year": 0,
							"lastcensus": 2011,
							"gdp_year": 2009,
							"economy": "1. Developed region: G7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GB",
							"iso_a3": "GBR",
							"iso_n3": "826",
							"un_a3": "826",
							"wb_a2": "GB",
							"wb_a3": "GBR",
							"woe_id": -99,
							"adm0_a3_is": "GBR",
							"adm0_a3_us": "GBR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 14,
							"long_len": 14,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GEO",
						"arcs": [
							[
								289,
								290,
								-58,
								-32,
								291
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Georgia",
							"sov_a3": "GEO",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Georgia",
							"adm0_a3": "GEO",
							"geou_dif": 0,
							"geounit": "Georgia",
							"gu_a3": "GEO",
							"su_dif": 0,
							"subunit": "Georgia",
							"su_a3": "GEO",
							"brk_diff": 0,
							"name": "Georgia",
							"name_long": "Georgia",
							"brk_a3": "GEO",
							"brk_name": "Georgia",
							"brk_group": null,
							"abbrev": "Geo.",
							"postal": "GE",
							"formal_en": "Georgia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Georgia",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 2,
							"pop_est": 4615807,
							"gdp_md_est": 21510,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GE",
							"iso_a3": "GEO",
							"iso_n3": "268",
							"un_a3": "268",
							"wb_a2": "GE",
							"wb_a3": "GEO",
							"woe_id": -99,
							"adm0_a3_is": "GEO",
							"adm0_a3_us": "GEO",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GHA",
						"arcs": [
							[
								292,
								-189,
								-77,
								293
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Ghana",
							"sov_a3": "GHA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Ghana",
							"adm0_a3": "GHA",
							"geou_dif": 0,
							"geounit": "Ghana",
							"gu_a3": "GHA",
							"su_dif": 0,
							"subunit": "Ghana",
							"su_a3": "GHA",
							"brk_diff": 0,
							"name": "Ghana",
							"name_long": "Ghana",
							"brk_a3": "GHA",
							"brk_name": "Ghana",
							"brk_group": null,
							"abbrev": "Ghana",
							"postal": "GH",
							"formal_en": "Republic of Ghana",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Ghana",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 3,
							"mapcolor9": 1,
							"mapcolor13": 4,
							"pop_est": 23832495,
							"gdp_md_est": 34200,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GH",
							"iso_a3": "GHA",
							"iso_n3": "288",
							"un_a3": "288",
							"wb_a2": "GH",
							"wb_a3": "GHA",
							"woe_id": -99,
							"adm0_a3_is": "GHA",
							"adm0_a3_us": "GHA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GIN",
						"arcs": [
							[
								294,
								295,
								296,
								297,
								298,
								299,
								-187
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Guinea",
							"sov_a3": "GIN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Guinea",
							"adm0_a3": "GIN",
							"geou_dif": 0,
							"geounit": "Guinea",
							"gu_a3": "GIN",
							"su_dif": 0,
							"subunit": "Guinea",
							"su_a3": "GIN",
							"brk_diff": 0,
							"name": "Guinea",
							"name_long": "Guinea",
							"brk_a3": "GIN",
							"brk_name": "Guinea",
							"brk_group": null,
							"abbrev": "Gin.",
							"postal": "GN",
							"formal_en": "Republic of Guinea",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Guinea",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 3,
							"mapcolor9": 7,
							"mapcolor13": 2,
							"pop_est": 10057975,
							"gdp_md_est": 10600,
							"pop_year": -99,
							"lastcensus": 1996,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GN",
							"iso_a3": "GIN",
							"iso_n3": "324",
							"un_a3": "324",
							"wb_a2": "GN",
							"wb_a3": "GIN",
							"woe_id": -99,
							"adm0_a3_is": "GIN",
							"adm0_a3_us": "GIN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GMB",
						"arcs": [
							[
								300,
								301
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Gambia",
							"sov_a3": "GMB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Gambia",
							"adm0_a3": "GMB",
							"geou_dif": 0,
							"geounit": "Gambia",
							"gu_a3": "GMB",
							"su_dif": 0,
							"subunit": "Gambia",
							"su_a3": "GMB",
							"brk_diff": 0,
							"name": "Gambia",
							"name_long": "The Gambia",
							"brk_a3": "GMB",
							"brk_name": "Gambia",
							"brk_group": null,
							"abbrev": "Gambia",
							"postal": "GM",
							"formal_en": "Republic of the Gambia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Gambia, The",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 8,
							"pop_est": 1782893,
							"gdp_md_est": 2272,
							"pop_year": -99,
							"lastcensus": 2003,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GM",
							"iso_a3": "GMB",
							"iso_n3": "270",
							"un_a3": "270",
							"wb_a2": "GM",
							"wb_a3": "GMB",
							"woe_id": -99,
							"adm0_a3_is": "GMB",
							"adm0_a3_us": "GMB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 6,
							"long_len": 10,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GNB",
						"arcs": [
							[
								302,
								303,
								-298
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Guinea Bissau",
							"sov_a3": "GNB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Guinea Bissau",
							"adm0_a3": "GNB",
							"geou_dif": 0,
							"geounit": "Guinea Bissau",
							"gu_a3": "GNB",
							"su_dif": 0,
							"subunit": "Guinea Bissau",
							"su_a3": "GNB",
							"brk_diff": 0,
							"name": "Guinea-Bissau",
							"name_long": "Guinea-Bissau",
							"brk_a3": "GNB",
							"brk_name": "Guinea-Bissau",
							"brk_group": null,
							"abbrev": "GnB.",
							"postal": "GW",
							"formal_en": "Republic of Guinea-Bissau",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Guinea-Bissau",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 5,
							"mapcolor9": 3,
							"mapcolor13": 4,
							"pop_est": 1533964,
							"gdp_md_est": 904.2,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GW",
							"iso_a3": "GNB",
							"iso_n3": "624",
							"un_a3": "624",
							"wb_a2": "GW",
							"wb_a3": "GNB",
							"woe_id": -99,
							"adm0_a3_is": "GNB",
							"adm0_a3_us": "GNB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 13,
							"long_len": 13,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GNQ",
						"arcs": [
							[
								304,
								-191,
								-286
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Equatorial Guinea",
							"sov_a3": "GNQ",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Equatorial Guinea",
							"adm0_a3": "GNQ",
							"geou_dif": 0,
							"geounit": "Equatorial Guinea",
							"gu_a3": "GNQ",
							"su_dif": 0,
							"subunit": "Equatorial Guinea",
							"su_a3": "GNQ",
							"brk_diff": 0,
							"name": "Eq. Guinea",
							"name_long": "Equatorial Guinea",
							"brk_a3": "GNQ",
							"brk_name": "Eq. Guinea",
							"brk_group": null,
							"abbrev": "Eq. G.",
							"postal": "GQ",
							"formal_en": "Republic of Equatorial Guinea",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Equatorial Guinea",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 1,
							"mapcolor9": 4,
							"mapcolor13": 8,
							"pop_est": 650702,
							"gdp_md_est": 14060,
							"pop_year": 0,
							"lastcensus": 2002,
							"gdp_year": 0,
							"economy": "7. Least developed region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GQ",
							"iso_a3": "GNQ",
							"iso_n3": "226",
							"un_a3": "226",
							"wb_a2": "GQ",
							"wb_a3": "GNQ",
							"woe_id": -99,
							"adm0_a3_is": "GNQ",
							"adm0_a3_us": "GNQ",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 10,
							"long_len": 17,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "GRC",
						"arcs": [
							[
								[
									305
								]
							],
							[
								[
									306,
									-15,
									307,
									-84,
									308
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Greece",
							"sov_a3": "GRC",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Greece",
							"adm0_a3": "GRC",
							"geou_dif": 0,
							"geounit": "Greece",
							"gu_a3": "GRC",
							"su_dif": 0,
							"subunit": "Greece",
							"su_a3": "GRC",
							"brk_diff": 0,
							"name": "Greece",
							"name_long": "Greece",
							"brk_a3": "GRC",
							"brk_name": "Greece",
							"brk_group": null,
							"abbrev": "Greece",
							"postal": "GR",
							"formal_en": "Hellenic Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Greece",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 9,
							"pop_est": 10737428,
							"gdp_md_est": 343000,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GR",
							"iso_a3": "GRC",
							"iso_n3": "300",
							"un_a3": "300",
							"wb_a2": "GR",
							"wb_a3": "GRC",
							"woe_id": -99,
							"adm0_a3_is": "GRC",
							"adm0_a3_us": "GRC",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GRL",
						"arcs": [
							[
								309
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Denmark",
							"sov_a3": "DN1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "Greenland",
							"adm0_a3": "GRL",
							"geou_dif": 0,
							"geounit": "Greenland",
							"gu_a3": "GRL",
							"su_dif": 0,
							"subunit": "Greenland",
							"su_a3": "GRL",
							"brk_diff": 0,
							"name": "Greenland",
							"name_long": "Greenland",
							"brk_a3": "GRL",
							"brk_name": "Greenland",
							"brk_group": null,
							"abbrev": "Grlnd.",
							"postal": "GL",
							"formal_en": "Greenland",
							"formal_fr": null,
							"note_adm0": "Den.",
							"note_brk": null,
							"name_sort": "Greenland",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 12,
							"pop_est": 57600,
							"gdp_md_est": 1100,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GL",
							"iso_a3": "GRL",
							"iso_n3": "304",
							"un_a3": "304",
							"wb_a2": "GL",
							"wb_a3": "GRL",
							"woe_id": -99,
							"adm0_a3_is": "GRL",
							"adm0_a3_us": "GRL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Northern America",
							"region_wb": "Europe & Central Asia",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": -99
						}
					},
					{
						"type": "Polygon",
						"id": "GTM",
						"arcs": [
							[
								310,
								311,
								-100,
								312,
								313,
								314
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Guatemala",
							"sov_a3": "GTM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Guatemala",
							"adm0_a3": "GTM",
							"geou_dif": 0,
							"geounit": "Guatemala",
							"gu_a3": "GTM",
							"su_dif": 0,
							"subunit": "Guatemala",
							"su_a3": "GTM",
							"brk_diff": 0,
							"name": "Guatemala",
							"name_long": "Guatemala",
							"brk_a3": "GTM",
							"brk_name": "Guatemala",
							"brk_group": null,
							"abbrev": "Guat.",
							"postal": "GT",
							"formal_en": "Republic of Guatemala",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Guatemala",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 3,
							"mapcolor9": 3,
							"mapcolor13": 6,
							"pop_est": 13276517,
							"gdp_md_est": 68580,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GT",
							"iso_a3": "GTM",
							"iso_n3": "320",
							"un_a3": "320",
							"wb_a2": "GT",
							"wb_a3": "GTM",
							"woe_id": -99,
							"adm0_a3_is": "GTM",
							"adm0_a3_us": "GTM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 5,
							"tiny": 4,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "GUY",
						"arcs": [
							[
								315,
								316,
								-109,
								317
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Guyana",
							"sov_a3": "GUY",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Guyana",
							"adm0_a3": "GUY",
							"geou_dif": 0,
							"geounit": "Guyana",
							"gu_a3": "GUY",
							"su_dif": 0,
							"subunit": "Guyana",
							"su_a3": "GUY",
							"brk_diff": 0,
							"name": "Guyana",
							"name_long": "Guyana",
							"brk_a3": "GUY",
							"brk_name": "Guyana",
							"brk_group": null,
							"abbrev": "Guy.",
							"postal": "GY",
							"formal_en": "Co-operative Republic of Guyana",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Guyana",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 1,
							"mapcolor9": 4,
							"mapcolor13": 8,
							"pop_est": 772298,
							"gdp_md_est": 2966,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "GY",
							"iso_a3": "GUY",
							"iso_n3": "328",
							"un_a3": "328",
							"wb_a2": "GY",
							"wb_a3": "GUY",
							"woe_id": -99,
							"adm0_a3_is": "GUY",
							"adm0_a3_us": "GUY",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "HND",
						"arcs": [
							[
								318,
								319,
								-314,
								320,
								321
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Honduras",
							"sov_a3": "HND",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Honduras",
							"adm0_a3": "HND",
							"geou_dif": 0,
							"geounit": "Honduras",
							"gu_a3": "HND",
							"su_dif": 0,
							"subunit": "Honduras",
							"su_a3": "HND",
							"brk_diff": 0,
							"name": "Honduras",
							"name_long": "Honduras",
							"brk_a3": "HND",
							"brk_name": "Honduras",
							"brk_group": null,
							"abbrev": "Hond.",
							"postal": "HN",
							"formal_en": "Republic of Honduras",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Honduras",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 5,
							"mapcolor9": 2,
							"mapcolor13": 5,
							"pop_est": 7792854,
							"gdp_md_est": 33720,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "HN",
							"iso_a3": "HND",
							"iso_n3": "340",
							"un_a3": "340",
							"wb_a2": "HN",
							"wb_a3": "HND",
							"woe_id": -99,
							"adm0_a3_is": "HND",
							"adm0_a3_us": "HND",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "HRV",
						"arcs": [
							[
								322,
								-92,
								323,
								324,
								325,
								326
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Croatia",
							"sov_a3": "HRV",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Croatia",
							"adm0_a3": "HRV",
							"geou_dif": 0,
							"geounit": "Croatia",
							"gu_a3": "HRV",
							"su_dif": 0,
							"subunit": "Croatia",
							"su_a3": "HRV",
							"brk_diff": 0,
							"name": "Croatia",
							"name_long": "Croatia",
							"brk_a3": "HRV",
							"brk_name": "Croatia",
							"brk_group": null,
							"abbrev": "Cro.",
							"postal": "HR",
							"formal_en": "Republic of Croatia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Croatia",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 4,
							"mapcolor9": 5,
							"mapcolor13": 1,
							"pop_est": 4489409,
							"gdp_md_est": 82390,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "HR",
							"iso_a3": "HRV",
							"iso_n3": "191",
							"un_a3": "191",
							"wb_a2": "HR",
							"wb_a3": "HRV",
							"woe_id": -99,
							"adm0_a3_is": "HRV",
							"adm0_a3_us": "HRV",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "HTI",
						"arcs": [
							[
								-237,
								327
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Haiti",
							"sov_a3": "HTI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Haiti",
							"adm0_a3": "HTI",
							"geou_dif": 0,
							"geounit": "Haiti",
							"gu_a3": "HTI",
							"su_dif": 0,
							"subunit": "Haiti",
							"su_a3": "HTI",
							"brk_diff": 0,
							"name": "Haiti",
							"name_long": "Haiti",
							"brk_a3": "HTI",
							"brk_name": "Haiti",
							"brk_group": null,
							"abbrev": "Haiti",
							"postal": "HT",
							"formal_en": "Republic of Haiti",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Haiti",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 1,
							"mapcolor9": 7,
							"mapcolor13": 2,
							"pop_est": 9035536,
							"gdp_md_est": 11500,
							"pop_year": -99,
							"lastcensus": 2003,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "HT",
							"iso_a3": "HTI",
							"iso_n3": "332",
							"un_a3": "332",
							"wb_a2": "HT",
							"wb_a3": "HTI",
							"woe_id": -99,
							"adm0_a3_is": "HTI",
							"adm0_a3_us": "HTI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Caribbean",
							"region_wb": "Latin America & Caribbean",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "HUN",
						"arcs": [
							[
								-48,
								328,
								329,
								330,
								331,
								-327,
								332
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Hungary",
							"sov_a3": "HUN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Hungary",
							"adm0_a3": "HUN",
							"geou_dif": 0,
							"geounit": "Hungary",
							"gu_a3": "HUN",
							"su_dif": 0,
							"subunit": "Hungary",
							"su_a3": "HUN",
							"brk_diff": 0,
							"name": "Hungary",
							"name_long": "Hungary",
							"brk_a3": "HUN",
							"brk_name": "Hungary",
							"brk_group": null,
							"abbrev": "Hun.",
							"postal": "HU",
							"formal_en": "Republic of Hungary",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Hungary",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 6,
							"mapcolor9": 1,
							"mapcolor13": 5,
							"pop_est": 9905596,
							"gdp_md_est": 196600,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "HU",
							"iso_a3": "HUN",
							"iso_n3": "348",
							"un_a3": "348",
							"wb_a2": "HU",
							"wb_a3": "HUN",
							"woe_id": -99,
							"adm0_a3_is": "HUN",
							"adm0_a3_us": "HUN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "IDN",
						"arcs": [
							[
								[
									333
								]
							],
							[
								[
									334,
									335
								]
							],
							[
								[
									336
								]
							],
							[
								[
									337
								]
							],
							[
								[
									338
								]
							],
							[
								[
									339
								]
							],
							[
								[
									340
								]
							],
							[
								[
									341
								]
							],
							[
								[
									342,
									343
								]
							],
							[
								[
									344
								]
							],
							[
								[
									345
								]
							],
							[
								[
									346,
									347
								]
							],
							[
								[
									348
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Indonesia",
							"sov_a3": "IDN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Indonesia",
							"adm0_a3": "IDN",
							"geou_dif": 0,
							"geounit": "Indonesia",
							"gu_a3": "IDN",
							"su_dif": 0,
							"subunit": "Indonesia",
							"su_a3": "IDN",
							"brk_diff": 0,
							"name": "Indonesia",
							"name_long": "Indonesia",
							"brk_a3": "IDN",
							"brk_name": "Indonesia",
							"brk_group": null,
							"abbrev": "Indo.",
							"postal": "INDO",
							"formal_en": "Republic of Indonesia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Indonesia",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 6,
							"mapcolor9": 6,
							"mapcolor13": 11,
							"pop_est": 240271522,
							"gdp_md_est": 914600,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "4. Emerging region: MIKT",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ID",
							"iso_a3": "IDN",
							"iso_n3": "360",
							"un_a3": "360",
							"wb_a2": "ID",
							"wb_a3": "IDN",
							"woe_id": -99,
							"adm0_a3_is": "IDN",
							"adm0_a3_us": "IDN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "IND",
						"arcs": [
							[
								-177,
								349,
								-175,
								-116,
								-174,
								350,
								-80,
								351,
								352
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "India",
							"sov_a3": "IND",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "India",
							"adm0_a3": "IND",
							"geou_dif": 0,
							"geounit": "India",
							"gu_a3": "IND",
							"su_dif": 0,
							"subunit": "India",
							"su_a3": "IND",
							"brk_diff": 0,
							"name": "India",
							"name_long": "India",
							"brk_a3": "IND",
							"brk_name": "India",
							"brk_group": null,
							"abbrev": "India",
							"postal": "IND",
							"formal_en": "Republic of India",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "India",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 3,
							"mapcolor9": 2,
							"mapcolor13": 2,
							"pop_est": 1166079220,
							"gdp_md_est": 3297000,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "3. Emerging region: BRIC",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "IN",
							"iso_a3": "IND",
							"iso_n3": "356",
							"un_a3": "356",
							"wb_a2": "IN",
							"wb_a3": "IND",
							"woe_id": -99,
							"adm0_a3_is": "IND",
							"adm0_a3_us": "IND",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "South Asia",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "IRL",
						"arcs": [
							[
								353,
								-287
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Ireland",
							"sov_a3": "IRL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Ireland",
							"adm0_a3": "IRL",
							"geou_dif": 0,
							"geounit": "Ireland",
							"gu_a3": "IRL",
							"su_dif": 0,
							"subunit": "Ireland",
							"su_a3": "IRL",
							"brk_diff": 0,
							"name": "Ireland",
							"name_long": "Ireland",
							"brk_a3": "IRL",
							"brk_name": "Ireland",
							"brk_group": null,
							"abbrev": "Ire.",
							"postal": "IRL",
							"formal_en": "Ireland",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Ireland",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 3,
							"mapcolor9": 2,
							"mapcolor13": 2,
							"pop_est": 4203200,
							"gdp_md_est": 188400,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "IE",
							"iso_a3": "IRL",
							"iso_n3": "372",
							"un_a3": "372",
							"wb_a2": "IE",
							"wb_a3": "IRL",
							"woe_id": -99,
							"adm0_a3_is": "IRL",
							"adm0_a3_us": "IRL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "IRN",
						"arcs": [
							[
								354,
								-6,
								355,
								356,
								357,
								358,
								-55,
								-34,
								-57,
								359
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Iran",
							"sov_a3": "IRN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Iran",
							"adm0_a3": "IRN",
							"geou_dif": 0,
							"geounit": "Iran",
							"gu_a3": "IRN",
							"su_dif": 0,
							"subunit": "Iran",
							"su_a3": "IRN",
							"brk_diff": 0,
							"name": "Iran",
							"name_long": "Iran",
							"brk_a3": "IRN",
							"brk_name": "Iran",
							"brk_group": null,
							"abbrev": "Iran",
							"postal": "IRN",
							"formal_en": "Islamic Republic of Iran",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Iran, Islamic Rep.",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 3,
							"mapcolor9": 4,
							"mapcolor13": 13,
							"pop_est": 66429284,
							"gdp_md_est": 841700,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "IR",
							"iso_a3": "IRN",
							"iso_n3": "364",
							"un_a3": "364",
							"wb_a2": "IR",
							"wb_a3": "IRN",
							"woe_id": -99,
							"adm0_a3_is": "IRN",
							"adm0_a3_us": "IRN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "IRQ",
						"arcs": [
							[
								360,
								361,
								362,
								363,
								364,
								365,
								-358
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Iraq",
							"sov_a3": "IRQ",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Iraq",
							"adm0_a3": "IRQ",
							"geou_dif": 0,
							"geounit": "Iraq",
							"gu_a3": "IRQ",
							"su_dif": 0,
							"subunit": "Iraq",
							"su_a3": "IRQ",
							"brk_diff": 0,
							"name": "Iraq",
							"name_long": "Iraq",
							"brk_a3": "IRQ",
							"brk_name": "Iraq",
							"brk_group": null,
							"abbrev": "Iraq",
							"postal": "IRQ",
							"formal_en": "Republic of Iraq",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Iraq",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 3,
							"mapcolor13": 1,
							"pop_est": 31129225,
							"gdp_md_est": 103900,
							"pop_year": -99,
							"lastcensus": 1997,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "IQ",
							"iso_a3": "IRQ",
							"iso_n3": "368",
							"un_a3": "368",
							"wb_a2": "IQ",
							"wb_a3": "IRQ",
							"woe_id": -99,
							"adm0_a3_is": "IRQ",
							"adm0_a3_us": "IRQ",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ISL",
						"arcs": [
							[
								366
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Iceland",
							"sov_a3": "ISL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Iceland",
							"adm0_a3": "ISL",
							"geou_dif": 0,
							"geounit": "Iceland",
							"gu_a3": "ISL",
							"su_dif": 0,
							"subunit": "Iceland",
							"su_a3": "ISL",
							"brk_diff": 0,
							"name": "Iceland",
							"name_long": "Iceland",
							"brk_a3": "ISL",
							"brk_name": "Iceland",
							"brk_group": null,
							"abbrev": "Iceland",
							"postal": "IS",
							"formal_en": "Republic of Iceland",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Iceland",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 4,
							"mapcolor13": 9,
							"pop_est": 306694,
							"gdp_md_est": 12710,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "IS",
							"iso_a3": "ISL",
							"iso_n3": "352",
							"un_a3": "352",
							"wb_a2": "IS",
							"wb_a3": "ISL",
							"woe_id": -99,
							"adm0_a3_is": "ISL",
							"adm0_a3_us": "ISL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 7,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ISR",
						"arcs": [
							[
								367,
								368,
								369,
								-252,
								370,
								371,
								372
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Israel",
							"sov_a3": "ISR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Israel",
							"adm0_a3": "ISR",
							"geou_dif": 0,
							"geounit": "Israel",
							"gu_a3": "ISR",
							"su_dif": 0,
							"subunit": "Israel",
							"su_a3": "ISR",
							"brk_diff": 0,
							"name": "Israel",
							"name_long": "Israel",
							"brk_a3": "ISR",
							"brk_name": "Israel",
							"brk_group": null,
							"abbrev": "Isr.",
							"postal": "IS",
							"formal_en": "State of Israel",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Israel",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 5,
							"mapcolor13": 9,
							"pop_est": 7233701,
							"gdp_md_est": 201400,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "IL",
							"iso_a3": "ISR",
							"iso_n3": "376",
							"un_a3": "376",
							"wb_a2": "IL",
							"wb_a3": "ISR",
							"woe_id": -99,
							"adm0_a3_is": "ISR",
							"adm0_a3_us": "ISR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "ITA",
						"arcs": [
							[
								[
									373
								]
							],
							[
								[
									374
								]
							],
							[
								[
									375,
									376,
									-282,
									-162,
									-50
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Italy",
							"sov_a3": "ITA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Italy",
							"adm0_a3": "ITA",
							"geou_dif": 0,
							"geounit": "Italy",
							"gu_a3": "ITA",
							"su_dif": 0,
							"subunit": "Italy",
							"su_a3": "ITA",
							"brk_diff": 0,
							"name": "Italy",
							"name_long": "Italy",
							"brk_a3": "ITA",
							"brk_name": "Italy",
							"brk_group": null,
							"abbrev": "Italy",
							"postal": "I",
							"formal_en": "Italian Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Italy",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 7,
							"mapcolor9": 8,
							"mapcolor13": 7,
							"pop_est": 58126212,
							"gdp_md_est": 1823000,
							"pop_year": -99,
							"lastcensus": 2012,
							"gdp_year": -99,
							"economy": "1. Developed region: G7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "IT",
							"iso_a3": "ITA",
							"iso_n3": "380",
							"un_a3": "380",
							"wb_a2": "IT",
							"wb_a3": "ITA",
							"woe_id": -99,
							"adm0_a3_is": "ITA",
							"adm0_a3_us": "ITA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "JAM",
						"arcs": [
							[
								377
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Jamaica",
							"sov_a3": "JAM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Jamaica",
							"adm0_a3": "JAM",
							"geou_dif": 0,
							"geounit": "Jamaica",
							"gu_a3": "JAM",
							"su_dif": 0,
							"subunit": "Jamaica",
							"su_a3": "JAM",
							"brk_diff": 0,
							"name": "Jamaica",
							"name_long": "Jamaica",
							"brk_a3": "JAM",
							"brk_name": "Jamaica",
							"brk_group": null,
							"abbrev": "Jam.",
							"postal": "J",
							"formal_en": "Jamaica",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Jamaica",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 2,
							"mapcolor9": 4,
							"mapcolor13": 10,
							"pop_est": 2825928,
							"gdp_md_est": 20910,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "JM",
							"iso_a3": "JAM",
							"iso_n3": "388",
							"un_a3": "388",
							"wb_a2": "JM",
							"wb_a3": "JAM",
							"woe_id": -99,
							"adm0_a3_is": "JAM",
							"adm0_a3_us": "JAM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Caribbean",
							"region_wb": "Latin America & Caribbean",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "JOR",
						"arcs": [
							[
								-368,
								378,
								-364,
								379,
								380,
								-370,
								381
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Jordan",
							"sov_a3": "JOR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Jordan",
							"adm0_a3": "JOR",
							"geou_dif": 0,
							"geounit": "Jordan",
							"gu_a3": "JOR",
							"su_dif": 0,
							"subunit": "Jordan",
							"su_a3": "JOR",
							"brk_diff": 0,
							"name": "Jordan",
							"name_long": "Jordan",
							"brk_a3": "JOR",
							"brk_name": "Jordan",
							"brk_group": null,
							"abbrev": "Jord.",
							"postal": "J",
							"formal_en": "Hashemite Kingdom of Jordan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Jordan",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 3,
							"mapcolor9": 4,
							"mapcolor13": 4,
							"pop_est": 6342948,
							"gdp_md_est": 31610,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "JO",
							"iso_a3": "JOR",
							"iso_n3": "400",
							"un_a3": "400",
							"wb_a2": "JO",
							"wb_a3": "JOR",
							"woe_id": -99,
							"adm0_a3_is": "JOR",
							"adm0_a3_us": "JOR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "JPN",
						"arcs": [
							[
								[
									382
								]
							],
							[
								[
									383
								]
							],
							[
								[
									384
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Japan",
							"sov_a3": "JPN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Japan",
							"adm0_a3": "JPN",
							"geou_dif": 0,
							"geounit": "Japan",
							"gu_a3": "JPN",
							"su_dif": 0,
							"subunit": "Japan",
							"su_a3": "JPN",
							"brk_diff": 0,
							"name": "Japan",
							"name_long": "Japan",
							"brk_a3": "JPN",
							"brk_name": "Japan",
							"brk_group": null,
							"abbrev": "Japan",
							"postal": "J",
							"formal_en": "Japan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Japan",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 3,
							"mapcolor9": 5,
							"mapcolor13": 4,
							"pop_est": 127078679,
							"gdp_md_est": 4329000,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "1. Developed region: G7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "JP",
							"iso_a3": "JPN",
							"iso_n3": "392",
							"un_a3": "392",
							"wb_a2": "JP",
							"wb_a3": "JPN",
							"woe_id": -99,
							"adm0_a3_is": "JPN",
							"adm0_a3_us": "JPN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "KAZ",
						"arcs": [
							[
								385,
								386,
								387,
								388,
								-181,
								389
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Kazakhstan",
							"sov_a3": "KAZ",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Kazakhstan",
							"adm0_a3": "KAZ",
							"geou_dif": 0,
							"geounit": "Kazakhstan",
							"gu_a3": "KAZ",
							"su_dif": 0,
							"subunit": "Kazakhstan",
							"su_a3": "KAZ",
							"brk_diff": 0,
							"name": "Kazakhstan",
							"name_long": "Kazakhstan",
							"brk_a3": "KAZ",
							"brk_name": "Kazakhstan",
							"brk_group": null,
							"abbrev": "Kaz.",
							"postal": "KZ",
							"formal_en": "Republic of Kazakhstan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Kazakhstan",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 1,
							"mapcolor9": 6,
							"mapcolor13": 1,
							"pop_est": 15399437,
							"gdp_md_est": 175800,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "KZ",
							"iso_a3": "KAZ",
							"iso_n3": "398",
							"un_a3": "398",
							"wb_a2": "KZ",
							"wb_a3": "KAZ",
							"woe_id": -99,
							"adm0_a3_is": "KAZ",
							"adm0_a3_us": "KAZ",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Central Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "KEN",
						"arcs": [
							[
								390,
								391,
								392,
								393,
								-265,
								394
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Kenya",
							"sov_a3": "KEN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Kenya",
							"adm0_a3": "KEN",
							"geou_dif": 0,
							"geounit": "Kenya",
							"gu_a3": "KEN",
							"su_dif": 0,
							"subunit": "Kenya",
							"su_a3": "KEN",
							"brk_diff": 0,
							"name": "Kenya",
							"name_long": "Kenya",
							"brk_a3": "KEN",
							"brk_name": "Kenya",
							"brk_group": null,
							"abbrev": "Ken.",
							"postal": "KE",
							"formal_en": "Republic of Kenya",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Kenya",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 2,
							"mapcolor9": 7,
							"mapcolor13": 3,
							"pop_est": 39002772,
							"gdp_md_est": 61510,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "KE",
							"iso_a3": "KEN",
							"iso_n3": "404",
							"un_a3": "404",
							"wb_a2": "KE",
							"wb_a3": "KEN",
							"woe_id": -99,
							"adm0_a3_is": "KEN",
							"adm0_a3_us": "KEN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "KGZ",
						"arcs": [
							[
								-390,
								-180,
								395,
								396
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Kyrgyzstan",
							"sov_a3": "KGZ",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Kyrgyzstan",
							"adm0_a3": "KGZ",
							"geou_dif": 0,
							"geounit": "Kyrgyzstan",
							"gu_a3": "KGZ",
							"su_dif": 0,
							"subunit": "Kyrgyzstan",
							"su_a3": "KGZ",
							"brk_diff": 0,
							"name": "Kyrgyzstan",
							"name_long": "Kyrgyzstan",
							"brk_a3": "KGZ",
							"brk_name": "Kyrgyzstan",
							"brk_group": null,
							"abbrev": "Kgz.",
							"postal": "KG",
							"formal_en": "Kyrgyz Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Kyrgyz Republic",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 7,
							"mapcolor9": 7,
							"mapcolor13": 6,
							"pop_est": 5431747,
							"gdp_md_est": 11610,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "KG",
							"iso_a3": "KGZ",
							"iso_n3": "417",
							"un_a3": "417",
							"wb_a2": "KG",
							"wb_a3": "KGZ",
							"woe_id": -99,
							"adm0_a3_is": "KGZ",
							"adm0_a3_us": "KGZ",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Central Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "KHM",
						"arcs": [
							[
								397,
								398,
								399,
								400
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Cambodia",
							"sov_a3": "KHM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Cambodia",
							"adm0_a3": "KHM",
							"geou_dif": 0,
							"geounit": "Cambodia",
							"gu_a3": "KHM",
							"su_dif": 0,
							"subunit": "Cambodia",
							"su_a3": "KHM",
							"brk_diff": 0,
							"name": "Cambodia",
							"name_long": "Cambodia",
							"brk_a3": "KHM",
							"brk_name": "Cambodia",
							"brk_group": null,
							"abbrev": "Camb.",
							"postal": "KH",
							"formal_en": "Kingdom of Cambodia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Cambodia",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 3,
							"mapcolor9": 6,
							"mapcolor13": 5,
							"pop_est": 14494293,
							"gdp_md_est": 27940,
							"pop_year": -99,
							"lastcensus": 2008,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "KH",
							"iso_a3": "KHM",
							"iso_n3": "116",
							"un_a3": "116",
							"wb_a2": "KH",
							"wb_a3": "KHM",
							"woe_id": -99,
							"adm0_a3_is": "KHM",
							"adm0_a3_us": "KHM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "KOR",
						"arcs": [
							[
								401,
								402
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "South Korea",
							"sov_a3": "KOR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "South Korea",
							"adm0_a3": "KOR",
							"geou_dif": 0,
							"geounit": "South Korea",
							"gu_a3": "KOR",
							"su_dif": 0,
							"subunit": "South Korea",
							"su_a3": "KOR",
							"brk_diff": 0,
							"name": "Korea",
							"name_long": "Republic of Korea",
							"brk_a3": "KOR",
							"brk_name": "Republic of Korea",
							"brk_group": null,
							"abbrev": "S.K.",
							"postal": "KR",
							"formal_en": "Republic of Korea",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Korea, Rep.",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 1,
							"mapcolor9": 1,
							"mapcolor13": 5,
							"pop_est": 48508972,
							"gdp_md_est": 1335000,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "4. Emerging region: MIKT",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "KR",
							"iso_a3": "KOR",
							"iso_n3": "410",
							"un_a3": "410",
							"wb_a2": "KR",
							"wb_a3": "KOR",
							"woe_id": -99,
							"adm0_a3_is": "KOR",
							"adm0_a3_us": "KOR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 5,
							"long_len": 17,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "-99",
						"arcs": [
							[
								-18,
								403,
								404,
								405
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Somaliland",
							"sov_a3": "SOL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Indeterminate",
							"admin": "Somaliland",
							"adm0_a3": "SOL",
							"geou_dif": 0,
							"geounit": "Somaliland",
							"gu_a3": "SOL",
							"su_dif": 0,
							"subunit": "Somaliland",
							"su_a3": "SOL",
							"brk_diff": 1,
							"name": "Somaliland",
							"name_long": "Somaliland",
							"brk_a3": "B30",
							"brk_name": "Somaliland",
							"brk_group": null,
							"abbrev": "Solnd.",
							"postal": "SL",
							"formal_en": "Republic of Somaliland",
							"formal_fr": null,
							"note_adm0": "Self admin.",
							"note_brk": "Self admin.; Claimed by Somalia",
							"name_sort": "Somaliland",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 5,
							"mapcolor13": 2,
							"pop_est": 3500000,
							"gdp_md_est": 12250,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "-99",
							"iso_a3": "-99",
							"iso_n3": "-99",
							"un_a3": "-099",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "SOM",
							"adm0_a3_us": "SOM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "KWT",
						"arcs": [
							[
								406,
								407,
								-362
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Kuwait",
							"sov_a3": "KWT",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Kuwait",
							"adm0_a3": "KWT",
							"geou_dif": 0,
							"geounit": "Kuwait",
							"gu_a3": "KWT",
							"su_dif": 0,
							"subunit": "Kuwait",
							"su_a3": "KWT",
							"brk_diff": 0,
							"name": "Kuwait",
							"name_long": "Kuwait",
							"brk_a3": "KWT",
							"brk_name": "Kuwait",
							"brk_group": null,
							"abbrev": "Kwt.",
							"postal": "KW",
							"formal_en": "State of Kuwait",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Kuwait",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 2,
							"pop_est": 2691158,
							"gdp_md_est": 149100,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "KW",
							"iso_a3": "KWT",
							"iso_n3": "414",
							"un_a3": "414",
							"wb_a2": "KW",
							"wb_a3": "KWT",
							"woe_id": -99,
							"adm0_a3_is": "KWT",
							"adm0_a3_us": "KWT",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LAO",
						"arcs": [
							[
								408,
								409,
								-172,
								410,
								-399
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Laos",
							"sov_a3": "LAO",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Laos",
							"adm0_a3": "LAO",
							"geou_dif": 0,
							"geounit": "Laos",
							"gu_a3": "LAO",
							"su_dif": 0,
							"subunit": "Laos",
							"su_a3": "LAO",
							"brk_diff": 0,
							"name": "Lao PDR",
							"name_long": "Lao PDR",
							"brk_a3": "LAO",
							"brk_name": "Laos",
							"brk_group": null,
							"abbrev": "Laos",
							"postal": "LA",
							"formal_en": "Lao People's Democratic Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Lao PDR",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 1,
							"mapcolor9": 1,
							"mapcolor13": 9,
							"pop_est": 6834942,
							"gdp_md_est": 13980,
							"pop_year": -99,
							"lastcensus": 2005,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LA",
							"iso_a3": "LAO",
							"iso_n3": "418",
							"un_a3": "418",
							"wb_a2": "LA",
							"wb_a3": "LAO",
							"woe_id": -99,
							"adm0_a3_is": "LAO",
							"adm0_a3_us": "LAO",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LBN",
						"arcs": [
							[
								-372,
								411,
								412
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Lebanon",
							"sov_a3": "LBN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Lebanon",
							"adm0_a3": "LBN",
							"geou_dif": 0,
							"geounit": "Lebanon",
							"gu_a3": "LBN",
							"su_dif": 0,
							"subunit": "Lebanon",
							"su_a3": "LBN",
							"brk_diff": 0,
							"name": "Lebanon",
							"name_long": "Lebanon",
							"brk_a3": "LBN",
							"brk_name": "Lebanon",
							"brk_group": null,
							"abbrev": "Leb.",
							"postal": "LB",
							"formal_en": "Lebanese Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Lebanon",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 4,
							"mapcolor9": 4,
							"mapcolor13": 12,
							"pop_est": 4017095,
							"gdp_md_est": 44060,
							"pop_year": -99,
							"lastcensus": 1970,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LB",
							"iso_a3": "LBN",
							"iso_n3": "422",
							"un_a3": "422",
							"wb_a2": "LB",
							"wb_a3": "LBN",
							"woe_id": -99,
							"adm0_a3_is": "LBN",
							"adm0_a3_us": "LBN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": 4,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LBR",
						"arcs": [
							[
								413,
								414,
								-295,
								-186
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Liberia",
							"sov_a3": "LBR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Liberia",
							"adm0_a3": "LBR",
							"geou_dif": 0,
							"geounit": "Liberia",
							"gu_a3": "LBR",
							"su_dif": 0,
							"subunit": "Liberia",
							"su_a3": "LBR",
							"brk_diff": 0,
							"name": "Liberia",
							"name_long": "Liberia",
							"brk_a3": "LBR",
							"brk_name": "Liberia",
							"brk_group": null,
							"abbrev": "Liberia",
							"postal": "LR",
							"formal_en": "Republic of Liberia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Liberia",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 3,
							"mapcolor9": 4,
							"mapcolor13": 9,
							"pop_est": 3441790,
							"gdp_md_est": 1526,
							"pop_year": -99,
							"lastcensus": 2008,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LR",
							"iso_a3": "LBR",
							"iso_n3": "430",
							"un_a3": "430",
							"wb_a2": "LR",
							"wb_a3": "LBR",
							"woe_id": -99,
							"adm0_a3_is": "LBR",
							"adm0_a3_us": "LBR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 7,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LBY",
						"arcs": [
							[
								415,
								-245,
								416,
								417,
								-250,
								418,
								419
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Libya",
							"sov_a3": "LBY",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Libya",
							"adm0_a3": "LBY",
							"geou_dif": 0,
							"geounit": "Libya",
							"gu_a3": "LBY",
							"su_dif": 0,
							"subunit": "Libya",
							"su_a3": "LBY",
							"brk_diff": 0,
							"name": "Libya",
							"name_long": "Libya",
							"brk_a3": "LBY",
							"brk_name": "Libya",
							"brk_group": null,
							"abbrev": "Libya",
							"postal": "LY",
							"formal_en": "Libya",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Libya",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 11,
							"pop_est": 6310434,
							"gdp_md_est": 88830,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LY",
							"iso_a3": "LBY",
							"iso_n3": "434",
							"un_a3": "434",
							"wb_a2": "LY",
							"wb_a3": "LBY",
							"woe_id": -99,
							"adm0_a3_is": "LBY",
							"adm0_a3_us": "LBY",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Northern Africa",
							"region_wb": "Middle East & North Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LKA",
						"arcs": [
							[
								420
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Sri Lanka",
							"sov_a3": "LKA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Sri Lanka",
							"adm0_a3": "LKA",
							"geou_dif": 0,
							"geounit": "Sri Lanka",
							"gu_a3": "LKA",
							"su_dif": 0,
							"subunit": "Sri Lanka",
							"su_a3": "LKA",
							"brk_diff": 0,
							"name": "Sri Lanka",
							"name_long": "Sri Lanka",
							"brk_a3": "LKA",
							"brk_name": "Sri Lanka",
							"brk_group": null,
							"abbrev": "Sri L.",
							"postal": "LK",
							"formal_en": "Democratic Socialist Republic of Sri Lanka",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Sri Lanka",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 5,
							"mapcolor9": 4,
							"mapcolor13": 9,
							"pop_est": 21324791,
							"gdp_md_est": 91870,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LK",
							"iso_a3": "LKA",
							"iso_n3": "144",
							"un_a3": "144",
							"wb_a2": "LK",
							"wb_a3": "LKA",
							"woe_id": -99,
							"adm0_a3_is": "LKA",
							"adm0_a3_us": "LKA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "South Asia",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LSO",
						"arcs": [
							[
								421
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Lesotho",
							"sov_a3": "LSO",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Lesotho",
							"adm0_a3": "LSO",
							"geou_dif": 0,
							"geounit": "Lesotho",
							"gu_a3": "LSO",
							"su_dif": 0,
							"subunit": "Lesotho",
							"su_a3": "LSO",
							"brk_diff": 0,
							"name": "Lesotho",
							"name_long": "Lesotho",
							"brk_a3": "LSO",
							"brk_name": "Lesotho",
							"brk_group": null,
							"abbrev": "Les.",
							"postal": "LS",
							"formal_en": "Kingdom of Lesotho",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Lesotho",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 5,
							"mapcolor9": 2,
							"mapcolor13": 8,
							"pop_est": 2130819,
							"gdp_md_est": 3293,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LS",
							"iso_a3": "LSO",
							"iso_n3": "426",
							"un_a3": "426",
							"wb_a2": "LS",
							"wb_a3": "LSO",
							"woe_id": -99,
							"adm0_a3_is": "LSO",
							"adm0_a3_us": "LSO",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Southern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LTU",
						"arcs": [
							[
								422,
								423,
								424,
								-93,
								425
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Lithuania",
							"sov_a3": "LTU",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Lithuania",
							"adm0_a3": "LTU",
							"geou_dif": 0,
							"geounit": "Lithuania",
							"gu_a3": "LTU",
							"su_dif": 0,
							"subunit": "Lithuania",
							"su_a3": "LTU",
							"brk_diff": 0,
							"name": "Lithuania",
							"name_long": "Lithuania",
							"brk_a3": "LTU",
							"brk_name": "Lithuania",
							"brk_group": null,
							"abbrev": "Lith.",
							"postal": "LT",
							"formal_en": "Republic of Lithuania",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Lithuania",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 3,
							"mapcolor9": 3,
							"mapcolor13": 9,
							"pop_est": 3555179,
							"gdp_md_est": 63330,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LT",
							"iso_a3": "LTU",
							"iso_n3": "440",
							"un_a3": "440",
							"wb_a2": "LT",
							"wb_a3": "LTU",
							"woe_id": -99,
							"adm0_a3_is": "LTU",
							"adm0_a3_us": "LTU",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LUX",
						"arcs": [
							[
								-226,
								-281,
								-65
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Luxembourg",
							"sov_a3": "LUX",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Luxembourg",
							"adm0_a3": "LUX",
							"geou_dif": 0,
							"geounit": "Luxembourg",
							"gu_a3": "LUX",
							"su_dif": 0,
							"subunit": "Luxembourg",
							"su_a3": "LUX",
							"brk_diff": 0,
							"name": "Luxembourg",
							"name_long": "Luxembourg",
							"brk_a3": "LUX",
							"brk_name": "Luxembourg",
							"brk_group": null,
							"abbrev": "Lux.",
							"postal": "L",
							"formal_en": "Grand Duchy of Luxembourg",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Luxembourg",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 7,
							"mapcolor9": 3,
							"mapcolor13": 7,
							"pop_est": 491775,
							"gdp_md_est": 39370,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LU",
							"iso_a3": "LUX",
							"iso_n3": "442",
							"un_a3": "442",
							"wb_a2": "LU",
							"wb_a3": "LUX",
							"woe_id": -99,
							"adm0_a3_is": "LUX",
							"adm0_a3_us": "LUX",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Western Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": 5,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "LVA",
						"arcs": [
							[
								426,
								-262,
								427,
								-94,
								-425
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Latvia",
							"sov_a3": "LVA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Latvia",
							"adm0_a3": "LVA",
							"geou_dif": 0,
							"geounit": "Latvia",
							"gu_a3": "LVA",
							"su_dif": 0,
							"subunit": "Latvia",
							"su_a3": "LVA",
							"brk_diff": 0,
							"name": "Latvia",
							"name_long": "Latvia",
							"brk_a3": "LVA",
							"brk_name": "Latvia",
							"brk_group": null,
							"abbrev": "Lat.",
							"postal": "LV",
							"formal_en": "Republic of Latvia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Latvia",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 7,
							"mapcolor9": 6,
							"mapcolor13": 13,
							"pop_est": 2231503,
							"gdp_md_est": 38860,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "LV",
							"iso_a3": "LVA",
							"iso_n3": "428",
							"un_a3": "428",
							"wb_a2": "LV",
							"wb_a3": "LVA",
							"woe_id": -99,
							"adm0_a3_is": "LVA",
							"adm0_a3_us": "LVA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MAR",
						"arcs": [
							[
								-242,
								428,
								429
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Morocco",
							"sov_a3": "MAR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Morocco",
							"adm0_a3": "MAR",
							"geou_dif": 0,
							"geounit": "Morocco",
							"gu_a3": "MAR",
							"su_dif": 0,
							"subunit": "Morocco",
							"su_a3": "MAR",
							"brk_diff": 0,
							"name": "Morocco",
							"name_long": "Morocco",
							"brk_a3": "MAR",
							"brk_name": "Morocco",
							"brk_group": null,
							"abbrev": "Mor.",
							"postal": "MA",
							"formal_en": "Kingdom of Morocco",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Morocco",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 3,
							"mapcolor13": 9,
							"pop_est": 34859364,
							"gdp_md_est": 136600,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MA",
							"iso_a3": "MAR",
							"iso_n3": "504",
							"un_a3": "504",
							"wb_a2": "MA",
							"wb_a3": "MAR",
							"woe_id": -99,
							"adm0_a3_is": "MAR",
							"adm0_a3_us": "MAR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Northern Africa",
							"region_wb": "Middle East & North Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MDA",
						"arcs": [
							[
								430,
								431
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Moldova",
							"sov_a3": "MDA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Moldova",
							"adm0_a3": "MDA",
							"geou_dif": 0,
							"geounit": "Moldova",
							"gu_a3": "MDA",
							"su_dif": 0,
							"subunit": "Moldova",
							"su_a3": "MDA",
							"brk_diff": 0,
							"name": "Moldova",
							"name_long": "Moldova",
							"brk_a3": "MDA",
							"brk_name": "Moldova",
							"brk_group": null,
							"abbrev": "Mda.",
							"postal": "MD",
							"formal_en": "Republic of Moldova",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Moldova",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 5,
							"mapcolor9": 4,
							"mapcolor13": 12,
							"pop_est": 4320748,
							"gdp_md_est": 10670,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MD",
							"iso_a3": "MDA",
							"iso_n3": "498",
							"un_a3": "498",
							"wb_a2": "MD",
							"wb_a3": "MDA",
							"woe_id": -99,
							"adm0_a3_is": "MDA",
							"adm0_a3_us": "MDA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MDG",
						"arcs": [
							[
								432
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Madagascar",
							"sov_a3": "MDG",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Madagascar",
							"adm0_a3": "MDG",
							"geou_dif": 0,
							"geounit": "Madagascar",
							"gu_a3": "MDG",
							"su_dif": 0,
							"subunit": "Madagascar",
							"su_a3": "MDG",
							"brk_diff": 0,
							"name": "Madagascar",
							"name_long": "Madagascar",
							"brk_a3": "MDG",
							"brk_name": "Madagascar",
							"brk_group": null,
							"abbrev": "Mad.",
							"postal": "MG",
							"formal_en": "Republic of Madagascar",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Madagascar",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 5,
							"mapcolor9": 2,
							"mapcolor13": 3,
							"pop_est": 20653556,
							"gdp_md_est": 20130,
							"pop_year": -99,
							"lastcensus": 1993,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MG",
							"iso_a3": "MDG",
							"iso_n3": "450",
							"un_a3": "450",
							"wb_a2": "MG",
							"wb_a3": "MDG",
							"woe_id": -99,
							"adm0_a3_is": "MDG",
							"adm0_a3_us": "MDG",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MEX",
						"arcs": [
							[
								433,
								-98,
								-312,
								434,
								435
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Mexico",
							"sov_a3": "MEX",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Mexico",
							"adm0_a3": "MEX",
							"geou_dif": 0,
							"geounit": "Mexico",
							"gu_a3": "MEX",
							"su_dif": 0,
							"subunit": "Mexico",
							"su_a3": "MEX",
							"brk_diff": 0,
							"name": "Mexico",
							"name_long": "Mexico",
							"brk_a3": "MEX",
							"brk_name": "Mexico",
							"brk_group": null,
							"abbrev": "Mex.",
							"postal": "MX",
							"formal_en": "United Mexican States",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Mexico",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 1,
							"mapcolor9": 7,
							"mapcolor13": 3,
							"pop_est": 111211789,
							"gdp_md_est": 1563000,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "4. Emerging region: MIKT",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MX",
							"iso_a3": "MEX",
							"iso_n3": "484",
							"un_a3": "484",
							"wb_a2": "MX",
							"wb_a3": "MEX",
							"woe_id": -99,
							"adm0_a3_is": "MEX",
							"adm0_a3_us": "MEX",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MKD",
						"arcs": [
							[
								-406,
								436,
								-85,
								-308,
								-14
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Macedonia",
							"sov_a3": "MKD",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Macedonia",
							"adm0_a3": "MKD",
							"geou_dif": 0,
							"geounit": "Macedonia",
							"gu_a3": "MKD",
							"su_dif": 0,
							"subunit": "Macedonia",
							"su_a3": "MKD",
							"brk_diff": 0,
							"name": "Macedonia",
							"name_long": "Macedonia",
							"brk_a3": "MKD",
							"brk_name": "Macedonia",
							"brk_group": null,
							"abbrev": "Mkd.",
							"postal": "MK",
							"formal_en": "Former Yugoslav Republic of Macedonia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Macedonia, FYR",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 3,
							"mapcolor9": 7,
							"mapcolor13": 3,
							"pop_est": 2066718,
							"gdp_md_est": 18780,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MK",
							"iso_a3": "MKD",
							"iso_n3": "807",
							"un_a3": "807",
							"wb_a2": "MK",
							"wb_a3": "MKD",
							"woe_id": -99,
							"adm0_a3_is": "MKD",
							"adm0_a3_us": "MKD",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MLI",
						"arcs": [
							[
								437,
								-239,
								438,
								-74,
								-188,
								-300,
								439
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Mali",
							"sov_a3": "MLI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Mali",
							"adm0_a3": "MLI",
							"geou_dif": 0,
							"geounit": "Mali",
							"gu_a3": "MLI",
							"su_dif": 0,
							"subunit": "Mali",
							"su_a3": "MLI",
							"brk_diff": 0,
							"name": "Mali",
							"name_long": "Mali",
							"brk_a3": "MLI",
							"brk_name": "Mali",
							"brk_group": null,
							"abbrev": "Mali",
							"postal": "ML",
							"formal_en": "Republic of Mali",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Mali",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 7,
							"pop_est": 12666987,
							"gdp_md_est": 14590,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ML",
							"iso_a3": "MLI",
							"iso_n3": "466",
							"un_a3": "466",
							"wb_a2": "ML",
							"wb_a3": "MLI",
							"woe_id": -99,
							"adm0_a3_is": "MLI",
							"adm0_a3_us": "MLI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MMR",
						"arcs": [
							[
								440,
								-78,
								-351,
								-173,
								-410,
								441
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Myanmar",
							"sov_a3": "MMR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Myanmar",
							"adm0_a3": "MMR",
							"geou_dif": 0,
							"geounit": "Myanmar",
							"gu_a3": "MMR",
							"su_dif": 0,
							"subunit": "Myanmar",
							"su_a3": "MMR",
							"brk_diff": 0,
							"name": "Myanmar",
							"name_long": "Myanmar",
							"brk_a3": "MMR",
							"brk_name": "Myanmar",
							"brk_group": null,
							"abbrev": "Myan.",
							"postal": "MM",
							"formal_en": "Republic of the Union of Myanmar",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Myanmar",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 5,
							"mapcolor13": 13,
							"pop_est": 48137741,
							"gdp_md_est": 55130,
							"pop_year": -99,
							"lastcensus": 1983,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MM",
							"iso_a3": "MMR",
							"iso_n3": "104",
							"un_a3": "104",
							"wb_a2": "MM",
							"wb_a3": "MMR",
							"woe_id": -99,
							"adm0_a3_is": "MMR",
							"adm0_a3_us": "MMR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MNE",
						"arcs": [
							[
								442,
								-324,
								-91,
								443,
								-404,
								-17
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Montenegro",
							"sov_a3": "MNE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Montenegro",
							"adm0_a3": "MNE",
							"geou_dif": 0,
							"geounit": "Montenegro",
							"gu_a3": "MNE",
							"su_dif": 0,
							"subunit": "Montenegro",
							"su_a3": "MNE",
							"brk_diff": 0,
							"name": "Montenegro",
							"name_long": "Montenegro",
							"brk_a3": "MNE",
							"brk_name": "Montenegro",
							"brk_group": null,
							"abbrev": "Mont.",
							"postal": "ME",
							"formal_en": "Montenegro",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Montenegro",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 1,
							"mapcolor9": 4,
							"mapcolor13": 5,
							"pop_est": 672180,
							"gdp_md_est": 6816,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ME",
							"iso_a3": "MNE",
							"iso_n3": "499",
							"un_a3": "499",
							"wb_a2": "ME",
							"wb_a3": "MNE",
							"woe_id": -99,
							"adm0_a3_is": "MNE",
							"adm0_a3_us": "MNE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MNG",
						"arcs": [
							[
								444,
								-183
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Mongolia",
							"sov_a3": "MNG",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Mongolia",
							"adm0_a3": "MNG",
							"geou_dif": 0,
							"geounit": "Mongolia",
							"gu_a3": "MNG",
							"su_dif": 0,
							"subunit": "Mongolia",
							"su_a3": "MNG",
							"brk_diff": 0,
							"name": "Mongolia",
							"name_long": "Mongolia",
							"brk_a3": "MNG",
							"brk_name": "Mongolia",
							"brk_group": null,
							"abbrev": "Mong.",
							"postal": "MN",
							"formal_en": "Mongolia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Mongolia",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 5,
							"mapcolor9": 5,
							"mapcolor13": 6,
							"pop_est": 3041142,
							"gdp_md_est": 9476,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MN",
							"iso_a3": "MNG",
							"iso_n3": "496",
							"un_a3": "496",
							"wb_a2": "MN",
							"wb_a3": "MNG",
							"woe_id": -99,
							"adm0_a3_is": "MNG",
							"adm0_a3_us": "MNG",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MOZ",
						"arcs": [
							[
								445,
								446,
								447,
								448,
								449,
								450,
								451,
								452
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Mozambique",
							"sov_a3": "MOZ",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Mozambique",
							"adm0_a3": "MOZ",
							"geou_dif": 0,
							"geounit": "Mozambique",
							"gu_a3": "MOZ",
							"su_dif": 0,
							"subunit": "Mozambique",
							"su_a3": "MOZ",
							"brk_diff": 0,
							"name": "Mozambique",
							"name_long": "Mozambique",
							"brk_a3": "MOZ",
							"brk_name": "Mozambique",
							"brk_group": null,
							"abbrev": "Moz.",
							"postal": "MZ",
							"formal_en": "Republic of Mozambique",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Mozambique",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 2,
							"mapcolor9": 1,
							"mapcolor13": 4,
							"pop_est": 21669278,
							"gdp_md_est": 18940,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MZ",
							"iso_a3": "MOZ",
							"iso_n3": "508",
							"un_a3": "508",
							"wb_a2": "MZ",
							"wb_a3": "MOZ",
							"woe_id": -99,
							"adm0_a3_is": "MOZ",
							"adm0_a3_us": "MOZ",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MRT",
						"arcs": [
							[
								453,
								454,
								455,
								-240,
								-438
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Mauritania",
							"sov_a3": "MRT",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Mauritania",
							"adm0_a3": "MRT",
							"geou_dif": 0,
							"geounit": "Mauritania",
							"gu_a3": "MRT",
							"su_dif": 0,
							"subunit": "Mauritania",
							"su_a3": "MRT",
							"brk_diff": 0,
							"name": "Mauritania",
							"name_long": "Mauritania",
							"brk_a3": "MRT",
							"brk_name": "Mauritania",
							"brk_group": null,
							"abbrev": "Mrt.",
							"postal": "MR",
							"formal_en": "Islamic Republic of Mauritania",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Mauritania",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 3,
							"mapcolor9": 2,
							"mapcolor13": 1,
							"pop_est": 3129486,
							"gdp_md_est": 6308,
							"pop_year": -99,
							"lastcensus": 2000,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MR",
							"iso_a3": "MRT",
							"iso_n3": "478",
							"un_a3": "478",
							"wb_a2": "MR",
							"wb_a3": "MRT",
							"woe_id": -99,
							"adm0_a3_is": "MRT",
							"adm0_a3_us": "MRT",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "MWI",
						"arcs": [
							[
								-453,
								456,
								457
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Malawi",
							"sov_a3": "MWI",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Malawi",
							"adm0_a3": "MWI",
							"geou_dif": 0,
							"geounit": "Malawi",
							"gu_a3": "MWI",
							"su_dif": 0,
							"subunit": "Malawi",
							"su_a3": "MWI",
							"brk_diff": 0,
							"name": "Malawi",
							"name_long": "Malawi",
							"brk_a3": "MWI",
							"brk_name": "Malawi",
							"brk_group": null,
							"abbrev": "Mal.",
							"postal": "MW",
							"formal_en": "Republic of Malawi",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Malawi",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 3,
							"mapcolor9": 4,
							"mapcolor13": 5,
							"pop_est": 14268711,
							"gdp_md_est": 11810,
							"pop_year": -99,
							"lastcensus": 2008,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MW",
							"iso_a3": "MWI",
							"iso_n3": "454",
							"un_a3": "454",
							"wb_a2": "MW",
							"wb_a3": "MWI",
							"woe_id": -99,
							"adm0_a3_is": "MWI",
							"adm0_a3_us": "MWI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "MYS",
						"arcs": [
							[
								[
									458,
									459
								]
							],
							[
								[
									-347,
									460,
									-115,
									461
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Malaysia",
							"sov_a3": "MYS",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Malaysia",
							"adm0_a3": "MYS",
							"geou_dif": 0,
							"geounit": "Malaysia",
							"gu_a3": "MYS",
							"su_dif": 0,
							"subunit": "Malaysia",
							"su_a3": "MYS",
							"brk_diff": 0,
							"name": "Malaysia",
							"name_long": "Malaysia",
							"brk_a3": "MYS",
							"brk_name": "Malaysia",
							"brk_group": null,
							"abbrev": "Malay.",
							"postal": "MY",
							"formal_en": "Malaysia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Malaysia",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 4,
							"mapcolor9": 3,
							"mapcolor13": 6,
							"pop_est": 25715819,
							"gdp_md_est": 384300,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "MY",
							"iso_a3": "MYS",
							"iso_n3": "458",
							"un_a3": "458",
							"wb_a2": "MY",
							"wb_a3": "MYS",
							"woe_id": -99,
							"adm0_a3_is": "MYS",
							"adm0_a3_us": "MYS",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "NAM",
						"arcs": [
							[
								462,
								-8,
								463,
								-119,
								464
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Namibia",
							"sov_a3": "NAM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Namibia",
							"adm0_a3": "NAM",
							"geou_dif": 0,
							"geounit": "Namibia",
							"gu_a3": "NAM",
							"su_dif": 0,
							"subunit": "Namibia",
							"su_a3": "NAM",
							"brk_diff": 0,
							"name": "Namibia",
							"name_long": "Namibia",
							"brk_a3": "NAM",
							"brk_name": "Namibia",
							"brk_group": null,
							"abbrev": "Nam.",
							"postal": "NA",
							"formal_en": "Republic of Namibia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Namibia",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 1,
							"mapcolor9": 1,
							"mapcolor13": 7,
							"pop_est": 2108665,
							"gdp_md_est": 13250,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NA",
							"iso_a3": "NAM",
							"iso_n3": "516",
							"un_a3": "516",
							"wb_a2": "NA",
							"wb_a3": "NAM",
							"woe_id": -99,
							"adm0_a3_is": "NAM",
							"adm0_a3_us": "NAM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Southern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "NCL",
						"arcs": [
							[
								465
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "France",
							"sov_a3": "FR1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Dependency",
							"admin": "New Caledonia",
							"adm0_a3": "NCL",
							"geou_dif": 0,
							"geounit": "New Caledonia",
							"gu_a3": "NCL",
							"su_dif": 0,
							"subunit": "New Caledonia",
							"su_a3": "NCL",
							"brk_diff": 0,
							"name": "New Caledonia",
							"name_long": "New Caledonia",
							"brk_a3": "NCL",
							"brk_name": "New Caledonia",
							"brk_group": null,
							"abbrev": "New C.",
							"postal": "NC",
							"formal_en": "New Caledonia",
							"formal_fr": "Nouvelle-Calédonie",
							"note_adm0": "Fr.",
							"note_brk": null,
							"name_sort": "New Caledonia",
							"name_alt": null,
							"mapcolor7": 7,
							"mapcolor8": 5,
							"mapcolor9": 9,
							"mapcolor13": 11,
							"pop_est": 227436,
							"gdp_md_est": 3158,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NC",
							"iso_a3": "NCL",
							"iso_n3": "540",
							"un_a3": "540",
							"wb_a2": "NC",
							"wb_a3": "NCL",
							"woe_id": -99,
							"adm0_a3_is": "NCL",
							"adm0_a3_us": "NCL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Oceania",
							"region_un": "Oceania",
							"subregion": "Melanesia",
							"region_wb": "East Asia & Pacific",
							"name_len": 13,
							"long_len": 13,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": -99
						}
					},
					{
						"type": "Polygon",
						"id": "NER",
						"arcs": [
							[
								-75,
								-439,
								-238,
								-416,
								466,
								-194,
								467,
								-71
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Niger",
							"sov_a3": "NER",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Niger",
							"adm0_a3": "NER",
							"geou_dif": 0,
							"geounit": "Niger",
							"gu_a3": "NER",
							"su_dif": 0,
							"subunit": "Niger",
							"su_a3": "NER",
							"brk_diff": 0,
							"name": "Niger",
							"name_long": "Niger",
							"brk_a3": "NER",
							"brk_name": "Niger",
							"brk_group": null,
							"abbrev": "Niger",
							"postal": "NE",
							"formal_en": "Republic of Niger",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Niger",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 5,
							"mapcolor9": 3,
							"mapcolor13": 13,
							"pop_est": 15306252,
							"gdp_md_est": 10040,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NE",
							"iso_a3": "NER",
							"iso_n3": "562",
							"un_a3": "562",
							"wb_a2": "NE",
							"wb_a3": "NER",
							"woe_id": -99,
							"adm0_a3_is": "NER",
							"adm0_a3_us": "NER",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "NGA",
						"arcs": [
							[
								468,
								-72,
								-468,
								-193
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Nigeria",
							"sov_a3": "NGA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Nigeria",
							"adm0_a3": "NGA",
							"geou_dif": 0,
							"geounit": "Nigeria",
							"gu_a3": "NGA",
							"su_dif": 0,
							"subunit": "Nigeria",
							"su_a3": "NGA",
							"brk_diff": 0,
							"name": "Nigeria",
							"name_long": "Nigeria",
							"brk_a3": "NGA",
							"brk_name": "Nigeria",
							"brk_group": null,
							"abbrev": "Nigeria",
							"postal": "NG",
							"formal_en": "Federal Republic of Nigeria",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Nigeria",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 5,
							"mapcolor13": 2,
							"pop_est": 149229090,
							"gdp_md_est": 335400,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NG",
							"iso_a3": "NGA",
							"iso_n3": "566",
							"un_a3": "566",
							"wb_a2": "NG",
							"wb_a3": "NGA",
							"woe_id": -99,
							"adm0_a3_is": "NGA",
							"adm0_a3_us": "NGA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 7,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "NIC",
						"arcs": [
							[
								469,
								-322,
								470,
								-213
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Nicaragua",
							"sov_a3": "NIC",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Nicaragua",
							"adm0_a3": "NIC",
							"geou_dif": 0,
							"geounit": "Nicaragua",
							"gu_a3": "NIC",
							"su_dif": 0,
							"subunit": "Nicaragua",
							"su_a3": "NIC",
							"brk_diff": 0,
							"name": "Nicaragua",
							"name_long": "Nicaragua",
							"brk_a3": "NIC",
							"brk_name": "Nicaragua",
							"brk_group": null,
							"abbrev": "Nic.",
							"postal": "NI",
							"formal_en": "Republic of Nicaragua",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Nicaragua",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 9,
							"pop_est": 5891199,
							"gdp_md_est": 16790,
							"pop_year": -99,
							"lastcensus": 2005,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NI",
							"iso_a3": "NIC",
							"iso_n3": "558",
							"un_a3": "558",
							"wb_a2": "NI",
							"wb_a3": "NIC",
							"woe_id": -99,
							"adm0_a3_is": "NIC",
							"adm0_a3_us": "NIC",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "NLD",
						"arcs": [
							[
								-227,
								-63,
								471
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Netherlands",
							"sov_a3": "NL1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "Netherlands",
							"adm0_a3": "NLD",
							"geou_dif": 0,
							"geounit": "Netherlands",
							"gu_a3": "NLD",
							"su_dif": 0,
							"subunit": "Netherlands",
							"su_a3": "NLD",
							"brk_diff": 0,
							"name": "Netherlands",
							"name_long": "Netherlands",
							"brk_a3": "NLD",
							"brk_name": "Netherlands",
							"brk_group": null,
							"abbrev": "Neth.",
							"postal": "NL",
							"formal_en": "Kingdom of the Netherlands",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Netherlands",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 9,
							"pop_est": 16715999,
							"gdp_md_est": 672000,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NL",
							"iso_a3": "NLD",
							"iso_n3": "528",
							"un_a3": "528",
							"wb_a2": "NL",
							"wb_a3": "NLD",
							"woe_id": -99,
							"adm0_a3_is": "NLD",
							"adm0_a3_us": "NLD",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Western Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "NOR",
						"arcs": [
							[
								[
									472,
									-272,
									473,
									474
								]
							],
							[
								[
									475
								]
							],
							[
								[
									476
								]
							],
							[
								[
									477
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Norway",
							"sov_a3": "NOR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Norway",
							"adm0_a3": "NOR",
							"geou_dif": 0,
							"geounit": "Norway",
							"gu_a3": "NOR",
							"su_dif": 0,
							"subunit": "Norway",
							"su_a3": "NOR",
							"brk_diff": 0,
							"name": "Norway",
							"name_long": "Norway",
							"brk_a3": "NOR",
							"brk_name": "Norway",
							"brk_group": null,
							"abbrev": "Nor.",
							"postal": "N",
							"formal_en": "Kingdom of Norway",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Norway",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 3,
							"mapcolor9": 8,
							"mapcolor13": 12,
							"pop_est": 4676305,
							"gdp_md_est": 276400,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NO",
							"iso_a3": "NOR",
							"iso_n3": "578",
							"un_a3": "578",
							"wb_a2": "NO",
							"wb_a3": "NOR",
							"woe_id": -99,
							"adm0_a3_is": "NOR",
							"adm0_a3_us": "NOR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "NPL",
						"arcs": [
							[
								-350,
								-176
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Nepal",
							"sov_a3": "NPL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Nepal",
							"adm0_a3": "NPL",
							"geou_dif": 0,
							"geounit": "Nepal",
							"gu_a3": "NPL",
							"su_dif": 0,
							"subunit": "Nepal",
							"su_a3": "NPL",
							"brk_diff": 0,
							"name": "Nepal",
							"name_long": "Nepal",
							"brk_a3": "NPL",
							"brk_name": "Nepal",
							"brk_group": null,
							"abbrev": "Nepal",
							"postal": "NP",
							"formal_en": "Nepal",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Nepal",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 3,
							"mapcolor13": 12,
							"pop_est": 28563377,
							"gdp_md_est": 31080,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NP",
							"iso_a3": "NPL",
							"iso_n3": "524",
							"un_a3": "524",
							"wb_a2": "NP",
							"wb_a3": "NPL",
							"woe_id": -99,
							"adm0_a3_is": "NPL",
							"adm0_a3_us": "NPL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "South Asia",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "NZL",
						"arcs": [
							[
								[
									478
								]
							],
							[
								[
									479
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "New Zealand",
							"sov_a3": "NZ1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "New Zealand",
							"adm0_a3": "NZL",
							"geou_dif": 0,
							"geounit": "New Zealand",
							"gu_a3": "NZL",
							"su_dif": 0,
							"subunit": "New Zealand",
							"su_a3": "NZL",
							"brk_diff": 0,
							"name": "New Zealand",
							"name_long": "New Zealand",
							"brk_a3": "NZL",
							"brk_name": "New Zealand",
							"brk_group": null,
							"abbrev": "N.Z.",
							"postal": "NZ",
							"formal_en": "New Zealand",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "New Zealand",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 3,
							"mapcolor9": 4,
							"mapcolor13": 4,
							"pop_est": 4213418,
							"gdp_md_est": 116700,
							"pop_year": -99,
							"lastcensus": 2006,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "NZ",
							"iso_a3": "NZL",
							"iso_n3": "554",
							"un_a3": "554",
							"wb_a2": "NZ",
							"wb_a3": "NZL",
							"woe_id": -99,
							"adm0_a3_is": "NZL",
							"adm0_a3_us": "NZL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Oceania",
							"region_un": "Oceania",
							"subregion": "Australia and New Zealand",
							"region_wb": "East Asia & Pacific",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "OMN",
						"arcs": [
							[
								[
									480,
									481,
									-22,
									482
								]
							],
							[
								[
									-20,
									483
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Oman",
							"sov_a3": "OMN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Oman",
							"adm0_a3": "OMN",
							"geou_dif": 0,
							"geounit": "Oman",
							"gu_a3": "OMN",
							"su_dif": 0,
							"subunit": "Oman",
							"su_a3": "OMN",
							"brk_diff": 0,
							"name": "Oman",
							"name_long": "Oman",
							"brk_a3": "OMN",
							"brk_name": "Oman",
							"brk_group": null,
							"abbrev": "Oman",
							"postal": "OM",
							"formal_en": "Sultanate of Oman",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Oman",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 6,
							"pop_est": 3418085,
							"gdp_md_est": 66980,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "OM",
							"iso_a3": "OMN",
							"iso_n3": "512",
							"un_a3": "512",
							"wb_a2": "OM",
							"wb_a3": "OMN",
							"woe_id": -99,
							"adm0_a3_is": "OMN",
							"adm0_a3_us": "OMN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "PAK",
						"arcs": [
							[
								-178,
								-353,
								484,
								-356,
								-5
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Pakistan",
							"sov_a3": "PAK",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Pakistan",
							"adm0_a3": "PAK",
							"geou_dif": 0,
							"geounit": "Pakistan",
							"gu_a3": "PAK",
							"su_dif": 0,
							"subunit": "Pakistan",
							"su_a3": "PAK",
							"brk_diff": 0,
							"name": "Pakistan",
							"name_long": "Pakistan",
							"brk_a3": "PAK",
							"brk_name": "Pakistan",
							"brk_group": null,
							"abbrev": "Pak.",
							"postal": "PK",
							"formal_en": "Islamic Republic of Pakistan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Pakistan",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 3,
							"mapcolor13": 11,
							"pop_est": 176242949,
							"gdp_md_est": 427300,
							"pop_year": -99,
							"lastcensus": 1998,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PK",
							"iso_a3": "PAK",
							"iso_n3": "586",
							"un_a3": "586",
							"wb_a2": "PK",
							"wb_a3": "PAK",
							"woe_id": -99,
							"adm0_a3_is": "PAK",
							"adm0_a3_us": "PAK",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Southern Asia",
							"region_wb": "South Asia",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "PAN",
						"arcs": [
							[
								485,
								-215,
								486,
								-208
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Panama",
							"sov_a3": "PAN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Panama",
							"adm0_a3": "PAN",
							"geou_dif": 0,
							"geounit": "Panama",
							"gu_a3": "PAN",
							"su_dif": 0,
							"subunit": "Panama",
							"su_a3": "PAN",
							"brk_diff": 0,
							"name": "Panama",
							"name_long": "Panama",
							"brk_a3": "PAN",
							"brk_name": "Panama",
							"brk_group": null,
							"abbrev": "Pan.",
							"postal": "PA",
							"formal_en": "Republic of Panama",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Panama",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 4,
							"mapcolor9": 6,
							"mapcolor13": 3,
							"pop_est": 3360474,
							"gdp_md_est": 38830,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PA",
							"iso_a3": "PAN",
							"iso_n3": "591",
							"un_a3": "591",
							"wb_a2": "PA",
							"wb_a3": "PAN",
							"woe_id": -99,
							"adm0_a3_is": "PAN",
							"adm0_a3_us": "PAN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "PER",
						"arcs": [
							[
								-167,
								487,
								-247,
								-211,
								-106,
								-102
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Peru",
							"sov_a3": "PER",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Peru",
							"adm0_a3": "PER",
							"geou_dif": 0,
							"geounit": "Peru",
							"gu_a3": "PER",
							"su_dif": 0,
							"subunit": "Peru",
							"su_a3": "PER",
							"brk_diff": 0,
							"name": "Peru",
							"name_long": "Peru",
							"brk_a3": "PER",
							"brk_name": "Peru",
							"brk_group": null,
							"abbrev": "Peru",
							"postal": "PE",
							"formal_en": "Republic of Peru",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Peru",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 4,
							"mapcolor9": 4,
							"mapcolor13": 11,
							"pop_est": 29546963,
							"gdp_md_est": 247300,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PE",
							"iso_a3": "PER",
							"iso_n3": "604",
							"un_a3": "604",
							"wb_a2": "PE",
							"wb_a3": "PER",
							"woe_id": -99,
							"adm0_a3_is": "PER",
							"adm0_a3_us": "PER",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "PHL",
						"arcs": [
							[
								[
									488
								]
							],
							[
								[
									489
								]
							],
							[
								[
									490
								]
							],
							[
								[
									491
								]
							],
							[
								[
									492
								]
							],
							[
								[
									493
								]
							],
							[
								[
									494
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Philippines",
							"sov_a3": "PHL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Philippines",
							"adm0_a3": "PHL",
							"geou_dif": 0,
							"geounit": "Philippines",
							"gu_a3": "PHL",
							"su_dif": 0,
							"subunit": "Philippines",
							"su_a3": "PHL",
							"brk_diff": 0,
							"name": "Philippines",
							"name_long": "Philippines",
							"brk_a3": "PHL",
							"brk_name": "Philippines",
							"brk_group": null,
							"abbrev": "Phil.",
							"postal": "PH",
							"formal_en": "Republic of the Philippines",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Philippines",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 8,
							"pop_est": 97976603,
							"gdp_md_est": 317500,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PH",
							"iso_a3": "PHL",
							"iso_n3": "608",
							"un_a3": "608",
							"wb_a2": "PH",
							"wb_a3": "PHL",
							"woe_id": -99,
							"adm0_a3_is": "PHL",
							"adm0_a3_us": "PHL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "PNG",
						"arcs": [
							[
								[
									495
								]
							],
							[
								[
									496
								]
							],
							[
								[
									-343,
									497
								]
							],
							[
								[
									498
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Papua New Guinea",
							"sov_a3": "PNG",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Papua New Guinea",
							"adm0_a3": "PNG",
							"geou_dif": 0,
							"geounit": "Papua New Guinea",
							"gu_a3": "PNG",
							"su_dif": 1,
							"subunit": "Papua New Guinea",
							"su_a3": "PN1",
							"brk_diff": 0,
							"name": "Papua New Guinea",
							"name_long": "Papua New Guinea",
							"brk_a3": "PN1",
							"brk_name": "Papua New Guinea",
							"brk_group": null,
							"abbrev": "P.N.G.",
							"postal": "PG",
							"formal_en": "Independent State of Papua New Guinea",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Papua New Guinea",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 2,
							"mapcolor9": 3,
							"mapcolor13": 1,
							"pop_est": 6057263,
							"gdp_md_est": 13210,
							"pop_year": -99,
							"lastcensus": 2000,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PG",
							"iso_a3": "PNG",
							"iso_n3": "598",
							"un_a3": "598",
							"wb_a2": "PG",
							"wb_a3": "PNG",
							"woe_id": -99,
							"adm0_a3_is": "PNG",
							"adm0_a3_us": "PNG",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Oceania",
							"region_un": "Oceania",
							"subregion": "Melanesia",
							"region_wb": "East Asia & Pacific",
							"name_len": 16,
							"long_len": 16,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "POL",
						"arcs": [
							[
								-224,
								499,
								500,
								-426,
								-97,
								501,
								502,
								-221
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Poland",
							"sov_a3": "POL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Poland",
							"adm0_a3": "POL",
							"geou_dif": 0,
							"geounit": "Poland",
							"gu_a3": "POL",
							"su_dif": 0,
							"subunit": "Poland",
							"su_a3": "POL",
							"brk_diff": 0,
							"name": "Poland",
							"name_long": "Poland",
							"brk_a3": "POL",
							"brk_name": "Poland",
							"brk_group": null,
							"abbrev": "Pol.",
							"postal": "PL",
							"formal_en": "Republic of Poland",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Poland",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 7,
							"mapcolor9": 1,
							"mapcolor13": 2,
							"pop_est": 38482919,
							"gdp_md_est": 667900,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PL",
							"iso_a3": "POL",
							"iso_n3": "616",
							"un_a3": "616",
							"wb_a2": "PL",
							"wb_a3": "POL",
							"woe_id": -99,
							"adm0_a3_is": "POL",
							"adm0_a3_us": "POL",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "PRI",
						"arcs": [
							[
								503
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "United States of America",
							"sov_a3": "US1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Dependency",
							"admin": "Puerto Rico",
							"adm0_a3": "PRI",
							"geou_dif": 0,
							"geounit": "Puerto Rico",
							"gu_a3": "PRI",
							"su_dif": 0,
							"subunit": "Puerto Rico",
							"su_a3": "PRI",
							"brk_diff": 0,
							"name": "Puerto Rico",
							"name_long": "Puerto Rico",
							"brk_a3": "PRI",
							"brk_name": "Puerto Rico",
							"brk_group": null,
							"abbrev": "P.R.",
							"postal": "PR",
							"formal_en": "Commonwealth of Puerto Rico",
							"formal_fr": null,
							"note_adm0": "Commonwealth of U.S.A.",
							"note_brk": null,
							"name_sort": "Puerto Rico",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 5,
							"mapcolor9": 1,
							"mapcolor13": 1,
							"pop_est": 3971020,
							"gdp_md_est": 70230,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PR",
							"iso_a3": "PRI",
							"iso_n3": "630",
							"un_a3": "630",
							"wb_a2": "PR",
							"wb_a3": "PRI",
							"woe_id": -99,
							"adm0_a3_is": "PRI",
							"adm0_a3_us": "PRI",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Caribbean",
							"region_wb": "Latin America & Caribbean",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": -99
						}
					},
					{
						"type": "Polygon",
						"id": "PRK",
						"arcs": [
							[
								504,
								505,
								-403,
								506,
								-169
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "North Korea",
							"sov_a3": "PRK",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "North Korea",
							"adm0_a3": "PRK",
							"geou_dif": 0,
							"geounit": "North Korea",
							"gu_a3": "PRK",
							"su_dif": 0,
							"subunit": "North Korea",
							"su_a3": "PRK",
							"brk_diff": 0,
							"name": "Dem. Rep. Korea",
							"name_long": "Dem. Rep. Korea",
							"brk_a3": "PRK",
							"brk_name": "Dem. Rep. Korea",
							"brk_group": null,
							"abbrev": "N.K.",
							"postal": "KP",
							"formal_en": "Democratic People's Republic of Korea",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Korea, Dem. Rep.",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 5,
							"mapcolor9": 3,
							"mapcolor13": 9,
							"pop_est": 22665345,
							"gdp_md_est": 40000,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "KP",
							"iso_a3": "PRK",
							"iso_n3": "408",
							"un_a3": "408",
							"wb_a2": "KP",
							"wb_a3": "PRK",
							"woe_id": -99,
							"adm0_a3_is": "PRK",
							"adm0_a3_us": "PRK",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 15,
							"long_len": 15,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "PRT",
						"arcs": [
							[
								-259,
								507
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Portugal",
							"sov_a3": "PRT",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Portugal",
							"adm0_a3": "PRT",
							"geou_dif": 0,
							"geounit": "Portugal",
							"gu_a3": "PRT",
							"su_dif": 1,
							"subunit": "Portugal",
							"su_a3": "PR1",
							"brk_diff": 0,
							"name": "Portugal",
							"name_long": "Portugal",
							"brk_a3": "PR1",
							"brk_name": "Portugal",
							"brk_group": null,
							"abbrev": "Port.",
							"postal": "P",
							"formal_en": "Portuguese Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Portugal",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 7,
							"mapcolor9": 1,
							"mapcolor13": 4,
							"pop_est": 10707924,
							"gdp_md_est": 208627,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": 0,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PT",
							"iso_a3": "PRT",
							"iso_n3": "620",
							"un_a3": "620",
							"wb_a2": "PT",
							"wb_a3": "PRT",
							"woe_id": -99,
							"adm0_a3_is": "PRT",
							"adm0_a3_us": "PRT",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "PRY",
						"arcs": [
							[
								-104,
								-105,
								-26
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Paraguay",
							"sov_a3": "PRY",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Paraguay",
							"adm0_a3": "PRY",
							"geou_dif": 0,
							"geounit": "Paraguay",
							"gu_a3": "PRY",
							"su_dif": 0,
							"subunit": "Paraguay",
							"su_a3": "PRY",
							"brk_diff": 0,
							"name": "Paraguay",
							"name_long": "Paraguay",
							"brk_a3": "PRY",
							"brk_name": "Paraguay",
							"brk_group": null,
							"abbrev": "Para.",
							"postal": "PY",
							"formal_en": "Republic of Paraguay",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Paraguay",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 3,
							"mapcolor9": 6,
							"mapcolor13": 2,
							"pop_est": 6995655,
							"gdp_md_est": 28890,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PY",
							"iso_a3": "PRY",
							"iso_n3": "600",
							"un_a3": "600",
							"wb_a2": "PY",
							"wb_a3": "PRY",
							"woe_id": -99,
							"adm0_a3_is": "PRY",
							"adm0_a3_us": "PRY",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "PSE",
						"arcs": [
							[
								-382,
								-369
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Israel",
							"sov_a3": "ISR",
							"adm0_dif": 1,
							"level": 2,
							"type": "Disputed",
							"admin": "Palestine",
							"adm0_a3": "PSX",
							"geou_dif": 0,
							"geounit": "Palestine",
							"gu_a3": "PSX",
							"su_dif": 0,
							"subunit": "Palestine",
							"su_a3": "PSX",
							"brk_diff": 0,
							"name": "Palestine",
							"name_long": "Palestine",
							"brk_a3": "PSX",
							"brk_name": "Palestine",
							"brk_group": null,
							"abbrev": "Pal.",
							"postal": "PAL",
							"formal_en": "West Bank and Gaza",
							"formal_fr": null,
							"note_adm0": "Partial self-admin.",
							"note_brk": "Partial self-admin.",
							"name_sort": "Palestine (West Bank and Gaza)",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 5,
							"mapcolor13": 8,
							"pop_est": 4119083,
							"gdp_md_est": 11950.77,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "PS",
							"iso_a3": "PSE",
							"iso_n3": "275",
							"un_a3": "275",
							"wb_a2": "GZ",
							"wb_a3": "WBG",
							"woe_id": -99,
							"adm0_a3_is": "PSE",
							"adm0_a3_us": "PSX",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": -99
						}
					},
					{
						"type": "Polygon",
						"id": "QAT",
						"arcs": [
							[
								508,
								509
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Qatar",
							"sov_a3": "QAT",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Qatar",
							"adm0_a3": "QAT",
							"geou_dif": 0,
							"geounit": "Qatar",
							"gu_a3": "QAT",
							"su_dif": 0,
							"subunit": "Qatar",
							"su_a3": "QAT",
							"brk_diff": 0,
							"name": "Qatar",
							"name_long": "Qatar",
							"brk_a3": "QAT",
							"brk_name": "Qatar",
							"brk_group": null,
							"abbrev": "Qatar",
							"postal": "QA",
							"formal_en": "State of Qatar",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Qatar",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 2,
							"mapcolor13": 4,
							"pop_est": 833285,
							"gdp_md_est": 91330,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "QA",
							"iso_a3": "QAT",
							"iso_n3": "634",
							"un_a3": "634",
							"wb_a2": "QA",
							"wb_a3": "QAT",
							"woe_id": -99,
							"adm0_a3_is": "QAT",
							"adm0_a3_us": "QAT",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ROU",
						"arcs": [
							[
								510,
								-432,
								511,
								512,
								-81,
								513,
								-331
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Romania",
							"sov_a3": "ROU",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Romania",
							"adm0_a3": "ROU",
							"geou_dif": 0,
							"geounit": "Romania",
							"gu_a3": "ROU",
							"su_dif": 0,
							"subunit": "Romania",
							"su_a3": "ROU",
							"brk_diff": 0,
							"name": "Romania",
							"name_long": "Romania",
							"brk_a3": "ROU",
							"brk_name": "Romania",
							"brk_group": null,
							"abbrev": "Rom.",
							"postal": "RO",
							"formal_en": "Romania",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Romania",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 3,
							"mapcolor13": 13,
							"pop_est": 22215421,
							"gdp_md_est": 271400,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "RO",
							"iso_a3": "ROU",
							"iso_n3": "642",
							"un_a3": "642",
							"wb_a2": "RO",
							"wb_a3": "ROM",
							"woe_id": -99,
							"adm0_a3_is": "ROU",
							"adm0_a3_us": "ROU",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "RUS",
						"arcs": [
							[
								[
									514
								]
							],
							[
								[
									-501,
									515,
									-423
								]
							],
							[
								[
									-517
								]
							],
							[
								[
									517
								]
							],
							[
								[
									518
								]
							],
							[
								[
									519
								]
							],
							[
								[
									520
								]
							],
							[
								[
									521
								]
							],
							[
								[
									-505,
									-184,
									-445,
									-182,
									-389,
									522,
									-59,
									-291,
									523,
									524,
									-95,
									-428,
									-261,
									525,
									-269,
									-473,
									526
								]
							],
							[
								[
									527
								]
							],
							[
								[
									528
								]
							],
							[
								[
									529
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Russia",
							"sov_a3": "RUS",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Russia",
							"adm0_a3": "RUS",
							"geou_dif": 0,
							"geounit": "Russia",
							"gu_a3": "RUS",
							"su_dif": 0,
							"subunit": "Russia",
							"su_a3": "RUS",
							"brk_diff": 0,
							"name": "Russia",
							"name_long": "Russian Federation",
							"brk_a3": "RUS",
							"brk_name": "Russia",
							"brk_group": null,
							"abbrev": "Rus.",
							"postal": "RUS",
							"formal_en": "Russian Federation",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Russian Federation",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 5,
							"mapcolor9": 7,
							"mapcolor13": 7,
							"pop_est": 140041247,
							"gdp_md_est": 2266000,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "3. Emerging region: BRIC",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "RU",
							"iso_a3": "RUS",
							"iso_n3": "643",
							"un_a3": "643",
							"wb_a2": "RU",
							"wb_a3": "RUS",
							"woe_id": -99,
							"adm0_a3_is": "RUS",
							"adm0_a3_us": "RUS",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 18,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "RWA",
						"arcs": [
							[
								530,
								-61,
								-198,
								531
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Rwanda",
							"sov_a3": "RWA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Rwanda",
							"adm0_a3": "RWA",
							"geou_dif": 0,
							"geounit": "Rwanda",
							"gu_a3": "RWA",
							"su_dif": 0,
							"subunit": "Rwanda",
							"su_a3": "RWA",
							"brk_diff": 0,
							"name": "Rwanda",
							"name_long": "Rwanda",
							"brk_a3": "RWA",
							"brk_name": "Rwanda",
							"brk_group": null,
							"abbrev": "Rwa.",
							"postal": "RW",
							"formal_en": "Republic of Rwanda",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Rwanda",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 2,
							"mapcolor9": 3,
							"mapcolor13": 10,
							"pop_est": 10473282,
							"gdp_md_est": 9706,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "RW",
							"iso_a3": "RWA",
							"iso_n3": "646",
							"un_a3": "646",
							"wb_a2": "RW",
							"wb_a3": "RWA",
							"woe_id": -99,
							"adm0_a3_is": "RWA",
							"adm0_a3_us": "RWA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ESH",
						"arcs": [
							[
								-241,
								-456,
								532,
								-429
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 7,
							"sovereignt": "Western Sahara",
							"sov_a3": "SAH",
							"adm0_dif": 0,
							"level": 2,
							"type": "Indeterminate",
							"admin": "Western Sahara",
							"adm0_a3": "SAH",
							"geou_dif": 0,
							"geounit": "Western Sahara",
							"gu_a3": "SAH",
							"su_dif": 0,
							"subunit": "Western Sahara",
							"su_a3": "SAH",
							"brk_diff": 1,
							"name": "W. Sahara",
							"name_long": "Western Sahara",
							"brk_a3": "B28",
							"brk_name": "W. Sahara",
							"brk_group": null,
							"abbrev": "W. Sah.",
							"postal": "WS",
							"formal_en": "Sahrawi Arab Democratic Republic",
							"formal_fr": null,
							"note_adm0": "Self admin.",
							"note_brk": "Self admin.; Claimed by Morocco",
							"name_sort": "Western Sahara",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 7,
							"mapcolor9": 4,
							"mapcolor13": 4,
							"pop_est": -99,
							"gdp_md_est": -99,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "EH",
							"iso_a3": "ESH",
							"iso_n3": "732",
							"un_a3": "732",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "MAR",
							"adm0_a3_us": "SAH",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Northern Africa",
							"region_wb": "Middle East & North Africa",
							"name_len": 9,
							"long_len": 14,
							"abbrev_len": 7,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SAU",
						"arcs": [
							[
								533,
								-380,
								-363,
								-408,
								534,
								-510,
								535,
								-23,
								-482,
								536
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Saudi Arabia",
							"sov_a3": "SAU",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Saudi Arabia",
							"adm0_a3": "SAU",
							"geou_dif": 0,
							"geounit": "Saudi Arabia",
							"gu_a3": "SAU",
							"su_dif": 0,
							"subunit": "Saudi Arabia",
							"su_a3": "SAU",
							"brk_diff": 0,
							"name": "Saudi Arabia",
							"name_long": "Saudi Arabia",
							"brk_a3": "SAU",
							"brk_name": "Saudi Arabia",
							"brk_group": null,
							"abbrev": "Saud.",
							"postal": "SA",
							"formal_en": "Kingdom of Saudi Arabia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Saudi Arabia",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 1,
							"mapcolor9": 6,
							"mapcolor13": 7,
							"pop_est": 28686633,
							"gdp_md_est": 576500,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SA",
							"iso_a3": "SAU",
							"iso_n3": "682",
							"un_a3": "682",
							"wb_a2": "SA",
							"wb_a3": "SAU",
							"woe_id": -99,
							"adm0_a3_is": "SAU",
							"adm0_a3_us": "SAU",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 12,
							"long_len": 12,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SDN",
						"arcs": [
							[
								537,
								538,
								-123,
								539,
								-419,
								-249,
								540,
								-254,
								-268,
								541
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Sudan",
							"sov_a3": "SDN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Sudan",
							"adm0_a3": "SDN",
							"geou_dif": 0,
							"geounit": "Sudan",
							"gu_a3": "SDN",
							"su_dif": 0,
							"subunit": "Sudan",
							"su_a3": "SDN",
							"brk_diff": 0,
							"name": "Sudan",
							"name_long": "Sudan",
							"brk_a3": "SDN",
							"brk_name": "Sudan",
							"brk_group": null,
							"abbrev": "Sudan",
							"postal": "SD",
							"formal_en": "Republic of the Sudan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Sudan",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 6,
							"mapcolor9": 4,
							"mapcolor13": 1,
							"pop_est": 25946220,
							"gdp_md_est": 88080,
							"pop_year": -99,
							"lastcensus": 2008,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SD",
							"iso_a3": "SDN",
							"iso_n3": "729",
							"un_a3": "729",
							"wb_a2": "SD",
							"wb_a3": "SDN",
							"woe_id": -99,
							"adm0_a3_is": "SDN",
							"adm0_a3_us": "SDN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Northern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SSD",
						"arcs": [
							[
								542,
								-266,
								-394,
								543,
								-203,
								-125,
								544,
								-538
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "South Sudan",
							"sov_a3": "SDS",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "South Sudan",
							"adm0_a3": "SDS",
							"geou_dif": 0,
							"geounit": "South Sudan",
							"gu_a3": "SDS",
							"su_dif": 0,
							"subunit": "South Sudan",
							"su_a3": "SDS",
							"brk_diff": 0,
							"name": "S. Sudan",
							"name_long": "South Sudan",
							"brk_a3": "SDS",
							"brk_name": "S. Sudan",
							"brk_group": null,
							"abbrev": "S. Sud.",
							"postal": "SS",
							"formal_en": "Republic of South Sudan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "South Sudan",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 3,
							"mapcolor9": 3,
							"mapcolor13": 5,
							"pop_est": 10625176,
							"gdp_md_est": 13227,
							"pop_year": -99,
							"lastcensus": 2008,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SS",
							"iso_a3": "SSD",
							"iso_n3": "728",
							"un_a3": "728",
							"wb_a2": "SS",
							"wb_a3": "SSD",
							"woe_id": -99,
							"adm0_a3_is": "SSD",
							"adm0_a3_us": "SDS",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 8,
							"long_len": 11,
							"abbrev_len": 7,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SEN",
						"arcs": [
							[
								545,
								-454,
								-440,
								-299,
								-304,
								546,
								-302
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Senegal",
							"sov_a3": "SEN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Senegal",
							"adm0_a3": "SEN",
							"geou_dif": 0,
							"geounit": "Senegal",
							"gu_a3": "SEN",
							"su_dif": 0,
							"subunit": "Senegal",
							"su_a3": "SEN",
							"brk_diff": 0,
							"name": "Senegal",
							"name_long": "Senegal",
							"brk_a3": "SEN",
							"brk_name": "Senegal",
							"brk_group": null,
							"abbrev": "Sen.",
							"postal": "SN",
							"formal_en": "Republic of Senegal",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Senegal",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 6,
							"mapcolor9": 5,
							"mapcolor13": 5,
							"pop_est": 13711597,
							"gdp_md_est": 21980,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SN",
							"iso_a3": "SEN",
							"iso_n3": "686",
							"un_a3": "686",
							"wb_a2": "SN",
							"wb_a3": "SEN",
							"woe_id": -99,
							"adm0_a3_is": "SEN",
							"adm0_a3_us": "SEN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "SLB",
						"arcs": [
							[
								[
									547
								]
							],
							[
								[
									548
								]
							],
							[
								[
									549
								]
							],
							[
								[
									550
								]
							],
							[
								[
									551
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Solomon Islands",
							"sov_a3": "SLB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Solomon Islands",
							"adm0_a3": "SLB",
							"geou_dif": 0,
							"geounit": "Solomon Islands",
							"gu_a3": "SLB",
							"su_dif": 0,
							"subunit": "Solomon Islands",
							"su_a3": "SLB",
							"brk_diff": 0,
							"name": "Solomon Is.",
							"name_long": "Solomon Islands",
							"brk_a3": "SLB",
							"brk_name": "Solomon Is.",
							"brk_group": null,
							"abbrev": "S. Is.",
							"postal": "SB",
							"formal_en": null,
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Solomon Islands",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 6,
							"pop_est": 595613,
							"gdp_md_est": 1078,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SB",
							"iso_a3": "SLB",
							"iso_n3": "090",
							"un_a3": "090",
							"wb_a2": "SB",
							"wb_a3": "SLB",
							"woe_id": -99,
							"adm0_a3_is": "SLB",
							"adm0_a3_us": "SLB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Oceania",
							"region_un": "Oceania",
							"subregion": "Melanesia",
							"region_wb": "East Asia & Pacific",
							"name_len": 11,
							"long_len": 15,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SLE",
						"arcs": [
							[
								552,
								-296,
								-415
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Sierra Leone",
							"sov_a3": "SLE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Sierra Leone",
							"adm0_a3": "SLE",
							"geou_dif": 0,
							"geounit": "Sierra Leone",
							"gu_a3": "SLE",
							"su_dif": 0,
							"subunit": "Sierra Leone",
							"su_a3": "SLE",
							"brk_diff": 0,
							"name": "Sierra Leone",
							"name_long": "Sierra Leone",
							"brk_a3": "SLE",
							"brk_name": "Sierra Leone",
							"brk_group": null,
							"abbrev": "S.L.",
							"postal": "SL",
							"formal_en": "Republic of Sierra Leone",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Sierra Leone",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 1,
							"mapcolor13": 7,
							"pop_est": 6440053,
							"gdp_md_est": 4285,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SL",
							"iso_a3": "SLE",
							"iso_n3": "694",
							"un_a3": "694",
							"wb_a2": "SL",
							"wb_a3": "SLE",
							"woe_id": -99,
							"adm0_a3_is": "SLE",
							"adm0_a3_us": "SLE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 12,
							"long_len": 12,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SLV",
						"arcs": [
							[
								553,
								-315,
								-320
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "El Salvador",
							"sov_a3": "SLV",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "El Salvador",
							"adm0_a3": "SLV",
							"geou_dif": 0,
							"geounit": "El Salvador",
							"gu_a3": "SLV",
							"su_dif": 0,
							"subunit": "El Salvador",
							"su_a3": "SLV",
							"brk_diff": 0,
							"name": "El Salvador",
							"name_long": "El Salvador",
							"brk_a3": "SLV",
							"brk_name": "El Salvador",
							"brk_group": null,
							"abbrev": "El. S.",
							"postal": "SV",
							"formal_en": "Republic of El Salvador",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "El Salvador",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 6,
							"mapcolor13": 8,
							"pop_est": 7185218,
							"gdp_md_est": 43630,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SV",
							"iso_a3": "SLV",
							"iso_n3": "222",
							"un_a3": "222",
							"wb_a2": "SV",
							"wb_a3": "SLV",
							"woe_id": -99,
							"adm0_a3_is": "SLV",
							"adm0_a3_us": "SLV",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Central America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "-99",
						"arcs": [
							[
								-263,
								-231,
								554,
								555
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Somaliland",
							"sov_a3": "SOL",
							"adm0_dif": 0,
							"level": 2,
							"type": "Indeterminate",
							"admin": "Somaliland",
							"adm0_a3": "SOL",
							"geou_dif": 0,
							"geounit": "Somaliland",
							"gu_a3": "SOL",
							"su_dif": 0,
							"subunit": "Somaliland",
							"su_a3": "SOL",
							"brk_diff": 1,
							"name": "Somaliland",
							"name_long": "Somaliland",
							"brk_a3": "B30",
							"brk_name": "Somaliland",
							"brk_group": null,
							"abbrev": "Solnd.",
							"postal": "SL",
							"formal_en": "Republic of Somaliland",
							"formal_fr": null,
							"note_adm0": "Self admin.",
							"note_brk": "Self admin.; Claimed by Somalia",
							"name_sort": "Somaliland",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 5,
							"mapcolor13": 2,
							"pop_est": 3500000,
							"gdp_md_est": 12250,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "-99",
							"iso_a3": "-99",
							"iso_n3": "-99",
							"un_a3": "-099",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "SOM",
							"adm0_a3_us": "SOM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SOM",
						"arcs": [
							[
								-395,
								-264,
								-556,
								556
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Somalia",
							"sov_a3": "SOM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Somalia",
							"adm0_a3": "SOM",
							"geou_dif": 0,
							"geounit": "Somalia",
							"gu_a3": "SOM",
							"su_dif": 0,
							"subunit": "Somalia",
							"su_a3": "SOM",
							"brk_diff": 0,
							"name": "Somalia",
							"name_long": "Somalia",
							"brk_a3": "SOM",
							"brk_name": "Somalia",
							"brk_group": null,
							"abbrev": "Som.",
							"postal": "SO",
							"formal_en": "Federal Republic of Somalia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Somalia",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 8,
							"mapcolor9": 6,
							"mapcolor13": 7,
							"pop_est": 9832017,
							"gdp_md_est": 5524,
							"pop_year": -99,
							"lastcensus": 1987,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SO",
							"iso_a3": "SOM",
							"iso_n3": "706",
							"un_a3": "706",
							"wb_a2": "SO",
							"wb_a3": "SOM",
							"woe_id": -99,
							"adm0_a3_is": "SOM",
							"adm0_a3_us": "SOM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SRB",
						"arcs": [
							[
								-86,
								-437,
								-405,
								-444,
								-90,
								-323,
								-332,
								-514
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Republic of Serbia",
							"sov_a3": "SRB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Republic of Serbia",
							"adm0_a3": "SRB",
							"geou_dif": 0,
							"geounit": "Republic of Serbia",
							"gu_a3": "SRB",
							"su_dif": 0,
							"subunit": "Republic of Serbia",
							"su_a3": "SRB",
							"brk_diff": 0,
							"name": "Serbia",
							"name_long": "Serbia",
							"brk_a3": "SRB",
							"brk_name": "Serbia",
							"brk_group": null,
							"abbrev": "Serb.",
							"postal": "RS",
							"formal_en": "Republic of Serbia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Serbia",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 3,
							"mapcolor9": 2,
							"mapcolor13": 10,
							"pop_est": 7379339,
							"gdp_md_est": 80340,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "RS",
							"iso_a3": "SRB",
							"iso_n3": "688",
							"un_a3": "688",
							"wb_a2": "YF",
							"wb_a3": "SRB",
							"woe_id": -99,
							"adm0_a3_is": "SRB",
							"adm0_a3_us": "SRB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SUR",
						"arcs": [
							[
								557,
								-278,
								558,
								-276,
								-110,
								-317
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Suriname",
							"sov_a3": "SUR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Suriname",
							"adm0_a3": "SUR",
							"geou_dif": 0,
							"geounit": "Suriname",
							"gu_a3": "SUR",
							"su_dif": 0,
							"subunit": "Suriname",
							"su_a3": "SUR",
							"brk_diff": 0,
							"name": "Suriname",
							"name_long": "Suriname",
							"brk_a3": "SUR",
							"brk_name": "Suriname",
							"brk_group": null,
							"abbrev": "Sur.",
							"postal": "SR",
							"formal_en": "Republic of Suriname",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Suriname",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 7,
							"mapcolor13": 6,
							"pop_est": 481267,
							"gdp_md_est": 4254,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SR",
							"iso_a3": "SUR",
							"iso_n3": "740",
							"un_a3": "740",
							"wb_a2": "SR",
							"wb_a3": "SUR",
							"woe_id": -99,
							"adm0_a3_is": "SUR",
							"adm0_a3_us": "SUR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SVK",
						"arcs": [
							[
								-503,
								559,
								-329,
								-54,
								-222
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Slovakia",
							"sov_a3": "SVK",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Slovakia",
							"adm0_a3": "SVK",
							"geou_dif": 0,
							"geounit": "Slovakia",
							"gu_a3": "SVK",
							"su_dif": 0,
							"subunit": "Slovakia",
							"su_a3": "SVK",
							"brk_diff": 0,
							"name": "Slovakia",
							"name_long": "Slovakia",
							"brk_a3": "SVK",
							"brk_name": "Slovakia",
							"brk_group": null,
							"abbrev": "Svk.",
							"postal": "SK",
							"formal_en": "Slovak Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Slovak Republic",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 4,
							"mapcolor9": 4,
							"mapcolor13": 9,
							"pop_est": 5463046,
							"gdp_md_est": 119500,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SK",
							"iso_a3": "SVK",
							"iso_n3": "703",
							"un_a3": "703",
							"wb_a2": "SK",
							"wb_a3": "SVK",
							"woe_id": -99,
							"adm0_a3_is": "SVK",
							"adm0_a3_us": "SVK",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SVN",
						"arcs": [
							[
								-49,
								-333,
								-326,
								560,
								-376
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Slovenia",
							"sov_a3": "SVN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Slovenia",
							"adm0_a3": "SVN",
							"geou_dif": 0,
							"geounit": "Slovenia",
							"gu_a3": "SVN",
							"su_dif": 0,
							"subunit": "Slovenia",
							"su_a3": "SVN",
							"brk_diff": 0,
							"name": "Slovenia",
							"name_long": "Slovenia",
							"brk_a3": "SVN",
							"brk_name": "Slovenia",
							"brk_group": null,
							"abbrev": "Slo.",
							"postal": "SLO",
							"formal_en": "Republic of Slovenia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Slovenia",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 3,
							"mapcolor9": 2,
							"mapcolor13": 12,
							"pop_est": 2005692,
							"gdp_md_est": 59340,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SI",
							"iso_a3": "SVN",
							"iso_n3": "705",
							"un_a3": "705",
							"wb_a2": "SI",
							"wb_a3": "SVN",
							"woe_id": -99,
							"adm0_a3_is": "SVN",
							"adm0_a3_us": "SVN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Southern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SWE",
						"arcs": [
							[
								-474,
								-271,
								561
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Sweden",
							"sov_a3": "SWE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Sweden",
							"adm0_a3": "SWE",
							"geou_dif": 0,
							"geounit": "Sweden",
							"gu_a3": "SWE",
							"su_dif": 0,
							"subunit": "Sweden",
							"su_a3": "SWE",
							"brk_diff": 0,
							"name": "Sweden",
							"name_long": "Sweden",
							"brk_a3": "SWE",
							"brk_name": "Sweden",
							"brk_group": null,
							"abbrev": "Swe.",
							"postal": "S",
							"formal_en": "Kingdom of Sweden",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Sweden",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 4,
							"mapcolor9": 2,
							"mapcolor13": 4,
							"pop_est": 9059651,
							"gdp_md_est": 344300,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "1. High income: OECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SE",
							"iso_a3": "SWE",
							"iso_n3": "752",
							"un_a3": "752",
							"wb_a2": "SE",
							"wb_a3": "SWE",
							"woe_id": -99,
							"adm0_a3_is": "SWE",
							"adm0_a3_us": "SWE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Northern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SWZ",
						"arcs": [
							[
								562,
								-449
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Swaziland",
							"sov_a3": "SWZ",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Swaziland",
							"adm0_a3": "SWZ",
							"geou_dif": 0,
							"geounit": "Swaziland",
							"gu_a3": "SWZ",
							"su_dif": 0,
							"subunit": "Swaziland",
							"su_a3": "SWZ",
							"brk_diff": 0,
							"name": "Swaziland",
							"name_long": "Swaziland",
							"brk_a3": "SWZ",
							"brk_name": "Swaziland",
							"brk_group": null,
							"abbrev": "Swz.",
							"postal": "SW",
							"formal_en": "Kingdom of Swaziland",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Swaziland",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 2,
							"mapcolor13": 5,
							"pop_est": 1123913,
							"gdp_md_est": 5702,
							"pop_year": -99,
							"lastcensus": 2007,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SZ",
							"iso_a3": "SWZ",
							"iso_n3": "748",
							"un_a3": "748",
							"wb_a2": "SZ",
							"wb_a3": "SWZ",
							"woe_id": -99,
							"adm0_a3_is": "SWZ",
							"adm0_a3_us": "SWZ",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Southern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "SYR",
						"arcs": [
							[
								-379,
								-373,
								-413,
								563,
								564,
								-365
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Syria",
							"sov_a3": "SYR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Syria",
							"adm0_a3": "SYR",
							"geou_dif": 0,
							"geounit": "Syria",
							"gu_a3": "SYR",
							"su_dif": 0,
							"subunit": "Syria",
							"su_a3": "SYR",
							"brk_diff": 0,
							"name": "Syria",
							"name_long": "Syria",
							"brk_a3": "SYR",
							"brk_name": "Syria",
							"brk_group": null,
							"abbrev": "Syria",
							"postal": "SYR",
							"formal_en": "Syrian Arab Republic",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Syrian Arab Republic",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 6,
							"mapcolor9": 2,
							"mapcolor13": 6,
							"pop_est": 20178485,
							"gdp_md_est": 98830,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "SY",
							"iso_a3": "SYR",
							"iso_n3": "760",
							"un_a3": "760",
							"wb_a2": "SY",
							"wb_a3": "SYR",
							"woe_id": -99,
							"adm0_a3_is": "SYR",
							"adm0_a3_us": "SYR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TCD",
						"arcs": [
							[
								-467,
								-420,
								-540,
								-122,
								-195
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Chad",
							"sov_a3": "TCD",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Chad",
							"adm0_a3": "TCD",
							"geou_dif": 0,
							"geounit": "Chad",
							"gu_a3": "TCD",
							"su_dif": 0,
							"subunit": "Chad",
							"su_a3": "TCD",
							"brk_diff": 0,
							"name": "Chad",
							"name_long": "Chad",
							"brk_a3": "TCD",
							"brk_name": "Chad",
							"brk_group": null,
							"abbrev": "Chad",
							"postal": "TD",
							"formal_en": "Republic of Chad",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Chad",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 1,
							"mapcolor9": 8,
							"mapcolor13": 6,
							"pop_est": 10329208,
							"gdp_md_est": 15860,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TD",
							"iso_a3": "TCD",
							"iso_n3": "148",
							"un_a3": "148",
							"wb_a2": "TD",
							"wb_a3": "TCD",
							"woe_id": -99,
							"adm0_a3_is": "TCD",
							"adm0_a3_us": "TCD",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Middle Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TGO",
						"arcs": [
							[
								565,
								-294,
								-76,
								-69
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 6,
							"sovereignt": "Togo",
							"sov_a3": "TGO",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Togo",
							"adm0_a3": "TGO",
							"geou_dif": 0,
							"geounit": "Togo",
							"gu_a3": "TGO",
							"su_dif": 0,
							"subunit": "Togo",
							"su_a3": "TGO",
							"brk_diff": 0,
							"name": "Togo",
							"name_long": "Togo",
							"brk_a3": "TGO",
							"brk_name": "Togo",
							"brk_group": null,
							"abbrev": "Togo",
							"postal": "TG",
							"formal_en": "Togolese Republic",
							"formal_fr": "République Togolaise",
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Togo",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 1,
							"mapcolor9": 3,
							"mapcolor13": 5,
							"pop_est": 6019877,
							"gdp_md_est": 5118,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TG",
							"iso_a3": "TGO",
							"iso_n3": "768",
							"un_a3": "768",
							"wb_a2": "TG",
							"wb_a3": "TGO",
							"woe_id": -99,
							"adm0_a3_is": "TGO",
							"adm0_a3_us": "TGO",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Western Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 4,
							"long_len": 4,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "THA",
						"arcs": [
							[
								566,
								-460,
								567,
								-442,
								-409,
								-398
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Thailand",
							"sov_a3": "THA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Thailand",
							"adm0_a3": "THA",
							"geou_dif": 0,
							"geounit": "Thailand",
							"gu_a3": "THA",
							"su_dif": 0,
							"subunit": "Thailand",
							"su_a3": "THA",
							"brk_diff": 0,
							"name": "Thailand",
							"name_long": "Thailand",
							"brk_a3": "THA",
							"brk_name": "Thailand",
							"brk_group": null,
							"abbrev": "Thai.",
							"postal": "TH",
							"formal_en": "Kingdom of Thailand",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Thailand",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 8,
							"mapcolor13": 1,
							"pop_est": 65905410,
							"gdp_md_est": 547400,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TH",
							"iso_a3": "THA",
							"iso_n3": "764",
							"un_a3": "764",
							"wb_a2": "TH",
							"wb_a3": "THA",
							"woe_id": -99,
							"adm0_a3_is": "THA",
							"adm0_a3_us": "THA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TJK",
						"arcs": [
							[
								-396,
								-179,
								-3,
								568
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Tajikistan",
							"sov_a3": "TJK",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Tajikistan",
							"adm0_a3": "TJK",
							"geou_dif": 0,
							"geounit": "Tajikistan",
							"gu_a3": "TJK",
							"su_dif": 0,
							"subunit": "Tajikistan",
							"su_a3": "TJK",
							"brk_diff": 0,
							"name": "Tajikistan",
							"name_long": "Tajikistan",
							"brk_a3": "TJK",
							"brk_name": "Tajikistan",
							"brk_group": null,
							"abbrev": "Tjk.",
							"postal": "TJ",
							"formal_en": "Republic of Tajikistan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Tajikistan",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 2,
							"mapcolor13": 5,
							"pop_est": 7349145,
							"gdp_md_est": 13160,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TJ",
							"iso_a3": "TJK",
							"iso_n3": "762",
							"un_a3": "762",
							"wb_a2": "TJ",
							"wb_a3": "TJK",
							"woe_id": -99,
							"adm0_a3_is": "TJK",
							"adm0_a3_us": "TJK",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Central Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TKM",
						"arcs": [
							[
								-355,
								569,
								-387,
								570,
								-1
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Turkmenistan",
							"sov_a3": "TKM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Turkmenistan",
							"adm0_a3": "TKM",
							"geou_dif": 0,
							"geounit": "Turkmenistan",
							"gu_a3": "TKM",
							"su_dif": 0,
							"subunit": "Turkmenistan",
							"su_a3": "TKM",
							"brk_diff": 0,
							"name": "Turkmenistan",
							"name_long": "Turkmenistan",
							"brk_a3": "TKM",
							"brk_name": "Turkmenistan",
							"brk_group": null,
							"abbrev": "Turkm.",
							"postal": "TM",
							"formal_en": "Turkmenistan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Turkmenistan",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 2,
							"mapcolor9": 1,
							"mapcolor13": 9,
							"pop_est": 4884887,
							"gdp_md_est": 29780,
							"pop_year": -99,
							"lastcensus": 1995,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TM",
							"iso_a3": "TKM",
							"iso_n3": "795",
							"un_a3": "795",
							"wb_a2": "TM",
							"wb_a3": "TKM",
							"woe_id": -99,
							"adm0_a3_is": "TKM",
							"adm0_a3_us": "TKM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Central Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 12,
							"long_len": 12,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TLS",
						"arcs": [
							[
								571,
								-335
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "East Timor",
							"sov_a3": "TLS",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "East Timor",
							"adm0_a3": "TLS",
							"geou_dif": 0,
							"geounit": "East Timor",
							"gu_a3": "TLS",
							"su_dif": 0,
							"subunit": "East Timor",
							"su_a3": "TLS",
							"brk_diff": 0,
							"name": "Timor-Leste",
							"name_long": "Timor-Leste",
							"brk_a3": "TLS",
							"brk_name": "Timor-Leste",
							"brk_group": null,
							"abbrev": "T.L.",
							"postal": "TL",
							"formal_en": "Democratic Republic of Timor-Leste",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Timor-Leste",
							"name_alt": "East Timor",
							"mapcolor7": 2,
							"mapcolor8": 2,
							"mapcolor9": 4,
							"mapcolor13": 3,
							"pop_est": 1131612,
							"gdp_md_est": 2520,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TL",
							"iso_a3": "TLS",
							"iso_n3": "626",
							"un_a3": "626",
							"wb_a2": "TP",
							"wb_a3": "TMP",
							"woe_id": -99,
							"adm0_a3_is": "TLS",
							"adm0_a3_us": "TLS",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 11,
							"long_len": 11,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TTO",
						"arcs": [
							[
								572
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 5,
							"sovereignt": "Trinidad and Tobago",
							"sov_a3": "TTO",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Trinidad and Tobago",
							"adm0_a3": "TTO",
							"geou_dif": 0,
							"geounit": "Trinidad and Tobago",
							"gu_a3": "TTO",
							"su_dif": 0,
							"subunit": "Trinidad and Tobago",
							"su_a3": "TTO",
							"brk_diff": 0,
							"name": "Trinidad and Tobago",
							"name_long": "Trinidad and Tobago",
							"brk_a3": "TTO",
							"brk_name": "Trinidad and Tobago",
							"brk_group": null,
							"abbrev": "Tr.T.",
							"postal": "TT",
							"formal_en": "Republic of Trinidad and Tobago",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Trinidad and Tobago",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 6,
							"mapcolor9": 2,
							"mapcolor13": 5,
							"pop_est": 1310000,
							"gdp_md_est": 29010,
							"pop_year": -99,
							"lastcensus": 2011,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TT",
							"iso_a3": "TTO",
							"iso_n3": "780",
							"un_a3": "780",
							"wb_a2": "TT",
							"wb_a3": "TTO",
							"woe_id": -99,
							"adm0_a3_is": "TTO",
							"adm0_a3_us": "TTO",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Caribbean",
							"region_wb": "Latin America & Caribbean",
							"name_len": 19,
							"long_len": 19,
							"abbrev_len": 5,
							"tiny": 2,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TUN",
						"arcs": [
							[
								-244,
								573,
								-417
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Tunisia",
							"sov_a3": "TUN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Tunisia",
							"adm0_a3": "TUN",
							"geou_dif": 0,
							"geounit": "Tunisia",
							"gu_a3": "TUN",
							"su_dif": 0,
							"subunit": "Tunisia",
							"su_a3": "TUN",
							"brk_diff": 0,
							"name": "Tunisia",
							"name_long": "Tunisia",
							"brk_a3": "TUN",
							"brk_name": "Tunisia",
							"brk_group": null,
							"abbrev": "Tun.",
							"postal": "TN",
							"formal_en": "Republic of Tunisia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Tunisia",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 3,
							"mapcolor9": 3,
							"mapcolor13": 2,
							"pop_est": 10486339,
							"gdp_md_est": 81710,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TN",
							"iso_a3": "TUN",
							"iso_n3": "788",
							"un_a3": "788",
							"wb_a2": "TN",
							"wb_a3": "TUN",
							"woe_id": -99,
							"adm0_a3_is": "TUN",
							"adm0_a3_us": "TUN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Northern Africa",
							"region_wb": "Middle East & North Africa",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "TUR",
						"arcs": [
							[
								[
									-292,
									-36,
									-359,
									-366,
									-565,
									574
								]
							],
							[
								[
									-309,
									-83,
									575
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Turkey",
							"sov_a3": "TUR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Turkey",
							"adm0_a3": "TUR",
							"geou_dif": 0,
							"geounit": "Turkey",
							"gu_a3": "TUR",
							"su_dif": 0,
							"subunit": "Turkey",
							"su_a3": "TUR",
							"brk_diff": 0,
							"name": "Turkey",
							"name_long": "Turkey",
							"brk_a3": "TUR",
							"brk_name": "Turkey",
							"brk_group": null,
							"abbrev": "Tur.",
							"postal": "TR",
							"formal_en": "Republic of Turkey",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Turkey",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 3,
							"mapcolor9": 8,
							"mapcolor13": 4,
							"pop_est": 76805524,
							"gdp_md_est": 902700,
							"pop_year": -99,
							"lastcensus": 2000,
							"gdp_year": -99,
							"economy": "4. Emerging region: MIKT",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TR",
							"iso_a3": "TUR",
							"iso_n3": "792",
							"un_a3": "792",
							"wb_a2": "TR",
							"wb_a3": "TUR",
							"woe_id": -99,
							"adm0_a3_is": "TUR",
							"adm0_a3_us": "TUR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TWN",
						"arcs": [
							[
								576
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Taiwan",
							"sov_a3": "TWN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Taiwan",
							"adm0_a3": "TWN",
							"geou_dif": 0,
							"geounit": "Taiwan",
							"gu_a3": "TWN",
							"su_dif": 0,
							"subunit": "Taiwan",
							"su_a3": "TWN",
							"brk_diff": 1,
							"name": "Taiwan",
							"name_long": "Taiwan",
							"brk_a3": "B77",
							"brk_name": "Taiwan",
							"brk_group": null,
							"abbrev": "Taiwan",
							"postal": "TW",
							"formal_en": null,
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": "Self admin.; Claimed by China",
							"name_sort": "Taiwan",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 5,
							"mapcolor9": 7,
							"mapcolor13": 2,
							"pop_est": 22974347,
							"gdp_md_est": 712000,
							"pop_year": -99,
							"lastcensus": -99,
							"gdp_year": -99,
							"economy": "2. Developed region: nonG7",
							"income_grp": "2. High income: nonOECD",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TW",
							"iso_a3": "TWN",
							"iso_n3": "158",
							"un_a3": "-099",
							"wb_a2": "-99",
							"wb_a3": "-99",
							"woe_id": -99,
							"adm0_a3_is": "TWN",
							"adm0_a3_us": "TWN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "TZA",
						"arcs": [
							[
								-392,
								577,
								-446,
								-458,
								578,
								-199,
								-62,
								-531,
								579
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "United Republic of Tanzania",
							"sov_a3": "TZA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "United Republic of Tanzania",
							"adm0_a3": "TZA",
							"geou_dif": 0,
							"geounit": "Tanzania",
							"gu_a3": "TZA",
							"su_dif": 0,
							"subunit": "Tanzania",
							"su_a3": "TZA",
							"brk_diff": 0,
							"name": "Tanzania",
							"name_long": "Tanzania",
							"brk_a3": "TZA",
							"brk_name": "Tanzania",
							"brk_group": null,
							"abbrev": "Tanz.",
							"postal": "TZ",
							"formal_en": "United Republic of Tanzania",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Tanzania",
							"name_alt": null,
							"mapcolor7": 3,
							"mapcolor8": 6,
							"mapcolor9": 2,
							"mapcolor13": 2,
							"pop_est": 41048532,
							"gdp_md_est": 54250,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "TZ",
							"iso_a3": "TZA",
							"iso_n3": "834",
							"un_a3": "834",
							"wb_a2": "TZ",
							"wb_a3": "TZA",
							"woe_id": -99,
							"adm0_a3_is": "TZA",
							"adm0_a3_us": "TZA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "UGA",
						"arcs": [
							[
								-532,
								-197,
								-544,
								-393,
								-580
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Uganda",
							"sov_a3": "UGA",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Uganda",
							"adm0_a3": "UGA",
							"geou_dif": 0,
							"geounit": "Uganda",
							"gu_a3": "UGA",
							"su_dif": 0,
							"subunit": "Uganda",
							"su_a3": "UGA",
							"brk_diff": 0,
							"name": "Uganda",
							"name_long": "Uganda",
							"brk_a3": "UGA",
							"brk_name": "Uganda",
							"brk_group": null,
							"abbrev": "Uga.",
							"postal": "UG",
							"formal_en": "Republic of Uganda",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Uganda",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 3,
							"mapcolor9": 6,
							"mapcolor13": 4,
							"pop_est": 32369558,
							"gdp_md_est": 39380,
							"pop_year": -99,
							"lastcensus": 2002,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "UG",
							"iso_a3": "UGA",
							"iso_n3": "800",
							"un_a3": "800",
							"wb_a2": "UG",
							"wb_a3": "UGA",
							"woe_id": -99,
							"adm0_a3_is": "UGA",
							"adm0_a3_us": "UGA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "UKR",
						"arcs": [
							[
								-525,
								580,
								-512,
								-431,
								-511,
								-330,
								-560,
								-502,
								-96
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Ukraine",
							"sov_a3": "UKR",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Ukraine",
							"adm0_a3": "UKR",
							"geou_dif": 0,
							"geounit": "Ukraine",
							"gu_a3": "UKR",
							"su_dif": 0,
							"subunit": "Ukraine",
							"su_a3": "UKR",
							"brk_diff": 0,
							"name": "Ukraine",
							"name_long": "Ukraine",
							"brk_a3": "UKR",
							"brk_name": "Ukraine",
							"brk_group": null,
							"abbrev": "Ukr.",
							"postal": "UA",
							"formal_en": "Ukraine",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Ukraine",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 1,
							"mapcolor9": 6,
							"mapcolor13": 3,
							"pop_est": 45700395,
							"gdp_md_est": 339800,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "UA",
							"iso_a3": "UKR",
							"iso_n3": "804",
							"un_a3": "804",
							"wb_a2": "UA",
							"wb_a3": "UKR",
							"woe_id": -99,
							"adm0_a3_is": "UKR",
							"adm0_a3_us": "UKR",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Europe",
							"region_un": "Europe",
							"subregion": "Eastern Europe",
							"region_wb": "Europe & Central Asia",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "URY",
						"arcs": [
							[
								-113,
								581,
								-28
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Uruguay",
							"sov_a3": "URY",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Uruguay",
							"adm0_a3": "URY",
							"geou_dif": 0,
							"geounit": "Uruguay",
							"gu_a3": "URY",
							"su_dif": 0,
							"subunit": "Uruguay",
							"su_a3": "URY",
							"brk_diff": 0,
							"name": "Uruguay",
							"name_long": "Uruguay",
							"brk_a3": "URY",
							"brk_name": "Uruguay",
							"brk_group": null,
							"abbrev": "Ury.",
							"postal": "UY",
							"formal_en": "Oriental Republic of Uruguay",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Uruguay",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 2,
							"mapcolor9": 2,
							"mapcolor13": 10,
							"pop_est": 3494382,
							"gdp_md_est": 43160,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "UY",
							"iso_a3": "URY",
							"iso_n3": "858",
							"un_a3": "858",
							"wb_a2": "UY",
							"wb_a3": "URY",
							"woe_id": -99,
							"adm0_a3_is": "URY",
							"adm0_a3_us": "URY",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "USA",
						"arcs": [
							[
								[
									582
								]
							],
							[
								[
									583
								]
							],
							[
								[
									584
								]
							],
							[
								[
									585
								]
							],
							[
								[
									586
								]
							],
							[
								[
									587,
									-436,
									588,
									-139
								]
							],
							[
								[
									589
								]
							],
							[
								[
									590
								]
							],
							[
								[
									591
								]
							],
							[
								[
									-141,
									592
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "United States of America",
							"sov_a3": "US1",
							"adm0_dif": 1,
							"level": 2,
							"type": "Country",
							"admin": "United States of America",
							"adm0_a3": "USA",
							"geou_dif": 0,
							"geounit": "United States of America",
							"gu_a3": "USA",
							"su_dif": 0,
							"subunit": "United States of America",
							"su_a3": "USA",
							"brk_diff": 0,
							"name": "United States",
							"name_long": "United States",
							"brk_a3": "USA",
							"brk_name": "United States",
							"brk_group": null,
							"abbrev": "U.S.A.",
							"postal": "US",
							"formal_en": "United States of America",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "United States of America",
							"name_alt": null,
							"mapcolor7": 4,
							"mapcolor8": 5,
							"mapcolor9": 1,
							"mapcolor13": 1,
							"pop_est": 313973000,
							"gdp_md_est": 15094000,
							"pop_year": 0,
							"lastcensus": 2010,
							"gdp_year": 0,
							"economy": "1. Developed region: G7",
							"income_grp": "1. High income: OECD",
							"wikipedia": 0,
							"fips_10": null,
							"iso_a2": "US",
							"iso_a3": "USA",
							"iso_n3": "840",
							"un_a3": "840",
							"wb_a2": "US",
							"wb_a3": "USA",
							"woe_id": -99,
							"adm0_a3_is": "USA",
							"adm0_a3_us": "USA",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "North America",
							"region_un": "Americas",
							"subregion": "Northern America",
							"region_wb": "North America",
							"name_len": 13,
							"long_len": 13,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "UZB",
						"arcs": [
							[
								-571,
								-386,
								-397,
								-569,
								-2
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Uzbekistan",
							"sov_a3": "UZB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Uzbekistan",
							"adm0_a3": "UZB",
							"geou_dif": 0,
							"geounit": "Uzbekistan",
							"gu_a3": "UZB",
							"su_dif": 0,
							"subunit": "Uzbekistan",
							"su_a3": "UZB",
							"brk_diff": 0,
							"name": "Uzbekistan",
							"name_long": "Uzbekistan",
							"brk_a3": "UZB",
							"brk_name": "Uzbekistan",
							"brk_group": null,
							"abbrev": "Uzb.",
							"postal": "UZ",
							"formal_en": "Republic of Uzbekistan",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Uzbekistan",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 3,
							"mapcolor9": 5,
							"mapcolor13": 4,
							"pop_est": 27606007,
							"gdp_md_est": 71670,
							"pop_year": -99,
							"lastcensus": 1989,
							"gdp_year": -99,
							"economy": "6. Developing region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "UZ",
							"iso_a3": "UZB",
							"iso_n3": "860",
							"un_a3": "860",
							"wb_a2": "UZ",
							"wb_a3": "UZB",
							"woe_id": -99,
							"adm0_a3_is": "UZB",
							"adm0_a3_us": "UZB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Central Asia",
							"region_wb": "Europe & Central Asia",
							"name_len": 10,
							"long_len": 10,
							"abbrev_len": 4,
							"tiny": 5,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "VEN",
						"arcs": [
							[
								593,
								-318,
								-108,
								-210
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Venezuela",
							"sov_a3": "VEN",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Venezuela",
							"adm0_a3": "VEN",
							"geou_dif": 0,
							"geounit": "Venezuela",
							"gu_a3": "VEN",
							"su_dif": 0,
							"subunit": "Venezuela",
							"su_a3": "VEN",
							"brk_diff": 0,
							"name": "Venezuela",
							"name_long": "Venezuela",
							"brk_a3": "VEN",
							"brk_name": "Venezuela",
							"brk_group": null,
							"abbrev": "Ven.",
							"postal": "VE",
							"formal_en": "Bolivarian Republic of Venezuela",
							"formal_fr": "República Bolivariana de Venezuela",
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Venezuela, RB",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 3,
							"mapcolor9": 1,
							"mapcolor13": 4,
							"pop_est": 26814843,
							"gdp_md_est": 357400,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "VE",
							"iso_a3": "VEN",
							"iso_n3": "862",
							"un_a3": "862",
							"wb_a2": "VE",
							"wb_a3": "VEN",
							"woe_id": -99,
							"adm0_a3_is": "VEN",
							"adm0_a3_us": "VEN",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "South America",
							"region_un": "Americas",
							"subregion": "South America",
							"region_wb": "Latin America & Caribbean",
							"name_len": 9,
							"long_len": 9,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "VNM",
						"arcs": [
							[
								594,
								-400,
								-411,
								-171
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "Vietnam",
							"sov_a3": "VNM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Vietnam",
							"adm0_a3": "VNM",
							"geou_dif": 0,
							"geounit": "Vietnam",
							"gu_a3": "VNM",
							"su_dif": 0,
							"subunit": "Vietnam",
							"su_a3": "VNM",
							"brk_diff": 0,
							"name": "Vietnam",
							"name_long": "Vietnam",
							"brk_a3": "VNM",
							"brk_name": "Vietnam",
							"brk_group": null,
							"abbrev": "Viet.",
							"postal": "VN",
							"formal_en": "Socialist Republic of Vietnam",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Vietnam",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 6,
							"mapcolor9": 5,
							"mapcolor13": 4,
							"pop_est": 86967524,
							"gdp_md_est": 241700,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "VN",
							"iso_a3": "VNM",
							"iso_n3": "704",
							"un_a3": "704",
							"wb_a2": "VN",
							"wb_a3": "VNM",
							"woe_id": -99,
							"adm0_a3_is": "VNM",
							"adm0_a3_us": "VNM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "South-Eastern Asia",
							"region_wb": "East Asia & Pacific",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 5,
							"tiny": 2,
							"homepart": 1
						}
					},
					{
						"type": "MultiPolygon",
						"id": "VUT",
						"arcs": [
							[
								[
									595
								]
							],
							[
								[
									596
								]
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 4,
							"sovereignt": "Vanuatu",
							"sov_a3": "VUT",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Vanuatu",
							"adm0_a3": "VUT",
							"geou_dif": 0,
							"geounit": "Vanuatu",
							"gu_a3": "VUT",
							"su_dif": 0,
							"subunit": "Vanuatu",
							"su_a3": "VUT",
							"brk_diff": 0,
							"name": "Vanuatu",
							"name_long": "Vanuatu",
							"brk_a3": "VUT",
							"brk_name": "Vanuatu",
							"brk_group": null,
							"abbrev": "Van.",
							"postal": "VU",
							"formal_en": "Republic of Vanuatu",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Vanuatu",
							"name_alt": null,
							"mapcolor7": 6,
							"mapcolor8": 3,
							"mapcolor9": 7,
							"mapcolor13": 3,
							"pop_est": 218519,
							"gdp_md_est": 988.5,
							"pop_year": -99,
							"lastcensus": 2009,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "VU",
							"iso_a3": "VUT",
							"iso_n3": "548",
							"un_a3": "548",
							"wb_a2": "VU",
							"wb_a3": "VUT",
							"woe_id": -99,
							"adm0_a3_is": "VUT",
							"adm0_a3_us": "VUT",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Oceania",
							"region_un": "Oceania",
							"subregion": "Melanesia",
							"region_wb": "East Asia & Pacific",
							"name_len": 7,
							"long_len": 7,
							"abbrev_len": 4,
							"tiny": 2,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "YEM",
						"arcs": [
							[
								597,
								-537,
								-481
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Yemen",
							"sov_a3": "YEM",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Yemen",
							"adm0_a3": "YEM",
							"geou_dif": 0,
							"geounit": "Yemen",
							"gu_a3": "YEM",
							"su_dif": 0,
							"subunit": "Yemen",
							"su_a3": "YEM",
							"brk_diff": 0,
							"name": "Yemen",
							"name_long": "Yemen",
							"brk_a3": "YEM",
							"brk_name": "Yemen",
							"brk_group": null,
							"abbrev": "Yem.",
							"postal": "YE",
							"formal_en": "Republic of Yemen",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Yemen, Rep.",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 3,
							"mapcolor9": 3,
							"mapcolor13": 11,
							"pop_est": 23822783,
							"gdp_md_est": 55280,
							"pop_year": -99,
							"lastcensus": 2004,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "YE",
							"iso_a3": "YEM",
							"iso_n3": "887",
							"un_a3": "887",
							"wb_a2": "RY",
							"wb_a3": "YEM",
							"woe_id": -99,
							"adm0_a3_is": "YEM",
							"adm0_a3_us": "YEM",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Asia",
							"region_un": "Asia",
							"subregion": "Western Asia",
							"region_wb": "Middle East & North Africa",
							"name_len": 5,
							"long_len": 5,
							"abbrev_len": 4,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ZAF",
						"arcs": [
							[
								-465,
								-118,
								598,
								-450,
								-563,
								-448,
								599
							],
							[
								-422
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 2,
							"sovereignt": "South Africa",
							"sov_a3": "ZAF",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "South Africa",
							"adm0_a3": "ZAF",
							"geou_dif": 0,
							"geounit": "South Africa",
							"gu_a3": "ZAF",
							"su_dif": 0,
							"subunit": "South Africa",
							"su_a3": "ZAF",
							"brk_diff": 0,
							"name": "South Africa",
							"name_long": "South Africa",
							"brk_a3": "ZAF",
							"brk_name": "South Africa",
							"brk_group": null,
							"abbrev": "S.Af.",
							"postal": "ZA",
							"formal_en": "Republic of South Africa",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "South Africa",
							"name_alt": null,
							"mapcolor7": 2,
							"mapcolor8": 3,
							"mapcolor9": 4,
							"mapcolor13": 2,
							"pop_est": 49052489,
							"gdp_md_est": 491000,
							"pop_year": -99,
							"lastcensus": 2001,
							"gdp_year": -99,
							"economy": "5. Emerging region: G20",
							"income_grp": "3. Upper middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ZA",
							"iso_a3": "ZAF",
							"iso_n3": "710",
							"un_a3": "710",
							"wb_a2": "ZA",
							"wb_a3": "ZAF",
							"woe_id": -99,
							"adm0_a3_is": "ZAF",
							"adm0_a3_us": "ZAF",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Southern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 12,
							"long_len": 12,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ZMB",
						"arcs": [
							[
								-457,
								-452,
								600,
								-120,
								-464,
								-7,
								-200,
								-579
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Zambia",
							"sov_a3": "ZMB",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Zambia",
							"adm0_a3": "ZMB",
							"geou_dif": 0,
							"geounit": "Zambia",
							"gu_a3": "ZMB",
							"su_dif": 0,
							"subunit": "Zambia",
							"su_a3": "ZMB",
							"brk_diff": 0,
							"name": "Zambia",
							"name_long": "Zambia",
							"brk_a3": "ZMB",
							"brk_name": "Zambia",
							"brk_group": null,
							"abbrev": "Zambia",
							"postal": "ZM",
							"formal_en": "Republic of Zambia",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Zambia",
							"name_alt": null,
							"mapcolor7": 5,
							"mapcolor8": 8,
							"mapcolor9": 5,
							"mapcolor13": 13,
							"pop_est": 11862740,
							"gdp_md_est": 17500,
							"pop_year": -99,
							"lastcensus": 2010,
							"gdp_year": -99,
							"economy": "7. Least developed region",
							"income_grp": "4. Lower middle income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ZM",
							"iso_a3": "ZMB",
							"iso_n3": "894",
							"un_a3": "894",
							"wb_a2": "ZM",
							"wb_a3": "ZMB",
							"woe_id": -99,
							"adm0_a3_is": "ZMB",
							"adm0_a3_us": "ZMB",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 6,
							"long_len": 6,
							"abbrev_len": 6,
							"tiny": -99,
							"homepart": 1
						}
					},
					{
						"type": "Polygon",
						"id": "ZWE",
						"arcs": [
							[
								-599,
								-121,
								-601,
								-451
							]
						],
						"properties": {
							"scalerank": 1,
							"featurecla": "Admin-0 country",
							"labelrank": 3,
							"sovereignt": "Zimbabwe",
							"sov_a3": "ZWE",
							"adm0_dif": 0,
							"level": 2,
							"type": "Sovereign country",
							"admin": "Zimbabwe",
							"adm0_a3": "ZWE",
							"geou_dif": 0,
							"geounit": "Zimbabwe",
							"gu_a3": "ZWE",
							"su_dif": 0,
							"subunit": "Zimbabwe",
							"su_a3": "ZWE",
							"brk_diff": 0,
							"name": "Zimbabwe",
							"name_long": "Zimbabwe",
							"brk_a3": "ZWE",
							"brk_name": "Zimbabwe",
							"brk_group": null,
							"abbrev": "Zimb.",
							"postal": "ZW",
							"formal_en": "Republic of Zimbabwe",
							"formal_fr": null,
							"note_adm0": null,
							"note_brk": null,
							"name_sort": "Zimbabwe",
							"name_alt": null,
							"mapcolor7": 1,
							"mapcolor8": 5,
							"mapcolor9": 3,
							"mapcolor13": 9,
							"pop_est": 12619600,
							"gdp_md_est": 9323,
							"pop_year": 0,
							"lastcensus": 2002,
							"gdp_year": 0,
							"economy": "5. Emerging region: G20",
							"income_grp": "5. Low income",
							"wikipedia": -99,
							"fips_10": null,
							"iso_a2": "ZW",
							"iso_a3": "ZWE",
							"iso_n3": "716",
							"un_a3": "716",
							"wb_a2": "ZW",
							"wb_a3": "ZWE",
							"woe_id": -99,
							"adm0_a3_is": "ZWE",
							"adm0_a3_us": "ZWE",
							"adm0_a3_un": -99,
							"adm0_a3_wb": -99,
							"continent": "Africa",
							"region_un": "Africa",
							"subregion": "Eastern Africa",
							"region_wb": "Sub-Saharan Africa",
							"name_len": 8,
							"long_len": 8,
							"abbrev_len": 5,
							"tiny": -99,
							"homepart": 1
						}
					}
				]
			}
		},
		"arcs": [
			[
				[
					6700,
					7164
				],
				[
					28,
					-23
				],
				[
					21,
					8
				],
				[
					6,
					27
				],
				[
					22,
					9
				],
				[
					15,
					18
				],
				[
					6,
					47
				],
				[
					23,
					11
				],
				[
					5,
					21
				],
				[
					13,
					-15
				],
				[
					8,
					-2
				]
			],
			[
				[
					6847,
					7265
				],
				[
					16,
					-1
				],
				[
					20,
					-12
				]
			],
			[
				[
					6883,
					7252
				],
				[
					9,
					-7
				],
				[
					20,
					19
				],
				[
					9,
					-12
				],
				[
					9,
					27
				],
				[
					17,
					-1
				],
				[
					4,
					9
				],
				[
					3,
					24
				],
				[
					12,
					20
				],
				[
					15,
					-13
				],
				[
					-3,
					-18
				],
				[
					9,
					-3
				],
				[
					-3,
					-50
				],
				[
					11,
					-19
				],
				[
					10,
					12
				],
				[
					12,
					6
				],
				[
					17,
					27
				],
				[
					19,
					-5
				],
				[
					29,
					0
				]
			],
			[
				[
					7082,
					7268
				],
				[
					5,
					-17
				]
			],
			[
				[
					7087,
					7251
				],
				[
					-16,
					-6
				],
				[
					-14,
					-11
				],
				[
					-32,
					-7
				],
				[
					-30,
					-13
				],
				[
					-16,
					-25
				],
				[
					6,
					-25
				],
				[
					4,
					-30
				],
				[
					-14,
					-25
				],
				[
					1,
					-22
				],
				[
					-8,
					-22
				],
				[
					-26,
					2
				],
				[
					11,
					-39
				],
				[
					-18,
					-15
				],
				[
					-12,
					-35
				],
				[
					2,
					-36
				],
				[
					-11,
					-16
				],
				[
					-10,
					5
				],
				[
					-22,
					-8
				],
				[
					-3,
					-16
				],
				[
					-20,
					0
				],
				[
					-16,
					-34
				],
				[
					-1,
					-50
				],
				[
					-36,
					-24
				],
				[
					-19,
					5
				],
				[
					-6,
					-13
				],
				[
					-16,
					7
				],
				[
					-28,
					-8
				],
				[
					-47,
					30
				]
			],
			[
				[
					6690,
					6820
				],
				[
					25,
					53
				],
				[
					-2,
					38
				],
				[
					-21,
					10
				],
				[
					-2,
					38
				],
				[
					-9,
					47
				],
				[
					12,
					32
				],
				[
					-12,
					9
				],
				[
					7,
					43
				],
				[
					12,
					74
				]
			],
			[
				[
					5664,
					4412
				],
				[
					3,
					-18
				],
				[
					-4,
					-29
				],
				[
					5,
					-28
				],
				[
					-4,
					-22
				],
				[
					3,
					-20
				],
				[
					-58,
					1
				],
				[
					-2,
					-188
				],
				[
					19,
					-49
				],
				[
					18,
					-37
				]
			],
			[
				[
					5644,
					4022
				],
				[
					-51,
					-24
				],
				[
					-67,
					9
				],
				[
					-19,
					28
				],
				[
					-113,
					-3
				],
				[
					-4,
					-4
				],
				[
					-17,
					27
				],
				[
					-18,
					2
				],
				[
					-16,
					-10
				],
				[
					-14,
					-12
				]
			],
			[
				[
					5325,
					4035
				],
				[
					-2,
					38
				],
				[
					4,
					51
				],
				[
					9,
					55
				],
				[
					2,
					25
				],
				[
					9,
					53
				],
				[
					6,
					24
				],
				[
					16,
					39
				],
				[
					9,
					26
				],
				[
					3,
					44
				],
				[
					-1,
					34
				],
				[
					-9,
					21
				],
				[
					-7,
					36
				],
				[
					-7,
					35
				],
				[
					2,
					12
				],
				[
					8,
					24
				],
				[
					-8,
					57
				],
				[
					-6,
					39
				],
				[
					-14,
					38
				],
				[
					3,
					11
				]
			],
			[
				[
					5342,
					4697
				],
				[
					11,
					8
				],
				[
					8,
					-1
				],
				[
					10,
					7
				],
				[
					82,
					-1
				],
				[
					7,
					-44
				],
				[
					8,
					-35
				],
				[
					6,
					-19
				],
				[
					11,
					-31
				],
				[
					18,
					5
				],
				[
					9,
					8
				],
				[
					16,
					-8
				],
				[
					4,
					14
				],
				[
					7,
					35
				],
				[
					17,
					2
				],
				[
					2,
					10
				],
				[
					14,
					1
				],
				[
					-3,
					-22
				],
				[
					34,
					1
				],
				[
					1,
					-37
				],
				[
					5,
					-23
				],
				[
					-4,
					-36
				],
				[
					2,
					-36
				],
				[
					9,
					-22
				],
				[
					-1,
					-70
				],
				[
					7,
					5
				],
				[
					12,
					-1
				],
				[
					17,
					8
				],
				[
					13,
					-3
				]
			],
			[
				[
					5338,
					4715
				],
				[
					-8,
					45
				]
			],
			[
				[
					5330,
					4760
				],
				[
					12,
					25
				],
				[
					8,
					10
				],
				[
					10,
					-20
				]
			],
			[
				[
					5360,
					4775
				],
				[
					-10,
					-12
				],
				[
					-4,
					-16
				],
				[
					-1,
					-25
				],
				[
					-7,
					-7
				]
			],
			[
				[
					5571,
					7530
				],
				[
					-3,
					-20
				],
				[
					4,
					-25
				],
				[
					11,
					-15
				]
			],
			[
				[
					5583,
					7470
				],
				[
					0,
					-15
				],
				[
					-9,
					-9
				],
				[
					-2,
					-19
				],
				[
					-13,
					-29
				]
			],
			[
				[
					5559,
					7398
				],
				[
					-5,
					5
				],
				[
					0,
					13
				],
				[
					-15,
					19
				],
				[
					-3,
					29
				],
				[
					2,
					40
				],
				[
					4,
					18
				],
				[
					-4,
					10
				]
			],
			[
				[
					5538,
					7532
				],
				[
					-2,
					18
				],
				[
					12,
					29
				],
				[
					1,
					-11
				],
				[
					8,
					6
				]
			],
			[
				[
					5557,
					7574
				],
				[
					6,
					-16
				],
				[
					7,
					-6
				],
				[
					1,
					-22
				]
			],
			[
				[
					6432,
					6490
				],
				[
					5,
					3
				],
				[
					1,
					-16
				],
				[
					22,
					9
				],
				[
					23,
					-2
				],
				[
					17,
					-1
				],
				[
					19,
					39
				],
				[
					20,
					38
				],
				[
					18,
					37
				]
			],
			[
				[
					6557,
					6597
				],
				[
					5,
					-20
				]
			],
			[
				[
					6562,
					6577
				],
				[
					4,
					-47
				]
			],
			[
				[
					6566,
					6530
				],
				[
					-14,
					0
				],
				[
					-3,
					-39
				],
				[
					5,
					-8
				],
				[
					-12,
					-12
				],
				[
					0,
					-24
				],
				[
					-8,
					-24
				],
				[
					-1,
					-24
				]
			],
			[
				[
					6533,
					6399
				],
				[
					-6,
					-12
				],
				[
					-83,
					29
				],
				[
					-11,
					60
				],
				[
					-1,
					14
				]
			],
			[
				[
					3140,
					1814
				],
				[
					-17,
					2
				],
				[
					-30,
					0
				],
				[
					0,
					132
				]
			],
			[
				[
					3093,
					1948
				],
				[
					11,
					-27
				],
				[
					14,
					-45
				],
				[
					36,
					-35
				],
				[
					39,
					-15
				],
				[
					-13,
					-30
				],
				[
					-26,
					-2
				],
				[
					-14,
					20
				]
			],
			[
				[
					3258,
					3743
				],
				[
					51,
					-96
				],
				[
					23,
					-9
				],
				[
					34,
					-44
				],
				[
					29,
					-23
				],
				[
					4,
					-26
				],
				[
					-28,
					-90
				],
				[
					28,
					-16
				],
				[
					32,
					-9
				],
				[
					22,
					10
				],
				[
					25,
					45
				],
				[
					4,
					52
				]
			],
			[
				[
					3482,
					3537
				],
				[
					14,
					11
				],
				[
					14,
					-34
				],
				[
					-1,
					-47
				],
				[
					-23,
					-33
				],
				[
					-19,
					-24
				],
				[
					-31,
					-57
				],
				[
					-37,
					-81
				]
			],
			[
				[
					3399,
					3272
				],
				[
					-7,
					-47
				],
				[
					-7,
					-61
				],
				[
					0,
					-58
				],
				[
					-6,
					-14
				],
				[
					-2,
					-38
				]
			],
			[
				[
					3377,
					3054
				],
				[
					-2,
					-31
				],
				[
					35,
					-50
				],
				[
					-4,
					-41
				],
				[
					18,
					-26
				],
				[
					-2,
					-29
				],
				[
					-26,
					-75
				],
				[
					-42,
					-32
				],
				[
					-55,
					-12
				],
				[
					-31,
					6
				],
				[
					6,
					-36
				],
				[
					-6,
					-44
				],
				[
					5,
					-30
				],
				[
					-16,
					-20
				],
				[
					-29,
					-8
				],
				[
					-26,
					21
				],
				[
					-11,
					-15
				],
				[
					4,
					-59
				],
				[
					18,
					-18
				],
				[
					16,
					19
				],
				[
					8,
					-31
				],
				[
					-26,
					-18
				],
				[
					-22,
					-37
				],
				[
					-4,
					-59
				],
				[
					-7,
					-32
				],
				[
					-26,
					0
				],
				[
					-22,
					-31
				],
				[
					-8,
					-44
				],
				[
					28,
					-43
				],
				[
					26,
					-12
				],
				[
					-9,
					-53
				],
				[
					-33,
					-33
				],
				[
					-18,
					-70
				],
				[
					-25,
					-23
				],
				[
					-12,
					-28
				],
				[
					9,
					-61
				],
				[
					19,
					-34
				],
				[
					-12,
					3
				]
			],
			[
				[
					3095,
					1968
				],
				[
					-26,
					9
				],
				[
					-67,
					8
				],
				[
					-11,
					34
				],
				[
					0,
					45
				],
				[
					-18,
					-4
				],
				[
					-10,
					21
				],
				[
					-3,
					63
				],
				[
					22,
					26
				],
				[
					9,
					37
				],
				[
					-4,
					30
				],
				[
					15,
					51
				],
				[
					10,
					78
				],
				[
					-3,
					35
				],
				[
					12,
					11
				],
				[
					-3,
					22
				],
				[
					-13,
					12
				],
				[
					10,
					25
				],
				[
					-13,
					22
				],
				[
					-6,
					68
				],
				[
					11,
					12
				],
				[
					-5,
					72
				],
				[
					7,
					61
				],
				[
					7,
					52
				],
				[
					17,
					22
				],
				[
					-9,
					58
				],
				[
					0,
					54
				],
				[
					21,
					38
				],
				[
					-1,
					50
				],
				[
					16,
					57
				],
				[
					0,
					55
				],
				[
					-7,
					11
				],
				[
					-13,
					102
				],
				[
					17,
					60
				],
				[
					-2,
					58
				],
				[
					10,
					53
				],
				[
					18,
					56
				],
				[
					20,
					36
				],
				[
					-9,
					24
				],
				[
					6,
					19
				],
				[
					-1,
					98
				],
				[
					30,
					29
				],
				[
					10,
					62
				],
				[
					-3,
					14
				]
			],
			[
				[
					3136,
					3714
				],
				[
					23,
					54
				],
				[
					36,
					-15
				],
				[
					16,
					-42
				],
				[
					11,
					47
				],
				[
					32,
					-2
				],
				[
					4,
					-13
				]
			],
			[
				[
					6210,
					7485
				],
				[
					39,
					9
				]
			],
			[
				[
					6249,
					7494
				],
				[
					5,
					-15
				],
				[
					11,
					-10
				],
				[
					-6,
					-15
				],
				[
					15,
					-21
				],
				[
					-8,
					-18
				],
				[
					12,
					-16
				],
				[
					13,
					-10
				],
				[
					0,
					-41
				]
			],
			[
				[
					6291,
					7348
				],
				[
					-10,
					-2
				]
			],
			[
				[
					6281,
					7346
				],
				[
					-11,
					34
				],
				[
					0,
					10
				],
				[
					-12,
					-1
				],
				[
					-9,
					16
				],
				[
					-5,
					-1
				]
			],
			[
				[
					6244,
					7404
				],
				[
					-11,
					17
				],
				[
					-21,
					15
				],
				[
					3,
					28
				],
				[
					-5,
					21
				]
			],
			[
				[
					3345,
					329
				],
				[
					-8,
					-30
				],
				[
					-8,
					-27
				],
				[
					-59,
					8
				],
				[
					-62,
					-3
				],
				[
					-34,
					20
				],
				[
					0,
					2
				],
				[
					-16,
					17
				],
				[
					63,
					-2
				],
				[
					60,
					-6
				],
				[
					20,
					24
				],
				[
					15,
					21
				],
				[
					29,
					-24
				]
			],
			[
				[
					577,
					361
				],
				[
					-53,
					-8
				],
				[
					-36,
					21
				],
				[
					-17,
					21
				],
				[
					-1,
					3
				],
				[
					-18,
					16
				],
				[
					17,
					22
				],
				[
					52,
					-9
				],
				[
					28,
					-18
				],
				[
					21,
					-21
				],
				[
					7,
					-27
				]
			],
			[
				[
					3745,
					447
				],
				[
					35,
					-26
				],
				[
					12,
					-36
				],
				[
					3,
					-25
				],
				[
					1,
					-30
				],
				[
					-43,
					-19
				],
				[
					-45,
					-15
				],
				[
					-52,
					-14
				],
				[
					-59,
					-11
				],
				[
					-65,
					3
				],
				[
					-37,
					20
				],
				[
					5,
					24
				],
				[
					59,
					16
				],
				[
					24,
					20
				],
				[
					18,
					26
				],
				[
					12,
					22
				],
				[
					17,
					20
				],
				[
					18,
					25
				],
				[
					14,
					0
				],
				[
					41,
					12
				],
				[
					42,
					-12
				]
			],
			[
				[
					1633,
					715
				],
				[
					36,
					-9
				],
				[
					33,
					10
				],
				[
					-16,
					-20
				],
				[
					-26,
					-15
				],
				[
					-39,
					4
				],
				[
					-27,
					21
				],
				[
					6,
					20
				],
				[
					33,
					-11
				]
			],
			[
				[
					1512,
					716
				],
				[
					43,
					-23
				],
				[
					-17,
					3
				],
				[
					-36,
					5
				],
				[
					-38,
					17
				],
				[
					20,
					12
				],
				[
					28,
					-14
				]
			],
			[
				[
					2250,
					808
				],
				[
					31,
					-8
				],
				[
					30,
					7
				],
				[
					17,
					-34
				],
				[
					-22,
					5
				],
				[
					-34,
					-2
				],
				[
					-34,
					2
				],
				[
					-38,
					-4
				],
				[
					-28,
					12
				],
				[
					-15,
					24
				],
				[
					18,
					11
				],
				[
					35,
					-8
				],
				[
					40,
					-5
				]
			],
			[
				[
					3098,
					866
				],
				[
					4,
					-27
				],
				[
					-5,
					-23
				],
				[
					-8,
					-22
				],
				[
					-33,
					-8
				],
				[
					-31,
					-12
				],
				[
					-36,
					1
				],
				[
					14,
					24
				],
				[
					-33,
					-9
				],
				[
					-31,
					-8
				],
				[
					-21,
					18
				],
				[
					-2,
					24
				],
				[
					30,
					23
				],
				[
					20,
					7
				],
				[
					32,
					-2
				],
				[
					8,
					30
				],
				[
					1,
					22
				],
				[
					0,
					47
				],
				[
					16,
					28
				],
				[
					25,
					9
				],
				[
					15,
					-22
				],
				[
					6,
					-22
				],
				[
					12,
					-26
				],
				[
					10,
					-26
				],
				[
					7,
					-26
				]
			],
			[
				[
					0,
					53
				],
				[
					2,
					-1
				],
				[
					24,
					35
				],
				[
					50,
					-19
				],
				[
					3,
					2
				],
				[
					30,
					19
				],
				[
					4,
					0
				],
				[
					3,
					-1
				],
				[
					40,
					-25
				],
				[
					35,
					25
				],
				[
					7,
					3
				],
				[
					81,
					11
				],
				[
					27,
					-14
				],
				[
					13,
					-7
				],
				[
					41,
					-20
				],
				[
					79,
					-15
				],
				[
					63,
					-18
				],
				[
					107,
					-14
				],
				[
					80,
					16
				],
				[
					118,
					-11
				],
				[
					67,
					-19
				],
				[
					73,
					17
				],
				[
					78,
					17
				],
				[
					6,
					27
				],
				[
					-110,
					3
				],
				[
					-89,
					14
				],
				[
					-24,
					23
				],
				[
					-74,
					12
				],
				[
					5,
					27
				],
				[
					10,
					24
				],
				[
					10,
					22
				],
				[
					-5,
					25
				],
				[
					-46,
					16
				],
				[
					-22,
					21
				],
				[
					-43,
					18
				],
				[
					68,
					-3
				],
				[
					64,
					9
				],
				[
					40,
					-20
				],
				[
					50,
					18
				],
				[
					45,
					22
				],
				[
					23,
					19
				],
				[
					-10,
					25
				],
				[
					-36,
					16
				],
				[
					-41,
					17
				],
				[
					-57,
					4
				],
				[
					-50,
					8
				],
				[
					-54,
					6
				],
				[
					-18,
					22
				],
				[
					-36,
					18
				],
				[
					-21,
					21
				],
				[
					-9,
					67
				],
				[
					14,
					-6
				],
				[
					25,
					-18
				],
				[
					45,
					6
				],
				[
					44,
					8
				],
				[
					23,
					-26
				],
				[
					44,
					6
				],
				[
					37,
					13
				],
				[
					35,
					16
				],
				[
					32,
					20
				],
				[
					41,
					5
				],
				[
					-1,
					22
				],
				[
					-9,
					22
				],
				[
					8,
					21
				],
				[
					36,
					11
				],
				[
					16,
					-20
				],
				[
					42,
					12
				],
				[
					32,
					15
				],
				[
					40,
					1
				],
				[
					38,
					6
				],
				[
					37,
					13
				],
				[
					30,
					13
				],
				[
					34,
					13
				],
				[
					22,
					-4
				],
				[
					19,
					-4
				],
				[
					41,
					8
				],
				[
					37,
					-10
				],
				[
					38,
					1
				],
				[
					37,
					8
				],
				[
					37,
					-6
				],
				[
					41,
					-6
				],
				[
					39,
					3
				],
				[
					40,
					-2
				],
				[
					42,
					-1
				],
				[
					38,
					3
				],
				[
					28,
					17
				],
				[
					34,
					9
				],
				[
					35,
					-13
				],
				[
					33,
					11
				],
				[
					30,
					21
				],
				[
					18,
					-19
				],
				[
					9,
					-21
				],
				[
					18,
					-19
				],
				[
					29,
					17
				],
				[
					33,
					-22
				],
				[
					38,
					-7
				],
				[
					32,
					-16
				],
				[
					39,
					3
				],
				[
					36,
					11
				],
				[
					41,
					-3
				],
				[
					38,
					-8
				],
				[
					38,
					-10
				],
				[
					15,
					25
				],
				[
					-18,
					20
				],
				[
					-14,
					21
				],
				[
					-36,
					5
				],
				[
					-15,
					22
				],
				[
					-6,
					22
				],
				[
					-10,
					43
				],
				[
					21,
					-8
				],
				[
					36,
					-3
				],
				[
					36,
					3
				],
				[
					33,
					-9
				],
				[
					28,
					-17
				],
				[
					12,
					-21
				],
				[
					38,
					-4
				],
				[
					36,
					9
				],
				[
					38,
					11
				],
				[
					34,
					7
				],
				[
					28,
					-14
				],
				[
					37,
					5
				],
				[
					24,
					45
				],
				[
					23,
					-27
				],
				[
					32,
					-10
				],
				[
					34,
					6
				],
				[
					23,
					-23
				],
				[
					37,
					-3
				],
				[
					33,
					-7
				],
				[
					34,
					-12
				],
				[
					21,
					22
				],
				[
					11,
					20
				],
				[
					28,
					-23
				],
				[
					38,
					6
				],
				[
					28,
					-13
				],
				[
					19,
					-19
				],
				[
					37,
					5
				],
				[
					29,
					13
				],
				[
					29,
					15
				],
				[
					33,
					8
				],
				[
					39,
					7
				],
				[
					36,
					8
				],
				[
					27,
					13
				],
				[
					16,
					19
				],
				[
					7,
					25
				],
				[
					-3,
					24
				],
				[
					-9,
					24
				],
				[
					-10,
					23
				],
				[
					-9,
					23
				],
				[
					-7,
					21
				],
				[
					-1,
					23
				],
				[
					2,
					23
				],
				[
					13,
					22
				],
				[
					11,
					24
				],
				[
					5,
					23
				],
				[
					-6,
					26
				],
				[
					-3,
					23
				],
				[
					14,
					27
				],
				[
					15,
					17
				],
				[
					18,
					22
				],
				[
					19,
					19
				],
				[
					22,
					17
				],
				[
					11,
					25
				],
				[
					15,
					17
				],
				[
					18,
					15
				],
				[
					26,
					3
				],
				[
					18,
					19
				],
				[
					19,
					11
				],
				[
					23,
					7
				],
				[
					20,
					15
				],
				[
					16,
					19
				],
				[
					22,
					7
				],
				[
					16,
					-15
				],
				[
					-10,
					-20
				],
				[
					-29,
					-17
				],
				[
					-11,
					-13
				],
				[
					-21,
					9
				],
				[
					-23,
					-6
				],
				[
					-19,
					-14
				],
				[
					-20,
					-15
				],
				[
					-14,
					-17
				],
				[
					-4,
					-23
				],
				[
					2,
					-22
				],
				[
					13,
					-20
				],
				[
					-19,
					-14
				],
				[
					-26,
					-4
				],
				[
					-15,
					-20
				],
				[
					-17,
					-19
				],
				[
					-17,
					-25
				],
				[
					-4,
					-22
				],
				[
					9,
					-24
				],
				[
					15,
					-19
				],
				[
					23,
					-14
				],
				[
					21,
					-18
				],
				[
					12,
					-23
				],
				[
					6,
					-22
				],
				[
					8,
					-24
				],
				[
					13,
					-19
				],
				[
					8,
					-22
				],
				[
					4,
					-55
				],
				[
					8,
					-22
				],
				[
					2,
					-23
				],
				[
					9,
					-23
				],
				[
					-4,
					-31
				],
				[
					-15,
					-24
				],
				[
					-17,
					-20
				],
				[
					-37,
					-8
				],
				[
					-12,
					-21
				],
				[
					-17,
					-20
				],
				[
					-42,
					-22
				],
				[
					-37,
					-9
				],
				[
					-35,
					-13
				],
				[
					-37,
					-13
				],
				[
					-22,
					-24
				],
				[
					-45,
					-2
				],
				[
					-49,
					2
				],
				[
					-44,
					-4
				],
				[
					-47,
					0
				],
				[
					9,
					-24
				],
				[
					42,
					-10
				],
				[
					31,
					-16
				],
				[
					18,
					-21
				],
				[
					-31,
					-19
				],
				[
					-48,
					6
				],
				[
					-40,
					-15
				],
				[
					-2,
					-24
				],
				[
					-1,
					-23
				],
				[
					33,
					-20
				],
				[
					6,
					-22
				],
				[
					35,
					-22
				],
				[
					59,
					-9
				],
				[
					50,
					-16
				],
				[
					40,
					-19
				],
				[
					50,
					-18
				],
				[
					70,
					-10
				],
				[
					68,
					-16
				],
				[
					47,
					-17
				],
				[
					52,
					-20
				],
				[
					27,
					-28
				],
				[
					13,
					-22
				],
				[
					34,
					21
				],
				[
					46,
					17
				],
				[
					48,
					19
				],
				[
					58,
					15
				],
				[
					49,
					16
				],
				[
					69,
					1
				],
				[
					68,
					-8
				],
				[
					56,
					-14
				],
				[
					18,
					26
				],
				[
					39,
					17
				],
				[
					70,
					1
				],
				[
					55,
					13
				],
				[
					52,
					13
				],
				[
					58,
					8
				],
				[
					62,
					10
				],
				[
					43,
					15
				],
				[
					-20,
					21
				],
				[
					-12,
					21
				],
				[
					0,
					22
				],
				[
					-54,
					-2
				],
				[
					-57,
					-10
				],
				[
					-54,
					0
				],
				[
					-8,
					22
				],
				[
					4,
					44
				],
				[
					12,
					13
				],
				[
					40,
					14
				],
				[
					47,
					14
				],
				[
					34,
					17
				],
				[
					33,
					18
				],
				[
					25,
					23
				],
				[
					38,
					10
				],
				[
					38,
					8
				],
				[
					19,
					5
				],
				[
					43,
					2
				],
				[
					41,
					8
				],
				[
					34,
					12
				],
				[
					34,
					14
				],
				[
					30,
					14
				],
				[
					39,
					18
				],
				[
					24,
					20
				],
				[
					26,
					17
				],
				[
					9,
					24
				],
				[
					-30,
					13
				],
				[
					10,
					25
				],
				[
					18,
					18
				],
				[
					29,
					12
				],
				[
					31,
					14
				],
				[
					28,
					18
				],
				[
					22,
					23
				],
				[
					13,
					28
				],
				[
					21,
					16
				],
				[
					33,
					-3
				],
				[
					13,
					-20
				],
				[
					34,
					-2
				],
				[
					1,
					22
				],
				[
					14,
					23
				],
				[
					30,
					-6
				],
				[
					7,
					-22
				],
				[
					33,
					-3
				],
				[
					36,
					10
				],
				[
					35,
					7
				],
				[
					31,
					-3
				],
				[
					12,
					-25
				],
				[
					31,
					20
				],
				[
					28,
					10
				],
				[
					31,
					9
				],
				[
					31,
					8
				],
				[
					29,
					14
				],
				[
					31,
					9
				],
				[
					24,
					13
				],
				[
					17,
					20
				],
				[
					20,
					-15
				],
				[
					29,
					8
				],
				[
					20,
					-27
				],
				[
					16,
					-21
				],
				[
					32,
					11
				],
				[
					12,
					24
				],
				[
					28,
					16
				],
				[
					37,
					-4
				],
				[
					11,
					-22
				],
				[
					22,
					22
				],
				[
					30,
					7
				],
				[
					33,
					3
				],
				[
					29,
					-2
				],
				[
					31,
					-7
				],
				[
					30,
					-3
				],
				[
					13,
					-20
				],
				[
					18,
					-17
				],
				[
					31,
					10
				],
				[
					32,
					3
				],
				[
					32,
					0
				],
				[
					31,
					1
				],
				[
					28,
					8
				],
				[
					29,
					7
				],
				[
					25,
					16
				],
				[
					26,
					11
				],
				[
					28,
					5
				],
				[
					21,
					17
				],
				[
					15,
					32
				],
				[
					16,
					20
				],
				[
					29,
					-10
				],
				[
					11,
					-21
				],
				[
					24,
					-13
				],
				[
					29,
					4
				],
				[
					19,
					-21
				],
				[
					21,
					-15
				],
				[
					28,
					14
				],
				[
					10,
					26
				],
				[
					25,
					10
				],
				[
					29,
					20
				],
				[
					27,
					8
				],
				[
					33,
					11
				],
				[
					22,
					13
				],
				[
					22,
					14
				],
				[
					22,
					13
				],
				[
					26,
					-7
				],
				[
					25,
					21
				],
				[
					18,
					16
				],
				[
					26,
					-1
				],
				[
					23,
					14
				],
				[
					6,
					21
				],
				[
					23,
					16
				],
				[
					23,
					11
				],
				[
					28,
					10
				],
				[
					25,
					4
				],
				[
					25,
					-3
				],
				[
					26,
					-6
				],
				[
					22,
					-16
				],
				[
					3,
					-26
				],
				[
					24,
					-19
				],
				[
					17,
					-17
				],
				[
					33,
					-7
				],
				[
					19,
					-16
				],
				[
					23,
					-16
				],
				[
					26,
					-3
				],
				[
					23,
					11
				],
				[
					24,
					24
				],
				[
					26,
					-12
				],
				[
					27,
					-7
				],
				[
					26,
					-7
				],
				[
					27,
					-5
				],
				[
					28,
					0
				],
				[
					23,
					-61
				],
				[
					-1,
					-15
				],
				[
					-4,
					-27
				],
				[
					-26,
					-15
				],
				[
					-22,
					-22
				],
				[
					4,
					-23
				],
				[
					31,
					1
				],
				[
					-4,
					-23
				],
				[
					-14,
					-22
				],
				[
					-13,
					-24
				],
				[
					21,
					-19
				],
				[
					32,
					-6
				],
				[
					32,
					11
				],
				[
					15,
					23
				],
				[
					10,
					22
				],
				[
					15,
					18
				],
				[
					17,
					18
				],
				[
					7,
					21
				],
				[
					15,
					29
				],
				[
					18,
					5
				],
				[
					31,
					3
				],
				[
					28,
					7
				],
				[
					28,
					9
				],
				[
					14,
					23
				],
				[
					8,
					22
				],
				[
					19,
					22
				],
				[
					27,
					15
				],
				[
					23,
					12
				],
				[
					16,
					19
				],
				[
					15,
					11
				],
				[
					21,
					9
				],
				[
					27,
					-6
				],
				[
					25,
					6
				],
				[
					28,
					7
				],
				[
					30,
					-4
				],
				[
					20,
					17
				],
				[
					14,
					39
				],
				[
					11,
					-16
				],
				[
					13,
					-28
				],
				[
					23,
					-12
				],
				[
					27,
					-4
				],
				[
					26,
					7
				],
				[
					29,
					-5
				],
				[
					26,
					-1
				],
				[
					17,
					6
				],
				[
					24,
					-4
				],
				[
					21,
					-12
				],
				[
					25,
					8
				],
				[
					30,
					0
				],
				[
					25,
					8
				],
				[
					29,
					-8
				],
				[
					19,
					19
				],
				[
					14,
					20
				],
				[
					19,
					16
				],
				[
					35,
					44
				],
				[
					18,
					-8
				],
				[
					21,
					-16
				],
				[
					18,
					-21
				],
				[
					36,
					-36
				],
				[
					27,
					-1
				],
				[
					25,
					0
				],
				[
					30,
					7
				],
				[
					30,
					8
				],
				[
					23,
					16
				],
				[
					19,
					18
				],
				[
					31,
					2
				],
				[
					21,
					13
				],
				[
					22,
					-12
				],
				[
					14,
					-18
				],
				[
					19,
					-19
				],
				[
					31,
					2
				],
				[
					19,
					-15
				],
				[
					33,
					-15
				],
				[
					35,
					-5
				],
				[
					29,
					4
				],
				[
					21,
					19
				],
				[
					19,
					18
				],
				[
					25,
					5
				],
				[
					25,
					-8
				],
				[
					29,
					-6
				],
				[
					26,
					9
				],
				[
					25,
					0
				],
				[
					24,
					-6
				],
				[
					26,
					-5
				],
				[
					25,
					10
				],
				[
					30,
					9
				],
				[
					28,
					3
				],
				[
					32,
					0
				],
				[
					25,
					5
				],
				[
					25,
					5
				],
				[
					8,
					29
				],
				[
					1,
					24
				],
				[
					17,
					-16
				],
				[
					5,
					-27
				],
				[
					10,
					-24
				],
				[
					11,
					-20
				],
				[
					23,
					-10
				],
				[
					32,
					4
				],
				[
					36,
					1
				],
				[
					25,
					3
				],
				[
					37,
					0
				],
				[
					26,
					1
				],
				[
					36,
					-2
				],
				[
					31,
					-5
				],
				[
					20,
					-18
				],
				[
					-5,
					-22
				],
				[
					18,
					-18
				],
				[
					30,
					-13
				],
				[
					31,
					-15
				],
				[
					35,
					-11
				],
				[
					38,
					-9
				],
				[
					28,
					-9
				],
				[
					32,
					-2
				],
				[
					18,
					20
				],
				[
					24,
					-16
				],
				[
					21,
					-19
				],
				[
					25,
					-13
				],
				[
					34,
					-6
				],
				[
					32,
					-7
				],
				[
					13,
					-23
				],
				[
					32,
					-14
				],
				[
					21,
					-21
				],
				[
					31,
					-9
				],
				[
					32,
					1
				],
				[
					30,
					-4
				],
				[
					33,
					1
				],
				[
					34,
					-4
				],
				[
					31,
					-8
				],
				[
					28,
					-14
				],
				[
					29,
					-12
				],
				[
					20,
					-17
				],
				[
					-3,
					-23
				],
				[
					-15,
					-21
				],
				[
					-13,
					-27
				],
				[
					-9,
					-21
				],
				[
					-14,
					-24
				],
				[
					-36,
					-9
				],
				[
					-16,
					-21
				],
				[
					-36,
					-13
				],
				[
					-13,
					-23
				],
				[
					-19,
					-22
				],
				[
					-20,
					-18
				],
				[
					-11,
					-25
				],
				[
					-7,
					-22
				],
				[
					-3,
					-26
				],
				[
					0,
					-22
				],
				[
					16,
					-23
				],
				[
					6,
					-22
				],
				[
					13,
					-21
				],
				[
					52,
					-8
				],
				[
					11,
					-26
				],
				[
					-50,
					-9
				],
				[
					-43,
					-13
				],
				[
					-52,
					-2
				],
				[
					-24,
					-34
				],
				[
					-5,
					-27
				],
				[
					-12,
					-22
				],
				[
					-14,
					-22
				],
				[
					37,
					-20
				],
				[
					14,
					-24
				],
				[
					24,
					-22
				],
				[
					33,
					-20
				],
				[
					39,
					-19
				],
				[
					42,
					-18
				],
				[
					64,
					-19
				],
				[
					14,
					-29
				],
				[
					80,
					-12
				],
				[
					5,
					-5
				],
				[
					21,
					-17
				],
				[
					77,
					15
				],
				[
					63,
					-19
				],
				[
					-9951,
					-14
				]
			],
			[
				[
					6914,
					2185
				],
				[
					18,
					-19
				],
				[
					26,
					-7
				],
				[
					1,
					-11
				],
				[
					-7,
					-27
				],
				[
					-43,
					-4
				],
				[
					-1,
					31
				],
				[
					4,
					25
				],
				[
					2,
					12
				]
			],
			[
				[
					9038,
					2648
				],
				[
					27,
					-21
				],
				[
					15,
					8
				],
				[
					22,
					12
				],
				[
					16,
					-4
				],
				[
					2,
					-70
				],
				[
					-9,
					-21
				],
				[
					-3,
					-47
				],
				[
					-10,
					16
				],
				[
					-19,
					-41
				],
				[
					-6,
					3
				],
				[
					-17,
					2
				],
				[
					-17,
					50
				],
				[
					-4,
					39
				],
				[
					-16,
					52
				],
				[
					1,
					27
				],
				[
					18,
					-5
				]
			],
			[
				[
					8987,
					4244
				],
				[
					10,
					-46
				],
				[
					18,
					22
				],
				[
					9,
					-25
				],
				[
					13,
					-23
				],
				[
					-3,
					-26
				],
				[
					6,
					-51
				],
				[
					5,
					-29
				],
				[
					7,
					-7
				],
				[
					7,
					-51
				],
				[
					-3,
					-30
				],
				[
					9,
					-40
				],
				[
					31,
					-31
				],
				[
					19,
					-28
				],
				[
					19,
					-26
				],
				[
					-4,
					-14
				],
				[
					16,
					-37
				],
				[
					11,
					-64
				],
				[
					11,
					13
				],
				[
					11,
					-26
				],
				[
					7,
					9
				],
				[
					5,
					-63
				],
				[
					19,
					-36
				],
				[
					13,
					-22
				],
				[
					22,
					-48
				],
				[
					8,
					-48
				],
				[
					1,
					-33
				],
				[
					-2,
					-37
				],
				[
					13,
					-50
				],
				[
					-2,
					-52
				],
				[
					-5,
					-28
				],
				[
					-7,
					-52
				],
				[
					1,
					-34
				],
				[
					-6,
					-43
				],
				[
					-12,
					-53
				],
				[
					-21,
					-29
				],
				[
					-10,
					-46
				],
				[
					-9,
					-29
				],
				[
					-8,
					-51
				],
				[
					-11,
					-30
				],
				[
					-7,
					-44
				],
				[
					-4,
					-41
				],
				[
					2,
					-18
				],
				[
					-16,
					-21
				],
				[
					-31,
					-2
				],
				[
					-26,
					-24
				],
				[
					-13,
					-23
				],
				[
					-17,
					-26
				],
				[
					-23,
					27
				],
				[
					-17,
					10
				],
				[
					5,
					31
				],
				[
					-15,
					-11
				],
				[
					-25,
					-43
				],
				[
					-24,
					16
				],
				[
					-15,
					9
				],
				[
					-16,
					4
				],
				[
					-27,
					17
				],
				[
					-18,
					37
				],
				[
					-5,
					45
				],
				[
					-7,
					30
				],
				[
					-13,
					24
				],
				[
					-27,
					7
				],
				[
					9,
					28
				],
				[
					-7,
					44
				],
				[
					-13,
					-41
				],
				[
					-25,
					-11
				],
				[
					14,
					33
				],
				[
					5,
					34
				],
				[
					10,
					29
				],
				[
					-2,
					44
				],
				[
					-22,
					-50
				],
				[
					-18,
					-21
				],
				[
					-10,
					-47
				],
				[
					-22,
					25
				],
				[
					1,
					31
				],
				[
					-18,
					43
				],
				[
					-14,
					22
				],
				[
					5,
					14
				],
				[
					-36,
					35
				],
				[
					-19,
					2
				],
				[
					-27,
					29
				],
				[
					-50,
					-6
				],
				[
					-36,
					-21
				],
				[
					-31,
					-20
				],
				[
					-27,
					4
				],
				[
					-29,
					-30
				],
				[
					-24,
					-14
				],
				[
					-6,
					-31
				],
				[
					-10,
					-24
				],
				[
					-23,
					-1
				],
				[
					-18,
					-5
				],
				[
					-24,
					10
				],
				[
					-20,
					-6
				],
				[
					-19,
					-3
				],
				[
					-17,
					-31
				],
				[
					-8,
					2
				],
				[
					-14,
					-16
				],
				[
					-13,
					-19
				],
				[
					-21,
					2
				],
				[
					-18,
					0
				],
				[
					-30,
					38
				],
				[
					-15,
					11
				],
				[
					1,
					34
				],
				[
					14,
					8
				],
				[
					4,
					14
				],
				[
					-1,
					21
				],
				[
					4,
					41
				],
				[
					-3,
					35
				],
				[
					-15,
					60
				],
				[
					-4,
					33
				],
				[
					1,
					34
				],
				[
					-11,
					38
				],
				[
					-1,
					18
				],
				[
					-12,
					23
				],
				[
					-4,
					47
				],
				[
					-16,
					46
				],
				[
					-4,
					26
				],
				[
					13,
					-26
				],
				[
					-10,
					55
				],
				[
					14,
					-17
				],
				[
					8,
					-23
				],
				[
					0,
					30
				],
				[
					-14,
					47
				],
				[
					-3,
					18
				],
				[
					-6,
					18
				],
				[
					3,
					34
				],
				[
					6,
					15
				],
				[
					4,
					29
				],
				[
					-3,
					35
				],
				[
					11,
					42
				],
				[
					2,
					-45
				],
				[
					12,
					41
				],
				[
					22,
					20
				],
				[
					14,
					25
				],
				[
					21,
					22
				],
				[
					13,
					4
				],
				[
					7,
					-7
				],
				[
					22,
					22
				],
				[
					17,
					6
				],
				[
					4,
					13
				],
				[
					8,
					6
				],
				[
					15,
					-2
				],
				[
					29,
					18
				],
				[
					15,
					26
				],
				[
					7,
					31
				],
				[
					17,
					30
				],
				[
					1,
					24
				],
				[
					1,
					32
				],
				[
					19,
					50
				],
				[
					12,
					-51
				],
				[
					12,
					12
				],
				[
					-10,
					28
				],
				[
					9,
					29
				],
				[
					12,
					-13
				],
				[
					3,
					45
				],
				[
					15,
					29
				],
				[
					7,
					23
				],
				[
					14,
					10
				],
				[
					0,
					17
				],
				[
					13,
					-7
				],
				[
					0,
					15
				],
				[
					12,
					8
				],
				[
					14,
					8
				],
				[
					20,
					-27
				],
				[
					16,
					-35
				],
				[
					17,
					0
				],
				[
					18,
					-6
				],
				[
					-6,
					33
				],
				[
					13,
					47
				],
				[
					13,
					15
				],
				[
					-5,
					15
				],
				[
					12,
					34
				],
				[
					17,
					21
				],
				[
					14,
					-7
				],
				[
					24,
					11
				],
				[
					-1,
					30
				],
				[
					-20,
					19
				],
				[
					15,
					9
				],
				[
					18,
					-15
				],
				[
					15,
					-24
				],
				[
					23,
					-15
				],
				[
					8,
					6
				],
				[
					17,
					-18
				],
				[
					17,
					17
				],
				[
					10,
					-5
				],
				[
					7,
					11
				],
				[
					12,
					-29
				],
				[
					-7,
					-32
				],
				[
					-11,
					-24
				],
				[
					-9,
					-2
				],
				[
					3,
					-23
				],
				[
					-8,
					-30
				],
				[
					-10,
					-29
				],
				[
					2,
					-17
				],
				[
					22,
					-32
				],
				[
					21,
					-19
				],
				[
					15,
					-20
				],
				[
					20,
					-35
				],
				[
					8,
					0
				],
				[
					14,
					-15
				],
				[
					4,
					-19
				],
				[
					27,
					-20
				],
				[
					18,
					20
				],
				[
					6,
					32
				],
				[
					5,
					26
				],
				[
					4,
					33
				],
				[
					8,
					47
				],
				[
					-4,
					28
				],
				[
					2,
					17
				],
				[
					-3,
					34
				],
				[
					4,
					45
				],
				[
					5,
					12
				],
				[
					-4,
					20
				],
				[
					7,
					31
				],
				[
					5,
					32
				],
				[
					1,
					17
				],
				[
					10,
					22
				],
				[
					8,
					-29
				],
				[
					2,
					-37
				],
				[
					7,
					-7
				],
				[
					1,
					-25
				],
				[
					10,
					-30
				],
				[
					2,
					-33
				],
				[
					-1,
					-22
				]
			],
			[
				[
					5471,
					7900
				],
				[
					-2,
					-24
				],
				[
					-16,
					0
				],
				[
					6,
					-13
				],
				[
					-9,
					-38
				]
			],
			[
				[
					5450,
					7825
				],
				[
					-6,
					-10
				],
				[
					-24,
					-1
				],
				[
					-14,
					-13
				],
				[
					-23,
					4
				]
			],
			[
				[
					5383,
					7805
				],
				[
					-40,
					15
				],
				[
					-6,
					21
				],
				[
					-27,
					-10
				],
				[
					-4,
					-12
				],
				[
					-16,
					9
				]
			],
			[
				[
					5290,
					7828
				],
				[
					-15,
					1
				],
				[
					-12,
					11
				],
				[
					4,
					15
				],
				[
					-1,
					10
				]
			],
			[
				[
					5266,
					7865
				],
				[
					8,
					3
				],
				[
					14,
					-16
				],
				[
					4,
					16
				],
				[
					25,
					-3
				],
				[
					20,
					11
				],
				[
					13,
					-2
				],
				[
					9,
					-12
				],
				[
					2,
					10
				],
				[
					-4,
					38
				],
				[
					10,
					8
				],
				[
					10,
					27
				]
			],
			[
				[
					5377,
					7945
				],
				[
					21,
					-19
				],
				[
					15,
					24
				],
				[
					10,
					5
				],
				[
					22,
					-18
				],
				[
					13,
					3
				],
				[
					13,
					-12
				]
			],
			[
				[
					5471,
					7928
				],
				[
					-3,
					-7
				],
				[
					3,
					-21
				]
			],
			[
				[
					6281,
					7346
				],
				[
					-19,
					8
				],
				[
					-14,
					27
				],
				[
					-4,
					23
				]
			],
			[
				[
					6349,
					7527
				],
				[
					15,
					-31
				],
				[
					14,
					-42
				],
				[
					13,
					-2
				],
				[
					8,
					-16
				],
				[
					-23,
					-5
				],
				[
					-5,
					-46
				],
				[
					-4,
					-21
				],
				[
					-11,
					-13
				],
				[
					1,
					-30
				]
			],
			[
				[
					6357,
					7321
				],
				[
					-7,
					-3
				],
				[
					-17,
					31
				],
				[
					10,
					30
				],
				[
					-9,
					17
				],
				[
					-10,
					-4
				],
				[
					-33,
					-44
				]
			],
			[
				[
					6249,
					7494
				],
				[
					6,
					10
				],
				[
					21,
					-17
				],
				[
					15,
					-4
				],
				[
					4,
					7
				],
				[
					-14,
					32
				],
				[
					7,
					9
				]
			],
			[
				[
					6288,
					7531
				],
				[
					8,
					-2
				],
				[
					19,
					-36
				],
				[
					13,
					-4
				],
				[
					4,
					15
				],
				[
					17,
					23
				]
			],
			[
				[
					5814,
					4792
				],
				[
					-1,
					71
				],
				[
					-7,
					27
				]
			],
			[
				[
					5806,
					4890
				],
				[
					17,
					-5
				],
				[
					8,
					34
				],
				[
					15,
					-4
				]
			],
			[
				[
					5846,
					4915
				],
				[
					1,
					-23
				],
				[
					6,
					-14
				],
				[
					1,
					-19
				],
				[
					-7,
					-12
				],
				[
					-11,
					-31
				],
				[
					-10,
					-22
				],
				[
					-12,
					-2
				]
			],
			[
				[
					5092,
					8091
				],
				[
					20,
					-5
				],
				[
					26,
					12
				],
				[
					17,
					-25
				],
				[
					16,
					-14
				]
			],
			[
				[
					5171,
					8059
				],
				[
					-4,
					-40
				]
			],
			[
				[
					5167,
					8019
				],
				[
					-7,
					-2
				],
				[
					-3,
					-33
				]
			],
			[
				[
					5157,
					7984
				],
				[
					-24,
					26
				],
				[
					-14,
					-4
				],
				[
					-20,
					28
				],
				[
					-13,
					23
				],
				[
					-13,
					1
				],
				[
					-4,
					21
				]
			],
			[
				[
					5069,
					8079
				],
				[
					23,
					12
				]
			],
			[
				[
					5074,
					5427
				],
				[
					-23,
					-7
				]
			],
			[
				[
					5051,
					5420
				],
				[
					-7,
					41
				],
				[
					2,
					136
				],
				[
					-6,
					12
				],
				[
					-1,
					29
				],
				[
					-10,
					21
				],
				[
					-8,
					17
				],
				[
					3,
					31
				]
			],
			[
				[
					5024,
					5707
				],
				[
					10,
					7
				],
				[
					6,
					26
				],
				[
					13,
					5
				],
				[
					6,
					18
				]
			],
			[
				[
					5059,
					5763
				],
				[
					10,
					17
				],
				[
					10,
					0
				],
				[
					21,
					-34
				]
			],
			[
				[
					5100,
					5746
				],
				[
					-1,
					-19
				],
				[
					6,
					-35
				],
				[
					-6,
					-24
				],
				[
					3,
					-16
				],
				[
					-13,
					-37
				],
				[
					-9,
					-18
				],
				[
					-5,
					-37
				],
				[
					1,
					-38
				],
				[
					-2,
					-95
				]
			],
			[
				[
					4921,
					5627
				],
				[
					-19,
					15
				],
				[
					-13,
					-2
				],
				[
					-10,
					-15
				],
				[
					-12,
					13
				],
				[
					-5,
					19
				],
				[
					-13,
					13
				]
			],
			[
				[
					4849,
					5670
				],
				[
					-1,
					34
				],
				[
					7,
					26
				],
				[
					-1,
					20
				],
				[
					23,
					48
				],
				[
					4,
					41
				],
				[
					7,
					14
				],
				[
					14,
					-8
				],
				[
					11,
					12
				],
				[
					4,
					16
				],
				[
					22,
					26
				],
				[
					5,
					19
				],
				[
					26,
					24
				],
				[
					15,
					9
				],
				[
					7,
					-12
				],
				[
					18,
					0
				]
			],
			[
				[
					5010,
					5939
				],
				[
					-2,
					-28
				],
				[
					3,
					-27
				],
				[
					16,
					-39
				],
				[
					1,
					-28
				],
				[
					32,
					-14
				],
				[
					-1,
					-40
				]
			],
			[
				[
					5024,
					5707
				],
				[
					-24,
					1
				]
			],
			[
				[
					5000,
					5708
				],
				[
					-13,
					5
				],
				[
					-9,
					-9
				],
				[
					-12,
					4
				],
				[
					-48,
					-3
				],
				[
					-1,
					-33
				],
				[
					4,
					-45
				]
			],
			[
				[
					7573,
					6360
				],
				[
					0,
					-43
				],
				[
					-10,
					9
				],
				[
					2,
					-47
				]
			],
			[
				[
					7565,
					6279
				],
				[
					-8,
					30
				],
				[
					-1,
					31
				],
				[
					-6,
					28
				],
				[
					-11,
					34
				],
				[
					-26,
					3
				],
				[
					3,
					-25
				],
				[
					-9,
					-32
				],
				[
					-12,
					12
				],
				[
					-4,
					-11
				],
				[
					-8,
					6
				],
				[
					-11,
					5
				]
			],
			[
				[
					7472,
					6360
				],
				[
					-4,
					49
				],
				[
					-10,
					45
				],
				[
					5,
					35
				],
				[
					-17,
					16
				],
				[
					6,
					22
				],
				[
					18,
					22
				],
				[
					-20,
					31
				],
				[
					9,
					40
				],
				[
					22,
					-26
				],
				[
					14,
					-3
				],
				[
					2,
					-41
				],
				[
					26,
					-8
				],
				[
					26,
					1
				],
				[
					16,
					-10
				],
				[
					-13,
					-50
				],
				[
					-12,
					-3
				],
				[
					-9,
					-34
				],
				[
					16,
					-31
				],
				[
					4,
					38
				],
				[
					8,
					0
				],
				[
					14,
					-93
				]
			],
			[
				[
					5629,
					7671
				],
				[
					8,
					-25
				],
				[
					11,
					5
				],
				[
					21,
					-9
				],
				[
					41,
					-4
				],
				[
					13,
					16
				],
				[
					33,
					13
				],
				[
					20,
					-21
				],
				[
					17,
					-6
				]
			],
			[
				[
					5793,
					7640
				],
				[
					-15,
					-25
				],
				[
					-10,
					-42
				],
				[
					9,
					-34
				]
			],
			[
				[
					5777,
					7539
				],
				[
					-24,
					8
				],
				[
					-28,
					-18
				]
			],
			[
				[
					5725,
					7529
				],
				[
					0,
					-30
				],
				[
					-26,
					-5
				],
				[
					-19,
					20
				],
				[
					-22,
					-16
				],
				[
					-21,
					2
				]
			],
			[
				[
					5637,
					7500
				],
				[
					-2,
					39
				],
				[
					-14,
					19
				]
			],
			[
				[
					5621,
					7558
				],
				[
					5,
					8
				],
				[
					-3,
					7
				],
				[
					4,
					19
				],
				[
					11,
					18
				],
				[
					-14,
					26
				],
				[
					-2,
					21
				],
				[
					7,
					14
				]
			],
			[
				[
					2846,
					6461
				],
				[
					-7,
					-3
				],
				[
					-7,
					34
				],
				[
					-10,
					17
				],
				[
					6,
					38
				],
				[
					8,
					-3
				],
				[
					10,
					-49
				],
				[
					0,
					-34
				]
			],
			[
				[
					2838,
					6628
				],
				[
					-30,
					-10
				],
				[
					-2,
					22
				],
				[
					13,
					5
				],
				[
					18,
					-2
				],
				[
					1,
					-15
				]
			],
			[
				[
					2861,
					6628
				],
				[
					-5,
					-42
				],
				[
					-5,
					8
				],
				[
					0,
					31
				],
				[
					-12,
					23
				],
				[
					0,
					7
				],
				[
					22,
					-27
				]
			],
			[
				[
					5527,
					7708
				],
				[
					10,
					0
				],
				[
					-7,
					-26
				],
				[
					14,
					-23
				],
				[
					-4,
					-28
				],
				[
					-7,
					-2
				]
			],
			[
				[
					5533,
					7629
				],
				[
					-5,
					-6
				],
				[
					-9,
					-13
				],
				[
					-4,
					-33
				]
			],
			[
				[
					5515,
					7577
				],
				[
					-25,
					23
				],
				[
					-10,
					24
				],
				[
					-11,
					13
				],
				[
					-12,
					22
				],
				[
					-6,
					19
				],
				[
					-14,
					27
				],
				[
					6,
					25
				],
				[
					10,
					-14
				],
				[
					6,
					12
				],
				[
					13,
					2
				],
				[
					24,
					-10
				],
				[
					19,
					1
				],
				[
					12,
					-13
				]
			],
			[
				[
					5652,
					8242
				],
				[
					27,
					0
				],
				[
					30,
					22
				],
				[
					6,
					34
				],
				[
					23,
					19
				],
				[
					-3,
					26
				]
			],
			[
				[
					5735,
					8343
				],
				[
					17,
					10
				],
				[
					30,
					23
				]
			],
			[
				[
					5782,
					8376
				],
				[
					29,
					-15
				],
				[
					4,
					-15
				],
				[
					15,
					7
				],
				[
					27,
					-14
				],
				[
					3,
					-27
				],
				[
					-6,
					-16
				],
				[
					17,
					-39
				],
				[
					12,
					-11
				],
				[
					-2,
					-11
				],
				[
					19,
					-10
				],
				[
					8,
					-16
				],
				[
					-11,
					-13
				],
				[
					-23,
					2
				],
				[
					-5,
					-5
				],
				[
					7,
					-20
				],
				[
					6,
					-37
				]
			],
			[
				[
					5882,
					8136
				],
				[
					-23,
					-4
				],
				[
					-9,
					-13
				],
				[
					-2,
					-30
				],
				[
					-11,
					6
				],
				[
					-25,
					-3
				],
				[
					-7,
					14
				],
				[
					-11,
					-10
				],
				[
					-10,
					8
				],
				[
					-22,
					1
				],
				[
					-31,
					15
				],
				[
					-28,
					4
				],
				[
					-22,
					-1
				],
				[
					-15,
					-16
				],
				[
					-13,
					-2
				]
			],
			[
				[
					5653,
					8105
				],
				[
					-1,
					26
				],
				[
					-8,
					27
				],
				[
					17,
					12
				],
				[
					0,
					24
				],
				[
					-8,
					22
				],
				[
					-1,
					26
				]
			],
			[
				[
					2524,
					6110
				],
				[
					-1,
					8
				],
				[
					4,
					3
				],
				[
					5,
					-7
				],
				[
					10,
					36
				],
				[
					5,
					0
				]
			],
			[
				[
					2547,
					6150
				],
				[
					0,
					-8
				],
				[
					5,
					-1
				],
				[
					0,
					-16
				],
				[
					-5,
					-25
				],
				[
					3,
					-9
				],
				[
					-3,
					-21
				],
				[
					2,
					-6
				],
				[
					-4,
					-30
				],
				[
					-5,
					-16
				],
				[
					-5,
					-1
				],
				[
					-6,
					-21
				]
			],
			[
				[
					2529,
					5996
				],
				[
					-8,
					0
				],
				[
					2,
					67
				],
				[
					1,
					47
				]
			],
			[
				[
					3136,
					3714
				],
				[
					-20,
					-8
				],
				[
					-11,
					82
				],
				[
					-15,
					66
				],
				[
					9,
					57
				],
				[
					-15,
					25
				],
				[
					-4,
					43
				],
				[
					-13,
					40
				]
			],
			[
				[
					3067,
					4019
				],
				[
					17,
					64
				],
				[
					-12,
					49
				],
				[
					7,
					20
				],
				[
					-5,
					22
				],
				[
					10,
					30
				],
				[
					1,
					50
				],
				[
					1,
					41
				],
				[
					6,
					20
				],
				[
					-24,
					96
				]
			],
			[
				[
					3068,
					4411
				],
				[
					21,
					-5
				],
				[
					14,
					1
				],
				[
					6,
					18
				],
				[
					25,
					24
				],
				[
					14,
					22
				],
				[
					37,
					10
				],
				[
					-3,
					-44
				],
				[
					3,
					-23
				],
				[
					-2,
					-40
				],
				[
					30,
					-53
				],
				[
					31,
					-9
				],
				[
					11,
					-23
				],
				[
					19,
					-11
				],
				[
					11,
					-17
				],
				[
					18,
					0
				],
				[
					16,
					-17
				],
				[
					1,
					-34
				],
				[
					6,
					-18
				],
				[
					0,
					-25
				],
				[
					-8,
					-1
				],
				[
					11,
					-69
				],
				[
					53,
					-2
				],
				[
					-4,
					-35
				],
				[
					3,
					-23
				],
				[
					15,
					-16
				],
				[
					6,
					-37
				],
				[
					-4,
					-47
				],
				[
					-8,
					-26
				],
				[
					3,
					-33
				],
				[
					-9,
					-12
				]
			],
			[
				[
					3384,
					3866
				],
				[
					-1,
					18
				],
				[
					-25,
					30
				],
				[
					-26,
					1
				],
				[
					-49,
					-17
				],
				[
					-13,
					-52
				],
				[
					-1,
					-32
				],
				[
					-11,
					-71
				]
			],
			[
				[
					3482,
					3537
				],
				[
					6,
					34
				],
				[
					3,
					35
				],
				[
					1,
					32
				],
				[
					-10,
					11
				],
				[
					-11,
					-9
				],
				[
					-10,
					2
				],
				[
					-4,
					23
				],
				[
					-2,
					54
				],
				[
					-5,
					18
				],
				[
					-19,
					16
				],
				[
					-11,
					-12
				],
				[
					-30,
					11
				],
				[
					2,
					81
				],
				[
					-8,
					33
				]
			],
			[
				[
					3068,
					4411
				],
				[
					-15,
					-11
				],
				[
					-13,
					7
				],
				[
					2,
					90
				],
				[
					-23,
					-35
				],
				[
					-24,
					2
				],
				[
					-11,
					31
				],
				[
					-18,
					4
				],
				[
					5,
					25
				],
				[
					-15,
					36
				],
				[
					-11,
					53
				],
				[
					7,
					11
				],
				[
					0,
					25
				],
				[
					17,
					17
				],
				[
					-3,
					32
				],
				[
					7,
					20
				],
				[
					2,
					28
				],
				[
					32,
					40
				],
				[
					22,
					11
				],
				[
					4,
					9
				],
				[
					25,
					-2
				]
			],
			[
				[
					3058,
					4804
				],
				[
					13,
					162
				],
				[
					0,
					25
				],
				[
					-4,
					34
				],
				[
					-12,
					22
				],
				[
					0,
					42
				],
				[
					15,
					10
				],
				[
					6,
					-6
				],
				[
					1,
					23
				],
				[
					-16,
					6
				],
				[
					-1,
					37
				],
				[
					54,
					-2
				],
				[
					10,
					21
				],
				[
					7,
					-19
				],
				[
					6,
					-35
				],
				[
					5,
					8
				]
			],
			[
				[
					3142,
					5132
				],
				[
					15,
					-32
				],
				[
					22,
					4
				],
				[
					5,
					18
				],
				[
					21,
					14
				],
				[
					11,
					10
				],
				[
					4,
					25
				],
				[
					19,
					17
				],
				[
					-1,
					12
				],
				[
					-24,
					5
				],
				[
					-3,
					37
				],
				[
					1,
					40
				],
				[
					-13,
					15
				],
				[
					5,
					6
				],
				[
					21,
					-8
				],
				[
					22,
					-15
				],
				[
					8,
					14
				],
				[
					20,
					9
				],
				[
					31,
					23
				],
				[
					10,
					22
				],
				[
					-3,
					17
				]
			],
			[
				[
					3313,
					5365
				],
				[
					14,
					2
				],
				[
					7,
					-13
				],
				[
					-4,
					-26
				],
				[
					9,
					-9
				],
				[
					7,
					-28
				],
				[
					-8,
					-20
				],
				[
					-4,
					-51
				],
				[
					7,
					-30
				],
				[
					2,
					-27
				],
				[
					17,
					-28
				],
				[
					14,
					-3
				],
				[
					3,
					12
				],
				[
					8,
					3
				],
				[
					13,
					10
				],
				[
					9,
					16
				],
				[
					15,
					-5
				],
				[
					7,
					2
				]
			],
			[
				[
					3429,
					5170
				],
				[
					15,
					-5
				],
				[
					3,
					12
				],
				[
					-5,
					12
				],
				[
					3,
					17
				],
				[
					11,
					-5
				],
				[
					13,
					6
				],
				[
					16,
					-13
				]
			],
			[
				[
					3485,
					5194
				],
				[
					12,
					-12
				],
				[
					9,
					16
				],
				[
					6,
					-3
				],
				[
					4,
					-16
				],
				[
					13,
					4
				],
				[
					11,
					22
				],
				[
					8,
					44
				],
				[
					17,
					54
				]
			],
			[
				[
					3565,
					5303
				],
				[
					9,
					3
				],
				[
					7,
					-33
				],
				[
					16,
					-103
				],
				[
					14,
					-10
				],
				[
					1,
					-41
				],
				[
					-21,
					-48
				],
				[
					9,
					-18
				],
				[
					49,
					-9
				],
				[
					1,
					-60
				],
				[
					21,
					39
				],
				[
					35,
					-21
				],
				[
					46,
					-36
				],
				[
					14,
					-35
				],
				[
					-5,
					-32
				],
				[
					33,
					18
				],
				[
					54,
					-32
				],
				[
					41,
					3
				],
				[
					41,
					-49
				],
				[
					36,
					-66
				],
				[
					21,
					-17
				],
				[
					24,
					-3
				],
				[
					10,
					-18
				],
				[
					9,
					-76
				],
				[
					5,
					-35
				],
				[
					-11,
					-98
				],
				[
					-14,
					-39
				],
				[
					-39,
					-82
				],
				[
					-18,
					-67
				],
				[
					-21,
					-51
				],
				[
					-7,
					-1
				],
				[
					-7,
					-43
				],
				[
					2,
					-111
				],
				[
					-8,
					-91
				],
				[
					-3,
					-39
				],
				[
					-9,
					-23
				],
				[
					-5,
					-79
				],
				[
					-28,
					-77
				],
				[
					-5,
					-61
				],
				[
					-22,
					-26
				],
				[
					-7,
					-35
				],
				[
					-30,
					0
				],
				[
					-44,
					-23
				],
				[
					-19,
					-26
				],
				[
					-31,
					-18
				],
				[
					-33,
					-47
				],
				[
					-23,
					-58
				],
				[
					-5,
					-44
				],
				[
					5,
					-33
				],
				[
					-5,
					-60
				],
				[
					-6,
					-28
				],
				[
					-20,
					-33
				],
				[
					-31,
					-104
				],
				[
					-24,
					-47
				],
				[
					-19,
					-27
				],
				[
					-13,
					-57
				],
				[
					-18,
					-33
				]
			],
			[
				[
					3517,
					3063
				],
				[
					-8,
					33
				],
				[
					13,
					28
				],
				[
					-16,
					40
				],
				[
					-22,
					33
				],
				[
					-29,
					38
				],
				[
					-10,
					-2
				],
				[
					-28,
					46
				],
				[
					-18,
					-7
				]
			],
			[
				[
					8172,
					5325
				],
				[
					11,
					22
				],
				[
					23,
					32
				]
			],
			[
				[
					8206,
					5379
				],
				[
					-1,
					-29
				],
				[
					-2,
					-37
				],
				[
					-13,
					1
				],
				[
					-6,
					-20
				],
				[
					-12,
					31
				]
			],
			[
				[
					7546,
					6698
				],
				[
					12,
					-19
				],
				[
					-2,
					-36
				],
				[
					-23,
					-2
				],
				[
					-23,
					4
				],
				[
					-18,
					-9
				],
				[
					-25,
					22
				],
				[
					-1,
					12
				]
			],
			[
				[
					7466,
					6670
				],
				[
					19,
					44
				],
				[
					15,
					15
				],
				[
					20,
					-14
				],
				[
					14,
					-1
				],
				[
					12,
					-16
				]
			],
			[
				[
					5817,
					3752
				],
				[
					-39,
					-43
				],
				[
					-25,
					-44
				],
				[
					-10,
					-40
				],
				[
					-8,
					-22
				],
				[
					-15,
					-4
				],
				[
					-5,
					-29
				],
				[
					-3,
					-18
				],
				[
					-17,
					-14
				],
				[
					-23,
					3
				],
				[
					-13,
					17
				],
				[
					-12,
					7
				],
				[
					-14,
					-14
				],
				[
					-6,
					-28
				],
				[
					-14,
					-18
				],
				[
					-13,
					-26
				],
				[
					-20,
					-6
				],
				[
					-6,
					20
				],
				[
					2,
					36
				],
				[
					-16,
					56
				],
				[
					-8,
					9
				]
			],
			[
				[
					5552,
					3594
				],
				[
					0,
					173
				],
				[
					27,
					2
				],
				[
					1,
					210
				],
				[
					21,
					2
				],
				[
					43,
					21
				],
				[
					10,
					-24
				],
				[
					18,
					23
				],
				[
					9,
					0
				],
				[
					15,
					13
				]
			],
			[
				[
					5696,
					4014
				],
				[
					5,
					-4
				]
			],
			[
				[
					5701,
					4010
				],
				[
					11,
					-48
				],
				[
					5,
					-10
				],
				[
					9,
					-34
				],
				[
					32,
					-65
				],
				[
					12,
					-7
				],
				[
					0,
					-20
				],
				[
					8,
					-38
				],
				[
					21,
					-9
				],
				[
					18,
					-27
				]
			],
			[
				[
					5424,
					5496
				],
				[
					23,
					4
				],
				[
					5,
					16
				],
				[
					5,
					-2
				],
				[
					7,
					-13
				],
				[
					34,
					23
				],
				[
					12,
					23
				],
				[
					15,
					20
				],
				[
					-3,
					21
				],
				[
					8,
					6
				],
				[
					27,
					-4
				],
				[
					26,
					27
				],
				[
					20,
					65
				],
				[
					14,
					24
				],
				[
					18,
					10
				]
			],
			[
				[
					5635,
					5716
				],
				[
					3,
					-26
				],
				[
					16,
					-36
				],
				[
					0,
					-25
				],
				[
					-5,
					-24
				],
				[
					2,
					-18
				],
				[
					10,
					-18
				]
			],
			[
				[
					5661,
					5569
				],
				[
					21,
					-25
				]
			],
			[
				[
					5682,
					5544
				],
				[
					15,
					-24
				],
				[
					0,
					-19
				],
				[
					19,
					-31
				],
				[
					12,
					-26
				],
				[
					7,
					-35
				],
				[
					20,
					-24
				],
				[
					5,
					-18
				]
			],
			[
				[
					5760,
					5367
				],
				[
					-9,
					-7
				],
				[
					-18,
					2
				],
				[
					-21,
					6
				],
				[
					-10,
					-5
				],
				[
					-5,
					-14
				],
				[
					-9,
					-2
				],
				[
					-10,
					12
				],
				[
					-31,
					-29
				],
				[
					-13,
					6
				],
				[
					-4,
					-5
				],
				[
					-8,
					-35
				],
				[
					-21,
					11
				],
				[
					-20,
					6
				],
				[
					-18,
					22
				],
				[
					-23,
					20
				],
				[
					-15,
					-19
				],
				[
					-10,
					-30
				],
				[
					-3,
					-41
				]
			],
			[
				[
					5512,
					5265
				],
				[
					-18,
					3
				],
				[
					-19,
					10
				],
				[
					-16,
					-32
				],
				[
					-15,
					-55
				]
			],
			[
				[
					5444,
					5191
				],
				[
					-3,
					18
				],
				[
					-1,
					27
				],
				[
					-13,
					19
				],
				[
					-10,
					30
				],
				[
					-2,
					21
				],
				[
					-13,
					31
				],
				[
					2,
					18
				],
				[
					-3,
					25
				],
				[
					2,
					45
				],
				[
					7,
					11
				],
				[
					14,
					60
				]
			],
			[
				[
					3231,
					7808
				],
				[
					20,
					-8
				],
				[
					26,
					1
				],
				[
					-14,
					-24
				],
				[
					-10,
					-4
				],
				[
					-35,
					25
				],
				[
					-7,
					20
				],
				[
					10,
					18
				],
				[
					10,
					-28
				]
			],
			[
				[
					3283,
					7958
				],
				[
					-14,
					-1
				],
				[
					-36,
					19
				],
				[
					-26,
					28
				],
				[
					10,
					5
				],
				[
					37,
					-15
				],
				[
					28,
					-25
				],
				[
					1,
					-11
				]
			],
			[
				[
					1569,
					7923
				],
				[
					-14,
					-8
				],
				[
					-46,
					27
				],
				[
					-8,
					21
				],
				[
					-25,
					21
				],
				[
					-5,
					16
				],
				[
					-28,
					11
				],
				[
					-11,
					32
				],
				[
					2,
					14
				],
				[
					30,
					-13
				],
				[
					17,
					-9
				],
				[
					26,
					-6
				],
				[
					9,
					-21
				],
				[
					14,
					-28
				],
				[
					28,
					-24
				],
				[
					11,
					-33
				]
			],
			[
				[
					3440,
					8052
				],
				[
					-18,
					-52
				],
				[
					18,
					20
				],
				[
					19,
					-12
				],
				[
					-10,
					-21
				],
				[
					25,
					-16
				],
				[
					12,
					14
				],
				[
					28,
					-18
				],
				[
					-8,
					-43
				],
				[
					19,
					10
				],
				[
					4,
					-32
				],
				[
					8,
					-36
				],
				[
					-11,
					-52
				],
				[
					-13,
					-2
				],
				[
					-18,
					11
				],
				[
					6,
					48
				],
				[
					-8,
					8
				],
				[
					-32,
					-52
				],
				[
					-17,
					2
				],
				[
					20,
					28
				],
				[
					-27,
					14
				],
				[
					-30,
					-3
				],
				[
					-54,
					2
				],
				[
					-4,
					17
				],
				[
					17,
					21
				],
				[
					-12,
					16
				],
				[
					24,
					36
				],
				[
					28,
					94
				],
				[
					18,
					33
				],
				[
					24,
					21
				],
				[
					13,
					-3
				],
				[
					-6,
					-16
				],
				[
					-15,
					-37
				]
			],
			[
				[
					1300,
					8258
				],
				[
					13,
					-8
				],
				[
					27,
					5
				],
				[
					-8,
					-67
				],
				[
					24,
					-48
				],
				[
					-11,
					0
				],
				[
					-17,
					27
				],
				[
					-10,
					27
				],
				[
					-14,
					19
				],
				[
					-5,
					26
				],
				[
					1,
					19
				]
			],
			[
				[
					2798,
					8730
				],
				[
					-11,
					-31
				],
				[
					-12,
					5
				],
				[
					-8,
					17
				],
				[
					2,
					4
				],
				[
					10,
					18
				],
				[
					12,
					-1
				],
				[
					7,
					-12
				]
			],
			[
				[
					2725,
					8762
				],
				[
					-33,
					-32
				],
				[
					-19,
					1
				],
				[
					-6,
					16
				],
				[
					20,
					27
				],
				[
					38,
					0
				],
				[
					0,
					-12
				]
			],
			[
				[
					2634,
					8936
				],
				[
					5,
					-26
				],
				[
					15,
					9
				],
				[
					16,
					-15
				],
				[
					30,
					-20
				],
				[
					32,
					-19
				],
				[
					2,
					-28
				],
				[
					21,
					5
				],
				[
					20,
					-20
				],
				[
					-25,
					-18
				],
				[
					-43,
					14
				],
				[
					-16,
					26
				],
				[
					-27,
					-31
				],
				[
					-40,
					-31
				],
				[
					-9,
					35
				],
				[
					-38,
					-6
				],
				[
					24,
					30
				],
				[
					4,
					46
				],
				[
					9,
					54
				],
				[
					20,
					-5
				]
			],
			[
				[
					2892,
					9024
				],
				[
					-31,
					-3
				],
				[
					-7,
					29
				],
				[
					12,
					34
				],
				[
					26,
					8
				],
				[
					21,
					-17
				],
				[
					1,
					-25
				],
				[
					-4,
					-8
				],
				[
					-18,
					-18
				]
			],
			[
				[
					2343,
					9140
				],
				[
					-17,
					-21
				],
				[
					-38,
					18
				],
				[
					-22,
					-6
				],
				[
					-38,
					26
				],
				[
					24,
					19
				],
				[
					19,
					25
				],
				[
					30,
					-16
				],
				[
					17,
					-11
				],
				[
					8,
					-11
				],
				[
					17,
					-23
				]
			],
			[
				[
					3135,
					7724
				],
				[
					-18,
					33
				],
				[
					0,
					81
				],
				[
					-13,
					17
				],
				[
					-18,
					-10
				],
				[
					-10,
					16
				],
				[
					-21,
					-45
				],
				[
					-8,
					-46
				],
				[
					-10,
					-27
				],
				[
					-12,
					-9
				],
				[
					-9,
					-3
				],
				[
					-3,
					-15
				],
				[
					-51,
					0
				],
				[
					-42,
					0
				],
				[
					-12,
					-11
				],
				[
					-30,
					-42
				],
				[
					-3,
					-5
				],
				[
					-9,
					-23
				],
				[
					-26,
					0
				],
				[
					-27,
					0
				],
				[
					-12,
					-10
				],
				[
					4,
					-11
				],
				[
					2,
					-18
				],
				[
					0,
					-6
				],
				[
					-36,
					-30
				],
				[
					-29,
					-9
				],
				[
					-32,
					-31
				],
				[
					-7,
					0
				],
				[
					-10,
					9
				],
				[
					-3,
					8
				],
				[
					1,
					6
				],
				[
					6,
					21
				],
				[
					13,
					33
				],
				[
					8,
					35
				],
				[
					-5,
					51
				],
				[
					-6,
					53
				],
				[
					-29,
					28
				],
				[
					3,
					11
				],
				[
					-4,
					7
				],
				[
					-8,
					0
				],
				[
					-5,
					9
				],
				[
					-2,
					14
				],
				[
					-5,
					-6
				],
				[
					-7,
					2
				],
				[
					1,
					6
				],
				[
					-6,
					6
				],
				[
					-3,
					15
				],
				[
					-21,
					19
				],
				[
					-23,
					20
				],
				[
					-27,
					23
				],
				[
					-26,
					21
				],
				[
					-25,
					-17
				],
				[
					-9,
					0
				],
				[
					-34,
					15
				],
				[
					-23,
					-8
				],
				[
					-27,
					19
				],
				[
					-28,
					9
				],
				[
					-19,
					4
				],
				[
					-9,
					10
				],
				[
					-5,
					32
				],
				[
					-9,
					0
				],
				[
					-1,
					-23
				],
				[
					-57,
					0
				],
				[
					-95,
					0
				],
				[
					-94,
					0
				],
				[
					-84,
					0
				],
				[
					-83,
					0
				],
				[
					-82,
					0
				],
				[
					-85,
					0
				],
				[
					-27,
					0
				],
				[
					-83,
					0
				],
				[
					-78,
					0
				]
			],
			[
				[
					1588,
					7952
				],
				[
					-4,
					0
				],
				[
					-54,
					58
				],
				[
					-20,
					26
				],
				[
					-50,
					24
				],
				[
					-15,
					53
				],
				[
					3,
					36
				],
				[
					-35,
					25
				],
				[
					-5,
					48
				],
				[
					-34,
					43
				],
				[
					0,
					30
				]
			],
			[
				[
					1374,
					8295
				],
				[
					15,
					29
				],
				[
					0,
					37
				],
				[
					-48,
					37
				],
				[
					-28,
					68
				],
				[
					-17,
					42
				],
				[
					-26,
					27
				],
				[
					-19,
					24
				],
				[
					-14,
					31
				],
				[
					-28,
					-20
				],
				[
					-27,
					-33
				],
				[
					-25,
					39
				],
				[
					-19,
					26
				],
				[
					-27,
					16
				],
				[
					-28,
					2
				],
				[
					0,
					337
				],
				[
					1,
					219
				]
			],
			[
				[
					1084,
					9176
				],
				[
					51,
					-14
				],
				[
					44,
					-29
				],
				[
					29,
					-5
				],
				[
					24,
					24
				],
				[
					34,
					19
				],
				[
					41,
					-7
				],
				[
					42,
					26
				],
				[
					45,
					14
				],
				[
					20,
					-24
				],
				[
					20,
					14
				],
				[
					6,
					27
				],
				[
					20,
					-6
				],
				[
					47,
					-53
				],
				[
					37,
					40
				],
				[
					3,
					-45
				],
				[
					34,
					10
				],
				[
					11,
					17
				],
				[
					34,
					-3
				],
				[
					42,
					-25
				],
				[
					65,
					-22
				],
				[
					38,
					-10
				],
				[
					28,
					4
				],
				[
					37,
					-30
				],
				[
					-39,
					-29
				],
				[
					50,
					-13
				],
				[
					75,
					7
				],
				[
					24,
					11
				],
				[
					29,
					-36
				],
				[
					31,
					30
				],
				[
					-29,
					25
				],
				[
					18,
					20
				],
				[
					34,
					3
				],
				[
					22,
					6
				],
				[
					23,
					-14
				],
				[
					28,
					-32
				],
				[
					31,
					5
				],
				[
					49,
					-27
				],
				[
					43,
					9
				],
				[
					40,
					-1
				],
				[
					-3,
					37
				],
				[
					25,
					10
				],
				[
					43,
					-20
				],
				[
					0,
					-56
				],
				[
					17,
					47
				],
				[
					23,
					-1
				],
				[
					12,
					59
				],
				[
					-30,
					36
				],
				[
					-32,
					24
				],
				[
					2,
					65
				],
				[
					33,
					43
				],
				[
					37,
					-9
				],
				[
					28,
					-26
				],
				[
					38,
					-67
				],
				[
					-25,
					-29
				],
				[
					52,
					-12
				],
				[
					-1,
					-60
				],
				[
					38,
					46
				],
				[
					33,
					-38
				],
				[
					-9,
					-44
				],
				[
					27,
					-40
				],
				[
					29,
					43
				],
				[
					21,
					51
				],
				[
					1,
					65
				],
				[
					40,
					-5
				],
				[
					41,
					-8
				],
				[
					37,
					-30
				],
				[
					2,
					-29
				],
				[
					-21,
					-31
				],
				[
					20,
					-32
				],
				[
					-4,
					-29
				],
				[
					-54,
					-41
				],
				[
					-39,
					-9
				],
				[
					-29,
					18
				],
				[
					-8,
					-30
				],
				[
					-27,
					-50
				],
				[
					-8,
					-26
				],
				[
					-32,
					-40
				],
				[
					-40,
					-4
				],
				[
					-22,
					-25
				],
				[
					-2,
					-38
				],
				[
					-32,
					-7
				],
				[
					-34,
					-48
				],
				[
					-30,
					-67
				],
				[
					-11,
					-46
				],
				[
					-1,
					-69
				],
				[
					40,
					-10
				],
				[
					13,
					-55
				],
				[
					13,
					-45
				],
				[
					39,
					12
				],
				[
					51,
					-26
				],
				[
					28,
					-22
				],
				[
					20,
					-28
				],
				[
					35,
					-17
				],
				[
					29,
					-24
				],
				[
					46,
					-4
				],
				[
					30,
					-6
				],
				[
					-4,
					-51
				],
				[
					8,
					-59
				],
				[
					21,
					-66
				],
				[
					41,
					-56
				],
				[
					21,
					19
				],
				[
					15,
					61
				],
				[
					-14,
					93
				],
				[
					-20,
					31
				],
				[
					45,
					28
				],
				[
					31,
					41
				],
				[
					16,
					41
				],
				[
					-3,
					40
				],
				[
					-19,
					50
				],
				[
					-33,
					44
				],
				[
					32,
					62
				],
				[
					-12,
					54
				],
				[
					-9,
					92
				],
				[
					19,
					14
				],
				[
					48,
					-16
				],
				[
					29,
					-6
				],
				[
					23,
					15
				],
				[
					25,
					-20
				],
				[
					35,
					-34
				],
				[
					8,
					-23
				],
				[
					50,
					-4
				],
				[
					-1,
					-50
				],
				[
					9,
					-74
				],
				[
					25,
					-10
				],
				[
					21,
					-35
				],
				[
					40,
					33
				],
				[
					26,
					65
				],
				[
					19,
					28
				],
				[
					21,
					-53
				],
				[
					36,
					-75
				],
				[
					31,
					-71
				],
				[
					-11,
					-37
				],
				[
					37,
					-33
				],
				[
					25,
					-34
				],
				[
					44,
					-15
				],
				[
					18,
					-19
				],
				[
					11,
					-50
				],
				[
					22,
					-8
				],
				[
					11,
					-22
				],
				[
					2,
					-67
				],
				[
					-20,
					-22
				],
				[
					-20,
					-21
				],
				[
					-46,
					-21
				],
				[
					-35,
					-48
				],
				[
					-47,
					-10
				],
				[
					-59,
					13
				],
				[
					-42,
					0
				],
				[
					-29,
					-4
				],
				[
					-23,
					-43
				],
				[
					-35,
					-26
				],
				[
					-40,
					-78
				],
				[
					-32,
					-54
				],
				[
					23,
					9
				],
				[
					45,
					78
				],
				[
					58,
					49
				],
				[
					42,
					6
				],
				[
					24,
					-29
				],
				[
					-26,
					-40
				],
				[
					9,
					-63
				],
				[
					9,
					-45
				],
				[
					36,
					-29
				],
				[
					46,
					8
				],
				[
					28,
					67
				],
				[
					2,
					-43
				],
				[
					17,
					-22
				],
				[
					-34,
					-38
				],
				[
					-61,
					-36
				],
				[
					-28,
					-23
				],
				[
					-31,
					-43
				],
				[
					-21,
					4
				],
				[
					-1,
					50
				],
				[
					48,
					49
				],
				[
					-44,
					-2
				],
				[
					-31,
					-7
				]
			],
			[
				[
					1829,
					9377
				],
				[
					-14,
					-27
				],
				[
					61,
					17
				],
				[
					39,
					-29
				],
				[
					31,
					30
				],
				[
					26,
					-20
				],
				[
					23,
					-58
				],
				[
					14,
					25
				],
				[
					-20,
					60
				],
				[
					24,
					9
				],
				[
					28,
					-9
				],
				[
					31,
					-24
				],
				[
					17,
					-58
				],
				[
					9,
					-41
				],
				[
					47,
					-30
				],
				[
					50,
					-28
				],
				[
					-3,
					-26
				],
				[
					-46,
					-4
				],
				[
					18,
					-23
				],
				[
					-9,
					-22
				],
				[
					-51,
					9
				],
				[
					-48,
					16
				],
				[
					-32,
					-3
				],
				[
					-52,
					-20
				],
				[
					-70,
					-9
				],
				[
					-50,
					-6
				],
				[
					-15,
					28
				],
				[
					-38,
					16
				],
				[
					-24,
					-6
				],
				[
					-35,
					47
				],
				[
					19,
					6
				],
				[
					43,
					10
				],
				[
					39,
					-3
				],
				[
					36,
					11
				],
				[
					-54,
					13
				],
				[
					-59,
					-4
				],
				[
					-39,
					1
				],
				[
					-15,
					22
				],
				[
					64,
					23
				],
				[
					-42,
					-1
				],
				[
					-49,
					16
				],
				[
					23,
					44
				],
				[
					20,
					24
				],
				[
					74,
					36
				],
				[
					29,
					-12
				]
			],
			[
				[
					2097,
					9395
				],
				[
					-24,
					-39
				],
				[
					-44,
					41
				],
				[
					10,
					9
				],
				[
					37,
					2
				],
				[
					21,
					-13
				]
			],
			[
				[
					2879,
					9376
				],
				[
					3,
					-16
				],
				[
					-30,
					2
				],
				[
					-30,
					1
				],
				[
					-30,
					-8
				],
				[
					-8,
					3
				],
				[
					-31,
					32
				],
				[
					1,
					21
				],
				[
					14,
					4
				],
				[
					63,
					-6
				],
				[
					48,
					-33
				]
			],
			[
				[
					2595,
					9379
				],
				[
					22,
					-36
				],
				[
					26,
					47
				],
				[
					70,
					24
				],
				[
					48,
					-61
				],
				[
					-4,
					-38
				],
				[
					55,
					17
				],
				[
					26,
					23
				],
				[
					62,
					-30
				],
				[
					38,
					-28
				],
				[
					3,
					-25
				],
				[
					52,
					13
				],
				[
					29,
					-38
				],
				[
					67,
					-23
				],
				[
					24,
					-24
				],
				[
					26,
					-55
				],
				[
					-51,
					-28
				],
				[
					66,
					-38
				],
				[
					44,
					-13
				],
				[
					40,
					-55
				],
				[
					44,
					-3
				],
				[
					-9,
					-42
				],
				[
					-49,
					-69
				],
				[
					-34,
					26
				],
				[
					-44,
					57
				],
				[
					-36,
					-8
				],
				[
					-3,
					-34
				],
				[
					29,
					-34
				],
				[
					38,
					-27
				],
				[
					11,
					-16
				],
				[
					18,
					-58
				],
				[
					-9,
					-43
				],
				[
					-35,
					16
				],
				[
					-70,
					47
				],
				[
					39,
					-51
				],
				[
					29,
					-35
				],
				[
					5,
					-21
				],
				[
					-76,
					24
				],
				[
					-59,
					34
				],
				[
					-34,
					29
				],
				[
					10,
					17
				],
				[
					-42,
					30
				],
				[
					-40,
					29
				],
				[
					0,
					-18
				],
				[
					-80,
					-9
				],
				[
					-23,
					20
				],
				[
					18,
					44
				],
				[
					52,
					1
				],
				[
					57,
					7
				],
				[
					-9,
					21
				],
				[
					10,
					30
				],
				[
					36,
					57
				],
				[
					-8,
					27
				],
				[
					-11,
					20
				],
				[
					-42,
					29
				],
				[
					-57,
					20
				],
				[
					18,
					15
				],
				[
					-29,
					36
				],
				[
					-25,
					4
				],
				[
					-22,
					20
				],
				[
					-14,
					-18
				],
				[
					-51,
					-7
				],
				[
					-101,
					13
				],
				[
					-59,
					17
				],
				[
					-45,
					9
				],
				[
					-23,
					21
				],
				[
					29,
					27
				],
				[
					-39,
					0
				],
				[
					-9,
					60
				],
				[
					21,
					53
				],
				[
					29,
					24
				],
				[
					72,
					16
				],
				[
					-21,
					-39
				]
			],
			[
				[
					2212,
					9420
				],
				[
					33,
					-12
				],
				[
					50,
					7
				],
				[
					7,
					-17
				],
				[
					-26,
					-28
				],
				[
					42,
					-26
				],
				[
					-5,
					-53
				],
				[
					-45,
					-23
				],
				[
					-27,
					5
				],
				[
					-19,
					23
				],
				[
					-69,
					45
				],
				[
					0,
					19
				],
				[
					57,
					-7
				],
				[
					-31,
					38
				],
				[
					33,
					29
				]
			],
			[
				[
					2411,
					9357
				],
				[
					-30,
					-45
				],
				[
					-32,
					3
				],
				[
					-17,
					52
				],
				[
					1,
					29
				],
				[
					14,
					25
				],
				[
					28,
					16
				],
				[
					58,
					-2
				],
				[
					53,
					-14
				],
				[
					-42,
					-53
				],
				[
					-33,
					-11
				]
			],
			[
				[
					1654,
					9275
				],
				[
					-73,
					-29
				],
				[
					-15,
					26
				],
				[
					-64,
					31
				],
				[
					12,
					25
				],
				[
					19,
					43
				],
				[
					24,
					39
				],
				[
					-27,
					36
				],
				[
					94,
					10
				],
				[
					39,
					-13
				],
				[
					71,
					-3
				],
				[
					27,
					-17
				],
				[
					30,
					-25
				],
				[
					-35,
					-15
				],
				[
					-68,
					-41
				],
				[
					-34,
					-42
				],
				[
					0,
					-25
				]
			],
			[
				[
					2399,
					9487
				],
				[
					-15,
					-23
				],
				[
					-40,
					5
				],
				[
					-34,
					15
				],
				[
					15,
					27
				],
				[
					40,
					16
				],
				[
					24,
					-21
				],
				[
					10,
					-19
				]
			],
			[
				[
					2264,
					9590
				],
				[
					21,
					-27
				],
				[
					1,
					-31
				],
				[
					-13,
					-44
				],
				[
					-46,
					-6
				],
				[
					-30,
					10
				],
				[
					1,
					34
				],
				[
					-45,
					-4
				],
				[
					-2,
					45
				],
				[
					30,
					-2
				],
				[
					41,
					21
				],
				[
					40,
					-4
				],
				[
					2,
					8
				]
			],
			[
				[
					1994,
					9559
				],
				[
					11,
					-21
				],
				[
					25,
					10
				],
				[
					29,
					-2
				],
				[
					5,
					-29
				],
				[
					-17,
					-28
				],
				[
					-94,
					-10
				],
				[
					-70,
					-25
				],
				[
					-43,
					-2
				],
				[
					-3,
					20
				],
				[
					57,
					26
				],
				[
					-125,
					-7
				],
				[
					-39,
					10
				],
				[
					38,
					58
				],
				[
					26,
					17
				],
				[
					78,
					-20
				],
				[
					50,
					-35
				],
				[
					48,
					-5
				],
				[
					-40,
					57
				],
				[
					26,
					21
				],
				[
					29,
					-7
				],
				[
					9,
					-28
				]
			],
			[
				[
					2370,
					9612
				],
				[
					30,
					-19
				],
				[
					55,
					0
				],
				[
					24,
					-19
				],
				[
					-6,
					-22
				],
				[
					32,
					-14
				],
				[
					17,
					-14
				],
				[
					38,
					-2
				],
				[
					40,
					-5
				],
				[
					44,
					13
				],
				[
					57,
					5
				],
				[
					45,
					-5
				],
				[
					30,
					-22
				],
				[
					6,
					-24
				],
				[
					-17,
					-16
				],
				[
					-42,
					-13
				],
				[
					-35,
					8
				],
				[
					-80,
					-10
				],
				[
					-57,
					-1
				],
				[
					-45,
					8
				],
				[
					-74,
					19
				],
				[
					-9,
					32
				],
				[
					-4,
					29
				],
				[
					-27,
					26
				],
				[
					-58,
					7
				],
				[
					-32,
					19
				],
				[
					10,
					24
				],
				[
					58,
					-4
				]
			],
			[
				[
					1772,
					9645
				],
				[
					-4,
					-46
				],
				[
					-21,
					-20
				],
				[
					-26,
					-3
				],
				[
					-52,
					-26
				],
				[
					-44,
					-9
				],
				[
					-38,
					13
				],
				[
					47,
					44
				],
				[
					57,
					39
				],
				[
					43,
					-1
				],
				[
					38,
					9
				]
			],
			[
				[
					2393,
					9637
				],
				[
					-13,
					-2
				],
				[
					-52,
					4
				],
				[
					-7,
					17
				],
				[
					56,
					-1
				],
				[
					19,
					-11
				],
				[
					-3,
					-7
				]
			],
			[
				[
					1939,
					9648
				],
				[
					-52,
					-17
				],
				[
					-41,
					19
				],
				[
					23,
					19
				],
				[
					40,
					6
				],
				[
					39,
					-10
				],
				[
					-9,
					-17
				]
			],
			[
				[
					1954,
					9701
				],
				[
					-34,
					-11
				],
				[
					-46,
					0
				],
				[
					0,
					8
				],
				[
					29,
					18
				],
				[
					14,
					-3
				],
				[
					37,
					-12
				]
			],
			[
				[
					2338,
					9669
				],
				[
					-41,
					-12
				],
				[
					-23,
					13
				],
				[
					-12,
					23
				],
				[
					-2,
					24
				],
				[
					36,
					-2
				],
				[
					16,
					-4
				],
				[
					33,
					-21
				],
				[
					-7,
					-21
				]
			],
			[
				[
					2220,
					9685
				],
				[
					11,
					-25
				],
				[
					-45,
					7
				],
				[
					-46,
					19
				],
				[
					-62,
					2
				],
				[
					27,
					18
				],
				[
					-34,
					14
				],
				[
					-2,
					22
				],
				[
					55,
					-8
				],
				[
					75,
					-21
				],
				[
					21,
					-28
				]
			],
			[
				[
					2583,
					9764
				],
				[
					33,
					-20
				],
				[
					-38,
					-17
				],
				[
					-51,
					-45
				],
				[
					-50,
					-4
				],
				[
					-57,
					8
				],
				[
					-30,
					24
				],
				[
					0,
					21
				],
				[
					22,
					16
				],
				[
					-50,
					0
				],
				[
					-31,
					19
				],
				[
					-18,
					27
				],
				[
					20,
					26
				],
				[
					19,
					18
				],
				[
					28,
					4
				],
				[
					-12,
					14
				],
				[
					65,
					3
				],
				[
					35,
					-32
				],
				[
					47,
					-12
				],
				[
					46,
					-11
				],
				[
					22,
					-39
				]
			],
			[
				[
					3097,
					9967
				],
				[
					74,
					-4
				],
				[
					60,
					-8
				],
				[
					51,
					-16
				],
				[
					-2,
					-16
				],
				[
					-67,
					-25
				],
				[
					-68,
					-12
				],
				[
					-25,
					-14
				],
				[
					61,
					1
				],
				[
					-66,
					-36
				],
				[
					-45,
					-17
				],
				[
					-48,
					-48
				],
				[
					-57,
					-10
				],
				[
					-18,
					-12
				],
				[
					-84,
					-6
				],
				[
					39,
					-8
				],
				[
					-20,
					-10
				],
				[
					23,
					-29
				],
				[
					-26,
					-21
				],
				[
					-43,
					-16
				],
				[
					-13,
					-24
				],
				[
					-39,
					-17
				],
				[
					4,
					-14
				],
				[
					48,
					3
				],
				[
					0,
					-15
				],
				[
					-74,
					-35
				],
				[
					-73,
					16
				],
				[
					-81,
					-9
				],
				[
					-42,
					7
				],
				[
					-52,
					3
				],
				[
					-4,
					29
				],
				[
					52,
					13
				],
				[
					-14,
					43
				],
				[
					17,
					4
				],
				[
					74,
					-26
				],
				[
					-38,
					38
				],
				[
					-45,
					11
				],
				[
					23,
					23
				],
				[
					49,
					14
				],
				[
					8,
					21
				],
				[
					-39,
					23
				],
				[
					-12,
					31
				],
				[
					76,
					-3
				],
				[
					22,
					-6
				],
				[
					43,
					21
				],
				[
					-62,
					7
				],
				[
					-98,
					-4
				],
				[
					-49,
					20
				],
				[
					-23,
					24
				],
				[
					-32,
					17
				],
				[
					-6,
					21
				],
				[
					41,
					11
				],
				[
					32,
					2
				],
				[
					55,
					9
				],
				[
					41,
					22
				],
				[
					34,
					-3
				],
				[
					30,
					-16
				],
				[
					21,
					32
				],
				[
					37,
					9
				],
				[
					50,
					7
				],
				[
					85,
					2
				],
				[
					14,
					-6
				],
				[
					81,
					10
				],
				[
					60,
					-4
				],
				[
					60,
					-4
				]
			],
			[
				[
					5290,
					7828
				],
				[
					-3,
					-24
				],
				[
					-12,
					-10
				],
				[
					-20,
					7
				],
				[
					-6,
					-24
				],
				[
					-14,
					-2
				],
				[
					-5,
					10
				],
				[
					-15,
					-20
				],
				[
					-13,
					-3
				],
				[
					-12,
					13
				]
			],
			[
				[
					5190,
					7775
				],
				[
					-10,
					25
				],
				[
					-13,
					-9
				],
				[
					0,
					27
				],
				[
					21,
					33
				],
				[
					-1,
					15
				],
				[
					12,
					-5
				],
				[
					8,
					10
				]
			],
			[
				[
					5207,
					7871
				],
				[
					24,
					-1
				],
				[
					5,
					13
				],
				[
					30,
					-18
				]
			],
			[
				[
					3140,
					1814
				],
				[
					-10,
					-24
				],
				[
					-23,
					-18
				],
				[
					-14,
					2
				],
				[
					-16,
					5
				],
				[
					-21,
					18
				],
				[
					-29,
					8
				],
				[
					-35,
					33
				],
				[
					-28,
					32
				],
				[
					-38,
					66
				],
				[
					23,
					-12
				],
				[
					39,
					-40
				],
				[
					36,
					-21
				],
				[
					15,
					27
				],
				[
					9,
					41
				],
				[
					25,
					24
				],
				[
					20,
					-7
				]
			],
			[
				[
					3095,
					1968
				],
				[
					-25,
					0
				],
				[
					-13,
					-14
				],
				[
					-25,
					-22
				],
				[
					-5,
					-55
				],
				[
					-11,
					-1
				],
				[
					-32,
					19
				],
				[
					-32,
					41
				],
				[
					-34,
					34
				],
				[
					-9,
					37
				],
				[
					8,
					35
				],
				[
					-14,
					39
				],
				[
					-4,
					101
				],
				[
					12,
					57
				],
				[
					30,
					45
				],
				[
					-43,
					18
				],
				[
					27,
					52
				],
				[
					9,
					98
				],
				[
					31,
					-21
				],
				[
					15,
					123
				],
				[
					-19,
					15
				],
				[
					-9,
					-73
				],
				[
					-17,
					8
				],
				[
					9,
					84
				],
				[
					9,
					110
				],
				[
					13,
					40
				],
				[
					-8,
					58
				],
				[
					-2,
					66
				],
				[
					11,
					2
				],
				[
					17,
					96
				],
				[
					20,
					94
				],
				[
					11,
					88
				],
				[
					-6,
					89
				],
				[
					8,
					49
				],
				[
					-3,
					72
				],
				[
					16,
					73
				],
				[
					5,
					114
				],
				[
					9,
					123
				],
				[
					9,
					132
				],
				[
					-2,
					96
				],
				[
					-6,
					84
				]
			],
			[
				[
					3045,
					3974
				],
				[
					14,
					15
				],
				[
					8,
					30
				]
			],
			[
				[
					8064,
					6161
				],
				[
					-24,
					-28
				],
				[
					-23,
					18
				],
				[
					0,
					51
				],
				[
					13,
					26
				],
				[
					31,
					17
				],
				[
					16,
					-1
				],
				[
					6,
					-23
				],
				[
					-12,
					-26
				],
				[
					-7,
					-34
				]
			],
			[
				[
					8628,
					7562
				],
				[
					-18,
					35
				],
				[
					-11,
					-33
				],
				[
					-43,
					-26
				],
				[
					4,
					-31
				],
				[
					-24,
					2
				],
				[
					-13,
					19
				],
				[
					-19,
					-42
				],
				[
					-30,
					-32
				],
				[
					-23,
					-38
				]
			],
			[
				[
					8451,
					7416
				],
				[
					-39,
					-17
				],
				[
					-20,
					-27
				],
				[
					-30,
					-17
				],
				[
					15,
					28
				],
				[
					-6,
					23
				],
				[
					22,
					40
				],
				[
					-15,
					30
				],
				[
					-24,
					-20
				],
				[
					-32,
					-41
				],
				[
					-17,
					-39
				],
				[
					-27,
					-2
				],
				[
					-14,
					-28
				],
				[
					15,
					-40
				],
				[
					22,
					-10
				],
				[
					1,
					-26
				],
				[
					22,
					-17
				],
				[
					31,
					42
				],
				[
					25,
					-23
				],
				[
					18,
					-2
				],
				[
					4,
					-31
				],
				[
					-39,
					-16
				],
				[
					-13,
					-32
				],
				[
					-27,
					-30
				],
				[
					-14,
					-41
				],
				[
					30,
					-33
				],
				[
					11,
					-58
				],
				[
					17,
					-54
				],
				[
					18,
					-45
				],
				[
					0,
					-44
				],
				[
					-17,
					-16
				],
				[
					6,
					-32
				],
				[
					17,
					-18
				],
				[
					-5,
					-48
				],
				[
					-7,
					-47
				],
				[
					-15,
					-5
				],
				[
					-21,
					-64
				],
				[
					-22,
					-78
				],
				[
					-26,
					-70
				],
				[
					-38,
					-55
				],
				[
					-39,
					-50
				],
				[
					-31,
					-6
				],
				[
					-17,
					-27
				],
				[
					-10,
					20
				],
				[
					-15,
					-30
				],
				[
					-39,
					-29
				],
				[
					-29,
					-9
				],
				[
					-10,
					-63
				],
				[
					-15,
					-3
				],
				[
					-8,
					43
				],
				[
					7,
					22
				],
				[
					-37,
					19
				],
				[
					-13,
					-9
				]
			],
			[
				[
					8001,
					6331
				],
				[
					-28,
					15
				],
				[
					-14,
					24
				],
				[
					5,
					34
				],
				[
					-26,
					11
				],
				[
					-13,
					22
				],
				[
					-24,
					-31
				],
				[
					-27,
					-7
				],
				[
					-22,
					0
				],
				[
					-15,
					-14
				]
			],
			[
				[
					7837,
					6385
				],
				[
					-14,
					-9
				],
				[
					4,
					-68
				],
				[
					-15,
					2
				],
				[
					-2,
					14
				]
			],
			[
				[
					7810,
					6324
				],
				[
					-1,
					24
				],
				[
					-20,
					-17
				],
				[
					-12,
					11
				],
				[
					-21,
					22
				],
				[
					8,
					49
				],
				[
					-18,
					12
				],
				[
					-6,
					54
				],
				[
					-30,
					-10
				],
				[
					4,
					70
				],
				[
					26,
					50
				],
				[
					1,
					48
				],
				[
					-1,
					46
				],
				[
					-12,
					14
				],
				[
					-9,
					35
				],
				[
					-16,
					-5
				]
			],
			[
				[
					7703,
					6727
				],
				[
					-30,
					9
				],
				[
					9,
					25
				],
				[
					-13,
					36
				],
				[
					-20,
					-24
				],
				[
					-23,
					14
				],
				[
					-32,
					-37
				],
				[
					-25,
					-44
				],
				[
					-23,
					-8
				]
			],
			[
				[
					7466,
					6670
				],
				[
					-2,
					47
				],
				[
					-17,
					-13
				]
			],
			[
				[
					7447,
					6704
				],
				[
					-32,
					6
				],
				[
					-32,
					14
				],
				[
					-22,
					26
				],
				[
					-22,
					11
				],
				[
					-9,
					29
				],
				[
					-16,
					8
				],
				[
					-28,
					39
				],
				[
					-22,
					18
				],
				[
					-12,
					-14
				]
			],
			[
				[
					7252,
					6841
				],
				[
					-38,
					41
				],
				[
					-28,
					37
				],
				[
					-7,
					65
				],
				[
					20,
					-7
				],
				[
					1,
					30
				],
				[
					-12,
					30
				],
				[
					3,
					48
				],
				[
					-30,
					69
				]
			],
			[
				[
					7161,
					7154
				],
				[
					-45,
					24
				],
				[
					-8,
					46
				],
				[
					-21,
					27
				]
			],
			[
				[
					7082,
					7268
				],
				[
					-4,
					34
				],
				[
					1,
					23
				],
				[
					-17,
					13
				],
				[
					-9,
					-6
				],
				[
					-7,
					55
				]
			],
			[
				[
					7046,
					7387
				],
				[
					8,
					13
				],
				[
					-4,
					14
				],
				[
					26,
					28
				],
				[
					20,
					12
				],
				[
					29,
					-8
				],
				[
					11,
					38
				],
				[
					35,
					7
				],
				[
					10,
					23
				],
				[
					44,
					32
				],
				[
					4,
					13
				]
			],
			[
				[
					7229,
					7559
				],
				[
					-2,
					34
				],
				[
					19,
					15
				],
				[
					-25,
					103
				],
				[
					55,
					24
				],
				[
					14,
					13
				],
				[
					20,
					106
				],
				[
					55,
					-20
				],
				[
					15,
					27
				],
				[
					2,
					59
				],
				[
					23,
					6
				],
				[
					21,
					39
				]
			],
			[
				[
					7426,
					7965
				],
				[
					11,
					5
				]
			],
			[
				[
					7437,
					7970
				],
				[
					7,
					-41
				],
				[
					23,
					-32
				],
				[
					40,
					-22
				],
				[
					19,
					-47
				],
				[
					-10,
					-70
				],
				[
					10,
					-25
				],
				[
					33,
					-10
				],
				[
					37,
					-8
				],
				[
					33,
					-37
				],
				[
					18,
					-7
				],
				[
					12,
					-54
				],
				[
					17,
					-35
				],
				[
					30,
					1
				],
				[
					58,
					-13
				],
				[
					36,
					8
				],
				[
					28,
					-9
				],
				[
					41,
					-36
				],
				[
					34,
					0
				],
				[
					12,
					-18
				],
				[
					32,
					32
				],
				[
					45,
					20
				],
				[
					42,
					2
				],
				[
					32,
					21
				],
				[
					20,
					32
				],
				[
					20,
					20
				],
				[
					-5,
					19
				],
				[
					-9,
					23
				],
				[
					15,
					38
				],
				[
					15,
					-5
				],
				[
					29,
					-12
				],
				[
					28,
					31
				],
				[
					42,
					23
				],
				[
					20,
					39
				],
				[
					20,
					17
				],
				[
					40,
					8
				],
				[
					22,
					-7
				],
				[
					3,
					21
				],
				[
					-25,
					41
				],
				[
					-22,
					19
				],
				[
					-22,
					-22
				],
				[
					-27,
					10
				],
				[
					-16,
					-8
				],
				[
					-7,
					24
				],
				[
					20,
					59
				],
				[
					13,
					45
				]
			],
			[
				[
					8240,
					8005
				],
				[
					34,
					-23
				],
				[
					39,
					38
				],
				[
					-1,
					26
				],
				[
					26,
					62
				],
				[
					15,
					19
				],
				[
					0,
					33
				],
				[
					-16,
					14
				],
				[
					23,
					29
				],
				[
					35,
					11
				],
				[
					37,
					2
				],
				[
					41,
					-18
				],
				[
					25,
					-22
				],
				[
					17,
					-59
				],
				[
					10,
					-26
				],
				[
					10,
					-36
				],
				[
					10,
					-58
				],
				[
					49,
					-19
				],
				[
					32,
					-42
				],
				[
					12,
					-55
				],
				[
					42,
					0
				],
				[
					24,
					23
				],
				[
					46,
					17
				],
				[
					-15,
					-53
				],
				[
					-11,
					-21
				],
				[
					-9,
					-65
				],
				[
					-19,
					-58
				],
				[
					-33,
					11
				],
				[
					-24,
					-21
				],
				[
					7,
					-51
				],
				[
					-4,
					-69
				],
				[
					-14,
					-2
				],
				[
					0,
					-30
				]
			],
			[
				[
					4920,
					5353
				],
				[
					-12,
					-1
				],
				[
					-20,
					12
				],
				[
					-18,
					-1
				],
				[
					-33,
					-10
				],
				[
					-19,
					-18
				],
				[
					-27,
					-21
				],
				[
					-6,
					1
				]
			],
			[
				[
					4785,
					5315
				],
				[
					2,
					49
				],
				[
					3,
					7
				],
				[
					-1,
					24
				],
				[
					-12,
					24
				],
				[
					-8,
					4
				],
				[
					-8,
					17
				],
				[
					6,
					26
				],
				[
					-3,
					28
				],
				[
					1,
					18
				]
			],
			[
				[
					4765,
					5512
				],
				[
					5,
					0
				],
				[
					1,
					25
				],
				[
					-2,
					12
				],
				[
					3,
					8
				],
				[
					10,
					7
				],
				[
					-7,
					47
				],
				[
					-6,
					25
				],
				[
					2,
					20
				],
				[
					5,
					4
				]
			],
			[
				[
					4776,
					5660
				],
				[
					4,
					6
				],
				[
					8,
					-9
				],
				[
					21,
					-1
				],
				[
					5,
					18
				],
				[
					5,
					-1
				],
				[
					8,
					6
				],
				[
					4,
					-25
				],
				[
					7,
					7
				],
				[
					11,
					9
				]
			],
			[
				[
					4921,
					5627
				],
				[
					7,
					-84
				],
				[
					-11,
					-50
				],
				[
					-8,
					-66
				],
				[
					12,
					-51
				],
				[
					-1,
					-23
				]
			],
			[
				[
					5363,
					5191
				],
				[
					-4,
					4
				],
				[
					-16,
					-8
				],
				[
					-17,
					8
				],
				[
					-13,
					-4
				]
			],
			[
				[
					5313,
					5191
				],
				[
					-45,
					1
				]
			],
			[
				[
					5268,
					5192
				],
				[
					4,
					47
				],
				[
					-11,
					39
				],
				[
					-13,
					10
				],
				[
					-6,
					27
				],
				[
					-7,
					8
				],
				[
					1,
					16
				]
			],
			[
				[
					5236,
					5339
				],
				[
					7,
					42
				],
				[
					13,
					57
				],
				[
					8,
					1
				],
				[
					17,
					34
				],
				[
					10,
					1
				],
				[
					16,
					-24
				],
				[
					19,
					20
				],
				[
					2,
					25
				],
				[
					7,
					23
				],
				[
					4,
					30
				],
				[
					15,
					25
				],
				[
					5,
					41
				],
				[
					6,
					13
				],
				[
					4,
					31
				],
				[
					7,
					37
				],
				[
					24,
					46
				],
				[
					1,
					20
				],
				[
					3,
					10
				],
				[
					-11,
					24
				]
			],
			[
				[
					5393,
					5795
				],
				[
					1,
					19
				],
				[
					8,
					3
				]
			],
			[
				[
					5402,
					5817
				],
				[
					11,
					-38
				],
				[
					2,
					-39
				],
				[
					-1,
					-39
				],
				[
					15,
					-54
				],
				[
					-15,
					1
				],
				[
					-8,
					-4
				],
				[
					-13,
					6
				],
				[
					-6,
					-28
				],
				[
					16,
					-35
				],
				[
					13,
					-10
				],
				[
					3,
					-24
				],
				[
					9,
					-41
				],
				[
					-4,
					-16
				]
			],
			[
				[
					5444,
					5191
				],
				[
					-2,
					-31
				],
				[
					-22,
					14
				],
				[
					-22,
					15
				],
				[
					-35,
					2
				]
			],
			[
				[
					5856,
					5265
				],
				[
					-2,
					-69
				],
				[
					11,
					-8
				],
				[
					-9,
					-21
				],
				[
					-10,
					-16
				],
				[
					-11,
					-31
				],
				[
					-6,
					-27
				],
				[
					-1,
					-48
				],
				[
					-7,
					-22
				],
				[
					0,
					-45
				]
			],
			[
				[
					5821,
					4978
				],
				[
					-8,
					-16
				],
				[
					-1,
					-35
				],
				[
					-4,
					-5
				],
				[
					-2,
					-32
				]
			],
			[
				[
					5814,
					4792
				],
				[
					5,
					-55
				],
				[
					-2,
					-30
				],
				[
					5,
					-35
				],
				[
					16,
					-33
				],
				[
					15,
					-74
				]
			],
			[
				[
					5853,
					4565
				],
				[
					-11,
					6
				],
				[
					-37,
					-10
				],
				[
					-7,
					-7
				],
				[
					-8,
					-38
				],
				[
					6,
					-26
				],
				[
					-5,
					-70
				],
				[
					-3,
					-59
				],
				[
					7,
					-11
				],
				[
					19,
					-23
				],
				[
					8,
					11
				],
				[
					2,
					-64
				],
				[
					-21,
					1
				],
				[
					-11,
					32
				],
				[
					-10,
					25
				],
				[
					-22,
					9
				],
				[
					-6,
					31
				],
				[
					-17,
					-19
				],
				[
					-22,
					8
				],
				[
					-10,
					27
				],
				[
					-17,
					6
				],
				[
					-13,
					-2
				],
				[
					-2,
					19
				],
				[
					-9,
					1
				]
			],
			[
				[
					5342,
					4697
				],
				[
					-4,
					18
				]
			],
			[
				[
					5360,
					4775
				],
				[
					8,
					-6
				],
				[
					9,
					23
				],
				[
					15,
					-1
				],
				[
					2,
					-17
				],
				[
					11,
					-10
				],
				[
					16,
					37
				],
				[
					16,
					29
				],
				[
					7,
					19
				],
				[
					-1,
					48
				],
				[
					12,
					58
				],
				[
					13,
					30
				],
				[
					18,
					29
				],
				[
					3,
					18
				],
				[
					1,
					22
				],
				[
					5,
					21
				],
				[
					-2,
					33
				],
				[
					4,
					52
				],
				[
					5,
					37
				],
				[
					8,
					32
				],
				[
					2,
					36
				]
			],
			[
				[
					5760,
					5367
				],
				[
					17,
					-49
				],
				[
					12,
					-7
				],
				[
					8,
					10
				],
				[
					12,
					-4
				],
				[
					16,
					12
				],
				[
					6,
					-25
				],
				[
					25,
					-39
				]
			],
			[
				[
					5330,
					4760
				],
				[
					-22,
					62
				]
			],
			[
				[
					5308,
					4822
				],
				[
					21,
					33
				],
				[
					-11,
					39
				],
				[
					10,
					15
				],
				[
					19,
					7
				],
				[
					2,
					26
				],
				[
					15,
					-28
				],
				[
					24,
					-2
				],
				[
					9,
					27
				],
				[
					3,
					40
				],
				[
					-3,
					46
				],
				[
					-13,
					35
				],
				[
					12,
					68
				],
				[
					-7,
					12
				],
				[
					-21,
					-5
				],
				[
					-7,
					31
				],
				[
					2,
					25
				]
			],
			[
				[
					2906,
					5049
				],
				[
					-12,
					14
				],
				[
					-14,
					19
				],
				[
					-7,
					-9
				],
				[
					-24,
					8
				],
				[
					-7,
					25
				],
				[
					-5,
					-1
				],
				[
					-28,
					34
				]
			],
			[
				[
					2809,
					5139
				],
				[
					-3,
					18
				],
				[
					10,
					5
				],
				[
					-1,
					29
				],
				[
					6,
					22
				],
				[
					14,
					4
				],
				[
					12,
					37
				],
				[
					10,
					31
				],
				[
					-10,
					14
				],
				[
					5,
					34
				],
				[
					-6,
					54
				],
				[
					6,
					16
				],
				[
					-4,
					50
				],
				[
					-12,
					31
				]
			],
			[
				[
					2836,
					5484
				],
				[
					4,
					29
				],
				[
					9,
					-4
				],
				[
					5,
					17
				],
				[
					-6,
					35
				],
				[
					3,
					9
				]
			],
			[
				[
					2851,
					5570
				],
				[
					14,
					-2
				],
				[
					21,
					41
				],
				[
					12,
					6
				],
				[
					0,
					20
				],
				[
					5,
					50
				],
				[
					16,
					27
				],
				[
					17,
					1
				],
				[
					3,
					13
				],
				[
					21,
					-5
				],
				[
					22,
					30
				],
				[
					11,
					13
				],
				[
					14,
					28
				],
				[
					9,
					-3
				],
				[
					8,
					-16
				],
				[
					-6,
					-20
				]
			],
			[
				[
					3018,
					5753
				],
				[
					-18,
					-10
				],
				[
					-7,
					-29
				],
				[
					-10,
					-17
				],
				[
					-8,
					-22
				],
				[
					-4,
					-42
				],
				[
					-8,
					-35
				],
				[
					15,
					-4
				],
				[
					3,
					-27
				],
				[
					6,
					-13
				],
				[
					3,
					-24
				],
				[
					-4,
					-22
				],
				[
					1,
					-12
				],
				[
					7,
					-5
				],
				[
					7,
					-20
				],
				[
					36,
					5
				],
				[
					16,
					-7
				],
				[
					19,
					-51
				],
				[
					11,
					6
				],
				[
					20,
					-3
				],
				[
					16,
					7
				],
				[
					10,
					-10
				],
				[
					-5,
					-32
				],
				[
					-6,
					-20
				],
				[
					-2,
					-42
				],
				[
					5,
					-40
				],
				[
					8,
					-17
				],
				[
					1,
					-13
				],
				[
					-14,
					-30
				],
				[
					10,
					-13
				],
				[
					8,
					-21
				],
				[
					8,
					-58
				]
			],
			[
				[
					3058,
					4804
				],
				[
					-14,
					31
				],
				[
					-8,
					1
				],
				[
					18,
					61
				],
				[
					-21,
					27
				],
				[
					-17,
					-5
				],
				[
					-10,
					10
				],
				[
					-15,
					-15
				],
				[
					-21,
					7
				],
				[
					-16,
					62
				],
				[
					-13,
					15
				],
				[
					-9,
					28
				],
				[
					-19,
					28
				],
				[
					-7,
					-5
				]
			],
			[
				[
					2695,
					5543
				],
				[
					-15,
					14
				],
				[
					-6,
					12
				],
				[
					4,
					10
				],
				[
					-1,
					13
				],
				[
					-8,
					14
				],
				[
					-11,
					12
				],
				[
					-10,
					8
				],
				[
					-1,
					17
				],
				[
					-8,
					10
				],
				[
					2,
					-17
				],
				[
					-5,
					-14
				],
				[
					-7,
					17
				],
				[
					-9,
					5
				],
				[
					-4,
					12
				],
				[
					1,
					18
				],
				[
					3,
					19
				],
				[
					-8,
					8
				],
				[
					7,
					12
				]
			],
			[
				[
					2619,
					5713
				],
				[
					4,
					7
				],
				[
					18,
					-15
				],
				[
					7,
					7
				],
				[
					9,
					-5
				],
				[
					4,
					-12
				],
				[
					8,
					-4
				],
				[
					7,
					13
				]
			],
			[
				[
					2676,
					5704
				],
				[
					7,
					-32
				],
				[
					11,
					-24
				],
				[
					13,
					-25
				]
			],
			[
				[
					2707,
					5623
				],
				[
					-11,
					-6
				],
				[
					0,
					-23
				],
				[
					6,
					-9
				],
				[
					-4,
					-7
				],
				[
					1,
					-11
				],
				[
					-2,
					-12
				],
				[
					-2,
					-12
				]
			],
			[
				[
					2715,
					6427
				],
				[
					23,
					-4
				],
				[
					22,
					0
				],
				[
					26,
					-21
				],
				[
					11,
					-21
				],
				[
					26,
					6
				],
				[
					10,
					-13
				],
				[
					24,
					-37
				],
				[
					17,
					-27
				],
				[
					9,
					1
				],
				[
					17,
					-12
				],
				[
					-2,
					-17
				],
				[
					20,
					-2
				],
				[
					21,
					-24
				],
				[
					-3,
					-14
				],
				[
					-19,
					-7
				],
				[
					-18,
					-3
				],
				[
					-19,
					4
				],
				[
					-40,
					-5
				],
				[
					18,
					32
				],
				[
					-11,
					16
				],
				[
					-18,
					4
				],
				[
					-9,
					17
				],
				[
					-7,
					33
				],
				[
					-16,
					-2
				],
				[
					-26,
					16
				],
				[
					-8,
					12
				],
				[
					-36,
					10
				],
				[
					-10,
					11
				],
				[
					11,
					15
				],
				[
					-28,
					3
				],
				[
					-20,
					-31
				],
				[
					-11,
					-1
				],
				[
					-4,
					-14
				],
				[
					-14,
					-7
				],
				[
					-12,
					6
				],
				[
					15,
					18
				],
				[
					6,
					22
				],
				[
					13,
					13
				],
				[
					14,
					11
				],
				[
					21,
					6
				],
				[
					7,
					6
				]
			],
			[
				[
					5909,
					7133
				],
				[
					2,
					1
				],
				[
					4,
					14
				],
				[
					20,
					-1
				],
				[
					25,
					18
				],
				[
					-19,
					-25
				],
				[
					2,
					-11
				]
			],
			[
				[
					5943,
					7129
				],
				[
					-3,
					2
				],
				[
					-5,
					-5
				],
				[
					-4,
					1
				],
				[
					-2,
					-2
				],
				[
					0,
					6
				],
				[
					-2,
					4
				],
				[
					-6,
					0
				],
				[
					-7,
					-5
				],
				[
					-5,
					3
				]
			],
			[
				[
					5943,
					7129
				],
				[
					1,
					-5
				],
				[
					-28,
					-24
				],
				[
					-14,
					8
				],
				[
					-7,
					23
				],
				[
					14,
					2
				]
			],
			[
				[
					5377,
					7945
				],
				[
					-16,
					25
				],
				[
					-14,
					15
				],
				[
					-3,
					25
				],
				[
					-5,
					17
				],
				[
					21,
					13
				],
				[
					10,
					15
				],
				[
					20,
					11
				],
				[
					7,
					11
				],
				[
					7,
					-6
				],
				[
					13,
					6
				]
			],
			[
				[
					5417,
					8077
				],
				[
					13,
					-19
				],
				[
					21,
					-5
				],
				[
					-2,
					-17
				],
				[
					15,
					-12
				],
				[
					4,
					15
				],
				[
					19,
					-6
				],
				[
					3,
					-19
				],
				[
					20,
					-3
				],
				[
					13,
					-29
				]
			],
			[
				[
					5523,
					7982
				],
				[
					-8,
					0
				],
				[
					-4,
					-11
				],
				[
					-7,
					-3
				],
				[
					-2,
					-13
				],
				[
					-5,
					-3
				],
				[
					-1,
					-5
				],
				[
					-9,
					-7
				],
				[
					-12,
					1
				],
				[
					-4,
					-13
				]
			],
			[
				[
					5275,
					8306
				],
				[
					1,
					-23
				],
				[
					28,
					-14
				],
				[
					-1,
					-21
				],
				[
					29,
					11
				],
				[
					15,
					16
				],
				[
					32,
					-23
				],
				[
					13,
					-19
				]
			],
			[
				[
					5392,
					8233
				],
				[
					6,
					-30
				],
				[
					-8,
					-16
				],
				[
					11,
					-21
				],
				[
					6,
					-31
				],
				[
					-2,
					-21
				],
				[
					12,
					-37
				]
			],
			[
				[
					5207,
					7871
				],
				[
					3,
					42
				],
				[
					14,
					40
				],
				[
					-40,
					11
				],
				[
					-13,
					16
				]
			],
			[
				[
					5171,
					7980
				],
				[
					2,
					26
				],
				[
					-6,
					13
				]
			],
			[
				[
					5171,
					8059
				],
				[
					-5,
					62
				],
				[
					17,
					0
				],
				[
					7,
					22
				],
				[
					6,
					54
				],
				[
					-5,
					20
				]
			],
			[
				[
					5191,
					8217
				],
				[
					6,
					13
				],
				[
					23,
					3
				],
				[
					5,
					-13
				],
				[
					19,
					29
				],
				[
					-6,
					22
				],
				[
					-2,
					34
				]
			],
			[
				[
					5236,
					8305
				],
				[
					21,
					-8
				],
				[
					18,
					9
				]
			],
			[
				[
					6196,
					5808
				],
				[
					7,
					-19
				],
				[
					-1,
					-24
				],
				[
					-16,
					-14
				],
				[
					12,
					-16
				]
			],
			[
				[
					6198,
					5735
				],
				[
					-10,
					-32
				]
			],
			[
				[
					6188,
					5703
				],
				[
					-7,
					11
				],
				[
					-6,
					-5
				],
				[
					-16,
					1
				],
				[
					0,
					18
				],
				[
					-2,
					17
				],
				[
					9,
					27
				],
				[
					10,
					26
				]
			],
			[
				[
					6176,
					5798
				],
				[
					12,
					-5
				],
				[
					8,
					15
				]
			],
			[
				[
					5352,
					8343
				],
				[
					-17,
					-48
				],
				[
					-29,
					33
				],
				[
					-4,
					25
				],
				[
					41,
					19
				],
				[
					9,
					-29
				]
			],
			[
				[
					5236,
					8305
				],
				[
					-11,
					32
				],
				[
					-1,
					61
				],
				[
					5,
					16
				],
				[
					8,
					17
				],
				[
					24,
					4
				],
				[
					10,
					16
				],
				[
					22,
					17
				],
				[
					-1,
					-30
				],
				[
					-8,
					-20
				],
				[
					4,
					-16
				],
				[
					15,
					-9
				],
				[
					-7,
					-22
				],
				[
					-8,
					6
				],
				[
					-20,
					-42
				],
				[
					7,
					-29
				]
			],
			[
				[
					3008,
					6222
				],
				[
					3,
					10
				],
				[
					22,
					0
				],
				[
					16,
					-15
				],
				[
					8,
					1
				],
				[
					5,
					-21
				],
				[
					15,
					1
				],
				[
					-1,
					-17
				],
				[
					12,
					-2
				],
				[
					14,
					-22
				],
				[
					-10,
					-24
				],
				[
					-14,
					13
				],
				[
					-12,
					-3
				],
				[
					-9,
					3
				],
				[
					-5,
					-11
				],
				[
					-11,
					-3
				],
				[
					-4,
					14
				],
				[
					-10,
					-8
				],
				[
					-11,
					-41
				],
				[
					-7,
					10
				],
				[
					-1,
					17
				]
			],
			[
				[
					3008,
					6124
				],
				[
					0,
					16
				],
				[
					-7,
					17
				],
				[
					7,
					10
				],
				[
					2,
					23
				],
				[
					-2,
					32
				]
			],
			[
				[
					5333,
					6444
				],
				[
					-95,
					-112
				],
				[
					-81,
					-117
				],
				[
					-39,
					-26
				]
			],
			[
				[
					5118,
					6189
				],
				[
					-31,
					-6
				],
				[
					0,
					38
				],
				[
					-13,
					10
				],
				[
					-17,
					16
				],
				[
					-7,
					28
				],
				[
					-94,
					129
				],
				[
					-93,
					129
				]
			],
			[
				[
					4863,
					6533
				],
				[
					-105,
					143
				]
			],
			[
				[
					4758,
					6676
				],
				[
					1,
					11
				],
				[
					0,
					4
				]
			],
			[
				[
					4759,
					6691
				],
				[
					0,
					70
				],
				[
					44,
					44
				],
				[
					28,
					9
				],
				[
					23,
					16
				],
				[
					11,
					29
				],
				[
					32,
					24
				],
				[
					1,
					44
				],
				[
					16,
					5
				],
				[
					13,
					22
				],
				[
					36,
					9
				],
				[
					5,
					23
				],
				[
					-7,
					13
				],
				[
					-10,
					62
				],
				[
					-1,
					36
				],
				[
					-11,
					38
				]
			],
			[
				[
					4939,
					7135
				],
				[
					27,
					32
				],
				[
					30,
					11
				],
				[
					17,
					24
				],
				[
					27,
					18
				],
				[
					47,
					11
				],
				[
					46,
					4
				],
				[
					14,
					-8
				],
				[
					26,
					23
				],
				[
					30,
					0
				],
				[
					11,
					-13
				],
				[
					19,
					3
				]
			],
			[
				[
					5233,
					7240
				],
				[
					-5,
					-30
				],
				[
					4,
					-56
				],
				[
					-6,
					-49
				],
				[
					-18,
					-33
				],
				[
					3,
					-45
				],
				[
					23,
					-35
				],
				[
					0,
					-14
				],
				[
					17,
					-24
				],
				[
					12,
					-106
				]
			],
			[
				[
					5263,
					6848
				],
				[
					9,
					-52
				],
				[
					1,
					-28
				],
				[
					-5,
					-48
				],
				[
					2,
					-27
				],
				[
					-3,
					-32
				],
				[
					2,
					-37
				],
				[
					-11,
					-25
				],
				[
					17,
					-43
				],
				[
					1,
					-25
				],
				[
					10,
					-33
				],
				[
					13,
					11
				],
				[
					22,
					-28
				],
				[
					12,
					-37
				]
			],
			[
				[
					2769,
					4856
				],
				[
					15,
					45
				],
				[
					-6,
					25
				],
				[
					-11,
					-27
				],
				[
					-16,
					26
				],
				[
					5,
					16
				],
				[
					-4,
					54
				],
				[
					9,
					9
				],
				[
					5,
					37
				],
				[
					11,
					38
				],
				[
					-2,
					24
				],
				[
					15,
					13
				],
				[
					19,
					23
				]
			],
			[
				[
					2906,
					5049
				],
				[
					4,
					-45
				],
				[
					-9,
					-39
				],
				[
					-30,
					-62
				],
				[
					-33,
					-23
				],
				[
					-17,
					-51
				],
				[
					-6,
					-40
				],
				[
					-15,
					-24
				],
				[
					-12,
					29
				],
				[
					-11,
					7
				],
				[
					-12,
					-5
				],
				[
					-1,
					22
				],
				[
					8,
					14
				],
				[
					-3,
					24
				]
			],
			[
				[
					5969,
					6800
				],
				[
					-7,
					-23
				],
				[
					-6,
					-45
				],
				[
					-8,
					-31
				],
				[
					-6,
					-10
				],
				[
					-10,
					19
				],
				[
					-12,
					26
				],
				[
					-20,
					85
				],
				[
					-3,
					-5
				],
				[
					12,
					-63
				],
				[
					17,
					-59
				],
				[
					21,
					-92
				],
				[
					10,
					-32
				],
				[
					9,
					-34
				],
				[
					25,
					-65
				],
				[
					-6,
					-10
				],
				[
					1,
					-39
				],
				[
					33,
					-53
				],
				[
					4,
					-12
				]
			],
			[
				[
					6023,
					6357
				],
				[
					-110,
					0
				],
				[
					-107,
					0
				],
				[
					-112,
					0
				]
			],
			[
				[
					5694,
					6357
				],
				[
					0,
					218
				],
				[
					0,
					210
				],
				[
					-8,
					47
				],
				[
					7,
					37
				],
				[
					-5,
					25
				],
				[
					10,
					29
				]
			],
			[
				[
					5698,
					6923
				],
				[
					37,
					0
				],
				[
					27,
					-15
				],
				[
					28,
					-18
				],
				[
					13,
					-9
				],
				[
					21,
					19
				],
				[
					11,
					17
				],
				[
					25,
					5
				],
				[
					20,
					-8
				],
				[
					7,
					-29
				],
				[
					7,
					19
				],
				[
					22,
					-14
				],
				[
					22,
					-3
				],
				[
					13,
					15
				]
			],
			[
				[
					5951,
					6902
				],
				[
					18,
					-102
				]
			],
			[
				[
					6176,
					5798
				],
				[
					-10,
					20
				],
				[
					-11,
					34
				],
				[
					-12,
					19
				],
				[
					-8,
					21
				],
				[
					-24,
					23
				],
				[
					-19,
					1
				],
				[
					-7,
					12
				],
				[
					-16,
					-14
				],
				[
					-17,
					27
				],
				[
					-8,
					-44
				],
				[
					-33,
					13
				]
			],
			[
				[
					6011,
					5910
				],
				[
					-3,
					23
				],
				[
					12,
					87
				],
				[
					3,
					39
				],
				[
					9,
					18
				],
				[
					20,
					10
				],
				[
					14,
					34
				]
			],
			[
				[
					6066,
					6121
				],
				[
					16,
					-69
				],
				[
					8,
					-54
				],
				[
					15,
					-29
				],
				[
					38,
					-55
				],
				[
					16,
					-34
				],
				[
					15,
					-34
				],
				[
					8,
					-20
				],
				[
					14,
					-18
				]
			],
			[
				[
					4749,
					7532
				],
				[
					1,
					42
				],
				[
					-11,
					25
				],
				[
					39,
					43
				],
				[
					34,
					-11
				],
				[
					37,
					1
				],
				[
					30,
					-10
				],
				[
					23,
					3
				],
				[
					45,
					-2
				]
			],
			[
				[
					4947,
					7623
				],
				[
					11,
					-23
				],
				[
					51,
					-27
				],
				[
					10,
					13
				],
				[
					31,
					-27
				],
				[
					32,
					8
				]
			],
			[
				[
					5082,
					7567
				],
				[
					2,
					-35
				],
				[
					-26,
					-39
				],
				[
					-36,
					-12
				],
				[
					-2,
					-20
				],
				[
					-18,
					-33
				],
				[
					-10,
					-48
				],
				[
					11,
					-34
				],
				[
					-16,
					-26
				],
				[
					-6,
					-39
				],
				[
					-21,
					-11
				],
				[
					-20,
					-46
				],
				[
					-35,
					-1
				],
				[
					-27,
					1
				],
				[
					-17,
					-21
				],
				[
					-11,
					-22
				],
				[
					-13,
					5
				],
				[
					-11,
					20
				],
				[
					-8,
					34
				],
				[
					-26,
					9
				]
			],
			[
				[
					4792,
					7249
				],
				[
					-2,
					20
				],
				[
					10,
					22
				],
				[
					4,
					16
				],
				[
					-9,
					17
				],
				[
					7,
					39
				],
				[
					-11,
					36
				],
				[
					12,
					5
				],
				[
					1,
					27
				],
				[
					5,
					9
				],
				[
					0,
					46
				],
				[
					13,
					16
				],
				[
					-8,
					30
				],
				[
					-16,
					2
				],
				[
					-5,
					-8
				],
				[
					-16,
					0
				],
				[
					-7,
					29
				],
				[
					-11,
					-8
				],
				[
					-10,
					-15
				]
			],
			[
				[
					5675,
					8472
				],
				[
					3,
					35
				],
				[
					-10,
					-8
				],
				[
					-18,
					21
				],
				[
					-2,
					34
				],
				[
					35,
					17
				],
				[
					35,
					8
				],
				[
					30,
					-10
				],
				[
					29,
					2
				]
			],
			[
				[
					5777,
					8571
				],
				[
					4,
					-10
				],
				[
					-20,
					-34
				],
				[
					8,
					-55
				],
				[
					-12,
					-19
				]
			],
			[
				[
					5757,
					8453
				],
				[
					-22,
					0
				],
				[
					-24,
					22
				],
				[
					-13,
					7
				],
				[
					-23,
					-10
				]
			],
			[
				[
					6188,
					5703
				],
				[
					-6,
					-21
				],
				[
					10,
					-32
				],
				[
					10,
					-29
				],
				[
					11,
					-21
				],
				[
					90,
					-70
				],
				[
					24,
					0
				]
			],
			[
				[
					6327,
					5530
				],
				[
					-79,
					-177
				],
				[
					-36,
					-3
				],
				[
					-25,
					-41
				],
				[
					-17,
					-1
				],
				[
					-8,
					-19
				]
			],
			[
				[
					6162,
					5289
				],
				[
					-19,
					0
				],
				[
					-11,
					20
				],
				[
					-26,
					-25
				],
				[
					-8,
					-24
				],
				[
					-18,
					4
				],
				[
					-6,
					7
				],
				[
					-7,
					-1
				],
				[
					-9,
					0
				],
				[
					-35,
					50
				],
				[
					-19,
					0
				],
				[
					-10,
					20
				],
				[
					0,
					33
				],
				[
					-14,
					10
				]
			],
			[
				[
					5980,
					5383
				],
				[
					-17,
					64
				],
				[
					-12,
					14
				],
				[
					-5,
					23
				],
				[
					-14,
					29
				],
				[
					-17,
					4
				],
				[
					9,
					34
				],
				[
					15,
					2
				],
				[
					4,
					18
				]
			],
			[
				[
					5943,
					5571
				],
				[
					0,
					53
				]
			],
			[
				[
					5943,
					5624
				],
				[
					8,
					62
				],
				[
					13,
					16
				],
				[
					3,
					24
				],
				[
					12,
					45
				],
				[
					17,
					30
				],
				[
					11,
					58
				],
				[
					4,
					51
				]
			],
			[
				[
					5794,
					9138
				],
				[
					-4,
					-42
				],
				[
					42,
					-39
				],
				[
					-26,
					-45
				],
				[
					33,
					-67
				],
				[
					-19,
					-51
				],
				[
					25,
					-43
				],
				[
					-11,
					-39
				],
				[
					41,
					-40
				],
				[
					-11,
					-31
				],
				[
					-25,
					-34
				],
				[
					-60,
					-75
				]
			],
			[
				[
					5779,
					8632
				],
				[
					-50,
					-5
				],
				[
					-49,
					-21
				],
				[
					-45,
					-13
				],
				[
					-16,
					32
				],
				[
					-27,
					20
				],
				[
					6,
					58
				],
				[
					-14,
					53
				],
				[
					14,
					35
				],
				[
					25,
					37
				],
				[
					63,
					64
				],
				[
					19,
					12
				],
				[
					-3,
					25
				],
				[
					-39,
					28
				]
			],
			[
				[
					5663,
					8957
				],
				[
					-9,
					23
				],
				[
					-1,
					91
				],
				[
					-43,
					40
				],
				[
					-37,
					29
				]
			],
			[
				[
					5573,
					9140
				],
				[
					17,
					16
				],
				[
					30,
					-32
				],
				[
					37,
					3
				],
				[
					30,
					-14
				],
				[
					26,
					26
				],
				[
					14,
					44
				],
				[
					43,
					20
				],
				[
					35,
					-24
				],
				[
					-11,
					-41
				]
			],
			[
				[
					9954,
					4033
				],
				[
					9,
					-17
				],
				[
					-4,
					-31
				],
				[
					-17,
					-8
				],
				[
					-16,
					7
				],
				[
					-2,
					26
				],
				[
					10,
					21
				],
				[
					13,
					-8
				],
				[
					7,
					10
				]
			],
			[
				[
					0,
					4108
				],
				[
					6,
					3
				],
				[
					-4,
					-28
				],
				[
					-2,
					-4
				],
				[
					9981,
					-14
				],
				[
					-17,
					-13
				],
				[
					-4,
					23
				],
				[
					14,
					12
				],
				[
					9,
					3
				],
				[
					-9983,
					18
				]
			],
			[
				[
					3300,
					1994
				],
				[
					33,
					36
				],
				[
					24,
					-15
				],
				[
					16,
					24
				],
				[
					22,
					-27
				],
				[
					-8,
					-21
				],
				[
					-37,
					-17
				],
				[
					-13,
					20
				],
				[
					-23,
					-26
				],
				[
					-14,
					26
				]
			],
			[
				[
					3485,
					5194
				],
				[
					7,
					25
				],
				[
					3,
					27
				]
			],
			[
				[
					3495,
					5246
				],
				[
					4,
					26
				],
				[
					-10,
					34
				]
			],
			[
				[
					3489,
					5306
				],
				[
					-3,
					41
				],
				[
					15,
					51
				]
			],
			[
				[
					3501,
					5398
				],
				[
					9,
					-7
				],
				[
					21,
					-14
				],
				[
					29,
					-50
				],
				[
					5,
					-24
				]
			],
			[
				[
					5265,
					7548
				],
				[
					-9,
					-46
				],
				[
					-13,
					12
				],
				[
					-6,
					40
				],
				[
					5,
					22
				],
				[
					18,
					22
				],
				[
					5,
					-50
				]
			],
			[
				[
					5157,
					7984
				],
				[
					6,
					-6
				],
				[
					8,
					2
				]
			],
			[
				[
					5190,
					7775
				],
				[
					-2,
					-17
				],
				[
					9,
					-22
				],
				[
					-10,
					-18
				],
				[
					7,
					-46
				],
				[
					15,
					-8
				],
				[
					-3,
					-25
				]
			],
			[
				[
					5206,
					7639
				],
				[
					-25,
					-34
				],
				[
					-55,
					16
				],
				[
					-40,
					-19
				],
				[
					-4,
					-35
				]
			],
			[
				[
					4947,
					7623
				],
				[
					14,
					35
				],
				[
					5,
					118
				],
				[
					-28,
					62
				],
				[
					-21,
					30
				],
				[
					-42,
					23
				],
				[
					-3,
					43
				],
				[
					36,
					12
				],
				[
					47,
					-15
				],
				[
					-9,
					67
				],
				[
					26,
					-25
				],
				[
					65,
					46
				],
				[
					8,
					48
				],
				[
					24,
					12
				]
			],
			[
				[
					5308,
					4822
				],
				[
					-29,
					60
				],
				[
					-18,
					49
				],
				[
					-17,
					61
				],
				[
					1,
					19
				],
				[
					6,
					19
				],
				[
					7,
					43
				],
				[
					5,
					44
				]
			],
			[
				[
					5263,
					5117
				],
				[
					10,
					4
				],
				[
					40,
					-1
				],
				[
					0,
					71
				]
			],
			[
				[
					4827,
					8240
				],
				[
					-21,
					12
				],
				[
					-17,
					-1
				],
				[
					6,
					32
				],
				[
					-6,
					32
				]
			],
			[
				[
					4789,
					8315
				],
				[
					23,
					2
				],
				[
					30,
					-37
				],
				[
					-15,
					-40
				]
			],
			[
				[
					4916,
					8521
				],
				[
					-30,
					-63
				],
				[
					29,
					8
				],
				[
					30,
					-1
				],
				[
					-7,
					-48
				],
				[
					-25,
					-53
				],
				[
					29,
					-4
				],
				[
					2,
					-6
				],
				[
					25,
					-69
				],
				[
					19,
					-10
				],
				[
					17,
					-67
				],
				[
					8,
					-24
				],
				[
					33,
					-11
				],
				[
					-3,
					-38
				],
				[
					-14,
					-17
				],
				[
					11,
					-30
				],
				[
					-25,
					-31
				],
				[
					-37,
					0
				],
				[
					-48,
					-16
				],
				[
					-13,
					12
				],
				[
					-18,
					-28
				],
				[
					-26,
					7
				],
				[
					-19,
					-23
				],
				[
					-15,
					12
				],
				[
					41,
					62
				],
				[
					25,
					13
				],
				[
					-1,
					0
				],
				[
					-43,
					9
				],
				[
					-8,
					24
				],
				[
					29,
					18
				],
				[
					-15,
					32
				],
				[
					5,
					39
				],
				[
					42,
					-6
				],
				[
					4,
					35
				],
				[
					-19,
					36
				],
				[
					0,
					1
				],
				[
					-34,
					10
				],
				[
					-7,
					16
				],
				[
					10,
					27
				],
				[
					-9,
					16
				],
				[
					-15,
					-28
				],
				[
					-1,
					57
				],
				[
					-14,
					30
				],
				[
					10,
					61
				],
				[
					21,
					48
				],
				[
					23,
					-4
				],
				[
					33,
					4
				]
			],
			[
				[
					6154,
					7511
				],
				[
					4,
					26
				],
				[
					-7,
					40
				],
				[
					-16,
					22
				],
				[
					-16,
					6
				],
				[
					-10,
					19
				]
			],
			[
				[
					6109,
					7624
				],
				[
					4,
					6
				],
				[
					23,
					-10
				],
				[
					41,
					-9
				],
				[
					38,
					-28
				],
				[
					5,
					-11
				],
				[
					17,
					9
				],
				[
					25,
					-13
				],
				[
					9,
					-24
				],
				[
					17,
					-13
				]
			],
			[
				[
					6210,
					7485
				],
				[
					-27,
					29
				],
				[
					-29,
					-3
				]
			],
			[
				[
					5029,
					5408
				],
				[
					-44,
					-35
				],
				[
					-15,
					-20
				],
				[
					-25,
					-17
				],
				[
					-25,
					17
				]
			],
			[
				[
					5000,
					5708
				],
				[
					-2,
					-18
				],
				[
					12,
					-30
				],
				[
					0,
					-43
				],
				[
					2,
					-47
				],
				[
					7,
					-21
				],
				[
					-6,
					-54
				],
				[
					2,
					-29
				],
				[
					8,
					-37
				],
				[
					6,
					-21
				]
			],
			[
				[
					4765,
					5512
				],
				[
					-8,
					1
				],
				[
					-5,
					-24
				],
				[
					-8,
					1
				],
				[
					-6,
					12
				],
				[
					2,
					24
				],
				[
					-11,
					36
				],
				[
					-8,
					-7
				],
				[
					-6,
					-1
				]
			],
			[
				[
					4715,
					5554
				],
				[
					-7,
					-3
				],
				[
					0,
					21
				],
				[
					-4,
					16
				],
				[
					0,
					17
				],
				[
					-6,
					25
				],
				[
					-7,
					21
				],
				[
					-23,
					0
				],
				[
					-6,
					-11
				],
				[
					-8,
					-1
				],
				[
					-4,
					-13
				],
				[
					-4,
					-17
				],
				[
					-14,
					-26
				]
			],
			[
				[
					4632,
					5583
				],
				[
					-13,
					35
				],
				[
					-10,
					24
				],
				[
					-8,
					7
				],
				[
					-6,
					12
				],
				[
					-4,
					26
				],
				[
					-4,
					13
				],
				[
					-8,
					10
				]
			],
			[
				[
					4579,
					5710
				],
				[
					13,
					29
				],
				[
					8,
					-2
				],
				[
					7,
					10
				],
				[
					6,
					0
				],
				[
					5,
					8
				],
				[
					-3,
					20
				],
				[
					3,
					6
				],
				[
					1,
					20
				]
			],
			[
				[
					4619,
					5801
				],
				[
					13,
					-1
				],
				[
					20,
					-14
				],
				[
					6,
					1
				],
				[
					3,
					7
				],
				[
					15,
					-5
				],
				[
					4,
					4
				]
			],
			[
				[
					4680,
					5793
				],
				[
					1,
					-22
				],
				[
					5,
					0
				],
				[
					7,
					8
				],
				[
					5,
					-2
				],
				[
					7,
					-15
				],
				[
					12,
					-5
				],
				[
					8,
					13
				],
				[
					9,
					8
				],
				[
					6,
					8
				],
				[
					6,
					-1
				],
				[
					6,
					-13
				],
				[
					3,
					-17
				],
				[
					12,
					-24
				],
				[
					-6,
					-16
				],
				[
					-1,
					-19
				],
				[
					6,
					6
				],
				[
					3,
					-7
				],
				[
					-1,
					-17
				],
				[
					8,
					-18
				]
			],
			[
				[
					4532,
					5834
				],
				[
					3,
					27
				]
			],
			[
				[
					4535,
					5861
				],
				[
					31,
					1
				],
				[
					6,
					14
				],
				[
					9,
					1
				],
				[
					11,
					-14
				],
				[
					8,
					-1
				],
				[
					9,
					10
				],
				[
					6,
					-17
				],
				[
					-12,
					-13
				],
				[
					-12,
					1
				],
				[
					-12,
					13
				],
				[
					-10,
					-14
				],
				[
					-5,
					-1
				],
				[
					-7,
					-8
				],
				[
					-25,
					1
				]
			],
			[
				[
					4579,
					5710
				],
				[
					-15,
					24
				],
				[
					-11,
					4
				],
				[
					-7,
					17
				],
				[
					1,
					9
				],
				[
					-9,
					13
				],
				[
					-2,
					12
				]
			],
			[
				[
					4536,
					5789
				],
				[
					15,
					10
				],
				[
					9,
					-2
				],
				[
					8,
					7
				],
				[
					51,
					-3
				]
			],
			[
				[
					5263,
					5117
				],
				[
					-5,
					9
				],
				[
					10,
					66
				]
			],
			[
				[
					5658,
					7167
				],
				[
					15,
					-20
				],
				[
					22,
					3
				],
				[
					20,
					-4
				],
				[
					0,
					-10
				],
				[
					15,
					7
				],
				[
					-4,
					-18
				],
				[
					-40,
					-5
				],
				[
					1,
					10
				],
				[
					-34,
					12
				],
				[
					5,
					25
				]
			],
			[
				[
					5723,
					7469
				],
				[
					-17,
					2
				],
				[
					-14,
					6
				],
				[
					-34,
					-16
				],
				[
					19,
					-33
				],
				[
					-14,
					-10
				],
				[
					-15,
					0
				],
				[
					-15,
					31
				],
				[
					-5,
					-13
				],
				[
					6,
					-36
				],
				[
					14,
					-27
				],
				[
					-10,
					-13
				],
				[
					15,
					-27
				],
				[
					14,
					-18
				],
				[
					0,
					-33
				],
				[
					-25,
					16
				],
				[
					8,
					-30
				],
				[
					-18,
					-7
				],
				[
					11,
					-52
				],
				[
					-19,
					-1
				],
				[
					-23,
					26
				],
				[
					-10,
					47
				],
				[
					-5,
					40
				],
				[
					-11,
					27
				],
				[
					-14,
					34
				],
				[
					-2,
					16
				]
			],
			[
				[
					5583,
					7470
				],
				[
					18,
					6
				],
				[
					11,
					13
				],
				[
					15,
					-2
				],
				[
					5,
					11
				],
				[
					5,
					2
				]
			],
			[
				[
					5725,
					7529
				],
				[
					13,
					-16
				],
				[
					-8,
					-37
				],
				[
					-7,
					-7
				]
			],
			[
				[
					3701,
					9939
				],
				[
					93,
					35
				],
				[
					97,
					-2
				],
				[
					36,
					21
				],
				[
					98,
					6
				],
				[
					222,
					-7
				],
				[
					174,
					-47
				],
				[
					-52,
					-23
				],
				[
					-106,
					-3
				],
				[
					-150,
					-5
				],
				[
					14,
					-11
				],
				[
					99,
					7
				],
				[
					83,
					-21
				],
				[
					54,
					18
				],
				[
					23,
					-21
				],
				[
					-30,
					-34
				],
				[
					71,
					22
				],
				[
					135,
					23
				],
				[
					83,
					-12
				],
				[
					15,
					-25
				],
				[
					-113,
					-42
				],
				[
					-16,
					-14
				],
				[
					-88,
					-10
				],
				[
					64,
					-3
				],
				[
					-32,
					-43
				],
				[
					-23,
					-38
				],
				[
					1,
					-66
				],
				[
					33,
					-38
				],
				[
					-43,
					-3
				],
				[
					-46,
					-19
				],
				[
					52,
					-31
				],
				[
					6,
					-50
				],
				[
					-30,
					-6
				],
				[
					36,
					-50
				],
				[
					-61,
					-5
				],
				[
					32,
					-24
				],
				[
					-9,
					-20
				],
				[
					-39,
					-10
				],
				[
					-39,
					0
				],
				[
					35,
					-40
				],
				[
					0,
					-26
				],
				[
					-55,
					24
				],
				[
					-14,
					-15
				],
				[
					37,
					-15
				],
				[
					37,
					-36
				],
				[
					10,
					-48
				],
				[
					-49,
					-11
				],
				[
					-22,
					22
				],
				[
					-34,
					34
				],
				[
					10,
					-40
				],
				[
					-33,
					-31
				],
				[
					73,
					-2
				],
				[
					39,
					-3
				],
				[
					-75,
					-52
				],
				[
					-75,
					-46
				],
				[
					-81,
					-21
				],
				[
					-31,
					0
				],
				[
					-29,
					-23
				],
				[
					-38,
					-62
				],
				[
					-60,
					-42
				],
				[
					-19,
					-2
				],
				[
					-37,
					-15
				],
				[
					-40,
					-13
				],
				[
					-24,
					-37
				],
				[
					0,
					-41
				],
				[
					-15,
					-39
				],
				[
					-45,
					-47
				],
				[
					11,
					-47
				],
				[
					-12,
					-48
				],
				[
					-14,
					-58
				],
				[
					-39,
					-4
				],
				[
					-41,
					49
				],
				[
					-56,
					0
				],
				[
					-27,
					32
				],
				[
					-18,
					58
				],
				[
					-49,
					73
				],
				[
					-14,
					39
				],
				[
					-3,
					53
				],
				[
					-39,
					54
				],
				[
					10,
					44
				],
				[
					-18,
					21
				],
				[
					27,
					69
				],
				[
					42,
					22
				],
				[
					11,
					25
				],
				[
					6,
					46
				],
				[
					-32,
					-21
				],
				[
					-15,
					-9
				],
				[
					-25,
					-8
				],
				[
					-34,
					19
				],
				[
					-2,
					40
				],
				[
					11,
					31
				],
				[
					25,
					1
				],
				[
					57,
					-15
				],
				[
					-48,
					37
				],
				[
					-24,
					20
				],
				[
					-28,
					-8
				],
				[
					-23,
					15
				],
				[
					31,
					55
				],
				[
					-17,
					22
				],
				[
					-22,
					41
				],
				[
					-34,
					62
				],
				[
					-35,
					23
				],
				[
					0,
					25
				],
				[
					-74,
					34
				],
				[
					-59,
					5
				],
				[
					-74,
					-3
				],
				[
					-68,
					-4
				],
				[
					-32,
					19
				],
				[
					-49,
					37
				],
				[
					73,
					19
				],
				[
					56,
					3
				],
				[
					-119,
					15
				],
				[
					-62,
					24
				],
				[
					3,
					23
				],
				[
					106,
					28
				],
				[
					101,
					29
				],
				[
					11,
					21
				],
				[
					-75,
					22
				],
				[
					24,
					23
				],
				[
					97,
					41
				],
				[
					40,
					7
				],
				[
					-12,
					26
				],
				[
					66,
					16
				],
				[
					86,
					9
				],
				[
					85,
					1
				],
				[
					30,
					-19
				],
				[
					74,
					33
				],
				[
					66,
					-22
				],
				[
					39,
					-5
				],
				[
					58,
					-19
				],
				[
					-66,
					32
				],
				[
					4,
					25
				]
			],
			[
				[
					2497,
					5869
				],
				[
					-14,
					10
				],
				[
					-17,
					1
				],
				[
					-13,
					12
				],
				[
					-15,
					24
				]
			],
			[
				[
					2438,
					5916
				],
				[
					1,
					18
				],
				[
					3,
					13
				],
				[
					-4,
					12
				],
				[
					13,
					48
				],
				[
					36,
					0
				],
				[
					1,
					20
				],
				[
					-5,
					4
				],
				[
					-3,
					12
				],
				[
					-10,
					14
				],
				[
					-11,
					20
				],
				[
					13,
					0
				],
				[
					0,
					33
				],
				[
					26,
					0
				],
				[
					26,
					0
				]
			],
			[
				[
					2529,
					5996
				],
				[
					10,
					-11
				],
				[
					2,
					9
				],
				[
					8,
					-7
				]
			],
			[
				[
					2549,
					5987
				],
				[
					-13,
					-23
				],
				[
					-13,
					-16
				],
				[
					-2,
					-12
				],
				[
					2,
					-11
				],
				[
					-5,
					-15
				]
			],
			[
				[
					2518,
					5910
				],
				[
					-7,
					-4
				],
				[
					2,
					-7
				],
				[
					-6,
					-6
				],
				[
					-9,
					-15
				],
				[
					-1,
					-9
				]
			],
			[
				[
					3340,
					5552
				],
				[
					18,
					-22
				],
				[
					17,
					-38
				],
				[
					1,
					-31
				],
				[
					10,
					-1
				],
				[
					15,
					-29
				],
				[
					11,
					-21
				]
			],
			[
				[
					3412,
					5410
				],
				[
					-4,
					-53
				],
				[
					-17,
					-15
				],
				[
					1,
					-14
				],
				[
					-5,
					-31
				],
				[
					13,
					-42
				],
				[
					9,
					-1
				],
				[
					3,
					-33
				],
				[
					17,
					-51
				]
			],
			[
				[
					3313,
					5365
				],
				[
					-19,
					45
				],
				[
					7,
					16
				],
				[
					0,
					27
				],
				[
					17,
					10
				],
				[
					7,
					11
				],
				[
					-10,
					22
				],
				[
					3,
					21
				],
				[
					22,
					35
				]
			],
			[
				[
					2574,
					5825
				],
				[
					-5,
					18
				],
				[
					-8,
					5
				]
			],
			[
				[
					2561,
					5848
				],
				[
					2,
					24
				],
				[
					-4,
					6
				],
				[
					-6,
					4
				],
				[
					-12,
					-7
				],
				[
					-1,
					8
				],
				[
					-8,
					10
				],
				[
					-6,
					12
				],
				[
					-8,
					5
				]
			],
			[
				[
					2549,
					5987
				],
				[
					3,
					-3
				],
				[
					6,
					11
				],
				[
					8,
					1
				],
				[
					3,
					-5
				],
				[
					4,
					3
				],
				[
					13,
					-6
				],
				[
					13,
					2
				],
				[
					9,
					6
				],
				[
					3,
					7
				],
				[
					9,
					-3
				],
				[
					6,
					-4
				],
				[
					8,
					1
				],
				[
					5,
					5
				],
				[
					13,
					-8
				],
				[
					4,
					-1
				],
				[
					9,
					-11
				],
				[
					8,
					-13
				],
				[
					10,
					-9
				],
				[
					7,
					-17
				]
			],
			[
				[
					2690,
					5943
				],
				[
					-9,
					2
				],
				[
					-4,
					-8
				],
				[
					-10,
					-8
				],
				[
					-7,
					0
				],
				[
					-6,
					-8
				],
				[
					-6,
					3
				],
				[
					-4,
					9
				],
				[
					-3,
					-2
				],
				[
					-4,
					-14
				],
				[
					-3,
					1
				],
				[
					0,
					-12
				],
				[
					-10,
					-17
				],
				[
					-5,
					-7
				],
				[
					-3,
					-7
				],
				[
					-8,
					12
				],
				[
					-6,
					-16
				],
				[
					-6,
					1
				],
				[
					-6,
					-2
				],
				[
					0,
					-29
				],
				[
					-4,
					0
				],
				[
					-3,
					-14
				],
				[
					-9,
					-2
				]
			],
			[
				[
					5522,
					7770
				],
				[
					7,
					-23
				],
				[
					9,
					-17
				],
				[
					-11,
					-22
				]
			],
			[
				[
					5515,
					7577
				],
				[
					-3,
					-10
				]
			],
			[
				[
					5512,
					7567
				],
				[
					-26,
					22
				],
				[
					-16,
					21
				],
				[
					-26,
					18
				],
				[
					-23,
					43
				],
				[
					6,
					5
				],
				[
					-13,
					25
				],
				[
					-1,
					19
				],
				[
					-17,
					10
				],
				[
					-9,
					-26
				],
				[
					-8,
					20
				],
				[
					0,
					21
				],
				[
					1,
					1
				]
			],
			[
				[
					5380,
					7746
				],
				[
					20,
					-2
				],
				[
					5,
					9
				],
				[
					9,
					-9
				],
				[
					11,
					-1
				],
				[
					0,
					16
				],
				[
					10,
					6
				],
				[
					2,
					24
				],
				[
					23,
					16
				]
			],
			[
				[
					5460,
					7805
				],
				[
					8,
					-7
				],
				[
					21,
					-26
				],
				[
					23,
					-11
				],
				[
					10,
					9
				]
			],
			[
				[
					3008,
					6124
				],
				[
					-19,
					10
				],
				[
					-13,
					-5
				],
				[
					-17,
					5
				],
				[
					-13,
					-11
				],
				[
					-15,
					18
				],
				[
					3,
					19
				],
				[
					25,
					-8
				],
				[
					21,
					-5
				],
				[
					10,
					13
				],
				[
					-12,
					26
				],
				[
					0,
					23
				],
				[
					-18,
					9
				],
				[
					7,
					16
				],
				[
					17,
					-3
				],
				[
					24,
					-9
				]
			],
			[
				[
					5471,
					7900
				],
				[
					14,
					-15
				],
				[
					10,
					-6
				],
				[
					24,
					7
				],
				[
					2,
					12
				],
				[
					11,
					2
				],
				[
					14,
					9
				],
				[
					3,
					-4
				],
				[
					13,
					8
				],
				[
					6,
					13
				],
				[
					9,
					4
				],
				[
					30,
					-18
				],
				[
					6,
					6
				]
			],
			[
				[
					5613,
					7918
				],
				[
					15,
					-16
				],
				[
					2,
					-16
				]
			],
			[
				[
					5630,
					7886
				],
				[
					-17,
					-12
				],
				[
					-13,
					-40
				],
				[
					-17,
					-40
				],
				[
					-22,
					-11
				]
			],
			[
				[
					5561,
					7783
				],
				[
					-17,
					2
				],
				[
					-22,
					-15
				]
			],
			[
				[
					5460,
					7805
				],
				[
					-6,
					20
				],
				[
					-4,
					0
				]
			],
			[
				[
					8352,
					4453
				],
				[
					-11,
					-2
				],
				[
					-37,
					42
				],
				[
					26,
					11
				],
				[
					14,
					-18
				],
				[
					10,
					-17
				],
				[
					-2,
					-16
				]
			],
			[
				[
					8471,
					4532
				],
				[
					2,
					-11
				],
				[
					1,
					-18
				]
			],
			[
				[
					8474,
					4503
				],
				[
					-18,
					-45
				],
				[
					-24,
					-13
				],
				[
					-3,
					8
				],
				[
					2,
					20
				],
				[
					12,
					36
				],
				[
					28,
					23
				]
			],
			[
				[
					8274,
					4579
				],
				[
					10,
					-16
				],
				[
					17,
					5
				],
				[
					7,
					-25
				],
				[
					-32,
					-12
				],
				[
					-19,
					-8
				],
				[
					-15,
					1
				],
				[
					10,
					34
				],
				[
					15,
					0
				],
				[
					7,
					21
				]
			],
			[
				[
					8413,
					4579
				],
				[
					-4,
					-32
				],
				[
					-42,
					-17
				],
				[
					-37,
					7
				],
				[
					0,
					22
				],
				[
					22,
					12
				],
				[
					18,
					-18
				],
				[
					18,
					5
				],
				[
					25,
					21
				]
			],
			[
				[
					8017,
					4657
				],
				[
					53,
					-6
				],
				[
					6,
					25
				],
				[
					51,
					-29
				],
				[
					10,
					-38
				],
				[
					42,
					-11
				],
				[
					34,
					-35
				],
				[
					-31,
					-23
				],
				[
					-31,
					24
				],
				[
					-25,
					-1
				],
				[
					-29,
					4
				],
				[
					-26,
					11
				],
				[
					-32,
					22
				],
				[
					-21,
					6
				],
				[
					-11,
					-7
				],
				[
					-51,
					24
				],
				[
					-5,
					25
				],
				[
					-25,
					5
				],
				[
					19,
					56
				],
				[
					34,
					-3
				],
				[
					22,
					-23
				],
				[
					12,
					-5
				],
				[
					4,
					-21
				]
			],
			[
				[
					8741,
					4690
				],
				[
					-14,
					-40
				],
				[
					-3,
					45
				],
				[
					5,
					21
				],
				[
					6,
					20
				],
				[
					7,
					-17
				],
				[
					-1,
					-29
				]
			],
			[
				[
					8534,
					4853
				],
				[
					-11,
					-19
				],
				[
					-19,
					10
				],
				[
					-5,
					26
				],
				[
					28,
					3
				],
				[
					7,
					-20
				]
			],
			[
				[
					8623,
					4875
				],
				[
					10,
					-45
				],
				[
					-23,
					24
				],
				[
					-23,
					5
				],
				[
					-16,
					-4
				],
				[
					-19,
					2
				],
				[
					6,
					33
				],
				[
					35,
					2
				],
				[
					30,
					-17
				]
			],
			[
				[
					8916,
					4904
				],
				[
					0,
					-193
				],
				[
					1,
					-192
				]
			],
			[
				[
					8917,
					4519
				],
				[
					-25,
					48
				],
				[
					-28,
					12
				],
				[
					-7,
					-17
				],
				[
					-35,
					-1
				],
				[
					12,
					48
				],
				[
					17,
					16
				],
				[
					-7,
					64
				],
				[
					-14,
					50
				],
				[
					-53,
					50
				],
				[
					-23,
					5
				],
				[
					-42,
					54
				],
				[
					-8,
					-28
				],
				[
					-11,
					-5
				],
				[
					-6,
					21
				],
				[
					0,
					26
				],
				[
					-21,
					29
				],
				[
					29,
					21
				],
				[
					20,
					-1
				],
				[
					-2,
					16
				],
				[
					-41,
					0
				],
				[
					-11,
					35
				],
				[
					-25,
					11
				],
				[
					-11,
					29
				],
				[
					37,
					14
				],
				[
					14,
					20
				],
				[
					45,
					-25
				],
				[
					4,
					-22
				],
				[
					8,
					-95
				],
				[
					29,
					-35
				],
				[
					23,
					62
				],
				[
					32,
					36
				],
				[
					25,
					0
				],
				[
					23,
					-21
				],
				[
					21,
					-21
				],
				[
					30,
					-11
				]
			],
			[
				[
					8478,
					5141
				],
				[
					-22,
					-58
				],
				[
					-21,
					-12
				],
				[
					-27,
					12
				],
				[
					-46,
					-3
				],
				[
					-24,
					-8
				],
				[
					-4,
					-45
				],
				[
					24,
					-53
				],
				[
					15,
					27
				],
				[
					52,
					20
				],
				[
					-2,
					-27
				],
				[
					-12,
					9
				],
				[
					-12,
					-35
				],
				[
					-25,
					-23
				],
				[
					27,
					-76
				],
				[
					-5,
					-20
				],
				[
					25,
					-68
				],
				[
					-1,
					-39
				],
				[
					-14,
					-17
				],
				[
					-11,
					20
				],
				[
					13,
					49
				],
				[
					-27,
					-23
				],
				[
					-7,
					16
				],
				[
					3,
					23
				],
				[
					-20,
					35
				],
				[
					3,
					57
				],
				[
					-19,
					-18
				],
				[
					2,
					-69
				],
				[
					1,
					-84
				],
				[
					-17,
					-9
				],
				[
					-12,
					18
				],
				[
					8,
					54
				],
				[
					-4,
					57
				],
				[
					-12,
					1
				],
				[
					-9,
					40
				],
				[
					12,
					39
				],
				[
					4,
					47
				],
				[
					14,
					89
				],
				[
					5,
					24
				],
				[
					24,
					44
				],
				[
					22,
					-18
				],
				[
					35,
					-8
				],
				[
					32,
					3
				],
				[
					27,
					43
				],
				[
					5,
					-14
				]
			],
			[
				[
					8574,
					5124
				],
				[
					-2,
					-51
				],
				[
					-14,
					6
				],
				[
					-4,
					-36
				],
				[
					11,
					-32
				],
				[
					-8,
					-7
				],
				[
					-11,
					38
				],
				[
					-8,
					75
				],
				[
					6,
					47
				],
				[
					9,
					22
				],
				[
					2,
					-32
				],
				[
					16,
					-5
				],
				[
					3,
					-25
				]
			],
			[
				[
					8045,
					5176
				],
				[
					5,
					-39
				],
				[
					19,
					-34
				],
				[
					18,
					12
				],
				[
					18,
					-4
				],
				[
					16,
					30
				],
				[
					13,
					5
				],
				[
					26,
					-17
				],
				[
					23,
					13
				],
				[
					14,
					82
				],
				[
					11,
					21
				],
				[
					10,
					67
				],
				[
					32,
					0
				],
				[
					24,
					-10
				]
			],
			[
				[
					8274,
					5302
				],
				[
					-16,
					-53
				],
				[
					20,
					-56
				],
				[
					-5,
					-28
				],
				[
					32,
					-54
				],
				[
					-33,
					-7
				],
				[
					-10,
					-40
				],
				[
					2,
					-54
				],
				[
					-27,
					-40
				],
				[
					-1,
					-59
				],
				[
					-10,
					-91
				],
				[
					-5,
					21
				],
				[
					-31,
					-26
				],
				[
					-11,
					36
				],
				[
					-20,
					3
				],
				[
					-14,
					19
				],
				[
					-33,
					-21
				],
				[
					-10,
					29
				],
				[
					-18,
					-4
				],
				[
					-23,
					7
				],
				[
					-4,
					79
				],
				[
					-14,
					17
				],
				[
					-13,
					50
				],
				[
					-4,
					52
				],
				[
					3,
					55
				],
				[
					16,
					39
				]
			],
			[
				[
					7939,
					4712
				],
				[
					-31,
					-1
				],
				[
					-24,
					49
				],
				[
					-35,
					48
				],
				[
					-12,
					36
				],
				[
					-21,
					48
				],
				[
					-14,
					44
				],
				[
					-21,
					83
				],
				[
					-24,
					49
				],
				[
					-9,
					51
				],
				[
					-10,
					46
				],
				[
					-25,
					37
				],
				[
					-14,
					51
				],
				[
					-21,
					33
				],
				[
					-29,
					65
				],
				[
					-3,
					30
				],
				[
					18,
					-2
				],
				[
					43,
					-12
				],
				[
					25,
					-57
				],
				[
					21,
					-40
				],
				[
					16,
					-25
				],
				[
					26,
					-63
				],
				[
					28,
					-1
				],
				[
					23,
					-41
				],
				[
					16,
					-49
				],
				[
					22,
					-27
				],
				[
					-12,
					-49
				],
				[
					16,
					-20
				],
				[
					10,
					-2
				],
				[
					5,
					-41
				],
				[
					10,
					-33
				],
				[
					20,
					-5
				],
				[
					14,
					-37
				],
				[
					-7,
					-74
				],
				[
					-1,
					-91
				]
			],
			[
				[
					7252,
					6841
				],
				[
					-17,
					-27
				],
				[
					-11,
					-55
				],
				[
					27,
					-23
				],
				[
					26,
					-29
				],
				[
					36,
					-33
				],
				[
					38,
					-8
				],
				[
					16,
					-30
				],
				[
					22,
					-5
				],
				[
					33,
					-14
				],
				[
					23,
					1
				],
				[
					4,
					23
				],
				[
					-4,
					38
				],
				[
					2,
					25
				]
			],
			[
				[
					7703,
					6727
				],
				[
					2,
					-22
				],
				[
					-10,
					-11
				],
				[
					2,
					-36
				],
				[
					-19,
					10
				],
				[
					-36,
					-41
				],
				[
					0,
					-33
				],
				[
					-15,
					-50
				],
				[
					-1,
					-29
				],
				[
					-13,
					-48
				],
				[
					-21,
					13
				],
				[
					-1,
					-61
				],
				[
					-7,
					-20
				],
				[
					3,
					-25
				],
				[
					-14,
					-14
				]
			],
			[
				[
					7472,
					6360
				],
				[
					-4,
					-21
				],
				[
					-19,
					1
				],
				[
					-34,
					-13
				],
				[
					2,
					-44
				],
				[
					-15,
					-35
				],
				[
					-40,
					-40
				],
				[
					-31,
					-69
				],
				[
					-21,
					-38
				],
				[
					-28,
					-38
				],
				[
					0,
					-27
				],
				[
					-13,
					-15
				],
				[
					-26,
					-21
				],
				[
					-12,
					-3
				],
				[
					-9,
					-45
				],
				[
					6,
					-77
				],
				[
					1,
					-49
				],
				[
					-11,
					-56
				],
				[
					0,
					-101
				],
				[
					-15,
					-2
				],
				[
					-12,
					-46
				],
				[
					8,
					-19
				],
				[
					-25,
					-17
				],
				[
					-10,
					-40
				],
				[
					-11,
					-17
				],
				[
					-26,
					55
				],
				[
					-13,
					83
				],
				[
					-11,
					60
				],
				[
					-9,
					28
				],
				[
					-15,
					56
				],
				[
					-7,
					74
				],
				[
					-5,
					37
				],
				[
					-25,
					81
				],
				[
					-12,
					115
				],
				[
					-8,
					75
				],
				[
					0,
					72
				],
				[
					-5,
					55
				],
				[
					-41,
					-35
				],
				[
					-19,
					7
				],
				[
					-36,
					71
				],
				[
					13,
					22
				],
				[
					-8,
					23
				],
				[
					-33,
					50
				]
			],
			[
				[
					6893,
					6457
				],
				[
					19,
					40
				],
				[
					61,
					-1
				],
				[
					-6,
					51
				],
				[
					-15,
					30
				],
				[
					-4,
					46
				],
				[
					-18,
					26
				],
				[
					31,
					62
				],
				[
					32,
					-4
				],
				[
					29,
					61
				],
				[
					18,
					60
				],
				[
					27,
					60
				],
				[
					-1,
					42
				],
				[
					24,
					34
				],
				[
					-23,
					29
				],
				[
					-9,
					40
				],
				[
					-10,
					52
				],
				[
					14,
					25
				],
				[
					42,
					-14
				],
				[
					31,
					9
				],
				[
					26,
					49
				]
			],
			[
				[
					4827,
					8240
				],
				[
					5,
					-42
				],
				[
					-21,
					-53
				],
				[
					-49,
					-35
				],
				[
					-40,
					9
				],
				[
					23,
					62
				],
				[
					-15,
					60
				],
				[
					38,
					46
				],
				[
					21,
					28
				]
			],
			[
				[
					6497,
					7255
				],
				[
					25,
					12
				],
				[
					19,
					33
				],
				[
					19,
					-1
				],
				[
					12,
					11
				],
				[
					20,
					-6
				],
				[
					31,
					-30
				],
				[
					22,
					-6
				],
				[
					31,
					-53
				],
				[
					21,
					-2
				],
				[
					3,
					-49
				]
			],
			[
				[
					6690,
					6820
				],
				[
					14,
					-31
				],
				[
					11,
					-36
				],
				[
					27,
					-26
				],
				[
					1,
					-52
				],
				[
					13,
					-10
				],
				[
					2,
					-27
				],
				[
					-40,
					-30
				],
				[
					-10,
					-69
				]
			],
			[
				[
					6708,
					6539
				],
				[
					-53,
					18
				],
				[
					-30,
					13
				],
				[
					-31,
					8
				],
				[
					-12,
					73
				],
				[
					-13,
					10
				],
				[
					-22,
					-11
				],
				[
					-28,
					-28
				],
				[
					-34,
					20
				],
				[
					-28,
					45
				],
				[
					-27,
					17
				],
				[
					-18,
					56
				],
				[
					-21,
					79
				],
				[
					-15,
					-10
				],
				[
					-17,
					20
				],
				[
					-11,
					-24
				]
			],
			[
				[
					6348,
					6825
				],
				[
					-15,
					32
				],
				[
					0,
					31
				],
				[
					-9,
					0
				],
				[
					5,
					43
				],
				[
					-15,
					45
				],
				[
					-34,
					32
				],
				[
					-19,
					56
				],
				[
					6,
					46
				],
				[
					14,
					21
				],
				[
					-2,
					34
				],
				[
					-18,
					18
				],
				[
					-18,
					70
				]
			],
			[
				[
					6243,
					7253
				],
				[
					-15,
					48
				],
				[
					5,
					18
				],
				[
					-8,
					68
				],
				[
					19,
					17
				]
			],
			[
				[
					6357,
					7321
				],
				[
					9,
					-43
				],
				[
					26,
					-13
				],
				[
					20,
					-29
				],
				[
					39,
					-10
				],
				[
					44,
					15
				],
				[
					2,
					14
				]
			],
			[
				[
					6348,
					6825
				],
				[
					-16,
					3
				]
			],
			[
				[
					6332,
					6828
				],
				[
					-19,
					5
				],
				[
					-20,
					-56
				]
			],
			[
				[
					6293,
					6777
				],
				[
					-52,
					4
				],
				[
					-78,
					119
				],
				[
					-41,
					41
				],
				[
					-34,
					16
				]
			],
			[
				[
					6088,
					6957
				],
				[
					-11,
					72
				]
			],
			[
				[
					6077,
					7029
				],
				[
					61,
					62
				],
				[
					11,
					71
				],
				[
					-3,
					43
				],
				[
					16,
					15
				],
				[
					14,
					37
				]
			],
			[
				[
					6176,
					7257
				],
				[
					12,
					9
				],
				[
					32,
					-8
				],
				[
					10,
					-15
				],
				[
					13,
					10
				]
			],
			[
				[
					4597,
					8984
				],
				[
					-7,
					-39
				],
				[
					31,
					-40
				],
				[
					-36,
					-45
				],
				[
					-80,
					-41
				],
				[
					-24,
					-10
				],
				[
					-36,
					8
				],
				[
					-78,
					19
				],
				[
					28,
					26
				],
				[
					-61,
					29
				],
				[
					49,
					12
				],
				[
					-1,
					17
				],
				[
					-58,
					14
				],
				[
					19,
					38
				],
				[
					42,
					9
				],
				[
					43,
					-40
				],
				[
					42,
					32
				],
				[
					35,
					-17
				],
				[
					45,
					32
				],
				[
					47,
					-4
				]
			],
			[
				[
					5992,
					6990
				],
				[
					-5,
					-19
				]
			],
			[
				[
					5987,
					6971
				],
				[
					-10,
					8
				],
				[
					-6,
					-39
				],
				[
					7,
					-7
				],
				[
					-7,
					-8
				],
				[
					-1,
					-15
				],
				[
					13,
					8
				]
			],
			[
				[
					5983,
					6918
				],
				[
					0,
					-23
				],
				[
					-14,
					-95
				]
			],
			[
				[
					5951,
					6902
				],
				[
					8,
					19
				],
				[
					-2,
					4
				],
				[
					8,
					27
				],
				[
					5,
					45
				],
				[
					4,
					15
				],
				[
					1,
					0
				]
			],
			[
				[
					5975,
					7012
				],
				[
					9,
					0
				],
				[
					3,
					11
				],
				[
					7,
					0
				]
			],
			[
				[
					5994,
					7023
				],
				[
					1,
					-24
				],
				[
					-4,
					-9
				],
				[
					1,
					0
				]
			],
			[
				[
					5431,
					7316
				],
				[
					-10,
					-46
				],
				[
					4,
					-19
				],
				[
					-6,
					-30
				],
				[
					-21,
					22
				],
				[
					-14,
					7
				],
				[
					-39,
					30
				],
				[
					4,
					30
				],
				[
					32,
					-6
				],
				[
					28,
					7
				],
				[
					22,
					5
				]
			],
			[
				[
					5255,
					7492
				],
				[
					17,
					-42
				],
				[
					-4,
					-78
				],
				[
					-13,
					4
				],
				[
					-11,
					-20
				],
				[
					-10,
					16
				],
				[
					-2,
					71
				],
				[
					-6,
					34
				],
				[
					15,
					-3
				],
				[
					14,
					18
				]
			],
			[
				[
					5383,
					7805
				],
				[
					-3,
					-29
				],
				[
					7,
					-25
				]
			],
			[
				[
					5387,
					7751
				],
				[
					-22,
					8
				],
				[
					-23,
					-20
				],
				[
					1,
					-30
				],
				[
					-3,
					-17
				],
				[
					9,
					-30
				],
				[
					26,
					-29
				],
				[
					14,
					-49
				],
				[
					31,
					-48
				],
				[
					22,
					0
				],
				[
					7,
					-13
				],
				[
					-8,
					-11
				],
				[
					25,
					-22
				],
				[
					20,
					-18
				],
				[
					24,
					-30
				],
				[
					3,
					-11
				],
				[
					-5,
					-22
				],
				[
					-16,
					28
				],
				[
					-24,
					10
				],
				[
					-12,
					-39
				],
				[
					20,
					-21
				],
				[
					-3,
					-31
				],
				[
					-11,
					-4
				],
				[
					-15,
					-50
				],
				[
					-12,
					-5
				],
				[
					0,
					18
				],
				[
					6,
					32
				],
				[
					6,
					12
				],
				[
					-11,
					35
				],
				[
					-8,
					29
				],
				[
					-12,
					8
				],
				[
					-8,
					25
				],
				[
					-18,
					11
				],
				[
					-12,
					24
				],
				[
					-21,
					4
				],
				[
					-21,
					26
				],
				[
					-26,
					39
				],
				[
					-19,
					34
				],
				[
					-8,
					58
				],
				[
					-14,
					7
				],
				[
					-23,
					20
				],
				[
					-12,
					-8
				],
				[
					-16,
					-28
				],
				[
					-12,
					-4
				]
			],
			[
				[
					2845,
					6150
				],
				[
					19,
					-5
				],
				[
					14,
					-15
				],
				[
					5,
					-16
				],
				[
					-19,
					-1
				],
				[
					-9,
					-10
				],
				[
					-15,
					10
				],
				[
					-16,
					21
				],
				[
					3,
					14
				],
				[
					12,
					4
				],
				[
					6,
					-2
				]
			],
			[
				[
					5992,
					6990
				],
				[
					31,
					-24
				],
				[
					54,
					63
				]
			],
			[
				[
					6088,
					6957
				],
				[
					-5,
					-8
				],
				[
					-56,
					-30
				],
				[
					28,
					-59
				],
				[
					-9,
					-10
				],
				[
					-5,
					-20
				],
				[
					-21,
					-8
				],
				[
					-7,
					-21
				],
				[
					-12,
					-19
				],
				[
					-31,
					10
				]
			],
			[
				[
					5970,
					6792
				],
				[
					-1,
					8
				]
			],
			[
				[
					5983,
					6918
				],
				[
					4,
					17
				],
				[
					0,
					36
				]
			],
			[
				[
					8739,
					7075
				],
				[
					4,
					-20
				],
				[
					-16,
					-36
				],
				[
					-11,
					19
				],
				[
					-15,
					-14
				],
				[
					-7,
					-34
				],
				[
					-18,
					16
				],
				[
					0,
					28
				],
				[
					15,
					36
				],
				[
					16,
					-7
				],
				[
					12,
					25
				],
				[
					20,
					-13
				]
			],
			[
				[
					8915,
					7252
				],
				[
					-10,
					-47
				],
				[
					4,
					-30
				],
				[
					-14,
					-42
				],
				[
					-35,
					-27
				],
				[
					-49,
					-4
				],
				[
					-40,
					-67
				],
				[
					-19,
					22
				],
				[
					-1,
					44
				],
				[
					-48,
					-13
				],
				[
					-33,
					-27
				],
				[
					-32,
					-2
				],
				[
					28,
					-43
				],
				[
					-19,
					-101
				],
				[
					-18,
					-24
				],
				[
					-13,
					23
				],
				[
					7,
					53
				],
				[
					-18,
					17
				],
				[
					-11,
					41
				],
				[
					26,
					18
				],
				[
					15,
					37
				],
				[
					28,
					30
				],
				[
					20,
					41
				],
				[
					55,
					17
				],
				[
					30,
					-12
				],
				[
					29,
					105
				],
				[
					19,
					-28
				],
				[
					40,
					59
				],
				[
					16,
					23
				],
				[
					18,
					72
				],
				[
					-5,
					67
				],
				[
					11,
					37
				],
				[
					30,
					11
				],
				[
					15,
					-82
				],
				[
					-1,
					-48
				],
				[
					-25,
					-59
				],
				[
					0,
					-61
				]
			],
			[
				[
					8997,
					7667
				],
				[
					19,
					-12
				],
				[
					20,
					25
				],
				[
					6,
					-67
				],
				[
					-41,
					-16
				],
				[
					-25,
					-59
				],
				[
					-43,
					41
				],
				[
					-15,
					-65
				],
				[
					-31,
					-1
				],
				[
					-4,
					59
				],
				[
					14,
					46
				],
				[
					29,
					3
				],
				[
					8,
					82
				],
				[
					9,
					46
				],
				[
					32,
					-62
				],
				[
					22,
					-20
				]
			],
			[
				[
					6970,
					7554
				],
				[
					-15,
					-10
				],
				[
					-37,
					-42
				],
				[
					-12,
					-42
				],
				[
					-11,
					0
				],
				[
					-7,
					28
				],
				[
					-36,
					2
				],
				[
					-5,
					48
				],
				[
					-14,
					0
				],
				[
					2,
					60
				],
				[
					-33,
					43
				],
				[
					-48,
					-5
				],
				[
					-32,
					-8
				],
				[
					-27,
					53
				],
				[
					-22,
					22
				],
				[
					-43,
					43
				],
				[
					-6,
					5
				],
				[
					-71,
					-35
				],
				[
					1,
					-218
				]
			],
			[
				[
					6554,
					7498
				],
				[
					-14,
					-3
				],
				[
					-20,
					46
				],
				[
					-18,
					17
				],
				[
					-32,
					-12
				],
				[
					-12,
					-20
				]
			],
			[
				[
					6458,
					7526
				],
				[
					-2,
					14
				],
				[
					7,
					25
				],
				[
					-5,
					21
				],
				[
					-32,
					20
				],
				[
					-13,
					53
				],
				[
					-15,
					15
				],
				[
					-1,
					19
				],
				[
					27,
					-6
				],
				[
					1,
					44
				],
				[
					23,
					9
				],
				[
					25,
					-9
				],
				[
					5,
					58
				],
				[
					-5,
					36
				],
				[
					-28,
					-2
				],
				[
					-24,
					14
				],
				[
					-32,
					-26
				],
				[
					-26,
					-12
				]
			],
			[
				[
					6363,
					7799
				],
				[
					-14,
					9
				],
				[
					3,
					31
				],
				[
					-18,
					39
				],
				[
					-20,
					-2
				],
				[
					-24,
					40
				],
				[
					16,
					45
				],
				[
					-8,
					12
				],
				[
					22,
					65
				],
				[
					29,
					-34
				],
				[
					3,
					43
				],
				[
					58,
					64
				],
				[
					43,
					2
				],
				[
					61,
					-41
				],
				[
					33,
					-24
				],
				[
					30,
					25
				],
				[
					44,
					1
				],
				[
					35,
					-30
				],
				[
					8,
					17
				],
				[
					39,
					-2
				],
				[
					7,
					28
				],
				[
					-45,
					40
				],
				[
					27,
					29
				],
				[
					-5,
					16
				],
				[
					26,
					15
				],
				[
					-20,
					41
				],
				[
					13,
					20
				],
				[
					104,
					21
				],
				[
					13,
					14
				],
				[
					70,
					22
				],
				[
					25,
					24
				],
				[
					50,
					-12
				],
				[
					9,
					-61
				],
				[
					29,
					14
				],
				[
					35,
					-20
				],
				[
					-2,
					-32
				],
				[
					27,
					3
				],
				[
					69,
					56
				],
				[
					-10,
					-19
				],
				[
					35,
					-46
				],
				[
					62,
					-150
				],
				[
					15,
					31
				],
				[
					39,
					-34
				],
				[
					39,
					16
				],
				[
					16,
					-11
				],
				[
					13,
					-34
				],
				[
					20,
					-12
				],
				[
					11,
					-25
				],
				[
					36,
					8
				],
				[
					15,
					-36
				]
			],
			[
				[
					7229,
					7559
				],
				[
					-17,
					9
				],
				[
					-14,
					21
				],
				[
					-42,
					6
				],
				[
					-46,
					2
				],
				[
					-10,
					-6
				],
				[
					-39,
					24
				],
				[
					-16,
					-12
				],
				[
					-4,
					-35
				],
				[
					-46,
					21
				],
				[
					-18,
					-9
				],
				[
					-7,
					-26
				]
			],
			[
				[
					6155,
					4958
				],
				[
					-20,
					-24
				],
				[
					-7,
					-24
				],
				[
					-10,
					-4
				],
				[
					-4,
					-42
				],
				[
					-9,
					-24
				],
				[
					-5,
					-39
				],
				[
					-12,
					-20
				]
			],
			[
				[
					6088,
					4781
				],
				[
					-40,
					59
				],
				[
					-1,
					35
				],
				[
					-101,
					120
				],
				[
					-5,
					6
				]
			],
			[
				[
					5941,
					5001
				],
				[
					0,
					63
				],
				[
					8,
					24
				],
				[
					14,
					39
				],
				[
					10,
					43
				],
				[
					-13,
					68
				],
				[
					-3,
					30
				],
				[
					-13,
					41
				]
			],
			[
				[
					5944,
					5309
				],
				[
					17,
					35
				],
				[
					19,
					39
				]
			],
			[
				[
					6162,
					5289
				],
				[
					-24,
					-67
				],
				[
					0,
					-215
				],
				[
					17,
					-49
				]
			],
			[
				[
					7046,
					7387
				],
				[
					-53,
					-9
				],
				[
					-34,
					19
				],
				[
					-30,
					-4
				],
				[
					3,
					34
				],
				[
					30,
					-10
				],
				[
					10,
					18
				]
			],
			[
				[
					6972,
					7435
				],
				[
					21,
					-6
				],
				[
					36,
					43
				],
				[
					-33,
					31
				],
				[
					-20,
					-15
				],
				[
					-21,
					22
				],
				[
					24,
					39
				],
				[
					-9,
					5
				]
			],
			[
				[
					7849,
					5777
				],
				[
					-7,
					72
				],
				[
					18,
					49
				],
				[
					36,
					11
				],
				[
					26,
					-8
				]
			],
			[
				[
					7922,
					5901
				],
				[
					23,
					-23
				],
				[
					12,
					40
				],
				[
					25,
					-21
				]
			],
			[
				[
					7982,
					5897
				],
				[
					6,
					-40
				],
				[
					-3,
					-71
				],
				[
					-47,
					-45
				],
				[
					13,
					-36
				],
				[
					-30,
					-4
				],
				[
					-24,
					-24
				]
			],
			[
				[
					7897,
					5677
				],
				[
					-23,
					9
				],
				[
					-11,
					30
				],
				[
					-14,
					61
				]
			],
			[
				[
					8564,
					7339
				],
				[
					24,
					-70
				],
				[
					7,
					-38
				],
				[
					0,
					-68
				],
				[
					-10,
					-33
				],
				[
					-25,
					-11
				],
				[
					-22,
					-25
				],
				[
					-25,
					-5
				],
				[
					-3,
					32
				],
				[
					5,
					45
				],
				[
					-13,
					61
				],
				[
					21,
					10
				],
				[
					-19,
					51
				]
			],
			[
				[
					8504,
					7288
				],
				[
					2,
					5
				],
				[
					12,
					-2
				],
				[
					11,
					27
				],
				[
					20,
					2
				],
				[
					11,
					4
				],
				[
					4,
					15
				]
			],
			[
				[
					5557,
					7574
				],
				[
					5,
					13
				]
			],
			[
				[
					5562,
					7587
				],
				[
					7,
					4
				],
				[
					4,
					20
				],
				[
					5,
					3
				],
				[
					4,
					-8
				],
				[
					5,
					-4
				],
				[
					3,
					-10
				],
				[
					5,
					-2
				],
				[
					5,
					-11
				],
				[
					4,
					0
				],
				[
					-3,
					-14
				],
				[
					-3,
					-7
				],
				[
					1,
					-5
				]
			],
			[
				[
					5599,
					7553
				],
				[
					-6,
					-2
				],
				[
					-17,
					-9
				],
				[
					-1,
					-12
				],
				[
					-4,
					0
				]
			],
			[
				[
					6332,
					6828
				],
				[
					6,
					-26
				],
				[
					-3,
					-13
				],
				[
					9,
					-45
				]
			],
			[
				[
					6344,
					6744
				],
				[
					-19,
					-1
				],
				[
					-7,
					28
				],
				[
					-25,
					6
				]
			],
			[
				[
					7922,
					5901
				],
				[
					9,
					26
				],
				[
					1,
					50
				],
				[
					-22,
					52
				],
				[
					-2,
					58
				],
				[
					-21,
					48
				],
				[
					-21,
					4
				],
				[
					-6,
					-20
				],
				[
					-16,
					-2
				],
				[
					-8,
					10
				],
				[
					-30,
					-35
				],
				[
					0,
					53
				],
				[
					7,
					62
				],
				[
					-19,
					3
				],
				[
					-2,
					36
				],
				[
					-12,
					18
				]
			],
			[
				[
					7780,
					6264
				],
				[
					6,
					21
				],
				[
					24,
					39
				]
			],
			[
				[
					7837,
					6385
				],
				[
					17,
					-47
				],
				[
					12,
					-54
				],
				[
					34,
					0
				],
				[
					11,
					-52
				],
				[
					-18,
					-15
				],
				[
					-8,
					-21
				],
				[
					34,
					-36
				],
				[
					23,
					-70
				],
				[
					17,
					-52
				],
				[
					21,
					-41
				],
				[
					7,
					-41
				],
				[
					-5,
					-59
				]
			],
			[
				[
					5975,
					7012
				],
				[
					10,
					49
				],
				[
					14,
					41
				],
				[
					0,
					2
				]
			],
			[
				[
					5999,
					7104
				],
				[
					13,
					-3
				],
				[
					4,
					-23
				],
				[
					-15,
					-22
				],
				[
					-7,
					-33
				]
			],
			[
				[
					4785,
					5315
				],
				[
					-7,
					0
				],
				[
					-29,
					28
				],
				[
					-25,
					45
				],
				[
					-24,
					32
				],
				[
					-18,
					38
				]
			],
			[
				[
					4682,
					5458
				],
				[
					6,
					19
				],
				[
					2,
					17
				],
				[
					12,
					33
				],
				[
					13,
					27
				]
			],
			[
				[
					5412,
					6408
				],
				[
					-20,
					-22
				],
				[
					-15,
					33
				],
				[
					-44,
					25
				]
			],
			[
				[
					5263,
					6848
				],
				[
					13,
					14
				],
				[
					3,
					25
				],
				[
					-3,
					24
				],
				[
					19,
					23
				],
				[
					8,
					19
				],
				[
					14,
					17
				],
				[
					2,
					45
				]
			],
			[
				[
					5319,
					7015
				],
				[
					32,
					-20
				],
				[
					12,
					5
				],
				[
					23,
					-10
				],
				[
					37,
					-26
				],
				[
					13,
					-53
				],
				[
					25,
					-11
				],
				[
					39,
					-25
				],
				[
					30,
					-29
				],
				[
					13,
					15
				],
				[
					13,
					27
				],
				[
					-6,
					45
				],
				[
					9,
					29
				],
				[
					20,
					28
				],
				[
					19,
					8
				],
				[
					37,
					-12
				],
				[
					10,
					-27
				],
				[
					10,
					0
				],
				[
					9,
					-10
				],
				[
					28,
					-7
				],
				[
					6,
					-19
				]
			],
			[
				[
					5694,
					6357
				],
				[
					0,
					-118
				],
				[
					-32,
					0
				],
				[
					0,
					-25
				]
			],
			[
				[
					5662,
					6214
				],
				[
					-111,
					113
				],
				[
					-111,
					113
				],
				[
					-28,
					-32
				]
			],
			[
				[
					7271,
					5502
				],
				[
					-4,
					-62
				],
				[
					-12,
					-16
				],
				[
					-24,
					-14
				],
				[
					-13,
					47
				],
				[
					-5,
					85
				],
				[
					13,
					96
				],
				[
					19,
					-33
				],
				[
					13,
					-42
				],
				[
					13,
					-61
				]
			],
			[
				[
					5804,
					3347
				],
				[
					10,
					-18
				],
				[
					-9,
					-29
				],
				[
					-4,
					-19
				],
				[
					-16,
					-9
				],
				[
					-5,
					-19
				],
				[
					-10,
					-6
				],
				[
					-21,
					46
				],
				[
					15,
					37
				],
				[
					15,
					23
				],
				[
					13,
					12
				],
				[
					12,
					-18
				]
			],
			[
				[
					5631,
					8267
				],
				[
					-2,
					15
				],
				[
					3,
					16
				],
				[
					-13,
					10
				],
				[
					-29,
					10
				]
			],
			[
				[
					5590,
					8318
				],
				[
					-6,
					50
				]
			],
			[
				[
					5584,
					8368
				],
				[
					32,
					18
				],
				[
					47,
					-4
				],
				[
					27,
					6
				],
				[
					4,
					-12
				],
				[
					15,
					-4
				],
				[
					26,
					-29
				]
			],
			[
				[
					5652,
					8242
				],
				[
					-7,
					19
				],
				[
					-14,
					6
				]
			],
			[
				[
					5584,
					8368
				],
				[
					1,
					44
				],
				[
					14,
					37
				],
				[
					26,
					20
				],
				[
					22,
					-44
				],
				[
					22,
					1
				],
				[
					6,
					46
				]
			],
			[
				[
					5757,
					8453
				],
				[
					14,
					-14
				],
				[
					2,
					-28
				],
				[
					9,
					-35
				]
			],
			[
				[
					4759,
					6691
				],
				[
					-4,
					0
				],
				[
					0,
					-31
				],
				[
					-17,
					-2
				],
				[
					-9,
					-14
				],
				[
					-13,
					0
				],
				[
					-10,
					8
				],
				[
					-23,
					-6
				],
				[
					-9,
					-46
				],
				[
					-9,
					-5
				],
				[
					-13,
					-74
				],
				[
					-38,
					-64
				],
				[
					-9,
					-81
				],
				[
					-12,
					-27
				],
				[
					-3,
					-21
				],
				[
					-63,
					-5
				]
			],
			[
				[
					4527,
					6323
				],
				[
					1,
					27
				],
				[
					11,
					17
				],
				[
					9,
					30
				],
				[
					-2,
					20
				],
				[
					10,
					42
				],
				[
					15,
					38
				],
				[
					9,
					9
				],
				[
					8,
					35
				],
				[
					0,
					31
				],
				[
					10,
					37
				],
				[
					19,
					21
				],
				[
					18,
					60
				],
				[
					0,
					1
				],
				[
					14,
					23
				],
				[
					26,
					6
				],
				[
					22,
					41
				],
				[
					14,
					16
				],
				[
					23,
					49
				],
				[
					-7,
					73
				],
				[
					10,
					51
				],
				[
					4,
					31
				],
				[
					18,
					40
				],
				[
					28,
					27
				],
				[
					21,
					25
				],
				[
					18,
					61
				],
				[
					9,
					36
				],
				[
					20,
					0
				],
				[
					17,
					-25
				],
				[
					26,
					4
				],
				[
					29,
					-13
				],
				[
					12,
					-1
				]
			],
			[
				[
					5739,
					7906
				],
				[
					6,
					9
				],
				[
					19,
					6
				],
				[
					20,
					-19
				],
				[
					12,
					-2
				],
				[
					12,
					-16
				],
				[
					-2,
					-20
				],
				[
					11,
					-9
				],
				[
					4,
					-25
				],
				[
					9,
					-15
				],
				[
					-2,
					-9
				],
				[
					5,
					-6
				],
				[
					-7,
					-4
				],
				[
					-16,
					1
				],
				[
					-3,
					9
				],
				[
					-6,
					-5
				],
				[
					2,
					-11
				],
				[
					-7,
					-19
				],
				[
					-5,
					-20
				],
				[
					-7,
					-6
				]
			],
			[
				[
					5784,
					7745
				],
				[
					-5,
					27
				],
				[
					3,
					25
				],
				[
					-1,
					26
				],
				[
					-16,
					35
				],
				[
					-9,
					25
				],
				[
					-9,
					17
				],
				[
					-8,
					6
				]
			],
			[
				[
					6376,
					4321
				],
				[
					7,
					-25
				],
				[
					7,
					-39
				],
				[
					4,
					-71
				],
				[
					7,
					-28
				],
				[
					-2,
					-28
				],
				[
					-5,
					-18
				],
				[
					-10,
					35
				],
				[
					-5,
					-18
				],
				[
					5,
					-43
				],
				[
					-2,
					-25
				],
				[
					-8,
					-14
				],
				[
					-1,
					-50
				],
				[
					-11,
					-69
				],
				[
					-14,
					-81
				],
				[
					-17,
					-112
				],
				[
					-11,
					-82
				],
				[
					-12,
					-69
				],
				[
					-23,
					-14
				],
				[
					-24,
					-25
				],
				[
					-16,
					15
				],
				[
					-22,
					21
				],
				[
					-8,
					31
				],
				[
					-2,
					53
				],
				[
					-10,
					47
				],
				[
					-2,
					42
				],
				[
					5,
					43
				],
				[
					13,
					10
				],
				[
					0,
					20
				],
				[
					13,
					45
				],
				[
					2,
					37
				],
				[
					-6,
					28
				],
				[
					-5,
					38
				],
				[
					-2,
					54
				],
				[
					9,
					33
				],
				[
					4,
					38
				],
				[
					14,
					2
				],
				[
					15,
					12
				],
				[
					11,
					10
				],
				[
					12,
					1
				],
				[
					16,
					34
				],
				[
					23,
					36
				],
				[
					8,
					30
				],
				[
					-4,
					25
				],
				[
					12,
					-7
				],
				[
					15,
					41
				],
				[
					1,
					36
				],
				[
					9,
					26
				],
				[
					10,
					-25
				]
			],
			[
				[
					2301,
					6586
				],
				[
					-10,
					-52
				],
				[
					-5,
					-43
				],
				[
					-2,
					-79
				],
				[
					-3,
					-29
				],
				[
					5,
					-32
				],
				[
					9,
					-29
				],
				[
					5,
					-45
				],
				[
					19,
					-44
				],
				[
					6,
					-34
				],
				[
					11,
					-29
				],
				[
					29,
					-16
				],
				[
					12,
					-25
				],
				[
					24,
					17
				],
				[
					21,
					6
				],
				[
					21,
					11
				],
				[
					18,
					10
				],
				[
					17,
					24
				],
				[
					7,
					34
				],
				[
					2,
					50
				],
				[
					5,
					17
				],
				[
					19,
					16
				],
				[
					29,
					13
				],
				[
					25,
					-2
				],
				[
					17,
					5
				],
				[
					6,
					-12
				],
				[
					-1,
					-29
				],
				[
					-15,
					-35
				],
				[
					-6,
					-36
				],
				[
					5,
					-10
				],
				[
					-4,
					-26
				],
				[
					-7,
					-46
				],
				[
					-7,
					15
				],
				[
					-6,
					-1
				]
			],
			[
				[
					2438,
					5916
				],
				[
					-32,
					64
				],
				[
					-14,
					19
				],
				[
					-23,
					16
				],
				[
					-15,
					-5
				],
				[
					-22,
					-22
				],
				[
					-14,
					-6
				],
				[
					-20,
					16
				],
				[
					-21,
					11
				],
				[
					-26,
					27
				],
				[
					-21,
					8
				],
				[
					-31,
					28
				],
				[
					-23,
					28
				],
				[
					-7,
					16
				],
				[
					-16,
					3
				],
				[
					-28,
					19
				],
				[
					-12,
					27
				],
				[
					-30,
					34
				],
				[
					-14,
					37
				],
				[
					-6,
					29
				],
				[
					9,
					5
				],
				[
					-3,
					17
				],
				[
					7,
					16
				],
				[
					0,
					20
				],
				[
					-10,
					27
				],
				[
					-2,
					23
				],
				[
					-9,
					30
				],
				[
					-25,
					59
				],
				[
					-28,
					46
				],
				[
					-13,
					37
				],
				[
					-24,
					24
				],
				[
					-5,
					14
				],
				[
					4,
					37
				],
				[
					-14,
					13
				],
				[
					-17,
					29
				],
				[
					-7,
					41
				],
				[
					-14,
					5
				],
				[
					-17,
					31
				],
				[
					-13,
					29
				],
				[
					-1,
					19
				],
				[
					-15,
					44
				],
				[
					-10,
					45
				],
				[
					1,
					23
				],
				[
					-20,
					23
				],
				[
					-10,
					-2
				],
				[
					-15,
					16
				],
				[
					-5,
					-24
				],
				[
					5,
					-28
				],
				[
					2,
					-45
				],
				[
					10,
					-24
				],
				[
					21,
					-41
				],
				[
					4,
					-14
				],
				[
					4,
					-4
				],
				[
					4,
					-20
				],
				[
					5,
					1
				],
				[
					6,
					-38
				],
				[
					8,
					-15
				],
				[
					6,
					-21
				],
				[
					17,
					-30
				],
				[
					10,
					-55
				],
				[
					8,
					-26
				],
				[
					8,
					-28
				],
				[
					1,
					-31
				],
				[
					13,
					-2
				],
				[
					12,
					-27
				],
				[
					10,
					-26
				],
				[
					-1,
					-11
				],
				[
					-12,
					-21
				],
				[
					-5,
					0
				],
				[
					-7,
					36
				],
				[
					-18,
					33
				],
				[
					-20,
					29
				],
				[
					-14,
					15
				],
				[
					1,
					43
				],
				[
					-5,
					32
				],
				[
					-13,
					19
				],
				[
					-19,
					26
				],
				[
					-4,
					-8
				],
				[
					-7,
					16
				],
				[
					-17,
					14
				],
				[
					-16,
					34
				],
				[
					2,
					5
				],
				[
					11,
					-4
				],
				[
					11,
					22
				],
				[
					1,
					27
				],
				[
					-22,
					42
				],
				[
					-16,
					17
				],
				[
					-10,
					36
				],
				[
					-11,
					39
				],
				[
					-12,
					47
				],
				[
					-12,
					54
				]
			],
			[
				[
					1746,
					6980
				],
				[
					32,
					4
				],
				[
					35,
					7
				],
				[
					-2,
					-12
				],
				[
					41,
					-29
				],
				[
					64,
					-41
				],
				[
					55,
					0
				],
				[
					22,
					0
				],
				[
					0,
					24
				],
				[
					48,
					0
				],
				[
					10,
					-20
				],
				[
					15,
					-19
				],
				[
					16,
					-26
				],
				[
					9,
					-31
				],
				[
					7,
					-32
				],
				[
					15,
					-18
				],
				[
					23,
					-18
				],
				[
					17,
					47
				],
				[
					23,
					1
				],
				[
					19,
					-24
				],
				[
					14,
					-40
				],
				[
					10,
					-35
				],
				[
					16,
					-34
				],
				[
					6,
					-41
				],
				[
					8,
					-28
				],
				[
					22,
					-18
				],
				[
					20,
					-13
				],
				[
					10,
					2
				]
			],
			[
				[
					5599,
					7553
				],
				[
					9,
					4
				],
				[
					13,
					1
				]
			],
			[
				[
					4661,
					5921
				],
				[
					10,
					11
				],
				[
					4,
					35
				],
				[
					9,
					1
				],
				[
					20,
					-16
				],
				[
					15,
					11
				],
				[
					11,
					-4
				],
				[
					4,
					13
				],
				[
					112,
					1
				],
				[
					6,
					42
				],
				[
					-5,
					7
				],
				[
					-13,
					255
				],
				[
					-14,
					255
				],
				[
					43,
					1
				]
			],
			[
				[
					5118,
					6189
				],
				[
					0,
					-136
				],
				[
					-15,
					-39
				],
				[
					-2,
					-37
				],
				[
					-25,
					-9
				],
				[
					-38,
					-5
				],
				[
					-10,
					-21
				],
				[
					-18,
					-3
				]
			],
			[
				[
					4680,
					5793
				],
				[
					1,
					18
				],
				[
					-2,
					23
				],
				[
					-11,
					16
				],
				[
					-5,
					34
				],
				[
					-2,
					37
				]
			],
			[
				[
					7737,
					5644
				],
				[
					-3,
					44
				],
				[
					9,
					45
				],
				[
					-10,
					35
				],
				[
					3,
					65
				],
				[
					-12,
					30
				],
				[
					-9,
					71
				],
				[
					-5,
					75
				],
				[
					-12,
					49
				],
				[
					-18,
					-30
				],
				[
					-32,
					-42
				],
				[
					-15,
					5
				],
				[
					-17,
					14
				],
				[
					9,
					73
				],
				[
					-6,
					56
				],
				[
					-21,
					68
				],
				[
					3,
					21
				],
				[
					-16,
					7
				],
				[
					-20,
					49
				]
			],
			[
				[
					7780,
					6264
				],
				[
					-16,
					-14
				],
				[
					-16,
					-26
				],
				[
					-20,
					-2
				],
				[
					-12,
					-64
				],
				[
					-12,
					-11
				],
				[
					14,
					-52
				],
				[
					17,
					-43
				],
				[
					12,
					-39
				],
				[
					-11,
					-51
				],
				[
					-9,
					-11
				],
				[
					6,
					-30
				],
				[
					19,
					-47
				],
				[
					3,
					-33
				],
				[
					0,
					-27
				],
				[
					11,
					-54
				],
				[
					-16,
					-55
				],
				[
					-13,
					-61
				]
			],
			[
				[
					5538,
					7532
				],
				[
					-6,
					4
				],
				[
					-8,
					19
				],
				[
					-12,
					12
				]
			],
			[
				[
					5533,
					7629
				],
				[
					8,
					-10
				],
				[
					4,
					-9
				],
				[
					9,
					-6
				],
				[
					10,
					-12
				],
				[
					-2,
					-5
				]
			],
			[
				[
					7437,
					7970
				],
				[
					29,
					10
				],
				[
					53,
					51
				],
				[
					42,
					28
				],
				[
					24,
					-18
				],
				[
					29,
					-1
				],
				[
					19,
					-28
				],
				[
					28,
					-2
				],
				[
					40,
					-15
				],
				[
					27,
					41
				],
				[
					-11,
					35
				],
				[
					28,
					61
				],
				[
					31,
					-24
				],
				[
					26,
					-7
				],
				[
					32,
					-15
				],
				[
					6,
					-44
				],
				[
					39,
					-25
				],
				[
					26,
					11
				],
				[
					36,
					7
				],
				[
					27,
					-7
				],
				[
					28,
					-29
				],
				[
					16,
					-30
				],
				[
					26,
					1
				],
				[
					35,
					-10
				],
				[
					26,
					15
				],
				[
					36,
					9
				],
				[
					41,
					42
				],
				[
					17,
					-6
				],
				[
					14,
					-20
				],
				[
					33,
					5
				]
			],
			[
				[
					5959,
					4377
				],
				[
					21,
					5
				],
				[
					34,
					-17
				],
				[
					7,
					8
				],
				[
					19,
					1
				],
				[
					10,
					18
				],
				[
					17,
					-1
				],
				[
					30,
					23
				],
				[
					22,
					34
				]
			],
			[
				[
					6119,
					4448
				],
				[
					5,
					-26
				],
				[
					-1,
					-59
				],
				[
					3,
					-52
				],
				[
					1,
					-92
				],
				[
					5,
					-29
				],
				[
					-8,
					-43
				],
				[
					-11,
					-41
				],
				[
					-18,
					-36
				],
				[
					-25,
					-23
				],
				[
					-31,
					-28
				],
				[
					-32,
					-64
				],
				[
					-10,
					-11
				],
				[
					-20,
					-42
				],
				[
					-11,
					-13
				],
				[
					-3,
					-42
				],
				[
					14,
					-45
				],
				[
					5,
					-35
				],
				[
					0,
					-17
				],
				[
					5,
					3
				],
				[
					-1,
					-58
				],
				[
					-4,
					-28
				],
				[
					6,
					-10
				],
				[
					-4,
					-25
				],
				[
					-11,
					-21
				],
				[
					-23,
					-20
				],
				[
					-34,
					-32
				],
				[
					-12,
					-21
				],
				[
					3,
					-25
				],
				[
					7,
					-4
				],
				[
					-3,
					-31
				]
			],
			[
				[
					5911,
					3478
				],
				[
					-21,
					0
				]
			],
			[
				[
					5890,
					3478
				],
				[
					-2,
					26
				],
				[
					-4,
					27
				]
			],
			[
				[
					5884,
					3531
				],
				[
					-3,
					21
				],
				[
					5,
					66
				],
				[
					-7,
					42
				],
				[
					-13,
					83
				]
			],
			[
				[
					5866,
					3743
				],
				[
					29,
					67
				],
				[
					7,
					43
				],
				[
					5,
					5
				],
				[
					3,
					35
				],
				[
					-5,
					17
				],
				[
					1,
					44
				],
				[
					6,
					41
				],
				[
					0,
					75
				],
				[
					-15,
					19
				],
				[
					-13,
					4
				],
				[
					-6,
					15
				],
				[
					-13,
					12
				],
				[
					-23,
					-1
				],
				[
					-2,
					22
				]
			],
			[
				[
					5840,
					4141
				],
				[
					-2,
					42
				],
				[
					84,
					49
				]
			],
			[
				[
					5922,
					4232
				],
				[
					16,
					-28
				],
				[
					8,
					5
				],
				[
					11,
					-15
				],
				[
					1,
					-23
				],
				[
					-6,
					-28
				],
				[
					2,
					-42
				],
				[
					19,
					-36
				],
				[
					8,
					41
				],
				[
					12,
					12
				],
				[
					-2,
					76
				],
				[
					-12,
					43
				],
				[
					-10,
					19
				],
				[
					-10,
					-1
				],
				[
					-7,
					77
				],
				[
					7,
					45
				]
			],
			[
				[
					4661,
					5921
				],
				[
					-18,
					41
				],
				[
					-17,
					43
				],
				[
					-18,
					16
				],
				[
					-13,
					17
				],
				[
					-16,
					-1
				],
				[
					-13,
					-12
				],
				[
					-14,
					5
				],
				[
					-10,
					-19
				]
			],
			[
				[
					4542,
					6011
				],
				[
					-2,
					32
				],
				[
					8,
					29
				],
				[
					3,
					55
				],
				[
					-3,
					59
				],
				[
					-3,
					29
				],
				[
					2,
					30
				],
				[
					-7,
					28
				],
				[
					-14,
					25
				]
			],
			[
				[
					4526,
					6298
				],
				[
					6,
					20
				],
				[
					108,
					-1
				],
				[
					-5,
					86
				],
				[
					7,
					30
				],
				[
					26,
					5
				],
				[
					-1,
					152
				],
				[
					91,
					-4
				],
				[
					0,
					90
				]
			],
			[
				[
					5922,
					4232
				],
				[
					-15,
					15
				],
				[
					9,
					55
				],
				[
					9,
					21
				],
				[
					-6,
					49
				],
				[
					6,
					48
				],
				[
					5,
					16
				],
				[
					-7,
					50
				],
				[
					-14,
					26
				]
			],
			[
				[
					5909,
					4512
				],
				[
					28,
					-11
				],
				[
					5,
					-16
				],
				[
					10,
					-28
				],
				[
					7,
					-80
				]
			],
			[
				[
					7836,
					5425
				],
				[
					7,
					-5
				],
				[
					16,
					-36
				],
				[
					12,
					-40
				],
				[
					2,
					-39
				],
				[
					-3,
					-27
				],
				[
					2,
					-21
				],
				[
					2,
					-35
				],
				[
					10,
					-16
				],
				[
					11,
					-52
				],
				[
					-1,
					-20
				],
				[
					-19,
					-4
				],
				[
					-27,
					44
				],
				[
					-32,
					47
				],
				[
					-4,
					30
				],
				[
					-16,
					39
				],
				[
					-4,
					49
				],
				[
					-10,
					32
				],
				[
					4,
					43
				],
				[
					-7,
					25
				]
			],
			[
				[
					7779,
					5439
				],
				[
					5,
					11
				],
				[
					23,
					-26
				],
				[
					2,
					-30
				],
				[
					18,
					7
				],
				[
					9,
					24
				]
			],
			[
				[
					8045,
					5176
				],
				[
					21,
					-20
				],
				[
					21,
					11
				],
				[
					6,
					50
				],
				[
					12,
					11
				],
				[
					33,
					13
				],
				[
					20,
					47
				],
				[
					14,
					37
				]
			],
			[
				[
					8206,
					5379
				],
				[
					22,
					41
				],
				[
					14,
					47
				],
				[
					11,
					0
				],
				[
					14,
					-30
				],
				[
					1,
					-26
				],
				[
					19,
					-16
				],
				[
					23,
					-18
				],
				[
					-2,
					-23
				],
				[
					-19,
					-3
				],
				[
					5,
					-29
				],
				[
					-20,
					-20
				]
			],
			[
				[
					5453,
					3369
				],
				[
					-20,
					45
				],
				[
					-11,
					43
				],
				[
					-6,
					58
				],
				[
					-7,
					42
				],
				[
					-9,
					91
				],
				[
					-1,
					71
				],
				[
					-3,
					32
				],
				[
					-11,
					25
				],
				[
					-15,
					48
				],
				[
					-14,
					71
				],
				[
					-6,
					37
				],
				[
					-23,
					58
				],
				[
					-2,
					45
				]
			],
			[
				[
					5644,
					4022
				],
				[
					23,
					14
				],
				[
					18,
					-4
				],
				[
					11,
					-13
				],
				[
					0,
					-5
				]
			],
			[
				[
					5552,
					3594
				],
				[
					0,
					-218
				],
				[
					-25,
					-30
				],
				[
					-15,
					-4
				],
				[
					-17,
					11
				],
				[
					-13,
					4
				],
				[
					-4,
					25
				],
				[
					-11,
					17
				],
				[
					-14,
					-30
				]
			],
			[
				[
					9604,
					3812
				],
				[
					23,
					-36
				],
				[
					14,
					-28
				],
				[
					-10,
					-14
				],
				[
					-16,
					16
				],
				[
					-19,
					27
				],
				[
					-18,
					31
				],
				[
					-19,
					42
				],
				[
					-4,
					20
				],
				[
					12,
					-1
				],
				[
					16,
					-20
				],
				[
					12,
					-20
				],
				[
					9,
					-17
				]
			],
			[
				[
					5412,
					6408
				],
				[
					7,
					-92
				],
				[
					10,
					-15
				],
				[
					1,
					-19
				],
				[
					11,
					-20
				],
				[
					-6,
					-25
				],
				[
					-11,
					-120
				],
				[
					-1,
					-77
				],
				[
					-35,
					-56
				],
				[
					-12,
					-78
				],
				[
					11,
					-22
				],
				[
					0,
					-38
				],
				[
					18,
					-1
				],
				[
					-3,
					-28
				]
			],
			[
				[
					5393,
					5795
				],
				[
					-5,
					-1
				],
				[
					-19,
					64
				],
				[
					-6,
					3
				],
				[
					-22,
					-33
				],
				[
					-21,
					17
				],
				[
					-15,
					3
				],
				[
					-8,
					-8
				],
				[
					-17,
					2
				],
				[
					-16,
					-25
				],
				[
					-14,
					-2
				],
				[
					-34,
					31
				],
				[
					-13,
					-15
				],
				[
					-14,
					1
				],
				[
					-10,
					23
				],
				[
					-28,
					22
				],
				[
					-30,
					-7
				],
				[
					-7,
					-13
				],
				[
					-4,
					-34
				],
				[
					-8,
					-24
				],
				[
					-2,
					-53
				]
			],
			[
				[
					5236,
					5339
				],
				[
					-29,
					-21
				],
				[
					-11,
					3
				],
				[
					-10,
					-13
				],
				[
					-23,
					1
				],
				[
					-15,
					37
				],
				[
					-9,
					43
				],
				[
					-19,
					39
				],
				[
					-21,
					-1
				],
				[
					-25,
					0
				]
			],
			[
				[
					2619,
					5713
				],
				[
					-10,
					18
				],
				[
					-13,
					24
				],
				[
					-6,
					20
				],
				[
					-12,
					19
				],
				[
					-13,
					26
				],
				[
					3,
					9
				],
				[
					4,
					-9
				],
				[
					2,
					5
				]
			],
			[
				[
					2690,
					5943
				],
				[
					-2,
					-5
				],
				[
					-2,
					-13
				],
				[
					3,
					-22
				],
				[
					-6,
					-20
				],
				[
					-3,
					-24
				],
				[
					-1,
					-26
				],
				[
					1,
					-15
				],
				[
					1,
					-27
				],
				[
					-4,
					-6
				],
				[
					-3,
					-25
				],
				[
					2,
					-15
				],
				[
					-6,
					-16
				],
				[
					2,
					-16
				],
				[
					4,
					-9
				]
			],
			[
				[
					5092,
					8091
				],
				[
					14,
					16
				],
				[
					24,
					87
				],
				[
					38,
					25
				],
				[
					23,
					-2
				]
			],
			[
				[
					5863,
					9167
				],
				[
					-47,
					-24
				],
				[
					-22,
					-5
				]
			],
			[
				[
					5573,
					9140
				],
				[
					-17,
					-2
				],
				[
					-4,
					-39
				],
				[
					-53,
					9
				],
				[
					-7,
					-33
				],
				[
					-27,
					1
				],
				[
					-18,
					-42
				],
				[
					-28,
					-66
				],
				[
					-43,
					-83
				],
				[
					10,
					-20
				],
				[
					-10,
					-24
				],
				[
					-27,
					1
				],
				[
					-18,
					-55
				],
				[
					2,
					-79
				],
				[
					17,
					-29
				],
				[
					-9,
					-70
				],
				[
					-23,
					-40
				],
				[
					-12,
					-34
				]
			],
			[
				[
					5306,
					8535
				],
				[
					-19,
					36
				],
				[
					-55,
					-69
				],
				[
					-37,
					-13
				],
				[
					-38,
					30
				],
				[
					-10,
					63
				],
				[
					-9,
					137
				],
				[
					26,
					38
				],
				[
					73,
					49
				],
				[
					55,
					61
				],
				[
					51,
					82
				],
				[
					66,
					115
				],
				[
					47,
					44
				],
				[
					76,
					74
				],
				[
					61,
					26
				],
				[
					46,
					-3
				],
				[
					42,
					49
				],
				[
					51,
					-3
				],
				[
					50,
					12
				],
				[
					87,
					-43
				],
				[
					-36,
					-16
				],
				[
					30,
					-37
				]
			],
			[
				[
					5686,
					9657
				],
				[
					-62,
					-24
				],
				[
					-49,
					13
				],
				[
					19,
					16
				],
				[
					-16,
					19
				],
				[
					57,
					11
				],
				[
					11,
					-22
				],
				[
					40,
					-13
				]
			],
			[
				[
					5506,
					9766
				],
				[
					92,
					-44
				],
				[
					-70,
					-23
				],
				[
					-15,
					-44
				],
				[
					-25,
					-11
				],
				[
					-13,
					-49
				],
				[
					-34,
					-2
				],
				[
					-59,
					36
				],
				[
					25,
					21
				],
				[
					-42,
					17
				],
				[
					-54,
					50
				],
				[
					-21,
					46
				],
				[
					75,
					21
				],
				[
					16,
					-20
				],
				[
					39,
					0
				],
				[
					11,
					21
				],
				[
					40,
					2
				],
				[
					35,
					-21
				]
			],
			[
				[
					5706,
					9808
				],
				[
					55,
					-21
				],
				[
					-41,
					-32
				],
				[
					-81,
					-7
				],
				[
					-82,
					10
				],
				[
					-5,
					16
				],
				[
					-40,
					1
				],
				[
					-30,
					27
				],
				[
					86,
					17
				],
				[
					40,
					-14
				],
				[
					28,
					17
				],
				[
					70,
					-14
				]
			],
			[
				[
					9805,
					2640
				],
				[
					6,
					-24
				],
				[
					20,
					24
				],
				[
					8,
					-25
				],
				[
					0,
					-25
				],
				[
					-10,
					-27
				],
				[
					-18,
					-44
				],
				[
					-14,
					-24
				],
				[
					10,
					-28
				],
				[
					-22,
					-1
				],
				[
					-23,
					-22
				],
				[
					-8,
					-39
				],
				[
					-16,
					-60
				],
				[
					-21,
					-26
				],
				[
					-14,
					-17
				],
				[
					-26,
					1
				],
				[
					-18,
					20
				],
				[
					-30,
					4
				],
				[
					-5,
					22
				],
				[
					15,
					43
				],
				[
					35,
					59
				],
				[
					18,
					11
				],
				[
					20,
					22
				],
				[
					24,
					31
				],
				[
					16,
					31
				],
				[
					13,
					44
				],
				[
					10,
					15
				],
				[
					5,
					33
				],
				[
					19,
					27
				],
				[
					6,
					-25
				]
			],
			[
				[
					9849,
					2922
				],
				[
					20,
					-63
				],
				[
					1,
					41
				],
				[
					13,
					-16
				],
				[
					4,
					-45
				],
				[
					22,
					-19
				],
				[
					19,
					-5
				],
				[
					16,
					22
				],
				[
					14,
					-6
				],
				[
					-7,
					-53
				],
				[
					-8,
					-34
				],
				[
					-22,
					1
				],
				[
					-7,
					-18
				],
				[
					3,
					-25
				],
				[
					-4,
					-11
				],
				[
					-11,
					-32
				],
				[
					-14,
					-41
				],
				[
					-21,
					-23
				],
				[
					-5,
					15
				],
				[
					-12,
					9
				],
				[
					16,
					48
				],
				[
					-9,
					33
				],
				[
					-30,
					23
				],
				[
					1,
					22
				],
				[
					20,
					20
				],
				[
					5,
					46
				],
				[
					-1,
					38
				],
				[
					-12,
					40
				],
				[
					1,
					10
				],
				[
					-13,
					25
				],
				[
					-22,
					52
				],
				[
					-12,
					42
				],
				[
					11,
					4
				],
				[
					15,
					-33
				],
				[
					21,
					-15
				],
				[
					8,
					-52
				]
			],
			[
				[
					6475,
					6041
				],
				[
					-9,
					41
				],
				[
					-22,
					98
				]
			],
			[
				[
					6444,
					6180
				],
				[
					83,
					59
				],
				[
					19,
					118
				],
				[
					-13,
					42
				]
			],
			[
				[
					6566,
					6530
				],
				[
					12,
					-40
				],
				[
					16,
					-22
				],
				[
					20,
					-8
				],
				[
					17,
					-10
				],
				[
					12,
					-34
				],
				[
					8,
					-20
				],
				[
					10,
					-7
				],
				[
					0,
					-13
				],
				[
					-10,
					-36
				],
				[
					-5,
					-16
				],
				[
					-12,
					-19
				],
				[
					-10,
					-41
				],
				[
					-13,
					3
				],
				[
					-5,
					-14
				],
				[
					-5,
					-30
				],
				[
					4,
					-39
				],
				[
					-3,
					-7
				],
				[
					-13,
					0
				],
				[
					-17,
					-22
				],
				[
					-3,
					-29
				],
				[
					-6,
					-12
				],
				[
					-18,
					0
				],
				[
					-10,
					-15
				],
				[
					0,
					-24
				],
				[
					-14,
					-16
				],
				[
					-15,
					5
				],
				[
					-19,
					-19
				],
				[
					-12,
					-4
				]
			],
			[
				[
					6557,
					6597
				],
				[
					8,
					20
				],
				[
					3,
					-5
				],
				[
					-2,
					-25
				],
				[
					-4,
					-10
				]
			],
			[
				[
					6893,
					6457
				],
				[
					-20,
					15
				],
				[
					-9,
					43
				],
				[
					-21,
					45
				],
				[
					-51,
					-12
				],
				[
					-45,
					-1
				],
				[
					-39,
					-8
				]
			],
			[
				[
					2836,
					5484
				],
				[
					-9,
					17
				],
				[
					-6,
					32
				],
				[
					7,
					16
				],
				[
					-7,
					4
				],
				[
					-5,
					20
				],
				[
					-14,
					16
				],
				[
					-12,
					-4
				],
				[
					-6,
					-20
				],
				[
					-11,
					-15
				],
				[
					-6,
					-2
				],
				[
					-3,
					-13
				],
				[
					13,
					-32
				],
				[
					-7,
					-7
				],
				[
					-4,
					-9
				],
				[
					-13,
					-3
				],
				[
					-5,
					35
				],
				[
					-4,
					-10
				],
				[
					-9,
					4
				],
				[
					-5,
					24
				],
				[
					-12,
					3
				],
				[
					-7,
					7
				],
				[
					-12,
					0
				],
				[
					-1,
					-13
				],
				[
					-3,
					9
				]
			],
			[
				[
					2707,
					5623
				],
				[
					10,
					-22
				],
				[
					-1,
					-12
				],
				[
					11,
					-3
				],
				[
					3,
					5
				],
				[
					8,
					-14
				],
				[
					13,
					4
				],
				[
					12,
					15
				],
				[
					17,
					12
				],
				[
					9,
					17
				],
				[
					16,
					-3
				],
				[
					-1,
					-6
				],
				[
					15,
					-2
				],
				[
					12,
					-10
				],
				[
					10,
					-18
				],
				[
					10,
					-16
				]
			],
			[
				[
					3045,
					3974
				],
				[
					-28,
					33
				],
				[
					-2,
					25
				],
				[
					-55,
					59
				],
				[
					-50,
					65
				],
				[
					-22,
					36
				],
				[
					-11,
					49
				],
				[
					4,
					17
				],
				[
					-23,
					77
				],
				[
					-28,
					109
				],
				[
					-26,
					118
				],
				[
					-11,
					27
				],
				[
					-9,
					43
				],
				[
					-21,
					39
				],
				[
					-20,
					24
				],
				[
					9,
					26
				],
				[
					-14,
					57
				],
				[
					9,
					41
				],
				[
					22,
					37
				]
			],
			[
				[
					8510,
					5555
				],
				[
					2,
					-40
				],
				[
					2,
					-33
				],
				[
					-9,
					-54
				],
				[
					-11,
					60
				],
				[
					-13,
					-30
				],
				[
					9,
					-43
				],
				[
					-8,
					-28
				],
				[
					-32,
					35
				],
				[
					-8,
					42
				],
				[
					8,
					28
				],
				[
					-17,
					28
				],
				[
					-9,
					-24
				],
				[
					-13,
					2
				],
				[
					-21,
					-33
				],
				[
					-4,
					17
				],
				[
					11,
					50
				],
				[
					17,
					17
				],
				[
					15,
					22
				],
				[
					10,
					-27
				],
				[
					21,
					17
				],
				[
					5,
					26
				],
				[
					19,
					1
				],
				[
					-1,
					46
				],
				[
					22,
					-28
				],
				[
					3,
					-30
				],
				[
					2,
					-21
				]
			],
			[
				[
					8443,
					5665
				],
				[
					-10,
					-20
				],
				[
					-9,
					-37
				],
				[
					-8,
					-17
				],
				[
					-17,
					40
				],
				[
					5,
					16
				],
				[
					7,
					17
				],
				[
					3,
					36
				],
				[
					16,
					4
				],
				[
					-5,
					-40
				],
				[
					21,
					57
				],
				[
					-3,
					-56
				]
			],
			[
				[
					8291,
					5608
				],
				[
					-37,
					-56
				],
				[
					14,
					41
				],
				[
					20,
					37
				],
				[
					16,
					41
				],
				[
					15,
					58
				],
				[
					5,
					-48
				],
				[
					-18,
					-33
				],
				[
					-15,
					-40
				]
			],
			[
				[
					8385,
					5760
				],
				[
					16,
					-18
				],
				[
					18,
					0
				],
				[
					0,
					-25
				],
				[
					-13,
					-25
				],
				[
					-18,
					-18
				],
				[
					-1,
					28
				],
				[
					2,
					30
				],
				[
					-4,
					28
				]
			],
			[
				[
					8485,
					5776
				],
				[
					8,
					-66
				],
				[
					-21,
					16
				],
				[
					0,
					-20
				],
				[
					7,
					-37
				],
				[
					-13,
					-13
				],
				[
					-1,
					42
				],
				[
					-9,
					3
				],
				[
					-4,
					36
				],
				[
					16,
					-5
				],
				[
					0,
					22
				],
				[
					-17,
					45
				],
				[
					27,
					-1
				],
				[
					7,
					-22
				]
			],
			[
				[
					8375,
					5830
				],
				[
					-7,
					-51
				],
				[
					-12,
					29
				],
				[
					-15,
					45
				],
				[
					24,
					-2
				],
				[
					10,
					-21
				]
			],
			[
				[
					8369,
					6151
				],
				[
					17,
					-17
				],
				[
					9,
					15
				],
				[
					2,
					-15
				],
				[
					-4,
					-24
				],
				[
					9,
					-43
				],
				[
					-7,
					-49
				],
				[
					-16,
					-19
				],
				[
					-5,
					-48
				],
				[
					7,
					-47
				],
				[
					14,
					-7
				],
				[
					13,
					7
				],
				[
					34,
					-32
				],
				[
					-2,
					-32
				],
				[
					9,
					-15
				],
				[
					-3,
					-27
				],
				[
					-22,
					29
				],
				[
					-10,
					31
				],
				[
					-7,
					-22
				],
				[
					-18,
					36
				],
				[
					-25,
					-9
				],
				[
					-14,
					13
				],
				[
					1,
					25
				],
				[
					9,
					15
				],
				[
					-8,
					13
				],
				[
					-4,
					-21
				],
				[
					-14,
					34
				],
				[
					-4,
					26
				],
				[
					-1,
					56
				],
				[
					11,
					-19
				],
				[
					3,
					92
				],
				[
					9,
					54
				],
				[
					17,
					0
				]
			],
			[
				[
					9329,
					4655
				],
				[
					-8,
					-6
				],
				[
					-12,
					22
				],
				[
					-12,
					38
				],
				[
					-6,
					45
				],
				[
					4,
					6
				],
				[
					3,
					-18
				],
				[
					8,
					-13
				],
				[
					14,
					-38
				],
				[
					13,
					-20
				],
				[
					-4,
					-16
				]
			],
			[
				[
					9221,
					4734
				],
				[
					-15,
					-5
				],
				[
					-4,
					-17
				],
				[
					-15,
					-14
				],
				[
					-15,
					-14
				],
				[
					-14,
					0
				],
				[
					-23,
					18
				],
				[
					-16,
					16
				],
				[
					2,
					18
				],
				[
					25,
					-8
				],
				[
					15,
					4
				],
				[
					5,
					29
				],
				[
					4,
					1
				],
				[
					2,
					-31
				],
				[
					16,
					4
				],
				[
					8,
					20
				],
				[
					16,
					21
				],
				[
					-4,
					35
				],
				[
					17,
					1
				],
				[
					6,
					-9
				],
				[
					-1,
					-33
				],
				[
					-9,
					-36
				]
			],
			[
				[
					8916,
					4904
				],
				[
					48,
					-41
				],
				[
					51,
					-34
				],
				[
					19,
					-30
				],
				[
					16,
					-30
				],
				[
					4,
					-34
				],
				[
					46,
					-37
				],
				[
					7,
					-31
				],
				[
					-25,
					-7
				],
				[
					6,
					-39
				],
				[
					25,
					-39
				],
				[
					18,
					-62
				],
				[
					15,
					2
				],
				[
					-1,
					-27
				],
				[
					22,
					-10
				],
				[
					-9,
					-11
				],
				[
					30,
					-25
				],
				[
					-3,
					-17
				],
				[
					-18,
					-4
				],
				[
					-7,
					16
				],
				[
					-24,
					6
				],
				[
					-28,
					9
				],
				[
					-22,
					38
				],
				[
					-16,
					32
				],
				[
					-14,
					52
				],
				[
					-36,
					26
				],
				[
					-24,
					-17
				],
				[
					-17,
					-20
				],
				[
					4,
					-43
				],
				[
					-22,
					-20
				],
				[
					-16,
					9
				],
				[
					-28,
					3
				]
			],
			[
				[
					9253,
					4792
				],
				[
					-9,
					-16
				],
				[
					-5,
					35
				],
				[
					-6,
					23
				],
				[
					-13,
					19
				],
				[
					-16,
					25
				],
				[
					-20,
					18
				],
				[
					8,
					14
				],
				[
					15,
					-17
				],
				[
					9,
					-13
				],
				[
					12,
					-14
				],
				[
					11,
					-25
				],
				[
					11,
					-19
				],
				[
					3,
					-30
				]
			],
			[
				[
					5392,
					8233
				],
				[
					19,
					18
				],
				[
					43,
					27
				],
				[
					35,
					20
				],
				[
					28,
					-10
				],
				[
					2,
					-14
				],
				[
					27,
					-1
				]
			],
			[
				[
					5546,
					8273
				],
				[
					34,
					-7
				],
				[
					51,
					1
				]
			],
			[
				[
					5653,
					8105
				],
				[
					14,
					-52
				],
				[
					-3,
					-17
				],
				[
					-14,
					-6
				],
				[
					-25,
					-50
				],
				[
					7,
					-26
				],
				[
					-6,
					3
				]
			],
			[
				[
					5626,
					7957
				],
				[
					-26,
					23
				],
				[
					-20,
					-8
				],
				[
					-13,
					6
				],
				[
					-17,
					-13
				],
				[
					-14,
					21
				],
				[
					-11,
					-8
				],
				[
					-2,
					4
				]
			],
			[
				[
					3159,
					6151
				],
				[
					14,
					-5
				],
				[
					5,
					-12
				],
				[
					-7,
					-15
				],
				[
					-21,
					1
				],
				[
					-17,
					-2
				],
				[
					-1,
					25
				],
				[
					4,
					9
				],
				[
					23,
					-1
				]
			],
			[
				[
					8628,
					7562
				],
				[
					4,
					-10
				]
			],
			[
				[
					8632,
					7552
				],
				[
					-11,
					3
				],
				[
					-12,
					-20
				],
				[
					-8,
					-20
				],
				[
					1,
					-42
				],
				[
					-14,
					-13
				],
				[
					-5,
					-11
				],
				[
					-11,
					-17
				],
				[
					-18,
					-10
				],
				[
					-12,
					-16
				],
				[
					-1,
					-25
				],
				[
					-3,
					-7
				],
				[
					11,
					-9
				],
				[
					15,
					-26
				]
			],
			[
				[
					8504,
					7288
				],
				[
					-13,
					11
				],
				[
					-4,
					-11
				],
				[
					-8,
					-5
				],
				[
					-1,
					11
				],
				[
					-7,
					5
				],
				[
					-8,
					10
				],
				[
					8,
					26
				],
				[
					7,
					7
				],
				[
					-3,
					11
				],
				[
					7,
					31
				],
				[
					-2,
					10
				],
				[
					-16,
					7
				],
				[
					-13,
					15
				]
			],
			[
				[
					4792,
					7249
				],
				[
					-11,
					-15
				],
				[
					-14,
					8
				],
				[
					-15,
					-6
				],
				[
					5,
					46
				],
				[
					-3,
					36
				],
				[
					-12,
					6
				],
				[
					-7,
					22
				],
				[
					2,
					39
				],
				[
					11,
					21
				],
				[
					2,
					24
				],
				[
					6,
					36
				],
				[
					-1,
					25
				],
				[
					-5,
					21
				],
				[
					-1,
					20
				]
			],
			[
				[
					6411,
					6520
				],
				[
					-2,
					43
				],
				[
					7,
					31
				],
				[
					8,
					6
				],
				[
					8,
					-18
				],
				[
					1,
					-35
				],
				[
					-6,
					-35
				]
			],
			[
				[
					6427,
					6512
				],
				[
					-8,
					-4
				],
				[
					-8,
					12
				]
			],
			[
				[
					5630,
					7886
				],
				[
					12,
					13
				],
				[
					17,
					-7
				],
				[
					18,
					0
				],
				[
					13,
					-14
				],
				[
					10,
					9
				],
				[
					20,
					5
				],
				[
					7,
					14
				],
				[
					12,
					0
				]
			],
			[
				[
					5784,
					7745
				],
				[
					12,
					-11
				],
				[
					13,
					9
				],
				[
					13,
					-10
				]
			],
			[
				[
					5822,
					7733
				],
				[
					0,
					-15
				],
				[
					-13,
					-13
				],
				[
					-9,
					6
				],
				[
					-7,
					-71
				]
			],
			[
				[
					5629,
					7671
				],
				[
					-5,
					10
				],
				[
					6,
					10
				],
				[
					-7,
					7
				],
				[
					-8,
					-13
				],
				[
					-17,
					17
				],
				[
					-2,
					25
				],
				[
					-17,
					14
				],
				[
					-3,
					18
				],
				[
					-15,
					24
				]
			],
			[
				[
					8989,
					8056
				],
				[
					28,
					-105
				],
				[
					-41,
					19
				],
				[
					-17,
					-85
				],
				[
					27,
					-61
				],
				[
					-1,
					-41
				],
				[
					-21,
					36
				],
				[
					-18,
					-46
				],
				[
					-5,
					50
				],
				[
					3,
					57
				],
				[
					-3,
					64
				],
				[
					6,
					45
				],
				[
					2,
					79
				],
				[
					-17,
					58
				],
				[
					3,
					80
				],
				[
					25,
					28
				],
				[
					-11,
					27
				],
				[
					13,
					8
				],
				[
					7,
					-39
				],
				[
					10,
					-57
				],
				[
					-1,
					-58
				],
				[
					11,
					-59
				]
			],
			[
				[
					5546,
					8273
				],
				[
					6,
					26
				],
				[
					38,
					19
				]
			],
			[
				[
					5000,
					544547
				],
				[
					-4932,
					-535460
				],
				[
					73,
					-59
				],
				[
					-3,
					-37
				],
				[
					19,
					-15
				],
				[
					-6,
					43
				],
				[
					75,
					-8
				],
				[
					55,
					-56
				],
				[
					-28,
					-26
				],
				[
					-46,
					-6
				],
				[
					0,
					-57
				],
				[
					-11,
					-13
				],
				[
					-26,
					2
				],
				[
					-22,
					21
				],
				[
					-36,
					17
				],
				[
					-7,
					26
				],
				[
					-28,
					9
				],
				[
					-31,
					-7
				],
				[
					-16,
					20
				],
				[
					6,
					22
				],
				[
					-33,
					-14
				],
				[
					13,
					-28
				],
				[
					-16,
					-25
				],
				[
					5000,
					535651
				]
			],
			[
				[
					282722,
					551046
				],
				[
					-272753,
					-541807
				],
				[
					-5,
					19
				],
				[
					-9964,
					24
				],
				[
					4,
					3
				],
				[
					23,
					0
				],
				[
					40,
					-17
				],
				[
					-2,
					-8
				],
				[
					-29,
					-14
				],
				[
					-36,
					-4
				],
				[
					282722,
					541804
				]
			],
			[
				[
					8988,
					9383
				],
				[
					-42,
					-1
				],
				[
					-57,
					7
				],
				[
					-5,
					3
				],
				[
					27,
					23
				],
				[
					34,
					6
				],
				[
					40,
					-23
				],
				[
					3,
					-15
				]
			],
			[
				[
					9186,
					9493
				],
				[
					-32,
					-23
				],
				[
					-44,
					5
				],
				[
					-52,
					23
				],
				[
					7,
					20
				],
				[
					51,
					-9
				],
				[
					70,
					-16
				]
			],
			[
				[
					9029,
					9522
				],
				[
					-22,
					-44
				],
				[
					-102,
					1
				],
				[
					-46,
					-14
				],
				[
					-55,
					39
				],
				[
					15,
					40
				],
				[
					37,
					11
				],
				[
					73,
					-2
				],
				[
					100,
					-31
				]
			],
			[
				[
					6598,
					9235
				],
				[
					-17,
					-5
				],
				[
					-91,
					8
				],
				[
					-7,
					26
				],
				[
					-50,
					16
				],
				[
					-4,
					32
				],
				[
					28,
					13
				],
				[
					-1,
					32
				],
				[
					55,
					50
				],
				[
					-25,
					7
				],
				[
					66,
					52
				],
				[
					-7,
					27
				],
				[
					62,
					31
				],
				[
					91,
					38
				],
				[
					93,
					11
				],
				[
					48,
					22
				],
				[
					54,
					8
				],
				[
					19,
					-23
				],
				[
					-19,
					-19
				],
				[
					-98,
					-29
				],
				[
					-85,
					-28
				],
				[
					-86,
					-57
				],
				[
					-42,
					-57
				],
				[
					-43,
					-57
				],
				[
					5,
					-49
				],
				[
					54,
					-49
				]
			],
			[
				[
					6363,
					7799
				],
				[
					-12,
					-35
				],
				[
					-27,
					-10
				],
				[
					-28,
					-61
				],
				[
					25,
					-56
				],
				[
					-2,
					-40
				],
				[
					30,
					-70
				]
			],
			[
				[
					6109,
					7624
				],
				[
					-35,
					49
				],
				[
					-32,
					23
				],
				[
					-24,
					34
				],
				[
					20,
					10
				],
				[
					23,
					49
				],
				[
					-15,
					24
				],
				[
					41,
					24
				],
				[
					-1,
					13
				],
				[
					-25,
					-10
				]
			],
			[
				[
					6061,
					7840
				],
				[
					1,
					26
				],
				[
					14,
					17
				],
				[
					27,
					4
				],
				[
					5,
					20
				],
				[
					-7,
					33
				],
				[
					12,
					30
				],
				[
					-1,
					18
				],
				[
					-41,
					19
				],
				[
					-16,
					-1
				],
				[
					-17,
					28
				],
				[
					-21,
					-9
				],
				[
					-35,
					20
				],
				[
					0,
					12
				],
				[
					-10,
					26
				],
				[
					-22,
					3
				],
				[
					-2,
					18
				],
				[
					7,
					12
				],
				[
					-18,
					33
				],
				[
					-29,
					-5
				],
				[
					-8,
					3
				],
				[
					-7,
					-14
				],
				[
					-11,
					3
				]
			],
			[
				[
					5777,
					8571
				],
				[
					31,
					33
				],
				[
					-29,
					28
				]
			],
			[
				[
					5863,
					9167
				],
				[
					29,
					20
				],
				[
					46,
					-35
				],
				[
					76,
					-14
				],
				[
					105,
					-67
				],
				[
					21,
					-28
				],
				[
					2,
					-40
				],
				[
					-31,
					-31
				],
				[
					-45,
					-15
				],
				[
					-124,
					44
				],
				[
					-21,
					-7
				],
				[
					45,
					-43
				],
				[
					2,
					-28
				],
				[
					2,
					-60
				],
				[
					36,
					-18
				],
				[
					22,
					-15
				],
				[
					3,
					28
				],
				[
					-17,
					26
				],
				[
					18,
					22
				],
				[
					67,
					-37
				],
				[
					24,
					15
				],
				[
					-19,
					43
				],
				[
					65,
					58
				],
				[
					25,
					-4
				],
				[
					26,
					-20
				],
				[
					16,
					40
				],
				[
					-23,
					35
				],
				[
					14,
					36
				],
				[
					-21,
					36
				],
				[
					78,
					-18
				],
				[
					16,
					-34
				],
				[
					-35,
					-7
				],
				[
					0,
					-33
				],
				[
					22,
					-20
				],
				[
					43,
					13
				],
				[
					7,
					38
				],
				[
					58,
					28
				],
				[
					97,
					50
				],
				[
					20,
					-3
				],
				[
					-27,
					-35
				],
				[
					35,
					-7
				],
				[
					19,
					21
				],
				[
					52,
					1
				],
				[
					42,
					25
				],
				[
					31,
					-36
				],
				[
					32,
					39
				],
				[
					-29,
					35
				],
				[
					14,
					19
				],
				[
					82,
					-18
				],
				[
					39,
					-18
				],
				[
					100,
					-68
				],
				[
					19,
					31
				],
				[
					-28,
					31
				],
				[
					-1,
					13
				],
				[
					-34,
					6
				],
				[
					10,
					28
				],
				[
					-15,
					46
				],
				[
					-1,
					19
				],
				[
					51,
					53
				],
				[
					18,
					54
				],
				[
					21,
					11
				],
				[
					74,
					-15
				],
				[
					5,
					-33
				],
				[
					-26,
					-48
				],
				[
					17,
					-19
				],
				[
					9,
					-41
				],
				[
					-6,
					-81
				],
				[
					31,
					-36
				],
				[
					-12,
					-40
				],
				[
					-55,
					-84
				],
				[
					32,
					-8
				],
				[
					11,
					21
				],
				[
					31,
					15
				],
				[
					7,
					29
				],
				[
					24,
					29
				],
				[
					-16,
					33
				],
				[
					13,
					39
				],
				[
					-31,
					5
				],
				[
					-6,
					33
				],
				[
					22,
					59
				],
				[
					-36,
					48
				],
				[
					50,
					40
				],
				[
					-7,
					42
				],
				[
					14,
					2
				],
				[
					15,
					-33
				],
				[
					-11,
					-57
				],
				[
					29,
					-11
				],
				[
					-12,
					43
				],
				[
					46,
					23
				],
				[
					58,
					3
				],
				[
					51,
					-34
				],
				[
					-25,
					49
				],
				[
					-2,
					63
				],
				[
					48,
					12
				],
				[
					67,
					-2
				],
				[
					60,
					7
				],
				[
					-23,
					31
				],
				[
					33,
					39
				],
				[
					31,
					2
				],
				[
					54,
					29
				],
				[
					74,
					8
				],
				[
					9,
					16
				],
				[
					73,
					6
				],
				[
					23,
					-14
				],
				[
					62,
					32
				],
				[
					51,
					-1
				],
				[
					8,
					25
				],
				[
					26,
					25
				],
				[
					66,
					25
				],
				[
					48,
					-19
				],
				[
					-38,
					-15
				],
				[
					63,
					-9
				],
				[
					7,
					-29
				],
				[
					25,
					14
				],
				[
					82,
					-1
				],
				[
					62,
					-29
				],
				[
					23,
					-22
				],
				[
					-7,
					-30
				],
				[
					-31,
					-18
				],
				[
					-73,
					-33
				],
				[
					-21,
					-17
				],
				[
					35,
					-8
				],
				[
					41,
					-15
				],
				[
					25,
					11
				],
				[
					14,
					-38
				],
				[
					12,
					15
				],
				[
					44,
					10
				],
				[
					90,
					-10
				],
				[
					6,
					-28
				],
				[
					116,
					-9
				],
				[
					2,
					46
				],
				[
					59,
					-11
				],
				[
					44,
					1
				],
				[
					45,
					-32
				],
				[
					13,
					-37
				],
				[
					-17,
					-25
				],
				[
					35,
					-47
				],
				[
					44,
					-24
				],
				[
					27,
					62
				],
				[
					44,
					-26
				],
				[
					48,
					16
				],
				[
					53,
					-18
				],
				[
					21,
					16
				],
				[
					45,
					-8
				],
				[
					-20,
					55
				],
				[
					37,
					25
				],
				[
					251,
					-38
				],
				[
					24,
					-35
				],
				[
					72,
					-45
				],
				[
					112,
					11
				],
				[
					56,
					-10
				],
				[
					23,
					-24
				],
				[
					-4,
					-44
				],
				[
					35,
					-16
				],
				[
					37,
					12
				],
				[
					49,
					1
				],
				[
					52,
					-11
				],
				[
					53,
					6
				],
				[
					49,
					-52
				],
				[
					34,
					19
				],
				[
					-23,
					37
				],
				[
					13,
					27
				],
				[
					88,
					-17
				],
				[
					58,
					4
				],
				[
					80,
					-29
				],
				[
					-9960,
					-25
				],
				[
					5000,
					521473
				],
				[
					4963,
					-521735
				],
				[
					-36,
					4
				],
				[
					25,
					-31
				],
				[
					17,
					-49
				],
				[
					13,
					-16
				],
				[
					3,
					-24
				],
				[
					-7,
					-16
				],
				[
					-52,
					13
				],
				[
					-78,
					-44
				],
				[
					-25,
					-7
				],
				[
					-42,
					-42
				],
				[
					-40,
					-36
				],
				[
					-11,
					-27
				],
				[
					-39,
					41
				],
				[
					-73,
					-46
				],
				[
					-12,
					22
				],
				[
					-27,
					-26
				],
				[
					-37,
					8
				],
				[
					-9,
					-38
				],
				[
					-33,
					-58
				],
				[
					1,
					-24
				],
				[
					31,
					-13
				],
				[
					-4,
					-86
				],
				[
					-25,
					-2
				],
				[
					-12,
					-49
				],
				[
					11,
					-26
				],
				[
					-48,
					-30
				],
				[
					-10,
					-67
				],
				[
					-41,
					-15
				],
				[
					-9,
					-60
				],
				[
					-40,
					-55
				],
				[
					-10,
					41
				],
				[
					-12,
					86
				],
				[
					-15,
					131
				],
				[
					13,
					82
				],
				[
					23,
					35
				],
				[
					2,
					28
				],
				[
					43,
					13
				],
				[
					50,
					75
				],
				[
					47,
					60
				],
				[
					50,
					48
				],
				[
					23,
					83
				],
				[
					-34,
					-5
				],
				[
					-17,
					-49
				],
				[
					-70,
					-65
				],
				[
					-23,
					73
				],
				[
					-72,
					-20
				],
				[
					-69,
					-99
				],
				[
					23,
					-36
				],
				[
					-62,
					-16
				],
				[
					-43,
					-6
				],
				[
					2,
					43
				],
				[
					-43,
					9
				],
				[
					-35,
					-29
				],
				[
					-85,
					10
				],
				[
					-91,
					-18
				],
				[
					-90,
					-115
				],
				[
					-106,
					-139
				],
				[
					43,
					-8
				],
				[
					14,
					-37
				],
				[
					27,
					-13
				],
				[
					18,
					30
				],
				[
					30,
					-4
				],
				[
					40,
					-65
				],
				[
					1,
					-50
				],
				[
					-21,
					-59
				],
				[
					-3,
					-71
				],
				[
					-12,
					-94
				],
				[
					-42,
					-86
				],
				[
					-9,
					-41
				],
				[
					-38,
					-69
				],
				[
					-38,
					-68
				],
				[
					-18,
					-35
				],
				[
					-37,
					-34
				],
				[
					-17,
					-1
				],
				[
					-17,
					29
				],
				[
					-38,
					-44
				],
				[
					-4,
					-19
				]
			],
			[
				[
					7918,
					9684
				],
				[
					-157,
					-23
				],
				[
					51,
					77
				],
				[
					23,
					7
				],
				[
					21,
					-4
				],
				[
					70,
					-33
				],
				[
					-8,
					-24
				]
			],
			[
				[
					6420,
					9816
				],
				[
					-37,
					-8
				],
				[
					-25,
					-4
				],
				[
					-4,
					-10
				],
				[
					-33,
					-10
				],
				[
					-30,
					14
				],
				[
					16,
					19
				],
				[
					-62,
					2
				],
				[
					54,
					10
				],
				[
					43,
					1
				],
				[
					5,
					-16
				],
				[
					16,
					14
				],
				[
					26,
					10
				],
				[
					42,
					-13
				],
				[
					-11,
					-9
				]
			],
			[
				[
					7775,
					9718
				],
				[
					-60,
					-8
				],
				[
					-78,
					17
				],
				[
					-46,
					23
				],
				[
					-21,
					42
				],
				[
					-38,
					12
				],
				[
					72,
					40
				],
				[
					60,
					14
				],
				[
					54,
					-30
				],
				[
					64,
					-57
				],
				[
					-7,
					-53
				]
			],
			[
				[
					5844,
					4990
				],
				[
					11,
					-33
				],
				[
					-1,
					-35
				],
				[
					-8,
					-7
				]
			],
			[
				[
					5821,
					4978
				],
				[
					7,
					-6
				],
				[
					16,
					18
				]
			],
			[
				[
					4526,
					6298
				],
				[
					1,
					25
				]
			],
			[
				[
					6188,
					6023
				],
				[
					-4,
					26
				],
				[
					-8,
					17
				],
				[
					-2,
					24
				],
				[
					-15,
					21
				],
				[
					-15,
					50
				],
				[
					-7,
					48
				],
				[
					-20,
					40
				],
				[
					-12,
					10
				],
				[
					-18,
					56
				],
				[
					-4,
					41
				],
				[
					2,
					35
				],
				[
					-16,
					66
				],
				[
					-13,
					23
				],
				[
					-15,
					12
				],
				[
					-10,
					34
				],
				[
					2,
					13
				],
				[
					-8,
					31
				],
				[
					-8,
					13
				],
				[
					-11,
					44
				],
				[
					-17,
					48
				],
				[
					-14,
					40
				],
				[
					-14,
					0
				],
				[
					5,
					33
				],
				[
					1,
					20
				],
				[
					3,
					24
				]
			],
			[
				[
					6344,
					6744
				],
				[
					11,
					-51
				],
				[
					14,
					-13
				],
				[
					5,
					-21
				],
				[
					18,
					-25
				],
				[
					2,
					-24
				],
				[
					-3,
					-20
				],
				[
					4,
					-20
				],
				[
					8,
					-16
				],
				[
					4,
					-20
				],
				[
					4,
					-14
				]
			],
			[
				[
					6427,
					6512
				],
				[
					5,
					-22
				]
			],
			[
				[
					6444,
					6180
				],
				[
					-80,
					-23
				],
				[
					-26,
					-26
				],
				[
					-20,
					-62
				],
				[
					-13,
					-10
				],
				[
					-7,
					20
				],
				[
					-11,
					-3
				],
				[
					-27,
					6
				],
				[
					-5,
					5
				],
				[
					-32,
					-1
				],
				[
					-7,
					-5
				],
				[
					-12,
					15
				],
				[
					-7,
					-29
				],
				[
					3,
					-25
				],
				[
					-12,
					-19
				]
			],
			[
				[
					5943,
					5617
				],
				[
					-4,
					1
				],
				[
					0,
					29
				],
				[
					-3,
					20
				],
				[
					-14,
					24
				],
				[
					-4,
					42
				],
				[
					4,
					44
				],
				[
					-13,
					4
				],
				[
					-2,
					-13
				],
				[
					-17,
					-3
				],
				[
					7,
					-17
				],
				[
					2,
					-36
				],
				[
					-15,
					-32
				],
				[
					-14,
					-43
				],
				[
					-14,
					-6
				],
				[
					-23,
					34
				],
				[
					-11,
					-12
				],
				[
					-3,
					-17
				],
				[
					-14,
					-11
				],
				[
					-1,
					-12
				],
				[
					-28,
					0
				],
				[
					-3,
					12
				],
				[
					-20,
					2
				],
				[
					-10,
					-10
				],
				[
					-8,
					5
				],
				[
					-14,
					34
				],
				[
					-5,
					17
				],
				[
					-20,
					-9
				],
				[
					-8,
					-27
				],
				[
					-7,
					-53
				],
				[
					-10,
					-11
				],
				[
					-8,
					-6
				]
			],
			[
				[
					5663,
					5567
				],
				[
					-2,
					2
				]
			],
			[
				[
					5635,
					5716
				],
				[
					0,
					14
				],
				[
					-10,
					17
				],
				[
					-1,
					35
				],
				[
					-5,
					23
				],
				[
					-10,
					-4
				],
				[
					3,
					22
				],
				[
					7,
					25
				],
				[
					-3,
					24
				],
				[
					9,
					18
				],
				[
					-6,
					14
				],
				[
					7,
					36
				],
				[
					13,
					44
				],
				[
					24,
					-4
				],
				[
					-1,
					234
				]
			],
			[
				[
					6023,
					6357
				],
				[
					9,
					-58
				],
				[
					-6,
					-10
				],
				[
					4,
					-61
				],
				[
					11,
					-71
				],
				[
					10,
					-14
				],
				[
					15,
					-22
				]
			],
			[
				[
					5943,
					5624
				],
				[
					0,
					-7
				]
			],
			[
				[
					5943,
					5617
				],
				[
					0,
					-46
				]
			],
			[
				[
					5944,
					5309
				],
				[
					-17,
					-28
				],
				[
					-20,
					1
				],
				[
					-22,
					-14
				],
				[
					-18,
					13
				],
				[
					-11,
					-16
				]
			],
			[
				[
					5682,
					5544
				],
				[
					-19,
					23
				]
			],
			[
				[
					4535,
					5861
				],
				[
					-11,
					46
				],
				[
					-14,
					21
				],
				[
					12,
					11
				],
				[
					14,
					41
				],
				[
					6,
					31
				]
			],
			[
				[
					4536,
					5789
				],
				[
					-4,
					45
				]
			],
			[
				[
					9502,
					4438
				],
				[
					8,
					-20
				],
				[
					-19,
					0
				],
				[
					-11,
					37
				],
				[
					17,
					-15
				],
				[
					5,
					-2
				]
			],
			[
				[
					9467,
					4474
				],
				[
					-11,
					-1
				],
				[
					-17,
					6
				],
				[
					-5,
					9
				],
				[
					1,
					23
				],
				[
					19,
					-9
				],
				[
					9,
					-12
				],
				[
					4,
					-16
				]
			],
			[
				[
					9490,
					4490
				],
				[
					-4,
					-11
				],
				[
					-21,
					52
				],
				[
					-5,
					35
				],
				[
					9,
					0
				],
				[
					10,
					-47
				],
				[
					11,
					-29
				]
			],
			[
				[
					9440,
					4565
				],
				[
					1,
					-12
				],
				[
					-22,
					25
				],
				[
					-15,
					21
				],
				[
					-10,
					20
				],
				[
					4,
					6
				],
				[
					13,
					-14
				],
				[
					23,
					-27
				],
				[
					6,
					-19
				]
			],
			[
				[
					9375,
					4623
				],
				[
					-5,
					-3
				],
				[
					-13,
					14
				],
				[
					-11,
					24
				],
				[
					1,
					10
				],
				[
					17,
					-25
				],
				[
					11,
					-20
				]
			],
			[
				[
					4682,
					5458
				],
				[
					-8,
					5
				],
				[
					-20,
					24
				],
				[
					-14,
					31
				],
				[
					-5,
					22
				],
				[
					-3,
					43
				]
			],
			[
				[
					2561,
					5848
				],
				[
					-3,
					-14
				],
				[
					-16,
					1
				],
				[
					-10,
					6
				],
				[
					-12,
					12
				],
				[
					-15,
					3
				],
				[
					-8,
					13
				]
			],
			[
				[
					6198,
					5735
				],
				[
					9,
					-11
				],
				[
					5,
					-25
				],
				[
					13,
					-24
				],
				[
					14,
					-1
				],
				[
					26,
					16
				],
				[
					30,
					7
				],
				[
					25,
					18
				],
				[
					13,
					4
				],
				[
					10,
					11
				],
				[
					16,
					2
				]
			],
			[
				[
					6359,
					5732
				],
				[
					0,
					-1
				],
				[
					0,
					-25
				],
				[
					0,
					-59
				],
				[
					0,
					-31
				],
				[
					-13,
					-36
				],
				[
					-19,
					-50
				]
			],
			[
				[
					6359,
					5732
				],
				[
					9,
					1
				],
				[
					13,
					9
				],
				[
					14,
					6
				],
				[
					14,
					20
				],
				[
					10,
					0
				],
				[
					1,
					-16
				],
				[
					-3,
					-35
				],
				[
					0,
					-31
				],
				[
					-6,
					-21
				],
				[
					-7,
					-64
				],
				[
					-14,
					-66
				],
				[
					-17,
					-75
				],
				[
					-24,
					-87
				],
				[
					-23,
					-66
				],
				[
					-33,
					-81
				],
				[
					-28,
					-48
				],
				[
					-42,
					-58
				],
				[
					-25,
					-45
				],
				[
					-31,
					-72
				],
				[
					-6,
					-31
				],
				[
					-6,
					-14
				]
			],
			[
				[
					3412,
					5410
				],
				[
					34,
					-11
				],
				[
					2,
					10
				],
				[
					23,
					4
				],
				[
					30,
					-15
				]
			],
			[
				[
					3489,
					5306
				],
				[
					10,
					-35
				],
				[
					-4,
					-25
				]
			],
			[
				[
					5626,
					7957
				],
				[
					-8,
					-15
				],
				[
					-5,
					-24
				]
			],
			[
				[
					5380,
					7746
				],
				[
					7,
					5
				]
			],
			[
				[
					5663,
					8957
				],
				[
					-47,
					-17
				],
				[
					-27,
					-41
				],
				[
					4,
					-36
				],
				[
					-44,
					-48
				],
				[
					-54,
					-50
				],
				[
					-20,
					-84
				],
				[
					20,
					-41
				],
				[
					26,
					-33
				],
				[
					-25,
					-67
				],
				[
					-29,
					-14
				],
				[
					-11,
					-99
				],
				[
					-15,
					-55
				],
				[
					-34,
					6
				],
				[
					-16,
					-47
				],
				[
					-32,
					-3
				],
				[
					-9,
					56
				],
				[
					-23,
					67
				],
				[
					-21,
					84
				]
			],
			[
				[
					5890,
					3478
				],
				[
					-5,
					-26
				],
				[
					-17,
					-6
				],
				[
					-16,
					32
				],
				[
					0,
					20
				],
				[
					7,
					22
				],
				[
					3,
					17
				],
				[
					8,
					5
				],
				[
					14,
					-11
				]
			],
			[
				[
					5999,
					7104
				],
				[
					-2,
					45
				],
				[
					7,
					25
				]
			],
			[
				[
					6004,
					7174
				],
				[
					7,
					13
				],
				[
					7,
					13
				],
				[
					2,
					33
				],
				[
					9,
					-12
				],
				[
					31,
					17
				],
				[
					14,
					-12
				],
				[
					23,
					1
				],
				[
					32,
					22
				],
				[
					15,
					-1
				],
				[
					32,
					9
				]
			],
			[
				[
					5051,
					5420
				],
				[
					-22,
					-12
				]
			],
			[
				[
					7849,
					5777
				],
				[
					-25,
					28
				],
				[
					-24,
					-2
				],
				[
					4,
					47
				],
				[
					-24,
					0
				],
				[
					-2,
					-65
				],
				[
					-15,
					-87
				],
				[
					-10,
					-52
				],
				[
					2,
					-43
				],
				[
					18,
					-2
				],
				[
					12,
					-53
				],
				[
					5,
					-52
				],
				[
					15,
					-33
				],
				[
					17,
					-7
				],
				[
					14,
					-31
				]
			],
			[
				[
					7779,
					5439
				],
				[
					-11,
					23
				],
				[
					-4,
					29
				],
				[
					-15,
					34
				],
				[
					-14,
					28
				],
				[
					-4,
					-35
				],
				[
					-5,
					33
				],
				[
					3,
					37
				],
				[
					8,
					56
				]
			],
			[
				[
					6883,
					7252
				],
				[
					16,
					60
				],
				[
					-6,
					44
				],
				[
					-20,
					14
				],
				[
					7,
					26
				],
				[
					23,
					-3
				],
				[
					13,
					33
				],
				[
					9,
					38
				],
				[
					37,
					13
				],
				[
					-6,
					-27
				],
				[
					4,
					-17
				],
				[
					12,
					2
				]
			],
			[
				[
					6497,
					7255
				],
				[
					-5,
					42
				],
				[
					4,
					62
				],
				[
					-22,
					20
				],
				[
					8,
					40
				],
				[
					-19,
					4
				],
				[
					6,
					49
				],
				[
					26,
					-14
				],
				[
					25,
					19
				],
				[
					-20,
					35
				],
				[
					-8,
					34
				],
				[
					-23,
					-15
				],
				[
					-3,
					-43
				],
				[
					-8,
					38
				]
			],
			[
				[
					6554,
					7498
				],
				[
					31,
					1
				],
				[
					-4,
					29
				],
				[
					24,
					21
				],
				[
					23,
					34
				],
				[
					37,
					-31
				],
				[
					3,
					-47
				],
				[
					11,
					-12
				],
				[
					30,
					2
				],
				[
					9,
					-10
				],
				[
					14,
					-61
				],
				[
					32,
					-41
				],
				[
					18,
					-28
				],
				[
					29,
					-29
				],
				[
					37,
					-25
				],
				[
					-1,
					-36
				]
			],
			[
				[
					8471,
					4532
				],
				[
					3,
					14
				],
				[
					24,
					13
				],
				[
					19,
					2
				],
				[
					9,
					8
				],
				[
					10,
					-8
				],
				[
					-10,
					-16
				],
				[
					-29,
					-25
				],
				[
					-23,
					-17
				]
			],
			[
				[
					3286,
					5693
				],
				[
					16,
					8
				],
				[
					6,
					-2
				],
				[
					-1,
					-44
				],
				[
					-23,
					-7
				],
				[
					-5,
					6
				],
				[
					8,
					16
				],
				[
					-1,
					23
				]
			],
			[
				[
					5233,
					7240
				],
				[
					31,
					24
				],
				[
					19,
					-7
				],
				[
					-1,
					-30
				],
				[
					24,
					22
				],
				[
					2,
					-12
				],
				[
					-14,
					-29
				],
				[
					0,
					-27
				],
				[
					9,
					-15
				],
				[
					-3,
					-51
				],
				[
					-19,
					-29
				],
				[
					6,
					-33
				],
				[
					14,
					-1
				],
				[
					7,
					-28
				],
				[
					11,
					-9
				]
			],
			[
				[
					6004,
					7174
				],
				[
					-11,
					27
				],
				[
					11,
					22
				],
				[
					-17,
					-5
				],
				[
					-23,
					13
				],
				[
					-19,
					-34
				],
				[
					-43,
					-6
				],
				[
					-22,
					31
				],
				[
					-30,
					2
				],
				[
					-6,
					-24
				],
				[
					-20,
					-7
				],
				[
					-26,
					31
				],
				[
					-31,
					-1
				],
				[
					-16,
					59
				],
				[
					-21,
					33
				],
				[
					14,
					46
				],
				[
					-18,
					28
				],
				[
					31,
					56
				],
				[
					43,
					3
				],
				[
					12,
					45
				],
				[
					53,
					-8
				],
				[
					33,
					38
				],
				[
					32,
					17
				],
				[
					46,
					1
				],
				[
					49,
					-42
				],
				[
					40,
					-22
				],
				[
					32,
					9
				],
				[
					24,
					-6
				],
				[
					33,
					31
				]
			],
			[
				[
					5777,
					7539
				],
				[
					3,
					-23
				],
				[
					25,
					-19
				],
				[
					-5,
					-14
				],
				[
					-33,
					-3
				],
				[
					-12,
					-19
				],
				[
					-23,
					-31
				],
				[
					-9,
					27
				],
				[
					0,
					12
				]
			],
			[
				[
					8382,
					6499
				],
				[
					-17,
					-95
				],
				[
					-12,
					-49
				],
				[
					-14,
					50
				],
				[
					-4,
					44
				],
				[
					17,
					58
				],
				[
					22,
					45
				],
				[
					13,
					-18
				],
				[
					-5,
					-35
				]
			],
			[
				[
					6088,
					4781
				],
				[
					-12,
					-73
				],
				[
					1,
					-33
				],
				[
					18,
					-22
				],
				[
					1,
					-15
				],
				[
					-8,
					-36
				],
				[
					2,
					-18
				],
				[
					-2,
					-28
				],
				[
					10,
					-37
				],
				[
					11,
					-58
				],
				[
					10,
					-13
				]
			],
			[
				[
					5909,
					4512
				],
				[
					-15,
					18
				],
				[
					-18,
					10
				],
				[
					-11,
					10
				],
				[
					-12,
					15
				]
			],
			[
				[
					5844,
					4990
				],
				[
					10,
					8
				],
				[
					31,
					-1
				],
				[
					56,
					4
				]
			],
			[
				[
					6061,
					7840
				],
				[
					-22,
					-5
				],
				[
					-18,
					-19
				],
				[
					-26,
					-3
				],
				[
					-24,
					-22
				],
				[
					1,
					-37
				],
				[
					14,
					-14
				],
				[
					28,
					4
				],
				[
					-5,
					-21
				],
				[
					-31,
					-11
				],
				[
					-37,
					-34
				],
				[
					-16,
					12
				],
				[
					6,
					28
				],
				[
					-30,
					17
				],
				[
					5,
					12
				],
				[
					26,
					19
				],
				[
					-8,
					14
				],
				[
					-43,
					15
				],
				[
					-2,
					22
				],
				[
					-25,
					-8
				],
				[
					-11,
					-32
				],
				[
					-21,
					-44
				]
			],
			[
				[
					3517,
					3063
				],
				[
					-12,
					-38
				],
				[
					-31,
					-32
				],
				[
					-21,
					11
				],
				[
					-15,
					-6
				],
				[
					-26,
					25
				],
				[
					-18,
					-1
				],
				[
					-17,
					32
				]
			],
			[
				[
					679,
					6185
				],
				[
					-4,
					-10
				],
				[
					-7,
					8
				],
				[
					1,
					17
				],
				[
					-4,
					21
				],
				[
					1,
					7
				],
				[
					5,
					10
				],
				[
					-2,
					11
				],
				[
					1,
					6
				],
				[
					3,
					-1
				],
				[
					10,
					-10
				],
				[
					5,
					-5
				],
				[
					5,
					-8
				],
				[
					7,
					-21
				],
				[
					-1,
					-3
				],
				[
					-11,
					-13
				],
				[
					-9,
					-9
				]
			],
			[
				[
					664,
					6277
				],
				[
					-9,
					-4
				],
				[
					-5,
					12
				],
				[
					-3,
					5
				],
				[
					0,
					4
				],
				[
					3,
					5
				],
				[
					9,
					-6
				],
				[
					8,
					-9
				],
				[
					-3,
					-7
				]
			],
			[
				[
					646,
					6309
				],
				[
					-1,
					-7
				],
				[
					-15,
					2
				],
				[
					2,
					7
				],
				[
					14,
					-2
				]
			],
			[
				[
					621,
					6317
				],
				[
					-2,
					-3
				],
				[
					-2,
					1
				],
				[
					-9,
					2
				],
				[
					-4,
					13
				],
				[
					-1,
					2
				],
				[
					7,
					8
				],
				[
					3,
					-3
				],
				[
					8,
					-20
				]
			],
			[
				[
					574,
					6356
				],
				[
					-4,
					-6
				],
				[
					-9,
					11
				],
				[
					1,
					4
				],
				[
					5,
					6
				],
				[
					6,
					-1
				],
				[
					1,
					-14
				]
			],
			[
				[
					3135,
					7724
				],
				[
					5,
					-19
				],
				[
					-30,
					-29
				],
				[
					-29,
					-20
				],
				[
					-29,
					-18
				],
				[
					-15,
					-35
				],
				[
					-4,
					-13
				],
				[
					-1,
					-31
				],
				[
					10,
					-32
				],
				[
					11,
					-1
				],
				[
					-3,
					21
				],
				[
					8,
					-13
				],
				[
					-2,
					-17
				],
				[
					-19,
					-9
				],
				[
					-13,
					1
				],
				[
					-20,
					-10
				],
				[
					-12,
					-3
				],
				[
					-17,
					-3
				],
				[
					-23,
					-17
				],
				[
					41,
					11
				],
				[
					8,
					-11
				],
				[
					-39,
					-18
				],
				[
					-17,
					0
				],
				[
					0,
					7
				],
				[
					-8,
					-16
				],
				[
					8,
					-3
				],
				[
					-6,
					-43
				],
				[
					-20,
					-45
				],
				[
					-2,
					15
				],
				[
					-6,
					3
				],
				[
					-9,
					15
				],
				[
					5,
					-32
				],
				[
					7,
					-10
				],
				[
					1,
					-23
				],
				[
					-9,
					-23
				],
				[
					-16,
					-47
				],
				[
					-2,
					3
				],
				[
					8,
					40
				],
				[
					-14,
					22
				],
				[
					-3,
					49
				],
				[
					-5,
					-25
				],
				[
					5,
					-38
				],
				[
					-18,
					10
				],
				[
					19,
					-19
				],
				[
					1,
					-57
				],
				[
					8,
					-4
				],
				[
					3,
					-20
				],
				[
					4,
					-59
				],
				[
					-17,
					-44
				],
				[
					-29,
					-18
				],
				[
					-18,
					-34
				],
				[
					-14,
					-4
				],
				[
					-14,
					-22
				],
				[
					-4,
					-20
				],
				[
					-31,
					-38
				],
				[
					-16,
					-28
				],
				[
					-13,
					-35
				],
				[
					-4,
					-42
				],
				[
					5,
					-41
				],
				[
					9,
					-51
				],
				[
					13,
					-41
				],
				[
					0,
					-26
				],
				[
					13,
					-69
				],
				[
					-1,
					-39
				],
				[
					-1,
					-23
				],
				[
					-7,
					-36
				],
				[
					-8,
					-8
				],
				[
					-14,
					7
				],
				[
					-4,
					26
				],
				[
					-11,
					14
				],
				[
					-15,
					51
				],
				[
					-13,
					45
				],
				[
					-4,
					23
				],
				[
					6,
					39
				],
				[
					-8,
					33
				],
				[
					-22,
					49
				],
				[
					-10,
					9
				],
				[
					-28,
					-27
				],
				[
					-5,
					3
				],
				[
					-14,
					28
				],
				[
					-17,
					14
				],
				[
					-32,
					-7
				],
				[
					-24,
					7
				],
				[
					-21,
					-5
				],
				[
					-12,
					-9
				],
				[
					5,
					-15
				],
				[
					0,
					-24
				],
				[
					5,
					-12
				],
				[
					-5,
					-8
				],
				[
					-10,
					9
				],
				[
					-11,
					-11
				],
				[
					-20,
					2
				],
				[
					-20,
					31
				],
				[
					-25,
					-8
				],
				[
					-20,
					14
				],
				[
					-17,
					-4
				],
				[
					-24,
					-14
				],
				[
					-25,
					-44
				],
				[
					-27,
					-25
				],
				[
					-16,
					-28
				],
				[
					-6,
					-27
				],
				[
					0,
					-41
				],
				[
					1,
					-28
				],
				[
					5,
					-20
				]
			],
			[
				[
					1746,
					6980
				],
				[
					-4,
					30
				],
				[
					-18,
					34
				],
				[
					-13,
					7
				],
				[
					-3,
					17
				],
				[
					-16,
					3
				],
				[
					-10,
					16
				],
				[
					-26,
					6
				],
				[
					-7,
					9
				],
				[
					-3,
					32
				],
				[
					-27,
					60
				],
				[
					-23,
					82
				],
				[
					1,
					14
				],
				[
					-13,
					19
				],
				[
					-21,
					50
				],
				[
					-4,
					48
				],
				[
					-15,
					32
				],
				[
					6,
					49
				],
				[
					-1,
					51
				],
				[
					-8,
					45
				],
				[
					10,
					56
				],
				[
					4,
					53
				],
				[
					3,
					54
				],
				[
					-5,
					79
				],
				[
					-9,
					51
				],
				[
					-8,
					27
				],
				[
					4,
					12
				],
				[
					40,
					-20
				],
				[
					15,
					-56
				],
				[
					7,
					15
				],
				[
					-5,
					49
				],
				[
					-9,
					48
				]
			],
			[
				[
					750,
					8432
				],
				[
					-28,
					-23
				],
				[
					-14,
					15
				],
				[
					-4,
					28
				],
				[
					25,
					21
				],
				[
					15,
					9
				],
				[
					18,
					-4
				],
				[
					12,
					-18
				],
				[
					-24,
					-28
				]
			],
			[
				[
					401,
					8597
				],
				[
					-18,
					-9
				],
				[
					-18,
					11
				],
				[
					-17,
					16
				],
				[
					28,
					10
				],
				[
					22,
					-6
				],
				[
					3,
					-22
				]
			],
			[
				[
					230,
					8826
				],
				[
					17,
					-12
				],
				[
					17,
					6
				],
				[
					23,
					-15
				],
				[
					27,
					-8
				],
				[
					-2,
					-7
				],
				[
					-21,
					-12
				],
				[
					-21,
					13
				],
				[
					-11,
					11
				],
				[
					-24,
					-4
				],
				[
					-7,
					5
				],
				[
					2,
					23
				]
			],
			[
				[
					1374,
					8295
				],
				[
					-15,
					22
				],
				[
					-25,
					19
				],
				[
					-8,
					52
				],
				[
					-36,
					47
				],
				[
					-15,
					56
				],
				[
					-26,
					4
				],
				[
					-44,
					2
				],
				[
					-33,
					17
				],
				[
					-57,
					61
				],
				[
					-27,
					11
				],
				[
					-49,
					21
				],
				[
					-38,
					-5
				],
				[
					-55,
					27
				],
				[
					-33,
					25
				],
				[
					-30,
					-12
				],
				[
					5,
					-41
				],
				[
					-15,
					-4
				],
				[
					-32,
					-12
				],
				[
					-25,
					-20
				],
				[
					-30,
					-13
				],
				[
					-4,
					35
				],
				[
					12,
					58
				],
				[
					30,
					18
				],
				[
					-8,
					15
				],
				[
					-35,
					-33
				],
				[
					-19,
					-39
				],
				[
					-40,
					-42
				],
				[
					20,
					-29
				],
				[
					-26,
					-42
				],
				[
					-30,
					-25
				],
				[
					-28,
					-18
				],
				[
					-7,
					-26
				],
				[
					-43,
					-31
				],
				[
					-9,
					-28
				],
				[
					-32,
					-25
				],
				[
					-20,
					5
				],
				[
					-25,
					-17
				],
				[
					-29,
					-20
				],
				[
					-23,
					-20
				],
				[
					-47,
					-16
				],
				[
					-5,
					9
				],
				[
					31,
					28
				],
				[
					27,
					18
				],
				[
					29,
					33
				],
				[
					35,
					6
				],
				[
					14,
					25
				],
				[
					38,
					35
				],
				[
					6,
					12
				],
				[
					21,
					21
				],
				[
					5,
					44
				],
				[
					14,
					35
				],
				[
					-32,
					-18
				],
				[
					-9,
					11
				],
				[
					-15,
					-22
				],
				[
					-18,
					30
				],
				[
					-8,
					-21
				],
				[
					-10,
					29
				],
				[
					-28,
					-23
				],
				[
					-17,
					0
				],
				[
					-3,
					35
				],
				[
					5,
					21
				],
				[
					-17,
					22
				],
				[
					-37,
					-12
				],
				[
					-23,
					28
				],
				[
					-19,
					14
				],
				[
					0,
					34
				],
				[
					-22,
					25
				],
				[
					11,
					34
				],
				[
					23,
					33
				],
				[
					10,
					30
				],
				[
					22,
					4
				],
				[
					19,
					-9
				],
				[
					23,
					28
				],
				[
					20,
					-5
				],
				[
					21,
					19
				],
				[
					-5,
					27
				],
				[
					-16,
					10
				],
				[
					21,
					23
				],
				[
					-17,
					-1
				],
				[
					-30,
					-13
				],
				[
					-8,
					-13
				],
				[
					-22,
					13
				],
				[
					-39,
					-6
				],
				[
					-41,
					14
				],
				[
					-12,
					24
				],
				[
					-35,
					34
				],
				[
					39,
					25
				],
				[
					62,
					29
				],
				[
					23,
					0
				],
				[
					-4,
					-30
				],
				[
					59,
					2
				],
				[
					-23,
					37
				],
				[
					-34,
					23
				],
				[
					-20,
					29
				],
				[
					-26,
					25
				],
				[
					-38,
					19
				],
				[
					15,
					31
				],
				[
					49,
					2
				],
				[
					35,
					27
				],
				[
					7,
					29
				],
				[
					28,
					28
				],
				[
					28,
					6
				],
				[
					52,
					27
				],
				[
					26,
					-4
				],
				[
					42,
					31
				],
				[
					42,
					-12
				],
				[
					21,
					-27
				],
				[
					12,
					11
				],
				[
					47,
					-3
				],
				[
					-2,
					-14
				],
				[
					43,
					-10
				],
				[
					28,
					6
				],
				[
					59,
					-18
				],
				[
					53,
					-6
				],
				[
					21,
					-8
				],
				[
					37,
					10
				],
				[
					42,
					-18
				],
				[
					31,
					-8
				]
			],
			[
				[
					3018,
					5753
				],
				[
					-1,
					-14
				],
				[
					-16,
					-7
				],
				[
					9,
					-26
				],
				[
					0,
					-31
				],
				[
					-12,
					-35
				],
				[
					10,
					-47
				],
				[
					12,
					4
				],
				[
					6,
					43
				],
				[
					-8,
					21
				],
				[
					-2,
					45
				],
				[
					35,
					24
				],
				[
					-4,
					27
				],
				[
					10,
					19
				],
				[
					10,
					-41
				],
				[
					19,
					-1
				],
				[
					18,
					-33
				],
				[
					1,
					-20
				],
				[
					25,
					0
				],
				[
					30,
					6
				],
				[
					16,
					-27
				],
				[
					21,
					-7
				],
				[
					16,
					18
				],
				[
					0,
					15
				],
				[
					34,
					4
				],
				[
					34,
					1
				],
				[
					-24,
					-18
				],
				[
					10,
					-28
				],
				[
					22,
					-4
				],
				[
					21,
					-29
				],
				[
					4,
					-48
				],
				[
					15,
					2
				],
				[
					11,
					-14
				]
			],
			[
				[
					8001,
					6331
				],
				[
					-37,
					-51
				],
				[
					-24,
					-56
				],
				[
					-6,
					-41
				],
				[
					22,
					-62
				],
				[
					25,
					-77
				],
				[
					26,
					-37
				],
				[
					17,
					-47
				],
				[
					12,
					-109
				],
				[
					-3,
					-104
				],
				[
					-24,
					-39
				],
				[
					-31,
					-38
				],
				[
					-23,
					-49
				],
				[
					-35,
					-55
				],
				[
					-10,
					37
				],
				[
					8,
					40
				],
				[
					-21,
					34
				]
			],
			[
				[
					9661,
					4085
				],
				[
					-9,
					-8
				],
				[
					-9,
					26
				],
				[
					1,
					16
				],
				[
					17,
					-34
				]
			],
			[
				[
					9641,
					4175
				],
				[
					4,
					-47
				],
				[
					-7,
					7
				],
				[
					-6,
					-3
				],
				[
					-4,
					16
				],
				[
					0,
					45
				],
				[
					13,
					-18
				]
			],
			[
				[
					6475,
					6041
				],
				[
					-21,
					-16
				],
				[
					-5,
					-26
				],
				[
					-1,
					-20
				],
				[
					-27,
					-25
				],
				[
					-45,
					-28
				],
				[
					-24,
					-41
				],
				[
					-13,
					-3
				],
				[
					-8,
					3
				],
				[
					-16,
					-25
				],
				[
					-18,
					-11
				],
				[
					-23,
					-3
				],
				[
					-7,
					-3
				],
				[
					-6,
					-16
				],
				[
					-8,
					-4
				],
				[
					-4,
					-15
				],
				[
					-14,
					1
				],
				[
					-9,
					-8
				],
				[
					-19,
					3
				],
				[
					-7,
					35
				],
				[
					1,
					32
				],
				[
					-5,
					17
				],
				[
					-5,
					44
				],
				[
					-8,
					24
				],
				[
					5,
					3
				],
				[
					-2,
					27
				],
				[
					3,
					12
				],
				[
					-1,
					25
				]
			],
			[
				[
					5817,
					3752
				],
				[
					11,
					0
				],
				[
					14,
					-10
				],
				[
					9,
					7
				],
				[
					15,
					-6
				]
			],
			[
				[
					5911,
					3478
				],
				[
					-7,
					-43
				],
				[
					-3,
					-49
				],
				[
					-7,
					-27
				],
				[
					-19,
					-30
				],
				[
					-5,
					-8
				],
				[
					-12,
					-30
				],
				[
					-8,
					-31
				],
				[
					-16,
					-42
				],
				[
					-31,
					-61
				],
				[
					-20,
					-36
				],
				[
					-21,
					-26
				],
				[
					-29,
					-23
				],
				[
					-14,
					-3
				],
				[
					-3,
					-17
				],
				[
					-17,
					9
				],
				[
					-14,
					-11
				],
				[
					-30,
					11
				],
				[
					-17,
					-7
				],
				[
					-12,
					3
				],
				[
					-28,
					-23
				],
				[
					-24,
					-10
				],
				[
					-17,
					-22
				],
				[
					-13,
					-1
				],
				[
					-11,
					21
				],
				[
					-10,
					1
				],
				[
					-12,
					26
				],
				[
					-1,
					-8
				],
				[
					-4,
					16
				],
				[
					0,
					34
				],
				[
					-9,
					40
				],
				[
					9,
					11
				],
				[
					0,
					45
				],
				[
					-19,
					55
				],
				[
					-14,
					50
				],
				[
					0,
					1
				],
				[
					-20,
					76
				]
			],
			[
				[
					5840,
					4141
				],
				[
					-21,
					-8
				],
				[
					-15,
					-23
				],
				[
					-4,
					-21
				],
				[
					-10,
					-4
				],
				[
					-24,
					-49
				],
				[
					-15,
					-38
				],
				[
					-10,
					-2
				],
				[
					-9,
					7
				],
				[
					-31,
					7
				]
			]
		],
		"transform": {
			"scale": [
				0.036003600360036005,
				0.016927109488408608
			],
			"translate": [
				-180,
				-85.60903777459767
			]
		},
		"bbox": [
			-180,
			-85.60903777459767,
			180,
			83.64513000000001
		]
	};

/***/ }
/******/ ])
});
;