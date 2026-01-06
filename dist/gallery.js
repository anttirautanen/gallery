import ae, { useEffect as se, Suspense as ie } from "react";
import b, { css as O } from "styled-components";
var R = { exports: {} }, v = {};
var F;
function ce() {
  if (F) return v;
  F = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(l, s, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      u = {};
      for (var m in s)
        m !== "key" && (u[m] = s[m]);
    } else u = s;
    return s = u.ref, {
      $$typeof: t,
      type: l,
      key: d,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return v.Fragment = i, v.jsx = c, v.jsxs = c, v;
}
var E = {};
var G;
function le() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case X:
          return "Profiler";
        case V:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case B:
            return e.displayName || "Context";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function c(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), i(e);
      }
    }
    function l(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function n() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function g() {
      var e = t(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function q(e, r, n, o, h, j) {
      var a = n.ref;
      return e = {
        $$typeof: S,
        type: e,
        key: r,
        props: n,
        _owner: o
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, n, o, h, j) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (ne(a)) {
            for (o = 0; o < a.length; o++)
              P(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(a);
      if (C.call(r, "key")) {
        a = t(e);
        var p = Object.keys(r).filter(function(oe) {
          return oe !== "key";
        });
        o = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", z[a + o] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          p,
          a
        ), z[a + o] = !0);
      }
      if (a = null, n !== void 0 && (c(n), a = "" + n), d(r) && (c(r.key), a = "" + r.key), "key" in r) {
        n = {};
        for (var y in r)
          y !== "key" && (n[y] = r[y]);
      } else n = r;
      return a && m(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), q(
        e,
        a,
        n,
        s(),
        h,
        j
      );
    }
    function P(e) {
      $(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? $(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function $(e) {
      return typeof e == "object" && e !== null && e.$$typeof === S;
    }
    var _ = ae, S = /* @__PURE__ */ Symbol.for("react.transitional.element"), J = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), H = /* @__PURE__ */ Symbol.for("react.consumer"), B = /* @__PURE__ */ Symbol.for("react.context"), Z = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), te = /* @__PURE__ */ Symbol.for("react.client.reference"), k = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ne = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, I = {}, Y = _.react_stack_bottom_frame.bind(
      _,
      u
    )(), D = x(l(u)), z = {};
    E.Fragment = w, E.jsx = function(e, r, n) {
      var o = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !1,
        o ? Error("react-stack-top-frame") : Y,
        o ? x(l(e)) : D
      );
    }, E.jsxs = function(e, r, n) {
      var o = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !0,
        o ? Error("react-stack-top-frame") : Y,
        o ? x(l(e)) : D
      );
    };
  })()), E;
}
var L;
function ue() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? R.exports = ce() : R.exports = le()), R.exports;
}
var f = ue();
const M = "4vw";
function fe(t) {
  const i = t.path.replace("../../public", "");
  return Array.from(
    { length: t.imageCount },
    (c, l) => new URL(`${i}thumbs/${l + 1}.jpeg`, import.meta.url)
  );
}
const he = ({ gallery: t }) => {
  const i = fe(t);
  return se(() => {
    const c = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        window.innerWidth - document.documentElement.clientWidth + "px"
      );
    });
    return c.observe(document.body), () => {
      c.disconnect();
    };
  }, []), /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(me, { $padding: M, children: t.name }),
    /* @__PURE__ */ f.jsx(ie, { fallback: /* @__PURE__ */ f.jsx("div", { children: "LOADING IMAGE..." }), children: /* @__PURE__ */ f.jsx(de, { gallery: t, thumbImageUrls: i }) })
  ] });
}, de = ({ gallery: t, thumbImageUrls: i }) => {
  const c = t.grid.match(/".*"/g);
  if (!c)
    return /* @__PURE__ */ f.jsxs(W, { children: [
      "Could not detect row count.",
      /* @__PURE__ */ f.jsx("pre", { children: t.grid })
    ] });
  const l = t.grid.match(/"(.*)"/);
  if (!l || !l[1])
    return /* @__PURE__ */ f.jsxs(W, { children: [
      "Could not detect column count.",
      /* @__PURE__ */ f.jsx("pre", { children: t.grid })
    ] });
  const s = c.length, d = l[1].split(" ").length;
  return /* @__PURE__ */ f.jsx(
    pe,
    {
      $areas: t.grid,
      $padding: M,
      $columnCount: d,
      $rowCount: s,
      children: i.map((m, g) => /* @__PURE__ */ f.jsxs(be, { $area: Ee[g], children: [
        /* @__PURE__ */ f.jsx(U, { children: t.captions[g] }),
        /* @__PURE__ */ f.jsx(ve, { $imagePath: m.href })
      ] }, m.href))
    }
  );
}, me = b.h2`
  justify-self: center;
  background-color: #fff9f3;
  clip-path: polygon(0 0.05em, 100% 0, calc(100% - 0.2em) 100%, 0.1em calc(100% - 0.05em));
  font-family: monospace;
  font-weight: 700;
  font-size: 6vmin;
  letter-spacing: 0.02em;
  line-height: 0.85;
  margin: 2em 0 calc(-${({ $padding: t }) => t} / 2) 0;
  padding: ${({ $padding: t }) => t};
  text-align: center;
  text-shadow: 0 0 1em rgba(255, 255, 0, 0.5);
`, W = b.div`
  background: #b11b07;
  color: #fff;
  font-weight: 600;
  padding: 4vw;
`, pe = b.div`
  background: #000;
  display: grid;
  gap: 2vw;
  padding: ${({ $padding: t }) => t};

  ${({ $areas: t, $columnCount: i, $rowCount: c, $padding: l }) => {
  const s = `${(i - 1) * 2}vw`, u = O`calc(100vw - ${l} - ${l} - ${s} - var(--scrollbar-width))`, d = O`calc(${u} / ${i})`;
  return O`
      grid-template-areas: ${t};
      grid-template-columns: repeat(${i}, ${d});
      grid-template-rows: repeat(${c}, ${d});
    `;
}}
`, U = b.div`
  background: #000;
  color: #fff9f3;
  font-size: 0.9em;
  font-family: monospace;
  left: 0;
  opacity: 0;
  padding: 0.5em 0.5em;
  position: absolute;
  right: 0;
  bottom: -0.5em;
  transition: all 0.1s;
  word-break: break-word;
`, be = b.div`
  display: grid;
  grid-area: ${({ $area: t }) => t};
  position: relative;

  &:hover ${U} {
    opacity: 1;
    bottom: 0;
  }
`, ve = b.div`
  background-image: url("${({ $imagePath: t }) => t}");
  background-size: cover;
  background-position: center;
`, Ee = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
export {
  he as Gallery
};
