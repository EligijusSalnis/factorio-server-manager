(exports.id = 64),
  (exports.ids = [64]),
  (exports.modules = {
    120: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 6959, 23)),
        Promise.resolve().then(s.t.bind(s, 3875, 23)),
        Promise.resolve().then(s.t.bind(s, 8903, 23)),
        Promise.resolve().then(s.t.bind(s, 7174, 23)),
        Promise.resolve().then(s.t.bind(s, 4178, 23)),
        Promise.resolve().then(s.t.bind(s, 7190, 23)),
        Promise.resolve().then(s.t.bind(s, 8429, 23)),
        Promise.resolve().then(s.t.bind(s, 1365, 23));
    },
    648: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => r });
      let r = s(5668).A.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: { 'Content-Type': 'application/json' },
      });
    },
    666: (e, t, s) => {
      'use strict';
      s.d(t, { ScrollArea: () => l });
      var r = s(5512),
        a = s(8009),
        o = s(3437),
        n = s(9462);
      let l = a.forwardRef(({ className: e, children: t, ...s }, a) =>
        (0, r.jsxs)(o.bL, {
          ref: a,
          className: (0, n.cn)('relative overflow-hidden', e),
          ...s,
          children: [
            (0, r.jsx)(o.LM, {
              className: 'h-full w-full rounded-[inherit]',
              children: t,
            }),
            (0, r.jsx)(d, {}),
            (0, r.jsx)(o.OK, {}),
          ],
        }),
      );
      l.displayName = o.bL.displayName;
      let d = a.forwardRef(
        ({ className: e, orientation: t = 'vertical', ...s }, a) =>
          (0, r.jsx)(o.VM, {
            ref: a,
            orientation: t,
            className: (0, n.cn)(
              'flex touch-none select-none transition-colors',
              'vertical' === t &&
                'h-full w-2.5 border-l border-l-transparent p-[1px]',
              'horizontal' === t &&
                'h-2.5 flex-col border-t border-t-transparent p-[1px]',
              e,
            ),
            ...s,
            children: (0, r.jsx)(o.lr, {
              className: 'relative flex-1 rounded-full bg-border',
            }),
          }),
      );
      d.displayName = o.VM.displayName;
    },
    1286: (e, t, s) => {
      'use strict';
      s.d(t, { ScrollArea: () => a });
      var r = s(6760);
      let a = (0, r.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call ScrollArea() from the server but ScrollArea is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        '/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/ui/scroll-area.tsx',
        'ScrollArea',
      );
      (0, r.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call ScrollBar() from the server but ScrollBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        '/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/ui/scroll-area.tsx',
        'ScrollBar',
      );
    },
    2676: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => r });
      let r = (0, s(6760).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/layout/ThemeToggle/theme-provider.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.',
          );
        },
        '/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/layout/ThemeToggle/theme-provider.tsx',
        'default',
      );
    },
    2704: () => {},
    2712: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => o });
      var r = s(5512),
        a = s(3371);
      function o({ children: e, ...t }) {
        return (0, r.jsx)(a.N, { ...t, children: e });
      }
    },
    3364: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => j });
      var r = s(5512),
        a = s(2933),
        o = s(3371),
        n = s(8009),
        l = s(2705),
        d = s(1643),
        i = s(9462);
      let c = (0, d.F)(
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
        m = n.forwardRef(
          ({ className: e, variant: t, size: s, asChild: a = !1, ...o }, n) => {
            let d = a ? l.DX : 'button';
            return (0, r.jsx)(d, {
              className: (0, i.cn)(c({ variant: t, size: s, className: e })),
              ref: n,
              ...o,
            });
          },
        );
      m.displayName = 'Button';
      var u = s(3140),
        f = s(9905),
        x = s(4849),
        h = s(3689);
      let p = u.bL,
        g = u.l9;
      u.YJ,
        u.ZL,
        u.Pb,
        u.z6,
        (n.forwardRef(({ className: e, inset: t, children: s, ...a }, o) =>
          (0, r.jsxs)(u.ZP, {
            ref: o,
            className: (0, i.cn)(
              'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
              t && 'pl-8',
              e,
            ),
            ...a,
            children: [s, (0, r.jsx)(f.A, { className: 'ml-auto' })],
          }),
        ).displayName = u.ZP.displayName),
        (n.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)(u.G5, {
            ref: s,
            className: (0, i.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              e,
            ),
            ...t,
          }),
        ).displayName = u.G5.displayName);
      let v = n.forwardRef(({ className: e, sideOffset: t = 4, ...s }, a) =>
        (0, r.jsx)(u.ZL, {
          children: (0, r.jsx)(u.UC, {
            ref: a,
            sideOffset: t,
            className: (0, i.cn)(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              e,
            ),
            ...s,
          }),
        }),
      );
      v.displayName = u.UC.displayName;
      let b = n.forwardRef(({ className: e, inset: t, ...s }, a) =>
        (0, r.jsx)(u.q7, {
          ref: a,
          className: (0, i.cn)(
            'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
            t && 'pl-8',
            e,
          ),
          ...s,
        }),
      );
      function j({}) {
        let { setTheme: e } = (0, o.D)();
        return (0, r.jsxs)(p, {
          children: [
            (0, r.jsx)(g, {
              asChild: !0,
              children: (0, r.jsxs)(m, {
                variant: 'outline',
                size: 'icon',
                children: [
                  (0, r.jsx)(a.gLX, {
                    className:
                      'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:hidden',
                  }),
                  (0, r.jsx)(a.rRK, {
                    className:
                      'h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hidden dark:rotate-0 dark:scale-100 dark:block',
                  }),
                  (0, r.jsx)('span', {
                    className: 'sr-only',
                    children: 'Toggle theme',
                  }),
                ],
              }),
            }),
            (0, r.jsxs)(v, {
              align: 'end',
              children: [
                (0, r.jsx)(b, { onClick: () => e('light'), children: 'Light' }),
                (0, r.jsx)(b, { onClick: () => e('dark'), children: 'Dark' }),
                (0, r.jsx)(b, {
                  onClick: () => e('system'),
                  children: 'System',
                }),
              ],
            }),
          ],
        });
      }
      (b.displayName = u.q7.displayName),
        (n.forwardRef(({ className: e, children: t, checked: s, ...a }, o) =>
          (0, r.jsxs)(u.H_, {
            ref: o,
            className: (0, i.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              e,
            ),
            checked: s,
            ...a,
            children: [
              (0, r.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, r.jsx)(u.VF, {
                  children: (0, r.jsx)(x.A, { className: 'h-4 w-4' }),
                }),
              }),
              t,
            ],
          }),
        ).displayName = u.H_.displayName),
        (n.forwardRef(({ className: e, children: t, ...s }, a) =>
          (0, r.jsxs)(u.hN, {
            ref: a,
            className: (0, i.cn)(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              e,
            ),
            ...s,
            children: [
              (0, r.jsx)('span', {
                className:
                  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                children: (0, r.jsx)(u.VF, {
                  children: (0, r.jsx)(h.A, {
                    className: 'h-2 w-2 fill-current',
                  }),
                }),
              }),
              t,
            ],
          }),
        ).displayName = u.hN.displayName),
        (n.forwardRef(({ className: e, inset: t, ...s }, a) =>
          (0, r.jsx)(u.JU, {
            ref: a,
            className: (0, i.cn)(
              'px-2 py-1.5 text-sm font-semibold',
              t && 'pl-8',
              e,
            ),
            ...s,
          }),
        ).displayName = u.JU.displayName),
        (n.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)(u.wv, {
            ref: s,
            className: (0, i.cn)('-mx-1 my-1 h-px bg-muted', e),
            ...t,
          }),
        ).displayName = u.wv.displayName);
    },
    3739: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => r });
      let r = (0, s(6760).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/layout/ThemeToggle/theme-toggle.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.',
          );
        },
        '/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/layout/ThemeToggle/theme-toggle.tsx',
        'default',
      );
    },
    4289: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 2676)),
        Promise.resolve().then(s.bind(s, 3739)),
        Promise.resolve().then(s.bind(s, 5260)),
        Promise.resolve().then(s.bind(s, 1286)),
        Promise.resolve().then(s.t.bind(s, 2291, 23));
    },
    5260: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => r });
      let r = (0, s(6760).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/system-info.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.',
          );
        },
        '/home/m1croo/Documents/Github/Factorio Server Manager/frontend/components/system-info.tsx',
        'default',
      );
    },
    5793: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 2712)),
        Promise.resolve().then(s.bind(s, 3364)),
        Promise.resolve().then(s.bind(s, 7398)),
        Promise.resolve().then(s.bind(s, 666)),
        Promise.resolve().then(s.t.bind(s, 4671, 23));
    },
    5800: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 3219, 23)),
        Promise.resolve().then(s.t.bind(s, 4863, 23)),
        Promise.resolve().then(s.t.bind(s, 5155, 23)),
        Promise.resolve().then(s.t.bind(s, 802, 23)),
        Promise.resolve().then(s.t.bind(s, 9350, 23)),
        Promise.resolve().then(s.t.bind(s, 8530, 23)),
        Promise.resolve().then(s.t.bind(s, 1601, 23)),
        Promise.resolve().then(s.t.bind(s, 8921, 23));
    },
    7398: (e, t, s) => {
      'use strict';
      s.d(t, { default: () => f });
      var r = s(5512),
        a = s(8009),
        o = s(1022),
        n = s(9462);
      let l = a.forwardRef(({ className: e, value: t, ...s }, a) =>
        (0, r.jsx)(o.bL, {
          ref: a,
          className: (0, n.cn)(
            'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
            e,
          ),
          ...s,
          children: (0, r.jsx)(o.C1, {
            className: 'h-full w-full flex-1 bg-primary transition-all',
            style: { transform: `translateX(-${100 - (t || 0)}%)` },
          }),
        }),
      );
      l.displayName = o.bL.displayName;
      let d = a.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)('div', {
          ref: s,
          className: (0, n.cn)(
            'rounded-xl border bg-card text-card-foreground shadow',
            e,
          ),
          ...t,
        }),
      );
      d.displayName = 'Card';
      let i = a.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)('div', {
          ref: s,
          className: (0, n.cn)('flex flex-col space-y-1.5 p-6', e),
          ...t,
        }),
      );
      i.displayName = 'CardHeader';
      let c = a.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)('div', {
          ref: s,
          className: (0, n.cn)('font-semibold leading-none tracking-tight', e),
          ...t,
        }),
      );
      (c.displayName = 'CardTitle'),
        (a.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)('div', {
            ref: s,
            className: (0, n.cn)('text-sm text-muted-foreground', e),
            ...t,
          }),
        ).displayName = 'CardDescription');
      let m = a.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)('div', {
          ref: s,
          className: (0, n.cn)('p-6 pt-0', e),
          ...t,
        }),
      );
      (m.displayName = 'CardContent'),
        (a.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)('div', {
            ref: s,
            className: (0, n.cn)('flex items-center p-6 pt-0', e),
            ...t,
          }),
        ).displayName = 'CardFooter');
      var u = s(648);
      let f = ({ type: e }) => {
        let [t, s] = (0, a.useState)(0),
          [o, n] = (0, a.useState)(0),
          [f, x] = (0, a.useState)(0),
          [h, p] = (0, a.useState)({
            cpu: 0,
            ram: { used: 0, total: 0 },
            storage: { used: 0, total: 0, filesystem: '' },
          });
        (0, a.useEffect)(() => {
          let e = async () => {
            try {
              let e = await u.A.get('/servers/system-stats'),
                { cpuUsage: t, ramUsage: r, storageUsage: a } = e.data;
              if ((console.log(e.data), a && a.length > 0)) {
                let e = parseFloat(t),
                  o = parseFloat(r.used),
                  l = parseFloat(r.total),
                  d = 1024 * parseFloat(a[0].used),
                  i = 1024 * parseFloat(a[0].available),
                  c = d + i;
                s(e),
                  n((o / l) * 100),
                  x((d / c) * 100),
                  p({
                    cpu: e,
                    ram: { used: o, total: l },
                    storage: { used: d, total: c, filesystem: a[0].filesystem },
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
        let g = () =>
            (0, r.jsxs)(d, {
              children: [
                (0, r.jsx)(i, {
                  children: (0, r.jsx)(c, {
                    className: 'text-sm font-medium',
                    children: 'CPU Usage',
                  }),
                }),
                (0, r.jsxs)(m, {
                  children: [
                    (0, r.jsx)(l, { value: t, className: 'w-[80%]' }),
                    (0, r.jsxs)('p', {
                      className: 'mb-1 mt-1 text-xs text-muted-foreground',
                      children: ['CPU usage: ', Math.round(t), '%'],
                    }),
                    (0, r.jsxs)('p', {
                      className: 'text-xs text-muted-foreground',
                      children: [Math.round(t), '% (Total CPU usage)'],
                    }),
                  ],
                }),
              ],
            }),
          v = () =>
            (0, r.jsxs)(d, {
              children: [
                (0, r.jsx)(i, {
                  children: (0, r.jsx)(c, {
                    className: 'text-sm font-medium',
                    children: 'RAM Usage',
                  }),
                }),
                (0, r.jsxs)(m, {
                  children: [
                    (0, r.jsx)(l, { value: o, className: 'w-[80%]' }),
                    (0, r.jsxs)('p', {
                      className: 'mb-1 mt-1 text-xs text-muted-foreground',
                      children: ['RAM usage: ', Math.round(o), '%'],
                    }),
                    (0, r.jsxs)('p', {
                      className: 'text-xs text-muted-foreground',
                      children: [
                        Math.round(o),
                        '% (',
                        h.ram.used.toFixed(0),
                        'GB/',
                        h.ram.total.toFixed(0),
                        'GB)',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          b = () =>
            (0, r.jsxs)(d, {
              children: [
                (0, r.jsx)(i, {
                  children: (0, r.jsxs)(c, {
                    className: 'text-sm font-medium',
                    children: ['Storage Usage (', h.storage.filesystem, ')'],
                  }),
                }),
                (0, r.jsxs)(m, {
                  children: [
                    (0, r.jsx)(l, { value: f, className: 'w-[80%]' }),
                    (0, r.jsxs)('p', {
                      className: 'mb-1 mt-1 text-xs text-muted-foreground',
                      children: ['Storage usage: ', Math.round(f), '%'],
                    }),
                    (0, r.jsxs)('p', {
                      className: 'text-xs text-muted-foreground',
                      children: [
                        Math.round(f),
                        '% (',
                        h.storage.used.toFixed(1),
                        'GB/',
                        h.storage.total.toFixed(1),
                        'GB)',
                      ],
                    }),
                  ],
                }),
              ],
            });
        return 'cpu' === e
          ? g()
          : 'ram' === e
            ? v()
            : 'storage' === e
              ? b()
              : 'full' === e
                ? (0, r.jsxs)(d, {
                    children: [
                      (0, r.jsx)(i, {
                        children: (0, r.jsx)(c, {
                          className: 'text-sm font-medium',
                          children: 'System Usage',
                        }),
                      }),
                      (0, r.jsx)(m, {
                        children: (0, r.jsxs)('div', {
                          className: 'space-y-4',
                          children: [
                            (0, r.jsxs)('div', {
                              children: [
                                (0, r.jsx)('h3', {
                                  className: 'text-xs text-muted-foreground',
                                  children: 'CPU Usage',
                                }),
                                (0, r.jsx)(l, {
                                  value: t,
                                  className: 'w-full',
                                }),
                                (0, r.jsxs)('p', {
                                  className:
                                    'mb-1 mt-1 text-xs text-muted-foreground',
                                  children: ['CPU usage: ', Math.round(t), '%'],
                                }),
                                (0, r.jsxs)('p', {
                                  className: 'text-xs text-muted-foreground',
                                  children: [
                                    Math.round(t),
                                    '% (Total CPU usage)',
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)('div', {
                              children: [
                                (0, r.jsx)('h3', {
                                  className: 'text-xs text-muted-foreground',
                                  children: 'RAM Usage',
                                }),
                                (0, r.jsx)(l, {
                                  value: o,
                                  className: 'w-full',
                                }),
                                (0, r.jsxs)('p', {
                                  className:
                                    'mb-1 mt-1 text-xs text-muted-foreground',
                                  children: ['RAM usage: ', Math.round(o), '%'],
                                }),
                                (0, r.jsxs)('p', {
                                  className: 'text-xs text-muted-foreground',
                                  children: [
                                    Math.round(o),
                                    '% (',
                                    h.ram.used.toFixed(0),
                                    'GB/',
                                    h.ram.total.toFixed(0),
                                    'GB)',
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)('div', {
                              children: [
                                (0, r.jsx)('h3', {
                                  className: 'text-xs text-muted-foreground',
                                  children: 'Storage Usage',
                                }),
                                (0, r.jsx)(l, {
                                  value: f,
                                  className: 'w-full',
                                }),
                                (0, r.jsxs)('p', {
                                  className:
                                    'mb-1 mt-1 text-xs text-muted-foreground',
                                  children: [
                                    'Storage usage: ',
                                    Math.round(f),
                                    '%',
                                  ],
                                }),
                                (0, r.jsxs)('p', {
                                  className: 'text-xs text-muted-foreground',
                                  children: [
                                    Math.round(f),
                                    '% (',
                                    h.storage.used.toFixed(0),
                                    'GB/',
                                    h.storage.total.toFixed(0),
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
                : (0, r.jsxs)('div', {
                    className:
                      'grid gap-4 w-screen md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto',
                    children: [g(), v(), b()],
                  });
      };
    },
    8918: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => x, metadata: () => f });
      var r = s(2740),
        a = s(9258),
        o = s.n(a);
      s(2704);
      var n = s(2676),
        l = s(2291),
        d = s.n(l),
        i = s(5260),
        c = s(3739);
      s(6301);
      var m = s(1286);
      function u({ children: e, scrollable: t = !0 }) {
        return (0, r.jsx)(r.Fragment, {
          children: t
            ? (0, r.jsx)(m.ScrollArea, {
                className: 'h-[calc(100dvh-52px)]',
                children: (0, r.jsx)('div', {
                  className: 'flex flex-1 p-4 md:px-6',
                  children: e,
                }),
              })
            : (0, r.jsx)('div', {
                className: 'flex flex-1 p-4 md:px-6',
                children: e,
              }),
        });
      }
      let f = {
        title: 'Create Next App',
        description: 'Generated by create next app',
      };
      function x({ children: e }) {
        return (0, r.jsx)('html', {
          lang: 'en',
          suppressHydrationWarning: !0,
          children: (0, r.jsxs)('body', {
            className: `${o().className} overflow-hidden `,
            children: [
              (0, r.jsx)(d(), { showSpinner: !1 }),
              (0, r.jsx)(n.default, {
                attribute: 'class',
                defaultTheme: 'system',
                enableSystem: !0,
                children: (0, r.jsx)(u, {
                  children: (0, r.jsxs)('div', {
                    className: 'flex flex-1 flex-col space-y-2',
                    children: [
                      (0, r.jsxs)('div', {
                        className:
                          'flex items-center justify-between space-y-2',
                        children: [
                          (0, r.jsx)('h2', {
                            className: 'text-2xl font-bold tracking-tight',
                            children: 'Hi, Welcome back \uD83D\uDC4B',
                          }),
                          (0, r.jsx)(c.default, {}),
                        ],
                      }),
                      (0, r.jsx)('div', {
                        className: 'grid  md:grid-cols-1 lg:grid-cols-1',
                        children: (0, r.jsx)(i.default, { type: 'all' }),
                      }),
                      e,
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    9462: (e, t, s) => {
      'use strict';
      s.d(t, { cn: () => o });
      var r = s(2281),
        a = s(4805);
      function o(...e) {
        return (0, a.QP)((0, r.$)(e));
      }
    },
  });
