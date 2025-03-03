(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    1151: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 9324, 23)),
        Promise.resolve().then(s.bind(s, 9384)),
        Promise.resolve().then(s.bind(s, 1751)),
        Promise.resolve().then(s.bind(s, 6917)),
        Promise.resolve().then(s.bind(s, 3392)),
        Promise.resolve().then(s.t.bind(s, 5299, 23)),
        Promise.resolve().then(s.t.bind(s, 1325, 23));
    },
    1751: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => j });
      var a = s(5155),
        r = s(7365),
        l = s(7113),
        d = s(2115),
        n = s(2317),
        o = s(1027),
        i = s(9602);
      let c = (0, o.F)(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                  'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
              },
              size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-9 w-9',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          },
        ),
        m = d.forwardRef((e, t) => {
          let { className: s, variant: r, size: l, asChild: d = !1, ...o } = e,
            m = d ? n.DX : 'button';
          return (0, a.jsx)(m, {
            className: (0, i.cn)(c({ variant: r, size: l, className: s })),
            ref: t,
            ...o,
          });
        });
      m.displayName = 'Button';
      var u = s(4684),
        x = s(6967),
        f = s(8867),
        h = s(3565);
      let p = u.bL,
        g = u.l9;
      u.YJ,
        u.ZL,
        u.Pb,
        u.z6,
        (d.forwardRef((e, t) => {
          let { className: s, inset: r, children: l, ...d } = e;
          return (0, a.jsxs)(u.ZP, {
            ref: t,
            className: (0, i.cn)(
              'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
              r && 'pl-8',
              s,
            ),
            ...d,
            children: [l, (0, a.jsx)(x.A, { className: 'ml-auto' })],
          });
        }).displayName = u.ZP.displayName),
        (d.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(u.G5, {
            ref: t,
            className: (0, i.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              s,
            ),
            ...r,
          });
        }).displayName = u.G5.displayName);
      let N = d.forwardRef((e, t) => {
        let { className: s, sideOffset: r = 4, ...l } = e;
        return (0, a.jsx)(u.ZL, {
          children: (0, a.jsx)(u.UC, {
            ref: t,
            sideOffset: r,
            className: (0, i.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              s,
            ),
            ...l,
          }),
        });
      });
      N.displayName = u.UC.displayName;
      let v = d.forwardRef((e, t) => {
        let { className: s, inset: r, ...l } = e;
        return (0, a.jsx)(u.q7, {
          ref: t,
          className: (0, i.cn)(
            'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
            r && 'pl-8',
            s,
          ),
          ...l,
        });
      });
      function j(e) {
        let {} = e,
          { setTheme: t } = (0, l.D)();
        return (0, a.jsxs)(p, {
          children: [
            (0, a.jsx)(g, {
              asChild: !0,
              children: (0, a.jsxs)(m, {
                variant: 'outline',
                size: 'icon',
                children: [
                  (0, a.jsx)(r.gLX, {
                    className:
                      'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:hidden',
                  }),
                  (0, a.jsx)(r.rRK, {
                    className:
                      'h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hidden dark:rotate-0 dark:scale-100 dark:block',
                  }),
                  (0, a.jsx)('span', {
                    className: 'sr-only',
                    children: 'Toggle theme',
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(N, {
              align: 'end',
              children: [
                (0, a.jsx)(v, { onClick: () => t('light'), children: 'Light' }),
                (0, a.jsx)(v, { onClick: () => t('dark'), children: 'Dark' }),
                (0, a.jsx)(v, {
                  onClick: () => t('system'),
                  children: 'System',
                }),
              ],
            }),
          ],
        });
      }
      (v.displayName = u.q7.displayName),
        (d.forwardRef((e, t) => {
          let { className: s, children: r, checked: l, ...d } = e;
          return (0, a.jsxs)(u.H_, {
            ref: t,
            className: (0, i.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              s,
            ),
            checked: l,
            ...d,
            children: [
              (0, a.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, a.jsx)(u.VF, {
                  children: (0, a.jsx)(f.A, { className: 'h-4 w-4' }),
                }),
              }),
              r,
            ],
          });
        }).displayName = u.H_.displayName),
        (d.forwardRef((e, t) => {
          let { className: s, children: r, ...l } = e;
          return (0, a.jsxs)(u.hN, {
            ref: t,
            className: (0, i.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              s,
            ),
            ...l,
            children: [
              (0, a.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, a.jsx)(u.VF, {
                  children: (0, a.jsx)(h.A, {
                    className: 'h-2 w-2 fill-current',
                  }),
                }),
              }),
              r,
            ],
          });
        }).displayName = u.hN.displayName),
        (d.forwardRef((e, t) => {
          let { className: s, inset: r, ...l } = e;
          return (0, a.jsx)(u.JU, {
            ref: t,
            className: (0, i.cn)(
              'px-2 py-1.5 text-sm font-semibold',
              r && 'pl-8',
              s,
            ),
            ...l,
          });
        }).displayName = u.JU.displayName),
        (d.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(u.wv, {
            ref: t,
            className: (0, i.cn)('-mx-1 my-1 h-px bg-muted', s),
            ...r,
          });
        }).displayName = u.wv.displayName);
    },
    3172: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => l });
      var a = s(2651),
        r = s(2818);
      let l = a.A.create({
        baseURL: r.env.NEXT_PUBLIC_API_URL,
        headers: { 'Content-Type': 'application/json' },
      });
    },
    3392: (e, t, s) => {
      'use strict';
      s.d(t, { ScrollArea: () => n });
      var a = s(5155),
        r = s(2115),
        l = s(2341),
        d = s(9602);
      let n = r.forwardRef((e, t) => {
        let { className: s, children: r, ...n } = e;
        return (0, a.jsxs)(l.bL, {
          ref: t,
          className: (0, d.cn)('relative overflow-hidden', s),
          ...n,
          children: [
            (0, a.jsx)(l.LM, {
              className: 'h-full w-full rounded-[inherit]',
              children: r,
            }),
            (0, a.jsx)(o, {}),
            (0, a.jsx)(l.OK, {}),
          ],
        });
      });
      n.displayName = l.bL.displayName;
      let o = r.forwardRef((e, t) => {
        let { className: s, orientation: r = 'vertical', ...n } = e;
        return (0, a.jsx)(l.VM, {
          ref: t,
          orientation: r,
          className: (0, d.cn)(
            'flex touch-none select-none transition-colors',
            'vertical' === r &&
              'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === r &&
              'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            s,
          ),
          ...n,
          children: (0, a.jsx)(l.lr, {
            className: 'relative flex-1 rounded-full bg-border',
          }),
        });
      });
      o.displayName = l.VM.displayName;
    },
    6917: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => x });
      var a = s(5155),
        r = s(2115),
        l = s(6838),
        d = s(9602);
      let n = r.forwardRef((e, t) => {
        let { className: s, value: r, ...n } = e;
        return (0, a.jsx)(l.bL, {
          ref: t,
          className: (0, d.cn)(
            'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
            s,
          ),
          ...n,
          children: (0, a.jsx)(l.C1, {
            className: 'h-full w-full flex-1 bg-primary transition-all',
            style: { transform: 'translateX(-'.concat(100 - (r || 0), '%)') },
          }),
        });
      });
      n.displayName = l.bL.displayName;
      let o = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, d.cn)(
            'rounded-xl border bg-card text-card-foreground shadow',
            s,
          ),
          ...r,
        });
      });
      o.displayName = 'Card';
      let i = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, d.cn)('flex flex-col space-y-1.5 p-6', s),
          ...r,
        });
      });
      i.displayName = 'CardHeader';
      let c = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, d.cn)('font-semibold leading-none tracking-tight', s),
          ...r,
        });
      });
      (c.displayName = 'CardTitle'),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)('div', {
            ref: t,
            className: (0, d.cn)('text-sm text-muted-foreground', s),
            ...r,
          });
        }).displayName = 'CardDescription');
      let m = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, d.cn)('p-6 pt-0', s),
          ...r,
        });
      });
      (m.displayName = 'CardContent'),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)('div', {
            ref: t,
            className: (0, d.cn)('flex items-center p-6 pt-0', s),
            ...r,
          });
        }).displayName = 'CardFooter');
      var u = s(3172);
      let x = (e) => {
        let { type: t } = e,
          [s, l] = (0, r.useState)(0),
          [d, x] = (0, r.useState)(0),
          [f, h] = (0, r.useState)(0),
          [p, g] = (0, r.useState)({
            cpu: 0,
            ram: { used: 0, total: 0 },
            storage: { used: 0, total: 0, filesystem: '' },
          });
        (0, r.useEffect)(() => {
          let e = async () => {
            try {
              let e = await u.A.get('/servers/system-stats'),
                { cpuUsage: t, ramUsage: s, storageUsage: a } = e.data;
              if ((console.log(e.data), a && a.length > 0)) {
                let e = parseFloat(t),
                  r = parseFloat(s.used),
                  d = parseFloat(s.total),
                  n = 1024 * parseFloat(a[0].used),
                  o = 1024 * parseFloat(a[0].available),
                  i = n + o;
                l(e),
                  x((r / d) * 100),
                  h((n / i) * 100),
                  g({
                    cpu: e,
                    ram: { used: r, total: d },
                    storage: { used: n, total: i, filesystem: a[0].filesystem },
                  });
              }
            } catch (e) {
              console.error('Error fetching system info:', e);
            }
          };
          e();
          let t = setInterval(e, 2500);
          return () => clearInterval(t);
        }, []);
        let N = () =>
            (0, a.jsxs)(o, {
              children: [
                (0, a.jsx)(i, {
                  children: (0, a.jsx)(c, {
                    className: 'text-sm font-medium',
                    children: 'CPU Usage',
                  }),
                }),
                (0, a.jsxs)(m, {
                  children: [
                    (0, a.jsx)(n, { value: s, className: 'w-[80%]' }),
                    (0, a.jsxs)('p', {
                      className: 'mb-1 mt-1 text-xs text-muted-foreground',
                      children: ['CPU usage: ', Math.round(s), '%'],
                    }),
                    (0, a.jsxs)('p', {
                      className: 'text-xs text-muted-foreground',
                      children: [Math.round(s), '% (Total CPU usage)'],
                    }),
                  ],
                }),
              ],
            }),
          v = () =>
            (0, a.jsxs)(o, {
              children: [
                (0, a.jsx)(i, {
                  children: (0, a.jsx)(c, {
                    className: 'text-sm font-medium',
                    children: 'RAM Usage',
                  }),
                }),
                (0, a.jsxs)(m, {
                  children: [
                    (0, a.jsx)(n, { value: d, className: 'w-[80%]' }),
                    (0, a.jsxs)('p', {
                      className: 'mb-1 mt-1 text-xs text-muted-foreground',
                      children: ['RAM usage: ', Math.round(d), '%'],
                    }),
                    (0, a.jsxs)('p', {
                      className: 'text-xs text-muted-foreground',
                      children: [
                        Math.round(d),
                        '% (',
                        p.ram.used.toFixed(0),
                        'GB/',
                        p.ram.total.toFixed(0),
                        'GB)',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          j = () =>
            (0, a.jsxs)(o, {
              children: [
                (0, a.jsx)(i, {
                  children: (0, a.jsxs)(c, {
                    className: 'text-sm font-medium',
                    children: ['Storage Usage (', p.storage.filesystem, ')'],
                  }),
                }),
                (0, a.jsxs)(m, {
                  children: [
                    (0, a.jsx)(n, { value: f, className: 'w-[80%]' }),
                    (0, a.jsxs)('p', {
                      className: 'mb-1 mt-1 text-xs text-muted-foreground',
                      children: ['Storage usage: ', Math.round(f), '%'],
                    }),
                    (0, a.jsxs)('p', {
                      className: 'text-xs text-muted-foreground',
                      children: [
                        Math.round(f),
                        '% (',
                        p.storage.used.toFixed(1),
                        'GB/',
                        p.storage.total.toFixed(1),
                        'GB)',
                      ],
                    }),
                  ],
                }),
              ],
            });
        return 'cpu' === t
          ? N()
          : 'ram' === t
            ? v()
            : 'storage' === t
              ? j()
              : 'full' === t
                ? (0, a.jsxs)(o, {
                    children: [
                      (0, a.jsx)(i, {
                        children: (0, a.jsx)(c, {
                          className: 'text-sm font-medium',
                          children: 'System Usage',
                        }),
                      }),
                      (0, a.jsx)(m, {
                        children: (0, a.jsxs)('div', {
                          className: 'space-y-4',
                          children: [
                            (0, a.jsxs)('div', {
                              children: [
                                (0, a.jsx)('h3', {
                                  className: 'text-xs text-muted-foreground',
                                  children: 'CPU Usage',
                                }),
                                (0, a.jsx)(n, {
                                  value: s,
                                  className: 'w-full',
                                }),
                                (0, a.jsxs)('p', {
                                  className:
                                    'mb-1 mt-1 text-xs text-muted-foreground',
                                  children: ['CPU usage: ', Math.round(s), '%'],
                                }),
                                (0, a.jsxs)('p', {
                                  className: 'text-xs text-muted-foreground',
                                  children: [
                                    Math.round(s),
                                    '% (Total CPU usage)',
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              children: [
                                (0, a.jsx)('h3', {
                                  className: 'text-xs text-muted-foreground',
                                  children: 'RAM Usage',
                                }),
                                (0, a.jsx)(n, {
                                  value: d,
                                  className: 'w-full',
                                }),
                                (0, a.jsxs)('p', {
                                  className:
                                    'mb-1 mt-1 text-xs text-muted-foreground',
                                  children: ['RAM usage: ', Math.round(d), '%'],
                                }),
                                (0, a.jsxs)('p', {
                                  className: 'text-xs text-muted-foreground',
                                  children: [
                                    Math.round(d),
                                    '% (',
                                    p.ram.used.toFixed(0),
                                    'GB/',
                                    p.ram.total.toFixed(0),
                                    'GB)',
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)('div', {
                              children: [
                                (0, a.jsx)('h3', {
                                  className: 'text-xs text-muted-foreground',
                                  children: 'Storage Usage',
                                }),
                                (0, a.jsx)(n, {
                                  value: f,
                                  className: 'w-full',
                                }),
                                (0, a.jsxs)('p', {
                                  className:
                                    'mb-1 mt-1 text-xs text-muted-foreground',
                                  children: [
                                    'Storage usage: ',
                                    Math.round(f),
                                    '%',
                                  ],
                                }),
                                (0, a.jsxs)('p', {
                                  className: 'text-xs text-muted-foreground',
                                  children: [
                                    Math.round(f),
                                    '% (',
                                    p.storage.used.toFixed(0),
                                    'GB/',
                                    p.storage.total.toFixed(0),
                                    'GB)',
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, a.jsxs)('div', {
                    className:
                      'grid gap-4 w-screen md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto',
                    children: [N(), v(), j()],
                  });
      };
    },
    9324: () => {},
    9384: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => l });
      var a = s(5155),
        r = s(7113);
      function l(e) {
        let { children: t, ...s } = e;
        return (0, a.jsx)(r.N, { ...s, children: t });
      }
    },
    9602: (e, t, s) => {
      'use strict';
      s.d(t, { cn: () => l });
      var a = s(3463),
        r = s(9795);
      function l() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.QP)((0, a.$)(t));
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [618, 105, 89, 289, 441, 587, 358], () => t(1151)), (_N_E = e.O());
  },
]);
