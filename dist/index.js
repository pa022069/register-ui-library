import { __rest as Pe, __assign as F } from "tslib";
import je from "react";
import { twMerge as ke } from "tailwind-merge";
var gr = {
  styles: {
    defaultStyle: { borderRadius: "5px" },
    variants: {
      default: { backgroundColor: "blue", color: "white" },
      secondary: { backgroundColor: "gray", color: "black" },
      danger: { backgroundColor: "red", color: "white" }
    }
  },
  attributes: {
    size: "medium",
    options: [{ value: "0", label: "Default Option" }]
  }
}, Z = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function mr() {
  if (Te) return I;
  Te = 1;
  var c = je, E = Symbol.for("react.element"), O = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, C = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(g, f, _) {
    var d, y = {}, R = null, z = null;
    _ !== void 0 && (R = "" + _), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (z = f.ref);
    for (d in f) b.call(f, d) && !T.hasOwnProperty(d) && (y[d] = f[d]);
    if (g && g.defaultProps) for (d in f = g.defaultProps, f) y[d] === void 0 && (y[d] = f[d]);
    return { $$typeof: E, type: g, key: R, ref: z, props: y, _owner: C.current };
  }
  return I.Fragment = O, I.jsx = x, I.jsxs = x, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function yr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var c = je, E = Symbol.for("react.element"), O = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), g = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), Q = Symbol.iterator, De = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[De];
      return typeof r == "function" ? r : null;
    }
    var j = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var $e = !1, Ie = !1, We = !1, Ye = !1, ze = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === T || ze || e === C || e === _ || e === d || Ye || e === z || $e || Ie || We || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === y || e.$$typeof === x || e.$$typeof === g || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case O:
          return "Portal";
        case T:
          return "Profiler";
        case C:
          return "StrictMode";
        case _:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return re(r) + ".Consumer";
          case x:
            var t = e;
            return re(t._context) + ".Provider";
          case f:
            return Le(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case R: {
            var o = e, u = o._payload, i = o._init;
            try {
              return w(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, A = 0, te, ne, ae, ie, oe, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Me() {
      {
        if (A === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ve() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: te
            }),
            info: S({}, e, {
              value: ne
            }),
            warn: S({}, e, {
              value: ae
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: oe
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: se
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = j.ReactCurrentDispatcher, B;
    function N(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, L;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ue();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              n = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, l = p.length - 1; s >= 1 && l >= 0 && a[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== p[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, U.current = u, Ve(), Error.prepareStackTrace = o;
      }
      var D = e ? e.displayName || e.name : "", P = D ? N(D) : "";
      return typeof e == "function" && L.set(e, P), P;
    }
    function Be(e, r, t) {
      return fe(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Je(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case _:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Be(e.render);
          case y:
            return M(e.type, r, t);
          case R: {
            var n = e, o = n._payload, u = n._init;
            try {
              return M(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ce = {}, de = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, o) {
      {
        var u = Function.call.bind($);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (V(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, V(o), v("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ke = Array.isArray;
    function q(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Xe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ve(e);
    }
    var ge = j.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ye;
    function Ze(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          me || (me = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (pe(t), a = "" + t), Qe(r) && (pe(r.key), a = "" + r.key), Ze(r) && (p = r.ref, er(r, o));
        for (u in r)
          $.call(r, u) && !He.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(i, l), p && tr(i, l);
        }
        return nr(e, a, p, o, n, ge.current, i);
      }
    }
    var K = j.ReactCurrentOwner, be = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function he() {
      {
        if (K.current) {
          var e = w(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Ee = {};
    function or(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + w(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Fe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              X(i.value) && Re(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var o = w(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var xe = {};
    function Ce(e, r, t, n, o, u) {
      {
        var i = Ne(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ir();
          p ? a += p : a += he();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === E ? (s = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = ar(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (q(h)) {
                for (var D = 0; D < h.length; D++)
                  _e(h[D], e);
                Object.freeze && Object.freeze(h);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(h, e);
        }
        if ($.call(r, "key")) {
          var P = w(e), m = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), H = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[P + H]) {
            var vr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, P, vr, P), xe[P + H] = !0;
          }
        }
        return e === b ? sr(l) : ur(l), l;
      }
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var cr = fr, dr = lr;
    W.Fragment = b, W.jsx = cr, W.jsxs = dr;
  }()), W;
}
process.env.NODE_ENV === "production" ? Z.exports = mr() : Z.exports = yr();
var Y = Z.exports, Oe = {
  size: {
    small: "text-sm px-2 py-1",
    medium: "text-base px-3 py-2",
    large: "text-lg px-4 py-3"
  },
  variant: {
    default: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-black",
    danger: "bg-red-500 text-white"
  }
}, br = function(c) {
  var E = c.size, O = E === void 0 ? "medium" : E, b = c.variant, C = b === void 0 ? "default" : b, T = c.style, x = c.className, g = c.options, f = Pe(c, ["size", "variant", "style", "className", "options"]), _ = Oe.size, d = Oe.variant, y = ke(_[O], d[C], x);
  return Y.jsx("div", { children: Y.jsx("select", F({ className: y, style: T }, f, { children: g && (g == null ? void 0 : g.map(function(R) {
    return Y.jsx("option", { value: R.value, children: R.label }, R.value);
  })) })) });
}, hr = {
  name: "select",
  component: br,
  options: F(F({}, gr), { schema: {
    type: "object",
    properties: {
      size: {
        type: "string",
        enum: ["small", "medium", "large"],
        default: "medium"
      },
      variant: {
        type: "string",
        enum: ["default", "secondary", "danger"],
        default: "default"
      }
    }
  } })
}, Er = {
  styles: {
    defaultStyle: { borderRadius: "5px" },
    variants: {
      default: { backgroundColor: "blue", color: "white" },
      secondary: { backgroundColor: "gray", color: "black" },
      danger: { backgroundColor: "red", color: "white" }
    }
  },
  attributes: {
    size: "medium",
    options: [{ value: "0", label: "Default Option" }]
  }
}, Se = {
  size: {
    small: "text-sm px-2 py-1",
    medium: "text-base px-3 py-2",
    large: "text-lg px-4 py-3"
  },
  variant: {
    default: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-black",
    danger: "bg-red-500 text-white"
  }
}, Rr = function(c) {
  var E = c.size, O = E === void 0 ? "medium" : E, b = c.variant, C = b === void 0 ? "default" : b, T = c.style, x = c.className, g = c.children, f = Pe(c, ["size", "variant", "style", "className", "children"]), _ = Se.size, d = Se.variant, y = ke(_[O], d[C], x);
  return Y.jsx("div", { children: Y.jsx("button", F({ className: y, style: T }, f, { children: g })) });
}, _r = {
  name: "button",
  component: Rr,
  options: F(F({}, Er), { schema: {
    type: "object",
    properties: {
      size: {
        type: "string",
        enum: ["small", "medium", "large"],
        default: "medium"
      },
      variant: {
        type: "string",
        enum: ["default", "secondary", "danger"],
        default: "default"
      }
    }
  } })
}, wr = {
  Select: hr,
  Button: _r
};
export {
  wr as default
};
