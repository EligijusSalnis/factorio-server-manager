(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [89],
  {
    1488: (e, t, r) => {
      'use strict';
      r.d(t, { i: () => i });
      var n = r(2115),
        o = r(1524);
      function i({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [i, s] = (function ({ defaultProp: e, onChange: t }) {
            let r = n.useState(e),
              [i] = r,
              s = n.useRef(i),
              l = (0, o.c)(t);
            return (
              n.useEffect(() => {
                s.current !== i && (l(i), (s.current = i));
              }, [i, s, l]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          l = void 0 !== e,
          a = l ? e : i,
          u = (0, o.c)(r);
        return [
          a,
          n.useCallback(
            (t) => {
              if (l) {
                let r = 'function' == typeof t ? t(e) : t;
                r !== e && u(r);
              } else s(t);
            },
            [l, e, s, u],
          ),
        ];
      }
    },
    1524: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => o });
      var n = r(2115);
      function o(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
    },
    2317: (e, t, r) => {
      'use strict';
      r.d(t, { DX: () => s, xV: () => a });
      var n = r(2115),
        o = r(8068),
        i = r(5155),
        s = n.forwardRef((e, t) => {
          let { children: r, ...o } = e,
            s = n.Children.toArray(r),
            a = s.find(u);
          if (a) {
            let e = a.props.children,
              r = s.map((t) =>
                t !== a
                  ? t
                  : n.Children.count(e) > 1
                    ? n.Children.only(null)
                    : n.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, i.jsx)(l, {
              ...o,
              ref: t,
              children: n.isValidElement(e)
                ? n.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, i.jsx)(l, { ...o, ref: t, children: r });
        });
      s.displayName = 'Slot';
      var l = n.forwardRef((e, t) => {
        let { children: r, ...i } = e;
        if (n.isValidElement(r)) {
          let e = (function (e) {
              let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
                r = t && 'isReactWarning' in t && t.isReactWarning;
              return r
                ? e.ref
                : (r =
                      (t = Object.getOwnPropertyDescriptor(e, 'ref')?.get) &&
                      'isReactWarning' in t &&
                      t.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
            })(r),
            s = (function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let o = e[n],
                  i = t[n];
                /^on[A-Z]/.test(n)
                  ? o && i
                    ? (r[n] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (r[n] = o)
                  : 'style' === n
                    ? (r[n] = { ...o, ...i })
                    : 'className' === n &&
                      (r[n] = [o, i].filter(Boolean).join(' '));
              }
              return { ...e, ...r };
            })(i, r.props);
          return (
            r.type !== n.Fragment && (s.ref = t ? (0, o.t)(t, e) : e),
            n.cloneElement(r, s)
          );
        }
        return n.Children.count(r) > 1 ? n.Children.only(null) : null;
      });
      l.displayName = 'SlotClone';
      var a = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function u(e) {
        return n.isValidElement(e) && e.type === a;
      }
    },
    2651: (e, t, r) => {
      'use strict';
      let n;
      r.d(t, { A: () => tl });
      var o,
        i,
        s,
        l = {};
      function a(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      r.r(l),
        r.d(l, {
          hasBrowserEnv: () => ef,
          hasStandardBrowserEnv: () => ed,
          hasStandardBrowserWebWorkerEnv: () => ep,
          navigator: () => ec,
          origin: () => eh,
        });
      var u = r(2818);
      let { toString: f } = Object.prototype,
        { getPrototypeOf: c } = Object,
        d = ((e) => (t) => {
          let r = f.call(t);
          return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        p = (e) => ((e = e.toLowerCase()), (t) => d(t) === e),
        h = (e) => (t) => typeof t === e,
        { isArray: g } = Array,
        m = h('undefined'),
        y = p('ArrayBuffer'),
        b = h('string'),
        w = h('function'),
        v = h('number'),
        x = (e) => null !== e && 'object' == typeof e,
        E = (e) => {
          if ('object' !== d(e)) return !1;
          let t = c(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        R = p('Date'),
        A = p('File'),
        O = p('Blob'),
        S = p('FileList'),
        T = p('URLSearchParams'),
        [B, C, N, k] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
          p,
        );
      function L(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, o;
        if (null != e) {
          if (('object' != typeof e && (e = [e]), g(e)))
            for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
          else {
            let o;
            let i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              s = i.length;
            for (n = 0; n < s; n++) (o = i[n]), t.call(null, e[o], o, e);
          }
        }
      }
      function U(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          o = n.length;
        for (; o-- > 0; ) if (t === (r = n[o]).toLowerCase()) return r;
        return null;
      }
      let P =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
                ? window
                : global,
        j = (e) => !m(e) && e !== P,
        I = (
          (e) => (t) =>
            e && t instanceof e
        )('undefined' != typeof Uint8Array && c(Uint8Array)),
        _ = p('HTMLFormElement'),
        D = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        F = p('RegExp'),
        z = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          L(r, (r, o) => {
            let i;
            !1 !== (i = t(r, o, e)) && (n[o] = i || r);
          }),
            Object.defineProperties(e, n);
        },
        M = p('AsyncFunction'),
        $ =
          ((o = 'function' == typeof setImmediate),
          (i = w(P.postMessage)),
          o
            ? setImmediate
            : i
              ? ((e, t) => (
                  P.addEventListener(
                    'message',
                    ({ source: r, data: n }) => {
                      r === P && n === e && t.length && t.shift()();
                    },
                    !1,
                  ),
                  (r) => {
                    t.push(r), P.postMessage(e, '*');
                  }
                ))(`axios@${Math.random()}`, [])
              : (e) => setTimeout(e)),
        W =
          'undefined' != typeof queueMicrotask
            ? queueMicrotask.bind(P)
            : (void 0 !== u && u.nextTick) || $,
        q = {
          isArray: g,
          isArrayBuffer: y,
          isBuffer: function (e) {
            return (
              null !== e &&
              !m(e) &&
              null !== e.constructor &&
              !m(e.constructor) &&
              w(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (('function' == typeof FormData && e instanceof FormData) ||
                (w(e.append) &&
                  ('formdata' === (t = d(e)) ||
                    ('object' === t &&
                      w(e.toString) &&
                      '[object FormData]' === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && y(e.buffer);
          },
          isString: b,
          isNumber: v,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: x,
          isPlainObject: E,
          isReadableStream: B,
          isRequest: C,
          isResponse: N,
          isHeaders: k,
          isUndefined: m,
          isDate: R,
          isFile: A,
          isBlob: O,
          isRegExp: F,
          isFunction: w,
          isStream: (e) => x(e) && w(e.pipe),
          isURLSearchParams: T,
          isTypedArray: I,
          isFileList: S,
          forEach: L,
          merge: function e() {
            let { caseless: t } = (j(this) && this) || {},
              r = {},
              n = (n, o) => {
                let i = (t && U(r, o)) || o;
                E(r[i]) && E(n)
                  ? (r[i] = e(r[i], n))
                  : E(n)
                    ? (r[i] = e({}, n))
                    : g(n)
                      ? (r[i] = n.slice())
                      : (r[i] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && L(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            L(
              t,
              (t, n) => {
                r && w(t) ? (e[n] = a(t, r)) : (e[n] = t);
              },
              { allOwnKeys: n },
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, r, n) => {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, 'super', { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: (e, t, r, n) => {
            let o, i, s;
            let l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                (s = o[i]),
                  (!n || n(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
              e = !1 !== r && c(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: d,
          kindOfTest: p,
          endsWith: (e, t, r) => {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (g(e)) return e;
            let t = e.length;
            if (!v(t)) return null;
            let r = Array(t);
            for (; t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: (e, t) => {
            let r;
            let n = (e && e[Symbol.iterator]).call(e);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let r;
            let n = [];
            for (; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: _,
          hasOwnProperty: D,
          hasOwnProp: D,
          reduceDescriptors: z,
          freezeMethods: (e) => {
            z(e, (t, r) => {
              if (w(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(r))
                return !1;
              if (w(e[r])) {
                if (((t.enumerable = !1), 'writable' in t)) {
                  t.writable = !1;
                  return;
                }
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            let r = {};
            return (
              ((e) => {
                e.forEach((e) => {
                  r[e] = !0;
                });
              })(g(e) ? e : String(e).split(t)),
              r
            );
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
                return t.toUpperCase() + r;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e *= 1)) ? e : t,
          findKey: U,
          global: P,
          isContextDefined: j,
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              w(e.append) &&
              'FormData' === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (x(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!('toJSON' in e)) {
                    t[n] = e;
                    let o = g(e) ? [] : {};
                    return (
                      L(e, (e, t) => {
                        let i = r(e, n + 1);
                        m(i) || (o[t] = i);
                      }),
                      (t[n] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return r(e, 0);
          },
          isAsyncFn: M,
          isThenable: (e) => e && (x(e) || w(e)) && w(e.then) && w(e.catch),
          setImmediate: $,
          asap: W,
        };
      function H(e, t, r, n, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = 'AxiosError'),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          o &&
            ((this.response = o), (this.status = o.status ? o.status : null));
      }
      q.inherits(H, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: q.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let V = H.prototype,
        G = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
        'ERR_NOT_SUPPORT',
        'ERR_INVALID_URL',
      ].forEach((e) => {
        G[e] = { value: e };
      }),
        Object.defineProperties(H, G),
        Object.defineProperty(V, 'isAxiosError', { value: !0 }),
        (H.from = (e, t, r, n, o, i) => {
          let s = Object.create(V);
          return (
            q.toFlatObject(
              e,
              s,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => 'isAxiosError' !== e,
            ),
            H.call(s, e.message, t, r, n, o),
            (s.cause = e),
            (s.name = e.name),
            i && Object.assign(s, i),
            s
          );
        });
      var J = r(8308).hp;
      function X(e) {
        return q.isPlainObject(e) || q.isArray(e);
      }
      function K(e) {
        return q.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function Y(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = K(e)), !r && t ? '[' + e + ']' : e;
              })
              .join(r ? '.' : '')
          : t;
      }
      let Z = q.toFlatObject(q, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        Q = function (e, t, r) {
          if (!q.isObject(e)) throw TypeError('target must be an object');
          t = t || new FormData();
          let n = (r = q.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !q.isUndefined(t[e]);
              },
            )).metaTokens,
            o = r.visitor || u,
            i = r.dots,
            s = r.indexes,
            l =
              (r.Blob || ('undefined' != typeof Blob && Blob)) &&
              q.isSpecCompliantForm(t);
          if (!q.isFunction(o)) throw TypeError('visitor must be a function');
          function a(e) {
            if (null === e) return '';
            if (q.isDate(e)) return e.toISOString();
            if (!l && q.isBlob(e))
              throw new H('Blob is not supported. Use a Buffer instead.');
            return q.isArrayBuffer(e) || q.isTypedArray(e)
              ? l && 'function' == typeof Blob
                ? new Blob([e])
                : J.from(e)
              : e;
          }
          function u(e, r, o) {
            let l = e;
            if (e && !o && 'object' == typeof e) {
              if (q.endsWith(r, '{}'))
                (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
              else {
                var u;
                if (
                  (q.isArray(e) && ((u = e), q.isArray(u) && !u.some(X))) ||
                  ((q.isFileList(e) || q.endsWith(r, '[]')) &&
                    (l = q.toArray(e)))
                )
                  return (
                    (r = K(r)),
                    l.forEach(function (e, n) {
                      q.isUndefined(e) ||
                        null === e ||
                        t.append(
                          !0 === s ? Y([r], n, i) : null === s ? r : r + '[]',
                          a(e),
                        );
                    }),
                    !1
                  );
              }
            }
            return !!X(e) || (t.append(Y(o, r, i), a(e)), !1);
          }
          let f = [],
            c = Object.assign(Z, {
              defaultVisitor: u,
              convertValue: a,
              isVisitable: X,
            });
          if (!q.isObject(e)) throw TypeError('data must be an object');
          return (
            !(function e(r, n) {
              if (!q.isUndefined(r)) {
                if (-1 !== f.indexOf(r))
                  throw Error('Circular reference detected in ' + n.join('.'));
                f.push(r),
                  q.forEach(r, function (r, i) {
                    !0 ===
                      (!(q.isUndefined(r) || null === r) &&
                        o.call(t, r, q.isString(i) ? i.trim() : i, n, c)) &&
                      e(r, n ? n.concat(i) : [i]);
                  }),
                  f.pop();
              }
            })(e),
            t
          );
        };
      function ee(e) {
        let t = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\0',
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function et(e, t) {
        (this._pairs = []), e && Q(e, this, t);
      }
      let er = et.prototype;
      function en(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function eo(e, t, r) {
        let n;
        if (!t) return e;
        let o = (r && r.encode) || en;
        q.isFunction(r) && (r = { serialize: r });
        let i = r && r.serialize;
        if (
          (n = i
            ? i(t, r)
            : q.isURLSearchParams(t)
              ? t.toString()
              : new et(t, r).toString(o))
        ) {
          let t = e.indexOf('#');
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf('?') ? '?' : '&') + n);
        }
        return e;
      }
      (er.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (er.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, ee);
              }
            : ee;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + '=' + t(e[1]);
            }, '')
            .join('&');
        });
      class ei {
        constructor() {
          this.handlers = [];
        }
        use(e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          q.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let es = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        el = 'undefined' != typeof URLSearchParams ? URLSearchParams : et,
        ea = 'undefined' != typeof FormData ? FormData : null,
        eu = 'undefined' != typeof Blob ? Blob : null,
        ef = 'undefined' != typeof window && 'undefined' != typeof document,
        ec = ('object' == typeof navigator && navigator) || void 0,
        ed =
          ef &&
          (!ec ||
            0 > ['ReactNative', 'NativeScript', 'NS'].indexOf(ec.product)),
        ep =
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          'function' == typeof self.importScripts,
        eh = (ef && window.location.href) || 'http://localhost',
        eg = {
          ...l,
          isBrowser: !0,
          classes: { URLSearchParams: el, FormData: ea, Blob: eu },
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        },
        em = function (e) {
          if (q.isFormData(e) && q.isFunction(e.entries)) {
            let t = {};
            return (
              q.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, o) {
                  let i = t[o++];
                  if ('__proto__' === i) return !0;
                  let s = Number.isFinite(+i),
                    l = o >= t.length;
                  return (
                    ((i = !i && q.isArray(n) ? n.length : i), l)
                      ? q.hasOwnProp(n, i)
                        ? (n[i] = [n[i], r])
                        : (n[i] = r)
                      : ((n[i] && q.isObject(n[i])) || (n[i] = []),
                        e(t, r, n[i], o) &&
                          q.isArray(n[i]) &&
                          (n[i] = (function (e) {
                            let t, r;
                            let n = {},
                              o = Object.keys(e),
                              i = o.length;
                            for (t = 0; t < i; t++) n[(r = o[t])] = e[r];
                            return n;
                          })(n[i]))),
                    !s
                  );
                })(
                  q
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ('[]' === e[0] ? '' : e[1] || e[0])),
                  r,
                  t,
                  0,
                );
              }),
              t
            );
          }
          return null;
        },
        ey = {
          transitional: es,
          adapter: ['xhr', 'http', 'fetch'],
          transformRequest: [
            function (e, t) {
              let r;
              let n = t.getContentType() || '',
                o = n.indexOf('application/json') > -1,
                i = q.isObject(e);
              if (
                (i && q.isHTMLForm(e) && (e = new FormData(e)), q.isFormData(e))
              )
                return o ? JSON.stringify(em(e)) : e;
              if (
                q.isArrayBuffer(e) ||
                q.isBuffer(e) ||
                q.isStream(e) ||
                q.isFile(e) ||
                q.isBlob(e) ||
                q.isReadableStream(e)
              )
                return e;
              if (q.isArrayBufferView(e)) return e.buffer;
              if (q.isURLSearchParams(e))
                return (
                  t.setContentType(
                    'application/x-www-form-urlencoded;charset=utf-8',
                    !1,
                  ),
                  e.toString()
                );
              if (i) {
                if (n.indexOf('application/x-www-form-urlencoded') > -1) {
                  var s, l;
                  return ((s = e),
                  (l = this.formSerializer),
                  Q(
                    s,
                    new eg.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return eg.isNode && q.isBuffer(e)
                            ? (this.append(t, e.toString('base64')), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      l,
                    ),
                  )).toString();
                }
                if (
                  (r = q.isFileList(e)) ||
                  n.indexOf('multipart/form-data') > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return Q(
                    r ? { 'files[]': e } : e,
                    t && new t(),
                    this.formSerializer,
                  );
                }
              }
              return i || o
                ? (t.setContentType('application/json', !1),
                  (function (e, t, r) {
                    if (q.isString(e))
                      try {
                        return (0, JSON.parse)(e), q.trim(e);
                      } catch (e) {
                        if ('SyntaxError' !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              let t = this.transitional || ey.transitional,
                r = t && t.forcedJSONParsing,
                n = 'json' === this.responseType;
              if (q.isResponse(e) || q.isReadableStream(e)) return e;
              if (e && q.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ('SyntaxError' === e.name)
                      throw H.from(
                        e,
                        H.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response,
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: eg.classes.FormData, Blob: eg.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': void 0,
            },
          },
        };
      q.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
        ey.headers[e] = {};
      });
      let eb = q.toObjectSet([
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]),
        ew = (e) => {
          let t, r, n;
          let o = {};
          return (
            e &&
              e.split('\n').forEach(function (e) {
                (n = e.indexOf(':')),
                  (t = e.substring(0, n).trim().toLowerCase()),
                  (r = e.substring(n + 1).trim()),
                  t &&
                    (!o[t] || !eb[t]) &&
                    ('set-cookie' === t
                      ? o[t]
                        ? o[t].push(r)
                        : (o[t] = [r])
                      : (o[t] = o[t] ? o[t] + ', ' + r : r));
              }),
            o
          );
        },
        ev = Symbol('internals');
      function ex(e) {
        return e && String(e).trim().toLowerCase();
      }
      function eE(e) {
        return !1 === e || null == e ? e : q.isArray(e) ? e.map(eE) : String(e);
      }
      let eR = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function eA(e, t, r, n, o) {
        if (q.isFunction(n)) return n.call(this, t, r);
        if ((o && (t = r), q.isString(t))) {
          if (q.isString(n)) return -1 !== t.indexOf(n);
          if (q.isRegExp(n)) return n.test(t);
        }
      }
      class eO {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function o(e, t, r) {
            let o = ex(t);
            if (!o) throw Error('header name must be a non-empty string');
            let i = q.findKey(n, o);
            (i &&
              void 0 !== n[i] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[i])) ||
              (n[i || t] = eE(e));
          }
          let i = (e, t) => q.forEach(e, (e, r) => o(e, r, t));
          if (q.isPlainObject(e) || e instanceof this.constructor) i(e, t);
          else if (q.isString(e) && (e = e.trim()) && !eR(e)) i(ew(e), t);
          else if (q.isHeaders(e)) for (let [t, n] of e.entries()) o(n, t, r);
          else null != e && o(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = ex(e))) {
            let r = q.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  let t;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                  return r;
                })(e);
              if (q.isFunction(t)) return t.call(this, e, r);
              if (q.isRegExp(t)) return t.exec(e);
              throw TypeError('parser must be boolean|regexp|function');
            }
          }
        }
        has(e, t) {
          if ((e = ex(e))) {
            let r = q.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || eA(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function o(e) {
            if ((e = ex(e))) {
              let o = q.findKey(r, e);
              o && (!t || eA(r, r[o], o, t)) && (delete r[o], (n = !0));
            }
          }
          return q.isArray(e) ? e.forEach(o) : o(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let o = t[r];
            (!e || eA(this, this[o], o, e, !0)) && (delete this[o], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            q.forEach(this, (n, o) => {
              let i = q.findKey(r, o);
              if (i) {
                (t[i] = eE(n)), delete t[o];
                return;
              }
              let s = e
                ? o
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, r) => t.toUpperCase() + r,
                    )
                : String(o).trim();
              s !== o && delete t[o], (t[s] = eE(n)), (r[s] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            q.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && q.isArray(r) ? r.join(', ') : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ': ' + t)
            .join('\n');
        }
        get [Symbol.toStringTag]() {
          return 'AxiosHeaders';
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[ev] = this[ev] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = ex(e);
            t[n] ||
              (!(function (e, t) {
                let r = q.toCamelCase(' ' + t);
                ['get', 'set', 'has'].forEach((n) => {
                  Object.defineProperty(e, n + r, {
                    value: function (e, r, o) {
                      return this[n].call(this, t, e, r, o);
                    },
                    configurable: !0,
                  });
                });
              })(r, e),
              (t[n] = !0));
          }
          return q.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      function eS(e, t) {
        let r = this || ey,
          n = t || r,
          o = eO.from(n.headers),
          i = n.data;
        return (
          q.forEach(e, function (e) {
            i = e.call(r, i, o.normalize(), t ? t.status : void 0);
          }),
          o.normalize(),
          i
        );
      }
      function eT(e) {
        return !!(e && e.__CANCEL__);
      }
      function eB(e, t, r) {
        H.call(this, null == e ? 'canceled' : e, H.ERR_CANCELED, t, r),
          (this.name = 'CanceledError');
      }
      function eC(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new H(
                'Request failed with status code ' + r.status,
                [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r,
              ),
            );
      }
      eO.accessor([
        'Content-Type',
        'Content-Length',
        'Accept',
        'Accept-Encoding',
        'User-Agent',
        'Authorization',
      ]),
        q.reduceDescriptors(eO.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        q.freezeMethods(eO),
        q.inherits(eB, H, { __CANCEL__: !0 });
      let eN = function (e, t) {
          let r;
          let n = Array((e = e || 10)),
            o = Array(e),
            i = 0,
            s = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (l) {
              let a = Date.now(),
                u = o[s];
              r || (r = a), (n[i] = l), (o[i] = a);
              let f = s,
                c = 0;
              for (; f !== i; ) (c += n[f++]), (f %= e);
              if (((i = (i + 1) % e) === s && (s = (s + 1) % e), a - r < t))
                return;
              let d = u && a - u;
              return d ? Math.round((1e3 * c) / d) : void 0;
            }
          );
        },
        ek = function (e, t) {
          let r,
            n,
            o = 0,
            i = 1e3 / t,
            s = (t, i = Date.now()) => {
              (o = i),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                e.apply(null, t);
            };
          return [
            (...e) => {
              let t = Date.now(),
                l = t - o;
              l >= i
                ? s(e, t)
                : ((r = e),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), s(r);
                    }, i - l)));
            },
            () => r && s(r),
          ];
        },
        eL = (e, t, r = 3) => {
          let n = 0,
            o = eN(50, 250);
          return ek((r) => {
            let i = r.loaded,
              s = r.lengthComputable ? r.total : void 0,
              l = i - n,
              a = o(l);
            (n = i),
              e({
                loaded: i,
                total: s,
                progress: s ? i / s : void 0,
                bytes: l,
                rate: a || void 0,
                estimated: a && s && i <= s ? (s - i) / a : void 0,
                event: r,
                lengthComputable: null != s,
                [t ? 'download' : 'upload']: !0,
              });
          }, r);
        },
        eU = (e, t) => {
          let r = null != e;
          return [
            (n) => t[0]({ lengthComputable: r, total: e, loaded: n }),
            t[1],
          ];
        },
        eP =
          (e) =>
          (...t) =>
            q.asap(() => e(...t)),
        ej = eg.hasStandardBrowserEnv
          ? ((e, t) => (r) => (
              (r = new URL(r, eg.origin)),
              e.protocol === r.protocol &&
                e.host === r.host &&
                (t || e.port === r.port)
            ))(
              new URL(eg.origin),
              eg.navigator && /(msie|trident)/i.test(eg.navigator.userAgent),
            )
          : () => !0,
        eI = eg.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, o, i) {
                let s = [e + '=' + encodeURIComponent(t)];
                q.isNumber(r) && s.push('expires=' + new Date(r).toGMTString()),
                  q.isString(n) && s.push('path=' + n),
                  q.isString(o) && s.push('domain=' + o),
                  !0 === i && s.push('secure'),
                  (document.cookie = s.join('; '));
              },
              read(e) {
                let t = document.cookie.match(
                  RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function e_(e, t, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return (e && n) || !1 == r
          ? t
            ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '')
            : e
          : t;
      }
      let eD = (e) => (e instanceof eO ? { ...e } : e);
      function eF(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r, n) {
          return q.isPlainObject(e) && q.isPlainObject(t)
            ? q.merge.call({ caseless: n }, e, t)
            : q.isPlainObject(t)
              ? q.merge({}, t)
              : q.isArray(t)
                ? t.slice()
                : t;
        }
        function o(e, t, r, o) {
          return q.isUndefined(t)
            ? q.isUndefined(e)
              ? void 0
              : n(void 0, e, r, o)
            : n(e, t, r, o);
        }
        function i(e, t) {
          if (!q.isUndefined(t)) return n(void 0, t);
        }
        function s(e, t) {
          return q.isUndefined(t)
            ? q.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, t);
        }
        function l(r, o, i) {
          return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0;
        }
        let a = {
          url: i,
          method: i,
          data: i,
          baseURL: s,
          transformRequest: s,
          transformResponse: s,
          paramsSerializer: s,
          timeout: s,
          timeoutMessage: s,
          withCredentials: s,
          withXSRFToken: s,
          adapter: s,
          responseType: s,
          xsrfCookieName: s,
          xsrfHeaderName: s,
          onUploadProgress: s,
          onDownloadProgress: s,
          decompress: s,
          maxContentLength: s,
          maxBodyLength: s,
          beforeRedirect: s,
          transport: s,
          httpAgent: s,
          httpsAgent: s,
          cancelToken: s,
          socketPath: s,
          responseEncoding: s,
          validateStatus: l,
          headers: (e, t, r) => o(eD(e), eD(t), r, !0),
        };
        return (
          q.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let i = a[n] || o,
              s = i(e[n], t[n], n);
            (q.isUndefined(s) && i !== l) || (r[n] = s);
          }),
          r
        );
      }
      let ez = (e) => {
          let t;
          let r = eF({}, e),
            {
              data: n,
              withXSRFToken: o,
              xsrfHeaderName: i,
              xsrfCookieName: s,
              headers: l,
              auth: a,
            } = r;
          if (
            ((r.headers = l = eO.from(l)),
            (r.url = eo(e_(r.baseURL, r.url), e.params, e.paramsSerializer)),
            a &&
              l.set(
                'Authorization',
                'Basic ' +
                  btoa(
                    (a.username || '') +
                      ':' +
                      (a.password
                        ? unescape(encodeURIComponent(a.password))
                        : ''),
                  ),
              ),
            q.isFormData(n))
          ) {
            if (eg.hasStandardBrowserEnv || eg.hasStandardBrowserWebWorkerEnv)
              l.setContentType(void 0);
            else if (!1 !== (t = l.getContentType())) {
              let [e, ...r] = t
                ? t
                    .split(';')
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              l.setContentType([e || 'multipart/form-data', ...r].join('; '));
            }
          }
          if (
            eg.hasStandardBrowserEnv &&
            (o && q.isFunction(o) && (o = o(r)), o || (!1 !== o && ej(r.url)))
          ) {
            let e = i && s && eI.read(s);
            e && l.set(i, e);
          }
          return r;
        },
        eM =
          'undefined' != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n, o, i, s, l;
              let a = ez(e),
                u = a.data,
                f = eO.from(a.headers).normalize(),
                {
                  responseType: c,
                  onUploadProgress: d,
                  onDownloadProgress: p,
                } = a;
              function h() {
                s && s(),
                  l && l(),
                  a.cancelToken && a.cancelToken.unsubscribe(n),
                  a.signal && a.signal.removeEventListener('abort', n);
              }
              let g = new XMLHttpRequest();
              function m() {
                if (!g) return;
                let n = eO.from(
                  'getAllResponseHeaders' in g && g.getAllResponseHeaders(),
                );
                eC(
                  function (e) {
                    t(e), h();
                  },
                  function (e) {
                    r(e), h();
                  },
                  {
                    data:
                      c && 'text' !== c && 'json' !== c
                        ? g.response
                        : g.responseText,
                    status: g.status,
                    statusText: g.statusText,
                    headers: n,
                    config: e,
                    request: g,
                  },
                ),
                  (g = null);
              }
              g.open(a.method.toUpperCase(), a.url, !0),
                (g.timeout = a.timeout),
                'onloadend' in g
                  ? (g.onloadend = m)
                  : (g.onreadystatechange = function () {
                      g &&
                        4 === g.readyState &&
                        (0 !== g.status ||
                          (g.responseURL &&
                            0 === g.responseURL.indexOf('file:'))) &&
                        setTimeout(m);
                    }),
                (g.onabort = function () {
                  g &&
                    (r(new H('Request aborted', H.ECONNABORTED, e, g)),
                    (g = null));
                }),
                (g.onerror = function () {
                  r(new H('Network Error', H.ERR_NETWORK, e, g)), (g = null);
                }),
                (g.ontimeout = function () {
                  let t = a.timeout
                      ? 'timeout of ' + a.timeout + 'ms exceeded'
                      : 'timeout exceeded',
                    n = a.transitional || es;
                  a.timeoutErrorMessage && (t = a.timeoutErrorMessage),
                    r(
                      new H(
                        t,
                        n.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
                        e,
                        g,
                      ),
                    ),
                    (g = null);
                }),
                void 0 === u && f.setContentType(null),
                'setRequestHeader' in g &&
                  q.forEach(f.toJSON(), function (e, t) {
                    g.setRequestHeader(t, e);
                  }),
                q.isUndefined(a.withCredentials) ||
                  (g.withCredentials = !!a.withCredentials),
                c && 'json' !== c && (g.responseType = a.responseType),
                p && (([i, l] = eL(p, !0)), g.addEventListener('progress', i)),
                d &&
                  g.upload &&
                  (([o, s] = eL(d)),
                  g.upload.addEventListener('progress', o),
                  g.upload.addEventListener('loadend', s)),
                (a.cancelToken || a.signal) &&
                  ((n = (t) => {
                    g &&
                      (r(!t || t.type ? new eB(null, e, g) : t),
                      g.abort(),
                      (g = null));
                  }),
                  a.cancelToken && a.cancelToken.subscribe(n),
                  a.signal &&
                    (a.signal.aborted
                      ? n()
                      : a.signal.addEventListener('abort', n)));
              let y = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || '';
              })(a.url);
              if (y && -1 === eg.protocols.indexOf(y)) {
                r(
                  new H(
                    'Unsupported protocol ' + y + ':',
                    H.ERR_BAD_REQUEST,
                    e,
                  ),
                );
                return;
              }
              g.send(u || null);
            });
          },
        e$ = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r,
              n = new AbortController(),
              o = function (e) {
                if (!r) {
                  (r = !0), s();
                  let t = e instanceof Error ? e : this.reason;
                  n.abort(
                    t instanceof H
                      ? t
                      : new eB(t instanceof Error ? t.message : t),
                  );
                }
              },
              i =
                t &&
                setTimeout(() => {
                  (i = null),
                    o(new H(`timeout ${t} of ms exceeded`, H.ETIMEDOUT));
                }, t),
              s = () => {
                e &&
                  (i && clearTimeout(i),
                  (i = null),
                  e.forEach((e) => {
                    e.unsubscribe
                      ? e.unsubscribe(o)
                      : e.removeEventListener('abort', o);
                  }),
                  (e = null));
              };
            e.forEach((e) => e.addEventListener('abort', o));
            let { signal: l } = n;
            return (l.unsubscribe = () => q.asap(s)), l;
          }
        },
        eW = function* (e, t) {
          let r,
            n = e.byteLength;
          if (!t || n < t) {
            yield e;
            return;
          }
          let o = 0;
          for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
        },
        eq = async function* (e, t) {
          for await (let r of eH(e)) yield* eW(r, t);
        },
        eH = async function* (e) {
          if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
          }
          let t = e.getReader();
          try {
            for (;;) {
              let { done: e, value: r } = await t.read();
              if (e) break;
              yield r;
            }
          } finally {
            await t.cancel();
          }
        },
        eV = (e, t, r, n) => {
          let o;
          let i = eq(e, t),
            s = 0,
            l = (e) => {
              !o && ((o = !0), n && n(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  let { done: t, value: n } = await i.next();
                  if (t) {
                    l(), e.close();
                    return;
                  }
                  let o = n.byteLength;
                  if (r) {
                    let e = (s += o);
                    r(e);
                  }
                  e.enqueue(new Uint8Array(n));
                } catch (e) {
                  throw (l(e), e);
                }
              },
              cancel: (e) => (l(e), i.return()),
            },
            { highWaterMark: 2 },
          );
        },
        eG =
          'function' == typeof fetch &&
          'function' == typeof Request &&
          'function' == typeof Response,
        eJ = eG && 'function' == typeof ReadableStream,
        eX =
          eG &&
          ('function' == typeof TextEncoder
            ? ((n = new TextEncoder()), (e) => n.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        eK = (e, ...t) => {
          try {
            return !!e(...t);
          } catch (e) {
            return !1;
          }
        },
        eY =
          eJ &&
          eK(() => {
            let e = !1,
              t = new Request(eg.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                  return (e = !0), 'half';
                },
              }).headers.has('Content-Type');
            return e && !t;
          }),
        eZ = eJ && eK(() => q.isReadableStream(new Response('').body)),
        eQ = { stream: eZ && ((e) => e.body) };
      eG &&
        ((s = new Response()),
        ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
          eQ[e] ||
            (eQ[e] = q.isFunction(s[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new H(
                    `Response type '${e}' is not supported`,
                    H.ERR_NOT_SUPPORT,
                    r,
                  );
                });
        }));
      let e0 = async (e) => {
          if (null == e) return 0;
          if (q.isBlob(e)) return e.size;
          if (q.isSpecCompliantForm(e)) {
            let t = new Request(eg.origin, { method: 'POST', body: e });
            return (await t.arrayBuffer()).byteLength;
          }
          return q.isArrayBufferView(e) || q.isArrayBuffer(e)
            ? e.byteLength
            : (q.isURLSearchParams(e) && (e += ''), q.isString(e))
              ? (await eX(e)).byteLength
              : void 0;
        },
        e1 = async (e, t) => {
          let r = q.toFiniteNumber(e.getContentLength());
          return null == r ? e0(t) : r;
        },
        e2 = {
          http: null,
          xhr: eM,
          fetch:
            eG &&
            (async (e) => {
              let t,
                r,
                {
                  url: n,
                  method: o,
                  data: i,
                  signal: s,
                  cancelToken: l,
                  timeout: a,
                  onDownloadProgress: u,
                  onUploadProgress: f,
                  responseType: c,
                  headers: d,
                  withCredentials: p = 'same-origin',
                  fetchOptions: h,
                } = ez(e);
              c = c ? (c + '').toLowerCase() : 'text';
              let g = e$([s, l && l.toAbortSignal()], a),
                m =
                  g &&
                  g.unsubscribe &&
                  (() => {
                    g.unsubscribe();
                  });
              try {
                if (
                  f &&
                  eY &&
                  'get' !== o &&
                  'head' !== o &&
                  0 !== (r = await e1(d, i))
                ) {
                  let e,
                    t = new Request(n, {
                      method: 'POST',
                      body: i,
                      duplex: 'half',
                    });
                  if (
                    (q.isFormData(i) &&
                      (e = t.headers.get('content-type')) &&
                      d.setContentType(e),
                    t.body)
                  ) {
                    let [e, n] = eU(r, eL(eP(f)));
                    i = eV(t.body, 65536, e, n);
                  }
                }
                q.isString(p) || (p = p ? 'include' : 'omit');
                let s = 'credentials' in Request.prototype;
                t = new Request(n, {
                  ...h,
                  signal: g,
                  method: o.toUpperCase(),
                  headers: d.normalize().toJSON(),
                  body: i,
                  duplex: 'half',
                  credentials: s ? p : void 0,
                });
                let l = await fetch(t),
                  a = eZ && ('stream' === c || 'response' === c);
                if (eZ && (u || (a && m))) {
                  let e = {};
                  ['status', 'statusText', 'headers'].forEach((t) => {
                    e[t] = l[t];
                  });
                  let t = q.toFiniteNumber(l.headers.get('content-length')),
                    [r, n] = (u && eU(t, eL(eP(u), !0))) || [];
                  l = new Response(
                    eV(l.body, 65536, r, () => {
                      n && n(), m && m();
                    }),
                    e,
                  );
                }
                c = c || 'text';
                let y = await eQ[q.findKey(eQ, c) || 'text'](l, e);
                return (
                  !a && m && m(),
                  await new Promise((r, n) => {
                    eC(r, n, {
                      data: y,
                      headers: eO.from(l.headers),
                      status: l.status,
                      statusText: l.statusText,
                      config: e,
                      request: t,
                    });
                  })
                );
              } catch (r) {
                if (
                  (m && m(),
                  r && 'TypeError' === r.name && /fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new H('Network Error', H.ERR_NETWORK, e, t),
                    { cause: r.cause || r },
                  );
                throw H.from(r, r && r.code, e, t);
              }
            }),
        };
      q.forEach(e2, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, 'name', { value: t });
          } catch (e) {}
          Object.defineProperty(e, 'adapterName', { value: t });
        }
      });
      let e5 = (e) => `- ${e}`,
        e6 = (e) => q.isFunction(e) || null === e || !1 === e,
        e8 = {
          getAdapter: (e) => {
            let t, r;
            let { length: n } = (e = q.isArray(e) ? e : [e]),
              o = {};
            for (let i = 0; i < n; i++) {
              let n;
              if (
                ((r = t = e[i]),
                !e6(t) && void 0 === (r = e2[(n = String(t)).toLowerCase()]))
              )
                throw new H(`Unknown adapter '${n}'`);
              if (r) break;
              o[n || '#' + i] = r;
            }
            if (!r) {
              let e = Object.entries(o).map(
                ([e, t]) =>
                  `adapter ${e} ` +
                  (!1 === t
                    ? 'is not supported by the environment'
                    : 'is not available in the build'),
              );
              throw new H(
                'There is no suitable adapter to dispatch the request ' +
                  (n
                    ? e.length > 1
                      ? 'since :\n' + e.map(e5).join('\n')
                      : ' ' + e5(e[0])
                    : 'as no adapter specified'),
                'ERR_NOT_SUPPORT',
              );
            }
            return r;
          },
        };
      function e3(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new eB(null, e);
      }
      function e4(e) {
        return (
          e3(e),
          (e.headers = eO.from(e.headers)),
          (e.data = eS.call(e, e.transformRequest)),
          -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
          e8
            .getAdapter(e.adapter || ey.adapter)(e)
            .then(
              function (t) {
                return (
                  e3(e),
                  (t.data = eS.call(e, e.transformResponse, t)),
                  (t.headers = eO.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  !eT(t) &&
                    (e3(e),
                    t &&
                      t.response &&
                      ((t.response.data = eS.call(
                        e,
                        e.transformResponse,
                        t.response,
                      )),
                      (t.response.headers = eO.from(t.response.headers)))),
                  Promise.reject(t)
                );
              },
            )
        );
      }
      let e7 = '1.8.1',
        e9 = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
        (e, t) => {
          e9[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
          };
        },
      );
      let te = {};
      (e9.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            '[Axios v' +
            e7 +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? '. ' + r : '')
          );
        }
        return (r, o, i) => {
          if (!1 === e)
            throw new H(
              n(o, ' has been removed' + (t ? ' in ' + t : '')),
              H.ERR_DEPRECATED,
            );
          return (
            t &&
              !te[o] &&
              ((te[o] = !0),
              console.warn(
                n(
                  o,
                  ' has been deprecated since v' +
                    t +
                    ' and will be removed in the near future',
                ),
              )),
            !e || e(r, o, i)
          );
        };
      }),
        (e9.spelling = function (e) {
          return (t, r) => (
            console.warn(`${r} is likely a misspelling of ${e}`), !0
          );
        });
      let tt = {
          assertOptions: function (e, t, r) {
            if ('object' != typeof e)
              throw new H('options must be an object', H.ERR_BAD_OPTION_VALUE);
            let n = Object.keys(e),
              o = n.length;
            for (; o-- > 0; ) {
              let i = n[o],
                s = t[i];
              if (s) {
                let t = e[i],
                  r = void 0 === t || s(t, i, e);
                if (!0 !== r)
                  throw new H(
                    'option ' + i + ' must be ' + r,
                    H.ERR_BAD_OPTION_VALUE,
                  );
                continue;
              }
              if (!0 !== r)
                throw new H('Unknown option ' + i, H.ERR_BAD_OPTION);
            }
          },
          validators: e9,
        },
        tr = tt.validators;
      class tn {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new ei(), response: new ei() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(t)
                : (t = Error());
              let r = t.stack ? t.stack.replace(/^.+\n/, '') : '';
              try {
                e.stack
                  ? r &&
                    !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, '')) &&
                    (e.stack += '\n' + r)
                  : (e.stack = r);
              } catch (e) {}
            }
            throw e;
          }
        }
        _request(e, t) {
          let r, n;
          'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {});
          let {
            transitional: o,
            paramsSerializer: i,
            headers: s,
          } = (t = eF(this.defaults, t));
          void 0 !== o &&
            tt.assertOptions(
              o,
              {
                silentJSONParsing: tr.transitional(tr.boolean),
                forcedJSONParsing: tr.transitional(tr.boolean),
                clarifyTimeoutError: tr.transitional(tr.boolean),
              },
              !1,
            ),
            null != i &&
              (q.isFunction(i)
                ? (t.paramsSerializer = { serialize: i })
                : tt.assertOptions(
                    i,
                    { encode: tr.function, serialize: tr.function },
                    !0,
                  )),
            void 0 !== t.allowAbsoluteUrls ||
              (void 0 !== this.defaults.allowAbsoluteUrls
                ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                : (t.allowAbsoluteUrls = !0)),
            tt.assertOptions(
              t,
              {
                baseUrl: tr.spelling('baseURL'),
                withXsrfToken: tr.spelling('withXSRFToken'),
              },
              !0,
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              'get'
            ).toLowerCase());
          let l = s && q.merge(s.common, s[t.method]);
          s &&
            q.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              (e) => {
                delete s[e];
              },
            ),
            (t.headers = eO.concat(l, s));
          let a = [],
            u = !0;
          this.interceptors.request.forEach(function (e) {
            ('function' != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((u = u && e.synchronous), a.unshift(e.fulfilled, e.rejected));
          });
          let f = [];
          this.interceptors.response.forEach(function (e) {
            f.push(e.fulfilled, e.rejected);
          });
          let c = 0;
          if (!u) {
            let e = [e4.bind(this), void 0];
            for (
              e.unshift.apply(e, a),
                e.push.apply(e, f),
                n = e.length,
                r = Promise.resolve(t);
              c < n;

            )
              r = r.then(e[c++], e[c++]);
            return r;
          }
          n = a.length;
          let d = t;
          for (c = 0; c < n; ) {
            let e = a[c++],
              t = a[c++];
            try {
              d = e(d);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            r = e4.call(this, d);
          } catch (e) {
            return Promise.reject(e);
          }
          for (c = 0, n = f.length; c < n; ) r = r.then(f[c++], f[c++]);
          return r;
        }
        getUri(e) {
          return eo(
            e_((e = eF(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
            e.params,
            e.paramsSerializer,
          );
        }
      }
      q.forEach(['delete', 'get', 'head', 'options'], function (e) {
        tn.prototype[e] = function (t, r) {
          return this.request(
            eF(r || {}, { method: e, url: t, data: (r || {}).data }),
          );
        };
      }),
        q.forEach(['post', 'put', 'patch'], function (e) {
          function t(t) {
            return function (r, n, o) {
              return this.request(
                eF(o || {}, {
                  method: e,
                  headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: r,
                  data: n,
                }),
              );
            };
          }
          (tn.prototype[e] = t()), (tn.prototype[e + 'Form'] = t(!0));
        });
      class to {
        constructor(e) {
          let t;
          if ('function' != typeof e)
            throw TypeError('executor must be a function.');
          this.promise = new Promise(function (e) {
            t = e;
          });
          let r = this;
          this.promise.then((e) => {
            if (!r._listeners) return;
            let t = r._listeners.length;
            for (; t-- > 0; ) r._listeners[t](e);
            r._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              let n = new Promise((e) => {
                r.subscribe(e), (t = e);
              }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e, n, o) {
              !r.reason && ((r.reason = new eB(e, n, o)), t(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          let e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new to(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      let ti = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(ti).forEach(([e, t]) => {
        ti[t] = e;
      });
      let ts = (function e(t) {
        let r = new tn(t),
          n = a(tn.prototype.request, r);
        return (
          q.extend(n, tn.prototype, r, { allOwnKeys: !0 }),
          q.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(eF(t, r));
          }),
          n
        );
      })(ey);
      (ts.Axios = tn),
        (ts.CanceledError = eB),
        (ts.CancelToken = to),
        (ts.isCancel = eT),
        (ts.VERSION = e7),
        (ts.toFormData = Q),
        (ts.AxiosError = H),
        (ts.Cancel = ts.CanceledError),
        (ts.all = function (e) {
          return Promise.all(e);
        }),
        (ts.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (ts.isAxiosError = function (e) {
          return q.isObject(e) && !0 === e.isAxiosError;
        }),
        (ts.mergeConfig = eF),
        (ts.AxiosHeaders = eO),
        (ts.formToJSON = (e) => em(q.isHTMLForm(e) ? new FormData(e) : e)),
        (ts.getAdapter = e8.getAdapter),
        (ts.HttpStatusCode = ti),
        (ts.default = ts);
      let tl = ts;
    },
    3360: (e, t, r) => {
      'use strict';
      r.d(t, { hO: () => a, sG: () => l });
      var n = r(2115),
        o = r(7650),
        i = r(2317),
        s = r(5155),
        l = [
          'a',
          'button',
          'div',
          'form',
          'h2',
          'h3',
          'img',
          'input',
          'label',
          'li',
          'nav',
          'ol',
          'p',
          'span',
          'svg',
          'ul',
        ].reduce((e, t) => {
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...o } = e,
              l = n ? i.DX : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, s.jsx)(l, { ...o, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function a(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    3463: (e, t, r) => {
      'use strict';
      function n() {
        for (var e, t, r = 0, n = '', o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = '';
              if ('string' == typeof t || 'number' == typeof t) o += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                } else for (n in t) t[n] && (o && (o += ' '), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += ' '), (n += t));
        return n;
      }
      r.d(t, { $: () => n });
    },
    3610: (e, t, r) => {
      'use strict';
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
      r.d(t, { m: () => n });
    },
    3836: (e, t) => {
      'use strict';
      (t.byteLength = function (e) {
        var t = a(e),
          r = t[0],
          n = t[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            i = a(e),
            s = i[0],
            l = i[1],
            u = new o(((s + l) * 3) / 4 - l),
            f = 0,
            c = l > 0 ? s - 4 : s;
          for (r = 0; r < c; r += 4)
            (t =
              (n[e.charCodeAt(r)] << 18) |
              (n[e.charCodeAt(r + 1)] << 12) |
              (n[e.charCodeAt(r + 2)] << 6) |
              n[e.charCodeAt(r + 3)]),
              (u[f++] = (t >> 16) & 255),
              (u[f++] = (t >> 8) & 255),
              (u[f++] = 255 & t);
          return (
            2 === l &&
              ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
              (u[f++] = 255 & t)),
            1 === l &&
              ((t =
                (n[e.charCodeAt(r)] << 10) |
                (n[e.charCodeAt(r + 1)] << 4) |
                (n[e.charCodeAt(r + 2)] >> 2)),
              (u[f++] = (t >> 8) & 255),
              (u[f++] = 255 & t)),
            u
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, n = e.length, o = n % 3, i = [], s = 0, l = n - o;
            s < l;
            s += 16383
          )
            i.push(
              (function (e, t, n) {
                for (var o, i = [], s = t; s < n; s += 3)
                  (o =
                    ((e[s] << 16) & 0xff0000) +
                    ((e[s + 1] << 8) & 65280) +
                    (255 & e[s + 2])),
                    i.push(
                      r[(o >> 18) & 63] +
                        r[(o >> 12) & 63] +
                        r[(o >> 6) & 63] +
                        r[63 & o],
                    );
                return i.join('');
              })(e, s, s + 16383 > l ? l : s + 16383),
            );
          return (
            1 === o
              ? i.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + '==')
              : 2 === o &&
                i.push(
                  r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                    r[(t >> 4) & 63] +
                    r[(t << 2) & 63] +
                    '=',
                ),
            i.join('')
          );
        });
      for (
        var r = [],
          n = [],
          o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          i =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          s = 0,
          l = i.length;
        s < l;
        ++s
      )
        (r[s] = i[s]), (n[i.charCodeAt(s)] = s);
      function a(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error('Invalid string. Length must be a multiple of 4');
        var r = e.indexOf('=');
        -1 === r && (r = t);
        var n = r === t ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
    },
    4981: (e, t) => {
      (t.read = function (e, t, r, n, o) {
        var i,
          s,
          l = 8 * o - n - 1,
          a = (1 << l) - 1,
          u = a >> 1,
          f = -7,
          c = r ? o - 1 : 0,
          d = r ? -1 : 1,
          p = e[t + c];
        for (
          c += d, i = p & ((1 << -f) - 1), p >>= -f, f += l;
          f > 0;
          i = 256 * i + e[t + c], c += d, f -= 8
        );
        for (
          s = i & ((1 << -f) - 1), i >>= -f, f += n;
          f > 0;
          s = 256 * s + e[t + c], c += d, f -= 8
        );
        if (0 === i) i = 1 - u;
        else {
          if (i === a) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, n)), (i -= u);
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - n);
      }),
        (t.write = function (e, t, r, n, o, i) {
          var s,
            l,
            a,
            u = 8 * i - o - 1,
            f = (1 << u) - 1,
            c = f >> 1,
            d = 5960464477539062e-23 * (23 === o),
            p = n ? 0 : i - 1,
            h = n ? 1 : -1,
            g = +(t < 0 || (0 === t && 1 / t < 0));
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((l = +!!isNaN(t)), (s = f))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (a = Math.pow(2, -s)) < 1 && (s--, (a *= 2)),
                s + c >= 1 ? (t += d / a) : (t += d * Math.pow(2, 1 - c)),
                t * a >= 2 && (s++, (a /= 2)),
                s + c >= f
                  ? ((l = 0), (s = f))
                  : s + c >= 1
                    ? ((l = (t * a - 1) * Math.pow(2, o)), (s += c))
                    : ((l = t * Math.pow(2, c - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            e[r + p] = 255 & l, p += h, l /= 256, o -= 8
          );
          for (
            s = (s << o) | l, u += o;
            u > 0;
            e[r + p] = 255 & s, p += h, s /= 256, u -= 8
          );
          e[r + p - h] |= 128 * g;
        });
    },
    6611: (e, t, r) => {
      'use strict';
      r.d(t, { N: () => o });
      var n = r(2115),
        o = globalThis?.document ? n.useLayoutEffect : () => {};
    },
    7028: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => s });
      var n = r(2115),
        o = r(8068),
        i = r(6611),
        s = (e) => {
          let { present: t, children: r } = e,
            s = (function (e) {
              var t, r;
              let [o, s] = n.useState(),
                a = n.useRef({}),
                u = n.useRef(e),
                f = n.useRef('none'),
                [c, d] =
                  ((t = e ? 'mounted' : 'unmounted'),
                  (r = {
                    mounted: {
                      UNMOUNT: 'unmounted',
                      ANIMATION_OUT: 'unmountSuspended',
                    },
                    unmountSuspended: {
                      MOUNT: 'mounted',
                      ANIMATION_END: 'unmounted',
                    },
                    unmounted: { MOUNT: 'mounted' },
                  }),
                  n.useReducer((e, t) => {
                    let n = r[e][t];
                    return null != n ? n : e;
                  }, t));
              return (
                n.useEffect(() => {
                  let e = l(a.current);
                  f.current = 'mounted' === c ? e : 'none';
                }, [c]),
                (0, i.N)(() => {
                  let t = a.current,
                    r = u.current;
                  if (r !== e) {
                    let n = f.current,
                      o = l(t);
                    e
                      ? d('MOUNT')
                      : 'none' === o ||
                          (null == t ? void 0 : t.display) === 'none'
                        ? d('UNMOUNT')
                        : r && n !== o
                          ? d('ANIMATION_OUT')
                          : d('UNMOUNT'),
                      (u.current = e);
                  }
                }, [e, d]),
                (0, i.N)(() => {
                  if (o) {
                    var e;
                    let t;
                    let r =
                        null !== (e = o.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      n = (e) => {
                        let n = l(a.current).includes(e.animationName);
                        if (
                          e.target === o &&
                          n &&
                          (d('ANIMATION_END'), !u.current)
                        ) {
                          let e = o.style.animationFillMode;
                          (o.style.animationFillMode = 'forwards'),
                            (t = r.setTimeout(() => {
                              'forwards' === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            }));
                        }
                      },
                      i = (e) => {
                        e.target === o && (f.current = l(a.current));
                      };
                    return (
                      o.addEventListener('animationstart', i),
                      o.addEventListener('animationcancel', n),
                      o.addEventListener('animationend', n),
                      () => {
                        r.clearTimeout(t),
                          o.removeEventListener('animationstart', i),
                          o.removeEventListener('animationcancel', n),
                          o.removeEventListener('animationend', n);
                      }
                    );
                  }
                  d('ANIMATION_END');
                }, [o, d]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(c),
                  ref: n.useCallback((e) => {
                    e && (a.current = getComputedStyle(e)), s(e);
                  }, []),
                }
              );
            })(t),
            a =
              'function' == typeof r
                ? r({ present: s.isPresent })
                : n.Children.only(r),
            u = (0, o.s)(
              s.ref,
              (function (e) {
                var t, r;
                let n =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  o = n && 'isReactWarning' in n && n.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                        (n =
                          null ===
                            (r = Object.getOwnPropertyDescriptor(e, 'ref')) ||
                          void 0 === r
                            ? void 0
                            : r.get) &&
                        'isReactWarning' in n &&
                        n.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(a),
            );
          return 'function' == typeof r || s.isPresent
            ? n.cloneElement(a, { ref: u })
            : null;
        };
      function l(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      s.displayName = 'Presence';
    },
    7323: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => a });
      var n = r(2115),
        o = r(7650),
        i = r(3360),
        s = r(6611),
        l = r(5155),
        a = n.forwardRef((e, t) => {
          var r, a;
          let { container: u, ...f } = e,
            [c, d] = n.useState(!1);
          (0, s.N)(() => d(!0), []);
          let p =
            u ||
            (c &&
              (null === (a = globalThis) || void 0 === a
                ? void 0
                : null === (r = a.document) || void 0 === r
                  ? void 0
                  : r.body));
          return p
            ? o.createPortal((0, l.jsx)(i.sG.div, { ...f, ref: t }), p)
            : null;
        });
      a.displayName = 'Portal';
    },
    7401: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => a });
      var n = r(2115);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && '' !== e.trim() && r.indexOf(e) === t)
            .join(' ')
            .trim();
        };
      var s = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      };
      let l = (0, n.forwardRef)((e, t) => {
          let {
            color: r = 'currentColor',
            size: o = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: a,
            className: u = '',
            children: f,
            iconNode: c,
            ...d
          } = e;
          return (0, n.createElement)(
            'svg',
            {
              ref: t,
              ...s,
              width: o,
              height: o,
              stroke: r,
              strokeWidth: a ? (24 * Number(l)) / Number(o) : l,
              className: i('lucide', u),
              ...d,
            },
            [
              ...c.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(f) ? f : [f]),
            ],
          );
        }),
        a = (e, t) => {
          let r = (0, n.forwardRef)((r, s) => {
            let { className: a, ...u } = r;
            return (0, n.createElement)(l, {
              ref: s,
              iconNode: t,
              className: i('lucide-'.concat(o(e)), a),
              ...u,
            });
          });
          return (r.displayName = ''.concat(e)), r;
        };
    },
    7510: (e, t, r) => {
      'use strict';
      r.d(t, { X: () => i });
      var n = r(2115),
        o = r(6611);
      function i(e) {
        let [t, r] = n.useState(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              r({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let n, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ('borderBoxSize' in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (n = t.inlineSize), (o = t.blockSize);
                } else (n = e.offsetWidth), (o = e.offsetHeight);
                r({ width: n, height: o });
              });
              return t.observe(e, { box: 'border-box' }), () => t.unobserve(e);
            }
            r(void 0);
          }, [e]),
          t
        );
      }
    },
    7668: (e, t, r) => {
      'use strict';
      r.d(t, { B: () => a });
      var n,
        o = r(2115),
        i = r(6611),
        s = (n || (n = r.t(o, 2)))['useId'.toString()] || (() => void 0),
        l = 0;
      function a(e) {
        let [t, r] = o.useState(s());
        return (
          (0, i.N)(() => {
            e || r((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
    },
    8068: (e, t, r) => {
      'use strict';
      r.d(t, { s: () => s, t: () => i });
      var n = r(2115);
      function o(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function i(...e) {
        return (t) => {
          let r = !1,
            n = e.map((e) => {
              let n = o(e, t);
              return r || 'function' != typeof n || (r = !0), n;
            });
          if (r)
            return () => {
              for (let t = 0; t < n.length; t++) {
                let r = n[t];
                'function' == typeof r ? r() : o(e[t], null);
              }
            };
        };
      }
      function s(...e) {
        return n.useCallback(i(...e), e);
      }
    },
    8166: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => i });
      var n = r(2115),
        o = r(5155);
      function i(e, t = []) {
        let r = [],
          s = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o],
              );
            };
          };
        return (
          (s.scopeName = e),
          [
            function (t, i) {
              let s = n.createContext(i),
                l = r.length;
              r = [...r, i];
              let a = (t) => {
                let { scope: r, children: i, ...a } = t,
                  u = r?.[e]?.[l] || s,
                  f = n.useMemo(() => a, Object.values(a));
                return (0, o.jsx)(u.Provider, { value: f, children: i });
              };
              return (
                (a.displayName = t + 'Provider'),
                [
                  a,
                  function (r, o) {
                    let a = o?.[e]?.[l] || s,
                      u = n.useContext(a);
                    if (u) return u;
                    if (void 0 !== i) return i;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o],
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(s, ...t),
          ]
        );
      }
    },
    8308: (e, t, r) => {
      'use strict';
      let n = r(3836),
        o = r(4981),
        i =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null;
      function s(e) {
        if (e > 0x7fffffff)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, l.prototype), t;
      }
      function l(e, t, r) {
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return f(e);
        }
        return a(e, t, r);
      }
      function a(e, t, r) {
        if ('string' == typeof e)
          return (function (e, t) {
            if (
              (('string' != typeof t || '' === t) && (t = 'utf8'),
              !l.isEncoding(t))
            )
              throw TypeError('Unknown encoding: ' + t);
            let r = 0 | h(e, t),
              n = s(r),
              o = n.write(e, t);
            return o !== r && (n = n.slice(0, o)), n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (_(e, Uint8Array)) {
              let t = new Uint8Array(e);
              return d(t.buffer, t.byteOffset, t.byteLength);
            }
            return c(e);
          })(e);
        if (null == e)
          throw TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e,
          );
        if (
          _(e, ArrayBuffer) ||
          (e && _(e.buffer, ArrayBuffer)) ||
          ('undefined' != typeof SharedArrayBuffer &&
            (_(e, SharedArrayBuffer) || (e && _(e.buffer, SharedArrayBuffer))))
        )
          return d(e, t, r);
        if ('number' == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        let n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return l.from(n, t, r);
        let o = (function (e) {
          if (l.isBuffer(e)) {
            let t = 0 | p(e.length),
              r = s(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          return void 0 !== e.length
            ? 'number' != typeof e.length ||
              (function (e) {
                return e != e;
              })(e.length)
              ? s(0)
              : c(e)
            : 'Buffer' === e.type && Array.isArray(e.data)
              ? c(e.data)
              : void 0;
        })(e);
        if (o) return o;
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof e[Symbol.toPrimitive]
        )
          return l.from(e[Symbol.toPrimitive]('string'), t, r);
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e,
        );
      }
      function u(e) {
        if ('number' != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
      }
      function f(e) {
        return u(e), s(e < 0 ? 0 : 0 | p(e));
      }
      function c(e) {
        let t = e.length < 0 ? 0 : 0 | p(e.length),
          r = s(t);
        for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
        return r;
      }
      function d(e, t, r) {
        let n;
        if (t < 0 || e.byteLength < t)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, r)),
            l.prototype,
          ),
          n
        );
      }
      function p(e) {
        if (e >= 0x7fffffff)
          throw RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes',
          );
        return 0 | e;
      }
      function h(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || _(e, ArrayBuffer)) return e.byteLength;
        if ('string' != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e,
          );
        let r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let o = !1;
        for (;;)
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
              return P(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return j(e).length;
            default:
              if (o) return n ? -1 : P(e).length;
              (t = ('' + t).toLowerCase()), (o = !0);
          }
      }
      function g(e, t, r) {
        let o = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return (function (e, t, r) {
                let n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                let o = '';
                for (let n = t; n < r; ++n) o += D[e[n]];
                return o;
              })(this, t, r);
            case 'utf8':
            case 'utf-8':
              return w(this, t, r);
            case 'ascii':
              return (function (e, t, r) {
                let n = '';
                r = Math.min(e.length, r);
                for (let o = t; o < r; ++o)
                  n += String.fromCharCode(127 & e[o]);
                return n;
              })(this, t, r);
            case 'latin1':
            case 'binary':
              return (function (e, t, r) {
                let n = '';
                r = Math.min(e.length, r);
                for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n;
              })(this, t, r);
            case 'base64':
              var i, s, l;
              return (
                (i = this),
                (s = t),
                (l = r),
                0 === s && l === i.length
                  ? n.fromByteArray(i)
                  : n.fromByteArray(i.slice(s, l))
              );
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return (function (e, t, r) {
                let n = e.slice(t, r),
                  o = '';
                for (let e = 0; e < n.length - 1; e += 2)
                  o += String.fromCharCode(n[e] + 256 * n[e + 1]);
                return o;
              })(this, t, r);
            default:
              if (o) throw TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (o = !0);
          }
      }
      function m(e, t, r) {
        let n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function y(e, t, r, n, o) {
        var i;
        if (0 === e.length) return -1;
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 0x7fffffff
              ? (r = 0x7fffffff)
              : r < -0x80000000 && (r = -0x80000000),
          (i = r *= 1) != i && (r = o ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (o) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (('string' == typeof t && (t = l.from(t, n)), l.isBuffer(t)))
          return 0 === t.length ? -1 : b(e, t, r, n, o);
        if ('number' == typeof t)
          return ((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf)
            ? o
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(e, t, r)
            : b(e, [t], r, n, o);
        throw TypeError('val must be string, number or Buffer');
      }
      function b(e, t, r, n, o) {
        let i,
          s = 1,
          l = e.length,
          a = t.length;
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (l /= 2), (a /= 2), (r /= 2);
        }
        function u(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (o) {
          let n = -1;
          for (i = r; i < l; i++)
            if (u(e, i) === u(t, -1 === n ? 0 : i - n)) {
              if ((-1 === n && (n = i), i - n + 1 === a)) return n * s;
            } else -1 !== n && (i -= i - n), (n = -1);
        } else
          for (r + a > l && (r = l - a), i = r; i >= 0; i--) {
            let r = !0;
            for (let n = 0; n < a; n++)
              if (u(e, i + n) !== u(t, n)) {
                r = !1;
                break;
              }
            if (r) return i;
          }
        return -1;
      }
      function w(e, t, r) {
        r = Math.min(e.length, r);
        let n = [],
          o = t;
        for (; o < r; ) {
          let t = e[o],
            i = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (o + s <= r) {
            let r, n, l, a;
            switch (s) {
              case 1:
                t < 128 && (i = t);
                break;
              case 2:
                (192 & (r = e[o + 1])) == 128 &&
                  (a = ((31 & t) << 6) | (63 & r)) > 127 &&
                  (i = a);
                break;
              case 3:
                (r = e[o + 1]),
                  (n = e[o + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (a = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (a < 55296 || a > 57343) &&
                    (i = a);
                break;
              case 4:
                (r = e[o + 1]),
                  (n = e[o + 2]),
                  (l = e[o + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & l) == 128 &&
                    (a =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & l)) > 65535 &&
                    a < 1114112 &&
                    (i = a);
            }
          }
          null === i
            ? ((i = 65533), (s = 1))
            : i > 65535 &&
              ((i -= 65536),
              n.push(((i >>> 10) & 1023) | 55296),
              (i = 56320 | (1023 & i))),
            n.push(i),
            (o += s);
        }
        return (function (e) {
          let t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          let r = '',
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function v(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
        if (e + t > r)
          throw RangeError('Trying to access beyond buffer length');
      }
      function x(e, t, r, n, o, i) {
        if (!l.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError('Index out of range');
      }
      function E(e, t, r, n, o) {
        N(t, n, o, e, r, 7);
        let i = Number(t & BigInt(0xffffffff));
        (e[r++] = i),
          (i >>= 8),
          (e[r++] = i),
          (i >>= 8),
          (e[r++] = i),
          (i >>= 8),
          (e[r++] = i);
        let s = Number((t >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          r
        );
      }
      function R(e, t, r, n, o) {
        N(t, n, o, e, r, 7);
        let i = Number(t & BigInt(0xffffffff));
        (e[r + 7] = i),
          (i >>= 8),
          (e[r + 6] = i),
          (i >>= 8),
          (e[r + 5] = i),
          (i >>= 8),
          (e[r + 4] = i);
        let s = Number((t >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (e[r + 3] = s),
          (s >>= 8),
          (e[r + 2] = s),
          (s >>= 8),
          (e[r + 1] = s),
          (s >>= 8),
          (e[r] = s),
          r + 8
        );
      }
      function A(e, t, r, n, o, i) {
        if (r + n > e.length || r < 0) throw RangeError('Index out of range');
      }
      function O(e, t, r, n, i) {
        return (
          (t *= 1),
          (r >>>= 0),
          i || A(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          o.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function S(e, t, r, n, i) {
        return (
          (t *= 1),
          (r >>>= 0),
          i || A(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          o.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (t.hp = l),
        (t.IS = 50),
        (l.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        l.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
          ),
        Object.defineProperty(l.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(l.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.byteOffset;
          },
        }),
        (l.poolSize = 8192),
        (l.from = function (e, t, r) {
          return a(e, t, r);
        }),
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array),
        (l.alloc = function (e, t, r) {
          return (u(e), e <= 0)
            ? s(e)
            : void 0 !== t
              ? 'string' == typeof r
                ? s(e).fill(t, r)
                : s(e).fill(t)
              : s(e);
        }),
        (l.allocUnsafe = function (e) {
          return f(e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return f(e);
        }),
        (l.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== l.prototype;
        }),
        (l.compare = function (e, t) {
          if (
            (_(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            _(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            !l.isBuffer(e) || !l.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (e === t) return 0;
          let r = e.length,
            n = t.length;
          for (let o = 0, i = Math.min(r, n); o < i; ++o)
            if (e[o] !== t[o]) {
              (r = e[o]), (n = t[o]);
              break;
            }
          return r < n ? -1 : +(n < r);
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          let r;
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          let n = l.allocUnsafe(t),
            o = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (_(t, Uint8Array))
              o + t.length > n.length
                ? (l.isBuffer(t) || (t = l.from(t)), t.copy(n, o))
                : Uint8Array.prototype.set.call(n, t, o);
            else if (l.isBuffer(t)) t.copy(n, o);
            else throw TypeError('"list" argument must be an Array of Buffers');
            o += t.length;
          }
          return n;
        }),
        (l.byteLength = h),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          let e = this.length;
          if (e % 2 != 0)
            throw RangeError('Buffer size must be a multiple of 16-bits');
          for (let t = 0; t < e; t += 2) m(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          let e = this.length;
          if (e % 4 != 0)
            throw RangeError('Buffer size must be a multiple of 32-bits');
          for (let t = 0; t < e; t += 4)
            m(this, t, t + 3), m(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          let e = this.length;
          if (e % 8 != 0)
            throw RangeError('Buffer size must be a multiple of 64-bits');
          for (let t = 0; t < e; t += 8)
            m(this, t, t + 7),
              m(this, t + 1, t + 6),
              m(this, t + 2, t + 5),
              m(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          let e = this.length;
          return 0 === e
            ? ''
            : 0 == arguments.length
              ? w(this, 0, e)
              : g.apply(this, arguments);
        }),
        (l.prototype.toLocaleString = l.prototype.toString),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw TypeError('Argument must be a Buffer');
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          let e = '',
            r = t.IS;
          return (
            (e = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (e += ' ... '),
            '<Buffer ' + e + '>'
          );
        }),
        i && (l.prototype[i] = l.prototype.inspect),
        (l.prototype.compare = function (e, t, r, n, o) {
          if (
            (_(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            !l.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e,
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            t < 0 || r > e.length || n < 0 || o > this.length)
          )
            throw RangeError('out of range index');
          if (n >= o && t >= r) return 0;
          if (n >= o) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e))
            return 0;
          let i = o - n,
            s = r - t,
            a = Math.min(i, s),
            u = this.slice(n, o),
            f = e.slice(t, r);
          for (let e = 0; e < a; ++e)
            if (u[e] !== f[e]) {
              (i = u[e]), (s = f[e]);
              break;
            }
          return i < s ? -1 : +(s < i);
        }),
        (l.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (l.prototype.indexOf = function (e, t, r) {
          return y(this, e, t, r, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, r) {
          return y(this, e, t, r, !1);
        }),
        (l.prototype.write = function (e, t, r, n) {
          var o, i, s, l, a, u, f, c;
          if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
          else if (void 0 === r && 'string' == typeof t)
            (n = t), (r = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0));
          else
            throw Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported',
            );
          let d = this.length - t;
          if (
            ((void 0 === r || r > d) && (r = d),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw RangeError('Attempt to write outside buffer bounds');
          n || (n = 'utf8');
          let p = !1;
          for (;;)
            switch (n) {
              case 'hex':
                return (function (e, t, r, n) {
                  let o;
                  r = Number(r) || 0;
                  let i = e.length - r;
                  n ? (n = Number(n)) > i && (n = i) : (n = i);
                  let s = t.length;
                  for (n > s / 2 && (n = s / 2), o = 0; o < n; ++o) {
                    var l;
                    let n = parseInt(t.substr(2 * o, 2), 16);
                    if ((l = n) != l) break;
                    e[r + o] = n;
                  }
                  return o;
                })(this, e, t, r);
              case 'utf8':
              case 'utf-8':
                return (o = t), (i = r), I(P(e, this.length - o), this, o, i);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return (
                  (s = t),
                  (l = r),
                  I(
                    (function (e) {
                      let t = [];
                      for (let r = 0; r < e.length; ++r)
                        t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    s,
                    l,
                  )
                );
              case 'base64':
                return (a = t), (u = r), I(j(e), this, a, u);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return (
                  (f = t),
                  (c = r),
                  I(
                    (function (e, t) {
                      let r, n;
                      let o = [];
                      for (let i = 0; i < e.length && !((t -= 2) < 0); ++i)
                        (n = (r = e.charCodeAt(i)) >> 8),
                          o.push(r % 256),
                          o.push(n);
                      return o;
                    })(e, this.length - f),
                    this,
                    f,
                    c,
                  )
                );
              default:
                if (p) throw TypeError('Unknown encoding: ' + n);
                (n = ('' + n).toLowerCase()), (p = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (l.prototype.slice = function (e, t) {
          let r = this.length;
          (e = ~~e),
            (t = void 0 === t ? r : ~~t),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
          let n = this.subarray(e, t);
          return Object.setPrototypeOf(n, l.prototype), n;
        }),
        (l.prototype.readUintLE = l.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let n = this[e],
              o = 1,
              i = 0;
            for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
            return n;
          }),
        (l.prototype.readUintBE = l.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let n = this[e + --t],
              o = 1;
            for (; t > 0 && (o *= 256); ) n += this[e + --t] * o;
            return n;
          }),
        (l.prototype.readUint8 = l.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || v(e, 1, this.length), this[e];
          }),
        (l.prototype.readUint16LE = l.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (l.prototype.readUint16BE = l.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (l.prototype.readUint32LE = l.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                0x1000000 * this[e + 3]
            );
          }),
        (l.prototype.readUint32BE = l.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 4, this.length),
              0x1000000 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (l.prototype.readBigUInt64LE = F(function (e) {
          k((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && L(e, this.length - 8);
          let n =
              t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
            o = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * r;
          return BigInt(n) + (BigInt(o) << BigInt(32));
        })),
        (l.prototype.readBigUInt64BE = F(function (e) {
          k((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && L(e, this.length - 8);
          let n =
              0x1000000 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
            o = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(o);
        })),
        (l.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let n = this[e],
            o = 1,
            i = 0;
          for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
          return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (l.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let n = t,
            o = 1,
            i = this[e + --n];
          for (; n > 0 && (o *= 256); ) i += this[e + --n] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || v(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (l.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || v(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || v(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readBigInt64LE = F(function (e) {
          k((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          return (
            (void 0 === t || void 0 === r) && L(e, this.length - 8),
            (BigInt(
              this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24),
            ) <<
              BigInt(32)) +
              BigInt(
                t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
              )
          );
        })),
        (l.prototype.readBigInt64BE = F(function (e) {
          k((e >>>= 0), 'offset');
          let t = this[e],
            r = this[e + 7];
          return (
            (void 0 === t || void 0 === r) && L(e, this.length - 8),
            (BigInt(
              (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e],
            ) <<
              BigInt(32)) +
              BigInt(
                0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r,
              )
          );
        })),
        (l.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 4, this.length), o.read(this, e, !0, 23, 4)
          );
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 4, this.length), o.read(this, e, !1, 23, 4)
          );
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 8, this.length), o.read(this, e, !0, 52, 8)
          );
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 8, this.length), o.read(this, e, !1, 52, 8)
          );
        }),
        (l.prototype.writeUintLE = l.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              x(this, e, t, r, n, 0);
            }
            let o = 1,
              i = 0;
            for (this[t] = 255 & e; ++i < r && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + r;
          }),
        (l.prototype.writeUintBE = l.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              x(this, e, t, r, n, 0);
            }
            let o = r - 1,
              i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + r;
          }),
        (l.prototype.writeUint8 = l.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 4, 0xffffffff, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 4, 0xffffffff, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeBigUInt64LE = F(function (e, t = 0) {
          return E(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (l.prototype.writeBigUInt64BE = F(function (e, t = 0) {
          return R(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
        (l.prototype.writeIntLE = function (e, t, r, n) {
          if (((e *= 1), (t >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            x(this, e, t, r, n - 1, -n);
          }
          let o = 0,
            i = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < r && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / i) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeIntBE = function (e, t, r, n) {
          if (((e *= 1), (t >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            x(this, e, t, r, n - 1, -n);
          }
          let o = r - 1,
            i = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / i) >> 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeInt8 = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 4, 0x7fffffff, -0x80000000),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 4, 0x7fffffff, -0x80000000),
            e < 0 && (e = 0xffffffff + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (l.prototype.writeBigInt64LE = F(function (e, t = 0) {
          return E(
            this,
            e,
            t,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff'),
          );
        })),
        (l.prototype.writeBigInt64BE = F(function (e, t = 0) {
          return R(
            this,
            e,
            t,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff'),
          );
        })),
        (l.prototype.writeFloatLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }),
        (l.prototype.writeFloatBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }),
        (l.prototype.writeDoubleLE = function (e, t, r) {
          return S(this, e, t, !0, r);
        }),
        (l.prototype.writeDoubleBE = function (e, t, r) {
          return S(this, e, t, !1, r);
        }),
        (l.prototype.copy = function (e, t, r, n) {
          if (!l.isBuffer(e)) throw TypeError('argument should be a Buffer');
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError('targetStart out of bounds');
          if (r < 0 || r >= this.length) throw RangeError('Index out of range');
          if (n < 0) throw RangeError('sourceEnd out of bounds');
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          let o = n - r;
          return (
            this === e && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            o
          );
        }),
        (l.prototype.fill = function (e, t, r, n) {
          let o;
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' != typeof n)
            )
              throw TypeError('encoding must be a string');
            if ('string' == typeof n && !l.isEncoding(n))
              throw TypeError('Unknown encoding: ' + n);
            if (1 === e.length) {
              let t = e.charCodeAt(0);
              (('utf8' === n && t < 128) || 'latin1' === n) && (e = t);
            }
          } else
            'number' == typeof e
              ? (e &= 255)
              : 'boolean' == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError('Out of range index');
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (o = t; o < r; ++o) this[o] = e;
          else {
            let i = l.isBuffer(e) ? e : l.from(e, n),
              s = i.length;
            if (0 === s)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"',
              );
            for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
          }
          return this;
        });
      let T = {};
      function B(e, t, r) {
        T[e] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, 'message', {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, 'code', {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function C(e) {
        let t = '',
          r = e.length,
          n = +('-' === e[0]);
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function N(e, t, r, n, o, i) {
        if (e > r || e < t) {
          let n;
          let o = 'bigint' == typeof t ? 'n' : '';
          throw (
            ((n =
              i > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${o} and < 2${o} ** ${(i + 1) * 8}${o}`
                  : `>= -(2${o} ** ${(i + 1) * 8 - 1}${o}) and < 2 ** ${(i + 1) * 8 - 1}${o}`
                : `>= ${t}${o} and <= ${r}${o}`),
            new T.ERR_OUT_OF_RANGE('value', n, e))
          );
        }
        k(o, 'offset'),
          (void 0 === n[o] || void 0 === n[o + i]) && L(o, n.length - (i + 1));
      }
      function k(e, t) {
        if ('number' != typeof e)
          throw new T.ERR_INVALID_ARG_TYPE(t, 'number', e);
      }
      function L(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (k(e, r), new T.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
          );
        if (t < 0) throw new T.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new T.ERR_OUT_OF_RANGE(
          r || 'offset',
          `>= ${+!!r} and <= ${t}`,
          e,
        );
      }
      B(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : 'Attempt to access memory outside buffer bounds';
        },
        RangeError,
      ),
        B(
          'ERR_INVALID_ARG_TYPE',
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError,
        ),
        B(
          'ERR_OUT_OF_RANGE',
          function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
              o = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 0x100000000
                ? (o = C(String(r)))
                : 'bigint' == typeof r &&
                  ((o = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (o = C(o)),
                  (o += 'n')),
              (n += ` It must be ${t}. Received ${o}`)
            );
          },
          RangeError,
        );
      let U = /[^+/0-9A-Za-z-_]/g;
      function P(e, t) {
        let r;
        t = t || 1 / 0;
        let n = e.length,
          o = null,
          i = [];
        for (let s = 0; s < n; ++s) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319 || s + 1 === n) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = (((o - 55296) << 10) | (r - 56320)) + 65536;
          } else o && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((t -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128,
            );
          } else throw Error('Invalid code point');
        }
        return i;
      }
      function j(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split('=')[0]).trim().replace(U, '')).length < 2)
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e),
        );
      }
      function I(e, t, r, n) {
        let o;
        for (o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o)
          t[o + r] = e[o];
        return o;
      }
      function _(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      let D = (function () {
        let e = '0123456789abcdef',
          t = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
        }
        return t;
      })();
      function F(e) {
        return 'undefined' == typeof BigInt ? z : e;
      }
      function z() {
        throw Error('BigInt not supported');
      }
    },
    9674: (e, t, r) => {
      'use strict';
      r.d(t, { qW: () => d });
      var n,
        o = r(2115),
        i = r(3610),
        s = r(3360),
        l = r(8068),
        a = r(1524),
        u = r(5155),
        f = 'dismissableLayer.update',
        c = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        d = o.forwardRef((e, t) => {
          var r, d;
          let {
              disableOutsidePointerEvents: g = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: y,
              onFocusOutside: b,
              onInteractOutside: w,
              onDismiss: v,
              ...x
            } = e,
            E = o.useContext(c),
            [R, A] = o.useState(null),
            O =
              null !== (d = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== d
                ? d
                : null === (r = globalThis) || void 0 === r
                  ? void 0
                  : r.document,
            [, S] = o.useState({}),
            T = (0, l.s)(t, (e) => A(e)),
            B = Array.from(E.layers),
            [C] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            N = B.indexOf(C),
            k = R ? B.indexOf(R) : -1,
            L = E.layersWithOutsidePointerEventsDisabled.size > 0,
            U = k >= N,
            P = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                n = (0, a.c)(e),
                i = o.useRef(!1),
                s = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            h('dismissableLayer.pointerDownOutside', n, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        'touch' === e.pointerType
                          ? (r.removeEventListener('click', s.current),
                            (s.current = t),
                            r.addEventListener('click', s.current, {
                              once: !0,
                            }))
                          : t();
                      } else r.removeEventListener('click', s.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      r.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      r.removeEventListener('pointerdown', e),
                      r.removeEventListener('click', s.current);
                  };
                }, [r, n]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...E.branches].some((e) => e.contains(t));
              !U ||
                r ||
                (null == y || y(e),
                null == w || w(e),
                e.defaultPrevented || null == v || v());
            }, O),
            j = (function (e) {
              var t;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                n = (0, a.c)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      h(
                        'dismissableLayer.focusOutside',
                        n,
                        { originalEvent: e },
                        { discrete: !1 },
                      );
                  };
                  return (
                    r.addEventListener('focusin', e),
                    () => r.removeEventListener('focusin', e)
                  );
                }, [r, n]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == b || b(e),
                null == w || w(e),
                e.defaultPrevented || null == v || v());
            }, O);
          return (
            !(function (e, t = globalThis?.document) {
              let r = (0, a.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  'Escape' === e.key && r(e);
                };
                return (
                  t.addEventListener('keydown', e, { capture: !0 }),
                  () => t.removeEventListener('keydown', e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              k === E.layers.size - 1 &&
                (null == m || m(e),
                !e.defaultPrevented && v && (e.preventDefault(), v()));
            }, O),
            o.useEffect(() => {
              if (R)
                return (
                  g &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = O.body.style.pointerEvents),
                      (O.body.style.pointerEvents = 'none')),
                    E.layersWithOutsidePointerEventsDisabled.add(R)),
                  E.layers.add(R),
                  p(),
                  () => {
                    g &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (O.body.style.pointerEvents = n);
                  }
                );
            }, [R, O, g, E]),
            o.useEffect(
              () => () => {
                R &&
                  (E.layers.delete(R),
                  E.layersWithOutsidePointerEventsDisabled.delete(R),
                  p());
              },
              [R, E],
            ),
            o.useEffect(() => {
              let e = () => S({});
              return (
                document.addEventListener(f, e),
                () => document.removeEventListener(f, e)
              );
            }, []),
            (0, u.jsx)(s.sG.div, {
              ...x,
              ref: T,
              style: {
                pointerEvents: L ? (U ? 'auto' : 'none') : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.m)(e.onFocusCapture, j.onFocusCapture),
              onBlurCapture: (0, i.m)(e.onBlurCapture, j.onBlurCapture),
              onPointerDownCapture: (0, i.m)(
                e.onPointerDownCapture,
                P.onPointerDownCapture,
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(f);
        document.dispatchEvent(e);
      }
      function h(e, t, r, n) {
        let { discrete: o } = n,
          i = r.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, s.hO)(i, l) : i.dispatchEvent(l);
      }
      (d.displayName = 'DismissableLayer'),
        (o.forwardRef((e, t) => {
          let r = o.useContext(c),
            n = o.useRef(null),
            i = (0, l.s)(t, n);
          return (
            o.useEffect(() => {
              let e = n.current;
              if (e)
                return (
                  r.branches.add(e),
                  () => {
                    r.branches.delete(e);
                  }
                );
            }, [r.branches]),
            (0, u.jsx)(s.sG.div, { ...e, ref: i })
          );
        }).displayName = 'DismissableLayerBranch');
    },
    9795: (e, t, r) => {
      'use strict';
      r.d(t, { QP: () => ec });
      let n = (e) => {
          let t = l(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split('-');
              return (
                '' === r[0] && 1 !== r.length && r.shift(), o(r, t) || s(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && n[e] ? [...o, ...n[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            i = n ? o(e.slice(1), n) : void 0;
          if (i) return i;
          if (0 === t.validators.length) return;
          let s = e.join('-');
          return t.validators.find(({ validator: e }) => e(s))?.classGroupId;
        },
        i = /^\[(.+)\]$/,
        s = (e) => {
          if (i.test(e)) {
            let t = i.exec(e)[1],
              r = t?.substring(0, t.indexOf(':'));
            if (r) return 'arbitrary..' + r;
          }
        },
        l = (e) => {
          let { theme: t, classGroups: r } = e,
            n = { nextPart: new Map(), validators: [] };
          for (let e in r) a(r[e], n, e, t);
          return n;
        },
        a = (e, t, r, n) => {
          e.forEach((e) => {
            if ('string' == typeof e) {
              ('' === e ? t : u(t, e)).classGroupId = r;
              return;
            }
            if ('function' == typeof e) {
              if (f(e)) {
                a(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              a(o, u(t, e), r, n);
            });
          });
        },
        u = (e, t) => {
          let r = e;
          return (
            t.split('-').forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        f = (e) => e.isThemeGetter,
        c = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            o = (o, i) => {
              r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                  ? (o(e, t), t)
                  : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t);
            },
          };
        },
        d = (e) => {
          let { prefix: t, experimentalParseClassName: r } = e,
            n = (e) => {
              let t;
              let r = [],
                n = 0,
                o = 0,
                i = 0;
              for (let s = 0; s < e.length; s++) {
                let l = e[s];
                if (0 === n && 0 === o) {
                  if (':' === l) {
                    r.push(e.slice(i, s)), (i = s + 1);
                    continue;
                  }
                  if ('/' === l) {
                    t = s;
                    continue;
                  }
                }
                '[' === l
                  ? n++
                  : ']' === l
                    ? n--
                    : '(' === l
                      ? o++
                      : ')' === l && o--;
              }
              let s = 0 === r.length ? e : e.substring(i),
                l = p(s);
              return {
                modifiers: r,
                hasImportantModifier: l !== s,
                baseClassName: l,
                maybePostfixModifierPosition: t && t > i ? t - i : void 0,
              };
            };
          if (t) {
            let e = t + ':',
              r = n;
            n = (t) =>
              t.startsWith(e)
                ? r(t.substring(e.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: t,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (r) {
            let e = n;
            n = (t) => r({ className: t, parseClassName: e });
          }
          return n;
        },
        p = (e) =>
          e.endsWith('!')
            ? e.substring(0, e.length - 1)
            : e.startsWith('!')
              ? e.substring(1)
              : e,
        h = (e) => {
          let t = Object.fromEntries(
            e.orderSensitiveModifiers.map((e) => [e, !0]),
          );
          return (e) => {
            if (e.length <= 1) return e;
            let r = [],
              n = [];
            return (
              e.forEach((e) => {
                '[' === e[0] || t[e]
                  ? (r.push(...n.sort(), e), (n = []))
                  : n.push(e);
              }),
              r.push(...n.sort()),
              r
            );
          };
        },
        g = (e) => ({
          cache: c(e.cacheSize),
          parseClassName: d(e),
          sortModifiers: h(e),
          ...n(e),
        }),
        m = /\s+/,
        y = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: o,
              sortModifiers: i,
            } = t,
            s = [],
            l = e.trim().split(m),
            a = '';
          for (let e = l.length - 1; e >= 0; e -= 1) {
            let t = l[e],
              {
                isExternal: u,
                modifiers: f,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: p,
              } = r(t);
            if (u) {
              a = t + (a.length > 0 ? ' ' + a : a);
              continue;
            }
            let h = !!p,
              g = n(h ? d.substring(0, p) : d);
            if (!g) {
              if (!h || !(g = n(d))) {
                a = t + (a.length > 0 ? ' ' + a : a);
                continue;
              }
              h = !1;
            }
            let m = i(f).join(':'),
              y = c ? m + '!' : m,
              b = y + g;
            if (s.includes(b)) continue;
            s.push(b);
            let w = o(g, h);
            for (let e = 0; e < w.length; ++e) {
              let t = w[e];
              s.push(y + t);
            }
            a = t + (a.length > 0 ? ' ' + a : a);
          }
          return a;
        };
      function b() {
        let e,
          t,
          r = 0,
          n = '';
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = w(e)) && (n && (n += ' '), (n += t));
        return n;
      }
      let w = (e) => {
          let t;
          if ('string' == typeof e) return e;
          let r = '';
          for (let n = 0; n < e.length; n++)
            e[n] && (t = w(e[n])) && (r && (r += ' '), (r += t));
          return r;
        },
        v = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        E = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        R = /^\d+\/\d+$/,
        A = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        O =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        T = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        B =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        C = (e) => R.test(e),
        N = (e) => !!e && !Number.isNaN(Number(e)),
        k = (e) => !!e && Number.isInteger(Number(e)),
        L = (e) => e.endsWith('%') && N(e.slice(0, -1)),
        U = (e) => A.test(e),
        P = () => !0,
        j = (e) => O.test(e) && !S.test(e),
        I = () => !1,
        _ = (e) => T.test(e),
        D = (e) => B.test(e),
        F = (e) => !M(e) && !G(e),
        z = (e) => ee(e, es, I),
        M = (e) => x.test(e),
        $ = (e) => ee(e, el, j),
        W = (e) => ee(e, ea, N),
        q = (e) => ee(e, er, I),
        H = (e) => ee(e, eo, D),
        V = (e) => ee(e, I, _),
        G = (e) => E.test(e),
        J = (e) => et(e, el),
        X = (e) => et(e, eu),
        K = (e) => et(e, er),
        Y = (e) => et(e, es),
        Z = (e) => et(e, eo),
        Q = (e) => et(e, ef, !0),
        ee = (e, t, r) => {
          let n = x.exec(e);
          return !!n && (n[1] ? t(n[1]) : r(n[2]));
        },
        et = (e, t, r = !1) => {
          let n = E.exec(e);
          return !!n && (n[1] ? t(n[1]) : r);
        },
        er = (e) => 'position' === e,
        en = new Set(['image', 'url']),
        eo = (e) => en.has(e),
        ei = new Set(['length', 'size', 'percentage']),
        es = (e) => ei.has(e),
        el = (e) => 'length' === e,
        ea = (e) => 'number' === e,
        eu = (e) => 'family-name' === e,
        ef = (e) => 'shadow' === e;
      Symbol.toStringTag;
      let ec = (function (e, ...t) {
        let r, n, o;
        let i = function (l) {
          return (
            (n = (r = g(t.reduce((e, t) => t(e), e()))).cache.get),
            (o = r.cache.set),
            (i = s),
            s(l)
          );
        };
        function s(e) {
          let t = n(e);
          if (t) return t;
          let i = y(e, r);
          return o(e, i), i;
        }
        return function () {
          return i(b.apply(null, arguments));
        };
      })(() => {
        let e = v('color'),
          t = v('font'),
          r = v('text'),
          n = v('font-weight'),
          o = v('tracking'),
          i = v('leading'),
          s = v('breakpoint'),
          l = v('container'),
          a = v('spacing'),
          u = v('radius'),
          f = v('shadow'),
          c = v('inset-shadow'),
          d = v('drop-shadow'),
          p = v('blur'),
          h = v('perspective'),
          g = v('aspect'),
          m = v('ease'),
          y = v('animate'),
          b = () => [
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column',
          ],
          w = () => [
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top',
          ],
          x = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
          E = () => ['auto', 'contain', 'none'],
          R = () => [G, M, a],
          A = () => [C, 'full', 'auto', ...R()],
          O = () => [k, 'none', 'subgrid', G, M],
          S = () => ['auto', { span: ['full', k, G, M] }, G, M],
          T = () => [k, 'auto', G, M],
          B = () => ['auto', 'min', 'max', 'fr', G, M],
          j = () => [
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch',
            'baseline',
          ],
          I = () => ['start', 'end', 'center', 'stretch'],
          _ = () => ['auto', ...R()],
          D = () => [
            C,
            'auto',
            'full',
            'dvw',
            'dvh',
            'lvw',
            'lvh',
            'svw',
            'svh',
            'min',
            'max',
            'fit',
            ...R(),
          ],
          ee = () => [e, G, M],
          et = () => [L, $],
          er = () => ['', 'none', 'full', u, G, M],
          en = () => ['', N, J, $],
          eo = () => ['solid', 'dashed', 'dotted', 'double'],
          ei = () => [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity',
          ],
          es = () => ['', 'none', p, G, M],
          el = () => [
            'center',
            'top',
            'top-right',
            'right',
            'bottom-right',
            'bottom',
            'bottom-left',
            'left',
            'top-left',
            G,
            M,
          ],
          ea = () => ['none', N, G, M],
          eu = () => ['none', N, G, M],
          ef = () => [N, G, M],
          ec = () => [C, 'full', ...R()];
        return {
          cacheSize: 500,
          theme: {
            animate: ['spin', 'ping', 'pulse', 'bounce'],
            aspect: ['video'],
            blur: [U],
            breakpoint: [U],
            color: [P],
            container: [U],
            'drop-shadow': [U],
            ease: ['in', 'out', 'in-out'],
            font: [F],
            'font-weight': [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
            ],
            'inset-shadow': [U],
            leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
            perspective: [
              'dramatic',
              'near',
              'normal',
              'midrange',
              'distant',
              'none',
            ],
            radius: [U],
            shadow: [U],
            spacing: ['px', N],
            text: [U],
            tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', C, M, G, g] }],
            container: ['container'],
            columns: [{ columns: [N, M, G, l] }],
            'break-after': [{ 'break-after': b() }],
            'break-before': [{ 'break-before': b() }],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            sr: ['sr-only', 'not-sr-only'],
            float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
            clear: [
              { clear: ['left', 'right', 'both', 'none', 'start', 'end'] },
            ],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [{ object: [...w(), M, G] }],
            overflow: [{ overflow: x() }],
            'overflow-x': [{ 'overflow-x': x() }],
            'overflow-y': [{ 'overflow-y': x() }],
            overscroll: [{ overscroll: E() }],
            'overscroll-x': [{ 'overscroll-x': E() }],
            'overscroll-y': [{ 'overscroll-y': E() }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: A() }],
            'inset-x': [{ 'inset-x': A() }],
            'inset-y': [{ 'inset-y': A() }],
            start: [{ start: A() }],
            end: [{ end: A() }],
            top: [{ top: A() }],
            right: [{ right: A() }],
            bottom: [{ bottom: A() }],
            left: [{ left: A() }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: [k, 'auto', G, M] }],
            basis: [{ basis: [C, 'full', 'auto', l, ...R()] }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
            flex: [{ flex: [N, C, 'auto', 'initial', 'none', M] }],
            grow: [{ grow: ['', N, G, M] }],
            shrink: [{ shrink: ['', N, G, M] }],
            order: [{ order: [k, 'first', 'last', 'none', G, M] }],
            'grid-cols': [{ 'grid-cols': O() }],
            'col-start-end': [{ col: S() }],
            'col-start': [{ 'col-start': T() }],
            'col-end': [{ 'col-end': T() }],
            'grid-rows': [{ 'grid-rows': O() }],
            'row-start-end': [{ row: S() }],
            'row-start': [{ 'row-start': T() }],
            'row-end': [{ 'row-end': T() }],
            'grid-flow': [
              {
                'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
              },
            ],
            'auto-cols': [{ 'auto-cols': B() }],
            'auto-rows': [{ 'auto-rows': B() }],
            gap: [{ gap: R() }],
            'gap-x': [{ 'gap-x': R() }],
            'gap-y': [{ 'gap-y': R() }],
            'justify-content': [{ justify: [...j(), 'normal'] }],
            'justify-items': [{ 'justify-items': [...I(), 'normal'] }],
            'justify-self': [{ 'justify-self': ['auto', ...I()] }],
            'align-content': [{ content: ['normal', ...j()] }],
            'align-items': [{ items: [...I(), 'baseline'] }],
            'align-self': [{ self: ['auto', ...I(), 'baseline'] }],
            'place-content': [{ 'place-content': j() }],
            'place-items': [{ 'place-items': [...I(), 'baseline'] }],
            'place-self': [{ 'place-self': ['auto', ...I()] }],
            p: [{ p: R() }],
            px: [{ px: R() }],
            py: [{ py: R() }],
            ps: [{ ps: R() }],
            pe: [{ pe: R() }],
            pt: [{ pt: R() }],
            pr: [{ pr: R() }],
            pb: [{ pb: R() }],
            pl: [{ pl: R() }],
            m: [{ m: _() }],
            mx: [{ mx: _() }],
            my: [{ my: _() }],
            ms: [{ ms: _() }],
            me: [{ me: _() }],
            mt: [{ mt: _() }],
            mr: [{ mr: _() }],
            mb: [{ mb: _() }],
            ml: [{ ml: _() }],
            'space-x': [{ 'space-x': R() }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': R() }],
            'space-y-reverse': ['space-y-reverse'],
            size: [{ size: D() }],
            w: [{ w: [l, 'screen', ...D()] }],
            'min-w': [{ 'min-w': [l, 'screen', 'none', ...D()] }],
            'max-w': [
              {
                'max-w': [
                  l,
                  'screen',
                  'none',
                  'prose',
                  { screen: [s] },
                  ...D(),
                ],
              },
            ],
            h: [{ h: ['screen', ...D()] }],
            'min-h': [{ 'min-h': ['screen', 'none', ...D()] }],
            'max-h': [{ 'max-h': ['screen', ...D()] }],
            'font-size': [{ text: ['base', r, J, $] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [{ font: [n, G, W] }],
            'font-stretch': [
              {
                'font-stretch': [
                  'ultra-condensed',
                  'extra-condensed',
                  'condensed',
                  'semi-condensed',
                  'normal',
                  'semi-expanded',
                  'expanded',
                  'extra-expanded',
                  'ultra-expanded',
                  L,
                  M,
                ],
              },
            ],
            'font-family': [{ font: [X, M, t] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
            tracking: [{ tracking: [o, G, M] }],
            'line-clamp': [{ 'line-clamp': [N, 'none', G, W] }],
            leading: [{ leading: [i, ...R()] }],
            'list-image': [{ 'list-image': ['none', G, M] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'list-style-type': [{ list: ['disc', 'decimal', 'none', G, M] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'placeholder-color': [{ placeholder: ee() }],
            'text-color': [{ text: ee() }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [{ decoration: [...eo(), 'wavy'] }],
            'text-decoration-thickness': [
              { decoration: [N, 'from-font', 'auto', G, $] },
            ],
            'text-decoration-color': [{ decoration: ee() }],
            'underline-offset': [{ 'underline-offset': [N, 'auto', G, M] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
            indent: [{ indent: R() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  G,
                  M,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  'normal',
                  'nowrap',
                  'pre',
                  'pre-line',
                  'pre-wrap',
                  'break-spaces',
                ],
              },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', G, M] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [{ bg: [...w(), K, q] }],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', Y, z] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    linear: [
                      { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                      k,
                      G,
                      M,
                    ],
                    radial: ['', G, M],
                    conic: [k, G, M],
                  },
                  Z,
                  H,
                ],
              },
            ],
            'bg-color': [{ bg: ee() }],
            'gradient-from-pos': [{ from: et() }],
            'gradient-via-pos': [{ via: et() }],
            'gradient-to-pos': [{ to: et() }],
            'gradient-from': [{ from: ee() }],
            'gradient-via': [{ via: ee() }],
            'gradient-to': [{ to: ee() }],
            rounded: [{ rounded: er() }],
            'rounded-s': [{ 'rounded-s': er() }],
            'rounded-e': [{ 'rounded-e': er() }],
            'rounded-t': [{ 'rounded-t': er() }],
            'rounded-r': [{ 'rounded-r': er() }],
            'rounded-b': [{ 'rounded-b': er() }],
            'rounded-l': [{ 'rounded-l': er() }],
            'rounded-ss': [{ 'rounded-ss': er() }],
            'rounded-se': [{ 'rounded-se': er() }],
            'rounded-ee': [{ 'rounded-ee': er() }],
            'rounded-es': [{ 'rounded-es': er() }],
            'rounded-tl': [{ 'rounded-tl': er() }],
            'rounded-tr': [{ 'rounded-tr': er() }],
            'rounded-br': [{ 'rounded-br': er() }],
            'rounded-bl': [{ 'rounded-bl': er() }],
            'border-w': [{ border: en() }],
            'border-w-x': [{ 'border-x': en() }],
            'border-w-y': [{ 'border-y': en() }],
            'border-w-s': [{ 'border-s': en() }],
            'border-w-e': [{ 'border-e': en() }],
            'border-w-t': [{ 'border-t': en() }],
            'border-w-r': [{ 'border-r': en() }],
            'border-w-b': [{ 'border-b': en() }],
            'border-w-l': [{ 'border-l': en() }],
            'divide-x': [{ 'divide-x': en() }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': en() }],
            'divide-y-reverse': ['divide-y-reverse'],
            'border-style': [{ border: [...eo(), 'hidden', 'none'] }],
            'divide-style': [{ divide: [...eo(), 'hidden', 'none'] }],
            'border-color': [{ border: ee() }],
            'border-color-x': [{ 'border-x': ee() }],
            'border-color-y': [{ 'border-y': ee() }],
            'border-color-s': [{ 'border-s': ee() }],
            'border-color-e': [{ 'border-e': ee() }],
            'border-color-t': [{ 'border-t': ee() }],
            'border-color-r': [{ 'border-r': ee() }],
            'border-color-b': [{ 'border-b': ee() }],
            'border-color-l': [{ 'border-l': ee() }],
            'divide-color': [{ divide: ee() }],
            'outline-style': [{ outline: [...eo(), 'none', 'hidden'] }],
            'outline-offset': [{ 'outline-offset': [N, G, M] }],
            'outline-w': [{ outline: ['', N, J, $] }],
            'outline-color': [{ outline: [e] }],
            shadow: [{ shadow: ['', 'none', f, Q, V] }],
            'shadow-color': [{ shadow: ee() }],
            'inset-shadow': [{ 'inset-shadow': ['none', G, M, c] }],
            'inset-shadow-color': [{ 'inset-shadow': ee() }],
            'ring-w': [{ ring: en() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: ee() }],
            'ring-offset-w': [{ 'ring-offset': [N, $] }],
            'ring-offset-color': [{ 'ring-offset': ee() }],
            'inset-ring-w': [{ 'inset-ring': en() }],
            'inset-ring-color': [{ 'inset-ring': ee() }],
            opacity: [{ opacity: [N, G, M] }],
            'mix-blend': [
              { 'mix-blend': [...ei(), 'plus-darker', 'plus-lighter'] },
            ],
            'bg-blend': [{ 'bg-blend': ei() }],
            filter: [{ filter: ['', 'none', G, M] }],
            blur: [{ blur: es() }],
            brightness: [{ brightness: [N, G, M] }],
            contrast: [{ contrast: [N, G, M] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', d, G, M] }],
            grayscale: [{ grayscale: ['', N, G, M] }],
            'hue-rotate': [{ 'hue-rotate': [N, G, M] }],
            invert: [{ invert: ['', N, G, M] }],
            saturate: [{ saturate: [N, G, M] }],
            sepia: [{ sepia: ['', N, G, M] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none', G, M] }],
            'backdrop-blur': [{ 'backdrop-blur': es() }],
            'backdrop-brightness': [{ 'backdrop-brightness': [N, G, M] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [N, G, M] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': ['', N, G, M] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [N, G, M] }],
            'backdrop-invert': [{ 'backdrop-invert': ['', N, G, M] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [N, G, M] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [N, G, M] }],
            'backdrop-sepia': [{ 'backdrop-sepia': ['', N, G, M] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': R() }],
            'border-spacing-x': [{ 'border-spacing-x': R() }],
            'border-spacing-y': [{ 'border-spacing-y': R() }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              {
                transition: [
                  '',
                  'all',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  'none',
                  G,
                  M,
                ],
              },
            ],
            'transition-behavior': [{ transition: ['normal', 'discrete'] }],
            duration: [{ duration: [N, 'initial', G, M] }],
            ease: [{ ease: ['linear', 'initial', m, G, M] }],
            delay: [{ delay: [N, G, M] }],
            animate: [{ animate: ['none', y, G, M] }],
            backface: [{ backface: ['hidden', 'visible'] }],
            perspective: [{ perspective: [h, G, M] }],
            'perspective-origin': [{ 'perspective-origin': el() }],
            rotate: [{ rotate: ea() }],
            'rotate-x': [{ 'rotate-x': ea() }],
            'rotate-y': [{ 'rotate-y': ea() }],
            'rotate-z': [{ 'rotate-z': ea() }],
            scale: [{ scale: eu() }],
            'scale-x': [{ 'scale-x': eu() }],
            'scale-y': [{ 'scale-y': eu() }],
            'scale-z': [{ 'scale-z': eu() }],
            'scale-3d': ['scale-3d'],
            skew: [{ skew: ef() }],
            'skew-x': [{ 'skew-x': ef() }],
            'skew-y': [{ 'skew-y': ef() }],
            transform: [{ transform: [G, M, '', 'none', 'gpu', 'cpu'] }],
            'transform-origin': [{ origin: el() }],
            'transform-style': [{ transform: ['3d', 'flat'] }],
            translate: [{ translate: ec() }],
            'translate-x': [{ 'translate-x': ec() }],
            'translate-y': [{ 'translate-y': ec() }],
            'translate-z': [{ 'translate-z': ec() }],
            'translate-none': ['translate-none'],
            accent: [{ accent: ee() }],
            appearance: [{ appearance: ['none', 'auto'] }],
            'caret-color': [{ caret: ee() }],
            'color-scheme': [
              {
                scheme: [
                  'normal',
                  'dark',
                  'light',
                  'light-dark',
                  'only-dark',
                  'only-light',
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  G,
                  M,
                ],
              },
            ],
            'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
            'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
            resize: [{ resize: ['none', '', 'y', 'x'] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': R() }],
            'scroll-mx': [{ 'scroll-mx': R() }],
            'scroll-my': [{ 'scroll-my': R() }],
            'scroll-ms': [{ 'scroll-ms': R() }],
            'scroll-me': [{ 'scroll-me': R() }],
            'scroll-mt': [{ 'scroll-mt': R() }],
            'scroll-mr': [{ 'scroll-mr': R() }],
            'scroll-mb': [{ 'scroll-mb': R() }],
            'scroll-ml': [{ 'scroll-ml': R() }],
            'scroll-p': [{ 'scroll-p': R() }],
            'scroll-px': [{ 'scroll-px': R() }],
            'scroll-py': [{ 'scroll-py': R() }],
            'scroll-ps': [{ 'scroll-ps': R() }],
            'scroll-pe': [{ 'scroll-pe': R() }],
            'scroll-pt': [{ 'scroll-pt': R() }],
            'scroll-pr': [{ 'scroll-pr': R() }],
            'scroll-pb': [{ 'scroll-pb': R() }],
            'scroll-pl': [{ 'scroll-pl': R() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [{ touch: ['auto', 'none', 'manipulation'] }],
            'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
            'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
            'touch-pz': ['touch-pinch-zoom'],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              {
                'will-change': [
                  'auto',
                  'scroll',
                  'contents',
                  'transform',
                  G,
                  M,
                ],
              },
            ],
            fill: [{ fill: ['none', ...ee()] }],
            'stroke-w': [{ stroke: [N, J, $, W] }],
            stroke: [{ stroke: ['none', ...ee()] }],
            'forced-color-adjust': [
              { 'forced-color-adjust': ['auto', 'none'] },
            ],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: [
              'inset-x',
              'inset-y',
              'start',
              'end',
              'top',
              'right',
              'bottom',
              'left',
            ],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            size: ['w', 'h'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            'line-clamp': ['display', 'overflow'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-s',
              'border-color-e',
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            translate: ['translate-x', 'translate-y', 'translate-none'],
            'translate-none': [
              'translate',
              'translate-x',
              'translate-y',
              'translate-z',
            ],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
            touch: ['touch-x', 'touch-y', 'touch-pz'],
            'touch-x': ['touch'],
            'touch-y': ['touch'],
            'touch-pz': ['touch'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
          orderSensitiveModifiers: [
            'before',
            'after',
            'placeholder',
            'file',
            'marker',
            'selection',
            'first-line',
            'first-letter',
            'backdrop',
            '*',
            '**',
          ],
        };
      });
    },
    9895: (e, t, r) => {
      'use strict';
      r.d(t, {
        Mz: () => eK,
        i3: () => eZ,
        UC: () => eY,
        bL: () => eX,
        Bk: () => eU,
      });
      var n = r(2115);
      let o = ['top', 'right', 'bottom', 'left'],
        i = Math.min,
        s = Math.max,
        l = Math.round,
        a = Math.floor,
        u = (e) => ({ x: e, y: e }),
        f = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        c = { start: 'end', end: 'start' };
      function d(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split('-')[0];
      }
      function h(e) {
        return e.split('-')[1];
      }
      function g(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function m(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function y(e) {
        return ['top', 'bottom'].includes(p(e)) ? 'y' : 'x';
      }
      function b(e) {
        return e.replace(/start|end/g, (e) => c[e]);
      }
      function w(e) {
        return e.replace(/left|right|bottom|top/g, (e) => f[e]);
      }
      function v(e) {
        return 'number' != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: r, width: n, height: o } = e;
        return {
          width: n,
          height: o,
          top: r,
          left: t,
          right: t + n,
          bottom: r + o,
          x: t,
          y: r,
        };
      }
      function E(e, t, r) {
        let n,
          { reference: o, floating: i } = e,
          s = y(t),
          l = g(y(t)),
          a = m(l),
          u = p(t),
          f = 'y' === s,
          c = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          b = o[a] / 2 - i[a] / 2;
        switch (u) {
          case 'top':
            n = { x: c, y: o.y - i.height };
            break;
          case 'bottom':
            n = { x: c, y: o.y + o.height };
            break;
          case 'right':
            n = { x: o.x + o.width, y: d };
            break;
          case 'left':
            n = { x: o.x - i.width, y: d };
            break;
          default:
            n = { x: o.x, y: o.y };
        }
        switch (h(t)) {
          case 'start':
            n[l] -= b * (r && f ? -1 : 1);
            break;
          case 'end':
            n[l] += b * (r && f ? -1 : 1);
        }
        return n;
      }
      let R = async (e, t, r) => {
        let {
            placement: n = 'bottom',
            strategy: o = 'absolute',
            middleware: i = [],
            platform: s,
          } = r,
          l = i.filter(Boolean),
          a = await (null == s.isRTL ? void 0 : s.isRTL(t)),
          u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: f, y: c } = E(u, n, a),
          d = n,
          p = {},
          h = 0;
        for (let r = 0; r < l.length; r++) {
          let { name: i, fn: g } = l[r],
            {
              x: m,
              y: y,
              data: b,
              reset: w,
            } = await g({
              x: f,
              y: c,
              initialPlacement: n,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: u,
              platform: s,
              elements: { reference: e, floating: t },
            });
          (f = null != m ? m : f),
            (c = null != y ? y : c),
            (p = { ...p, [i]: { ...p[i], ...b } }),
            w &&
              h <= 50 &&
              (h++,
              'object' == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (u =
                    !0 === w.rects
                      ? await s.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: f, y: c } = E(u, d, a))),
              (r = -1));
        }
        return { x: f, y: c, placement: d, strategy: o, middlewareData: p };
      };
      async function A(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
          {
            boundary: u = 'clippingAncestors',
            rootBoundary: f = 'viewport',
            elementContext: c = 'floating',
            altBoundary: p = !1,
            padding: h = 0,
          } = d(t, e),
          g = v(h),
          m = l[p ? ('floating' === c ? 'reference' : 'floating') : c],
          y = x(
            await i.getClippingRect({
              element:
                null ==
                  (r = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                r
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(l.floating))),
              boundary: u,
              rootBoundary: f,
              strategy: a,
            }),
          ),
          b =
            'floating' === c
              ? {
                  x: n,
                  y: o,
                  width: s.floating.width,
                  height: s.floating.height,
                }
              : s.reference,
          w = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(l.floating)),
          E = ((await (null == i.isElement ? void 0 : i.isElement(w))) &&
            (await (null == i.getScale ? void 0 : i.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          R = x(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: b,
                  offsetParent: w,
                  strategy: a,
                })
              : b,
          );
        return {
          top: (y.top - R.top + g.top) / E.y,
          bottom: (R.bottom - y.bottom + g.bottom) / E.y,
          left: (y.left - R.left + g.left) / E.x,
          right: (R.right - y.right + g.right) / E.x,
        };
      }
      function O(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function S(e) {
        return o.some((t) => e[t] >= 0);
      }
      async function T(e, t) {
        let { placement: r, platform: n, elements: o } = e,
          i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)),
          s = p(r),
          l = h(r),
          a = 'y' === y(r),
          u = ['left', 'top'].includes(s) ? -1 : 1,
          f = i && a ? -1 : 1,
          c = d(t, e),
          {
            mainAxis: g,
            crossAxis: m,
            alignmentAxis: b,
          } = 'number' == typeof c
            ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: c.mainAxis || 0,
                crossAxis: c.crossAxis || 0,
                alignmentAxis: c.alignmentAxis,
              };
        return (
          l && 'number' == typeof b && (m = 'end' === l ? -1 * b : b),
          a ? { x: m * f, y: g * u } : { x: g * u, y: m * f }
        );
      }
      function B() {
        return 'undefined' != typeof window;
      }
      function C(e) {
        return L(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function N(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function k(e) {
        var t;
        return null ==
          (t = (L(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function L(e) {
        return !!B() && (e instanceof Node || e instanceof N(e).Node);
      }
      function U(e) {
        return !!B() && (e instanceof Element || e instanceof N(e).Element);
      }
      function P(e) {
        return (
          !!B() && (e instanceof HTMLElement || e instanceof N(e).HTMLElement)
        );
      }
      function j(e) {
        return (
          !!B() &&
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof N(e).ShadowRoot)
        );
      }
      function I(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: o } = M(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !['inline', 'contents'].includes(o)
        );
      }
      function _(e) {
        return [':popover-open', ':modal'].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function D(e) {
        let t = F(),
          r = U(e) ? M(e) : e;
        return (
          ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(
            (e) => !!r[e] && 'none' !== r[e],
          ) ||
          (!!r.containerType && 'normal' !== r.containerType) ||
          (!t && !!r.backdropFilter && 'none' !== r.backdropFilter) ||
          (!t && !!r.filter && 'none' !== r.filter) ||
          [
            'transform',
            'translate',
            'scale',
            'rotate',
            'perspective',
            'filter',
          ].some((e) => (r.willChange || '').includes(e)) ||
          ['paint', 'layout', 'strict', 'content'].some((e) =>
            (r.contain || '').includes(e),
          )
        );
      }
      function F() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function z(e) {
        return ['html', 'body', '#document'].includes(C(e));
      }
      function M(e) {
        return N(e).getComputedStyle(e);
      }
      function $(e) {
        return U(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function W(e) {
        if ('html' === C(e)) return e;
        let t = e.assignedSlot || e.parentNode || (j(e) && e.host) || k(e);
        return j(t) ? t.host : t;
      }
      function q(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        let o = (function e(t) {
            let r = W(t);
            return z(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : P(r) && I(r)
                ? r
                : e(r);
          })(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = N(o);
        if (i) {
          let e = H(s);
          return t.concat(
            s,
            s.visualViewport || [],
            I(o) ? o : [],
            e && r ? q(e) : [],
          );
        }
        return t.concat(o, q(o, [], r));
      }
      function H(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function V(e) {
        let t = M(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          o = P(e),
          i = o ? e.offsetWidth : r,
          s = o ? e.offsetHeight : n,
          a = l(r) !== i || l(n) !== s;
        return a && ((r = i), (n = s)), { width: r, height: n, $: a };
      }
      function G(e) {
        return U(e) ? e : e.contextElement;
      }
      function J(e) {
        let t = G(e);
        if (!P(t)) return u(1);
        let r = t.getBoundingClientRect(),
          { width: n, height: o, $: i } = V(t),
          s = (i ? l(r.width) : r.width) / n,
          a = (i ? l(r.height) : r.height) / o;
        return (
          (s && Number.isFinite(s)) || (s = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: s, y: a }
        );
      }
      let X = u(0);
      function K(e) {
        let t = N(e);
        return F() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : X;
      }
      function Y(e, t, r, n) {
        var o;
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let i = e.getBoundingClientRect(),
          s = G(e),
          l = u(1);
        t && (n ? U(n) && (l = J(n)) : (l = J(e)));
        let a = (void 0 === (o = r) && (o = !1), n && (!o || n === N(s)) && o)
            ? K(s)
            : u(0),
          f = (i.left + a.x) / l.x,
          c = (i.top + a.y) / l.y,
          d = i.width / l.x,
          p = i.height / l.y;
        if (s) {
          let e = N(s),
            t = n && U(n) ? N(n) : n,
            r = e,
            o = H(r);
          for (; o && n && t !== r; ) {
            let e = J(o),
              t = o.getBoundingClientRect(),
              n = M(o),
              i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            (f *= e.x),
              (c *= e.y),
              (d *= e.x),
              (p *= e.y),
              (f += i),
              (c += s),
              (o = H((r = N(o))));
          }
        }
        return x({ width: d, height: p, x: f, y: c });
      }
      function Z(e, t) {
        let r = $(e).scrollLeft;
        return t ? t.left + r : Y(k(e)).left + r;
      }
      function Q(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - (r ? 0 : Z(e, n)),
          y: n.top + t.scrollTop,
        };
      }
      function ee(e, t, r) {
        let n;
        if ('viewport' === t)
          n = (function (e, t) {
            let r = N(e),
              n = k(e),
              o = r.visualViewport,
              i = n.clientWidth,
              s = n.clientHeight,
              l = 0,
              a = 0;
            if (o) {
              (i = o.width), (s = o.height);
              let e = F();
              (!e || (e && 'fixed' === t)) &&
                ((l = o.offsetLeft), (a = o.offsetTop));
            }
            return { width: i, height: s, x: l, y: a };
          })(e, r);
        else if ('document' === t)
          n = (function (e) {
            let t = k(e),
              r = $(e),
              n = e.ownerDocument.body,
              o = s(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
              i = s(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight,
              ),
              l = -r.scrollLeft + Z(e),
              a = -r.scrollTop;
            return (
              'rtl' === M(n).direction &&
                (l += s(t.clientWidth, n.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })(k(e));
        else if (U(t))
          n = (function (e, t) {
            let r = Y(e, !0, 'fixed' === t),
              n = r.top + e.clientTop,
              o = r.left + e.clientLeft,
              i = P(e) ? J(e) : u(1),
              s = e.clientWidth * i.x,
              l = e.clientHeight * i.y;
            return { width: s, height: l, x: o * i.x, y: n * i.y };
          })(t, r);
        else {
          let r = K(e);
          n = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
        }
        return x(n);
      }
      function et(e) {
        return 'static' === M(e).position;
      }
      function er(e, t) {
        if (!P(e) || 'fixed' === M(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return k(e) === r && (r = r.ownerDocument.body), r;
      }
      function en(e, t) {
        let r = N(e);
        if (_(e)) return r;
        if (!P(e)) {
          let t = W(e);
          for (; t && !z(t); ) {
            if (U(t) && !et(t)) return t;
            t = W(t);
          }
          return r;
        }
        let n = er(e, t);
        for (; n && ['table', 'td', 'th'].includes(C(n)) && et(n); )
          n = er(n, t);
        return n && z(n) && et(n) && !D(n)
          ? r
          : n ||
              (function (e) {
                let t = W(e);
                for (; P(t) && !z(t); ) {
                  if (D(t)) return t;
                  if (_(t)) break;
                  t = W(t);
                }
                return null;
              })(e) ||
              r;
      }
      let eo = async function (e) {
          let t = this.getOffsetParent || en,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: (function (e, t, r) {
              let n = P(t),
                o = k(t),
                i = 'fixed' === r,
                s = Y(e, !0, i, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                a = u(0);
              if (n || (!n && !i)) {
                if ((('body' !== C(t) || I(o)) && (l = $(t)), n)) {
                  let e = Y(t, !0, i, t);
                  (a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop);
                } else o && (a.x = Z(o));
              }
              let f = !o || n || i ? u(0) : Q(o, l);
              return {
                x: s.left + l.scrollLeft - a.x - f.x,
                y: s.top + l.scrollTop - a.y - f.y,
                width: s.width,
                height: s.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: n.width, height: n.height },
          };
        },
        ei = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: r, offsetParent: n, strategy: o } = e,
              i = 'fixed' === o,
              s = k(n),
              l = !!t && _(t.floating);
            if (n === s || (l && i)) return r;
            let a = { scrollLeft: 0, scrollTop: 0 },
              f = u(1),
              c = u(0),
              d = P(n);
            if (
              (d || (!d && !i)) &&
              (('body' !== C(n) || I(s)) && (a = $(n)), P(n))
            ) {
              let e = Y(n);
              (f = J(n)), (c.x = e.x + n.clientLeft), (c.y = e.y + n.clientTop);
            }
            let p = !s || d || i ? u(0) : Q(s, a, !0);
            return {
              width: r.width * f.x,
              height: r.height * f.y,
              x: r.x * f.x - a.scrollLeft * f.x + c.x + p.x,
              y: r.y * f.y - a.scrollTop * f.y + c.y + p.y,
            };
          },
          getDocumentElement: k,
          getClippingRect: function (e) {
            let { element: t, boundary: r, rootBoundary: n, strategy: o } = e,
              l = [
                ...('clippingAncestors' === r
                  ? _(t)
                    ? []
                    : (function (e, t) {
                        let r = t.get(e);
                        if (r) return r;
                        let n = q(e, [], !1).filter(
                            (e) => U(e) && 'body' !== C(e),
                          ),
                          o = null,
                          i = 'fixed' === M(e).position,
                          s = i ? W(e) : e;
                        for (; U(s) && !z(s); ) {
                          let t = M(s),
                            r = D(s);
                          r || 'fixed' !== t.position || (o = null),
                            (
                              i
                                ? !r && !o
                                : (!r &&
                                    'static' === t.position &&
                                    !!o &&
                                    ['absolute', 'fixed'].includes(
                                      o.position,
                                    )) ||
                                  (I(s) &&
                                    !r &&
                                    (function e(t, r) {
                                      let n = W(t);
                                      return (
                                        !(n === r || !U(n) || z(n)) &&
                                        ('fixed' === M(n).position || e(n, r))
                                      );
                                    })(e, s))
                            )
                              ? (n = n.filter((e) => e !== s))
                              : (o = t),
                            (s = W(s));
                        }
                        return t.set(e, n), n;
                      })(t, this._c)
                  : [].concat(r)),
                n,
              ],
              a = l[0],
              u = l.reduce(
                (e, r) => {
                  let n = ee(t, r, o);
                  return (
                    (e.top = s(n.top, e.top)),
                    (e.right = i(n.right, e.right)),
                    (e.bottom = i(n.bottom, e.bottom)),
                    (e.left = s(n.left, e.left)),
                    e
                  );
                },
                ee(t, a, o),
              );
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: en,
          getElementRects: eo,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: r } = V(e);
            return { width: t, height: r };
          },
          getScale: J,
          isElement: U,
          isRTL: function (e) {
            return 'rtl' === M(e).direction;
          },
        };
      function es(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let el = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            let {
                x: r,
                y: n,
                placement: o,
                rects: l,
                platform: a,
                elements: u,
                middlewareData: f,
              } = t,
              { element: c, padding: p = 0 } = d(e, t) || {};
            if (null == c) return {};
            let b = v(p),
              w = { x: r, y: n },
              x = g(y(o)),
              E = m(x),
              R = await a.getDimensions(c),
              A = 'y' === x,
              O = A ? 'clientHeight' : 'clientWidth',
              S = l.reference[E] + l.reference[x] - w[x] - l.floating[E],
              T = w[x] - l.reference[x],
              B = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c)),
              C = B ? B[O] : 0;
            (C && (await (null == a.isElement ? void 0 : a.isElement(B)))) ||
              (C = u.floating[O] || l.floating[E]);
            let N = C / 2 - R[E] / 2 - 1,
              k = i(b[A ? 'top' : 'left'], N),
              L = i(b[A ? 'bottom' : 'right'], N),
              U = C - R[E] - L,
              P = C / 2 - R[E] / 2 + (S / 2 - T / 2),
              j = s(k, i(P, U)),
              I =
                !f.arrow &&
                null != h(o) &&
                P !== j &&
                l.reference[E] / 2 - (P < k ? k : L) - R[E] / 2 < 0,
              _ = I ? (P < k ? P - k : P - U) : 0;
            return {
              [x]: w[x] + _,
              data: {
                [x]: j,
                centerOffset: P - j - _,
                ...(I && { alignmentOffset: _ }),
              },
              reset: I,
            };
          },
        }),
        ea = (e, t, r) => {
          let n = new Map(),
            o = { platform: ei, ...r },
            i = { ...o.platform, _c: n };
          return R(e, t, { ...o, platform: i });
        };
      var eu = r(7650),
        ef = 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect;
      function ec(e, t) {
        let r, n, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) !== t.length) return !1;
            for (n = r; 0 != n--; ) if (!ec(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = o[n];
            if (('_owner' !== r || !e.$$typeof) && !ec(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ed(e) {
        return 'undefined' == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ep(e, t) {
        let r = ed(e);
        return Math.round(t * r) / r;
      }
      function eh(e) {
        let t = n.useRef(e);
        return (
          ef(() => {
            t.current = e;
          }),
          t
        );
      }
      let eg = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            let { element: r, padding: n } = 'function' == typeof e ? e(t) : e;
            return r && {}.hasOwnProperty.call(r, 'current')
              ? null != r.current
                ? el({ element: r.current, padding: n }).fn(t)
                : {}
              : r
                ? el({ element: r, padding: n }).fn(t)
                : {};
          },
        }),
        em = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: 'offset',
                options: e,
                async fn(t) {
                  var r, n;
                  let { x: o, y: i, placement: s, middlewareData: l } = t,
                    a = await T(t, e);
                  return s ===
                    (null == (r = l.offset) ? void 0 : r.placement) &&
                    null != (n = l.arrow) &&
                    n.alignmentOffset
                    ? {}
                    : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ey = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'shift',
                options: e,
                async fn(t) {
                  let { x: r, y: n, placement: o } = t,
                    {
                      mainAxis: l = !0,
                      crossAxis: a = !1,
                      limiter: u = {
                        fn: (e) => {
                          let { x: t, y: r } = e;
                          return { x: t, y: r };
                        },
                      },
                      ...f
                    } = d(e, t),
                    c = { x: r, y: n },
                    h = await A(t, f),
                    m = y(p(o)),
                    b = g(m),
                    w = c[b],
                    v = c[m];
                  if (l) {
                    let e = 'y' === b ? 'top' : 'left',
                      t = 'y' === b ? 'bottom' : 'right',
                      r = w + h[e],
                      n = w - h[t];
                    w = s(r, i(w, n));
                  }
                  if (a) {
                    let e = 'y' === m ? 'top' : 'left',
                      t = 'y' === m ? 'bottom' : 'right',
                      r = v + h[e],
                      n = v - h[t];
                    v = s(r, i(v, n));
                  }
                  let x = u.fn({ ...t, [b]: w, [m]: v });
                  return {
                    ...x,
                    data: {
                      x: x.x - r,
                      y: x.y - n,
                      enabled: { [b]: l, [m]: a },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eb = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: r,
                      y: n,
                      placement: o,
                      rects: i,
                      middlewareData: s,
                    } = t,
                    {
                      offset: l = 0,
                      mainAxis: a = !0,
                      crossAxis: u = !0,
                    } = d(e, t),
                    f = { x: r, y: n },
                    c = y(o),
                    h = g(c),
                    m = f[h],
                    b = f[c],
                    w = d(l, t),
                    v =
                      'number' == typeof w
                        ? { mainAxis: w, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...w };
                  if (a) {
                    let e = 'y' === h ? 'height' : 'width',
                      t = i.reference[h] - i.floating[e] + v.mainAxis,
                      r = i.reference[h] + i.reference[e] - v.mainAxis;
                    m < t ? (m = t) : m > r && (m = r);
                  }
                  if (u) {
                    var x, E;
                    let e = 'y' === h ? 'width' : 'height',
                      t = ['top', 'left'].includes(p(o)),
                      r =
                        i.reference[c] -
                        i.floating[e] +
                        ((t && (null == (x = s.offset) ? void 0 : x[c])) || 0) +
                        (t ? 0 : v.crossAxis),
                      n =
                        i.reference[c] +
                        i.reference[e] +
                        (t
                          ? 0
                          : (null == (E = s.offset) ? void 0 : E[c]) || 0) -
                        (t ? v.crossAxis : 0);
                    b < r ? (b = r) : b > n && (b = n);
                  }
                  return { [h]: m, [c]: b };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ew = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'flip',
                options: e,
                async fn(t) {
                  var r, n, o, i, s;
                  let {
                      placement: l,
                      middlewareData: a,
                      rects: u,
                      initialPlacement: f,
                      platform: c,
                      elements: v,
                    } = t,
                    {
                      mainAxis: x = !0,
                      crossAxis: E = !0,
                      fallbackPlacements: R,
                      fallbackStrategy: O = 'bestFit',
                      fallbackAxisSideDirection: S = 'none',
                      flipAlignment: T = !0,
                      ...B
                    } = d(e, t);
                  if (null != (r = a.arrow) && r.alignmentOffset) return {};
                  let C = p(l),
                    N = y(f),
                    k = p(f) === f,
                    L = await (null == c.isRTL ? void 0 : c.isRTL(v.floating)),
                    U =
                      R ||
                      (k || !T
                        ? [w(f)]
                        : (function (e) {
                            let t = w(e);
                            return [b(e), t, b(t)];
                          })(f)),
                    P = 'none' !== S;
                  !R &&
                    P &&
                    U.push(
                      ...(function (e, t, r, n) {
                        let o = h(e),
                          i = (function (e, t, r) {
                            let n = ['left', 'right'],
                              o = ['right', 'left'];
                            switch (e) {
                              case 'top':
                              case 'bottom':
                                if (r) return t ? o : n;
                                return t ? n : o;
                              case 'left':
                              case 'right':
                                return t
                                  ? ['top', 'bottom']
                                  : ['bottom', 'top'];
                              default:
                                return [];
                            }
                          })(p(e), 'start' === r, n);
                        return (
                          o &&
                            ((i = i.map((e) => e + '-' + o)),
                            t && (i = i.concat(i.map(b)))),
                          i
                        );
                      })(f, T, S, L),
                    );
                  let j = [f, ...U],
                    I = await A(t, B),
                    _ = [],
                    D = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                  if ((x && _.push(I[C]), E)) {
                    let e = (function (e, t, r) {
                      void 0 === r && (r = !1);
                      let n = h(e),
                        o = g(y(e)),
                        i = m(o),
                        s =
                          'x' === o
                            ? n === (r ? 'end' : 'start')
                              ? 'right'
                              : 'left'
                            : 'start' === n
                              ? 'bottom'
                              : 'top';
                      return (
                        t.reference[i] > t.floating[i] && (s = w(s)), [s, w(s)]
                      );
                    })(l, u, L);
                    _.push(I[e[0]], I[e[1]]);
                  }
                  if (
                    ((D = [...D, { placement: l, overflows: _ }]),
                    !_.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = a.flip) ? void 0 : o.index) || 0) + 1,
                      t = j[e];
                    if (t)
                      return {
                        data: { index: e, overflows: D },
                        reset: { placement: t },
                      };
                    let r =
                      null ==
                      (i = D.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1],
                      )[0])
                        ? void 0
                        : i.placement;
                    if (!r)
                      switch (O) {
                        case 'bestFit': {
                          let e =
                            null ==
                            (s = D.filter((e) => {
                              if (P) {
                                let t = y(e.placement);
                                return t === N || 'y' === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : s[0];
                          e && (r = e);
                          break;
                        }
                        case 'initialPlacement':
                          r = f;
                      }
                    if (l !== r) return { reset: { placement: r } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ev = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'size',
                options: e,
                async fn(t) {
                  var r, n;
                  let o, l;
                  let { placement: a, rects: u, platform: f, elements: c } = t,
                    { apply: g = () => {}, ...m } = d(e, t),
                    b = await A(t, m),
                    w = p(a),
                    v = h(a),
                    x = 'y' === y(a),
                    { width: E, height: R } = u.floating;
                  'top' === w || 'bottom' === w
                    ? ((o = w),
                      (l =
                        v ===
                        ((await (null == f.isRTL
                          ? void 0
                          : f.isRTL(c.floating)))
                          ? 'start'
                          : 'end')
                          ? 'left'
                          : 'right'))
                    : ((l = w), (o = 'end' === v ? 'top' : 'bottom'));
                  let O = R - b.top - b.bottom,
                    S = E - b.left - b.right,
                    T = i(R - b[o], O),
                    B = i(E - b[l], S),
                    C = !t.middlewareData.shift,
                    N = T,
                    k = B;
                  if (
                    (null != (r = t.middlewareData.shift) &&
                      r.enabled.x &&
                      (k = S),
                    null != (n = t.middlewareData.shift) &&
                      n.enabled.y &&
                      (N = O),
                    C && !v)
                  ) {
                    let e = s(b.left, 0),
                      t = s(b.right, 0),
                      r = s(b.top, 0),
                      n = s(b.bottom, 0);
                    x
                      ? (k =
                          E -
                          2 * (0 !== e || 0 !== t ? e + t : s(b.left, b.right)))
                      : (N =
                          R -
                          2 *
                            (0 !== r || 0 !== n ? r + n : s(b.top, b.bottom)));
                  }
                  await g({ ...t, availableWidth: k, availableHeight: N });
                  let L = await f.getDimensions(c.floating);
                  return E !== L.width || R !== L.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ex = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'hide',
                options: e,
                async fn(t) {
                  let { rects: r } = t,
                    { strategy: n = 'referenceHidden', ...o } = d(e, t);
                  switch (n) {
                    case 'referenceHidden': {
                      let e = O(
                        await A(t, { ...o, elementContext: 'reference' }),
                        r.reference,
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: S(e),
                        },
                      };
                    }
                    case 'escaped': {
                      let e = O(
                        await A(t, { ...o, altBoundary: !0 }),
                        r.floating,
                      );
                      return { data: { escapedOffsets: e, escaped: S(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eE = (e, t) => ({ ...eg(e), options: [e, t] });
      var eR = r(3360),
        eA = r(5155),
        eO = n.forwardRef((e, t) => {
          let { children: r, width: n = 10, height: o = 5, ...i } = e;
          return (0, eA.jsx)(eR.sG.svg, {
            ...i,
            ref: t,
            width: n,
            height: o,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
            children: e.asChild
              ? r
              : (0, eA.jsx)('polygon', { points: '0,0 30,0 15,10' }),
          });
        });
      eO.displayName = 'Arrow';
      var eS = r(8068),
        eT = r(8166),
        eB = r(1524),
        eC = r(6611),
        eN = r(7510),
        ek = 'Popper',
        [eL, eU] = (0, eT.A)(ek),
        [eP, ej] = eL(ek),
        eI = (e) => {
          let { __scopePopper: t, children: r } = e,
            [o, i] = n.useState(null);
          return (0, eA.jsx)(eP, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: r,
          });
        };
      eI.displayName = ek;
      var e_ = 'PopperAnchor',
        eD = n.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: o, ...i } = e,
            s = ej(e_, r),
            l = n.useRef(null),
            a = (0, eS.s)(t, l);
          return (
            n.useEffect(() => {
              s.onAnchorChange((null == o ? void 0 : o.current) || l.current);
            }),
            o ? null : (0, eA.jsx)(eR.sG.div, { ...i, ref: a })
          );
        });
      eD.displayName = e_;
      var eF = 'PopperContent',
        [ez, eM] = eL(eF),
        e$ = n.forwardRef((e, t) => {
          var r, o, l, u, f, c, d, p;
          let {
              __scopePopper: h,
              side: g = 'bottom',
              sideOffset: m = 0,
              align: y = 'center',
              alignOffset: b = 0,
              arrowPadding: w = 0,
              avoidCollisions: v = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: R = 'partial',
              hideWhenDetached: A = !1,
              updatePositionStrategy: O = 'optimized',
              onPlaced: S,
              ...T
            } = e,
            B = ej(eF, h),
            [C, N] = n.useState(null),
            L = (0, eS.s)(t, (e) => N(e)),
            [U, P] = n.useState(null),
            j = (0, eN.X)(U),
            I =
              null !== (d = null == j ? void 0 : j.width) && void 0 !== d
                ? d
                : 0,
            _ =
              null !== (p = null == j ? void 0 : j.height) && void 0 !== p
                ? p
                : 0,
            D =
              'number' == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            F = Array.isArray(x) ? x : [x],
            z = F.length > 0,
            M = { padding: D, boundary: F.filter(eV), altBoundary: z },
            {
              refs: $,
              floatingStyles: W,
              placement: H,
              isPositioned: V,
              middlewareData: J,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = 'bottom',
                  strategy: r = 'absolute',
                  middleware: o = [],
                  platform: i,
                  elements: { reference: s, floating: l } = {},
                  transform: a = !0,
                  whileElementsMounted: u,
                  open: f,
                } = e,
                [c, d] = n.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = n.useState(o);
              ec(p, o) || h(o);
              let [g, m] = n.useState(null),
                [y, b] = n.useState(null),
                w = n.useCallback((e) => {
                  e !== R.current && ((R.current = e), m(e));
                }, []),
                v = n.useCallback((e) => {
                  e !== A.current && ((A.current = e), b(e));
                }, []),
                x = s || g,
                E = l || y,
                R = n.useRef(null),
                A = n.useRef(null),
                O = n.useRef(c),
                S = null != u,
                T = eh(u),
                B = eh(i),
                C = eh(f),
                N = n.useCallback(() => {
                  if (!R.current || !A.current) return;
                  let e = { placement: t, strategy: r, middleware: p };
                  B.current && (e.platform = B.current),
                    ea(R.current, A.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== C.current };
                      k.current &&
                        !ec(O.current, t) &&
                        ((O.current = t),
                        eu.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, r, B, C]);
              ef(() => {
                !1 === f &&
                  O.current.isPositioned &&
                  ((O.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [f]);
              let k = n.useRef(!1);
              ef(
                () => (
                  (k.current = !0),
                  () => {
                    k.current = !1;
                  }
                ),
                [],
              ),
                ef(() => {
                  if ((x && (R.current = x), E && (A.current = E), x && E)) {
                    if (T.current) return T.current(x, E, N);
                    N();
                  }
                }, [x, E, N, T, S]);
              let L = n.useMemo(
                  () => ({
                    reference: R,
                    floating: A,
                    setReference: w,
                    setFloating: v,
                  }),
                  [w, v],
                ),
                U = n.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                P = n.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!U.floating) return e;
                  let t = ep(U.floating, c.x),
                    n = ep(U.floating, c.y);
                  return a
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + n + 'px)',
                        ...(ed(U.floating) >= 1.5 && {
                          willChange: 'transform',
                        }),
                      }
                    : { position: r, left: t, top: n };
                }, [r, a, U.floating, c.x, c.y]);
              return n.useMemo(
                () => ({
                  ...c,
                  update: N,
                  refs: L,
                  elements: U,
                  floatingStyles: P,
                }),
                [c, N, L, U, P],
              );
            })({
              strategy: 'fixed',
              placement: g + ('center' !== y ? '-' + y : ''),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                return (function (e, t, r, n) {
                  let o;
                  void 0 === n && (n = {});
                  let {
                      ancestorScroll: l = !0,
                      ancestorResize: u = !0,
                      elementResize: f = 'function' == typeof ResizeObserver,
                      layoutShift: c = 'function' ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = n,
                    p = G(e),
                    h = l || u ? [...(p ? q(p) : []), ...q(t)] : [];
                  h.forEach((e) => {
                    l && e.addEventListener('scroll', r, { passive: !0 }),
                      u && e.addEventListener('resize', r);
                  });
                  let g =
                      p && c
                        ? (function (e, t) {
                            let r,
                              n = null,
                              o = k(e);
                            function l() {
                              var e;
                              clearTimeout(r),
                                null == (e = n) || e.disconnect(),
                                (n = null);
                            }
                            return (
                              !(function u(f, c) {
                                void 0 === f && (f = !1),
                                  void 0 === c && (c = 1),
                                  l();
                                let d = e.getBoundingClientRect(),
                                  { left: p, top: h, width: g, height: m } = d;
                                if ((f || t(), !g || !m)) return;
                                let y = a(h),
                                  b = a(o.clientWidth - (p + g)),
                                  w = {
                                    rootMargin:
                                      -y +
                                      'px ' +
                                      -b +
                                      'px ' +
                                      -a(o.clientHeight - (h + m)) +
                                      'px ' +
                                      -a(p) +
                                      'px',
                                    threshold: s(0, i(1, c)) || 1,
                                  },
                                  v = !0;
                                function x(t) {
                                  let n = t[0].intersectionRatio;
                                  if (n !== c) {
                                    if (!v) return u();
                                    n
                                      ? u(!1, n)
                                      : (r = setTimeout(() => {
                                          u(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== n ||
                                    es(d, e.getBoundingClientRect()) ||
                                    u(),
                                    (v = !1);
                                }
                                try {
                                  n = new IntersectionObserver(x, {
                                    ...w,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  n = new IntersectionObserver(x, w);
                                }
                                n.observe(e);
                              })(!0),
                              l
                            );
                          })(p, r)
                        : null,
                    m = -1,
                    y = null;
                  f &&
                    ((y = new ResizeObserver((e) => {
                      let [n] = e;
                      n &&
                        n.target === p &&
                        y &&
                        (y.unobserve(t),
                        cancelAnimationFrame(m),
                        (m = requestAnimationFrame(() => {
                          var e;
                          null == (e = y) || e.observe(t);
                        }))),
                        r();
                    })),
                    p && !d && y.observe(p),
                    y.observe(t));
                  let b = d ? Y(e) : null;
                  return (
                    d &&
                      (function t() {
                        let n = Y(e);
                        b && !es(b, n) && r(),
                          (b = n),
                          (o = requestAnimationFrame(t));
                      })(),
                    r(),
                    () => {
                      var e;
                      h.forEach((e) => {
                        l && e.removeEventListener('scroll', r),
                          u && e.removeEventListener('resize', r);
                      }),
                        null == g || g(),
                        null == (e = y) || e.disconnect(),
                        (y = null),
                        d && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: 'always' === O });
              },
              elements: { reference: B.anchor },
              middleware: [
                em({ mainAxis: m + _, alignmentAxis: b }),
                v &&
                  ey({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === R ? eb() : void 0,
                    ...M,
                  }),
                v && ew({ ...M }),
                ev({
                  ...M,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: r,
                        availableWidth: n,
                        availableHeight: o,
                      } = e,
                      { width: i, height: s } = r.reference,
                      l = t.floating.style;
                    l.setProperty(
                      '--radix-popper-available-width',
                      ''.concat(n, 'px'),
                    ),
                      l.setProperty(
                        '--radix-popper-available-height',
                        ''.concat(o, 'px'),
                      ),
                      l.setProperty(
                        '--radix-popper-anchor-width',
                        ''.concat(i, 'px'),
                      ),
                      l.setProperty(
                        '--radix-popper-anchor-height',
                        ''.concat(s, 'px'),
                      );
                  },
                }),
                U && eE({ element: U, padding: w }),
                eG({ arrowWidth: I, arrowHeight: _ }),
                A && ex({ strategy: 'referenceHidden', ...M }),
              ],
            }),
            [X, K] = eJ(H),
            Z = (0, eB.c)(S);
          (0, eC.N)(() => {
            V && (null == Z || Z());
          }, [V, Z]);
          let Q = null === (r = J.arrow) || void 0 === r ? void 0 : r.x,
            ee = null === (o = J.arrow) || void 0 === o ? void 0 : o.y,
            et =
              (null === (l = J.arrow) || void 0 === l
                ? void 0
                : l.centerOffset) !== 0,
            [er, en] = n.useState();
          return (
            (0, eC.N)(() => {
              C && en(window.getComputedStyle(C).zIndex);
            }, [C]),
            (0, eA.jsx)('div', {
              ref: $.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...W,
                transform: V ? W.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: er,
                '--radix-popper-transform-origin': [
                  null === (u = J.transformOrigin) || void 0 === u
                    ? void 0
                    : u.x,
                  null === (f = J.transformOrigin) || void 0 === f
                    ? void 0
                    : f.y,
                ].join(' '),
                ...((null === (c = J.hide) || void 0 === c
                  ? void 0
                  : c.referenceHidden) && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, eA.jsx)(ez, {
                scope: h,
                placedSide: X,
                onArrowChange: P,
                arrowX: Q,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, eA.jsx)(eR.sG.div, {
                  'data-side': X,
                  'data-align': K,
                  ...T,
                  ref: L,
                  style: { ...T.style, animation: V ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      e$.displayName = eF;
      var eW = 'PopperArrow',
        eq = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        eH = n.forwardRef(function (e, t) {
          let { __scopePopper: r, ...n } = e,
            o = eM(eW, r),
            i = eq[o.placedSide];
          return (0, eA.jsx)('span', {
            ref: o.onArrowChange,
            style: {
              position: 'absolute',
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0',
              }[o.placedSide],
              transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: 'rotate(180deg)',
                left: 'translateY(50%) rotate(-90deg) translateX(50%)',
              }[o.placedSide],
              visibility: o.shouldHideArrow ? 'hidden' : void 0,
            },
            children: (0, eA.jsx)(eO, {
              ...n,
              ref: t,
              style: { ...n.style, display: 'block' },
            }),
          });
        });
      function eV(e) {
        return null !== e;
      }
      eH.displayName = eW;
      var eG = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var r, n, o, i, s;
          let { placement: l, rects: a, middlewareData: u } = t,
            f =
              (null === (r = u.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            c = f ? 0 : e.arrowWidth,
            d = f ? 0 : e.arrowHeight,
            [p, h] = eJ(l),
            g = { start: '0%', center: '50%', end: '100%' }[h],
            m =
              (null !==
                (i = null === (n = u.arrow) || void 0 === n ? void 0 : n.x) &&
              void 0 !== i
                ? i
                : 0) +
              c / 2,
            y =
              (null !==
                (s = null === (o = u.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== s
                ? s
                : 0) +
              d / 2,
            b = '',
            w = '';
          return (
            'bottom' === p
              ? ((b = f ? g : ''.concat(m, 'px')), (w = ''.concat(-d, 'px')))
              : 'top' === p
                ? ((b = f ? g : ''.concat(m, 'px')),
                  (w = ''.concat(a.floating.height + d, 'px')))
                : 'right' === p
                  ? ((b = ''.concat(-d, 'px')),
                    (w = f ? g : ''.concat(y, 'px')))
                  : 'left' === p &&
                    ((b = ''.concat(a.floating.width + d, 'px')),
                    (w = f ? g : ''.concat(y, 'px'))),
            { data: { x: b, y: w } }
          );
        },
      });
      function eJ(e) {
        let [t, r = 'center'] = e.split('-');
        return [t, r];
      }
      var eX = eI,
        eK = eD,
        eY = e$,
        eZ = eH;
    },
  },
]);
