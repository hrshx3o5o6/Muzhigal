/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
var YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

// Auth token management
var TokenManager = /*#__PURE__*/function () {
  function TokenManager() {
    _classCallCheck(this, TokenManager);
  }
  return _createClass(TokenManager, null, [{
    key: "getSpotifyToken",
    value: function () {
      var _getSpotifyToken = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return chrome.storage.local.get('spotifyToken');
            case 2:
              data = _context.sent;
              if (data.spotifyToken) {
                _context.next = 5;
                break;
              }
              throw new Error('Spotify authentication required');
            case 5:
              return _context.abrupt("return", data.spotifyToken);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getSpotifyToken() {
        return _getSpotifyToken.apply(this, arguments);
      }
      return getSpotifyToken;
    }()
  }, {
    key: "getYoutubeToken",
    value: function () {
      var _getYoutubeToken = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return chrome.storage.local.get('youtubeToken');
            case 2:
              data = _context2.sent;
              if (data.youtubeToken) {
                _context2.next = 5;
                break;
              }
              throw new Error('YouTube authentication required');
            case 5:
              return _context2.abrupt("return", data.youtubeToken);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getYoutubeToken() {
        return _getYoutubeToken.apply(this, arguments);
      }
      return getYoutubeToken;
    }()
  }, {
    key: "setSpotifyToken",
    value: function () {
      var _setSpotifyToken = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(token) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return chrome.storage.local.set({
                spotifyToken: token
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function setSpotifyToken(_x) {
        return _setSpotifyToken.apply(this, arguments);
      }
      return setSpotifyToken;
    }()
  }, {
    key: "setYoutubeToken",
    value: function () {
      var _setYoutubeToken = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(token) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return chrome.storage.local.set({
                youtubeToken: token
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function setYoutubeToken(_x2) {
        return _setYoutubeToken.apply(this, arguments);
      }
      return setYoutubeToken;
    }()
  }]);
}(); // Music service APIs
var SpotifyAPI = /*#__PURE__*/function () {
  function SpotifyAPI() {
    _classCallCheck(this, SpotifyAPI);
  }
  return _createClass(SpotifyAPI, null, [{
    key: "getTrackInfo",
    value: function () {
      var _getTrackInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(trackId) {
        var token, response, errorData, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return TokenManager.getSpotifyToken();
            case 3:
              token = _context5.sent;
              console.log('Making Spotify API request for track:', trackId);
              _context5.next = 7;
              return fetch("".concat(SPOTIFY_API_BASE, "/tracks/").concat(trackId), {
                headers: {
                  'Authorization': "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                }
              });
            case 7:
              response = _context5.sent;
              if (response.ok) {
                _context5.next = 14;
                break;
              }
              _context5.next = 11;
              return response.json()["catch"](function () {
                return {};
              });
            case 11:
              errorData = _context5.sent;
              console.error('Spotify API error:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData
              });
              throw new Error("Spotify API error: ".concat(response.status, " ").concat(response.statusText));
            case 14:
              _context5.next = 16;
              return response.json();
            case 16:
              data = _context5.sent;
              console.log('Spotify track data:', data);
              return _context5.abrupt("return", data);
            case 21:
              _context5.prev = 21;
              _context5.t0 = _context5["catch"](0);
              console.error('Failed to fetch track from Spotify:', _context5.t0);
              throw new Error('Failed to fetch track from Spotify: ' + _context5.t0.message);
            case 25:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 21]]);
      }));
      function getTrackInfo(_x3) {
        return _getTrackInfo.apply(this, arguments);
      }
      return getTrackInfo;
    }()
  }, {
    key: "searchTrack",
    value: function () {
      var _searchTrack = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(query) {
        var _data$tracks;
        var token, response, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return TokenManager.getSpotifyToken();
            case 2:
              token = _context6.sent;
              _context6.next = 5;
              return fetch("".concat(SPOTIFY_API_BASE, "/search?q=").concat(encodeURIComponent(query), "&type=track&limit=1"), {
                headers: {
                  'Authorization': "Bearer ".concat(token)
                }
              });
            case 5:
              response = _context6.sent;
              if (response.ok) {
                _context6.next = 8;
                break;
              }
              throw new Error('Failed to search on Spotify');
            case 8:
              _context6.next = 10;
              return response.json();
            case 10:
              data = _context6.sent;
              if ((_data$tracks = data.tracks) !== null && _data$tracks !== void 0 && (_data$tracks = _data$tracks.items) !== null && _data$tracks !== void 0 && _data$tracks.length) {
                _context6.next = 13;
                break;
              }
              throw new Error('No matching track found on Spotify');
            case 13:
              return _context6.abrupt("return", data.tracks.items[0]);
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function searchTrack(_x4) {
        return _searchTrack.apply(this, arguments);
      }
      return searchTrack;
    }()
  }]);
}();
var YouTubeAPI = /*#__PURE__*/function () {
  function YouTubeAPI() {
    _classCallCheck(this, YouTubeAPI);
  }
  return _createClass(YouTubeAPI, null, [{
    key: "searchVideo",
    value: function () {
      var _searchVideo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(query) {
        var _data$items;
        var token, response, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return TokenManager.getYoutubeToken();
            case 2:
              token = _context7.sent;
              _context7.next = 5;
              return fetch("".concat(YOUTUBE_API_BASE, "/search?part=snippet&q=").concat(encodeURIComponent(query), "&type=video"), {
                headers: {
                  'Authorization': "Bearer ".concat(token)
                }
              });
            case 5:
              response = _context7.sent;
              if (response.ok) {
                _context7.next = 8;
                break;
              }
              throw new Error('Failed to search on YouTube');
            case 8:
              _context7.next = 10;
              return response.json();
            case 10:
              data = _context7.sent;
              if ((_data$items = data.items) !== null && _data$items !== void 0 && _data$items.length) {
                _context7.next = 13;
                break;
              }
              throw new Error('No matching video found on YouTube');
            case 13:
              return _context7.abrupt("return", data.items[0]);
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function searchVideo(_x5) {
        return _searchVideo.apply(this, arguments);
      }
      return searchVideo;
    }()
  }, {
    key: "getVideoInfo",
    value: function () {
      var _getVideoInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(videoId) {
        var _data$items2;
        var token, response, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return TokenManager.getYoutubeToken();
            case 2:
              token = _context8.sent;
              _context8.next = 5;
              return fetch("".concat(YOUTUBE_API_BASE, "/videos?part=snippet&id=").concat(videoId), {
                headers: {
                  'Authorization': "Bearer ".concat(token)
                }
              });
            case 5:
              response = _context8.sent;
              if (response.ok) {
                _context8.next = 8;
                break;
              }
              throw new Error('Failed to fetch video info from YouTube');
            case 8:
              _context8.next = 10;
              return response.json();
            case 10:
              data = _context8.sent;
              if ((_data$items2 = data.items) !== null && _data$items2 !== void 0 && _data$items2[0]) {
                _context8.next = 13;
                break;
              }
              throw new Error('Video not found on YouTube');
            case 13:
              return _context8.abrupt("return", data.items[0]);
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function getVideoInfo(_x6) {
        return _getVideoInfo.apply(this, arguments);
      }
      return getVideoInfo;
    }()
  }]);
}(); // Link conversion logic
var MusicLinkConverter = /*#__PURE__*/function () {
  function MusicLinkConverter() {
    _classCallCheck(this, MusicLinkConverter);
  }
  return _createClass(MusicLinkConverter, null, [{
    key: "extractSpotifyTrackId",
    value: function extractSpotifyTrackId(spotifyUrl) {
      try {
        var url = new URL(spotifyUrl);
        var path = url.pathname;

        // Handle different Spotify URL formats
        if (path.includes('/track/')) {
          var matches = path.match(/\/track\/([a-zA-Z0-9]+)/);
          if (matches && matches[1]) {
            return matches[1];
          }
        }
        throw new Error('Invalid Spotify track URL');
      } catch (error) {
        console.error('Failed to parse Spotify URL:', error);
        throw new Error('Please provide a valid Spotify track URL');
      }
    }
  }, {
    key: "spotifyToYoutube",
    value: function () {
      var _spotifyToYoutube = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(spotifyUrl) {
        var trackId, trackInfo, searchQuery, video;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              console.log('Converting Spotify URL:', spotifyUrl);
              trackId = this.extractSpotifyTrackId(spotifyUrl);
              console.log('Extracted track ID:', trackId);
              _context9.next = 6;
              return SpotifyAPI.getTrackInfo(trackId);
            case 6:
              trackInfo = _context9.sent;
              searchQuery = "".concat(trackInfo.name, " ").concat(trackInfo.artists[0].name);
              console.log('Searching YouTube for:', searchQuery);
              _context9.next = 11;
              return YouTubeAPI.searchVideo(searchQuery);
            case 11:
              video = _context9.sent;
              return _context9.abrupt("return", "https://music.youtube.com/watch?v=".concat(video.id.videoId));
            case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](0);
              console.error('Spotify to YouTube conversion error:', _context9.t0);
              throw _context9.t0;
            case 19:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 15]]);
      }));
      function spotifyToYoutube(_x7) {
        return _spotifyToYoutube.apply(this, arguments);
      }
      return spotifyToYoutube;
    }()
  }, {
    key: "youtubeToSpotify",
    value: function () {
      var _youtubeToSpotify = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(youtubeUrl) {
        var videoId, videoInfo, track;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              videoId = new URL(youtubeUrl).searchParams.get('v');
              if (videoId) {
                _context10.next = 4;
                break;
              }
              throw new Error('Invalid YouTube URL');
            case 4:
              _context10.next = 6;
              return YouTubeAPI.getVideoInfo(videoId);
            case 6:
              videoInfo = _context10.sent;
              _context10.next = 9;
              return SpotifyAPI.searchTrack(videoInfo.snippet.title);
            case 9:
              track = _context10.sent;
              return _context10.abrupt("return", track.external_urls.spotify);
            case 13:
              _context10.prev = 13;
              _context10.t0 = _context10["catch"](0);
              console.error('YouTube to Spotify conversion error:', _context10.t0);
              throw _context10.t0;
            case 17:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[0, 13]]);
      }));
      function youtubeToSpotify(_x8) {
        return _youtubeToSpotify.apply(this, arguments);
      }
      return youtubeToSpotify;
    }()
  }]);
}(); // Message handling
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'convertLink') {
    _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var url, convertedUrl;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            // Don't convert URL to lowercase
            url = request.url;
            if (!url.toLowerCase().includes('spotify.com')) {
              _context11.next = 8;
              break;
            }
            _context11.next = 5;
            return MusicLinkConverter.spotifyToYoutube(url);
          case 5:
            convertedUrl = _context11.sent;
            _context11.next = 15;
            break;
          case 8:
            if (!(url.toLowerCase().includes('youtube.com') || url.toLowerCase().includes('youtu.be'))) {
              _context11.next = 14;
              break;
            }
            _context11.next = 11;
            return MusicLinkConverter.youtubeToSpotify(url);
          case 11:
            convertedUrl = _context11.sent;
            _context11.next = 15;
            break;
          case 14:
            throw new Error('Invalid URL. Please provide a Spotify or YouTube Music link.');
          case 15:
            sendResponse({
              success: true,
              url: convertedUrl
            });
            _context11.next = 21;
            break;
          case 18:
            _context11.prev = 18;
            _context11.t0 = _context11["catch"](0);
            sendResponse({
              success: false,
              error: _context11.t0.message
            });
          case 21:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 18]]);
    }))();
    return true;
  }
  if (request.action === 'setApiKey') {
    _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (!(request.service === 'spotify')) {
              _context12.next = 6;
              break;
            }
            _context12.next = 4;
            return TokenManager.setSpotifyToken(request.token);
          case 4:
            _context12.next = 9;
            break;
          case 6:
            if (!(request.service === 'youtube')) {
              _context12.next = 9;
              break;
            }
            _context12.next = 9;
            return TokenManager.setYoutubeToken(request.token);
          case 9:
            sendResponse({
              success: true
            });
            _context12.next = 15;
            break;
          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](0);
            sendResponse({
              success: false,
              error: _context12.t0.message
            });
          case 15:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 12]]);
    }))();
    return true;
  }
});
/******/ })()
;