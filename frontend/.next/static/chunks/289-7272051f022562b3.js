(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [289],
  {
    859: (e) => {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    1027: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => i });
      var n = r(3463);
      let o = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
        a = n.$,
        i = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return a(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className,
            );
          let { variants: i, defaultVariants: l } = t,
            s = Object.keys(i).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == l ? void 0 : l[e];
              if (null === t) return null;
              let a = o(t) || o(n);
              return i[e][a];
            }),
            c =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return a(
            e,
            s,
            null == t
              ? void 0
              : null === (n = t.compoundVariants) || void 0 === n
                ? void 0
                : n.reduce((e, t) => {
                    let { class: r, className: n, ...o } = t;
                    return Object.entries(o).every((e) => {
                      let [t, r] = e;
                      return Array.isArray(r)
                        ? r.includes({ ...l, ...c }[t])
                        : { ...l, ...c }[t] === r;
                    })
                      ? [...e, r, n]
                      : e;
                  }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className,
          );
        };
    },
    1325: (e, t, r) => {
      'use strict';
      var n = Object.create,
        o = Object.defineProperty,
        a = Object.getOwnPropertyDescriptor,
        i = Object.getOwnPropertyNames,
        l = Object.getPrototypeOf,
        s = Object.prototype.hasOwnProperty,
        c = (e, t) => o(e, 'name', { value: t, configurable: !0 }),
        u = (e, t, r, n) => {
          if ((t && 'object' == typeof t) || 'function' == typeof t)
            for (let l of i(t))
              s.call(e, l) ||
                l === r ||
                o(e, l, {
                  get: () => t[l],
                  enumerable: !(n = a(t, l)) || n.enumerable,
                });
          return e;
        },
        d = (e, t, r) => (
          (r = null != e ? n(l(e)) : {}),
          u(
            !t && e && e.__esModule
              ? r
              : o(r, 'default', { value: e, enumerable: !0 }),
            e,
          )
        ),
        f = {};
      ((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(f, { default: () => g }),
        (e.exports = u(o({}, '__esModule', { value: !0 }), f));
      var p = d(r(1996)),
        m = d(r(2115)),
        v = d(r(7353)),
        h = c((e) => {
          let {
              color: t,
              height: r,
              showSpinner: n,
              crawl: o,
              crawlSpeed: a,
              initialPosition: i,
              easing: l,
              speed: s,
              shadow: u,
              template: d,
              zIndex: f = 1600,
              showAtBottom: p = !1,
              showForHashAnchor: h = !0,
            } = e,
            g = null != t ? t : '#29d',
            w =
              u || void 0 === u
                ? u
                  ? 'box-shadow:'.concat(u)
                  : 'box-shadow:0 0 10px '.concat(g, ',0 0 5px ').concat(g)
                : '',
            y = m.createElement(
              'style',
              null,
              '#nprogress{pointer-events:none}#nprogress .bar{background:'
                .concat(g, ';position:fixed;z-index:')
                .concat(f, ';')
                .concat(
                  p ? 'bottom: 0;' : 'top: 0;',
                  'left:0;width:100%;height:',
                )
                .concat(
                  null != r ? r : 3,
                  'px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;',
                )
                .concat(
                  w,
                  ';opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:',
                )
                .concat(f, ';')
                .concat(
                  p ? 'bottom: 15px;' : 'top: 15px;',
                  'right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:',
                )
                .concat(g, ';border-left-color:')
                .concat(
                  g,
                  ';border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',
                ),
            ),
            b = c(
              (e) => new URL(e, window.location.href).href,
              'toAbsoluteURL',
            ),
            x = c((e, t) => {
              let r = new URL(b(e)),
                n = new URL(b(t));
              return r.href.split('#')[0] === n.href.split('#')[0];
            }, 'isHashAnchor'),
            E = c((e, t) => {
              let r = new URL(b(e)),
                n = new URL(b(t));
              return (
                r.hostname.replace(/^www\./, '') ===
                n.hostname.replace(/^www\./, '')
              );
            }, 'isSameHostName');
          return (
            m.useEffect(() => {
              function e(e, t) {
                let r = new URL(e),
                  n = new URL(t);
                if (
                  r.hostname === n.hostname &&
                  r.pathname === n.pathname &&
                  r.search === n.search
                ) {
                  let e = r.hash,
                    t = n.hash;
                  return (
                    e !== t && r.href.replace(e, '') === n.href.replace(t, '')
                  );
                }
                return !1;
              }
              v.configure({
                showSpinner: null == n || n,
                trickle: null == o || o,
                trickleSpeed: null != a ? a : 200,
                minimum: null != i ? i : 0.08,
                easing: null != l ? l : 'ease',
                speed: null != s ? s : 200,
                template:
                  null != d
                    ? d
                    : '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              }),
                c(e, 'isAnchorOfCurrentUrl');
              var t = document.querySelectorAll('html');
              let r = c(
                () => t.forEach((e) => e.classList.remove('nprogress-busy')),
                'removeNProgressClass',
              );
              function u(e) {
                for (; e && 'a' !== e.tagName.toLowerCase(); )
                  e = e.parentElement;
                return e;
              }
              function f(t) {
                try {
                  let n = t.target,
                    o = u(n),
                    a = null == o ? void 0 : o.href;
                  if (a) {
                    let n = window.location.href,
                      i = '_blank' === o.target,
                      l = [
                        'tel:',
                        'mailto:',
                        'sms:',
                        'blob:',
                        'download:',
                      ].some((e) => a.startsWith(e));
                    if (!E(window.location.href, o.href)) return;
                    let s = e(n, a) || x(window.location.href, o.href);
                    if (!h && s) return;
                    a === n ||
                    i ||
                    l ||
                    s ||
                    t.ctrlKey ||
                    t.metaKey ||
                    t.shiftKey ||
                    t.altKey ||
                    !b(o.href).startsWith('http')
                      ? (v.start(), v.done(), r())
                      : v.start();
                  }
                } catch (e) {
                  v.start(), v.done();
                }
              }
              function p() {
                v.done(), r();
              }
              function m() {
                v.done();
              }
              return (
                c(u, 'findClosestAnchor'),
                c(f, 'handleClick'),
                ((e) => {
                  let t = e.pushState;
                  e.pushState = function () {
                    for (
                      var n = arguments.length, o = Array(n), a = 0;
                      a < n;
                      a++
                    )
                      o[a] = arguments[a];
                    return v.done(), r(), t.apply(e, o);
                  };
                })(window.history),
                ((e) => {
                  let t = e.replaceState;
                  e.replaceState = function () {
                    for (
                      var n = arguments.length, o = Array(n), a = 0;
                      a < n;
                      a++
                    )
                      o[a] = arguments[a];
                    return v.done(), r(), t.apply(e, o);
                  };
                })(window.history),
                c(p, 'handlePageHide'),
                c(m, 'handleBackAndForth'),
                window.addEventListener('popstate', m),
                document.addEventListener('click', f),
                window.addEventListener('pagehide', p),
                () => {
                  document.removeEventListener('click', f),
                    window.removeEventListener('pagehide', p),
                    window.removeEventListener('popstate', m);
                }
              );
            }, []),
            y
          );
        }, 'NextTopLoader'),
        g = h;
      h.propTypes = {
        color: p.string,
        height: p.number,
        showSpinner: p.bool,
        crawl: p.bool,
        crawlSpeed: p.number,
        initialPosition: p.number,
        easing: p.string,
        speed: p.number,
        template: p.string,
        shadow: p.oneOfType([p.string, p.bool]),
        zIndex: p.number,
        showAtBottom: p.bool,
      };
    },
    1996: (e, t, r) => {
      e.exports = r(5192)();
    },
    2341: (e, t, r) => {
      'use strict';
      r.d(t, {
        OK: () => V,
        bL: () => X,
        VM: () => E,
        lr: () => D,
        LM: () => Y,
      });
      var n = r(2115),
        o = r(3360),
        a = r(7028),
        i = r(8166),
        l = r(8068),
        s = r(1524),
        c = r(4256),
        u = r(6611),
        d = r(3610),
        f = r(5155),
        p = 'ScrollArea',
        [m, v] = (0, i.A)(p),
        [h, g] = m(p),
        w = n.forwardRef((e, t) => {
          let {
              __scopeScrollArea: r,
              type: a = 'hover',
              dir: i,
              scrollHideDelay: s = 600,
              ...u
            } = e,
            [d, p] = n.useState(null),
            [m, v] = n.useState(null),
            [g, w] = n.useState(null),
            [y, b] = n.useState(null),
            [x, E] = n.useState(null),
            [S, C] = n.useState(0),
            [R, T] = n.useState(0),
            [k, M] = n.useState(!1),
            [P, j] = n.useState(!1),
            L = (0, l.s)(t, (e) => p(e)),
            A = (0, c.jH)(i);
          return (0, f.jsx)(h, {
            scope: r,
            type: a,
            dir: A,
            scrollHideDelay: s,
            scrollArea: d,
            viewport: m,
            onViewportChange: v,
            content: g,
            onContentChange: w,
            scrollbarX: y,
            onScrollbarXChange: b,
            scrollbarXEnabled: k,
            onScrollbarXEnabledChange: M,
            scrollbarY: x,
            onScrollbarYChange: E,
            scrollbarYEnabled: P,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: C,
            onCornerHeightChange: T,
            children: (0, f.jsx)(o.sG.div, {
              dir: A,
              ...u,
              ref: L,
              style: {
                position: 'relative',
                '--radix-scroll-area-corner-width': S + 'px',
                '--radix-scroll-area-corner-height': R + 'px',
                ...e.style,
              },
            }),
          });
        });
      w.displayName = p;
      var y = 'ScrollAreaViewport',
        b = n.forwardRef((e, t) => {
          let { __scopeScrollArea: r, children: a, nonce: i, ...s } = e,
            c = g(y, r),
            u = n.useRef(null),
            d = (0, l.s)(t, u, c.onViewportChange);
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
                },
                nonce: i,
              }),
              (0, f.jsx)(o.sG.div, {
                'data-radix-scroll-area-viewport': '',
                ...s,
                ref: d,
                style: {
                  overflowX: c.scrollbarXEnabled ? 'scroll' : 'hidden',
                  overflowY: c.scrollbarYEnabled ? 'scroll' : 'hidden',
                  ...e.style,
                },
                children: (0, f.jsx)('div', {
                  ref: c.onContentChange,
                  style: { minWidth: '100%', display: 'table' },
                  children: a,
                }),
              }),
            ],
          });
        });
      b.displayName = y;
      var x = 'ScrollAreaScrollbar',
        E = n.forwardRef((e, t) => {
          let { forceMount: r, ...o } = e,
            a = g(x, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = a,
            s = 'horizontal' === e.orientation;
          return (
            n.useEffect(
              () => (
                s ? i(!0) : l(!0),
                () => {
                  s ? i(!1) : l(!1);
                }
              ),
              [s, i, l],
            ),
            'hover' === a.type
              ? (0, f.jsx)(S, { ...o, ref: t, forceMount: r })
              : 'scroll' === a.type
                ? (0, f.jsx)(C, { ...o, ref: t, forceMount: r })
                : 'auto' === a.type
                  ? (0, f.jsx)(R, { ...o, ref: t, forceMount: r })
                  : 'always' === a.type
                    ? (0, f.jsx)(T, { ...o, ref: t })
                    : null
          );
        });
      E.displayName = x;
      var S = n.forwardRef((e, t) => {
          let { forceMount: r, ...o } = e,
            i = g(x, e.__scopeScrollArea),
            [l, s] = n.useState(!1);
          return (
            n.useEffect(() => {
              let e = i.scrollArea,
                t = 0;
              if (e) {
                let r = () => {
                    window.clearTimeout(t), s(!0);
                  },
                  n = () => {
                    t = window.setTimeout(() => s(!1), i.scrollHideDelay);
                  };
                return (
                  e.addEventListener('pointerenter', r),
                  e.addEventListener('pointerleave', n),
                  () => {
                    window.clearTimeout(t),
                      e.removeEventListener('pointerenter', r),
                      e.removeEventListener('pointerleave', n);
                  }
                );
              }
            }, [i.scrollArea, i.scrollHideDelay]),
            (0, f.jsx)(a.C, {
              present: r || l,
              children: (0, f.jsx)(R, {
                'data-state': l ? 'visible' : 'hidden',
                ...o,
                ref: t,
              }),
            })
          );
        }),
        C = n.forwardRef((e, t) => {
          var r, o;
          let { forceMount: i, ...l } = e,
            s = g(x, e.__scopeScrollArea),
            c = 'horizontal' === e.orientation,
            u = z(() => m('SCROLL_END'), 100),
            [p, m] =
              ((r = 'hidden'),
              (o = {
                hidden: { SCROLL: 'scrolling' },
                scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
                interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
                idle: {
                  HIDE: 'hidden',
                  SCROLL: 'scrolling',
                  POINTER_ENTER: 'interacting',
                },
              }),
              n.useReducer((e, t) => {
                let r = o[e][t];
                return null != r ? r : e;
              }, r));
          return (
            n.useEffect(() => {
              if ('idle' === p) {
                let e = window.setTimeout(() => m('HIDE'), s.scrollHideDelay);
                return () => window.clearTimeout(e);
              }
            }, [p, s.scrollHideDelay, m]),
            n.useEffect(() => {
              let e = s.viewport,
                t = c ? 'scrollLeft' : 'scrollTop';
              if (e) {
                let r = e[t],
                  n = () => {
                    let n = e[t];
                    r !== n && (m('SCROLL'), u()), (r = n);
                  };
                return (
                  e.addEventListener('scroll', n),
                  () => e.removeEventListener('scroll', n)
                );
              }
            }, [s.viewport, c, m, u]),
            (0, f.jsx)(a.C, {
              present: i || 'hidden' !== p,
              children: (0, f.jsx)(T, {
                'data-state': 'hidden' === p ? 'hidden' : 'visible',
                ...l,
                ref: t,
                onPointerEnter: (0, d.m)(e.onPointerEnter, () =>
                  m('POINTER_ENTER'),
                ),
                onPointerLeave: (0, d.m)(e.onPointerLeave, () =>
                  m('POINTER_LEAVE'),
                ),
              }),
            })
          );
        }),
        R = n.forwardRef((e, t) => {
          let r = g(x, e.__scopeScrollArea),
            { forceMount: o, ...i } = e,
            [l, s] = n.useState(!1),
            c = 'horizontal' === e.orientation,
            u = z(() => {
              if (r.viewport) {
                let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(c ? e : t);
              }
            }, 10);
          return (
            G(r.viewport, u),
            G(r.content, u),
            (0, f.jsx)(a.C, {
              present: o || l,
              children: (0, f.jsx)(T, {
                'data-state': l ? 'visible' : 'hidden',
                ...i,
                ref: t,
              }),
            })
          );
        }),
        T = n.forwardRef((e, t) => {
          let { orientation: r = 'vertical', ...o } = e,
            a = g(x, e.__scopeScrollArea),
            i = n.useRef(null),
            l = n.useRef(0),
            [s, c] = n.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            u = W(s.viewport, s.content),
            d = {
              ...o,
              sizes: s,
              onSizesChange: c,
              hasThumb: !!(u > 0 && u < 1),
              onThumbChange: (e) => (i.current = e),
              onThumbPointerUp: () => (l.current = 0),
              onThumbPointerDown: (e) => (l.current = e),
            };
          function p(e, t) {
            return (function (e, t, r) {
              let n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 'ltr',
                o = U(r),
                a = t || o / 2,
                i = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - (o - a),
                s = r.content - r.viewport;
              return B([i, l], 'ltr' === n ? [0, s] : [-1 * s, 0])(e);
            })(e, l.current, s, t);
          }
          return 'horizontal' === r
            ? (0, f.jsx)(k, {
                ...d,
                ref: t,
                onThumbPositionChange: () => {
                  if (a.viewport && i.current) {
                    let e = K(a.viewport.scrollLeft, s, a.dir);
                    i.current.style.transform = 'translate3d('.concat(
                      e,
                      'px, 0, 0)',
                    );
                  }
                },
                onWheelScroll: (e) => {
                  a.viewport && (a.viewport.scrollLeft = e);
                },
                onDragScroll: (e) => {
                  a.viewport && (a.viewport.scrollLeft = p(e, a.dir));
                },
              })
            : 'vertical' === r
              ? (0, f.jsx)(M, {
                  ...d,
                  ref: t,
                  onThumbPositionChange: () => {
                    if (a.viewport && i.current) {
                      let e = K(a.viewport.scrollTop, s);
                      i.current.style.transform = 'translate3d(0, '.concat(
                        e,
                        'px, 0)',
                      );
                    }
                  },
                  onWheelScroll: (e) => {
                    a.viewport && (a.viewport.scrollTop = e);
                  },
                  onDragScroll: (e) => {
                    a.viewport && (a.viewport.scrollTop = p(e));
                  },
                })
              : null;
        }),
        k = n.forwardRef((e, t) => {
          let { sizes: r, onSizesChange: o, ...a } = e,
            i = g(x, e.__scopeScrollArea),
            [s, c] = n.useState(),
            u = n.useRef(null),
            d = (0, l.s)(t, u, i.onScrollbarXChange);
          return (
            n.useEffect(() => {
              u.current && c(getComputedStyle(u.current));
            }, [u]),
            (0, f.jsx)(L, {
              'data-orientation': 'horizontal',
              ...a,
              ref: d,
              sizes: r,
              style: {
                bottom: 0,
                left:
                  'rtl' === i.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
                right:
                  'ltr' === i.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
                '--radix-scroll-area-thumb-width': U(r) + 'px',
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
              onDragScroll: (t) => e.onDragScroll(t.x),
              onWheelScroll: (t, r) => {
                if (i.viewport) {
                  let n = i.viewport.scrollLeft + t.deltaX;
                  e.onWheelScroll(n),
                    (function (e, t) {
                      return e > 0 && e < t;
                    })(n, r) && t.preventDefault();
                }
              },
              onResize: () => {
                u.current &&
                  i.viewport &&
                  s &&
                  o({
                    content: i.viewport.scrollWidth,
                    viewport: i.viewport.offsetWidth,
                    scrollbar: {
                      size: u.current.clientWidth,
                      paddingStart: F(s.paddingLeft),
                      paddingEnd: F(s.paddingRight),
                    },
                  });
              },
            })
          );
        }),
        M = n.forwardRef((e, t) => {
          let { sizes: r, onSizesChange: o, ...a } = e,
            i = g(x, e.__scopeScrollArea),
            [s, c] = n.useState(),
            u = n.useRef(null),
            d = (0, l.s)(t, u, i.onScrollbarYChange);
          return (
            n.useEffect(() => {
              u.current && c(getComputedStyle(u.current));
            }, [u]),
            (0, f.jsx)(L, {
              'data-orientation': 'vertical',
              ...a,
              ref: d,
              sizes: r,
              style: {
                top: 0,
                right: 'ltr' === i.dir ? 0 : void 0,
                left: 'rtl' === i.dir ? 0 : void 0,
                bottom: 'var(--radix-scroll-area-corner-height)',
                '--radix-scroll-area-thumb-height': U(r) + 'px',
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
              onDragScroll: (t) => e.onDragScroll(t.y),
              onWheelScroll: (t, r) => {
                if (i.viewport) {
                  let n = i.viewport.scrollTop + t.deltaY;
                  e.onWheelScroll(n),
                    (function (e, t) {
                      return e > 0 && e < t;
                    })(n, r) && t.preventDefault();
                }
              },
              onResize: () => {
                u.current &&
                  i.viewport &&
                  s &&
                  o({
                    content: i.viewport.scrollHeight,
                    viewport: i.viewport.offsetHeight,
                    scrollbar: {
                      size: u.current.clientHeight,
                      paddingStart: F(s.paddingTop),
                      paddingEnd: F(s.paddingBottom),
                    },
                  });
              },
            })
          );
        }),
        [P, j] = m(x),
        L = n.forwardRef((e, t) => {
          let {
              __scopeScrollArea: r,
              sizes: a,
              hasThumb: i,
              onThumbChange: c,
              onThumbPointerUp: u,
              onThumbPointerDown: p,
              onThumbPositionChange: m,
              onDragScroll: v,
              onWheelScroll: h,
              onResize: w,
              ...y
            } = e,
            b = g(x, r),
            [E, S] = n.useState(null),
            C = (0, l.s)(t, (e) => S(e)),
            R = n.useRef(null),
            T = n.useRef(''),
            k = b.viewport,
            M = a.content - a.viewport,
            j = (0, s.c)(h),
            L = (0, s.c)(m),
            A = z(w, 10);
          function D(e) {
            R.current &&
              v({
                x: e.clientX - R.current.left,
                y: e.clientY - R.current.top,
              });
          }
          return (
            n.useEffect(() => {
              let e = (e) => {
                let t = e.target;
                (null == E ? void 0 : E.contains(t)) && j(e, M);
              };
              return (
                document.addEventListener('wheel', e, { passive: !1 }),
                () => document.removeEventListener('wheel', e, { passive: !1 })
              );
            }, [k, E, M, j]),
            n.useEffect(L, [a, L]),
            G(E, A),
            G(b.content, A),
            (0, f.jsx)(P, {
              scope: r,
              scrollbar: E,
              hasThumb: i,
              onThumbChange: (0, s.c)(c),
              onThumbPointerUp: (0, s.c)(u),
              onThumbPositionChange: L,
              onThumbPointerDown: (0, s.c)(p),
              children: (0, f.jsx)(o.sG.div, {
                ...y,
                ref: C,
                style: { position: 'absolute', ...y.style },
                onPointerDown: (0, d.m)(e.onPointerDown, (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (R.current = E.getBoundingClientRect()),
                    (T.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = 'none'),
                    b.viewport && (b.viewport.style.scrollBehavior = 'auto'),
                    D(e));
                }),
                onPointerMove: (0, d.m)(e.onPointerMove, D),
                onPointerUp: (0, d.m)(e.onPointerUp, (e) => {
                  let t = e.target;
                  t.hasPointerCapture(e.pointerId) &&
                    t.releasePointerCapture(e.pointerId),
                    (document.body.style.webkitUserSelect = T.current),
                    b.viewport && (b.viewport.style.scrollBehavior = ''),
                    (R.current = null);
                }),
              }),
            })
          );
        }),
        A = 'ScrollAreaThumb',
        D = n.forwardRef((e, t) => {
          let { forceMount: r, ...n } = e,
            o = j(A, e.__scopeScrollArea);
          return (0, f.jsx)(a.C, {
            present: r || o.hasThumb,
            children: (0, f.jsx)(N, { ref: t, ...n }),
          });
        }),
        N = n.forwardRef((e, t) => {
          let { __scopeScrollArea: r, style: a, ...i } = e,
            s = g(A, r),
            c = j(A, r),
            { onThumbPositionChange: u } = c,
            p = (0, l.s)(t, (e) => c.onThumbChange(e)),
            m = n.useRef(void 0),
            v = z(() => {
              m.current && (m.current(), (m.current = void 0));
            }, 100);
          return (
            n.useEffect(() => {
              let e = s.viewport;
              if (e) {
                let t = () => {
                  if ((v(), !m.current)) {
                    let t = H(e, u);
                    (m.current = t), u();
                  }
                };
                return (
                  u(),
                  e.addEventListener('scroll', t),
                  () => e.removeEventListener('scroll', t)
                );
              }
            }, [s.viewport, v, u]),
            (0, f.jsx)(o.sG.div, {
              'data-state': c.hasThumb ? 'visible' : 'hidden',
              ...i,
              ref: p,
              style: {
                width: 'var(--radix-scroll-area-thumb-width)',
                height: 'var(--radix-scroll-area-thumb-height)',
                ...a,
              },
              onPointerDownCapture: (0, d.m)(e.onPointerDownCapture, (e) => {
                let t = e.target.getBoundingClientRect(),
                  r = e.clientX - t.left,
                  n = e.clientY - t.top;
                c.onThumbPointerDown({ x: r, y: n });
              }),
              onPointerUp: (0, d.m)(e.onPointerUp, c.onThumbPointerUp),
            })
          );
        });
      D.displayName = A;
      var _ = 'ScrollAreaCorner',
        O = n.forwardRef((e, t) => {
          let r = g(_, e.__scopeScrollArea),
            n = !!(r.scrollbarX && r.scrollbarY);
          return 'scroll' !== r.type && n
            ? (0, f.jsx)(I, { ...e, ref: t })
            : null;
        });
      O.displayName = _;
      var I = n.forwardRef((e, t) => {
        let { __scopeScrollArea: r, ...a } = e,
          i = g(_, r),
          [l, s] = n.useState(0),
          [c, u] = n.useState(0),
          d = !!(l && c);
        return (
          G(i.scrollbarX, () => {
            var e;
            let t =
              (null === (e = i.scrollbarX) || void 0 === e
                ? void 0
                : e.offsetHeight) || 0;
            i.onCornerHeightChange(t), u(t);
          }),
          G(i.scrollbarY, () => {
            var e;
            let t =
              (null === (e = i.scrollbarY) || void 0 === e
                ? void 0
                : e.offsetWidth) || 0;
            i.onCornerWidthChange(t), s(t);
          }),
          d
            ? (0, f.jsx)(o.sG.div, {
                ...a,
                ref: t,
                style: {
                  width: l,
                  height: c,
                  position: 'absolute',
                  right: 'ltr' === i.dir ? 0 : void 0,
                  left: 'rtl' === i.dir ? 0 : void 0,
                  bottom: 0,
                  ...e.style,
                },
              })
            : null
        );
      });
      function F(e) {
        return e ? parseInt(e, 10) : 0;
      }
      function W(e, t) {
        let r = e / t;
        return isNaN(r) ? 0 : r;
      }
      function U(e) {
        let t = W(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - r) * t, 18);
      }
      function K(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'ltr',
          n = U(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          i = t.content - t.viewport,
          l = (function (e, [t, r]) {
            return Math.min(r, Math.max(t, e));
          })(e, 'ltr' === r ? [0, i] : [-1 * i, 0]);
        return B([0, i], [0, a - n])(l);
      }
      function B(e, t) {
        return (r) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0]);
        };
      }
      var H = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => {},
          r = { left: e.scrollLeft, top: e.scrollTop },
          n = 0;
        return (
          !(function o() {
            let a = { left: e.scrollLeft, top: e.scrollTop },
              i = r.left !== a.left,
              l = r.top !== a.top;
            (i || l) && t(), (r = a), (n = window.requestAnimationFrame(o));
          })(),
          () => window.cancelAnimationFrame(n)
        );
      };
      function z(e, t) {
        let r = (0, s.c)(e),
          o = n.useRef(0);
        return (
          n.useEffect(() => () => window.clearTimeout(o.current), []),
          n.useCallback(() => {
            window.clearTimeout(o.current),
              (o.current = window.setTimeout(r, t));
          }, [r, t])
        );
      }
      function G(e, t) {
        let r = (0, s.c)(t);
        (0, u.N)(() => {
          let t = 0;
          if (e) {
            let n = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(r));
            });
            return (
              n.observe(e),
              () => {
                window.cancelAnimationFrame(t), n.unobserve(e);
              }
            );
          }
        }, [e, r]);
      }
      var X = w,
        Y = b,
        V = O;
    },
    3565: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Circle', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
      ]);
    },
    4256: (e, t, r) => {
      'use strict';
      r.d(t, { jH: () => a });
      var n = r(2115);
      r(5155);
      var o = n.createContext(void 0);
      function a(e) {
        let t = n.useContext(o);
        return e || t || 'ltr';
      }
    },
    4684: (e, t, r) => {
      'use strict';
      r.d(t, {
        H_: () => ro,
        UC: () => re,
        YJ: () => rt,
        q7: () => rn,
        VF: () => rl,
        JU: () => rr,
        ZL: () => t7,
        z6: () => ra,
        hN: () => ri,
        bL: () => t9,
        wv: () => rs,
        Pb: () => rc,
        G5: () => rd,
        ZP: () => ru,
        l9: () => t4,
      });
      var n,
        o,
        a = r(2115),
        i = r(3610),
        l = r(8068),
        s = r(8166),
        c = r(1488),
        u = r(3360),
        d = r(2317),
        f = r(5155);
      function p(e) {
        let t = e + 'CollectionProvider',
          [r, n] = (0, s.A)(t),
          [o, i] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = (e) => {
            let { scope: t, children: r } = e,
              n = a.useRef(null),
              i = a.useRef(new Map()).current;
            return (0, f.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: n,
              children: r,
            });
          };
        c.displayName = t;
        let u = e + 'CollectionSlot',
          p = a.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              o = i(u, r),
              a = (0, l.s)(t, o.collectionRef);
            return (0, f.jsx)(d.DX, { ref: a, children: n });
          });
        p.displayName = u;
        let m = e + 'CollectionItemSlot',
          v = 'data-radix-collection-item',
          h = a.forwardRef((e, t) => {
            let { scope: r, children: n, ...o } = e,
              s = a.useRef(null),
              c = (0, l.s)(t, s),
              u = i(m, r);
            return (
              a.useEffect(
                () => (
                  u.itemMap.set(s, { ref: s, ...o }),
                  () => void u.itemMap.delete(s)
                ),
              ),
              (0, f.jsx)(d.DX, { [v]: '', ref: c, children: n })
            );
          });
        return (
          (h.displayName = m),
          [
            { Provider: c, Slot: p, ItemSlot: h },
            function (t) {
              let r = i(e + 'CollectionConsumer', t);
              return a.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll('['.concat(v, ']')));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
                );
              }, [r.collectionRef, r.itemMap]);
            },
            n,
          ]
        );
      }
      var m = r(4256),
        v = r(9674),
        h = 0;
      function g() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.outline = 'none'),
          (e.style.opacity = '0'),
          (e.style.position = 'fixed'),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
      var w = r(1524),
        y = 'focusScope.autoFocusOnMount',
        b = 'focusScope.autoFocusOnUnmount',
        x = { bubbles: !1, cancelable: !0 },
        E = a.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: n = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              ...s
            } = e,
            [c, d] = a.useState(null),
            p = (0, w.c)(o),
            m = (0, w.c)(i),
            v = a.useRef(null),
            h = (0, l.s)(t, (e) => d(e)),
            g = a.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          a.useEffect(() => {
            if (n) {
              let e = function (e) {
                  if (g.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (v.current = t)
                    : R(v.current, { select: !0 });
                },
                t = function (e) {
                  if (g.paused || !c) return;
                  let t = e.relatedTarget;
                  null === t || c.contains(t) || R(v.current, { select: !0 });
                };
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && R(c);
              });
              return (
                c && r.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    r.disconnect();
                }
              );
            }
          }, [n, c, g.paused]),
            a.useEffect(() => {
              if (c) {
                T.add(g);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(y, x);
                  c.addEventListener(y, p),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = document.activeElement;
                        for (let n of e)
                          if (
                            (R(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        S(c).filter((e) => 'A' !== e.tagName),
                        { select: !0 },
                      ),
                      document.activeElement === e && R(c));
                }
                return () => {
                  c.removeEventListener(y, p),
                    setTimeout(() => {
                      let t = new CustomEvent(b, x);
                      c.addEventListener(b, m),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          R(null != e ? e : document.body, { select: !0 }),
                        c.removeEventListener(b, m),
                        T.remove(g);
                    }, 0);
                };
              }
            }, [c, p, m, g]);
          let E = a.useCallback(
            (e) => {
              if ((!r && !n) || g.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [n, a] = (function (e) {
                    let t = S(e);
                    return [C(t, e), C(t.reverse(), e)];
                  })(t);
                n && a
                  ? e.shiftKey || o !== a
                    ? e.shiftKey &&
                      o === n &&
                      (e.preventDefault(), r && R(a, { select: !0 }))
                    : (e.preventDefault(), r && R(n, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [r, n, g.paused],
          );
          return (0, f.jsx)(u.sG.div, {
            tabIndex: -1,
            ...s,
            ref: h,
            onKeyDown: E,
          });
        });
      function S(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function C(e, t) {
        for (let r of e)
          if (
            !(function (e, t) {
              let { upTo: r } = t;
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === r || e !== r); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function R(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              'select' in r &&
              t &&
              e.select();
        }
      }
      E.displayName = 'FocusScope';
      var T = (function () {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && (null == r || r.pause()), (e = k(e, t)).unshift(t);
          },
          remove(t) {
            var r;
            null === (r = (e = k(e, t))[0]) || void 0 === r || r.resume();
          },
        };
      })();
      function k(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
      var M = r(7668),
        P = r(9895),
        j = r(7323),
        L = r(7028),
        A = 'rovingFocusGroup.onEntryFocus',
        D = { bubbles: !1, cancelable: !0 },
        N = 'RovingFocusGroup',
        [_, O, I] = p(N),
        [F, W] = (0, s.A)(N, [I]),
        [U, K] = F(N),
        B = a.forwardRef((e, t) =>
          (0, f.jsx)(_.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, f.jsx)(_.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, f.jsx)(H, { ...e, ref: t }),
            }),
          }),
        );
      B.displayName = N;
      var H = a.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: n,
              loop: o = !1,
              dir: s,
              currentTabStopId: d,
              defaultCurrentTabStopId: p,
              onCurrentTabStopIdChange: v,
              onEntryFocus: h,
              preventScrollOnEntryFocus: g = !1,
              ...y
            } = e,
            b = a.useRef(null),
            x = (0, l.s)(t, b),
            E = (0, m.jH)(s),
            [S = null, C] = (0, c.i)({ prop: d, defaultProp: p, onChange: v }),
            [R, T] = a.useState(!1),
            k = (0, w.c)(h),
            M = O(r),
            P = a.useRef(!1),
            [j, L] = a.useState(0);
          return (
            a.useEffect(() => {
              let e = b.current;
              if (e)
                return (
                  e.addEventListener(A, k), () => e.removeEventListener(A, k)
                );
            }, [k]),
            (0, f.jsx)(U, {
              scope: r,
              orientation: n,
              dir: E,
              loop: o,
              currentTabStopId: S,
              onItemFocus: a.useCallback((e) => C(e), [C]),
              onItemShiftTab: a.useCallback(() => T(!0), []),
              onFocusableItemAdd: a.useCallback(() => L((e) => e + 1), []),
              onFocusableItemRemove: a.useCallback(() => L((e) => e - 1), []),
              children: (0, f.jsx)(u.sG.div, {
                tabIndex: R || 0 === j ? -1 : 0,
                'data-orientation': n,
                ...y,
                ref: x,
                style: { outline: 'none', ...e.style },
                onMouseDown: (0, i.m)(e.onMouseDown, () => {
                  P.current = !0;
                }),
                onFocus: (0, i.m)(e.onFocus, (e) => {
                  let t = !P.current;
                  if (e.target === e.currentTarget && t && !R) {
                    let t = new CustomEvent(A, D);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = M().filter((e) => e.focusable);
                      Y(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === S),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        g,
                      );
                    }
                  }
                  P.current = !1;
                }),
                onBlur: (0, i.m)(e.onBlur, () => T(!1)),
              }),
            })
          );
        }),
        z = 'RovingFocusGroupItem',
        G = a.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: n = !0,
              active: o = !1,
              tabStopId: l,
              ...s
            } = e,
            c = (0, M.B)(),
            d = l || c,
            p = K(z, r),
            m = p.currentTabStopId === d,
            v = O(r),
            { onFocusableItemAdd: h, onFocusableItemRemove: g } = p;
          return (
            a.useEffect(() => {
              if (n) return h(), () => g();
            }, [n, h, g]),
            (0, f.jsx)(_.ItemSlot, {
              scope: r,
              id: d,
              focusable: n,
              active: o,
              children: (0, f.jsx)(u.sG.span, {
                tabIndex: m ? 0 : -1,
                'data-orientation': p.orientation,
                ...s,
                ref: t,
                onMouseDown: (0, i.m)(e.onMouseDown, (e) => {
                  n ? p.onItemFocus(d) : e.preventDefault();
                }),
                onFocus: (0, i.m)(e.onFocus, () => p.onItemFocus(d)),
                onKeyDown: (0, i.m)(e.onKeyDown, (e) => {
                  if ('Tab' === e.key && e.shiftKey) {
                    p.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let o =
                      ((n = e.key),
                      'rtl' !== r
                        ? n
                        : 'ArrowLeft' === n
                          ? 'ArrowRight'
                          : 'ArrowRight' === n
                            ? 'ArrowLeft'
                            : n);
                    if (
                      !(
                        'vertical' === t &&
                        ['ArrowLeft', 'ArrowRight'].includes(o)
                      ) &&
                      !(
                        'horizontal' === t &&
                        ['ArrowUp', 'ArrowDown'].includes(o)
                      )
                    )
                      return X[o];
                  })(e, p.orientation, p.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let r = v()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ('last' === t) r.reverse();
                    else if ('prev' === t || 'next' === t) {
                      'prev' === t && r.reverse();
                      let n = r.indexOf(e.currentTarget);
                      r = p.loop
                        ? (function (e, t) {
                            return e.map((r, n) => e[(t + n) % e.length]);
                          })(r, n + 1)
                        : r.slice(n + 1);
                    }
                    setTimeout(() => Y(r));
                  }
                }),
              }),
            })
          );
        });
      G.displayName = z;
      var X = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last',
      };
      function Y(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var V = function (e) {
          return 'undefined' == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        q = new WeakMap(),
        Z = new WeakMap(),
        J = {},
        $ = 0,
        Q = function (e) {
          return e && (e.host || Q(e.parentNode));
        },
        ee = function (e, t, r, n) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = Q(e);
              return r && t.contains(r)
                ? r
                : (console.error(
                    'aria-hidden',
                    e,
                    'in not contained inside',
                    t,
                    '. Doing nothing',
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          J[r] || (J[r] = new WeakMap());
          var a = J[r],
            i = [],
            l = new Set(),
            s = new Set(o),
            c = function (e) {
              !(!e || l.has(e)) && (l.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var u = function (e) {
            !(!e || s.has(e)) &&
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) u(e);
                else
                  try {
                    var t = e.getAttribute(n),
                      o = null !== t && 'false' !== t,
                      s = (q.get(e) || 0) + 1,
                      c = (a.get(e) || 0) + 1;
                    q.set(e, s),
                      a.set(e, c),
                      i.push(e),
                      1 === s && o && Z.set(e, !0),
                      1 === c && e.setAttribute(r, 'true'),
                      o || e.setAttribute(n, 'true');
                  } catch (t) {
                    console.error('aria-hidden: cannot operate on ', e, t);
                  }
              });
          };
          return (
            u(t),
            l.clear(),
            $++,
            function () {
              i.forEach(function (e) {
                var t = q.get(e) - 1,
                  o = a.get(e) - 1;
                q.set(e, t),
                  a.set(e, o),
                  t || (Z.has(e) || e.removeAttribute(n), Z.delete(e)),
                  o || e.removeAttribute(r);
              }),
                --$ ||
                  ((q = new WeakMap()),
                  (q = new WeakMap()),
                  (Z = new WeakMap()),
                  (J = {}));
            }
          );
        },
        et = function (e, t, r) {
          void 0 === r && (r = 'data-aria-hidden');
          var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || V(e);
          return o
            ? (n.push.apply(n, Array.from(o.querySelectorAll('[aria-live]'))),
              ee(n, o, r, 'aria-hidden'))
            : function () {
                return null;
              };
        },
        er = function () {
          return (er =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function en(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      }
      Object.create;
      Object.create;
      var eo =
          ('function' == typeof SuppressedError && SuppressedError,
          'right-scroll-bar-position'),
        ea = 'width-before-scroll-bar';
      function ei(e, t) {
        return 'function' == typeof e ? e(t) : e && (e.current = t), e;
      }
      var el = 'undefined' != typeof window ? a.useLayoutEffect : a.useEffect,
        es = new WeakMap();
      function ec(e) {
        return e;
      }
      var eu = (function (e) {
          void 0 === e && (e = {});
          var t,
            r,
            n,
            o,
            a =
              ((t = null),
              void 0 === r && (r = ec),
              (n = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = r(e, o);
                  return (
                    n.push(t),
                    function () {
                      n = n.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (n.length) {
                    var r = n;
                    (n = []), r.forEach(e), (t = n);
                  }
                  var a = function () {
                      var r = t;
                      (t = []), r.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(a);
                    };
                  i(),
                    (n = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (a.options = er({ async: !0, ssr: !1 }, e)), a;
        })(),
        ed = function () {},
        ef = a.forwardRef(function (e, t) {
          var r,
            n,
            o,
            i,
            l = a.useRef(null),
            s = a.useState({
              onScrollCapture: ed,
              onWheelCapture: ed,
              onTouchMoveCapture: ed,
            }),
            c = s[0],
            u = s[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            m = e.removeScrollBar,
            v = e.enabled,
            h = e.shards,
            g = e.sideCar,
            w = e.noIsolation,
            y = e.inert,
            b = e.allowPinchZoom,
            x = e.as,
            E = e.gapMode,
            S = en(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
              'gapMode',
            ]),
            C =
              ((r = [l, t]),
              (n = function (e) {
                return r.forEach(function (t) {
                  return ei(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: n,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = n),
              (i = o.facade),
              el(
                function () {
                  var e = es.get(i);
                  if (e) {
                    var t = new Set(e),
                      n = new Set(r),
                      o = i.current;
                    t.forEach(function (e) {
                      n.has(e) || ei(e, null);
                    }),
                      n.forEach(function (e) {
                        t.has(e) || ei(e, o);
                      });
                  }
                  es.set(i, r);
                },
                [r],
              ),
              i),
            R = er(er({}, S), c);
          return a.createElement(
            a.Fragment,
            null,
            v &&
              a.createElement(g, {
                sideCar: eu,
                removeScrollBar: m,
                shards: h,
                noIsolation: w,
                inert: y,
                setCallbacks: u,
                allowPinchZoom: !!b,
                lockRef: l,
                gapMode: E,
              }),
            d
              ? a.cloneElement(a.Children.only(f), er(er({}, R), { ref: C }))
              : a.createElement(
                  void 0 === x ? 'div' : x,
                  er({}, R, { className: p, ref: C }),
                  f,
                ),
          );
        });
      (ef.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (ef.classNames = { fullWidth: ea, zeroRight: eo });
      var ep = function (e) {
        var t = e.sideCar,
          r = en(e, ['sideCar']);
        if (!t)
          throw Error(
            'Sidecar: please provide `sideCar` property to import the right car',
          );
        var n = t.read();
        if (!n) throw Error('Sidecar medium not found');
        return a.createElement(n, er({}, r));
      };
      ep.isSideCarExport = !0;
      var em = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = o || r.nc;
                  return t && e.setAttribute('nonce', t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = n)
                  : a.appendChild(document.createTextNode(n)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName('head')[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        ev = function () {
          var e = em();
          return function (t, r) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r],
            );
          };
        },
        eh = function () {
          var e = ev();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        eg = { left: 0, top: 0, right: 0, gap: 0 },
        ew = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        ey = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            n = t['padding' === e ? 'paddingTop' : 'marginTop'],
            o = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [ew(r), ew(n), ew(o)];
        },
        eb = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window))
            return eg;
          var t = ey(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        ex = eh(),
        eE = 'data-scroll-locked',
        eS = function (e, t, r, n) {
          var o = e.left,
            a = e.top,
            i = e.right,
            l = e.gap;
          return (
            void 0 === r && (r = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(n, ';\n   padding-right: ')
              .concat(l, 'px ')
              .concat(n, ';\n  }\n  body[')
              .concat(eE, '] {\n    overflow: hidden ')
              .concat(n, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(n, ';'),
                  'margin' === r &&
                    '\n    padding-left: '
                      .concat(o, 'px;\n    padding-top: ')
                      .concat(a, 'px;\n    padding-right: ')
                      .concat(
                        i,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ',
                      )
                      .concat(l, 'px ')
                      .concat(n, ';\n    '),
                  'padding' === r &&
                    'padding-right: '.concat(l, 'px ').concat(n, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .',
              )
              .concat(eo, ' {\n    right: ')
              .concat(l, 'px ')
              .concat(n, ';\n  }\n  \n  .')
              .concat(ea, ' {\n    margin-right: ')
              .concat(l, 'px ')
              .concat(n, ';\n  }\n  \n  .')
              .concat(eo, ' .')
              .concat(eo, ' {\n    right: 0 ')
              .concat(n, ';\n  }\n  \n  .')
              .concat(ea, ' .')
              .concat(ea, ' {\n    margin-right: 0 ')
              .concat(n, ';\n  }\n  \n  body[')
              .concat(eE, '] {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(l, 'px;\n  }\n')
          );
        },
        eC = function () {
          var e = parseInt(document.body.getAttribute(eE) || '0', 10);
          return isFinite(e) ? e : 0;
        },
        eR = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(eE, (eC() + 1).toString()),
              function () {
                var e = eC() - 1;
                e <= 0
                  ? document.body.removeAttribute(eE)
                  : document.body.setAttribute(eE, e.toString());
              }
            );
          }, []);
        },
        eT = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            o = void 0 === n ? 'margin' : n;
          eR();
          var i = a.useMemo(
            function () {
              return eb(o);
            },
            [o],
          );
          return a.createElement(ex, {
            styles: eS(i, !t, o, r ? '' : '!important'),
          });
        },
        ek = !1;
      if ('undefined' != typeof window)
        try {
          var eM = Object.defineProperty({}, 'passive', {
            get: function () {
              return (ek = !0), !0;
            },
          });
          window.addEventListener('test', eM, eM),
            window.removeEventListener('test', eM, eM);
        } catch (e) {
          ek = !1;
        }
      var eP = !!ek && { passive: !1 },
        ej = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var r = window.getComputedStyle(e);
          return (
            'hidden' !== r[t] &&
            (r.overflowY !== r.overflowX ||
              'TEXTAREA' === e.tagName ||
              'visible' !== r[t])
          );
        },
        eL = function (e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              eA(e, n))
            ) {
              var o = eD(e, n);
              if (o[1] > o[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== r.body);
          return !1;
        },
        eA = function (e, t) {
          return 'v' === e ? ej(t, 'overflowY') : ej(t, 'overflowX');
        },
        eD = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        eN = function (e, t, r, n, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === a ? -1 : 1),
            l = i * n,
            s = r.target,
            c = t.contains(s),
            u = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            var m = eD(e, s),
              v = m[0],
              h = m[1] - m[2] - i * v;
            (v || h) && eA(e, s) && ((f += h), (p += v)),
              (s = s instanceof ShadowRoot ? s.host : s.parentNode);
          } while (
            (!c && s !== document.body) ||
            (c && (t.contains(s) || t === s))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (u = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (u = !0),
            u
          );
        },
        e_ = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        eO = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eI = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        eF = 0,
        eW = [];
      let eU =
        ((n = function (e) {
          var t = a.useRef([]),
            r = a.useRef([0, 0]),
            n = a.useRef(),
            o = a.useState(eF++)[0],
            i = a.useState(eh)[0],
            l = a.useRef(e);
          a.useEffect(
            function () {
              l.current = e;
            },
            [e],
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(o));
                  var t = (function (e, t, r) {
                    if (r || 2 == arguments.length)
                      for (var n, o = 0, a = t.length; o < a; o++)
                        (!n && o in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, o)),
                          (n[o] = t[o]));
                    return e.concat(n || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(eI), !0).filter(
                    Boolean,
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        'block-interactivity-'.concat(o),
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            'allow-interactivity-'.concat(o),
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards],
            );
          var s = a.useCallback(function (e, t) {
              if (
                ('touches' in e && 2 === e.touches.length) ||
                ('wheel' === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                a = e_(e),
                i = r.current,
                s = 'deltaX' in e ? e.deltaX : i[0] - a[0],
                c = 'deltaY' in e ? e.deltaY : i[1] - a[1],
                u = e.target,
                d = Math.abs(s) > Math.abs(c) ? 'h' : 'v';
              if ('touches' in e && 'h' === d && 'range' === u.type) return !1;
              var f = eL(d, u);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = eL(d, u))),
                !f)
              )
                return !1;
              if (
                (!n.current &&
                  'changedTouches' in e &&
                  (s || c) &&
                  (n.current = o),
                !o)
              )
                return !0;
              var p = n.current || o;
              return eN(p, t, e, 'h' === p ? s : c, !0);
            }, []),
            c = a.useCallback(function (e) {
              if (eW.length && eW[eW.length - 1] === i) {
                var r = 'deltaY' in e ? eO(e) : e_(e),
                  n = t.current.filter(function (t) {
                    var n;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (n = t.delta)[0] === r[0] &&
                      n[1] === r[1]
                    );
                  })[0];
                if (n && n.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!n) {
                  var o = (l.current.shards || [])
                    .map(eI)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? s(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            u = a.useCallback(function (e, r, n, o) {
              var a = {
                name: e,
                delta: r,
                target: n,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(n),
              };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            d = a.useCallback(function (e) {
              (r.current = e_(e)), (n.current = void 0);
            }, []),
            f = a.useCallback(function (t) {
              u(t.type, eO(t), t.target, s(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              u(t.type, e_(t), t.target, s(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              eW.push(i),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener('wheel', c, eP),
              document.addEventListener('touchmove', c, eP),
              document.addEventListener('touchstart', d, eP),
              function () {
                (eW = eW.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener('wheel', c, eP),
                  document.removeEventListener('touchmove', c, eP),
                  document.removeEventListener('touchstart', d, eP);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            v = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            v
              ? a.createElement(i, {
                  styles: '\n  .block-interactivity-'
                    .concat(
                      o,
                      ' {pointer-events: none;}\n  .allow-interactivity-',
                    )
                    .concat(o, ' {pointer-events: all;}\n'),
                })
              : null,
            m ? a.createElement(eT, { gapMode: e.gapMode }) : null,
          );
        }),
        eu.useMedium(n),
        ep);
      var eK = a.forwardRef(function (e, t) {
        return a.createElement(ef, er({}, e, { ref: t, sideCar: eU }));
      });
      eK.classNames = ef.classNames;
      var eB = ['Enter', ' '],
        eH = ['ArrowUp', 'PageDown', 'End'],
        ez = ['ArrowDown', 'PageUp', 'Home', ...eH],
        eG = { ltr: [...eB, 'ArrowRight'], rtl: [...eB, 'ArrowLeft'] },
        eX = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
        eY = 'Menu',
        [eV, eq, eZ] = p(eY),
        [eJ, e$] = (0, s.A)(eY, [eZ, P.Bk, W]),
        eQ = (0, P.Bk)(),
        e0 = W(),
        [e1, e5] = eJ(eY),
        [e2, e3] = eJ(eY),
        e6 = (e) => {
          let {
              __scopeMenu: t,
              open: r = !1,
              children: n,
              dir: o,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            s = eQ(t),
            [c, u] = a.useState(null),
            d = a.useRef(!1),
            p = (0, w.c)(i),
            v = (0, m.jH)(o);
          return (
            a.useEffect(() => {
              let e = () => {
                  (d.current = !0),
                    document.addEventListener('pointerdown', t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener('pointermove', t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (d.current = !1);
              return (
                document.addEventListener('keydown', e, { capture: !0 }),
                () => {
                  document.removeEventListener('keydown', e, { capture: !0 }),
                    document.removeEventListener('pointerdown', t, {
                      capture: !0,
                    }),
                    document.removeEventListener('pointermove', t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, f.jsx)(P.bL, {
              ...s,
              children: (0, f.jsx)(e1, {
                scope: t,
                open: r,
                onOpenChange: p,
                content: c,
                onContentChange: u,
                children: (0, f.jsx)(e2, {
                  scope: t,
                  onClose: a.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: d,
                  dir: v,
                  modal: l,
                  children: n,
                }),
              }),
            })
          );
        };
      e6.displayName = eY;
      var e8 = a.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = eQ(r);
        return (0, f.jsx)(P.Mz, { ...o, ...n, ref: t });
      });
      e8.displayName = 'MenuAnchor';
      var e9 = 'MenuPortal',
        [e4, e7] = eJ(e9, { forceMount: void 0 }),
        te = (e) => {
          let { __scopeMenu: t, forceMount: r, children: n, container: o } = e,
            a = e5(e9, t);
          return (0, f.jsx)(e4, {
            scope: t,
            forceMount: r,
            children: (0, f.jsx)(L.C, {
              present: r || a.open,
              children: (0, f.jsx)(j.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      te.displayName = e9;
      var tt = 'MenuContent',
        [tr, tn] = eJ(tt),
        to = a.forwardRef((e, t) => {
          let r = e7(tt, e.__scopeMenu),
            { forceMount: n = r.forceMount, ...o } = e,
            a = e5(tt, e.__scopeMenu),
            i = e3(tt, e.__scopeMenu);
          return (0, f.jsx)(eV.Provider, {
            scope: e.__scopeMenu,
            children: (0, f.jsx)(L.C, {
              present: n || a.open,
              children: (0, f.jsx)(eV.Slot, {
                scope: e.__scopeMenu,
                children: i.modal
                  ? (0, f.jsx)(ta, { ...o, ref: t })
                  : (0, f.jsx)(ti, { ...o, ref: t }),
              }),
            }),
          });
        }),
        ta = a.forwardRef((e, t) => {
          let r = e5(tt, e.__scopeMenu),
            n = a.useRef(null),
            o = (0, l.s)(t, n);
          return (
            a.useEffect(() => {
              let e = n.current;
              if (e) return et(e);
            }, []),
            (0, f.jsx)(tl, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: r.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, i.m)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 },
              ),
              onDismiss: () => r.onOpenChange(!1),
            })
          );
        }),
        ti = a.forwardRef((e, t) => {
          let r = e5(tt, e.__scopeMenu);
          return (0, f.jsx)(tl, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => r.onOpenChange(!1),
          });
        }),
        tl = a.forwardRef((e, t) => {
          let {
              __scopeMenu: r,
              loop: n = !1,
              trapFocus: o,
              onOpenAutoFocus: s,
              onCloseAutoFocus: c,
              disableOutsidePointerEvents: u,
              onEntryFocus: p,
              onEscapeKeyDown: m,
              onPointerDownOutside: w,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: x,
              disableOutsideScroll: S,
              ...C
            } = e,
            R = e5(tt, r),
            T = e3(tt, r),
            k = eQ(r),
            M = e0(r),
            j = eq(r),
            [L, A] = a.useState(null),
            D = a.useRef(null),
            N = (0, l.s)(t, D, R.onContentChange),
            _ = a.useRef(0),
            O = a.useRef(''),
            I = a.useRef(0),
            F = a.useRef(null),
            W = a.useRef('right'),
            U = a.useRef(0),
            K = S ? eK : a.Fragment,
            H = S ? { as: d.DX, allowPinchZoom: !0 } : void 0,
            z = (e) => {
              var t, r;
              let n = O.current + e,
                o = j().filter((e) => !e.disabled),
                a = document.activeElement,
                i =
                  null === (t = o.find((e) => e.ref.current === a)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                l = (function (e, t, r) {
                  var n;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    a =
                      ((n = Math.max(r ? e.indexOf(r) : -1, 0)),
                      e.map((t, r) => e[(n + r) % e.length]));
                  1 === o.length && (a = a.filter((e) => e !== r));
                  let i = a.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase()),
                  );
                  return i !== r ? i : void 0;
                })(
                  o.map((e) => e.textValue),
                  n,
                  i,
                ),
                s =
                  null === (r = o.find((e) => e.textValue === l)) ||
                  void 0 === r
                    ? void 0
                    : r.ref.current;
              !(function e(t) {
                (O.current = t),
                  window.clearTimeout(_.current),
                  '' !== t && (_.current = window.setTimeout(() => e(''), 1e3));
              })(n),
                s && setTimeout(() => s.focus());
            };
          a.useEffect(() => () => window.clearTimeout(_.current), []),
            a.useEffect(() => {
              var e, t;
              let r = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement(
                  'afterbegin',
                  null !== (e = r[0]) && void 0 !== e ? e : g(),
                ),
                document.body.insertAdjacentElement(
                  'beforeend',
                  null !== (t = r[1]) && void 0 !== t ? t : g(),
                ),
                h++,
                () => {
                  1 === h &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach((e) => e.remove()),
                    h--;
                }
              );
            }, []);
          let G = a.useCallback((e) => {
            var t, r;
            return (
              W.current ===
                (null === (t = F.current) || void 0 === t ? void 0 : t.side) &&
              (function (e, t) {
                return (
                  !!t &&
                  (function (e, t) {
                    let { x: r, y: n } = e,
                      o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      let i = t[e].x,
                        l = t[e].y,
                        s = t[a].x,
                        c = t[a].y;
                      l > n != c > n &&
                        r < ((s - i) * (n - l)) / (c - l) + i &&
                        (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, t)
                );
              })(e, null === (r = F.current) || void 0 === r ? void 0 : r.area)
            );
          }, []);
          return (0, f.jsx)(tr, {
            scope: r,
            searchRef: O,
            onItemEnter: a.useCallback(
              (e) => {
                G(e) && e.preventDefault();
              },
              [G],
            ),
            onItemLeave: a.useCallback(
              (e) => {
                var t;
                G(e) ||
                  (null === (t = D.current) || void 0 === t || t.focus(),
                  A(null));
              },
              [G],
            ),
            onTriggerLeave: a.useCallback(
              (e) => {
                G(e) && e.preventDefault();
              },
              [G],
            ),
            pointerGraceTimerRef: I,
            onPointerGraceIntentChange: a.useCallback((e) => {
              F.current = e;
            }, []),
            children: (0, f.jsx)(K, {
              ...H,
              children: (0, f.jsx)(E, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: (0, i.m)(s, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = D.current) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: c,
                children: (0, f.jsx)(v.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: u,
                  onEscapeKeyDown: m,
                  onPointerDownOutside: w,
                  onFocusOutside: y,
                  onInteractOutside: b,
                  onDismiss: x,
                  children: (0, f.jsx)(B, {
                    asChild: !0,
                    ...M,
                    dir: T.dir,
                    orientation: 'vertical',
                    loop: n,
                    currentTabStopId: L,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: (0, i.m)(p, (e) => {
                      T.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, f.jsx)(P.UC, {
                      role: 'menu',
                      'aria-orientation': 'vertical',
                      'data-state': t_(R.open),
                      'data-radix-menu-content': '',
                      dir: T.dir,
                      ...k,
                      ...C,
                      ref: N,
                      style: { outline: 'none', ...C.style },
                      onKeyDown: (0, i.m)(C.onKeyDown, (e) => {
                        let t =
                            e.target.closest('[data-radix-menu-content]') ===
                            e.currentTarget,
                          r = e.ctrlKey || e.altKey || e.metaKey,
                          n = 1 === e.key.length;
                        t &&
                          ('Tab' === e.key && e.preventDefault(),
                          !r && n && z(e.key));
                        let o = D.current;
                        if (e.target !== o || !ez.includes(e.key)) return;
                        e.preventDefault();
                        let a = j()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        eH.includes(e.key) && a.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let r of e)
                              if (
                                r === t ||
                                (r.focus(), document.activeElement !== t)
                              )
                                return;
                          })(a);
                      }),
                      onBlur: (0, i.m)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(_.current), (O.current = ''));
                      }),
                      onPointerMove: (0, i.m)(
                        e.onPointerMove,
                        tF((e) => {
                          let t = e.target,
                            r = U.current !== e.clientX;
                          if (e.currentTarget.contains(t) && r) {
                            let t = e.clientX > U.current ? 'right' : 'left';
                            (W.current = t), (U.current = e.clientX);
                          }
                        }),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      to.displayName = tt;
      var ts = a.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, f.jsx)(u.sG.div, { role: 'group', ...n, ref: t });
      });
      ts.displayName = 'MenuGroup';
      var tc = a.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, f.jsx)(u.sG.div, { ...n, ref: t });
      });
      tc.displayName = 'MenuLabel';
      var tu = 'MenuItem',
        td = 'menu.itemSelect',
        tf = a.forwardRef((e, t) => {
          let { disabled: r = !1, onSelect: n, ...o } = e,
            s = a.useRef(null),
            c = e3(tu, e.__scopeMenu),
            d = tn(tu, e.__scopeMenu),
            p = (0, l.s)(t, s),
            m = a.useRef(!1);
          return (0, f.jsx)(tp, {
            ...o,
            ref: p,
            disabled: r,
            onClick: (0, i.m)(e.onClick, () => {
              let e = s.current;
              if (!r && e) {
                let t = new CustomEvent(td, { bubbles: !0, cancelable: !0 });
                e.addEventListener(td, (e) => (null == n ? void 0 : n(e)), {
                  once: !0,
                }),
                  (0, u.hO)(e, t),
                  t.defaultPrevented ? (m.current = !1) : c.onClose();
              }
            }),
            onPointerDown: (t) => {
              var r;
              null === (r = e.onPointerDown) || void 0 === r || r.call(e, t),
                (m.current = !0);
            },
            onPointerUp: (0, i.m)(e.onPointerUp, (e) => {
              var t;
              m.current ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.click();
            }),
            onKeyDown: (0, i.m)(e.onKeyDown, (e) => {
              let t = '' !== d.searchRef.current;
              !r &&
                (!t || ' ' !== e.key) &&
                eB.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault());
            }),
          });
        });
      tf.displayName = tu;
      var tp = a.forwardRef((e, t) => {
          let { __scopeMenu: r, disabled: n = !1, textValue: o, ...s } = e,
            c = tn(tu, r),
            d = e0(r),
            p = a.useRef(null),
            m = (0, l.s)(t, p),
            [v, h] = a.useState(!1),
            [g, w] = a.useState('');
          return (
            a.useEffect(() => {
              let e = p.current;
              if (e) {
                var t;
                w(
                  (null !== (t = e.textContent) && void 0 !== t
                    ? t
                    : ''
                  ).trim(),
                );
              }
            }, [s.children]),
            (0, f.jsx)(eV.ItemSlot, {
              scope: r,
              disabled: n,
              textValue: null != o ? o : g,
              children: (0, f.jsx)(G, {
                asChild: !0,
                ...d,
                focusable: !n,
                children: (0, f.jsx)(u.sG.div, {
                  role: 'menuitem',
                  'data-highlighted': v ? '' : void 0,
                  'aria-disabled': n || void 0,
                  'data-disabled': n ? '' : void 0,
                  ...s,
                  ref: m,
                  onPointerMove: (0, i.m)(
                    e.onPointerMove,
                    tF((e) => {
                      n
                        ? c.onItemLeave(e)
                        : (c.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    }),
                  ),
                  onPointerLeave: (0, i.m)(
                    e.onPointerLeave,
                    tF((e) => c.onItemLeave(e)),
                  ),
                  onFocus: (0, i.m)(e.onFocus, () => h(!0)),
                  onBlur: (0, i.m)(e.onBlur, () => h(!1)),
                }),
              }),
            })
          );
        }),
        tm = a.forwardRef((e, t) => {
          let { checked: r = !1, onCheckedChange: n, ...o } = e;
          return (0, f.jsx)(tE, {
            scope: e.__scopeMenu,
            checked: r,
            children: (0, f.jsx)(tf, {
              role: 'menuitemcheckbox',
              'aria-checked': tO(r) ? 'mixed' : r,
              ...o,
              ref: t,
              'data-state': tI(r),
              onSelect: (0, i.m)(
                o.onSelect,
                () => (null == n ? void 0 : n(!!tO(r) || !r)),
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      tm.displayName = 'MenuCheckboxItem';
      var tv = 'MenuRadioGroup',
        [th, tg] = eJ(tv, { value: void 0, onValueChange: () => {} }),
        tw = a.forwardRef((e, t) => {
          let { value: r, onValueChange: n, ...o } = e,
            a = (0, w.c)(n);
          return (0, f.jsx)(th, {
            scope: e.__scopeMenu,
            value: r,
            onValueChange: a,
            children: (0, f.jsx)(ts, { ...o, ref: t }),
          });
        });
      tw.displayName = tv;
      var ty = 'MenuRadioItem',
        tb = a.forwardRef((e, t) => {
          let { value: r, ...n } = e,
            o = tg(ty, e.__scopeMenu),
            a = r === o.value;
          return (0, f.jsx)(tE, {
            scope: e.__scopeMenu,
            checked: a,
            children: (0, f.jsx)(tf, {
              role: 'menuitemradio',
              'aria-checked': a,
              ...n,
              ref: t,
              'data-state': tI(a),
              onSelect: (0, i.m)(
                n.onSelect,
                () => {
                  var e;
                  return null === (e = o.onValueChange) || void 0 === e
                    ? void 0
                    : e.call(o, r);
                },
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      tb.displayName = ty;
      var tx = 'MenuItemIndicator',
        [tE, tS] = eJ(tx, { checked: !1 }),
        tC = a.forwardRef((e, t) => {
          let { __scopeMenu: r, forceMount: n, ...o } = e,
            a = tS(tx, r);
          return (0, f.jsx)(L.C, {
            present: n || tO(a.checked) || !0 === a.checked,
            children: (0, f.jsx)(u.sG.span, {
              ...o,
              ref: t,
              'data-state': tI(a.checked),
            }),
          });
        });
      tC.displayName = tx;
      var tR = a.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, f.jsx)(u.sG.div, {
          role: 'separator',
          'aria-orientation': 'horizontal',
          ...n,
          ref: t,
        });
      });
      tR.displayName = 'MenuSeparator';
      var tT = a.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = eQ(r);
        return (0, f.jsx)(P.i3, { ...o, ...n, ref: t });
      });
      tT.displayName = 'MenuArrow';
      var tk = 'MenuSub',
        [tM, tP] = eJ(tk),
        tj = (e) => {
          let {
              __scopeMenu: t,
              children: r,
              open: n = !1,
              onOpenChange: o,
            } = e,
            i = e5(tk, t),
            l = eQ(t),
            [s, c] = a.useState(null),
            [u, d] = a.useState(null),
            p = (0, w.c)(o);
          return (
            a.useEffect(
              () => (!1 === i.open && p(!1), () => p(!1)),
              [i.open, p],
            ),
            (0, f.jsx)(P.bL, {
              ...l,
              children: (0, f.jsx)(e1, {
                scope: t,
                open: n,
                onOpenChange: p,
                content: u,
                onContentChange: d,
                children: (0, f.jsx)(tM, {
                  scope: t,
                  contentId: (0, M.B)(),
                  triggerId: (0, M.B)(),
                  trigger: s,
                  onTriggerChange: c,
                  children: r,
                }),
              }),
            })
          );
        };
      tj.displayName = tk;
      var tL = 'MenuSubTrigger',
        tA = a.forwardRef((e, t) => {
          let r = e5(tL, e.__scopeMenu),
            n = e3(tL, e.__scopeMenu),
            o = tP(tL, e.__scopeMenu),
            s = tn(tL, e.__scopeMenu),
            c = a.useRef(null),
            { pointerGraceTimerRef: u, onPointerGraceIntentChange: d } = s,
            p = { __scopeMenu: e.__scopeMenu },
            m = a.useCallback(() => {
              c.current && window.clearTimeout(c.current), (c.current = null);
            }, []);
          return (
            a.useEffect(() => m, [m]),
            a.useEffect(() => {
              let e = u.current;
              return () => {
                window.clearTimeout(e), d(null);
              };
            }, [u, d]),
            (0, f.jsx)(e8, {
              asChild: !0,
              ...p,
              children: (0, f.jsx)(tp, {
                id: o.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': r.open,
                'aria-controls': o.contentId,
                'data-state': t_(r.open),
                ...e,
                ref: (0, l.t)(t, o.onTriggerChange),
                onClick: (t) => {
                  var n;
                  null === (n = e.onClick) || void 0 === n || n.call(e, t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
                },
                onPointerMove: (0, i.m)(
                  e.onPointerMove,
                  tF((t) => {
                    s.onItemEnter(t),
                      t.defaultPrevented ||
                        e.disabled ||
                        r.open ||
                        c.current ||
                        (s.onPointerGraceIntentChange(null),
                        (c.current = window.setTimeout(() => {
                          r.onOpenChange(!0), m();
                        }, 100)));
                  }),
                ),
                onPointerLeave: (0, i.m)(
                  e.onPointerLeave,
                  tF((e) => {
                    var t, n;
                    m();
                    let o =
                      null === (t = r.content) || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect();
                    if (o) {
                      let t =
                          null === (n = r.content) || void 0 === n
                            ? void 0
                            : n.dataset.side,
                        a = 'right' === t,
                        i = o[a ? 'left' : 'right'],
                        l = o[a ? 'right' : 'left'];
                      s.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (a ? -5 : 5), y: e.clientY },
                          { x: i, y: o.top },
                          { x: l, y: o.top },
                          { x: l, y: o.bottom },
                          { x: i, y: o.bottom },
                        ],
                        side: t,
                      }),
                        window.clearTimeout(u.current),
                        (u.current = window.setTimeout(
                          () => s.onPointerGraceIntentChange(null),
                          300,
                        ));
                    } else {
                      if ((s.onTriggerLeave(e), e.defaultPrevented)) return;
                      s.onPointerGraceIntentChange(null);
                    }
                  }),
                ),
                onKeyDown: (0, i.m)(e.onKeyDown, (t) => {
                  let o = '' !== s.searchRef.current;
                  if (
                    !e.disabled &&
                    (!o || ' ' !== t.key) &&
                    eG[n.dir].includes(t.key)
                  ) {
                    var a;
                    r.onOpenChange(!0),
                      null === (a = r.content) || void 0 === a || a.focus(),
                      t.preventDefault();
                  }
                }),
              }),
            })
          );
        });
      tA.displayName = tL;
      var tD = 'MenuSubContent',
        tN = a.forwardRef((e, t) => {
          let r = e7(tt, e.__scopeMenu),
            { forceMount: n = r.forceMount, ...o } = e,
            s = e5(tt, e.__scopeMenu),
            c = e3(tt, e.__scopeMenu),
            u = tP(tD, e.__scopeMenu),
            d = a.useRef(null),
            p = (0, l.s)(t, d);
          return (0, f.jsx)(eV.Provider, {
            scope: e.__scopeMenu,
            children: (0, f.jsx)(L.C, {
              present: n || s.open,
              children: (0, f.jsx)(eV.Slot, {
                scope: e.__scopeMenu,
                children: (0, f.jsx)(tl, {
                  id: u.contentId,
                  'aria-labelledby': u.triggerId,
                  ...o,
                  ref: p,
                  align: 'start',
                  side: 'rtl' === c.dir ? 'left' : 'right',
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var t;
                    c.isUsingKeyboardRef.current &&
                      (null === (t = d.current) || void 0 === t || t.focus()),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, i.m)(e.onFocusOutside, (e) => {
                    e.target !== u.trigger && s.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: (0, i.m)(e.onEscapeKeyDown, (e) => {
                    c.onClose(), e.preventDefault();
                  }),
                  onKeyDown: (0, i.m)(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      r = eX[c.dir].includes(e.key);
                    if (t && r) {
                      var n;
                      s.onOpenChange(!1),
                        null === (n = u.trigger) || void 0 === n || n.focus(),
                        e.preventDefault();
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function t_(e) {
        return e ? 'open' : 'closed';
      }
      function tO(e) {
        return 'indeterminate' === e;
      }
      function tI(e) {
        return tO(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      function tF(e) {
        return (t) => ('mouse' === t.pointerType ? e(t) : void 0);
      }
      tN.displayName = tD;
      var tW = 'DropdownMenu',
        [tU, tK] = (0, s.A)(tW, [e$]),
        tB = e$(),
        [tH, tz] = tU(tW),
        tG = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: r,
              dir: n,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              modal: s = !0,
            } = e,
            u = tB(t),
            d = a.useRef(null),
            [p = !1, m] = (0, c.i)({ prop: o, defaultProp: i, onChange: l });
          return (0, f.jsx)(tH, {
            scope: t,
            triggerId: (0, M.B)(),
            triggerRef: d,
            contentId: (0, M.B)(),
            open: p,
            onOpenChange: m,
            onOpenToggle: a.useCallback(() => m((e) => !e), [m]),
            modal: s,
            children: (0, f.jsx)(e6, {
              ...u,
              open: p,
              onOpenChange: m,
              dir: n,
              modal: s,
              children: r,
            }),
          });
        };
      tG.displayName = tW;
      var tX = 'DropdownMenuTrigger',
        tY = a.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e,
            a = tz(tX, r),
            s = tB(r);
          return (0, f.jsx)(e8, {
            asChild: !0,
            ...s,
            children: (0, f.jsx)(u.sG.button, {
              type: 'button',
              id: a.triggerId,
              'aria-haspopup': 'menu',
              'aria-expanded': a.open,
              'aria-controls': a.open ? a.contentId : void 0,
              'data-state': a.open ? 'open' : 'closed',
              'data-disabled': n ? '' : void 0,
              disabled: n,
              ...o,
              ref: (0, l.t)(t, a.triggerRef),
              onPointerDown: (0, i.m)(e.onPointerDown, (e) => {
                n ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (a.onOpenToggle(), a.open || e.preventDefault());
              }),
              onKeyDown: (0, i.m)(e.onKeyDown, (e) => {
                !n &&
                  (['Enter', ' '].includes(e.key) && a.onOpenToggle(),
                  'ArrowDown' === e.key && a.onOpenChange(!0),
                  ['Enter', ' ', 'ArrowDown'].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      tY.displayName = tX;
      var tV = (e) => {
        let { __scopeDropdownMenu: t, ...r } = e,
          n = tB(t);
        return (0, f.jsx)(te, { ...n, ...r });
      };
      tV.displayName = 'DropdownMenuPortal';
      var tq = 'DropdownMenuContent',
        tZ = a.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = tz(tq, r),
            l = tB(r),
            s = a.useRef(!1);
          return (0, f.jsx)(to, {
            id: o.contentId,
            'aria-labelledby': o.triggerId,
            ...l,
            ...n,
            ref: t,
            onCloseAutoFocus: (0, i.m)(e.onCloseAutoFocus, (e) => {
              var t;
              s.current ||
                null === (t = o.triggerRef.current) ||
                void 0 === t ||
                t.focus(),
                (s.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: (0, i.m)(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey,
                n = 2 === t.button || r;
              (!o.modal || n) && (s.current = !0);
            }),
            style: {
              ...e.style,
              '--radix-dropdown-menu-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-dropdown-menu-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-dropdown-menu-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-dropdown-menu-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-dropdown-menu-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          });
        });
      tZ.displayName = tq;
      var tJ = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(ts, { ...o, ...n, ref: t });
      });
      tJ.displayName = 'DropdownMenuGroup';
      var t$ = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tc, { ...o, ...n, ref: t });
      });
      t$.displayName = 'DropdownMenuLabel';
      var tQ = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tf, { ...o, ...n, ref: t });
      });
      tQ.displayName = 'DropdownMenuItem';
      var t0 = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tm, { ...o, ...n, ref: t });
      });
      t0.displayName = 'DropdownMenuCheckboxItem';
      var t1 = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tw, { ...o, ...n, ref: t });
      });
      t1.displayName = 'DropdownMenuRadioGroup';
      var t5 = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tb, { ...o, ...n, ref: t });
      });
      t5.displayName = 'DropdownMenuRadioItem';
      var t2 = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tC, { ...o, ...n, ref: t });
      });
      t2.displayName = 'DropdownMenuItemIndicator';
      var t3 = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tR, { ...o, ...n, ref: t });
      });
      (t3.displayName = 'DropdownMenuSeparator'),
        (a.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = tB(r);
          return (0, f.jsx)(tT, { ...o, ...n, ref: t });
        }).displayName = 'DropdownMenuArrow');
      var t6 = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tA, { ...o, ...n, ref: t });
      });
      t6.displayName = 'DropdownMenuSubTrigger';
      var t8 = a.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = tB(r);
        return (0, f.jsx)(tN, {
          ...o,
          ...n,
          ref: t,
          style: {
            ...e.style,
            '--radix-dropdown-menu-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-dropdown-menu-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-dropdown-menu-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-dropdown-menu-trigger-width':
              'var(--radix-popper-anchor-width)',
            '--radix-dropdown-menu-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
        });
      });
      t8.displayName = 'DropdownMenuSubContent';
      var t9 = tG,
        t4 = tY,
        t7 = tV,
        re = tZ,
        rt = tJ,
        rr = t$,
        rn = tQ,
        ro = t0,
        ra = t1,
        ri = t5,
        rl = t2,
        rs = t3,
        rc = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: r,
              open: n,
              onOpenChange: o,
              defaultOpen: a,
            } = e,
            i = tB(t),
            [l = !1, s] = (0, c.i)({ prop: n, defaultProp: a, onChange: o });
          return (0, f.jsx)(tj, {
            ...i,
            open: l,
            onOpenChange: s,
            children: r,
          });
        },
        ru = t6,
        rd = t8;
    },
    5192: (e, t, r) => {
      'use strict';
      var n = r(859);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, a, i) {
            if (i !== n) {
              var l = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    5299: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: 'normal' },
        className: '__className_d65c78',
      };
    },
    6838: (e, t, r) => {
      'use strict';
      r.d(t, { C1: () => x, bL: () => b });
      var n = r(2115),
        o = r(8166),
        a = r(3360),
        i = r(5155),
        l = 'Progress',
        [s, c] = (0, o.A)(l),
        [u, d] = s(l),
        f = n.forwardRef((e, t) => {
          var r, n, o, l;
          let {
            __scopeProgress: s,
            value: c = null,
            max: d,
            getValueLabel: f = v,
            ...p
          } = e;
          (d || 0 === d) &&
            !w(d) &&
            console.error(
              ((r = ''.concat(d)),
              (n = 'Progress'),
              'Invalid prop `max` of value `'
                .concat(r, '` supplied to `')
                .concat(
                  n,
                  '`. Only numbers greater than 0 are valid max values. Defaulting to `',
                )
                .concat(100, '`.')),
            );
          let m = w(d) ? d : 100;
          null === c ||
            y(c, m) ||
            console.error(
              ((o = ''.concat(c)),
              (l = 'Progress'),
              'Invalid prop `value` of value `'
                .concat(o, '` supplied to `')
                .concat(
                  l,
                  '`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or ',
                )
                .concat(
                  100,
                  ' if no `max` prop is set)\n  - `null` or `undefined` if the progress is indeterminate.\n\nDefaulting to `null`.',
                )),
            );
          let b = y(c, m) ? c : null,
            x = g(b) ? f(b, m) : void 0;
          return (0, i.jsx)(u, {
            scope: s,
            value: b,
            max: m,
            children: (0, i.jsx)(a.sG.div, {
              'aria-valuemax': m,
              'aria-valuemin': 0,
              'aria-valuenow': g(b) ? b : void 0,
              'aria-valuetext': x,
              role: 'progressbar',
              'data-state': h(b, m),
              'data-value': null != b ? b : void 0,
              'data-max': m,
              ...p,
              ref: t,
            }),
          });
        });
      f.displayName = l;
      var p = 'ProgressIndicator',
        m = n.forwardRef((e, t) => {
          var r;
          let { __scopeProgress: n, ...o } = e,
            l = d(p, n);
          return (0, i.jsx)(a.sG.div, {
            'data-state': h(l.value, l.max),
            'data-value': null !== (r = l.value) && void 0 !== r ? r : void 0,
            'data-max': l.max,
            ...o,
            ref: t,
          });
        });
      function v(e, t) {
        return ''.concat(Math.round((e / t) * 100), '%');
      }
      function h(e, t) {
        return null == e ? 'indeterminate' : e === t ? 'complete' : 'loading';
      }
      function g(e) {
        return 'number' == typeof e;
      }
      function w(e) {
        return g(e) && !isNaN(e) && e > 0;
      }
      function y(e, t) {
        return g(e) && !isNaN(e) && e <= t && e >= 0;
      }
      m.displayName = p;
      var b = f,
        x = m;
    },
    6967: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('ChevronRight', [
        ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
      ]);
    },
    7113: (e, t, r) => {
      'use strict';
      r.d(t, { D: () => u, N: () => d });
      var n = r(2115),
        o = (e, t, r, n, o, a, i, l) => {
          let s = document.documentElement,
            c = ['light', 'dark'];
          function u(t) {
            var r;
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let r = 'class' === e,
                n = r && a ? o.map((e) => a[e] || e) : o;
              r
                ? (s.classList.remove(...n), s.classList.add(t))
                : s.setAttribute(e, t);
            }),
              (r = t),
              l && c.includes(r) && (s.style.colorScheme = r);
          }
          if (n) u(n);
          else
            try {
              let e = localStorage.getItem(t) || r,
                n =
                  i && 'system' === e
                    ? window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? 'dark'
                      : 'light'
                    : e;
              u(n);
            } catch (e) {}
        },
        a = ['light', 'dark'],
        i = '(prefers-color-scheme: dark)',
        l = 'undefined' == typeof window,
        s = n.createContext(void 0),
        c = { setTheme: (e) => {}, themes: [] },
        u = () => {
          var e;
          return null != (e = n.useContext(s)) ? e : c;
        },
        d = (e) =>
          n.useContext(s)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(p, { ...e }),
        f = ['light', 'dark'],
        p = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: r = !1,
              enableSystem: o = !0,
              enableColorScheme: l = !0,
              storageKey: c = 'theme',
              themes: u = f,
              defaultTheme: d = o ? 'system' : 'light',
              attribute: p = 'data-theme',
              value: w,
              children: y,
              nonce: b,
              scriptProps: x,
            } = e,
            [E, S] = n.useState(() => v(c, d)),
            [C, R] = n.useState(() => v(c)),
            T = w ? Object.values(w) : u,
            k = n.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                'system' === e && o && (t = g());
                let n = w ? w[t] : t,
                  i = r ? h(b) : null,
                  s = document.documentElement,
                  c = (e) => {
                    'class' === e
                      ? (s.classList.remove(...T), n && s.classList.add(n))
                      : e.startsWith('data-') &&
                        (n ? s.setAttribute(e, n) : s.removeAttribute(e));
                  };
                if ((Array.isArray(p) ? p.forEach(c) : c(p), l)) {
                  let e = a.includes(d) ? d : null,
                    r = a.includes(t) ? t : e;
                  s.style.colorScheme = r;
                }
                null == i || i();
              },
              [b],
            ),
            M = n.useCallback(
              (e) => {
                let t = 'function' == typeof e ? e(E) : e;
                S(t);
                try {
                  localStorage.setItem(c, t);
                } catch (e) {}
              },
              [E],
            ),
            P = n.useCallback(
              (e) => {
                R(g(e)), 'system' === E && o && !t && k('system');
              },
              [E, t],
            );
          n.useEffect(() => {
            let e = window.matchMedia(i);
            return e.addListener(P), P(e), () => e.removeListener(P);
          }, [P]),
            n.useEffect(() => {
              let e = (e) => {
                e.key === c && (e.newValue ? S(e.newValue) : M(d));
              };
              return (
                window.addEventListener('storage', e),
                () => window.removeEventListener('storage', e)
              );
            }, [M]),
            n.useEffect(() => {
              k(null != t ? t : E);
            }, [t, E]);
          let j = n.useMemo(
            () => ({
              theme: E,
              setTheme: M,
              forcedTheme: t,
              resolvedTheme: 'system' === E ? C : E,
              themes: o ? [...u, 'system'] : u,
              systemTheme: o ? C : void 0,
            }),
            [E, M, t, C, o, u],
          );
          return n.createElement(
            s.Provider,
            { value: j },
            n.createElement(m, {
              forcedTheme: t,
              storageKey: c,
              attribute: p,
              enableSystem: o,
              enableColorScheme: l,
              defaultTheme: d,
              value: w,
              themes: u,
              nonce: b,
              scriptProps: x,
            }),
            y,
          );
        },
        m = n.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: r,
              attribute: a,
              enableSystem: i,
              enableColorScheme: l,
              defaultTheme: s,
              value: c,
              themes: u,
              nonce: d,
              scriptProps: f,
            } = e,
            p = JSON.stringify([a, r, s, t, u, c, i, l]).slice(1, -1);
          return n.createElement('script', {
            ...f,
            suppressHydrationWarning: !0,
            nonce: 'undefined' == typeof window ? d : '',
            dangerouslySetInnerHTML: {
              __html: '('.concat(o.toString(), ')(').concat(p, ')'),
            },
          });
        }),
        v = (e, t) => {
          let r;
          if (!l) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        h = (e) => {
          let t = document.createElement('style');
          return (
            e && t.setAttribute('nonce', e),
            t.appendChild(
              document.createTextNode(
                '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
              ),
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        g = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? 'dark' : 'light'
        );
    },
    7353: function (e, t, r) {
      var n, o;
      void 0 !==
        (o =
          'function' ==
          typeof (n = function () {
            var e,
              t,
              r,
              n = {};
            n.version = '0.2.0';
            var o = (n.settings = {
              minimum: 0.08,
              easing: 'ease',
              positionUsing: '',
              speed: 200,
              trickle: !0,
              trickleRate: 0.02,
              trickleSpeed: 800,
              showSpinner: !0,
              barSelector: '[role="bar"]',
              spinnerSelector: '[role="spinner"]',
              parent: 'body',
              template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
            function a(e, t, r) {
              return e < t ? t : e > r ? r : e;
            }
            (n.configure = function (e) {
              var t, r;
              for (t in e)
                void 0 !== (r = e[t]) && e.hasOwnProperty(t) && (o[t] = r);
              return this;
            }),
              (n.status = null),
              (n.set = function (e) {
                var t = n.isStarted();
                (e = a(e, o.minimum, 1)), (n.status = 1 === e ? null : e);
                var r = n.render(!t),
                  s = r.querySelector(o.barSelector),
                  c = o.speed,
                  u = o.easing;
                return (
                  r.offsetWidth,
                  i(function (t) {
                    var a, i, d, f;
                    '' === o.positionUsing &&
                      (o.positionUsing = n.getPositioningCSS()),
                      l(
                        s,
                        ((a = e),
                        (i = c),
                        (d = u),
                        ((f =
                          'translate3d' === o.positionUsing
                            ? {
                                transform:
                                  'translate3d(' + (-1 + a) * 100 + '%,0,0)',
                              }
                            : 'translate' === o.positionUsing
                              ? {
                                  transform:
                                    'translate(' + (-1 + a) * 100 + '%,0)',
                                }
                              : {
                                  'margin-left': (-1 + a) * 100 + '%',
                                }).transition = 'all ' + i + 'ms ' + d),
                        f),
                      ),
                      1 === e
                        ? (l(r, { transition: 'none', opacity: 1 }),
                          r.offsetWidth,
                          setTimeout(function () {
                            l(r, {
                              transition: 'all ' + c + 'ms linear',
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                n.remove(), t();
                              }, c);
                          }, c))
                        : setTimeout(t, c);
                  }),
                  this
                );
              }),
              (n.isStarted = function () {
                return 'number' == typeof n.status;
              }),
              (n.start = function () {
                n.status || n.set(0);
                var e = function () {
                  setTimeout(function () {
                    n.status && (n.trickle(), e());
                  }, o.trickleSpeed);
                };
                return o.trickle && e(), this;
              }),
              (n.done = function (e) {
                return e || n.status
                  ? n.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (n.inc = function (e) {
                var t = n.status;
                return t
                  ? ('number' != typeof e &&
                      (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                    (t = a(t + e, 0, 0.994)),
                    n.set(t))
                  : n.start();
              }),
              (n.trickle = function () {
                return n.inc(Math.random() * o.trickleRate);
              }),
              (e = 0),
              (t = 0),
              (n.promise = function (r) {
                return (
                  r &&
                    'resolved' !== r.state() &&
                    (0 === t && n.start(),
                    e++,
                    t++,
                    r.always(function () {
                      0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                    })),
                  this
                );
              }),
              (n.render = function (e) {
                if (n.isRendered()) return document.getElementById('nprogress');
                c(document.documentElement, 'nprogress-busy');
                var t = document.createElement('div');
                (t.id = 'nprogress'), (t.innerHTML = o.template);
                var r,
                  a = t.querySelector(o.barSelector),
                  i = e ? '-100' : (-1 + (n.status || 0)) * 100,
                  s = document.querySelector(o.parent);
                return (
                  l(a, {
                    transition: 'all 0 linear',
                    transform: 'translate3d(' + i + '%,0,0)',
                  }),
                  !o.showSpinner &&
                    (r = t.querySelector(o.spinnerSelector)) &&
                    f(r),
                  s != document.body && c(s, 'nprogress-custom-parent'),
                  s.appendChild(t),
                  t
                );
              }),
              (n.remove = function () {
                u(document.documentElement, 'nprogress-busy'),
                  u(
                    document.querySelector(o.parent),
                    'nprogress-custom-parent',
                  );
                var e = document.getElementById('nprogress');
                e && f(e);
              }),
              (n.isRendered = function () {
                return !!document.getElementById('nprogress');
              }),
              (n.getPositioningCSS = function () {
                var e = document.body.style,
                  t =
                    'WebkitTransform' in e
                      ? 'Webkit'
                      : 'MozTransform' in e
                        ? 'Moz'
                        : 'msTransform' in e
                          ? 'ms'
                          : 'OTransform' in e
                            ? 'O'
                            : '';
                return t + 'Perspective' in e
                  ? 'translate3d'
                  : t + 'Transform' in e
                    ? 'translate'
                    : 'margin';
              });
            var i =
                ((r = []),
                function (e) {
                  r.push(e),
                    1 == r.length &&
                      (function e() {
                        var t = r.shift();
                        t && t(e);
                      })();
                }),
              l = (function () {
                var e = ['Webkit', 'O', 'Moz', 'ms'],
                  t = {};
                function r(r, n, o) {
                  var a;
                  (n =
                    t[
                      (a = (a = n)
                        .replace(/^-ms-/, 'ms-')
                        .replace(/-([\da-z])/gi, function (e, t) {
                          return t.toUpperCase();
                        }))
                    ] ||
                    (t[a] = (function (t) {
                      var r = document.body.style;
                      if (t in r) return t;
                      for (
                        var n,
                          o = e.length,
                          a = t.charAt(0).toUpperCase() + t.slice(1);
                        o--;

                      )
                        if ((n = e[o] + a) in r) return n;
                      return t;
                    })(a))),
                    (r.style[n] = o);
                }
                return function (e, t) {
                  var n,
                    o,
                    a = arguments;
                  if (2 == a.length)
                    for (n in t)
                      void 0 !== (o = t[n]) &&
                        t.hasOwnProperty(n) &&
                        r(e, n, o);
                  else r(e, a[1], a[2]);
                };
              })();
            function s(e, t) {
              return (
                ('string' == typeof e ? e : d(e)).indexOf(' ' + t + ' ') >= 0
              );
            }
            function c(e, t) {
              var r = d(e),
                n = r + t;
              s(r, t) || (e.className = n.substring(1));
            }
            function u(e, t) {
              var r,
                n = d(e);
              s(e, t) &&
                ((r = n.replace(' ' + t + ' ', ' ')),
                (e.className = r.substring(1, r.length - 1)));
            }
            function d(e) {
              return (' ' + (e.className || '') + ' ').replace(/\s+/gi, ' ');
            }
            function f(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            }
            return n;
          })
            ? n.call(t, r, t, e)
            : n) && (e.exports = o);
    },
    8867: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Check', [
        ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }],
      ]);
    },
  },
]);
