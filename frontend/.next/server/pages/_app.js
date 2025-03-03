'use strict';
(() => {
  var e = {};
  (e.id = 636),
    (e.ids = [636]),
    (e.modules = {
      861: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            DecodeError: function () {
              return g;
            },
            MiddlewareNotFoundError: function () {
              return y;
            },
            MissingStaticPage: function () {
              return P;
            },
            NormalizeError: function () {
              return m;
            },
            PageNotFoundError: function () {
              return E;
            },
            SP: function () {
              return d;
            },
            ST: function () {
              return p;
            },
            WEB_VITALS: function () {
              return r;
            },
            execOnce: function () {
              return n;
            },
            getDisplayName: function () {
              return a;
            },
            getLocationOrigin: function () {
              return u;
            },
            getURL: function () {
              return s;
            },
            isAbsoluteUrl: function () {
              return i;
            },
            isResSent: function () {
              return c;
            },
            loadGetInitialProps: function () {
              return f;
            },
            normalizeRepeatedSlashes: function () {
              return l;
            },
            stringifyError: function () {
              return x;
            },
          });
        let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
        function n(e) {
          let t,
            r = !1;
          return function () {
            for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
              o[i] = arguments[i];
            return r || ((r = !0), (t = e(...o))), t;
          };
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
          i = (e) => o.test(e);
        function u() {
          let { protocol: e, hostname: t, port: r } = window.location;
          return e + '//' + t + (r ? ':' + r : '');
        }
        function s() {
          let { href: e } = window.location,
            t = u();
          return e.substring(t.length);
        }
        function a(e) {
          return 'string' == typeof e
            ? e
            : e.displayName || e.name || 'Unknown';
        }
        function c(e) {
          return e.finished || e.headersSent;
        }
        function l(e) {
          let t = e.split('?');
          return (
            t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
            (t[1] ? '?' + t.slice(1).join('?') : '')
          );
        }
        async function f(e, t) {
          let r = t.res || (t.ctx && t.ctx.res);
          if (!e.getInitialProps)
            return t.ctx && t.Component
              ? { pageProps: await f(t.Component, t.ctx) }
              : {};
          let n = await e.getInitialProps(t);
          if (r && c(r)) return n;
          if (!n)
            throw Object.defineProperty(
              Error(
                '"' +
                  a(e) +
                  '.getInitialProps()" should resolve to an object. But found "' +
                  n +
                  '" instead.',
              ),
              '__NEXT_ERROR_CODE',
              { value: 'E394', enumerable: !1, configurable: !0 },
            );
          return n;
        }
        let d = 'undefined' != typeof performance,
          p =
            d &&
            ['mark', 'measure', 'getEntriesByName'].every(
              (e) => 'function' == typeof performance[e],
            );
        class g extends Error {}
        class m extends Error {}
        class E extends Error {
          constructor(e) {
            super(),
              (this.code = 'ENOENT'),
              (this.name = 'PageNotFoundError'),
              (this.message = 'Cannot find module for page: ' + e);
          }
        }
        class P extends Error {
          constructor(e, t) {
            super(),
              (this.message =
                'Failed to load static file for page: ' + e + ' ' + t);
          }
        }
        class y extends Error {
          constructor() {
            super(),
              (this.code = 'ENOENT'),
              (this.message = 'Cannot find the middleware module');
          }
        }
        function x(e) {
          return JSON.stringify({ message: e.message, stack: e.stack });
        }
      },
      2015: (e) => {
        e.exports = require('react');
      },
      4923: (e, t, r) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let n = r(7020),
          o = r(8732),
          i = n._(r(2015)),
          u = r(861);
        async function s(e) {
          let { Component: t, ctx: r } = e;
          return { pageProps: await (0, u.loadGetInitialProps)(t, r) };
        }
        class a extends i.default.Component {
          render() {
            let { Component: e, pageProps: t } = this.props;
            return (0, o.jsx)(e, { ...t });
          }
        }
        (a.origGetInitialProps = s),
          (a.getInitialProps = s),
          ('function' == typeof t.default ||
            ('object' == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, '__esModule', { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      7020: (e, t) => {
        t._ = function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      },
      8732: (e) => {
        e.exports = require('react/jsx-runtime');
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = t((t.s = 4923));
  module.exports = r;
})();
