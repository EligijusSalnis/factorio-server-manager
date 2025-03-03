module.exports = {
  '[project]/components/ServerManager/notification.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var { g: global, d: __dirname } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => Notification,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>',
          );
        function Notification({ type, message, onClose }) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: `fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg 
      ${type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`,
              children: [
                type === 'success'
                  ? /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__[
                        'CheckCircle'
                      ],
                      {
                        className: 'w-5 h-5 mr-2',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/components/ServerManager/notification.tsx',
                        lineNumber: 16,
                        columnNumber: 9,
                      },
                      this,
                    )
                  : /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__[
                        'AlertCircle'
                      ],
                      {
                        className: 'w-5 h-5 mr-2',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/components/ServerManager/notification.tsx',
                        lineNumber: 18,
                        columnNumber: 9,
                      },
                      this,
                    ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'span',
                  {
                    className: 'font-medium',
                    children: message,
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/components/ServerManager/notification.tsx',
                    lineNumber: 20,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'button',
                  {
                    onClick: onClose,
                    className: 'ml-4 text-gray-400 hover:text-gray-900',
                    children: '×',
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/components/ServerManager/notification.tsx',
                    lineNumber: 21,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/components/ServerManager/notification.tsx',
              lineNumber: 11,
              columnNumber: 5,
            },
            this,
          );
        }
      }
    },
  '[project]/components/ui/switch.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        Switch: () => Switch,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/utils.ts [app-ssr] (ecmascript)',
        );
      ('use client');
      const Switch = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Root'
          ],
          {
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'cn'
            ])(
              'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
              className,
            ),
            ...props,
            ref: ref,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'Thumb'
              ],
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(
                  'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
                ),
              },
              void 0,
              false,
              {
                fileName: '[project]/components/ui/switch.tsx',
                lineNumber: 20,
                columnNumber: 5,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/switch.tsx',
            lineNumber: 12,
            columnNumber: 3,
          },
          this,
        ),
      );
      Switch.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Root'
        ].displayName;
    }
  },
  '[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        Tooltip: () => Tooltip,
        TooltipContent: () => TooltipContent,
        TooltipProvider: () => TooltipProvider,
        TooltipTrigger: () => TooltipTrigger,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/utils.ts [app-ssr] (ecmascript)',
        );
      ('use client');
      const TooltipProvider =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Provider'
        ];
      const Tooltip =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Root'
        ];
      const TooltipTrigger =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Trigger'
        ];
      const TooltipContent = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'forwardRef'
      ])(({ className, sideOffset = 4, ...props }, ref) =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Portal'
          ],
          {
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'Content'
              ],
              {
                ref: ref,
                sideOffset: sideOffset,
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'cn'
                ])(
                  'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  className,
                ),
                ...props,
              },
              void 0,
              false,
              {
                fileName: '[project]/components/ui/tooltip.tsx',
                lineNumber: 19,
                columnNumber: 5,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: '[project]/components/ui/tooltip.tsx',
            lineNumber: 18,
            columnNumber: 3,
          },
          this,
        ),
      );
      TooltipContent.displayName =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Content'
        ].displayName;
    }
  },
  '[project]/components/ServerManager/createServerModal.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var { g: global, d: __dirname } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => CreateServerModal,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/components/ui/switch.tsx [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/lib/apiClient.ts [app-ssr] (ecmascript)',
          );
        function CreateServerModal({
          onClose,
          refreshServers,
          showNotification,
          versions,
        }) {
          const [newServer, setNewServer] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])({
            name: '',
            vcpus: 2,
            memory: 4,
            storage: 10,
            version: versions[0] || 'latest',
            onlineMode: false,
            dlcEnabled: false,
            rconPassword: '',
          });
          const [isCreating, setIsCreating] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false);
          const getMajorVersion = (version) => {
            if (version === 'latest') return 2;
            const parts = version.split('.');
            return parseInt(parts[0], 10);
          };
          const isDlcSupported = getMajorVersion(newServer.version) >= 2;
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(() => {
            if (!isDlcSupported) {
              setNewServer((prev) => ({
                ...prev,
                dlcEnabled: false,
              }));
            }
          }, [newServer.version]);
          const handleCreateServer = async (e) => {
            e.preventDefault();
            // Password validation
            const passwordRegex =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
            if (
              !newServer.rconPassword ||
              !passwordRegex.test(newServer.rconPassword)
            ) {
              showNotification(
                'error',
                'RCON password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters',
              );
              return;
            }
            if (!newServer.name.trim()) {
              showNotification('error', 'Server name is required');
              return;
            }
            if (newServer.vcpus < 1 || newServer.vcpus > 32) {
              showNotification('error', 'vCPUs must be between 1 and 32');
              return;
            }
            if (newServer.memory < 0.5 || newServer.memory > 32) {
              showNotification(
                'error',
                'Memory must be between 0.5 GB and 32 GB',
              );
              return;
            }
            if (newServer.storage < 5 || newServer.storage > 50) {
              showNotification(
                'error',
                'Storage must be between 5 GB and 50 GB',
              );
              return;
            }
            if (!newServer.version) {
              showNotification('error', 'Version must be selected');
              return;
            }
            setIsCreating(true);
            try {
              const payload = {
                ...newServer,
                memory: Math.round(newServer.memory * 1024),
                rconPassword: newServer.rconPassword,
              };
              await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ].post('/servers', payload);
              onClose();
              refreshServers();
              showNotification('success', 'Server created successfully');
            } catch (error) {
              showNotification('error', 'Failed to create server');
              console.log(error);
            } finally {
              setIsCreating(false);
            }
          };
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className:
                'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className:
                    'p-6 bg-secondary rounded-lg shadow-xl max-w-lg w-full',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'flex justify-between items-center mb-4',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'h2',
                            {
                              className: 'text-2xl font-bold',
                              children: 'Create New Server',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 98,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'button',
                            {
                              onClick: onClose,
                              className: 'hover:text-gray-700',
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                  'X'
                                ],
                                {
                                  className: 'w-6 h-6',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/components/ServerManager/createServerModal.tsx',
                                  lineNumber: 100,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 99,
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
                          '[project]/components/ServerManager/createServerModal.tsx',
                        lineNumber: 97,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'form',
                      {
                        onSubmit: handleCreateServer,
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              className: 'col-span-2',
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'label',
                                  {
                                    className: 'block mb-1 text-sm font-medium',
                                    children: 'Server Name',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 105,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'input',
                                  {
                                    type: 'text',
                                    value: newServer.name,
                                    onChange: (e) =>
                                      setNewServer({
                                        ...newServer,
                                        name: e.target.value,
                                      }),
                                    className:
                                      'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    required: true,
                                    disabled: isCreating,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 106,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 104,
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
                                  'label',
                                  {
                                    className: 'block mb-1 text-sm font-medium',
                                    children: 'Version',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 116,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'select',
                                  {
                                    value: newServer.version,
                                    onChange: (e) =>
                                      setNewServer({
                                        ...newServer,
                                        version: e.target.value,
                                      }),
                                    className:
                                      'w-full p-2 border bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    disabled: isCreating,
                                    children:
                                      versions.length > 0
                                        ? versions.map((version) =>
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'jsxDEV'
                                            ])(
                                              'option',
                                              {
                                                value: version,
                                                children: version,
                                              },
                                              version,
                                              false,
                                              {
                                                fileName:
                                                  '[project]/components/ServerManager/createServerModal.tsx',
                                                lineNumber: 125,
                                                columnNumber: 19,
                                              },
                                              this,
                                            ),
                                          )
                                        : /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'option',
                                            {
                                              value: 'latest',
                                              children: 'Latest',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/createServerModal.tsx',
                                              lineNumber: 130,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 117,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 115,
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
                                  'label',
                                  {
                                    className: 'block mb-1 text-sm font-medium',
                                    children: 'vCPUs',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 135,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'input',
                                  {
                                    type: 'number',
                                    min: 1,
                                    max: 32,
                                    step: 1,
                                    value: newServer.vcpus,
                                    onChange: (e) =>
                                      setNewServer({
                                        ...newServer,
                                        vcpus: parseInt(e.target.value) || 1,
                                      }),
                                    className:
                                      'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    disabled: isCreating,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 136,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 134,
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
                                  'label',
                                  {
                                    className: 'block mb-1 text-sm font-medium',
                                    children: 'Memory (GB)',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 148,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'input',
                                  {
                                    type: 'number',
                                    min: 0.5,
                                    max: 32,
                                    step: 0.1,
                                    value: newServer.memory,
                                    onChange: (e) =>
                                      setNewServer({
                                        ...newServer,
                                        memory:
                                          parseFloat(e.target.value) || 0.5,
                                      }),
                                    className:
                                      'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    disabled: isCreating,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 149,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 147,
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
                                  'label',
                                  {
                                    className: 'block mb-1 text-sm font-medium',
                                    children: 'Storage (GB)',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 161,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'input',
                                  {
                                    type: 'number',
                                    min: 5,
                                    max: 50,
                                    step: 1,
                                    value: newServer.storage,
                                    onChange: (e) =>
                                      setNewServer({
                                        ...newServer,
                                        storage: parseInt(e.target.value) || 5,
                                      }),
                                    className:
                                      'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    disabled: isCreating,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 162,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 160,
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
                              className: 'col-span-2',
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'label',
                                  {
                                    className:
                                      'block mb-1 text-sm font-medium flex items-center gap-1',
                                    children: [
                                      'RCON Password',
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          'TooltipProvider'
                                        ],
                                        {
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'Tooltip'
                                            ],
                                            {
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  'jsxDEV'
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    'TooltipTrigger'
                                                  ],
                                                  {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      'jsxDEV'
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__[
                                                        'Info'
                                                      ],
                                                      {
                                                        className:
                                                          'w-4 h-4 text-gray-500',
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          '[project]/components/ServerManager/createServerModal.tsx',
                                                        lineNumber: 180,
                                                        columnNumber: 21,
                                                      },
                                                      this,
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      '[project]/components/ServerManager/createServerModal.tsx',
                                                    lineNumber: 179,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  'jsxDEV'
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    'TooltipContent'
                                                  ],
                                                  {
                                                    children: /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      'jsxDEV'
                                                    ])(
                                                      'p',
                                                      {
                                                        children:
                                                          'Must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*).',
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          '[project]/components/ServerManager/createServerModal.tsx',
                                                        lineNumber: 183,
                                                        columnNumber: 21,
                                                      },
                                                      this,
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      '[project]/components/ServerManager/createServerModal.tsx',
                                                    lineNumber: 182,
                                                    columnNumber: 19,
                                                  },
                                                  this,
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/createServerModal.tsx',
                                              lineNumber: 178,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/components/ServerManager/createServerModal.tsx',
                                          lineNumber: 177,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 175,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'input',
                                  {
                                    type: 'password',
                                    value: newServer.rconPassword,
                                    onChange: (e) =>
                                      setNewServer({
                                        ...newServer,
                                        rconPassword: e.target.value,
                                      }),
                                    className:
                                      'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                                    required: true,
                                    disabled: isCreating,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 190,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 174,
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
                              className: 'col-span-2 flex items-center gap-2',
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'label',
                                  {
                                    className: 'text-sm font-medium',
                                    children: 'Server Mode:',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 200,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'Switch'
                                  ],
                                  {
                                    checked: newServer.onlineMode,
                                    onCheckedChange: (checked) =>
                                      setNewServer({
                                        ...newServer,
                                        onlineMode: checked,
                                      }),
                                    disabled: isCreating,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 201,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'span',
                                  {
                                    children: newServer.onlineMode
                                      ? 'Online'
                                      : 'Offline',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 206,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'TooltipProvider'
                                  ],
                                  {
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'Tooltip'
                                      ],
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'TooltipTrigger'
                                            ],
                                            {
                                              asChild: true,
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__[
                                                  'Info'
                                                ],
                                                {
                                                  className:
                                                    'w-4 h-4 text-gray-500',
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    '[project]/components/ServerManager/createServerModal.tsx',
                                                  lineNumber: 210,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/createServerModal.tsx',
                                              lineNumber: 209,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'TooltipContent'
                                            ],
                                            {
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                'p',
                                                {
                                                  children:
                                                    'If set to Online, the server appears in Factorio’s public server list and requires a Factorio account to join. If set to Offline, the server remains private.',
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    '[project]/components/ServerManager/createServerModal.tsx',
                                                  lineNumber: 213,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/createServerModal.tsx',
                                              lineNumber: 212,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          '[project]/components/ServerManager/createServerModal.tsx',
                                        lineNumber: 208,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 207,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 199,
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
                              className: 'col-span-2 flex items-center gap-2',
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'label',
                                  {
                                    className: 'text-sm font-medium',
                                    children: 'Space Age DLC:',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 221,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'Switch'
                                  ],
                                  {
                                    checked: newServer.dlcEnabled,
                                    onCheckedChange: (checked) =>
                                      setNewServer({
                                        ...newServer,
                                        dlcEnabled: checked,
                                      }),
                                    disabled: !isDlcSupported || isCreating,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 222,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'span',
                                  {
                                    children: newServer.dlcEnabled
                                      ? 'Enabled'
                                      : 'Disabled',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 227,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                !isDlcSupported &&
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'span',
                                    {
                                      className: 'text-sm text-gray-500',
                                      children:
                                        '(Not available for this version)',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/createServerModal.tsx',
                                      lineNumber: 229,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'TooltipProvider'
                                  ],
                                  {
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'Tooltip'
                                      ],
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'TooltipTrigger'
                                            ],
                                            {
                                              asChild: true,
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__[
                                                  'Info'
                                                ],
                                                {
                                                  className:
                                                    'w-4 h-4 text-gray-500',
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    '[project]/components/ServerManager/createServerModal.tsx',
                                                  lineNumber: 234,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/createServerModal.tsx',
                                              lineNumber: 233,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'TooltipContent'
                                            ],
                                            {
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                'p',
                                                {
                                                  children:
                                                    'Enables the Space Age DLC. Requires Factorio version 2.0.0 or higher. All players must own the DLC to join the server.',
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    '[project]/components/ServerManager/createServerModal.tsx',
                                                  lineNumber: 237,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/createServerModal.tsx',
                                              lineNumber: 236,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          '[project]/components/ServerManager/createServerModal.tsx',
                                        lineNumber: 232,
                                        columnNumber: 15,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/createServerModal.tsx',
                                    lineNumber: 231,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 220,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'button',
                            {
                              type: 'submit',
                              disabled: isCreating,
                              className:
                                'col-span-2 mt-4 px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md flex items-center justify-center transition-colors',
                              children: [
                                isCreating &&
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                      'Loader2'
                                    ],
                                    {
                                      className: 'w-5 h-5 mr-2 animate-spin',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/createServerModal.tsx',
                                      lineNumber: 249,
                                      columnNumber: 28,
                                    },
                                    this,
                                  ),
                                isCreating ? 'Creating...' : 'Create Server',
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/components/ServerManager/createServerModal.tsx',
                              lineNumber: 244,
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
                          '[project]/components/ServerManager/createServerModal.tsx',
                        lineNumber: 103,
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
                    '[project]/components/ServerManager/createServerModal.tsx',
                  lineNumber: 96,
                  columnNumber: 7,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName:
                '[project]/components/ServerManager/createServerModal.tsx',
              lineNumber: 95,
              columnNumber: 5,
            },
            this,
          );
        }
      }
    },
  '[project]/components/ServerManager/uploadSave.tsx [app-ssr] (ecmascript)': (
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
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/apiClient.ts [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>',
        );
      ('use client');
      const SaveUpload = ({ serverId, warning = false }) => {
        const [selectedFile, setSelectedFile] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(null);
        const [isModalOpen, setIsModalOpen] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(false);
        const [isUploading, setIsUploading] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(false);
        const [errorMessage, setErrorMessage] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(null);
        const handleFileChange = (e) => {
          if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            setErrorMessage(null); // Reset error on new file selection
          }
        };
        const handleDrop = (e) => {
          e.preventDefault();
          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
            setErrorMessage(null);
            e.dataTransfer.clearData();
          }
        };
        const handleDragOver = (e) => {
          e.preventDefault();
        };
        const handleUploadSave = async () => {
          if (!selectedFile) return;
          setIsUploading(true);
          setErrorMessage(null);
          const formData = new FormData();
          formData.append('save', selectedFile);
          try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'default'
            ].post(`/servers/${serverId}/upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            setSelectedFile(null);
            alert('Save file uploaded successfully');
            setIsModalOpen(false);
          } catch (error) {
            console.error('Upload error:', error);
            if (error.response?.status === 400 && error.response?.data?.error) {
              setErrorMessage(error.response.data.error); // Display version mismatch error
            } else {
              alert('Failed to upload save file');
            }
          } finally {
            setIsUploading(false);
          }
        };
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Fragment'
          ],
          {
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'button',
                {
                  onClick: () => setIsModalOpen(true),
                  className:
                    'px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md flex items-center transition-colors',
                  disabled: isUploading,
                  children: [
                    isUploading
                      ? /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                            'Loader2'
                          ],
                          {
                            className: 'w-4 h-4 mr-2 animate-spin',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/components/ServerManager/uploadSave.tsx',
                            lineNumber: 73,
                            columnNumber: 11,
                          },
                          this,
                        )
                      : /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__[
                            'Upload'
                          ],
                          {
                            className: 'w-4 h-4 mr-2',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/components/ServerManager/uploadSave.tsx',
                            lineNumber: 75,
                            columnNumber: 11,
                          },
                          this,
                        ),
                    'Upload Save',
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/components/ServerManager/uploadSave.tsx',
                  lineNumber: 67,
                  columnNumber: 7,
                },
                this,
              ),
              isModalOpen &&
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className:
                      'fixed inset-0 z-50 flex items-center justify-center',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: 'absolute inset-0 bg-black opacity-50',
                          onClick: () => !isUploading && setIsModalOpen(false),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/components/ServerManager/uploadSave.tsx',
                          lineNumber: 82,
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
                          className:
                            'relative bg-secondary shadow-xl rounded-lg p-6 w-96 z-10',
                          children: [
                            warning &&
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'div',
                                {
                                  className:
                                    'mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded',
                                  children:
                                    'Warning: Uploading a new save file will remove older saves. Please backup your existing save!',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/components/ServerManager/uploadSave.tsx',
                                  lineNumber: 88,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            errorMessage &&
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'div',
                                {
                                  className:
                                    'mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded',
                                  children: errorMessage,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/components/ServerManager/uploadSave.tsx',
                                  lineNumber: 93,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className:
                                  'border-dashed border-4 border-primary rounded-md p-6 text-center cursor-pointer',
                                onDrop: !isUploading ? handleDrop : undefined,
                                onDragOver: !isUploading
                                  ? handleDragOver
                                  : undefined,
                                onClick: !isUploading
                                  ? () =>
                                      document
                                        .getElementById('fileInput')
                                        ?.click()
                                  : undefined,
                                children: isUploading
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'div',
                                      {
                                        className:
                                          'flex items-center justify-center',
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                              'Loader2'
                                            ],
                                            {
                                              className:
                                                'w-4 h-4 mr-2 animate-spin',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/uploadSave.tsx',
                                              lineNumber: 105,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'p',
                                            {
                                              children: 'Uploading...',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/uploadSave.tsx',
                                              lineNumber: 106,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          '[project]/components/ServerManager/uploadSave.tsx',
                                        lineNumber: 104,
                                        columnNumber: 17,
                                      },
                                      this,
                                    )
                                  : selectedFile
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'p',
                                        {
                                          children: selectedFile.name,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/components/ServerManager/uploadSave.tsx',
                                          lineNumber: 109,
                                          columnNumber: 17,
                                        },
                                        this,
                                      )
                                    : /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'p',
                                        {
                                          children:
                                            'Drag and drop your save file here, or click to select a file',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/components/ServerManager/uploadSave.tsx',
                                          lineNumber: 111,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/uploadSave.tsx',
                                lineNumber: 97,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'input',
                              {
                                id: 'fileInput',
                                type: 'file',
                                className: 'hidden',
                                onChange: handleFileChange,
                                disabled: isUploading,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/uploadSave.tsx',
                                lineNumber: 114,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'mt-4 flex justify-end space-x-2',
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'button',
                                    {
                                      onClick: () => setIsModalOpen(false),
                                      className:
                                        'px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors',
                                      disabled: isUploading,
                                      children: 'Cancel',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/uploadSave.tsx',
                                      lineNumber: 122,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'button',
                                    {
                                      onClick: handleUploadSave,
                                      className:
                                        'px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md transition-colors',
                                      disabled: isUploading || !selectedFile,
                                      children: [
                                        isUploading
                                          ? /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'jsxDEV'
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                                'Loader2'
                                              ],
                                              {
                                                className:
                                                  'w-4 h-4 mr-2 animate-spin inline',
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  '[project]/components/ServerManager/uploadSave.tsx',
                                                lineNumber: 135,
                                                columnNumber: 19,
                                              },
                                              this,
                                            )
                                          : null,
                                        'Confirm Upload',
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/uploadSave.tsx',
                                      lineNumber: 129,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/components/ServerManager/uploadSave.tsx',
                                lineNumber: 121,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/components/ServerManager/uploadSave.tsx',
                          lineNumber: 86,
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
                      '[project]/components/ServerManager/uploadSave.tsx',
                    lineNumber: 81,
                    columnNumber: 9,
                  },
                  this,
                ),
            ],
          },
          void 0,
          true,
        );
      };
      const __TURBOPACK__default__export__ = SaveUpload;
    }
  },
  '[project]/components/ServerManager/consoleModal.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var { g: global, d: __dirname } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => ConsoleModal,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/lib/apiClient.ts [app-ssr] (ecmascript)',
          );
        function ConsoleModal({ serverId, onClose }) {
          const [commandHistory, setCommandHistory] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          const [currentCommand, setCurrentCommand] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])('');
          const [logs, setLogs] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          const [isConnecting, setIsConnecting] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])(true);
          const [isSending, setIsSending] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false); // new state to track sending
          const outputRef = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useRef'
          ])(null);
          const eventSourceRef = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useRef'
          ])(null);
          // Connect to server logs when the modal opens
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(() => {
            const connectToLogs = () => {
              setIsConnecting(true);
              eventSourceRef.current = new EventSource(
                `${('TURBOPACK compile-time value', 'http://localhost:3000')}/servers/${serverId}/logs`,
              );
              // Handle incoming messages
              eventSourceRef.current.onmessage = (event) => {
                setLogs((prevLogs) => [...prevLogs, event.data]);
                setIsConnecting(false); // Hide loading once logs start arriving
              };
              // Handle errors
              eventSourceRef.current.onerror = (error) => {
                console.error('EventSource error:', error);
                setIsConnecting(false);
                eventSourceRef.current?.close();
              };
            };
            connectToLogs();
            // Cleanup on unmount
            return () => {
              eventSourceRef.current?.close();
            };
          }, [serverId]);
          // Send RCON command with loading state
          const sendCommand = async () => {
            if (!currentCommand.trim() || isSending) return;
            setIsSending(true);
            try {
              const { data } =
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'default'
                ].post(`/servers/${serverId}/rcon`, {
                  command: currentCommand,
                });
              setCommandHistory((prev) => [
                ...prev,
                {
                  command: currentCommand,
                  response: data.response || 'Command executed',
                },
              ]);
              setCurrentCommand('');
            } catch (error) {
              setCommandHistory((prev) => [
                ...prev,
                {
                  command: currentCommand,
                  response: 'Error: Failed to send command',
                },
              ]);
              console.error('RCON command error:', error);
            } finally {
              setIsSending(false);
            }
          };
          // Auto-scroll to the bottom when logs or command history update
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(() => {
            if (outputRef.current) {
              outputRef.current.scrollTop = outputRef.current.scrollHeight;
            }
          }, [logs, commandHistory]);
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className:
                'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className:
                    'p-6 bg-secondary rounded-lg shadow-xl max-w-4xl w-full h-[80vh] flex flex-col',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'flex justify-between items-center mb-4',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'h2',
                            {
                              className: 'text-2xl font-bold',
                              children: 'Server Console',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/ServerManager/consoleModal.tsx',
                              lineNumber: 91,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'button',
                            {
                              onClick: onClose,
                              className: 'hover:text-gray-700',
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                  'X'
                                ],
                                {
                                  className: 'w-6 h-6',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/components/ServerManager/consoleModal.tsx',
                                  lineNumber: 93,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/ServerManager/consoleModal.tsx',
                              lineNumber: 92,
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
                          '[project]/components/ServerManager/consoleModal.tsx',
                        lineNumber: 90,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className:
                          'flex-1 overflow-y-auto mb-4 p-2 border rounded-md bg-gray-900 text-white',
                        ref: outputRef,
                        children: [
                          isConnecting &&
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className:
                                  'flex justify-center items-center h-full',
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                    'Loader2'
                                  ],
                                  {
                                    className:
                                      'w-8 h-8 text-blue-600 animate-spin',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/consoleModal.tsx',
                                    lineNumber: 102,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/consoleModal.tsx',
                                lineNumber: 101,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          !isConnecting &&
                            logs.map((log, index) =>
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'p',
                                {
                                  className: 'text-gray-300',
                                  children: log,
                                },
                                index,
                                false,
                                {
                                  fileName:
                                    '[project]/components/ServerManager/consoleModal.tsx',
                                  lineNumber: 107,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            ),
                          commandHistory.map((entry, index) =>
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'mb-2',
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'p',
                                    {
                                      className: 'text-green-400',
                                      children: entry.command,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/consoleModal.tsx',
                                      lineNumber: 113,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'p',
                                    {
                                      children: entry.response,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/consoleModal.tsx',
                                      lineNumber: 114,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              index + logs.length,
                              true,
                              {
                                fileName:
                                  '[project]/components/ServerManager/consoleModal.tsx',
                                lineNumber: 112,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/components/ServerManager/consoleModal.tsx',
                        lineNumber: 96,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'flex gap-2',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'input',
                            {
                              type: 'text',
                              value: currentCommand,
                              onChange: (e) =>
                                setCurrentCommand(e.target.value),
                              className:
                                'flex-1 p-2 border rounded-md bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-blue-500',
                              placeholder: 'Enter command',
                              disabled: isSending,
                              onKeyPress: (e) => {
                                if (e.key === 'Enter' && !isSending) {
                                  sendCommand();
                                }
                              },
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/ServerManager/consoleModal.tsx',
                              lineNumber: 119,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'button',
                            {
                              onClick: sendCommand,
                              disabled: isSending,
                              className:
                                'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
                              children: isSending
                                ? /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'Fragment'
                                    ],
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                          'Loader2'
                                        ],
                                        {
                                          className:
                                            'w-5 h-5 mr-2 animate-spin',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/components/ServerManager/consoleModal.tsx',
                                          lineNumber: 139,
                                          columnNumber: 17,
                                        },
                                        this,
                                      ),
                                    },
                                    void 0,
                                    false,
                                  )
                                : 'Send',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/components/ServerManager/consoleModal.tsx',
                              lineNumber: 132,
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
                          '[project]/components/ServerManager/consoleModal.tsx',
                        lineNumber: 118,
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
                    '[project]/components/ServerManager/consoleModal.tsx',
                  lineNumber: 89,
                  columnNumber: 7,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/components/ServerManager/consoleModal.tsx',
              lineNumber: 88,
              columnNumber: 5,
            },
            this,
          );
        }
      }
    },
  '[project]/components/ServerManager/serverList.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, d: __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => ServerList,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-ssr] (ecmascript) <export default as Square>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ =
        __turbopack_context__.i(
          '[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/lib/apiClient.ts [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$uploadSave$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/components/ServerManager/uploadSave.tsx [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$consoleModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/components/ServerManager/consoleModal.tsx [app-ssr] (ecmascript)',
        );
      ('use client');
      function ServerList({ showNotification }) {
        const [servers, setServers] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])([]);
        const [loading, setLoading] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(true);
        const [expandedServers, setExpandedServers] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])({});
        const [actionInProgress, setActionInProgress] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])({});
        const [consoleServerId, setConsoleServerId] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(null); // State to manage console modal
        const fetchServers = async () => {
          try {
            const { data } =
              await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ].get('/servers');
            setServers((prevServers) => {
              return data.map((newServer) => {
                const existingServer = prevServers.find(
                  (server) => server.id === newServer.id,
                );
                if (existingServer) {
                  return {
                    ...newServer,
                    stats: existingServer.stats,
                  };
                }
                return newServer;
              });
            });
          } catch (error) {
            console.error('Error fetching servers:', error);
            showNotification('error', 'Failed to fetch servers');
          } finally {
            setLoading(false);
          }
        };
        const fetchServerStats = async (serverId) => {
          try {
            const { data } =
              await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ].get(`/servers/${serverId}/stats`);
            setServers((prevServers) =>
              prevServers.map((server) =>
                server.id === serverId
                  ? {
                      ...server,
                      stats: data,
                    }
                  : server,
              ),
            );
          } catch (error) {
            console.error(
              `Error fetching stats for server ${serverId}:`,
              error,
            );
          }
        };
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useEffect'
        ])(() => {
          fetchServers();
        }, []);
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useEffect'
        ])(() => {
          const interval = setInterval(() => {
            fetchServers();
          }, 5000);
          return () => clearInterval(interval);
        }, []);
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useEffect'
        ])(() => {
          if (servers.length > 0) {
            const statsInterval = setInterval(() => {
              servers.forEach((server) => {
                if (server.status === 'running') {
                  fetchServerStats(server.id);
                }
              });
            }, 2000);
            return () => clearInterval(statsInterval);
          }
        }, [servers]);
        const handleServerAction = async (serverId, action) => {
          setActionInProgress((prev) => ({
            ...prev,
            [serverId]: action === 'start' ? 'starting' : 'stopping',
          }));
          try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'default'
            ].post(`/servers/${serverId}/${action}`);
            fetchServers();
            showNotification(
              'success',
              `Server ${action === 'start' ? 'started' : 'stopped'} successfully`,
            );
          } catch (error) {
            console.error(`Server ${action} error:`, error);
            showNotification('error', `Failed to ${action} server`);
          } finally {
            setActionInProgress((prev) => ({
              ...prev,
              [serverId]: null,
            }));
          }
        };
        const handleDeleteServer = async (serverId) => {
          if (
            window.confirm(
              'Are you sure you want to delete this server? This action cannot be undone.',
            )
          ) {
            setActionInProgress((prev) => ({
              ...prev,
              [serverId]: 'deleting',
            }));
            try {
              await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ].post(`/servers/${serverId}/delete`);
              fetchServers();
              showNotification('success', 'Server deleted successfully');
            } catch (error) {
              console.error('Server delete error:', error);
              showNotification('error', 'Failed to delete server');
            } finally {
              setActionInProgress((prev) => ({
                ...prev,
                [serverId]: null,
              }));
            }
          }
        };
        if (loading) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: 'flex justify-center items-center h-64',
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                  'Loader2'
                ],
                {
                  className: 'w-8 h-8 text-blue-600 animate-spin',
                },
                void 0,
                false,
                {
                  fileName: '[project]/components/ServerManager/serverList.tsx',
                  lineNumber: 133,
                  columnNumber: 9,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/components/ServerManager/serverList.tsx',
              lineNumber: 132,
              columnNumber: 7,
            },
            this,
          );
        }
        if (servers.length === 0) {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'p',
            {
              className: 'text-center',
              children:
                "No servers found. Click 'Create Server' to get started.",
            },
            void 0,
            false,
            {
              fileName: '[project]/components/ServerManager/serverList.tsx',
              lineNumber: 140,
              columnNumber: 7,
            },
            this,
          );
        }
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: 'grid gap-6',
            children: [
              servers.map((server) =>
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className:
                      'p-6 rounded-lg bg-secondary hover:bg-secondary/50 shadow-sm border hover:shadow-md transition-shadow duration-200',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: 'flex justify-between items-center mb-4',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'h3',
                              {
                                className: 'text-xl font-semibold',
                                children: server.name,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/serverList.tsx',
                                lineNumber: 152,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'span',
                              {
                                className: `px-3 py-1 text-sm font-medium rounded-full ${server.status === 'running' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                children:
                                  server.status.charAt(0).toUpperCase() +
                                  server.status.slice(1),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/serverList.tsx',
                                lineNumber: 153,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/components/ServerManager/serverList.tsx',
                          lineNumber: 151,
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
                          className: 'flex justify-between items-center',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'flex gap-3',
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'button',
                                    {
                                      onClick: () =>
                                        handleServerAction(
                                          server.id,
                                          server.status === 'running'
                                            ? 'stop'
                                            : 'start',
                                        ),
                                      disabled: !!actionInProgress[server.id],
                                      className: `px-4 py-2 rounded-md text-white flex items-center transition-colors ${server.status === 'running' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} ${actionInProgress[server.id] ? 'opacity-50 cursor-not-allowed' : ''}`,
                                      children: [
                                        actionInProgress[server.id] ===
                                          'starting' ||
                                        actionInProgress[server.id] ===
                                          'stopping'
                                          ? /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              'jsxDEV'
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                                'Loader2'
                                              ],
                                              {
                                                className:
                                                  'w-4 h-4 mr-2 animate-spin',
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  '[project]/components/ServerManager/serverList.tsx',
                                                lineNumber: 171,
                                                columnNumber: 19,
                                              },
                                              this,
                                            )
                                          : server.status === 'running'
                                            ? /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__[
                                                  'Square'
                                                ],
                                                {
                                                  className: 'w-4 h-4 mr-2',
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    '[project]/components/ServerManager/serverList.tsx',
                                                  lineNumber: 173,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              )
                                            : /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__[
                                                  'Play'
                                                ],
                                                {
                                                  className: 'w-4 h-4 mr-2',
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    '[project]/components/ServerManager/serverList.tsx',
                                                  lineNumber: 175,
                                                  columnNumber: 19,
                                                },
                                                this,
                                              ),
                                        actionInProgress[server.id] ===
                                        'starting'
                                          ? 'Starting...'
                                          : actionInProgress[server.id] ===
                                              'stopping'
                                            ? 'Stopping...'
                                            : server.status === 'running'
                                              ? 'Stop'
                                              : 'Start',
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 163,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$uploadSave$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      'default'
                                    ],
                                    {
                                      serverId: server.id,
                                      warning: true,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 185,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'button',
                                    {
                                      onClick: () =>
                                        setConsoleServerId(server.id),
                                      disabled: server.status !== 'running',
                                      className: `px-4 py-2 rounded-md text-white flex items-center transition-colors bg-blue-600 hover:bg-blue-700 ${server.status !== 'running' ? 'opacity-50 cursor-not-allowed' : ''}`,
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__[
                                            'Terminal'
                                          ],
                                          {
                                            className: 'w-4 h-4 mr-2',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 194,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        'Console',
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 187,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/components/ServerManager/serverList.tsx',
                                lineNumber: 162,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'button',
                              {
                                onClick: () =>
                                  setExpandedServers((prev) => ({
                                    ...prev,
                                    [server.id]: !prev[server.id],
                                  })),
                                className:
                                  'px-4 py-2 bg-primary rounded-md hover:bg-primary/80 flex items-center transition-colors',
                                children: [
                                  expandedServers[server.id]
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__[
                                          'ChevronUp'
                                        ],
                                        {
                                          className: 'w-4 h-4 mr-2',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/components/ServerManager/serverList.tsx',
                                          lineNumber: 202,
                                          columnNumber: 45,
                                        },
                                        this,
                                      )
                                    : /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                                          'ChevronDown'
                                        ],
                                        {
                                          className: 'w-4 h-4 mr-2',
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/components/ServerManager/serverList.tsx',
                                          lineNumber: 202,
                                          columnNumber: 86,
                                        },
                                        this,
                                      ),
                                  'Details',
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/components/ServerManager/serverList.tsx',
                                lineNumber: 198,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/components/ServerManager/serverList.tsx',
                          lineNumber: 161,
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
                          className: `overflow-hidden transition-all duration-300 ${expandedServers[server.id] ? 'max-h-96' : 'max-h-0'}`,
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className:
                                  'mt-4 p-4 rounded-md grid grid-cols-2 gap-4 text-sm',
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
                                          'span',
                                          {
                                            className: 'font-semibold',
                                            children: 'Port:',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 210,
                                            columnNumber: 20,
                                          },
                                          this,
                                        ),
                                        ' ',
                                        server.port,
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 210,
                                      columnNumber: 15,
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
                                          'span',
                                          {
                                            className: 'font-semibold',
                                            children: 'Version:',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 211,
                                            columnNumber: 20,
                                          },
                                          this,
                                        ),
                                        ' ',
                                        server.version,
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 211,
                                      columnNumber: 15,
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
                                          'span',
                                          {
                                            className: 'font-semibold',
                                            children: 'vCPUs:',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 212,
                                            columnNumber: 20,
                                          },
                                          this,
                                        ),
                                        ' ',
                                        server.vcpus,
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 212,
                                      columnNumber: 15,
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
                                          'span',
                                          {
                                            className: 'font-semibold',
                                            children: 'Memory:',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 213,
                                            columnNumber: 20,
                                          },
                                          this,
                                        ),
                                        ' ',
                                        server.memory / 1024,
                                        ' GB',
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 213,
                                      columnNumber: 15,
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
                                          'span',
                                          {
                                            className: 'font-semibold',
                                            children: 'Storage:',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 214,
                                            columnNumber: 20,
                                          },
                                          this,
                                        ),
                                        ' ',
                                        server.storage,
                                        ' GB',
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 214,
                                      columnNumber: 15,
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
                                          'span',
                                          {
                                            className: 'font-semibold',
                                            children: 'Server Id:',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 215,
                                            columnNumber: 20,
                                          },
                                          this,
                                        ),
                                        ' ',
                                        server.id,
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/components/ServerManager/serverList.tsx',
                                      lineNumber: 215,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  server.stats
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          'Fragment'
                                        ],
                                        {
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
                                                    'span',
                                                    {
                                                      className:
                                                        'font-semibold',
                                                      children: 'CPU Usage:',
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        '[project]/components/ServerManager/serverList.tsx',
                                                      lineNumber: 219,
                                                      columnNumber: 21,
                                                    },
                                                    this,
                                                  ),
                                                  ' ',
                                                  server.stats.cpuUsage !==
                                                  undefined
                                                    ? `${server.stats.cpuUsage}%`
                                                    : 'N/A',
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  '[project]/components/ServerManager/serverList.tsx',
                                                lineNumber: 218,
                                                columnNumber: 19,
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
                                                    'span',
                                                    {
                                                      className:
                                                        'font-semibold',
                                                      children: 'Memory Usage:',
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        '[project]/components/ServerManager/serverList.tsx',
                                                      lineNumber: 223,
                                                      columnNumber: 21,
                                                    },
                                                    this,
                                                  ),
                                                  ' ',
                                                  server.stats.memoryUsage !==
                                                    undefined &&
                                                  server.stats.memoryLimit !==
                                                    undefined
                                                    ? `${Math.round(server.stats.memoryUsage)}MB / ${(server.stats.memoryLimit / 1024).toFixed(1)} GB`
                                                    : 'N/A',
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  '[project]/components/ServerManager/serverList.tsx',
                                                lineNumber: 222,
                                                columnNumber: 19,
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
                                                    'span',
                                                    {
                                                      className:
                                                        'font-semibold',
                                                      children:
                                                        'Network Usage:',
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        '[project]/components/ServerManager/serverList.tsx',
                                                      lineNumber: 229,
                                                      columnNumber: 21,
                                                    },
                                                    this,
                                                  ),
                                                  ' ',
                                                  server.stats.networkUsage
                                                    ?.tx_bytes !== undefined
                                                    ? `${(server.stats.networkUsage.tx_bytes / 1048576).toFixed(2)} MB`
                                                    : 'N/A',
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  '[project]/components/ServerManager/serverList.tsx',
                                                lineNumber: 228,
                                                columnNumber: 19,
                                              },
                                              this,
                                            ),
                                            server.stats.onlinePlayers !==
                                              undefined &&
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
                                                      'span',
                                                      {
                                                        className:
                                                          'font-semibold',
                                                        children:
                                                          'Online Players:',
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          '[project]/components/ServerManager/serverList.tsx',
                                                        lineNumber: 236,
                                                        columnNumber: 23,
                                                      },
                                                      this,
                                                    ),
                                                    ' ',
                                                    server.stats.onlinePlayers,
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    '[project]/components/ServerManager/serverList.tsx',
                                                  lineNumber: 235,
                                                  columnNumber: 21,
                                                },
                                                this,
                                              ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                      )
                                    : server.status === 'running'
                                      ? /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          'jsxDEV'
                                        ])(
                                          'div',
                                          {
                                            className:
                                              'col-span-2 text-gray-500',
                                            children: 'Loading stats...',
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              '[project]/components/ServerManager/serverList.tsx',
                                            lineNumber: 241,
                                            columnNumber: 17,
                                          },
                                          this,
                                        )
                                      : null,
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/components/ServerManager/serverList.tsx',
                                lineNumber: 209,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'mt-4 flex justify-end',
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'button',
                                  {
                                    onClick: () =>
                                      handleDeleteServer(server.id),
                                    disabled:
                                      actionInProgress[server.id] ===
                                      'deleting',
                                    className: `px-4 py-2 bg-red-600 text-white rounded-md flex items-center transition-colors ${actionInProgress[server.id] === 'deleting' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`,
                                    children: [
                                      actionInProgress[server.id] === 'deleting'
                                        ? /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                              'Loader2'
                                            ],
                                            {
                                              className:
                                                'w-4 h-4 mr-2 animate-spin',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/serverList.tsx',
                                              lineNumber: 253,
                                              columnNumber: 19,
                                            },
                                            this,
                                          )
                                        : /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__[
                                              'Trash2'
                                            ],
                                            {
                                              className: 'w-4 h-4 mr-2',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/components/ServerManager/serverList.tsx',
                                              lineNumber: 255,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                      actionInProgress[server.id] === 'deleting'
                                        ? 'Deleting...'
                                        : 'Delete Server',
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/serverList.tsx',
                                    lineNumber: 245,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/serverList.tsx',
                                lineNumber: 244,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            '[project]/components/ServerManager/serverList.tsx',
                          lineNumber: 206,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    ],
                  },
                  server.id,
                  true,
                  {
                    fileName:
                      '[project]/components/ServerManager/serverList.tsx',
                    lineNumber: 147,
                    columnNumber: 9,
                  },
                  this,
                ),
              ),
              consoleServerId &&
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$consoleModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {
                    serverId: consoleServerId,
                    onClose: () => setConsoleServerId(null),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/components/ServerManager/serverList.tsx',
                    lineNumber: 264,
                    columnNumber: 27,
                  },
                  this,
                ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/components/ServerManager/serverList.tsx',
            lineNumber: 145,
            columnNumber: 5,
          },
          this,
        );
      }
    }
  },
  '[project]/components/ServerManager/ServerManager.tsx [app-ssr] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var { g: global, d: __dirname } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => ServerManager,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/components/ServerManager/notification.tsx [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$createServerModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/components/ServerManager/createServerModal.tsx [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$serverList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/components/ServerManager/serverList.tsx [app-ssr] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/lib/apiClient.ts [app-ssr] (ecmascript)',
          );
        ('use client');
        function ServerManager() {
          const [notification, setNotification] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])(null);
          const [versions, setVersions] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          const [refreshServersTrigger, setRefreshServersTrigger] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false);
          const [isCreateModalOpen, setIsCreateModalOpen] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false);
          const showNotification = (type, message) => {
            setNotification({
              type,
              message,
            });
            setTimeout(() => setNotification(null), 5000);
          };
          const refreshServers = () => {
            const scrollY = window.scrollY;
            setRefreshServersTrigger((prev) => !prev);
            setTimeout(() => window.scrollTo(0, scrollY), 0);
          };
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(() => {
            const fetchVersions = async () => {
              try {
                const { data } =
                  await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'default'
                  ].get('servers/versions');
                setVersions(data);
              } catch (error) {
                console.error('Error fetching versions:', error);
              }
            };
            fetchVersions();
          }, []);
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: 'p-8 max-w-7xl mx-auto',
              children: [
                notification &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$notification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {
                      type: notification.type,
                      message: notification.message,
                      onClose: () => setNotification(null),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/components/ServerManager/ServerManager.tsx',
                      lineNumber: 41,
                      columnNumber: 9,
                    },
                    this,
                  ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className: 'flex justify-between items-center mb-6',
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'h1',
                        {
                          className: 'text-3xl font-bold',
                          children: 'Server Manager',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/components/ServerManager/ServerManager.tsx',
                          lineNumber: 44,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: 'flex gap-4',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'button',
                              {
                                onClick: refreshServers,
                                className:
                                  'p-2 hover:bg-gray-500/50 rounded-md transition-colors',
                                title: 'Refresh Servers',
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__[
                                    'RefreshCw'
                                  ],
                                  {
                                    className: 'w-5 h-5',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/components/ServerManager/ServerManager.tsx',
                                    lineNumber: 51,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/ServerManager.tsx',
                                lineNumber: 46,
                                columnNumber: 11,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'button',
                              {
                                onClick: () => setIsCreateModalOpen(true),
                                className:
                                  'px-4 py-2 bg-primary hover:bg-primary/80 rounded-md transition-colors',
                                children: 'Create Server',
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/components/ServerManager/ServerManager.tsx',
                                lineNumber: 53,
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
                            '[project]/components/ServerManager/ServerManager.tsx',
                          lineNumber: 45,
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
                      '[project]/components/ServerManager/ServerManager.tsx',
                    lineNumber: 43,
                    columnNumber: 7,
                  },
                  this,
                ),
                isCreateModalOpen &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$createServerModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {
                      onClose: () => setIsCreateModalOpen(false),
                      refreshServers: refreshServers,
                      showNotification: showNotification,
                      versions: versions,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/components/ServerManager/ServerManager.tsx',
                      lineNumber: 62,
                      columnNumber: 9,
                    },
                    this,
                  ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServerManager$2f$serverList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {
                    showNotification: showNotification,
                    refreshTrigger: refreshServersTrigger,
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/components/ServerManager/ServerManager.tsx',
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
              fileName: '[project]/components/ServerManager/ServerManager.tsx',
              lineNumber: 39,
              columnNumber: 5,
            },
            this,
          );
        }
      }
    },
};

//# sourceMappingURL=components_2c7b1109._.js.map
