(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    3172: (e, s, r) => {
      'use strict';
      r.d(s, { A: () => n });
      var t = r(2651),
        a = r(2818);
      let n = t.A.create({
        baseURL: a.env.NEXT_PUBLIC_API_URL,
        headers: { 'Content-Type': 'application/json' },
      });
    },
    5991: (e, s, r) => {
      'use strict';
      r.d(s, { default: () => L });
      var t = r(5155),
        a = r(2115),
        n = r(3239),
        l = r(1594);
      function i(e) {
        let { type: s, message: r, onClose: a } = e;
        return (0, t.jsxs)('div', {
          className:
            'fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg \n      '.concat(
              'success' === s
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800',
            ),
          children: [
            'success' === s
              ? (0, t.jsx)(n.A, { className: 'w-5 h-5 mr-2' })
              : (0, t.jsx)(l.A, { className: 'w-5 h-5 mr-2' }),
            (0, t.jsx)('span', { className: 'font-medium', children: r }),
            (0, t.jsx)('button', {
              onClick: a,
              className: 'ml-4 text-gray-400 hover:text-gray-900',
              children: '\xd7',
            }),
          ],
        });
      }
      var o = r(767),
        d = r(8617),
        c = r(4505),
        m = r(2920),
        u = r(9602);
      let x = a.forwardRef((e, s) => {
        let { className: r, ...a } = e;
        return (0, t.jsx)(m.bL, {
          className: (0, u.cn)(
            'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            r,
          ),
          ...a,
          ref: s,
          children: (0, t.jsx)(m.zi, {
            className: (0, u.cn)(
              'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
            ),
          }),
        });
      });
      x.displayName = m.bL.displayName;
      var h = r(5375);
      let p = h.Kq,
        f = h.bL,
        g = h.l9,
        v = a.forwardRef((e, s) => {
          let { className: r, sideOffset: a = 4, ...n } = e;
          return (0, t.jsx)(h.ZL, {
            children: (0, t.jsx)(h.UC, {
              ref: s,
              sideOffset: a,
              className: (0, u.cn)(
                'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                r,
              ),
              ...n,
            }),
          });
        });
      v.displayName = h.UC.displayName;
      var b = r(3172);
      function j(e) {
        var s;
        let {
            onClose: r,
            refreshServers: n,
            showNotification: l,
            versions: i,
          } = e,
          [m, u] = (0, a.useState)({
            name: '',
            vcpus: 2,
            memory: 4,
            storage: 10,
            version: i[0] || 'latest',
            onlineMode: !1,
            dlcEnabled: !1,
            rconPassword: '',
          }),
          [h, j] = (0, a.useState)(!1),
          y =
            ('latest' === (s = m.version)
              ? 2
              : parseInt(s.split('.')[0], 10)) >= 2;
        (0, a.useEffect)(() => {
          y || u((e) => ({ ...e, dlcEnabled: !1 }));
        }, [m.version]);
        let N = async (e) => {
          if (
            (e.preventDefault(),
            !m.rconPassword ||
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
                m.rconPassword,
              ))
          ) {
            l(
              'error',
              'RCON password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters',
            );
            return;
          }
          if (!m.name.trim()) {
            l('error', 'Server name is required');
            return;
          }
          if (m.vcpus < 1 || m.vcpus > 32) {
            l('error', 'vCPUs must be between 1 and 32');
            return;
          }
          if (m.memory < 0.5 || m.memory > 32) {
            l('error', 'Memory must be between 0.5 GB and 32 GB');
            return;
          }
          if (m.storage < 5 || m.storage > 50) {
            l('error', 'Storage must be between 5 GB and 50 GB');
            return;
          }
          if (!m.version) {
            l('error', 'Version must be selected');
            return;
          }
          j(!0);
          try {
            let e = {
              ...m,
              memory: Math.round(1024 * m.memory),
              rconPassword: m.rconPassword,
            };
            await b.A.post('/servers', e),
              r(),
              n(),
              l('success', 'Server created successfully');
          } catch (e) {
            l('error', 'Failed to create server'), console.log(e);
          } finally {
            j(!1);
          }
        };
        return (0, t.jsx)('div', {
          className:
            'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
          children: (0, t.jsxs)('div', {
            className: 'p-6 bg-secondary rounded-lg shadow-xl max-w-lg w-full',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex justify-between items-center mb-4',
                children: [
                  (0, t.jsx)('h2', {
                    className: 'text-2xl font-bold',
                    children: 'Create New Server',
                  }),
                  (0, t.jsx)('button', {
                    onClick: r,
                    className: 'hover:text-gray-700',
                    children: (0, t.jsx)(o.A, { className: 'w-6 h-6' }),
                  }),
                ],
              }),
              (0, t.jsxs)('form', {
                onSubmit: N,
                className: 'grid grid-cols-2 gap-4',
                children: [
                  (0, t.jsxs)('div', {
                    className: 'col-span-2',
                    children: [
                      (0, t.jsx)('label', {
                        className: 'block mb-1 text-sm font-medium',
                        children: 'Server Name',
                      }),
                      (0, t.jsx)('input', {
                        type: 'text',
                        value: m.name,
                        onChange: (e) => u({ ...m, name: e.target.value }),
                        className:
                          'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                        required: !0,
                        disabled: h,
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      (0, t.jsx)('label', {
                        className: 'block mb-1 text-sm font-medium',
                        children: 'Version',
                      }),
                      (0, t.jsx)('select', {
                        value: m.version,
                        onChange: (e) => u({ ...m, version: e.target.value }),
                        className:
                          'w-full p-2 border bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                        disabled: h,
                        children:
                          i.length > 0
                            ? i.map((e) =>
                                (0, t.jsx)(
                                  'option',
                                  { value: e, children: e },
                                  e,
                                ),
                              )
                            : (0, t.jsx)('option', {
                                value: 'latest',
                                children: 'Latest',
                              }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      (0, t.jsx)('label', {
                        className: 'block mb-1 text-sm font-medium',
                        children: 'vCPUs',
                      }),
                      (0, t.jsx)('input', {
                        type: 'number',
                        min: 1,
                        max: 32,
                        step: 1,
                        value: m.vcpus,
                        onChange: (e) =>
                          u({ ...m, vcpus: parseInt(e.target.value) || 1 }),
                        className:
                          'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                        disabled: h,
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      (0, t.jsx)('label', {
                        className: 'block mb-1 text-sm font-medium',
                        children: 'Memory (GB)',
                      }),
                      (0, t.jsx)('input', {
                        type: 'number',
                        min: 0.5,
                        max: 32,
                        step: 0.1,
                        value: m.memory,
                        onChange: (e) =>
                          u({
                            ...m,
                            memory: parseFloat(e.target.value) || 0.5,
                          }),
                        className:
                          'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                        disabled: h,
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      (0, t.jsx)('label', {
                        className: 'block mb-1 text-sm font-medium',
                        children: 'Storage (GB)',
                      }),
                      (0, t.jsx)('input', {
                        type: 'number',
                        min: 5,
                        max: 50,
                        step: 1,
                        value: m.storage,
                        onChange: (e) =>
                          u({ ...m, storage: parseInt(e.target.value) || 5 }),
                        className:
                          'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                        disabled: h,
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: 'col-span-2',
                    children: [
                      (0, t.jsxs)('label', {
                        className:
                          'block mb-1 text-sm font-medium flex items-center gap-1',
                        children: [
                          'RCON Password',
                          (0, t.jsx)(p, {
                            children: (0, t.jsxs)(f, {
                              children: [
                                (0, t.jsx)(g, {
                                  asChild: !0,
                                  children: (0, t.jsx)(d.A, {
                                    className: 'w-4 h-4 text-gray-500',
                                  }),
                                }),
                                (0, t.jsx)(v, {
                                  children: (0, t.jsx)('p', {
                                    children:
                                      'Must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*).',
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)('input', {
                        type: 'password',
                        value: m.rconPassword,
                        onChange: (e) =>
                          u({ ...m, rconPassword: e.target.value }),
                        className:
                          'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                        required: !0,
                        disabled: h,
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: 'col-span-2 flex items-center gap-2',
                    children: [
                      (0, t.jsx)('label', {
                        className: 'text-sm font-medium',
                        children: 'Server Mode:',
                      }),
                      (0, t.jsx)(x, {
                        checked: m.onlineMode,
                        onCheckedChange: (e) => u({ ...m, onlineMode: e }),
                        disabled: h,
                      }),
                      (0, t.jsx)('span', {
                        children: m.onlineMode ? 'Online' : 'Offline',
                      }),
                      (0, t.jsx)(p, {
                        children: (0, t.jsxs)(f, {
                          children: [
                            (0, t.jsx)(g, {
                              asChild: !0,
                              children: (0, t.jsx)(d.A, {
                                className: 'w-4 h-4 text-gray-500',
                              }),
                            }),
                            (0, t.jsx)(v, {
                              children: (0, t.jsx)('p', {
                                children:
                                  'If set to Online, the server appears in Factorio’s public server list and requires a Factorio account to join. If set to Offline, the server remains private.',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: 'col-span-2 flex items-center gap-2',
                    children: [
                      (0, t.jsx)('label', {
                        className: 'text-sm font-medium',
                        children: 'Space Age DLC:',
                      }),
                      (0, t.jsx)(x, {
                        checked: m.dlcEnabled,
                        onCheckedChange: (e) => u({ ...m, dlcEnabled: e }),
                        disabled: !y || h,
                      }),
                      (0, t.jsx)('span', {
                        children: m.dlcEnabled ? 'Enabled' : 'Disabled',
                      }),
                      !y &&
                        (0, t.jsx)('span', {
                          className: 'text-sm text-gray-500',
                          children: '(Not available for this version)',
                        }),
                      (0, t.jsx)(p, {
                        children: (0, t.jsxs)(f, {
                          children: [
                            (0, t.jsx)(g, {
                              asChild: !0,
                              children: (0, t.jsx)(d.A, {
                                className: 'w-4 h-4 text-gray-500',
                              }),
                            }),
                            (0, t.jsx)(v, {
                              children: (0, t.jsx)('p', {
                                children:
                                  'Enables the Space Age DLC. Requires Factorio version 2.0.0 or higher. All players must own the DLC to join the server.',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)('button', {
                    type: 'submit',
                    disabled: h,
                    className:
                      'col-span-2 mt-4 px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md flex items-center justify-center transition-colors',
                    children: [
                      h &&
                        (0, t.jsx)(c.A, {
                          className: 'w-5 h-5 mr-2 animate-spin',
                        }),
                      h ? 'Creating...' : 'Create Server',
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var y = r(1406),
        N = r(9191),
        w = r(6609),
        C = r(1902),
        S = r(1719),
        k = r(5686),
        A = r(8684);
      let E = (e) => {
        let { serverId: s, warning: r = !1 } = e,
          [n, l] = (0, a.useState)(null),
          [i, o] = (0, a.useState)(!1),
          [d, m] = (0, a.useState)(!1),
          [u, x] = (0, a.useState)(null),
          h = async () => {
            if (!n) return;
            m(!0), x(null);
            let e = new FormData();
            e.append('save', n);
            try {
              await b.A.post('/servers/'.concat(s, '/upload'), e, {
                headers: { 'Content-Type': 'multipart/form-data' },
              }),
                l(null),
                alert('Save file uploaded successfully'),
                o(!1);
            } catch (e) {
              var r, t, a;
              console.error('Upload error:', e),
                (null === (r = e.response) || void 0 === r
                  ? void 0
                  : r.status) === 400 &&
                (null === (a = e.response) || void 0 === a
                  ? void 0
                  : null === (t = a.data) || void 0 === t
                    ? void 0
                    : t.error)
                  ? x(e.response.data.error)
                  : alert('Failed to upload save file');
            } finally {
              m(!1);
            }
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)('button', {
              onClick: () => o(!0),
              className:
                'px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md flex items-center transition-colors',
              disabled: d,
              children: [
                d
                  ? (0, t.jsx)(c.A, { className: 'w-4 h-4 mr-2 animate-spin' })
                  : (0, t.jsx)(A.A, { className: 'w-4 h-4 mr-2' }),
                'Upload Save',
              ],
            }),
            i &&
              (0, t.jsxs)('div', {
                className:
                  'fixed inset-0 z-50 flex items-center justify-center',
                children: [
                  (0, t.jsx)('div', {
                    className: 'absolute inset-0 bg-black opacity-50',
                    onClick: () => !d && o(!1),
                  }),
                  (0, t.jsxs)('div', {
                    className:
                      'relative bg-secondary shadow-xl rounded-lg p-6 w-96 z-10',
                    children: [
                      r &&
                        (0, t.jsx)('div', {
                          className:
                            'mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded',
                          children:
                            'Warning: Uploading a new save file will remove older saves. Please backup your existing save!',
                        }),
                      u &&
                        (0, t.jsx)('div', {
                          className:
                            'mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded',
                          children: u,
                        }),
                      (0, t.jsx)('div', {
                        className:
                          'border-dashed border-4 border-primary rounded-md p-6 text-center cursor-pointer',
                        onDrop: d
                          ? void 0
                          : (e) => {
                              e.preventDefault(),
                                e.dataTransfer.files &&
                                  e.dataTransfer.files.length > 0 &&
                                  (l(e.dataTransfer.files[0]),
                                  x(null),
                                  e.dataTransfer.clearData());
                            },
                        onDragOver: d
                          ? void 0
                          : (e) => {
                              e.preventDefault();
                            },
                        onClick: d
                          ? void 0
                          : () => {
                              var e;
                              return null ===
                                (e = document.getElementById('fileInput')) ||
                                void 0 === e
                                ? void 0
                                : e.click();
                            },
                        children: d
                          ? (0, t.jsxs)('div', {
                              className: 'flex items-center justify-center',
                              children: [
                                (0, t.jsx)(c.A, {
                                  className: 'w-4 h-4 mr-2 animate-spin',
                                }),
                                (0, t.jsx)('p', { children: 'Uploading...' }),
                              ],
                            })
                          : n
                            ? (0, t.jsx)('p', { children: n.name })
                            : (0, t.jsx)('p', {
                                children:
                                  'Drag and drop your save file here, or click to select a file',
                              }),
                      }),
                      (0, t.jsx)('input', {
                        id: 'fileInput',
                        type: 'file',
                        className: 'hidden',
                        onChange: (e) => {
                          e.target.files &&
                            e.target.files.length > 0 &&
                            (l(e.target.files[0]), x(null));
                        },
                        disabled: d,
                      }),
                      (0, t.jsxs)('div', {
                        className: 'mt-4 flex justify-end space-x-2',
                        children: [
                          (0, t.jsx)('button', {
                            onClick: () => o(!1),
                            className:
                              'px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors',
                            disabled: d,
                            children: 'Cancel',
                          }),
                          (0, t.jsxs)('button', {
                            onClick: h,
                            className:
                              'px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md transition-colors',
                            disabled: d || !n,
                            children: [
                              d
                                ? (0, t.jsx)(c.A, {
                                    className:
                                      'w-4 h-4 mr-2 animate-spin inline',
                                  })
                                : null,
                              'Confirm Upload',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      };
      var U = r(2818);
      function P(e) {
        let { serverId: s, onClose: r } = e,
          [n, l] = (0, a.useState)([]),
          [i, d] = (0, a.useState)(''),
          [m, u] = (0, a.useState)([]),
          [x, h] = (0, a.useState)(!0),
          [p, f] = (0, a.useState)(!1),
          g = (0, a.useRef)(null),
          v = (0, a.useRef)(null);
        (0, a.useEffect)(
          () => (
            h(!0),
            (v.current = new EventSource(
              ''
                .concat(U.env.NEXT_PUBLIC_API_URL, '/servers/')
                .concat(s, '/logs'),
            )),
            (v.current.onmessage = (e) => {
              u((s) => [...s, e.data]), h(!1);
            }),
            (v.current.onerror = (e) => {
              var s;
              console.error('EventSource error:', e),
                h(!1),
                null === (s = v.current) || void 0 === s || s.close();
            }),
            () => {
              var e;
              null === (e = v.current) || void 0 === e || e.close();
            }
          ),
          [s],
        );
        let j = async () => {
          if (i.trim() && !p) {
            f(!0);
            try {
              let { data: e } = await b.A.post('/servers/'.concat(s, '/rcon'), {
                command: i,
              });
              l((s) => [
                ...s,
                { command: i, response: e.response || 'Command executed' },
              ]),
                d('');
            } catch (e) {
              l((e) => [
                ...e,
                { command: i, response: 'Error: Failed to send command' },
              ]),
                console.error('RCON command error:', e);
            } finally {
              f(!1);
            }
          }
        };
        return (
          (0, a.useEffect)(() => {
            g.current && (g.current.scrollTop = g.current.scrollHeight);
          }, [m, n]),
          (0, t.jsx)('div', {
            className:
              'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
            children: (0, t.jsxs)('div', {
              className:
                'p-6 bg-secondary rounded-lg shadow-xl max-w-4xl w-full h-[80vh] flex flex-col',
              children: [
                (0, t.jsxs)('div', {
                  className: 'flex justify-between items-center mb-4',
                  children: [
                    (0, t.jsx)('h2', {
                      className: 'text-2xl font-bold',
                      children: 'Server Console',
                    }),
                    (0, t.jsx)('button', {
                      onClick: r,
                      className: 'hover:text-gray-700',
                      children: (0, t.jsx)(o.A, { className: 'w-6 h-6' }),
                    }),
                  ],
                }),
                (0, t.jsxs)('div', {
                  className:
                    'flex-1 overflow-y-auto mb-4 p-2 border rounded-md bg-gray-900 text-white',
                  ref: g,
                  children: [
                    x &&
                      (0, t.jsx)('div', {
                        className: 'flex justify-center items-center h-full',
                        children: (0, t.jsx)(c.A, {
                          className: 'w-8 h-8 text-blue-600 animate-spin',
                        }),
                      }),
                    !x &&
                      m.map((e, s) =>
                        (0, t.jsx)(
                          'p',
                          { className: 'text-gray-300', children: e },
                          s,
                        ),
                      ),
                    n.map((e, s) =>
                      (0, t.jsxs)(
                        'div',
                        {
                          className: 'mb-2',
                          children: [
                            (0, t.jsx)('p', {
                              className: 'text-green-400',
                              children: e.command,
                            }),
                            (0, t.jsx)('p', { children: e.response }),
                          ],
                        },
                        s + m.length,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)('div', {
                  className: 'flex gap-2',
                  children: [
                    (0, t.jsx)('input', {
                      type: 'text',
                      value: i,
                      onChange: (e) => d(e.target.value),
                      className:
                        'flex-1 p-2 border rounded-md bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-blue-500',
                      placeholder: 'Enter command',
                      disabled: p,
                      onKeyPress: (e) => {
                        'Enter' !== e.key || p || j();
                      },
                    }),
                    (0, t.jsx)('button', {
                      onClick: j,
                      disabled: p,
                      className:
                        'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
                      children: p
                        ? (0, t.jsx)(t.Fragment, {
                            children: (0, t.jsx)(c.A, {
                              className: 'w-5 h-5 mr-2 animate-spin',
                            }),
                          })
                        : 'Send',
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function I(e) {
        let { showNotification: s } = e,
          [r, n] = (0, a.useState)([]),
          [l, i] = (0, a.useState)(!0),
          [o, d] = (0, a.useState)({}),
          [m, u] = (0, a.useState)({}),
          [x, h] = (0, a.useState)(null),
          p = async function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e && i(!0);
            try {
              let { data: e } = await b.A.get('/servers');
              n(e);
            } catch (e) {
              console.error('Error fetching servers:', e),
                s('error', 'Failed to fetch servers');
            } finally {
              e && i(!1);
            }
          },
          f = async (e) => {
            try {
              let { data: s } = await b.A.get('/servers/'.concat(e, '/stats'));
              n((r) => r.map((r) => (r.id === e ? { ...r, stats: s } : r)));
            } catch (s) {
              console.error(
                'Error fetching stats for server '.concat(e, ':'),
                s,
              );
            }
          };
        (0, a.useEffect)(() => {
          p(!0);
          let e = setInterval(() => {
            p();
          }, 2e3);
          return () => clearInterval(e);
        }, []),
          (0, a.useEffect)(() => {
            if (!l && r.length > 0) {
              let e = setInterval(() => {
                r.forEach((e) => {
                  'running' === e.status && f(e.id);
                });
              }, 5e3);
              return () => clearInterval(e);
            }
          }, [r, l]);
        let g = async (e, r) => {
            u((s) => ({ ...s, [e]: 'start' === r ? 'starting' : 'stopping' }));
            try {
              await b.A.post('/servers/'.concat(e, '/').concat(r)),
                p(),
                s(
                  'success',
                  'Server '.concat(
                    'start' === r ? 'started' : 'stopped',
                    ' successfully',
                  ),
                );
            } catch (e) {
              console.error('Server '.concat(r, ' error:'), e),
                s('error', 'Failed to '.concat(r, ' server'));
            } finally {
              u((s) => ({ ...s, [e]: null }));
            }
          },
          v = async (e) => {
            if (
              window.confirm(
                'Are you sure you want to delete this server? This action cannot be undone.',
              )
            ) {
              u((s) => ({ ...s, [e]: 'deleting' }));
              try {
                await b.A.post('/servers/'.concat(e, '/delete')),
                  p(),
                  s('success', 'Server deleted successfully');
              } catch (e) {
                console.error('Server delete error:', e),
                  s('error', 'Failed to delete server');
              } finally {
                u((s) => ({ ...s, [e]: null }));
              }
            }
          };
        return l
          ? (0, t.jsx)('div', {
              className: 'flex justify-center items-center h-64',
              children: (0, t.jsx)(c.A, {
                className: 'w-8 h-8 text-blue-600 animate-spin',
              }),
            })
          : 0 === r.length
            ? (0, t.jsx)('p', {
                className: 'text-center',
                children:
                  "No servers found. Click 'Create Server' to get started.",
              })
            : (0, t.jsxs)('div', {
                className: 'grid gap-6',
                children: [
                  r.map((e) => {
                    var s;
                    return (0, t.jsxs)(
                      'div',
                      {
                        className:
                          'p-6 rounded-lg bg-secondary hover:bg-secondary/50 shadow-sm border hover:shadow-md transition-shadow duration-200',
                        children: [
                          (0, t.jsxs)('div', {
                            className: 'flex justify-between items-center mb-4',
                            children: [
                              (0, t.jsx)('h3', {
                                className: 'text-xl font-semibold',
                                children: e.name,
                              }),
                              (0, t.jsx)('span', {
                                className:
                                  'px-3 py-1 text-sm font-medium rounded-full '.concat(
                                    'running' === e.status
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-red-100 text-red-800',
                                  ),
                                children:
                                  e.status.charAt(0).toUpperCase() +
                                  e.status.slice(1),
                              }),
                            ],
                          }),
                          (0, t.jsxs)('div', {
                            className: 'flex justify-between items-center',
                            children: [
                              (0, t.jsxs)('div', {
                                className: 'flex gap-3',
                                children: [
                                  (0, t.jsxs)('button', {
                                    onClick: () =>
                                      g(
                                        e.id,
                                        'running' === e.status
                                          ? 'stop'
                                          : 'start',
                                      ),
                                    disabled: !!m[e.id],
                                    className:
                                      'px-4 py-2 rounded-md text-white flex items-center transition-colors '
                                        .concat(
                                          'running' === e.status
                                            ? 'bg-red-600 hover:bg-red-700'
                                            : 'bg-green-600 hover:bg-green-700',
                                          ' ',
                                        )
                                        .concat(
                                          m[e.id]
                                            ? 'opacity-50 cursor-not-allowed'
                                            : '',
                                        ),
                                    children: [
                                      'starting' === m[e.id] ||
                                      'stopping' === m[e.id]
                                        ? (0, t.jsx)(c.A, {
                                            className:
                                              'w-4 h-4 mr-2 animate-spin',
                                          })
                                        : 'running' === e.status
                                          ? (0, t.jsx)(y.A, {
                                              className: 'w-4 h-4 mr-2',
                                            })
                                          : (0, t.jsx)(N.A, {
                                              className: 'w-4 h-4 mr-2',
                                            }),
                                      'starting' === m[e.id]
                                        ? 'Starting...'
                                        : 'stopping' === m[e.id]
                                          ? 'Stopping...'
                                          : 'running' === e.status
                                            ? 'Stop'
                                            : 'Start',
                                    ],
                                  }),
                                  (0, t.jsx)(E, {
                                    serverId: e.id,
                                    warning: !0,
                                  }),
                                  (0, t.jsxs)('button', {
                                    onClick: () => h(e.id),
                                    disabled: 'running' !== e.status,
                                    className:
                                      'px-4 py-2 rounded-md text-white flex items-center transition-colors bg-blue-600 hover:bg-blue-700 '.concat(
                                        'running' !== e.status
                                          ? 'opacity-50 cursor-not-allowed'
                                          : '',
                                      ),
                                    children: [
                                      (0, t.jsx)(w.A, {
                                        className: 'w-4 h-4 mr-2',
                                      }),
                                      'Console',
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)('button', {
                                onClick: () =>
                                  d((s) => ({ ...s, [e.id]: !s[e.id] })),
                                className:
                                  'px-4 py-2 bg-primary rounded-md hover:bg-primary/80 flex items-center transition-colors',
                                children: [
                                  o[e.id]
                                    ? (0, t.jsx)(C.A, {
                                        className: 'w-4 h-4 mr-2',
                                      })
                                    : (0, t.jsx)(S.A, {
                                        className: 'w-4 h-4 mr-2',
                                      }),
                                  'Details',
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)('div', {
                            className:
                              'overflow-hidden transition-all duration-300 '.concat(
                                o[e.id] ? 'max-h-96' : 'max-h-0',
                              ),
                            children: [
                              (0, t.jsxs)('div', {
                                className:
                                  'mt-4 p-4 rounded-md grid grid-cols-2 gap-4 text-sm',
                                children: [
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('span', {
                                        className: 'font-semibold',
                                        children: 'Port:',
                                      }),
                                      ' ',
                                      e.port,
                                    ],
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('span', {
                                        className: 'font-semibold',
                                        children: 'Version:',
                                      }),
                                      ' ',
                                      e.version,
                                    ],
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('span', {
                                        className: 'font-semibold',
                                        children: 'vCPUs:',
                                      }),
                                      ' ',
                                      e.vcpus,
                                    ],
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('span', {
                                        className: 'font-semibold',
                                        children: 'Memory:',
                                      }),
                                      ' ',
                                      e.memory / 1024,
                                      ' GB',
                                    ],
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('span', {
                                        className: 'font-semibold',
                                        children: 'Storage:',
                                      }),
                                      ' ',
                                      e.storage,
                                      ' GB',
                                    ],
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('span', {
                                        className: 'font-semibold',
                                        children: 'Server Id:',
                                      }),
                                      ' ',
                                      e.id,
                                    ],
                                  }),
                                  e.stats
                                    ? (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsxs)('div', {
                                            children: [
                                              (0, t.jsx)('span', {
                                                className: 'font-semibold',
                                                children: 'CPU Usage:',
                                              }),
                                              ' ',
                                              void 0 !== e.stats.cpuUsage
                                                ? ''.concat(
                                                    e.stats.cpuUsage,
                                                    '%',
                                                  )
                                                : 'N/A',
                                            ],
                                          }),
                                          (0, t.jsxs)('div', {
                                            children: [
                                              (0, t.jsx)('span', {
                                                className: 'font-semibold',
                                                children: 'Memory Usage:',
                                              }),
                                              ' ',
                                              void 0 !== e.stats.memoryUsage &&
                                              void 0 !== e.stats.memoryLimit
                                                ? ''
                                                    .concat(
                                                      Math.round(
                                                        e.stats.memoryUsage,
                                                      ),
                                                      'MB / ',
                                                    )
                                                    .concat(
                                                      (
                                                        e.stats.memoryLimit /
                                                        1024
                                                      ).toFixed(1),
                                                      ' GB',
                                                    )
                                                : 'N/A',
                                            ],
                                          }),
                                          (0, t.jsxs)('div', {
                                            children: [
                                              (0, t.jsx)('span', {
                                                className: 'font-semibold',
                                                children: 'Network Usage:',
                                              }),
                                              ' ',
                                              (null ===
                                                (s = e.stats.networkUsage) ||
                                              void 0 === s
                                                ? void 0
                                                : s.tx_bytes) !== void 0
                                                ? ''.concat(
                                                    (
                                                      e.stats.networkUsage
                                                        .tx_bytes / 1048576
                                                    ).toFixed(2),
                                                    ' MB',
                                                  )
                                                : 'N/A',
                                            ],
                                          }),
                                          void 0 !== e.stats.onlinePlayers &&
                                            (0, t.jsxs)('div', {
                                              children: [
                                                (0, t.jsx)('span', {
                                                  className: 'font-semibold',
                                                  children: 'Online Players:',
                                                }),
                                                ' ',
                                                e.stats.onlinePlayers,
                                              ],
                                            }),
                                        ],
                                      })
                                    : 'running' === e.status
                                      ? (0, t.jsx)('div', {
                                          className: 'col-span-2 text-gray-500',
                                          children: 'Loading stats...',
                                        })
                                      : null,
                                ],
                              }),
                              (0, t.jsx)('div', {
                                className: 'mt-4 flex justify-end',
                                children: (0, t.jsxs)('button', {
                                  onClick: () => v(e.id),
                                  disabled: 'deleting' === m[e.id],
                                  className:
                                    'px-4 py-2 bg-red-600 text-white rounded-md flex items-center transition-colors '.concat(
                                      'deleting' === m[e.id]
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-red-700',
                                    ),
                                  children: [
                                    'deleting' === m[e.id]
                                      ? (0, t.jsx)(c.A, {
                                          className:
                                            'w-4 h-4 mr-2 animate-spin',
                                        })
                                      : (0, t.jsx)(k.A, {
                                          className: 'w-4 h-4 mr-2',
                                        }),
                                    'deleting' === m[e.id]
                                      ? 'Deleting...'
                                      : 'Delete Server',
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                  x && (0, t.jsx)(P, { serverId: x, onClose: () => h(null) }),
                ],
              });
      }
      var F = r(1773);
      function L() {
        let [e, s] = (0, a.useState)(null),
          [r, n] = (0, a.useState)([]),
          [l, o] = (0, a.useState)(!1),
          [d, c] = (0, a.useState)(!1),
          m = (e, r) => {
            s({ type: e, message: r }), setTimeout(() => s(null), 5e3);
          },
          u = () => {
            let e = window.scrollY;
            o((e) => !e), setTimeout(() => window.scrollTo(0, e), 0);
          };
        return (
          (0, a.useEffect)(() => {
            (async () => {
              try {
                let { data: e } = await b.A.get('servers/versions');
                n(e);
              } catch (e) {
                console.error('Error fetching versions:', e);
              }
            })();
          }, []),
          (0, t.jsxs)('div', {
            className: 'p-8 max-w-7xl mx-auto',
            children: [
              e &&
                (0, t.jsx)(i, {
                  type: e.type,
                  message: e.message,
                  onClose: () => s(null),
                }),
              (0, t.jsxs)('div', {
                className: 'flex justify-between items-center mb-6',
                children: [
                  (0, t.jsx)('h1', {
                    className: 'text-3xl font-bold',
                    children: 'Server Manager',
                  }),
                  (0, t.jsxs)('div', {
                    className: 'flex gap-4',
                    children: [
                      (0, t.jsx)('button', {
                        onClick: u,
                        className:
                          'p-2 hover:bg-gray-500/50 rounded-md transition-colors',
                        title: 'Refresh Servers',
                        children: (0, t.jsx)(F.A, { className: 'w-5 h-5' }),
                      }),
                      (0, t.jsx)('button', {
                        onClick: () => c(!0),
                        className:
                          'px-4 py-2 bg-primary hover:bg-primary/80 rounded-md transition-colors',
                        children: 'Create Server',
                      }),
                    ],
                  }),
                ],
              }),
              d &&
                (0, t.jsx)(j, {
                  onClose: () => c(!1),
                  refreshServers: u,
                  showNotification: m,
                  versions: r,
                }),
              (0, t.jsx)(I, { showNotification: m, refreshTrigger: l }),
            ],
          })
        );
      }
    },
    7701: (e, s, r) => {
      Promise.resolve().then(r.bind(r, 5991));
    },
    9602: (e, s, r) => {
      'use strict';
      r.d(s, { cn: () => n });
      var t = r(3463),
        a = r(9795);
      function n() {
        for (var e = arguments.length, s = Array(e), r = 0; r < e; r++)
          s[r] = arguments[r];
        return (0, a.QP)((0, t.$)(s));
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [89, 171, 441, 587, 358], () => s(7701)), (_N_E = e.O());
  },
]);
