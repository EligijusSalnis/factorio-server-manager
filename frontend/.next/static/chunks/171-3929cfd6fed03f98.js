'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [171],
  {
    767: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('X', [
        ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
        ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
      ]);
    },
    1406: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Square', [
        [
          'rect',
          { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' },
        ],
      ]);
    },
    1594: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('CircleAlert', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
        ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
      ]);
    },
    1719: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('ChevronDown', [
        ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
      ]);
    },
    1773: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('RefreshCw', [
        [
          'path',
          {
            d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8',
            key: 'v9h5vc',
          },
        ],
        ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
        [
          'path',
          {
            d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16',
            key: '3uifl3',
          },
        ],
        ['path', { d: 'M8 16H3v5', key: '1cv678' }],
      ]);
    },
    1902: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('ChevronUp', [
        ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
      ]);
    },
    2920: (e, t, r) => {
      r.d(t, { bL: () => m, zi: () => w });
      var n = r(2115),
        o = r(3610),
        l = r(8068),
        a = r(8166),
        i = r(1488),
        s = r(7510),
        u = r(3360),
        c = r(5155),
        d = 'Switch',
        [p, h] = (0, a.A)(d),
        [y, f] = p(d),
        x = n.forwardRef((e, t) => {
          let {
              __scopeSwitch: r,
              name: a,
              checked: s,
              defaultChecked: d,
              required: p,
              disabled: h,
              value: f = 'on',
              onCheckedChange: x,
              form: v,
              ...g
            } = e,
            [m, w] = n.useState(null),
            C = (0, l.s)(t, (e) => w(e)),
            T = n.useRef(!1),
            A = !m || v || !!m.closest('form'),
            [E = !1, j] = (0, i.i)({ prop: s, defaultProp: d, onChange: x });
          return (0, c.jsxs)(y, {
            scope: r,
            checked: E,
            disabled: h,
            children: [
              (0, c.jsx)(u.sG.button, {
                type: 'button',
                role: 'switch',
                'aria-checked': E,
                'aria-required': p,
                'data-state': b(E),
                'data-disabled': h ? '' : void 0,
                disabled: h,
                value: f,
                ...g,
                ref: C,
                onClick: (0, o.m)(e.onClick, (e) => {
                  j((e) => !e),
                    A &&
                      ((T.current = e.isPropagationStopped()),
                      T.current || e.stopPropagation());
                }),
              }),
              A &&
                (0, c.jsx)(k, {
                  control: m,
                  bubbles: !T.current,
                  name: a,
                  value: f,
                  checked: E,
                  required: p,
                  disabled: h,
                  form: v,
                  style: { transform: 'translateX(-100%)' },
                }),
            ],
          });
        });
      x.displayName = d;
      var v = 'SwitchThumb',
        g = n.forwardRef((e, t) => {
          let { __scopeSwitch: r, ...n } = e,
            o = f(v, r);
          return (0, c.jsx)(u.sG.span, {
            'data-state': b(o.checked),
            'data-disabled': o.disabled ? '' : void 0,
            ...n,
            ref: t,
          });
        });
      g.displayName = v;
      var k = (e) => {
        let { control: t, checked: r, bubbles: o = !0, ...l } = e,
          a = n.useRef(null),
          i = (function (e) {
            let t = n.useRef({ value: e, previous: e });
            return n.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e],
            );
          })(r),
          u = (0, s.X)(t);
        return (
          n.useEffect(() => {
            let e = a.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'checked',
              ).set;
            if (i !== r && t) {
              let n = new Event('click', { bubbles: o });
              t.call(e, r), e.dispatchEvent(n);
            }
          }, [i, r, o]),
          (0, c.jsx)('input', {
            type: 'checkbox',
            'aria-hidden': !0,
            defaultChecked: r,
            ...l,
            tabIndex: -1,
            ref: a,
            style: {
              ...e.style,
              ...u,
              position: 'absolute',
              pointerEvents: 'none',
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function b(e) {
        return e ? 'checked' : 'unchecked';
      }
      var m = x,
        w = g;
    },
    3239: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('CircleCheckBig', [
        ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
        ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
      ]);
    },
    4505: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('LoaderCircle', [
        ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
      ]);
    },
    5375: (e, t, r) => {
      r.d(t, {
        UC: () => F,
        ZL: () => V,
        Kq: () => X,
        bL: () => G,
        l9: () => U,
      });
      var n = r(2115),
        o = r(3610),
        l = r(8068),
        a = r(8166),
        i = r(9674),
        s = r(7668),
        u = r(9895),
        c = r(7323),
        d = r(7028),
        p = r(3360),
        h = r(2317),
        y = r(1488),
        f = r(5155),
        x = n.forwardRef((e, t) =>
          (0, f.jsx)(p.sG.span, {
            ...e,
            ref: t,
            style: {
              position: 'absolute',
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
              ...e.style,
            },
          }),
        );
      x.displayName = 'VisuallyHidden';
      var [v, g] = (0, a.A)('Tooltip', [u.Bk]),
        k = (0, u.Bk)(),
        b = 'TooltipProvider',
        m = 'tooltip.open',
        [w, C] = v(b),
        T = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: r = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: l = !1,
              children: a,
            } = e,
            [i, s] = n.useState(!0),
            u = n.useRef(!1),
            c = n.useRef(0);
          return (
            n.useEffect(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, f.jsx)(w, {
              scope: t,
              isOpenDelayed: i,
              delayDuration: r,
              onOpen: n.useCallback(() => {
                window.clearTimeout(c.current), s(!1);
              }, []),
              onClose: n.useCallback(() => {
                window.clearTimeout(c.current),
                  (c.current = window.setTimeout(() => s(!0), o));
              }, [o]),
              isPointerInTransitRef: u,
              onPointerInTransitChange: n.useCallback((e) => {
                u.current = e;
              }, []),
              disableHoverableContent: l,
              children: a,
            })
          );
        };
      T.displayName = b;
      var A = 'Tooltip',
        [E, j] = v(A),
        M = (e) => {
          let {
              __scopeTooltip: t,
              children: r,
              open: o,
              defaultOpen: l = !1,
              onOpenChange: a,
              disableHoverableContent: i,
              delayDuration: c,
            } = e,
            d = C(A, e.__scopeTooltip),
            p = k(t),
            [h, x] = n.useState(null),
            v = (0, s.B)(),
            g = n.useRef(0),
            b = null != i ? i : d.disableHoverableContent,
            w = null != c ? c : d.delayDuration,
            T = n.useRef(!1),
            [j = !1, M] = (0, y.i)({
              prop: o,
              defaultProp: l,
              onChange: (e) => {
                e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(m)))
                  : d.onClose(),
                  null == a || a(e);
              },
            }),
            L = n.useMemo(
              () =>
                j ? (T.current ? 'delayed-open' : 'instant-open') : 'closed',
              [j],
            ),
            R = n.useCallback(() => {
              window.clearTimeout(g.current),
                (g.current = 0),
                (T.current = !1),
                M(!0);
            }, [M]),
            P = n.useCallback(() => {
              window.clearTimeout(g.current), (g.current = 0), M(!1);
            }, [M]),
            _ = n.useCallback(() => {
              window.clearTimeout(g.current),
                (g.current = window.setTimeout(() => {
                  (T.current = !0), M(!0), (g.current = 0);
                }, w));
            }, [w, M]);
          return (
            n.useEffect(
              () => () => {
                g.current && (window.clearTimeout(g.current), (g.current = 0));
              },
              [],
            ),
            (0, f.jsx)(u.bL, {
              ...p,
              children: (0, f.jsx)(E, {
                scope: t,
                contentId: v,
                open: j,
                stateAttribute: L,
                trigger: h,
                onTriggerChange: x,
                onTriggerEnter: n.useCallback(() => {
                  d.isOpenDelayed ? _() : R();
                }, [d.isOpenDelayed, _, R]),
                onTriggerLeave: n.useCallback(() => {
                  b ? P() : (window.clearTimeout(g.current), (g.current = 0));
                }, [P, b]),
                onOpen: R,
                onClose: P,
                disableHoverableContent: b,
                children: r,
              }),
            })
          );
        };
      M.displayName = A;
      var L = 'TooltipTrigger',
        R = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...a } = e,
            i = j(L, r),
            s = C(L, r),
            c = k(r),
            d = n.useRef(null),
            h = (0, l.s)(t, d, i.onTriggerChange),
            y = n.useRef(!1),
            x = n.useRef(!1),
            v = n.useCallback(() => (y.current = !1), []);
          return (
            n.useEffect(
              () => () => document.removeEventListener('pointerup', v),
              [v],
            ),
            (0, f.jsx)(u.Mz, {
              asChild: !0,
              ...c,
              children: (0, f.jsx)(p.sG.button, {
                'aria-describedby': i.open ? i.contentId : void 0,
                'data-state': i.stateAttribute,
                ...a,
                ref: h,
                onPointerMove: (0, o.m)(e.onPointerMove, (e) => {
                  'touch' === e.pointerType ||
                    x.current ||
                    s.isPointerInTransitRef.current ||
                    (i.onTriggerEnter(), (x.current = !0));
                }),
                onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                  i.onTriggerLeave(), (x.current = !1);
                }),
                onPointerDown: (0, o.m)(e.onPointerDown, () => {
                  (y.current = !0),
                    document.addEventListener('pointerup', v, { once: !0 });
                }),
                onFocus: (0, o.m)(e.onFocus, () => {
                  y.current || i.onOpen();
                }),
                onBlur: (0, o.m)(e.onBlur, i.onClose),
                onClick: (0, o.m)(e.onClick, i.onClose),
              }),
            })
          );
        });
      R.displayName = L;
      var P = 'TooltipPortal',
        [_, N] = v(P, { forceMount: void 0 }),
        q = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            l = j(P, t);
          return (0, f.jsx)(_, {
            scope: t,
            forceMount: r,
            children: (0, f.jsx)(d.C, {
              present: r || l.open,
              children: (0, f.jsx)(c.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      q.displayName = P;
      var D = 'TooltipContent',
        I = n.forwardRef((e, t) => {
          let r = N(D, e.__scopeTooltip),
            { forceMount: n = r.forceMount, side: o = 'top', ...l } = e,
            a = j(D, e.__scopeTooltip);
          return (0, f.jsx)(d.C, {
            present: n || a.open,
            children: a.disableHoverableContent
              ? (0, f.jsx)(H, { side: o, ...l, ref: t })
              : (0, f.jsx)(O, { side: o, ...l, ref: t }),
          });
        }),
        O = n.forwardRef((e, t) => {
          let r = j(D, e.__scopeTooltip),
            o = C(D, e.__scopeTooltip),
            a = n.useRef(null),
            i = (0, l.s)(t, a),
            [s, u] = n.useState(null),
            { trigger: c, onClose: d } = r,
            p = a.current,
            { onPointerInTransitChange: h } = o,
            y = n.useCallback(() => {
              u(null), h(!1);
            }, [h]),
            x = n.useCallback(
              (e, t) => {
                let r = e.currentTarget,
                  n = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let r = Math.abs(t.top - e.y),
                      n = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      l = Math.abs(t.left - e.x);
                    switch (Math.min(r, n, o, l)) {
                      case l:
                        return 'left';
                      case o:
                        return 'right';
                      case r:
                        return 'top';
                      case n:
                        return 'bottom';
                      default:
                        throw Error('unreachable');
                    }
                  })(n, r.getBoundingClientRect());
                u(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                            ? 1
                            : e.y < t.y
                              ? -1
                              : +!!(e.y > t.y),
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let r = 0; r < e.length; r++) {
                          let n = e[r];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              r = t[t.length - 2];
                            if (
                              (e.x - r.x) * (n.y - r.y) >=
                              (e.y - r.y) * (n.x - r.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(n);
                        }
                        t.pop();
                        let r = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let n = e[t];
                          for (; r.length >= 2; ) {
                            let e = r[r.length - 1],
                              t = r[r.length - 2];
                            if (
                              (e.x - t.x) * (n.y - t.y) >=
                              (e.y - t.y) * (n.x - t.x)
                            )
                              r.pop();
                            else break;
                          }
                          r.push(n);
                        }
                        return (r.pop(),
                        1 === t.length &&
                          1 === r.length &&
                          t[0].x === r[0].x &&
                          t[0].y === r[0].y)
                          ? t
                          : t.concat(r);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        n = [];
                      switch (t) {
                        case 'top':
                          n.push(
                            { x: e.x - r, y: e.y + r },
                            { x: e.x + r, y: e.y + r },
                          );
                          break;
                        case 'bottom':
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x + r, y: e.y - r },
                          );
                          break;
                        case 'left':
                          n.push(
                            { x: e.x + r, y: e.y - r },
                            { x: e.x + r, y: e.y + r },
                          );
                          break;
                        case 'right':
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x - r, y: e.y + r },
                          );
                      }
                      return n;
                    })(n, o),
                    ...(function (e) {
                      let { top: t, right: r, bottom: n, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: r, y: t },
                        { x: r, y: n },
                        { x: o, y: n },
                      ];
                    })(t.getBoundingClientRect()),
                  ]),
                ),
                  h(!0);
              },
              [h],
            );
          return (
            n.useEffect(() => () => y(), [y]),
            n.useEffect(() => {
              if (c && p) {
                let e = (e) => x(e, p),
                  t = (e) => x(e, c);
                return (
                  c.addEventListener('pointerleave', e),
                  p.addEventListener('pointerleave', t),
                  () => {
                    c.removeEventListener('pointerleave', e),
                      p.removeEventListener('pointerleave', t);
                  }
                );
              }
            }, [c, p, x, y]),
            n.useEffect(() => {
              if (s) {
                let e = (e) => {
                  let t = e.target,
                    r = { x: e.clientX, y: e.clientY },
                    n =
                      (null == c ? void 0 : c.contains(t)) ||
                      (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: r, y: n } = e,
                        o = !1;
                      for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                        let a = t[e].x,
                          i = t[e].y,
                          s = t[l].x,
                          u = t[l].y;
                        i > n != u > n &&
                          r < ((s - a) * (n - i)) / (u - i) + a &&
                          (o = !o);
                      }
                      return o;
                    })(r, s);
                  n ? y() : o && (y(), d());
                };
                return (
                  document.addEventListener('pointermove', e),
                  () => document.removeEventListener('pointermove', e)
                );
              }
            }, [c, p, s, d, y]),
            (0, f.jsx)(H, { ...e, ref: i })
          );
        }),
        [S, B] = v(A, { isInside: !1 }),
        H = n.forwardRef((e, t) => {
          let {
              __scopeTooltip: r,
              children: o,
              'aria-label': l,
              onEscapeKeyDown: a,
              onPointerDownOutside: s,
              ...c
            } = e,
            d = j(D, r),
            p = k(r),
            { onClose: y } = d;
          return (
            n.useEffect(
              () => (
                document.addEventListener(m, y),
                () => document.removeEventListener(m, y)
              ),
              [y],
            ),
            n.useEffect(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(d.trigger)) && y();
                };
                return (
                  window.addEventListener('scroll', e, { capture: !0 }),
                  () => window.removeEventListener('scroll', e, { capture: !0 })
                );
              }
            }, [d.trigger, y]),
            (0, f.jsx)(i.qW, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: y,
              children: (0, f.jsxs)(u.UC, {
                'data-state': d.stateAttribute,
                ...p,
                ...c,
                ref: t,
                style: {
                  ...c.style,
                  '--radix-tooltip-content-transform-origin':
                    'var(--radix-popper-transform-origin)',
                  '--radix-tooltip-content-available-width':
                    'var(--radix-popper-available-width)',
                  '--radix-tooltip-content-available-height':
                    'var(--radix-popper-available-height)',
                  '--radix-tooltip-trigger-width':
                    'var(--radix-popper-anchor-width)',
                  '--radix-tooltip-trigger-height':
                    'var(--radix-popper-anchor-height)',
                },
                children: [
                  (0, f.jsx)(h.xV, { children: o }),
                  (0, f.jsx)(S, {
                    scope: r,
                    isInside: !0,
                    children: (0, f.jsx)(x, {
                      id: d.contentId,
                      role: 'tooltip',
                      children: l || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      I.displayName = D;
      var z = 'TooltipArrow';
      n.forwardRef((e, t) => {
        let { __scopeTooltip: r, ...n } = e,
          o = k(r);
        return B(z, r).isInside
          ? null
          : (0, f.jsx)(u.i3, { ...o, ...n, ref: t });
      }).displayName = z;
      var X = T,
        G = M,
        U = R,
        V = q,
        F = I;
    },
    5686: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Trash2', [
        ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
        ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
        ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
        ['line', { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' }],
        ['line', { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' }],
      ]);
    },
    6609: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Terminal', [
        ['polyline', { points: '4 17 10 11 4 5', key: 'akl6gq' }],
        ['line', { x1: '12', x2: '20', y1: '19', y2: '19', key: 'q2wloq' }],
      ]);
    },
    8617: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Info', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'M12 16v-4', key: '1dtifu' }],
        ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
      ]);
    },
    8684: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Upload', [
        [
          'path',
          { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
        ],
        ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
        ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
      ]);
    },
    9191: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(7401).A)('Play', [
        ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
      ]);
    },
  },
]);
