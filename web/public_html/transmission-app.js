(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/lodash.isequal/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.isequal/index.js"(exports, module) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var asyncTag = "[object AsyncFunction]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var nullTag = "[object Null]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var proxyTag = "[object Proxy]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var undefinedTag = "[object Undefined]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var Symbol2 = root.Symbol;
      var Uint8Array2 = root.Uint8Array;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var splice = arrayProto.splice;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var nativeKeys = overArg(Object.keys, Object);
      var DataView = getNative(root, "DataView");
      var Map2 = getNative(root, "Map");
      var Promise2 = getNative(root, "Promise");
      var Set2 = getNative(root, "Set");
      var WeakMap = getNative(root, "WeakMap");
      var nativeCreate = getNative(Object, "create");
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var stacked = stack.get(array);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var stacked = stack.get(object);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArguments = baseIsArguments(/* @__PURE__ */ function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      function isEqual2(value, other) {
        return baseIsEqual(value, other);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      module.exports = isEqual2;
    }
  });

  // src/action-manager.js
  var ActionManager = class _ActionManager extends EventTarget {
    constructor() {
      super();
      this.actions = Object.seal({
        "deselect-all": {
          enabled: false,
          shortcut: "D",
          text: "Deselect all"
        },
        "move-bottom": { enabled: false, text: "Move to the back of the queue" },
        "move-down": { enabled: false, text: "Move down in the queue" },
        "move-top": { enabled: false, text: "Move to the front of the queue" },
        "move-up": { enabled: false, text: "Move up in the queue" },
        "open-torrent": {
          enabled: true,
          shortcut: "O",
          text: "Open torrent\u2026"
        },
        "pause-all-torrents": { enabled: false, text: "Pause all" },
        "pause-selected-torrents": {
          enabled: false,
          shortcut: "U",
          text: "Pause"
        },
        "reannounce-selected-torrents": {
          enabled: false,
          text: "Ask tracker for more peers"
        },
        "remove-selected-torrents": { enabled: false, text: "Remove from list\u2026" },
        "resume-selected-torrents": {
          enabled: false,
          shortcut: "R",
          text: "Resume"
        },
        "resume-selected-torrents-now": { enabled: false, text: "Resume now" },
        "select-all": {
          enabled: false,
          shortcut: "A",
          text: "Select all"
        },
        "show-about-dialog": { enabled: true, text: "About" },
        "show-inspector": {
          enabled: false,
          shortcut: "I",
          text: "Torrent Inspector"
        },
        "show-labels-dialog": {
          enabled: false,
          shortcut: "K",
          text: "Edit Labels\u2026"
        },
        "show-move-dialog": {
          enabled: false,
          shortcut: "L",
          text: "Set location\u2026"
        },
        "show-overflow-menu": { enabled: true, text: "More options\u2026" },
        "show-preferences-dialog": {
          enabled: true,
          shortcut: "P",
          text: "Edit preferences"
        },
        "show-rename-dialog": {
          enabled: false,
          shortcut: "N",
          text: "Rename\u2026"
        },
        "show-shortcuts-dialog": { enabled: true, text: "Keyboard shortcuts" },
        "show-statistics-dialog": {
          enabled: true,
          shortcut: "S",
          text: "Statistics"
        },
        "start-all-torrents": { enabled: false, text: "Start all" },
        "toggle-compact-rows": { enabled: true, text: "Compact rows" },
        "toggle-contrast": { enabled: true, text: "High contrast UI" },
        "trash-selected-torrents": {
          enabled: false,
          text: "Trash data and remove from list\u2026"
        },
        "verify-selected-torrents": {
          enabled: false,
          shortcut: "V",
          text: "Verify local data"
        }
      });
    }
    click(name) {
      if (this.isEnabled(name)) {
        const event_ = new Event("click");
        event_.action = name;
        this.dispatchEvent(event_);
      }
    }
    getActionForShortcut(shortcut) {
      for (const [name, properties] of Object.entries(this.actions)) {
        if (shortcut === properties.shortcut) {
          return name;
        }
      }
      return null;
    }
    // return a map of shortcuts to action names
    allShortcuts() {
      return new Map(
        Object.entries(this.actions).filter(([, properties]) => properties.shortcut).map(([name, properties]) => [properties.shortcut, name])
      );
    }
    isEnabled(name) {
      return this._getAction(name).enabled;
    }
    text(name) {
      return this._getAction(name).text;
    }
    keyshortcuts(name) {
      return this._getAction(name).shortcut;
    }
    update(event_) {
      const counts = _ActionManager._recount(event_.selected, event_.nonselected);
      this._updateStates(counts);
    }
    _getAction(name) {
      const action = this.actions[name];
      if (!action) {
        throw new Error(`no such action: ${name}`);
      }
      return action;
    }
    static _recount(selected, nonselected) {
      const total = selected.length + nonselected.length;
      const selected_paused = selected.filter((tor) => tor.isStopped()).length;
      const selected_active = selected.length - selected_paused;
      const nonselected_paused = nonselected.filter(
        (tor) => tor.isStopped()
      ).length;
      const nonselected_active = nonselected.length - nonselected_paused;
      const paused = selected_paused + nonselected_paused;
      const active = selected_active + nonselected_active;
      const selected_queued = selected.filter((tor) => tor.isQueued()).length;
      return {
        active,
        nonselected_active,
        nonselected_paused,
        paused,
        selected: selected.length,
        selected_active,
        selected_paused,
        selected_queued,
        total
      };
    }
    _updateStates(counts) {
      const set_enabled = (enabled, actions) => {
        for (const action of actions) {
          this._updateActionState(action, enabled);
        }
      };
      set_enabled(counts.selected_paused > 0, ["resume-selected-torrents"]);
      set_enabled(counts.paused > 0, ["start-all-torrents"]);
      set_enabled(counts.active > 0, ["pause-all-torrents"]);
      set_enabled(counts.selected_paused > 0 || counts.selected_queued > 0, [
        "resume-selected-torrents-now"
      ]);
      set_enabled(counts.selected_active > 0, [
        "pause-selected-torrents",
        "reannounce-selected-torrents"
      ]);
      set_enabled(counts.selected > 0, [
        "deselect-all",
        "move-bottom",
        "move-down",
        "move-top",
        "move-up",
        "remove-selected-torrents",
        "show-inspector",
        "show-labels-dialog",
        "show-move-dialog",
        "trash-selected-torrents",
        "verify-selected-torrents"
      ]);
      set_enabled(counts.selected === 1, ["show-rename-dialog"]);
      set_enabled(counts.selected < counts.total, ["select-all"]);
    }
    _updateActionState(name, enabled) {
      const action = this.actions[name];
      if (!action) {
        throw new Error(`no such action: ${name}`);
      }
      if (action.enabled !== enabled) {
        action.enabled = enabled;
        const event = new Event("change");
        event.action = name;
        event.enabled = enabled;
        this.dispatchEvent(event);
      }
    }
  };

  // src/utils.js
  var import_lodash = __toESM(require_lodash());
  var Utils = {
    /** Given a numerator and denominator, return a ratio string */
    ratio(numerator, denominator) {
      let result = Math.floor(100 * numerator / denominator) / 100;
      if (result === Number.POSITIVE_INFINITY || result === Number.NEGATIVE_INFINITY) {
        result = -2;
      } else if (Number.isNaN(result)) {
        result = -1;
      }
      return result;
    }
  };
  function toggleClass(buttons, button, pages, page, callback) {
    for (const element of buttons.children) {
      element.classList.toggle("selected", element === button);
    }
    for (const element of pages.children) {
      element.classList.toggle("hidden", element !== page);
    }
    if (callback) {
      callback(page);
    }
  }
  function createTextualTabsContainer(id, tabs, callback) {
    const root = document.createElement("div");
    root.id = id;
    root.classList.add("tabs-container");
    const buttons = document.createElement("div");
    buttons.classList.add("tabs-buttons");
    root.append(buttons);
    const dismiss = document.createElement("button");
    dismiss.classList.add("tabs-container-close");
    dismiss.innerHTML = "&times;";
    root.append(dismiss);
    const pages = document.createElement("div");
    pages.classList.add("tabs-pages");
    root.append(pages);
    const button_array = [];
    for (const [button_id, page, tabname] of tabs) {
      const button = document.createElement("button");
      button.id = button_id;
      button.classList.add("tabs-button");
      button.setAttribute("type", "button");
      button.textContent = tabname;
      buttons.append(button);
      button_array.push(button);
      page.classList.add("hidden", "tabs-page");
      pages.append(page);
      button.addEventListener(
        "click",
        () => toggleClass(buttons, button, pages, page, callback)
      );
    }
    button_array[0].classList.add("selected");
    pages.children[0].classList.remove("hidden");
    return {
      buttons: button_array,
      dismiss,
      root
    };
  }
  function createDialogContainer(id) {
    const root = document.createElement("dialog");
    root.classList.add("dialog-container", "popup", id);
    root.open = true;
    root.setAttribute("role", "dialog");
    const win = document.createElement("div");
    win.classList.add("dialog-window");
    root.append(win);
    const logo = document.createElement("div");
    logo.classList.add("dialog-logo");
    win.append(logo);
    const heading = document.createElement("div");
    heading.classList.add("dialog-heading");
    win.append(heading);
    const message = document.createElement("div");
    message.classList.add("dialog-message");
    win.append(message);
    const workarea = document.createElement("div");
    workarea.classList.add("dialog-workarea");
    win.append(workarea);
    const buttons = document.createElement("div");
    buttons.classList.add("dialog-buttons");
    win.append(buttons);
    const bbegin = document.createElement("span");
    bbegin.classList.add("dialog-buttons-begin");
    buttons.append(bbegin);
    const dismiss = document.createElement("button");
    dismiss.classList.add("dialog-dismiss-button");
    dismiss.textContent = "Cancel";
    buttons.append(dismiss);
    const confirm2 = document.createElement("button");
    confirm2.textContent = "OK";
    buttons.append(confirm2);
    const bend = document.createElement("span");
    bend.classList.add("dialog-buttons-end");
    buttons.append(bend);
    return {
      confirm: confirm2,
      dismiss,
      heading,
      message,
      root,
      workarea
    };
  }
  function makeUUID() {
    if (typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return ("10000000-1000-4000-8000" + -1e11).replaceAll(
      /[018]/g,
      (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  function createSection(title) {
    const root = document.createElement("fieldset");
    root.classList.add("section");
    const legend = document.createElement("legend");
    legend.classList.add("title");
    legend.textContent = title;
    root.append(legend);
    const content = document.createElement("div");
    content.classList.add("content");
    root.append(content);
    return { content, root };
  }
  function createInfoSection(title, labels) {
    const children = [];
    const { root, content } = createSection(title);
    for (const label_text of labels) {
      const label_element = document.createElement("label");
      label_element.textContent = label_text;
      content.append(label_element);
      const item = document.createElement("div");
      item.id = makeUUID();
      content.append(item);
      label_element.setAttribute("for", item.id);
      children.push(item);
    }
    return { children, root };
  }
  function debounce(callback, wait = 100) {
    let timeout = null;
    return (...arguments_) => {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          callback(...arguments_);
        }, wait);
      }
    };
  }
  function deepEqual(a, b) {
    return (0, import_lodash.default)(a, b);
  }
  function setOrDeleteAttribute(element, attribute, b) {
    if (b) {
      element.setAttribute(attribute, true);
    } else {
      element.removeAttribute(attribute);
    }
  }
  function setEnabled(element, b) {
    setOrDeleteAttribute(element, "disabled", !b);
  }
  function addCheckedClass(element, b) {
    element.classList.toggle("checked", b);
  }
  var OutsideClickListener = class extends EventTarget {
    constructor(element) {
      super();
      this.listener = (event_) => {
        if (!element.contains(event_.target)) {
          this.dispatchEvent(new MouseEvent(event_.type, event_));
          event_.preventDefault();
        }
      };
      Object.seal(this);
      this.start();
    }
    start() {
      setTimeout(() => document.addEventListener("click", this.listener), 0);
    }
    stop() {
      document.removeEventListener("click", this.listener);
    }
  };
  function setTextContent(e, text) {
    if (e.textContent !== text) {
      e.textContent = text;
    }
  }

  // src/notifications.js
  var Notifications = class {
    constructor(prefs) {
      this._prefs = prefs;
      this._elements = {
        toggle: document.querySelector("#toggle-notifications")
      };
    }
    _setEnabled(enabled) {
      this.prefs.notifications_enabled = enabled;
      setTextContent(
        this._toggle,
        `${enabled ? "Disable" : "Enable"} Notifications`
      );
    }
    _requestPermission() {
      Notification.requestPermission().then(
        (s) => this._setEnabled(s === "granted")
      );
    }
    toggle() {
      if (this._enabled) {
        this._setEnabled(false);
      } else if (Notification.permission === "granted") {
        this._setEnabled(true);
      } else if (Notification.permission !== "denied") {
        this._requestPermission();
      }
    }
    /*
      // TODO:
      // $(transmission).bind('downloadComplete seedingComplete', (event, torrent) => {
      //  if (notificationsEnabled) {
          const title = `${event.type === 'downloadComplete' ? 'Download' : 'Seeding'} complete`;
          const content = torrent.getName();
          const notification = window.webkitNotifications.createNotification(
            'assets/img/logo.png',
            title,
            content
          );
          notification.show();
          setTimeout(() => {
            notification.cancel();
          }, 5000);
        }
      });
    */
  };

  // src/prefs.js
  var Prefs = class _Prefs extends EventTarget {
    constructor() {
      super();
      this._cache = {};
      this.dispatchPrefsChange = debounce((key, old_value, value) => {
        const event = new Event("change");
        Object.assign(event, { key, old_value, value });
        this.dispatchEvent(event);
      });
      for (const [key, default_value] of Object.entries(_Prefs._Defaults)) {
        this._set(key, _Prefs._getCookie(key, default_value));
        Object.defineProperty(this, key.replaceAll("-", "_"), {
          get: () => this._get(key),
          set: (value) => {
            this._set(key, value);
          }
        });
      }
      Object.seal(this);
    }
    entries() {
      return Object.entries(this._cache);
    }
    keys() {
      return Object.keys(this._cache);
    }
    _get(key) {
      const { _cache } = this;
      if (!Object.prototype.hasOwnProperty.call(_cache, key)) {
        throw new Error(key);
      }
      return _cache[key];
    }
    _set(key, value) {
      const { _cache } = this;
      const old_value = _cache[key];
      if (old_value !== value) {
        _cache[key] = value;
        _Prefs._setCookie(key, value);
        this.dispatchPrefsChange(key, old_value, value);
      }
    }
    static _setCookie(key, value) {
      const date = /* @__PURE__ */ new Date();
      date.setFullYear(date.getFullYear() + 1);
      document.cookie = `${key}=${value}; SameSite=Strict; expires=${date.toGMTString()}`;
    }
    static _getCookie(key, fallback) {
      const value = _Prefs._readCookie(key);
      if (value === null) {
        return fallback;
      }
      if (value === "true") {
        return true;
      }
      if (value === "false") {
        return false;
      }
      if (/^\d+$/.test(value)) {
        return Number.parseInt(value, 10);
      }
      return value;
    }
    static _readCookie(key) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${key}=`);
      return parts.length === 2 ? parts.pop().split(";").shift() : null;
    }
  };
  Prefs.AltSpeedEnabled = "alt-speed-enabled";
  Prefs.DisplayCompact = "compact";
  Prefs.DisplayFull = "full";
  Prefs.DisplayMode = "display-mode";
  Prefs.ContrastLess = "less";
  Prefs.ContrastMore = "more";
  Prefs.ContrastMode = "contrast-mode";
  Prefs.FilterActive = "active";
  Prefs.FilterAll = "all";
  Prefs.FilterDownloading = "downloading";
  Prefs.FilterFinished = "finished";
  Prefs.FilterMode = "filter-mode";
  Prefs.FilterPaused = "paused";
  Prefs.FilterSeeding = "seeding";
  Prefs.NotificationsEnabled = "notifications-enabled";
  Prefs.RefreshRate = "refresh-rate-sec";
  Prefs.SortAscending = "ascending";
  Prefs.SortByActivity = "activity";
  Prefs.SortByAge = "age";
  Prefs.SortByName = "name";
  Prefs.SortByProgress = "progress";
  Prefs.SortByQueue = "queue";
  Prefs.SortByRatio = "ratio";
  Prefs.SortBySize = "size";
  Prefs.SortByState = "state";
  Prefs.SortDescending = "descending";
  Prefs.SortDirection = "sort-direction";
  Prefs.SortMode = "sort-mode";
  Prefs.GroupByPath = "group-by-path";
  Prefs._Defaults = {
    [Prefs.AltSpeedEnabled]: false,
    [Prefs.DisplayMode]: Prefs.DisplayFull,
    [Prefs.ContrastMode]: window.matchMedia("(prefers-contrast: more)").matches ? Prefs.ContrastMore : Prefs.ContrastLess,
    [Prefs.FilterMode]: Prefs.FilterAll,
    [Prefs.NotificationsEnabled]: false,
    [Prefs.RefreshRate]: 5,
    [Prefs.SortDirection]: Prefs.SortAscending,
    [Prefs.SortMode]: Prefs.SortByName,
    [Prefs.GroupByPath]: false
  };

  // src/about-dialog.js
  var AboutDialog = class _AboutDialog extends EventTarget {
    constructor(version_info) {
      super();
      this.elements = _AboutDialog._create(version_info);
      this.elements.dismiss.addEventListener("click", () => this.close());
      document.body.append(this.elements.root);
      this.elements.dismiss.focus();
    }
    close() {
      this.elements.root.remove();
      this.dispatchEvent(new Event("close"));
      delete this.elements;
    }
    static _create(version_info) {
      const elements = createDialogContainer("about-dialog");
      elements.root.setAttribute("aria-label", "About transmission");
      elements.heading.textContent = "Transmission";
      elements.dismiss.textContent = "Close";
      let e = document.createElement("div");
      e.classList.add("about-dialog-version-number");
      e.textContent = version_info.version;
      elements.heading.append(e);
      e = document.createElement("div");
      e.classList.add("about-dialog-version-checksum");
      e.textContent = version_info.checksum;
      elements.heading.append(e);
      e = document.createElement("div");
      e.textContent = "A fast and easy bitTorrent client";
      elements.workarea.append(e);
      e = document.createElement("div");
      e.textContent = "Copyright \xA9 The Transmission Project";
      elements.workarea.append(e);
      e = document.createElement("a");
      e.href = "https://transmissionbt.com/";
      e.target = "_blank";
      e.textContent = "https://transmissionbt.com/";
      elements.workarea.append(e);
      elements.confirm.remove();
      delete elements.confirm;
      return elements;
    }
  };

  // src/context-menu.js
  var ContextMenu = class extends EventTarget {
    constructor(action_manager) {
      super();
      this.action_listener = this._update.bind(this);
      this.action_manager = action_manager;
      this.action_manager.addEventListener("change", this.action_listener);
      Object.assign(this, this._create());
      this.show();
    }
    show() {
      for (const [action, item] of Object.entries(this.actions)) {
        setEnabled(item, this.action_manager.isEnabled(action));
      }
      document.body.append(this.root);
    }
    close() {
      if (!this.closed) {
        this.action_manager.removeEventListener("change", this.action_listener);
        this.root.remove();
        this.dispatchEvent(new Event("close"));
        for (const key of Object.keys(this)) {
          delete this[key];
        }
        this.closed = true;
      }
    }
    _update(event_) {
      const e = this.actions[event_.action];
      if (e) {
        setEnabled(e, event_.enabled);
      }
    }
    _create() {
      const root = document.createElement("div");
      root.role = "menu";
      root.classList.add("context-menu", "popup");
      root.addEventListener("contextmenu", (e_) => {
        e_.preventDefault();
      });
      root.style.pointerEvents = "none";
      const actions = {};
      const add_item = (action, warn = false) => {
        const item = document.createElement("div");
        const text = this.action_manager.text(action);
        item.role = "menuitem";
        if (warn) {
          item.classList.add("context-menuitem", "warning");
        } else {
          item.classList.add("context-menuitem");
        }
        item.dataset.action = action;
        item.textContent = text;
        const keyshortcuts = this.action_manager.keyshortcuts(action);
        if (keyshortcuts) {
          item.setAttribute("aria-keyshortcuts", keyshortcuts);
        }
        item.addEventListener("click", () => {
          this.action_manager.click(action);
          this.close();
        });
        actions[action] = item;
        root.append(item);
      };
      const add_separator = () => {
        const item = document.createElement("div");
        item.classList.add("context-menu-separator");
        root.append(item);
      };
      add_item("resume-selected-torrents");
      add_item("resume-selected-torrents-now");
      add_item("pause-selected-torrents");
      add_separator();
      add_item("move-top");
      add_item("move-up");
      add_item("move-down");
      add_item("move-bottom");
      add_separator();
      add_item("remove-selected-torrents", true);
      add_item("trash-selected-torrents", true);
      add_separator();
      add_item("verify-selected-torrents");
      add_item("show-move-dialog");
      add_item("show-rename-dialog");
      add_item("show-labels-dialog");
      add_separator();
      add_item("reannounce-selected-torrents");
      add_separator();
      add_item("select-all");
      add_item("deselect-all");
      return { actions, root };
    }
  };

  // src/formatter.js
  var plural_rules = new Intl.PluralRules();
  var current_locale = plural_rules.resolvedOptions().locale;
  var number_format = new Intl.NumberFormat(current_locale);
  var kilo = 1e3;
  var mem_formatters = [
    new Intl.NumberFormat(current_locale, {
      maximumFractionDigits: 0,
      style: "unit",
      unit: "byte"
    }),
    new Intl.NumberFormat(current_locale, {
      maximumFractionDigits: 0,
      style: "unit",
      unit: "kilobyte"
    }),
    new Intl.NumberFormat(current_locale, {
      maximumFractionDigits: 0,
      style: "unit",
      unit: "megabyte"
    }),
    new Intl.NumberFormat(current_locale, {
      maximumFractionDigits: 2,
      style: "unit",
      unit: "gigabyte"
    }),
    new Intl.NumberFormat(current_locale, {
      maximumFractionDigits: 2,
      style: "unit",
      unit: "terabyte"
    }),
    new Intl.NumberFormat(current_locale, {
      maximumFractionDigits: 2,
      style: "unit",
      unit: "petabyte"
    })
  ];
  var fmt_kBps = new Intl.NumberFormat(current_locale, {
    maximumFractionDigits: 2,
    style: "unit",
    unit: "kilobyte-per-second"
  });
  var fmt_MBps = new Intl.NumberFormat(current_locale, {
    maximumFractionDigits: 2,
    style: "unit",
    unit: "megabyte-per-second"
  });
  var Formatter = {
    /** Round a string of a number to a specified number of decimal places */
    _toTruncFixed(number, places) {
      const returnValue = Math.floor(number * 10 ** places) / 10 ** places;
      return returnValue.toFixed(places);
    },
    countString(msgid, msgid_plural, n) {
      return `${this.number(n)} ${this.ngettext(msgid, msgid_plural, n)}`;
    },
    // Formats a memory size into a human-readable string
    // @param {Number} bytes the filesize in bytes
    // @return {String} human-readable string
    mem(bytes) {
      if (bytes < 0) {
        return "Unknown";
      }
      if (bytes === 0) {
        return "None";
      }
      let size = bytes;
      for (const nf of mem_formatters) {
        if (size < kilo) {
          return nf.format(size);
        }
        size /= kilo;
      }
      return "E2BIG";
    },
    ngettext(msgid, msgid_plural, n) {
      return plural_rules.select(n) === "one" ? msgid : msgid_plural;
    },
    number(number) {
      return number_format.format(number);
    },
    // format a percentage to a string
    percentString(x) {
      const decimal_places = x < 100 ? 1 : 0;
      return this._toTruncFixed(x, decimal_places);
    },
    /*
     *   Format a ratio to a string
     */
    ratioString(x) {
      if (x === -1) {
        return "None";
      }
      if (x === -2) {
        return "&infin;";
      }
      return this.percentString(x);
    },
    /**
     * Formats a disk capacity or file size into a human-readable string
     * @param {Number} bytes the filesize in bytes
     * @return {String} human-readable string
     */
    size(bytes) {
      return this.mem(bytes);
    },
    speed(KBps) {
      return KBps < 999.95 ? fmt_kBps.format(KBps) : fmt_MBps.format(KBps / 1e3);
    },
    speedBps(Bps) {
      return this.speed(this.toKBps(Bps));
    },
    stringSanitizer(str) {
      return ["E2BIG", "NaN"].some((badStr) => str.includes(badStr)) ? `\u2026` : str;
    },
    timeInterval(seconds, granular_depth = 3) {
      const days = Math.floor(seconds / 86400);
      let buffer = [];
      if (days) {
        buffer.push(this.countString("day", "days", days));
      }
      const hours = Math.floor(seconds % 86400 / 3600);
      if (days || hours) {
        buffer.push(this.countString("hour", "hours", hours));
      }
      const minutes = Math.floor(seconds % 3600 / 60);
      if (days || hours || minutes) {
        buffer.push(this.countString("minute", "minutes", minutes));
        buffer = buffer.slice(0, granular_depth);
        return buffer.length > 1 ? `${buffer.slice(0, -1).join(", ")} and ${buffer.slice(-1)}` : buffer[0];
      }
      return this.countString("second", "seconds", Math.floor(seconds % 60));
    },
    timestamp(seconds) {
      if (!seconds) {
        return "N/A";
      }
      const myDate = new Date(seconds * 1e3);
      const now = /* @__PURE__ */ new Date();
      let date = "";
      let time = "";
      const sameYear = now.getFullYear() === myDate.getFullYear();
      const sameMonth = now.getMonth() === myDate.getMonth();
      const dateDiff = now.getDate() - myDate.getDate();
      if (sameYear && sameMonth && Math.abs(dateDiff) <= 1) {
        if (dateDiff === 0) {
          date = "Today";
        } else if (dateDiff === 1) {
          date = "Yesterday";
        } else {
          date = "Tomorrow";
        }
      } else {
        date = myDate.toDateString();
      }
      let hours = myDate.getHours();
      let period = "AM";
      if (hours > 12) {
        hours = hours - 12;
        period = "PM";
      }
      if (hours === 0) {
        hours = 12;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = myDate.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      seconds = myDate.getSeconds();
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      time = [hours, minutes, seconds].join(":");
      return [date, time, period].join(" ");
    },
    toKBps(Bps) {
      return Math.floor(Bps / kilo);
    }
  };

  // src/file-row.js
  var FileRow = class extends EventTarget {
    isDone() {
      return this.fields.have >= this.fields.size;
    }
    isEditable() {
      return this.fields.torrent.getFileCount() > 1 && !this.isDone();
    }
    refreshWantedHTML() {
      const e = this.elements.root;
      e.classList.toggle("skip", !this.fields.isWanted);
      e.classList.toggle("complete", this.isDone());
      setEnabled(e.checkbox, this.isEditable());
      e.checkbox.checked = this.fields.isWanted;
    }
    refreshProgressHTML() {
      const { size, have } = this.fields;
      const pct = 100 * (size ? have / size : 1);
      const fmt = Formatter;
      const c = `${fmt.size(have)} of ${fmt.size(size)} (${fmt.percentString(
        pct
      )}%)`;
      setTextContent(this.elements.progress, c);
    }
    refresh() {
      let have = 0;
      let high = false;
      let low = false;
      let normal = false;
      let size = 0;
      let wanted = false;
      const files = this.fields.torrent.getFiles();
      for (const index of this.fields.indices) {
        const file = files[index];
        have += file.bytesCompleted;
        size += file.length;
        wanted |= file.wanted;
        switch (file.priority.toString()) {
          case "-1":
            low = true;
            break;
          case "1":
            high = true;
            break;
          default:
            normal = true;
            break;
        }
      }
      addCheckedClass(this.elements.priority_low_button, low);
      addCheckedClass(this.elements.priority_normal_button, normal);
      addCheckedClass(this.elements.priority_high_button, high);
      if (this.fields.have !== have || this.fields.size !== size) {
        this.fields.have = have;
        this.fields.size = size;
        this.refreshProgressHTML();
      }
      if (this.fields.isWanted !== wanted) {
        this.fields.isWanted = wanted;
        this.refreshWantedHTML();
      }
    }
    fireWantedChanged(wanted) {
      const e = new Event("wantedToggled");
      e.indices = [...this.fields.indices];
      e.wanted = wanted;
      this.dispatchEvent(e);
    }
    firePriorityChanged(priority) {
      const e = new Event("priorityToggled");
      e.indices = [...this.fields.indices];
      e.priority = priority;
      this.dispatchEvent(e);
    }
    createRow(torrent, depth, name) {
      const root = document.createElement("li");
      root.classList.add("inspector-torrent-file-list-entry");
      this.elements.root = root;
      let e = document.createElement("input");
      const check_id = makeUUID();
      e.type = "checkbox";
      e.className = "file-wanted-control";
      e.title = "Download file";
      e.id = check_id;
      e.addEventListener(
        "change",
        (event_) => this.fireWantedChanged(event_.target.checked)
      );
      root.checkbox = e;
      root.append(e);
      e = document.createElement("label");
      e.className = "inspector-torrent-file-list-entry-name";
      e.setAttribute("for", check_id);
      setTextContent(e, name);
      root.append(e);
      e = document.createElement("div");
      e.className = "inspector-torrent-file-list-entry-progress";
      root.append(e);
      this.elements.progress = e;
      e = document.createElement("div");
      e.className = "file-priority-radiobox";
      const box = e;
      const priority_click_listener = (event_) => this.firePriorityChanged(event_.target.value);
      e = document.createElement("input");
      e.type = "radio";
      e.value = "-1";
      e.className = "low";
      e.title = "Low Priority";
      e.addEventListener("click", priority_click_listener);
      this.elements.priority_low_button = e;
      box.append(e);
      e = document.createElement("input");
      e.type = "radio";
      e.value = "0";
      e.className = "normal";
      e.title = "Normal Priority";
      e.addEventListener("click", priority_click_listener);
      this.elements.priority_normal_button = e;
      box.append(e);
      e = document.createElement("input");
      e.type = "radio";
      e.value = "1";
      e.title = "High Priority";
      e.className = "high";
      e.addEventListener("click", priority_click_listener);
      this.elements.priority_high_button = e;
      box.append(e);
      root.append(box);
      root.style.paddingLeft = `${depth * 20}px`;
      this.refresh();
    }
    /// PUBLIC
    getElement() {
      return this.elements.root;
    }
    constructor(torrent, depth, name, indices) {
      super();
      this.fields = {
        have: 0,
        indices,
        isWanted: true,
        // priorityHigh: false,
        // priorityLow: false,
        // priorityNormal: false,
        size: 0,
        torrent
      };
      this.elements = {
        priority_high_button: null,
        priority_low_button: null,
        priority_normal_button: null,
        progress: null,
        root: null
      };
      this.createRow(torrent, depth, name);
    }
  };

  // src/torrent.js
  var Torrent = class _Torrent extends EventTarget {
    constructor(data) {
      super();
      this.fieldObservers = {};
      this.fields = {};
      this.refresh(data);
    }
    notifyOnFieldChange(field, callback) {
      this.fieldObservers[field] = this.fieldObservers[field] || [];
      this.fieldObservers[field].push(callback);
    }
    setField(o, name, value) {
      const old_value = o[name];
      if (deepEqual(old_value, value)) {
        return false;
      }
      const observers = this.fieldObservers[name];
      if (o === this.fields && observers && observers.length > 0) {
        for (const observer of observers) {
          observer.call(this, value, old_value, name);
        }
      }
      o[name] = value;
      return true;
    }
    // fields.files is an array of unions of RPC's "files" and "fileStats" objects.
    updateFiles(files) {
      let changed = false;
      const myfiles = this.fields.files || [];
      const keys = ["length", "name", "bytesCompleted", "wanted", "priority"];
      for (const [index, f] of files.entries()) {
        const myfile = myfiles[index] || {};
        for (const key of keys) {
          if (key in f) {
            changed |= this.setField(myfile, key, f[key]);
          }
        }
        myfiles[index] = myfile;
      }
      this.fields.files = myfiles;
      return changed;
    }
    static collateTrackers(trackers) {
      return trackers.map((t) => t.announce.toLowerCase()).join("	");
    }
    refreshFields(data) {
      let changed = false;
      for (const [key, value] of Object.entries(data)) {
        switch (key) {
          case "files":
          case "fileStats":
            changed |= this.updateFiles(value);
            break;
          case "trackerStats":
            changed |= this.setField(this.fields, "trackers", value);
            break;
          case "trackers":
            if (!(key in this.fields)) {
              changed |= this.setField(this.fields, key, value);
            }
            break;
          case "name":
            if (this.setField(this.fields, key, data[key])) {
              this.fields.collatedName = "";
              changed = true;
            }
            break;
          default:
            changed |= this.setField(this.fields, key, value);
        }
      }
      return changed;
    }
    refresh(data) {
      if (this.refreshFields(data)) {
        this.dispatchEvent(new Event("dataChanged"));
      }
    }
    ///
    // simple accessors
    getComment() {
      return this.fields.comment;
    }
    getCreator() {
      return this.fields.creator;
    }
    getDateAdded() {
      return this.fields.addedDate;
    }
    getDateCreated() {
      return this.fields.dateCreated;
    }
    getDesiredAvailable() {
      return this.fields.desiredAvailable;
    }
    getDownloadDir() {
      return this.fields.downloadDir;
    }
    getDownloadSpeed() {
      return this.fields.rateDownload;
    }
    getDownloadedEver() {
      return this.fields.downloadedEver;
    }
    getError() {
      return this.fields.error;
    }
    getErrorString() {
      return this.fields.errorString;
    }
    getETA() {
      return this.fields.eta;
    }
    getFailedEver() {
      return this.fields.corruptEver;
    }
    getFiles() {
      return this.fields.files || [];
    }
    getFile(index) {
      return this.fields.files[index];
    }
    getFileCount() {
      return this.fields["file-count"];
    }
    getHashString() {
      return this.fields.hashString;
    }
    getHave() {
      return this.getHaveValid() + this.getHaveUnchecked();
    }
    getHaveUnchecked() {
      return this.fields.haveUnchecked;
    }
    getHaveValid() {
      return this.fields.haveValid;
    }
    getId() {
      return this.fields.id;
    }
    getLabels() {
      return this.fields.labels.sort();
    }
    getLastActivity() {
      return this.fields.activityDate;
    }
    getLeftUntilDone() {
      return this.fields.leftUntilDone;
    }
    getMagnetLink() {
      return this.fields.magnetLink;
    }
    getMetadataPercentComplete() {
      return this.fields.metadataPercentComplete;
    }
    getName() {
      return this.fields.name || "Unknown";
    }
    getPeers() {
      return this.fields.peers || [];
    }
    getPeersConnected() {
      return this.fields.peersConnected;
    }
    getPeersGettingFromUs() {
      return this.fields.peersGettingFromUs;
    }
    getPeersSendingToUs() {
      return this.fields.peersSendingToUs;
    }
    getPieceCount() {
      return this.fields.pieceCount;
    }
    getPieceSize() {
      return this.fields.pieceSize;
    }
    getPrimaryMimeType() {
      return this.fields["primary-mime-type"] || "application/octet-stream";
    }
    getPrivateFlag() {
      return this.fields.isPrivate;
    }
    getQueuePosition() {
      return this.fields.queuePosition;
    }
    getRecheckProgress() {
      return this.fields.recheckProgress;
    }
    getSeedRatioLimit() {
      return this.fields.seedRatioLimit;
    }
    getSeedRatioMode() {
      return this.fields.seedRatioMode;
    }
    getSizeWhenDone() {
      return this.fields.sizeWhenDone;
    }
    getStartDate() {
      return this.fields.startDate;
    }
    getStatus() {
      return this.fields.status;
    }
    getTotalSize() {
      return this.fields.totalSize;
    }
    getTrackers() {
      return this.fields.trackers || [];
    }
    getUploadSpeed() {
      return this.fields.rateUpload;
    }
    getUploadRatio() {
      return this.fields.uploadRatio;
    }
    getUploadedEver() {
      return this.fields.uploadedEver;
    }
    getWebseedsSendingToUs() {
      return this.fields.webseedsSendingToUs;
    }
    isFinished() {
      return this.fields.isFinished;
    }
    // derived accessors
    hasExtraInfo() {
      return "hashString" in this.fields;
    }
    isSeeding() {
      return this.getStatus() === _Torrent._StatusSeed;
    }
    isStopped() {
      return this.getStatus() === _Torrent._StatusStopped;
    }
    isChecking() {
      return this.getStatus() === _Torrent._StatusCheck;
    }
    isDownloading() {
      return this.getStatus() === _Torrent._StatusDownload;
    }
    isQueued() {
      return this.getStatus() === _Torrent._StatusDownloadWait || this.getStatus() === _Torrent._StatusSeedWait;
    }
    isDone() {
      return this.getLeftUntilDone() < 1;
    }
    needsMetaData() {
      return this.getMetadataPercentComplete() < 1;
    }
    getActivity() {
      return this.getDownloadSpeed() + this.getUploadSpeed();
    }
    getPercentDoneStr() {
      return Formatter.percentString(100 * this.getPercentDone());
    }
    getPercentDone() {
      return this.fields.percentDone;
    }
    getStateString() {
      switch (this.getStatus()) {
        case _Torrent._StatusStopped:
          return this.isFinished() ? "Seeding complete" : "Paused";
        case _Torrent._StatusCheckWait:
          return "Queued for verification";
        case _Torrent._StatusCheck:
          return "Verifying local data";
        case _Torrent._StatusDownloadWait:
          return "Queued for download";
        case _Torrent._StatusDownload:
          return "Downloading";
        case _Torrent._StatusSeedWait:
          return "Queued for seeding";
        case _Torrent._StatusSeed:
          return "Seeding";
        case null:
          return "Unknown";
        default:
          return "Error";
      }
    }
    seedRatioLimit(controller) {
      switch (this.getSeedRatioMode()) {
        case _Torrent._RatioUseGlobal:
          return controller.seedRatioLimit();
        case _Torrent._RatioUseLocal:
          return this.getSeedRatioLimit();
        default:
          return -1;
      }
    }
    getErrorMessage() {
      const string = this.getErrorString();
      switch (this.getError()) {
        case _Torrent._ErrTrackerWarning:
          return `Tracker returned a warning: ${string}`;
        case _Torrent._ErrTrackerError:
          return `Tracker returned an error: ${string}`;
        case _Torrent._ErrLocalError:
          return `Error: ${string}`;
        default:
          return null;
      }
    }
    getCollatedName() {
      const f = this.fields;
      if (!f.collatedName && f.name) {
        f.collatedName = f.name.toLowerCase();
      }
      return f.collatedName || "";
    }
    getCollatedTrackers() {
      const f = this.fields;
      if (!f.collatedTrackers && f.trackers) {
        f.collatedTrackers = _Torrent.collateTrackers(f.trackers);
      }
      return f.collatedTrackers || "";
    }
    /****
     *****
     ****/
    testState(state) {
      const s = this.getStatus();
      switch (state) {
        case Prefs.FilterActive:
          return this.getPeersGettingFromUs() > 0 || this.getPeersSendingToUs() > 0 || this.getWebseedsSendingToUs() > 0 || this.isChecking();
        case Prefs.FilterSeeding:
          return s === _Torrent._StatusSeed || s === _Torrent._StatusSeedWait;
        case Prefs.FilterDownloading:
          return s === _Torrent._StatusDownload || s === _Torrent._StatusDownloadWait;
        case Prefs.FilterPaused:
          return this.isStopped();
        case Prefs.FilterFinished:
          return this.isFinished();
        default:
          return true;
      }
    }
    /**
     * @param state one of Prefs.Filter*
     * @param tracker tracker name
     * @param search substring to look for, or null
     * @param labels array of labels. Empty array matches all.
     * @return true if it passes the test, false if it fails
     */
    test(state, tracker, search, labels) {
      let pass = this.testState(state);
      if (pass && search) {
        pass = this.getCollatedName().includes(search.toLowerCase());
      }
      if (pass) {
        const torrent_labels = this.getLabels();
        if (labels.length > 0) {
          pass = labels.some((label) => torrent_labels.includes(label));
        }
      }
      if (pass && tracker && tracker.length > 0) {
        pass = this.getCollatedTrackers().includes(tracker);
      }
      return pass;
    }
    static compareById(ta, tb) {
      return ta.getId() - tb.getId();
    }
    static compareByName(ta, tb) {
      return ta.getCollatedName().localeCompare(tb.getCollatedName()) || _Torrent.compareById(ta, tb);
    }
    static compareByQueue(ta, tb) {
      return ta.getQueuePosition() - tb.getQueuePosition();
    }
    static compareByAge(ta, tb) {
      const a = ta.getDateAdded();
      const b = tb.getDateAdded();
      return b - a || _Torrent.compareByQueue(ta, tb);
    }
    static compareByState(ta, tb) {
      const a = ta.getStatus();
      const b = tb.getStatus();
      return b - a || _Torrent.compareByQueue(ta, tb);
    }
    static compareByActivity(ta, tb) {
      const a = ta.getActivity();
      const b = tb.getActivity();
      return b - a || _Torrent.compareByState(ta, tb);
    }
    static compareByRatio(ta, tb) {
      const a = ta.getUploadRatio();
      const b = tb.getUploadRatio();
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return _Torrent.compareByState(ta, tb);
    }
    static compareByProgress(ta, tb) {
      const a = ta.getPercentDone();
      const b = tb.getPercentDone();
      return a - b || _Torrent.compareByRatio(ta, tb);
    }
    static compareBySize(ta, tb) {
      const a = ta.getTotalSize();
      const b = tb.getTotalSize();
      return a - b || _Torrent.compareByName(ta, tb);
    }
    static compareByPath(ta, tb) {
      const a = ta.getDownloadDir();
      const b = tb.getDownloadDir();
      return a.localeCompare(b);
    }
    static getComparer(sortMode, sortDirection, groupByPath) {
      let comparer = null;
      switch (sortMode) {
        case Prefs.SortByActivity:
          comparer = _Torrent.compareByActivity;
          break;
        case Prefs.SortByAge:
          comparer = _Torrent.compareByAge;
          break;
        case Prefs.SortByQueue:
          comparer = _Torrent.compareByQueue;
          break;
        case Prefs.SortByProgress:
          comparer = _Torrent.compareByProgress;
          break;
        case Prefs.SortBySize:
          comparer = _Torrent.compareBySize;
          break;
        case Prefs.SortByState:
          comparer = _Torrent.compareByState;
          break;
        case Prefs.SortByRatio:
          comparer = _Torrent.compareByRatio;
          break;
        case Prefs.SortByName:
          comparer = _Torrent.compareByName;
          break;
        default:
          console.log(`Unrecognized sort mode: ${sortMode}`);
          comparer = _Torrent.compareByName;
          break;
      }
      if (sortDirection === Prefs.SortDescending) {
        const innerComparer = comparer;
        comparer = (a, b) => -innerComparer(a, b);
      }
      if (groupByPath) {
        const innerComparer = comparer;
        comparer = (a, b) => this.compareByPath(a, b) || innerComparer(a, b);
      }
      return comparer;
    }
    static compareTorrents(a, b, sortMode, sortDirection, groupByPath) {
      return _Torrent.getComparer(sortMode, sortDirection, groupByPath)(a, b);
    }
    /**
     * @param torrents an array of Torrent objects
     * @param sortMode one of Prefs.SortBy*
     * @param sortDirection Prefs.SortAscending or Prefs.SortDescending
     * @param groupByPath boolean
     */
    static sortTorrents(torrents, sortMode, sortDirection, groupByPath) {
      const comparer = _Torrent.getComparer(sortMode, sortDirection, groupByPath);
      torrents.sort(comparer);
      return torrents;
    }
  };
  Torrent._StatusStopped = 0;
  Torrent._StatusCheckWait = 1;
  Torrent._StatusCheck = 2;
  Torrent._StatusDownloadWait = 3;
  Torrent._StatusDownload = 4;
  Torrent._StatusSeedWait = 5;
  Torrent._StatusSeed = 6;
  Torrent._RatioUseGlobal = 0;
  Torrent._RatioUseLocal = 1;
  Torrent._RatioUnlimited = 2;
  Torrent._ErrNone = 0;
  Torrent._ErrTrackerWarning = 1;
  Torrent._ErrTrackerError = 2;
  Torrent._ErrLocalError = 3;
  Torrent._TrackerInactive = 0;
  Torrent._TrackerWaiting = 1;
  Torrent._TrackerQueued = 2;
  Torrent._TrackerActive = 3;
  Torrent.Fields = {};
  Torrent.Fields.Metadata = [
    "addedDate",
    "file-count",
    "name",
    "primary-mime-type",
    "totalSize"
  ];
  Torrent.Fields.Stats = [
    "error",
    "errorString",
    "eta",
    "isFinished",
    "isStalled",
    "labels",
    "leftUntilDone",
    "metadataPercentComplete",
    "peersConnected",
    "peersGettingFromUs",
    "peersSendingToUs",
    "percentDone",
    "queuePosition",
    "rateDownload",
    "rateUpload",
    "recheckProgress",
    "seedRatioMode",
    "seedRatioLimit",
    "sizeWhenDone",
    "status",
    "trackers",
    "downloadDir",
    "uploadedEver",
    "uploadRatio",
    "webseedsSendingToUs"
  ];
  Torrent.Fields.InfoExtra = [
    "comment",
    "creator",
    "dateCreated",
    "files",
    "hashString",
    "isPrivate",
    "magnetLink",
    "pieceCount",
    "pieceSize"
  ];
  Torrent.Fields.StatsExtra = [
    "activityDate",
    "corruptEver",
    "desiredAvailable",
    "downloadedEver",
    "fileStats",
    "haveUnchecked",
    "haveValid",
    "peers",
    "startDate",
    "trackerStats"
  ];

  // src/inspector.js
  var peer_column_classes = [
    "encryption",
    "speed-up",
    "speed-down",
    "percent-done",
    "status",
    "peer-address",
    "peer-app-name"
  ];
  var Inspector = class _Inspector extends EventTarget {
    constructor(controller) {
      super();
      this.closed = false;
      this.controller = controller;
      this.elements = this._create();
      this.current_page = this.elements.info.root;
      this.interval = setInterval(this._refreshTorrents.bind(this), 3e3);
      this.name = "inspector";
      this.selection_listener = (event_) => this._setTorrents(event_.selected);
      this.torrent_listener = () => this._updateCurrentPage();
      this.torrents = [];
      this.file_torrent = null;
      this.file_torrent_n = null;
      this.file_rows = null;
      this.elements.dismiss.addEventListener("click", () => this.close());
      Object.seal(this);
      controller.addEventListener(
        "torrent-selection-changed",
        this.selection_listener
      );
      this._setTorrents(this.controller.getSelectedTorrents());
      document.body.append(this.elements.root);
    }
    close() {
      if (!this.closed) {
        clearInterval(this.interval);
        this._setTorrents([]);
        this.elements.root.remove();
        this.controller.removeEventListener(
          "torrent-selection-changed",
          this.selection_listener
        );
        this.dispatchEvent(new Event("close"));
        for (const property of Object.keys(this)) {
          this[property] = null;
        }
        this.closed = true;
      }
    }
    static _createInfoPage() {
      const root = document.createElement("div");
      root.classList.add("inspector-info-page");
      const elements = { root };
      const append_section_title = (text) => {
        const label = document.createElement("div");
        label.textContent = text;
        label.classList.add("section-label");
        root.append(label);
      };
      const append_row = (text) => {
        const lhs = document.createElement("label");
        setTextContent(lhs, text);
        root.append(lhs);
        const rhs = document.createElement("span");
        root.append(rhs);
        return rhs;
      };
      append_section_title("Activity");
      let rows = [
        ["have", "Have:"],
        ["availability", "Availability:"],
        ["uploaded", "Uploaded:"],
        ["downloaded", "Downloaded:"],
        ["state", "State:"],
        ["running_time", "Running time:"],
        ["remaining_time", "Remaining:"],
        ["last_activity", "Last activity:"],
        ["error", "Error:"]
      ];
      for (const [name, text] of rows) {
        elements[name] = append_row(text);
      }
      append_section_title("Details");
      rows = [
        ["size", "Size:"],
        ["location", "Location:"],
        ["hash", "Hash:"],
        ["privacy", "Privacy:"],
        ["origin", "Origin:"],
        ["dateAdded", "Date added:"],
        ["magnetLink", "Magnet:"],
        ["comment", "Comment:"],
        ["labels", "Labels:"]
      ];
      for (const [name, text] of rows) {
        elements[name] = append_row(text);
      }
      return elements;
    }
    static _createListPage(list_type, list_id) {
      const root = document.createElement("div");
      const list = document.createElement(list_type);
      list.id = list_id;
      root.append(list);
      return { list, root };
    }
    static _createTiersPage() {
      return _Inspector._createListPage("div", "inspector-tiers-list");
    }
    static _createFilesPage() {
      return _Inspector._createListPage("ul", "inspector-file-list");
    }
    static _createPeersPage() {
      const table = document.createElement("table");
      table.classList.add("peer-list");
      const thead = document.createElement("thead");
      const tr = document.createElement("tr");
      const names = ["", "Up", "Down", "Done", "Status", "Address", "Client"];
      for (const [index, name] of names.entries()) {
        const th = document.createElement("th");
        const classname = peer_column_classes[index];
        if (classname === "encryption") {
          th.dataset.encrypted = true;
        }
        th.classList.add(classname);
        setTextContent(th, name);
        tr.append(th);
      }
      const tbody = document.createElement("tbody");
      thead.append(tr);
      table.append(thead);
      table.append(tbody);
      return {
        root: table,
        tbody
      };
    }
    _create() {
      const pages = {
        files: _Inspector._createFilesPage(),
        info: _Inspector._createInfoPage(),
        peers: _Inspector._createPeersPage(),
        tiers: _Inspector._createTiersPage()
      };
      const on_activated = (page) => {
        this.current_page = page;
        this._updateCurrentPage();
      };
      const elements = createTextualTabsContainer(
        "inspector",
        [
          ["inspector-tab-info", pages.info.root, "Info"],
          ["inspector-tab-peers", pages.peers.root, "Peers"],
          ["inspector-tab-tiers", pages.tiers.root, "Tiers"],
          ["inspector-tab-files", pages.files.root, "Files"]
        ],
        on_activated.bind(this)
      );
      return { ...elements, ...pages };
    }
    _setTorrents(torrents) {
      const key = "dataChanged";
      const callback = this.torrent_listener;
      for (const t of this.torrents) {
        t.removeEventListener(key, callback);
      }
      this.torrents = [...torrents];
      for (const t of this.torrents) {
        t.addEventListener(key, callback);
      }
      this._refreshTorrents();
      this._updateCurrentPage();
    }
    static _needsExtraInfo(torrents) {
      return torrents.some((tor) => !tor.hasExtraInfo());
    }
    _refreshTorrents() {
      const { controller, torrents } = this;
      const ids = torrents.map((t) => t.getId());
      if (ids && ids.length > 0) {
        const fields = ["id", ...Torrent.Fields.StatsExtra];
        if (_Inspector._needsExtraInfo(torrents)) {
          fields.push(...Torrent.Fields.InfoExtra);
        }
        controller.updateTorrents(ids, fields);
      }
    }
    _updateCurrentPage() {
      const { current_page, elements } = this;
      switch (current_page) {
        case elements.files.root:
          this._updateFiles();
          break;
        case elements.info.root:
          this._updateInfo();
          break;
        case elements.peers.root:
          this._updatePeers();
          break;
        case elements.tiers.root:
          this._updateTiers();
          break;
        default:
          console.warn("unexpected page");
          console.log(current_page);
      }
    }
    _updateInfo() {
      const none = "None";
      const mixed = "Mixed";
      const unknown = "Unknown";
      const fmt = Formatter;
      const now = Date.now();
      const { elements: e, torrents } = this;
      const sizeWhenDone = torrents.reduce(
        (accumulator, t) => accumulator + t.getSizeWhenDone(),
        0
      );
      let string = null;
      if (torrents.length === 0) {
        string = none;
      } else if (torrents.every((t) => t.isFinished())) {
        string = "Finished";
      } else if (torrents.every((t) => t.isStopped())) {
        string = "Paused";
      } else {
        const get = (t) => t.getStateString();
        const first = get(torrents[0]);
        string = torrents.every((t) => get(t) === first) ? first : mixed;
      }
      setTextContent(e.info.state, string);
      const stateString = string;
      if (torrents.length === 0) {
        string = none;
      } else {
        const verified = torrents.reduce(
          (accumulator, t) => accumulator + t.getHaveValid(),
          0
        );
        const unverified = torrents.reduce(
          (accumulator, t) => accumulator + t.getHaveUnchecked(),
          0
        );
        const leftUntilDone = torrents.reduce(
          (accumulator, t) => accumulator + t.getLeftUntilDone(),
          0
        );
        const d = 100 * (sizeWhenDone ? (sizeWhenDone - leftUntilDone) / sizeWhenDone : 1);
        string = fmt.percentString(d);
        if (unverified) {
          string = `${fmt.size(verified)} of ${fmt.size(
            sizeWhenDone
          )} (${string}%), ${fmt.size(unverified)} Unverified`;
        } else if (leftUntilDone) {
          string = `${fmt.size(verified)} of ${fmt.size(
            sizeWhenDone
          )} (${string}%)`;
        } else {
          string = `${fmt.size(verified)} (100%)`;
        }
      }
      setTextContent(e.info.have, fmt.stringSanitizer(string));
      if (torrents.length === 0) {
        string = none;
      } else if (sizeWhenDone === 0) {
        string = none;
      } else {
        const available = torrents.reduce(
          (accumulator, t) => t.getHave() + t.getDesiredAvailable(),
          0
        );
        string = `${fmt.percentString(100 * available / sizeWhenDone)}%`;
      }
      setTextContent(e.info.availability, fmt.stringSanitizer(string));
      if (torrents.length === 0) {
        string = none;
      } else {
        const d = torrents.reduce(
          (accumulator, t) => accumulator + t.getDownloadedEver(),
          0
        );
        const f = torrents.reduce(
          (accumulator, t) => accumulator + t.getFailedEver(),
          0
        );
        string = f ? `${fmt.size(d)} (+${fmt.size(f)} discarded after failed checksum)` : fmt.size(d);
      }
      setTextContent(e.info.downloaded, fmt.stringSanitizer(string));
      if (torrents.length === 0) {
        string = none;
      } else {
        const uploaded = torrents.reduce(
          (accumulator, t) => accumulator + t.getUploadedEver(),
          0
        );
        const denominator = torrents.reduce(
          (accumulator, t) => accumulator + t.getSizeWhenDone(),
          0
        ) || torrents.reduce((accumulator, t) => accumulator + t.getHaveValid(), 0);
        string = `${fmt.size(uploaded)} (Ratio: ${fmt.ratioString(
          Utils.ratio(uploaded, denominator)
        )})`;
      }
      setTextContent(e.info.uploaded, string);
      if (torrents.length === 0) {
        string = none;
      } else if (torrents.every((t) => t.isStopped())) {
        string = stateString;
      } else {
        const get = (t) => t.getStartDate();
        const first = get(torrents[0]);
        string = torrents.every((t) => get(t) === first) ? fmt.timeInterval(now / 1e3 - first) : mixed;
      }
      setTextContent(e.info.running_time, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        const get = (t) => t.getETA();
        const first = get(torrents[0]);
        if (!torrents.every((t) => get(t) === first)) {
          string = mixed;
        } else if (first < 0) {
          string = unknown;
        } else {
          string = fmt.timeInterval(first);
        }
      }
      setTextContent(e.info.remaining_time, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        const latest = torrents.reduce(
          (accumulator, t) => Math.max(accumulator, t.getLastActivity()),
          -1
        );
        const now_seconds = Math.floor(now / 1e3);
        if (0 < latest && latest <= now_seconds) {
          const idle_secs = now_seconds - latest;
          string = idle_secs < 5 ? "Active now" : `${fmt.timeInterval(idle_secs)} ago`;
        } else {
          string = none;
        }
      }
      setTextContent(e.info.last_activity, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        const get = (t) => t.getErrorString();
        const first = get(torrents[0]);
        string = torrents.every((t) => get(t) === first) ? first : mixed;
      }
      setTextContent(e.info.error, string || none);
      if (torrents.length === 0) {
        string = none;
      } else {
        const size = torrents.reduce(
          (accumulator, t) => accumulator + t.getTotalSize(),
          0
        );
        if (size) {
          const get = (t) => t.getPieceSize();
          const pieceCount = torrents.reduce(
            (accumulator, t) => accumulator + t.getPieceCount(),
            0
          );
          const pieceString = fmt.number(pieceCount);
          const pieceSize = get(torrents[0]);
          string = torrents.every((t) => get(t) === pieceSize) ? `${fmt.size(size)} (${pieceString} pieces @ ${fmt.mem(pieceSize)})` : `${fmt.size(size)} (${pieceString} pieces)`;
        } else {
          string = "None";
        }
      }
      setTextContent(e.info.size, fmt.stringSanitizer(string));
      if (torrents.length === 0) {
        string = none;
      } else {
        const get = (t) => t.getHashString();
        const first = get(torrents[0]);
        string = torrents.every((t) => get(t) === first) ? first : mixed;
      }
      setTextContent(e.info.hash, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        const get = (t) => t.getPrivateFlag();
        const first = get(torrents[0]);
        if (!torrents.every((t) => get(t) === first)) {
          string = mixed;
        } else if (first) {
          string = "Private to this tracker -- DHT and PEX disabled";
        } else {
          string = "Public torrent";
        }
      }
      setTextContent(e.info.privacy, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        const get = (t) => t.getComment();
        const first = get(torrents[0]);
        string = torrents.every((t) => get(t) === first) ? first : mixed;
      }
      string = string || none;
      if (string.startsWith("https://") || string.startsWith("http://")) {
        string = encodeURI(string);
        e.info.comment.innerHTML = `<a href="${string}" target="_blank" >${string}</a>`;
      } else {
        setTextContent(e.info.comment, string);
      }
      string = torrents.length === 0 ? none : torrents[0].getLabels().join(", ");
      setTextContent(e.info.labels, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        let get = (t) => t.getCreator();
        const creator = get(torrents[0]);
        const mixed_creator = !torrents.every((t) => get(t) === creator);
        get = (t) => t.getDateCreated();
        const date = get(torrents[0]);
        const mixed_date = !torrents.every((t) => get(t) === date);
        const empty_creator = !creator || creator.length === 0;
        const empty_date = !date;
        if (mixed_creator || mixed_date) {
          string = mixed;
        } else if (empty_creator && empty_date) {
          string = unknown;
        } else if (empty_date && !empty_creator) {
          string = `Created by ${creator}`;
        } else if (empty_creator && !empty_date) {
          string = `Created on ${new Date(date * 1e3).toDateString()}`;
        } else {
          string = `Created by ${creator} on ${new Date(
            date * 1e3
          ).toDateString()}`;
        }
      }
      setTextContent(e.info.origin, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        const get = (t) => t.getDownloadDir();
        const first = get(torrents[0]);
        string = torrents.every((t) => get(t) === first) ? first : mixed;
      }
      setTextContent(e.info.location, string);
      if (torrents.length === 0) {
        string = none;
      } else {
        const get = (t) => t.getDateAdded();
        const first = get(torrents[0]);
        string = torrents.every((t) => get(t) === first) ? new Date(first * 1e3).toLocaleString(navigator.language, {
          day: "2-digit",
          hour: "2-digit",
          hour12: false,
          minute: "2-digit",
          month: "short",
          second: "2-digit",
          timeZoneName: "short",
          weekday: "short",
          year: "numeric"
        }) : mixed;
      }
      setTextContent(e.info.dateAdded, string);
      if (torrents.length === 0) {
        setTextContent(e.info.magnetLink, none);
      } else if (torrents.length > 1) {
        setTextContent(e.info.magnetLink, mixed);
      } else {
        const link = torrents[0].getMagnetLink();
        e.info.magnetLink.innerHTML = `<a class="inspector-info-magnet" href="${link}"><button></button></a>`;
      }
    }
    ///  PEERS PAGE
    static _peerStatusTitle(flag_string) {
      const texts = Object.seal({
        "?": "We unchoked this peer, but they're not interested",
        D: "Downloading from this peer",
        E: "Encrypted Connection",
        H: "Peer was discovered through Distributed Hash Table (DHT)",
        I: "Peer is an incoming connection",
        K: "Peer has unchoked us, but we're not interested",
        O: "Optimistic unchoke",
        T: "Peer is connected via uTP",
        U: "Uploading to peer",
        X: "Peer was discovered through Peer Exchange (PEX)",
        d: "We would download from this peer if they'd let us",
        u: "We would upload to this peer if they'd ask"
      });
      return [...flag_string].filter((ch) => texts[ch]).map((ch) => `${ch}: ${texts[ch]}`).join("\n");
    }
    _updatePeers() {
      const fmt = Formatter;
      const { elements, torrents } = this;
      const { tbody } = elements.peers;
      const cell_setters = [
        (peer, td) => {
          td.dataset.encrypted = peer.isEncrypted;
        },
        (peer, td) => setTextContent(
          td,
          peer.rateToPeer ? fmt.speedBps(peer.rateToPeer) : ""
        ),
        (peer, td) => setTextContent(
          td,
          peer.rateToClient ? fmt.speedBps(peer.rateToClient) : ""
        ),
        (peer, td) => setTextContent(td, `${Math.floor(peer.progress * 100)}%`),
        (peer, td) => {
          setTextContent(td, peer.flagStr);
          td.setAttribute("title", _Inspector._peerStatusTitle(peer.flagStr));
        },
        (peer, td) => {
          setTextContent(td, peer.address);
          td.setAttribute("title", peer.address);
        },
        (peer, td) => {
          setTextContent(td, peer.clientName);
          td.setAttribute("title", peer.clientName);
        }
      ];
      const rows = [];
      for (const tor of torrents) {
        const tortr = document.createElement("tr");
        tortr.classList.add("torrent-row");
        const tortd = document.createElement("td");
        tortd.setAttribute("colspan", cell_setters.length);
        setTextContent(tortd, tor.getName());
        tortr.append(tortd);
        rows.push(tortr);
        for (const peer of tor.getPeers()) {
          const tr = document.createElement("tr");
          tr.classList.add("peer-row");
          for (const [index, setter] of cell_setters.entries()) {
            const td = document.createElement("td");
            td.classList.add(peer_column_classes[index]);
            setter(peer, td);
            tr.append(td);
          }
          rows.push(tr);
        }
        while (tbody.firstChild) {
          tbody.firstChild.remove();
        }
        tbody.append(...rows);
      }
    }
    /// TRACKERS PAGE
    static getAnnounceState(tracker) {
      switch (tracker.announceState) {
        case Torrent._TrackerActive:
          return "Announce in progress";
        case Torrent._TrackerWaiting: {
          const timeUntilAnnounce = Math.max(
            0,
            tracker.nextAnnounceTime - Date.now() / 1e3
          );
          return `Next announce in ${Formatter.timeInterval(timeUntilAnnounce)}`;
        }
        case Torrent._TrackerQueued:
          return "Announce is queued";
        case Torrent._TrackerInactive:
          return tracker.isBackup ? "Tracker will be used as a backup" : "Announce not scheduled";
        default:
          return `unknown announce state: ${tracker.announceState}`;
      }
    }
    static lastAnnounceStatus(tracker) {
      let lastAnnounceLabel = "Last Announce";
      let lastAnnounce = ["N/A"];
      if (tracker.hasAnnounced) {
        const lastAnnounceTime = Formatter.timestamp(tracker.lastAnnounceTime);
        if (tracker.lastAnnounceSucceeded) {
          lastAnnounce = [
            lastAnnounceTime,
            " (got ",
            Formatter.countString("peer", "peers", tracker.lastAnnouncePeerCount),
            ")"
          ];
        } else {
          lastAnnounceLabel = "Announce error";
          lastAnnounce = [
            tracker.lastAnnounceResult ? `${tracker.lastAnnounceResult} - ` : "",
            lastAnnounceTime
          ];
        }
      }
      return {
        label: lastAnnounceLabel,
        value: lastAnnounce.join("")
      };
    }
    static lastScrapeStatus(tracker) {
      let lastScrapeLabel = "Last Scrape";
      let lastScrape = "N/A";
      if (tracker.hasScraped) {
        const lastScrapeTime = Formatter.timestamp(tracker.lastScrapeTime);
        if (tracker.lastScrapeSucceeded) {
          lastScrape = lastScrapeTime;
        } else {
          lastScrapeLabel = "Scrape error";
          lastScrape = (tracker.lastScrapeResult ? `${tracker.lastScrapeResult} - ` : "") + lastScrapeTime;
        }
      }
      return {
        label: lastScrapeLabel,
        value: lastScrape
      };
    }
    static _getOrigin(tracker) {
      try {
        const udp_prefix = "udp://";
        const is_udp = tracker.announce.startsWith(udp_prefix);
        if (is_udp) {
          const http_prefix = "http://";
          const munged = tracker.announce.replace(udp_prefix, http_prefix);
          return new URL(munged).origin.replace(http_prefix, udp_prefix);
        }
        return new URL(tracker.announce).origin;
      } catch {
        return [tracker.sitename || tracker.host || tracker.announce];
      }
    }
    _updateTiers() {
      const na = "N/A";
      const { list } = this.elements.tiers;
      const { torrents } = this;
      const rows = [];
      for (const tor of torrents) {
        if (torrents.length > 1) {
          const title = document.createElement("div");
          title.classList.add("tier-list-torrent");
          setTextContent(title, tor.getName());
          rows.push(title);
        }
        for (const tracker of tor.getTrackers()) {
          const announceState = _Inspector.getAnnounceState(tracker);
          const lastAnnounceStatusHash = _Inspector.lastAnnounceStatus(tracker);
          const lastScrapeStatusHash = _Inspector.lastScrapeStatus(tracker);
          const tier_div = document.createElement("div");
          tier_div.classList.add("tier-list-row");
          let element = document.createElement("div");
          const site = _Inspector._getOrigin(tracker);
          element.classList.add("tier-list-tracker");
          setTextContent(element, `${site} - tier ${tracker.tier + 1}`);
          element.setAttribute("title", tracker.announce);
          tier_div.append(element);
          element = document.createElement("div");
          element.classList.add("tier-announce");
          setTextContent(
            element,
            `${lastAnnounceStatusHash.label}: ${lastAnnounceStatusHash.value}`
          );
          tier_div.append(element);
          element = document.createElement("div");
          element.classList.add("tier-seeders");
          setTextContent(
            element,
            `Seeders: ${tracker.seederCount > -1 ? tracker.seederCount : na}`
          );
          tier_div.append(element);
          element = document.createElement("div");
          element.classList.add("tier-state");
          setTextContent(element, announceState);
          tier_div.append(element);
          element = document.createElement("div");
          element.classList.add("tier-leechers");
          setTextContent(
            element,
            `Leechers: ${tracker.leecherCount > -1 ? tracker.leecherCount : na}`
          );
          tier_div.append(element);
          element = document.createElement("div");
          element.classList.add("tier-scrape");
          setTextContent(
            element,
            `${lastScrapeStatusHash.label}: ${lastScrapeStatusHash.value}`
          );
          tier_div.append(element);
          element = document.createElement("div");
          element.classList.add("tier-downloads");
          setTextContent(
            element,
            `Downloads: ${tracker.downloadCount > -1 ? tracker.downloadCount : na}`
          );
          tier_div.append(element);
          rows.push(tier_div);
        }
      }
      while (list.firstChild) {
        list.firstChild.remove();
      }
      list.append(...rows);
    }
    ///  FILES PAGE
    _changeFileCommand(fileIndices, command) {
      const { controller, file_torrent } = this;
      const torrentId = file_torrent.getId();
      controller.changeFileCommand(torrentId, fileIndices, command);
    }
    _onFileWantedToggled(event_) {
      const { indices, wanted } = event_;
      this._changeFileCommand(
        indices,
        wanted ? "files-wanted" : "files-unwanted"
      );
    }
    _onFilePriorityToggled(event_) {
      const { indices, priority } = event_;
      let command = null;
      switch (priority.toString()) {
        case "-1":
          command = "priority-low";
          break;
        case "1":
          command = "priority-high";
          break;
        default:
          command = "priority-normal";
          break;
      }
      this._changeFileCommand(indices, command);
    }
    _clearFileList() {
      const { list } = this.elements.files;
      while (list.firstChild) {
        list.firstChild.remove();
      }
      this.file_torrent = null;
      this.file_torrent_n = null;
      this.file_rows = null;
    }
    static createFileTreeModel(tor) {
      const leaves = [];
      const tree = {
        children: {},
        file_indices: []
      };
      for (const [index, file] of tor.getFiles().entries()) {
        const { name } = file;
        const tokens = name.split("/");
        let walk = tree;
        for (const [index_, token] of tokens.entries()) {
          let sub = walk.children[token];
          if (!sub) {
            walk.children[token] = sub = {
              children: {},
              depth: index_,
              file_indices: [],
              name: token,
              parent: walk
            };
          }
          walk = sub;
        }
        walk.file_index = index;
        delete walk.children;
        leaves.push(walk);
      }
      for (const leaf of leaves) {
        const { file_index } = leaf;
        let walk = leaf;
        do {
          walk.file_indices.push(file_index);
          walk = walk.parent;
        } while (walk);
      }
      return tree;
    }
    addNodeToView(tor, parent, sub) {
      const row = new FileRow(tor, sub.depth, sub.name, sub.file_indices);
      row.addEventListener("wantedToggled", this._onFileWantedToggled.bind(this));
      row.addEventListener(
        "priorityToggled",
        this._onFilePriorityToggled.bind(this)
      );
      this.file_rows.push(row);
      parent.append(row.getElement());
    }
    addSubtreeToView(tor, parent, sub) {
      if (sub.parent) {
        this.addNodeToView(tor, parent, sub);
      }
      if (sub.children) {
        for (const value of Object.values(sub.children)) {
          this.addSubtreeToView(tor, parent, value);
        }
      }
    }
    _updateFiles() {
      const { list } = this.elements.files;
      const { file_rows, file_torrent, file_torrent_n, torrents } = this;
      if (torrents.length !== 1) {
        this._clearFileList();
        return;
      }
      const [tor] = torrents;
      const n = tor.getFiles().length;
      if (tor !== file_torrent || n !== file_torrent_n) {
        this._clearFileList();
        this.file_torrent = tor;
        this.file_torrent_n = n;
        this.file_rows = [];
        const fragment = document.createDocumentFragment();
        const tree = _Inspector.createFileTreeModel(tor);
        this.addSubtreeToView(tor, fragment, tree);
        list.append(fragment);
      } else {
        for (const row of file_rows) {
          row.refresh();
        }
      }
    }
  };

  // src/move-dialog.js
  var MoveDialog = class _MoveDialog extends EventTarget {
    constructor(controller, remote) {
      super();
      this.controller = controller;
      this.remote = remote;
      this.elements = {};
      this.torrents = [];
      this.show();
    }
    show() {
      const torrents = this.controller.getSelectedTorrents();
      if (torrents.length === 0) {
        return;
      }
      const paths = this.controller.getAllTorrentsPaths();
      this.torrents = torrents;
      this.elements = _MoveDialog._create();
      this.elements.confirm.addEventListener("click", () => this._onConfirm());
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      this.elements.entry.value = torrents[0].getDownloadDir();
      while (this.elements.datalist.firstChild) {
        this.elements.datalist.firstChild.remove();
      }
      for (const path of paths) {
        const option = document.createElement("option");
        option.value = path;
        this.elements.datalist.append(option);
      }
      document.body.append(this.elements.root);
      this.elements.entry.focus();
    }
    close() {
      this.elements.root.remove();
      this.dispatchEvent(new Event("close"));
      delete this.controller;
      delete this.remote;
      delete this.elements;
      delete this.torrents;
    }
    _onDismiss() {
      this.close();
    }
    _onConfirm() {
      const ids = this.torrents.map((tor) => tor.getId());
      const path = this.elements.entry.value.trim();
      this.remote.moveTorrents(ids, path);
      this.close();
    }
    static _create() {
      const elements = createDialogContainer("move-dialog");
      elements.root.setAttribute("aria-label", "Move Torrent");
      elements.heading.textContent = "Set Torrent Location";
      confirm.textContent = "Apply";
      const label = document.createElement("label");
      label.setAttribute("for", "torrent-path");
      label.textContent = "Location:";
      elements.workarea.append(label);
      const entry = document.createElement("input");
      entry.setAttribute("type", "text");
      entry.setAttribute("list", "path-list");
      entry.id = "torrent-path";
      elements.entry = entry;
      elements.workarea.append(entry);
      const datalist = document.createElement("datalist");
      datalist.id = "path-list";
      elements.datalist = datalist;
      elements.workarea.append(datalist);
      return elements;
    }
  };

  // src/alert-dialog.js
  var AlertDialog = class _AlertDialog extends EventTarget {
    constructor(options) {
      super();
      this.elements = _AlertDialog._create(options);
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      this.options = options;
      document.body.append(this.elements.root);
      this.elements.dismiss.focus();
    }
    close() {
      if (!this.closed) {
        this.elements.root.remove();
        this.dispatchEvent(new Event("close"));
        for (const key of Object.keys(this)) {
          delete this[key];
        }
        this.closed = true;
      }
    }
    _onDismiss() {
      this.close();
    }
    static _create(options) {
      const { heading, message } = options;
      const elements = createDialogContainer("confirm-dialog");
      elements.confirm.remove();
      delete elements.confirm;
      elements.heading.textContent = heading;
      elements.workarea.textContent = message;
      return elements;
    }
  };

  // src/open-dialog.js
  var OpenDialog = class extends EventTarget {
    constructor(controller, remote, url = "", files = []) {
      super();
      this.controller = controller;
      this.remote = remote;
      this.elements = this._create(url);
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      this.elements.confirm.addEventListener("click", () => this._onConfirm());
      document.body.append(this.elements.root);
      if (files.length > 0) {
        this.elements.file_input.files = files;
      }
      this._updateFreeSpaceInAddDialog();
      while (this.elements.datalist.firstChild) {
        this.elements.datalist.firstChild.remove();
      }
      const paths = this.controller.getAllTorrentsPaths();
      for (const path of paths) {
        const option = document.createElement("option");
        option.value = path;
        this.elements.datalist.append(option);
      }
      this.elements.url_input.focus();
    }
    close() {
      if (!this.closed) {
        clearInterval(this.interval);
        this.elements.root.remove();
        this.dispatchEvent(new Event("close"));
        for (const key of Object.keys(this)) {
          delete this[key];
        }
        this.closed = true;
      }
    }
    _onDismiss() {
      this.close();
    }
    _updateFreeSpaceInAddDialog() {
      const path = this.elements.folder_input.value;
      this.remote.getFreeSpace(path, (dir, bytes) => {
        if (!this.closed) {
          const string = bytes > 0 ? `${Formatter.size(bytes)} Free` : "";
          this.elements.freespace.textContent = string;
        }
      });
    }
    _onConfirm() {
      const { controller, elements, remote } = this;
      const { file_input, folder_input, start_input, url_input } = elements;
      const paused = !start_input.checked;
      const destination = folder_input.value.trim();
      for (const file of file_input.files) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
          const contents = e.target.result;
          const key = "base64,";
          const index = contents.indexOf(key);
          if (index === -1) {
            return;
          }
          const o = {
            arguments: {
              "download-dir": destination,
              metainfo: contents.slice(Math.max(0, index + key.length)),
              paused
            },
            method: "torrent-add"
          };
          remote.sendRequest(o, (response) => {
            if (response.result !== "success") {
              alert(`Error adding "${file.name}": ${response.result}`);
              controller.setCurrentPopup(
                new AlertDialog({
                  heading: `Error adding "${file.name}"`,
                  message: response.result
                })
              );
            }
          });
        });
        reader.readAsDataURL(file);
      }
      let url = url_input.value.trim();
      if (url.length > 0) {
        if (/^[\da-f]{40}$/i.test(url)) {
          url = `magnet:?xt=urn:btih:${url}`;
        }
        const o = {
          arguments: {
            "download-dir": destination,
            filename: url,
            paused
          },
          method: "torrent-add"
        };
        remote.sendRequest(o, (payload) => {
          if (payload.result !== "success") {
            controller.setCurrentPopup(
              new AlertDialog({
                heading: `Error adding "${url}"`,
                message: payload.result
              })
            );
          }
        });
      }
      this._onDismiss();
    }
    _create(url) {
      const elements = createDialogContainer();
      const { confirm: confirm2, root, heading, workarea } = elements;
      root.classList.add("open-torrent");
      heading.textContent = "Add Torrents";
      confirm2.textContent = "Add";
      let input_id = makeUUID();
      let label = document.createElement("label");
      label.setAttribute("for", input_id);
      label.textContent = "Please select torrent files to add:";
      workarea.append(label);
      let input = document.createElement("input");
      input.type = "file";
      input.name = "torrent-files[]";
      input.id = input_id;
      input.multiple = "multiple";
      workarea.append(input);
      elements.file_input = input;
      input_id = makeUUID();
      label = document.createElement("label");
      label.setAttribute("for", input_id);
      label.textContent = "Or enter a URL:";
      workarea.append(label);
      input = document.createElement("input");
      input.type = "url";
      input.id = input_id;
      input.value = url;
      workarea.append(input);
      elements.url_input = input;
      input.addEventListener("keyup", ({ key }) => {
        if (key === "Enter") {
          confirm2.click();
        }
      });
      input_id = makeUUID();
      label = document.createElement("label");
      label.id = "add-dialog-folder-label";
      label.for = input_id;
      label.textContent = "Destination folder: ";
      workarea.append(label);
      const freespace = document.createElement("span");
      freespace.id = "free-space-text";
      label.append(freespace);
      workarea.append(label);
      elements.freespace = freespace;
      input = document.createElement("input");
      input.type = "text";
      input.id = "add-dialog-folder-input";
      input.addEventListener("change", () => this._updateFreeSpaceInAddDialog());
      input.value = this.controller.session_properties["download-dir"];
      input.setAttribute("list", "path-list");
      workarea.append(input);
      elements.folder_input = input;
      const datalist = document.createElement("datalist");
      datalist.id = "path-list";
      elements.datalist = datalist;
      workarea.append(datalist);
      const checkarea = document.createElement("div");
      workarea.append(checkarea);
      const check = document.createElement("input");
      check.type = "checkbox";
      check.id = "auto-start-check";
      check.checked = this.controller.shouldAddedTorrentsStart();
      checkarea.append(check);
      elements.start_input = check;
      label = document.createElement("label");
      label.id = "auto-start-label";
      label.setAttribute("for", check.id);
      label.textContent = "Start when added";
      checkarea.append(label);
      return elements;
    }
  };

  // src/remote.js
  var RPC = {
    _DaemonVersion: "version",
    _DownSpeedLimit: "speed-limit-down",
    _DownSpeedLimited: "speed-limit-down-enabled",
    _QueueMoveBottom: "queue-move-bottom",
    _QueueMoveDown: "queue-move-down",
    _QueueMoveTop: "queue-move-top",
    _QueueMoveUp: "queue-move-up",
    _Root: "../rpc.json",
    _TurtleDownSpeedLimit: "alt-speed-down",
    _TurtleState: "alt-speed-enabled",
    _TurtleUpSpeedLimit: "alt-speed-up",
    _UpSpeedLimit: "speed-limit-up",
    _UpSpeedLimited: "speed-limit-up-enabled"
  };
  var Remote = class _Remote {
    // TODO: decouple from controller
    constructor(controller) {
      this._connection_alert = null;
      this._controller = controller;
      this._session_id = "";
    }
    sendRequest(data, callback, context) {
      const headers = new Headers();
      headers.append("cache-control", "no-cache");
      headers.append("content-type", "application/json");
      headers.append("pragma", "no-cache");
      if (this._session_id) {
        headers.append(_Remote._SessionHeader, this._session_id);
      }
      let response_argument = null;
      fetch(RPC._Root, {
        //body: JSON.stringify(data),
        headers,
        method: "GET"
      }).then((response) => {
        response_argument = response;
        if (response.status === 409) {
          const error = new Error(_Remote._SessionHeader);
          error.header = response.headers.get(_Remote._SessionHeader);
          throw error;
        }
        return response.json();
      }).then((payload) => {
        if (callback) {
          callback.call(context, payload, response_argument);
        }
        if (this._connection_alert) {
          this._connection_alert.close();
          this._connection_alert = null;
        }
      }).catch((error) => {
        if (error.message === _Remote._SessionHeader) {
          this._session_id = error.header;
          this.sendRequest(data, callback, context);
          return;
        }
        console.trace(error);
        this._controller.togglePeriodicSessionRefresh(false);
        this._connection_alert = new AlertDialog({
          heading: "Connection failed",
          message: "Could not connect to the server. You may need to reload the page to reconnect."
        });
        this._controller.setCurrentPopup(this._connection_alert);
      });
    }
    // TODO: return a Promise
    loadDaemonPrefs(callback, context) {
      const o = {
        method: "session-get"
      };
      this.sendRequest(o, callback, context);
    }
    checkPort(ipProtocol, callback, context) {
      const o = {
        arguments: {
          ipProtocol
        },
        method: "port-test"
      };
      this.sendRequest(o, callback, context);
    }
    renameTorrent(torrentIds, oldpath, newname, callback, context) {
      const o = {
        arguments: {
          ids: torrentIds,
          name: newname,
          path: oldpath
        },
        method: "torrent-rename-path"
      };
      this.sendRequest(o, callback, context);
    }
    setLabels(torrentIds, labels, callback) {
      const args = {
        ids: torrentIds,
        labels
      };
      this.sendRequest({ arguments: args, method: "torrent-set" }, callback);
    }
    loadDaemonStats(callback, context) {
      const o = {
        method: "session-stats"
      };
      this.sendRequest(o, callback, context);
    }
    updateTorrents(torrentIds, fields, callback, context) {
      const o = {
        arguments: {
          fields,
          format: "table"
        },
        method: "torrent-get"
      };
      if (torrentIds) {
        o.arguments.ids = torrentIds;
      }
      this.sendRequest(o, (response) => {
        const arguments_ = response["arguments"];
        callback.call(context, arguments_.torrents, arguments_.removed);
      });
    }
    getFreeSpace(dir, callback, context) {
      const o = {
        arguments: {
          path: dir
        },
        method: "free-space"
      };
      this.sendRequest(o, (response) => {
        const arguments_ = response["arguments"];
        callback.call(context, arguments_.path, arguments_["size-bytes"]);
      });
    }
    changeFileCommand(torrentId, fileIndices, command) {
      const arguments_ = {
        ids: [torrentId]
      };
      arguments_[command] = fileIndices;
      this.sendRequest(
        {
          arguments: arguments_,
          method: "torrent-set"
        },
        () => {
          this._controller.refreshTorrents([torrentId]);
        }
      );
    }
    sendTorrentSetRequests(method, torrent_ids, arguments_, callback, context) {
      if (!arguments_) {
        arguments_ = {};
      }
      arguments_["ids"] = torrent_ids;
      const o = {
        arguments: arguments_,
        method
      };
      this.sendRequest(o, callback, context);
    }
    sendTorrentActionRequests(method, torrent_ids, callback, context) {
      this.sendTorrentSetRequests(method, torrent_ids, null, callback, context);
    }
    startTorrents(torrent_ids, noqueue, callback, context) {
      const name = noqueue ? "torrent-start-now" : "torrent-start";
      this.sendTorrentActionRequests(name, torrent_ids, callback, context);
    }
    stopTorrents(torrent_ids, callback, context) {
      this.sendTorrentActionRequests(
        "torrent-stop",
        torrent_ids,
        callback,
        context
      );
    }
    moveTorrents(torrent_ids, new_location, callback, context) {
      this.sendTorrentSetRequests(
        "torrent-set-location",
        torrent_ids,
        {
          location: new_location,
          move: true
        },
        callback,
        context
      );
    }
    removeTorrents(torrents, trash) {
      const o = {
        arguments: {
          "delete-local-data": trash,
          ids: []
        },
        method: "torrent-remove"
      };
      if (torrents) {
        for (let index = 0, length_ = torrents.length; index < length_; ++index) {
          o.arguments.ids.push(torrents[index].getId());
        }
      }
      this.sendRequest(o, () => {
        this._controller.refreshTorrents();
      });
    }
    verifyTorrents(torrent_ids, callback, context) {
      this.sendTorrentActionRequests(
        "torrent-verify",
        torrent_ids,
        callback,
        context
      );
    }
    reannounceTorrents(torrent_ids, callback, context) {
      this.sendTorrentActionRequests(
        "torrent-reannounce",
        torrent_ids,
        callback,
        context
      );
    }
    addTorrentByUrl(url, options) {
      if (/^[\da-f]{40}$/i.test(url)) {
        url = `magnet:?xt=urn:btih:${url}`;
      }
      const o = {
        arguments: {
          filename: url,
          paused: options.paused
        },
        method: "torrent-add"
      };
      this.sendRequest(o, () => {
        this._controller.refreshTorrents();
      });
    }
    savePrefs(arguments_) {
      const o = {
        arguments: arguments_,
        method: "session-set"
      };
      this.sendRequest(o, () => {
        this._controller.loadDaemonPrefs();
      });
    }
    updateBlocklist() {
      const o = {
        method: "blocklist-update"
      };
      this.sendRequest(o, () => {
        this._controller.loadDaemonPrefs();
      });
    }
    // Added queue calls
    moveTorrentsToTop(torrent_ids, callback, context) {
      this.sendTorrentActionRequests(
        RPC._QueueMoveTop,
        torrent_ids,
        callback,
        context
      );
    }
    moveTorrentsToBottom(torrent_ids, callback, context) {
      this.sendTorrentActionRequests(
        RPC._QueueMoveBottom,
        torrent_ids,
        callback,
        context
      );
    }
    moveTorrentsUp(torrent_ids, callback, context) {
      this.sendTorrentActionRequests(
        RPC._QueueMoveUp,
        torrent_ids,
        callback,
        context
      );
    }
    moveTorrentsDown(torrent_ids, callback, context) {
      this.sendTorrentActionRequests(
        RPC._QueueMoveDown,
        torrent_ids,
        callback,
        context
      );
    }
  };
  Remote._SessionHeader = "X-Transmission-Session-Id";

  // src/overflow-menu.js
  function make_section(classname, title) {
    const section = document.createElement("fieldset");
    section.classList.add("section", classname);
    const legend = document.createElement("legend");
    legend.classList.add("title");
    legend.textContent = title;
    section.append(legend);
    return section;
  }
  function make_button(parent, text, action, on_click) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", on_click);
    parent.append(button);
    button.dataset.action = action;
    return button;
  }
  var OverflowMenu = class extends EventTarget {
    constructor(session_manager, prefs, remote, action_manager) {
      super();
      this.action_listener = this._onActionChange.bind(this);
      this.action_manager = action_manager;
      this.action_manager.addEventListener("change", this.action_listener);
      this.prefs_listener = this._onPrefsChange.bind(this);
      this.prefs = prefs;
      this.prefs.addEventListener("change", this.prefs_listener);
      this.closed = false;
      this.remote = remote;
      this.name = "overflow-menu";
      this.session_listener = this._onSessionChange.bind(this);
      this.session_manager = session_manager;
      this.session_manager.addEventListener(
        "session-change",
        this.session_listener
      );
      const { session_properties } = session_manager;
      Object.assign(this, this._create(session_properties));
      this.outside = new OutsideClickListener(this.root);
      this.outside.addEventListener("click", () => this.close());
      Object.seal(this);
      this.show();
    }
    show() {
      document.body.append(this.root);
    }
    close() {
      if (!this.closed) {
        this.outside.stop();
        this.session_manager.removeEventListener(
          "session-change",
          this.session_listener
        );
        this.action_manager.removeEventListener("change", this.action_listener);
        this.prefs.removeEventListener("change", this.prefs_listener);
        this.root.remove();
        this.dispatchEvent(new Event("close"));
        for (const key of Object.keys(this)) {
          this[key] = null;
        }
        this.closed = true;
      }
    }
    _onSessionChange(event_) {
      const { alt_speed_check } = this.elements;
      const { session_properties } = event_;
      alt_speed_check.checked = session_properties[RPC._TurtleState];
    }
    _onPrefsChange(event_) {
      switch (event_.key) {
        case Prefs.SortDirection:
        case Prefs.SortMode:
        case Prefs.GroupByPath:
          this.root.querySelector(`[data-pref="${event_.key}"]`).value = event_.value;
          break;
        default:
          break;
      }
    }
    _onActionChange(event_) {
      const element = this.actions[event_.action];
      if (element) {
        this._updateElement(element);
      }
    }
    _updateElement(element) {
      if (element.dataset.action) {
        const { action } = element.dataset;
        const shortcuts = this.action_manager.keyshortcuts(action);
        if (shortcuts) {
          element.setAttribute("aria-keyshortcuts", shortcuts);
        }
        setEnabled(element, this.action_manager.isEnabled(action));
      }
    }
    _onClick(event_) {
      const { action, pref } = event_.target.dataset;
      if (action) {
        this.action_manager.click(action);
        return;
      }
      if (pref) {
        this.prefs[pref] = event_.target.value;
        return;
      }
      console.log("unhandled");
      console.log(event_);
      console.trace();
    }
    _create(session_properties) {
      const actions = {};
      const elements = {};
      const on_click = this._onClick.bind(this);
      const root = document.createElement("div");
      root.classList.add("overflow-menu", "popup");
      let section = make_section("display", "Display");
      root.append(section);
      let options = document.createElement("div");
      options.id = "display-options";
      section.append(options);
      let div = document.createElement("div");
      div.classList.add("table-row");
      options.append(div);
      let label = document.createElement("label");
      label.id = "display-sort-mode-label";
      label.textContent = "Sort by";
      div.append(label);
      let select = document.createElement("select");
      select.id = "display-sort-mode-select";
      select.dataset.pref = Prefs.SortMode;
      div.append(select);
      const sort_modes = [
        [Prefs.SortByActivity, "Activity"],
        [Prefs.SortByAge, "Age"],
        [Prefs.SortByName, "Name"],
        [Prefs.SortByProgress, "Progress"],
        [Prefs.SortByQueue, "Queue order"],
        [Prefs.SortByRatio, "Ratio"],
        [Prefs.SortBySize, "Size"],
        [Prefs.SortByState, "State"]
      ];
      for (const [value, text] of sort_modes) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        select.append(option);
      }
      label.setAttribute("for", select.id);
      select.value = this.prefs.sort_mode;
      select.addEventListener("change", (event_) => {
        this.prefs.sort_mode = event_.target.value;
      });
      div = document.createElement("div");
      div.classList.add("table-row");
      options.append(div);
      let check = document.createElement("input");
      check.id = "display-sort-reverse-check";
      check.dataset.pref = Prefs.SortDirection;
      check.type = "checkbox";
      div.append(check);
      label = document.createElement("label");
      label.id = "display-sort-reverse-label";
      label.setAttribute("for", check.id);
      label.textContent = "Reverse sort";
      div.append(label);
      check.checked = this.prefs.sort_direction !== Prefs.SortAscending;
      check.addEventListener("input", (event_) => {
        this.prefs.sort_direction = event_.target.checked ? Prefs.SortDescending : Prefs.SortAscending;
      });
      div = document.createElement("div");
      div.classList.add("table-row");
      options.append(div);
      check = document.createElement("input");
      check.id = "display-group-by-path-check";
      check.dataset.pref = Prefs.GroupByPath;
      check.type = "checkbox";
      div.append(check);
      label = document.createElement("label");
      label.id = "display-groupby-path-label";
      label.setAttribute("for", check.id);
      label.textContent = "Group by path";
      div.append(label);
      check.checked = this.prefs.group_by_path === true;
      check.addEventListener("input", (event_) => {
        this.prefs.group_by_path = event_.target.checked;
      });
      div = document.createElement("div");
      div.classList.add("table-row");
      options.append(div);
      let action = "toggle-compact-rows";
      check = document.createElement("input");
      check.id = "display-compact-check";
      check.dataset.action = action;
      check.type = "checkbox";
      div.append(check);
      label = document.createElement("label");
      label.id = "display-compact-label";
      label.for = check.id;
      label.setAttribute("for", check.id);
      label.textContent = this.action_manager.text(action);
      check.checked = this.prefs.display_mode === Prefs.DisplayCompact;
      div.append(label);
      check.addEventListener("input", (event_) => {
        const { checked } = event_.target;
        this.prefs.display_mode = checked ? Prefs.DisplayCompact : Prefs.DisplayFull;
      });
      div = document.createElement("div");
      div.classList.add("table-row");
      options.append(div);
      action = "toggle-contrast";
      check = document.createElement("input");
      check.id = "contrast-more-check";
      check.dataset.action = action;
      check.type = "checkbox";
      check.classList.add("switch");
      label = document.createElement("label");
      label.id = "contrast-more-label";
      label.for = check.id;
      label.setAttribute("for", check.id);
      label.textContent = this.action_manager.text(action);
      check.checked = this.prefs.contrast_mode === Prefs.ContrastMore;
      div.append(check);
      div.append(label);
      check.addEventListener("input", (event_) => {
        const { checked } = event_.target;
        this.prefs.contrast_mode = checked ? Prefs.ContrastMore : Prefs.ContrastLess;
      });
      div = document.createElement("div");
      div.classList.add("table-row", "display-fullscreen-row");
      options.append(div);
      check = document.createElement("input");
      check.id = "display-fullscreen-check";
      check.type = "checkbox";
      const is_fullscreen = () => document.fullscreenElement !== null;
      check.checked = is_fullscreen();
      check.addEventListener("input", () => {
        if (is_fullscreen()) {
          document.exitFullscreen();
        } else {
          document.body.requestFullscreen();
        }
      });
      document.addEventListener("fullscreenchange", () => {
        check.checked = is_fullscreen();
      });
      div.append(check);
      label = document.createElement("label");
      label.id = "display-fullscreen-label";
      label.for = check.id;
      label.setAttribute("for", check.id);
      label.textContent = "Fullscreen";
      div.append(label);
      section = make_section("speed", "Speed Limit");
      root.append(section);
      options = document.createElement("div");
      options.id = "speed-options";
      section.append(options);
      div = document.createElement("div");
      div.classList.add("speed-up");
      options.append(div);
      label = document.createElement("label");
      label.id = "speed-up-label";
      label.textContent = "Upload:";
      div.append(label);
      const unlimited = "Unlimited";
      select = document.createElement("select");
      select.id = "speed-up-select";
      div.append(select);
      const speeds = [
        "50",
        "100",
        "250",
        "500",
        "1000",
        "2500",
        "5000",
        "10000",
        unlimited
      ];
      for (const speed of [
        ...new Set(speeds).add(`${session_properties[RPC._UpSpeedLimit]}`).values()
      ].sort((a, b) => a - b)) {
        const option = document.createElement("option");
        option.value = speed;
        option.textContent = speed === unlimited ? unlimited : Formatter.speed(speed);
        select.append(option);
      }
      label.setAttribute("for", select.id);
      select.value = session_properties[RPC._UpSpeedLimited] ? `${session_properties[RPC._UpSpeedLimit]}` : unlimited;
      select.addEventListener("change", (event_) => {
        const { value } = event_.target;
        console.log(event_);
        if (value === unlimited) {
          this.remote.savePrefs({ [RPC._UpSpeedLimited]: false });
        } else {
          this.remote.savePrefs({
            [RPC._UpSpeedLimited]: true,
            [RPC._UpSpeedLimit]: Number.parseInt(value, 10)
          });
        }
      });
      div = document.createElement("div");
      div.classList.add("speed-down");
      options.append(div);
      label = document.createElement("label");
      label.id = "speed-down-label";
      label.textContent = "Download:";
      div.append(label);
      select = document.createElement("select");
      select.id = "speed-down-select";
      div.append(select);
      for (const speed of [
        ...new Set(speeds).add(`${session_properties[RPC._DownSpeedLimit]}`).values()
      ].sort((a, b) => a - b)) {
        const option = document.createElement("option");
        option.value = speed;
        option.textContent = speed === unlimited ? unlimited : Formatter.speed(speed);
        select.append(option);
      }
      label.setAttribute("for", select.id);
      select.value = session_properties[RPC._DownSpeedLimited] ? `${session_properties[RPC._DownSpeedLimit]}` : unlimited;
      select.addEventListener("change", (event_) => {
        const { value } = event_.target;
        console.log(event_);
        if (value === unlimited) {
          this.remote.savePrefs({ [RPC._DownSpeedLimited]: false });
        } else {
          this.remote.savePrefs({
            [RPC._DownSpeedLimited]: true,
            [RPC._DownSpeedLimit]: Number.parseInt(value, 10)
          });
        }
      });
      div = document.createElement("div");
      div.classList.add("alt-speed");
      options.append(div);
      check = document.createElement("input");
      check.id = "alt-speed-check";
      check.type = "checkbox";
      check.checked = session_properties[RPC._TurtleState];
      check.addEventListener("change", (event_) => {
        this.remote.savePrefs({
          [RPC._TurtleState]: event_.target.checked
        });
      });
      div.append(check);
      elements.alt_speed_check = check;
      label = document.createElement("label");
      label.id = "alt-speed-image";
      label.setAttribute("for", check.id);
      div.append(label);
      label = document.createElement("label");
      label.id = "alt-speed-label";
      label.setAttribute("for", check.id);
      label.textContent = "Use Temp limits";
      div.append(label);
      label = document.createElement("label");
      label.id = "alt-speed-values-label";
      label.setAttribute("for", check.id);
      const up = Formatter.speed(session_properties[RPC._TurtleUpSpeedLimit]);
      const dn = Formatter.speed(session_properties[RPC._TurtleDownSpeedLimit]);
      label.textContent = `(${up} up, ${dn} down)`;
      div.append(label);
      section = make_section("actions", "Actions");
      root.append(section);
      for (const action_name of [
        "show-preferences-dialog",
        "show-shortcuts-dialog",
        "pause-all-torrents",
        "start-all-torrents"
      ]) {
        const text = this.action_manager.text(action_name);
        actions[action_name] = make_button(section, text, action_name, on_click);
      }
      section = make_section("help", "Help");
      root.append(section);
      options = document.createElement("div");
      section.append(options);
      for (const action_name of ["show-statistics-dialog", "show-about-dialog"]) {
        const text = this.action_manager.text(action_name);
        actions[action_name] = make_button(options, text, action_name, on_click);
      }
      const e = document.createElement("a");
      e.href = "https://transmissionbt.com/donate.html";
      e.target = "_blank";
      e.textContent = "Donate";
      options.append(e);
      this._updateElement = this._updateElement.bind(this);
      return { actions, elements, root };
    }
  };

  // src/prefs-dialog.js
  var PrefsDialog = class _PrefsDialog extends EventTarget {
    static _initTimeDropDown(e) {
      for (let index = 0; index < 24 * 4; ++index) {
        const hour = Number.parseInt(index / 4, 10);
        const mins = index % 4 * 15;
        const value = index * 15;
        const content = `${hour}:${mins || "00"}`;
        e.options[index] = new Option(content, value);
      }
    }
    static _initDayDropDown(e) {
      const options = [
        ["Everyday", "127"],
        ["Weekdays", "62"],
        ["Weekends", "65"],
        ["Sunday", "1"],
        ["Monday", "2"],
        ["Tuesday", "4"],
        ["Wednesday", "8"],
        ["Thursday", "16"],
        ["Friday", "32"],
        ["Saturday", "64"]
      ];
      for (let index = 0; options[index]; ++index) {
        const [text, value] = options[index];
        e.options[index] = new Option(text, value);
      }
    }
    _checkPort() {
      for (const [key, element] of Object.entries(
        this.elements.network.port_status_label
      )) {
        delete element.dataset.open;
        setTextContent(element, "Checking...");
        this.remote.checkPort(
          key,
          (response) => this._onPortChecked(key, response),
          this
        );
      }
    }
    _onPortChecked(ipProtocol, response) {
      if (this.closed) {
        return;
      }
      const element = this.elements.network.port_status_label[ipProtocol];
      const is_open = response.arguments["port-is-open"] || false;
      element.dataset.open = is_open;
      if ("port-is-open" in response.arguments) {
        setTextContent(element, is_open ? "Open" : "Closed");
      } else {
        setTextContent(element, "Error");
      }
    }
    _setBlocklistButtonEnabled(b) {
      const e = this.elements.peers.blocklist_update_button;
      setEnabled(e, b);
      e.value = b ? "Update" : "Updating...";
    }
    static _getValue(e) {
      if (e.tagName === "TEXTAREA") {
        return e.value;
      }
      switch (e.type) {
        case "checkbox":
        case "radio":
          return e.checked;
        case "number":
        case "select-one":
        case "text":
        case "url": {
          const string = e.value;
          if (Number.parseInt(string, 10).toString() === string) {
            return Number.parseInt(string, 10);
          }
          if (Number.parseFloat(string).toString() === string) {
            return Number.parseFloat(string);
          }
          return string;
        }
        default:
          return null;
      }
    }
    _onMaybePortChanged(key) {
      if (key === "peer-port" || key === "port-forwarding-enabled") {
        this._checkPort();
      }
    }
    // this callback is for controls whose changes can be applied
    // immediately, like checkboxs, radioboxes, and selects
    _onControlChanged(event_) {
      const { key } = event_.target.dataset;
      this.remote.savePrefs({
        [key]: _PrefsDialog._getValue(event_.target)
      });
      this._onMaybePortChanged(key);
    }
    _onDialogClosed() {
      this.dispatchEvent(new Event("closed"));
    }
    // update the dialog's controls
    _update() {
      this._setBlocklistButtonEnabled(true);
      for (const [key, value] of Object.entries(
        this.session_manager.session_properties
      )) {
        for (const element of this.elements.root.querySelectorAll(
          `[data-key="${key}"]`
        )) {
          if (key === "blocklist-size") {
            const n = Formatter.number(value);
            element.innerHTML = `Blocklist has <span class="blocklist-size-number">${n}</span> rules`;
            setTextContent(this.elements.peers.blocklist_update_button, "Update");
          } else {
            switch (element.type) {
              case "checkbox":
              case "radio":
                element.checked = value;
                break;
              case "text":
              case "textarea":
              case "url":
              case "email":
              case "number":
              case "search":
                if (element !== document.activeElement) {
                  if (element.value != value) {
                    this._onMaybePortChanged(key);
                  }
                  element.value = value;
                }
                break;
              case "select-one":
                element.value = value;
                break;
              default:
                console.log(element.type);
                break;
            }
          }
        }
      }
    }
    shouldAddedTorrentsStart() {
      return this.data.elements.root.find("#start-added-torrents")[0].checked;
    }
    static _createCheckAndLabel(id, text) {
      const root = document.createElement("div");
      root.id = id;
      const check = document.createElement("input");
      check.id = makeUUID();
      check.type = "checkbox";
      root.append(check);
      const label = document.createElement("label");
      label.textContent = text;
      label.setAttribute("for", check.id);
      root.append(label);
      return { check, label, root };
    }
    static _enableIfChecked(element, check) {
      const callback = () => {
        if (element.tagName === "INPUT") {
          setEnabled(element, check.checked);
        } else {
          element.classList.toggle("disabled", !check.checked);
        }
      };
      check.addEventListener("change", callback);
      callback();
    }
    static _getProtocolHandlerRegistered() {
      return localStorage.getItem("protocol-handler-registered") === "true";
    }
    static _updateProtocolHandlerButton(button) {
      button.removeAttribute("disabled");
      button.removeAttribute("title");
      if (_PrefsDialog._getProtocolHandlerRegistered()) {
        button.textContent = "Remove Browser Handler";
        if (!("unregisterProtocolHandler" in navigator)) {
          button.setAttribute(
            "title",
            "Your browser does not support removing protocol handlers. This button only allows you to re-register a handler."
          );
        }
      } else {
        button.textContent = "Add Browser Handler";
        button.removeAttribute("title");
        if (!("registerProtocolHandler" in navigator)) {
          button.setAttribute("disabled", true);
          button.setAttribute(
            "title",
            "Your browser does not support protocol handlers"
          );
        }
      }
    }
    static _toggleProtocolHandler(button) {
      const handlerUrl = new URL(window.location.href);
      handlerUrl.search = "addtorrent=%s";
      if (this._getProtocolHandlerRegistered()) {
        navigator.unregisterProtocolHandler?.("magnet", handlerUrl.toString());
        localStorage.removeItem("protocol-handler-registered");
        _PrefsDialog._updateProtocolHandlerButton(button);
      } else {
        navigator.registerProtocolHandler(
          "magnet",
          handlerUrl.toString(),
          "Transmission Web"
        );
        localStorage.setItem("protocol-handler-registered", "true");
        _PrefsDialog._updateProtocolHandlerButton(button);
      }
    }
    static _createTorrentsPage() {
      const root = document.createElement("div");
      root.classList.add("prefs-torrents-page");
      let label = document.createElement("div");
      label.textContent = "Downloading";
      label.classList.add("section-label");
      root.append(label);
      label = document.createElement("label");
      label.textContent = "Download to:";
      root.append(label);
      let input = document.createElement("input");
      input.type = "text";
      input.id = makeUUID();
      input.dataset.key = "download-dir";
      label.setAttribute("for", input.id);
      root.append(input);
      const download_dir = input;
      let cal = _PrefsDialog._createCheckAndLabel(
        "incomplete-dir-div",
        "Use temporary folder:"
      );
      cal.check.title = "Separate folder to temporarily store downloads until they are complete.";
      cal.check.dataset.key = "incomplete-dir-enabled";
      cal.label.title = cal.check.title;
      root.append(cal.root);
      const incomplete_dir_check = cal.check;
      input = document.createElement("input");
      input.type = "text";
      input.dataset.key = "incomplete-dir";
      root.append(input);
      _PrefsDialog._enableIfChecked(input, cal.check);
      const incomplete_dir_input = input;
      cal = _PrefsDialog._createCheckAndLabel("autostart-div", "Start when added");
      cal.check.dataset.key = "start-added-torrents";
      root.append(cal.root);
      const autostart_check = cal.check;
      cal = _PrefsDialog._createCheckAndLabel(
        "suffix-div",
        `Append "part" to incomplete files' names`
      );
      cal.check.dataset.key = "rename-partial-files";
      root.append(cal.root);
      const suffix_check = cal.check;
      cal = _PrefsDialog._createCheckAndLabel(
        "download-queue-div",
        "Download queue size:"
      );
      cal.check.dataset.key = "download-queue-enabled";
      root.append(cal.root);
      const download_queue_check = cal.check;
      input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "download-queue-size";
      root.append(input);
      _PrefsDialog._enableIfChecked(input, cal.check);
      const download_queue_input = input;
      label = document.createElement("div");
      label.textContent = "Seeding";
      label.classList.add("section-label");
      root.append(label);
      cal = _PrefsDialog._createCheckAndLabel(
        "stop-ratio-div",
        "Stop seeding at ratio:"
      );
      cal.check.dataset.key = "seedRatioLimited";
      root.append(cal.root);
      const stop_ratio_check = cal.check;
      input = document.createElement("input");
      input.type = "number";
      input.min = "0.1";
      input.step = "any";
      input.dataset.key = "seedRatioLimit";
      root.append(input);
      _PrefsDialog._enableIfChecked(input, cal.check);
      const stop_ratio_input = input;
      cal = _PrefsDialog._createCheckAndLabel(
        "stop-idle-div",
        "Stop seeding if idle for N mins:"
      );
      cal.check.dataset.key = "idle-seeding-limit-enabled";
      root.append(cal.root);
      const stop_idle_check = cal.check;
      input = document.createElement("input");
      input.type = "number";
      input.min = "0.1";
      input.step = "any";
      input.dataset.key = "idle-seeding-limit";
      root.append(input);
      _PrefsDialog._enableIfChecked(input, cal.check);
      const stop_idle_input = input;
      label = document.createElement("div");
      label.textContent = "Magnet Protocol Handler";
      label.classList.add("section-label");
      root.append(label);
      const button = document.createElement("button");
      button.classList.add("register-handler-button");
      _PrefsDialog._updateProtocolHandlerButton(button);
      root.append(button);
      const register_handler_button = button;
      return {
        autostart_check,
        download_dir,
        download_queue_check,
        download_queue_input,
        incomplete_dir_check,
        incomplete_dir_input,
        register_handler_button,
        root,
        stop_idle_check,
        stop_idle_input,
        stop_ratio_check,
        stop_ratio_input,
        suffix_check
      };
    }
    static _createSpeedPage() {
      const root = document.createElement("div");
      root.classList.add("prefs-speed-page");
      let label = document.createElement("div");
      label.textContent = "Speed Limits";
      label.classList.add("section-label");
      root.append(label);
      let cal = _PrefsDialog._createCheckAndLabel(
        "upload-speed-div",
        "Upload (kB/s):"
      );
      cal.check.dataset.key = "speed-limit-up-enabled";
      root.append(cal.root);
      const upload_speed_check = cal.check;
      let input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "speed-limit-up";
      root.append(input);
      _PrefsDialog._enableIfChecked(input, cal.check);
      const upload_speed_input = input;
      cal = _PrefsDialog._createCheckAndLabel(
        "download-speed-div",
        "Download (kB/s):"
      );
      cal.check.dataset.key = "speed-limit-down-enabled";
      root.append(cal.root);
      const download_speed_check = cal.check;
      input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "speed-limit-down";
      root.append(input);
      _PrefsDialog._enableIfChecked(input, cal.check);
      const download_speed_input = input;
      label = document.createElement("div");
      label.textContent = "Alternative Speed Limits";
      label.classList.add("section-label", "alt-speed-section-label");
      root.append(label);
      label = document.createElement("div");
      label.textContent = "Override normal speed limits manually or at scheduled times";
      label.classList.add("alt-speed-label");
      root.append(label);
      label = document.createElement("label");
      label.textContent = "Upload (kB/s):";
      root.append(label);
      input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "alt-speed-up";
      input.id = makeUUID();
      label.setAttribute("for", input.id);
      root.append(input);
      const alt_upload_speed_input = input;
      label = document.createElement("label");
      label.textContent = "Download (kB/s):";
      root.append(label);
      input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "alt-speed-down";
      input.id = makeUUID();
      label.setAttribute("for", input.id);
      root.append(input);
      const alt_download_speed_input = input;
      cal = _PrefsDialog._createCheckAndLabel("alt-times-div", "Scheduled times");
      cal.check.dataset.key = "alt-speed-time-enabled";
      root.append(cal.root);
      const alt_times_check = cal.check;
      label = document.createElement("label");
      label.textContent = "From:";
      _PrefsDialog._enableIfChecked(label, cal.check);
      root.append(label);
      let select = document.createElement("select");
      select.id = makeUUID();
      select.dataset.key = "alt-speed-time-begin";
      _PrefsDialog._initTimeDropDown(select);
      label.setAttribute("for", select.id);
      root.append(select);
      _PrefsDialog._enableIfChecked(select, cal.check);
      const alt_from_select = select;
      label = document.createElement("label");
      label.textContent = "To:";
      _PrefsDialog._enableIfChecked(label, cal.check);
      root.append(label);
      select = document.createElement("select");
      select.id = makeUUID();
      select.dataset.key = "alt-speed-time-end";
      _PrefsDialog._initTimeDropDown(select);
      label.setAttribute("for", select.id);
      root.append(select);
      _PrefsDialog._enableIfChecked(select, cal.check);
      const alt_to_select = select;
      label = document.createElement("label");
      label.textContent = "On days:";
      _PrefsDialog._enableIfChecked(label, cal.check);
      root.append(label);
      select = document.createElement("select");
      select.id = makeUUID();
      select.dataset.key = "alt-speed-time-day";
      _PrefsDialog._initDayDropDown(select);
      label.setAttribute("for", select.id);
      root.append(select);
      _PrefsDialog._enableIfChecked(select, cal.check);
      const alt_days_select = select;
      return {
        alt_days_select,
        alt_download_speed_input,
        alt_from_select,
        alt_times_check,
        alt_to_select,
        alt_upload_speed_input,
        download_speed_check,
        download_speed_input,
        root,
        upload_speed_check,
        upload_speed_input
      };
    }
    static _createPeersPage() {
      const root = document.createElement("div");
      root.classList.add("prefs-peers-page");
      let label = document.createElement("div");
      label.textContent = "Connections";
      label.classList.add("section-label");
      root.append(label);
      label = document.createElement("label");
      label.textContent = "Max peers per torrent:";
      root.append(label);
      let input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "peer-limit-per-torrent";
      input.id = makeUUID();
      label.setAttribute("for", input.id);
      root.append(input);
      const max_peers_per_torrent_input = input;
      label = document.createElement("label");
      label.textContent = "Max peers overall:";
      root.append(label);
      input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "peer-limit-global";
      input.id = makeUUID();
      label.setAttribute("for", input.id);
      root.append(input);
      const max_peers_overall_input = input;
      label = document.createElement("div");
      label.textContent = "Options";
      label.classList.add("section-label");
      root.append(label);
      label = document.createElement("label");
      label.textContent = "Encryption mode:";
      root.append(label);
      const select = document.createElement("select");
      select.id = makeUUID();
      select.dataset.key = "encryption";
      select.options[0] = new Option("Prefer encryption", "preferred");
      select.options[1] = new Option("Allow encryption", "tolerated");
      select.options[2] = new Option("Require encryption", "required");
      root.append(select);
      const encryption_select = select;
      let cal = _PrefsDialog._createCheckAndLabel(
        "use-pex-div",
        "Use PEX to find more peers"
      );
      cal.check.title = "PEX is a tool for exchanging peer lists with the peers you're connected to.";
      cal.check.dataset.key = "pex-enabled";
      cal.label.title = cal.check.title;
      root.append(cal.root);
      const pex_check = cal.check;
      cal = _PrefsDialog._createCheckAndLabel(
        "use-dht-div",
        "Use DHT to find more peers"
      );
      cal.check.title = "DHT is a tool for finding peers without a tracker.";
      cal.check.dataset.key = "dht-enabled";
      cal.label.title = cal.check.title;
      root.append(cal.root);
      const dht_check = cal.check;
      cal = _PrefsDialog._createCheckAndLabel(
        "use-lpd-div",
        "Use LPD to find more peers"
      );
      cal.check.title = "LPD is a tool for finding peers on your local network.";
      cal.check.dataset.key = "lpd-enabled";
      cal.label.title = cal.check.title;
      root.append(cal.root);
      const lpd_check = cal.check;
      label = document.createElement("div");
      label.textContent = "Blocklist";
      label.classList.add("section-label");
      root.append(label);
      cal = _PrefsDialog._createCheckAndLabel(
        "blocklist-enabled-div",
        "Enable blocklist:"
      );
      cal.check.dataset.key = "blocklist-enabled";
      root.append(cal.root);
      const blocklist_enabled_check = cal.check;
      input = document.createElement("input");
      input.type = "url";
      input.value = "http://www.example.com/blocklist";
      input.dataset.key = "blocklist-url";
      root.append(input);
      _PrefsDialog._enableIfChecked(input, cal.check);
      const blocklist_url_input = input;
      label = document.createElement("label");
      label.textContent = "Blocklist has {n} rules";
      label.dataset.key = "blocklist-size";
      label.classList.add("blocklist-size-label");
      _PrefsDialog._enableIfChecked(label, cal.check);
      root.append(label);
      const button = document.createElement("button");
      button.classList.add("blocklist-update-button");
      button.textContent = "Update";
      root.append(button);
      _PrefsDialog._enableIfChecked(button, cal.check);
      const blocklist_update_button = button;
      return {
        blocklist_enabled_check,
        blocklist_update_button,
        blocklist_url_input,
        dht_check,
        encryption_select,
        lpd_check,
        max_peers_overall_input,
        max_peers_per_torrent_input,
        pex_check,
        root
      };
    }
    static _createNetworkPage() {
      const root = document.createElement("div");
      root.classList.add("prefs-network-page");
      let label = document.createElement("div");
      label.textContent = "Listening Port";
      label.classList.add("section-label");
      root.append(label);
      label = document.createElement("label");
      label.textContent = "Peer listening port:";
      root.append(label);
      const input = document.createElement("input");
      input.type = "number";
      input.dataset.key = "peer-port";
      input.id = makeUUID();
      label.setAttribute("for", input.id);
      root.append(input);
      const port_input = input;
      const port_status_div = document.createElement("div");
      port_status_div.classList.add("port-status");
      label = document.createElement("label");
      label.textContent = "IPv4 port is";
      port_status_div.append(label);
      const port_status_label_ipv4 = document.createElement("label");
      port_status_label_ipv4.textContent = "?";
      port_status_label_ipv4.classList.add("port-status-label");
      port_status_div.append(port_status_label_ipv4);
      port_status_div.append(document.createElement("br"));
      label = document.createElement("label");
      label.textContent = "IPv6 port is";
      port_status_div.append(label);
      const port_status_label_ipv6 = document.createElement("label");
      port_status_label_ipv6.textContent = "?";
      port_status_label_ipv6.classList.add("port-status-label");
      port_status_div.append(port_status_label_ipv6);
      root.append(port_status_div);
      let cal = _PrefsDialog._createCheckAndLabel(
        "randomize-port",
        "Randomize port on launch"
      );
      cal.check.dataset.key = "peer-port-random-on-start";
      root.append(cal.root);
      const random_port_check = cal.check;
      cal = _PrefsDialog._createCheckAndLabel(
        "port-forwarding",
        "Use port forwarding from my router"
      );
      cal.check.dataset.key = "port-forwarding-enabled";
      root.append(cal.root);
      const port_forwarding_check = cal.check;
      label = document.createElement("div");
      label.textContent = "Options";
      label.classList.add("section-label");
      root.append(label);
      cal = _PrefsDialog._createCheckAndLabel(
        "utp-enabled",
        "Enable uTP for peer communication"
      );
      cal.check.dataset.key = "utp-enabled";
      root.append(cal.root);
      const utp_check = cal.check;
      label = document.createElement("div");
      label.textContent = "Default Public Trackers";
      label.classList.add("section-label");
      root.append(label);
      const tracker_labels = [
        "Trackers to use on all public torrents.",
        "To add a backup URL, add it on the next line after a primary URL.",
        "To add a new primary URL, add it after a blank line."
      ];
      for (const text of tracker_labels) {
        label = document.createElement("label");
        label.classList.add("default-trackers-label");
        label.textContent = text;
        label.setAttribute("for", "default-trackers");
        root.append(label);
      }
      const textarea = document.createElement("textarea");
      textarea.dataset.key = "default-trackers";
      textarea.id = "default-trackers";
      root.append(textarea);
      const default_trackers_textarea = textarea;
      return {
        default_trackers_textarea,
        port_forwarding_check,
        port_input,
        port_status_label: {
          ipv4: port_status_label_ipv4,
          ipv6: port_status_label_ipv6
        },
        random_port_check,
        root,
        utp_check
      };
    }
    static _create() {
      const pages = {
        network: _PrefsDialog._createNetworkPage(),
        peers: _PrefsDialog._createPeersPage(),
        speed: _PrefsDialog._createSpeedPage(),
        torrents: _PrefsDialog._createTorrentsPage()
      };
      const elements = createTextualTabsContainer("prefs-dialog", [
        ["prefs-tab-torrent", pages.torrents.root, "Torrents"],
        ["prefs-tab-speed", pages.speed.root, "Speed"],
        ["prefs-tab-peers", pages.peers.root, "Peers"],
        ["prefs-tab-network", pages.network.root, "Network"]
      ]);
      return { ...elements, ...pages };
    }
    constructor(session_manager, remote) {
      super();
      this.closed = false;
      this.session_manager = session_manager;
      this.remote = remote;
      this.update_from_session = () => this._update();
      this.elements = _PrefsDialog._create();
      this.elements.peers.blocklist_update_button.addEventListener(
        "click",
        (event_) => {
          setTextContent(event_.target, "Updating blocklist...");
          this.remote.updateBlocklist();
          this._setBlocklistButtonEnabled(false);
        }
      );
      this.elements.torrents.register_handler_button.addEventListener(
        "click",
        (event_) => {
          _PrefsDialog._toggleProtocolHandler(event_.currentTarget);
        }
      );
      this.elements.dismiss.addEventListener("click", () => this.close());
      this.outside = new OutsideClickListener(this.elements.root);
      this.outside.addEventListener("click", () => this.close());
      Object.seal(this);
      const on_change = this._onControlChanged.bind(this);
      const walk = (o) => {
        for (const element of Object.values(o)) {
          if (element.tagName === "INPUT") {
            switch (element.type) {
              case "checkbox":
              case "radio":
              case "number":
              case "text":
              case "url":
                element.addEventListener("change", on_change);
                break;
              default:
                console.trace(`unhandled input: ${element.type}`);
                break;
            }
          } else if (element.tagName === "TEXTAREA" || element.tagName === "SELECT") {
            element.addEventListener("change", on_change);
          }
        }
      };
      walk(this.elements.network);
      walk(this.elements.peers);
      walk(this.elements.speed);
      walk(this.elements.torrents);
      this.session_manager.addEventListener(
        "session-change",
        this.update_from_session
      );
      this.update_from_session();
      document.body.append(this.elements.root);
    }
    close() {
      if (!this.closed) {
        this.outside.stop();
        this.session_manager.removeEventListener(
          "session-change",
          this.update_from_session
        );
        this.elements.root.remove();
        dispatchEvent(new Event("close"));
        for (const key of Object.keys(this)) {
          this[key] = null;
        }
        this.closed = true;
      }
    }
  };

  // src/remove-dialog.js
  var RemoveDialog = class _RemoveDialog extends EventTarget {
    constructor(options) {
      super();
      this.options = options;
      this.elements = _RemoveDialog._create(options);
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      this.elements.confirm.addEventListener("click", () => this._onConfirm());
      document.body.append(this.elements.root);
      this.elements.dismiss.focus();
    }
    close() {
      if (!this.closed) {
        this.elements.root.remove();
        this.dispatchEvent(new Event("close"));
        for (const key of Object.keys(this)) {
          delete this[key];
        }
        this.closed = true;
      }
    }
    _onDismiss() {
      this.close();
    }
    _onConfirm() {
      const { remote, torrents, trash } = this.options;
      if (torrents.length > 0) {
        remote.removeTorrents(torrents, trash);
      }
      this.close();
    }
    static _create(options) {
      const { trash } = options;
      const { heading, message } = _RemoveDialog._createMessage(options);
      const elements = createDialogContainer("remove-dialog");
      elements.heading.textContent = heading;
      elements.message.textContent = message;
      elements.confirm.textContent = trash ? "Trash" : "Remove";
      return elements;
    }
    static _createMessage(options) {
      let heading = null;
      let message = null;
      const { torrents, trash } = options;
      const [torrent] = torrents;
      if (trash && torrents.length === 1) {
        heading = `Remove ${torrent.getName()} and delete data?`;
        message = "All data downloaded for this torrent will be deleted. Are you sure you want to remove it?";
      } else if (trash) {
        heading = `Remove ${torrents.length} transfers and delete data?`;
        message = "All data downloaded for these torrents will be deleted. Are you sure you want to remove them?";
      } else if (torrents.length === 1) {
        heading = `Remove ${torrent.getName()}?`;
        message = "Once removed, continuing the transfer will require the torrent file. Are you sure you want to remove it?";
      } else {
        heading = `Remove ${torrents.length} transfers?`;
        message = "Once removed, continuing the transfers will require the torrent files. Are you sure you want to remove them?";
      }
      return { heading, message };
    }
  };

  // src/rename-dialog.js
  var RenameDialog = class _RenameDialog extends EventTarget {
    constructor(controller, remote) {
      super();
      this.controller = controller;
      this.remote = remote;
      this.elements = {};
      this.torrents = [];
      this.show();
    }
    show() {
      const torrents = this.controller.getSelectedTorrents();
      if (torrents.length !== 1) {
        console.trace();
        return;
      }
      this.torrents = torrents;
      this.elements = _RenameDialog._create();
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      this.elements.confirm.addEventListener("click", () => this._onConfirm());
      this.elements.entry.value = torrents[0].getName();
      document.body.append(this.elements.root);
      this.elements.entry.focus();
    }
    close() {
      this.elements.root.remove();
      this.dispatchEvent(new Event("close"));
      delete this.controller;
      delete this.remote;
      delete this.elements;
      delete this.torrents;
    }
    _onDismiss() {
      this.close();
    }
    _onConfirm() {
      const [tor] = this.torrents;
      const old_name = tor.getName();
      const new_name = this.elements.entry.value;
      this.remote.renameTorrent([tor.getId()], old_name, new_name, (response) => {
        if (response.result === "success") {
          tor.refresh(response.arguments);
        }
      });
      this.close();
    }
    static _create() {
      const elements = createDialogContainer("rename-dialog");
      elements.root.setAttribute("aria-label", "Rename Torrent");
      elements.heading.textContent = "Enter new name:";
      elements.confirm.textContent = "Rename";
      const label = document.createElement("label");
      label.setAttribute("for", "torrent-rename-name");
      label.textContent = "Enter new name:";
      elements.workarea.append(label);
      const entry = document.createElement("input");
      entry.setAttribute("type", "text");
      entry.id = "torrent-rename-name";
      elements.entry = entry;
      elements.workarea.append(entry);
      return elements;
    }
  };

  // src/labels-dialog.js
  var LabelsDialog = class _LabelsDialog extends EventTarget {
    constructor(controller, remote) {
      super();
      this.controller = controller;
      this.remote = remote;
      this.elements = {};
      this.torrents = [];
      this.show();
    }
    show() {
      const torrents = this.controller.getSelectedTorrents();
      if (torrents.length === 0) {
        console.error("At least one selected torrent expected.");
        return;
      }
      const [first] = torrents;
      this.torrents = torrents;
      this.elements = _LabelsDialog._create();
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      this.elements.confirm.addEventListener("click", () => this._onConfirm());
      this.elements.entry.value = first.getLabels().join(", ");
      document.body.append(this.elements.root);
      this.elements.entry.focus();
    }
    close() {
      this.elements.root.remove();
      this.dispatchEvent(new Event("close"));
      delete this.elements;
      delete this.torrents;
    }
    _onDismiss() {
      this.close();
    }
    _onConfirm() {
      const { torrents } = this;
      const { remote } = this;
      const ids = torrents.map((t) => t.getId());
      const { elements } = this;
      const { entry } = elements;
      const { value } = entry;
      const labels = value.split(/ *, */).filter((l) => l.length > 0);
      remote.setLabels(ids, labels, (response) => {
        if (response.result === "success") {
          for (const t of torrents) {
            t.refresh({ labels });
          }
        }
      });
      this.close();
    }
    static _create() {
      const elements = createDialogContainer("labels-dialog");
      elements.root.setAttribute("aria-label", "Edit Labels");
      elements.heading.textContent = "Edit Labels:";
      elements.confirm.textContent = "Save";
      const label = document.createElement("label");
      label.setAttribute("for", "torrent-labels");
      label.textContent = "Labels:";
      elements.workarea.append(label);
      const entry = document.createElement("input");
      entry.setAttribute("type", "text");
      entry.id = "torrent-labels";
      elements.entry = entry;
      elements.workarea.append(entry);
      return elements;
    }
  };

  // src/shortcuts-dialog.js
  var ShortcutsDialog = class _ShortcutsDialog extends EventTarget {
    constructor(action_manager) {
      super();
      this.elements = _ShortcutsDialog._create(action_manager);
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      document.body.append(this.elements.root);
      this.elements.dismiss.focus();
    }
    close() {
      this.elements.root.remove();
      this.dispatchEvent(new Event("close"));
      delete this.elements;
    }
    _onDismiss() {
      this.close();
    }
    static _create(action_manager) {
      const elements = createDialogContainer("shortcuts-dialog");
      elements.root.setAttribute("aria-label", "Keyboard Shortcuts");
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      table.append(thead);
      let tr = document.createElement("tr");
      thead.append(tr);
      let th = document.createElement("th");
      th.textContent = "Key";
      tr.append(th);
      th = document.createElement("th");
      th.textContent = "Action";
      tr.append(th);
      const tbody = document.createElement("tbody");
      table.append(tbody);
      const o = {};
      for (const [shortcut, name] of action_manager.allShortcuts().entries()) {
        const tokens = shortcut.split("+");
        const sortKey = [tokens.pop(), ...tokens].join("+");
        o[sortKey] = { name, shortcut };
      }
      for (const [, values] of Object.entries(o).sort()) {
        const { name, shortcut } = values;
        tr = document.createElement("tr");
        tbody.append(tr);
        let td = document.createElement("td");
        td.textContent = shortcut.replaceAll("+", " + ");
        tr.append(td);
        td = document.createElement("td");
        td.textContent = action_manager.text(name);
        tr.append(td);
      }
      elements.heading.textContent = "Transmission";
      elements.dismiss.textContent = "Close";
      elements.heading.textContent = "Keyboard shortcuts";
      elements.message.append(table);
      elements.confirm.remove();
      delete elements.confirm;
      return elements;
    }
  };

  // src/statistics-dialog.js
  var StatisticsDialog = class _StatisticsDialog extends EventTarget {
    constructor(remote) {
      super();
      this.remote = remote;
      const updateDaemon = () => this.remote.loadDaemonStats((data) => this._update(data.arguments));
      const delay_msec = 5e3;
      this.interval = setInterval(updateDaemon, delay_msec);
      updateDaemon();
      this.elements = _StatisticsDialog._create();
      this.elements.dismiss.addEventListener("click", () => this._onDismiss());
      document.body.append(this.elements.root);
      this.elements.dismiss.focus();
    }
    close() {
      if (!this.closed) {
        clearInterval(this.interval);
        this.elements.root.remove();
        for (const key of Object.keys(this)) {
          delete this[key];
        }
        this.closed = true;
      }
    }
    _onDismiss() {
      this.close();
    }
    _update(stats) {
      console.log(stats);
      const fmt = Formatter;
      let s = stats["current-stats"];
      let ratio = Utils.ratio(s.uploadedBytes, s.downloadedBytes);
      setTextContent(this.elements.session.up, fmt.size(s.uploadedBytes));
      setTextContent(this.elements.session.down, fmt.size(s.downloadedBytes));
      this.elements.session.ratio.innerHTML = fmt.ratioString(ratio);
      setTextContent(
        this.elements.session.time,
        fmt.timeInterval(s.secondsActive)
      );
      s = stats["cumulative-stats"];
      ratio = Utils.ratio(s.uploadedBytes, s.downloadedBytes);
      setTextContent(this.elements.total.up, fmt.size(s.uploadedBytes));
      setTextContent(this.elements.total.down, fmt.size(s.downloadedBytes));
      this.elements.total.ratio.innerHTML = fmt.ratioString(ratio);
      setTextContent(this.elements.total.time, fmt.timeInterval(s.secondsActive));
    }
    static _create() {
      const elements = createDialogContainer("statistics-dialog");
      const { confirm: confirm2, dismiss, heading, root, workarea } = elements;
      confirm2.remove();
      dismiss.textContent = "Close";
      delete elements.confirm;
      const heading_text = "Statistics";
      root.setAttribute("aria-label", heading_text);
      heading.textContent = heading_text;
      const labels = ["Uploaded:", "Downloaded:", "Ratio:", "Running time:"];
      let section = createInfoSection("Current session", labels);
      const [sup, sdown, sratio, stime] = section.children;
      const session = elements.session = {};
      session.up = sup;
      session.down = sdown;
      session.ratio = sratio;
      session.time = stime;
      workarea.append(section.root);
      section = createInfoSection("Total", labels);
      const [tup, tdown, tratio, ttime] = section.children;
      const total = elements.total = {};
      total.up = tup;
      total.down = tdown;
      total.ratio = tratio;
      total.time = ttime;
      workarea.append(section.root);
      return elements;
    }
  };

  // src/torrent-row-group.js
  var TorrentRowGroup = class _TorrentRowGroup {
    constructor(path) {
      this._element = _TorrentRowGroup._create(path);
    }
    static _create(path) {
      const root = document.createElement("li");
      root.classList.add("folder");
      root.dataset.path = path;
      const folderData = document.createElement("div");
      folderData.classList.add("data");
      root.append(folderData);
      const icon = document.createElement("div");
      icon.classList.add("folder-icon");
      folderData.append(icon);
      const name = document.createElement("div");
      name.classList.add("folder-name");
      setTextContent(name, path);
      folderData.append(name);
      const ul = document.createElement("ul");
      root.append(ul);
      return root;
    }
    getElement() {
      return this._element;
    }
  };

  // src/torrent-row.js
  var TorrentRendererHelper = {
    createIcon: (torrent) => {
      const icon = document.createElement("div");
      icon.classList.add("icon");
      icon.dataset.iconMimeType = torrent.getPrimaryMimeType().split("/", 1).pop();
      icon.dataset.iconMultifile = torrent.getFileCount() > 1 ? "true" : "false";
      return icon;
    },
    formatDL: (t) => {
      return `\u25BC ${Formatter.speedBps(t.getDownloadSpeed())}`;
    },
    formatETA: (t) => {
      const eta = t.getETA();
      if (eta < 0 || eta >= 999 * 60 * 60) {
        return "";
      }
      return `ETA: ${Formatter.timeInterval(eta, 1)}`;
    },
    formatLabels: (t, label) => {
      const labels = t.getLabels();
      label.innerHTML = "";
      for (const label_ of labels) {
        const s = document.createElement("span");
        s.classList.add("torrent-label");
        s.textContent = label_;
        label.append(s);
      }
    },
    formatUL: (t) => {
      return `\u25B2 ${Formatter.speedBps(t.getUploadSpeed())}`;
    },
    getProgressInfo: (controller, t) => {
      const status = t.getStatus();
      const classList = ["torrent-progress-bar"];
      let percent = null;
      if (status === Torrent._StatusStopped) {
        classList.push("paused");
      }
      if (t.needsMetaData()) {
        classList.push("magnet");
        percent = t.getMetadataPercentComplete() * 100;
      } else if (status === Torrent._StatusCheck) {
        classList.push("verify");
        percent = t.getRecheckProgress() * 100;
      } else if (t.getLeftUntilDone() > 0) {
        classList.push("leech");
        percent = t.getPercentDone() * 100;
      } else {
        classList.push("seed");
        const seed_ratio_limit = t.seedRatioLimit(controller);
        percent = seed_ratio_limit > 0 ? t.getUploadRatio() * 100 / seed_ratio_limit : 100;
      }
      if (t.isQueued()) {
        classList.push("queued");
      }
      return {
        classList,
        percent
      };
    },
    renderProgressbar: (controller, t, progressbar) => {
      const info = TorrentRendererHelper.getProgressInfo(controller, t);
      progressbar.className = info.classList.join(" ");
      progressbar.style.setProperty("--progress", `${info.percent.toFixed(2)}%`);
    }
  };
  var TorrentRendererFull = class _TorrentRendererFull {
    static getPeerDetails(t) {
      const fmt = Formatter;
      const error = t.getErrorMessage();
      if (error) {
        return error;
      }
      if (t.isDownloading()) {
        const peer_count = t.getPeersConnected();
        const webseed_count = t.getWebseedsSendingToUs();
        if (webseed_count && peer_count) {
          return [
            "Downloading from",
            t.getPeersSendingToUs(),
            "of",
            fmt.countString("peer", "peers", peer_count),
            "and",
            fmt.countString("web seed", "web seeds", webseed_count),
            "\u2013",
            TorrentRendererHelper.formatDL(t),
            TorrentRendererHelper.formatUL(t)
          ].join(" ");
        }
        if (webseed_count) {
          return [
            "Downloading from",
            fmt.countString("web seed", "web seeds", webseed_count),
            "\u2013",
            TorrentRendererHelper.formatDL(t),
            TorrentRendererHelper.formatUL(t)
          ].join(" ");
        }
        return [
          "Downloading from",
          t.getPeersSendingToUs(),
          "of",
          fmt.countString("peer", "peers", peer_count),
          "\u2013",
          TorrentRendererHelper.formatDL(t),
          TorrentRendererHelper.formatUL(t)
        ].join(" ");
      }
      if (t.isSeeding()) {
        return [
          "Seeding to",
          t.getPeersGettingFromUs(),
          "of",
          fmt.countString("peer", "peers", t.getPeersConnected()),
          "-",
          TorrentRendererHelper.formatUL(t)
        ].join(" ");
      }
      if (t.isChecking()) {
        return [
          "Verifying local data (",
          Formatter.percentString(100 * t.getRecheckProgress()),
          "% tested)"
        ].join("");
      }
      return t.getStateString();
    }
    static getProgressDetails(controller, t) {
      if (t.needsMetaData()) {
        let MetaDataStatus = "retrieving";
        if (t.isStopped()) {
          MetaDataStatus = "needs";
        }
        const percent = 100 * t.getMetadataPercentComplete();
        return [
          `Magnetized transfer - ${MetaDataStatus} metadata (`,
          Formatter.percentString(percent),
          "%)"
        ].join("");
      }
      const sizeWhenDone = t.getSizeWhenDone();
      const totalSize = t.getTotalSize();
      const is_done = t.isDone() || t.isSeeding();
      const c = [];
      if (is_done) {
        if (totalSize === sizeWhenDone) {
          c.push(Formatter.size(totalSize));
        } else {
          c.push(
            Formatter.size(sizeWhenDone),
            " of ",
            Formatter.size(t.getTotalSize()),
            " (",
            t.getPercentDoneStr(),
            "%)"
          );
        }
        c.push(
          ", uploaded ",
          Formatter.size(t.getUploadedEver()),
          " (Ratio ",
          Formatter.ratioString(t.getUploadRatio()),
          ")"
        );
      } else {
        c.push(
          Formatter.size(sizeWhenDone - t.getLeftUntilDone()),
          " of ",
          Formatter.size(sizeWhenDone),
          " (",
          t.getPercentDoneStr(),
          "%)"
        );
      }
      if (!t.isStopped() && (!is_done || t.seedRatioLimit(controller) > 0)) {
        c.push(" - ");
        const eta = t.getETA();
        if (eta < 0 || eta >= 999 * 60 * 60) {
          c.push("remaining time unknown");
        } else {
          c.push(Formatter.timeInterval(t.getETA(), 1), " remaining");
        }
      }
      return c.join("");
    }
    // eslint-disable-next-line class-methods-use-this
    render(controller, t, root) {
      const is_stopped = t.isStopped();
      root.classList.toggle("paused", is_stopped);
      let e = root._name_container;
      setTextContent(e, t.getName());
      TorrentRendererHelper.formatLabels(t, root._labels_container);
      e = root._progress_details_container;
      e.innerHTML = _TorrentRendererFull.getProgressDetails(controller, t);
      TorrentRendererHelper.renderProgressbar(controller, t, root._progressbar);
      root._progressbar.classList.add("full");
      const has_error = t.getError() !== Torrent._ErrNone;
      e = root._peer_details_container;
      e.classList.toggle("error", has_error);
      setTextContent(e, _TorrentRendererFull.getPeerDetails(t));
      e = root._toggle_running_button;
      e.alt = is_stopped ? "Resume" : "Pause";
      e.dataset.action = is_stopped ? "resume" : "pause";
    }
    // eslint-disable-next-line class-methods-use-this
    createRow(torrent) {
      const root = document.createElement("li");
      root.className = "torrent";
      const icon = TorrentRendererHelper.createIcon(torrent);
      const name = document.createElement("div");
      name.className = "torrent-name";
      const labels = document.createElement("div");
      labels.className = "torrent-labels";
      const details = document.createElement("div");
      details.className = "torrent-progress-details";
      const progress = document.createElement("div");
      progress.classList.add("torrent-progress");
      const progressbar = document.createElement("div");
      progressbar.classList.add("torrent-progress-bar", "full");
      progress.append(progressbar);
      const peers = document.createElement("div");
      peers.className = "torrent-peer-details";
      const button = document.createElement("a");
      button.className = "torrent-pauseresume-button";
      progress.append(button);
      root.append(icon);
      root.append(name);
      root.append(labels);
      root.append(details);
      root.append(progress);
      root.append(peers);
      root._icon = icon;
      root._name_container = name;
      root._labels_container = labels;
      root._progress_details_container = details;
      root._progressbar = progressbar;
      root._peer_details_container = peers;
      root._toggle_running_button = button;
      return root;
    }
  };
  var TorrentRendererCompact = class _TorrentRendererCompact {
    static getPeerDetails(t) {
      const errorMessage = t.getErrorMessage();
      if (errorMessage) {
        return errorMessage;
      }
      if (t.isDownloading()) {
        const have_dn = t.getDownloadSpeed() > 0;
        const have_up = t.getUploadSpeed() > 0;
        if (!have_up && !have_dn) {
          return "Idle";
        }
        const s = [`${TorrentRendererHelper.formatETA(t)} `];
        if (have_dn) {
          s.push(TorrentRendererHelper.formatDL(t));
        }
        if (have_up) {
          s.push(TorrentRendererHelper.formatUL(t));
        }
        return s.join(" ");
      }
      if (t.isSeeding()) {
        return `Ratio: ${Formatter.ratioString(
          t.getUploadRatio()
        )}, ${TorrentRendererHelper.formatUL(t)}`;
      }
      return t.getStateString();
    }
    // eslint-disable-next-line class-methods-use-this
    render(controller, t, root) {
      root.classList.toggle("paused", t.isStopped());
      let e = root._name_container;
      setTextContent(e, t.getName());
      TorrentRendererHelper.formatLabels(t, root._labels_container);
      TorrentRendererHelper.renderProgressbar(controller, t, root._progressbar);
      root._progressbar.classList.add("compact");
      const has_error = t.getError() !== Torrent._ErrNone;
      e = root._details_container;
      e.classList.toggle("error", has_error);
      setTextContent(e, _TorrentRendererCompact.getPeerDetails(t));
    }
    // eslint-disable-next-line class-methods-use-this
    createRow(torrent) {
      const progressbar = document.createElement("div");
      progressbar.classList.add("torrent-progress-bar", "compact");
      const icon = TorrentRendererHelper.createIcon(torrent);
      const details = document.createElement("div");
      details.className = "torrent-peer-details compact";
      const labels = document.createElement("div");
      labels.className = "torrent-labels compact";
      const name = document.createElement("div");
      name.className = "torrent-name compact";
      const root = document.createElement("li");
      root.append(progressbar);
      root.append(details);
      root.append(labels);
      root.append(name);
      root.append(icon);
      root.className = "torrent compact";
      root._progressbar = progressbar;
      root._details_container = details;
      root._labels_container = labels;
      root._name_container = name;
      return root;
    }
  };
  var TorrentRow = class {
    constructor(view, controller, torrent) {
      this._view = view;
      this._torrent = torrent;
      this._element = view.createRow(torrent);
      const update = () => this.render(controller);
      this._torrent.addEventListener("dataChanged", update);
      update();
    }
    getElement() {
      return this._element;
    }
    render(controller) {
      const tor = this.getTorrent();
      if (tor) {
        this._view.render(controller, tor, this.getElement());
      }
    }
    isSelected() {
      return this.getElement().classList.contains("selected");
    }
    getTorrent() {
      return this._torrent;
    }
    getTorrentId() {
      return this.getTorrent().getId();
    }
  };

  // src/transmission.js
  var Transmission = class _Transmission extends EventTarget {
    constructor(action_manager, notifications, prefs) {
      super();
      this.action_manager = action_manager;
      this.notifications = notifications;
      this.prefs = prefs;
      this.remote = new Remote(this);
      this.addEventListener(
        "torrent-selection-changed",
        (event_) => this.action_manager.update(event_)
      );
      this.filterText = "";
      this._torrents = {};
      this._rows = [];
      this.dirtyTorrents = /* @__PURE__ */ new Set();
      this.changeStatus = false;
      this.refilterSoon = debounce(() => this._refilter(false));
      this.refilterAllSoon = debounce(() => this._refilter(true));
      this.boundPopupCloseListener = this.popupCloseListener.bind(this);
      this.isTouch = "ontouchstart" in window ? true : false;
      this.busyclick = false;
      for (const element of document.querySelectorAll(`button[data-action]`)) {
        const { action } = element.dataset;
        setEnabled(element, this.action_manager.isEnabled(action));
        element.addEventListener("click", () => {
          this.action_manager.click(action);
        });
      }
      document.querySelector("#filter-tracker").addEventListener("change", (event_) => {
        this.setFilterTracker(
          event_.target.value === "all" ? null : event_.target.value
        );
      });
      this.action_manager.addEventListener("change", (event_) => {
        for (const element of document.querySelectorAll(
          `[data-action="${event_.action}"]`
        )) {
          setEnabled(element, event_.enabled);
        }
      });
      this.action_manager.addEventListener("click", (event_) => {
        switch (event_.action) {
          case "deselect-all":
            this._deselectAll();
            break;
          case "move-bottom":
            this._moveBottom();
            break;
          case "move-down":
            this._moveDown();
            break;
          case "move-top":
            this._moveTop();
            break;
          case "move-up":
            this._moveUp();
            break;
          case "open-torrent":
            this.setCurrentPopup(new OpenDialog(this, this.remote));
            break;
          case "pause-all-torrents":
            this._stopTorrents(this._getAllTorrents());
            break;
          case "pause-selected-torrents":
            this._stopTorrents(this.getSelectedTorrents());
            break;
          case "reannounce-selected-torrents":
            this._reannounceTorrents(this.getSelectedTorrents());
            break;
          case "remove-selected-torrents":
            this._removeSelectedTorrents(false);
            break;
          case "resume-selected-torrents":
            this._startSelectedTorrents(false);
            break;
          case "resume-selected-torrents-now":
            this._startSelectedTorrents(true);
            break;
          case "select-all":
            this._selectAll();
            break;
          case "show-about-dialog":
            this.setCurrentPopup(new AboutDialog(this.version_info));
            break;
          case "show-inspector":
            if (this.popup instanceof Inspector) {
              this.setCurrentPopup(null);
            } else {
              this.setCurrentPopup(new Inspector(this));
            }
            break;
          case "show-move-dialog":
            this.setCurrentPopup(new MoveDialog(this, this.remote));
            break;
          case "show-overflow-menu":
            if (this.popup instanceof OverflowMenu) {
              this.setCurrentPopup(null);
            } else {
              this.setCurrentPopup(
                new OverflowMenu(
                  this,
                  this.prefs,
                  this.remote,
                  this.action_manager
                )
              );
            }
            break;
          case "show-preferences-dialog":
            this.setCurrentPopup(new PrefsDialog(this, this.remote));
            break;
          case "show-shortcuts-dialog":
            this.setCurrentPopup(new ShortcutsDialog(this.action_manager));
            break;
          case "show-statistics-dialog":
            this.setCurrentPopup(new StatisticsDialog(this.remote));
            break;
          case "show-rename-dialog":
            this.setCurrentPopup(new RenameDialog(this, this.remote));
            break;
          case "show-labels-dialog":
            this.setCurrentPopup(new LabelsDialog(this, this.remote));
            break;
          case "start-all-torrents":
            this._startTorrents(this._getAllTorrents());
            break;
          case "toggle-compact-rows":
            this.prefs.display_mode = this.prefs.display_mode === Prefs.DisplayCompact ? Prefs.DisplayFull : Prefs.DisplayCompact;
            break;
          case "trash-selected-torrents":
            this._removeSelectedTorrents(true);
            break;
          case "verify-selected-torrents":
            this._verifyTorrents(this.getSelectedTorrents());
            break;
          default:
            console.warn(`unhandled action: ${event_.action}`);
        }
      });
      let e = document.querySelector("#filter-mode");
      e.value = this.prefs.filter_mode;
      e.addEventListener("change", (event_) => {
        this.prefs.filter_mode = event_.target.value;
        this.refilterAllSoon();
      });
      document.addEventListener("keydown", this._keyDown.bind(this));
      document.addEventListener("keyup", this._keyUp.bind(this));
      e = document.querySelector("#torrent-container");
      e.addEventListener("click", (e_) => {
        if (this.popup && this.popup.name !== "inspector") {
          this.setCurrentPopup(null);
        }
        if (e_.target === e_.currentTarget) {
          this._deselectAll();
        }
      });
      e.addEventListener("dblclick", () => {
        if (!this.popup || this.popup.name !== "inspector") {
          this.action_manager.click("show-inspector");
        }
      });
      e.addEventListener("dragenter", _Transmission._dragenter);
      e.addEventListener("dragover", _Transmission._dragenter);
      e.addEventListener("drop", this._drop.bind(this));
      this._setupSearchBox();
      this.elements = {
        torrent_list: document.querySelector("#torrent-list")
      };
      const rightc = (event_) => {
        if (this.isTouch && event_.touches.length > 1) {
          return;
        }
        const row_element = event_.target?.closest(".torrent");
        if (!row_element) {
          return;
        }
        const row = this._rows.find((r) => r.getElement() === row_element);
        if (row && !row.isSelected()) {
          this._setSelectedRow(row);
        }
        const popup = new ContextMenu(this.action_manager);
        this.setCurrentPopup(popup);
        const boundingElement = document.querySelector("#torrent-container");
        const bounds = boundingElement.getBoundingClientRect();
        const x = Math.min(
          this.isTouch ? event_.touches[0].clientX : event_.x,
          bounds.x + bounds.width - popup.root.clientWidth
        );
        const y = Math.min(
          this.isTouch ? event_.touches[0].clientY : event_.y,
          bounds.y + bounds.height - popup.root.clientHeight
        );
        popup.root.style.left = `${x > 0 ? x : 0}px`;
        popup.root.style.top = `${y > 0 ? y : 0}px`;
        event_.preventDefault();
      };
      if (this.isTouch) {
        this.elements.torrent_list.addEventListener("touchstart", (event_) => {
          if (this.busyclick) {
            clearTimeout(this.busyclick);
            this.busyclick = false;
          } else {
            this.busyclick = setTimeout(rightc.bind(this), 500, event_);
          }
        });
        this.elements.torrent_list.addEventListener("touchend", () => {
          clearTimeout(this.busyclick);
          this.busyclick = false;
          setTimeout(() => {
            if (this.popup) {
              this.popup.root.style.pointerEvents = "auto";
            }
          }, 1);
        });
        this.elements.torrent_list.addEventListener("touchmove", () => {
          clearTimeout(this.busyclick);
          this.busyclick = false;
        });
        this.elements.torrent_list.addEventListener("contextmenu", (event_) => {
          event_.preventDefault();
        });
      } else {
        this.elements.torrent_list.addEventListener("contextmenu", (event_) => {
          rightc(event_);
          if (this.popup) {
            this.popup.root.style.pointerEvents = "auto";
          }
        });
      }
      this.loadDaemonPrefs();
      this._initializeTorrents();
      this.refreshTorrents();
      this.togglePeriodicSessionRefresh(true);
      this.prefs.addEventListener(
        "change",
        ({ key, value }) => this._onPrefChanged(key, value)
      );
      for (const [key, value] of this.prefs.entries()) {
        this._onPrefChanged(key, value);
      }
    }
    _openTorrentFromUrl() {
      setTimeout(() => {
        const addTorrent = new URLSearchParams(window.location.search).get(
          "addtorrent"
        );
        if (addTorrent) {
          this.setCurrentPopup(new OpenDialog(this, this.remote, addTorrent));
          const newUrl = new URL(window.location);
          newUrl.search = "";
          window.history.pushState("", "", newUrl.toString());
        }
      }, 0);
    }
    loadDaemonPrefs() {
      this.remote.loadDaemonPrefs((data) => {
        this.session_properties = data.arguments;
        this._openTorrentFromUrl();
      });
    }
    get session_properties() {
      return this._session_properties;
    }
    set session_properties(o) {
      if (deepEqual(this._session_properties, o)) {
        return;
      }
      this._session_properties = Object.seal(o);
      const event = new Event("session-change");
      event.session_properties = o;
      this.dispatchEvent(event);
      this._updateGuiFromSession(o);
    }
    _setupSearchBox() {
      const e = document.querySelector("#torrent-search");
      const blur_token = "blur";
      e.classList.add(blur_token);
      e.addEventListener("blur", () => e.classList.add(blur_token));
      e.addEventListener("focus", () => e.classList.remove(blur_token));
      e.addEventListener("keyup", () => this._setFilterText(e.value));
    }
    _onPrefChanged(key, value) {
      switch (key) {
        case Prefs.DisplayMode: {
          this.torrentRenderer = value === "compact" ? new TorrentRendererCompact() : new TorrentRendererFull();
          this.refilterAllSoon();
          break;
        }
        case Prefs.ContrastMode: {
          document.body.classList.remove("contrast-more");
          document.body.classList.remove("contrast-less");
          document.body.classList.add(`contrast-${value}`);
          break;
        }
        case Prefs.FilterMode:
        case Prefs.SortDirection:
        case Prefs.SortMode:
        case Prefs.GroupByPath:
          this.refilterAllSoon();
          break;
        case Prefs.RefreshRate: {
          clearInterval(this.refreshTorrentsInterval);
          const callback = this.refreshTorrents.bind(this);
          const msec = Math.max(2, this.prefs.refresh_rate_sec) * 1e3;
          this.refreshTorrentsInterval = setInterval(callback, msec);
          break;
        }
        default:
          break;
      }
    }
    /// UTILITIES
    _getAllTorrents() {
      return Object.values(this._torrents);
    }
    static _getTorrentIds(torrents) {
      return torrents.map((t) => t.getId());
    }
    seedRatioLimit() {
      const p = this.session_properties;
      if (p && p.seedRatioLimited) {
        return p.seedRatioLimit;
      }
      return -1;
    }
    getAllTorrentsPaths() {
      const paths = [
        ...new Set(Object.values(this._torrents).map((v) => v.getDownloadDir()))
      ];
      return [...paths.sort((a, b) => a.localeCompare(b))];
    }
    /// SELECTION
    _getSelectedRows() {
      return this._rows.filter((r) => r.isSelected());
    }
    getSelectedTorrents() {
      return this._getSelectedRows().map((r) => r.getTorrent());
    }
    _getSelectedTorrentIds() {
      return _Transmission._getTorrentIds(this.getSelectedTorrents());
    }
    _setSelectedRow(row) {
      const e_sel = row ? row.getElement() : null;
      for (const e of this.elements.torrent_list.querySelectorAll("li.torrent")) {
        e.classList.toggle("selected", e === e_sel);
      }
      this._dispatchSelectionChanged();
    }
    _selectRow(row) {
      row.getElement().classList.add("selected");
      this._dispatchSelectionChanged();
    }
    _deselectRow(row) {
      row.getElement().classList.remove("selected");
      this._dispatchSelectionChanged();
    }
    _selectAll() {
      for (const e of this.elements.torrent_list.querySelectorAll("li.torrent")) {
        e.classList.add("selected");
      }
      this._dispatchSelectionChanged();
    }
    _deselectAll() {
      for (const e of this.elements.torrent_list.querySelectorAll("li.torrent")) {
        e.classList.remove("selected");
      }
      this._dispatchSelectionChanged();
      delete this._last_torrent_clicked;
    }
    _indexOfLastTorrent() {
      return this._rows.findIndex(
        (row) => row.getTorrentId() === this._last_torrent_clicked
      );
    }
    // Select a range from this row to the last clicked torrent
    _selectRange(row) {
      const last = this._indexOfLastTorrent();
      if (last === -1) {
        this._selectRow(row);
      } else {
        const next = this._rows.indexOf(row);
        const min = Math.min(last, next);
        const max = Math.max(last, next);
        for (let index = min; index <= max; ++index) {
          this._selectRow(this._rows[index]);
        }
      }
      this._dispatchSelectionChanged();
    }
    _dispatchSelectionChanged() {
      const nonselected = [];
      const selected = [];
      for (const r of this._rows) {
        (r.isSelected() ? selected : nonselected).push(r.getTorrent());
      }
      const event = new Event("torrent-selection-changed");
      event.nonselected = nonselected;
      event.selected = selected;
      this.dispatchEvent(event);
    }
    /*--------------------------------------------
     *
     *  E V E N T   F U N C T I O N S
     *
     *--------------------------------------------*/
    static _createKeyShortcutFromKeyboardEvent(event_) {
      const a = [];
      if (event_.ctrlKey) {
        a.push("Control");
      }
      if (event_.altKey) {
        a.push("Alt");
      }
      if (event_.metaKey) {
        a.push("Meta");
      }
      if (event_.shitKey) {
        a.push("Shift");
      }
      a.push(event_.key.length === 1 ? event_.key.toUpperCase() : event_.key);
      return a.join("+");
    }
    // Process key events
    _keyDown(event_) {
      const { ctrlKey, keyCode, metaKey, shiftKey, target } = event_;
      const is_input_focused = ["INPUT", "TEXTAREA"].includes(target.tagName);
      if (!is_input_focused) {
        const shortcut = _Transmission._createKeyShortcutFromKeyboardEvent(event_);
        const action = this.action_manager.getActionForShortcut(shortcut);
        if (action) {
          event_.preventDefault();
          this.action_manager.click(action);
          return;
        }
      }
      const esc_key = keyCode === 27;
      if (esc_key && this.popup) {
        this.setCurrentPopup(null);
        event_.preventDefault();
        return;
      }
      const any_popup_active = document.querySelector(".popup:not(.hidden)");
      const rows = this._rows;
      if (!is_input_focused && !any_popup_active && !metaKey && !ctrlKey) {
        const shift_key = keyCode === 16;
        const up_key = keyCode === 38;
        const dn_key = keyCode === 40;
        if ((up_key || dn_key) && rows.length > 0) {
          const last = this._indexOfLastTorrent();
          const anchor = this._shift_index;
          const min = 0;
          const max = rows.length - 1;
          let index = last;
          if (dn_key && index + 1 <= max) {
            ++index;
          } else if (up_key && index - 1 >= min) {
            --index;
          }
          const r = rows[index];
          if (anchor >= 0) {
            if (anchor <= last && last < index || anchor >= last && last > index) {
              this._selectRow(r);
            } else if (anchor >= last && index > last || anchor <= last && last > index) {
              this._deselectRow(rows[last]);
            }
          } else {
            if (shiftKey) {
              this._selectRange(r);
            } else {
              this._setSelectedRow(r);
            }
          }
          if (r) {
            this._last_torrent_clicked = r.getTorrentId();
            r.getElement().scrollIntoView();
            event_.preventDefault();
          }
        } else if (shift_key) {
          this._shift_index = this._indexOfLastTorrent();
        }
      }
    }
    _keyUp(event_) {
      if (event_.keyCode === 16) {
        delete this._shift_index;
      }
    }
    static _dragenter(event_) {
      if (event_.dataTransfer && event_.dataTransfer.types) {
        const copy_types = /* @__PURE__ */ new Set(["text/uri-list", "text/plain"]);
        if (event_.dataTransfer.types.some((type) => copy_types.has(type)) || event_.dataTransfer.types.includes("Files")) {
          event_.stopPropagation();
          event_.preventDefault();
          event_.dataTransfer.dropEffect = "copy";
          return false;
        }
      } else if (event_.dataTransfer) {
        event_.dataTransfer.dropEffect = "none";
      }
      return true;
    }
    static _isValidURL(string) {
      try {
        const url = new URL(string);
        return url ? true : false;
      } catch {
        return false;
      }
    }
    shouldAddedTorrentsStart() {
      return this.session_properties["start-added-torrents"];
    }
    _drop(event_) {
      const paused = !this.shouldAddedTorrentsStart();
      if (!event_.dataTransfer || !event_.dataTransfer.types) {
        return true;
      }
      const type = event_.dataTransfer.types.filter((t) => ["text/uri-list", "text/plain"].includes(t)).pop();
      for (const uri of event_.dataTransfer.getData(type).split("\n").map((string) => string.trim()).filter((string) => _Transmission._isValidURL(string))) {
        this.remote.addTorrentByUrl(uri, paused);
      }
      const { files } = event_.dataTransfer;
      if (files.length > 0) {
        this.openDialog = new OpenDialog(this, this.remote, "", files);
      }
      event_.preventDefault();
      return false;
    }
    // turn the periodic ajax session refresh on & off
    togglePeriodicSessionRefresh(enabled) {
      if (!enabled && this.sessionInterval) {
        clearInterval(this.sessionInterval);
        delete this.sessionInterval;
      }
      if (enabled) {
        this.loadDaemonPrefs();
        if (!this.sessionInterval) {
          const msec = 8e3;
          this.sessionInterval = setInterval(
            this.loadDaemonPrefs.bind(this),
            msec
          );
        }
      }
    }
    _setFilterText(search) {
      this.filterText = search ? search.trim() : null;
      this.refilterAllSoon();
    }
    _onTorrentChanged(event_) {
      if (this.changeStatus) {
        this._dispatchSelectionChanged();
        this.changeStatus = false;
      }
      const tor = event_.currentTarget;
      this.dirtyTorrents.add(tor.getId());
      this.refilterSoon();
    }
    updateTorrents(ids, fields) {
      this.remote.updateTorrents(ids, fields, (table, removed_ids) => {
        const needinfo = [];
        const keys = table.shift();
        const o = {};
        for (const row of table) {
          for (const [index, key] of keys.entries()) {
            o[key] = row[index];
          }
          const { id } = o;
          let t = this._torrents[id];
          if (t) {
            const needed = t.needsMetaData();
            t.refresh(o);
            if (needed && !t.needsMetaData()) {
              needinfo.push(id);
            }
          } else {
            t = this._torrents[id] = new Torrent(o);
            t.addEventListener("dataChanged", this._onTorrentChanged.bind(this));
            this.dirtyTorrents.add(id);
            if (!("name" in t.fields) || !("status" in t.fields)) {
              needinfo.push(id);
            }
          }
        }
        if (needinfo.length > 0) {
          const more_fields = [
            "id",
            ...Torrent.Fields.Metadata,
            ...Torrent.Fields.Stats
          ];
          this.updateTorrents(needinfo, more_fields);
          this.refilterSoon();
        }
        if (removed_ids) {
          this._deleteTorrents(removed_ids);
          this.refilterSoon();
        }
      });
    }
    /*
    TODO: fix this when notifications get fixed
            t.notifyOnFieldChange('status', (newValue, oldValue) => {
              if (
                oldValue === Torrent._StatusDownload &&
                (newValue === Torrent._StatusSeed || newValue === Torrent._StatusSeedWait)
              ) {
                $(this).trigger('downloadComplete', [t]);
              } else if (
                oldValue === Torrent._StatusSeed &&
                newValue === Torrent._StatusStopped &&
                t.isFinished()
              ) {
                $(this).trigger('seedingComplete', [t]);
              } else {
                $(this).trigger('statusChange', [t]);
              }
            });
    */
    refreshTorrents() {
      const fields = ["id", ...Torrent.Fields.Stats];
      this.updateTorrents("recently-active", fields);
    }
    _initializeTorrents() {
      const fields = ["id", ...Torrent.Fields.Metadata, ...Torrent.Fields.Stats];
      this.updateTorrents(null, fields);
    }
    _onRowGroupClicked(event_) {
      event_.currentTarget.classList.toggle("closed");
      if (this.popup && this.popup.name !== "inspector") {
        this.setCurrentPopup(null);
      }
      event_.stopPropagation();
      event_.preventDefault();
      this._setSelectedRow(null);
      this._last_torrent_clicked = null;
    }
    _onRowClicked(event_) {
      const meta_key = event_.metaKey || event_.ctrlKey, { row } = event_.currentTarget;
      if (this.popup && this.popup.name !== "inspector") {
        this.setCurrentPopup(null);
      }
      if (event_.target.classList.contains("torrent-pauseresume-button")) {
        switch (event_.target.dataset.action) {
          case "pause":
            this._stopTorrents([row.getTorrent()]);
            break;
          case "resume":
            this._startTorrents([row.getTorrent()]);
            break;
          default:
            break;
        }
      }
      event_.stopPropagation();
      if (event_.shiftKey) {
        this._selectRange(row);
        window.focus();
      } else if (!row.isSelected() && meta_key) {
        this._selectRow(row);
      } else if (!row.isSelected()) {
        this._setSelectedRow(row);
      } else if (row.isSelected() && meta_key) {
        this._deselectRow(row);
      } else if (row.isSelected()) {
        this._setSelectedRow(row);
      }
      this._last_torrent_clicked = row.getTorrentId();
    }
    _deleteTorrents(ids) {
      if (ids && ids.length > 0) {
        for (const id of ids) {
          this.dirtyTorrents.add(id);
          delete this._torrents[id];
        }
        this.refilterSoon();
      }
    }
    _removeSelectedTorrents(trash) {
      const torrents = this.getSelectedTorrents();
      if (torrents.length > 0) {
        this.setCurrentPopup(
          new RemoveDialog({ remote: this.remote, torrents, trash })
        );
      }
    }
    _startSelectedTorrents(force) {
      this._startTorrents(this.getSelectedTorrents(), force);
    }
    _startTorrents(torrents, force) {
      this.changeStatus = true;
      this.remote.startTorrents(
        _Transmission._getTorrentIds(torrents),
        force,
        this.refreshTorrents,
        this
      );
    }
    _verifyTorrents(torrents) {
      this.remote.verifyTorrents(
        _Transmission._getTorrentIds(torrents),
        this.refreshTorrents,
        this
      );
    }
    _reannounceTorrents(torrents) {
      this.remote.reannounceTorrents(
        _Transmission._getTorrentIds(torrents),
        this.refreshTorrents,
        this
      );
    }
    _stopTorrents(torrents) {
      this.changeStatus = true;
      this.remote.stopTorrents(
        _Transmission._getTorrentIds(torrents),
        () => {
          setTimeout(() => {
            this.refreshTorrents();
          }, 500);
        },
        this
      );
    }
    changeFileCommand(torrentId, rowIndices, command) {
      this.remote.changeFileCommand(torrentId, rowIndices, command);
    }
    // Queue
    _moveTop() {
      this.remote.moveTorrentsToTop(
        this._getSelectedTorrentIds(),
        this.refreshTorrents,
        this
      );
    }
    _moveUp() {
      this.remote.moveTorrentsUp(
        this._getSelectedTorrentIds(),
        this.refreshTorrents,
        this
      );
    }
    _moveDown() {
      this.remote.moveTorrentsDown(
        this._getSelectedTorrentIds(),
        this.refreshTorrents,
        this
      );
    }
    _moveBottom() {
      this.remote.moveTorrentsToBottom(
        this._getSelectedTorrentIds(),
        this.refreshTorrents,
        this
      );
    }
    ///
    _updateGuiFromSession(o) {
      const [, version, checksum] = o.version.match(/(.*)\s\(([\da-f]+)\)/);
      this.version_info = {
        checksum,
        version
      };
      const element = document.querySelector("#toolbar-overflow");
      element.classList.toggle("alt-speed-enabled", o[RPC._TurtleState]);
    }
    _updateStatusbar() {
      const fmt = Formatter;
      const torrents = this._getAllTorrents();
      const u = torrents.reduce(
        (accumulator, tor) => accumulator + tor.getUploadSpeed(),
        0
      );
      const d = torrents.reduce(
        (accumulator, tor) => accumulator + tor.getDownloadSpeed(),
        0
      );
      const string = fmt.countString("Transfer", "Transfers", this._rows.length);
      setTextContent(document.querySelector("#speed-up-label"), fmt.speedBps(u));
      setTextContent(document.querySelector("#speed-dn-label"), fmt.speedBps(d));
      setTextContent(document.querySelector("#filter-count"), string);
    }
    static _displayName(hostname) {
      let name = hostname;
      if (name.length > 0) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
      }
      return name;
    }
    _updateFilterSelect() {
      const trackers = this._getTrackerCounts();
      const sitenames = Object.keys(trackers).sort();
      let string = "";
      string += this.filterTracker ? '<option value="all">All</option>' : '<option value="all" selected="selected">All</option>';
      for (const sitename of sitenames) {
        string += `<option value="${sitename}"`;
        if (sitename === this.filterTracker) {
          string += ' selected="selected"';
        }
        string += `>${_Transmission._displayName(sitename)}</option>`;
      }
      if (!this.filterTrackersStr || this.filterTrackersStr !== string) {
        this.filterTrackersStr = string;
        document.querySelector("#filter-tracker").innerHTML = string;
      }
    }
    /// FILTER
    sortRows(rows) {
      const torrents = rows.map((row) => row.getTorrent());
      const id2row = rows.reduce((accumulator, row) => {
        accumulator[row.getTorrent().getId()] = row;
        return accumulator;
      }, {});
      Torrent.sortTorrents(
        torrents,
        this.prefs.sort_mode,
        this.prefs.sort_direction,
        this.prefs.group_by_path
      );
      for (const [index, tor] of torrents.entries()) {
        rows[index] = id2row[tor.getId()];
      }
    }
    _refilter(rebuildEverything) {
      const { sort_mode, sort_direction, filter_mode, group_by_path } = this.prefs;
      const filter_tracker = this.filterTracker;
      const renderer = this.torrentRenderer;
      const list = this.elements.torrent_list;
      let filter_text = null;
      let labels = null;
      const m = /^labels:([\w,-\s]*)(.*)$/.exec(this.filterText);
      if (m) {
        filter_text = m[2].trim();
        labels = m[1].split(",");
      } else {
        filter_text = this.filterText;
        labels = [];
      }
      const countRows = () => [...list.querySelectorAll("li.torrent")].length;
      const countSelectedRows = () => [...list.querySelectorAll("li.torrent")].reduce(
        (n, e) => n + e.classList.contains("selected") ? 1 : 0,
        0
      );
      const old_row_count = countRows();
      const old_sel_count = countSelectedRows();
      this._updateFilterSelect();
      clearTimeout(this.refilterTimer);
      delete this.refilterTimer;
      if (rebuildEverything) {
        while (list.firstChild) {
          list.firstChild.remove();
        }
        this._rows = [];
        this.dirtyTorrents = new Set(Object.keys(this._torrents));
      }
      const clean_rows = [];
      let dirty_rows = [];
      for (const row of this._rows) {
        if (this.dirtyTorrents.has(row.getTorrentId())) {
          dirty_rows.push(row);
        } else {
          clean_rows.push(row);
        }
      }
      for (const row of dirty_rows) {
        row.getElement().remove();
      }
      const temporary = [];
      for (const row of dirty_rows) {
        const id = row.getTorrentId();
        const t = this._torrents[id];
        if (t && t.test(filter_mode, filter_tracker, filter_text, labels)) {
          temporary.push(row);
        }
        this.dirtyTorrents.delete(id);
      }
      dirty_rows = temporary;
      for (const id of this.dirtyTorrents.values()) {
        const t = this._torrents[id];
        if (t && t.test(filter_mode, filter_tracker, filter_text, labels)) {
          const row = new TorrentRow(renderer, this, t);
          const e = row.getElement();
          e.row = row;
          dirty_rows.push(row);
          e.addEventListener("click", this._onRowClicked.bind(this));
        }
      }
      this.sortRows(dirty_rows);
      const sorted_rows = [];
      const cmax = clean_rows.length;
      const dmax = dirty_rows.length;
      let ci = 0;
      let di = 0;
      while (ci !== cmax || di !== dmax) {
        let push_clean = null;
        if (ci === cmax) {
          push_clean = false;
        } else if (di === dmax) {
          push_clean = true;
        } else {
          const c = Torrent.compareTorrents(
            clean_rows[ci].getTorrent(),
            dirty_rows[di].getTorrent(),
            sort_mode,
            sort_direction,
            group_by_path
          );
          push_clean = c < 0;
        }
        sorted_rows.push({
          push_clean,
          row: push_clean ? clean_rows[ci++] : dirty_rows[di++]
        });
      }
      const groupElements = this.updateGroupElements(sorted_rows);
      const rows = [];
      const fragments = {};
      for (const { push_clean, row } of sorted_rows) {
        const rowFolder = group_by_path ? row.getTorrent().getDownloadDir() : null;
        const e = row.getElement();
        if (push_clean) {
          if (fragments[rowFolder]) {
            e.before(fragments[rowFolder]);
            delete fragments[rowFolder];
          }
        } else {
          if (!fragments[rowFolder]) {
            fragments[rowFolder] = document.createDocumentFragment();
          }
          fragments[rowFolder].append(e);
        }
        rows.push(row);
      }
      for (const rowFolder of Object.keys(fragments)) {
        groupElements[rowFolder].append(fragments[rowFolder]);
      }
      this._rows = rows;
      this.dirtyTorrents.clear();
      this._updateStatusbar();
      if (old_sel_count !== countSelectedRows() || old_row_count !== countRows()) {
        this._dispatchSelectionChanged();
      }
    }
    updateGroupElements(sorted_rows) {
      const { group_by_path, display_mode } = this.prefs;
      const list = this.elements.torrent_list;
      const groupElements = {};
      if (group_by_path) {
        const currentFolders = [...list.querySelectorAll("li.folder")].reduce(
          (acc, el, index) => {
            if (el.dataset.path && !acc[el.dataset.path]) {
              acc[el.dataset.path] = { element: el, index };
            } else {
              console.log(el.dataset.path);
              acc[index + Math.random()] = { element: el, index };
            }
            return acc;
          },
          {}
        );
        let lastElement = null;
        let lastIndex = null;
        const actualFolderSet = /* @__PURE__ */ new Set();
        for (const { row } of sorted_rows) {
          const actualFolderName = row.getTorrent().getDownloadDir();
          if (actualFolderSet.has(actualFolderName)) {
            continue;
          }
          actualFolderSet.add(actualFolderName);
          let groupElement = currentFolders[actualFolderName];
          if (groupElement) {
            delete currentFolders[actualFolderName];
          } else {
            const group = new TorrentRowGroup(actualFolderName);
            groupElement = { element: group.getElement(), index: null };
            groupElement.element.group = group;
            groupElement.element.addEventListener(
              "click",
              this._onRowGroupClicked.bind(this)
            );
          }
          groupElement.element.classList.toggle(
            "compact",
            display_mode === Prefs.DisplayCompact
          );
          groupElements[actualFolderName] = groupElement.element.querySelector(":scope>ul");
          if (lastElement) {
            if (groupElement.index === null || lastIndex !== null && groupElement.index < lastIndex) {
              lastElement.after(groupElement.element);
            }
          } else if (groupElement.index === null) {
            list.prepend(groupElement.element);
          }
          lastElement = groupElement.element;
          if (groupElement.index !== null) {
            lastIndex = groupElement.index;
          }
        }
        for (const folderElement of Object.values(currentFolders)) {
          folderElement.remove();
        }
      } else {
        groupElements[null] = list;
      }
      return groupElements;
    }
    setFilterTracker(sitename) {
      const e = document.querySelector("#filter-tracker");
      e.value = sitename;
      this.filterTracker = sitename;
      this.refilterAllSoon();
    }
    _getTrackerCounts() {
      const counts = {};
      for (const torrent of this._getAllTorrents()) {
        for (const tracker of torrent.getTrackers()) {
          const { sitename } = tracker;
          counts[sitename] = (counts[sitename] || 0) + 1;
        }
      }
      return counts;
    }
    ///
    popupCloseListener(event_) {
      if (event_.target !== this.popup) {
        throw new Error(event_);
      }
      this.popup.removeEventListener("close", this.boundPopupCloseListener);
      delete this.popup;
    }
    setCurrentPopup(popup) {
      if (this.popup) {
        this.popup.close();
      }
      this.popup = popup;
      if (this.popup) {
        this.popup.addEventListener("close", this.boundPopupCloseListener);
      }
    }
  };

  // src/main.js
  function main() {
    const action_manager = new ActionManager();
    const prefs = new Prefs();
    const notifications = new Notifications(prefs);
    const transmission = new Transmission(action_manager, notifications, prefs);
    const scroll_soon = debounce(
      () => transmission.elements.torrent_list.scrollTo(0, 1)
    );
    window.addEventListener("load", scroll_soon);
    window.addEventListener("orientationchange", scroll_soon);
  }
  document.addEventListener("DOMContentLoaded", main);
})();
//# sourceMappingURL=transmission-app.js.map
