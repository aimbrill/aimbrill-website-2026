(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const d of h.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = o(c);
    fetch(c.href, h);
  }
})();
var Yu = { exports: {} },
  yl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp;
function $x() {
  if (hp) return yl;
  hp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function o(r, c, h) {
    var d = null;
    if ((h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c)) {
      h = {};
      for (var p in c) p !== "key" && (h[p] = c[p]);
    } else h = c;
    return ((c = h.ref), { $$typeof: a, type: r, key: d, ref: c !== void 0 ? c : null, props: h });
  }
  return ((yl.Fragment = l), (yl.jsx = o), (yl.jsxs = o), yl);
}
var mp;
function Ix() {
  return (mp || ((mp = 1), (Yu.exports = $x())), Yu.exports);
}
var m = Ix(),
  ku = { exports: {} },
  ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp;
function t1() {
  if (pp) return ot;
  pp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function M(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (S && A[S]) || A["@@iterator"]), typeof A == "function" ? A : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    O = {};
  function B(A, U, K) {
    ((this.props = A), (this.context = U), (this.refs = O), (this.updater = K || C));
  }
  ((B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (A, U) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, U, "setState");
    }),
    (B.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function k() {}
  k.prototype = B.prototype;
  function q(A, U, K) {
    ((this.props = A), (this.context = U), (this.refs = O), (this.updater = K || C));
  }
  var G = (q.prototype = new k());
  ((G.constructor = q), H(G, B.prototype), (G.isPureReactComponent = !0));
  var Q = Array.isArray;
  function at() {}
  var I = { H: null, A: null, T: null, S: null },
    F = Object.prototype.hasOwnProperty;
  function st(A, U, K) {
    var W = K.ref;
    return {
      $$typeof: a,
      type: A,
      key: U,
      ref: W !== void 0 ? W : null,
      props: K,
    };
  }
  function et(A, U) {
    return st(A.type, U, A.props);
  }
  function ft(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function bt(A) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (K) {
        return U[K];
      })
    );
  }
  var Zt = /\/+/g;
  function Bt(A, U) {
    return typeof A == "object" && A !== null && A.key != null ? bt("" + A.key) : U.toString(36);
  }
  function Ut(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(at, at)
            : ((A.status = "pending"),
              A.then(
                function (U) {
                  A.status === "pending" && ((A.status = "fulfilled"), (A.value = U));
                },
                function (U) {
                  A.status === "pending" && ((A.status = "rejected"), (A.reason = U));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function R(A, U, K, W, rt) {
    var ht = typeof A;
    (ht === "undefined" || ht === "boolean") && (A = null);
    var St = !1;
    if (A === null) St = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          St = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case l:
              St = !0;
              break;
            case x:
              return ((St = A._init), R(St(A._payload), U, K, W, rt));
          }
      }
    if (St)
      return (
        (rt = rt(A)),
        (St = W === "" ? "." + Bt(A, 0) : W),
        Q(rt)
          ? ((K = ""),
            St != null && (K = St.replace(Zt, "$&/") + "/"),
            R(rt, U, K, "", function (Z) {
              return Z;
            }))
          : rt != null &&
            (ft(rt) &&
              (rt = et(
                rt,
                K +
                  (rt.key == null || (A && A.key === rt.key)
                    ? ""
                    : ("" + rt.key).replace(Zt, "$&/") + "/") +
                  St,
              )),
            U.push(rt)),
        1
      );
    St = 0;
    var ae = W === "" ? "." : W + ":";
    if (Q(A))
      for (var Lt = 0; Lt < A.length; Lt++)
        ((W = A[Lt]), (ht = ae + Bt(W, Lt)), (St += R(W, U, K, ht, rt)));
    else if (((Lt = M(A)), typeof Lt == "function"))
      for (A = Lt.call(A), Lt = 0; !(W = A.next()).done; )
        ((W = W.value), (ht = ae + Bt(W, Lt++)), (St += R(W, U, K, ht, rt)));
    else if (ht === "object") {
      if (typeof A.then == "function") return R(Ut(A), U, K, W, rt);
      throw (
        (U = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : U) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return St;
  }
  function X(A, U, K) {
    if (A == null) return A;
    var W = [],
      rt = 0;
    return (
      R(A, W, "", "", function (ht) {
        return U.call(K, ht, rt++);
      }),
      W
    );
  }
  function J(A) {
    if (A._status === -1) {
      var U = A._result;
      ((U = U()),
        U.then(
          function (K) {
            (A._status === 0 || A._status === -1) && ((A._status = 1), (A._result = K));
          },
          function (K) {
            (A._status === 0 || A._status === -1) && ((A._status = 2), (A._result = K));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = U)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var lt =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" && A !== null && typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    dt = {
      map: X,
      forEach: function (A, U, K) {
        X(
          A,
          function () {
            U.apply(this, arguments);
          },
          K,
        );
      },
      count: function (A) {
        var U = 0;
        return (
          X(A, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (A) {
        return (
          X(A, function (U) {
            return U;
          }) || []
        );
      },
      only: function (A) {
        if (!ft(A))
          throw Error("React.Children.only expected to receive a single React element child.");
        return A;
      },
    };
  return (
    (ot.Activity = b),
    (ot.Children = dt),
    (ot.Component = B),
    (ot.Fragment = o),
    (ot.Profiler = c),
    (ot.PureComponent = q),
    (ot.StrictMode = r),
    (ot.Suspense = v),
    (ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (ot.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return I.H.useMemoCache(A);
      },
    }),
    (ot.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (ot.cacheSignal = function () {
      return null;
    }),
    (ot.cloneElement = function (A, U, K) {
      if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
      var W = H({}, A.props),
        rt = A.key;
      if (U != null)
        for (ht in (U.key !== void 0 && (rt = "" + U.key), U))
          !F.call(U, ht) ||
            ht === "key" ||
            ht === "__self" ||
            ht === "__source" ||
            (ht === "ref" && U.ref === void 0) ||
            (W[ht] = U[ht]);
      var ht = arguments.length - 2;
      if (ht === 1) W.children = K;
      else if (1 < ht) {
        for (var St = Array(ht), ae = 0; ae < ht; ae++) St[ae] = arguments[ae + 2];
        W.children = St;
      }
      return st(A.type, rt, W);
    }),
    (ot.createContext = function (A) {
      return (
        (A = {
          $$typeof: d,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: h, _context: A }),
        A
      );
    }),
    (ot.createElement = function (A, U, K) {
      var W,
        rt = {},
        ht = null;
      if (U != null)
        for (W in (U.key !== void 0 && (ht = "" + U.key), U))
          F.call(U, W) && W !== "key" && W !== "__self" && W !== "__source" && (rt[W] = U[W]);
      var St = arguments.length - 2;
      if (St === 1) rt.children = K;
      else if (1 < St) {
        for (var ae = Array(St), Lt = 0; Lt < St; Lt++) ae[Lt] = arguments[Lt + 2];
        rt.children = ae;
      }
      if (A && A.defaultProps)
        for (W in ((St = A.defaultProps), St)) rt[W] === void 0 && (rt[W] = St[W]);
      return st(A, ht, rt);
    }),
    (ot.createRef = function () {
      return { current: null };
    }),
    (ot.forwardRef = function (A) {
      return { $$typeof: p, render: A };
    }),
    (ot.isValidElement = ft),
    (ot.lazy = function (A) {
      return { $$typeof: x, _payload: { _status: -1, _result: A }, _init: J };
    }),
    (ot.memo = function (A, U) {
      return { $$typeof: y, type: A, compare: U === void 0 ? null : U };
    }),
    (ot.startTransition = function (A) {
      var U = I.T,
        K = {};
      I.T = K;
      try {
        var W = A(),
          rt = I.S;
        (rt !== null && rt(K, W),
          typeof W == "object" && W !== null && typeof W.then == "function" && W.then(at, lt));
      } catch (ht) {
        lt(ht);
      } finally {
        (U !== null && K.types !== null && (U.types = K.types), (I.T = U));
      }
    }),
    (ot.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (ot.use = function (A) {
      return I.H.use(A);
    }),
    (ot.useActionState = function (A, U, K) {
      return I.H.useActionState(A, U, K);
    }),
    (ot.useCallback = function (A, U) {
      return I.H.useCallback(A, U);
    }),
    (ot.useContext = function (A) {
      return I.H.useContext(A);
    }),
    (ot.useDebugValue = function () {}),
    (ot.useDeferredValue = function (A, U) {
      return I.H.useDeferredValue(A, U);
    }),
    (ot.useEffect = function (A, U) {
      return I.H.useEffect(A, U);
    }),
    (ot.useEffectEvent = function (A) {
      return I.H.useEffectEvent(A);
    }),
    (ot.useId = function () {
      return I.H.useId();
    }),
    (ot.useImperativeHandle = function (A, U, K) {
      return I.H.useImperativeHandle(A, U, K);
    }),
    (ot.useInsertionEffect = function (A, U) {
      return I.H.useInsertionEffect(A, U);
    }),
    (ot.useLayoutEffect = function (A, U) {
      return I.H.useLayoutEffect(A, U);
    }),
    (ot.useMemo = function (A, U) {
      return I.H.useMemo(A, U);
    }),
    (ot.useOptimistic = function (A, U) {
      return I.H.useOptimistic(A, U);
    }),
    (ot.useReducer = function (A, U, K) {
      return I.H.useReducer(A, U, K);
    }),
    (ot.useRef = function (A) {
      return I.H.useRef(A);
    }),
    (ot.useState = function (A) {
      return I.H.useState(A);
    }),
    (ot.useSyncExternalStore = function (A, U, K) {
      return I.H.useSyncExternalStore(A, U, K);
    }),
    (ot.useTransition = function () {
      return I.H.useTransition();
    }),
    (ot.version = "19.2.5"),
    ot
  );
}
var yp;
function Uc() {
  return (yp || ((yp = 1), (ku.exports = t1())), ku.exports);
}
var Y = Uc(),
  Gu = { exports: {} },
  gl = {},
  Xu = { exports: {} },
  Zu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp;
function e1() {
  return (
    gp ||
      ((gp = 1),
      (function (a) {
        function l(R, X) {
          var J = R.length;
          R.push(X);
          t: for (; 0 < J; ) {
            var lt = (J - 1) >>> 1,
              dt = R[lt];
            if (0 < c(dt, X)) ((R[lt] = X), (R[J] = dt), (J = lt));
            else break t;
          }
        }
        function o(R) {
          return R.length === 0 ? null : R[0];
        }
        function r(R) {
          if (R.length === 0) return null;
          var X = R[0],
            J = R.pop();
          if (J !== X) {
            R[0] = J;
            t: for (var lt = 0, dt = R.length, A = dt >>> 1; lt < A; ) {
              var U = 2 * (lt + 1) - 1,
                K = R[U],
                W = U + 1,
                rt = R[W];
              if (0 > c(K, J))
                W < dt && 0 > c(rt, K)
                  ? ((R[lt] = rt), (R[W] = J), (lt = W))
                  : ((R[lt] = K), (R[U] = J), (lt = U));
              else if (W < dt && 0 > c(rt, J)) ((R[lt] = rt), (R[W] = J), (lt = W));
              else break t;
            }
          }
          return X;
        }
        function c(R, X) {
          var J = R.sortIndex - X.sortIndex;
          return J !== 0 ? J : R.id - X.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var d = Date,
            p = d.now();
          a.unstable_now = function () {
            return d.now() - p;
          };
        }
        var v = [],
          y = [],
          x = 1,
          b = null,
          S = 3,
          M = !1,
          C = !1,
          H = !1,
          O = !1,
          B = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function G(R) {
          for (var X = o(y); X !== null; ) {
            if (X.callback === null) r(y);
            else if (X.startTime <= R) (r(y), (X.sortIndex = X.expirationTime), l(v, X));
            else break;
            X = o(y);
          }
        }
        function Q(R) {
          if (((H = !1), G(R), !C))
            if (o(v) !== null) ((C = !0), at || ((at = !0), bt()));
            else {
              var X = o(y);
              X !== null && Ut(Q, X.startTime - R);
            }
        }
        var at = !1,
          I = -1,
          F = 5,
          st = -1;
        function et() {
          return O ? !0 : !(a.unstable_now() - st < F);
        }
        function ft() {
          if (((O = !1), at)) {
            var R = a.unstable_now();
            st = R;
            var X = !0;
            try {
              t: {
                ((C = !1), H && ((H = !1), k(I), (I = -1)), (M = !0));
                var J = S;
                try {
                  e: {
                    for (G(R), b = o(v); b !== null && !(b.expirationTime > R && et()); ) {
                      var lt = b.callback;
                      if (typeof lt == "function") {
                        ((b.callback = null), (S = b.priorityLevel));
                        var dt = lt(b.expirationTime <= R);
                        if (((R = a.unstable_now()), typeof dt == "function")) {
                          ((b.callback = dt), G(R), (X = !0));
                          break e;
                        }
                        (b === o(v) && r(v), G(R));
                      } else r(v);
                      b = o(v);
                    }
                    if (b !== null) X = !0;
                    else {
                      var A = o(y);
                      (A !== null && Ut(Q, A.startTime - R), (X = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (S = J), (M = !1));
                }
                X = void 0;
              }
            } finally {
              X ? bt() : (at = !1);
            }
          }
        }
        var bt;
        if (typeof q == "function")
          bt = function () {
            q(ft);
          };
        else if (typeof MessageChannel < "u") {
          var Zt = new MessageChannel(),
            Bt = Zt.port2;
          ((Zt.port1.onmessage = ft),
            (bt = function () {
              Bt.postMessage(null);
            }));
        } else
          bt = function () {
            B(ft, 0);
          };
        function Ut(R, X) {
          I = B(function () {
            R(a.unstable_now());
          }, X);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (a.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (F = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (a.unstable_next = function (R) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = S;
            }
            var J = S;
            S = X;
            try {
              return R();
            } finally {
              S = J;
            }
          }),
          (a.unstable_requestPaint = function () {
            O = !0;
          }),
          (a.unstable_runWithPriority = function (R, X) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var J = S;
            S = R;
            try {
              return X();
            } finally {
              S = J;
            }
          }),
          (a.unstable_scheduleCallback = function (R, X, J) {
            var lt = a.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay), (J = typeof J == "number" && 0 < J ? lt + J : lt))
                : (J = lt),
              R)
            ) {
              case 1:
                var dt = -1;
                break;
              case 2:
                dt = 250;
                break;
              case 5:
                dt = 1073741823;
                break;
              case 4:
                dt = 1e4;
                break;
              default:
                dt = 5e3;
            }
            return (
              (dt = J + dt),
              (R = {
                id: x++,
                callback: X,
                priorityLevel: R,
                startTime: J,
                expirationTime: dt,
                sortIndex: -1,
              }),
              J > lt
                ? ((R.sortIndex = J),
                  l(y, R),
                  o(v) === null && R === o(y) && (H ? (k(I), (I = -1)) : (H = !0), Ut(Q, J - lt)))
                : ((R.sortIndex = dt), l(v, R), C || M || ((C = !0), at || ((at = !0), bt()))),
              R
            );
          }),
          (a.unstable_shouldYield = et),
          (a.unstable_wrapCallback = function (R) {
            var X = S;
            return function () {
              var J = S;
              S = X;
              try {
                return R.apply(this, arguments);
              } finally {
                S = J;
              }
            };
          }));
      })(Zu)),
    Zu
  );
}
var vp;
function n1() {
  return (vp || ((vp = 1), (Xu.exports = e1())), Xu.exports);
}
var Ku = { exports: {} },
  fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xp;
function a1() {
  if (xp) return fe;
  xp = 1;
  var a = Uc();
  function l(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++) y += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(v, y, x) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: v,
      containerInfo: y,
      implementation: x,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, y) {
    if (v === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (fe.createPortal = function (v, y) {
      var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)) throw Error(l(299));
      return h(v, y, null, x);
    }),
    (fe.flushSync = function (v) {
      var y = d.T,
        x = r.p;
      try {
        if (((d.T = null), (r.p = 2), v)) return v();
      } finally {
        ((d.T = y), (r.p = x), r.d.f());
      }
    }),
    (fe.preconnect = function (v, y) {
      typeof v == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y = typeof y == "string" ? (y === "use-credentials" ? y : "") : void 0))
          : (y = null),
        r.d.C(v, y));
    }),
    (fe.prefetchDNS = function (v) {
      typeof v == "string" && r.d.D(v);
    }),
    (fe.preinit = function (v, y) {
      if (typeof v == "string" && y && typeof y.as == "string") {
        var x = y.as,
          b = p(x, y.crossOrigin),
          S = typeof y.integrity == "string" ? y.integrity : void 0,
          M = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        x === "style"
          ? r.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: M,
            })
          : x === "script" &&
            r.d.X(v, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: M,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (fe.preinitModule = function (v, y) {
      if (typeof v == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var x = p(y.as, y.crossOrigin);
            r.d.M(v, {
              crossOrigin: x,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && r.d.M(v);
    }),
    (fe.preload = function (v, y) {
      if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
        var x = y.as,
          b = p(x, y.crossOrigin);
        r.d.L(v, x, {
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (fe.preloadModule = function (v, y) {
      if (typeof v == "string")
        if (y) {
          var x = p(y.as, y.crossOrigin);
          r.d.m(v, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: x,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else r.d.m(v);
    }),
    (fe.requestFormReset = function (v) {
      r.d.r(v);
    }),
    (fe.unstable_batchedUpdates = function (v, y) {
      return v(y);
    }),
    (fe.useFormState = function (v, y, x) {
      return d.H.useFormState(v, y, x);
    }),
    (fe.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (fe.version = "19.2.5"),
    fe
  );
}
var bp;
function i1() {
  if (bp) return Ku.exports;
  bp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Ku.exports = a1()), Ku.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sp;
function l1() {
  if (Sp) return gl;
  Sp = 1;
  var a = n1(),
    l = Uc(),
    o = i1();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (h(t) !== t) throw Error(r(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return (v(s), t);
          if (u === i) return (v(s), e);
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) ((n = s), (i = u));
      else {
        for (var f = !1, g = s.child; g; ) {
          if (g === n) {
            ((f = !0), (n = s), (i = u));
            break;
          }
          if (g === i) {
            ((f = !0), (i = s), (n = u));
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = u.child; g; ) {
            if (g === n) {
              ((f = !0), (n = u), (i = s));
              break;
            }
            if (g === i) {
              ((f = !0), (i = u), (n = s));
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function x(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = x(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    M = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    at = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    st = Symbol.for("react.activity"),
    et = Symbol.for("react.memo_cache_sentinel"),
    ft = Symbol.iterator;
  function bt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ft && t[ft]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var Zt = Symbol.for("react.client.reference");
  function Bt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Zt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case B:
        return "Profiler";
      case O:
        return "StrictMode";
      case Q:
        return "Suspense";
      case at:
        return "SuspenseList";
      case st:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return "Portal";
        case q:
          return t.displayName || "Context";
        case k:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case I:
          return ((e = t.displayName || null), e !== null ? e : Bt(t.type) || "Memo");
        case F:
          ((e = t._payload), (t = t._init));
          try {
            return Bt(t(e));
          } catch {}
      }
    return null;
  }
  var Ut = Array.isArray,
    R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = { pending: !1, data: null, method: null, action: null },
    lt = [],
    dt = -1;
  function A(t) {
    return { current: t };
  }
  function U(t) {
    0 > dt || ((t.current = lt[dt]), (lt[dt] = null), dt--);
  }
  function K(t, e) {
    (dt++, (lt[dt] = t.current), (t.current = e));
  }
  var W = A(null),
    rt = A(null),
    ht = A(null),
    St = A(null);
  function ae(t, e) {
    switch ((K(ht, e), K(rt, t), K(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Bm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = Bm(e)), (t = Um(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (U(W), K(W, t));
  }
  function Lt() {
    (U(W), U(rt), U(ht));
  }
  function Z(t) {
    t.memoizedState !== null && K(St, t);
    var e = W.current,
      n = Um(e, t.type);
    e !== n && (K(rt, t), K(W, n));
  }
  function mt(t) {
    (rt.current === t && (U(W), U(rt)), St.current === t && (U(St), (dl._currentValue = J)));
  }
  var te, kt;
  function tn(t) {
    if (te === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((te = (e && e[1]) || ""),
          (kt =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      te +
      t +
      kt
    );
  }
  var Qe = !1;
  function _e(t, e) {
    if (!t || Qe) return "";
    Qe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var L = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(L.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, []);
                } catch (z) {
                  var w = z;
                }
                Reflect.construct(t, [], L);
              } else {
                try {
                  L.call();
                } catch (z) {
                  w = z;
                }
                t.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                w = z;
              }
              (L = t()) && typeof L.catch == "function" && L.catch(function () {});
            }
          } catch (z) {
            if (z && w && typeof z.stack == "string") return [z.stack, w.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        f = u[0],
        g = u[1];
      if (f && g) {
        var T = f.split(`
`),
          D = g.split(`
`);
        for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); ) i++;
        for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); ) s++;
        if (i === T.length || s === D.length)
          for (i = T.length - 1, s = D.length - 1; 1 <= i && 0 <= s && T[i] !== D[s]; ) s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== D[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || T[i] !== D[s])) {
                  var _ =
                    `
` + T[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", t.displayName)),
                    _
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((Qe = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? tn(n) : "";
  }
  function Dn(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return tn(t.type);
      case 16:
        return tn("Lazy");
      case 13:
        return t.child !== e && e !== null ? tn("Suspense Fallback") : tn("Suspense");
      case 19:
        return tn("SuspenseList");
      case 0:
      case 15:
        return _e(t.type, !1);
      case 11:
        return _e(t.type.render, !1);
      case 1:
        return _e(t.type, !0);
      case 31:
        return tn("Activity");
      default:
        return "";
    }
  }
  function Ai(t) {
    try {
      var e = "",
        n = null;
      do ((e += Dn(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var jr = Object.prototype.hasOwnProperty,
    Mr = a.unstable_scheduleCallback,
    Nr = a.unstable_cancelCallback,
    C0 = a.unstable_shouldYield,
    z0 = a.unstable_requestPaint,
    Ae = a.unstable_now,
    O0 = a.unstable_getCurrentPriorityLevel,
    mf = a.unstable_ImmediatePriority,
    pf = a.unstable_UserBlockingPriority,
    _l = a.unstable_NormalPriority,
    R0 = a.unstable_LowPriority,
    yf = a.unstable_IdlePriority,
    _0 = a.log,
    V0 = a.unstable_setDisableYieldValue,
    Ei = null,
    Ee = null;
  function wn(t) {
    if ((typeof _0 == "function" && V0(t), Ee && typeof Ee.setStrictMode == "function"))
      try {
        Ee.setStrictMode(Ei, t);
      } catch {}
  }
  var je = Math.clz32 ? Math.clz32 : L0,
    B0 = Math.log,
    U0 = Math.LN2;
  function L0(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((B0(t) / U0) | 0)) | 0);
  }
  var Vl = 256,
    Bl = 262144,
    Ul = 4194304;
  function sa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ll(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var g = i & 134217727;
    return (
      g !== 0
        ? ((i = g & ~u),
          i !== 0
            ? (s = sa(i))
            : ((f &= g), f !== 0 ? (s = sa(f)) : n || ((n = g & ~t), n !== 0 && (s = sa(n)))))
        : ((g = i & ~u),
          g !== 0
            ? (s = sa(g))
            : f !== 0
              ? (s = sa(f))
              : n || ((n = i & ~t), n !== 0 && (s = sa(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & u) === 0 &&
            ((u = s & -s), (n = e & -e), u >= n || (u === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function ji(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function H0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gf() {
    var t = Ul;
    return ((Ul <<= 1), (Ul & 62914560) === 0 && (Ul = 4194304), t);
  }
  function Dr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Mi(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function q0(t, e, n, i, s, u) {
    var f = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var g = t.entanglements,
      T = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var _ = 31 - je(n),
        L = 1 << _;
      ((g[_] = 0), (T[_] = -1));
      var w = D[_];
      if (w !== null)
        for (D[_] = null, _ = 0; _ < w.length; _++) {
          var z = w[_];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~L;
    }
    (i !== 0 && vf(t, i, 0),
      u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e)));
  }
  function vf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var i = 31 - je(e);
    ((t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 261930)));
  }
  function xf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - je(n),
        s = 1 << i;
      ((s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s));
    }
  }
  function bf(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : wr(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function wr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Cr(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Sf() {
    var t = X.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : sp(t.type));
  }
  function Tf(t, e) {
    var n = X.p;
    try {
      return ((X.p = t), e());
    } finally {
      X.p = n;
    }
  }
  var Cn = Math.random().toString(36).slice(2),
    ie = "__reactFiber$" + Cn,
    pe = "__reactProps$" + Cn,
    Ca = "__reactContainer$" + Cn,
    zr = "__reactEvents$" + Cn,
    Y0 = "__reactListeners$" + Cn,
    k0 = "__reactHandles$" + Cn,
    Af = "__reactResources$" + Cn,
    Ni = "__reactMarker$" + Cn;
  function Or(t) {
    (delete t[ie], delete t[pe], delete t[zr], delete t[Y0], delete t[k0]);
  }
  function za(t) {
    var e = t[ie];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Ca] || n[ie])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = Xm(t); t !== null; ) {
            if ((n = t[ie])) return n;
            t = Xm(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Oa(t) {
    if ((t = t[ie] || t[Ca])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Di(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Ra(t) {
    var e = t[Af];
    return (e || (e = t[Af] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function ee(t) {
    t[Ni] = !0;
  }
  var Ef = new Set(),
    jf = {};
  function ra(t, e) {
    (_a(t, e), _a(t + "Capture", e));
  }
  function _a(t, e) {
    for (jf[t] = e, t = 0; t < e.length; t++) Ef.add(e[t]);
  }
  var G0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Mf = {},
    Nf = {};
  function X0(t) {
    return jr.call(Nf, t)
      ? !0
      : jr.call(Mf, t)
        ? !1
        : G0.test(t)
          ? (Nf[t] = !0)
          : ((Mf[t] = !0), !1);
  }
  function Hl(t, e, n) {
    if (X0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function ql(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function cn(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function Ve(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Df(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Z0(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        u = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            ((n = "" + f), u.call(this, f));
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Rr(t) {
    if (!t._valueTracker) {
      var e = Df(t) ? "checked" : "value";
      t._valueTracker = Z0(t, e, "" + t[e]);
    }
  }
  function wf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = Df(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Yl(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var K0 = /[\n"\\]/g;
  function Be(t) {
    return t.replace(K0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function _r(t, e, n, i, s, u, f, g) {
    ((t.name = ""),
      f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + Ve(e))
          : t.value !== "" + Ve(e) && (t.value = "" + Ve(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? Vr(t, f, Ve(e))
        : n != null
          ? Vr(t, f, Ve(n))
          : i != null && t.removeAttribute("value"),
      s == null && u != null && (t.defaultChecked = !!u),
      s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean"
        ? (t.name = "" + Ve(g))
        : t.removeAttribute("name"));
  }
  function Cf(t, e, n, i, s, u, f, g) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        Rr(t);
        return;
      }
      ((n = n != null ? "" + Ve(n) : ""),
        (e = e != null ? "" + Ve(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = g ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      Rr(t));
  }
  function Vr(t, e, n) {
    (e === "number" && Yl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Va(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Ve(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function zf(t, e, n) {
    if (e != null && ((e = "" + Ve(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ve(n) : "";
  }
  function Of(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (Ut(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Ve(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i),
      Rr(t));
  }
  function Ba(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Q0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Rf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : i
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Q0.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function _f(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""));
      for (var s in e) ((i = e[s]), e.hasOwnProperty(s) && n[s] !== i && Rf(t, s, i));
    } else for (var u in e) e.hasOwnProperty(u) && Rf(t, u, e[u]);
  }
  function Br(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var J0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    F0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kl(t) {
    return F0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function fn() {}
  var Ur = null;
  function Lr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ua = null,
    La = null;
  function Vf(t) {
    var e = Oa(t);
    if (e && (t = e.stateNode)) {
      var n = t[pe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (_r(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name="' + Be("" + e) + '"][type="radio"]'), e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[pe] || null;
                if (!s) throw Error(r(90));
                _r(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++) ((i = n[e]), i.form === t.form && wf(i));
          }
          break t;
        case "textarea":
          zf(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Va(t, !!n.multiple, e, !1));
      }
    }
  }
  var Hr = !1;
  function Bf(t, e, n) {
    if (Hr) return t(e, n);
    Hr = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Hr = !1),
        (Ua !== null || La !== null) &&
          (ws(), Ua && ((e = Ua), (t = La), (La = Ua = null), Vf(e), t)))
      )
        for (e = 0; e < t.length; e++) Vf(t[e]);
    }
  }
  function wi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[pe] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !i));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var dn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    qr = !1;
  if (dn)
    try {
      var Ci = {};
      (Object.defineProperty(Ci, "passive", {
        get: function () {
          qr = !0;
        },
      }),
        window.addEventListener("test", Ci, Ci),
        window.removeEventListener("test", Ci, Ci));
    } catch {
      qr = !1;
    }
  var zn = null,
    Yr = null,
    Gl = null;
  function Uf() {
    if (Gl) return Gl;
    var t,
      e = Yr,
      n = e.length,
      i,
      s = "value" in zn ? zn.value : zn.textContent,
      u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[u - i]; i++);
    return (Gl = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Xl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Zl() {
    return !0;
  }
  function Lf() {
    return !1;
  }
  function ye(t) {
    function e(n, i, s, u, f) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = f),
        (this.currentTarget = null));
      for (var g in t) t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(u) : u[g]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Zl
          : Lf),
        (this.isPropagationStopped = Lf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Zl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Zl));
        },
        persist: function () {},
        isPersistent: Zl,
      }),
      e
    );
  }
  var oa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Kl = ye(oa),
    zi = b({}, oa, { view: 0, detail: 0 }),
    P0 = ye(zi),
    kr,
    Gr,
    Oi,
    Ql = b({}, zi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Oi &&
              (Oi && t.type === "mousemove"
                ? ((kr = t.screenX - Oi.screenX), (Gr = t.screenY - Oi.screenY))
                : (Gr = kr = 0),
              (Oi = t)),
            kr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Gr;
      },
    }),
    Hf = ye(Ql),
    W0 = b({}, Ql, { dataTransfer: 0 }),
    $0 = ye(W0),
    I0 = b({}, zi, { relatedTarget: 0 }),
    Xr = ye(I0),
    tv = b({}, oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ev = ye(tv),
    nv = b({}, oa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    av = ye(nv),
    iv = b({}, oa, { data: 0 }),
    qf = ye(iv),
    lv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    sv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    rv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ov(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = rv[t]) ? !!e[t] : !1;
  }
  function Zr() {
    return ov;
  }
  var uv = b({}, zi, {
      key: function (t) {
        if (t.key) {
          var e = lv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Xl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? sv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zr,
      charCode: function (t) {
        return t.type === "keypress" ? Xl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Xl(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    cv = ye(uv),
    fv = b({}, Ql, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Yf = ye(fv),
    dv = b({}, zi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zr,
    }),
    hv = ye(dv),
    mv = b({}, oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pv = ye(mv),
    yv = b({}, Ql, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gv = ye(yv),
    vv = b({}, oa, { newState: 0, oldState: 0 }),
    xv = ye(vv),
    bv = [9, 13, 27, 32],
    Kr = dn && "CompositionEvent" in window,
    Ri = null;
  dn && "documentMode" in document && (Ri = document.documentMode);
  var Sv = dn && "TextEvent" in window && !Ri,
    kf = dn && (!Kr || (Ri && 8 < Ri && 11 >= Ri)),
    Gf = " ",
    Xf = !1;
  function Zf(t, e) {
    switch (t) {
      case "keyup":
        return bv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Kf(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var Ha = !1;
  function Tv(t, e) {
    switch (t) {
      case "compositionend":
        return Kf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Xf = !0), Gf);
      case "textInput":
        return ((t = e.data), t === Gf && Xf ? null : t);
      default:
        return null;
    }
  }
  function Av(t, e) {
    if (Ha)
      return t === "compositionend" || (!Kr && Zf(t, e))
        ? ((t = Uf()), (Gl = Yr = zn = null), (Ha = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return kf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ev = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ev[t.type] : e === "textarea";
  }
  function Jf(t, e, n, i) {
    (Ua ? (La ? La.push(i) : (La = [i])) : (Ua = i),
      (e = Bs(e, "onChange")),
      0 < e.length &&
        ((n = new Kl("onChange", "change", null, n, i)), t.push({ event: n, listeners: e })));
  }
  var _i = null,
    Vi = null;
  function jv(t) {
    Cm(t, 0);
  }
  function Jl(t) {
    var e = Di(t);
    if (wf(e)) return t;
  }
  function Ff(t, e) {
    if (t === "change") return e;
  }
  var Pf = !1;
  if (dn) {
    var Qr;
    if (dn) {
      var Jr = "oninput" in document;
      if (!Jr) {
        var Wf = document.createElement("div");
        (Wf.setAttribute("oninput", "return;"), (Jr = typeof Wf.oninput == "function"));
      }
      Qr = Jr;
    } else Qr = !1;
    Pf = Qr && (!document.documentMode || 9 < document.documentMode);
  }
  function $f() {
    _i && (_i.detachEvent("onpropertychange", If), (Vi = _i = null));
  }
  function If(t) {
    if (t.propertyName === "value" && Jl(Vi)) {
      var e = [];
      (Jf(e, Vi, t, Lr(t)), Bf(jv, e));
    }
  }
  function Mv(t, e, n) {
    t === "focusin"
      ? ($f(), (_i = e), (Vi = n), _i.attachEvent("onpropertychange", If))
      : t === "focusout" && $f();
  }
  function Nv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Jl(Vi);
  }
  function Dv(t, e) {
    if (t === "click") return Jl(e);
  }
  function wv(t, e) {
    if (t === "input" || t === "change") return Jl(e);
  }
  function Cv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Me = typeof Object.is == "function" ? Object.is : Cv;
  function Bi(t, e) {
    if (Me(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!jr.call(e, s) || !Me(t[s], e[s])) return !1;
    }
    return !0;
  }
  function td(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ed(t, e) {
    var n = td(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e)) return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = td(n);
    }
  }
  function nd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? nd(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function ad(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Yl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Yl(t.document);
    }
    return e;
  }
  function Fr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var zv = dn && "documentMode" in document && 11 >= document.documentMode,
    qa = null,
    Pr = null,
    Ui = null,
    Wr = !1;
  function id(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wr ||
      qa == null ||
      qa !== Yl(i) ||
      ((i = qa),
      "selectionStart" in i && Fr(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Ui && Bi(Ui, i)) ||
        ((Ui = i),
        (i = Bs(Pr, "onSelect")),
        0 < i.length &&
          ((e = new Kl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = qa))));
  }
  function ua(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ya = {
      animationend: ua("Animation", "AnimationEnd"),
      animationiteration: ua("Animation", "AnimationIteration"),
      animationstart: ua("Animation", "AnimationStart"),
      transitionrun: ua("Transition", "TransitionRun"),
      transitionstart: ua("Transition", "TransitionStart"),
      transitioncancel: ua("Transition", "TransitionCancel"),
      transitionend: ua("Transition", "TransitionEnd"),
    },
    $r = {},
    ld = {};
  dn &&
    ((ld = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ya.animationend.animation,
      delete Ya.animationiteration.animation,
      delete Ya.animationstart.animation),
    "TransitionEvent" in window || delete Ya.transitionend.transition);
  function ca(t) {
    if ($r[t]) return $r[t];
    if (!Ya[t]) return t;
    var e = Ya[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ld) return ($r[t] = e[n]);
    return t;
  }
  var sd = ca("animationend"),
    rd = ca("animationiteration"),
    od = ca("animationstart"),
    Ov = ca("transitionrun"),
    Rv = ca("transitionstart"),
    _v = ca("transitioncancel"),
    ud = ca("transitionend"),
    cd = new Map(),
    Ir =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ir.push("scrollEnd");
  function Je(t, e) {
    (cd.set(t, e), ra(e, [t]));
  }
  var Fl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" && t !== null && typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ue = [],
    ka = 0,
    to = 0;
  function Pl() {
    for (var t = ka, e = (to = ka = 0); e < t; ) {
      var n = Ue[e];
      Ue[e++] = null;
      var i = Ue[e];
      Ue[e++] = null;
      var s = Ue[e];
      Ue[e++] = null;
      var u = Ue[e];
      if (((Ue[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        (f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)), (i.pending = s));
      }
      u !== 0 && fd(n, s, u);
    }
  }
  function Wl(t, e, n, i) {
    ((Ue[ka++] = t),
      (Ue[ka++] = e),
      (Ue[ka++] = n),
      (Ue[ka++] = i),
      (to |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function eo(t, e, n, i) {
    return (Wl(t, e, n, i), $l(t));
  }
  function fa(t, e) {
    return (Wl(t, null, null, e), $l(t));
  }
  function fd(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      ((u.childLanes |= n),
        (i = u.alternate),
        i !== null && (i.childLanes |= n),
        u.tag === 22 && ((t = u.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - je(n)),
          (t = u.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        u)
      : null;
  }
  function $l(t) {
    if (50 < ll) throw ((ll = 0), (fu = null), Error(r(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ga = {};
  function Vv(t, e, n, i) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ne(t, e, n, i) {
    return new Vv(t, e, n, i);
  }
  function no(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function hn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ne(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function dd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Il(t, e, n, i, s, u) {
    var f = 0;
    if (((i = t), typeof t == "function")) no(t) && (f = 1);
    else if (typeof t == "string")
      f = qx(t, n, W.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case st:
          return ((t = Ne(31, n, e, s)), (t.elementType = st), (t.lanes = u), t);
        case H:
          return da(n.children, s, u, e);
        case O:
          ((f = 8), (s |= 24));
          break;
        case B:
          return ((t = Ne(12, n, e, s | 2)), (t.elementType = B), (t.lanes = u), t);
        case Q:
          return ((t = Ne(13, n, e, s)), (t.elementType = Q), (t.lanes = u), t);
        case at:
          return ((t = Ne(19, n, e, s)), (t.elementType = at), (t.lanes = u), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
                f = 10;
                break t;
              case k:
                f = 9;
                break t;
              case G:
                f = 11;
                break t;
              case I:
                f = 14;
                break t;
              case F:
                ((f = 16), (i = null));
                break t;
            }
          ((f = 29), (n = Error(r(130, t === null ? "null" : typeof t, ""))), (i = null));
      }
    return ((e = Ne(f, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = u), e);
  }
  function da(t, e, n, i) {
    return ((t = Ne(7, t, i, e)), (t.lanes = n), t);
  }
  function ao(t, e, n) {
    return ((t = Ne(6, t, null, e)), (t.lanes = n), t);
  }
  function hd(t) {
    var e = Ne(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function io(t, e, n) {
    return (
      (e = Ne(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var md = new WeakMap();
  function Le(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = md.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: Ai(e) }), md.set(t, e), e);
    }
    return { value: t, source: e, stack: Ai(e) };
  }
  var Xa = [],
    Za = 0,
    ts = null,
    Li = 0,
    He = [],
    qe = 0,
    On = null,
    en = 1,
    nn = "";
  function mn(t, e) {
    ((Xa[Za++] = Li), (Xa[Za++] = ts), (ts = t), (Li = e));
  }
  function pd(t, e, n) {
    ((He[qe++] = en), (He[qe++] = nn), (He[qe++] = On), (On = t));
    var i = en;
    t = nn;
    var s = 32 - je(i) - 1;
    ((i &= ~(1 << s)), (n += 1));
    var u = 32 - je(e) + s;
    if (30 < u) {
      var f = s - (s % 5);
      ((u = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (en = (1 << (32 - je(e) + s)) | (n << s) | i),
        (nn = u + t));
    } else ((en = (1 << u) | (n << s) | i), (nn = t));
  }
  function lo(t) {
    t.return !== null && (mn(t, 1), pd(t, 1, 0));
  }
  function so(t) {
    for (; t === ts; ) ((ts = Xa[--Za]), (Xa[Za] = null), (Li = Xa[--Za]), (Xa[Za] = null));
    for (; t === On; )
      ((On = He[--qe]),
        (He[qe] = null),
        (nn = He[--qe]),
        (He[qe] = null),
        (en = He[--qe]),
        (He[qe] = null));
  }
  function yd(t, e) {
    ((He[qe++] = en), (He[qe++] = nn), (He[qe++] = On), (en = e.id), (nn = e.overflow), (On = t));
  }
  var le = null,
    Ot = null,
    xt = !1,
    Rn = null,
    Ye = !1,
    ro = Error(r(519));
  function _n(t) {
    var e = Error(
      r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Hi(Le(e, t)), ro);
  }
  function gd(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[ie] = t), (e[pe] = i), n)) {
      case "dialog":
        (yt("cancel", e), yt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < rl.length; n++) yt(rl[n], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (yt("error", e), yt("load", e));
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        (yt("invalid", e),
          Cf(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0));
        break;
      case "select":
        yt("invalid", e);
        break;
      case "textarea":
        (yt("invalid", e), Of(e, i.value, i.defaultValue, i.children));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      _m(e.textContent, n)
        ? (i.popover != null && (yt("beforetoggle", e), yt("toggle", e)),
          i.onScroll != null && yt("scroll", e),
          i.onScrollEnd != null && yt("scrollend", e),
          i.onClick != null && (e.onclick = fn),
          (e = !0))
        : (e = !1),
      e || _n(t, !0));
  }
  function vd(t) {
    for (le = t.return; le; )
      switch (le.tag) {
        case 5:
        case 31:
        case 13:
          Ye = !1;
          return;
        case 27:
        case 3:
          Ye = !0;
          return;
        default:
          le = le.return;
      }
  }
  function Ka(t) {
    if (t !== le) return !1;
    if (!xt) return (vd(t), (xt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type), (n = !(n !== "form" && n !== "button") || Mu(t.type, t.memoizedProps))),
        (n = !n)),
      n && Ot && _n(t),
      vd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(r(317));
      Ot = Gm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(r(317));
      Ot = Gm(t);
    } else
      e === 27
        ? ((e = Ot), Jn(t.type) ? ((t = zu), (zu = null), (Ot = t)) : (Ot = e))
        : (Ot = le ? Ge(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ha() {
    ((Ot = le = null), (xt = !1));
  }
  function oo() {
    var t = Rn;
    return (t !== null && (be === null ? (be = t) : be.push.apply(be, t), (Rn = null)), t);
  }
  function Hi(t) {
    Rn === null ? (Rn = [t]) : Rn.push(t);
  }
  var uo = A(null),
    ma = null,
    pn = null;
  function Vn(t, e, n) {
    (K(uo, e._currentValue), (e._currentValue = n));
  }
  function yn(t) {
    ((t._currentValue = uo.current), U(uo));
  }
  function co(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function fo(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var g = u;
          u = s;
          for (var T = 0; T < e.length; T++)
            if (g.context === e[T]) {
              ((u.lanes |= n),
                (g = u.alternate),
                g !== null && (g.lanes |= n),
                co(u.return, n, t),
                i || (f = null));
              break t;
            }
          u = g.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(r(341));
        ((f.lanes |= n), (u = f.alternate), u !== null && (u.lanes |= n), co(f, n, t), (f = null));
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            ((s.return = f.return), (f = s));
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Qa(t, e, n, i) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var g = s.type;
          Me(s.pendingProps.value, f.value) || (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (s === St.current) {
        if (((f = s.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(dl) : (t = [dl]));
      }
      s = s.return;
    }
    (t !== null && fo(e, t, n, i), (e.flags |= 262144));
  }
  function es(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Me(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function pa(t) {
    ((ma = t), (pn = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function se(t) {
    return xd(ma, t);
  }
  function ns(t, e) {
    return (ma === null && pa(t), xd(t, e));
  }
  function xd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), pn === null)) {
      if (t === null) throw Error(r(308));
      ((pn = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else pn = pn.next = e;
    return n;
  }
  var Bv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Uv = a.unstable_scheduleCallback,
    Lv = a.unstable_NormalPriority,
    Kt = {
      $$typeof: q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ho() {
    return { controller: new Bv(), data: new Map(), refCount: 0 };
  }
  function qi(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Uv(Lv, function () {
          t.controller.abort();
        }));
  }
  var Yi = null,
    mo = 0,
    Ja = 0,
    Fa = null;
  function Hv(t, e) {
    if (Yi === null) {
      var n = (Yi = []);
      ((mo = 0),
        (Ja = gu()),
        (Fa = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (mo++, e.then(bd, bd), e);
  }
  function bd() {
    if (--mo === 0 && Yi !== null) {
      Fa !== null && (Fa.status = "fulfilled");
      var t = Yi;
      ((Yi = null), (Ja = 0), (Fa = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function qv(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++) (0, n[s])(void 0);
        },
      ),
      i
    );
  }
  var Sd = R.S;
  R.S = function (t, e) {
    ((im = Ae()),
      typeof e == "object" && e !== null && typeof e.then == "function" && Hv(t, e),
      Sd !== null && Sd(t, e));
  };
  var ya = A(null);
  function po() {
    var t = ya.current;
    return t !== null ? t : Ct.pooledCache;
  }
  function as(t, e) {
    e === null ? K(ya, ya.current) : K(ya, e.pool);
  }
  function Td() {
    var t = po();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var Pa = Error(r(460)),
    yo = Error(r(474)),
    is = Error(r(542)),
    ls = { then: function () {} };
  function Ad(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Ed(t, e, n) {
    switch (
      ((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(fn, fn), (e = n)), e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Md(t), t);
      default:
        if (typeof e.status == "string") e.then(fn, fn);
        else {
          if (((t = Ct), t !== null && 100 < t.shellSuspendCounter)) throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = i));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Md(t), t);
        }
        throw ((va = e), Pa);
    }
  }
  function ga(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? ((va = n), Pa) : n;
    }
  }
  var va = null;
  function jd() {
    if (va === null) throw Error(r(459));
    var t = va;
    return ((va = null), t);
  }
  function Md(t) {
    if (t === Pa || t === is) throw Error(r(483));
  }
  var Wa = null,
    ki = 0;
  function ss(t) {
    var e = ki;
    return ((ki += 1), Wa === null && (Wa = []), Ed(Wa, t, e));
  }
  function Gi(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function rs(t, e) {
    throw e.$$typeof === S
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t,
          ),
        ));
  }
  function Nd(t) {
    function e(j, E) {
      if (t) {
        var N = j.deletions;
        N === null ? ((j.deletions = [E]), (j.flags |= 16)) : N.push(E);
      }
    }
    function n(j, E) {
      if (!t) return null;
      for (; E !== null; ) (e(j, E), (E = E.sibling));
      return null;
    }
    function i(j) {
      for (var E = new Map(); j !== null; )
        (j.key !== null ? E.set(j.key, j) : E.set(j.index, j), (j = j.sibling));
      return E;
    }
    function s(j, E) {
      return ((j = hn(j, E)), (j.index = 0), (j.sibling = null), j);
    }
    function u(j, E, N) {
      return (
        (j.index = N),
        t
          ? ((N = j.alternate),
            N !== null
              ? ((N = N.index), N < E ? ((j.flags |= 67108866), E) : N)
              : ((j.flags |= 67108866), E))
          : ((j.flags |= 1048576), E)
      );
    }
    function f(j) {
      return (t && j.alternate === null && (j.flags |= 67108866), j);
    }
    function g(j, E, N, V) {
      return E === null || E.tag !== 6
        ? ((E = ao(N, j.mode, V)), (E.return = j), E)
        : ((E = s(E, N)), (E.return = j), E);
    }
    function T(j, E, N, V) {
      var nt = N.type;
      return nt === H
        ? _(j, E, N.props.children, V, N.key)
        : E !== null &&
            (E.elementType === nt ||
              (typeof nt == "object" && nt !== null && nt.$$typeof === F && ga(nt) === E.type))
          ? ((E = s(E, N.props)), Gi(E, N), (E.return = j), E)
          : ((E = Il(N.type, N.key, N.props, null, j.mode, V)), Gi(E, N), (E.return = j), E);
    }
    function D(j, E, N, V) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== N.containerInfo ||
        E.stateNode.implementation !== N.implementation
        ? ((E = io(N, j.mode, V)), (E.return = j), E)
        : ((E = s(E, N.children || [])), (E.return = j), E);
    }
    function _(j, E, N, V, nt) {
      return E === null || E.tag !== 7
        ? ((E = da(N, j.mode, V, nt)), (E.return = j), E)
        : ((E = s(E, N)), (E.return = j), E);
    }
    function L(j, E, N) {
      if ((typeof E == "string" && E !== "") || typeof E == "number" || typeof E == "bigint")
        return ((E = ao("" + E, j.mode, N)), (E.return = j), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case M:
            return ((N = Il(E.type, E.key, E.props, null, j.mode, N)), Gi(N, E), (N.return = j), N);
          case C:
            return ((E = io(E, j.mode, N)), (E.return = j), E);
          case F:
            return ((E = ga(E)), L(j, E, N));
        }
        if (Ut(E) || bt(E)) return ((E = da(E, j.mode, N, null)), (E.return = j), E);
        if (typeof E.then == "function") return L(j, ss(E), N);
        if (E.$$typeof === q) return L(j, ns(j, E), N);
        rs(j, E);
      }
      return null;
    }
    function w(j, E, N, V) {
      var nt = E !== null ? E.key : null;
      if ((typeof N == "string" && N !== "") || typeof N == "number" || typeof N == "bigint")
        return nt !== null ? null : g(j, E, "" + N, V);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case M:
            return N.key === nt ? T(j, E, N, V) : null;
          case C:
            return N.key === nt ? D(j, E, N, V) : null;
          case F:
            return ((N = ga(N)), w(j, E, N, V));
        }
        if (Ut(N) || bt(N)) return nt !== null ? null : _(j, E, N, V, null);
        if (typeof N.then == "function") return w(j, E, ss(N), V);
        if (N.$$typeof === q) return w(j, E, ns(j, N), V);
        rs(j, N);
      }
      return null;
    }
    function z(j, E, N, V, nt) {
      if ((typeof V == "string" && V !== "") || typeof V == "number" || typeof V == "bigint")
        return ((j = j.get(N) || null), g(E, j, "" + V, nt));
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case M:
            return ((j = j.get(V.key === null ? N : V.key) || null), T(E, j, V, nt));
          case C:
            return ((j = j.get(V.key === null ? N : V.key) || null), D(E, j, V, nt));
          case F:
            return ((V = ga(V)), z(j, E, N, V, nt));
        }
        if (Ut(V) || bt(V)) return ((j = j.get(N) || null), _(E, j, V, nt, null));
        if (typeof V.then == "function") return z(j, E, N, ss(V), nt);
        if (V.$$typeof === q) return z(j, E, N, ns(E, V), nt);
        rs(E, V);
      }
      return null;
    }
    function P(j, E, N, V) {
      for (
        var nt = null, Tt = null, tt = E, ct = (E = 0), vt = null;
        tt !== null && ct < N.length;
        ct++
      ) {
        tt.index > ct ? ((vt = tt), (tt = null)) : (vt = tt.sibling);
        var At = w(j, tt, N[ct], V);
        if (At === null) {
          tt === null && (tt = vt);
          break;
        }
        (t && tt && At.alternate === null && e(j, tt),
          (E = u(At, E, ct)),
          Tt === null ? (nt = At) : (Tt.sibling = At),
          (Tt = At),
          (tt = vt));
      }
      if (ct === N.length) return (n(j, tt), xt && mn(j, ct), nt);
      if (tt === null) {
        for (; ct < N.length; ct++)
          ((tt = L(j, N[ct], V)),
            tt !== null &&
              ((E = u(tt, E, ct)), Tt === null ? (nt = tt) : (Tt.sibling = tt), (Tt = tt)));
        return (xt && mn(j, ct), nt);
      }
      for (tt = i(tt); ct < N.length; ct++)
        ((vt = z(tt, j, ct, N[ct], V)),
          vt !== null &&
            (t && vt.alternate !== null && tt.delete(vt.key === null ? ct : vt.key),
            (E = u(vt, E, ct)),
            Tt === null ? (nt = vt) : (Tt.sibling = vt),
            (Tt = vt)));
      return (
        t &&
          tt.forEach(function (In) {
            return e(j, In);
          }),
        xt && mn(j, ct),
        nt
      );
    }
    function it(j, E, N, V) {
      if (N == null) throw Error(r(151));
      for (
        var nt = null, Tt = null, tt = E, ct = (E = 0), vt = null, At = N.next();
        tt !== null && !At.done;
        ct++, At = N.next()
      ) {
        tt.index > ct ? ((vt = tt), (tt = null)) : (vt = tt.sibling);
        var In = w(j, tt, At.value, V);
        if (In === null) {
          tt === null && (tt = vt);
          break;
        }
        (t && tt && In.alternate === null && e(j, tt),
          (E = u(In, E, ct)),
          Tt === null ? (nt = In) : (Tt.sibling = In),
          (Tt = In),
          (tt = vt));
      }
      if (At.done) return (n(j, tt), xt && mn(j, ct), nt);
      if (tt === null) {
        for (; !At.done; ct++, At = N.next())
          ((At = L(j, At.value, V)),
            At !== null &&
              ((E = u(At, E, ct)), Tt === null ? (nt = At) : (Tt.sibling = At), (Tt = At)));
        return (xt && mn(j, ct), nt);
      }
      for (tt = i(tt); !At.done; ct++, At = N.next())
        ((At = z(tt, j, ct, At.value, V)),
          At !== null &&
            (t && At.alternate !== null && tt.delete(At.key === null ? ct : At.key),
            (E = u(At, E, ct)),
            Tt === null ? (nt = At) : (Tt.sibling = At),
            (Tt = At)));
      return (
        t &&
          tt.forEach(function (Wx) {
            return e(j, Wx);
          }),
        xt && mn(j, ct),
        nt
      );
    }
    function wt(j, E, N, V) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === H &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case M:
            t: {
              for (var nt = N.key; E !== null; ) {
                if (E.key === nt) {
                  if (((nt = N.type), nt === H)) {
                    if (E.tag === 7) {
                      (n(j, E.sibling), (V = s(E, N.props.children)), (V.return = j), (j = V));
                      break t;
                    }
                  } else if (
                    E.elementType === nt ||
                    (typeof nt == "object" && nt !== null && nt.$$typeof === F && ga(nt) === E.type)
                  ) {
                    (n(j, E.sibling), (V = s(E, N.props)), Gi(V, N), (V.return = j), (j = V));
                    break t;
                  }
                  n(j, E);
                  break;
                } else e(j, E);
                E = E.sibling;
              }
              N.type === H
                ? ((V = da(N.props.children, j.mode, V, N.key)), (V.return = j), (j = V))
                : ((V = Il(N.type, N.key, N.props, null, j.mode, V)),
                  Gi(V, N),
                  (V.return = j),
                  (j = V));
            }
            return f(j);
          case C:
            t: {
              for (nt = N.key; E !== null; ) {
                if (E.key === nt)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === N.containerInfo &&
                    E.stateNode.implementation === N.implementation
                  ) {
                    (n(j, E.sibling), (V = s(E, N.children || [])), (V.return = j), (j = V));
                    break t;
                  } else {
                    n(j, E);
                    break;
                  }
                else e(j, E);
                E = E.sibling;
              }
              ((V = io(N, j.mode, V)), (V.return = j), (j = V));
            }
            return f(j);
          case F:
            return ((N = ga(N)), wt(j, E, N, V));
        }
        if (Ut(N)) return P(j, E, N, V);
        if (bt(N)) {
          if (((nt = bt(N)), typeof nt != "function")) throw Error(r(150));
          return ((N = nt.call(N)), it(j, E, N, V));
        }
        if (typeof N.then == "function") return wt(j, E, ss(N), V);
        if (N.$$typeof === q) return wt(j, E, ns(j, N), V);
        rs(j, N);
      }
      return (typeof N == "string" && N !== "") || typeof N == "number" || typeof N == "bigint"
        ? ((N = "" + N),
          E !== null && E.tag === 6
            ? (n(j, E.sibling), (V = s(E, N)), (V.return = j), (j = V))
            : (n(j, E), (V = ao(N, j.mode, V)), (V.return = j), (j = V)),
          f(j))
        : n(j, E);
    }
    return function (j, E, N, V) {
      try {
        ki = 0;
        var nt = wt(j, E, N, V);
        return ((Wa = null), nt);
      } catch (tt) {
        if (tt === Pa || tt === is) throw tt;
        var Tt = Ne(29, tt, null, j.mode);
        return ((Tt.lanes = V), (Tt.return = j), Tt);
      } finally {
      }
    };
  }
  var xa = Nd(!0),
    Dd = Nd(!1),
    Bn = !1;
  function go(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function vo(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Un(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ln(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Et & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = $l(t)),
        fd(t, null, n),
        e
      );
    }
    return (Wl(t, i, e, n), $l(t));
  }
  function Xi(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), xf(t, n));
    }
  }
  function xo(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (u === null ? (s = u = f) : (u = u.next = f), (n = n.next));
        } while (n !== null);
        u === null ? (s = u = e) : (u = u.next = e);
      } else s = u = e;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var bo = !1;
  function Zi() {
    if (bo) {
      var t = Fa;
      if (t !== null) throw t;
    }
  }
  function Ki(t, e, n, i) {
    bo = !1;
    var s = t.updateQueue;
    Bn = !1;
    var u = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var T = g,
        D = T.next;
      ((T.next = null), f === null ? (u = D) : (f.next = D), (f = T));
      var _ = t.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (g = _.lastBaseUpdate),
        g !== f && (g === null ? (_.firstBaseUpdate = D) : (g.next = D), (_.lastBaseUpdate = T)));
    }
    if (u !== null) {
      var L = s.baseState;
      ((f = 0), (_ = D = T = null), (g = u));
      do {
        var w = g.lane & -536870913,
          z = w !== g.lane;
        if (z ? (gt & w) === w : (i & w) === w) {
          (w !== 0 && w === Ja && (bo = !0),
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var P = t,
              it = g;
            w = e;
            var wt = n;
            switch (it.tag) {
              case 1:
                if (((P = it.payload), typeof P == "function")) {
                  L = P.call(wt, L, w);
                  break t;
                }
                L = P;
                break t;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = it.payload), (w = typeof P == "function" ? P.call(wt, L, w) : P), w == null)
                )
                  break t;
                L = b({}, L, w);
                break t;
              case 2:
                Bn = !0;
            }
          }
          ((w = g.callback),
            w !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = s.callbacks),
              z === null ? (s.callbacks = [w]) : z.push(w)));
        } else
          ((z = {
            lane: w,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            _ === null ? ((D = _ = z), (T = L)) : (_ = _.next = z),
            (f |= w));
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          ((z = g),
            (g = z.next),
            (z.next = null),
            (s.lastBaseUpdate = z),
            (s.shared.pending = null));
        }
      } while (!0);
      (_ === null && (T = L),
        (s.baseState = T),
        (s.firstBaseUpdate = D),
        (s.lastBaseUpdate = _),
        u === null && (s.shared.lanes = 0),
        (Gn |= f),
        (t.lanes = f),
        (t.memoizedState = L));
    }
  }
  function wd(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Cd(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) wd(n[t], e);
  }
  var $a = A(null),
    os = A(0);
  function zd(t, e) {
    ((t = jn), K(os, t), K($a, e), (jn = t | e.baseLanes));
  }
  function So() {
    (K(os, jn), K($a, $a.current));
  }
  function To() {
    ((jn = os.current), U($a), U(os));
  }
  var De = A(null),
    ke = null;
  function Hn(t) {
    var e = t.alternate;
    (K(Gt, Gt.current & 1),
      K(De, t),
      ke === null && (e === null || $a.current !== null || e.memoizedState !== null) && (ke = t));
  }
  function Ao(t) {
    (K(Gt, Gt.current), K(De, t), ke === null && (ke = t));
  }
  function Od(t) {
    t.tag === 22 ? (K(Gt, Gt.current), K(De, t), ke === null && (ke = t)) : qn();
  }
  function qn() {
    (K(Gt, Gt.current), K(De, De.current));
  }
  function we(t) {
    (U(De), ke === t && (ke = null), U(Gt));
  }
  var Gt = A(0);
  function us(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || wu(n) || Cu(n))) return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var gn = 0,
    ut = null,
    Nt = null,
    Qt = null,
    cs = !1,
    Ia = !1,
    ba = !1,
    fs = 0,
    Qi = 0,
    ti = null,
    Yv = 0;
  function Ht() {
    throw Error(r(321));
  }
  function Eo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!Me(t[n], e[n])) return !1;
    return !0;
  }
  function jo(t, e, n, i, s, u) {
    return (
      (gn = u),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? ph : qo),
      (ba = !1),
      (u = n(i, s)),
      (ba = !1),
      Ia && (u = _d(e, n, i, s)),
      Rd(t),
      u
    );
  }
  function Rd(t) {
    R.H = Pi;
    var e = Nt !== null && Nt.next !== null;
    if (((gn = 0), (Qt = Nt = ut = null), (cs = !1), (Qi = 0), (ti = null), e)) throw Error(r(300));
    t === null || Jt || ((t = t.dependencies), t !== null && es(t) && (Jt = !0));
  }
  function _d(t, e, n, i) {
    ut = t;
    var s = 0;
    do {
      if ((Ia && (ti = null), (Qi = 0), (Ia = !1), 25 <= s)) throw Error(r(301));
      if (((s += 1), (Qt = Nt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((R.H = yh), (u = e(n, i)));
    } while (Ia);
    return u;
  }
  function kv() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ji(e) : e),
      (t = t.useState()[0]),
      (Nt !== null ? Nt.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function Mo() {
    var t = fs !== 0;
    return ((fs = 0), t);
  }
  function No(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Do(t) {
    if (cs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      cs = !1;
    }
    ((gn = 0), (Qt = Nt = ut = null), (Ia = !1), (Qi = fs = 0), (ti = null));
  }
  function de() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Qt === null ? (ut.memoizedState = Qt = t) : (Qt = Qt.next = t), Qt);
  }
  function Xt() {
    if (Nt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var e = Qt === null ? ut.memoizedState : Qt.next;
    if (e !== null) ((Qt = e), (Nt = t));
    else {
      if (t === null) throw ut.alternate === null ? Error(r(467)) : Error(r(310));
      ((Nt = t),
        (t = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null,
        }),
        Qt === null ? (ut.memoizedState = Qt = t) : (Qt = Qt.next = t));
    }
    return Qt;
  }
  function ds() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ji(t) {
    var e = Qi;
    return (
      (Qi += 1),
      ti === null && (ti = []),
      (t = Ed(ti, t, e)),
      (e = ut),
      (Qt === null ? e.memoizedState : Qt.next) === null &&
        ((e = e.alternate), (R.H = e === null || e.memoizedState === null ? ph : qo)),
      t
    );
  }
  function hs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ji(t);
      if (t.$$typeof === q) return se(t);
    }
    throw Error(r(438, String(t)));
  }
  function wo(t) {
    var e = null,
      n = ut.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ut.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ds()), (ut.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = et;
    return (e.index++, n);
  }
  function vn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ms(t) {
    var e = Xt();
    return Co(e, Nt, t);
  }
  function Co(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        ((s.next = u.next), (u.next = f));
      }
      ((e.baseQueue = s = u), (i.pending = null));
    }
    if (((u = t.baseState), s === null)) t.memoizedState = u;
    else {
      e = s.next;
      var g = (f = null),
        T = null,
        D = e,
        _ = !1;
      do {
        var L = D.lane & -536870913;
        if (L !== D.lane ? (gt & L) === L : (gn & L) === L) {
          var w = D.revertLane;
          if (w === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              L === Ja && (_ = !0));
          else if ((gn & w) === w) {
            ((D = D.next), w === Ja && (_ = !0));
            continue;
          } else
            ((L = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              T === null ? ((g = T = L), (f = u)) : (T = T.next = L),
              (ut.lanes |= w),
              (Gn |= w));
          ((L = D.action), ba && n(u, L), (u = D.hasEagerState ? D.eagerState : n(u, L)));
        } else
          ((w = {
            lane: L,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            T === null ? ((g = T = w), (f = u)) : (T = T.next = w),
            (ut.lanes |= L),
            (Gn |= L));
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (T === null ? (f = u) : (T.next = g),
        !Me(u, t.memoizedState) && ((Jt = !0), _ && ((n = Fa), n !== null)))
      )
        throw n;
      ((t.memoizedState = u), (t.baseState = f), (t.baseQueue = T), (i.lastRenderedState = u));
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function zo(t) {
    var e = Xt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do ((u = t(u, f.action)), (f = f.next));
      while (f !== s);
      (Me(u, e.memoizedState) || (Jt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, i];
  }
  function Vd(t, e, n) {
    var i = ut,
      s = Xt(),
      u = xt;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !Me((Nt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Jt = !0)),
      (s = s.queue),
      _o(Ld.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || f || (Qt !== null && Qt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ei(9, { destroy: void 0 }, Ud.bind(null, i, s, n, e), null),
        Ct === null)
      )
        throw Error(r(349));
      u || (gn & 127) !== 0 || Bd(i, e, n);
    }
    return n;
  }
  function Bd(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ut.updateQueue),
      e === null
        ? ((e = ds()), (ut.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Ud(t, e, n, i) {
    ((e.value = n), (e.getSnapshot = i), Hd(e) && qd(t));
  }
  function Ld(t, e, n) {
    return n(function () {
      Hd(e) && qd(t);
    });
  }
  function Hd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Me(t, n);
    } catch {
      return !0;
    }
  }
  function qd(t) {
    var e = fa(t, 2);
    e !== null && Se(e, t, 2);
  }
  function Oo(t) {
    var e = de();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ba)) {
        wn(!0);
        try {
          n();
        } finally {
          wn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Yd(t, e, n, i) {
    return ((t.baseState = n), Co(t, Nt, typeof i == "function" ? i : vn));
  }
  function Gv(t, e, n, i, s) {
    if (gs(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          u.listeners.push(f);
        },
      };
      (R.T !== null ? n(!0) : (u.isTransition = !1),
        i(u),
        (n = e.pending),
        n === null
          ? ((u.next = e.pending = u), kd(e, u))
          : ((u.next = n.next), (e.pending = n.next = u)));
    }
  }
  function kd(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = R.T,
        f = {};
      R.T = f;
      try {
        var g = n(s, i),
          T = R.S;
        (T !== null && T(f, g), Gd(t, e, g));
      } catch (D) {
        Ro(t, e, D);
      } finally {
        (u !== null && f.types !== null && (u.types = f.types), (R.T = u));
      }
    } else
      try {
        ((u = n(s, i)), Gd(t, e, u));
      } catch (D) {
        Ro(t, e, D);
      }
  }
  function Gd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Xd(t, e, i);
          },
          function (i) {
            return Ro(t, e, i);
          },
        )
      : Xd(t, e, n);
  }
  function Xd(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      Zd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), kd(t, n))));
  }
  function Ro(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((e.status = "rejected"), (e.reason = n), Zd(e), (e = e.next));
      while (e !== i);
    }
    t.action = null;
  }
  function Zd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Kd(t, e) {
    return e;
  }
  function Qd(t, e) {
    if (xt) {
      var n = Ct.formState;
      if (n !== null) {
        t: {
          var i = ut;
          if (xt) {
            if (Ot) {
              e: {
                for (var s = Ot, u = Ye; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (((s = Ge(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((u = s.data), (s = u === "F!" || u === "F" ? s : null));
              }
              if (s) {
                ((Ot = Ge(s.nextSibling)), (i = s.data === "F!"));
                break t;
              }
            }
            _n(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = de()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kd,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = dh.bind(null, ut, i)),
      (i.dispatch = n),
      (i = Oo(!1)),
      (u = Ho.bind(null, ut, !1, i.queue)),
      (i = de()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = Gv.bind(null, ut, s, u, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function Jd(t) {
    var e = Xt();
    return Fd(e, Nt, t);
  }
  function Fd(t, e, n) {
    if (
      ((e = Co(t, e, Kd)[0]),
      (t = ms(vn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Ji(e);
      } catch (f) {
        throw f === Pa ? is : f;
      }
    else i = e;
    e = Xt();
    var s = e.queue,
      u = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((ut.flags |= 2048), ei(9, { destroy: void 0 }, Xv.bind(null, s, n), null)),
      [i, u, t]
    );
  }
  function Xv(t, e) {
    t.action = e;
  }
  function Pd(t) {
    var e = Xt(),
      n = Nt;
    if (n !== null) return Fd(e, n, t);
    (Xt(), (e = e.memoizedState), (n = Xt()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = t), [e, i, !1]);
  }
  function ei(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = ds()), (ut.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function Wd() {
    return Xt().memoizedState;
  }
  function ps(t, e, n, i) {
    var s = de();
    ((ut.flags |= t),
      (s.memoizedState = ei(1 | e, { destroy: void 0 }, n, i === void 0 ? null : i)));
  }
  function ys(t, e, n, i) {
    var s = Xt();
    i = i === void 0 ? null : i;
    var u = s.memoizedState.inst;
    Nt !== null && i !== null && Eo(i, Nt.memoizedState.deps)
      ? (s.memoizedState = ei(e, u, n, i))
      : ((ut.flags |= t), (s.memoizedState = ei(1 | e, u, n, i)));
  }
  function $d(t, e) {
    ps(8390656, 8, t, e);
  }
  function _o(t, e) {
    ys(2048, 8, t, e);
  }
  function Zv(t) {
    ut.flags |= 4;
    var e = ut.updateQueue;
    if (e === null) ((e = ds()), (ut.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Id(t) {
    var e = Xt().memoizedState;
    return (
      Zv({ ref: e, nextImpl: t }),
      function () {
        if ((Et & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function th(t, e) {
    return ys(4, 2, t, e);
  }
  function eh(t, e) {
    return ys(4, 4, t, e);
  }
  function nh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function ah(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ys(4, 4, nh.bind(null, e, t), n));
  }
  function Vo() {}
  function ih(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Eo(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function lh(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Eo(e, i[1])) return i[0];
    if (((i = t()), ba)) {
      wn(!0);
      try {
        t();
      } finally {
        wn(!1);
      }
    }
    return ((n.memoizedState = [i, e]), i);
  }
  function Bo(t, e, n) {
    return n === void 0 || ((gn & 1073741824) !== 0 && (gt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = sm()), (ut.lanes |= t), (Gn |= t), n);
  }
  function sh(t, e, n, i) {
    return Me(n, e)
      ? n
      : $a.current !== null
        ? ((t = Bo(t, n, i)), Me(t, e) || (Jt = !0), t)
        : (gn & 42) === 0 || ((gn & 1073741824) !== 0 && (gt & 261930) === 0)
          ? ((Jt = !0), (t.memoizedState = n))
          : ((t = sm()), (ut.lanes |= t), (Gn |= t), e);
  }
  function rh(t, e, n, i, s) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var f = R.T,
      g = {};
    ((R.T = g), Ho(t, !1, e, n));
    try {
      var T = s(),
        D = R.S;
      if (
        (D !== null && D(g, T), T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var _ = qv(T, i);
        Fi(t, e, _, Oe(t));
      } else Fi(t, e, i, Oe(t));
    } catch (L) {
      Fi(t, e, { then: function () {}, status: "rejected", reason: L }, Oe());
    } finally {
      ((X.p = u), f !== null && g.types !== null && (f.types = g.types), (R.T = f));
    }
  }
  function Kv() {}
  function Uo(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = oh(t).queue;
    rh(
      t,
      s,
      e,
      J,
      n === null
        ? Kv
        : function () {
            return (uh(t), n(i));
          },
    );
  }
  function oh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vn,
        lastRenderedState: J,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: vn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function uh(t) {
    var e = oh(t);
    (e.next === null && (e = t.alternate.memoizedState), Fi(t, e.next.queue, {}, Oe()));
  }
  function Lo() {
    return se(dl);
  }
  function ch() {
    return Xt().memoizedState;
  }
  function fh() {
    return Xt().memoizedState;
  }
  function Qv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Oe();
          t = Un(n);
          var i = Ln(e, t, n);
          (i !== null && (Se(i, e, n), Xi(i, e, n)), (e = { cache: ho() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Jv(t, e, n) {
    var i = Oe();
    ((n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gs(t) ? hh(e, n) : ((n = eo(t, e, n, i)), n !== null && (Se(n, t, i), mh(n, e, i))));
  }
  function dh(t, e, n) {
    var i = Oe();
    Fi(t, e, n, i);
  }
  function Fi(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gs(t)) hh(e, s);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var f = e.lastRenderedState,
            g = u(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), Me(g, f)))
            return (Wl(t, e, s, 0), Ct === null && Pl(), !1);
        } catch {
        } finally {
        }
      if (((n = eo(t, e, s, i)), n !== null)) return (Se(n, t, i), mh(n, e, i), !0);
    }
    return !1;
  }
  function Ho(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: gu(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gs(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = eo(t, n, i, 2)), e !== null && Se(e, t, 2));
  }
  function gs(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function hh(t, e) {
    Ia = cs = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function mh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (n |= i), (e.lanes = n), xf(t, n));
    }
  }
  var Pi = {
    readContext: se,
    use: hs,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    useHostTransitionStatus: Ht,
    useFormState: Ht,
    useActionState: Ht,
    useOptimistic: Ht,
    useMemoCache: Ht,
    useCacheRefresh: Ht,
  };
  Pi.useEffectEvent = Ht;
  var ph = {
      readContext: se,
      use: hs,
      useCallback: function (t, e) {
        return ((de().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: se,
      useEffect: $d,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), ps(4194308, 4, nh.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return ps(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ps(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = de();
        e = e === void 0 ? null : e;
        var i = t();
        if (ba) {
          wn(!0);
          try {
            t();
          } finally {
            wn(!1);
          }
        }
        return ((n.memoizedState = [i, e]), i);
      },
      useReducer: function (t, e, n) {
        var i = de();
        if (n !== void 0) {
          var s = n(e);
          if (ba) {
            wn(!0);
            try {
              n(e);
            } finally {
              wn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = Jv.bind(null, ut, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = de();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Oo(t);
        var e = t.queue,
          n = dh.bind(null, ut, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Vo,
      useDeferredValue: function (t, e) {
        var n = de();
        return Bo(n, t, e);
      },
      useTransition: function () {
        var t = Oo(!1);
        return ((t = rh.bind(null, ut, t.queue, !0, !1)), (de().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var i = ut,
          s = de();
        if (xt) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), Ct === null)) throw Error(r(349));
          (gt & 127) !== 0 || Bd(i, e, n);
        }
        s.memoizedState = n;
        var u = { value: n, getSnapshot: e };
        return (
          (s.queue = u),
          $d(Ld.bind(null, i, u, t), [t]),
          (i.flags |= 2048),
          ei(9, { destroy: void 0 }, Ud.bind(null, i, u, n, e), null),
          n
        );
      },
      useId: function () {
        var t = de(),
          e = Ct.identifierPrefix;
        if (xt) {
          var n = nn,
            i = en;
          ((n = (i & ~(1 << (32 - je(i) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = fs++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Yv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Lo,
      useFormState: Qd,
      useActionState: Qd,
      useOptimistic: function (t) {
        var e = de();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((e.queue = n), (e = Ho.bind(null, ut, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: wo,
      useCacheRefresh: function () {
        return (de().memoizedState = Qv.bind(null, ut));
      },
      useEffectEvent: function (t) {
        var e = de(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Et & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    qo = {
      readContext: se,
      use: hs,
      useCallback: ih,
      useContext: se,
      useEffect: _o,
      useImperativeHandle: ah,
      useInsertionEffect: th,
      useLayoutEffect: eh,
      useMemo: lh,
      useReducer: ms,
      useRef: Wd,
      useState: function () {
        return ms(vn);
      },
      useDebugValue: Vo,
      useDeferredValue: function (t, e) {
        var n = Xt();
        return sh(n, Nt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ms(vn)[0],
          e = Xt().memoizedState;
        return [typeof t == "boolean" ? t : Ji(t), e];
      },
      useSyncExternalStore: Vd,
      useId: ch,
      useHostTransitionStatus: Lo,
      useFormState: Jd,
      useActionState: Jd,
      useOptimistic: function (t, e) {
        var n = Xt();
        return Yd(n, Nt, t, e);
      },
      useMemoCache: wo,
      useCacheRefresh: fh,
    };
  qo.useEffectEvent = Id;
  var yh = {
    readContext: se,
    use: hs,
    useCallback: ih,
    useContext: se,
    useEffect: _o,
    useImperativeHandle: ah,
    useInsertionEffect: th,
    useLayoutEffect: eh,
    useMemo: lh,
    useReducer: zo,
    useRef: Wd,
    useState: function () {
      return zo(vn);
    },
    useDebugValue: Vo,
    useDeferredValue: function (t, e) {
      var n = Xt();
      return Nt === null ? Bo(n, t, e) : sh(n, Nt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = zo(vn)[0],
        e = Xt().memoizedState;
      return [typeof t == "boolean" ? t : Ji(t), e];
    },
    useSyncExternalStore: Vd,
    useId: ch,
    useHostTransitionStatus: Lo,
    useFormState: Pd,
    useActionState: Pd,
    useOptimistic: function (t, e) {
      var n = Xt();
      return Nt !== null ? Yd(n, Nt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: wo,
    useCacheRefresh: fh,
  };
  yh.useEffectEvent = Id;
  function Yo(t, e, n, i) {
    ((e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var ko = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = Oe(),
        s = Un(i);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = Ln(t, s, i)),
        e !== null && (Se(e, t, i), Xi(e, t, i)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = Oe(),
        s = Un(i);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Ln(t, s, i)),
        e !== null && (Se(e, t, i), Xi(e, t, i)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Oe(),
        i = Un(n);
      ((i.tag = 2),
        e != null && (i.callback = e),
        (e = Ln(t, i, n)),
        e !== null && (Se(e, t, n), Xi(e, t, n)));
    },
  };
  function gh(t, e, n, i, s, u, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, u, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Bi(n, i) || !Bi(s, u)
          : !0
    );
  }
  function vh(t, e, n, i) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && ko.enqueueReplaceState(e, e.state, null));
  }
  function Sa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function xh(t) {
    Fl(t);
  }
  function bh(t) {
    console.error(t);
  }
  function Sh(t) {
    Fl(t);
  }
  function vs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Th(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Go(t, e, n) {
    return (
      (n = Un(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        vs(t, e);
      }),
      n
    );
  }
  function Ah(t) {
    return ((t = Un(t)), (t.tag = 3), t);
  }
  function Eh(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = i.value;
      ((t.payload = function () {
        return s(u);
      }),
        (t.callback = function () {
          Th(e, n, i);
        }));
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        (Th(e, n, i),
          typeof s != "function" && (Xn === null ? (Xn = new Set([this])) : Xn.add(this)));
        var g = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Fv(t, e, n, i, s) {
    if (((n.flags |= 32768), i !== null && typeof i == "object" && typeof i.then == "function")) {
      if (((e = n.alternate), e !== null && Qa(e, n, s, !0), (n = De.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              ke === null ? Cs() : n.alternate === null && qt === 0 && (qt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === ls
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  mu(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === ls
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue), n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  mu(t, i, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return (mu(t, i, s), Cs(), !1);
    }
    if (xt)
      return (
        (e = De.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== ro && ((t = Error(r(422), { cause: i })), Hi(Le(t, n))))
          : (i !== ro && ((e = Error(r(423), { cause: i })), Hi(Le(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Le(i, n)),
            (s = Go(t.stateNode, i, s)),
            xo(t, s),
            qt !== 4 && (qt = 2)),
        !1
      );
    var u = Error(r(520), { cause: i });
    if (((u = Le(u, n)), il === null ? (il = [u]) : il.push(u), qt !== 4 && (qt = 2), e === null))
      return !0;
    ((i = Le(i, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Go(n.stateNode, i, t)),
            xo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Xn === null || !Xn.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Ah(s)),
              Eh(s, t, n, i),
              xo(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Xo = Error(r(461)),
    Jt = !1;
  function re(t, e, n, i) {
    e.child = t === null ? Dd(e, null, n, i) : xa(e, t.child, n, i);
  }
  function jh(t, e, n, i, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var g in i) g !== "ref" && (f[g] = i[g]);
    } else f = i;
    return (
      pa(e),
      (i = jo(t, e, n, f, u, s)),
      (g = Mo()),
      t !== null && !Jt
        ? (No(t, e, s), xn(t, e, s))
        : (xt && g && lo(e), (e.flags |= 1), re(t, e, i, s), e.child)
    );
  }
  function Mh(t, e, n, i, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !no(u) && u.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = u), Nh(t, e, u, i, s))
        : ((t = Il(n.type, null, i, e, e.mode, s)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((u = t.child), !$o(t, s))) {
      var f = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Bi), n(f, i) && t.ref === e.ref))
        return xn(t, e, s);
    }
    return ((e.flags |= 1), (t = hn(u, i)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function Nh(t, e, n, i, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Bi(u, i) && t.ref === e.ref)
        if (((Jt = !1), (e.pendingProps = i = u), $o(t, s))) (t.flags & 131072) !== 0 && (Jt = !0);
        else return ((e.lanes = t.lanes), xn(t, e, s));
    }
    return Zo(t, e, n, i, s);
  }
  function Dh(t, e, n, i) {
    var s = i.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | n : n), t !== null)) {
          for (i = e.child = t.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          i = s & ~u;
        } else ((i = 0), (e.child = null));
        return wh(t, e, u, n, i);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && as(e, u !== null ? u.cachePool : null),
          u !== null ? zd(e, u) : So(),
          Od(e));
      else return ((i = e.lanes = 536870912), wh(t, e, u !== null ? u.baseLanes | n : n, n, i));
    } else
      u !== null
        ? (as(e, u.cachePool), zd(e, u), qn(), (e.memoizedState = null))
        : (t !== null && as(e, null), So(), qn());
    return (re(t, e, s, n), e.child);
  }
  function Wi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function wh(t, e, n, i, s) {
    var u = po();
    return (
      (u = u === null ? null : { parent: Kt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: n, cachePool: u }),
      t !== null && as(e, null),
      So(),
      Od(e),
      t !== null && Qa(t, e, i, !0),
      (e.childLanes = s),
      null
    );
  }
  function xs(t, e) {
    return (
      (e = Ss({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Ch(t, e, n) {
    return (
      xa(e, t.child, null, n),
      (t = xs(e, e.pendingProps)),
      (t.flags |= 2),
      we(e),
      (e.memoizedState = null),
      t
    );
  }
  function Pv(t, e, n) {
    var i = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (xt) {
        if (i.mode === "hidden") return ((t = xs(e, i)), (e.lanes = 536870912), Wi(null, t));
        if (
          (Ao(e),
          (t = Ot)
            ? ((t = km(t, Ye)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: On !== null ? { id: en, overflow: nn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = hd(t)),
                (n.return = e),
                (e.child = n),
                (le = e),
                (Ot = null)))
            : (t = null),
          t === null)
        )
          throw _n(e);
        return ((e.lanes = 536870912), null);
      }
      return xs(e, i);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if ((Ao(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = Ch(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(r(558));
      else if ((Jt || Qa(t, e, n, !1), (s = (n & t.childLanes) !== 0), Jt || s)) {
        if (((i = Ct), i !== null && ((f = bf(i, n)), f !== 0 && f !== u.retryLane)))
          throw ((u.retryLane = f), fa(t, f), Se(i, t, f), Xo);
        (Cs(), (e = Ch(t, e, n)));
      } else
        ((t = u.treeContext),
          (Ot = Ge(f.nextSibling)),
          (le = e),
          (xt = !0),
          (Rn = null),
          (Ye = !1),
          t !== null && yd(e, t),
          (e = xs(e, i)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = hn(t.child, { mode: i.mode, children: i.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function bs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Zo(t, e, n, i, s) {
    return (
      pa(e),
      (n = jo(t, e, n, i, void 0, s)),
      (i = Mo()),
      t !== null && !Jt
        ? (No(t, e, s), xn(t, e, s))
        : (xt && i && lo(e), (e.flags |= 1), re(t, e, n, s), e.child)
    );
  }
  function zh(t, e, n, i, s, u) {
    return (
      pa(e),
      (e.updateQueue = null),
      (n = _d(e, i, n, s)),
      Rd(t),
      (i = Mo()),
      t !== null && !Jt
        ? (No(t, e, u), xn(t, e, u))
        : (xt && i && lo(e), (e.flags |= 1), re(t, e, n, u), e.child)
    );
  }
  function Oh(t, e, n, i, s) {
    if ((pa(e), e.stateNode === null)) {
      var u = Ga,
        f = n.contextType;
      (typeof f == "object" && f !== null && (u = se(f)),
        (u = new n(i, u)),
        (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = ko),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = i),
        (u.state = e.memoizedState),
        (u.refs = {}),
        go(e),
        (f = n.contextType),
        (u.context = typeof f == "object" && f !== null ? se(f) : Ga),
        (u.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Yo(e, n, f, i), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((f = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
          f !== u.state && ko.enqueueReplaceState(u, u.state, null),
          Ki(e, i, u, s),
          Zi(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      u = e.stateNode;
      var g = e.memoizedProps,
        T = Sa(n, g);
      u.props = T;
      var D = u.context,
        _ = n.contextType;
      ((f = Ga), typeof _ == "object" && _ !== null && (f = se(_)));
      var L = n.getDerivedStateFromProps;
      ((_ = typeof L == "function" || typeof u.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        _ ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((g || D !== f) && vh(e, u, i, f)),
        (Bn = !1));
      var w = e.memoizedState;
      ((u.state = w),
        Ki(e, i, u, s),
        Zi(),
        (D = e.memoizedState),
        g || w !== D || Bn
          ? (typeof L == "function" && (Yo(e, n, L, i), (D = e.memoizedState)),
            (T = Bn || gh(e, n, T, i, w, D, f))
              ? (_ ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = D)),
            (u.props = i),
            (u.state = D),
            (u.context = f),
            (i = T))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), (i = !1)));
    } else {
      ((u = e.stateNode),
        vo(t, e),
        (f = e.memoizedProps),
        (_ = Sa(n, f)),
        (u.props = _),
        (L = e.pendingProps),
        (w = u.context),
        (D = n.contextType),
        (T = Ga),
        typeof D == "object" && D !== null && (T = se(D)),
        (g = n.getDerivedStateFromProps),
        (D = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f !== L || w !== T) && vh(e, u, i, T)),
        (Bn = !1),
        (w = e.memoizedState),
        (u.state = w),
        Ki(e, i, u, s),
        Zi());
      var z = e.memoizedState;
      f !== L || w !== z || Bn || (t !== null && t.dependencies !== null && es(t.dependencies))
        ? (typeof g == "function" && (Yo(e, n, g, i), (z = e.memoizedState)),
          (_ =
            Bn ||
            gh(e, n, _, i, w, z, T) ||
            (t !== null && t.dependencies !== null && es(t.dependencies)))
            ? (D ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, z, T),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, z, T)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (f === t.memoizedProps && w === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && w === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = z)),
          (u.props = i),
          (u.state = z),
          (u.context = T),
          (i = _))
        : (typeof u.componentDidUpdate != "function" ||
            (f === t.memoizedProps && w === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && w === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      bs(t, e),
      (i = (e.flags & 128) !== 0),
      u || i
        ? ((u = e.stateNode),
          (n = i && typeof n.getDerivedStateFromError != "function" ? null : u.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = xa(e, t.child, null, s)), (e.child = xa(e, null, n, s)))
            : re(t, e, n, s),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = xn(t, e, s)),
      t
    );
  }
  function Rh(t, e, n, i) {
    return (ha(), (e.flags |= 256), re(t, e, n, i), e.child);
  }
  var Ko = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Qo(t) {
    return { baseLanes: t, cachePool: Td() };
  }
  function Jo(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= ze), t);
  }
  function _h(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      f;
    if (
      ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (xt) {
        if (
          (s ? Hn(e) : qn(),
          (t = Ot)
            ? ((t = km(t, Ye)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: On !== null ? { id: en, overflow: nn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = hd(t)),
                (n.return = e),
                (e.child = n),
                (le = e),
                (Ot = null)))
            : (t = null),
          t === null)
        )
          throw _n(e);
        return (Cu(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var g = i.children;
      return (
        (i = i.fallback),
        s
          ? (qn(),
            (s = e.mode),
            (g = Ss({ mode: "hidden", children: g }, s)),
            (i = da(i, s, n, null)),
            (g.return = e),
            (i.return = e),
            (g.sibling = i),
            (e.child = g),
            (i = e.child),
            (i.memoizedState = Qo(n)),
            (i.childLanes = Jo(t, f, n)),
            (e.memoizedState = Ko),
            Wi(null, i))
          : (Hn(e), Fo(e, g))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((g = T.dehydrated), g !== null)) {
      if (u)
        e.flags & 256
          ? (Hn(e), (e.flags &= -257), (e = Po(t, e, n)))
          : e.memoizedState !== null
            ? (qn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (qn(),
              (g = i.fallback),
              (s = e.mode),
              (i = Ss({ mode: "visible", children: i.children }, s)),
              (g = da(g, s, n, null)),
              (g.flags |= 2),
              (i.return = e),
              (g.return = e),
              (i.sibling = g),
              (e.child = i),
              xa(e, t.child, null, n),
              (i = e.child),
              (i.memoizedState = Qo(n)),
              (i.childLanes = Jo(t, f, n)),
              (e.memoizedState = Ko),
              (e = Wi(null, i)));
      else if ((Hn(e), Cu(g))) {
        if (((f = g.nextSibling && g.nextSibling.dataset), f)) var D = f.dgst;
        ((f = D),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = f),
          Hi({ value: i, source: null, stack: null }),
          (e = Po(t, e, n)));
      } else if ((Jt || Qa(t, e, n, !1), (f = (n & t.childLanes) !== 0), Jt || f)) {
        if (((f = Ct), f !== null && ((i = bf(f, n)), i !== 0 && i !== T.retryLane)))
          throw ((T.retryLane = i), fa(t, i), Se(f, t, i), Xo);
        (wu(g) || Cs(), (e = Po(t, e, n)));
      } else
        wu(g)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (Ot = Ge(g.nextSibling)),
            (le = e),
            (xt = !0),
            (Rn = null),
            (Ye = !1),
            t !== null && yd(e, t),
            (e = Fo(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (qn(),
        (g = i.fallback),
        (s = e.mode),
        (T = t.child),
        (D = T.sibling),
        (i = hn(T, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = T.subtreeFlags & 65011712),
        D !== null ? (g = hn(D, g)) : ((g = da(g, s, n, null)), (g.flags |= 2)),
        (g.return = e),
        (i.return = e),
        (i.sibling = g),
        (e.child = i),
        Wi(null, i),
        (i = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = Qo(n))
          : ((s = g.cachePool),
            s !== null
              ? ((T = Kt._currentValue), (s = s.parent !== T ? { parent: T, pool: T } : s))
              : (s = Td()),
            (g = { baseLanes: g.baseLanes | n, cachePool: s })),
        (i.memoizedState = g),
        (i.childLanes = Jo(t, f, n)),
        (e.memoizedState = Ko),
        Wi(t.child, i))
      : (Hn(e),
        (n = t.child),
        (t = n.sibling),
        (n = hn(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions), f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Fo(t, e) {
    return ((e = Ss({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function Ss(t, e) {
    return ((t = Ne(22, t, null, e)), (t.lanes = 0), t);
  }
  function Po(t, e, n) {
    return (
      xa(e, t.child, null, n),
      (t = Fo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Vh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    (i !== null && (i.lanes |= e), co(t.return, e, n));
  }
  function Wo(t, e, n, i, s, u) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
          treeForkCount: u,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = i),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = u));
  }
  function Bh(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      u = i.tail;
    i = i.children;
    var f = Gt.current,
      g = (f & 2) !== 0;
    if (
      (g ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      K(Gt, f),
      re(t, e, i, n),
      (i = xt ? Li : 0),
      !g && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Vh(t, n, e);
        else if (t.tag === 19) Vh(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate), t !== null && us(t) === null && (s = n), (n = n.sibling));
        ((n = s),
          n === null ? ((s = e.child), (e.child = null)) : ((s = n.sibling), (n.sibling = null)),
          Wo(e, !1, s, n, u, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && us(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Wo(e, !0, n, null, u, i);
        break;
      case "together":
        Wo(e, !1, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function xn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (Gn |= e.lanes), (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Qa(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = hn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        ((t = t.sibling), (n = n.sibling = hn(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function $o(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && es(t)));
  }
  function Wv(t, e, n) {
    switch (e.tag) {
      case 3:
        (ae(e, e.stateNode.containerInfo), Vn(e, Kt, t.memoizedState.cache), ha());
        break;
      case 27:
      case 5:
        Z(e);
        break;
      case 4:
        ae(e, e.stateNode.containerInfo);
        break;
      case 10:
        Vn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Ao(e), null);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Hn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? _h(t, e, n)
              : (Hn(e), (t = xn(t, e, n)), t !== null ? t.sibling : null);
        Hn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (Qa(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Bh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          K(Gt, Gt.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Dh(t, e, n, e.pendingProps));
      case 24:
        Vn(e, Kt, t.memoizedState.cache);
    }
    return xn(t, e, n);
  }
  function Uh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Jt = !0;
      else {
        if (!$o(t, n) && (e.flags & 128) === 0) return ((Jt = !1), Wv(t, e, n));
        Jt = (t.flags & 131072) !== 0;
      }
    else ((Jt = !1), xt && (e.flags & 1048576) !== 0 && pd(e, Li, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (((t = ga(e.elementType)), (e.type = t), typeof t == "function"))
            no(t)
              ? ((i = Sa(t, i)), (e.tag = 1), (e = Oh(null, e, t, i, n)))
              : ((e.tag = 0), (e = Zo(null, e, t, i, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === G) {
                ((e.tag = 11), (e = jh(null, e, t, i, n)));
                break t;
              } else if (s === I) {
                ((e.tag = 14), (e = Mh(null, e, t, i, n)));
                break t;
              }
            }
            throw ((e = Bt(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Zo(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((i = e.type), (s = Sa(i, e.pendingProps)), Oh(t, e, i, s, n));
      case 3:
        t: {
          if ((ae(e, e.stateNode.containerInfo), t === null)) throw Error(r(387));
          i = e.pendingProps;
          var u = e.memoizedState;
          ((s = u.element), vo(t, e), Ki(e, i, null, n));
          var f = e.memoizedState;
          if (
            ((i = f.cache),
            Vn(e, Kt, i),
            i !== u.cache && fo(e, [Kt], n, !0),
            Zi(),
            (i = f.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Rh(t, e, i, n);
              break t;
            } else if (i !== s) {
              ((s = Le(Error(r(424)), e)), Hi(s), (e = Rh(t, e, i, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ot = Ge(t.firstChild),
                  le = e,
                  xt = !0,
                  Rn = null,
                  Ye = !0,
                  n = Dd(e, null, i, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((ha(), i === s)) {
              e = xn(t, e, n);
              break t;
            }
            re(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          bs(t, e),
          t === null
            ? (n = Jm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : xt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Us(ht.current).createElement(n)),
                (i[ie] = e),
                (i[pe] = t),
                oe(i, n, t),
                ee(i),
                (e.stateNode = i))
            : (e.memoizedState = Jm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Z(e),
          t === null &&
            xt &&
            ((i = e.stateNode = Zm(e.type, e.pendingProps, ht.current)),
            (le = e),
            (Ye = !0),
            (s = Ot),
            Jn(e.type) ? ((zu = s), (Ot = Ge(i.firstChild))) : (Ot = s)),
          re(t, e, e.pendingProps.children, n),
          bs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            xt &&
            ((s = i = Ot) &&
              ((i = Nx(i, e.type, e.pendingProps, Ye)),
              i !== null
                ? ((e.stateNode = i), (le = e), (Ot = Ge(i.firstChild)), (Ye = !1), (s = !0))
                : (s = !1)),
            s || _n(e)),
          Z(e),
          (s = e.type),
          (u = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = u.children),
          Mu(s, u) ? (i = null) : f !== null && Mu(s, f) && (e.flags |= 32),
          e.memoizedState !== null && ((s = jo(t, e, kv, null, null, n)), (dl._currentValue = s)),
          bs(t, e),
          re(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            xt &&
            ((t = n = Ot) &&
              ((n = Dx(n, e.pendingProps, Ye)),
              n !== null ? ((e.stateNode = n), (le = e), (Ot = null), (t = !0)) : (t = !1)),
            t || _n(e)),
          null
        );
      case 13:
        return _h(t, e, n);
      case 4:
        return (
          ae(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = xa(e, null, i, n)) : re(t, e, i, n),
          e.child
        );
      case 11:
        return jh(t, e, e.type, e.pendingProps, n);
      case 7:
        return (re(t, e, e.pendingProps, n), e.child);
      case 8:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return ((i = e.pendingProps), Vn(e, e.type, i.value), re(t, e, i.children, n), e.child);
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          pa(e),
          (s = se(s)),
          (i = i(s)),
          (e.flags |= 1),
          re(t, e, i, n),
          e.child
        );
      case 14:
        return Mh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Nh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Bh(t, e, n);
      case 31:
        return Pv(t, e, n);
      case 22:
        return Dh(t, e, n, e.pendingProps);
      case 24:
        return (
          pa(e),
          (i = se(Kt)),
          t === null
            ? ((s = po()),
              s === null &&
                ((s = Ct),
                (u = ho()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= n),
                (s = u)),
              (e.memoizedState = { parent: i, cache: s }),
              go(e),
              Vn(e, Kt, s))
            : ((t.lanes & n) !== 0 && (vo(t, e), Ki(e, null, null, n), Zi()),
              (s = t.memoizedState),
              (u = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
                  Vn(e, Kt, i))
                : ((i = u.cache), Vn(e, Kt, i), i !== s.cache && fo(e, [Kt], n, !0))),
          re(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function bn(t) {
    t.flags |= 4;
  }
  function Io(t, e, n, i, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (cm()) t.flags |= 8192;
        else throw ((va = ls), yo);
    } else t.flags &= -16777217;
  }
  function Lh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Im(e)))
      if (cm()) t.flags |= 8192;
      else throw ((va = ls), yo);
  }
  function Ts(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? gf() : 536870912), (t.lanes |= e), (li |= e)));
  }
  function $i(t, e) {
    if (!xt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; ) (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; ) (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Rt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = n), e);
  }
  function $v(t, e, n) {
    var i = e.pendingProps;
    switch ((so(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Rt(e), null);
      case 1:
        return (Rt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          yn(Kt),
          Lt(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ka(e)
              ? bn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), oo())),
          Rt(e),
          null
        );
      case 26:
        var s = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (bn(e), u !== null ? (Rt(e), Lh(e, u)) : (Rt(e), Io(e, s, null, i, n)))
            : u
              ? u !== t.memoizedState
                ? (bn(e), Rt(e), Lh(e, u))
                : (Rt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== i && bn(e), Rt(e), Io(e, s, t, i, n)),
          null
        );
      case 27:
        if ((mt(e), (n = ht.current), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && bn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return (Rt(e), null);
          }
          ((t = W.current), Ka(e) ? gd(e) : ((t = Zm(s, i, n)), (e.stateNode = t), bn(e)));
        }
        return (Rt(e), null);
      case 5:
        if ((mt(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && bn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return (Rt(e), null);
          }
          if (((u = W.current), Ka(e))) gd(e);
          else {
            var f = Us(ht.current);
            switch (u) {
              case 1:
                u = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    ((u = f.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof i.is == "string"
                        ? f.createElement("select", { is: i.is })
                        : f.createElement("select")),
                      i.multiple ? (u.multiple = !0) : i.size && (u.size = i.size));
                    break;
                  default:
                    u =
                      typeof i.is == "string"
                        ? f.createElement(s, { is: i.is })
                        : f.createElement(s);
                }
            }
            ((u[ie] = e), (u[pe] = i));
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            e.stateNode = u;
            t: switch ((oe(u, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && bn(e);
          }
        }
        return (Rt(e), Io(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && bn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = ht.current), Ka(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (i = null), (s = le), s !== null))
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((t[ie] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                _m(t.nodeValue, n)
              )),
              t || _n(e, !0));
          } else ((t = Us(t).createTextNode(i)), (t[ie] = e), (e.stateNode = t));
        }
        return (Rt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = Ka(e)), n !== null)) {
            if (t === null) {
              if (!i) throw Error(r(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(r(557));
              t[ie] = e;
            } else (ha(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Rt(e), (t = !1));
          } else
            ((n = oo()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return (Rt(e), null);
      case 13:
        if (
          ((i = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ka(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                throw Error(r(317));
              s[ie] = e;
            } else (ha(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Rt(e), (s = !1));
          } else
            ((s = oo()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return (
          we(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = i !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((i = e.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (u = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (u = i.memoizedState.cachePool.pool),
                u !== s && (i.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Ts(e, e.updateQueue),
              Rt(e),
              null)
        );
      case 4:
        return (Lt(), t === null && Su(e.stateNode.containerInfo), Rt(e), null);
      case 10:
        return (yn(e.type), Rt(e), null);
      case 19:
        if ((U(Gt), (i = e.memoizedState), i === null)) return (Rt(e), null);
        if (((s = (e.flags & 128) !== 0), (u = i.rendering), u === null))
          if (s) $i(i, !1);
          else {
            if (qt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = us(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      $i(i, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ts(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (dd(n, t), (n = n.sibling));
                  return (K(Gt, (Gt.current & 1) | 2), xt && mn(e, i.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            i.tail !== null &&
              Ae() > Ns &&
              ((e.flags |= 128), (s = !0), $i(i, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = us(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ts(e, t),
                $i(i, !0),
                i.tail === null && i.tailMode === "hidden" && !u.alternate && !xt)
              )
                return (Rt(e), null);
            } else
              2 * Ae() - i.renderingStartTime > Ns &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), $i(i, !1), (e.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = i.last), t !== null ? (t.sibling = u) : (e.child = u), (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Ae()),
            (t.sibling = null),
            (n = Gt.current),
            K(Gt, s ? (n & 1) | 2 : n & 1),
            xt && mn(e, i.treeForkCount),
            t)
          : (Rt(e), null);
      case 22:
      case 23:
        return (
          we(e),
          To(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Rt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Rt(e),
          (n = e.updateQueue),
          n !== null && Ts(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && U(ya),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          yn(Kt),
          Rt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Iv(t, e) {
    switch ((so(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          yn(Kt),
          Lt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (mt(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((we(e), e.alternate === null)) throw Error(r(340));
          ha();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((we(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(r(340));
          ha();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (U(Gt), null);
      case 4:
        return (Lt(), null);
      case 10:
        return (yn(e.type), null);
      case 22:
      case 23:
        return (
          we(e),
          To(),
          t !== null && U(ya),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (yn(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hh(t, e) {
    switch ((so(e), e.tag)) {
      case 3:
        (yn(Kt), Lt());
        break;
      case 26:
      case 27:
      case 5:
        mt(e);
        break;
      case 4:
        Lt();
        break;
      case 31:
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        U(Gt);
        break;
      case 10:
        yn(e.type);
        break;
      case 22:
      case 23:
        (we(e), To(), t !== null && U(ya));
        break;
      case 24:
        yn(Kt);
    }
  }
  function Ii(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var u = n.create,
              f = n.inst;
            ((i = u()), (f.destroy = i));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      Mt(e, e.return, g);
    }
  }
  function Yn(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              g = f.destroy;
            if (g !== void 0) {
              ((f.destroy = void 0), (s = e));
              var T = n,
                D = g;
              try {
                D();
              } catch (_) {
                Mt(s, T, _);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (_) {
      Mt(e, e.return, _);
    }
  }
  function qh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Cd(e, n);
      } catch (i) {
        Mt(t, t.return, i);
      }
    }
  }
  function Yh(t, e, n) {
    ((n.props = Sa(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      Mt(t, e, i);
    }
  }
  function tl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Mt(t, e, s);
    }
  }
  function an(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Mt(t, e, s);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Mt(t, e, s);
        }
      else n.current = null;
  }
  function kh(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function tu(t, e, n) {
    try {
      var i = t.stateNode;
      (Sx(i, t.type, n, e), (i[pe] = e));
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function Gh(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && Jn(t.type)) || t.tag === 4
    );
  }
  function eu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Gh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && Jn(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function nu(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = fn)));
    else if (
      i !== 4 &&
      (i === 27 && Jn(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (nu(t, e, n), t = t.sibling; t !== null; ) (nu(t, e, n), (t = t.sibling));
  }
  function As(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (i !== 4 && (i === 27 && Jn(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (As(t, e, n), t = t.sibling; t !== null; ) (As(t, e, n), (t = t.sibling));
  }
  function Xh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; ) e.removeAttributeNode(s[0]);
      (oe(e, i, n), (e[ie] = t), (e[pe] = n));
    } catch (u) {
      Mt(t, t.return, u);
    }
  }
  var Sn = !1,
    Ft = !1,
    au = !1,
    Zh = typeof WeakSet == "function" ? WeakSet : Set,
    ne = null;
  function tx(t, e) {
    if (((t = t.containerInfo), (Eu = Xs), (t = ad(t)), Fr(t))) {
      if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              g = -1,
              T = -1,
              D = 0,
              _ = 0,
              L = t,
              w = null;
            e: for (;;) {
              for (
                var z;
                L !== n || (s !== 0 && L.nodeType !== 3) || (g = f + s),
                  L !== u || (i !== 0 && L.nodeType !== 3) || (T = f + i),
                  L.nodeType === 3 && (f += L.nodeValue.length),
                  (z = L.firstChild) !== null;
              )
                ((w = L), (L = z));
              for (;;) {
                if (L === t) break e;
                if (
                  (w === n && ++D === s && (g = f),
                  w === u && ++_ === i && (T = f),
                  (z = L.nextSibling) !== null)
                )
                  break;
                ((L = w), (w = L.parentNode));
              }
              L = z;
            }
            n = g === -1 || T === -1 ? null : { start: g, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ju = { focusedElem: t, selectionRange: n }, Xs = !1, ne = e; ne !== null; )
      if (((e = ne), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
        ((t.return = e), (ne = t));
      else
        for (; ne !== null; ) {
          switch (((e = ne), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null)
              )
                for (n = 0; n < t.length; n++) ((s = t[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (n = e),
                  (s = u.memoizedProps),
                  (u = u.memoizedState),
                  (i = n.stateNode));
                try {
                  var P = Sa(n.type, s);
                  ((t = i.getSnapshotBeforeUpdate(P, u)),
                    (i.__reactInternalSnapshotBeforeUpdate = t));
                } catch (it) {
                  Mt(n, n.return, it);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) Du(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Du(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ne = t));
            break;
          }
          ne = e.return;
        }
  }
  function Kh(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (An(t, n), i & 4 && Ii(5, n));
        break;
      case 1:
        if ((An(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Mt(n, n.return, f);
            }
          else {
            var s = Sa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Mt(n, n.return, f);
            }
          }
        (i & 64 && qh(n), i & 512 && tl(n, n.return));
        break;
      case 3:
        if ((An(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Cd(t, e);
          } catch (f) {
            Mt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Xh(n);
      case 26:
      case 5:
        (An(t, n), e === null && i & 4 && kh(n), i & 512 && tl(n, n.return));
        break;
      case 12:
        An(t, n);
        break;
      case 31:
        (An(t, n), i & 4 && Fh(t, n));
        break;
      case 13:
        (An(t, n),
          i & 4 && Ph(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = ux.bind(null, n)), wx(t, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || Sn), !i)) {
          ((e = (e !== null && e.memoizedState !== null) || Ft), (s = Sn));
          var u = Ft;
          ((Sn = i),
            (Ft = e) && !u ? En(t, n, (n.subtreeFlags & 8772) !== 0) : An(t, n),
            (Sn = s),
            (Ft = u));
        }
        break;
      case 30:
        break;
      default:
        An(t, n);
    }
  }
  function Qh(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Qh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Or(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Vt = null,
    ge = !1;
  function Tn(t, e, n) {
    for (n = n.child; n !== null; ) (Jh(t, e, n), (n = n.sibling));
  }
  function Jh(t, e, n) {
    if (Ee && typeof Ee.onCommitFiberUnmount == "function")
      try {
        Ee.onCommitFiberUnmount(Ei, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ft || an(n, e),
          Tn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ft || an(n, e);
        var i = Vt,
          s = ge;
        (Jn(n.type) && ((Vt = n.stateNode), (ge = !1)),
          Tn(t, e, n),
          ul(n.stateNode),
          (Vt = i),
          (ge = s));
        break;
      case 5:
        Ft || an(n, e);
      case 6:
        if (((i = Vt), (s = ge), (Vt = null), Tn(t, e, n), (Vt = i), (ge = s), Vt !== null))
          if (ge)
            try {
              (Vt.nodeType === 9
                ? Vt.body
                : Vt.nodeName === "HTML"
                  ? Vt.ownerDocument.body
                  : Vt
              ).removeChild(n.stateNode);
            } catch (u) {
              Mt(n, e, u);
            }
          else
            try {
              Vt.removeChild(n.stateNode);
            } catch (u) {
              Mt(n, e, u);
            }
        break;
      case 18:
        Vt !== null &&
          (ge
            ? ((t = Vt),
              qm(
                t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
                n.stateNode,
              ),
              hi(t))
            : qm(Vt, n.stateNode));
        break;
      case 4:
        ((i = Vt),
          (s = ge),
          (Vt = n.stateNode.containerInfo),
          (ge = !0),
          Tn(t, e, n),
          (Vt = i),
          (ge = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Yn(2, n, e), Ft || Yn(4, n, e), Tn(t, e, n));
        break;
      case 1:
        (Ft ||
          (an(n, e), (i = n.stateNode), typeof i.componentWillUnmount == "function" && Yh(n, e, i)),
          Tn(t, e, n));
        break;
      case 21:
        Tn(t, e, n);
        break;
      case 22:
        ((Ft = (i = Ft) || n.memoizedState !== null), Tn(t, e, n), (Ft = i));
        break;
      default:
        Tn(t, e, n);
    }
  }
  function Fh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        hi(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
    }
  }
  function Ph(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        hi(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function ex(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Zh()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Zh()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Es(t, e) {
    var n = ex(t);
    e.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var s = cx.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function ve(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          u = t,
          f = e,
          g = f;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Jn(g.type)) {
                ((Vt = g.stateNode), (ge = !1));
                break t;
              }
              break;
            case 5:
              ((Vt = g.stateNode), (ge = !1));
              break t;
            case 3:
            case 4:
              ((Vt = g.stateNode.containerInfo), (ge = !0));
              break t;
          }
          g = g.return;
        }
        if (Vt === null) throw Error(r(160));
        (Jh(u, f, s),
          (Vt = null),
          (ge = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (Wh(e, t), (e = e.sibling));
  }
  var Fe = null;
  function Wh(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ve(e, t), xe(t), i & 4 && (Yn(3, t, t.return), Ii(3, t), Yn(5, t, t.return)));
        break;
      case 1:
        (ve(e, t),
          xe(t),
          i & 512 && (Ft || n === null || an(n, n.return)),
          i & 64 &&
            Sn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i))))));
        break;
      case 26:
        var s = Fe;
        if ((ve(e, t), xe(t), i & 512 && (Ft || n === null || an(n, n.return)), i & 4)) {
          var u = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  ((i = t.type), (n = t.memoizedProps), (s = s.ownerDocument || s));
                  e: switch (i) {
                    case "title":
                      ((u = s.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ni] ||
                          u[ie] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = s.createElement(i)),
                          s.head.insertBefore(u, s.querySelector("head > title"))),
                        oe(u, i, n),
                        (u[ie] = t),
                        ee(u),
                        (i = u));
                      break t;
                    case "link":
                      var f = Wm("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var g = 0; g < f.length; g++)
                          if (
                            ((u = f[g]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === "" ? null : n.href) &&
                              u.getAttribute("rel") === (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") === (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      ((u = s.createElement(i)), oe(u, i, n), s.head.appendChild(u));
                      break;
                    case "meta":
                      if ((f = Wm("meta", "content", s).get(i + (n.content || "")))) {
                        for (g = 0; g < f.length; g++)
                          if (
                            ((u = f[g]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") === (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") === (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      ((u = s.createElement(i)), oe(u, i, n), s.head.appendChild(u));
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  ((u[ie] = t), ee(u), (i = u));
                }
                t.stateNode = i;
              } else $m(s, t.type, t.stateNode);
            else t.stateNode = Pm(s, i, t.memoizedProps);
          else
            u !== i
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                i === null ? $m(s, t.type, t.stateNode) : Pm(s, i, t.memoizedProps))
              : i === null && t.stateNode !== null && tu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ve(e, t),
          xe(t),
          i & 512 && (Ft || n === null || an(n, n.return)),
          n !== null && i & 4 && tu(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((ve(e, t), xe(t), i & 512 && (Ft || n === null || an(n, n.return)), t.flags & 32)) {
          s = t.stateNode;
          try {
            Ba(s, "");
          } catch (P) {
            Mt(t, t.return, P);
          }
        }
        (i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), tu(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (au = !0));
        break;
      case 6:
        if ((ve(e, t), xe(t), i & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((i = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = i;
          } catch (P) {
            Mt(t, t.return, P);
          }
        }
        break;
      case 3:
        if (
          ((qs = null),
          (s = Fe),
          (Fe = Ls(e.containerInfo)),
          ve(e, t),
          (Fe = s),
          xe(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            hi(e.containerInfo);
          } catch (P) {
            Mt(t, t.return, P);
          }
        au && ((au = !1), $h(t));
        break;
      case 4:
        ((i = Fe), (Fe = Ls(t.stateNode.containerInfo)), ve(e, t), xe(t), (Fe = i));
        break;
      case 12:
        (ve(e, t), xe(t));
        break;
      case 31:
        (ve(e, t),
          xe(t),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), Es(t, i))));
        break;
      case 13:
        (ve(e, t),
          xe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Ms = Ae()),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), Es(t, i))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          D = Sn,
          _ = Ft;
        if (((Sn = D || s), (Ft = _ || T), ve(e, t), (Ft = _), (Sn = D), xe(t), i & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || T || Sn || Ft || Ta(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((u = T.stateNode), s))
                    ((f = u.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    g = T.stateNode;
                    var L = T.memoizedProps.style,
                      w = L != null && L.hasOwnProperty("display") ? L.display : null;
                    g.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (P) {
                  Mt(T, T.return, P);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (P) {
                  Mt(T, T.return, P);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var z = T.stateNode;
                  s ? Ym(z, !0) : Ym(T.stateNode, !1);
                } catch (P) {
                  Mt(T, T.return, P);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null && ((n = i.retryQueue), n !== null && ((i.retryQueue = null), Es(t, n))));
        break;
      case 19:
        (ve(e, t),
          xe(t),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), Es(t, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ve(e, t), xe(t));
    }
  }
  function xe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Gh(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              u = eu(t);
            As(t, u, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ba(f, ""), (n.flags &= -33));
            var g = eu(t);
            As(t, g, f);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              D = eu(t);
            nu(t, D, T);
            break;
          default:
            throw Error(r(161));
        }
      } catch (_) {
        Mt(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function $h(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ($h(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function An(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Kh(t, e.alternate, e), (e = e.sibling));
  }
  function Ta(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Yn(4, e, e.return), Ta(e));
          break;
        case 1:
          an(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Yh(e, e.return, n), Ta(e));
          break;
        case 27:
          ul(e.stateNode);
        case 26:
        case 5:
          (an(e, e.return), Ta(e));
          break;
        case 22:
          e.memoizedState === null && Ta(e);
          break;
        case 30:
          Ta(e);
          break;
        default:
          Ta(e);
      }
      t = t.sibling;
    }
  }
  function En(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        u = e,
        f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (En(s, u, n), Ii(4, u));
          break;
        case 1:
          if ((En(s, u, n), (i = u), (s = i.stateNode), typeof s.componentDidMount == "function"))
            try {
              s.componentDidMount();
            } catch (D) {
              Mt(i, i.return, D);
            }
          if (((i = u), (s = i.updateQueue), s !== null)) {
            var g = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++) wd(T[s], g);
            } catch (D) {
              Mt(i, i.return, D);
            }
          }
          (n && f & 64 && qh(u), tl(u, u.return));
          break;
        case 27:
          Xh(u);
        case 26:
        case 5:
          (En(s, u, n), n && i === null && f & 4 && kh(u), tl(u, u.return));
          break;
        case 12:
          En(s, u, n);
          break;
        case 31:
          (En(s, u, n), n && f & 4 && Fh(s, u));
          break;
        case 13:
          (En(s, u, n), n && f & 4 && Ph(s, u));
          break;
        case 22:
          (u.memoizedState === null && En(s, u, n), tl(u, u.return));
          break;
        case 30:
          break;
        default:
          En(s, u, n);
      }
      e = e.sibling;
    }
  }
  function iu(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && qi(n)));
  }
  function lu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && qi(t)));
  }
  function Pe(t, e, n, i) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Ih(t, e, n, i), (e = e.sibling));
  }
  function Ih(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Pe(t, e, n, i), s & 2048 && Ii(9, e));
        break;
      case 1:
        Pe(t, e, n, i);
        break;
      case 3:
        (Pe(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && qi(t))));
        break;
      case 12:
        if (s & 2048) {
          (Pe(t, e, n, i), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              f = u.id,
              g = u.onPostCommit;
            typeof g == "function" &&
              g(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (T) {
            Mt(e, e.return, T);
          }
        } else Pe(t, e, n, i);
        break;
      case 31:
        Pe(t, e, n, i);
        break;
      case 13:
        Pe(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Pe(t, e, n, i)
              : el(t, e)
            : u._visibility & 2
              ? Pe(t, e, n, i)
              : ((u._visibility |= 2), ni(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && iu(f, e));
        break;
      case 24:
        (Pe(t, e, n, i), s & 2048 && lu(e.alternate, e));
        break;
      default:
        Pe(t, e, n, i);
    }
  }
  function ni(t, e, n, i, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t,
        f = e,
        g = n,
        T = i,
        D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (ni(u, f, g, T, s), Ii(8, f));
          break;
        case 23:
          break;
        case 22:
          var _ = f.stateNode;
          (f.memoizedState !== null
            ? _._visibility & 2
              ? ni(u, f, g, T, s)
              : el(u, f)
            : ((_._visibility |= 2), ni(u, f, g, T, s)),
            s && D & 2048 && iu(f.alternate, f));
          break;
        case 24:
          (ni(u, f, g, T, s), s && D & 2048 && lu(f.alternate, f));
          break;
        default:
          ni(u, f, g, T, s);
      }
      e = e.sibling;
    }
  }
  function el(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            (el(n, i), s & 2048 && iu(i.alternate, i));
            break;
          case 24:
            (el(n, i), s & 2048 && lu(i.alternate, i));
            break;
          default:
            el(n, i);
        }
        e = e.sibling;
      }
  }
  var nl = 8192;
  function ai(t, e, n) {
    if (t.subtreeFlags & nl) for (t = t.child; t !== null; ) (tm(t, e, n), (t = t.sibling));
  }
  function tm(t, e, n) {
    switch (t.tag) {
      case 26:
        (ai(t, e, n),
          t.flags & nl && t.memoizedState !== null && Yx(n, Fe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ai(t, e, n);
        break;
      case 3:
      case 4:
        var i = Fe;
        ((Fe = Ls(t.stateNode.containerInfo)), ai(t, e, n), (Fe = i));
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = nl), (nl = 16777216), ai(t, e, n), (nl = i))
            : ai(t, e, n));
        break;
      default:
        ai(t, e, n);
    }
  }
  function em(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function al(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((ne = i), am(i, t));
        }
      em(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (nm(t), (t = t.sibling));
  }
  function nm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (al(t), t.flags & 2048 && Yn(9, t, t.return));
        break;
      case 3:
        al(t);
        break;
      case 12:
        al(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), js(t))
          : al(t);
        break;
      default:
        al(t);
    }
  }
  function js(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ((ne = i), am(i, t));
        }
      em(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Yn(8, e, e.return), js(e));
          break;
        case 22:
          ((n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), js(e)));
          break;
        default:
          js(e);
      }
      t = t.sibling;
    }
  }
  function am(t, e) {
    for (; ne !== null; ) {
      var n = ne;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          qi(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (ne = i));
      else
        t: for (n = t; ne !== null; ) {
          i = ne;
          var s = i.sibling,
            u = i.return;
          if ((Qh(i), i === n)) {
            ne = null;
            break t;
          }
          if (s !== null) {
            ((s.return = u), (ne = s));
            break t;
          }
          ne = u;
        }
    }
  }
  var nx = {
      getCacheForType: function (t) {
        var e = se(Kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return se(Kt).controller.signal;
      },
    },
    ax = typeof WeakMap == "function" ? WeakMap : Map,
    Et = 0,
    Ct = null,
    pt = null,
    gt = 0,
    jt = 0,
    Ce = null,
    kn = !1,
    ii = !1,
    su = !1,
    jn = 0,
    qt = 0,
    Gn = 0,
    Aa = 0,
    ru = 0,
    ze = 0,
    li = 0,
    il = null,
    be = null,
    ou = !1,
    Ms = 0,
    im = 0,
    Ns = 1 / 0,
    Ds = null,
    Xn = null,
    Wt = 0,
    Zn = null,
    si = null,
    Mn = 0,
    uu = 0,
    cu = null,
    lm = null,
    ll = 0,
    fu = null;
  function Oe() {
    return (Et & 2) !== 0 && gt !== 0 ? gt & -gt : R.T !== null ? gu() : Sf();
  }
  function sm() {
    if (ze === 0)
      if ((gt & 536870912) === 0 || xt) {
        var t = Bl;
        ((Bl <<= 1), (Bl & 3932160) === 0 && (Bl = 262144), (ze = t));
      } else ze = 536870912;
    return ((t = De.current), t !== null && (t.flags |= 32), ze);
  }
  function Se(t, e, n) {
    (((t === Ct && (jt === 2 || jt === 9)) || t.cancelPendingCommit !== null) &&
      (ri(t, 0), Kn(t, gt, ze, !1)),
      Mi(t, n),
      ((Et & 2) === 0 || t !== Ct) &&
        (t === Ct && ((Et & 2) === 0 && (Aa |= n), qt === 4 && Kn(t, gt, ze, !1)), ln(t)));
  }
  function rm(t, e, n) {
    if ((Et & 6) !== 0) throw Error(r(327));
    var i = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || ji(t, e),
      s = i ? sx(t, e) : hu(t, e, !0),
      u = i;
    do {
      if (s === 0) {
        ii && !i && Kn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), u && !ix(n))) {
          ((s = hu(t, e, !1)), (u = !1));
          continue;
        }
        if (s === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var f = 0;
          else
            ((f = t.pendingLanes & -536870913), (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            e = f;
            t: {
              var g = t;
              s = il;
              var T = g.current.memoizedState.isDehydrated;
              if ((T && (ri(g, f).flags |= 256), (f = hu(g, f, !1)), f !== 2)) {
                if (su && !T) {
                  ((g.errorRecoveryDisabledLanes |= u), (Aa |= u), (s = 4));
                  break t;
                }
                ((u = be), (be = s), u !== null && (be === null ? (be = u) : be.push.apply(be, u)));
              }
              s = f;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (ri(t, 0), Kn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((i = t), (u = s), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Kn(i, e, ze, !kn);
              break t;
            case 2:
              be = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((s = Ms + 300 - Ae()), 10 < s)) {
            if ((Kn(i, e, ze, !kn), Ll(i, 0, !0) !== 0)) break t;
            ((Mn = e),
              (i.timeoutHandle = Lm(
                om.bind(null, i, n, be, Ds, ou, e, ze, Aa, li, kn, u, "Throttled", -0, 0),
                s,
              )));
            break t;
          }
          om(i, n, be, Ds, ou, e, ze, Aa, li, kn, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ln(t);
  }
  function om(t, e, n, i, s, u, f, g, T, D, _, L, w, z) {
    if (((t.timeoutHandle = -1), (L = e.subtreeFlags), L & 8192 || (L & 16785408) === 16785408)) {
      ((L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fn,
      }),
        tm(e, u, L));
      var P = (u & 62914560) === u ? Ms - Ae() : (u & 4194048) === u ? im - Ae() : 0;
      if (((P = kx(L, P)), P !== null)) {
        ((Mn = u),
          (t.cancelPendingCommit = P(ym.bind(null, t, e, u, n, i, s, f, g, T, _, L, null, w, z))),
          Kn(t, u, f, !D));
        return;
      }
    }
    ym(t, e, u, n, i, s, f, g, T);
  }
  function ix(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!Me(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Kn(t, e, n, i) {
    ((e &= ~ru),
      (e &= ~Aa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var u = 31 - je(s),
        f = 1 << u;
      ((i[u] = -1), (s &= ~f));
    }
    n !== 0 && vf(t, n, e);
  }
  function ws() {
    return (Et & 6) === 0 ? (sl(0), !1) : !0;
  }
  function du() {
    if (pt !== null) {
      if (jt === 0) var t = pt.return;
      else ((t = pt), (pn = ma = null), Do(t), (Wa = null), (ki = 0), (t = pt));
      for (; t !== null; ) (Hh(t.alternate, t), (t = t.return));
      pt = null;
    }
  }
  function ri(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Ex(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Mn = 0),
      du(),
      (Ct = t),
      (pt = n = hn(t.current, null)),
      (gt = e),
      (jt = 0),
      (Ce = null),
      (kn = !1),
      (ii = ji(t, e)),
      (su = !1),
      (li = ze = ru = Aa = Gn = qt = 0),
      (be = il = null),
      (ou = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - je(i),
          u = 1 << s;
        ((e |= t[s]), (i &= ~u));
      }
    return ((jn = e), Pl(), n);
  }
  function um(t, e) {
    ((ut = null),
      (R.H = Pi),
      e === Pa || e === is
        ? ((e = jd()), (jt = 3))
        : e === yo
          ? ((e = jd()), (jt = 4))
          : (jt =
              e === Xo
                ? 8
                : e !== null && typeof e == "object" && typeof e.then == "function"
                  ? 6
                  : 1),
      (Ce = e),
      pt === null && ((qt = 1), vs(t, Le(e, t.current))));
  }
  function cm() {
    var t = De.current;
    return t === null
      ? !0
      : (gt & 4194048) === gt
        ? ke === null
        : (gt & 62914560) === gt || (gt & 536870912) !== 0
          ? t === ke
          : !1;
  }
  function fm() {
    var t = R.H;
    return ((R.H = Pi), t === null ? Pi : t);
  }
  function dm() {
    var t = R.A;
    return ((R.A = nx), t);
  }
  function Cs() {
    ((qt = 4),
      kn || ((gt & 4194048) !== gt && De.current !== null) || (ii = !0),
      ((Gn & 134217727) === 0 && (Aa & 134217727) === 0) || Ct === null || Kn(Ct, gt, ze, !1));
  }
  function hu(t, e, n) {
    var i = Et;
    Et |= 2;
    var s = fm(),
      u = dm();
    ((Ct !== t || gt !== e) && ((Ds = null), ri(t, e)), (e = !1));
    var f = qt;
    t: do
      try {
        if (jt !== 0 && pt !== null) {
          var g = pt,
            T = Ce;
          switch (jt) {
            case 8:
              (du(), (f = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              De.current === null && (e = !0);
              var D = jt;
              if (((jt = 0), (Ce = null), oi(t, g, T, D), n && ii)) {
                f = 0;
                break t;
              }
              break;
            default:
              ((D = jt), (jt = 0), (Ce = null), oi(t, g, T, D));
          }
        }
        (lx(), (f = qt));
        break;
      } catch (_) {
        um(t, _);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (pn = ma = null),
      (Et = i),
      (R.H = s),
      (R.A = u),
      pt === null && ((Ct = null), (gt = 0), Pl()),
      f
    );
  }
  function lx() {
    for (; pt !== null; ) hm(pt);
  }
  function sx(t, e) {
    var n = Et;
    Et |= 2;
    var i = fm(),
      s = dm();
    Ct !== t || gt !== e ? ((Ds = null), (Ns = Ae() + 500), ri(t, e)) : (ii = ji(t, e));
    t: do
      try {
        if (jt !== 0 && pt !== null) {
          e = pt;
          var u = Ce;
          e: switch (jt) {
            case 1:
              ((jt = 0), (Ce = null), oi(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (Ad(u)) {
                ((jt = 0), (Ce = null), mm(e));
                break;
              }
              ((e = function () {
                ((jt !== 2 && jt !== 9) || Ct !== t || (jt = 7), ln(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              jt = 7;
              break t;
            case 4:
              jt = 5;
              break t;
            case 7:
              Ad(u) ? ((jt = 0), (Ce = null), mm(e)) : ((jt = 0), (Ce = null), oi(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (pt.tag) {
                case 26:
                  f = pt.memoizedState;
                case 5:
                case 27:
                  var g = pt;
                  if (f ? Im(f) : g.stateNode.complete) {
                    ((jt = 0), (Ce = null));
                    var T = g.sibling;
                    if (T !== null) pt = T;
                    else {
                      var D = g.return;
                      D !== null ? ((pt = D), zs(D)) : (pt = null);
                    }
                    break e;
                  }
              }
              ((jt = 0), (Ce = null), oi(t, e, u, 5));
              break;
            case 6:
              ((jt = 0), (Ce = null), oi(t, e, u, 6));
              break;
            case 8:
              (du(), (qt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        rx();
        break;
      } catch (_) {
        um(t, _);
      }
    while (!0);
    return (
      (pn = ma = null),
      (R.H = i),
      (R.A = s),
      (Et = n),
      pt !== null ? 0 : ((Ct = null), (gt = 0), Pl(), qt)
    );
  }
  function rx() {
    for (; pt !== null && !C0(); ) hm(pt);
  }
  function hm(t) {
    var e = Uh(t.alternate, t, jn);
    ((t.memoizedProps = t.pendingProps), e === null ? zs(t) : (pt = e));
  }
  function mm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = zh(n, e, e.pendingProps, e.type, void 0, gt);
        break;
      case 11:
        e = zh(n, e, e.pendingProps, e.type.render, e.ref, gt);
        break;
      case 5:
        Do(e);
      default:
        (Hh(n, e), (e = pt = dd(e, jn)), (e = Uh(n, e, jn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? zs(t) : (pt = e));
  }
  function oi(t, e, n, i) {
    ((pn = ma = null), Do(e), (Wa = null), (ki = 0));
    var s = e.return;
    try {
      if (Fv(t, s, e, n, gt)) {
        ((qt = 1), vs(t, Le(n, t.current)), (pt = null));
        return;
      }
    } catch (u) {
      if (s !== null) throw ((pt = s), u);
      ((qt = 1), vs(t, Le(n, t.current)), (pt = null));
      return;
    }
    e.flags & 32768
      ? (xt || i === 1
          ? (t = !0)
          : ii || (gt & 536870912) !== 0
            ? (t = !1)
            : ((kn = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = De.current), i !== null && i.tag === 13 && (i.flags |= 16384))),
        pm(e, t))
      : zs(e);
  }
  function zs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        pm(e, kn);
        return;
      }
      t = e.return;
      var n = $v(e.alternate, e, jn);
      if (n !== null) {
        pt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        pt = e;
        return;
      }
      pt = e = t;
    } while (e !== null);
    qt === 0 && (qt = 5);
  }
  function pm(t, e) {
    do {
      var n = Iv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (pt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        pt = t;
        return;
      }
      pt = t = n;
    } while (t !== null);
    ((qt = 6), (pt = null));
  }
  function ym(t, e, n, i, s, u, f, g, T) {
    t.cancelPendingCommit = null;
    do Os();
    while (Wt !== 0);
    if ((Et & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= to),
        q0(t, n, u, f, g, T),
        t === Ct && ((pt = Ct = null), (gt = 0)),
        (si = e),
        (Zn = t),
        (Mn = n),
        (uu = u),
        (cu = s),
        (lm = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            fx(_l, function () {
              return (Sm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = R.T), (R.T = null), (s = X.p), (X.p = 2), (f = Et), (Et |= 4));
        try {
          tx(t, e, n);
        } finally {
          ((Et = f), (X.p = s), (R.T = i));
        }
      }
      ((Wt = 1), gm(), vm(), xm());
    }
  }
  function gm() {
    if (Wt === 1) {
      Wt = 0;
      var t = Zn,
        e = si,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var i = X.p;
        X.p = 2;
        var s = Et;
        Et |= 4;
        try {
          Wh(e, t);
          var u = ju,
            f = ad(t.containerInfo),
            g = u.focusedElem,
            T = u.selectionRange;
          if (f !== g && g && g.ownerDocument && nd(g.ownerDocument.documentElement, g)) {
            if (T !== null && Fr(g)) {
              var D = T.start,
                _ = T.end;
              if ((_ === void 0 && (_ = D), "selectionStart" in g))
                ((g.selectionStart = D), (g.selectionEnd = Math.min(_, g.value.length)));
              else {
                var L = g.ownerDocument || document,
                  w = (L && L.defaultView) || window;
                if (w.getSelection) {
                  var z = w.getSelection(),
                    P = g.textContent.length,
                    it = Math.min(T.start, P),
                    wt = T.end === void 0 ? it : Math.min(T.end, P);
                  !z.extend && it > wt && ((f = wt), (wt = it), (it = f));
                  var j = ed(g, it),
                    E = ed(g, wt);
                  if (
                    j &&
                    E &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== j.node ||
                      z.anchorOffset !== j.offset ||
                      z.focusNode !== E.node ||
                      z.focusOffset !== E.offset)
                  ) {
                    var N = L.createRange();
                    (N.setStart(j.node, j.offset),
                      z.removeAllRanges(),
                      it > wt
                        ? (z.addRange(N), z.extend(E.node, E.offset))
                        : (N.setEnd(E.node, E.offset), z.addRange(N)));
                  }
                }
              }
            }
            for (L = [], z = g; (z = z.parentNode); )
              z.nodeType === 1 && L.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < L.length; g++) {
              var V = L[g];
              ((V.element.scrollLeft = V.left), (V.element.scrollTop = V.top));
            }
          }
          ((Xs = !!Eu), (ju = Eu = null));
        } finally {
          ((Et = s), (X.p = i), (R.T = n));
        }
      }
      ((t.current = e), (Wt = 2));
    }
  }
  function vm() {
    if (Wt === 2) {
      Wt = 0;
      var t = Zn,
        e = si,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var i = X.p;
        X.p = 2;
        var s = Et;
        Et |= 4;
        try {
          Kh(t, e.alternate, e);
        } finally {
          ((Et = s), (X.p = i), (R.T = n));
        }
      }
      Wt = 3;
    }
  }
  function xm() {
    if (Wt === 4 || Wt === 3) {
      ((Wt = 0), z0());
      var t = Zn,
        e = si,
        n = Mn,
        i = lm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Wt = 5)
        : ((Wt = 0), (si = Zn = null), bm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Xn = null),
        Cr(n),
        (e = e.stateNode),
        Ee && typeof Ee.onCommitFiberRoot == "function")
      )
        try {
          Ee.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((e = R.T), (s = X.p), (X.p = 2), (R.T = null));
        try {
          for (var u = t.onRecoverableError, f = 0; f < i.length; f++) {
            var g = i[f];
            u(g.value, { componentStack: g.stack });
          }
        } finally {
          ((R.T = e), (X.p = s));
        }
      }
      ((Mn & 3) !== 0 && Os(),
        ln(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0 ? (t === fu ? ll++ : ((ll = 0), (fu = t))) : (ll = 0),
        sl(0));
    }
  }
  function bm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), qi(e)));
  }
  function Os() {
    return (gm(), vm(), xm(), Sm());
  }
  function Sm() {
    if (Wt !== 5) return !1;
    var t = Zn,
      e = uu;
    uu = 0;
    var n = Cr(Mn),
      i = R.T,
      s = X.p;
    try {
      ((X.p = 32 > n ? 32 : n), (R.T = null), (n = cu), (cu = null));
      var u = Zn,
        f = Mn;
      if (((Wt = 0), (si = Zn = null), (Mn = 0), (Et & 6) !== 0)) throw Error(r(331));
      var g = Et;
      if (
        ((Et |= 4),
        nm(u.current),
        Ih(u, u.current, f, n),
        (Et = g),
        sl(0, !1),
        Ee && typeof Ee.onPostCommitFiberRoot == "function")
      )
        try {
          Ee.onPostCommitFiberRoot(Ei, u);
        } catch {}
      return !0;
    } finally {
      ((X.p = s), (R.T = i), bm(t, e));
    }
  }
  function Tm(t, e, n) {
    ((e = Le(n, e)),
      (e = Go(t.stateNode, e, 2)),
      (t = Ln(t, e, 2)),
      t !== null && (Mi(t, 2), ln(t)));
  }
  function Mt(t, e, n) {
    if (t.tag === 3) Tm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Tm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" && (Xn === null || !Xn.has(i)))
          ) {
            ((t = Le(n, t)),
              (n = Ah(2)),
              (i = Ln(e, n, 2)),
              i !== null && (Eh(n, i, e, t), Mi(i, 2), ln(i)));
            break;
          }
        }
        e = e.return;
      }
  }
  function mu(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new ax();
      var s = new Set();
      i.set(e, s);
    } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
    s.has(n) || ((su = !0), s.add(n), (t = ox.bind(null, t, e, n)), e.then(t, t));
  }
  function ox(t, e, n) {
    var i = t.pingCache;
    (i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Ct === t &&
        (gt & n) === n &&
        (qt === 4 || (qt === 3 && (gt & 62914560) === gt && 300 > Ae() - Ms)
          ? (Et & 2) === 0 && ri(t, 0)
          : (ru |= n),
        li === gt && (li = 0)),
      ln(t));
  }
  function Am(t, e) {
    (e === 0 && (e = gf()), (t = fa(t, e)), t !== null && (Mi(t, e), ln(t)));
  }
  function ux(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Am(t, n));
  }
  function cx(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (i !== null && i.delete(e), Am(t, n));
  }
  function fx(t, e) {
    return Mr(t, e);
  }
  var Rs = null,
    ui = null,
    pu = !1,
    _s = !1,
    yu = !1,
    Qn = 0;
  function ln(t) {
    (t !== ui && t.next === null && (ui === null ? (Rs = ui = t) : (ui = ui.next = t)),
      (_s = !0),
      pu || ((pu = !0), hx()));
  }
  function sl(t, e) {
    if (!yu && _s) {
      yu = !0;
      do
        for (var n = !1, i = Rs; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = i.suspendedLanes,
                g = i.pingedLanes;
              ((u = (1 << (31 - je(42 | t) + 1)) - 1),
                (u &= s & ~(f & ~g)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Nm(i, u));
          } else
            ((u = gt),
              (u = Ll(
                i,
                i === Ct ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || ji(i, u) || ((n = !0), Nm(i, u)));
          i = i.next;
        }
      while (n);
      yu = !1;
    }
  }
  function dx() {
    Em();
  }
  function Em() {
    _s = pu = !1;
    var t = 0;
    Qn !== 0 && Ax() && (t = Qn);
    for (var e = Ae(), n = null, i = Rs; i !== null; ) {
      var s = i.next,
        u = jm(i, e);
      (u === 0
        ? ((i.next = null), n === null ? (Rs = s) : (n.next = s), s === null && (ui = n))
        : ((n = i), (t !== 0 || (u & 3) !== 0) && (_s = !0)),
        (i = s));
    }
    ((Wt !== 0 && Wt !== 5) || sl(t), Qn !== 0 && (Qn = 0));
  }
  function jm(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var f = 31 - je(u),
        g = 1 << f,
        T = s[f];
      (T === -1
        ? ((g & n) === 0 || (g & i) !== 0) && (s[f] = H0(g, e))
        : T <= e && (t.expiredLanes |= g),
        (u &= ~g));
    }
    if (
      ((e = Ct),
      (n = gt),
      (n = Ll(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (i = t.callbackNode),
      n === 0 || (t === e && (jt === 2 || jt === 9)) || t.cancelPendingCommit !== null)
    )
      return (i !== null && i !== null && Nr(i), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || ji(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && Nr(i), Cr(n))) {
        case 2:
        case 8:
          n = pf;
          break;
        case 32:
          n = _l;
          break;
        case 268435456:
          n = yf;
          break;
        default:
          n = _l;
      }
      return (
        (i = Mm.bind(null, t)),
        (n = Mr(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && Nr(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Mm(t, e) {
    if (Wt !== 0 && Wt !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Os() && t.callbackNode !== n) return null;
    var i = gt;
    return (
      (i = Ll(t, t === Ct ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      i === 0
        ? null
        : (rm(t, i, e),
          jm(t, Ae()),
          t.callbackNode != null && t.callbackNode === n ? Mm.bind(null, t) : null)
    );
  }
  function Nm(t, e) {
    if (Os()) return null;
    rm(t, e, !0);
  }
  function hx() {
    jx(function () {
      (Et & 6) !== 0 ? Mr(mf, dx) : Em();
    });
  }
  function gu() {
    if (Qn === 0) {
      var t = Ja;
      (t === 0 && ((t = Vl), (Vl <<= 1), (Vl & 261888) === 0 && (Vl = 256)), (Qn = t));
    }
    return Qn;
  }
  function Dm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : kl("" + t);
  }
  function wm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function mx(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = Dm((s[pe] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[pe] || null) ? Dm(e.formAction) : f.getAttribute("formAction")),
        e !== null && ((u = e), (f = null)));
      var g = new Kl("action", "action", null, i, s);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Qn !== 0) {
                  var T = f ? wm(s, f) : new FormData(s);
                  Uo(n, { pending: !0, data: T, method: s.method, action: u }, null, T);
                }
              } else
                typeof u == "function" &&
                  (g.preventDefault(),
                  (T = f ? wm(s, f) : new FormData(s)),
                  Uo(n, { pending: !0, data: T, method: s.method, action: u }, u, T));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var vu = 0; vu < Ir.length; vu++) {
    var xu = Ir[vu],
      px = xu.toLowerCase(),
      yx = xu[0].toUpperCase() + xu.slice(1);
    Je(px, "on" + yx);
  }
  (Je(sd, "onAnimationEnd"),
    Je(rd, "onAnimationIteration"),
    Je(od, "onAnimationStart"),
    Je("dblclick", "onDoubleClick"),
    Je("focusin", "onFocus"),
    Je("focusout", "onBlur"),
    Je(Ov, "onTransitionRun"),
    Je(Rv, "onTransitionStart"),
    Je(_v, "onTransitionCancel"),
    Je(ud, "onTransitionEnd"),
    _a("onMouseEnter", ["mouseout", "mouseover"]),
    _a("onMouseLeave", ["mouseout", "mouseover"]),
    _a("onPointerEnter", ["pointerout", "pointerover"]),
    _a("onPointerLeave", ["pointerout", "pointerover"]),
    ra("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ra(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ra("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ra("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ra(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ra(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var rl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    gx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl),
    );
  function Cm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var g = i[f],
              T = g.instance,
              D = g.currentTarget;
            if (((g = g.listener), T !== u && s.isPropagationStopped())) break t;
            ((u = g), (s.currentTarget = D));
            try {
              u(s);
            } catch (_) {
              Fl(_);
            }
            ((s.currentTarget = null), (u = T));
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((g = i[f]),
              (T = g.instance),
              (D = g.currentTarget),
              (g = g.listener),
              T !== u && s.isPropagationStopped())
            )
              break t;
            ((u = g), (s.currentTarget = D));
            try {
              u(s);
            } catch (_) {
              Fl(_);
            }
            ((s.currentTarget = null), (u = T));
          }
      }
    }
  }
  function yt(t, e) {
    var n = e[zr];
    n === void 0 && (n = e[zr] = new Set());
    var i = t + "__bubble";
    n.has(i) || (zm(e, t, 2, !1), n.add(i));
  }
  function bu(t, e, n) {
    var i = 0;
    (e && (i |= 4), zm(n, t, i, e));
  }
  var Vs = "_reactListening" + Math.random().toString(36).slice(2);
  function Su(t) {
    if (!t[Vs]) {
      ((t[Vs] = !0),
        Ef.forEach(function (n) {
          n !== "selectionchange" && (gx.has(n) || bu(n, !1, t), bu(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Vs] || ((e[Vs] = !0), bu("selectionchange", !1, e));
    }
  }
  function zm(t, e, n, i) {
    switch (sp(e)) {
      case 2:
        var s = Zx;
        break;
      case 8:
        s = Kx;
        break;
      default:
        s = Bu;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !qr || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function Tu(t, e, n, i, s) {
    var u = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === s) return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (((f = za(g)), f === null)) return;
            if (((T = f.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              i = u = f;
              continue t;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    Bf(function () {
      var D = u,
        _ = Lr(n),
        L = [];
      t: {
        var w = cd.get(t);
        if (w !== void 0) {
          var z = Kl,
            P = t;
          switch (t) {
            case "keypress":
              if (Xl(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = cv;
              break;
            case "focusin":
              ((P = "focus"), (z = Xr));
              break;
            case "focusout":
              ((P = "blur"), (z = Xr));
              break;
            case "beforeblur":
            case "afterblur":
              z = Xr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Hf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = $0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = hv;
              break;
            case sd:
            case rd:
            case od:
              z = ev;
              break;
            case ud:
              z = pv;
              break;
            case "scroll":
            case "scrollend":
              z = P0;
              break;
            case "wheel":
              z = gv;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = av;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Yf;
              break;
            case "toggle":
            case "beforetoggle":
              z = xv;
          }
          var it = (e & 4) !== 0,
            wt = !it && (t === "scroll" || t === "scrollend"),
            j = it ? (w !== null ? w + "Capture" : null) : w;
          it = [];
          for (var E = D, N; E !== null; ) {
            var V = E;
            if (
              ((N = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                N === null ||
                j === null ||
                ((V = wi(E, j)), V != null && it.push(ol(E, V, N))),
              wt)
            )
              break;
            E = E.return;
          }
          0 < it.length && ((w = new z(w, P, null, n, _)), L.push({ event: w, listeners: it }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((w = t === "mouseover" || t === "pointerover"),
            (z = t === "mouseout" || t === "pointerout"),
            w && n !== Ur && (P = n.relatedTarget || n.fromElement) && (za(P) || P[Ca]))
          )
            break t;
          if (
            (z || w) &&
            ((w =
              _.window === _
                ? _
                : (w = _.ownerDocument)
                  ? w.defaultView || w.parentWindow
                  : window),
            z
              ? ((P = n.relatedTarget || n.toElement),
                (z = D),
                (P = P ? za(P) : null),
                P !== null &&
                  ((wt = h(P)), (it = P.tag), P !== wt || (it !== 5 && it !== 27 && it !== 6)) &&
                  (P = null))
              : ((z = null), (P = D)),
            z !== P)
          ) {
            if (
              ((it = Hf),
              (V = "onMouseLeave"),
              (j = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((it = Yf), (V = "onPointerLeave"), (j = "onPointerEnter"), (E = "pointer")),
              (wt = z == null ? w : Di(z)),
              (N = P == null ? w : Di(P)),
              (w = new it(V, E + "leave", z, n, _)),
              (w.target = wt),
              (w.relatedTarget = N),
              (V = null),
              za(_) === D &&
                ((it = new it(j, E + "enter", P, n, _)),
                (it.target = N),
                (it.relatedTarget = wt),
                (V = it)),
              (wt = V),
              z && P)
            )
              e: {
                for (it = vx, j = z, E = P, N = 0, V = j; V; V = it(V)) N++;
                V = 0;
                for (var nt = E; nt; nt = it(nt)) V++;
                for (; 0 < N - V; ) ((j = it(j)), N--);
                for (; 0 < V - N; ) ((E = it(E)), V--);
                for (; N--; ) {
                  if (j === E || (E !== null && j === E.alternate)) {
                    it = j;
                    break e;
                  }
                  ((j = it(j)), (E = it(E)));
                }
                it = null;
              }
            else it = null;
            (z !== null && Om(L, w, z, it, !1), P !== null && wt !== null && Om(L, wt, P, it, !0));
          }
        }
        t: {
          if (
            ((w = D ? Di(D) : window),
            (z = w.nodeName && w.nodeName.toLowerCase()),
            z === "select" || (z === "input" && w.type === "file"))
          )
            var Tt = Ff;
          else if (Qf(w))
            if (Pf) Tt = wv;
            else {
              Tt = Nv;
              var tt = Mv;
            }
          else
            ((z = w.nodeName),
              !z || z.toLowerCase() !== "input" || (w.type !== "checkbox" && w.type !== "radio")
                ? D && Br(D.elementType) && (Tt = Ff)
                : (Tt = Dv));
          if (Tt && (Tt = Tt(t, D))) {
            Jf(L, Tt, n, _);
            break t;
          }
          (tt && tt(t, w, D),
            t === "focusout" &&
              D &&
              w.type === "number" &&
              D.memoizedProps.value != null &&
              Vr(w, "number", w.value));
        }
        switch (((tt = D ? Di(D) : window), t)) {
          case "focusin":
            (Qf(tt) || tt.contentEditable === "true") && ((qa = tt), (Pr = D), (Ui = null));
            break;
          case "focusout":
            Ui = Pr = qa = null;
            break;
          case "mousedown":
            Wr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Wr = !1), id(L, n, _));
            break;
          case "selectionchange":
            if (zv) break;
          case "keydown":
          case "keyup":
            id(L, n, _);
        }
        var ct;
        if (Kr)
          t: {
            switch (t) {
              case "compositionstart":
                var vt = "onCompositionStart";
                break t;
              case "compositionend":
                vt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                vt = "onCompositionUpdate";
                break t;
            }
            vt = void 0;
          }
        else
          Ha
            ? Zf(t, n) && (vt = "onCompositionEnd")
            : t === "keydown" && n.keyCode === 229 && (vt = "onCompositionStart");
        (vt &&
          (kf &&
            n.locale !== "ko" &&
            (Ha || vt !== "onCompositionStart"
              ? vt === "onCompositionEnd" && Ha && (ct = Uf())
              : ((zn = _), (Yr = "value" in zn ? zn.value : zn.textContent), (Ha = !0))),
          (tt = Bs(D, vt)),
          0 < tt.length &&
            ((vt = new qf(vt, t, null, n, _)),
            L.push({ event: vt, listeners: tt }),
            ct ? (vt.data = ct) : ((ct = Kf(n)), ct !== null && (vt.data = ct)))),
          (ct = Sv ? Tv(t, n) : Av(t, n)) &&
            ((vt = Bs(D, "onBeforeInput")),
            0 < vt.length &&
              ((tt = new qf("onBeforeInput", "beforeinput", null, n, _)),
              L.push({ event: tt, listeners: vt }),
              (tt.data = ct))),
          mx(L, t, D, n, _));
      }
      Cm(L, e);
    });
  }
  function ol(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Bs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = wi(t, n)),
          s != null && i.unshift(ol(t, s, u)),
          (s = wi(t, e)),
          s != null && i.push(ol(t, s, u))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function vx(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Om(t, e, n, i, s) {
    for (var u = e._reactName, f = []; n !== null && n !== i; ) {
      var g = n,
        T = g.alternate,
        D = g.stateNode;
      if (((g = g.tag), T !== null && T === i)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        D === null ||
        ((T = D),
        s
          ? ((D = wi(n, u)), D != null && f.unshift(ol(n, D, T)))
          : s || ((D = wi(n, u)), D != null && f.push(ol(n, D, T)))),
        (n = n.return));
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var xx = /\r\n?/g,
    bx = /\u0000|\uFFFD/g;
  function Rm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        xx,
        `
`,
      )
      .replace(bx, "");
  }
  function _m(t, e) {
    return ((e = Rm(e)), Rm(t) === e);
  }
  function Dt(t, e, n, i, s, u) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Ba(t, i)
          : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Ba(t, "" + i);
        break;
      case "className":
        ql(t, "class", i);
        break;
      case "tabIndex":
        ql(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ql(t, n, i);
        break;
      case "style":
        _f(t, i, u);
        break;
      case "data":
        if (e !== "object") {
          ql(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((i = kl("" + i)), t.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (e !== "input" && Dt(t, e, "name", s.name, s, null),
                Dt(t, e, "formEncType", s.formEncType, s, null),
                Dt(t, e, "formMethod", s.formMethod, s, null),
                Dt(t, e, "formTarget", s.formTarget, s, null))
              : (Dt(t, e, "encType", s.encType, s, null),
                Dt(t, e, "method", s.method, s, null),
                Dt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((i = kl("" + i)), t.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (t.onclick = fn);
        break;
      case "onScroll":
        i != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = kl("" + i)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol"
            ? t.setAttribute(n, i)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        (yt("beforetoggle", t), yt("toggle", t), Hl(t, "popover", i));
        break;
      case "xlinkActuate":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Hl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
          ((n = J0.get(n) || n), Hl(t, n, i));
    }
  }
  function Au(t, e, n, i, s, u) {
    switch (n) {
      case "style":
        _f(t, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Ba(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Ba(t, "" + i);
        break;
      case "onScroll":
        i != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && yt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = fn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!jf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (u = t[pe] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && t.removeEventListener(e, u, s),
              typeof i == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (n in t ? (t[n] = null) : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s));
              break t;
            }
            n in t ? (t[n] = i) : i === !0 ? t.setAttribute(n, "") : Hl(t, n, i);
          }
    }
  }
  function oe(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (yt("error", t), yt("load", t));
        var i = !1,
          s = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Dt(t, e, u, f, n, null);
              }
          }
        (s && Dt(t, e, "srcSet", n.srcSet, n, null), i && Dt(t, e, "src", n.src, n, null));
        return;
      case "input":
        yt("invalid", t);
        var g = (u = f = s = null),
          T = null,
          D = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var _ = n[i];
            if (_ != null)
              switch (i) {
                case "name":
                  s = _;
                  break;
                case "type":
                  f = _;
                  break;
                case "checked":
                  T = _;
                  break;
                case "defaultChecked":
                  D = _;
                  break;
                case "value":
                  u = _;
                  break;
                case "defaultValue":
                  g = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(r(137, e));
                  break;
                default:
                  Dt(t, e, i, _, n, null);
              }
          }
        Cf(t, u, g, T, D, f, s, !1);
        return;
      case "select":
        (yt("invalid", t), (i = f = u = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((g = n[s]), g != null))
            switch (s) {
              case "value":
                u = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                i = g;
              default:
                Dt(t, e, s, g, n, null);
            }
        ((e = u),
          (n = f),
          (t.multiple = !!i),
          e != null ? Va(t, !!i, e, !1) : n != null && Va(t, !!i, n, !0));
        return;
      case "textarea":
        (yt("invalid", t), (u = s = i = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((g = n[f]), g != null))
            switch (f) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                u = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                Dt(t, e, f, g, n, null);
            }
        Of(t, i, s, u);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((i = n[T]), i != null))
            switch (T) {
              case "selected":
                t.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Dt(t, e, T, i, n, null);
            }
        return;
      case "dialog":
        (yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t));
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < rl.length; i++) yt(rl[i], t);
        break;
      case "image":
        (yt("error", t), yt("load", t));
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (yt("error", t), yt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((i = n[D]), i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Dt(t, e, D, i, n, null);
            }
        return;
      default:
        if (Br(e)) {
          for (_ in n)
            n.hasOwnProperty(_) && ((i = n[_]), i !== void 0 && Au(t, e, _, i, n, void 0));
          return;
        }
    }
    for (g in n) n.hasOwnProperty(g) && ((i = n[g]), i != null && Dt(t, e, g, i, n, null));
  }
  function Sx(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          u = null,
          f = null,
          g = null,
          T = null,
          D = null,
          _ = null;
        for (z in n) {
          var L = n[z];
          if (n.hasOwnProperty(z) && L != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = L;
              default:
                i.hasOwnProperty(z) || Dt(t, e, z, null, i, L);
            }
        }
        for (var w in i) {
          var z = i[w];
          if (((L = n[w]), i.hasOwnProperty(w) && (z != null || L != null)))
            switch (w) {
              case "type":
                u = z;
                break;
              case "name":
                s = z;
                break;
              case "checked":
                D = z;
                break;
              case "defaultChecked":
                _ = z;
                break;
              case "value":
                f = z;
                break;
              case "defaultValue":
                g = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, e));
                break;
              default:
                z !== L && Dt(t, e, w, z, i, L);
            }
        }
        _r(t, f, g, T, D, _, u, s);
        return;
      case "select":
        z = f = g = w = null;
        for (u in n)
          if (((T = n[u]), n.hasOwnProperty(u) && T != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = T;
              default:
                i.hasOwnProperty(u) || Dt(t, e, u, null, i, T);
            }
        for (s in i)
          if (((u = i[s]), (T = n[s]), i.hasOwnProperty(s) && (u != null || T != null)))
            switch (s) {
              case "value":
                w = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== T && Dt(t, e, s, u, i, T);
            }
        ((e = g),
          (n = f),
          (i = z),
          w != null
            ? Va(t, !!n, w, !1)
            : !!i != !!n && (e != null ? Va(t, !!n, e, !0) : Va(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        z = w = null;
        for (g in n)
          if (((s = n[g]), n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g)))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, g, null, i, s);
            }
        for (f in i)
          if (((s = i[f]), (u = n[f]), i.hasOwnProperty(f) && (s != null || u != null)))
            switch (f) {
              case "value":
                w = s;
                break;
              case "defaultValue":
                z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Dt(t, e, f, s, i, u);
            }
        zf(t, w, z);
        return;
      case "option":
        for (var P in n)
          if (((w = n[P]), n.hasOwnProperty(P) && w != null && !i.hasOwnProperty(P)))
            switch (P) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Dt(t, e, P, null, i, w);
            }
        for (T in i)
          if (((w = i[T]), (z = n[T]), i.hasOwnProperty(T) && w !== z && (w != null || z != null)))
            switch (T) {
              case "selected":
                t.selected = w && typeof w != "function" && typeof w != "symbol";
                break;
              default:
                Dt(t, e, T, w, i, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var it in n)
          ((w = n[it]),
            n.hasOwnProperty(it) && w != null && !i.hasOwnProperty(it) && Dt(t, e, it, null, i, w));
        for (D in i)
          if (((w = i[D]), (z = n[D]), i.hasOwnProperty(D) && w !== z && (w != null || z != null)))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(r(137, e));
                break;
              default:
                Dt(t, e, D, w, i, z);
            }
        return;
      default:
        if (Br(e)) {
          for (var wt in n)
            ((w = n[wt]),
              n.hasOwnProperty(wt) &&
                w !== void 0 &&
                !i.hasOwnProperty(wt) &&
                Au(t, e, wt, void 0, i, w));
          for (_ in i)
            ((w = i[_]),
              (z = n[_]),
              !i.hasOwnProperty(_) ||
                w === z ||
                (w === void 0 && z === void 0) ||
                Au(t, e, _, w, i, z));
          return;
        }
    }
    for (var j in n)
      ((w = n[j]),
        n.hasOwnProperty(j) && w != null && !i.hasOwnProperty(j) && Dt(t, e, j, null, i, w));
    for (L in i)
      ((w = i[L]),
        (z = n[L]),
        !i.hasOwnProperty(L) || w === z || (w == null && z == null) || Dt(t, e, L, w, i, z));
  }
  function Vm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Tx() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var s = n[i],
          u = s.transferSize,
          f = s.initiatorType,
          g = s.duration;
        if (u && g && Vm(f)) {
          for (f = 0, g = s.responseEnd, i += 1; i < n.length; i++) {
            var T = n[i],
              D = T.startTime;
            if (D > g) break;
            var _ = T.transferSize,
              L = T.initiatorType;
            _ && Vm(L) && ((T = T.responseEnd), (f += _ * (T < g ? 1 : (g - D) / (T - D))));
          }
          if ((--i, (e += (8 * (u + f)) / (s.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Eu = null,
    ju = null;
  function Us(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Bm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Um(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Mu(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Nu = null;
  function Ax() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === Nu ? !1 : ((Nu = t), !0)) : ((Nu = null), !1);
  }
  var Lm = typeof setTimeout == "function" ? setTimeout : void 0,
    Ex = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Hm = typeof Promise == "function" ? Promise : void 0,
    jx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Hm < "u"
          ? function (t) {
              return Hm.resolve(null).then(t).catch(Mx);
            }
          : Lm;
  function Mx(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Jn(t) {
    return t === "head";
  }
  function qm(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            (t.removeChild(s), hi(e));
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") i++;
        else if (n === "html") ul(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), ul(n));
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling,
              g = u.nodeName;
            (u[Ni] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(u),
              (u = f));
          }
        } else n === "body" && ul(t.ownerDocument.body);
      n = s;
    } while (n);
    hi(e);
  }
  function Ym(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display), (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = i;
    } while (n);
  }
  function Du(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Du(n), Or(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Nx(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[Ni])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== s.rel ||
                t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Ge(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Dx(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n) ||
        ((t = Ge(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function km(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e) ||
        ((t = Ge(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function wu(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Cu(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
  }
  function wx(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var i = function () {
        (e(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function Ge(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var zu = null;
  function Gm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ge(t.nextSibling);
          e--;
        } else (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Xm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Zm(t, e, n) {
    switch (((e = Us(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function ul(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Or(t);
  }
  var Xe = new Map(),
    Km = new Set();
  function Ls(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Nn = X.d;
  X.d = { f: Cx, r: zx, D: Ox, C: Rx, L: _x, m: Vx, X: Ux, S: Bx, M: Lx };
  function Cx() {
    var t = Nn.f(),
      e = ws();
    return t || e;
  }
  function zx(t) {
    var e = Oa(t);
    e !== null && e.tag === 5 && e.type === "form" ? uh(e) : Nn.r(t);
  }
  var ci = typeof document > "u" ? null : document;
  function Qm(t, e, n) {
    var i = ci;
    if (i && typeof e == "string" && e) {
      var s = Be(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Km.has(s) ||
          (Km.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")), oe(e, "link", t), ee(e), i.head.appendChild(e))));
    }
  }
  function Ox(t) {
    (Nn.D(t), Qm("dns-prefetch", t, null));
  }
  function Rx(t, e) {
    (Nn.C(t, e), Qm("preconnect", t, e));
  }
  function _x(t, e, n) {
    Nn.L(t, e, n);
    var i = ci;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Be(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Be(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" && (s += '[imagesizes="' + Be(n.imageSizes) + '"]'))
        : (s += '[href="' + Be(t) + '"]');
      var u = s;
      switch (e) {
        case "style":
          u = fi(t);
          break;
        case "script":
          u = di(t);
      }
      Xe.has(u) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Xe.set(u, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(cl(u))) ||
          (e === "script" && i.querySelector(fl(u))) ||
          ((e = i.createElement("link")), oe(e, "link", t), ee(e), i.head.appendChild(e)));
    }
  }
  function Vx(t, e) {
    Nn.m(t, e);
    var n = ci;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s = 'link[rel="modulepreload"][as="' + Be(i) + '"][href="' + Be(t) + '"]',
        u = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = di(t);
      }
      if (
        !Xe.has(u) &&
        ((t = b({ rel: "modulepreload", href: t }, e)), Xe.set(u, t), n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(fl(u))) return;
        }
        ((i = n.createElement("link")), oe(i, "link", t), ee(i), n.head.appendChild(i));
      }
    }
  }
  function Bx(t, e, n) {
    Nn.S(t, e, n);
    var i = ci;
    if (i && t) {
      var s = Ra(i).hoistableStyles,
        u = fi(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var g = { loading: 0, preload: null };
        if ((f = i.querySelector(cl(u)))) g.loading = 5;
        else {
          ((t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Xe.get(u)) && Ou(t, n));
          var T = (f = i.createElement("link"));
          (ee(T),
            oe(T, "link", t),
            (T._p = new Promise(function (D, _) {
              ((T.onload = D), (T.onerror = _));
            })),
            T.addEventListener("load", function () {
              g.loading |= 1;
            }),
            T.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Hs(f, e, i));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: g }), s.set(u, f));
      }
    }
  }
  function Ux(t, e) {
    Nn.X(t, e);
    var n = ci;
    if (n && t) {
      var i = Ra(n).hoistableScripts,
        s = di(t),
        u = i.get(s);
      u ||
        ((u = n.querySelector(fl(s))),
        u ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Xe.get(s)) && Ru(t, e),
          (u = n.createElement("script")),
          ee(u),
          oe(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function Lx(t, e) {
    Nn.M(t, e);
    var n = ci;
    if (n && t) {
      var i = Ra(n).hoistableScripts,
        s = di(t),
        u = i.get(s);
      u ||
        ((u = n.querySelector(fl(s))),
        u ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = Xe.get(s)) && Ru(t, e),
          (u = n.createElement("script")),
          ee(u),
          oe(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function Jm(t, e, n, i) {
    var s = (s = ht.current) ? Ls(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = fi(n.href)),
            (n = Ra(s).hoistableStyles),
            (i = n.get(e)),
            i || ((i = { type: "style", instance: null, count: 0, state: null }), n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = fi(n.href);
          var u = Ra(s).hoistableStyles,
            f = u.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, f),
              (u = s.querySelector(cl(t))) && !u._p && ((f.instance = u), (f.state.loading = 5)),
              Xe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Xe.set(t, n),
                u || Hx(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = di(n)),
              (n = Ra(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function fi(t) {
    return 'href="' + Be(t) + '"';
  }
  function cl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Fm(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Hx(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        oe(e, "link", n),
        ee(e),
        t.head.appendChild(e));
  }
  function di(t) {
    return '[src="' + Be(t) + '"]';
  }
  function fl(t) {
    return "script[async]" + t;
  }
  function Pm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Be(n.href) + '"]');
          if (i) return ((e.instance = i), ee(i), i);
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            ee(i),
            oe(i, "style", s),
            Hs(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = fi(n.href);
          var u = t.querySelector(cl(s));
          if (u) return ((e.state.loading |= 4), (e.instance = u), ee(u), u);
          ((i = Fm(n)),
            (s = Xe.get(s)) && Ou(i, s),
            (u = (t.ownerDocument || t).createElement("link")),
            ee(u));
          var f = u;
          return (
            (f._p = new Promise(function (g, T) {
              ((f.onload = g), (f.onerror = T));
            })),
            oe(u, "link", i),
            (e.state.loading |= 4),
            Hs(u, n.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = di(n.src)),
            (s = t.querySelector(fl(u)))
              ? ((e.instance = s), ee(s), s)
              : ((i = n),
                (s = Xe.get(u)) && ((i = b({}, n)), Ru(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                ee(s),
                oe(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Hs(i, n.precedence, t));
    return e.instance;
  }
  function Hs(t, e, n) {
    for (
      var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        s = i.length ? i[i.length - 1] : null,
        u = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var g = i[f];
      if (g.dataset.precedence === e) u = g;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Ou(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Ru(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var qs = null;
  function Wm(t, e, n) {
    if (qs === null) {
      var i = new Map(),
        s = (qs = new Map());
      s.set(n, i);
    } else ((s = qs), (i = s.get(n)), i || ((i = new Map()), s.set(n, i)));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (
        !(u[Ni] || u[ie] || (t === "link" && u.getAttribute("rel") === "stylesheet")) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var g = i.get(f);
        g ? g.push(u) : i.set(f, [u]);
      }
    }
    return i;
  }
  function $m(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null));
  }
  function qx(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return ((t = e.disabled), typeof e.precedence == "string" && t == null);
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Im(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Yx(t, e, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = fi(i.href),
          u = e.querySelector(cl(s));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Ys.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = u),
            ee(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (i = Fm(i)),
          (s = Xe.get(s)) && Ou(i, s),
          (u = u.createElement("link")),
          ee(u));
        var f = u;
        ((f._p = new Promise(function (g, T) {
          ((f.onload = g), (f.onerror = T));
        })),
          oe(u, "link", i),
          (n.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Ys.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var _u = 0;
  function kx(t, e) {
    return (
      t.stylesheets && t.count === 0 && Gs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Gs(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && _u === 0 && (_u = 62500 * Tx());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && Gs(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > _u ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(i), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function Ys() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Gs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ks = null;
  function Gs(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (ks = new Map()), e.forEach(Gx, t), (ks = null), Ys.call(t)));
  }
  function Gx(t, e) {
    if (!(e.state.loading & 4)) {
      var n = ks.get(t);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), ks.set(t, n));
        for (
          var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0;
          u < s.length;
          u++
        ) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      ((s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (u = n.get(f) || i),
        u === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = Ys.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var dl = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0,
  };
  function Xx(t, e, n, i, s, u, f, g, T) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Dr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Dr(0)),
      (this.hiddenUpdates = Dr(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map()));
  }
  function tp(t, e, n, i, s, u, f, g, T, D, _, L) {
    return (
      (t = new Xx(t, e, n, f, T, D, _, L, g)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Ne(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = ho()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: i, isDehydrated: n, cache: e }),
      go(u),
      t
    );
  }
  function ep(t) {
    return t ? ((t = Ga), t) : Ga;
  }
  function np(t, e, n, i, s, u) {
    ((s = ep(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Un(e)),
      (i.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (n = Ln(t, i, e)),
      n !== null && (Se(n, t, e), Xi(n, t, e)));
  }
  function ap(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Vu(t, e) {
    (ap(t, e), (t = t.alternate) && ap(t, e));
  }
  function ip(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = fa(t, 67108864);
      (e !== null && Se(e, t, 67108864), Vu(t, 67108864));
    }
  }
  function lp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Oe();
      e = wr(e);
      var n = fa(t, e);
      (n !== null && Se(n, t, e), Vu(t, e));
    }
  }
  var Xs = !0;
  function Zx(t, e, n, i) {
    var s = R.T;
    R.T = null;
    var u = X.p;
    try {
      ((X.p = 2), Bu(t, e, n, i));
    } finally {
      ((X.p = u), (R.T = s));
    }
  }
  function Kx(t, e, n, i) {
    var s = R.T;
    R.T = null;
    var u = X.p;
    try {
      ((X.p = 8), Bu(t, e, n, i));
    } finally {
      ((X.p = u), (R.T = s));
    }
  }
  function Bu(t, e, n, i) {
    if (Xs) {
      var s = Uu(i);
      if (s === null) (Tu(t, e, i, Zs, n), rp(t, i));
      else if (Jx(s, t, e, n, i)) i.stopPropagation();
      else if ((rp(t, i), e & 4 && -1 < Qx.indexOf(t))) {
        for (; s !== null; ) {
          var u = Oa(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var f = sa(u.pendingLanes);
                  if (f !== 0) {
                    var g = u;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                      var T = 1 << (31 - je(f));
                      ((g.entanglements[1] |= T), (f &= ~T));
                    }
                    (ln(u), (Et & 6) === 0 && ((Ns = Ae() + 500), sl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = fa(u, 2)), g !== null && Se(g, u, 2), ws(), Vu(u, 2));
            }
          if (((u = Uu(i)), u === null && Tu(t, e, i, Zs, n), u === s)) break;
          s = u;
        }
        s !== null && i.stopPropagation();
      } else Tu(t, e, i, null, n);
    }
  }
  function Uu(t) {
    return ((t = Lr(t)), Lu(t));
  }
  var Zs = null;
  function Lu(t) {
    if (((Zs = null), (t = za(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Zs = t), null);
  }
  function sp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (O0()) {
          case mf:
            return 2;
          case pf:
            return 8;
          case _l:
          case R0:
            return 32;
          case yf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hu = !1,
    Fn = null,
    Pn = null,
    Wn = null,
    hl = new Map(),
    ml = new Map(),
    $n = [],
    Qx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function rp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Fn = null;
        break;
      case "dragenter":
      case "dragleave":
        Pn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        hl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ml.delete(e.pointerId);
    }
  }
  function pl(t, e, n, i, s, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [s],
        }),
        e !== null && ((e = Oa(e)), e !== null && ip(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Jx(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return ((Fn = pl(Fn, t, e, n, i, s)), !0);
      case "dragenter":
        return ((Pn = pl(Pn, t, e, n, i, s)), !0);
      case "mouseover":
        return ((Wn = pl(Wn, t, e, n, i, s)), !0);
      case "pointerover":
        var u = s.pointerId;
        return (hl.set(u, pl(hl.get(u) || null, t, e, n, i, s)), !0);
      case "gotpointercapture":
        return ((u = s.pointerId), ml.set(u, pl(ml.get(u) || null, t, e, n, i, s)), !0);
    }
    return !1;
  }
  function op(t) {
    var e = za(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            ((t.blockedOn = e),
              Tf(t.priority, function () {
                lp(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              Tf(t.priority, function () {
                lp(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ks(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Uu(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((Ur = i), n.target.dispatchEvent(i), (Ur = null));
      } else return ((e = Oa(n)), e !== null && ip(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function up(t, e, n) {
    Ks(t) && n.delete(e);
  }
  function Fx() {
    ((Hu = !1),
      Fn !== null && Ks(Fn) && (Fn = null),
      Pn !== null && Ks(Pn) && (Pn = null),
      Wn !== null && Ks(Wn) && (Wn = null),
      hl.forEach(up),
      ml.forEach(up));
  }
  function Qs(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Hu || ((Hu = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Fx)));
  }
  var Js = null;
  function cp(t) {
    Js !== t &&
      ((Js = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Js === t && (Js = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (Lu(i || n) === null) continue;
            break;
          }
          var u = Oa(n);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Uo(u, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function hi(t) {
    function e(T) {
      return Qs(T, t);
    }
    (Fn !== null && Qs(Fn, t),
      Pn !== null && Qs(Pn, t),
      Wn !== null && Qs(Wn, t),
      hl.forEach(e),
      ml.forEach(e));
    for (var n = 0; n < $n.length; n++) {
      var i = $n[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < $n.length && ((n = $n[0]), n.blockedOn === null); )
      (op(n), n.blockedOn === null && $n.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          u = n[i + 1],
          f = s[pe] || null;
        if (typeof u == "function") f || cp(n);
        else if (f) {
          var g = null;
          if (u && u.hasAttribute("formAction")) {
            if (((s = u), (f = u[pe] || null))) g = f.formAction;
            else if (Lu(s) !== null) continue;
          } else g = f.action;
          (typeof g == "function" ? (n[i + 1] = g) : (n.splice(i, 3), (i -= 3)), cp(n));
        }
      }
  }
  function fp() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), i || setTimeout(n, 20));
    }
    function n() {
      if (!i && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function qu(t) {
    this._internalRoot = t;
  }
  ((Fs.prototype.render = qu.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        i = Oe();
      np(n, i, t, e, null, null);
    }),
    (Fs.prototype.unmount = qu.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (np(t.current, 2, null, t, null, null), ws(), (e[Ca] = null));
        }
      }));
  function Fs(t) {
    this._internalRoot = t;
  }
  Fs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Sf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < $n.length && e !== 0 && e < $n[n].priority; n++);
      ($n.splice(n, 0, t), n === 0 && op(t));
    }
  };
  var dp = l.version;
  if (dp !== "19.2.5") throw Error(r(527, dp, "19.2.5"));
  X.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return ((t = y(e)), (t = t !== null ? x(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var Px = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.5",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber)
      try {
        ((Ei = Ps.inject(Px)), (Ee = Ps));
      } catch {}
  }
  return (
    (gl.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        i = "",
        s = xh,
        u = bh,
        f = Sh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = tp(t, 1, !1, null, null, n, i, null, s, u, f, fp)),
        (t[Ca] = e.current),
        Su(t),
        new qu(e)
      );
    }),
    (gl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        u = xh,
        f = bh,
        g = Sh,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (T = n.formState)),
        (e = tp(t, 1, !0, e, n ?? null, i, s, T, u, f, g, fp)),
        (e.context = ep(null)),
        (n = e.current),
        (i = Oe()),
        (i = wr(i)),
        (s = Un(i)),
        (s.callback = null),
        Ln(n, s, i),
        (n = i),
        (e.current.lanes = n),
        Mi(e, n),
        ln(e),
        (t[Ca] = e.current),
        Su(t),
        new Fs(e)
      );
    }),
    (gl.version = "19.2.5"),
    gl
  );
}
var Tp;
function s1() {
  if (Tp) return Gu.exports;
  Tp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Gu.exports = l1()), Gu.exports);
}
var r1 = s1();
const Lc = Y.createContext({});
function Hc(a) {
  const l = Y.useRef(null);
  return (l.current === null && (l.current = a()), l.current);
}
const o1 = typeof window < "u",
  Gy = o1 ? Y.useLayoutEffect : Y.useEffect,
  br = Y.createContext(null);
function qc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function fr(a, l) {
  const o = a.indexOf(l);
  o > -1 && a.splice(o, 1);
}
const un = (a, l, o) => (o > l ? l : o < a ? a : o);
let Yc = () => {};
const aa = {},
  Xy = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function Zy(a) {
  return typeof a == "object" && a !== null;
}
const Ky = (a) => /^0[^.\s]+$/u.test(a);
function Qy(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const Ke = (a) => a,
  u1 = (a, l) => (o) => l(a(o)),
  Cl = (...a) => a.reduce(u1),
  Ml = (a, l, o) => {
    const r = l - a;
    return r === 0 ? 1 : (o - a) / r;
  };
class kc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return (qc(this.subscriptions, l), () => fr(this.subscriptions, l));
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, r);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Re = (a) => a * 1e3,
  Ze = (a) => a / 1e3;
function Jy(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const Fy = (a, l, o) => (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a,
  c1 = 1e-7,
  f1 = 12;
function d1(a, l, o, r, c) {
  let h,
    d,
    p = 0;
  do ((d = l + (o - l) / 2), (h = Fy(d, r, c) - a), h > 0 ? (o = d) : (l = d));
  while (Math.abs(h) > c1 && ++p < f1);
  return d;
}
function zl(a, l, o, r) {
  if (a === l && o === r) return Ke;
  const c = (h) => d1(h, 0, 1, a, o);
  return (h) => (h === 0 || h === 1 ? h : Fy(c(h), l, r));
}
const Py = (a) => (l) => (l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2),
  Wy = (a) => (l) => 1 - a(1 - l),
  $y = zl(0.33, 1.53, 0.69, 0.99),
  Gc = Wy($y),
  Iy = Py(Gc),
  tg = (a) => (a >= 1 ? 1 : (a *= 2) < 1 ? 0.5 * Gc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))),
  Xc = (a) => 1 - Math.sin(Math.acos(a)),
  eg = Wy(Xc),
  ng = Py(Xc),
  h1 = zl(0.42, 0, 1, 1),
  m1 = zl(0, 0, 0.58, 1),
  ag = zl(0.42, 0, 0.58, 1),
  p1 = (a) => Array.isArray(a) && typeof a[0] != "number",
  ig = (a) => Array.isArray(a) && typeof a[0] == "number",
  y1 = {
    linear: Ke,
    easeIn: h1,
    easeInOut: ag,
    easeOut: m1,
    circIn: Xc,
    circInOut: ng,
    circOut: eg,
    backIn: Gc,
    backInOut: Iy,
    backOut: $y,
    anticipate: tg,
  },
  g1 = (a) => typeof a == "string",
  Ap = (a) => {
    if (ig(a)) {
      Yc(a.length === 4);
      const [l, o, r, c] = a;
      return zl(l, o, r, c);
    } else if (g1(a)) return y1[a];
    return a;
  },
  Ws = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function v1(a, l) {
  let o = new Set(),
    r = new Set(),
    c = !1,
    h = !1;
  const d = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function v(x) {
    (d.has(x) && (y.schedule(x), a()), x(p));
  }
  const y = {
    schedule: (x, b = !1, S = !1) => {
      const C = S && c ? o : r;
      return (b && d.add(x), C.add(x), x);
    },
    cancel: (x) => {
      (r.delete(x), d.delete(x));
    },
    process: (x) => {
      if (((p = x), c)) {
        h = !0;
        return;
      }
      c = !0;
      const b = o;
      ((o = r), (r = b), o.forEach(v), o.clear(), (c = !1), h && ((h = !1), y.process(x)));
    },
  };
  return y;
}
const x1 = 40;
function lg(a, l) {
  let o = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (o = !0),
    d = Ws.reduce((q, G) => ((q[G] = v1(h)), q), {}),
    {
      setup: p,
      read: v,
      resolveKeyframes: y,
      preUpdate: x,
      update: b,
      preRender: S,
      render: M,
      postRender: C,
    } = d,
    H = () => {
      const q = aa.useManualTiming,
        G = q ? c.timestamp : performance.now();
      ((o = !1),
        q || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(G - c.timestamp, x1), 1)),
        (c.timestamp = G),
        (c.isProcessing = !0),
        p.process(c),
        v.process(c),
        y.process(c),
        x.process(c),
        b.process(c),
        S.process(c),
        M.process(c),
        C.process(c),
        (c.isProcessing = !1),
        o && l && ((r = !1), a(H)));
    },
    O = () => {
      ((o = !0), (r = !0), c.isProcessing || a(H));
    };
  return {
    schedule: Ws.reduce((q, G) => {
      const Q = d[G];
      return ((q[G] = (at, I = !1, F = !1) => (o || O(), Q.schedule(at, I, F))), q);
    }, {}),
    cancel: (q) => {
      for (let G = 0; G < Ws.length; G++) d[Ws[G]].cancel(q);
    },
    state: c,
    steps: d,
  };
}
const {
  schedule: zt,
  cancel: ia,
  state: ue,
  steps: Qu,
} = lg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ke, !0);
let ar;
function b1() {
  ar = void 0;
}
const he = {
    now: () => (
      ar === void 0 &&
        he.set(ue.isProcessing || aa.useManualTiming ? ue.timestamp : performance.now()),
      ar
    ),
    set: (a) => {
      ((ar = a), queueMicrotask(b1));
    },
  },
  sg = (a) => (l) => typeof l == "string" && l.startsWith(a),
  rg = sg("--"),
  S1 = sg("var(--"),
  Zc = (a) => (S1(a) ? T1.test(a.split("/*")[0].trim()) : !1),
  T1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ep(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const bi = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  Nl = { ...bi, transform: (a) => un(0, 1, a) },
  $s = { ...bi, default: 1 },
  Tl = (a) => Math.round(a * 1e5) / 1e5,
  Kc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function A1(a) {
  return a == null;
}
const E1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Qc = (a, l) => (o) =>
    !!(
      (typeof o == "string" && E1.test(o) && o.startsWith(a)) ||
      (l && !A1(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  og = (a, l, o) => (r) => {
    if (typeof r != "string") return r;
    const [c, h, d, p] = r.match(Kc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(h),
      [o]: parseFloat(d),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  j1 = (a) => un(0, 255, a),
  Ju = { ...bi, transform: (a) => Math.round(j1(a)) },
  Ma = {
    test: Qc("rgb", "red"),
    parse: og("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: o, alpha: r = 1 }) =>
      "rgba(" +
      Ju.transform(a) +
      ", " +
      Ju.transform(l) +
      ", " +
      Ju.transform(o) +
      ", " +
      Tl(Nl.transform(r)) +
      ")",
  };
function M1(a) {
  let l = "",
    o = "",
    r = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (o = a.substring(3, 5)),
        (r = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (o = a.substring(2, 3)),
        (r = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (o += o),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(o, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const dc = { test: Qc("#"), parse: M1, transform: Ma.transform },
  Ol = (a) => ({
    test: (l) => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  ta = Ol("deg"),
  on = Ol("%"),
  $ = Ol("px"),
  N1 = Ol("vh"),
  D1 = Ol("vw"),
  jp = {
    ...on,
    parse: (a) => on.parse(a) / 100,
    transform: (a) => on.transform(a * 100),
  },
  pi = {
    test: Qc("hsl", "hue"),
    parse: og("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: o, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      on.transform(Tl(l)) +
      ", " +
      on.transform(Tl(o)) +
      ", " +
      Tl(Nl.transform(r)) +
      ")",
  },
  Pt = {
    test: (a) => Ma.test(a) || dc.test(a) || pi.test(a),
    parse: (a) => (Ma.test(a) ? Ma.parse(a) : pi.test(a) ? pi.parse(a) : dc.parse(a)),
    transform: (a) =>
      typeof a == "string" ? a : a.hasOwnProperty("red") ? Ma.transform(a) : pi.transform(a),
    getAnimatableNone: (a) => {
      const l = Pt.parse(a);
      return ((l.alpha = 0), Pt.transform(l));
    },
  },
  w1 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function C1(a) {
  var l, o;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(Kc)) == null ? void 0 : l.length) || 0) +
      (((o = a.match(w1)) == null ? void 0 : o.length) || 0) >
      0
  );
}
const ug = "number",
  cg = "color",
  z1 = "var",
  O1 = "var(",
  Mp = "${}",
  R1 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vi(a) {
  const l = a.toString(),
    o = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const p = l
    .replace(
      R1,
      (v) => (
        Pt.test(v)
          ? (r.color.push(h), c.push(cg), o.push(Pt.parse(v)))
          : v.startsWith(O1)
            ? (r.var.push(h), c.push(z1), o.push(v))
            : (r.number.push(h), c.push(ug), o.push(parseFloat(v))),
        ++h,
        Mp
      ),
    )
    .split(Mp);
  return { values: o, split: p, indexes: r, types: c };
}
function _1(a) {
  return vi(a).values;
}
function fg({ split: a, types: l }) {
  const o = a.length;
  return (r) => {
    let c = "";
    for (let h = 0; h < o; h++)
      if (((c += a[h]), r[h] !== void 0)) {
        const d = l[h];
        d === ug ? (c += Tl(r[h])) : d === cg ? (c += Pt.transform(r[h])) : (c += r[h]);
      }
    return c;
  };
}
function V1(a) {
  return fg(vi(a));
}
const B1 = (a) => (typeof a == "number" ? 0 : Pt.test(a) ? Pt.getAnimatableNone(a) : a),
  U1 = (a, l) => (typeof a == "number" ? (l != null && l.trim().endsWith("/") ? a : 0) : B1(a));
function L1(a) {
  const l = vi(a);
  return fg(l)(l.values.map((r, c) => U1(r, l.split[c])));
}
const Ie = {
  test: C1,
  parse: _1,
  createTransformer: V1,
  getAnimatableNone: L1,
};
function Fu(a, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? a + (l - a) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? a + (l - a) * (2 / 3 - o) * 6 : a
  );
}
function H1({ hue: a, saturation: l, lightness: o, alpha: r }) {
  ((a /= 360), (l /= 100), (o /= 100));
  let c = 0,
    h = 0,
    d = 0;
  if (!l) c = h = d = o;
  else {
    const p = o < 0.5 ? o * (1 + l) : o + l - o * l,
      v = 2 * o - p;
    ((c = Fu(v, p, a + 1 / 3)), (h = Fu(v, p, a)), (d = Fu(v, p, a - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: r,
  };
}
function dr(a, l) {
  return (o) => (o > 0 ? l : a);
}
const _t = (a, l, o) => a + (l - a) * o,
  Pu = (a, l, o) => {
    const r = a * a,
      c = o * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  q1 = [dc, Ma, pi],
  Y1 = (a) => q1.find((l) => l.test(a));
function Np(a) {
  const l = Y1(a);
  if (!l) return !1;
  let o = l.parse(a);
  return (l === pi && (o = H1(o)), o);
}
const Dp = (a, l) => {
    const o = Np(a),
      r = Np(l);
    if (!o || !r) return dr(a, l);
    const c = { ...o };
    return (h) => (
      (c.red = Pu(o.red, r.red, h)),
      (c.green = Pu(o.green, r.green, h)),
      (c.blue = Pu(o.blue, r.blue, h)),
      (c.alpha = _t(o.alpha, r.alpha, h)),
      Ma.transform(c)
    );
  },
  hc = new Set(["none", "hidden"]);
function k1(a, l) {
  return hc.has(a) ? (o) => (o <= 0 ? a : l) : (o) => (o >= 1 ? l : a);
}
function G1(a, l) {
  return (o) => _t(a, l, o);
}
function Jc(a) {
  return typeof a == "number"
    ? G1
    : typeof a == "string"
      ? Zc(a)
        ? dr
        : Pt.test(a)
          ? Dp
          : K1
      : Array.isArray(a)
        ? dg
        : typeof a == "object"
          ? Pt.test(a)
            ? Dp
            : X1
          : dr;
}
function dg(a, l) {
  const o = [...a],
    r = o.length,
    c = a.map((h, d) => Jc(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < r; d++) o[d] = c[d](h);
    return o;
  };
}
function X1(a, l) {
  const o = { ...a, ...l },
    r = {};
  for (const c in o) a[c] !== void 0 && l[c] !== void 0 && (r[c] = Jc(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in r) o[h] = r[h](c);
    return o;
  };
}
function Z1(a, l) {
  const o = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c],
      d = a.indexes[h][r[h]],
      p = a.values[d] ?? 0;
    ((o[c] = p), r[h]++);
  }
  return o;
}
const K1 = (a, l) => {
  const o = Ie.createTransformer(l),
    r = vi(a),
    c = vi(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (hc.has(a) && !c.values.length) || (hc.has(l) && !r.values.length)
      ? k1(a, l)
      : Cl(dg(Z1(r, c), c.values), o)
    : dr(a, l);
};
function hg(a, l, o) {
  return typeof a == "number" && typeof l == "number" && typeof o == "number"
    ? _t(a, l, o)
    : Jc(a)(a, l);
}
const Q1 = (a) => {
    const l = ({ timestamp: o }) => a(o);
    return {
      start: (o = !0) => zt.update(l, o),
      stop: () => ia(l),
      now: () => (ue.isProcessing ? ue.timestamp : he.now()),
    };
  },
  mg = (a, l, o = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let h = 0; h < c; h++) r += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  hr = 2e4;
function Fc(a) {
  let l = 0;
  const o = 50;
  let r = a.next(l);
  for (; !r.done && l < hr; ) ((l += o), (r = a.next(l)));
  return l >= hr ? 1 / 0 : l;
}
function J1(a, l = 100, o) {
  const r = o({ ...a, keyframes: [0, l] }),
    c = Math.min(Fc(r), hr);
  return {
    type: "keyframes",
    ease: (h) => r.next(c * h).value / l,
    duration: Ze(c),
  };
}
const Yt = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function mc(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const F1 = 12;
function P1(a, l, o) {
  let r = o;
  for (let c = 1; c < F1; c++) r = r - a(r) / l(r);
  return r;
}
const Wu = 0.001;
function W1({
  duration: a = Yt.duration,
  bounce: l = Yt.bounce,
  velocity: o = Yt.velocity,
  mass: r = Yt.mass,
}) {
  let c,
    h,
    d = 1 - l;
  ((d = un(Yt.minDamping, Yt.maxDamping, d)),
    (a = un(Yt.minDuration, Yt.maxDuration, Ze(a))),
    d < 1
      ? ((c = (y) => {
          const x = y * d,
            b = x * a,
            S = x - o,
            M = mc(y, d),
            C = Math.exp(-b);
          return Wu - (S / M) * C;
        }),
        (h = (y) => {
          const b = y * d * a,
            S = b * o + o,
            M = Math.pow(d, 2) * Math.pow(y, 2) * a,
            C = Math.exp(-b),
            H = mc(Math.pow(y, 2), d);
          return ((-c(y) + Wu > 0 ? -1 : 1) * ((S - M) * C)) / H;
        }))
      : ((c = (y) => {
          const x = Math.exp(-y * a),
            b = (y - o) * a + 1;
          return -Wu + x * b;
        }),
        (h = (y) => {
          const x = Math.exp(-y * a),
            b = (o - y) * (a * a);
          return x * b;
        })));
  const p = 5 / a,
    v = P1(c, h, p);
  if (((a = Re(a)), isNaN(v))) return { stiffness: Yt.stiffness, damping: Yt.damping, duration: a };
  {
    const y = Math.pow(v, 2) * r;
    return { stiffness: y, damping: d * 2 * Math.sqrt(r * y), duration: a };
  }
}
const $1 = ["duration", "bounce"],
  I1 = ["stiffness", "damping", "mass"];
function wp(a, l) {
  return l.some((o) => a[o] !== void 0);
}
function tb(a) {
  let l = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!wp(a, I1) && wp(a, $1))
    if (((l.velocity = 0), a.visualDuration)) {
      const o = a.visualDuration,
        r = (2 * Math.PI) / (o * 1.2),
        c = r * r,
        h = 2 * un(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Yt.mass, stiffness: c, damping: h };
    } else {
      const o = W1({ ...a, velocity: 0 });
      ((l = { ...l, ...o, mass: Yt.mass }), (l.isResolvedFromDuration = !0));
    }
  return l;
}
function mr(a = Yt.visualDuration, l = Yt.bounce) {
  const o = typeof a != "object" ? { visualDuration: a, keyframes: [0, 1], bounce: l } : a;
  let { restSpeed: r, restDelta: c } = o;
  const h = o.keyframes[0],
    d = o.keyframes[o.keyframes.length - 1],
    p = { done: !1, value: h },
    {
      stiffness: v,
      damping: y,
      mass: x,
      duration: b,
      velocity: S,
      isResolvedFromDuration: M,
    } = tb({ ...o, velocity: -Ze(o.velocity || 0) }),
    C = S || 0,
    H = y / (2 * Math.sqrt(v * x)),
    O = d - h,
    B = Ze(Math.sqrt(v / x)),
    k = Math.abs(O) < 5;
  (r || (r = k ? Yt.restSpeed.granular : Yt.restSpeed.default),
    c || (c = k ? Yt.restDelta.granular : Yt.restDelta.default));
  let q, G, Q, at, I, F;
  if (H < 1)
    ((Q = mc(B, H)),
      (at = (C + H * B * O) / Q),
      (q = (et) => {
        const ft = Math.exp(-H * B * et);
        return d - ft * (at * Math.sin(Q * et) + O * Math.cos(Q * et));
      }),
      (I = H * B * at + O * Q),
      (F = H * B * O - at * Q),
      (G = (et) => Math.exp(-H * B * et) * (I * Math.sin(Q * et) + F * Math.cos(Q * et))));
  else if (H === 1) {
    q = (ft) => d - Math.exp(-B * ft) * (O + (C + B * O) * ft);
    const et = C + B * O;
    G = (ft) => Math.exp(-B * ft) * (B * et * ft - C);
  } else {
    const et = B * Math.sqrt(H * H - 1);
    q = (Bt) => {
      const Ut = Math.exp(-H * B * Bt),
        R = Math.min(et * Bt, 300);
      return d - (Ut * ((C + H * B * O) * Math.sinh(R) + et * O * Math.cosh(R))) / et;
    };
    const ft = (C + H * B * O) / et,
      bt = H * B * ft - O * et,
      Zt = H * B * O - ft * et;
    G = (Bt) => {
      const Ut = Math.exp(-H * B * Bt),
        R = Math.min(et * Bt, 300);
      return Ut * (bt * Math.sinh(R) + Zt * Math.cosh(R));
    };
  }
  const st = {
    calculatedDuration: (M && b) || null,
    velocity: (et) => Re(G(et)),
    next: (et) => {
      if (!M && H < 1) {
        const bt = Math.exp(-H * B * et),
          Zt = Math.sin(Q * et),
          Bt = Math.cos(Q * et),
          Ut = d - bt * (at * Zt + O * Bt),
          R = Re(bt * (I * Zt + F * Bt));
        return (
          (p.done = Math.abs(R) <= r && Math.abs(d - Ut) <= c),
          (p.value = p.done ? d : Ut),
          p
        );
      }
      const ft = q(et);
      if (M) p.done = et >= b;
      else {
        const bt = Re(G(et));
        p.done = Math.abs(bt) <= r && Math.abs(d - ft) <= c;
      }
      return ((p.value = p.done ? d : ft), p);
    },
    toString: () => {
      const et = Math.min(Fc(st), hr),
        ft = mg((bt) => st.next(et * bt).value, et, 30);
      return et + "ms " + ft;
    },
    toTransition: () => {},
  };
  return st;
}
mr.applyToOptions = (a) => {
  const l = J1(a, 100, mr);
  return ((a.ease = l.ease), (a.duration = Re(l.duration)), (a.type = "keyframes"), a);
};
const eb = 5;
function pg(a, l, o) {
  const r = Math.max(l - eb, 0);
  return Jy(o - a(r), l - r);
}
function pc({
  keyframes: a,
  velocity: l = 0,
  power: o = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: d,
  min: p,
  max: v,
  restDelta: y = 0.5,
  restSpeed: x,
}) {
  const b = a[0],
    S = { done: !1, value: b },
    M = (F) => (p !== void 0 && F < p) || (v !== void 0 && F > v),
    C = (F) => (p === void 0 ? v : v === void 0 || Math.abs(p - F) < Math.abs(v - F) ? p : v);
  let H = o * l;
  const O = b + H,
    B = d === void 0 ? O : d(O);
  B !== O && (H = B - b);
  const k = (F) => -H * Math.exp(-F / r),
    q = (F) => B + k(F),
    G = (F) => {
      const st = k(F),
        et = q(F);
      ((S.done = Math.abs(st) <= y), (S.value = S.done ? B : et));
    };
  let Q, at;
  const I = (F) => {
    M(S.value) &&
      ((Q = F),
      (at = mr({
        keyframes: [S.value, C(S.value)],
        velocity: pg(q, F, S.value),
        damping: c,
        stiffness: h,
        restDelta: y,
        restSpeed: x,
      })));
  };
  return (
    I(0),
    {
      calculatedDuration: null,
      next: (F) => {
        let st = !1;
        return (
          !at && Q === void 0 && ((st = !0), G(F), I(F)),
          Q !== void 0 && F >= Q ? at.next(F - Q) : (!st && G(F), S)
        );
      },
    }
  );
}
function nb(a, l, o) {
  const r = [],
    c = o || aa.mix || hg,
    h = a.length - 1;
  for (let d = 0; d < h; d++) {
    let p = c(a[d], a[d + 1]);
    if (l) {
      const v = Array.isArray(l) ? l[d] || Ke : l;
      p = Cl(v, p);
    }
    r.push(p);
  }
  return r;
}
function ab(a, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const h = a.length;
  if ((Yc(h === l.length), h === 1)) return () => l[0];
  if (h === 2 && l[0] === l[1]) return () => l[1];
  const d = a[0] === a[1];
  a[0] > a[h - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const p = nb(l, r, c),
    v = p.length,
    y = (x) => {
      if (d && x < a[0]) return l[0];
      let b = 0;
      if (v > 1) for (; b < a.length - 2 && !(x < a[b + 1]); b++);
      const S = Ml(a[b], a[b + 1], x);
      return p[b](S);
    };
  return o ? (x) => y(un(a[0], a[h - 1], x)) : y;
}
function ib(a, l) {
  const o = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = Ml(0, l, r);
    a.push(_t(o, 1, c));
  }
}
function lb(a) {
  const l = [0];
  return (ib(l, a.length - 1), l);
}
function sb(a, l) {
  return a.map((o) => o * l);
}
function rb(a, l) {
  return a.map(() => l || ag).splice(0, a.length - 1);
}
function Al({ duration: a = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = p1(r) ? r.map(Ap) : Ap(r),
    h = { done: !1, value: l[0] },
    d = sb(o && o.length === l.length ? o : lb(l), a),
    p = ab(d, l, { ease: Array.isArray(c) ? c : rb(l, c) });
  return {
    calculatedDuration: a,
    next: (v) => ((h.value = p(v)), (h.done = v >= a), h),
  };
}
const ob = (a) => a !== null;
function Sr(a, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const h = a.filter(ob),
    p = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : h.length - 1;
  return !p || r === void 0 ? h[p] : r;
}
const ub = { decay: pc, inertia: pc, tween: Al, keyframes: Al, spring: mr };
function yg(a) {
  typeof a.type == "string" && (a.type = ub[a.type]);
}
class Pc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const cb = (a) => a / 100;
class pr extends Pc {
  constructor(l) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, c;
        const { motionValue: o } = this.options;
        (o && o.updatedAt !== he.now() && this.tick(he.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(), (c = (r = this.options).onStop) == null || c.call(r)));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: l } = this;
    yg(l);
    const { type: o = Al, repeat: r = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: p } = l;
    const v = o || Al;
    v !== Al &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = Cl(cb, hg(p[0], p[1]))), (p = [0, 100]));
    const y = v({ ...l, keyframes: p });
    (h === "mirror" &&
      (this.mirroredGenerator = v({
        ...l,
        keyframes: [...p].reverse(),
        velocity: -d,
      })),
      y.calculatedDuration === null && (y.calculatedDuration = Fc(y)));
    const { calculatedDuration: x } = y;
    ((this.calculatedDuration = x),
      (this.resolvedDuration = x + c),
      (this.totalDuration = this.resolvedDuration * (r + 1) - c),
      (this.generator = y));
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = o);
  }
  tick(l, o = !1) {
    const {
      generator: r,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: d,
      resolvedDuration: p,
      calculatedDuration: v,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: y = 0,
      keyframes: x,
      repeat: b,
      repeatType: S,
      repeatDelay: M,
      type: C,
      onUpdate: H,
      finalKeyframe: O,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      o ? (this.currentTime = l) : this.updateTime(l));
    const B = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      k = this.playbackSpeed >= 0 ? B < 0 : B > c;
    ((this.currentTime = Math.max(B, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = c));
    let q = this.currentTime,
      G = r;
    if (b) {
      const F = Math.min(this.currentTime, c) / p;
      let st = Math.floor(F),
        et = F % 1;
      (!et && F >= 1 && (et = 1),
        et === 1 && st--,
        (st = Math.min(st, b + 1)),
        !!(st % 2) &&
          (S === "reverse" ? ((et = 1 - et), M && (et -= M / p)) : S === "mirror" && (G = d)),
        (q = un(0, 1, et) * p));
    }
    let Q;
    (k ? ((this.delayState.value = x[0]), (Q = this.delayState)) : (Q = G.next(q)),
      h && !k && (Q.value = h(Q.value)));
    let { done: at } = Q;
    !k &&
      v !== null &&
      (at = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const I =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && at));
    return (
      I && C !== pc && (Q.value = Sr(x, this.options, O, this.speed)),
      H && H(Q.value),
      I && this.finish(),
      Q
    );
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return Ze(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Ze(l);
  }
  get time() {
    return Ze(this.currentTime);
  }
  set time(l) {
    ((l = Re(l)),
      (this.currentTime = l),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = l), this.tick(l)));
  }
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(l);
    const o = this.generator.next(l).value;
    return pg((r) => this.generator.next(r).value, l, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    (o && this.driver && this.updateTime(he.now()),
      (this.playbackSpeed = l),
      o && this.driver && (this.time = Ze(this.currentTime)));
  }
  play() {
    var c, h;
    if (this.isStopped) return;
    const { driver: l = Q1, startTime: o } = this.options;
    (this.driver || (this.driver = l((d) => this.tick(d))),
      (h = (c = this.options).onPlay) == null || h.call(c));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = o ?? r),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(he.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    var l, o;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (o = (l = this.options).onComplete) == null || o.call(l));
  }
  cancel() {
    var l, o;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (o = (l = this.options).onCancel) == null || o.call(l));
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return ((this.startTime = 0), this.tick(l, !0));
  }
  attachTimeline(l) {
    var o;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      (o = this.driver) == null || o.stop(),
      l.observe(this)
    );
  }
}
function fb(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const Na = (a) => (a * 180) / Math.PI,
  yc = (a) => {
    const l = Na(Math.atan2(a[1], a[0]));
    return gc(l);
  },
  db = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: yc,
    rotateZ: yc,
    skewX: (a) => Na(Math.atan(a[1])),
    skewY: (a) => Na(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  gc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  Cp = yc,
  zp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Op = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  hb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: zp,
    scaleY: Op,
    scale: (a) => (zp(a) + Op(a)) / 2,
    rotateX: (a) => gc(Na(Math.atan2(a[6], a[5]))),
    rotateY: (a) => gc(Na(Math.atan2(-a[2], a[0]))),
    rotateZ: Cp,
    rotate: Cp,
    skewX: (a) => Na(Math.atan(a[4])),
    skewY: (a) => Na(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function vc(a) {
  return a.includes("scale") ? 1 : 0;
}
function xc(a, l) {
  if (!a || a === "none") return vc(l);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o) ((r = hb), (c = o));
  else {
    const p = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = db), (c = p));
  }
  if (!c) return vc(l);
  const h = r[l],
    d = c[1].split(",").map(pb);
  return typeof h == "function" ? h(d) : d[h];
}
const mb = (a, l) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return xc(o, l);
};
function pb(a) {
  return parseFloat(a.trim());
}
const Si = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ti = new Set(Si),
  Rp = (a) => a === bi || a === $,
  yb = new Set(["x", "y", "z"]),
  gb = Si.filter((a) => !yb.has(a));
function vb(a) {
  const l = [];
  return (
    gb.forEach((o) => {
      const r = a.getValue(o);
      r !== void 0 && (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const na = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => xc(l, "x"),
  y: (a, { transform: l }) => xc(l, "y"),
};
na.translateX = na.x;
na.translateY = na.y;
const Da = new Set();
let bc = !1,
  Sc = !1,
  Tc = !1;
function gg() {
  if (Sc) {
    const a = Array.from(Da).filter((r) => r.needsMeasurement),
      l = new Set(a.map((r) => r.element)),
      o = new Map();
    (l.forEach((r) => {
      const c = vb(r);
      c.length && (o.set(r, c), r.render());
    }),
      a.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = o.get(r);
        c &&
          c.forEach(([h, d]) => {
            var p;
            (p = r.getValue(h)) == null || p.set(d);
          });
      }),
      a.forEach((r) => r.measureEndState()),
      a.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Sc = !1), (bc = !1), Da.forEach((a) => a.complete(Tc)), Da.clear());
}
function vg() {
  Da.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (Sc = !0));
  });
}
function xb() {
  ((Tc = !0), vg(), gg(), (Tc = !1));
}
class Wc {
  constructor(l, o, r, c, h, d = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = o),
      (this.name = r),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = d));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Da.add(this), bc || ((bc = !0), zt.read(vg), zt.resolveKeyframes(gg)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const h = c == null ? void 0 : c.get(),
        d = l[l.length - 1];
      if (h !== void 0) l[0] = h;
      else if (r && o) {
        const p = r.readValue(o, d);
        p != null && (l[0] = p);
      }
      (l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]));
    }
    fb(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      Da.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Da.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const bb = (a) => a.startsWith("--");
function xg(a, l, o) {
  bb(l) ? a.style.setProperty(l, o) : (a.style[l] = o);
}
const Sb = {};
function bg(a, l) {
  const o = Qy(a);
  return () => Sb[l] ?? o();
}
const Tb = bg(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Sg = bg(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  bl = ([a, l, o, r]) => `cubic-bezier(${a}, ${l}, ${o}, ${r})`,
  _p = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: bl([0, 0.65, 0.55, 1]),
    circOut: bl([0.55, 0, 1, 0.45]),
    backIn: bl([0.31, 0.01, 0.66, -0.59]),
    backOut: bl([0.33, 1.53, 0.69, 0.99]),
  };
function Tg(a, l) {
  if (a)
    return typeof a == "function"
      ? Sg()
        ? mg(a, l)
        : "ease-out"
      : ig(a)
        ? bl(a)
        : Array.isArray(a)
          ? a.map((o) => Tg(o, l) || _p.easeOut)
          : _p[a];
}
function Ab(
  a,
  l,
  o,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: d = "loop",
    ease: p = "easeOut",
    times: v,
  } = {},
  y = void 0,
) {
  const x = { [l]: o };
  v && (x.offset = v);
  const b = Tg(p, c);
  Array.isArray(b) && (x.easing = b);
  const S = {
    delay: r,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal",
  };
  return (y && (S.pseudoElement = y), a.animate(x, S));
}
function Ag(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function Eb({ type: a, ...l }) {
  return Ag(a) && Sg()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Eg extends Pc {
  constructor(l) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !l)
    )
      return;
    const {
      element: o,
      name: r,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: d = !1,
      finalKeyframe: p,
      onComplete: v,
    } = l;
    ((this.isPseudoElement = !!h),
      (this.allowFlatten = d),
      (this.options = l),
      Yc(typeof l.type != "string"));
    const y = Eb(l);
    ((this.animation = Ab(o, r, c, y, h)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const x = Sr(c, this.options, p, this.speed);
          (this.updateMotionValue && this.updateMotionValue(x),
            xg(o, r, x),
            this.animation.cancel());
        }
        (v == null || v(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, o;
    (o = (l = this.animation).finish) == null || o.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var o, r, c;
    const l = (o = this.options) == null ? void 0 : o.element;
    !this.isPseudoElement &&
      l != null &&
      l.isConnected &&
      ((c = (r = this.animation).commitStyles) == null || c.call(r));
  }
  get duration() {
    var o, r;
    const l =
      ((r = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null
        ? void 0
        : r.call(o).duration) || 0;
    return Ze(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Ze(l);
  }
  get time() {
    return Ze(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Re(l)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    (l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: r, observe: c }) {
    var h;
    return (
      this.allowFlatten &&
        ((h = this.animation.effect) == null || h.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      l && Tb()
        ? ((this.animation.timeline = l),
          o && (this.animation.rangeStart = o),
          r && (this.animation.rangeEnd = r),
          Ke)
        : c(this)
    );
  }
}
const jg = { anticipate: tg, backInOut: Iy, circInOut: ng };
function jb(a) {
  return a in jg;
}
function Mb(a) {
  typeof a.ease == "string" && jb(a.ease) && (a.ease = jg[a.ease]);
}
const $u = 10;
class Nb extends Eg {
  constructor(l) {
    (Mb(l),
      yg(l),
      super(l),
      l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime),
      (this.options = l));
  }
  updateMotionValue(l) {
    const { motionValue: o, onUpdate: r, onComplete: c, element: h, ...d } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const p = new pr({ ...d, autoplay: !1 }),
      v = Math.max($u, he.now() - this.startTime),
      y = un(0, $u, v - $u),
      x = p.sample(v).value,
      { name: b } = this.options;
    (h && b && xg(h, b, x), o.setWithVelocity(p.sample(Math.max(0, v - y)).value, x, y), p.stop());
  }
}
const Vp = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" && (Ie.test(a) || a === "0") && !a.startsWith("url("))
      );
function Db(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let o = 0; o < a.length; o++) if (a[o] !== l) return !0;
}
function wb(a, l, o, r) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const h = a[a.length - 1],
    d = Vp(c, l),
    p = Vp(h, l);
  return !d || !p ? !1 : Db(a) || ((o === "spring" || Ag(o)) && r);
}
function Ac(a) {
  ((a.duration = 0), (a.type = "keyframes"));
}
const Mg = new Set(["opacity", "clipPath", "filter", "transform"]),
  Cb = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function zb(a) {
  for (let l = 0; l < a.length; l++) if (typeof a[l] == "string" && Cb.test(a[l])) return !0;
  return !1;
}
const Ob = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  Rb = Qy(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function _b(a) {
  var b;
  const {
    motionValue: l,
    name: o,
    repeatDelay: r,
    repeatType: c,
    damping: h,
    type: d,
    keyframes: p,
  } = a;
  if (!(((b = l == null ? void 0 : l.owner) == null ? void 0 : b.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: y, transformTemplate: x } = l.owner.getProps();
  return (
    Rb() &&
    o &&
    (Mg.has(o) || (Ob.has(o) && zb(p))) &&
    (o !== "transform" || !x) &&
    !y &&
    !r &&
    c !== "mirror" &&
    h !== 0 &&
    d !== "inertia"
  );
}
const Vb = 40;
class Bb extends Pc {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: d = "loop",
    keyframes: p,
    name: v,
    motionValue: y,
    element: x,
    ...b
  }) {
    var C;
    (super(),
      (this.stop = () => {
        var H, O;
        (this._animation &&
          (this._animation.stop(), (H = this.stopTimeline) == null || H.call(this)),
          (O = this.keyframeResolver) == null || O.cancel());
      }),
      (this.createdAt = he.now()));
    const S = {
        autoplay: l,
        delay: o,
        type: r,
        repeat: c,
        repeatDelay: h,
        repeatType: d,
        name: v,
        motionValue: y,
        element: x,
        ...b,
      },
      M = (x == null ? void 0 : x.KeyframeResolver) || Wc;
    ((this.keyframeResolver = new M(
      p,
      (H, O, B) => this.onKeyframesResolved(H, O, S, !B),
      v,
      y,
      x,
    )),
      (C = this.keyframeResolver) == null || C.scheduleResolve());
  }
  onKeyframesResolved(l, o, r, c) {
    var B, k;
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: p, delay: v, isHandoff: y, onUpdate: x } = r;
    this.resolvedAt = he.now();
    let b = !0;
    wb(l, h, d, p) ||
      ((b = !1),
      (aa.instantAnimations || !v) && (x == null || x(Sr(l, r, o))),
      (l[0] = l[l.length - 1]),
      Ac(r),
      (r.repeat = 0));
    const M = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Vb
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...r,
        keyframes: l,
      },
      C = b && !y && _b(M),
      H = (k = (B = M.motionValue) == null ? void 0 : B.owner) == null ? void 0 : k.current;
    let O;
    if (C)
      try {
        O = new Nb({ ...M, element: H });
      } catch {
        O = new pr(M);
      }
    else O = new pr(M);
    (O.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Ke),
      this.pendingTimeline &&
        ((this.stopTimeline = O.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = O));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    var l;
    return (
      this._animation || ((l = this.keyframeResolver) == null || l.resume(), xb()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    (this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel());
  }
}
function Ng(a, l, o, r = 0, c = 1) {
  const h = Array.from(a)
      .sort((y, x) => y.sortNodePosition(x))
      .indexOf(l),
    d = a.size,
    p = (d - 1) * r;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * r : p - h * r;
}
const Ub = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Lb(a) {
  const l = Ub.exec(a);
  if (!l) return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function Dg(a, l, o = 1) {
  const [r, c] = Lb(a);
  if (!r) return;
  const h = window.getComputedStyle(l).getPropertyValue(r);
  if (h) {
    const d = h.trim();
    return Xy(d) ? parseFloat(d) : d;
  }
  return Zc(c) ? Dg(c, l, o + 1) : c;
}
const Hb = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  qb = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Yb = { type: "keyframes", duration: 0.8 },
  kb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Gb = (a, { keyframes: l }) =>
    l.length > 2 ? Yb : Ti.has(a) ? (a.startsWith("scale") ? qb(l[1]) : Hb) : kb;
function wg(a, l) {
  if (a != null && a.inherit && l) {
    const { inherit: o, ...r } = a;
    return { ...l, ...r };
  }
  return a;
}
function $c(a, l) {
  const o = (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
  return o !== a ? wg(o, a) : o;
}
const Xb = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function Zb(a) {
  for (const l in a) if (!Xb.has(l)) return !0;
  return !1;
}
const Ic =
  (a, l, o, r = {}, c, h) =>
  (d) => {
    const p = $c(r, a) || {},
      v = p.delay || r.delay || 0;
    let { elapsed: y = 0 } = r;
    y = y - Re(v);
    const x = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...p,
      delay: -y,
      onUpdate: (S) => {
        (l.set(S), p.onUpdate && p.onUpdate(S));
      },
      onComplete: () => {
        (d(), p.onComplete && p.onComplete());
      },
      name: a,
      motionValue: l,
      element: h ? void 0 : c,
    };
    (Zb(p) || Object.assign(x, Gb(a, x)),
      x.duration && (x.duration = Re(x.duration)),
      x.repeatDelay && (x.repeatDelay = Re(x.repeatDelay)),
      x.from !== void 0 && (x.keyframes[0] = x.from));
    let b = !1;
    if (
      ((x.type === !1 || (x.duration === 0 && !x.repeatDelay)) &&
        (Ac(x), x.delay === 0 && (b = !0)),
      (aa.instantAnimations || aa.skipAnimations || (c != null && c.shouldSkipAnimations)) &&
        ((b = !0), Ac(x), (x.delay = 0)),
      (x.allowFlatten = !p.type && !p.ease),
      b && !h && l.get() !== void 0)
    ) {
      const S = Sr(x.keyframes, p);
      if (S !== void 0) {
        zt.update(() => {
          (x.onUpdate(S), x.onComplete());
        });
        return;
      }
    }
    return p.isSync ? new pr(x) : new Bb(x);
  };
function Bp(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((o, r) => {
        ((l[0][r] = o.get()), (l[1][r] = o.getVelocity()));
      }),
    l
  );
}
function tf(a, l, o, r) {
  if (typeof l == "function") {
    const [c, h] = Bp(r);
    l = l(o !== void 0 ? o : a.custom, c, h);
  }
  if ((typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function")) {
    const [c, h] = Bp(r);
    l = l(o !== void 0 ? o : a.custom, c, h);
  }
  return l;
}
function wa(a, l, o) {
  const r = a.getProps();
  return tf(r, l, o !== void 0 ? o : r.custom, a);
}
const Cg = new Set(["width", "height", "top", "left", "right", "bottom", ...Si]),
  Up = 30,
  Kb = (a) => !isNaN(parseFloat(a));
class Qb {
  constructor(l, o = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var h;
        const c = he.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((h = this.events.change) == null || h.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = o.owner));
  }
  setCurrent(l) {
    ((this.current = l),
      (this.updatedAt = he.now()),
      this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = Kb(this.current)));
  }
  setPrevFrameValue(l = this.current) {
    ((this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new kc());
    const r = this.events[l].add(o);
    return l === "change"
      ? () => {
          (r(),
            zt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, o) {
    ((this.passiveEffect = l), (this.stopPassiveEffect = o));
  }
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(l, o = !0) {
    (this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(l));
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = he.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Up)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Up);
    return Jy(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = l(o)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var l, o;
    ((l = this.dependents) == null || l.clear(),
      (o = this.events.destroy) == null || o.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function xi(a, l) {
  return new Qb(a, l);
}
const Ec = (a) => Array.isArray(a);
function Jb(a, l, o) {
  a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, xi(o));
}
function Fb(a) {
  return Ec(a) ? a[a.length - 1] || 0 : a;
}
function Pb(a, l) {
  const o = wa(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...r };
  for (const d in h) {
    const p = Fb(h[d]);
    Jb(a, d, p);
  }
}
const ce = (a) => !!(a && a.getVelocity);
function Wb(a) {
  return !!(ce(a) && a.add);
}
function jc(a, l) {
  const o = a.getValue("willChange");
  if (Wb(o)) return o.add(l);
  if (!o && aa.WillChange) {
    const r = new aa.WillChange("auto");
    (a.addValue("willChange", r), r.add(l));
  }
}
function ef(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const $b = "framerAppearId",
  zg = "data-" + ef($b);
function Og(a) {
  return a.props[zg];
}
function Ib({ protectedKeys: a, needsAnimating: l }, o) {
  const r = a.hasOwnProperty(o) && l[o] !== !0;
  return ((l[o] = !1), r);
}
function Rg(a, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...p } = l;
  const v = a.getDefaultTransition();
  h = h ? wg(h, v) : v;
  const y = h == null ? void 0 : h.reduceMotion;
  r && (h = r);
  const x = [],
    b = c && a.animationState && a.animationState.getState()[c];
  for (const S in p) {
    const M = a.getValue(S, a.latestValues[S] ?? null),
      C = p[S];
    if (C === void 0 || (b && Ib(b, S))) continue;
    const H = { delay: o, ...$c(h || {}, S) },
      O = M.get();
    if (O !== void 0 && !M.isAnimating() && !Array.isArray(C) && C === O && !H.velocity) {
      zt.update(() => M.set(C));
      continue;
    }
    let B = !1;
    if (window.MotionHandoffAnimation) {
      const G = Og(a);
      if (G) {
        const Q = window.MotionHandoffAnimation(G, S, zt);
        Q !== null && ((H.startTime = Q), (B = !0));
      }
    }
    jc(a, S);
    const k = y ?? a.shouldReduceMotion;
    M.start(Ic(S, M, C, k && Cg.has(S) ? { type: !1 } : H, a, B));
    const q = M.animation;
    q && x.push(q);
  }
  if (d) {
    const S = () =>
      zt.update(() => {
        d && Pb(a, d);
      });
    x.length ? Promise.all(x).then(S) : S();
  }
  return x;
}
function Mc(a, l, o = {}) {
  var v;
  const r = wa(
    a,
    l,
    o.type === "exit" ? ((v = a.presenceContext) == null ? void 0 : v.custom) : void 0,
  );
  let { transition: c = a.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const h = r ? () => Promise.all(Rg(a, r, o)) : () => Promise.resolve(),
    d =
      a.variantChildren && a.variantChildren.size
        ? (y = 0) => {
            const { delayChildren: x = 0, staggerChildren: b, staggerDirection: S } = c;
            return t2(a, l, y, x, b, S, o);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [y, x] = p === "beforeChildren" ? [h, d] : [d, h];
    return y().then(() => x());
  } else return Promise.all([h(), d(o.delay)]);
}
function t2(a, l, o = 0, r = 0, c = 0, h = 1, d) {
  const p = [];
  for (const v of a.variantChildren)
    (v.notify("AnimationStart", l),
      p.push(
        Mc(v, l, {
          ...d,
          delay: o + (typeof r == "function" ? 0 : r) + Ng(a.variantChildren, v, r, c, h),
        }).then(() => v.notify("AnimationComplete", l)),
      ));
  return Promise.all(p);
}
function e2(a, l, o = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((h) => Mc(a, h, o));
    r = Promise.all(c);
  } else if (typeof l == "string") r = Mc(a, l, o);
  else {
    const c = typeof l == "function" ? wa(a, l, o.custom) : l;
    r = Promise.all(Rg(a, c, o));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const n2 = { test: (a) => a === "auto", parse: (a) => a },
  _g = (a) => (l) => l.test(a),
  Vg = [bi, $, on, ta, D1, N1, n2],
  Lp = (a) => Vg.find(_g(a));
function a2(a) {
  return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || Ky(a) : !0;
}
const i2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function l2(a) {
  const [l, o] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [r] = o.match(Kc) || [];
  if (!r) return a;
  const c = o.replace(r, "");
  let h = i2.has(l) ? 1 : 0;
  return (r !== o && (h *= 100), l + "(" + h + c + ")");
}
const s2 = /\b([a-z-]*)\(.*?\)/gu,
  Nc = {
    ...Ie,
    getAnimatableNone: (a) => {
      const l = a.match(s2);
      return l ? l.map(l2).join(" ") : a;
    },
  },
  Dc = {
    ...Ie,
    getAnimatableNone: (a) => {
      const l = Ie.parse(a);
      return Ie.createTransformer(a)(
        l.map((r) => (typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r)),
      );
    },
  },
  Hp = { ...bi, transform: Math.round },
  r2 = {
    rotate: ta,
    rotateX: ta,
    rotateY: ta,
    rotateZ: ta,
    scale: $s,
    scaleX: $s,
    scaleY: $s,
    scaleZ: $s,
    skew: ta,
    skewX: ta,
    skewY: ta,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: Nl,
    originX: jp,
    originY: jp,
    originZ: $,
  },
  nf = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    inset: $,
    insetBlock: $,
    insetBlockStart: $,
    insetBlockEnd: $,
    insetInline: $,
    insetInlineStart: $,
    insetInlineEnd: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    paddingBlock: $,
    paddingBlockStart: $,
    paddingBlockEnd: $,
    paddingInline: $,
    paddingInlineStart: $,
    paddingInlineEnd: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    marginBlock: $,
    marginBlockStart: $,
    marginBlockEnd: $,
    marginInline: $,
    marginInlineStart: $,
    marginInlineEnd: $,
    fontSize: $,
    backgroundPositionX: $,
    backgroundPositionY: $,
    ...r2,
    zIndex: Hp,
    fillOpacity: Nl,
    strokeOpacity: Nl,
    numOctaves: Hp,
  },
  o2 = {
    ...nf,
    color: Pt,
    backgroundColor: Pt,
    outlineColor: Pt,
    fill: Pt,
    stroke: Pt,
    borderColor: Pt,
    borderTopColor: Pt,
    borderRightColor: Pt,
    borderBottomColor: Pt,
    borderLeftColor: Pt,
    filter: Nc,
    WebkitFilter: Nc,
    mask: Dc,
    WebkitMask: Dc,
  },
  Bg = (a) => o2[a],
  u2 = new Set([Nc, Dc]);
function Ug(a, l) {
  let o = Bg(a);
  return (u2.has(o) || (o = Ie), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0);
}
const c2 = new Set(["auto", "none", "0"]);
function f2(a, l, o) {
  let r = 0,
    c;
  for (; r < a.length && !c; ) {
    const h = a[r];
    (typeof h == "string" && !c2.has(h) && vi(h).values.length && (c = a[r]), r++);
  }
  if (c && o) for (const h of l) a[h] = Ug(o, c);
}
class d2 extends Wc {
  constructor(l, o, r, c, h) {
    super(l, o, r, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let x = 0; x < l.length; x++) {
      let b = l[x];
      if (typeof b == "string" && ((b = b.trim()), Zc(b))) {
        const S = Dg(b, o.current);
        (S !== void 0 && (l[x] = S), x === l.length - 1 && (this.finalKeyframe = b));
      }
    }
    if ((this.resolveNoneKeyframes(), !Cg.has(r) || l.length !== 2)) return;
    const [c, h] = l,
      d = Lp(c),
      p = Lp(h),
      v = Ep(c),
      y = Ep(h);
    if (v !== y && na[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== p)
      if (Rp(d) && Rp(p))
        for (let x = 0; x < l.length; x++) {
          const b = l[x];
          typeof b == "string" && (l[x] = parseFloat(b));
        }
      else na[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      r = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || a2(l[c])) && r.push(c);
    r.length && f2(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = na[r](l.measureViewportBox(), window.getComputedStyle(l.current))),
      (o[0] = this.measuredOrigin));
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var p;
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const h = r.length - 1,
      d = r[h];
    ((r[h] = na[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([v, y]) => {
          l.getValue(v).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
function Lg(a, l, o) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let r = document;
    const c = (o == null ? void 0 : o[a]) ?? r.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((r) => r != null);
}
const Hg = (a, l) => (l && typeof a == "number" ? l.transform(a) : a);
function ir(a) {
  return Zy(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: af } = lg(queueMicrotask, !1),
  $e = { x: !1, y: !1 };
function qg() {
  return $e.x || $e.y;
}
function h2(a) {
  return a === "x" || a === "y"
    ? $e[a]
      ? null
      : (($e[a] = !0),
        () => {
          $e[a] = !1;
        })
    : $e.x || $e.y
      ? null
      : (($e.x = $e.y = !0),
        () => {
          $e.x = $e.y = !1;
        });
}
function Yg(a, l) {
  const o = Lg(a),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [o, c, () => r.abort()];
}
function m2(a) {
  return !(a.pointerType === "touch" || qg());
}
function p2(a, l, o = {}) {
  const [r, c, h] = Yg(a, o);
  return (
    r.forEach((d) => {
      let p = !1,
        v = !1,
        y;
      const x = () => {
          d.removeEventListener("pointerleave", C);
        },
        b = (O) => {
          (y && (y(O), (y = void 0)), x());
        },
        S = (O) => {
          ((p = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            v && ((v = !1), b(O)));
        },
        M = () => {
          ((p = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c));
        },
        C = (O) => {
          if (O.pointerType !== "touch") {
            if (p) {
              v = !0;
              return;
            }
            b(O);
          }
        },
        H = (O) => {
          if (!m2(O)) return;
          v = !1;
          const B = l(d, O);
          typeof B == "function" && ((y = B), d.addEventListener("pointerleave", C, c));
        };
      (d.addEventListener("pointerenter", H, c), d.addEventListener("pointerdown", M, c));
    }),
    h
  );
}
const kg = (a, l) => (l ? (a === l ? !0 : kg(a, l.parentElement)) : !1),
  lf = (a) =>
    a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1,
  y2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function g2(a) {
  return y2.has(a.tagName) || a.isContentEditable === !0;
}
const v2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function x2(a) {
  return v2.has(a.tagName) || a.isContentEditable === !0;
}
const lr = new WeakSet();
function qp(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Iu(a, l) {
  a.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const b2 = (a, l) => {
  const o = a.currentTarget;
  if (!o) return;
  const r = qp(() => {
    if (lr.has(o)) return;
    Iu(o, "down");
    const c = qp(() => {
        Iu(o, "up");
      }),
      h = () => Iu(o, "cancel");
    (o.addEventListener("keyup", c, l), o.addEventListener("blur", h, l));
  });
  (o.addEventListener("keydown", r, l),
    o.addEventListener("blur", () => o.removeEventListener("keydown", r), l));
};
function Yp(a) {
  return lf(a) && !qg();
}
const kp = new WeakSet();
function S2(a, l, o = {}) {
  const [r, c, h] = Yg(a, o),
    d = (p) => {
      const v = p.currentTarget;
      if (!Yp(p) || kp.has(p)) return;
      (lr.add(v), o.stopPropagation && kp.add(p));
      const y = l(v, p),
        x = (M, C) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", S),
            lr.has(v) && lr.delete(v),
            Yp(M) && typeof y == "function" && y(M, { success: C }));
        },
        b = (M) => {
          x(M, v === window || v === document || o.useGlobalTarget || kg(v, M.target));
        },
        S = (M) => {
          x(M, !1);
        };
      (window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", S, c));
    };
  return (
    r.forEach((p) => {
      ((o.useGlobalTarget ? window : p).addEventListener("pointerdown", d, c),
        ir(p) &&
          (p.addEventListener("focus", (y) => b2(y, c)),
          !g2(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0)));
    }),
    h
  );
}
function sf(a) {
  return Zy(a) && "ownerSVGElement" in a;
}
const sr = new WeakMap();
let ea;
const Gg = (a, l, o) => (r, c) =>
    c && c[0] ? c[0][a + "Size"] : sf(r) && "getBBox" in r ? r.getBBox()[l] : r[o],
  T2 = Gg("inline", "width", "offsetWidth"),
  A2 = Gg("block", "height", "offsetHeight");
function E2({ target: a, borderBoxSize: l }) {
  var o;
  (o = sr.get(a)) == null ||
    o.forEach((r) => {
      r(a, {
        get width() {
          return T2(a, l);
        },
        get height() {
          return A2(a, l);
        },
      });
    });
}
function j2(a) {
  a.forEach(E2);
}
function M2() {
  typeof ResizeObserver > "u" || (ea = new ResizeObserver(j2));
}
function N2(a, l) {
  ea || M2();
  const o = Lg(a);
  return (
    o.forEach((r) => {
      let c = sr.get(r);
      (c || ((c = new Set()), sr.set(r, c)), c.add(l), ea == null || ea.observe(r));
    }),
    () => {
      o.forEach((r) => {
        const c = sr.get(r);
        (c == null || c.delete(l), (c != null && c.size) || ea == null || ea.unobserve(r));
      });
    }
  );
}
const rr = new Set();
let yi;
function D2() {
  ((yi = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    rr.forEach((l) => l(a));
  }),
    window.addEventListener("resize", yi));
}
function w2(a) {
  return (
    rr.add(a),
    yi || D2(),
    () => {
      (rr.delete(a),
        !rr.size &&
          typeof yi == "function" &&
          (window.removeEventListener("resize", yi), (yi = void 0)));
    }
  );
}
function Gp(a, l) {
  return typeof a == "function" ? w2(a) : N2(a, l);
}
function C2(a) {
  return sf(a) && a.tagName === "svg";
}
const z2 = [...Vg, Pt, Ie],
  O2 = (a) => z2.find(_g(a)),
  Xp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  gi = () => ({ x: Xp(), y: Xp() }),
  Zp = () => ({ min: 0, max: 0 }),
  It = () => ({ x: Zp(), y: Zp() }),
  R2 = new WeakMap();
function Tr(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Dl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const rf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  of = ["initial", ...rf];
function Ar(a) {
  return Tr(a.animate) || of.some((l) => Dl(a[l]));
}
function Xg(a) {
  return !!(Ar(a) || a.variants);
}
function _2(a, l, o) {
  for (const r in l) {
    const c = l[r],
      h = o[r];
    if (ce(c)) a.addValue(r, c);
    else if (ce(h)) a.addValue(r, xi(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(r)) {
        const d = a.getValue(r);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = a.getStaticValue(r);
        a.addValue(r, xi(d !== void 0 ? d : c, { owner: a }));
      }
  }
  for (const r in o) l[r] === void 0 && a.removeValue(r);
  return l;
}
const wc = { current: null },
  Zg = { current: !1 },
  V2 = typeof window < "u";
function B2() {
  if (((Zg.current = !0), !!V2))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (wc.current = a.matches);
      (a.addEventListener("change", l), l());
    } else wc.current = !1;
}
const Kp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let yr = {};
function Kg(a) {
  yr = a;
}
function U2() {
  return yr;
}
class L2 {
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: o,
      presenceContext: r,
      reducedMotionConfig: c,
      skipAnimations: h,
      blockInitialAnimation: d,
      visualState: p,
    },
    v = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Wc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const M = he.now();
        this.renderScheduledAt < M &&
          ((this.renderScheduledAt = M), zt.render(this.render, !1, !0));
      }));
    const { latestValues: y, renderState: x } = p;
    ((this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = o.initial ? { ...y } : {}),
      (this.renderState = x),
      (this.parent = l),
      (this.props = o),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = h),
      (this.options = v),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = Ar(o)),
      (this.isVariantNode = Xg(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current)));
    const { willChange: b, ...S } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const M in S) {
      const C = S[M];
      y[M] !== void 0 && ce(C) && C.set(y[M]);
    }
  }
  mount(l) {
    var o, r;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((o = this.values.get(c)) == null || o.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = l),
      R2.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, h) => this.bindToMotionValue(h, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Zg.current || B2(), (this.shouldReduceMotion = wc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var l;
    (this.projection && this.projection.unmount(),
      ia(this.notifyUpdate),
      ia(this.render),
      this.valueSubscriptions.forEach((o) => o()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (l = this.parent) == null || l.removeChild(this));
    for (const o in this.events) this.events[o].clear();
    for (const o in this.features) {
      const r = this.features[o];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    (this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l));
  }
  removeChild(l) {
    (this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l));
  }
  bindToMotionValue(l, o) {
    if (
      (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
      o.accelerate && Mg.has(l) && this.current instanceof HTMLElement)
    ) {
      const { factory: d, keyframes: p, times: v, ease: y, duration: x } = o.accelerate,
        b = new Eg({
          element: this.current,
          name: l,
          keyframes: p,
          times: v,
          ease: y,
          duration: Re(x),
        }),
        S = d(b);
      this.valueSubscriptions.set(l, () => {
        (S(), b.cancel());
      });
      return;
    }
    const r = Ti.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (d) => {
      ((this.latestValues[l] = d),
        this.props.onUpdate && zt.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let h;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, o)),
      this.valueSubscriptions.set(l, () => {
        (c(), h && h(), o.owner && o.stop());
      }));
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in yr) {
      const o = yr[l];
      if (!o) continue;
      const { isEnabled: r, Feature: c } = o;
      if (
        (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : It();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  update(l, o) {
    ((l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let r = 0; r < Kp.length; r++) {
      const c = Kp[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        d = l[h];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    ((this.prevMotionValues = _2(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return (o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l));
  }
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, o),
      this.values.set(l, o),
      (this.latestValues[l] = o.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    (o && (o(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState));
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        o !== void 0 &&
        ((r = xi(o === null ? void 0 : o, { owner: this })), this.addValue(l, r)),
      r
    );
  }
  readValue(l, o) {
    let r =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Xy(r) || Ky(r))
          ? (r = parseFloat(r))
          : !O2(r) && Ie.test(o) && (r = Ug(l, o)),
        this.setBaseTarget(l, ce(r) ? r.get() : r)),
      ce(r) ? r.get() : r
    );
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  getBaseTarget(l) {
    var h;
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const d = tf(this.props, o, (h = this.presenceContext) == null ? void 0 : h.custom);
      d && (r = d[l]);
    }
    if (o && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ce(c)
      ? c
      : this.initialValues[l] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[l];
  }
  on(l, o) {
    return (this.events[l] || (this.events[l] = new kc()), this.events[l].add(o));
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    af.render(this.render);
  }
}
class Qg extends L2 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = d2));
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const r = l.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    (delete o[l], delete r[l]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ce(l) &&
      (this.childSubscription = l.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
class la {
  constructor(l) {
    ((this.isMounted = !1), (this.node = l));
  }
  update() {}
}
function Jg({ top: a, left: l, right: o, bottom: r }) {
  return { x: { min: l, max: o }, y: { min: a, max: r } };
}
function H2({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function q2(a, l) {
  if (!l) return a;
  const o = l({ x: a.left, y: a.top }),
    r = l({ x: a.right, y: a.bottom });
  return { top: o.y, left: o.x, bottom: r.y, right: r.x };
}
function tc(a) {
  return a === void 0 || a === 1;
}
function Cc({ scale: a, scaleX: l, scaleY: o }) {
  return !tc(a) || !tc(l) || !tc(o);
}
function ja(a) {
  return Cc(a) || Fg(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
}
function Fg(a) {
  return Qp(a.x) || Qp(a.y);
}
function Qp(a) {
  return a && a !== "0%";
}
function gr(a, l, o) {
  const r = a - o,
    c = l * r;
  return o + c;
}
function Jp(a, l, o, r, c) {
  return (c !== void 0 && (a = gr(a, c, r)), gr(a, o, r) + l);
}
function zc(a, l = 0, o = 1, r, c) {
  ((a.min = Jp(a.min, l, o, r, c)), (a.max = Jp(a.max, l, o, r, c)));
}
function Pg(a, { x: l, y: o }) {
  (zc(a.x, l.translate, l.scale, l.originPoint), zc(a.y, o.translate, o.scale, o.originPoint));
}
const Fp = 0.999999999999,
  Pp = 1.0000000000001;
function Y2(a, l, o, r = !1) {
  var p;
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let h, d;
  for (let v = 0; v < c; v++) {
    ((h = o[v]), (d = h.projectionDelta));
    const { visualElement: y } = h.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (r &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        (rn(a.x, -h.scroll.offset.x), rn(a.y, -h.scroll.offset.y)),
      d && ((l.x *= d.x.scale), (l.y *= d.y.scale), Pg(a, d)),
      r &&
        ja(h.latestValues) &&
        or(a, h.latestValues, (p = h.layout) == null ? void 0 : p.layoutBox));
  }
  (l.x < Pp && l.x > Fp && (l.x = 1), l.y < Pp && l.y > Fp && (l.y = 1));
}
function rn(a, l) {
  ((a.min += l), (a.max += l));
}
function Wp(a, l, o, r, c = 0.5) {
  const h = _t(a.min, a.max, c);
  zc(a, l, o, h, r);
}
function $p(a, l) {
  return typeof a == "string" ? (parseFloat(a) / 100) * (l.max - l.min) : a;
}
function or(a, l, o) {
  const r = o ?? a;
  (Wp(a.x, $p(l.x, r.x), l.scaleX, l.scale, l.originX),
    Wp(a.y, $p(l.y, r.y), l.scaleY, l.scale, l.originY));
}
function Wg(a, l) {
  return Jg(q2(a.getBoundingClientRect(), l));
}
function k2(a, l, o) {
  const r = Wg(a, o),
    { scroll: c } = l;
  return (c && (rn(r.x, c.offset.x), rn(r.y, c.offset.y)), r);
}
const G2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  X2 = Si.length;
function Z2(a, l, o) {
  let r = "",
    c = !0;
  for (let h = 0; h < X2; h++) {
    const d = Si[h],
      p = a[d];
    if (p === void 0) continue;
    let v = !0;
    if (typeof p == "number") v = p === (d.startsWith("scale") ? 1 : 0);
    else {
      const y = parseFloat(p);
      v = d.startsWith("scale") ? y === 1 : y === 0;
    }
    if (!v || o) {
      const y = Hg(p, nf[d]);
      if (!v) {
        c = !1;
        const x = G2[d] || d;
        r += `${x}(${y}) `;
      }
      o && (l[d] = y);
    }
  }
  return ((r = r.trim()), o ? (r = o(l, c ? "" : r)) : c && (r = "none"), r);
}
function uf(a, l, o) {
  const { style: r, vars: c, transformOrigin: h } = a;
  let d = !1,
    p = !1;
  for (const v in l) {
    const y = l[v];
    if (Ti.has(v)) {
      d = !0;
      continue;
    } else if (rg(v)) {
      c[v] = y;
      continue;
    } else {
      const x = Hg(y, nf[v]);
      v.startsWith("origin") ? ((p = !0), (h[v] = x)) : (r[v] = x);
    }
  }
  if (
    (l.transform ||
      (d || o ? (r.transform = Z2(l, a.transform, o)) : r.transform && (r.transform = "none")),
    p)
  ) {
    const { originX: v = "50%", originY: y = "50%", originZ: x = 0 } = h;
    r.transformOrigin = `${v} ${y} ${x}`;
  }
}
function $g(a, { style: l, vars: o }, r, c) {
  const h = a.style;
  let d;
  for (d in l) h[d] = l[d];
  c == null || c.applyProjectionStyles(h, r);
  for (d in o) h.setProperty(d, o[d]);
}
function Ip(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const vl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if ($.test(a)) a = parseFloat(a);
        else return a;
      const o = Ip(a, l.target.x),
        r = Ip(a, l.target.y);
      return `${o}% ${r}%`;
    },
  },
  K2 = {
    correct: (a, { treeScale: l, projectionDelta: o }) => {
      const r = a,
        c = Ie.parse(a);
      if (c.length > 5) return r;
      const h = Ie.createTransformer(a),
        d = typeof c[0] != "number" ? 1 : 0,
        p = o.x.scale * l.x,
        v = o.y.scale * l.y;
      ((c[0 + d] /= p), (c[1 + d] /= v));
      const y = _t(p, v, 0.5);
      return (
        typeof c[2 + d] == "number" && (c[2 + d] /= y),
        typeof c[3 + d] == "number" && (c[3 + d] /= y),
        h(c)
      );
    },
  },
  Oc = {
    borderRadius: {
      ...vl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: vl,
    borderTopRightRadius: vl,
    borderBottomLeftRadius: vl,
    borderBottomRightRadius: vl,
    boxShadow: K2,
  };
function Ig(a, { layout: l, layoutId: o }) {
  return (
    Ti.has(a) || a.startsWith("origin") || ((l || o !== void 0) && (!!Oc[a] || a === "opacity"))
  );
}
function cf(a, l, o) {
  var d;
  const r = a.style,
    c = l == null ? void 0 : l.style,
    h = {};
  if (!r) return h;
  for (const p in r)
    (ce(r[p]) ||
      (c && ce(c[p])) ||
      Ig(p, a) ||
      ((d = o == null ? void 0 : o.getValue(p)) == null ? void 0 : d.liveStyle) !== void 0) &&
      (h[p] = r[p]);
  return h;
}
function Q2(a) {
  return window.getComputedStyle(a);
}
class J2 extends Qg {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = $g));
  }
  readValueFromInstance(l, o) {
    var r;
    if (Ti.has(o)) return (r = this.projection) != null && r.isProjecting ? vc(o) : mb(l, o);
    {
      const c = Q2(l),
        h = (rg(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Wg(l, o);
  }
  build(l, o, r) {
    uf(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return cf(l, o, r);
  }
}
const F2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  P2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function W2(a, l, o = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? F2 : P2;
  ((a[h.offset] = `${-r}`), (a[h.array] = `${l} ${o}`));
}
const $2 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function t0(
  a,
  { attrX: l, attrY: o, attrScale: r, pathLength: c, pathSpacing: h = 1, pathOffset: d = 0, ...p },
  v,
  y,
  x,
) {
  if ((uf(a, p, y), v)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: b, style: S } = a;
  (b.transform && ((S.transform = b.transform), delete b.transform),
    (S.transform || b.transformOrigin) &&
      ((S.transformOrigin = b.transformOrigin ?? "50% 50%"), delete b.transformOrigin),
    S.transform &&
      ((S.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box"),
      delete b.transformBox));
  for (const M of $2) b[M] !== void 0 && ((S[M] = b[M]), delete b[M]);
  (l !== void 0 && (b.x = l),
    o !== void 0 && (b.y = o),
    r !== void 0 && (b.scale = r),
    c !== void 0 && W2(b, c, h, d, !1));
}
const e0 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  n0 = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function I2(a, l, o, r) {
  $g(a, l, void 0, r);
  for (const c in l.attrs) a.setAttribute(e0.has(c) ? c : ef(c), l.attrs[c]);
}
function a0(a, l, o) {
  const r = cf(a, l, o);
  for (const c in a)
    if (ce(a[c]) || ce(l[c])) {
      const h = Si.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[h] = a[c];
    }
  return r;
}
class tS extends Qg {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = It));
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (Ti.has(o)) {
      const r = Bg(o);
      return (r && r.default) || 0;
    }
    return ((o = e0.has(o) ? o : ef(o)), l.getAttribute(o));
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return a0(l, o, r);
  }
  build(l, o, r) {
    t0(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    I2(l, o, r, c);
  }
  mount(l) {
    ((this.isSVGTag = n0(l.tagName)), super.mount(l));
  }
}
const eS = of.length;
function i0(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const o = a.parent ? i0(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (o.initial = a.props.initial), o);
  }
  const l = {};
  for (let o = 0; o < eS; o++) {
    const r = of[o],
      c = a.props[r];
    (Dl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
function l0(a, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== a.length) return !1;
  for (let r = 0; r < o; r++) if (l[r] !== a[r]) return !1;
  return !0;
}
const nS = [...rf].reverse(),
  aS = rf.length;
function iS(a) {
  return (l) => Promise.all(l.map(({ animation: o, options: r }) => e2(a, o, r)));
}
function lS(a) {
  let l = iS(a),
    o = ty(),
    r = !0,
    c = !1;
  const h = (y) => (x, b) => {
    var M;
    const S = wa(
      a,
      b,
      y === "exit" ? ((M = a.presenceContext) == null ? void 0 : M.custom) : void 0,
    );
    if (S) {
      const { transition: C, transitionEnd: H, ...O } = S;
      x = { ...x, ...O, ...H };
    }
    return x;
  };
  function d(y) {
    l = y(a);
  }
  function p(y) {
    const { props: x } = a,
      b = i0(a.parent) || {},
      S = [],
      M = new Set();
    let C = {},
      H = 1 / 0;
    for (let B = 0; B < aS; B++) {
      const k = nS[B],
        q = o[k],
        G = x[k] !== void 0 ? x[k] : b[k],
        Q = Dl(G),
        at = k === y ? q.isActive : null;
      at === !1 && (H = B);
      let I = G === b[k] && G !== x[k] && Q;
      if (
        (I && (r || c) && a.manuallyAnimateOnMount && (I = !1),
        (q.protectedKeys = { ...C }),
        (!q.isActive && at === null) || (!G && !q.prevProp) || Tr(G) || typeof G == "boolean")
      )
        continue;
      if (k === "exit" && q.isActive && at !== !0) {
        q.prevResolvedValues && (C = { ...C, ...q.prevResolvedValues });
        continue;
      }
      const F = sS(q.prevProp, G);
      let st = F || (k === y && q.isActive && !I && Q) || (B > H && Q),
        et = !1;
      const ft = Array.isArray(G) ? G : [G];
      let bt = ft.reduce(h(k), {});
      at === !1 && (bt = {});
      const { prevResolvedValues: Zt = {} } = q,
        Bt = { ...Zt, ...bt },
        Ut = (J) => {
          ((st = !0), M.has(J) && ((et = !0), M.delete(J)), (q.needsAnimating[J] = !0));
          const lt = a.getValue(J);
          lt && (lt.liveStyle = !1);
        };
      for (const J in Bt) {
        const lt = bt[J],
          dt = Zt[J];
        if (C.hasOwnProperty(J)) continue;
        let A = !1;
        (Ec(lt) && Ec(dt) ? (A = !l0(lt, dt)) : (A = lt !== dt),
          A
            ? lt != null
              ? Ut(J)
              : M.add(J)
            : lt !== void 0 && M.has(J)
              ? Ut(J)
              : (q.protectedKeys[J] = !0));
      }
      ((q.prevProp = G),
        (q.prevResolvedValues = bt),
        q.isActive && (C = { ...C, ...bt }),
        (r || c) && a.blockInitialAnimation && (st = !1));
      const R = I && F;
      st &&
        (!R || et) &&
        S.push(
          ...ft.map((J) => {
            const lt = { type: k };
            if (typeof J == "string" && (r || c) && !R && a.manuallyAnimateOnMount && a.parent) {
              const { parent: dt } = a,
                A = wa(dt, J);
              if (dt.enteringChildren && A) {
                const { delayChildren: U } = A.transition || {};
                lt.delay = Ng(dt.enteringChildren, a, U);
              }
            }
            return { animation: J, options: lt };
          }),
        );
    }
    if (M.size) {
      const B = {};
      if (typeof x.initial != "boolean") {
        const k = wa(a, Array.isArray(x.initial) ? x.initial[0] : x.initial);
        k && k.transition && (B.transition = k.transition);
      }
      (M.forEach((k) => {
        const q = a.getBaseTarget(k),
          G = a.getValue(k);
        (G && (G.liveStyle = !0), (B[k] = q ?? null));
      }),
        S.push({ animation: B }));
    }
    let O = !!S.length;
    return (
      r && (x.initial === !1 || x.initial === x.animate) && !a.manuallyAnimateOnMount && (O = !1),
      (r = !1),
      (c = !1),
      O ? l(S) : Promise.resolve()
    );
  }
  function v(y, x) {
    var S;
    if (o[y].isActive === x) return Promise.resolve();
    ((S = a.variantChildren) == null ||
      S.forEach((M) => {
        var C;
        return (C = M.animationState) == null ? void 0 : C.setActive(y, x);
      }),
      (o[y].isActive = x));
    const b = p(y);
    for (const M in o) o[M].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: p,
    setActive: v,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      ((o = ty()), (c = !0));
    },
  };
}
function sS(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !l0(l, a) : !1;
}
function Ea(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ty() {
  return {
    animate: Ea(!0),
    whileInView: Ea(),
    whileHover: Ea(),
    whileTap: Ea(),
    whileDrag: Ea(),
    whileFocus: Ea(),
    exit: Ea(),
  };
}
function Rc(a, l) {
  ((a.min = l.min), (a.max = l.max));
}
function We(a, l) {
  (Rc(a.x, l.x), Rc(a.y, l.y));
}
function ey(a, l) {
  ((a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin));
}
const s0 = 1e-4,
  rS = 1 - s0,
  oS = 1 + s0,
  r0 = 0.01,
  uS = 0 - r0,
  cS = 0 + r0;
function me(a) {
  return a.max - a.min;
}
function fS(a, l, o) {
  return Math.abs(a - l) <= o;
}
function ny(a, l, o, r = 0.5) {
  ((a.origin = r),
    (a.originPoint = _t(l.min, l.max, a.origin)),
    (a.scale = me(o) / me(l)),
    (a.translate = _t(o.min, o.max, a.origin) - a.originPoint),
    ((a.scale >= rS && a.scale <= oS) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= uS && a.translate <= cS) || isNaN(a.translate)) && (a.translate = 0));
}
function El(a, l, o, r) {
  (ny(a.x, l.x, o.x, r ? r.originX : void 0), ny(a.y, l.y, o.y, r ? r.originY : void 0));
}
function ay(a, l, o, r = 0) {
  const c = r ? _t(o.min, o.max, r) : o.min;
  ((a.min = c + l.min), (a.max = a.min + me(l)));
}
function dS(a, l, o, r) {
  (ay(a.x, l.x, o.x, r == null ? void 0 : r.x), ay(a.y, l.y, o.y, r == null ? void 0 : r.y));
}
function iy(a, l, o, r = 0) {
  const c = r ? _t(o.min, o.max, r) : o.min;
  ((a.min = l.min - c), (a.max = a.min + me(l)));
}
function vr(a, l, o, r) {
  (iy(a.x, l.x, o.x, r == null ? void 0 : r.x), iy(a.y, l.y, o.y, r == null ? void 0 : r.y));
}
function ly(a, l, o, r, c) {
  return ((a -= l), (a = gr(a, 1 / o, r)), c !== void 0 && (a = gr(a, 1 / c, r)), a);
}
function hS(a, l = 0, o = 1, r = 0.5, c, h = a, d = a) {
  if (
    (on.test(l) && ((l = parseFloat(l)), (l = _t(d.min, d.max, l / 100) - d.min)),
    typeof l != "number")
  )
    return;
  let p = _t(h.min, h.max, r);
  (a === h && (p -= l), (a.min = ly(a.min, l, o, p, c)), (a.max = ly(a.max, l, o, p, c)));
}
function sy(a, l, [o, r, c], h, d) {
  hS(a, l[o], l[r], l[c], l.scale, h, d);
}
const mS = ["x", "scaleX", "originX"],
  pS = ["y", "scaleY", "originY"];
function ry(a, l, o, r) {
  (sy(a.x, l, mS, o ? o.x : void 0, r ? r.x : void 0),
    sy(a.y, l, pS, o ? o.y : void 0, r ? r.y : void 0));
}
function oy(a) {
  return a.translate === 0 && a.scale === 1;
}
function o0(a) {
  return oy(a.x) && oy(a.y);
}
function uy(a, l) {
  return a.min === l.min && a.max === l.max;
}
function yS(a, l) {
  return uy(a.x, l.x) && uy(a.y, l.y);
}
function cy(a, l) {
  return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max);
}
function u0(a, l) {
  return cy(a.x, l.x) && cy(a.y, l.y);
}
function fy(a) {
  return me(a.x) / me(a.y);
}
function dy(a, l) {
  return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint;
}
function sn(a) {
  return [a("x"), a("y")];
}
function gS(a, l, o) {
  let r = "";
  const c = a.x.translate / l.x,
    h = a.y.translate / l.y,
    d = (o == null ? void 0 : o.z) || 0;
  if (
    ((c || h || d) && (r = `translate3d(${c}px, ${h}px, ${d}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    o)
  ) {
    const { transformPerspective: y, rotate: x, rotateX: b, rotateY: S, skewX: M, skewY: C } = o;
    (y && (r = `perspective(${y}px) ${r}`),
      x && (r += `rotate(${x}deg) `),
      b && (r += `rotateX(${b}deg) `),
      S && (r += `rotateY(${S}deg) `),
      M && (r += `skewX(${M}deg) `),
      C && (r += `skewY(${C}deg) `));
  }
  const p = a.x.scale * l.x,
    v = a.y.scale * l.y;
  return ((p !== 1 || v !== 1) && (r += `scale(${p}, ${v})`), r || "none");
}
const c0 = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  vS = c0.length,
  hy = (a) => (typeof a == "string" ? parseFloat(a) : a),
  my = (a) => typeof a == "number" || $.test(a);
function xS(a, l, o, r, c, h) {
  c
    ? ((a.opacity = _t(0, o.opacity ?? 1, bS(r))), (a.opacityExit = _t(l.opacity ?? 1, 0, SS(r))))
    : h && (a.opacity = _t(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < vS; d++) {
    const p = c0[d];
    let v = py(l, p),
      y = py(o, p);
    if (v === void 0 && y === void 0) continue;
    (v || (v = 0),
      y || (y = 0),
      v === 0 || y === 0 || my(v) === my(y)
        ? ((a[p] = Math.max(_t(hy(v), hy(y), r), 0)), (on.test(y) || on.test(v)) && (a[p] += "%"))
        : (a[p] = y));
  }
  (l.rotate || o.rotate) && (a.rotate = _t(l.rotate || 0, o.rotate || 0, r));
}
function py(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const bS = f0(0, 0.5, eg),
  SS = f0(0.5, 0.95, Ke);
function f0(a, l, o) {
  return (r) => (r < a ? 0 : r > l ? 1 : o(Ml(a, l, r)));
}
function TS(a, l, o) {
  const r = ce(a) ? a : xi(a);
  return (r.start(Ic("", r, l, o)), r.animation);
}
function wl(a, l, o, r = { passive: !0 }) {
  return (a.addEventListener(l, o, r), () => a.removeEventListener(l, o));
}
const AS = (a, l) => a.depth - l.depth;
class ES {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(l) {
    (qc(this.children, l), (this.isDirty = !0));
  }
  remove(l) {
    (fr(this.children, l), (this.isDirty = !0));
  }
  forEach(l) {
    (this.isDirty && this.children.sort(AS), (this.isDirty = !1), this.children.forEach(l));
  }
}
function jS(a, l) {
  const o = he.now(),
    r = ({ timestamp: c }) => {
      const h = c - o;
      h >= l && (ia(r), a(h - l));
    };
  return (zt.setup(r, !0), () => ia(r));
}
function ur(a) {
  return ce(a) ? a.get() : a;
}
class MS {
  constructor() {
    this.members = [];
  }
  add(l) {
    qc(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead) continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (fr(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if ((fr(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead)) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    var o;
    for (let r = this.members.indexOf(l) - 1; r >= 0; r--) {
      const c = this.members[r];
      if (c.isPresent !== !1 && ((o = c.instance) == null ? void 0 : o.isConnected) !== !1)
        return (this.promote(c), !0);
    }
    return !1;
  }
  promote(l, o) {
    var c;
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      (r.updateSnapshot(), l.scheduleRender());
      const { layoutDependency: h } = r.options,
        { layoutDependency: d } = l.options;
      ((h === void 0 || h !== d) &&
        ((l.resumeFrom = r),
        o && (r.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)),
        l.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var o, r, c, h, d;
      ((r = (o = l.options).onExitComplete) == null || r.call(o),
        (d = (c = l.resumingFrom) == null ? void 0 : (h = c.options).onExitComplete) == null ||
          d.call(h));
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const cr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  ec = ["", "X", "Y", "Z"],
  NS = 1e3;
let DS = 0;
function nc(a, l, o, r) {
  const { latestValues: c } = l;
  c[a] && ((o[a] = c[a]), l.setStaticValue(a, 0), r && (r[a] = 0));
}
function d0(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const o = Og(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", zt, !(c || h));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && d0(r);
}
function h0({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(d = {}, p = l == null ? void 0 : l()) {
      ((this.id = DS++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(zS),
            this.nodes.forEach(US),
            this.nodes.forEach(LS),
            this.nodes.forEach(OS));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0));
      for (let v = 0; v < this.path.length; v++) this.path[v].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ES());
    }
    addEventListener(d, p) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new kc()),
        this.eventHandlers.get(d).add(p)
      );
    }
    notifyListeners(d, ...p) {
      const v = this.eventHandlers.get(d);
      v && v.notify(...p);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d) {
      if (this.instance) return;
      ((this.isSVG = sf(d) && !C2(d)), (this.instance = d));
      const { layoutId: p, layout: v, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (v || p) && (this.isLayoutDirty = !0),
        a)
      ) {
        let x,
          b = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        (zt.read(() => {
          b = window.innerWidth;
        }),
          a(d, () => {
            const M = window.innerWidth;
            M !== b &&
              ((b = M),
              (this.root.updateBlockedByResize = !0),
              x && x(),
              (x = jS(S, 250)),
              cr.hasAnimatedSinceResize &&
                ((cr.hasAnimatedSinceResize = !1), this.nodes.forEach(vy)));
          }));
      }
      (p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          y &&
          (p || v) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: x, hasLayoutChanged: b, hasRelativeLayoutChanged: S, layout: M }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const C = this.options.transition || y.getDefaultTransition() || GS,
                { onLayoutAnimationStart: H, onLayoutAnimationComplete: O } = y.getProps(),
                B = !this.targetLayout || !u0(this.targetLayout, M),
                k = !b && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                k ||
                (b && (B || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const q = { ...$c(C, "layout"), onPlay: H, onComplete: O };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((q.delay = 0), (q.type = !1)),
                  this.startAnimation(q),
                  this.setAnimationOrigin(x, k));
              } else
                (b || vy(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = M;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const d = this.getStack();
      (d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ia(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(HS), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && d0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const b = this.path[x];
        ((b.shouldResetTransform = !0),
          (typeof b.latestValues.x == "string" || typeof b.latestValues.y == "string") &&
            (b.isLayoutDirty = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1));
      }
      const { layoutId: p, layout: v } = this.options;
      if (p === void 0 && !v) return;
      const y = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const v = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          v && this.nodes.forEach(_S),
          this.nodes.forEach(yy));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(gy);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(VS),
            this.nodes.forEach(BS),
            this.nodes.forEach(wS),
            this.nodes.forEach(CS))
          : this.nodes.forEach(gy),
        this.clearAllSnapshots());
      const p = he.now();
      ((ue.delta = un(0, 1e3 / 60, p - ue.timestamp)),
        (ue.timestamp = p),
        (ue.isProcessing = !0),
        Qu.update.process(ue),
        Qu.preRender.process(ue),
        Qu.render.process(ue),
        (ue.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), af.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(RS), this.sharedNodes.forEach(qS));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), zt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      zt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !me(this.snapshot.measuredBox.x) &&
          !me(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let v = 0; v < this.path.length; v++) this.path[v].updateScroll();
      const d = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = It()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: p } = this.options;
      p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (p = !1),
        p && this.instance)
      ) {
        const v = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: v,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : v,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !o0(this.projectionDelta),
        v = this.getTransformTemplate(),
        y = v ? v(this.latestValues, "") : void 0,
        x = y !== this.prevTransformTemplateValue;
      d &&
        this.instance &&
        (p || ja(this.latestValues) || x) &&
        (c(this.instance, y), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(d = !0) {
      const p = this.measurePageBox();
      let v = this.removeElementScroll(p);
      return (
        d && (v = this.removeTransform(v)),
        XS(v),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: v,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var y;
      const { visualElement: d } = this.options;
      if (!d) return It();
      const p = d.measureViewportBox();
      if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(ZS))) {
        const { scroll: x } = this.root;
        x && (rn(p.x, x.offset.x), rn(p.y, x.offset.y));
      }
      return p;
    }
    removeElementScroll(d) {
      var v;
      const p = It();
      if ((We(p, d), (v = this.scroll) != null && v.wasRoot)) return p;
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y],
          { scroll: b, options: S } = x;
        x !== this.root &&
          b &&
          S.layoutScroll &&
          (b.wasRoot && We(p, d), rn(p.x, b.offset.x), rn(p.y, b.offset.y));
      }
      return p;
    }
    applyTransform(d, p = !1, v) {
      var x, b;
      const y = v || It();
      We(y, d);
      for (let S = 0; S < this.path.length; S++) {
        const M = this.path[S];
        (!p &&
          M.options.layoutScroll &&
          M.scroll &&
          M !== M.root &&
          (rn(y.x, -M.scroll.offset.x), rn(y.y, -M.scroll.offset.y)),
          ja(M.latestValues) &&
            or(y, M.latestValues, (x = M.layout) == null ? void 0 : x.layoutBox));
      }
      return (
        ja(this.latestValues) &&
          or(y, this.latestValues, (b = this.layout) == null ? void 0 : b.layoutBox),
        y
      );
    }
    removeTransform(d) {
      var v;
      const p = It();
      We(p, d);
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y];
        if (!ja(x.latestValues)) continue;
        let b;
        (x.instance &&
          (Cc(x.latestValues) && x.updateSnapshot(), (b = It()), We(b, x.measurePageBox())),
          ry(p, x.latestValues, (v = x.snapshot) == null ? void 0 : v.layoutBox, b));
      }
      return (ja(this.latestValues) && ry(p, this.latestValues), p);
    }
    setTargetDelta(d) {
      ((this.targetDelta = d), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      var M;
      const p = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty));
      const v = !!this.resumingFrom || this !== p;
      if (
        !(
          d ||
          (v && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((M = this.parent) != null && M.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: x, layoutId: b } = this.options;
      if (!this.layout || !(x || b)) return;
      this.resolvedRelativeTargetAt = ue.timestamp;
      const S = this.getClosestProjectingParent();
      (S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && S && S.layout
            ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = It()), (this.targetWithTransforms = It())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              dS(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : We(this.target, this.layout.layoutBox),
                Pg(this.target, this.targetDelta))
              : We(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Cc(this.parent.latestValues) || Fg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(d, p, v) {
      ((this.relativeParent = d),
        (this.linkedParentVersion = d.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = It()),
        (this.relativeTargetOrigin = It()),
        vr(this.relativeTargetOrigin, p, v, this.options.layoutAnchor || void 0),
        We(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var C;
      const d = this.getLead(),
        p = !!this.resumingFrom || this !== d;
      let v = !0;
      if (
        ((this.isProjectionDirty || ((C = this.parent) != null && C.isProjectionDirty)) && (v = !1),
        p && (this.isSharedProjectionDirty || this.isTransformDirty) && (v = !1),
        this.resolvedRelativeTargetAt === ue.timestamp && (v = !1),
        v)
      )
        return;
      const { layout: y, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || x))
      )
        return;
      We(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        S = this.treeScale.y;
      (Y2(this.layoutCorrected, this.treeScale, this.path, p),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = It())));
      const { target: M } = d;
      if (!M) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ey(this.prevProjectionDelta.x, this.projectionDelta.x),
          ey(this.prevProjectionDelta.y, this.projectionDelta.y)),
        El(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== S ||
          !dy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !dy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", M)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var p;
      if (((p = this.options.visualElement) == null || p.scheduleRender(), d)) {
        const v = this.getStack();
        v && v.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = gi()),
        (this.projectionDelta = gi()),
        (this.projectionDeltaWithTransform = gi()));
    }
    setAnimationOrigin(d, p = !1) {
      const v = this.snapshot,
        y = v ? v.latestValues : {},
        x = { ...this.latestValues },
        b = gi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const S = It(),
        M = v ? v.source : void 0,
        C = this.layout ? this.layout.source : void 0,
        H = M !== C,
        O = this.getStack(),
        B = !O || O.members.length <= 1,
        k = !!(H && !B && this.options.crossfade === !0 && !this.path.some(kS));
      this.animationProgress = 0;
      let q;
      ((this.mixTargetDelta = (G) => {
        const Q = G / 1e3;
        (xy(b.x, d.x, Q),
          xy(b.y, d.y, Q),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (vr(
              S,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            YS(this.relativeTarget, this.relativeTargetOrigin, S, Q),
            q && yS(this.relativeTarget, q) && (this.isProjectionDirty = !1),
            q || (q = It()),
            We(q, this.relativeTarget)),
          H && ((this.animationValues = x), xS(x, y, this.latestValues, Q, k, B)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Q));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(d) {
      var p, v, y;
      (this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (y = (v = this.resumingFrom) == null ? void 0 : v.currentAnimation) == null || y.stop(),
        this.pendingAnimation && (ia(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = zt.update(() => {
          ((cr.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = xi(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = TS(this.motionValue, [0, 1e3], {
              ...d,
              velocity: 0,
              isSync: !0,
              onUpdate: (x) => {
                (this.mixTargetDelta(x), d.onUpdate && d.onUpdate(x));
              },
              onStop: () => {},
              onComplete: () => {
                (d.onComplete && d.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      (d && d.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(NS), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let { targetWithTransforms: p, target: v, layout: y, latestValues: x } = d;
      if (!(!p || !v || !y)) {
        if (
          this !== d &&
          this.layout &&
          y &&
          m0(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          v = this.target || It();
          const b = me(this.layout.layoutBox.x);
          ((v.x.min = d.target.x.min), (v.x.max = v.x.min + b));
          const S = me(this.layout.layoutBox.y);
          ((v.y.min = d.target.y.min), (v.y.max = v.y.min + S));
        }
        (We(p, v), or(p, x), El(this.projectionDeltaWithTransform, this.layoutCorrected, p, x));
      }
    }
    registerSharedNode(d, p) {
      (this.sharedNodes.has(d) || this.sharedNodes.set(d, new MS()),
        this.sharedNodes.get(d).add(p));
      const y = p.options.initialPromotionConfig;
      p.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(p) : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var p;
      const { layoutId: d } = this.options;
      return d ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this;
    }
    getPrevLead() {
      var p;
      const { layoutId: d } = this.options;
      return d ? ((p = this.getStack()) == null ? void 0 : p.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: p, preserveFollowOpacity: v } = {}) {
      const y = this.getStack();
      (y && y.promote(this, v),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p }));
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let p = !1;
      const { latestValues: v } = d;
      if (
        ((v.z || v.rotate || v.rotateX || v.rotateY || v.rotateZ || v.skewX || v.skewY) && (p = !0),
        !p)
      )
        return;
      const y = {};
      v.z && nc("z", d, y, this.animationValues);
      for (let x = 0; x < ec.length; x++)
        (nc(`rotate${ec[x]}`, d, y, this.animationValues),
          nc(`skew${ec[x]}`, d, y, this.animationValues));
      d.render();
      for (const x in y)
        (d.setStaticValue(x, y[x]), this.animationValues && (this.animationValues[x] = y[x]));
      d.scheduleRender();
    }
    applyProjectionStyles(d, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const v = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (d.visibility = ""),
          (d.opacity = ""),
          (d.pointerEvents = ur(p == null ? void 0 : p.pointerEvents) || ""),
          (d.transform = v ? v(this.latestValues, "") : "none"));
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        (this.options.layoutId &&
          ((d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (d.pointerEvents = ur(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !ja(this.latestValues) &&
            ((d.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      d.visibility = "";
      const x = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let b = gS(this.projectionDeltaWithTransform, this.treeScale, x);
      (v && (b = v(x, b)), (d.transform = b));
      const { x: S, y: M } = this.projectionDelta;
      ((d.transformOrigin = `${S.origin * 100}% ${M.origin * 100}% 0`),
        y.animationValues
          ? (d.opacity =
              y === this
                ? (x.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : x.opacityExit)
          : (d.opacity =
              y === this
                ? x.opacity !== void 0
                  ? x.opacity
                  : ""
                : x.opacityExit !== void 0
                  ? x.opacityExit
                  : 0));
      for (const C in Oc) {
        if (x[C] === void 0) continue;
        const { correct: H, applyTo: O, isCSSVariable: B } = Oc[C],
          k = b === "none" ? x[C] : H(x[C], y);
        if (O) {
          const q = O.length;
          for (let G = 0; G < q; G++) d[O[G]] = k;
        } else B ? (this.options.visualElement.renderState.vars[C] = k) : (d[C] = k);
      }
      this.options.layoutId &&
        (d.pointerEvents = y === this ? ur(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((d) => {
        var p;
        return (p = d.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(yy),
        this.root.sharedNodes.clear());
    }
  };
}
function wS(a) {
  a.updateLayout();
}
function CS(a) {
  var o;
  const l = ((o = a.resumeFrom) == null ? void 0 : o.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = a.layout,
      { animationType: h } = a.options,
      d = l.source !== a.layout.source;
    if (h === "size")
      sn((b) => {
        const S = d ? l.measuredBox[b] : l.layoutBox[b],
          M = me(S);
        ((S.min = r[b].min), (S.max = S.min + M));
      });
    else if (h === "x" || h === "y") {
      const b = h === "x" ? "y" : "x";
      Rc(d ? l.measuredBox[b] : l.layoutBox[b], r[b]);
    } else
      m0(h, l.layoutBox, r) &&
        sn((b) => {
          const S = d ? l.measuredBox[b] : l.layoutBox[b],
            M = me(r[b]);
          ((S.max = S.min + M),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[b].max = a.relativeTarget[b].min + M)));
        });
    const p = gi();
    El(p, r, l.layoutBox);
    const v = gi();
    d ? El(v, a.applyTransform(c, !0), l.measuredBox) : El(v, r, l.layoutBox);
    const y = !o0(p);
    let x = !1;
    if (!a.resumeFrom) {
      const b = a.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: S, layout: M } = b;
        if (S && M) {
          const C = a.options.layoutAnchor || void 0,
            H = It();
          vr(H, l.layoutBox, S.layoutBox, C);
          const O = It();
          (vr(O, r, M.layoutBox, C),
            u0(H, O) || (x = !0),
            b.options.layoutRoot &&
              ((a.relativeTarget = O), (a.relativeTargetOrigin = H), (a.relativeParent = b)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: v,
      layoutDelta: p,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: x,
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function zS(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function OS(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function RS(a) {
  a.clearSnapshot();
}
function yy(a) {
  a.clearMeasurements();
}
function _S(a) {
  ((a.isLayoutDirty = !0), a.updateLayout());
}
function gy(a) {
  a.isLayoutDirty = !1;
}
function VS(a) {
  a.isAnimationBlocked &&
    a.layout &&
    !a.isLayoutDirty &&
    ((a.snapshot = a.layout), (a.isLayoutDirty = !0));
}
function BS(a) {
  const { visualElement: l } = a.options;
  (l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform());
}
function vy(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function US(a) {
  a.resolveTargetDelta();
}
function LS(a) {
  a.calcProjection();
}
function HS(a) {
  a.resetSkewAndRotation();
}
function qS(a) {
  a.removeLeadSnapshot();
}
function xy(a, l, o) {
  ((a.translate = _t(l.translate, 0, o)),
    (a.scale = _t(l.scale, 1, o)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint));
}
function by(a, l, o, r) {
  ((a.min = _t(l.min, o.min, r)), (a.max = _t(l.max, o.max, r)));
}
function YS(a, l, o, r) {
  (by(a.x, l.x, o.x, r), by(a.y, l.y, o.y, r));
}
function kS(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const GS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Sy = (a) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a),
  Ty = Sy("applewebkit/") && !Sy("chrome/") ? Math.round : Ke;
function Ay(a) {
  ((a.min = Ty(a.min)), (a.max = Ty(a.max)));
}
function XS(a) {
  (Ay(a.x), Ay(a.y));
}
function m0(a, l, o) {
  return a === "position" || (a === "preserve-aspect" && !fS(fy(l), fy(o), 0.2));
}
function ZS(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const KS = h0({
    attachResizeListener: (a, l) => wl(a, "resize", l),
    measureScroll: () => {
      var a, l;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((a = document.body) == null ? void 0 : a.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((l = document.body) == null ? void 0 : l.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  ac = { current: void 0 },
  p0 = h0({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!ac.current) {
        const a = new KS({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (ac.current = a));
      }
      return ac.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  ff = Y.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function Ey(a, l) {
  if (typeof a == "function") return a(l);
  a != null && (a.current = l);
}
function QS(...a) {
  return (l) => {
    let o = !1;
    const r = a.map((c) => {
      const h = Ey(c, l);
      return (!o && typeof h == "function" && (o = !0), h);
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const h = r[c];
          typeof h == "function" ? h() : Ey(a[c], null);
        }
      };
  };
}
function JS(...a) {
  return Y.useCallback(QS(...a), a);
}
class FS extends Y.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.childRef.current;
    if (ir(o) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent,
        c = (ir(r) && r.offsetWidth) || 0,
        h = (ir(r) && r.offsetHeight) || 0,
        d = getComputedStyle(o),
        p = this.props.sizeRef.current;
      ((p.height = parseFloat(d.height)),
        (p.width = parseFloat(d.width)),
        (p.top = o.offsetTop),
        (p.left = o.offsetLeft),
        (p.right = c - p.width - p.left),
        (p.bottom = h - p.height - p.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function PS({ children: a, isPresent: l, anchorX: o, anchorY: r, root: c, pop: h }) {
  var S;
  const d = Y.useId(),
    p = Y.useRef(null),
    v = Y.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: y } = Y.useContext(ff),
    x = ((S = a.props) == null ? void 0 : S.ref) ?? (a == null ? void 0 : a.ref),
    b = JS(p, x);
  return (
    Y.useInsertionEffect(() => {
      const { width: M, height: C, top: H, left: O, right: B, bottom: k } = v.current;
      if (l || h === !1 || !p.current || !M || !C) return;
      const q = o === "left" ? `left: ${O}` : `right: ${B}`,
        G = r === "bottom" ? `bottom: ${k}` : `top: ${H}`;
      p.current.dataset.motionPopId = d;
      const Q = document.createElement("style");
      y && (Q.nonce = y);
      const at = c ?? document.head;
      return (
        at.appendChild(Q),
        Q.sheet &&
          Q.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${M}px !important;
            height: ${C}px !important;
            ${q}px !important;
            ${G}px !important;
          }
        `),
        () => {
          var I;
          ((I = p.current) == null || I.removeAttribute("data-motion-pop-id"),
            at.contains(Q) && at.removeChild(Q));
        }
      );
    }, [l]),
    m.jsx(FS, {
      isPresent: l,
      childRef: p,
      sizeRef: v,
      pop: h,
      children: h === !1 ? a : Y.cloneElement(a, { ref: b }),
    })
  );
}
const WS = ({
  children: a,
  initial: l,
  isPresent: o,
  onExitComplete: r,
  custom: c,
  presenceAffectsLayout: h,
  mode: d,
  anchorX: p,
  anchorY: v,
  root: y,
}) => {
  const x = Hc($S),
    b = Y.useId();
  let S = !0,
    M = Y.useMemo(
      () => (
        (S = !1),
        {
          id: b,
          initial: l,
          isPresent: o,
          custom: c,
          onExitComplete: (C) => {
            x.set(C, !0);
            for (const H of x.values()) if (!H) return;
            r && r();
          },
          register: (C) => (x.set(C, !1), () => x.delete(C)),
        }
      ),
      [o, x, r],
    );
  return (
    h && S && (M = { ...M }),
    Y.useMemo(() => {
      x.forEach((C, H) => x.set(H, !1));
    }, [o]),
    Y.useEffect(() => {
      !o && !x.size && r && r();
    }, [o]),
    (a = m.jsx(PS, {
      pop: d === "popLayout",
      isPresent: o,
      anchorX: p,
      anchorY: v,
      root: y,
      children: a,
    })),
    m.jsx(br.Provider, { value: M, children: a })
  );
};
function $S() {
  return new Map();
}
function y0(a = !0) {
  const l = Y.useContext(br);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l,
    h = Y.useId();
  Y.useEffect(() => {
    if (a) return c(h);
  }, [a]);
  const d = Y.useCallback(() => a && r && r(h), [h, r, a]);
  return !o && r ? [!1, d] : [!0];
}
const Is = (a) => a.key || "";
function jy(a) {
  const l = [];
  return (
    Y.Children.forEach(a, (o) => {
      Y.isValidElement(o) && l.push(o);
    }),
    l
  );
}
const ic = ({
    children: a,
    custom: l,
    initial: o = !0,
    onExitComplete: r,
    presenceAffectsLayout: c = !0,
    mode: h = "sync",
    propagate: d = !1,
    anchorX: p = "left",
    anchorY: v = "top",
    root: y,
  }) => {
    const [x, b] = y0(d),
      S = Y.useMemo(() => jy(a), [a]),
      M = d && !x ? [] : S.map(Is),
      C = Y.useRef(!0),
      H = Y.useRef(S),
      O = Hc(() => new Map()),
      B = Y.useRef(new Set()),
      [k, q] = Y.useState(S),
      [G, Q] = Y.useState(S);
    Gy(() => {
      ((C.current = !1), (H.current = S));
      for (let F = 0; F < G.length; F++) {
        const st = Is(G[F]);
        M.includes(st) ? (O.delete(st), B.current.delete(st)) : O.get(st) !== !0 && O.set(st, !1);
      }
    }, [G, M.length, M.join("-")]);
    const at = [];
    if (S !== k) {
      let F = [...S];
      for (let st = 0; st < G.length; st++) {
        const et = G[st],
          ft = Is(et);
        M.includes(ft) || (F.splice(st, 0, et), at.push(et));
      }
      return (h === "wait" && at.length && (F = at), Q(jy(F)), q(S), null);
    }
    const { forceRender: I } = Y.useContext(Lc);
    return m.jsx(m.Fragment, {
      children: G.map((F) => {
        const st = Is(F),
          et = d && !x ? !1 : S === G || M.includes(st),
          ft = () => {
            if (B.current.has(st)) return;
            if (O.has(st)) (B.current.add(st), O.set(st, !0));
            else return;
            let bt = !0;
            (O.forEach((Zt) => {
              Zt || (bt = !1);
            }),
              bt && (I == null || I(), Q(H.current), d && (b == null || b()), r && r()));
          };
        return m.jsx(
          WS,
          {
            isPresent: et,
            initial: !C.current || o ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: h,
            root: y,
            onExitComplete: et ? void 0 : ft,
            anchorX: p,
            anchorY: v,
            children: F,
          },
          st,
        );
      }),
    });
  },
  g0 = Y.createContext({ strict: !1 }),
  My = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Ny = !1;
function IS() {
  if (Ny) return;
  const a = {};
  for (const l in My) a[l] = { isEnabled: (o) => My[l].some((r) => !!o[r]) };
  (Kg(a), (Ny = !0));
}
function v0() {
  return (IS(), U2());
}
function tT(a) {
  const l = v0();
  for (const o in a) l[o] = { ...l[o], ...a[o] };
  Kg(l);
}
const eT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function xr(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    eT.has(a)
  );
}
let x0 = (a) => !xr(a);
function nT(a) {
  typeof a == "function" && (x0 = (l) => (l.startsWith("on") ? !xr(l) : a(l)));
}
try {
  nT(require("@emotion/is-prop-valid").default);
} catch {}
function aT(a, l, o) {
  const r = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ce(a[c]) ||
      ((x0(c) ||
        (o === !0 && xr(c)) ||
        (!l && !xr(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (r[c] = a[c]));
  return r;
}
const Er = Y.createContext({});
function iT(a, l) {
  if (Ar(a)) {
    const { initial: o, animate: r } = a;
    return {
      initial: o === !1 || Dl(o) ? o : void 0,
      animate: Dl(r) ? r : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function lT(a) {
  const { initial: l, animate: o } = iT(a, Y.useContext(Er));
  return Y.useMemo(() => ({ initial: l, animate: o }), [Dy(l), Dy(o)]);
}
function Dy(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const df = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function b0(a, l, o) {
  for (const r in l) !ce(l[r]) && !Ig(r, o) && (a[r] = l[r]);
}
function sT({ transformTemplate: a }, l) {
  return Y.useMemo(() => {
    const o = df();
    return (uf(o, l, a), Object.assign({}, o.vars, o.style));
  }, [l]);
}
function rT(a, l) {
  const o = a.style || {},
    r = {};
  return (b0(r, o, a), Object.assign(r, sT(a, l)), r);
}
function oT(a, l) {
  const o = {},
    r = rT(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((o.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (o.tabIndex = 0),
    (o.style = r),
    o
  );
}
const S0 = () => ({ ...df(), attrs: {} });
function uT(a, l, o, r) {
  const c = Y.useMemo(() => {
    const h = S0();
    return (t0(h, l, n0(r), a.transformTemplate, a.style), { ...h.attrs, style: { ...h.style } });
  }, [l]);
  if (a.style) {
    const h = {};
    (b0(h, a.style, a), (c.style = { ...h, ...c.style }));
  }
  return c;
}
const cT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function hf(a) {
  return typeof a != "string" || a.includes("-") ? !1 : !!(cT.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function fT(a, l, o, { latestValues: r }, c, h = !1, d) {
  const v = ((d ?? hf(a)) ? uT : oT)(l, r, c, a),
    y = aT(l, typeof a == "string", h),
    x = a !== Y.Fragment ? { ...y, ...v, ref: o } : {},
    { children: b } = l,
    S = Y.useMemo(() => (ce(b) ? b.get() : b), [b]);
  return Y.createElement(a, { ...x, children: S });
}
function dT({ scrapeMotionValuesFromProps: a, createRenderState: l }, o, r, c) {
  return { latestValues: hT(o, r, c, a), renderState: l() };
}
function hT(a, l, o, r) {
  const c = {},
    h = r(a, {});
  for (const S in h) c[S] = ur(h[S]);
  let { initial: d, animate: p } = a;
  const v = Ar(a),
    y = Xg(a);
  l &&
    y &&
    !v &&
    a.inherit !== !1 &&
    (d === void 0 && (d = l.initial), p === void 0 && (p = l.animate));
  let x = o ? o.initial === !1 : !1;
  x = x || d === !1;
  const b = x ? p : d;
  if (b && typeof b != "boolean" && !Tr(b)) {
    const S = Array.isArray(b) ? b : [b];
    for (let M = 0; M < S.length; M++) {
      const C = tf(a, S[M]);
      if (C) {
        const { transitionEnd: H, transition: O, ...B } = C;
        for (const k in B) {
          let q = B[k];
          if (Array.isArray(q)) {
            const G = x ? q.length - 1 : 0;
            q = q[G];
          }
          q !== null && (c[k] = q);
        }
        for (const k in H) c[k] = H[k];
      }
    }
  }
  return c;
}
const T0 = (a) => (l, o) => {
    const r = Y.useContext(Er),
      c = Y.useContext(br),
      h = () => dT(a, l, r, c);
    return o ? h() : Hc(h);
  },
  mT = T0({ scrapeMotionValuesFromProps: cf, createRenderState: df }),
  pT = T0({ scrapeMotionValuesFromProps: a0, createRenderState: S0 }),
  yT = Symbol.for("motionComponentSymbol");
function gT(a, l, o) {
  const r = Y.useRef(o);
  Y.useInsertionEffect(() => {
    r.current = o;
  });
  const c = Y.useRef(null);
  return Y.useCallback(
    (h) => {
      var p;
      h && ((p = a.onMount) == null || p.call(a, h));
      const d = r.current;
      if (typeof d == "function")
        if (h) {
          const v = d(h);
          typeof v == "function" && (c.current = v);
        } else c.current ? (c.current(), (c.current = null)) : d(h);
      else d && (d.current = h);
      l && (h ? l.mount(h) : l.unmount());
    },
    [l],
  );
}
const A0 = Y.createContext({});
function mi(a) {
  return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current");
}
function vT(a, l, o, r, c, h) {
  var q, G;
  const { visualElement: d } = Y.useContext(Er),
    p = Y.useContext(g0),
    v = Y.useContext(br),
    y = Y.useContext(ff),
    x = y.reducedMotion,
    b = y.skipAnimations,
    S = Y.useRef(null),
    M = Y.useRef(!1);
  ((r = r || p.renderer),
    !S.current &&
      r &&
      ((S.current = r(a, {
        visualState: l,
        parent: d,
        props: o,
        presenceContext: v,
        blockInitialAnimation: v ? v.initial === !1 : !1,
        reducedMotionConfig: x,
        skipAnimations: b,
        isSVG: h,
      })),
      M.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const C = S.current,
    H = Y.useContext(A0);
  C && !C.projection && c && (C.type === "html" || C.type === "svg") && xT(S.current, o, c, H);
  const O = Y.useRef(!1);
  Y.useInsertionEffect(() => {
    C && O.current && C.update(o, v);
  });
  const B = o[zg],
    k = Y.useRef(
      !!B &&
        typeof window < "u" &&
        !((q = window.MotionHandoffIsComplete) != null && q.call(window, B)) &&
        ((G = window.MotionHasOptimisedAnimation) == null ? void 0 : G.call(window, B)),
    );
  return (
    Gy(() => {
      ((M.current = !0),
        C &&
          ((O.current = !0),
          (window.MotionIsMounted = !0),
          C.updateFeatures(),
          C.scheduleRenderMicrotask(),
          k.current && C.animationState && C.animationState.animateChanges()));
    }),
    Y.useEffect(() => {
      C &&
        (!k.current && C.animationState && C.animationState.animateChanges(),
        k.current &&
          (queueMicrotask(() => {
            var Q;
            (Q = window.MotionHandoffMarkAsComplete) == null || Q.call(window, B);
          }),
          (k.current = !1)),
        (C.enteringChildren = void 0));
    }),
    C
  );
}
function xT(a, l, o, r) {
  const {
    layoutId: c,
    layout: h,
    drag: d,
    dragConstraints: p,
    layoutScroll: v,
    layoutRoot: y,
    layoutAnchor: x,
    layoutCrossfade: b,
  } = l;
  ((a.projection = new o(a.latestValues, l["data-framer-portal-id"] ? void 0 : E0(a.parent))),
    a.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!d || (p && mi(p)),
      visualElement: a,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: r,
      crossfade: b,
      layoutScroll: v,
      layoutRoot: y,
      layoutAnchor: x,
    }));
}
function E0(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : E0(a.parent);
}
function lc(a, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && tT(r);
  const h = o ? o === "svg" : hf(a),
    d = h ? pT : mT;
  function p(y, x) {
    let b;
    const S = { ...Y.useContext(ff), ...y, layoutId: bT(y) },
      { isStatic: M } = S,
      C = lT(y),
      H = d(y, M);
    if (!M && typeof window < "u") {
      ST();
      const O = TT(S);
      ((b = O.MeasureLayout), (C.visualElement = vT(a, H, S, c, O.ProjectionNode, h)));
    }
    return m.jsxs(Er.Provider, {
      value: C,
      children: [
        b && C.visualElement ? m.jsx(b, { visualElement: C.visualElement, ...S }) : null,
        fT(a, y, gT(H, C.visualElement, x), H, M, l, h),
      ],
    });
  }
  p.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const v = Y.forwardRef(p);
  return ((v[yT] = a), v);
}
function bT({ layoutId: a }) {
  const l = Y.useContext(Lc).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function ST(a, l) {
  Y.useContext(g0).strict;
}
function TT(a) {
  const l = v0(),
    { drag: o, layout: r } = l;
  if (!o && !r) return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout:
      (o != null && o.isEnabled(a)) || (r != null && r.isEnabled(a)) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function AT(a, l) {
  if (typeof Proxy > "u") return lc;
  const o = new Map(),
    r = (h, d) => lc(h, d, a, l),
    c = (h, d) => r(h, d);
  return new Proxy(c, {
    get: (h, d) => (d === "create" ? r : (o.has(d) || o.set(d, lc(d, void 0, a, l)), o.get(d))),
  });
}
const ET = (a, l) =>
  (l.isSVG ?? hf(a)) ? new tS(l) : new J2(l, { allowProjection: a !== Y.Fragment });
class jT extends la {
  constructor(l) {
    (super(l), l.animationState || (l.animationState = lS(l)));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Tr(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    (this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this));
  }
}
let MT = 0;
class NT extends la {
  constructor() {
    (super(...arguments), (this.id = MT++), (this.isExitComplete = !1));
  }
  update() {
    var h;
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    if (l && r === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: p } = this.node.getProps();
        if (typeof d == "string") {
          const v = wa(this.node, d, p);
          if (v) {
            const { transition: y, transitionEnd: x, ...b } = v;
            for (const S in b) (h = this.node.getValue(S)) == null || h.jump(b[S]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    o &&
      !l &&
      c.then(() => {
        ((this.isExitComplete = !0), o(this.id));
      });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    (o && o(this.id), l && (this.unmount = l(this.id)));
  }
  unmount() {}
}
const DT = { animation: { Feature: jT }, exit: { Feature: NT } };
function Rl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const wT = (a) => (l) => lf(l) && a(l, Rl(l));
function jl(a, l, o, r) {
  return wl(a, l, wT(o), r);
}
const j0 = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  wy = (a, l) => Math.abs(a - l);
function CT(a, l) {
  const o = wy(a.x, l.x),
    r = wy(a.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const Cy = new Set(["auto", "scroll"]);
class M0 {
  constructor(
    l,
    o,
    {
      transformPagePoint: r,
      contextWindow: c = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: d = 3,
      element: p,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (M) => {
        this.handleScroll(M.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = tr(this.lastRawMoveEventInfo, this.transformPagePoint));
        const M = sc(this.lastMoveEventInfo, this.history),
          C = this.startEvent !== null,
          H = CT(M.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!C && !H) return;
        const { point: O } = M,
          { timestamp: B } = ue;
        this.history.push({ ...O, timestamp: B });
        const { onStart: k, onMove: q } = this.handlers;
        (C || (k && k(this.lastMoveEvent, M), (this.startEvent = this.lastMoveEvent)),
          q && q(this.lastMoveEvent, M));
      }),
      (this.handlePointerMove = (M, C) => {
        ((this.lastMoveEvent = M),
          (this.lastRawMoveEventInfo = C),
          (this.lastMoveEventInfo = tr(C, this.transformPagePoint)),
          zt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (M, C) => {
        this.end();
        const { onEnd: H, onSessionEnd: O, resumeAnimation: B } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && B && B(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = sc(
          M.type === "pointercancel" ? this.lastMoveEventInfo : tr(C, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && H && H(M, k), O && O(M, k));
      }),
      !lf(l))
    )
      return;
    ((this.dragSnapToOrigin = h),
      (this.handlers = o),
      (this.transformPagePoint = r),
      (this.distanceThreshold = d),
      (this.contextWindow = c || window));
    const v = Rl(l),
      y = tr(v, this.transformPagePoint),
      { point: x } = y,
      { timestamp: b } = ue;
    this.history = [{ ...x, timestamp: b }];
    const { onSessionStart: S } = o;
    (S && S(l, sc(y, this.history)),
      (this.removeListeners = Cl(
        jl(this.contextWindow, "pointermove", this.handlePointerMove),
        jl(this.contextWindow, "pointerup", this.handlePointerUp),
        jl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      p && this.startScrollTracking(p));
  }
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      ((Cy.has(r.overflowX) || Cy.has(r.overflowY)) &&
        this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
        (o = o.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o) return;
    const r = l === window,
      c = r ? { x: window.scrollX, y: window.scrollY } : { x: l.scrollLeft, y: l.scrollTop },
      h = { x: c.x - o.x, y: c.y - o.y };
    (h.x === 0 && h.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += h.x), (this.lastMoveEventInfo.point.y += h.y))
        : this.history.length > 0 && ((this.history[0].x -= h.x), (this.history[0].y -= h.y)),
      this.scrollPositions.set(l, c),
      zt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      ia(this.updatePoint));
  }
}
function tr(a, l) {
  return l ? { point: l(a.point) } : a;
}
function zy(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function sc({ point: a }, l) {
  return {
    point: a,
    delta: zy(a, N0(l)),
    offset: zy(a, zT(l)),
    velocity: OT(l, 0.1),
  };
}
function zT(a) {
  return a[0];
}
function N0(a) {
  return a[a.length - 1];
}
function OT(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let o = a.length - 1,
    r = null;
  const c = N0(a);
  for (; o >= 0 && ((r = a[o]), !(c.timestamp - r.timestamp > Re(l))); ) o--;
  if (!r) return { x: 0, y: 0 };
  r === a[0] && a.length > 2 && c.timestamp - r.timestamp > Re(l) * 2 && (r = a[1]);
  const h = Ze(c.timestamp - r.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const d = { x: (c.x - r.x) / h, y: (c.y - r.y) / h };
  return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
}
function RT(a, { min: l, max: o }, r) {
  return (
    l !== void 0 && a < l
      ? (a = r ? _t(l, a, r.min) : Math.max(a, l))
      : o !== void 0 && a > o && (a = r ? _t(o, a, r.max) : Math.min(a, o)),
    a
  );
}
function Oy(a, l, o) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0,
  };
}
function _T(a, { top: l, left: o, bottom: r, right: c }) {
  return { x: Oy(a.x, o, c), y: Oy(a.y, l, r) };
}
function Ry(a, l) {
  let o = l.min - a.min,
    r = l.max - a.max;
  return (l.max - l.min < a.max - a.min && ([o, r] = [r, o]), { min: o, max: r });
}
function VT(a, l) {
  return { x: Ry(a.x, l.x), y: Ry(a.y, l.y) };
}
function BT(a, l) {
  let o = 0.5;
  const r = me(a),
    c = me(l);
  return (
    c > r ? (o = Ml(l.min, l.max - r, a.min)) : r > c && (o = Ml(a.min, a.max - c, l.min)),
    un(0, 1, o)
  );
}
function UT(a, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - a.min),
    l.max !== void 0 && (o.max = l.max - a.min),
    o
  );
}
const _c = 0.35;
function LT(a = _c) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = _c),
    { x: _y(a, "left", "right"), y: _y(a, "top", "bottom") }
  );
}
function _y(a, l, o) {
  return { min: Vy(a, l), max: Vy(a, o) };
}
function Vy(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const HT = new WeakMap();
class qT {
  constructor(l) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = It()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l));
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const h = (b) => {
        (o && this.snapToCursor(Rl(b).point), this.stopAnimation());
      },
      d = (b, S) => {
        const { drag: M, dragPropagation: C, onDragStart: H } = this.getProps();
        if (
          M &&
          !C &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = h2(M)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          sn((B) => {
            let k = this.getAxisMotionValue(B).get() || 0;
            if (on.test(k)) {
              const { projection: q } = this.visualElement;
              if (q && q.layout) {
                const G = q.layout.layoutBox[B];
                G && (k = me(G) * (parseFloat(k) / 100));
              }
            }
            this.originPoint[B] = k;
          }),
          H && zt.update(() => H(b, S), !1, !0),
          jc(this.visualElement, "transform"));
        const { animationState: O } = this.visualElement;
        O && O.setActive("whileDrag", !0);
      },
      p = (b, S) => {
        ((this.latestPointerEvent = b), (this.latestPanInfo = S));
        const {
          dragPropagation: M,
          dragDirectionLock: C,
          onDirectionLock: H,
          onDrag: O,
        } = this.getProps();
        if (!M && !this.openDragLock) return;
        const { offset: B } = S;
        if (C && this.currentDirection === null) {
          ((this.currentDirection = kT(B)),
            this.currentDirection !== null && H && H(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, B),
          this.updateAxis("y", S.point, B),
          this.visualElement.render(),
          O && zt.update(() => O(b, S), !1, !0));
      },
      v = (b, S) => {
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          this.stop(b, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      y = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: x } = this.getProps();
    this.panSession = new M0(
      l,
      {
        onSessionStart: h,
        onStart: d,
        onMove: p,
        onSessionEnd: v,
        resumeAnimation: y,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: x,
        distanceThreshold: r,
        contextWindow: j0(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(l, o) {
    const r = l || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !c || !r)) return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: p } = this.getProps();
    p && zt.postRender(() => p(r, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    (l && (l.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !er(l, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + r[l];
    (this.constraints && this.constraints[l] && (d = RT(d, this.constraints[l], this.elastic[l])),
      h.set(d));
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: l, dragElastic: o } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (h = this.visualElement.projection) == null
            ? void 0
            : h.layout,
      c = this.constraints;
    (l && mi(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && r
        ? (this.constraints = _T(r.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = LT(o)),
      c !== this.constraints &&
        !mi(l) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        sn((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = UT(r.layoutBox[d], this.constraints[d]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !mi(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = k2(r, c.root, this.visualElement.getTransformPagePoint());
    let d = VT(c.layout.layoutBox, h);
    if (o) {
      const p = o(H2(d));
      ((this.hasMutatedConstraints = !!p), p && (d = Jg(p)));
    }
    return d;
  }
  startAnimation(l) {
    const {
        drag: o,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: d,
        onDragTransitionEnd: p,
      } = this.getProps(),
      v = this.constraints || {},
      y = sn((x) => {
        if (!er(x, o, this.currentDirection)) return;
        let b = (v && v[x]) || {};
        (d === !0 || d === x) && (b = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          M = c ? 40 : 1e7,
          C = {
            type: "inertia",
            velocity: r ? l[x] : 0,
            bounceStiffness: S,
            bounceDamping: M,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(x, C);
      });
    return Promise.all(y).then(p);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return (jc(this.visualElement, l), r.start(Ic(l, r, 0, o, this.visualElement, !1)));
  }
  stopAnimation() {
    sn((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[o];
    return c || this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0);
  }
  snapToCursor(l) {
    sn((o) => {
      const { drag: r } = this.getProps();
      if (!er(o, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: d, max: p } = c.layout.layoutBox[o],
          v = h.get() || 0;
        h.set(l[o] - _t(d, p, 0.5) + v);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: o } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!mi(o) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    sn((d) => {
      const p = this.getAxisMotionValue(d);
      if (p && this.constraints !== !1) {
        const v = p.get();
        c[d] = BT({ min: v, max: v }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      sn((d) => {
        if (!er(d, l, null)) return;
        const p = this.getAxisMotionValue(d),
          { min: v, max: y } = this.constraints[d];
        p.set(_t(v, y, c[d]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    HT.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = jl(l, "pointerdown", (y) => {
        const { drag: x, dragListener: b = !0 } = this.getProps(),
          S = y.target,
          M = S !== l && x2(S);
        x && b && !M && this.start(y);
      });
    let r;
    const c = () => {
        const { dragConstraints: y } = this.getProps();
        mi(y) &&
          y.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r || (r = YT(l, y.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: h } = this.visualElement,
      d = h.addEventListener("measure", c);
    (h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), zt.read(c));
    const p = wl(window, "resize", () => this.scalePositionWithinConstraints()),
      v = h.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: x }) => {
        this.isDragging &&
          x &&
          (sn((b) => {
            const S = this.getAxisMotionValue(b);
            S && ((this.originPoint[b] += y[b].translate), S.set(S.get() + y[b].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (p(), o(), d(), v && v(), r && r());
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: d = _c,
        dragMomentum: p = !0,
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: p,
    };
  }
}
function By(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function YT(a, l, o) {
  const r = Gp(a, By(o)),
    c = Gp(l, By(o));
  return () => {
    (r(), c());
  };
}
function er(a, l, o) {
  return (l === !0 || l === a) && (o === null || o === a);
}
function kT(a, l = 10) {
  let o = null;
  return (Math.abs(a.y) > l ? (o = "y") : Math.abs(a.x) > l && (o = "x"), o);
}
class GT extends la {
  constructor(l) {
    (super(l),
      (this.removeGroupControls = Ke),
      (this.removeListeners = Ke),
      (this.controls = new qT(l)));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    (l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ke));
  }
  update() {
    const { dragControls: l } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    l !== o &&
      (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const rc = (a) => (l, o) => {
  a && zt.update(() => a(l, o), !1, !0);
};
class XT extends la {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ke));
  }
  onPointerDown(l) {
    this.session = new M0(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: j0(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: rc(l),
      onStart: rc(o),
      onMove: rc(r),
      onEnd: (h, d) => {
        (delete this.session, c && zt.postRender(() => c(h, d)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = jl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let oc = !1;
class ZT extends Y.Component {
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props,
      { projection: h } = l;
    (h &&
      (o.group && o.group.add(h),
      r && r.register && c && r.register(h),
      oc && h.root.didUpdate(),
      h.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      h.setOptions({
        ...h.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (cr.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, visualElement: r, drag: c, isPresent: h } = this.props,
      { projection: d } = r;
    return (
      d &&
        ((d.isPresent = h),
        l.layoutDependency !== o && d.setOptions({ ...d.options, layoutDependency: o }),
        (oc = !0),
        c || l.layoutDependency !== o || o === void 0 || l.isPresent !== h
          ? d.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== h &&
          (h
            ? d.promote()
            : d.relegate() ||
              zt.postRender(() => {
                const p = d.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: o } = this.props,
      { projection: r } = l;
    r &&
      ((r.options.layoutAnchor = o),
      r.root.didUpdate(),
      af.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props,
      { projection: c } = l;
    ((oc = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        r && r.deregister && r.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function D0(a) {
  const [l, o] = y0(),
    r = Y.useContext(Lc);
  return m.jsx(ZT, {
    ...a,
    layoutGroup: r,
    switchLayoutGroup: Y.useContext(A0),
    isPresent: l,
    safeToRemove: o,
  });
}
const KT = {
  pan: { Feature: XT },
  drag: { Feature: GT, ProjectionNode: p0, MeasureLayout: D0 },
};
function Uy(a, l, o) {
  const { props: r } = a;
  a.animationState && r.whileHover && a.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    h = r[c];
  h && zt.postRender(() => h(l, Rl(l)));
}
class QT extends la {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = p2(l, (o, r) => (Uy(this.node, r, "Start"), (c) => Uy(this.node, c, "End"))));
  }
  unmount() {}
}
class JT extends la {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Cl(
      wl(this.node.current, "focus", () => this.onFocus()),
      wl(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Ly(a, l, o) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState && r.whileTap && a.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    h = r[c];
  h && zt.postRender(() => h(l, Rl(l)));
}
class FT extends la {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = S2(
      l,
      (c, h) => (
        Ly(this.node, h, "Start"),
        (d, { success: p }) => Ly(this.node, d, p ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: o,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Vc = new WeakMap(),
  uc = new WeakMap(),
  PT = (a) => {
    const l = Vc.get(a.target);
    l && l(a);
  },
  WT = (a) => {
    a.forEach(PT);
  };
function $T({ root: a, ...l }) {
  const o = a || document;
  uc.has(o) || uc.set(o, {});
  const r = uc.get(o),
    c = JSON.stringify(l);
  return (r[c] || (r[c] = new IntersectionObserver(WT, { root: a, ...l })), r[c]);
}
function IT(a, l, o) {
  const r = $T(l);
  return (
    Vc.set(a, o),
    r.observe(a),
    () => {
      (Vc.delete(a), r.unobserve(a));
    }
  );
}
const tA = { some: 0, all: 1 };
class eA extends la {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var v;
    (v = this.stopObserver) == null || v.call(this);
    const { viewport: l = {} } = this.node.getProps(),
      { root: o, margin: r, amount: c = "some", once: h } = l,
      d = {
        root: o ? o.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : tA[c],
      },
      p = (y) => {
        const { isIntersecting: x } = y;
        if (this.isInView === x || ((this.isInView = x), h && !x && this.hasEnteredView)) return;
        (x && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", x));
        const { onViewportEnter: b, onViewportLeave: S } = this.node.getProps(),
          M = x ? b : S;
        M && M(y);
      };
    this.stopObserver = IT(this.node.current, d, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(nA(l, o)) && this.startObserver();
  }
  unmount() {
    var l;
    ((l = this.stopObserver) == null || l.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function nA({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (o) => a[o] !== l[o];
}
const aA = {
    inView: { Feature: eA },
    tap: { Feature: FT },
    focus: { Feature: JT },
    hover: { Feature: QT },
  },
  iA = { layout: { ProjectionNode: p0, MeasureLayout: D0 } },
  lA = { ...DT, ...aA, ...KT, ...iA },
  $t = AT(lA, ET);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sA = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  rA = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, r) => (r ? r.toUpperCase() : o.toLowerCase())),
  Hy = (a) => {
    const l = rA(a);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  w0 = (...a) =>
    a
      .filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o)
      .join(" ")
      .trim(),
  oA = (a) => {
    for (const l in a) if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var uA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cA = Y.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: r,
      className: c = "",
      children: h,
      iconNode: d,
      ...p
    },
    v,
  ) =>
    Y.createElement(
      "svg",
      {
        ref: v,
        ...uA,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: r ? (Number(o) * 24) / Number(l) : o,
        className: w0("lucide", c),
        ...(!h && !oA(p) && { "aria-hidden": "true" }),
        ...p,
      },
      [...d.map(([y, x]) => Y.createElement(y, x)), ...(Array.isArray(h) ? h : [h])],
    ),
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Te = (a, l) => {
  const o = Y.forwardRef(({ className: r, ...c }, h) =>
    Y.createElement(cA, {
      ref: h,
      iconNode: l,
      className: w0(`lucide-${sA(Hy(a))}`, `lucide-${a}`, r),
      ...c,
    }),
  );
  return ((o.displayName = Hy(a)), o);
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fA = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  qy = Te("arrow-right", fA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dA = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  hA = Te("calendar", dA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mA = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  Sl = Te("chevron-left", mA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pA = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  Bc = Te("chevron-right", pA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  xl = Te("circle-check", yA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gA = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  cc = Te("loader-circle", gA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vA = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ],
  xA = Te("mail", vA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bA = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  nr = Te("map-pin", bA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SA = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  fc = Te("message-circle", SA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TA = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  AA = Te("minus", TA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EA = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Yy = Te("plus", EA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jA = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }],
  ],
  MA = Te("utensils", jA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NA = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  DA = Te("x", NA);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wA = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  CA = Te("zap", wA),
  zA = (a) => {
    if (!a) return "YOUR BRAND";
    try {
      return a
        .replace(/^(https?:\/\/)?(www\.)?/, "")
        .split(".")[0]
        .toUpperCase();
    } catch {
      return a.toUpperCase();
    }
  },
  ky = {
    london: "SW1A 1AA",
    "new york": "10001",
    mumbai: "400001",
    sydney: "2000",
  },
  OA = [
    {
      id: 1,
      name: "Grilled Chicken Protein Bowl",
      price: 12.99,
      originalPrice: 15.99,
      calories: 450,
      protein: 42,
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Vegan Power Meal",
      price: 11.49,
      originalPrice: 13.99,
      calories: 380,
      protein: 24,
      tag: "Vegan",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Keto Paneer Bowl",
      price: 13.49,
      originalPrice: 16.49,
      calories: 520,
      protein: 30,
      tag: "Keto",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Low Carb Salad Box",
      price: 10.99,
      originalPrice: 12.99,
      calories: 320,
      protein: 18,
      tag: "Low Carb",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Muscle Gain Meal",
      price: 14.99,
      originalPrice: 18.99,
      calories: 650,
      protein: 55,
      tag: "High Protein",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Balanced Diet Thali",
      price: 12.49,
      originalPrice: 14.99,
      calories: 480,
      protein: 28,
      tag: "Balanced",
      image:
        "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Mediterranean Quinoa Bowl",
      price: 11.99,
      originalPrice: 14.49,
      calories: 410,
      protein: 22,
      tag: "Vegan",
      image:
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Steamed Fish & Greens",
      price: 15.49,
      originalPrice: 19.99,
      calories: 350,
      protein: 38,
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Turkey Meatball Pasta",
      price: 13.99,
      originalPrice: 16.99,
      calories: 510,
      protein: 35,
      tag: "High Protein",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      name: "Tofu Stir Fry",
      price: 10.49,
      originalPrice: 12.99,
      calories: 340,
      protein: 20,
      tag: "Vegan",
      image:
        "https://images.unsplash.com/photo-1546069901-5ec6a7ad9028?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "Beef Steak & Asparagus",
      price: 16.99,
      originalPrice: 21.99,
      calories: 580,
      protein: 48,
      tag: "Keto",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Lentil Soup & Sourdough",
      price: 9.99,
      originalPrice: 11.99,
      calories: 390,
      protein: 18,
      tag: "Balanced",
      image:
        "https://images.unsplash.com/photo-1547592115-85748111932c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  RA = ({ value: a, onChange: l, onNext: o }) => {
    const [r, c] = Y.useState(() => (a ? new Date(a) : new Date())),
      h = (O, B) => new Date(O, B + 1, 0).getDate(),
      d = (O, B) => new Date(O, B, 1).getDay(),
      p = (O) => {
        const B = new Date(r.getFullYear(), r.getMonth(), O),
          k = B.getFullYear(),
          q = String(B.getMonth() + 1).padStart(2, "0"),
          G = String(B.getDate()).padStart(2, "0");
        l(`${k}-${q}-${G}`);
      },
      v = () => c(new Date(r.getFullYear(), r.getMonth() + 1, 1)),
      y = () => c(new Date(r.getFullYear(), r.getMonth() - 1, 1)),
      x = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      b = [],
      S = h(r.getFullYear(), r.getMonth()),
      M = d(r.getFullYear(), r.getMonth());
    for (let O = 0; O < M; O++) b.push(null);
    for (let O = 1; O <= S; O++) b.push(O);
    const C = (O) => {
        const B = new Date();
        return (
          B.getDate() === O && B.getMonth() === r.getMonth() && B.getFullYear() === r.getFullYear()
        );
      },
      H = (O) => {
        if (!a) return !1;
        const [B, k, q] = a.split("-").map(Number);
        return B === r.getFullYear() && k === r.getMonth() + 1 && q === O;
      };
    return m.jsxs("div", {
      className: "brand-card p-4 w-full max-w-sm mx-auto",
      children: [
        m.jsxs("div", {
          className: "flex items-center justify-between mb-4",
          children: [
            m.jsxs("h3", {
              className: "text-lg font-black text-primary uppercase tracking-tight",
              children: [x[r.getMonth()], " ", r.getFullYear()],
            }),
            m.jsxs("div", {
              className: "flex gap-1",
              children: [
                m.jsx("button", {
                  onClick: y,
                  className:
                    "p-1.5 border border-primary/10 rounded-xl hover:bg-accent transition-all active:scale-95 shadow-sm",
                  children: m.jsx(Sl, { size: 16 }),
                }),
                m.jsx("button", {
                  onClick: v,
                  className:
                    "p-1.5 border border-primary/10 rounded-xl hover:bg-accent transition-all active:scale-95 shadow-sm",
                  children: m.jsx(Bc, { size: 16 }),
                }),
              ],
            }),
          ],
        }),
        m.jsx("div", {
          className: "grid grid-cols-7 gap-1 text-center mb-2",
          children: ["S", "M", "T", "W", "T", "F", "S"].map((O, B) =>
            m.jsx(
              "div",
              {
                className: "font-black text-primary/30 text-[8px] uppercase tracking-widest",
                children: O,
              },
              `${O}-${B}`,
            ),
          ),
        }),
        m.jsx("div", {
          className: "grid grid-cols-7 gap-1",
          children: b.map((O, B) => {
            const k = new Date(r.getFullYear(), r.getMonth(), O),
              q = O !== null && k < new Date(new Date().setHours(0, 0, 0, 0)),
              G =
                O !== null &&
                !q &&
                k.toDateString() ===
                  new Date(new Date().setDate(new Date().getDate() + 1)).toDateString();
            return m.jsxs(
              "button",
              {
                disabled: O === null || q,
                onClick: () => {
                  O && (p(O), setTimeout(o, 300));
                },
                className: `h-10 flex items-center justify-center rounded-xl font-black text-xs transition-all relative ${O === null ? "invisible" : q ? "opacity-20 cursor-not-allowed text-primary grayscale" : H(O) ? "bg-primary text-white shadow-[2px_2px_0px_0px_rgba(255,215,0,1)]" : C(O) ? "bg-accent/30 text-primary border-2 border-primary border-dashed" : "hover:bg-primary-light text-primary hover:scale-105 active:scale-95"} ${G && !H(O) ? "border-2 border-wonky-orange" : ""}`,
                children: [
                  O,
                  G &&
                    m.jsx("span", {
                      className:
                        "absolute -top-1.5 -right-1 px-1 bg-wonky-orange text-white text-[6px] rounded uppercase font-black whitespace-nowrap shadow-sm",
                      children: "Earliest",
                    }),
                ],
              },
              B,
            );
          }),
        }),
      ],
    });
  },
  _A = ({ currentStep: a }) => {
    const l = [
        { id: "zipcode", label: "Zipcode", num: 1 },
        { id: "delivery", label: "Date", num: 2 },
        { id: "products", label: "Meal Plan", num: 3 },
        { id: "summary", label: "Checkout", num: 4 },
      ],
      r = ((c) =>
        c === "landing" || c === "loading"
          ? -1
          : c === "success"
            ? 5
            : ["zipcode", "delivery", "products", "summary"].indexOf(c))(a);
    return m.jsx("div", {
      className:
        "bg-transparent py-3 px-4 border-b border-primary/5 flex justify-center mt-0 transition-all duration-300",
      children: m.jsx("div", {
        className: "flex items-center justify-between w-full max-w-3xl",
        children: l.map((c, h) => {
          const d = r > h,
            p = r === h;
          return m.jsxs(
            "div",
            {
              className: "flex items-center flex-1 last:flex-none group",
              children: [
                m.jsxs("div", {
                  className: "flex items-center gap-3 transition-opacity duration-300",
                  style: { opacity: p ? 1 : d ? 0.8 : 0.5 },
                  children: [
                    m.jsx("div", {
                      className: `w-7 h-7 rounded-lg border flex items-center justify-center font-black text-[11px] transition-all duration-300 ${p ? "bg-accent border-primary scale-110 shadow-md transform" : d ? "bg-primary border-primary text-white" : "bg-white border-primary/20 text-primary/40"}`,
                      children: d ? "✓" : c.num,
                    }),
                    m.jsx("span", {
                      className: `hidden md:inline font-bold text-[9px] uppercase tracking-[0.15em] transition-colors duration-300 ${p ? "text-primary" : "text-primary/40"}`,
                      children: c.label,
                    }),
                  ],
                }),
                h < l.length - 1 &&
                  m.jsx("div", {
                    className: "flex-1 mx-4 h-px bg-primary/10 transition-colors duration-300",
                  }),
              ],
            },
            c.id,
          );
        }),
      }),
    });
  };
function VA() {
  const [a, l] = Y.useState("landing"),
    [o, r] = Y.useState(""),
    [c, h] = Y.useState("Food"),
    [d, p] = Y.useState(""),
    [v, y] = Y.useState(""),
    [x, b] = Y.useState(""),
    [S, M] = Y.useState(""),
    [C, H] = Y.useState("weekly"),
    [O, B] = Y.useState(OA),
    [k, q] = Y.useState("All"),
    [G, Q] = Y.useState(!1),
    [at, I] = Y.useState([]),
    [F, st] = Y.useState(0),
    [et, ft] = Y.useState(!1),
    [bt, Zt] = Y.useState("Fresh ingredients, delicious recipes delivered weekly."),
    [hw, xw] = Y.useState(!1);
  Y.useEffect(() => {
    if (a === "success") {
      const Z = setTimeout(() => {
        ft(!0);
      }, 1500);
      return () => clearTimeout(Z);
    }
  }, [a]);
  Y.useEffect(() => {
    if (!hw) return;
    const Z = (mt) => {
      const te = mt.target;
      te && te.closest && !te.closest("[data-cat-dd]") && xw(!1);
    };
    return (
      document.addEventListener("mousedown", Z),
      () => document.removeEventListener("mousedown", Z)
    );
  }, [hw]);
  const Bt = [
      "Analyzing your brand...",
      "Detecting products...",
      "Optimizing subscription flow...",
      "Preparing experience...",
    ],
    Ut = async (Z) => {
      (Z.preventDefault(), l("loading"));
      for (let mt = 0; mt < Bt.length; mt++)
        (st(mt), await new Promise((te) => setTimeout(te, 800)));
      try {
        let mt = o.trim().toLowerCase();
        mt.startsWith("http") || (mt = `https://${mt}`);
        const kt = new URL(mt).origin;
        try {
          const Qe = await fetch(`${kt}/shop.json`);
          if (Qe.ok) {
            const _e = await Qe.json();
            _e.shop && _e.shop.description
              ? Zt(_e.shop.description)
              : _e.shop &&
                _e.shop.name &&
                Zt(`Premium ${c} Subscription Flow created for ${_e.shop.name}`);
          }
        } catch {
          console.warn("Shop details fetch failed");
        }
        const tn = await fetch(`${kt}/products.json`);
        if (tn.ok) {
          const Qe = await tn.json();
          if (Qe.products && Qe.products.length > 0) {
            const _e = Qe.products.slice(0, 12).map((Dn) => {
              var Ai;
              return {
                id: Dn.id,
                name: Dn.title,
                price: parseFloat(Dn.variants[0].price),
                originalPrice:
                  parseFloat(Dn.variants[0].compare_at_price) ||
                  parseFloat(Dn.variants[0].price) * 1.2,
                calories: Math.floor(Math.random() * 300) + 300,
                protein: Math.floor(Math.random() * 20) + 20,
                tag: "Best Seller",
                image:
                  ((Ai = Dn.images[0]) == null ? void 0 : Ai.src) ||
                  "https://picsum.photos/seed/food/800/600",
              };
            });
            B(_e);
          }
        }
      } catch (mt) {
        console.error("Shopify fetch failed, using mock data:", mt);
      }
      l("zipcode");
    },
    R = (Z) => {
      I((mt) =>
        mt.find((kt) => kt.id === Z.id)
          ? mt.map((kt) => (kt.id === Z.id ? { ...kt, quantity: kt.quantity + 1 } : kt))
          : [...mt, { ...Z, quantity: 1 }],
      );
    },
    X = (Z) => {
      I((mt) => {
        const te = mt.find((kt) => kt.id === Z);
        return te && te.quantity > 1
          ? mt.map((kt) => (kt.id === Z ? { ...kt, quantity: kt.quantity - 1 } : kt))
          : mt.filter((kt) => kt.id !== Z);
      });
    },
    J = Y.useMemo(() => (k === "All" ? O : O.filter((Z) => Z.tag === k)), [O, k]),
    lt = Y.useMemo(() => {
      const Z = at.reduce((mt, te) => mt + te.price * te.quantity, 0);
      return C === "weekly" ? Z * 0.9 : C === "monthly" ? Z * 0.8 : Z;
    }, [at, C]),
    dt = Y.useMemo(() => at.reduce((mt, te) => mt + te.price * te.quantity, 0) - lt, [at, lt]),
    A = () =>
      m.jsx("div", {
        className: "h-full flex items-center justify-center p-4 bg-dots-pattern",
        children: m.jsxs("div", {
          className:
            "max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/40 backdrop-blur-sm p-4 md:p-12 rounded-[3rem] border-2 border-primary/5 shadow-sm",
          children: [
            m.jsxs($t.div, {
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              className: "space-y-6",
              children: [
                m.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    m.jsxs("h1", {
                      className:
                        "text-4xl md:text-6xl font-black text-primary leading-[1.1] uppercase tracking-tighter",
                      children: [
                        "Build Your ",
                        m.jsx("br", {}),
                        m.jsx("span", {
                          className: "text-wonky-orange",
                          children: "Dream",
                        }),
                        " Flow.",
                      ],
                    }),
                    m.jsx("p", {
                      className: "text-xl font-bold text-primary/60 max-w-md leading-relaxed",
                      children:
                        "Generate high-converting subscription experiences for D2C brands in seconds.",
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex flex-wrap gap-6 items-center pt-2",
                  children: [
                    m.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        m.jsx("span", {
                          className: "text-3xl font-black text-primary italic leading-none",
                          children: "50+",
                        }),
                        m.jsx("span", {
                          className: "micro-label mt-2",
                          children: "Brands Powered",
                        }),
                      ],
                    }),
                    m.jsx("div", { className: "w-px h-10 bg-primary/10" }),
                    m.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        m.jsx("span", {
                          className: "text-3xl font-black text-primary italic leading-none",
                          children: "24/7",
                        }),
                        m.jsx("span", {
                          className: "micro-label mt-2",
                          children: "Auto-Optimization",
                        }),
                      ],
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "pt-4 flex items-center gap-4",
                  children: [
                    m.jsx("div", {
                      className: "h-0.5 w-16 bg-wonky-orange rounded-full",
                    }),
                    m.jsxs("span", {
                      className:
                        "font-mono text-[11px] font-black uppercase tracking-[0.4em] text-primary/40",
                      children: [
                        "Trusted by ",
                        m.jsx("span", {
                          className: "text-primary italic",
                          children: "weupsell",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs($t.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.2 },
              className: "brand-card p-6 md:p-14 relative",
              children: [
                m.jsx("div", {
                  className:
                    "absolute -top-6 -right-6 w-28 h-28 bg-accent rounded-full border-4 border-primary flex items-center justify-center -rotate-12 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] z-10",
                  children: m.jsxs("span", {
                    className:
                      "font-black text-primary uppercase text-center leading-tight text-sm",
                    children: ["Start", m.jsx("br", {}), "Free"],
                  }),
                }),
                m.jsx("h2", {
                  className: "text-2xl font-black text-primary mb-6 uppercase tracking-tight",
                  children: "Configure Experience",
                }),
                m.jsxs("form", {
                  onSubmit: Ut,
                  className: "space-y-6",
                  children: [
                    m.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        m.jsxs("div", {
                          children: [
                            m.jsx("label", {
                              className: "micro-label mb-2 block",
                              children: "Brand URL",
                            }),
                            m.jsx("input", {
                              required: !0,
                              type: "text",
                              placeholder: "e.g. yourbrand.com",
                              className: "brand-input text-lg py-4",
                              value: o,
                              onChange: (Z) => r(Z.target.value),
                            }),
                          ],
                        }),
                        m.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            m.jsxs("div", {
                              className: "relative",
                              children: [
                                m.jsx("label", {
                                  className: "micro-label mb-2 block",
                                  children: "Category",
                                }),
                                m.jsxs("div", {
                                  className: "relative",
                                  "data-cat-dd": !0,
                                  children: [
                                    m.jsxs("button", {
                                      type: "button",
                                      className:
                                        "brand-input text-lg py-4 w-full text-left flex items-center justify-between gap-2 cursor-pointer",
                                      "aria-expanded": hw,
                                      "aria-haspopup": "listbox",
                                      onClick: () => xw((Z) => !Z),
                                      children: [
                                        m.jsx("span", {
                                          className: "truncate",
                                          children: c,
                                        }),
                                        m.jsx("span", {
                                          className: "shrink-0 text-primary/40 pointer-events-none",
                                          "aria-hidden": !0,
                                          children: "▾",
                                        }),
                                      ],
                                    }),
                                    hw &&
                                      m.jsx("div", {
                                        role: "listbox",
                                        className:
                                          "absolute left-0 right-0 top-full z-[60] mt-1 rounded-2xl border border-primary/10 bg-white py-1 shadow-xl overflow-hidden",
                                        children: ["Food", "Meal", "Supplement"].map((Z) =>
                                          m.jsx(
                                            "button",
                                            {
                                              type: "button",
                                              role: "option",
                                              "aria-selected": c === Z,
                                              className: `block w-full px-4 py-3 text-left text-base font-medium hover:bg-primary/5 ${c === Z ? "bg-primary/5 font-black" : ""}`,
                                              onClick: () => {
                                                h(Z);
                                                xw(!1);
                                              },
                                              children: Z,
                                            },
                                            Z,
                                          ),
                                        ),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            m.jsxs("div", {
                              children: [
                                m.jsx("label", {
                                  className: "micro-label mb-2 block",
                                  children: "Your Email",
                                }),
                                m.jsx("input", {
                                  required: !0,
                                  type: "email",
                                  placeholder: "hello@brand.com",
                                  className: "brand-input text-lg py-4",
                                  value: d,
                                  onChange: (Z) => p(Z.target.value),
                                }),
                              ],
                            }),
                          ],
                        }),
                        m.jsxs("div", {
                          children: [
                            m.jsx("label", {
                              className: "micro-label mb-2 block",
                              children: "Contact Number",
                            }),
                            m.jsx("input", {
                              required: !0,
                              type: "tel",
                              placeholder: "+1 (555) 000-0000",
                              className: "brand-input text-lg py-4",
                              value: v,
                              onChange: (Z) => y(Z.target.value),
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsxs("button", {
                      type: "submit",
                      className:
                        "brand-button w-full text-xl flex items-center justify-center gap-6 group h-20 shadow-2xl",
                      children: [
                        "GENERATE FLOW",
                        m.jsx(qy, {
                          size: 28,
                          className: "group-hover:translate-x-2 transition-transform",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    U = () =>
      m.jsxs("div", {
        className:
          "min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white",
        children: [
          m.jsxs("div", {
            className: "relative mb-12",
            children: [
              m.jsx($t.div, {
                animate: { rotate: 360 },
                transition: { duration: 8, repeat: 1 / 0, ease: "linear" },
                className: "w-32 h-32 border-4 border-dashed border-primary/20 rounded-full",
              }),
              m.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: m.jsx($t.div, {
                  animate: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] },
                  transition: { duration: 2, repeat: 1 / 0 },
                  className:
                    "text-primary bg-accent p-6 rounded-full border border-primary/10 shadow-xl",
                  children: m.jsx(cc, { size: 40, className: "animate-spin" }),
                }),
              }),
            ],
          }),
          m.jsxs("div", {
            className: "max-w-md w-full brand-card p-6 bg-primary text-left",
            children: [
              m.jsxs("div", {
                className: "flex items-center justify-between mb-4 border-b-2 border-white/10 pb-2",
                children: [
                  m.jsx("span", {
                    className: "font-mono text-[9px] text-accent uppercase tracking-[0.3em]",
                    children: "System Diagnostics",
                  }),
                  m.jsx("span", {
                    className: "w-2 h-2 bg-red-500 rounded-full animate-pulse",
                  }),
                ],
              }),
              m.jsx("div", {
                className: "space-y-3 font-mono",
                children: Bt.map((Z, mt) =>
                  m.jsxs(
                    $t.div,
                    {
                      initial: { opacity: 0, x: -10 },
                      animate: {
                        opacity: F >= mt ? 1 : 0.2,
                        x: F >= mt ? 0 : -10,
                      },
                      className: "flex items-center gap-3 text-[11px] tracking-tight text-white",
                      children: [
                        F > mt
                          ? m.jsx("span", {
                              className: "text-accent underline text-[9px]",
                              children: "DONE",
                            })
                          : F === mt
                            ? m.jsx("span", {
                                className: "text-accent animate-pulse text-[9px]",
                                children: ">>>",
                              })
                            : m.jsx("span", {
                                className: "opacity-30 text-[9px]",
                                children: "WAIT",
                              }),
                        Z.toUpperCase(),
                      ],
                    },
                    Z,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    K = () => {
      (Q(!0),
        setTimeout(() => {
          const Z = x.toLowerCase().trim();
          (ky[Z] ? b(ky[Z]) : b("2000"), Q(!1));
        }, 1200));
    },
    W = () => {
      (Q(!0),
        setTimeout(() => {
          (b("10001"), Q(!1));
        }, 1500));
    },
    rt = () =>
      m.jsxs($t.div, {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "max-w-4xl mx-auto pb-24 px-6",
        children: [
          m.jsxs("div", {
            className: "text-center mb-5 pt-2",
            children: [
              m.jsxs("div", {
                className: "inline-flex items-center gap-3 mb-3",
                children: [
                  m.jsx("div", {
                    className: "w-1.5 h-7 bg-wonky-orange rounded-full",
                  }),
                  m.jsx("h2", {
                    className:
                      "text-3xl font-black text-primary uppercase tracking-tighter leading-none",
                    children: "Where to?",
                  }),
                ],
              }),
              m.jsx("p", {
                className: "text-primary/40 font-medium max-w-sm mx-auto text-sm",
                children: "Enter your delivery details to check availability in your area.",
              }),
            ],
          }),
          m.jsx("div", {
            className: "max-w-xl mx-auto",
            children: m.jsxs("div", {
              className:
                "brand-card p-10 space-y-8 bg-white relative overflow-hidden shadow-2xl border border-primary/5",
              children: [
                m.jsx("div", {
                  className:
                    "absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] pointer-events-none",
                }),
                m.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    m.jsx("div", {
                      className: "w-1.5 h-10 bg-accent rounded-full flex-shrink-0",
                    }),
                    m.jsxs("div", {
                      children: [
                        m.jsx("h3", {
                          className:
                            "text-2xl font-black text-primary uppercase leading-tight tracking-tight",
                          children: "Shipping Address",
                        }),
                        m.jsx("p", {
                          className:
                            "font-mono text-[10px] text-primary/30 uppercase font-black tracking-widest",
                          children: "Verification required",
                        }),
                      ],
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    m.jsxs("div", {
                      className: "flex items-center justify-between px-1",
                      children: [
                        m.jsx("label", {
                          className:
                            "text-[10px] font-black uppercase tracking-[0.2em] text-primary/40",
                          children: "Enter City or Postcode",
                        }),
                        m.jsxs("button", {
                          onClick: W,
                          className:
                            "text-[9px] font-black text-wonky-orange hover:underline uppercase tracking-widest flex items-center gap-1",
                          children: [m.jsx(nr, { size: 10 }), "Use my current location"],
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      className: "relative group",
                      children: [
                        m.jsx("input", {
                          type: "text",
                          placeholder: "e.g. Sydney or 2000",
                          className: "brand-input text-xl h-16 pr-32 pl-8 rounded-full",
                          value: x,
                          onChange: (Z) => b(Z.target.value),
                        }),
                        m.jsx("button", {
                          onClick: K,
                          disabled: G,
                          className:
                            "absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-primary/90 transition-all shadow-lg active:scale-95 disabled:opacity-50",
                          children: G
                            ? m.jsx(cc, { size: 16, className: "animate-spin" })
                            : "AUTO-FILL",
                        }),
                      ],
                    }),
                    m.jsx(ic, {
                      children: G
                        ? m.jsxs($t.div, {
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0 },
                            className:
                              "flex items-center gap-3 bg-accent/10 p-4 rounded-xl border border-accent",
                            children: [
                              m.jsx(cc, {
                                size: 18,
                                className: "animate-spin text-primary",
                              }),
                              m.jsx("span", {
                                className:
                                  "text-xs font-black text-primary uppercase tracking-tight",
                                children: "Calculating local availability...",
                              }),
                            ],
                          })
                        : m.jsxs("div", {
                            className:
                              "flex items-center gap-2 px-1 text-xs font-bold text-green-600 italic",
                            children: [
                              m.jsx(xl, { size: 14 }),
                              m.jsx("span", {
                                children: "Verified for Standard & Express delivery",
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          m.jsx($t.div, {
            initial: { y: 150 },
            animate: { y: 0 },
            className:
              "fixed bottom-0 left-0 right-0 bg-white h-20 px-6 md:px-10 z-50 flex items-center shadow-[0_-15px_30px_rgba(0,0,0,0.1)]",
            children: m.jsxs("div", {
              className: "max-w-7xl mx-auto w-full flex items-center justify-between gap-8",
              children: [
                m.jsxs("div", {
                  className: "hidden md:flex flex-1 items-center gap-4 text-primary/20",
                  children: [
                    m.jsx("div", { className: "h-0.5 flex-1 bg-current" }),
                    m.jsx("span", {
                      className: "font-mono text-xs font-black italic tracking-widest",
                      children: "LOGISTICS PHASE",
                    }),
                    m.jsx("div", { className: "h-0.5 flex-1 bg-current" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-4 w-full md:w-auto md:min-w-[480px]",
                  children: [
                    m.jsxs("button", {
                      onClick: () => l("landing"),
                      className:
                        "flex-1 py-3 border border-primary/10 rounded-full font-black uppercase text-[11px] tracking-widest text-primary hover:bg-primary-light transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm",
                      children: [m.jsx(Sl, { size: 18 }), "BACK"],
                    }),
                    m.jsxs("button", {
                      disabled: !x,
                      onClick: () => l("delivery"),
                      className:
                        "flex-[2] brand-button text-base flex items-center justify-center gap-4 h-14 active:scale-[0.98] transition-all",
                      children: ["CONTINUE", m.jsx(Bc, { size: 24 })],
                    }),
                  ],
                }),
                m.jsx("div", { className: "hidden md:flex flex-1" }),
              ],
            }),
          }),
        ],
      }),
    ht = () =>
      m.jsxs($t.div, {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "max-w-4xl mx-auto pb-24 px-6",
        "data-flow-step": "date",
        children: [
          m.jsxs("div", {
            className: "text-center mb-5 pt-2",
            children: [
              m.jsxs("div", {
                className: "inline-flex items-center gap-3 mb-2",
                children: [
                  m.jsx("div", {
                    className: "w-1.5 h-7 bg-wonky-orange rounded-full",
                  }),
                  m.jsx("h2", {
                    className:
                      "text-3xl font-black text-primary uppercase tracking-tighter leading-none",
                    children: "Start Date",
                  }),
                ],
              }),
              m.jsx("p", {
                className: "text-primary/40 font-medium max-w-sm mx-auto text-sm",
                children: "Select your first delivery date to begin your fresh meal plan.",
              }),
            ],
          }),
          m.jsxs("div", {
            className: "max-w-xl mx-auto",
            children: [
              m.jsx("div", {
                className: "brand-card bg-white p-2 shadow-2xl border border-primary/5",
                children: m.jsx(RA, {
                  value: S,
                  onChange: M,
                  onNext: () => l("products"),
                }),
              }),
              m.jsxs("div", {
                className:
                  "mt-4 flex items-center justify-center gap-6 bg-gray-50/50 py-2.5 rounded-full border border-dashed border-primary/10",
                children: [
                  m.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      m.jsx("div", {
                        className:
                          "w-4 h-4 rounded-full bg-accent border border-primary/10 shadow-md",
                      }),
                      m.jsx("span", {
                        className:
                          "font-mono text-[9px] font-black uppercase tracking-widest text-primary/40",
                        children: "Today",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      m.jsx("div", {
                        className:
                          "w-4 h-4 rounded-full bg-primary border border-primary/10 shadow-md",
                      }),
                      m.jsx("span", {
                        className:
                          "font-mono text-[9px] font-black uppercase tracking-widest text-primary/40",
                        children: "Selected",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          m.jsx($t.div, {
            initial: { y: 150 },
            animate: { y: 0 },
            className:
              "fixed bottom-0 left-0 right-0 bg-white h-20 px-6 md:px-10 z-50 flex items-center shadow-[0_-15px_30px_rgba(0,0,0,0.1)]",
            children: m.jsxs("div", {
              className: "max-w-7xl mx-auto w-full flex items-center justify-between gap-8",
              children: [
                m.jsxs("div", {
                  className: "hidden md:flex flex-1 items-center gap-4 text-primary/20",
                  children: [
                    m.jsx("div", { className: "h-0.5 flex-1 bg-current" }),
                    m.jsx("span", {
                      className: "font-mono text-xs font-black italic tracking-widest",
                      children: "DATE SELECTION",
                    }),
                    m.jsx("div", { className: "h-0.5 flex-1 bg-current" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-4 w-full md:w-auto md:min-w-[480px]",
                  children: [
                    m.jsxs("button", {
                      onClick: () => l("zipcode"),
                      className:
                        "flex-1 py-3 border border-primary/10 rounded-full font-black uppercase text-[11px] tracking-widest text-primary hover:bg-primary-light transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm",
                      children: [m.jsx(Sl, { size: 18 }), "BACK"],
                    }),
                    m.jsxs("button", {
                      disabled: !S,
                      onClick: () => l("products"),
                      className:
                        "flex-[2] brand-button text-base flex items-center justify-center gap-4 h-14 active:scale-[0.98] transition-all",
                      children: ["CONFIRM DATE", m.jsx(hA, { size: 24 })],
                    }),
                  ],
                }),
                m.jsx("div", { className: "hidden md:flex flex-1" }),
              ],
            }),
          }),
        ],
      }),
    St = () =>
      m.jsxs("div", {
        className: "max-w-7xl mx-auto pb-28",
        children: [
          m.jsx("div", {
            className: "flex justify-center mb-6 pt-2",
            children: m.jsx("div", {
              className:
                "bg-white p-2 rounded-full border border-primary/10 shadow-xl inline-flex gap-2",
              children: ["one-time", "weekly", "monthly"].map((Z) =>
                m.jsxs(
                  "button",
                  {
                    onClick: () => H(Z),
                    className: `px-6 py-2.5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all flex items-center gap-3 relative ${C === Z ? "bg-primary text-white shadow-lg" : "text-primary/40 hover:text-primary hover:bg-gray-50"}`,
                    children: [
                      m.jsx("div", {
                        className: `w-2 h-2 rounded-full border border-white/20 transition-all ${C === Z ? "bg-accent scale-110" : "bg-transparent"}`,
                      }),
                      Z.replace("-", " "),
                      Z === "weekly" &&
                        m.jsx("span", {
                          className: `text-[7px] px-1.5 py-0.5 rounded-full font-black tracking-widest ${C === Z ? "bg-accent text-primary" : "bg-accent/30 text-primary/60"}`,
                          children: "10% OFF",
                        }),
                      Z === "monthly" &&
                        m.jsx("span", {
                          className: `text-[7px] px-1.5 py-0.5 rounded-full font-black tracking-widest ${C === Z ? "bg-wonky-orange text-white" : "bg-wonky-orange/20 text-wonky-orange border border-wonky-orange/20"}`,
                          children: "20% OFF",
                        }),
                    ],
                  },
                  Z,
                ),
              ),
            }),
          }),
          m.jsx("div", {
            className:
              "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 mt-8",
            children: J.map((Z) => {
              const mt = at.find((te) => te.id === Z.id);
              return m.jsxs(
                $t.div,
                {
                  layout: !0,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className:
                    "bg-white rounded-[1.5rem] p-3 flex flex-col h-full border border-gray-100 hover:shadow-lg transition-all duration-300 group",
                  children: [
                    m.jsxs("div", {
                      className: "relative aspect-[4/3] rounded-[1rem] overflow-hidden mb-3",
                      children: [
                        m.jsx("img", {
                          src: Z.image,
                          alt: Z.name,
                          className:
                            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                          referrerPolicy: "no-referrer",
                        }),
                        m.jsx("div", {
                          className: "absolute top-2 right-2",
                          children: mt
                            ? m.jsxs("div", {
                                className:
                                  "flex items-center bg-primary text-white rounded-full p-0.5 shadow-lg ring-2 ring-white scale-90 origin-top-right",
                                children: [
                                  m.jsx("button", {
                                    onClick: () => X(Z.id),
                                    className:
                                      "w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors",
                                    children: m.jsx(AA, { size: 12 }),
                                  }),
                                  m.jsx("span", {
                                    className: "font-black text-xs w-4 text-center",
                                    children: mt.quantity,
                                  }),
                                  m.jsx("button", {
                                    onClick: () => R(Z),
                                    className:
                                      "w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors",
                                    children: m.jsx(Yy, { size: 12 }),
                                  }),
                                ],
                              })
                            : m.jsxs("button", {
                                onClick: () => R(Z),
                                className:
                                  "bg-white text-primary px-3 py-1.5 rounded-full font-black text-[10px] shadow-lg flex items-center gap-1.5 hover:bg-accent transition-all active:scale-90 ring-2 ring-transparent hover:ring-white",
                                children: [m.jsx(Yy, { size: 12 }), "Add"],
                              }),
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      className: "flex flex-col flex-1 px-1",
                      children: [
                        m.jsxs("div", {
                          className: "flex items-center justify-between mb-1",
                          children: [
                            m.jsxs("div", {
                              className: "flex items-baseline gap-1.5",
                              children: [
                                m.jsxs("span", {
                                  className: "text-xl font-black text-primary tracking-tighter",
                                  children: ["$", Z.price],
                                }),
                                Z.originalPrice &&
                                  m.jsxs("span", {
                                    className: "text-[10px] text-primary/30 line-through font-bold",
                                    children: ["$", Z.originalPrice],
                                  }),
                              ],
                            }),
                            m.jsx("button", {
                              className:
                                "text-[8px] font-black text-primary/30 hover:text-wonky-orange uppercase tracking-widest underline decoration-wonky-orange/20 underline-offset-2",
                              children: "Inside",
                            }),
                          ],
                        }),
                        m.jsx("h4", {
                          className:
                            "font-black text-wonky-orange text-sm tracking-tight mb-1 group-hover:scale-[1.02] transition-transform line-clamp-2 min-h-[2.5rem]",
                          children: Z.name,
                        }),
                        m.jsx("p", {
                          className:
                            "text-[10px] font-bold text-gray-400 mb-3 leading-tight line-clamp-2 italic",
                          children: "Premium protein meal with seasonal ingredients.",
                        }),
                        m.jsx("div", {
                          className: "mt-auto flex flex-wrap gap-1",
                          children:
                            Z.originalPrice &&
                            Z.originalPrice > Z.price &&
                            m.jsxs("span", {
                              className:
                                "bg-wonky-orange/10 text-wonky-orange px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider",
                              children: [
                                "SAVE ",
                                Math.round((1 - Z.price / Z.originalPrice) * 100),
                                "%",
                              ],
                            }),
                        }),
                      ],
                    }),
                  ],
                },
                Z.id,
              );
            }),
          }),
          m.jsx($t.div, {
            initial: { y: 150 },
            animate: { y: 0 },
            className:
              "fixed bottom-0 left-0 right-0 bg-white h-20 px-10 z-50 flex items-center shadow-[0_-15px_30px_rgba(0,0,0,0.1)]",
            children: m.jsxs("div", {
              className: "max-w-7xl mx-auto w-full flex items-center justify-between gap-8",
              children: [
                m.jsxs("div", {
                  className: "hidden lg:flex gap-12 flex-1",
                  children: [
                    m.jsxs("div", {
                      children: [
                        m.jsx("div", {
                          className:
                            "text-[10px] text-primary/40 uppercase font-black tracking-widest mb-0.5",
                          children: "Your Box",
                        }),
                        m.jsxs("div", {
                          className: "font-black text-lg text-primary leading-none",
                          children: [at.reduce((Z, mt) => Z + mt.quantity, 0), " ITEMS"],
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      children: [
                        m.jsx("div", {
                          className:
                            "text-[10px] text-primary/40 uppercase font-black tracking-widest mb-0.5",
                          children: "Total",
                        }),
                        m.jsxs(
                          $t.div,
                          {
                            initial: { scale: 1.2, color: "#f27d26" },
                            animate: { scale: 1, color: "#111827" },
                            className: "font-black text-2xl text-primary leading-none",
                            children: ["$", lt.toFixed(2)],
                          },
                          lt,
                        ),
                      ],
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-4 flex-[2] w-full lg:w-auto",
                  children: [
                    m.jsxs("button", {
                      onClick: () => l("delivery"),
                      className:
                        "flex-1 lg:w-32 py-2 border border-primary/10 rounded-full font-black uppercase text-xs text-primary hover:bg-primary-light transition-colors flex items-center justify-center gap-2 shadow-sm",
                      children: [m.jsx(Sl, { size: 16 }), "BACK"],
                    }),
                    m.jsxs("button", {
                      disabled: at.length === 0,
                      onClick: () => l("summary"),
                      className:
                        "flex-[2] lg:w-40 brand-button text-base flex items-center justify-center gap-4 h-12",
                      children: ["REVIEW BOX", m.jsx(Bc, { size: 24 })],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ae = () =>
      m.jsxs($t.div, {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        className: "max-w-7xl mx-auto pb-48 px-6",
        children: [
          m.jsxs("div", {
            className: "flex flex-col md:flex-row gap-12 items-start mt-2",
            children: [
              m.jsxs("div", {
                className: "flex-1 space-y-8",
                children: [
                  m.jsxs("section", {
                    className: "brand-card p-8 md:p-10 space-y-8",
                    children: [
                      m.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          m.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              m.jsx("div", {
                                className: "w-1.5 h-7 bg-wonky-orange rounded-full",
                              }),
                              m.jsx("h2", {
                                className:
                                  "text-2xl font-black text-primary uppercase tracking-tight",
                                children: "Contact",
                              }),
                            ],
                          }),
                          m.jsx("button", {
                            className:
                              "text-[11px] font-black underline uppercase tracking-widest text-wonky-orange hover:text-primary transition-colors",
                            children: "Sign in",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          m.jsx("div", {
                            className: "relative group",
                            children: m.jsx("input", {
                              type: "email",
                              placeholder: "Email",
                              className: "brand-input h-14",
                              defaultValue: d,
                            }),
                          }),
                          m.jsxs("label", {
                            className: "flex items-center gap-3 cursor-pointer group px-1",
                            children: [
                              m.jsxs("div", {
                                className: "relative flex items-center justify-center",
                                children: [
                                  m.jsx("input", {
                                    type: "checkbox",
                                    className:
                                      "peer appearance-none w-5 h-5 rounded-full border-2 border-primary/10 checked:bg-primary transition-all cursor-pointer",
                                  }),
                                  m.jsx("div", {
                                    className:
                                      "absolute opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity",
                                    children: m.jsx(xl, {
                                      size: 12,
                                      className: "text-white",
                                    }),
                                  }),
                                ],
                              }),
                              m.jsx("span", {
                                className:
                                  "text-[11px] font-bold text-primary/40 group-hover:text-primary transition-colors",
                                children: "Email me with news and offers",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsxs("section", {
                    className: "brand-card p-8 md:p-10 space-y-8",
                    children: [
                      m.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          m.jsx("div", {
                            className: "w-1.5 h-7 bg-wonky-orange rounded-full",
                          }),
                          m.jsx("h2", {
                            className: "text-2xl font-black text-primary uppercase tracking-tight",
                            children: "Delivery",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                          m.jsxs("div", {
                            className: "md:col-span-2 relative group",
                            children: [
                              m.jsxs("select", {
                                className:
                                  "brand-input h-14 appearance-none pr-12 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23111827%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_1.5rem_center] bg-no-repeat",
                                children: [
                                  m.jsx("option", { children: "India" }),
                                  m.jsx("option", { children: "Australia" }),
                                  m.jsx("option", {
                                    children: "United States",
                                  }),
                                ],
                              }),
                              m.jsx("div", {
                                className:
                                  "absolute right-12 top-1/2 -translate-y-1/2 w-px h-6 bg-primary/10 pointer-events-none",
                              }),
                            ],
                          }),
                          m.jsx("div", {
                            className: "space-y-1",
                            children: m.jsx("input", {
                              type: "text",
                              placeholder: "First name (optional)",
                              className: "brand-input h-14",
                            }),
                          }),
                          m.jsx("div", {
                            className: "space-y-1",
                            children: m.jsx("input", {
                              type: "text",
                              placeholder: "Last name",
                              className: "brand-input h-14",
                            }),
                          }),
                          m.jsxs("div", {
                            className: "md:col-span-2 relative group",
                            children: [
                              m.jsx("input", {
                                type: "text",
                                placeholder: "Address",
                                className: "brand-input h-14 pr-12",
                              }),
                              m.jsx(nr, {
                                className:
                                  "absolute right-6 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-wonky-orange transition-colors",
                                size: 20,
                              }),
                              m.jsxs("div", {
                                className:
                                  "absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl z-20 pointer-events-none opacity-0 translate-y-2 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 transition-all border border-primary/5 overflow-hidden",
                                children: [
                                  m.jsxs("div", {
                                    className:
                                      "p-4 border-b border-gray-100 hover:bg-slate-50 cursor-pointer flex items-center gap-4 transition-colors",
                                    children: [
                                      m.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center",
                                        children: m.jsx(nr, {
                                          size: 16,
                                          className: "text-primary",
                                        }),
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("p", {
                                            className:
                                              "text-sm font-black text-primary uppercase tracking-tight leading-none",
                                            children: "123 Fresh Lane",
                                          }),
                                          m.jsx("p", {
                                            className:
                                              "text-[10px] font-bold text-primary/40 uppercase tracking-widest mt-1",
                                            children: "Sydney CBD, NSW 2000",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  m.jsxs("div", {
                                    className:
                                      "p-4 hover:bg-slate-50 cursor-pointer flex items-center gap-4 transition-colors",
                                    children: [
                                      m.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center",
                                        children: m.jsx(nr, {
                                          size: 16,
                                          className: "text-primary",
                                        }),
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("p", {
                                            className:
                                              "text-sm font-black text-primary uppercase tracking-tight leading-none",
                                            children: "456 Wonky Way",
                                          }),
                                          m.jsx("p", {
                                            className:
                                              "text-[10px] font-bold text-primary/40 uppercase tracking-widest mt-1",
                                            children: "Melbourne, VIC 3000",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m.jsx("div", {
                            className: "md:col-span-2",
                            children: m.jsx("input", {
                              type: "text",
                              placeholder: "Apartment, suite, etc. (optional)",
                              className: "brand-input h-14",
                            }),
                          }),
                          m.jsx("input", {
                            type: "text",
                            placeholder: "City",
                            className: "brand-input h-14",
                            defaultValue: x,
                          }),
                          m.jsxs("div", {
                            className: "relative group",
                            children: [
                              m.jsxs("select", {
                                className:
                                  "brand-input h-14 appearance-none pr-12 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23111827%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[right_1.5rem_center] bg-no-repeat",
                                children: [
                                  m.jsx("option", { children: "Gujarat" }),
                                  m.jsx("option", {
                                    children: "New South Wales",
                                  }),
                                  m.jsx("option", { children: "California" }),
                                ],
                              }),
                              m.jsx("div", {
                                className:
                                  "absolute right-12 top-1/2 -translate-y-1/2 w-px h-6 bg-primary/10 pointer-events-none",
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "md:col-span-2 relative group",
                            children: [
                              m.jsx("input", {
                                type: "text",
                                placeholder: "Phone",
                                className: "brand-input h-14",
                                defaultValue: v,
                              }),
                              m.jsx("div", {
                                className:
                                  "absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center text-[10px] font-black text-primary/30 group-hover:bg-accent group-hover:text-primary transition-all cursor-help",
                                title: "Needed for delivery updates",
                                children: "?",
                              }),
                            ],
                          }),
                          m.jsx("div", {
                            className: "md:col-span-2",
                            children: m.jsxs("label", {
                              className: "flex items-center gap-3 cursor-pointer group px-1",
                              children: [
                                m.jsxs("div", {
                                  className: "relative flex items-center justify-center",
                                  children: [
                                    m.jsx("input", {
                                      type: "checkbox",
                                      className:
                                        "peer appearance-none w-5 h-5 rounded-full border-2 border-primary/10 checked:bg-primary transition-all cursor-pointer",
                                    }),
                                    m.jsx("div", {
                                      className:
                                        "absolute opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity",
                                      children: m.jsx(xl, {
                                        size: 12,
                                        className: "text-white",
                                      }),
                                    }),
                                  ],
                                }),
                                m.jsx("span", {
                                  className:
                                    "text-[11px] font-bold text-primary/40 group-hover:text-primary transition-colors",
                                  children: "Save information for next time",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsx("div", {
                className: "w-full md:w-[420px] lg:sticky lg:top-32",
                children: m.jsx("div", {
                  className: "brand-card overflow-hidden bg-white shadow-2xl",
                  children: m.jsxs("div", {
                    className: "p-8 space-y-8",
                    children: [
                      m.jsx("div", {
                        className: "space-y-6 max-h-[45vh] overflow-y-auto pr-4 custom-scrollbar",
                        children: at.map((Z) =>
                          m.jsxs(
                            "div",
                            {
                              className: "flex items-center justify-between gap-4 group",
                              children: [
                                m.jsxs("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    m.jsxs("div", {
                                      className: "relative flex-shrink-0",
                                      children: [
                                        m.jsx("img", {
                                          src: Z.image,
                                          className:
                                            "w-20 h-20 rounded-2xl object-cover border border-primary/5 bg-slate-50 shadow-md group-hover:scale-105 transition-transform",
                                          alt: "",
                                          referrerPolicy: "no-referrer",
                                        }),
                                        m.jsx("div", {
                                          className:
                                            "absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-black text-[11px] border-2 border-white shadow-lg",
                                          children: Z.quantity,
                                        }),
                                      ],
                                    }),
                                    m.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        m.jsx("p", {
                                          className:
                                            "font-black text-xs text-primary uppercase leading-tight tracking-tight",
                                          children: Z.name,
                                        }),
                                        m.jsx("div", {
                                          className: "flex items-center gap-2",
                                          children: m.jsx("p", {
                                            className:
                                              "text-[8px] font-bold text-primary/30 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded-full border border-primary/5",
                                            children: S,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                m.jsxs("p", {
                                  className:
                                    "font-black text-xs text-primary tracking-tight whitespace-nowrap",
                                  children: ["$", (Z.price * Z.quantity).toFixed(2)],
                                }),
                              ],
                            },
                            Z.id,
                          ),
                        ),
                      }),
                      m.jsxs("div", {
                        className:
                          "flex gap-3 bg-slate-50 p-2 rounded-full border border-primary/5",
                        children: [
                          m.jsx("input", {
                            type: "text",
                            placeholder: "Discount code",
                            className:
                              "brand-input bg-white h-12 text-sm border-none focus:shadow-none flex-1",
                          }),
                          m.jsx("button", {
                            className:
                              "bg-primary hover:bg-primary/90 text-white font-black px-6 rounded-full text-[10px] uppercase tracking-widest transition-all shadow-md",
                            children: "Apply",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-4 pt-6 border-t border-primary/5",
                        children: [
                          m.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              m.jsx("span", {
                                className:
                                  "text-[11px] font-black text-primary/30 uppercase tracking-[0.15em]",
                                children: "Subtotal",
                              }),
                              m.jsxs("span", {
                                className: "font-black text-sm text-primary tracking-tight",
                                children: ["$", (lt + dt).toFixed(2)],
                              }),
                            ],
                          }),
                          dt > 0 &&
                            m.jsxs("div", {
                              className: "flex justify-between items-center text-wonky-orange",
                              children: [
                                m.jsxs("span", {
                                  className: "text-[11px] font-black uppercase tracking-[0.15em]",
                                  children: ["Discount (", C, ")"],
                                }),
                                m.jsxs("span", {
                                  className: "font-black text-sm tracking-tight",
                                  children: ["-$", dt.toFixed(2)],
                                }),
                              ],
                            }),
                          m.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              m.jsx("span", {
                                className:
                                  "text-[11px] font-black text-primary/30 uppercase tracking-[0.15em]",
                                children: "Shipping",
                              }),
                              m.jsx("span", {
                                className:
                                  "text-[10px] font-black uppercase text-primary/10 tracking-[0.15em] italic",
                                children: "Enter shipping address",
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              m.jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                  m.jsx("span", {
                                    className:
                                      "text-[11px] font-black text-primary/30 uppercase tracking-[0.15em]",
                                    children: "Estimated taxes",
                                  }),
                                  m.jsx("div", {
                                    className:
                                      "w-3.5 h-3.5 border border-primary/10 rounded-full flex items-center justify-center text-[9px] text-primary/20 cursor-help",
                                    title: "Calculated based on address",
                                    children: "?",
                                  }),
                                ],
                              }),
                              m.jsx("span", {
                                className: "font-black text-sm text-primary tracking-tight",
                                children: "$0.00",
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsx("div", {
                        className: "pt-8 border-t-2 border-primary/5",
                        children: m.jsxs("div", {
                          className: "flex justify-between items-end",
                          children: [
                            m.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                m.jsx("span", {
                                  className:
                                    "font-black text-primary uppercase tracking-[0.2em] text-[10px] opacity-20",
                                  children: "Grand Total",
                                }),
                                m.jsx("p", {
                                  className:
                                    "text-[9px] font-black text-primary/10 uppercase tracking-[0.3em] italic leading-none",
                                  children: "AUD Included",
                                }),
                              ],
                            }),
                            m.jsxs("div", {
                              className: "text-right flex items-baseline gap-2",
                              children: [
                                m.jsx("span", {
                                  className:
                                    "text-base font-black text-primary/10 uppercase tracking-widest",
                                  children: "AUD",
                                }),
                                m.jsxs("span", {
                                  className:
                                    "text-4xl font-black text-primary tracking-tighter leading-none",
                                  children: ["$", lt.toFixed(2)],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          m.jsx($t.div, {
            initial: { y: 150 },
            animate: { y: 0 },
            className:
              "fixed bottom-0 left-0 right-0 bg-white h-20 px-6 md:px-10 z-50 flex items-center shadow-[0_-15px_30px_rgba(0,0,0,0.1)]",
            children: m.jsxs("div", {
              className: "max-w-7xl mx-auto w-full flex items-center justify-between gap-8",
              children: [
                m.jsxs("div", {
                  className: "hidden md:flex flex-1 items-center gap-4 text-primary/20",
                  children: [
                    m.jsx("div", { className: "h-0.5 flex-1 bg-current" }),
                    m.jsx("span", {
                      className: "font-mono text-xs font-black italic tracking-widest",
                      children: "FINAL APPROVAL",
                    }),
                    m.jsx("div", { className: "h-0.5 flex-1 bg-current" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-4 w-full md:w-auto md:min-w-[480px] items-center",
                  children: [
                    m.jsxs("div", {
                      className: "md:hidden flex flex-col mr-auto",
                      children: [
                        m.jsx("span", {
                          className:
                            "text-[10px] font-black text-primary/40 uppercase tracking-widest leading-none",
                          children: "Total",
                        }),
                        m.jsxs("span", {
                          className: "text-xl font-black text-primary italic leading-none",
                          children: ["$", lt.toFixed(2)],
                        }),
                      ],
                    }),
                    m.jsxs("button", {
                      onClick: () => l("products"),
                      className:
                        "px-4 md:flex-1 py-3 border border-primary/10 rounded-full font-black uppercase text-[11px] tracking-widest text-primary hover:bg-primary-light transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm",
                      children: [
                        m.jsx(Sl, { size: 18 }),
                        m.jsx("span", {
                          className: "hidden sm:inline",
                          children: "BACK",
                        }),
                      ],
                    }),
                    m.jsx("button", {
                      onClick: () => l("success"),
                      className:
                        "flex-[2] md:flex-[3] brand-button text-base flex flex-col items-center justify-center h-14 active:scale-[0.98] transition-all",
                      children: m.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: ["CONFIRM ORDER", m.jsx(xl, { size: 24 })],
                      }),
                    }),
                  ],
                }),
                m.jsx("div", { className: "hidden md:flex flex-1" }),
              ],
            }),
          }),
        ],
      }),
    Lt = () =>
      m.jsxs($t.div, {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "max-w-2xl mx-auto text-center py-4",
        children: [
          m.jsxs("div", {
            className: "relative mb-6",
            children: [
              m.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: m.jsx($t.div, {
                  animate: { scale: [1, 1.4], opacity: [0.4, 0] },
                  transition: { duration: 1, repeat: 1 / 0 },
                  className: "w-20 h-20 bg-accent rounded-full border border-primary/10",
                }),
              }),
              m.jsx("div", {
                className:
                  "relative inline-flex items-center justify-center w-16 h-16 bg-accent text-primary rounded-full border border-primary/10 shadow-lg font-black",
                children: m.jsx(xl, { size: 32 }),
              }),
            ],
          }),
          m.jsxs("div", {
            className: "space-y-1 mb-8",
            children: [
              m.jsx("span", {
                className: "micro-label text-success-main font-black text-[10px]",
                children: "Demonstration Successful",
              }),
              m.jsxs("div", {
                className: "flex items-center justify-center gap-4 mt-2",
                children: [
                  m.jsx("div", {
                    className: "w-1.5 h-12 bg-wonky-orange rounded-full mt-1",
                  }),
                  m.jsx("h1", {
                    className:
                      "text-4xl font-black text-primary leading-tight uppercase tracking-tighter text-left",
                    children: "Your Demo is Live.",
                  }),
                ],
              }),
              m.jsx("p", {
                className: "text-xs font-bold text-primary/40 pt-2",
                children: "This high-converting flow is ready for your brand.",
              }),
            ],
          }),
          m.jsxs("div", {
            className:
              "brand-card p-10 bg-white relative overflow-hidden group shadow-2xl border border-primary/5",
            children: [
              m.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-1.5 bg-wonky-orange",
              }),
              m.jsxs("div", {
                className: "relative z-10 flex flex-col items-center",
                children: [
                  m.jsx("div", {
                    className:
                      "w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6",
                    children: m.jsx(CA, {
                      size: 24,
                      className: "text-primary",
                    }),
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-3 mb-2",
                    children: [
                      m.jsx("div", {
                        className: "w-1 h-6 bg-accent rounded-full",
                      }),
                      m.jsx("h3", {
                        className: "text-2xl font-black text-primary uppercase tracking-tight",
                        children: "Scale Your D2C Revenue",
                      }),
                    ],
                  }),
                  m.jsx("p", {
                    className: "text-sm font-bold text-primary/40 mb-8 max-w-sm",
                    children:
                      "We specialize in customizing these high-converting experiences for high-growth food brands.",
                  }),
                  m.jsxs("button", {
                    onClick: () => ft(!0),
                    className:
                      "brand-button w-full max-w-xs text-base flex items-center justify-center gap-4 h-16 shadow-xl hover:scale-105 transition-transform",
                    children: ["BOOK STRATEGY CALL", m.jsx(fc, { size: 22 })],
                  }),
                ],
              }),
            ],
          }),
          m.jsx("div", {
            className: "mt-6",
            children: m.jsxs("button", {
              onClick: () => {
                (I([]), l("zipcode"), b(""), M(""));
              },
              className:
                "font-black text-primary/30 hover:text-primary uppercase tracking-widest text-[9px] flex items-center gap-2 mx-auto transition-colors",
              children: ["TRY DEMO AGAIN", m.jsx(qy, { size: 10 })],
            }),
          }),
        ],
      });
  return m.jsxs("div", {
    className:
      "h-screen w-screen overflow-hidden bg-bg-main text-text-main font-sans selection:bg-accent selection:text-primary flex flex-col no-scrollbar",
    children: [
      !(a === "landing" || a === "loading") &&
        m.jsxs("div", {
          className: "flex-shrink-0",
          children: [
            m.jsx("header", {
              className:
                "sticky top-0 z-[60] bg-white backdrop-blur-md px-6 md:px-8 py-4 flex items-center justify-center border-b border-primary/5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300",
              children: m.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  m.jsx("div", {
                    className:
                      "w-12 h-12 bg-accent rounded-[1.25rem] flex items-center justify-center shadow-sm hover:rotate-3 transition-transform",
                    children: m.jsx(MA, {
                      size: 24,
                      className: "text-primary stroke-[2.5]",
                    }),
                  }),
                  m.jsxs("div", {
                    className: "flex flex-col text-center",
                    children: [
                      m.jsx("span", {
                        className:
                          "text-[17px] font-black text-primary uppercase tracking-tight leading-none",
                        children: zA(o),
                      }),
                      m.jsx("span", {
                        className:
                          "text-[10px] font-bold text-primary/30 uppercase tracking-[0.1em] mt-0.5 italic max-w-sm line-clamp-1",
                        children: bt,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            m.jsx(_A, { currentStep: a }),
          ],
        }),
      m.jsx("main", {
        className: `flex-1 min-h-0 no-scrollbar px-4 py-3 md:py-4 md:px-8 lg:px-12 ${a === "zipcode" || a === "delivery" ? "overflow-hidden" : "overflow-y-auto"}`,
        children: m.jsxs(ic, {
          mode: "wait",
          children: [
            a === "landing" && A(),
            a === "loading" && U(),
            a === "zipcode" && rt(),
            a === "delivery" && ht(),
            a === "products" && St(),
            a === "summary" && ae(),
            a === "success" && Lt(),
          ],
        }),
      }),
      m.jsx(ic, {
        children:
          et &&
          m.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-6",
            children: [
              m.jsx($t.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => ft(!1),
                className: "absolute inset-0 bg-primary/80 backdrop-blur-md",
              }),
              m.jsxs($t.div, {
                initial: { opacity: 0, scale: 0.8, rotate: 5 },
                animate: { opacity: 1, scale: 1, rotate: 0 },
                exit: { opacity: 0, scale: 0.8, rotate: -5 },
                className:
                  "relative bg-white w-full max-w-md rounded-[2rem] border-4 border-primary shadow-[12px_12px_0px_0px_rgba(45,90,39,1)] overflow-hidden",
                children: [
                  m.jsx("button", {
                    onClick: () => ft(!1),
                    className:
                      "absolute top-4 right-4 text-primary hover:scale-125 transition-transform p-2",
                    children: m.jsx(DA, { size: 24 }),
                  }),
                  m.jsxs("div", {
                    className: "p-8 text-center",
                    children: [
                      m.jsx("div", {
                        className:
                          "w-16 h-16 bg-accent border-4 border-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-[4px_4px_0px_0px_rgba(45,90,39,1)]",
                        children: m.jsx(fc, {
                          size: 32,
                          className: "text-primary",
                        }),
                      }),
                      m.jsx("h2", {
                        className:
                          "text-2xl font-black text-primary mb-3 uppercase tracking-tight leading-tight",
                        children: "How did you like this flow?",
                      }),
                      m.jsx("p", {
                        className: "text-base font-bold text-primary/60 mb-8",
                        children:
                          "We specialize in high-converting meal & food brand experiences. Want this customized for your brand?",
                      }),
                      m.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [
                          m.jsxs("a", {
                            href: `mailto:team@weupsell.com?subject=Meal Flow Demo for ${o}`,
                            className:
                              "flex flex-col items-center gap-3 p-4 bg-primary-light hover:bg-accent rounded-[1.5rem] border-2 border-primary transition-all group",
                            children: [
                              m.jsx(xA, {
                                size: 24,
                                className: "text-primary",
                              }),
                              m.jsx("span", {
                                className: "font-black text-xs text-primary uppercase",
                                children: "EMAIL US",
                              }),
                            ],
                          }),
                          m.jsxs("a", {
                            href: "https://wa.me/917990488965",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex flex-col items-center gap-3 p-4 bg-primary-light hover:bg-accent rounded-[1.5rem] border-2 border-primary transition-all group",
                            children: [
                              m.jsx(fc, {
                                size: 24,
                                className: "text-primary",
                              }),
                              m.jsx("span", {
                                className: "font-black text-xs text-primary uppercase",
                                children: "WHATSAPP",
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsx("div", {
                        className: "mt-8 pt-6 border-t-2 border-primary/10",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
r1.createRoot(document.getElementById("root")).render(
  m.jsx(Y.StrictMode, { children: m.jsx(VA, {}) }),
);
