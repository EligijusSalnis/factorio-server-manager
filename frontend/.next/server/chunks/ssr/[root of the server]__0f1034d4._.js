module.exports = {
  '[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)':
    function (__turbopack_context__) {
      var {
        g: global,
        d: __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/next-server/app-page.runtime.dev.js',
          () =>
            require('next/dist/compiled/next-server/app-page.runtime.dev.js'),
        );

        module.exports = mod;
      }
    },
  '[project]/components/layout/ThemeToggle/theme-provider.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var { g: global, d: __dirname } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => ThemeProvider,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)',
          );
        ('use client');
        function ThemeProvider({ children, ...props }) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'ThemeProvider'
            ],
            {
              ...props,
              children: children,
            },
            void 0,
            false,
            {
              fileName:
                '[project]/components/layout/ThemeToggle/theme-provider.tsx',
              lineNumber: 12,
              columnNumber: 10,
            },
            this,
          );
        }
      }
    },
  '[project]/lib/utils.ts [app-ssr] (ecmascript)': (__turbopack_context__) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        cn: () => cn,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)',
        );
      function cn(...inputs) {
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'twMerge'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'clsx'
          ])(inputs),
        );
      }
    }
  },
  '[project]/components/ui/progress.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        Progress: () => Progress,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/utils.ts [app-ssr] (ecmascript)',
        );
      ('use client');
      const Progress = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, value, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Root'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
              className,
            ),
            ...props,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'Indicator'
              ],
              {
                className: 'h-full w-full flex-1 bg-primary transition-all',
                style: {
                  transform: `translateX(-${100 - (value || 0)}%)`,
                },
              },
              void 0,
              false,
              {
                fileName: '[project]/components/ui/progress.tsx',
                lineNumber: 20,
                columnNumber: 5,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/progress.tsx',
            lineNumber: 12,
            columnNumber: 3,
          },
          this,
        ),
      );
      Progress.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Root'
        ].displayName;
    }
  },
  '[project]/components/ui/card.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        Card: () => Card,
        CardContent: () => CardContent,
        CardDescription: () => CardDescription,
        CardFooter: () => CardFooter,
        CardHeader: () => CardHeader,
        CardTitle: () => CardTitle,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/utils.ts [app-ssr] (ecmascript)',
        );
      const Card = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'rounded-xl border bg-card text-card-foreground shadow',
              className,
            ),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/card.tsx',
            lineNumber: 9,
            columnNumber: 3,
          },
          this,
        ),
      );
      Card.displayName = 'Card';
      const CardHeader = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('flex flex-col space-y-1.5 p-6', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/card.tsx',
            lineNumber: 24,
            columnNumber: 3,
          },
          this,
        ),
      );
      CardHeader.displayName = 'CardHeader';
      const CardTitle = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('font-semibold leading-none tracking-tight', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/card.tsx',
            lineNumber: 36,
            columnNumber: 3,
          },
          this,
        ),
      );
      CardTitle.displayName = 'CardTitle';
      const CardDescription = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('text-sm text-muted-foreground', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/card.tsx',
            lineNumber: 48,
            columnNumber: 3,
          },
          this,
        ),
      );
      CardDescription.displayName = 'CardDescription';
      const CardContent = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('p-6 pt-0', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/card.tsx',
            lineNumber: 60,
            columnNumber: 3,
          },
          this,
        ),
      );
      CardContent.displayName = 'CardContent';
      const CardFooter = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('flex items-center p-6 pt-0', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/card.tsx',
            lineNumber: 68,
            columnNumber: 3,
          },
          this,
        ),
      );
      CardFooter.displayName = 'CardFooter';
    }
  },
  '[externals]/util [external] (util, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('util', () => require('util'));

      module.exports = mod;
    }
  },
  '[externals]/stream [external] (stream, cjs)': function (
    __turbopack_context__,
  ) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('stream', () => require('stream'));

      module.exports = mod;
    }
  },
  '[externals]/path [external] (path, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('path', () => require('path'));

      module.exports = mod;
    }
  },
  '[externals]/http [external] (http, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('http', () => require('http'));

      module.exports = mod;
    }
  },
  '[externals]/https [external] (https, cjs)': function (
    __turbopack_context__,
  ) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('https', () => require('https'));

      module.exports = mod;
    }
  },
  '[externals]/url [external] (url, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('url', () => require('url'));

      module.exports = mod;
    }
  },
  '[externals]/fs [external] (fs, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('fs', () => require('fs'));

      module.exports = mod;
    }
  },
  '[externals]/crypto [external] (crypto, cjs)': function (
    __turbopack_context__,
  ) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('crypto', () => require('crypto'));

      module.exports = mod;
    }
  },
  '[externals]/assert [external] (assert, cjs)': function (
    __turbopack_context__,
  ) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('assert', () => require('assert'));

      module.exports = mod;
    }
  },
  '[externals]/tty [external] (tty, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('tty', () => require('tty'));

      module.exports = mod;
    }
  },
  '[externals]/os [external] (os, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('os', () => require('os'));

      module.exports = mod;
    }
  },
  '[externals]/zlib [external] (zlib, cjs)': function (__turbopack_context__) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('zlib', () => require('zlib'));

      module.exports = mod;
    }
  },
  '[externals]/events [external] (events, cjs)': function (
    __turbopack_context__,
  ) {
    var {
      g: global,
      d: __dirname,
      m: module,
      e: exports,
    } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x('events', () => require('events'));

      module.exports = mod;
    }
  },
  '[project]/lib/apiClient.ts [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)',
        );
      const apiClient =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'default'
        ].create({
          baseURL: ('TURBOPACK compile-time value', 'http://localhost:3000'),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      const __TURBOPACK__default__export__ = apiClient;
    }
  },
  '[project]/components/system-info.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/components/ui/progress.tsx [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/components/ui/card.tsx [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/apiClient.ts [app-ssr] (ecmascript)',
        );
      ('use client');
      const SystemInfo = ({ type }) => {
        const [cpuProgress, setCpuProgress] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(0);
        const [ramProgress, setRamProgress] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(0);
        const [storageProgress, setStorageProgress] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(0);
        const [systemInfo, setSystemInfo] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])({
          cpu: 0,
          ram: {
            used: 0,
            total: 0,
          },
          storage: {
            used: 0,
            total: 0,
            filesystem: '',
          },
        });
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useEffect'
        ])(() => {
          const fetchSystemInfo = async () => {
            try {
              const response =
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'default'
                ].get('/servers/system-stats');
              const { cpuUsage, ramUsage, storageUsage } = response.data;
              if (storageUsage && storageUsage.length > 0) {
                const cpu = parseFloat(cpuUsage);
                const ramUsed = parseFloat(ramUsage.used);
                const ramTotal = parseFloat(ramUsage.total);
                const ram = (ramUsed / ramTotal) * 100;
                const storageUsed = parseFloat(storageUsage[0].used);
                const storageAvailable = parseFloat(storageUsage[0].available);
                const storageTotal = storageUsed + storageAvailable;
                const storage = (storageUsed / storageTotal) * 100;
                setCpuProgress(cpu);
                setRamProgress(ram);
                setStorageProgress(storage);
                setSystemInfo({
                  cpu,
                  ram: {
                    used: ramUsed,
                    total: ramTotal,
                  },
                  storage: {
                    used: storageUsed,
                    total: storageTotal,
                    filesystem: storageUsage[0].filesystem,
                  },
                });
              }
            } catch (error) {
              console.error('Error fetching system info:', error);
            }
          };
          fetchSystemInfo();
          const interval = setInterval(fetchSystemInfo, 2500);
          return () => clearInterval(interval);
        }, []);
        const renderCpuCard = () =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Card'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardHeader'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'CardTitle'
                      ],
                      {
                        className: 'text-sm font-medium',
                        children: 'CPU Usage',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/components/system-info.tsx',
                        lineNumber: 67,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 66,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardContent'
                  ],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'Progress'
                        ],
                        {
                          value: cpuProgress,
                          className: 'w-[80%]',
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 70,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'p',
                        {
                          className: 'mb-1 mt-1 text-xs text-muted-foreground',
                          children: [
                            'CPU usage: ',
                            Math.round(cpuProgress),
                            '%',
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 71,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'p',
                        {
                          className: 'text-xs text-muted-foreground',
                          children: [
                            Math.round(cpuProgress),
                            '% (Total CPU usage)',
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 74,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 69,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/components/system-info.tsx',
              lineNumber: 65,
              columnNumber: 5,
            },
            this,
          );
        const renderRamCard = () =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Card'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardHeader'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'CardTitle'
                      ],
                      {
                        className: 'text-sm font-medium',
                        children: 'RAM Usage',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/components/system-info.tsx',
                        lineNumber: 84,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 83,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardContent'
                  ],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'Progress'
                        ],
                        {
                          value: ramProgress,
                          className: 'w-[80%]',
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 87,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'p',
                        {
                          className: 'mb-1 mt-1 text-xs text-muted-foreground',
                          children: [
                            'RAM usage: ',
                            Math.round(ramProgress),
                            '%',
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 88,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'p',
                        {
                          className: 'text-xs text-muted-foreground',
                          children: [
                            Math.round(ramProgress),
                            '% (',
                            systemInfo.ram.used.toFixed(0),
                            'GB/',
                            systemInfo.ram.total.toFixed(0),
                            'GB)',
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 91,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 86,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/components/system-info.tsx',
              lineNumber: 82,
              columnNumber: 5,
            },
            this,
          );
        const renderStorageCard = () =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Card'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardHeader'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'CardTitle'
                      ],
                      {
                        className: 'text-sm font-medium',
                        children: [
                          'Storage Usage (',
                          systemInfo.storage.filesystem,
                          ')',
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/components/system-info.tsx',
                        lineNumber: 101,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 100,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardContent'
                  ],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'Progress'
                        ],
                        {
                          value: storageProgress,
                          className: 'w-[80%]',
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 104,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'p',
                        {
                          className: 'mb-1 mt-1 text-xs text-muted-foreground',
                          children: [
                            'Storage usage: ',
                            Math.round(storageProgress),
                            '%',
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 105,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'p',
                        {
                          className: 'text-xs text-muted-foreground',
                          children: [
                            Math.round(storageProgress),
                            '% (',
                            systemInfo.storage.used.toFixed(1),
                            'GB/',
                            systemInfo.storage.total.toFixed(1),
                            'GB)',
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/components/system-info.tsx',
                          lineNumber: 108,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 103,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/components/system-info.tsx',
              lineNumber: 99,
              columnNumber: 5,
            },
            this,
          );
        const renderFullInfoCard = () =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Card'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardHeader'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'CardTitle'
                      ],
                      {
                        className: 'text-sm font-medium',
                        children: 'System Usage',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/components/system-info.tsx',
                        lineNumber: 119,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 118,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'CardContent'
                  ],
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'space-y-4',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'h3',
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: 'CPU Usage',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 124,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'Progress'
                                  ],
                                  {
                                    value: cpuProgress,
                                    className: 'w-full',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 125,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'p',
                                  {
                                    className:
                                      'mb-1 mt-1 text-xs text-muted-foreground',
                                    children: [
                                      'CPU usage: ',
                                      Math.round(cpuProgress),
                                      '%',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 126,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'p',
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: [
                                      Math.round(cpuProgress),
                                      '% (Total CPU usage)',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 129,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/components/system-info.tsx',
                              lineNumber: 123,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'h3',
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: 'RAM Usage',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 134,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'Progress'
                                  ],
                                  {
                                    value: ramProgress,
                                    className: 'w-full',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 135,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'p',
                                  {
                                    className:
                                      'mb-1 mt-1 text-xs text-muted-foreground',
                                    children: [
                                      'RAM usage: ',
                                      Math.round(ramProgress),
                                      '%',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 136,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'p',
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: [
                                      Math.round(ramProgress),
                                      '% (',
                                      systemInfo.ram.used.toFixed(0),
                                      'GB/',
                                      systemInfo.ram.total.toFixed(0),
                                      'GB)',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 139,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/components/system-info.tsx',
                              lineNumber: 133,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'h3',
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: 'Storage Usage',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 145,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'Progress'
                                  ],
                                  {
                                    value: storageProgress,
                                    className: 'w-full',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 146,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'p',
                                  {
                                    className:
                                      'mb-1 mt-1 text-xs text-muted-foreground',
                                    children: [
                                      'Storage usage: ',
                                      Math.round(storageProgress),
                                      '%',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 147,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'p',
                                  {
                                    className: 'text-xs text-muted-foreground',
                                    children: [
                                      Math.round(storageProgress),
                                      '% (',
                                      systemInfo.storage.used.toFixed(0),
                                      'GB/',
                                      systemInfo.storage.total.toFixed(0),
                                      'GB)',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/system-info.tsx',
                                    lineNumber: 150,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/components/system-info.tsx',
                              lineNumber: 144,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/components/system-info.tsx',
                        lineNumber: 122,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/components/system-info.tsx',
                    lineNumber: 121,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/components/system-info.tsx',
              lineNumber: 117,
              columnNumber: 5,
            },
            this,
          );
        const renderAllInfoCard = () =>
          /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className:
                'grid gap-4 w-screen md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto',
              children: [renderCpuCard(), renderRamCard(), renderStorageCard()],
            },
            void 0,
            true,
            {
              fileName: '[project]/components/system-info.tsx',
              lineNumber: 163,
              columnNumber: 5,
            },
            this,
          );
        if (type === 'cpu') return renderCpuCard();
        if (type === 'ram') return renderRamCard();
        if (type === 'storage') return renderStorageCard();
        if (type === 'full') return renderFullInfoCard(); // Render everything in one card
        return renderAllInfoCard(); // Default is returning full card
      };
      const __TURBOPACK__default__export__ = SystemInfo;
    }
  },
  '[project]/components/ui/button.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        Button: () => Button,
        buttonVariants: () => buttonVariants,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/utils.ts [app-ssr] (ecmascript)',
        );
      const buttonVariants = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'cva'
      ])(
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
          defaultVariants: {
            variant: 'default',
            size: 'default',
          },
        },
      );
      const Button = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild
          ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'Slot'
            ]
          : 'button';
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          Comp,
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              buttonVariants({
                variant,
                size,
                className,
              }),
            ),
            ref: ref,
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/button.tsx',
            lineNumber: 47,
            columnNumber: 7,
          },
          this,
        );
      });
      Button.displayName = 'Button';
    }
  },
  '[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        DropdownMenu: () => DropdownMenu,
        DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
        DropdownMenuContent: () => DropdownMenuContent,
        DropdownMenuGroup: () => DropdownMenuGroup,
        DropdownMenuItem: () => DropdownMenuItem,
        DropdownMenuLabel: () => DropdownMenuLabel,
        DropdownMenuPortal: () => DropdownMenuPortal,
        DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
        DropdownMenuRadioItem: () => DropdownMenuRadioItem,
        DropdownMenuSeparator: () => DropdownMenuSeparator,
        DropdownMenuShortcut: () => DropdownMenuShortcut,
        DropdownMenuSub: () => DropdownMenuSub,
        DropdownMenuSubContent: () => DropdownMenuSubContent,
        DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
        DropdownMenuTrigger: () => DropdownMenuTrigger,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/utils.ts [app-ssr] (ecmascript)',
        );
      ('use client');
      const DropdownMenu =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Root'
        ];
      const DropdownMenuTrigger =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Trigger'
        ];
      const DropdownMenuGroup =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Group'
        ];
      const DropdownMenuPortal =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Portal'
        ];
      const DropdownMenuSub =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Sub'
        ];
      const DropdownMenuRadioGroup =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'RadioGroup'
        ];
      const DropdownMenuSubTrigger = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, inset, children, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'SubTrigger'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
              inset && 'pl-8',
              className,
            ),
            ...props,
            children: [
              children,
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                  'ChevronRight'
                ],
                {
                  className: 'ml-auto',
                },
                void 0,
                false,
                {
                  fileName: '[project]/components/ui/dropdown-menu.tsx',
                  lineNumber: 37,
                  columnNumber: 5,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 27,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuSubTrigger.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'SubTrigger'
        ].displayName;
      const DropdownMenuSubContent = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'SubContent'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              className,
            ),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 47,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuSubContent.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'SubContent'
        ].displayName;
      const DropdownMenuContent = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, sideOffset = 4, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Portal'
          ],
          {
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'Content'
              ],
              {
                ref: ref,
                sideOffset: sideOffset,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(
                  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
                  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  className,
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: '[project]/components/ui/dropdown-menu.tsx',
                lineNumber: 64,
                columnNumber: 5,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 63,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuContent.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Content'
        ].displayName;
      const DropdownMenuItem = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, inset, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Item'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
              inset && 'pl-8',
              className,
            ),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 84,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuItem.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Item'
        ].displayName;
      const DropdownMenuCheckboxItem = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, children, checked, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'CheckboxItem'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              className,
            ),
            checked: checked,
            ...props,
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'span',
                {
                  className:
                    'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'ItemIndicator'
                    ],
                    {
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                          'Check'
                        ],
                        {
                          className: 'h-4 w-4',
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/components/ui/dropdown-menu.tsx',
                          lineNumber: 111,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/components/ui/dropdown-menu.tsx',
                      lineNumber: 110,
                      columnNumber: 7,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/components/ui/dropdown-menu.tsx',
                  lineNumber: 109,
                  columnNumber: 5,
                },
                this,
              ),
              children,
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 100,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuCheckboxItem.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'CheckboxItem'
        ].displayName;
      const DropdownMenuRadioItem = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, children, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'RadioItem'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              className,
            ),
            ...props,
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'span',
                {
                  className:
                    'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'ItemIndicator'
                    ],
                    {
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__[
                          'Circle'
                        ],
                        {
                          className: 'h-2 w-2 fill-current',
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/components/ui/dropdown-menu.tsx',
                          lineNumber: 134,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/components/ui/dropdown-menu.tsx',
                      lineNumber: 133,
                      columnNumber: 7,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/components/ui/dropdown-menu.tsx',
                  lineNumber: 132,
                  columnNumber: 5,
                },
                this,
              ),
              children,
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 124,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuRadioItem.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'RadioItem'
        ].displayName;
      const DropdownMenuLabel = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, inset, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Label'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 148,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuLabel.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Label'
        ].displayName;
      const DropdownMenuSeparator = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Separator'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('-mx-1 my-1 h-px bg-muted', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 164,
            columnNumber: 3,
          },
          this,
        ),
      );
      DropdownMenuSeparator.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Separator'
        ].displayName;
      const DropdownMenuShortcut = ({ className, ...props }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'span',
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('ml-auto text-xs tracking-widest opacity-60', className),
            ...props,
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/dropdown-menu.tsx',
            lineNumber: 177,
            columnNumber: 5,
          },
          this,
        );
      };
      DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
    }
  },
  '[project]/components/layout/ThemeToggle/theme-toggle.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var { g: global, d: __dirname } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => ThemeToggle,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/components/ui/button.tsx [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)',
          );
        ('use client');
        function ThemeToggle({}) {
          const { setTheme } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useTheme'
          ])();
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'DropdownMenu'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'DropdownMenuTrigger'
                  ],
                  {
                    asChild: true,
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'Button'
                      ],
                      {
                        variant: 'outline',
                        size: 'icon',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'SunIcon'
                            ],
                            {
                              className:
                                'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:hidden',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                              lineNumber: 19,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'MoonIcon'
                            ],
                            {
                              className:
                                'h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hidden dark:rotate-0 dark:scale-100 dark:block',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                              lineNumber: 20,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'span',
                            {
                              className: 'sr-only',
                              children: 'Toggle theme',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                              lineNumber: 21,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                        lineNumber: 18,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                    lineNumber: 17,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'DropdownMenuContent'
                  ],
                  {
                    align: 'end',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'DropdownMenuItem'
                        ],
                        {
                          onClick: () => setTheme('light'),
                          children: 'Light',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                          lineNumber: 25,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'DropdownMenuItem'
                        ],
                        {
                          onClick: () => setTheme('dark'),
                          children: 'Dark',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                          lineNumber: 28,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'DropdownMenuItem'
                        ],
                        {
                          onClick: () => setTheme('system'),
                          children: 'System',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                          lineNumber: 31,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
                    lineNumber: 24,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName:
                '[project]/components/layout/ThemeToggle/theme-toggle.tsx',
              lineNumber: 16,
              columnNumber: 5,
            },
            this,
          );
        }
      }
    },
  '[project]/components/ui/scroll-area.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        ScrollArea: () => ScrollArea,
        ScrollBar: () => ScrollBar,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/utils.ts [app-ssr] (ecmascript)',
        );
      ('use client');
      const ScrollArea = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, children, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Root'
          ],
          {
            ref: ref,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])('relative overflow-hidden', className),
            ...props,
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'Viewport'
                ],
                {
                  className: 'h-full w-full rounded-[inherit]',
                  children: children,
                },
                void 0,
                false,
                {
                  fileName: '[project]/components/ui/scroll-area.tsx',
                  lineNumber: 17,
                  columnNumber: 5,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                ScrollBar,
                {},
                void 0,
                false,
                {
                  fileName: '[project]/components/ui/scroll-area.tsx',
                  lineNumber: 20,
                  columnNumber: 5,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'Corner'
                ],
                {},
                void 0,
                false,
                {
                  fileName: '[project]/components/ui/scroll-area.tsx',
                  lineNumber: 21,
                  columnNumber: 5,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/components/ui/scroll-area.tsx',
            lineNumber: 12,
            columnNumber: 3,
          },
          this,
        ),
      );
      ScrollArea.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Root'
        ].displayName;
      const ScrollBar = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, orientation = 'vertical', ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'ScrollAreaScrollbar'
          ],
          {
            ref: ref,
            orientation: orientation,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'flex touch-none select-none transition-colors',
              orientation === 'vertical' &&
                'h-full w-2.5 border-l border-l-transparent p-[1px]',
              orientation === 'horizontal' &&
                'h-2.5 flex-col border-t border-t-transparent p-[1px]',
              className,
            ),
            ...props,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'ScrollAreaThumb'
              ],
              {
                className: 'relative flex-1 rounded-full bg-border',
              },
              void 0,
              false,
              {
                fileName: '[project]/components/ui/scroll-area.tsx',
                lineNumber: 43,
                columnNumber: 5,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/scroll-area.tsx',
            lineNumber: 30,
            columnNumber: 3,
          },
          this,
        ),
      );
      ScrollBar.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'ScrollAreaScrollbar'
        ].displayName;
    }
  },
};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0f1034d4._.js.map
