(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [492],
  {
    3384: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'HTTPAccessErrorFallback', {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        r(306);
      let l = r(5155);
      r(2115);
      let n = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: { display: 'inline-block' },
        h1: {
          display: 'inline-block',
          margin: '0 20px 0 0',
          padding: '0 23px 0 0',
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: 'top',
          lineHeight: '49px',
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: '49px', margin: 0 },
      };
      function o(e) {
        let { status: t, message: r } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)('title', { children: t + ': ' + r }),
            (0, l.jsx)('div', {
              style: n.error,
              children: (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('style', {
                    dangerouslySetInnerHTML: {
                      __html:
                        'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}',
                    },
                  }),
                  (0, l.jsx)('h1', {
                    className: 'next-error-h1',
                    style: n.h1,
                    children: t,
                  }),
                  (0, l.jsx)('div', {
                    style: n.desc,
                    children: (0, l.jsx)('h2', { style: n.h2, children: r }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3868: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_not-found/page',
        function () {
          return r(5623);
        },
      ]);
    },
    5623: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let l = r(5155),
        n = r(3384);
      function o() {
        return (0, l.jsx)(n.HTTPAccessErrorFallback, {
          status: 404,
          message: 'This page could not be found.',
        });
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [441, 587, 358], () => t(3868)), (_N_E = e.O());
  },
]);
