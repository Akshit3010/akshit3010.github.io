/*! For license information please see main.85e74ec6.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          i = n(296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = m.hasOwnProperty(t) ? m[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          T = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          M = Symbol.for("react.suspense_list"),
          A = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var N = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (N && e[N]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          z = Object.assign;
        function F(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var I = !1;
        function V(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  s = a.length - 1;
                1 <= o && 0 <= s && i[o] !== a[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== a[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || i[o] !== a[s])) {
                        var l = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case _:
              return "Portal";
            case T:
              return "Profiler";
            case S:
              return "StrictMode";
            case j:
              return "Suspense";
            case M:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case A:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Y(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function X(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Y(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function $(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return z({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          K(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && $(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return z({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ae(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
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
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          ke = null,
          Se = null;
        function Te(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof _e) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = wi(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Se;
            if (((Se = ke = null), Te(e), t))
              for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function je() {}
        var Me = !1;
        function Ae(e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Me = !1), (null !== ke || null !== Se) && (je(), Ce());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wi(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ne = {};
            Object.defineProperty(Ne, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ne, Ne),
              window.removeEventListener("test", Ne, Ne);
          } catch (ce) {
            Le = !1;
          }
        function Re(e, t, n, r, i, a, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          ze = null,
          Fe = !1,
          Ie = null,
          Ve = {
            onError: function (e) {
              (De = !0), (ze = e);
            },
          };
        function Ue(e, t, n, r, i, a, o, s, l) {
          (De = !1), (ze = null), Re.apply(Ve, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Be(e) !== e) throw Error(a(188));
        }
        function Ye(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return We(i), e;
                    if (o === r) return We(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Xe(e)
            : null;
        }
        function Xe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Xe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = i.unstable_scheduleCallback,
          $e = i.unstable_cancelCallback,
          Qe = i.unstable_shouldYield,
          Ge = i.unstable_requestPaint,
          Ke = i.unstable_now,
          Ze = i.unstable_getCurrentPriorityLevel,
          Je = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~i;
            0 !== s ? (r = ft(s)) : 0 !== (a &= o) && (r = ft(a));
          } else 0 !== (o = n & ~i) ? (r = ft(o)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          _t,
          kt,
          St,
          Tt,
          Et = !1,
          Ct = [],
          Pt = null,
          jt = null,
          Mt = null,
          At = new Map(),
          Ot = new Map(),
          Lt = [],
          Nt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Mt = null;
              break;
            case "pointerover":
            case "pointerout":
              At.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function zt(e) {
          var t = yi(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Tt(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && _t(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Vt() {
          (Et = !1),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== jt && Ft(jt) && (jt = null),
            null !== Mt && Ft(Mt) && (Mt = null),
            At.forEach(It),
            Ot.forEach(It);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Vt)));
        }
        function Bt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Ct.length) {
            Ut(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ut(Pt, e),
              null !== jt && Ut(jt, e),
              null !== Mt && Ut(Mt, e),
              At.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            zt(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Wt = !0;
        function Yt(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function Xt(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var i = Qt(e, t, n, r);
            if (null === i) Wr(e, t, r, $t, n), Rt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Pt = Dt(Pt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (jt = Dt(jt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Mt = Dt(Mt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return At.set(a, Dt(At.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      Ot.set(a, Dt(Ot.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < Nt.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && wt(a),
                  null === (a = Qt(e, t, n, r)) && Wr(e, t, r, $t, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var $t = null;
        function Qt(e, t, n, r) {
          if ((($t = null), null !== (e = yi((e = we(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return ($t = e), null;
        }
        function Gt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            i = "value" in Kt ? Kt.value : Kt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Jt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = z({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = z({}, fn, {
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
            getModifierState: Tn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = an(pn),
          vn = an(z({}, pn, { dataTransfer: 0 })),
          mn = an(z({}, fn, { relatedTarget: 0 })),
          gn = an(
            z({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = z({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(z({}, un, { data: 0 })),
          wn = {
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
          _n = {
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
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Tn() {
          return Sn;
        }
        var En = z({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _n[e.keyCode] || "Unidentified"
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
            getModifierState: Tn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(En),
          Pn = an(
            z({}, pn, {
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
            })
          ),
          jn = an(
            z({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Tn,
            })
          ),
          Mn = an(
            z({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          An = z({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = an(An),
          Ln = [9, 13, 27, 32],
          Nn = c && "CompositionEvent" in window,
          Rn = null;
        c && "documentMode" in document && (Rn = document.documentMode);
        var Dn = c && "TextEvent" in window && !Rn,
          zn = c && (!Nn || (Rn && 8 < Rn && 11 >= Rn)),
          Fn = String.fromCharCode(32),
          In = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Hn = {
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
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          Ee(r),
            0 < (t = Xr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Xn = null,
          qn = null;
        function $n(e) {
          Fr(e, 0);
        }
        function Qn(e) {
          if (q(xi(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Xn && (Xn.detachEvent("onpropertychange", nr), (qn = Xn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(qn)) {
            var t = [];
            Yn(t, qn, e, we(e)), Ae($n, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Xn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(qn);
        }
        function ar(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(t, i) || !sr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = $(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = $((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== $(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = Xr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var _r = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Sr = {};
        function Tr(e) {
          if (kr[e]) return kr[e];
          if (!_r[e]) return e;
          var t,
            n = _r[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          "TransitionEvent" in window || delete _r.transitionend.transition);
        var Er = Tr("animationend"),
          Cr = Tr("animationiteration"),
          Pr = Tr("animationstart"),
          jr = Tr("transitionend"),
          Mr = new Map(),
          Ar =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Or(e, t) {
          Mr.set(e, t), l(t, [e]);
        }
        for (var Lr = 0; Lr < Ar.length; Lr++) {
          var Nr = Ar[Lr];
          Or(Nr.toLowerCase(), "on" + (Nr[0].toUpperCase() + Nr.slice(1)));
        }
        Or(Er, "onAnimationEnd"),
          Or(Cr, "onAnimationIteration"),
          Or(Pr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(jr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, s, l, u) {
              if ((Ue.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var c = ze;
                (De = !1), (ze = null), Fe || ((Fe = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && i.isPropagationStopped()))
                    break e;
                  zr(i, s, u), (a = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && i.isPropagationStopped())
                  )
                    break e;
                  zr(i, s, u), (a = l);
                }
            }
          }
          if (Fe) throw ((e = Ie), (Fe = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Vr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var i = Yt;
              break;
            case 4:
              i = Xt;
              break;
            default:
              i = qt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = yi(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = a = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Ae(function () {
            var r = a,
              i = we(n),
              o = [];
            e: {
              var s = Mr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = jn;
                    break;
                  case Er:
                  case Cr:
                  case Pr:
                    l = gn;
                    break;
                  case jr:
                    l = Mn;
                    break;
                  case "scroll":
                    l = dn;
                    break;
                  case "wheel":
                    l = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Oe(h, d)) &&
                        c.push(Yr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yi(u) && !u[hi])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yi(u)
                          : null) &&
                        (u !== (f = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? s : xi(l)),
                  (p = null == u ? s : xi(u)),
                  ((s = new c(v, h + "leave", l, n, i)).target = f),
                  (s.relatedTarget = p),
                  (v = null),
                  yi(i) === r &&
                    (((c = new c(d, h + "enter", u, n, i)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  l && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = l; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && $r(o, s, l, c, !1),
                  null !== u && null !== f && $r(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xi(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var m = Gn;
              else if (Wn(s))
                if (Kn) m = or;
                else {
                  m = ir;
                  var g = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (m = ar);
              switch (
                (m && (m = m(e, r))
                  ? Yn(o, m, n, i)
                  : (g && g(e, s, r),
                    "focusout" === e &&
                      (g = s._wrapperState) &&
                      g.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (g = r ? xi(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, i);
              }
              var y;
              if (Nn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (zn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (y = en())
                    : ((Zt = "value" in (Kt = i) ? Kt.value : Kt.textContent),
                      (Bn = !0))),
                0 < (g = Xr(r, b)).length &&
                  ((b = new xn(b, e, null, n, i)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Nn && Vn(e, t))
                          ? ((e = en()), (Jt = Zt = Kt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Xr(r, "onBeforeInput")).length &&
                  ((i = new xn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Fr(o, t);
          });
        }
        function Yr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Xr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Oe(e, n)) && r.unshift(Yr(e, a, i)),
              null != (a = Oe(e, t)) && r.push(Yr(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function $r(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              i
                ? null != (l = Oe(n, a)) && o.unshift(Yr(n, l, s))
                : i || (null != (l = Oe(n, a)) && o.push(Yr(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Gr, "");
        }
        function Zr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(a(425));
        }
        function Jr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(si);
                }
              : ri;
        function si(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function li(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Bt(t);
        }
        function ui(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          di = "__reactFiber$" + fi,
          pi = "__reactProps$" + fi,
          hi = "__reactContainer$" + fi,
          vi = "__reactEvents$" + fi,
          mi = "__reactListeners$" + fi,
          gi = "__reactHandles$" + fi;
        function yi(e) {
          var t = e[di];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[di])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[di])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[di] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function wi(e) {
          return e[pi] || null;
        }
        var _i = [],
          ki = -1;
        function Si(e) {
          return { current: e };
        }
        function Ti(e) {
          0 > ki || ((e.current = _i[ki]), (_i[ki] = null), ki--);
        }
        function Ei(e, t) {
          ki++, (_i[ki] = e.current), (e.current = t);
        }
        var Ci = {},
          Pi = Si(Ci),
          ji = Si(!1),
          Mi = Ci;
        function Ai(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ci;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Oi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Li() {
          Ti(ji), Ti(Pi);
        }
        function Ni(e, t, n) {
          if (Pi.current !== Ci) throw Error(a(168));
          Ei(Pi, t), Ei(ji, n);
        }
        function Ri(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, H(e) || "Unknown", i));
          return z({}, n, r);
        }
        function Di(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ci),
            (Mi = Pi.current),
            Ei(Pi, e),
            Ei(ji, ji.current),
            !0
          );
        }
        function zi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Ri(e, t, Mi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ti(ji),
              Ti(Pi),
              Ei(Pi, e))
            : Ti(ji),
            Ei(ji, n);
        }
        var Fi = null,
          Ii = !1,
          Vi = !1;
        function Ui(e) {
          null === Fi ? (Fi = [e]) : Fi.push(e);
        }
        function Bi() {
          if (!Vi && null !== Fi) {
            Vi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fi = null), (Ii = !1);
            } catch (i) {
              throw (null !== Fi && (Fi = Fi.slice(e + 1)), qe(Je, Bi), i);
            } finally {
              (bt = t), (Vi = !1);
            }
          }
          return null;
        }
        var Hi = x.ReactCurrentBatchConfig;
        function Wi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = z({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Yi = Si(null),
          Xi = null,
          qi = null,
          $i = null;
        function Qi() {
          $i = qi = Xi = null;
        }
        function Gi(e) {
          var t = Yi.current;
          Ti(Yi), (e._currentValue = t);
        }
        function Ki(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Zi(e, t) {
          (Xi = e),
            ($i = qi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Ji(e) {
          var t = e._currentValue;
          if ($i !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === qi)
            ) {
              if (null === Xi) throw Error(a(308));
              (qi = e), (Xi.dependencies = { lanes: 0, firstContext: e });
            } else qi = qi.next = e;
          return t;
        }
        var ea = null,
          ta = !1;
        function na(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ra(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ia(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function aa(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            tu(e)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === ea ? (ea = [n]) : ea.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function oa(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function sa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function la(e, t, n, r) {
          var i = e.updateQueue;
          ta = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (a = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var f = i.baseState;
            for (o = 0, c = u = l = null, s = a; ; ) {
              var d = s.lane,
                p = s.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = s;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = z({}, f, d);
                      break e;
                    case 2:
                      ta = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (d = i.effects) ? (i.effects = [s]) : d.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (d = s).next),
                  (d.next = null),
                  (i.lastBaseUpdate = d),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (l = f),
              (i.baseState = l),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (Ll |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function ua(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var ca = new r.Component().refs;
        function fa(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : z({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var da = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Kl(),
              i = Zl(e),
              a = ia(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              aa(e, a),
              null !== (t = Jl(e, i, r)) && oa(t, e, i);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Kl(),
              i = Zl(e),
              a = ia(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              aa(e, a),
              null !== (t = Jl(e, i, r)) && oa(t, e, i);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Kl(),
              r = Zl(e),
              i = ia(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              aa(e, i),
              null !== (t = Jl(e, r, n)) && oa(t, e, r);
          },
        };
        function pa(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(i, a);
        }
        function ha(e, t, n) {
          var r = !1,
            i = Ci,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ji(a))
              : ((i = Oi(t) ? Mi : Pi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ai(e, i)
                  : Ci)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = da),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function va(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && da.enqueueReplaceState(t, t.state, null);
        }
        function ma(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = ca), na(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = Ji(a))
            : ((a = Oi(t) ? Mi : Pi.current), (i.context = Ai(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (fa(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && da.enqueueReplaceState(i, i.state, null),
              la(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        var ga = [],
          ya = 0,
          ba = null,
          xa = 0,
          wa = [],
          _a = 0,
          ka = null,
          Sa = 1,
          Ta = "";
        function Ea(e, t) {
          (ga[ya++] = xa), (ga[ya++] = ba), (ba = e), (xa = t);
        }
        function Ca(e, t, n) {
          (wa[_a++] = Sa), (wa[_a++] = Ta), (wa[_a++] = ka), (ka = e);
          var r = Sa;
          e = Ta;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Sa = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Ta = a + e);
          } else (Sa = (1 << a) | (n << i) | r), (Ta = e);
        }
        function Pa(e) {
          null !== e.return && (Ea(e, 1), Ca(e, 1, 0));
        }
        function ja(e) {
          for (; e === ba; )
            (ba = ga[--ya]), (ga[ya] = null), (xa = ga[--ya]), (ga[ya] = null);
          for (; e === ka; )
            (ka = wa[--_a]),
              (wa[_a] = null),
              (Ta = wa[--_a]),
              (wa[_a] = null),
              (Sa = wa[--_a]),
              (wa[_a] = null);
        }
        var Ma = null,
          Aa = null,
          Oa = !1,
          La = null;
        function Na(e, t) {
          var n = Mu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function Ra(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (Ma = e), (Aa = ui(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Ma = e), (Aa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== ka ? { id: Sa, overflow: Ta } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Mu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Ma = e),
                (Aa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function Da(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function za(e) {
          if (Oa) {
            var t = Aa;
            if (t) {
              var n = t;
              if (!Ra(e, t)) {
                if (Da(e)) throw Error(a(418));
                t = ui(n.nextSibling);
                var r = Ma;
                t && Ra(e, t)
                  ? Na(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (Oa = !1), (Ma = e));
              }
            } else {
              if (Da(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (Oa = !1), (Ma = e);
            }
          }
        }
        function Fa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ma = e;
        }
        function Ia(e) {
          if (e !== Ma) return !1;
          if (!Oa) return Fa(e), (Oa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = Aa))
          ) {
            if (Da(e)) {
              for (e = Aa; e; ) e = ui(e.nextSibling);
              throw Error(a(418));
            }
            for (; t; ) Na(e, t), (t = ui(t.nextSibling));
          }
          if ((Fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Aa = ui(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Aa = null;
            }
          } else Aa = Ma ? ui(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Va() {
          (Aa = Ma = null), (Oa = !1);
        }
        function Ua(e) {
          null === La ? (La = [e]) : La.push(e);
        }
        function Ba(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === ca && (t = i.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ha(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Wa(e) {
          return (0, e._init)(e._payload);
        }
        function Ya(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Ou(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === O &&
                    Wa(a) === t.type))
              ? (((r = i(t, n.props)).ref = Ba(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = Ba(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Nu(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Du("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = Ba(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = zu(t, e.mode, n)).return = e), t;
                case O:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = Nu(t, e.mode, n, null)).return = e), t;
              Ha(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === i ? u(e, t, n, r) : null;
                case _:
                  return n.key === i ? c(e, t, n, r) : null;
                case O:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== i ? null : f(e, t, n, r, null);
              Ha(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case _:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case O:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || R(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              Ha(t, r);
            }
            return null;
          }
          function v(i, a, s, l) {
            for (
              var u = null, c = null, f = a, v = (a = 0), m = null;
              null !== f && v < s.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(i, f, s[v], l);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(i, f),
                (a = o(g, a, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (f = m);
            }
            if (v === s.length) return n(i, f), Oa && Ea(i, v), u;
            if (null === f) {
              for (; v < s.length; v++)
                null !== (f = d(i, s[v], l)) &&
                  ((a = o(f, a, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return Oa && Ea(i, v), u;
            }
            for (f = r(i, f); v < s.length; v++)
              null !== (m = h(f, i, v, s[v], l)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (a = o(m, a, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              Oa && Ea(i, v),
              u
            );
          }
          function m(i, s, l, u) {
            var c = R(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var f = (c = null), v = s, m = (s = 0), g = null, y = l.next();
              null !== v && !y.done;
              m++, y = l.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(i, v, y.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (s = o(b, s, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(i, v), Oa && Ea(i, m), c;
            if (null === v) {
              for (; !y.done; m++, y = l.next())
                null !== (y = d(i, y.value, u)) &&
                  ((s = o(y, s, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return Oa && Ea(i, m), c;
            }
            for (v = r(i, v); !y.done; m++, y = l.next())
              null !== (y = h(v, i, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (s = o(y, s, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              Oa && Ea(i, m),
              c
            );
          }
          return function e(r, a, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === O &&
                            Wa(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = Ba(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === k
                      ? (((a = Nu(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = a))
                      : (((l = Lu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = Ba(r, a, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case _:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = zu(o, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case O:
                  return e(r, a, (c = o._init)(o._payload), l);
              }
              if (te(o)) return v(r, a, o, l);
              if (R(o)) return m(r, a, o, l);
              Ha(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Du(o, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var Xa = Ya(!0),
          qa = Ya(!1),
          $a = {},
          Qa = Si($a),
          Ga = Si($a),
          Ka = Si($a);
        function Za(e) {
          if (e === $a) throw Error(a(174));
          return e;
        }
        function Ja(e, t) {
          switch ((Ei(Ka, t), Ei(Ga, e), Ei(Qa, $a), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ti(Qa), Ei(Qa, t);
        }
        function eo() {
          Ti(Qa), Ti(Ga), Ti(Ka);
        }
        function to(e) {
          Za(Ka.current);
          var t = Za(Qa.current),
            n = le(t, e.type);
          t !== n && (Ei(Ga, e), Ei(Qa, n));
        }
        function no(e) {
          Ga.current === e && (Ti(Qa), Ti(Ga));
        }
        var ro = Si(0);
        function io(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ao = [];
        function oo() {
          for (var e = 0; e < ao.length; e++)
            ao[e]._workInProgressVersionPrimary = null;
          ao.length = 0;
        }
        var so = x.ReactCurrentDispatcher,
          lo = x.ReactCurrentBatchConfig,
          uo = 0,
          co = null,
          fo = null,
          po = null,
          ho = !1,
          vo = !1,
          mo = 0,
          go = 0;
        function yo() {
          throw Error(a(321));
        }
        function bo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function xo(e, t, n, r, i, o) {
          if (
            ((uo = o),
            (co = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (so.current = null === e || null === e.memoizedState ? rs : is),
            (e = n(r, i)),
            vo)
          ) {
            o = 0;
            do {
              if (((vo = !1), (mo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (po = fo = null),
                (t.updateQueue = null),
                (so.current = as),
                (e = n(r, i));
            } while (vo);
          }
          if (
            ((so.current = ns),
            (t = null !== fo && null !== fo.next),
            (uo = 0),
            (po = fo = co = null),
            (ho = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function wo() {
          var e = 0 !== mo;
          return (mo = 0), e;
        }
        function _o() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === po ? (co.memoizedState = po = e) : (po = po.next = e), po
          );
        }
        function ko() {
          if (null === fo) {
            var e = co.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = fo.next;
          var t = null === po ? co.memoizedState : po.next;
          if (null !== t) (po = t), (fo = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (fo = e).memoizedState,
              baseState: fo.baseState,
              baseQueue: fo.baseQueue,
              queue: fo.queue,
              next: null,
            }),
              null === po ? (co.memoizedState = po = e) : (po = po.next = e);
          }
          return po;
        }
        function So(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function To(e) {
          var t = ko(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = fo,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var s = i.next;
              (i.next = o.next), (o.next = s);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((uo & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = d), (s = r)) : (u = u.next = d),
                  (co.lanes |= f),
                  (Ll |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (co.lanes |= o), (Ll |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Eo(e) {
          var t = ko(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== i);
            sr(o, t.memoizedState) || (ws = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Co() {}
        function Po(e, t) {
          var n = co,
            r = ko(),
            i = t(),
            o = !sr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (ws = !0)),
            (r = r.queue),
            Io(Ao.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== po && 1 & po.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              No(9, Mo.bind(null, n, r, i, t), void 0, null),
              null === El)
            )
              throw Error(a(349));
            0 !== (30 & uo) || jo(n, t, i);
          }
          return i;
        }
        function jo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = co.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (co.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Mo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Oo(t) && Jl(e, 1, -1);
        }
        function Ao(e, t, n) {
          return n(function () {
            Oo(t) && Jl(e, 1, -1);
          });
        }
        function Oo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Lo(e) {
          var t = _o();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: So,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ko.bind(null, co, e)),
            [t.memoizedState, e]
          );
        }
        function No(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = co.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (co.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ro() {
          return ko().memoizedState;
        }
        function Do(e, t, n, r) {
          var i = _o();
          (co.flags |= e),
            (i.memoizedState = No(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function zo(e, t, n, r) {
          var i = ko();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== fo) {
            var o = fo.memoizedState;
            if (((a = o.destroy), null !== r && bo(r, o.deps)))
              return void (i.memoizedState = No(t, n, a, r));
          }
          (co.flags |= e), (i.memoizedState = No(1 | t, n, a, r));
        }
        function Fo(e, t) {
          return Do(8390656, 8, e, t);
        }
        function Io(e, t) {
          return zo(2048, 8, e, t);
        }
        function Vo(e, t) {
          return zo(4, 2, e, t);
        }
        function Uo(e, t) {
          return zo(4, 4, e, t);
        }
        function Bo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ho(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            zo(4, 4, Bo.bind(null, t, e), n)
          );
        }
        function Wo() {}
        function Yo(e, t) {
          var n = ko();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && bo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xo(e, t) {
          var n = ko();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && bo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function qo(e, t, n) {
          return 0 === (21 & uo)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = vt()), (co.lanes |= n), (Ll |= n), (e.baseState = !0)),
              t);
        }
        function $o(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = lo.transition;
          lo.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (lo.transition = r);
          }
        }
        function Qo() {
          return ko().memoizedState;
        }
        function Go(e, t, n) {
          var r = Zl(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Zo(e)
              ? Jo(t, n)
              : (es(e, t, n),
                null !== (e = Jl(e, r, (n = Kl()))) && ts(e, t, r));
        }
        function Ko(e, t, n) {
          var r = Zl(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Zo(e)) Jo(t, i);
          else {
            es(e, t, i);
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), sr(s, o)))
                  return;
              } catch (l) {}
            null !== (e = Jl(e, r, (n = Kl()))) && ts(e, t, r);
          }
        }
        function Zo(e) {
          var t = e.alternate;
          return e === co || (null !== t && t === co);
        }
        function Jo(e, t) {
          vo = ho = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function es(e, t, n) {
          tu(e)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === ea ? (ea = [t]) : ea.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function ts(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ns = {
            readContext: Ji,
            useCallback: yo,
            useContext: yo,
            useEffect: yo,
            useImperativeHandle: yo,
            useInsertionEffect: yo,
            useLayoutEffect: yo,
            useMemo: yo,
            useReducer: yo,
            useRef: yo,
            useState: yo,
            useDebugValue: yo,
            useDeferredValue: yo,
            useTransition: yo,
            useMutableSource: yo,
            useSyncExternalStore: yo,
            useId: yo,
            unstable_isNewReconciler: !1,
          },
          rs = {
            readContext: Ji,
            useCallback: function (e, t) {
              return (_o().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ji,
            useEffect: Fo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Do(4194308, 4, Bo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Do(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Do(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = _o();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = _o();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Go.bind(null, co, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (_o().memoizedState = e);
            },
            useState: Lo,
            useDebugValue: Wo,
            useDeferredValue: function (e) {
              return (_o().memoizedState = e);
            },
            useTransition: function () {
              var e = Lo(!1),
                t = e[0];
              return (
                (e = $o.bind(null, e[1])), (_o().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = co,
                i = _o();
              if (Oa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === El)) throw Error(a(349));
                0 !== (30 & uo) || jo(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Fo(Ao.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                No(9, Mo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = _o(),
                t = El.identifierPrefix;
              if (Oa) {
                var n = Ta;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Sa & ~(1 << (32 - ot(Sa) - 1))).toString(32) + n)),
                  0 < (n = mo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = go++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          is = {
            readContext: Ji,
            useCallback: Yo,
            useContext: Ji,
            useEffect: Io,
            useImperativeHandle: Ho,
            useInsertionEffect: Vo,
            useLayoutEffect: Uo,
            useMemo: Xo,
            useReducer: To,
            useRef: Ro,
            useState: function () {
              return To(So);
            },
            useDebugValue: Wo,
            useDeferredValue: function (e) {
              return qo(ko(), fo.memoizedState, e);
            },
            useTransition: function () {
              return [To(So)[0], ko().memoizedState];
            },
            useMutableSource: Co,
            useSyncExternalStore: Po,
            useId: Qo,
            unstable_isNewReconciler: !1,
          },
          as = {
            readContext: Ji,
            useCallback: Yo,
            useContext: Ji,
            useEffect: Io,
            useImperativeHandle: Ho,
            useInsertionEffect: Vo,
            useLayoutEffect: Uo,
            useMemo: Xo,
            useReducer: Eo,
            useRef: Ro,
            useState: function () {
              return Eo(So);
            },
            useDebugValue: Wo,
            useDeferredValue: function (e) {
              var t = ko();
              return null === fo
                ? (t.memoizedState = e)
                : qo(t, fo.memoizedState, e);
            },
            useTransition: function () {
              return [Eo(So)[0], ko().memoizedState];
            },
            useMutableSource: Co,
            useSyncExternalStore: Po,
            useId: Qo,
            unstable_isNewReconciler: !1,
          };
        function os(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function ss(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ls,
          us,
          cs,
          fs = "function" === typeof WeakMap ? WeakMap : Map;
        function ds(e, t, n) {
          ((n = ia(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ul || ((Ul = !0), (Bl = r)), ss(0, t);
            }),
            n
          );
        }
        function ps(e, t, n) {
          (n = ia(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                ss(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                ss(0, t),
                  "function" !== typeof r &&
                    (null === Hl ? (Hl = new Set([this])) : Hl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Su.bind(null, e, t, n)), t.then(e, e));
        }
        function vs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ms(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ia(-1, 1)).tag = 2), aa(n, t))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        function gs(e, t) {
          if (!Oa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ys(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function bs(e, t, n) {
          var r = t.pendingProps;
          switch ((ja(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ys(t), null;
            case 1:
            case 17:
              return Oi(t.type) && Li(), ys(t), null;
            case 3:
              return (
                (r = t.stateNode),
                eo(),
                Ti(ji),
                Ti(Pi),
                oo(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Ia(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== La && (au(La), (La = null)))),
                ys(t),
                null
              );
            case 5:
              no(t);
              var i = Za(Ka.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                us(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return ys(t), null;
                }
                if (((e = Za(Qa.current)), Ia(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[di] = t), (r[pi] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Rr.length; i++) Ir(Rr[i], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      G(r, o), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), Ir("invalid", r);
                  }
                  for (var l in (ye(n, o), (i = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (i = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (i = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      X(r), J(r, o, !0);
                      break;
                    case "textarea":
                      X(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[di] = t),
                    (e[pi] = r),
                    ls(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Rr.length; i++) Ir(Rr[i], e);
                        i = r;
                        break;
                      case "source":
                        Ir("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (i = r);
                        break;
                      case "details":
                        Ir("toggle", e), (i = r);
                        break;
                      case "input":
                        G(e, r), (i = Q(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = z({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Ir("invalid", e);
                    }
                    for (o in (ye(n, i), (u = i)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ir("scroll", e)
                              : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        X(e), J(e, r, !1);
                        break;
                      case "textarea":
                        X(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ys(t), null;
            case 6:
              if (e && null != t.stateNode) cs(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Za(Ka.current)), Za(Qa.current), Ia(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[di] = t),
                    (o = r.nodeValue !== n) && null !== (e = Ma))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[di] = t),
                    (t.stateNode = r);
              }
              return ys(t), null;
            case 13:
              if (
                (Ti(ro),
                (r = t.memoizedState),
                Oa &&
                  null !== Aa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags))
              ) {
                for (r = Aa; r; ) r = ui(r.nextSibling);
                return Va(), (t.flags |= 98560), t;
              }
              if (null !== r && null !== r.dehydrated) {
                if (((r = Ia(t)), null === e)) {
                  if (!r) throw Error(a(318));
                  if (
                    !(r = null !== (r = t.memoizedState) ? r.dehydrated : null)
                  )
                    throw Error(a(317));
                  r[di] = t;
                } else
                  Va(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                return ys(t), null;
              }
              return (
                null !== La && (au(La), (La = null)),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? Ia(t) : (n = null !== e.memoizedState),
                    r !== n &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 !== (1 & t.mode) &&
                        (null === e || 0 !== (1 & ro.current)
                          ? 0 === Al && (Al = 3)
                          : hu())),
                    null !== t.updateQueue && (t.flags |= 4),
                    ys(t),
                    null)
              );
            case 4:
              return (
                eo(), null === e && Br(t.stateNode.containerInfo), ys(t), null
              );
            case 10:
              return Gi(t.type._context), ys(t), null;
            case 19:
              if ((Ti(ro), null === (o = t.memoizedState))) return ys(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) gs(o, !1);
                else {
                  if (0 !== Al || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = io(e))) {
                        for (
                          t.flags |= 128,
                            gs(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ei(ro, (1 & ro.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ke() > Il &&
                    ((t.flags |= 128),
                    (r = !0),
                    gs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = io(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      gs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !Oa)
                    )
                      return ys(t), null;
                  } else
                    2 * Ke() - o.renderingStartTime > Il &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      gs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = ro.current),
                  Ei(ro, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ys(t), null);
            case 22:
            case 23:
              return (
                cu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & jl) &&
                    (ys(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ys(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        (ls = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (us = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Za(Qa.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = Q(e, i)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (i = z({}, i, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var l = i[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ir("scroll", e),
                            o || l === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (cs = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var xs = x.ReactCurrentOwner,
          ws = !1;
        function _s(e, t, n, r) {
          t.child = null === e ? qa(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function ks(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            Zi(t, i),
            (r = xo(e, t, n, r, a, i)),
            (n = wo()),
            null === e || ws
              ? (Oa && n && Pa(t), (t.flags |= 1), _s(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Ws(e, t, i))
          );
        }
        function Ss(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Au(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ts(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Ou(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ts(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Ws(e, t, i);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Ps(e, t, n, r, i);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ei(Ml, jl),
                (jl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ei(Ml, jl),
                  (jl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Ei(Ml, jl),
                (jl |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ei(Ml, jl),
              (jl |= r);
          return _s(e, t, i, n), t.child;
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ps(e, t, n, r, i) {
          var a = Oi(n) ? Mi : Pi.current;
          return (
            (a = Ai(t, a)),
            Zi(t, i),
            (n = xo(e, t, n, r, a, i)),
            (r = wo()),
            null === e || ws
              ? (Oa && r && Pa(t), (t.flags |= 1), _s(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Ws(e, t, i))
          );
        }
        function js(e, t, n, r, i) {
          if (Oi(n)) {
            var a = !0;
            Di(t);
          } else a = !1;
          if ((Zi(t, i), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              ha(t, n, r),
              ma(t, n, r, i),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ji(u))
              : (u = Ai(t, (u = Oi(n) ? Mi : Pi.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && va(t, o, r, u)),
              (ta = !1);
            var d = t.memoizedState;
            (o.state = d),
              la(t, r, o, i),
              (l = t.memoizedState),
              s !== r || d !== l || ji.current || ta
                ? ("function" === typeof c &&
                    (fa(t, n, c, r), (l = t.memoizedState)),
                  (s = ta || pa(t, n, s, r, d, l, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              ra(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : Wi(t.type, s)),
              (o.props = u),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ji(l))
                : (l = Ai(t, (l = Oi(n) ? Mi : Pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== f || d !== l) && va(t, o, r, l)),
              (ta = !1),
              (d = t.memoizedState),
              (o.state = d),
              la(t, r, o, i);
            var h = t.memoizedState;
            s !== f || d !== h || ji.current || ta
              ? ("function" === typeof p &&
                  (fa(t, n, p, r), (h = t.memoizedState)),
                (u = ta || pa(t, n, u, r, d, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ms(e, t, n, r, a, i);
        }
        function Ms(e, t, n, r, i, a) {
          Cs(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && zi(t, n, !1), Ws(e, t, a);
          (r = t.stateNode), (xs.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, s, a)))
              : _s(e, t, s, a),
            (t.memoizedState = r.state),
            i && zi(t, n, !0),
            t.child
          );
        }
        function As(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ni(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ni(0, t.context, !1),
            Ja(e, t.containerInfo);
        }
        function Os(e, t, n, r, i) {
          return Va(), Ua(i), (t.flags |= 256), _s(e, t, n, r), t.child;
        }
        var Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ns(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Rs(e, t) {
          return {
            baseLanes: e.baseLanes | t,
            cachePool: null,
            transitions: e.transitions,
          };
        }
        function Ds(e, t, n) {
          var r,
            i = t.pendingProps,
            o = ro.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ei(ro, 1 & o),
            null === e)
          )
            return (
              za(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((o = i.children),
                  (e = i.fallback),
                  s
                    ? ((i = t.mode),
                      (s = t.child),
                      (o = { mode: "hidden", children: o }),
                      0 === (1 & i) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = o))
                        : (s = Ru(o, i, 0, null)),
                      (e = Nu(e, i, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Ns(n)),
                      (t.memoizedState = Ls),
                      e)
                    : zs(t, o))
            );
          if (null !== (o = e.memoizedState)) {
            if (null !== (r = o.dehydrated)) {
              if (l)
                return 256 & t.flags
                  ? ((t.flags &= -257), Vs(e, t, n, Error(a(422))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = i.fallback),
                    (o = t.mode),
                    (i = Ru(
                      { mode: "visible", children: i.children },
                      o,
                      0,
                      null
                    )),
                    ((s = Nu(s, o, n, null)).flags |= 2),
                    (i.return = t),
                    (s.return = t),
                    (i.sibling = s),
                    (t.child = i),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, n),
                    (t.child.memoizedState = Ns(n)),
                    (t.memoizedState = Ls),
                    s);
              if (0 === (1 & t.mode)) t = Vs(e, t, n, null);
              else if ("$!" === r.data) t = Vs(e, t, n, Error(a(419)));
              else if (((i = 0 !== (n & e.childLanes)), ws || i)) {
                if (null !== (i = El)) {
                  switch (n & -n) {
                    case 4:
                      s = 2;
                      break;
                    case 16:
                      s = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      s = 32;
                      break;
                    case 536870912:
                      s = 268435456;
                      break;
                    default:
                      s = 0;
                  }
                  0 !== (i = 0 !== (s & (i.suspendedLanes | n)) ? 0 : s) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Jl(e, i, -1));
                }
                hu(), (t = Vs(e, t, n, Error(a(421))));
              } else
                "$?" === r.data
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = Eu.bind(null, e)),
                    (r._reactRetry = t),
                    (t = null))
                  : ((n = o.treeContext),
                    (Aa = ui(r.nextSibling)),
                    (Ma = t),
                    (Oa = !0),
                    (La = null),
                    null !== n &&
                      ((wa[_a++] = Sa),
                      (wa[_a++] = Ta),
                      (wa[_a++] = ka),
                      (Sa = n.id),
                      (Ta = n.overflow),
                      (ka = t)),
                    ((t = zs(t, t.pendingProps.children)).flags |= 4096));
              return t;
            }
            return s
              ? ((i = Is(e, t, i.children, i.fallback, n)),
                (s = t.child),
                (o = e.child.memoizedState),
                (s.memoizedState = null === o ? Ns(n) : Rs(o, n)),
                (s.childLanes = e.childLanes & ~n),
                (t.memoizedState = Ls),
                i)
              : ((n = Fs(e, t, i.children, n)), (t.memoizedState = null), n);
          }
          return s
            ? ((i = Is(e, t, i.children, i.fallback, n)),
              (s = t.child),
              (o = e.child.memoizedState),
              (s.memoizedState = null === o ? Ns(n) : Rs(o, n)),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ls),
              i)
            : ((n = Fs(e, t, i.children, n)), (t.memoizedState = null), n);
        }
        function zs(e, t) {
          return (
            ((t = Ru(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fs(e, t, n, r) {
          var i = e.child;
          return (
            (e = i.sibling),
            (n = Ou(i, { mode: "visible", children: n })),
            0 === (1 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = n)
          );
        }
        function Is(e, t, n, r, i) {
          var a = t.mode,
            o = (e = e.child).sibling,
            s = { mode: "hidden", children: n };
          return (
            0 === (1 & a) && t.child !== e
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = s),
                (t.deletions = null))
              : ((n = Ou(e, s)).subtreeFlags = 14680064 & e.subtreeFlags),
            null !== o ? (r = Ou(o, r)) : ((r = Nu(r, a, i, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function Vs(e, t, n, r) {
          return (
            null !== r && Ua(r),
            Xa(t, e.child, null, n),
            ((e = zs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ki(e.return, t, n);
        }
        function Bs(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Hs(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((_s(e, t, r.children, n), 0 !== (2 & (r = ro.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                else if (19 === e.tag) Us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ei(ro, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === io(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Bs(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === io(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Bs(t, !0, n, null, a);
                break;
              case "together":
                Bs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ll |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Ou((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ou(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ys(e, t) {
          switch ((ja(t), t.tag)) {
            case 1:
              return (
                Oi(t.type) && Li(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                eo(),
                Ti(ji),
                Ti(Pi),
                oo(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return no(t), null;
            case 13:
              if (
                (Ti(ro),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                Va();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ti(ro), null;
            case 4:
              return eo(), null;
            case 10:
              return Gi(t.type._context), null;
            case 22:
            case 23:
              return cu(), null;
            default:
              return null;
          }
        }
        var Xs = !1,
          qs = !1,
          $s = "function" === typeof WeakSet ? WeakSet : Set,
          Qs = null;
        function Gs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ku(e, t, r);
              }
            else n.current = null;
        }
        function Ks(e, t, n) {
          try {
            n();
          } catch (r) {
            ku(e, t, r);
          }
        }
        var Zs = !1;
        function Js(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && Ks(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function el(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function tl(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function nl(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), nl(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[di],
              delete t[pi],
              delete t[vi],
              delete t[mi],
              delete t[gi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function rl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function il(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || rl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function al(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (al(e, t, n), e = e.sibling; null !== e; )
              al(e, t, n), (e = e.sibling);
        }
        function ol(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ol(e, t, n), e = e.sibling; null !== e; )
              ol(e, t, n), (e = e.sibling);
        }
        var sl = null,
          ll = !1;
        function ul(e, t, n) {
          for (n = n.child; null !== n; ) cl(e, t, n), (n = n.sibling);
        }
        function cl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              qs || Gs(n, t);
            case 6:
              var r = sl,
                i = ll;
              (sl = null),
                ul(e, t, n),
                (ll = i),
                null !== (sl = r) &&
                  (ll
                    ? ((e = sl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : sl.removeChild(n.stateNode));
              break;
            case 18:
              null !== sl &&
                (ll
                  ? ((e = sl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? li(e.parentNode, n)
                      : 1 === e.nodeType && li(e, n),
                    Bt(e))
                  : li(sl, n.stateNode));
              break;
            case 4:
              (r = sl),
                (i = ll),
                (sl = n.stateNode.containerInfo),
                (ll = !0),
                ul(e, t, n),
                (sl = r),
                (ll = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !qs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      Ks(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              ul(e, t, n);
              break;
            case 1:
              if (
                !qs &&
                (Gs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  ku(n, t, s);
                }
              ul(e, t, n);
              break;
            case 21:
              ul(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((qs = (r = qs) || null !== n.memoizedState),
                  ul(e, t, n),
                  (qs = r))
                : ul(e, t, n);
              break;
            default:
              ul(e, t, n);
          }
        }
        function fl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new $s()),
              t.forEach(function (t) {
                var r = Cu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function dl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (sl = l.stateNode), (ll = !1);
                      break e;
                    case 3:
                    case 4:
                      (sl = l.stateNode.containerInfo), (ll = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === sl) throw Error(a(160));
                cl(o, s, i), (sl = null), (ll = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                ku(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) pl(t, e), (t = t.sibling);
        }
        function pl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((dl(t, e), hl(e), 4 & r)) {
                try {
                  Js(3, e, e.return), el(3, e);
                } catch (v) {
                  ku(e, e.return, v);
                }
                try {
                  Js(5, e, e.return);
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              break;
            case 1:
              dl(t, e), hl(e), 512 & r && null !== n && Gs(n, n.return);
              break;
            case 5:
              if (
                (dl(t, e),
                hl(e),
                512 & r && null !== n && Gs(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  de(i, "");
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      K(i, o),
                      be(l, s);
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var f = u[s],
                        d = u[s + 1];
                      "style" === f
                        ? me(i, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, d)
                        : "children" === f
                        ? de(i, d)
                        : b(i, f, d, c);
                    }
                    switch (l) {
                      case "input":
                        Z(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(i, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[pi] = o;
                  } catch (v) {
                    ku(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((dl(t, e), hl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (c = e.stateNode), (f = e.memoizedProps);
                try {
                  c.nodeValue = f;
                } catch (v) {
                  ku(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (dl(t, e),
                hl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (v) {
                  ku(e, e.return, v);
                }
              break;
            case 4:
            default:
              dl(t, e), hl(e);
              break;
            case 13:
              dl(t, e),
                hl(e),
                8192 & (c = e.child).flags &&
                  null !== c.memoizedState &&
                  (null === c.alternate ||
                    null === c.alternate.memoizedState) &&
                  (Fl = Ke()),
                4 & r && fl(e);
              break;
            case 22:
              if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((qs = (f = qs) || c), dl(t, e), (qs = f))
                  : dl(t, e),
                hl(e),
                8192 & r)
              ) {
                f = null !== e.memoizedState;
                e: for (d = null, p = e; ; ) {
                  if (5 === p.tag) {
                    if (null === d) {
                      d = p;
                      try {
                        (i = p.stateNode),
                          f
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = p.stateNode),
                              (s =
                                void 0 !== (u = p.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = ve("display", s)));
                      } catch (v) {
                        ku(e, e.return, v);
                      }
                    }
                  } else if (6 === p.tag) {
                    if (null === d)
                      try {
                        p.stateNode.nodeValue = f ? "" : p.memoizedProps;
                      } catch (v) {
                        ku(e, e.return, v);
                      }
                  } else if (
                    ((22 !== p.tag && 23 !== p.tag) ||
                      null === p.memoizedState ||
                      p === e) &&
                    null !== p.child
                  ) {
                    (p.child.return = p), (p = p.child);
                    continue;
                  }
                  if (p === e) break e;
                  for (; null === p.sibling; ) {
                    if (null === p.return || p.return === e) break e;
                    d === p && (d = null), (p = p.return);
                  }
                  d === p && (d = null),
                    (p.sibling.return = p.return),
                    (p = p.sibling);
                }
                if (f && !c && 0 !== (1 & e.mode))
                  for (Qs = e, e = e.child; null !== e; ) {
                    for (c = Qs = e; null !== Qs; ) {
                      switch (((d = (f = Qs).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          Js(4, f, f.return);
                          break;
                        case 1:
                          if (
                            (Gs(f, f.return),
                            "function" ===
                              typeof (o = f.stateNode).componentWillUnmount)
                          ) {
                            (p = f), (h = f.return);
                            try {
                              (i = p),
                                (o.props = i.memoizedProps),
                                (o.state = i.memoizedState),
                                o.componentWillUnmount();
                            } catch (v) {
                              ku(p, h, v);
                            }
                          }
                          break;
                        case 5:
                          Gs(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            yl(c);
                            continue;
                          }
                      }
                      null !== d ? ((d.return = f), (Qs = d)) : yl(c);
                    }
                    e = e.sibling;
                  }
              }
              break;
            case 19:
              dl(t, e), hl(e), 4 & r && fl(e);
            case 21:
          }
        }
        function hl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (rl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (de(i, ""), (r.flags &= -33)),
                    ol(e, il(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  al(e, il(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              ku(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vl(e, t, n) {
          (Qs = e), ml(e, t, n);
        }
        function ml(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Qs; ) {
            var i = Qs,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Xs;
              if (!o) {
                var s = i.alternate,
                  l = (null !== s && null !== s.memoizedState) || qs;
                s = Xs;
                var u = qs;
                if (((Xs = o), (qs = l) && !u))
                  for (Qs = i; null !== Qs; )
                    (l = (o = Qs).child),
                      22 === o.tag && null !== o.memoizedState
                        ? bl(i)
                        : null !== l
                        ? ((l.return = o), (Qs = l))
                        : bl(i);
                for (; null !== a; ) (Qs = a), ml(a, t, n), (a = a.sibling);
                (Qs = i), (Xs = s), (qs = u);
              }
              gl(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), (Qs = a))
                : gl(e);
          }
        }
        function gl(e) {
          for (; null !== Qs; ) {
            var t = Qs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs || el(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !qs)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : Wi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && ua(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        ua(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                qs || (512 & t.flags && tl(t));
              } catch (p) {
                ku(t, t.return, p);
              }
            }
            if (t === e) {
              Qs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Qs = n);
              break;
            }
            Qs = t.return;
          }
        }
        function yl(e) {
          for (; null !== Qs; ) {
            var t = Qs;
            if (t === e) {
              Qs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Qs = n);
              break;
            }
            Qs = t.return;
          }
        }
        function bl(e) {
          for (; null !== Qs; ) {
            var t = Qs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    el(4, t);
                  } catch (l) {
                    ku(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      ku(t, i, l);
                    }
                  }
                  var a = t.return;
                  try {
                    tl(t);
                  } catch (l) {
                    ku(t, a, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    tl(t);
                  } catch (l) {
                    ku(t, o, l);
                  }
              }
            } catch (l) {
              ku(t, t.return, l);
            }
            if (t === e) {
              Qs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Qs = s);
              break;
            }
            Qs = t.return;
          }
        }
        var xl,
          wl = Math.ceil,
          _l = x.ReactCurrentDispatcher,
          kl = x.ReactCurrentOwner,
          Sl = x.ReactCurrentBatchConfig,
          Tl = 0,
          El = null,
          Cl = null,
          Pl = 0,
          jl = 0,
          Ml = Si(0),
          Al = 0,
          Ol = null,
          Ll = 0,
          Nl = 0,
          Rl = 0,
          Dl = null,
          zl = null,
          Fl = 0,
          Il = 1 / 0,
          Vl = null,
          Ul = !1,
          Bl = null,
          Hl = null,
          Wl = !1,
          Yl = null,
          Xl = 0,
          ql = 0,
          $l = null,
          Ql = -1,
          Gl = 0;
        function Kl() {
          return 0 !== (6 & Tl) ? Ke() : -1 !== Ql ? Ql : (Ql = Ke());
        }
        function Zl(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Tl) && 0 !== Pl
            ? Pl & -Pl
            : null !== Hi.transition
            ? (0 === Gl && (Gl = vt()), Gl)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function Jl(e, t, n) {
          if (50 < ql) throw ((ql = 0), ($l = null), Error(a(185)));
          var r = eu(e, t);
          return null === r
            ? null
            : (gt(r, t, n),
              (0 !== (2 & Tl) && r === El) ||
                (r === El &&
                  (0 === (2 & Tl) && (Nl |= t), 4 === Al && ou(r, Pl)),
                nu(r, n),
                1 === t &&
                  0 === Tl &&
                  0 === (1 & e.mode) &&
                  ((Il = Ke() + 500), Ii && Bi())),
              r);
        }
        function eu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function tu(e) {
          return (
            (null !== El || null !== ea) && 0 !== (1 & e.mode) && 0 === (2 & Tl)
          );
        }
        function nu(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                s = 1 << o,
                l = i[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (i[o] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = dt(e, e === El ? Pl : 0);
          if (0 === r)
            null !== n && $e(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && $e(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ii = !0), Ui(e);
                  })(su.bind(null, e))
                : Ui(su.bind(null, e)),
                oi(function () {
                  0 === Tl && Bi();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pu(n, ru.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ru(e, t) {
          if (((Ql = -1), (Gl = 0), 0 !== (6 & Tl))) throw Error(a(327));
          var n = e.callbackNode;
          if (wu() && e.callbackNode !== n) return null;
          var r = dt(e, e === El ? Pl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var i = Tl;
            Tl |= 2;
            var o = pu();
            for (
              (El === e && Pl === t) ||
              ((Vl = null), (Il = Ke() + 500), fu(e, t));
              ;

            )
              try {
                gu();
                break;
              } catch (l) {
                du(e, l);
              }
            Qi(),
              (_l.current = o),
              (Tl = i),
              null !== Cl ? (t = 0) : ((El = null), (Pl = 0), (t = Al));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = iu(e, i))),
              1 === t)
            )
              throw ((n = Ol), fu(e, 0), ou(e, r), nu(e, Ke()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!sr(a(), i)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = iu(e, o))),
                  1 === t))
              )
                throw ((n = Ol), fu(e, 0), ou(e, r), nu(e, Ke()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  xu(e, zl, Vl);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = Fl + 500 - Ke()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      Kl(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(xu.bind(null, e, zl, Vl), t);
                    break;
                  }
                  xu(e, zl, Vl);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > i && (i = s), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * wl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(xu.bind(null, e, zl, Vl), r);
                    break;
                  }
                  xu(e, zl, Vl);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return nu(e, Ke()), e.callbackNode === n ? ru.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Dl;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = zl), (zl = n), null !== t && au(t)),
            e
          );
        }
        function au(e) {
          null === zl ? (zl = e) : zl.push.apply(zl, e);
        }
        function ou(e, t) {
          for (
            t &= ~Rl,
              t &= ~Nl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Tl)) throw Error(a(327));
          wu();
          var t = dt(e, 0);
          if (0 === (1 & t)) return nu(e, Ke()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Ol), fu(e, 0), ou(e, t), nu(e, Ke()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, zl, Vl),
            nu(e, Ke()),
            null
          );
        }
        function lu(e, t) {
          var n = Tl;
          Tl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && ((Il = Ke() + 500), Ii && Bi());
          }
        }
        function uu(e) {
          null !== Yl && 0 === Yl.tag && 0 === (6 & Tl) && wu();
          var t = Tl;
          Tl |= 1;
          var n = Sl.transition,
            r = bt;
          try {
            if (((Sl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Sl.transition = n), 0 === (6 & (Tl = t)) && Bi();
          }
        }
        function cu() {
          (jl = Ml.current), Ti(Ml);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Cl))
            for (n = Cl.return; null !== n; ) {
              var r = n;
              switch ((ja(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Li();
                  break;
                case 3:
                  eo(), Ti(ji), Ti(Pi), oo();
                  break;
                case 5:
                  no(r);
                  break;
                case 4:
                  eo();
                  break;
                case 13:
                case 19:
                  Ti(ro);
                  break;
                case 10:
                  Gi(r.type._context);
                  break;
                case 22:
                case 23:
                  cu();
              }
              n = n.return;
            }
          if (
            ((El = e),
            (Cl = e = Ou(e.current, null)),
            (Pl = jl = t),
            (Al = 0),
            (Ol = null),
            (Rl = Nl = Ll = 0),
            (zl = Dl = null),
            null !== ea)
          ) {
            for (t = 0; t < ea.length; t++)
              if (null !== (r = (n = ea[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            ea = null;
          }
          return e;
        }
        function du(e, t) {
          for (;;) {
            var n = Cl;
            try {
              if ((Qi(), (so.current = ns), ho)) {
                for (var r = co.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                ho = !1;
              }
              if (
                ((uo = 0),
                (po = fo = co = null),
                (vo = !1),
                (mo = 0),
                (kl.current = null),
                null === n || null === n.return)
              ) {
                (Al = 1), (Ol = t), (Cl = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Pl),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = l,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = vs(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      ms(h, s, l, 0, t),
                      1 & h.mode && hs(o, c, t),
                      (u = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hs(o, c, t), hu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (Oa && 1 & l.mode) {
                  var g = vs(s);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      ms(g, s, l, 0, t),
                      Ua(u);
                    break e;
                  }
                }
                (o = u),
                  4 !== Al && (Al = 2),
                  null === Dl ? (Dl = [o]) : Dl.push(o),
                  (u = os(u, l)),
                  (l = s);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        sa(l, ds(0, u, t));
                      break e;
                    case 1:
                      o = u;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Hl || !Hl.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          sa(l, ps(l, o, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              bu(n);
            } catch (x) {
              (t = x), Cl === n && null !== n && (Cl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = _l.current;
          return (_l.current = ns), null === e ? ns : e;
        }
        function hu() {
          (0 !== Al && 3 !== Al && 2 !== Al) || (Al = 4),
            null === El ||
              (0 === (268435455 & Ll) && 0 === (268435455 & Nl)) ||
              ou(El, Pl);
        }
        function vu(e, t) {
          var n = Tl;
          Tl |= 2;
          var r = pu();
          for ((El === e && Pl === t) || ((Vl = null), fu(e, t)); ; )
            try {
              mu();
              break;
            } catch (i) {
              du(e, i);
            }
          if ((Qi(), (Tl = n), (_l.current = r), null !== Cl))
            throw Error(a(261));
          return (El = null), (Pl = 0), Al;
        }
        function mu() {
          for (; null !== Cl; ) yu(Cl);
        }
        function gu() {
          for (; null !== Cl && !Qe(); ) yu(Cl);
        }
        function yu(e) {
          var t = xl(e.alternate, e, jl);
          (e.memoizedProps = e.pendingProps),
            null === t ? bu(e) : (Cl = t),
            (kl.current = null);
        }
        function bu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = bs(n, t, jl))) return void (Cl = n);
            } else {
              if (null !== (n = Ys(n, t)))
                return (n.flags &= 32767), void (Cl = n);
              if (null === e) return (Al = 6), void (Cl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Cl = t);
            Cl = t = e;
          } while (null !== t);
          0 === Al && (Al = 5);
        }
        function xu(e, t, n) {
          var r = bt,
            i = Sl.transition;
          try {
            (Sl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  wu();
                } while (null !== Yl);
                if (0 !== (6 & Tl)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === El && ((Cl = El = null), (Pl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Wl ||
                    ((Wl = !0),
                    Pu(tt, function () {
                      return wu(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Sl.transition), (Sl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Tl;
                  (Tl |= 4),
                    (kl.current = null),
                    (function (e, t) {
                      if (((ei = Wt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (_) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== i && 3 !== d.nodeType) ||
                                    (l = s + i),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = s + r),
                                    3 === d.nodeType &&
                                      (s += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === i && (l = s),
                                    p === o && ++f === r && (u = s),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Qs = t;
                        null !== Qs;

                      )
                        if (
                          ((e = (t = Qs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Qs = e);
                        else
                          for (; null !== Qs; ) {
                            t = Qs;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : Wi(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    if (1 === x.nodeType) x.textContent = "";
                                    else if (9 === x.nodeType) {
                                      var w = x.body;
                                      null != w && (w.textContent = "");
                                    }
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (_) {
                              ku(t, t.return, _);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Qs = e);
                              break;
                            }
                            Qs = t.return;
                          }
                      (v = Zs), (Zs = !1);
                    })(e, n),
                    pl(n, e),
                    hr(ti),
                    (Wt = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    vl(n, e, i),
                    Ge(),
                    (Tl = l),
                    (bt = s),
                    (Sl.transition = o);
                } else e.current = n;
                if (
                  (Wl && ((Wl = !1), (Yl = e), (Xl = i)),
                  0 === (o = e.pendingLanes) && (Hl = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  nu(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r(t[n]);
                if (Ul) throw ((Ul = !1), (e = Bl), (Bl = null), e);
                0 !== (1 & Xl) && 0 !== e.tag && wu(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === $l
                      ? ql++
                      : ((ql = 0), ($l = e))
                    : (ql = 0),
                  Bi();
              })(e, t, n, r);
          } finally {
            (Sl.transition = i), (bt = r);
          }
          return null;
        }
        function wu() {
          if (null !== Yl) {
            var e = xt(Xl),
              t = Sl.transition,
              n = bt;
            try {
              if (((Sl.transition = null), (bt = 16 > e ? 16 : e), null === Yl))
                var r = !1;
              else {
                if (((e = Yl), (Yl = null), (Xl = 0), 0 !== (6 & Tl)))
                  throw Error(a(331));
                var i = Tl;
                for (Tl |= 4, Qs = e.current; null !== Qs; ) {
                  var o = Qs,
                    s = o.child;
                  if (0 !== (16 & Qs.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Qs = c; null !== Qs; ) {
                          var f = Qs;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Js(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Qs = d);
                          else
                            for (; null !== Qs; ) {
                              var p = (f = Qs).sibling,
                                h = f.return;
                              if ((nl(f), f === c)) {
                                Qs = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Qs = p);
                                break;
                              }
                              Qs = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Qs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Qs = s);
                  else
                    e: for (; null !== Qs; ) {
                      if (0 !== (2048 & (o = Qs).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Js(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Qs = y);
                        break e;
                      }
                      Qs = o.return;
                    }
                }
                var b = e.current;
                for (Qs = b; null !== Qs; ) {
                  var x = (s = Qs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== x)
                    (x.return = s), (Qs = x);
                  else
                    e: for (s = b; null !== Qs; ) {
                      if (0 !== (2048 & (l = Qs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              el(9, l);
                          }
                        } catch (_) {
                          ku(l, l.return, _);
                        }
                      if (l === s) {
                        Qs = null;
                        break e;
                      }
                      var w = l.sibling;
                      if (null !== w) {
                        (w.return = l.return), (Qs = w);
                        break e;
                      }
                      Qs = l.return;
                    }
                }
                if (
                  ((Tl = i),
                  Bi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (_) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Sl.transition = t);
            }
          }
          return !1;
        }
        function _u(e, t, n) {
          aa(e, (t = ds(0, (t = os(n, t)), 1))),
            (t = Kl()),
            null !== (e = eu(e, 1)) && (gt(e, 1, t), nu(e, t));
        }
        function ku(e, t, n) {
          if (3 === e.tag) _u(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _u(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Hl || !Hl.has(r)))
                ) {
                  aa(t, (e = ps(t, (e = os(n, e)), 1))),
                    (e = Kl()),
                    null !== (t = eu(t, 1)) && (gt(t, 1, e), nu(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Su(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = Kl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            El === e &&
              (Pl & n) === n &&
              (4 === Al ||
              (3 === Al && (130023424 & Pl) === Pl && 500 > Ke() - Fl)
                ? fu(e, 0)
                : (Rl |= n)),
            nu(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = Kl();
          null !== (e = eu(e, t)) && (gt(e, t, n), nu(e, n));
        }
        function Eu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function Cu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Pu(e, t) {
          return qe(e, t);
        }
        function ju(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Mu(e, t, n, r) {
          return new ju(e, t, n, r);
        }
        function Au(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ou(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Mu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lu(e, t, n, r, i, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Au(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case k:
                return Nu(n.children, i, o, t);
              case S:
                (s = 8), (i |= 8);
                break;
              case T:
                return (
                  ((e = Mu(12, n, t, 2 | i)).elementType = T), (e.lanes = o), e
                );
              case j:
                return (
                  ((e = Mu(13, n, t, i)).elementType = j), (e.lanes = o), e
                );
              case M:
                return (
                  ((e = Mu(19, n, t, i)).elementType = M), (e.lanes = o), e
                );
              case L:
                return Ru(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      s = 10;
                      break e;
                    case C:
                      s = 9;
                      break e;
                    case P:
                      s = 11;
                      break e;
                    case A:
                      s = 14;
                      break e;
                    case O:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Mu(s, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Nu(e, t, n, r) {
          return ((e = Mu(7, e, r, t)).lanes = n), e;
        }
        function Ru(e, t, n, r) {
          return (
            ((e = Mu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function Du(e, t, n) {
          return ((e = Mu(6, e, null, t)).lanes = n), e;
        }
        function zu(e, t, n) {
          return (
            ((t = Mu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Iu(e, t, n, r, i, a, o, s, l) {
          return (
            (e = new Fu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Mu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            na(a),
            e
          );
        }
        function Vu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: _,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Uu(e) {
          if (!e) return Ci;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oi(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Oi(n)) return Ri(e, n, t);
          }
          return t;
        }
        function Bu(e, t, n, r, i, a, o, s, l) {
          return (
            ((e = Iu(n, r, !0, e, 0, a, 0, s, l)).context = Uu(null)),
            (n = e.current),
            ((a = ia((r = Kl()), (i = Zl(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            aa(n, a),
            (e.current.lanes = i),
            gt(e, i, r),
            nu(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var i = t.current,
            a = Kl(),
            o = Zl(i);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ia(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            aa(i, t),
            null !== (e = Jl(i, o, a)) && oa(e, i, o),
            o
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Xu(e, t) {
          Yu(e, t), (e = e.alternate) && Yu(e, t);
        }
        xl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ji.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        As(t), Va();
                        break;
                      case 5:
                        to(t);
                        break;
                      case 1:
                        Oi(t.type) && Di(t);
                        break;
                      case 4:
                        Ja(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Ei(Yi, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ei(ro, 1 & ro.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ds(e, t, n)
                            : (Ei(ro, 1 & ro.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        Ei(ro, 1 & ro.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ei(ro, ro.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), Oa && 0 !== (1048576 & t.flags) && Ca(t, xa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps);
              var i = Ai(t, Pi.current);
              Zi(t, n), (i = xo(null, t, r, e, i, n));
              var o = wo();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oi(r) ? ((o = !0), Di(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    na(t),
                    (i.updater = da),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    ma(t, r, e, n),
                    (t = Ms(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    Oa && o && Pa(t),
                    _s(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Au(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = Wi(r, e)),
                  i)
                ) {
                  case 0:
                    t = Ps(null, t, r, e, n);
                    break e;
                  case 1:
                    t = js(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ss(null, t, r, Wi(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ps(e, t, r, (i = t.elementType === r ? i : Wi(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                js(e, t, r, (i = t.elementType === r ? i : Wi(r, i)), n)
              );
            case 3:
              e: {
                if ((As(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  ra(e, t),
                  la(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Os(e, t, r, n, (i = Error(a(423))));
                    break e;
                  }
                  if (r !== i) {
                    t = Os(e, t, r, n, (i = Error(a(424))));
                    break e;
                  }
                  for (
                    Aa = ui(t.stateNode.containerInfo.firstChild),
                      Ma = t,
                      Oa = !0,
                      La = null,
                      n = qa(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((Va(), r === i)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  _s(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                to(t),
                null === e && za(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = i.children),
                ni(r, i)
                  ? (s = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                Cs(e, t),
                _s(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && za(t), null;
            case 13:
              return Ds(e, t, n);
            case 4:
              return (
                Ja(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : _s(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                ks(e, t, r, (i = t.elementType === r ? i : Wi(r, i)), n)
              );
            case 7:
              return _s(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return _s(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = i.value),
                  Ei(Yi, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === i.children && !ji.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = ia(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Ki(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Ki(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                _s(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Zi(t, n),
                (r = r((i = Ji(i)))),
                (t.flags |= 1),
                _s(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = Wi((r = t.type), t.pendingProps)),
                Ss(e, t, r, (i = Wi(r.type, i)), n)
              );
            case 15:
              return Ts(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Wi(r, i)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                Oi(r) ? ((e = !0), Di(t)) : (e = !1),
                Zi(t, n),
                ha(t, r, i),
                ma(t, r, i, n),
                Ms(null, t, r, !0, e, n)
              );
            case 19:
              return Hs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function $u(e) {
          this._internalRoot = e;
        }
        function Qu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function Ju(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var s = i;
              i = function () {
                var e = Wu(o);
                s.call(e);
              };
            }
            Hu(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Wu(o);
                    a.call(e);
                  };
                }
                var o = Bu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[hi] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  uu(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Wu(l);
                  s.call(e);
                };
              }
              var l = Iu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = l),
                (e[hi] = l.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                uu(function () {
                  Hu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, i, r);
          return Wu(o);
        }
        (Qu.prototype.render = $u.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Hu(e, t, null, null);
          }),
          (Qu.prototype.unmount = $u.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && zt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    nu(t, Ke()),
                    0 === (6 & Tl) && ((Il = Ke() + 500), Bi()));
                }
                break;
              case 13:
                var r = Kl();
                uu(function () {
                  return Jl(e, 1, r);
                }),
                  Xu(e, 1);
            }
          }),
          (_t = function (e) {
            13 === e.tag && (Jl(e, 134217728, Kl()), Xu(e, 134217728));
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Kl(),
                n = Zl(e);
              Jl(e, n, t), Xu(e, n);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Tt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = wi(r);
                      if (!i) throw Error(a(90));
                      q(r), Z(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = lu),
          (je = uu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [bi, xi, wi, Ee, Ce, lu],
          },
          tc = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.1.0",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ye(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (it = rc.inject(nc)), (at = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(a(200));
            return Vu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Iu(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new $u(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = Ye(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ku(t)) throw Error(a(200));
            return Ju(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              s = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Bu(t, null, e, 1, null != n ? n : null, i, 0, o, s)),
              (e[hi] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Qu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ku(t)) throw Error(a(200));
            return Ju(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ku(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (uu(function () {
                Ju(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = lu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ku(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Ju(e, t, n, !1, r);
          }),
          (t.version = "18.1.0-next-22edb9f77-20220426");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), v(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, r) {
          var i,
            a = {},
            o = null,
            s = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              _.call(t, i) && !S.hasOwnProperty(i) && (a[i] = t[i]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (i in (l = e.defaultProps)) void 0 === a[i] && (a[i] = l[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: a,
            _owner: k.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, i, a, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === a ? "." + P(l, 0) : a),
              w(o)
                ? ((i = ""),
                  null != e && (i = e.replace(C, "$&/") + "/"),
                  j(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + P((s = e[u]), u);
              l += j(s, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += j((s = s.value), t, i, (c = a + P(s, u++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          L = { transition: null },
          N = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              a = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                _.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              i.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = T),
          (t.createFactory = function (e) {
            var t = T.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: A,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.1.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < i && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), x(e), !v))
            if (null !== r(u)) (v = !0), L(_);
            else {
              var t = r(c);
              null !== t && N(w, t.startTime - e);
            }
        }
        function _(e, n) {
          (v = !1), m && ((m = !1), y(E), (E = -1)), (h = !0);
          var a = p;
          try {
            for (
              x(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !j()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var s = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (d.callback = s)
                    : d === r(u) && i(u),
                  x(n);
              } else i(u);
              d = r(u);
            }
            if (null !== d) var l = !0;
            else {
              var f = r(c);
              null !== f && N(w, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          T = null,
          E = -1,
          C = 5,
          P = -1;
        function j() {
          return !(t.unstable_now() - P < C);
        }
        function M() {
          if (null !== T) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = T(!0, e);
            } finally {
              n ? k() : ((S = !1), (T = null));
            }
          } else S = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(M);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var A = new MessageChannel(),
            O = A.port2;
          (A.port1.onmessage = M),
            (k = function () {
              O.postMessage(null);
            });
        } else
          k = function () {
            g(M, 0);
          };
        function L(e) {
          (T = e), S || ((S = !0), k());
        }
        function N(e, n) {
          E = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), L(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (y(E), (E = -1)) : (m = !0), N(w, a - o)))
                : ((e.sortIndex = s), n(u, e), v || h || ((v = !0), L(_))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".1ed0c42c.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "portfolio:";
      n.l = function (r, i, a, o) {
        if (e[r]) e[r].push(i);
        else {
          var s, l;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var f = u[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + a
              ) {
                s = f;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + a),
            (s.src = r)),
            (e[r] = [i]);
          var d = function (t, n) {
              (s.onerror = s.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                i &&
                  i.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = d.bind(null, s.onerror)),
            (s.onload = d.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise(function (n, r) {
              i = e[t] = [n, r];
            });
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              s = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = a),
                    (s.request = o),
                    i[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var i,
            a,
            o = r[0],
            s = r[1],
            l = r[2],
            u = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) l(n);
          }
          for (t && t(r); u < o.length; u++)
            (a = o[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkportfolio = self.webpackChunkportfolio || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e,
        t = n(791),
        r = n(250);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                a = [],
                o = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  o = !0
                );
              } catch (l) {
                (s = !0), (i = l);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          s.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var l = function (e) {
        return e;
      };
      var u = "beforeunload",
        c = "popstate";
      function f(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function d() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function p() {
        return Math.random().toString(36).substr(2, 8);
      }
      function h(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          i = void 0 === r ? "" : r,
          a = e.hash,
          o = void 0 === a ? "" : a;
        return (
          i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function v(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      var m = (0, t.createContext)(null);
      var g = (0, t.createContext)(null);
      var y = (0, t.createContext)({ outlet: null, matches: [] });
      function b(e, t) {
        if (!e) throw new Error(t);
      }
      function x(e, t, n) {
        var r,
          i = "string" === typeof e ? v(e) : e,
          a = "" === e || "" === i.pathname ? "/" : i.pathname;
        if (null == a) r = n;
        else {
          var o = t.length - 1;
          if (a.startsWith("..")) {
            for (var s = a.split("/"); ".." === s[0]; ) s.shift(), (o -= 1);
            i.pathname = s.join("/");
          }
          r = o >= 0 ? t[o] : "/";
        }
        var l = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? v(e) : e,
            r = n.pathname,
            i = n.search,
            a = void 0 === i ? "" : i,
            o = n.hash,
            s = void 0 === o ? "" : o,
            l = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(r, t)
              : t;
          return { pathname: l, search: S(a), hash: T(s) };
        })(i, r);
        return (
          a &&
            "/" !== a &&
            a.endsWith("/") &&
            !l.pathname.endsWith("/") &&
            (l.pathname += "/"),
          l
        );
      }
      function w(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      var _ = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        k = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        S = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        T = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function E(e) {
        C() || b(!1);
        var n = (0, t.useContext)(m),
          r = n.basename,
          i = n.navigator,
          a = M(e),
          o = a.hash,
          s = a.pathname,
          l = a.search,
          u = s;
        if ("/" !== r) {
          var c = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? v(e).pathname
                : e.pathname;
            })(e),
            f = null != c && c.endsWith("/");
          u = "/" === s ? r + (f ? "/" : "") : _([r, s]);
        }
        return i.createHref({ pathname: u, search: l, hash: o });
      }
      function C() {
        return null != (0, t.useContext)(g);
      }
      function P() {
        return C() || b(!1), (0, t.useContext)(g).location;
      }
      function j() {
        C() || b(!1);
        var e = (0, t.useContext)(m),
          n = e.basename,
          r = e.navigator,
          i = (0, t.useContext)(y).matches,
          a = P().pathname,
          o = JSON.stringify(
            i.map(function (e) {
              return e.pathnameBase;
            })
          ),
          s = (0, t.useRef)(!1);
        return (
          (0, t.useEffect)(function () {
            s.current = !0;
          }),
          (0, t.useCallback)(
            function (e, t) {
              if ((void 0 === t && (t = {}), s.current))
                if ("number" !== typeof e) {
                  var i = x(e, JSON.parse(o), a);
                  "/" !== n && (i.pathname = _([n, i.pathname])),
                    (t.replace ? r.replace : r.push)(i, t.state);
                } else r.go(e);
            },
            [n, r, o, a]
          )
        );
      }
      function M(e) {
        var n = (0, t.useContext)(y).matches,
          r = P().pathname,
          i = JSON.stringify(
            n.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, t.useMemo)(
          function () {
            return x(e, JSON.parse(i), r);
          },
          [e, i, r]
        );
      }
      function A(n) {
        var r = n.basename,
          i = void 0 === r ? "/" : r,
          a = n.children,
          o = void 0 === a ? null : a,
          s = n.location,
          l = n.navigationType,
          u = void 0 === l ? e.Pop : l,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        C() && b(!1);
        var p = k(i),
          h = (0, t.useMemo)(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof s && (s = v(s));
        var y = s,
          x = y.pathname,
          _ = void 0 === x ? "/" : x,
          S = y.search,
          T = void 0 === S ? "" : S,
          E = y.hash,
          P = void 0 === E ? "" : E,
          j = y.state,
          M = void 0 === j ? null : j,
          A = y.key,
          O = void 0 === A ? "default" : A,
          L = (0, t.useMemo)(
            function () {
              var e = w(_, p);
              return null == e
                ? null
                : { pathname: e, search: T, hash: P, state: M, key: O };
            },
            [p, _, T, P, M, O]
          );
        return null == L
          ? null
          : (0, t.createElement)(
              m.Provider,
              { value: h },
              (0, t.createElement)(g.Provider, {
                children: o,
                value: { location: L, navigationType: u },
              })
            );
      }
      function O() {
        return (
          (O =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          O.apply(this, arguments)
        );
      }
      function L(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var N = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
        R = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function D(n) {
        var r = n.basename,
          i = n.children,
          a = n.window,
          m = (0, t.useRef)();
        null == m.current &&
          (m.current = (function (t) {
            void 0 === t && (t = {});
            var n = t.window,
              r = void 0 === n ? document.defaultView : n,
              i = r.history;
            function a() {
              var e = r.location,
                t = e.pathname,
                n = e.search,
                a = e.hash,
                o = i.state || {};
              return [
                o.idx,
                l({
                  pathname: t,
                  search: n,
                  hash: a,
                  state: o.usr || null,
                  key: o.key || "default",
                }),
              ];
            }
            var o = null;
            r.addEventListener(c, function () {
              if (o) w.call(o), (o = null);
              else {
                var t = e.Pop,
                  n = a(),
                  r = n[0],
                  i = n[1];
                if (w.length) {
                  if (null != r) {
                    var s = y - r;
                    s &&
                      ((o = {
                        action: t,
                        location: i,
                        retry: function () {
                          C(-1 * s);
                        },
                      }),
                      C(s));
                  }
                } else E(t);
              }
            });
            var m = e.Pop,
              g = a(),
              y = g[0],
              b = g[1],
              x = d(),
              w = d();
            function _(e) {
              return "string" === typeof e ? e : h(e);
            }
            function k(e, t) {
              return (
                void 0 === t && (t = null),
                l(
                  s(
                    { pathname: b.pathname, hash: "", search: "" },
                    "string" === typeof e ? v(e) : e,
                    { state: t, key: p() }
                  )
                )
              );
            }
            function S(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, _(e)];
            }
            function T(e, t, n) {
              return (
                !w.length || (w.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function E(e) {
              m = e;
              var t = a();
              (y = t[0]), (b = t[1]), x.call({ action: m, location: b });
            }
            function C(e) {
              i.go(e);
            }
            null == y &&
              ((y = 0), i.replaceState(s({}, i.state, { idx: y }), ""));
            var P = {
              get action() {
                return m;
              },
              get location() {
                return b;
              },
              createHref: _,
              push: function t(n, a) {
                var o = e.Push,
                  s = k(n, a);
                if (
                  T(o, s, function () {
                    t(n, a);
                  })
                ) {
                  var l = S(s, y + 1),
                    u = l[0],
                    c = l[1];
                  try {
                    i.pushState(u, "", c);
                  } catch (f) {
                    r.location.assign(c);
                  }
                  E(o);
                }
              },
              replace: function t(n, r) {
                var a = e.Replace,
                  o = k(n, r);
                if (
                  T(a, o, function () {
                    t(n, r);
                  })
                ) {
                  var s = S(o, y),
                    l = s[0],
                    u = s[1];
                  i.replaceState(l, "", u), E(a);
                }
              },
              go: C,
              back: function () {
                C(-1);
              },
              forward: function () {
                C(1);
              },
              listen: function (e) {
                return x.push(e);
              },
              block: function (e) {
                var t = w.push(e);
                return (
                  1 === w.length && r.addEventListener(u, f),
                  function () {
                    t(), w.length || r.removeEventListener(u, f);
                  }
                );
              },
            };
            return P;
          })({ window: a }));
        var g = m.current,
          y = o((0, t.useState)({ action: g.action, location: g.location }), 2),
          b = y[0],
          x = y[1];
        return (
          (0, t.useLayoutEffect)(
            function () {
              return g.listen(x);
            },
            [g]
          ),
          (0, t.createElement)(A, {
            basename: r,
            children: i,
            location: b.location,
            navigationType: b.action,
            navigator: g,
          })
        );
      }
      var z = (0, t.forwardRef)(function (e, n) {
        var r = e.onClick,
          i = e.reloadDocument,
          a = e.replace,
          o = void 0 !== a && a,
          s = e.state,
          l = e.target,
          u = e.to,
          c = L(e, N),
          f = E(u),
          d = (function (e, n) {
            var r = void 0 === n ? {} : n,
              i = r.target,
              a = r.replace,
              o = r.state,
              s = j(),
              l = P(),
              u = M(e);
            return (0, t.useCallback)(
              function (t) {
                if (
                  0 === t.button &&
                  (!i || "_self" === i) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  var n = !!a || h(l) === h(u);
                  s(e, { replace: n, state: o });
                }
              },
              [l, s, u, a, o, i, e]
            );
          })(u, { replace: o, state: s, target: l });
        return (0, t.createElement)(
          "a",
          O({}, c, {
            href: f,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || i || d(e);
            },
            ref: n,
            target: l,
          })
        );
      });
      var F = (0, t.forwardRef)(function (e, n) {
        var r = e["aria-current"],
          i = void 0 === r ? "page" : r,
          a = e.caseSensitive,
          o = void 0 !== a && a,
          s = e.className,
          l = void 0 === s ? "" : s,
          u = e.end,
          c = void 0 !== u && u,
          f = e.style,
          d = e.to,
          p = e.children,
          h = L(e, R),
          v = P(),
          m = M(d),
          g = v.pathname,
          y = m.pathname;
        o || ((g = g.toLowerCase()), (y = y.toLowerCase()));
        var b,
          x = g === y || (!c && g.startsWith(y) && "/" === g.charAt(y.length)),
          w = x ? i : void 0;
        b =
          "function" === typeof l
            ? l({ isActive: x })
            : [l, x ? "active" : null].filter(Boolean).join(" ");
        var _ = "function" === typeof f ? f({ isActive: x }) : f;
        return (0,
        t.createElement)(z, O({}, h, { "aria-current": w, className: b, ref: n, style: _, to: d }), "function" === typeof p ? p({ isActive: x }) : p);
      });
      var I = n.p + "static/media/logo.60ed405f77b3613395c3.png",
        V = n(184),
        U = function (e) {
          var n = e.setCursorHovered,
            r = o((0, t.useState)(!1), 2),
            i = r[0],
            a = r[1],
            s = o((0, t.useState)(!1), 2),
            l = s[0],
            u = s[1];
          function c() {
            window.scrollY > 40 ? u(!0) : u(!1);
          }
          return (
            (0, t.useEffect)(
              function () {
                return (
                  document.addEventListener("scroll", c),
                  function () {
                    document.removeEventListener("scroll", c);
                  }
                );
              },
              [l]
            ),
            (0, V.jsx)(V.Fragment, {
              children: (0, V.jsx)("nav", {
                className: l ? "navbar Sticky" : "navbar",
                children: (0, V.jsxs)("div", {
                  className: "max-width",
                  children: [
                    (0, V.jsx)("div", {
                      className: "logo",
                      children: (0, V.jsxs)(F, {
                        to: "/",
                        onMouseEnter: function () {
                          return n(!0);
                        },
                        onMouseLeave: function () {
                          return n(!1);
                        },
                        onClick: function () {
                          window.scrollTo({ top: 0, behaviour: "smooth" });
                        },
                        children: [
                          " ",
                          (0, V.jsx)("img", { src: I, alt: I }),
                          " Akshit Rana",
                          " ",
                        ],
                      }),
                    }),
                    (0, V.jsxs)("ul", {
                      className: i ? "menu active" : "menu",
                      id: "nav-menu",
                      children: [
                        (0, V.jsxs)("li", {
                          children: [
                            " ",
                            (0, V.jsx)("a", {
                              href: "#home",
                              className: "nav-link",
                              onClick: function () {
                                a(!i);
                              },
                              onMouseEnter: function () {
                                return n(!0);
                              },
                              onMouseLeave: function () {
                                return n(!1);
                              },
                              children: "Home",
                            }),
                            " ",
                          ],
                        }),
                        (0, V.jsxs)("li", {
                          children: [
                            " ",
                            (0, V.jsx)("a", {
                              href: "#About",
                              className: "nav-link",
                              onClick: function () {
                                a(!i);
                              },
                              onMouseEnter: function () {
                                return n(!0);
                              },
                              onMouseLeave: function () {
                                return n(!1);
                              },
                              children: "About",
                            }),
                          ],
                        }),
                        (0, V.jsxs)("li", {
                          children: [
                            " ",
                            (0, V.jsx)("a", {
                              href: "#skills",
                              className: "nav-link",
                              onClick: function () {
                                a(!i);
                              },
                              onMouseEnter: function () {
                                return n(!0);
                              },
                              onMouseLeave: function () {
                                return n(!1);
                              },
                              children: "Skills",
                            }),
                          ],
                        }),
                        (0, V.jsxs)("li", {
                          children: [
                            " ",
                            (0, V.jsx)("a", {
                              href: "#projects",
                              className: "nav-link",
                              onClick: function () {
                                a(!i);
                              },
                              onMouseEnter: function () {
                                return n(!0);
                              },
                              onMouseLeave: function () {
                                return n(!1);
                              },
                              children: "Projects",
                            }),
                          ],
                        }),
                        (0, V.jsxs)("li", {
                          children: [
                            " ",
                            (0, V.jsxs)("a", {
                              href: "#contact",
                              className: "nav-link",
                              onClick: function () {
                                a(!i);
                              },
                              onMouseEnter: function () {
                                return n(!0);
                              },
                              onMouseLeave: function () {
                                return n(!1);
                              },
                              children: ["Contact", " "],
                            }),
                          ],
                        }),
                        (0, V.jsxs)("li", {
                          children: [
                            " ",
                            (0, V.jsx)("a", {
                              href: "https://drive.google.com/file/d/18K0x-xml-c09Omvgt5MH1Vun9VoyvAqG/view?usp=sharing",
                              className: "nav-link",
                              target: "_open",
                              onClick: function () {
                                a(!i);
                              },
                              onMouseEnter: function () {
                                return n(!0);
                              },
                              onMouseLeave: function () {
                                return n(!1);
                              },
                              children: "Resume",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, V.jsxs)("div", {
                      id: "menu-btn",
                      className: i ? "menu-btn active" : "menu-btn",
                      onClick: function () {
                        a(!i);
                      },
                      onMouseEnter: function () {
                        return n(!0);
                      },
                      onMouseLeave: function () {
                        return n(!1);
                      },
                      children: [
                        (0, V.jsx)("div", {
                          id: "one",
                          className: "bar half start",
                        }),
                        (0, V.jsx)("div", { id: "two", className: "bar" }),
                        (0, V.jsx)("div", {
                          id: "three",
                          className: "bar half end",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        };
      function B(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function H(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var W,
        Y,
        X,
        q,
        $,
        Q,
        G,
        K,
        Z,
        J = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        ee = { duration: 0.5, overwrite: !1, delay: 0 },
        te = 1e8,
        ne = 1e-8,
        re = 2 * Math.PI,
        ie = re / 4,
        ae = 0,
        oe = Math.sqrt,
        se = Math.cos,
        le = Math.sin,
        ue = function (e) {
          return "string" === typeof e;
        },
        ce = function (e) {
          return "function" === typeof e;
        },
        fe = function (e) {
          return "number" === typeof e;
        },
        de = function (e) {
          return "undefined" === typeof e;
        },
        pe = function (e) {
          return "object" === typeof e;
        },
        he = function (e) {
          return !1 !== e;
        },
        ve = function () {
          return "undefined" !== typeof window;
        },
        me = function (e) {
          return ce(e) || ue(e);
        },
        ge =
          ("function" === typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        ye = Array.isArray,
        be = /(?:-?\.?\d|\.)+/gi,
        xe = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        we = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        _e = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ke = /[+-]=-?[.\d]+/,
        Se = /[^,'"\[\]\s]+/gi,
        Te = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Ee = {},
        Ce = {},
        Pe = function (e) {
          return (Ce = et(e, Ee)) && Yn;
        },
        je = function (e, t) {
          return console.warn(
            "Invalid property",
            e,
            "set to",
            t,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        Me = function (e, t) {
          return !t && console.warn(e);
        },
        Ae = function (e, t) {
          return (e && (Ee[e] = t) && Ce && (Ce[e] = t)) || Ee;
        },
        Oe = function () {
          return 0;
        },
        Le = {},
        Ne = [],
        Re = {},
        De = {},
        ze = {},
        Fe = 30,
        Ie = [],
        Ve = "",
        Ue = function (e) {
          var t,
            n,
            r = e[0];
          if ((pe(r) || ce(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
            for (n = Ie.length; n-- && !Ie[n].targetTest(r); );
            t = Ie[n];
          }
          for (n = e.length; n--; )
            (e[n] && (e[n]._gsap || (e[n]._gsap = new hn(e[n], t)))) ||
              e.splice(n, 1);
          return e;
        },
        Be = function (e) {
          return e._gsap || Ue(Ot(e))[0]._gsap;
        },
        He = function (e, t, n) {
          return (n = e[t]) && ce(n)
            ? e[t]()
            : (de(n) && e.getAttribute && e.getAttribute(t)) || n;
        },
        We = function (e, t) {
          return (e = e.split(",")).forEach(t) || e;
        },
        Ye = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        Xe = function (e) {
          return Math.round(1e7 * e) / 1e7 || 0;
        },
        qe = function (e, t) {
          var n = t.charAt(0),
            r = parseFloat(t.substr(2));
          return (
            (e = parseFloat(e)),
            "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
          );
        },
        $e = function (e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
          return r < n;
        },
        Qe = function () {
          var e,
            t,
            n = Ne.length,
            r = Ne.slice(0);
          for (Re = {}, Ne.length = 0, e = 0; e < n; e++)
            (t = r[e]) &&
              t._lazy &&
              (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
        },
        Ge = function (e, t, n, r) {
          Ne.length && Qe(), e.render(t, n, r), Ne.length && Qe();
        },
        Ke = function (e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(Se).length < 2
            ? t
            : ue(e)
            ? e.trim()
            : e;
        },
        Ze = function (e) {
          return e;
        },
        Je = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        et = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        tt = function e(t, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (t[r] = pe(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t;
        },
        nt = function (e, t) {
          var n,
            r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r;
        },
        rt = function (e) {
          var t,
            n = e.parent || Y,
            r = e.keyframes
              ? ((t = ye(e.keyframes)),
                function (e, n) {
                  for (var r in n)
                    r in e ||
                      ("duration" === r && t) ||
                      "ease" === r ||
                      (e[r] = n[r]);
                })
              : Je;
          if (he(e.inherit))
            for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
          return e;
        },
        it = function (e, t, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var a,
            o = e[r];
          if (i) for (a = t[i]; o && o[i] > a; ) o = o._prev;
          return (
            o
              ? ((t._next = o._next), (o._next = t))
              : ((t._next = e[n]), (e[n] = t)),
            t._next ? (t._next._prev = t) : (e[r] = t),
            (t._prev = o),
            (t.parent = t._dp = e),
            t
          );
        },
        at = function (e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = t._prev,
            a = t._next;
          i ? (i._next = a) : e[n] === t && (e[n] = a),
            a ? (a._prev = i) : e[r] === t && (e[r] = i),
            (t._next = t._prev = t.parent = null);
        },
        ot = function (e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
            (e._act = 0);
        },
        st = function (e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
          return e;
        },
        lt = function (e) {
          for (var t = e.parent; t && t.parent; )
            (t._dirty = 1), t.totalDuration(), (t = t.parent);
          return e;
        },
        ut = function e(t) {
          return !t || (t._ts && e(t.parent));
        },
        ct = function (e) {
          return e._repeat
            ? ft(e._tTime, (e = e.duration() + e._rDelay)) * e
            : 0;
        },
        ft = function (e, t) {
          var n = Math.floor((e /= t));
          return e && n === e ? n - 1 : n;
        },
        dt = function (e, t) {
          return (
            (e - t._start) * t._ts +
            (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
          );
        },
        pt = function (e) {
          return (e._end = Xe(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0)
          ));
        },
        ht = function (e, t) {
          var n = e._dp;
          return (
            n &&
              n.smoothChildTiming &&
              e._ts &&
              ((e._start = Xe(
                n._time -
                  (e._ts > 0
                    ? t / e._ts
                    : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
              )),
              pt(e),
              n._dirty || st(n, e)),
            e
          );
        },
        vt = function (e, t) {
          var n;
          if (
            ((t._time || (t._initted && !t._dur)) &&
              ((n = dt(e.rawTime(), t)),
              (!t._dur || Ct(0, t.totalDuration(), n) - t._tTime > ne) &&
                t.render(n, !0)),
            st(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
          ) {
            if (e._dur < e.duration())
              for (n = e; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            e._zTime = -1e-8;
          }
        },
        mt = function (e, t, n, r) {
          return (
            t.parent && ot(t),
            (t._start = Xe(
              (fe(n) ? n : n || e !== Y ? St(e, n, t) : e._time) + t._delay
            )),
            (t._end = Xe(
              t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
            )),
            it(e, t, "_first", "_last", e._sort ? "_start" : 0),
            xt(t) || (e._recent = t),
            r || vt(e, t),
            e
          );
        },
        gt = function (e, t) {
          return (
            (Ee.ScrollTrigger || je("scrollTrigger", t)) &&
            Ee.ScrollTrigger.create(t, e)
          );
        },
        yt = function (e, t, n, r) {
          return (
            _n(e, t),
            e._initted
              ? !n &&
                e._pt &&
                ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
                G !== en.frame
                ? (Ne.push(e), (e._lazy = [t, r]), 1)
                : void 0
              : 1
          );
        },
        bt = function e(t) {
          var n = t.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
          );
        },
        xt = function (e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t;
        },
        wt = function (e, t, n, r) {
          var i = e._repeat,
            a = Xe(t) || 0,
            o = e._tTime / e._tDur;
          return (
            o && !r && (e._time *= a / e._dur),
            (e._dur = a),
            (e._tDur = i
              ? i < 0
                ? 1e10
                : Xe(a * (i + 1) + e._rDelay * i)
              : a),
            o > 0 && !r ? ht(e, (e._tTime = e._tDur * o)) : e.parent && pt(e),
            n || st(e.parent, e),
            e
          );
        },
        _t = function (e) {
          return e instanceof mn ? st(e) : wt(e, e._dur);
        },
        kt = { _start: 0, endTime: Oe, totalDuration: Oe },
        St = function e(t, n, r) {
          var i,
            a,
            o,
            s = t.labels,
            l = t._recent || kt,
            u = t.duration() >= te ? l.endTime(!1) : t._dur;
          return ue(n) && (isNaN(n) || n in s)
            ? ((a = n.charAt(0)),
              (o = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === a || ">" === a
                ? (i >= 0 && (n = n.replace(/=/, "")),
                  ("<" === a ? l._start : l.endTime(l._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (o ? (i < 0 ? l : r).totalDuration() / 100 : 1))
                : i < 0
                ? (n in s || (s[n] = u), s[n])
                : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  o &&
                    r &&
                    (a = (a / 100) * (ye(r) ? r[0] : r).totalDuration()),
                  i > 1 ? e(t, n.substr(0, i - 1), r) + a : u + a))
            : null == n
            ? u
            : +n;
        },
        Tt = function (e, t, n) {
          var r,
            i,
            a = fe(t[1]),
            o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
            s = t[o];
          if ((a && (s.duration = t[1]), (s.parent = n), e)) {
            for (r = s, i = n; i && !("immediateRender" in r); )
              (r = i.vars.defaults || {}), (i = he(i.vars.inherit) && i.parent);
            (s.immediateRender = he(r.immediateRender)),
              e < 2 ? (s.runBackwards = 1) : (s.startAt = t[o - 1]);
          }
          return new Cn(t[0], s, t[o + 1]);
        },
        Et = function (e, t) {
          return e || 0 === e ? t(e) : t;
        },
        Ct = function (e, t, n) {
          return n < e ? e : n > t ? t : n;
        },
        Pt = function (e, t) {
          return ue(e) && (t = Te.exec(e)) ? t[1] : "";
        },
        jt = [].slice,
        Mt = function (e, t) {
          return (
            e &&
            pe(e) &&
            "length" in e &&
            ((!t && !e.length) || (e.length - 1 in e && pe(e[0]))) &&
            !e.nodeType &&
            e !== X
          );
        },
        At = function (e, t, n) {
          return (
            void 0 === n && (n = []),
            e.forEach(function (e) {
              var r;
              return (ue(e) && !t) || Mt(e, 1)
                ? (r = n).push.apply(r, Ot(e))
                : n.push(e);
            }) || n
          );
        },
        Ot = function (e, t, n) {
          return !ue(e) || n || (!q && tn())
            ? ye(e)
              ? At(e, n)
              : Mt(e)
              ? jt.call(e, 0)
              : e
              ? [e]
              : []
            : jt.call((t || $).querySelectorAll(e), 0);
        },
        Lt = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Nt = function (e) {
          if (ce(e)) return e;
          var t = pe(e) ? e : { each: e },
            n = un(t.ease),
            r = t.from || 0,
            i = parseFloat(t.base) || 0,
            a = {},
            o = r > 0 && r < 1,
            s = isNaN(r) || o,
            l = t.axis,
            u = r,
            c = r;
          return (
            ue(r)
              ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !o && s && ((u = r[0]), (c = r[1])),
            function (e, o, f) {
              var d,
                p,
                h,
                v,
                m,
                g,
                y,
                b,
                x,
                w = (f || t).length,
                _ = a[w];
              if (!_) {
                if (!(x = "auto" === t.grid ? 0 : (t.grid || [1, te])[1])) {
                  for (
                    y = -te;
                    y < (y = f[x++].getBoundingClientRect().left) && x < w;

                  );
                  x--;
                }
                for (
                  _ = a[w] = [],
                    d = s ? Math.min(x, w) * u - 0.5 : r % x,
                    p = x === te ? 0 : s ? (w * c) / x - 0.5 : (r / x) | 0,
                    y = 0,
                    b = te,
                    g = 0;
                  g < w;
                  g++
                )
                  (h = (g % x) - d),
                    (v = p - ((g / x) | 0)),
                    (_[g] = m =
                      l ? Math.abs("y" === l ? v : h) : oe(h * h + v * v)),
                    m > y && (y = m),
                    m < b && (b = m);
                "random" === r && Lt(_),
                  (_.max = y - b),
                  (_.min = b),
                  (_.v = w =
                    (parseFloat(t.amount) ||
                      parseFloat(t.each) *
                        (x > w
                          ? w - 1
                          : l
                          ? "y" === l
                            ? w / x
                            : x
                          : Math.max(x, w / x)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (_.b = w < 0 ? i - w : i),
                  (_.u = Pt(t.amount || t.each) || 0),
                  (n = n && w < 0 ? sn(n) : n);
              }
              return (
                (w = (_[e] - _.min) / _.max || 0),
                Xe(_.b + (n ? n(w) : w) * _.v) + _.u
              );
            }
          );
        },
        Rt = function (e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function (n) {
            var r = Math.round(parseFloat(n) / e) * e * t;
            return (r - (r % 1)) / t + (fe(n) ? 0 : Pt(n));
          };
        },
        Dt = function (e, t) {
          var n,
            r,
            i = ye(e);
          return (
            !i &&
              pe(e) &&
              ((n = i = e.radius || te),
              e.values
                ? ((e = Ot(e.values)), (r = !fe(e[0])) && (n *= n))
                : (e = Rt(e.increment))),
            Et(
              t,
              i
                ? ce(e)
                  ? function (t) {
                      return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                    }
                  : function (t) {
                      for (
                        var i,
                          a,
                          o = parseFloat(r ? t.x : t),
                          s = parseFloat(r ? t.y : 0),
                          l = te,
                          u = 0,
                          c = e.length;
                        c--;

                      )
                        (i = r
                          ? (i = e[c].x - o) * i + (a = e[c].y - s) * a
                          : Math.abs(e[c] - o)) < l && ((l = i), (u = c));
                      return (
                        (u = !n || l <= n ? e[u] : t),
                        r || u === t || fe(t) ? u : u + Pt(t)
                      );
                    }
                : Rt(e)
            )
          );
        },
        zt = function (e, t, n, r) {
          return Et(ye(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
            return ye(e)
              ? e[~~(Math.random() * e.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                    ) *
                      n *
                      r
                  ) / r;
          });
        },
        Ft = function (e, t, n) {
          return Et(n, function (n) {
            return e[~~t(n)];
          });
        },
        It = function (e) {
          for (var t, n, r, i, a = 0, o = ""; ~(t = e.indexOf("random(", a)); )
            (r = e.indexOf(")", t)),
              (i = "[" === e.charAt(t + 7)),
              (n = e.substr(t + 7, r - t - 7).match(i ? Se : be)),
              (o +=
                e.substr(a, t - a) +
                zt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (a = r + 1);
          return o + e.substr(a, e.length - a);
        },
        Vt = function (e, t, n, r, i) {
          var a = t - e,
            o = r - n;
          return Et(i, function (t) {
            return n + (((t - e) / a) * o || 0);
          });
        },
        Ut = function (e, t, n) {
          var r,
            i,
            a,
            o = e.labels,
            s = te;
          for (r in o)
            (i = o[r] - t) < 0 === !!n &&
              i &&
              s > (i = Math.abs(i)) &&
              ((a = r), (s = i));
          return a;
        },
        Bt = function (e, t, n) {
          var r,
            i,
            a = e.vars,
            o = a[t];
          if (o)
            return (
              (r = a[t + "Params"]),
              (i = a.callbackScope || e),
              n && Ne.length && Qe(),
              r ? o.apply(i, r) : o.call(i)
            );
        },
        Ht = function (e) {
          return (
            ot(e),
            e.scrollTrigger && e.scrollTrigger.kill(!1),
            e.progress() < 1 && Bt(e, "onInterrupt"),
            e
          );
        },
        Wt = function (e) {
          var t = (e = (!e.name && e.default) || e).name,
            n = ce(e),
            r =
              t && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            i = {
              init: Oe,
              render: Dn,
              add: xn,
              kill: Fn,
              modifier: zn,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: On,
              aliases: {},
              register: 0,
            };
          if ((tn(), e !== r)) {
            if (De[t]) return;
            Je(r, Je(nt(e, i), a)),
              et(r.prototype, et(i, nt(e, a))),
              (De[(r.prop = t)] = r),
              e.targetTest && (Ie.push(r), (Le[t] = 1)),
              (t =
                ("css" === t
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Ae(t, r), e.register && e.register(Yn, r, Un);
        },
        Yt = 255,
        Xt = {
          aqua: [0, Yt, Yt],
          lime: [0, Yt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Yt],
          navy: [0, 0, 128],
          white: [Yt, Yt, Yt],
          olive: [128, 128, 0],
          yellow: [Yt, Yt, 0],
          orange: [Yt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Yt, 0, 0],
          pink: [Yt, 192, 203],
          cyan: [0, Yt, Yt],
          transparent: [Yt, Yt, Yt, 0],
        },
        qt = function (e, t, n) {
          return (
            ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
              ? t + (n - t) * e * 6
              : e < 0.5
              ? n
              : 3 * e < 2
              ? t + (n - t) * (2 / 3 - e) * 6
              : t) *
              Yt +
              0.5) |
            0
          );
        },
        $t = function (e, t, n) {
          var r,
            i,
            a,
            o,
            s,
            l,
            u,
            c,
            f,
            d,
            p = e ? (fe(e) ? [e >> 16, (e >> 8) & Yt, e & Yt] : 0) : Xt.black;
          if (!p) {
            if (
              ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Xt[e])
            )
              p = Xt[e];
            else if ("#" === e.charAt(0)) {
              if (
                (e.length < 6 &&
                  ((r = e.charAt(1)),
                  (i = e.charAt(2)),
                  (a = e.charAt(3)),
                  (e =
                    "#" +
                    r +
                    r +
                    i +
                    i +
                    a +
                    a +
                    (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
                9 === e.length)
              )
                return [
                  (p = parseInt(e.substr(1, 6), 16)) >> 16,
                  (p >> 8) & Yt,
                  p & Yt,
                  parseInt(e.substr(7), 16) / 255,
                ];
              p = [
                (e = parseInt(e.substr(1), 16)) >> 16,
                (e >> 8) & Yt,
                e & Yt,
              ];
            } else if ("hsl" === e.substr(0, 3))
              if (((p = d = e.match(be)), t)) {
                if (~e.indexOf("="))
                  return (p = e.match(xe)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (o = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (r =
                    2 * (l = +p[2] / 100) -
                    (i = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = qt(o + 1 / 3, r, i)),
                  (p[1] = qt(o, r, i)),
                  (p[2] = qt(o - 1 / 3, r, i));
            else p = e.match(be) || Xt.transparent;
            p = p.map(Number);
          }
          return (
            t &&
              !d &&
              ((r = p[0] / Yt),
              (i = p[1] / Yt),
              (a = p[2] / Yt),
              (l = ((u = Math.max(r, i, a)) + (c = Math.min(r, i, a))) / 2),
              u === c
                ? (o = s = 0)
                : ((f = u - c),
                  (s = l > 0.5 ? f / (2 - u - c) : f / (u + c)),
                  (o =
                    u === r
                      ? (i - a) / f + (i < a ? 6 : 0)
                      : u === i
                      ? (a - r) / f + 2
                      : (r - i) / f + 4),
                  (o *= 60)),
              (p[0] = ~~(o + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * l + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        Qt = function (e) {
          var t = [],
            n = [],
            r = -1;
          return (
            e.split(Kt).forEach(function (e) {
              var i = e.match(we) || [];
              t.push.apply(t, i), n.push((r += i.length + 1));
            }),
            (t.c = n),
            t
          );
        },
        Gt = function (e, t, n) {
          var r,
            i,
            a,
            o,
            s = "",
            l = (e + s).match(Kt),
            u = t ? "hsla(" : "rgba(",
            c = 0;
          if (!l) return e;
          if (
            ((l = l.map(function (e) {
              return (
                (e = $t(e, t, 1)) &&
                u +
                  (t
                    ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                    : e.join(",")) +
                  ")"
              );
            })),
            n && ((a = Qt(e)), (r = n.c).join(s) !== a.c.join(s)))
          )
            for (o = (i = e.replace(Kt, "1").split(we)).length - 1; c < o; c++)
              s +=
                i[c] +
                (~r.indexOf(c)
                  ? l.shift() || u + "0,0,0,0)"
                  : (a.length ? a : l.length ? l : n).shift());
          if (!i)
            for (o = (i = e.split(Kt)).length - 1; c < o; c++) s += i[c] + l[c];
          return s + i[o];
        },
        Kt = (function () {
          var e,
            t =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in Xt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi");
        })(),
        Zt = /hsl[a]?\(/,
        Jt = function (e) {
          var t,
            n = e.join(" ");
          if (((Kt.lastIndex = 0), Kt.test(n)))
            return (
              (t = Zt.test(n)),
              (e[1] = Gt(e[1], t)),
              (e[0] = Gt(e[0], t, Qt(e[1]))),
              !0
            );
        },
        en = (function () {
          var e,
            t,
            n,
            r,
            i,
            a,
            o = Date.now,
            s = 500,
            l = 33,
            u = o(),
            c = u,
            f = 1e3 / 240,
            d = f,
            p = [],
            h = function n(h) {
              var v,
                m,
                g,
                y,
                b = o() - c,
                x = !0 === h;
              if (
                (b > s && (u += b - l),
                ((v = (g = (c += b) - u) - d) > 0 || x) &&
                  ((y = ++r.frame),
                  (i = g - 1e3 * r.time),
                  (r.time = g /= 1e3),
                  (d += v + (v >= f ? 4 : f - v)),
                  (m = 1)),
                x || (e = t(n)),
                m)
              )
                for (a = 0; a < p.length; a++) p[a](g, i, y, h);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              h(!0);
            },
            deltaRatio: function (e) {
              return i / (1e3 / (e || 60));
            },
            wake: function () {
              Q &&
                (!q &&
                  ve() &&
                  ((X = q = window),
                  ($ = X.document || {}),
                  (Ee.gsap = Yn),
                  (X.gsapVersions || (X.gsapVersions = [])).push(Yn.version),
                  Pe(Ce || X.GreenSockGlobals || (!X.gsap && X) || {}),
                  (n = X.requestAnimationFrame)),
                e && r.sleep(),
                (t =
                  n ||
                  function (e) {
                    return setTimeout(e, (d - 1e3 * r.time + 1) | 0);
                  }),
                (Z = 1),
                h(2));
            },
            sleep: function () {
              (n ? X.cancelAnimationFrame : clearTimeout)(e), (Z = 0), (t = Oe);
            },
            lagSmoothing: function (e, t) {
              (s = e || 1e8), (l = Math.min(t, s, 0));
            },
            fps: function (e) {
              (f = 1e3 / (e || 240)), (d = 1e3 * r.time + f);
            },
            add: function (e, t, n) {
              var i = t
                ? function (t, n, a, o) {
                    e(t, n, a, o), r.remove(i);
                  }
                : e;
              return r.remove(e), p[n ? "unshift" : "push"](i), tn(), i;
            },
            remove: function (e, t) {
              ~(t = p.indexOf(e)) && p.splice(t, 1) && a >= t && a--;
            },
            _listeners: p,
          });
        })(),
        tn = function () {
          return !Z && en.wake();
        },
        nn = {},
        rn = /^[\d.\-M][\d.\-,\s]/,
        an = /["']/g,
        on = function (e) {
          for (
            var t,
              n,
              r,
              i = {},
              a = e.substr(1, e.length - 3).split(":"),
              o = a[0],
              s = 1,
              l = a.length;
            s < l;
            s++
          )
            (n = a[s]),
              (t = s !== l - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, t)),
              (i[o] = isNaN(r) ? r.replace(an, "").trim() : +r),
              (o = n.substr(t + 1).trim());
          return i;
        },
        sn = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        ln = function e(t, n) {
          for (var r, i = t._first; i; )
            i instanceof mn
              ? e(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? e(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next);
        },
        un = function (e, t) {
          return (
            (e &&
              (ce(e)
                ? e
                : nn[e] ||
                  (function (e) {
                    var t = (e + "").split("("),
                      n = nn[t[0]];
                    return n && t.length > 1 && n.config
                      ? n.config.apply(
                          null,
                          ~e.indexOf("{")
                            ? [on(t[1])]
                            : (function (e) {
                                var t = e.indexOf("(") + 1,
                                  n = e.indexOf(")"),
                                  r = e.indexOf("(", t);
                                return e.substring(
                                  t,
                                  ~r && r < n ? e.indexOf(")", n + 1) : n
                                );
                              })(e)
                                .split(",")
                                .map(Ke)
                        )
                      : nn._CE && rn.test(e)
                      ? nn._CE("", e)
                      : n;
                  })(e))) ||
            t
          );
        },
        cn = function (e, t, n, r) {
          void 0 === n &&
            (n = function (e) {
              return 1 - t(1 - e);
            }),
            void 0 === r &&
              (r = function (e) {
                return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
              });
          var i,
            a = { easeIn: t, easeOut: n, easeInOut: r };
          return (
            We(e, function (e) {
              for (var t in ((nn[e] = Ee[e] = a),
              (nn[(i = e.toLowerCase())] = n),
              a))
                nn[
                  i +
                    ("easeIn" === t
                      ? ".in"
                      : "easeOut" === t
                      ? ".out"
                      : ".inOut")
                ] = nn[e + "." + t] = a[t];
            }),
            a
          );
        },
        fn = function (e) {
          return function (t) {
            return t < 0.5
              ? (1 - e(1 - 2 * t)) / 2
              : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        },
        dn = function e(t, n, r) {
          var i = n >= 1 ? n : 1,
            a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            o = (a / re) * (Math.asin(1 / i) || 0),
            s = function (e) {
              return 1 === e
                ? 1
                : i * Math.pow(2, -10 * e) * le((e - o) * a) + 1;
            },
            l =
              "out" === t
                ? s
                : "in" === t
                ? function (e) {
                    return 1 - s(1 - e);
                  }
                : fn(s);
          return (
            (a = re / a),
            (l.config = function (n, r) {
              return e(t, n, r);
            }),
            l
          );
        },
        pn = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function (e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
            },
            i =
              "out" === t
                ? r
                : "in" === t
                ? function (e) {
                    return 1 - r(1 - e);
                  }
                : fn(r);
          return (
            (i.config = function (n) {
              return e(t, n);
            }),
            i
          );
        };
      We("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
        var n = t < 5 ? t + 1 : t;
        cn(
          e + ",Power" + (n - 1),
          t
            ? function (e) {
                return Math.pow(e, n);
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - Math.pow(1 - e, n);
          },
          function (e) {
            return e < 0.5
              ? Math.pow(2 * e, n) / 2
              : 1 - Math.pow(2 * (1 - e), n) / 2;
          }
        );
      }),
        (nn.Linear.easeNone = nn.none = nn.Linear.easeIn),
        cn("Elastic", dn("in"), dn("out"), dn()),
        (function (e, t) {
          var n = 1 / t,
            r = function (r) {
              return r < n
                ? e * r * r
                : r < 0.7272727272727273
                ? e * Math.pow(r - 1.5 / t, 2) + 0.75
                : r < 0.9090909090909092
                ? e * (r -= 2.25 / t) * r + 0.9375
                : e * Math.pow(r - 2.625 / t, 2) + 0.984375;
            };
          cn(
            "Bounce",
            function (e) {
              return 1 - r(1 - e);
            },
            r
          );
        })(7.5625, 2.75),
        cn("Expo", function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        cn("Circ", function (e) {
          return -(oe(1 - e * e) - 1);
        }),
        cn("Sine", function (e) {
          return 1 === e ? 1 : 1 - se(e * ie);
        }),
        cn("Back", pn("in"), pn("out"), pn()),
        (nn.SteppedEase =
          nn.steps =
          Ee.SteppedEase =
            {
              config: function (e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e,
                  r = e + (t ? 0 : 1),
                  i = t ? 1 : 0;
                return function (e) {
                  return (((r * Ct(0, 0.99999999, e)) | 0) + i) * n;
                };
              },
            }),
        (ee.ease = nn["quad.out"]),
        We(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (e) {
            return (Ve += e + "," + e + "Params,");
          }
        );
      var hn = function (e, t) {
          (this.id = ae++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = t),
            (this.get = t ? t.get : He),
            (this.set = t ? t.getSetter : On);
        },
        vn = (function () {
          function e(e) {
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0),
                (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              wt(this, +e.duration, 1, 1),
              (this.data = e.data),
              Z || en.wake();
          }
          var t = e.prototype;
          return (
            (t.delay = function (e) {
              return e || 0 === e
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + e - this._delay),
                  (this._delay = e),
                  this)
                : this._delay;
            }),
            (t.duration = function (e) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                  )
                : this.totalDuration() && this._dur;
            }),
            (t.totalDuration = function (e) {
              return arguments.length
                ? ((this._dirty = 0),
                  wt(
                    this,
                    this._repeat < 0
                      ? e
                      : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (t.totalTime = function (e, t) {
              if ((tn(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  ht(this, e), !n._dp || n.parent || vt(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && e < this._tDur) ||
                    (this._ts < 0 && e > 0) ||
                    (!this._tDur && !e)) &&
                  mt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== e ||
                  (!this._dur && !t) ||
                  (this._initted && Math.abs(this._zTime) === ne) ||
                  (!e && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = e), Ge(this, e, t)),
                this
              );
            }),
            (t.time = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), e + ct(this)) %
                      (this._dur + this._rDelay) || (e ? this._dur : 0),
                    t
                  )
                : this._time;
            }),
            (t.totalProgress = function (e, t) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, t)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (t.progress = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                      ct(this),
                    t
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (t.iteration = function (e, t) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (e - 1) * n, t)
                : this._repeat
                ? ft(this._tTime, n) + 1
                : 1;
            }),
            (t.timeScale = function (e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === e) return this;
              var t =
                this.parent && this._ts
                  ? dt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +e || 0),
                (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                this.totalTime(Ct(-this._delay, this._tDur, t), !0),
                pt(this),
                lt(this)
              );
            }),
            (t.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                    ((this._ps = e),
                    e
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (tn(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== ne &&
                            (this._tTime -= ne)
                        ))),
                  this)
                : this._ps;
            }),
            (t.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return (
                  t &&
                    (t._sort || !this.parent) &&
                    mt(t, this, e - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (t.endTime = function (e) {
              return (
                this._start +
                (he(e) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (t.rawTime = function (e) {
              var t = this.parent || this._dp;
              return t
                ? e &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? dt(t.rawTime(e), this)
                  : this._tTime
                : this._tTime;
            }),
            (t.globalTime = function (e) {
              for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                (n = t._start + n / (t._ts || 1)), (t = t._dp);
              return n;
            }),
            (t.repeat = function (e) {
              return arguments.length
                ? ((this._repeat = e === 1 / 0 ? -2 : e), _t(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (t.repeatDelay = function (e) {
              if (arguments.length) {
                var t = this._time;
                return (this._rDelay = e), _t(this), t ? this.time(t) : this;
              }
              return this._rDelay;
            }),
            (t.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (t.seek = function (e, t) {
              return this.totalTime(St(this, e), he(t));
            }),
            (t.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, he(t));
            }),
            (t.play = function (e, t) {
              return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (t.reverse = function (e, t) {
              return (
                null != e && this.seek(e || this.totalDuration(), t),
                this.reversed(!0).paused(!1)
              );
            }),
            (t.pause = function (e, t) {
              return null != e && this.seek(e, t), this.paused(!0);
            }),
            (t.resume = function () {
              return this.paused(!1);
            }),
            (t.reversed = function (e) {
              return arguments.length
                ? (!!e !== this.reversed() &&
                    this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (t.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (t.isActive = function () {
              var e,
                t = this.parent || this._dp,
                n = this._start;
              return !(
                t &&
                !(
                  this._ts &&
                  this._initted &&
                  t.isActive() &&
                  (e = t.rawTime(!0)) >= n &&
                  e < this.endTime(!0) - ne
                )
              );
            }),
            (t.eventCallback = function (e, t, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (t
                    ? ((r[e] = t),
                      n && (r[e + "Params"] = n),
                      "onUpdate" === e && (this._onUpdate = t))
                    : delete r[e],
                  this)
                : r[e];
            }),
            (t.then = function (e) {
              var t = this;
              return new Promise(function (n) {
                var r = ce(e) ? e : Ze,
                  i = function () {
                    var e = t.then;
                    (t.then = null),
                      ce(r) &&
                        (r = r(t)) &&
                        (r.then || r === t) &&
                        (t.then = e),
                      n(r),
                      (t.then = e);
                  };
                (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                (!t._tTime && t._ts < 0)
                  ? i()
                  : (t._prom = i);
              });
            }),
            (t.kill = function () {
              Ht(this);
            }),
            e
          );
        })();
      Je(vn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var mn = (function (e) {
        function t(t, n) {
          var r;
          return (
            void 0 === t && (t = {}),
            ((r = e.call(this, t) || this).labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = he(t.sortChildren)),
            Y && mt(t.parent || Y, B(r), n),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && gt(B(r), t.scrollTrigger),
            r
          );
        }
        H(t, e);
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return Tt(0, arguments, this), this;
          }),
          (n.from = function (e, t, n) {
            return Tt(1, arguments, this), this;
          }),
          (n.fromTo = function (e, t, n, r) {
            return Tt(2, arguments, this), this;
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              rt(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new Cn(e, t, St(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return mt(this, Cn.delayedCall(0, e, t), n);
          }),
          (n.staggerTo = function (e, t, n, r, i, a, o) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || r),
              (n.onComplete = a),
              (n.onCompleteParams = o),
              (n.parent = this),
              new Cn(e, n, St(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, r, i, a, o) {
            return (
              (n.runBackwards = 1),
              (rt(n).immediateRender = he(n.immediateRender)),
              this.staggerTo(e, t, n, r, i, a, o)
            );
          }),
          (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
            return (
              (r.startAt = n),
              (rt(r).immediateRender = he(r.immediateRender)),
              this.staggerTo(e, t, r, i, a, o, s)
            );
          }),
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              l,
              u,
              c,
              f,
              d,
              p,
              h,
              v = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              g = this._dur,
              y = e <= 0 ? 0 : Xe(e),
              b = this._zTime < 0 !== e < 0 && (this._initted || !g);
            if (
              (this !== Y && y > m && e >= 0 && (y = m),
              y !== this._tTime || n || b)
            ) {
              if (
                (v !== this._time &&
                  g &&
                  ((y += this._time - v), (e += this._time - v)),
                (r = y),
                (f = this._start),
                (l = !(c = this._ts)),
                b && (g || (v = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (s = g + this._rDelay),
                  this._repeat < -1 && e < 0)
                )
                  return this.totalTime(100 * s + e, t, n);
                if (
                  ((r = Xe(y % s)),
                  y === m
                    ? ((o = this._repeat), (r = g))
                    : ((o = ~~(y / s)) && o === y / s && ((r = g), o--),
                      r > g && (r = g)),
                  (d = ft(this._tTime, s)),
                  !v && this._tTime && d !== o && (d = o),
                  p && 1 & o && ((r = g - r), (h = 1)),
                  o !== d && !this._lock)
                ) {
                  var x = p && 1 & d,
                    w = x === (p && 1 & o);
                  if (
                    (o < d && (x = !x),
                    (v = x ? 0 : g),
                    (this._lock = 1),
                    (this.render(v || (h ? 0 : Xe(o * s)), t, !g)._lock = 0),
                    (this._tTime = y),
                    !t && this.parent && Bt(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !h &&
                      (this.invalidate()._lock = 1),
                    (v && v !== this._time) ||
                      l !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((g = this._dur),
                    (m = this._tDur),
                    w &&
                      ((this._lock = 2),
                      (v = x ? g : -1e-4),
                      this.render(v, !0),
                      this.vars.repeatRefresh && !h && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l)
                  )
                    return this;
                  ln(this, h);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((u = (function (e, t, n) {
                    var r;
                    if (n > t)
                      for (r = e._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > t) return r;
                        r = r._next;
                      }
                    else
                      for (r = e._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < t) return r;
                        r = r._prev;
                      }
                  })(this, Xe(v), Xe(r))),
                  u && (y -= r - (r = u._start))),
                (this._tTime = y),
                (this._time = r),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (v = 0)),
                !v && r && !t && (Bt(this, "onStart"), this._tTime !== y))
              )
                return this;
              if (r >= v && e >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((a = i._next),
                    (i._act || r >= i._start) && i._ts && u !== i)
                  ) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (r - i._start) * i._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      (u = 0), a && (y += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = a;
                }
              else {
                i = this._last;
                for (var _ = e < 0 ? e : r; i; ) {
                  if (
                    ((a = i._prev), (i._act || _ <= i._end) && i._ts && u !== i)
                  ) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (_ - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (_ - i._start) * i._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      (u = 0), a && (y += this._zTime = _ ? -1e-8 : ne);
                      break;
                    }
                  }
                  i = a;
                }
              }
              if (
                u &&
                !t &&
                (this.pause(),
                (u.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1),
                this._ts)
              )
                return (this._start = f), pt(this), this.render(e, t, n);
              this._onUpdate && !t && Bt(this, "onUpdate", !0),
                ((y === m && this._tTime >= this.totalDuration()) ||
                  (!y && v)) &&
                  ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((e || !g) &&
                      ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                      ot(this, 1),
                    t ||
                      (e < 0 && !v) ||
                      (!y && !v && m) ||
                      (Bt(
                        this,
                        y === m && e >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(y < m && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((fe(t) || (t = St(this, t, e)), !(e instanceof vn))) {
              if (ye(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (ue(e)) return this.addLabel(e, t);
              if (!ce(e)) return this;
              e = Cn.delayedCall(0, e);
            }
            return this !== e ? mt(this, e, t) : this;
          }),
          (n.getChildren = function (e, t, n, r) {
            void 0 === e && (e = !0),
              void 0 === t && (t = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -te);
            for (var i = [], a = this._first; a; )
              a._start >= r &&
                (a instanceof Cn
                  ? t && i.push(a)
                  : (n && i.push(a),
                    e && i.push.apply(i, a.getChildren(!0, t, n)))),
                (a = a._next);
            return i;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return ue(e)
              ? this.removeLabel(e)
              : ce(e)
              ? this.killTweensOf(e)
              : (at(this, e),
                e === this._recent && (this._recent = this._last),
                st(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Xe(
                    en.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return (this.labels[e] = St(this, t)), this;
          }),
          (n.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (n.addPause = function (e, t, n) {
            var r = Cn.delayedCall(0, t || Oe, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              mt(this, r, St(this, e))
            );
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = St(this, e); t; )
              t._start === e && "isPause" === t.data && ot(t), (t = t._next);
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), i = r.length; i--; )
              gn !== r[i] && r[i].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], i = Ot(e), a = this._first, o = fe(t); a; )
              a instanceof Cn
                ? $e(a._targets, i) &&
                  (o
                    ? (!gn || (a._initted && a._ts)) &&
                      a.globalTime(0) <= t &&
                      a.globalTime(a.totalDuration()) > t
                    : !t || a.isActive()) &&
                  r.push(a)
                : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
                (a = a._next);
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t = t || {};
            var n,
              r = this,
              i = St(r, e),
              a = t,
              o = a.startAt,
              s = a.onStart,
              l = a.onStartParams,
              u = a.immediateRender,
              c = Cn.to(
                r,
                Je(
                  {
                    ease: t.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      t.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : r._time)) /
                          r.timeScale()
                      ) ||
                      ne,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var e =
                          t.duration ||
                          Math.abs(
                            (i - (o && "time" in o ? o.time : r._time)) /
                              r.timeScale()
                          );
                        c._dur !== e && wt(c, e, 0, 1).render(c._time, !0, !0),
                          (n = 1);
                      }
                      s && s.apply(c, l || []);
                    },
                  },
                  t
                )
              );
            return u ? c.render(0) : c;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, Je({ startAt: { time: St(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return void 0 === e && (e = this._time), Ut(this, St(this, e));
          }),
          (n.previousLabel = function (e) {
            return void 0 === e && (e = this._time), Ut(this, St(this, e), 1);
          }),
          (n.currentLabel = function (e) {
            return arguments.length
              ? this.seek(e, !0)
              : this.previousLabel(this._time + ne);
          }),
          (n.shiftChildren = function (e, t, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, a = this.labels; i; )
              i._start >= n && ((i._start += e), (i._end += e)), (i = i._next);
            if (t) for (r in a) a[r] >= n && (a[r] += e);
            return st(this);
          }),
          (n.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
            return e.prototype.invalidate.call(this);
          }),
          (n.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n; )
              (t = n._next), this.remove(n), (n = t);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              st(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              i = 0,
              a = this,
              o = a._last,
              s = te;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                  (a.reversed() ? -e : e)
              );
            if (a._dirty) {
              for (r = a.parent; o; )
                (t = o._prev),
                  o._dirty && o.totalDuration(),
                  (n = o._start) > s && a._sort && o._ts && !a._lock
                    ? ((a._lock = 1), (mt(a, o, n - o._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    o._ts &&
                    ((i -= n),
                    ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                      ((a._start += n / a._ts),
                      (a._time -= n),
                      (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -Infinity),
                    (s = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = t);
              wt(a, a === Y && a._time > i ? a._time : i, 1, 1), (a._dirty = 0);
            }
            return a._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((Y._ts && (Ge(Y, dt(e, Y)), (G = en.frame)), en.frame >= Fe)) {
              Fe += J.autoSleep || 120;
              var t = Y._first;
              if ((!t || !t._ts) && J.autoSleep && en._listeners.length < 2) {
                for (; t && !t._ts; ) t = t._next;
                t || en.sleep();
              }
            }
          }),
          t
        );
      })(vn);
      Je(mn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var gn,
        yn,
        bn = function (e, t, n, r, i, a, o) {
          var s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            v = new Un(this._pt, e, t, 0, 1, Rn, null, i),
            m = 0,
            g = 0;
          for (
            v.b = n,
              v.e = r,
              n += "",
              (p = ~(r += "").indexOf("random(")) && (r = It(r)),
              a && (a((h = [n, r]), e, t), (n = h[0]), (r = h[1])),
              l = n.match(_e) || [];
            (s = _e.exec(r));

          )
            (c = s[0]),
              (f = r.substring(m, s.index)),
              u ? (u = (u + 1) % 5) : "rgba(" === f.substr(-5) && (u = 1),
              c !== l[g++] &&
                ((d = parseFloat(l[g - 1]) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: f || 1 === g ? f : ",",
                  s: d,
                  c: "=" === c.charAt(1) ? qe(d, c) - d : parseFloat(c) - d,
                  m: u && u < 4 ? Math.round : 0,
                }),
                (m = _e.lastIndex));
          return (
            (v.c = m < r.length ? r.substring(m, r.length) : ""),
            (v.fp = o),
            (ke.test(r) || p) && (v.e = 0),
            (this._pt = v),
            v
          );
        },
        xn = function (e, t, n, r, i, a, o, s, l) {
          ce(r) && (r = r(i || 0, e, a));
          var u,
            c = e[t],
            f =
              "get" !== n
                ? n
                : ce(c)
                ? l
                  ? e[
                      t.indexOf("set") || !ce(e["get" + t.substr(3)])
                        ? t
                        : "get" + t.substr(3)
                    ](l)
                  : e[t]()
                : c,
            d = ce(c) ? (l ? Mn : jn) : Pn;
          if (
            (ue(r) &&
              (~r.indexOf("random(") && (r = It(r)),
              "=" === r.charAt(1) &&
                ((u = qe(f, r) + (Pt(f) || 0)) || 0 === u) &&
                (r = u)),
            f !== r || yn)
          )
            return isNaN(f * r) || "" === r
              ? (!c && !(t in e) && je(t, r),
                bn.call(this, e, t, f, r, d, s || J.stringFilter, l))
              : ((u = new Un(
                  this._pt,
                  e,
                  t,
                  +f || 0,
                  r - (f || 0),
                  "boolean" === typeof c ? Nn : Ln,
                  0,
                  d
                )),
                l && (u.fp = l),
                o && u.modifier(o, this, e),
                (this._pt = u));
        },
        wn = function (e, t, n, r, i, a) {
          var o, s, l, u;
          if (
            De[e] &&
            !1 !==
              (o = new De[e]()).init(
                i,
                o.rawVars
                  ? t[e]
                  : (function (e, t, n, r, i) {
                      if (
                        (ce(e) && (e = Sn(e, i, t, n, r)),
                        !pe(e) || (e.style && e.nodeType) || ye(e) || ge(e))
                      )
                        return ue(e) ? Sn(e, i, t, n, r) : e;
                      var a,
                        o = {};
                      for (a in e) o[a] = Sn(e[a], i, t, n, r);
                      return o;
                    })(t[e], r, i, a, n),
                n,
                r,
                a
              ) &&
            ((n._pt = s =
              new Un(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
            n !== K)
          )
            for (
              l = n._ptLookup[n._targets.indexOf(i)], u = o._props.length;
              u--;

            )
              l[o._props[u]] = s;
          return o;
        },
        _n = function e(t, n) {
          var r,
            i,
            a,
            o,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            v,
            m = t.vars,
            g = m.ease,
            y = m.startAt,
            b = m.immediateRender,
            x = m.lazy,
            w = m.onUpdate,
            _ = m.onUpdateParams,
            k = m.callbackScope,
            S = m.runBackwards,
            T = m.yoyoEase,
            E = m.keyframes,
            C = m.autoRevert,
            P = t._dur,
            j = t._startAt,
            M = t._targets,
            A = t.parent,
            O = A && "nested" === A.data ? A.parent._targets : M,
            L = "auto" === t._overwrite && !W,
            N = t.timeline;
          if (
            (N && (!E || !g) && (g = "none"),
            (t._ease = un(g, ee.ease)),
            (t._yEase = T ? sn(un(!0 === T ? g : T, ee.ease)) : 0),
            T &&
              t._yoyo &&
              !t._repeat &&
              ((T = t._yEase), (t._yEase = t._ease), (t._ease = T)),
            (t._from = !N && !!m.runBackwards),
            !N || (E && !m.stagger))
          ) {
            if (
              ((h = (c = M[0] ? Be(M[0]).harness : 0) && m[c.prop]),
              (r = nt(m, Le)),
              j && (ot(j.render(-1, !0)), (j._lazy = 0)),
              y)
            )
              if (
                (ot(
                  (t._startAt = Cn.set(
                    M,
                    Je(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: A,
                        immediateRender: !0,
                        lazy: he(x),
                        startAt: null,
                        delay: 0,
                        onUpdate: w,
                        onUpdateParams: _,
                        callbackScope: k,
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                n < 0 && !b && !C && t._startAt.render(-1, !0),
                b)
              ) {
                if ((n > 0 && !C && (t._startAt = 0), P && n <= 0))
                  return void (n && (t._zTime = n));
              } else !1 === C && (t._startAt = 0);
            else if (S && P)
              if (j) !C && (t._startAt = 0);
              else if (
                (n && (b = !1),
                (a = Je(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && he(x),
                    immediateRender: b,
                    stagger: 0,
                    parent: A,
                  },
                  r
                )),
                h && (a[c.prop] = h),
                ot((t._startAt = Cn.set(M, a))),
                n < 0 && t._startAt.render(-1, !0),
                (t._zTime = n),
                b)
              ) {
                if (!n) return;
              } else e(t._startAt, ne);
            for (
              t._pt = t._ptCache = 0, x = (P && he(x)) || (x && !P), i = 0;
              i < M.length;
              i++
            ) {
              if (
                ((u = (s = M[i])._gsap || Ue(M)[i]._gsap),
                (t._ptLookup[i] = d = {}),
                Re[u.id] && Ne.length && Qe(),
                (p = O === M ? i : O.indexOf(s)),
                c &&
                  !1 !== (f = new c()).init(s, h || r, t, p, O) &&
                  ((t._pt = o =
                    new Un(t._pt, s, f.name, 0, 1, f.render, f, 0, f.priority)),
                  f._props.forEach(function (e) {
                    d[e] = o;
                  }),
                  f.priority && (l = 1)),
                !c || h)
              )
                for (a in r)
                  De[a] && (f = wn(a, r, t, p, s, O))
                    ? f.priority && (l = 1)
                    : (d[a] = o =
                        xn.call(t, s, a, "get", r[a], p, O, 0, m.stringFilter));
              t._op && t._op[i] && t.kill(s, t._op[i]),
                L &&
                  t._pt &&
                  ((gn = t),
                  Y.killTweensOf(s, d, t.globalTime(n)),
                  (v = !t.parent),
                  (gn = 0)),
                t._pt && x && (Re[u.id] = 1);
            }
            l && Vn(t), t._onInit && t._onInit(t);
          }
          (t._onUpdate = w),
            (t._initted = (!t._op || t._pt) && !v),
            E && n <= 0 && N.render(te, !0, !0);
        },
        kn = function (e, t, n, r) {
          var i,
            a,
            o = t.ease || r || "power1.inOut";
          if (ye(t))
            (a = n[e] || (n[e] = [])),
              t.forEach(function (e, n) {
                return a.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
              });
          else
            for (i in t)
              (a = n[i] || (n[i] = [])),
                "ease" === i || a.push({ t: parseFloat(e), v: t[i], e: o });
        },
        Sn = function (e, t, n, r, i) {
          return ce(e)
            ? e.call(t, n, r, i)
            : ue(e) && ~e.indexOf("random(")
            ? It(e)
            : e;
        },
        Tn = Ve + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        En = {};
      We(Tn + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
        return (En[e] = 1);
      });
      var Cn = (function (e) {
        function t(t, n, r, i) {
          var a;
          "number" === typeof n && ((r.duration = n), (n = r), (r = null));
          var o,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h = (a = e.call(this, i ? n : rt(n)) || this).vars,
            v = h.duration,
            m = h.delay,
            g = h.immediateRender,
            y = h.stagger,
            b = h.overwrite,
            x = h.keyframes,
            w = h.defaults,
            _ = h.scrollTrigger,
            k = h.yoyoEase,
            S = n.parent || Y,
            T = (ye(t) || ge(t) ? fe(t[0]) : "length" in n) ? [t] : Ot(t);
          if (
            ((a._targets = T.length
              ? Ue(T)
              : Me(
                  "GSAP target " + t + " not found. https://greensock.com",
                  !J.nullTargetWarn
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = b),
            x || y || me(v) || me(m))
          ) {
            if (
              ((n = a.vars),
              (o = a.timeline =
                new mn({ data: "nested", defaults: w || {} })).kill(),
              (o.parent = o._dp = B(a)),
              (o._start = 0),
              y || me(v) || me(m))
            ) {
              if (((u = T.length), (d = y && Nt(y)), pe(y)))
                for (c in y) ~Tn.indexOf(c) && (p || (p = {}), (p[c] = y[c]));
              for (s = 0; s < u; s++)
                ((l = nt(n, En)).stagger = 0),
                  k && (l.yoyoEase = k),
                  p && et(l, p),
                  (f = T[s]),
                  (l.duration = +Sn(v, B(a), s, f, T)),
                  (l.delay = (+Sn(m, B(a), s, f, T) || 0) - a._delay),
                  !y &&
                    1 === u &&
                    l.delay &&
                    ((a._delay = m = l.delay), (a._start += m), (l.delay = 0)),
                  o.to(f, l, d ? d(s, f, T) : 0),
                  (o._ease = nn.none);
              o.duration() ? (v = m = 0) : (a.timeline = 0);
            } else if (x) {
              rt(Je(o.vars.defaults, { ease: "none" })),
                (o._ease = un(x.ease || n.ease || "none"));
              var E,
                C,
                P,
                j = 0;
              if (ye(x))
                x.forEach(function (e) {
                  return o.to(T, e, ">");
                });
              else {
                for (c in ((l = {}), x))
                  "ease" === c ||
                    "easeEach" === c ||
                    kn(c, x[c], l, x.easeEach);
                for (c in l)
                  for (
                    E = l[c].sort(function (e, t) {
                      return e.t - t.t;
                    }),
                      j = 0,
                      s = 0;
                    s < E.length;
                    s++
                  )
                    ((P = {
                      ease: (C = E[s]).e,
                      duration: ((C.t - (s ? E[s - 1].t : 0)) / 100) * v,
                    })[c] = C.v),
                      o.to(T, P, j),
                      (j += P.duration);
                o.duration() < v && o.to({}, { duration: v - o.duration() });
              }
            }
            v || a.duration((v = o.duration()));
          } else a.timeline = 0;
          return (
            !0 !== b || W || ((gn = B(a)), Y.killTweensOf(T), (gn = 0)),
            mt(S, B(a), r),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (g ||
              (!v &&
                !x &&
                a._start === Xe(S._time) &&
                he(g) &&
                ut(B(a)) &&
                "nested" !== S.data)) &&
              ((a._tTime = -1e-8), a.render(Math.max(0, -m))),
            _ && gt(B(a), _),
            a
          );
        }
        H(t, e);
        var n = t.prototype;
        return (
          (n.render = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              l,
              u,
              c,
              f,
              d = this._time,
              p = this._tDur,
              h = this._dur,
              v = e > p - ne && e >= 0 ? p : e < ne ? 0 : e;
            if (h) {
              if (
                v !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== e < 0)
              ) {
                if (((r = v), (c = this.timeline), this._repeat)) {
                  if (((o = h + this._rDelay), this._repeat < -1 && e < 0))
                    return this.totalTime(100 * o + e, t, n);
                  if (
                    ((r = Xe(v % o)),
                    v === p
                      ? ((a = this._repeat), (r = h))
                      : ((a = ~~(v / o)) && a === v / o && ((r = h), a--),
                        r > h && (r = h)),
                    (l = this._yoyo && 1 & a) &&
                      ((f = this._yEase), (r = h - r)),
                    (s = ft(this._tTime, o)),
                    r === d && !n && this._initted)
                  )
                    return (this._tTime = v), this;
                  a !== s &&
                    (c && this._yEase && ln(c, l),
                    !this.vars.repeatRefresh ||
                      l ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(Xe(o * a), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (yt(this, e < 0 ? e : r, n, t))
                    return (this._tTime = 0), this;
                  if (d !== this._time) return this;
                  if (h !== this._dur) return this.render(e, t, n);
                }
                if (
                  ((this._tTime = v),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = u = (f || this._ease)(r / h)),
                  this._from && (this.ratio = u = 1 - u),
                  r && !d && !t && (Bt(this, "onStart"), this._tTime !== v))
                )
                  return this;
                for (i = this._pt; i; ) i.r(u, i.d), (i = i._next);
                (c &&
                  c.render(
                    e < 0
                      ? e
                      : !r && l
                      ? -1e-8
                      : c._dur * c._ease(r / this._dur),
                    t,
                    n
                  )) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate &&
                    !t &&
                    (e < 0 && this._startAt && this._startAt.render(e, !0, n),
                    Bt(this, "onUpdate")),
                  this._repeat &&
                    a !== s &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    Bt(this, "onRepeat"),
                  (v !== this._tDur && v) ||
                    this._tTime !== v ||
                    (e < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(e, !0, !0),
                    (e || !h) &&
                      ((v === this._tDur && this._ts > 0) ||
                        (!v && this._ts < 0)) &&
                      ot(this, 1),
                    t ||
                      (e < 0 && !d) ||
                      (!v && !d) ||
                      (Bt(
                        this,
                        v === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(v < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (e, t, n, r) {
                var i,
                  a,
                  o,
                  s = e.ratio,
                  l =
                    t < 0 ||
                    (!t &&
                      ((!e._start && bt(e) && (e._initted || !xt(e))) ||
                        ((e._ts < 0 || e._dp._ts < 0) && !xt(e))))
                      ? 0
                      : 1,
                  u = e._rDelay,
                  c = 0;
                if (
                  (u &&
                    e._repeat &&
                    ((c = Ct(0, e._tDur, t)),
                    (a = ft(c, u)),
                    e._yoyo && 1 & a && (l = 1 - l),
                    a !== ft(e._tTime, u) &&
                      ((s = 1 - l),
                      e.vars.repeatRefresh && e._initted && e.invalidate())),
                  l !== s || r || e._zTime === ne || (!t && e._zTime))
                ) {
                  if (!e._initted && yt(e, t, r, n)) return;
                  for (
                    o = e._zTime,
                      e._zTime = t || (n ? ne : 0),
                      n || (n = t && !o),
                      e.ratio = l,
                      e._from && (l = 1 - l),
                      e._time = 0,
                      e._tTime = c,
                      i = e._pt;
                    i;

                  )
                    i.r(l, i.d), (i = i._next);
                  e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                    e._onUpdate && !n && Bt(e, "onUpdate"),
                    c && e._repeat && !n && e.parent && Bt(e, "onRepeat"),
                    (t >= e._tDur || t < 0) &&
                      e.ratio === l &&
                      (l && ot(e, 1),
                      n ||
                        (Bt(e, l ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()));
                } else e._zTime || (e._zTime = t);
              })(this, e, t, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              e.prototype.invalidate.call(this)
            );
          }),
          (n.resetTo = function (e, t, n, r) {
            Z || en.wake(), this._ts || this.play();
            var i = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || _n(this, i),
              (function (e, t, n, r, i, a, o) {
                var s,
                  l,
                  u,
                  c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
                if (!c)
                  for (
                    c = e._ptCache[t] = [],
                      l = e._ptLookup,
                      u = e._targets.length;
                    u--;

                  ) {
                    if ((s = l[u][t]) && s.d && s.d._pt)
                      for (s = s.d._pt; s && s.p !== t; ) s = s._next;
                    if (!s)
                      return (
                        (yn = 1), (e.vars[t] = "+=0"), _n(e, o), (yn = 0), 1
                      );
                    c.push(s);
                  }
                for (u = c.length; u--; )
                  ((s = c[u]).s =
                    (!r && 0 !== r) || i ? s.s + (r || 0) + a * s.c : r),
                    (s.c = n - s.s),
                    s.e && (s.e = Ye(n) + Pt(s.e)),
                    s.b && (s.b = s.s + Pt(s.b));
              })(this, e, t, n, r, this._ease(i / this._dur), i)
                ? this.resetTo(e, t, n, r)
                : (ht(this, 0),
                  this.parent ||
                    it(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (n.kill = function (e, t) {
            if ((void 0 === t && (t = "all"), !e && (!t || "all" === t)))
              return (this._lazy = this._pt = 0), this.parent ? Ht(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, gn && !0 !== gn.vars.overwrite)
                  ._first || Ht(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  wt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              a,
              o,
              s,
              l,
              u,
              c = this._targets,
              f = e ? Ot(e) : c,
              d = this._ptLookup,
              p = this._pt;
            if (
              (!t || "all" === t) &&
              (function (e, t) {
                for (
                  var n = e.length, r = n === t.length;
                  r && n-- && e[n] === t[n];

                );
                return n < 0;
              })(c, f)
            )
              return "all" === t && (this._pt = 0), Ht(this);
            for (
              r = this._op = this._op || [],
                "all" !== t &&
                  (ue(t) &&
                    ((s = {}),
                    We(t, function (e) {
                      return (s[e] = 1);
                    }),
                    (t = s)),
                  (t = (function (e, t) {
                    var n,
                      r,
                      i,
                      a,
                      o = e[0] ? Be(e[0]).harness : 0,
                      s = o && o.aliases;
                    if (!s) return t;
                    for (r in ((n = et({}, t)), s))
                      if ((r in n))
                        for (i = (a = s[r].split(",")).length; i--; )
                          n[a[i]] = n[r];
                    return n;
                  })(c, t))),
                u = c.length;
              u--;

            )
              if (~f.indexOf(c[u]))
                for (s in ((i = d[u]),
                "all" === t
                  ? ((r[u] = t), (o = i), (a = {}))
                  : ((a = r[u] = r[u] || {}), (o = t)),
                o))
                  (l = i && i[s]) &&
                    (("kill" in l.d && !0 !== l.d.kill(s)) ||
                      at(this, l, "_pt"),
                    delete i[s]),
                    "all" !== a && (a[s] = 1);
            return this._initted && !this._pt && p && Ht(this), this;
          }),
          (t.to = function (e, n) {
            return new t(e, n, arguments[2]);
          }),
          (t.from = function (e, t) {
            return Tt(1, arguments);
          }),
          (t.delayedCall = function (e, n, r, i) {
            return new t(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (t.fromTo = function (e, t, n) {
            return Tt(2, arguments);
          }),
          (t.set = function (e, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n)
            );
          }),
          (t.killTweensOf = function (e, t, n) {
            return Y.killTweensOf(e, t, n);
          }),
          t
        );
      })(vn);
      Je(Cn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        We("staggerTo,staggerFrom,staggerFromTo", function (e) {
          Cn[e] = function () {
            var t = new mn(),
              n = jt.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
            );
          };
        });
      var Pn = function (e, t, n) {
          return (e[t] = n);
        },
        jn = function (e, t, n) {
          return e[t](n);
        },
        Mn = function (e, t, n, r) {
          return e[t](r.fp, n);
        },
        An = function (e, t, n) {
          return e.setAttribute(t, n);
        },
        On = function (e, t) {
          return ce(e[t]) ? jn : de(e[t]) && e.setAttribute ? An : Pn;
        },
        Ln = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
        },
        Nn = function (e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t);
        },
        Rn = function (e, t) {
          var n = t._pt,
            r = "";
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * e)
                  : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                r),
                (n = n._next);
            r += t.c;
          }
          t.set(t.t, t.p, r, t);
        },
        Dn = function (e, t) {
          for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
        },
        zn = function (e, t, n, r) {
          for (var i, a = this._pt; a; )
            (i = a._next), a.p === r && a.modifier(e, t, n), (a = i);
        },
        Fn = function (e) {
          for (var t, n, r = this._pt; r; )
            (n = r._next),
              (r.p === e && !r.op) || r.op === e
                ? at(this, r, "_pt")
                : r.dep || (t = 1),
              (r = n);
          return !t;
        },
        In = function (e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
        },
        Vn = function (e) {
          for (var t, n, r, i, a = e._pt; a; ) {
            for (t = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
            (a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
              (a._next = n) ? (n._prev = a) : (i = a),
              (a = t);
          }
          e._pt = r;
        },
        Un = (function () {
          function e(e, t, n, r, i, a, o, s, l) {
            (this.t = t),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = a || Ln),
              (this.d = o || this),
              (this.set = s || Pn),
              (this.pr = l || 0),
              (this._next = e),
              e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, t, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = In),
                (this.m = e),
                (this.mt = n),
                (this.tween = t);
            }),
            e
          );
        })();
      We(
        Ve +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (e) {
          return (Le[e] = 1);
        }
      ),
        (Ee.TweenMax = Ee.TweenLite = Cn),
        (Ee.TimelineLite = Ee.TimelineMax = mn),
        (Y = new mn({
          sortChildren: !1,
          defaults: ee,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (J.stringFilter = Jt);
      var Bn = {
        registerPlugin: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          t.forEach(function (e) {
            return Wt(e);
          });
        },
        timeline: function (e) {
          return new mn(e);
        },
        getTweensOf: function (e, t) {
          return Y.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, r) {
          ue(e) && (e = Ot(e)[0]);
          var i = Be(e || {}).get,
            a = n ? Ze : Ke;
          return (
            "native" === n && (n = ""),
            e
              ? t
                ? a(((De[t] && De[t].get) || i)(e, t, n, r))
                : function (t, n, r) {
                    return a(((De[t] && De[t].get) || i)(e, t, n, r));
                  }
              : e
          );
        },
        quickSetter: function (e, t, n) {
          if ((e = Ot(e)).length > 1) {
            var r = e.map(function (e) {
                return Yn.quickSetter(e, t, n);
              }),
              i = r.length;
            return function (e) {
              for (var t = i; t--; ) r[t](e);
            };
          }
          e = e[0] || {};
          var a = De[t],
            o = Be(e),
            s = (o.harness && (o.harness.aliases || {})[t]) || t,
            l = a
              ? function (t) {
                  var r = new a();
                  (K._pt = 0),
                    r.init(e, n ? t + n : t, K, 0, [e]),
                    r.render(1, r),
                    K._pt && Dn(1, K);
                }
              : o.set(e, s);
          return a
            ? l
            : function (t) {
                return l(e, s, n ? t + n : t, o, 1);
              };
        },
        quickTo: function (e, t, n) {
          var r,
            i = Yn.to(
              e,
              et((((r = {})[t] = "+=0.1"), (r.paused = !0), r), n || {})
            ),
            a = function (e, n, r) {
              return i.resetTo(t, e, n, r);
            };
          return (a.tween = i), a;
        },
        isTweening: function (e) {
          return Y.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return e && e.ease && (e.ease = un(e.ease, ee.ease)), tt(ee, e || {});
        },
        config: function (e) {
          return tt(J, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            r = e.plugins,
            i = e.defaults,
            a = e.extendTimeline;
          (r || "").split(",").forEach(function (e) {
            return (
              e &&
              !De[e] &&
              !Ee[e] &&
              Me(t + " effect requires " + e + " plugin.")
            );
          }),
            (ze[t] = function (e, t, r) {
              return n(Ot(e), Je(t || {}, i), r);
            }),
            a &&
              (mn.prototype[t] = function (e, n, r) {
                return this.add(ze[t](e, pe(n) ? n : (r = n) && {}, this), r);
              });
        },
        registerEase: function (e, t) {
          nn[e] = un(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? un(e, t) : nn;
        },
        getById: function (e) {
          return Y.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var n,
            r,
            i = new mn(e);
          for (
            i.smoothChildTiming = he(e.smoothChildTiming),
              Y.remove(i),
              i._dp = 0,
              i._time = i._tTime = Y._time,
              n = Y._first;
            n;

          )
            (r = n._next),
              (!t &&
                !n._dur &&
                n instanceof Cn &&
                n.vars.onComplete === n._targets[0]) ||
                mt(i, n, n._start - n._delay),
              (n = r);
          return mt(Y, i, 0), i;
        },
        utils: {
          wrap: function e(t, n, r) {
            var i = n - t;
            return ye(t)
              ? Ft(t, e(0, t.length), n)
              : Et(r, function (e) {
                  return ((i + ((e - t) % i)) % i) + t;
                });
          },
          wrapYoyo: function e(t, n, r) {
            var i = n - t,
              a = 2 * i;
            return ye(t)
              ? Ft(t, e(0, t.length - 1), n)
              : Et(r, function (e) {
                  return (
                    t + ((e = (a + ((e - t) % a)) % a || 0) > i ? a - e : e)
                  );
                });
          },
          distribute: Nt,
          random: zt,
          snap: Dt,
          normalize: function (e, t, n) {
            return Vt(e, t, 0, 1, n);
          },
          getUnit: Pt,
          clamp: function (e, t, n) {
            return Et(n, function (n) {
              return Ct(e, t, n);
            });
          },
          splitColor: $t,
          toArray: Ot,
          selector: function (e) {
            return (
              (e = Ot(e)[0] || Me("Invalid scope") || {}),
              function (t) {
                var n = e.current || e.nativeElement || e;
                return Ot(
                  t,
                  n.querySelectorAll
                    ? n
                    : n === e
                    ? Me("Invalid scope") || $.createElement("div")
                    : e
                );
              }
            );
          },
          mapRange: Vt,
          pipe: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (n) {
              return e(parseFloat(n)) + (t || Pt(n));
            };
          },
          interpolate: function e(t, n, r, i) {
            var a = isNaN(t + n)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * n;
                };
            if (!a) {
              var o,
                s,
                l,
                u,
                c,
                f = ue(t),
                d = {};
              if ((!0 === r && (i = 1) && (r = null), f))
                (t = { p: t }), (n = { p: n });
              else if (ye(t) && !ye(n)) {
                for (l = [], u = t.length, c = u - 2, s = 1; s < u; s++)
                  l.push(e(t[s - 1], t[s]));
                u--,
                  (a = function (e) {
                    e *= u;
                    var t = Math.min(c, ~~e);
                    return l[t](e - t);
                  }),
                  (r = n);
              } else i || (t = et(ye(t) ? [] : {}, t));
              if (!l) {
                for (o in n) xn.call(d, t, o, "get", n[o]);
                a = function (e) {
                  return Dn(e, d) || (f ? t.p : t);
                };
              }
            }
            return Et(r, a);
          },
          shuffle: Lt,
        },
        install: Pe,
        effects: ze,
        ticker: en,
        updateRoot: mn.updateRoot,
        plugins: De,
        globalTimeline: Y,
        core: {
          PropTween: Un,
          globals: Ae,
          Tween: Cn,
          Timeline: mn,
          Animation: vn,
          getCache: Be,
          _removeLinkedListItem: at,
          suppressOverwrites: function (e) {
            return (W = e);
          },
        },
      };
      We("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return (Bn[e] = Cn[e]);
      }),
        en.add(mn.updateRoot),
        (K = Bn.to({}, { duration: 0 }));
      var Hn = function (e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
          return n;
        },
        Wn = function (e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, n, r) {
              r._onInit = function (e) {
                var r, i;
                if (
                  (ue(n) &&
                    ((r = {}),
                    We(n, function (e) {
                      return (r[e] = 1);
                    }),
                    (n = r)),
                  t)
                ) {
                  for (i in ((r = {}), n)) r[i] = t(n[i]);
                  n = r;
                }
                !(function (e, t) {
                  var n,
                    r,
                    i,
                    a = e._targets;
                  for (n in t)
                    for (r = a.length; r--; )
                      (i = e._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = Hn(i, n)),
                        i && i.modifier && i.modifier(t[n], e, a[r], n));
                })(e, n);
              };
            },
          };
        },
        Yn =
          Bn.registerPlugin(
            {
              name: "attr",
              init: function (e, t, n, r, i) {
                var a, o;
                for (a in t)
                  (o = this.add(
                    e,
                    "setAttribute",
                    (e.getAttribute(a) || 0) + "",
                    t[a],
                    r,
                    i,
                    0,
                    0,
                    a
                  )) && (o.op = a),
                    this._props.push(a);
              },
            },
            {
              name: "endArray",
              init: function (e, t) {
                for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
              },
            },
            Wn("roundProps", Rt),
            Wn("modifiers"),
            Wn("snap", Dt)
          ) || Bn;
      (Cn.version = mn.version = Yn.version = "3.10.4"), (Q = 1), ve() && tn();
      nn.Power0;
      var Xn,
        qn,
        $n,
        Qn,
        Gn,
        Kn,
        Zn,
        Jn = nn.Power1,
        er =
          (nn.Power2,
          nn.Power3,
          nn.Power4,
          nn.Linear,
          nn.Quad,
          nn.Cubic,
          nn.Quart,
          nn.Quint,
          nn.Strong,
          nn.Elastic,
          nn.Back,
          nn.SteppedEase,
          nn.Bounce,
          nn.Sine,
          nn.Expo,
          nn.Circ,
          {}),
        tr = 180 / Math.PI,
        nr = Math.PI / 180,
        rr = Math.atan2,
        ir = /([A-Z])/g,
        ar = /(left|right|width|margin|padding|x)/i,
        or = /[\s,\(]\S/,
        sr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        lr = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        ur = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        cr = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
            t
          );
        },
        fr = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        dr = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        pr = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        hr = function (e, t, n) {
          return (e.style[t] = n);
        },
        vr = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        mr = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        gr = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        yr = function (e, t, n, r, i) {
          var a = e._gsap;
          (a.scaleX = a.scaleY = n), a.renderTransform(i, a);
        },
        br = function (e, t, n, r, i) {
          var a = e._gsap;
          (a[t] = n), a.renderTransform(i, a);
        },
        xr = "transform",
        wr = xr + "Origin",
        _r = function (e, t) {
          var n = qn.createElementNS
            ? qn.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : qn.createElement(e);
          return n.style ? n : qn.createElement(e);
        },
        kr = function e(t, n, r) {
          var i = getComputedStyle(t);
          return (
            i[n] ||
            i.getPropertyValue(n.replace(ir, "-$1").toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && e(t, Tr(n) || n, 1)) ||
            ""
          );
        },
        Sr = "O,Moz,ms,Ms,Webkit".split(","),
        Tr = function (e, t, n) {
          var r = (t || Gn).style,
            i = 5;
          if (e in r && !n) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            i-- && !(Sr[i] + e in r);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Sr[i] : "") + e;
        },
        Er = function () {
          "undefined" !== typeof window &&
            window.document &&
            ((Xn = window),
            (qn = Xn.document),
            ($n = qn.documentElement),
            (Gn = _r("div") || { style: {} }),
            _r("div"),
            (xr = Tr(xr)),
            (wr = xr + "Origin"),
            (Gn.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (Zn = !!Tr("perspective")),
            (Qn = 1));
        },
        Cr = function e(t) {
          var n,
            r = _r(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            a = this.nextSibling,
            o = this.style.cssText;
          if (
            ($n.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (s) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            i && (a ? i.insertBefore(this, a) : i.appendChild(this)),
            $n.removeChild(r),
            (this.style.cssText = o),
            n
          );
        },
        Pr = function (e, t) {
          for (var n = t.length; n--; )
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        jr = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = Cr.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === Cr ||
              (t = Cr.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +Pr(e, ["x", "cx", "x1"]) || 0,
                  y: +Pr(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Mr = function (e) {
          return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !jr(e));
        },
        Ar = function (e, t) {
          if (t) {
            var n = e.style;
            t in er && t !== wr && (t = xr),
              n.removeProperty
                ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                    (t = "-" + t),
                  n.removeProperty(t.replace(ir, "-$1").toLowerCase()))
                : n.removeAttribute(t);
          }
        },
        Or = function (e, t, n, r, i, a) {
          var o = new Un(e._pt, t, n, 0, 1, a ? pr : dr);
          return (e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o;
        },
        Lr = { deg: 1, rad: 1, turn: 1 },
        Nr = function e(t, n, r, i) {
          var a,
            o,
            s,
            l,
            u = parseFloat(r) || 0,
            c = (r + "").trim().substr((u + "").length) || "px",
            f = Gn.style,
            d = ar.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
            v = 100,
            m = "px" === i,
            g = "%" === i;
          return i === c || !u || Lr[i] || Lr[c]
            ? u
            : ("px" !== c && !m && (u = e(t, n, r, "px")),
              (l = t.getCTM && Mr(t)),
              (!g && "%" !== c) || (!er[n] && !~n.indexOf("adius"))
                ? ((f[d ? "width" : "height"] = v + (m ? c : i)),
                  (o =
                    ~n.indexOf("adius") || ("em" === i && t.appendChild && !p)
                      ? t
                      : t.parentNode),
                  l && (o = (t.ownerSVGElement || {}).parentNode),
                  (o && o !== qn && o.appendChild) || (o = qn.body),
                  (s = o._gsap) && g && s.width && d && s.time === en.time
                    ? Ye((u / s.width) * v)
                    : ((g || "%" === c) && (f.position = kr(t, "position")),
                      o === t && (f.position = "static"),
                      o.appendChild(Gn),
                      (a = Gn[h]),
                      o.removeChild(Gn),
                      (f.position = "absolute"),
                      d &&
                        g &&
                        (((s = Be(o)).time = en.time), (s.width = o[h])),
                      Ye(m ? (a * u) / v : a && u ? (v / a) * u : 0)))
                : ((a = l ? t.getBBox()[d ? "width" : "height"] : t[h]),
                  Ye(g ? (u / a) * v : (u / 100) * a)));
        },
        Rr = function (e, t, n, r) {
          var i;
          return (
            Qn || Er(),
            t in sr &&
              "transform" !== t &&
              ~(t = sr[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            er[t] && "transform" !== t
              ? ((i = qr(e, r)),
                (i =
                  "transformOrigin" !== t
                    ? i[t]
                    : i.svg
                    ? i.origin
                    : $r(kr(e, wr)) + " " + i.zOrigin + "px"))
              : (!(i = e.style[t]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (Vr[t] && Vr[t](e, t, n)) ||
                  kr(e, t) ||
                  He(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? Nr(e, t, i, n) + n : i
          );
        },
        Dr = function (e, t, n, r) {
          if (!n || "none" === n) {
            var i = Tr(t, e, 1),
              a = i && kr(e, i, 1);
            a && a !== n
              ? ((t = i), (n = a))
              : "borderColor" === t && (n = kr(e, "borderTopColor"));
          }
          var o,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            v,
            m,
            g = new Un(this._pt, e.style, t, 0, 1, Rn),
            y = 0,
            b = 0;
          if (
            ((g.b = n),
            (g.e = r),
            (n += ""),
            "auto" === (r += "") &&
              ((e.style[t] = r), (r = kr(e, t) || r), (e.style[t] = n)),
            Jt((o = [n, r])),
            (r = o[1]),
            (l = (n = o[0]).match(we) || []),
            (r.match(we) || []).length)
          ) {
            for (; (s = we.exec(r)); )
              (d = s[0]),
                (h = r.substring(y, s.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                    (c = 1),
                d !== (f = l[b++] || "") &&
                  ((u = parseFloat(f) || 0),
                  (m = f.substr((u + "").length)),
                  "=" === d.charAt(1) && (d = qe(u, d) + m),
                  (p = parseFloat(d)),
                  (v = d.substr((p + "").length)),
                  (y = we.lastIndex - v.length),
                  v ||
                    ((v = v || J.units[t] || m),
                    y === r.length && ((r += v), (g.e += v))),
                  m !== v && (u = Nr(e, t, f, v) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: h || 1 === b ? h : ",",
                    s: u,
                    c: p - u,
                    m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            g.c = y < r.length ? r.substring(y, r.length) : "";
          } else g.r = "display" === t && "none" === r ? pr : dr;
          return ke.test(r) && (g.e = 0), (this._pt = g), g;
        },
        zr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        Fr = function (e) {
          var t = e.split(" "),
            n = t[0],
            r = t[1] || "50%";
          return (
            ("top" !== n && "bottom" !== n && "left" !== r && "right" !== r) ||
              ((e = n), (n = r), (r = e)),
            (t[0] = zr[n] || n),
            (t[1] = zr[r] || r),
            t.join(" ")
          );
        },
        Ir = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              r,
              i,
              a = t.t,
              o = a.style,
              s = t.u,
              l = a._gsap;
            if ("all" === s || !0 === s) (o.cssText = ""), (r = 1);
            else
              for (i = (s = s.split(",")).length; --i > -1; )
                (n = s[i]),
                  er[n] && ((r = 1), (n = "transformOrigin" === n ? wr : xr)),
                  Ar(a, n);
            r &&
              (Ar(a, xr),
              l &&
                (l.svg && a.removeAttribute("transform"),
                qr(a, 1),
                (l.uncache = 1)));
          }
        },
        Vr = {
          clearProps: function (e, t, n, r, i) {
            if ("isFromStart" !== i.data) {
              var a = (e._pt = new Un(e._pt, t, n, 0, 0, Ir));
              return (
                (a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1
              );
            }
          },
        },
        Ur = [1, 0, 0, 1, 0, 0],
        Br = {},
        Hr = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        Wr = function (e) {
          var t = kr(e, xr);
          return Hr(t) ? Ur : t.substr(7).match(xe).map(Ye);
        },
        Yr = function (e, t) {
          var n,
            r,
            i,
            a,
            o = e._gsap || Be(e),
            s = e.style,
            l = Wr(e);
          return o.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (l = [
                (i = e.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? Ur
              : l
            : (l !== Ur ||
                e.offsetParent ||
                e === $n ||
                o.svg ||
                ((i = s.display),
                (s.display = "block"),
                ((n = e.parentNode) && e.offsetParent) ||
                  ((a = 1), (r = e.nextSibling), $n.appendChild(e)),
                (l = Wr(e)),
                i ? (s.display = i) : Ar(e, "display"),
                a &&
                  (r
                    ? n.insertBefore(e, r)
                    : n
                    ? n.appendChild(e)
                    : $n.removeChild(e))),
              t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        Xr = function (e, t, n, r, i, a) {
          var o,
            s,
            l,
            u = e._gsap,
            c = i || Yr(e, !0),
            f = u.xOrigin || 0,
            d = u.yOrigin || 0,
            p = u.xOffset || 0,
            h = u.yOffset || 0,
            v = c[0],
            m = c[1],
            g = c[2],
            y = c[3],
            b = c[4],
            x = c[5],
            w = t.split(" "),
            _ = parseFloat(w[0]) || 0,
            k = parseFloat(w[1]) || 0;
          n
            ? c !== Ur &&
              (s = v * y - m * g) &&
              ((l = _ * (-m / s) + k * (v / s) - (v * x - m * b) / s),
              (_ = _ * (y / s) + k * (-g / s) + (g * x - y * b) / s),
              (k = l))
            : ((_ =
                (o = jr(e)).x + (~w[0].indexOf("%") ? (_ / 100) * o.width : _)),
              (k =
                o.y +
                (~(w[1] || w[0]).indexOf("%") ? (k / 100) * o.height : k))),
            r || (!1 !== r && u.smooth)
              ? ((b = _ - f),
                (x = k - d),
                (u.xOffset = p + (b * v + x * g) - b),
                (u.yOffset = h + (b * m + x * y) - x))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = _),
            (u.yOrigin = k),
            (u.smooth = !!r),
            (u.origin = t),
            (u.originIsAbsolute = !!n),
            (e.style[wr] = "0px 0px"),
            a &&
              (Or(a, u, "xOrigin", f, _),
              Or(a, u, "yOrigin", d, k),
              Or(a, u, "xOffset", p, u.xOffset),
              Or(a, u, "yOffset", h, u.yOffset)),
            e.setAttribute("data-svg-origin", _ + " " + k);
        },
        qr = function (e, t) {
          var n = e._gsap || new hn(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r,
            i,
            a,
            o,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            v,
            m,
            g,
            y,
            b,
            x,
            w,
            _,
            k,
            S,
            T,
            E,
            C,
            P,
            j,
            M,
            A,
            O,
            L,
            N,
            R = e.style,
            D = n.scaleX < 0,
            z = "px",
            F = "deg",
            I = kr(e, wr) || "0";
          return (
            (r = i = a = l = u = c = f = d = p = 0),
            (o = s = 1),
            (n.svg = !(!e.getCTM || !Mr(e))),
            (m = Yr(e, n.svg)),
            n.svg &&
              ((E =
                (!n.uncache || "0px 0px" === I) &&
                !t &&
                e.getAttribute("data-svg-origin")),
              Xr(e, E || I, !!E || n.originIsAbsolute, !1 !== n.smooth, m)),
            (h = n.xOrigin || 0),
            (v = n.yOrigin || 0),
            m !== Ur &&
              ((x = m[0]),
              (w = m[1]),
              (_ = m[2]),
              (k = m[3]),
              (r = S = m[4]),
              (i = T = m[5]),
              6 === m.length
                ? ((o = Math.sqrt(x * x + w * w)),
                  (s = Math.sqrt(k * k + _ * _)),
                  (l = x || w ? rr(w, x) * tr : 0),
                  (f = _ || k ? rr(_, k) * tr + l : 0) &&
                    (s *= Math.abs(Math.cos(f * nr))),
                  n.svg &&
                    ((r -= h - (h * x + v * _)), (i -= v - (h * w + v * k))))
                : ((N = m[6]),
                  (O = m[7]),
                  (j = m[8]),
                  (M = m[9]),
                  (A = m[10]),
                  (L = m[11]),
                  (r = m[12]),
                  (i = m[13]),
                  (a = m[14]),
                  (u = (g = rr(N, A)) * tr),
                  g &&
                    ((E = S * (y = Math.cos(-g)) + j * (b = Math.sin(-g))),
                    (C = T * y + M * b),
                    (P = N * y + A * b),
                    (j = S * -b + j * y),
                    (M = T * -b + M * y),
                    (A = N * -b + A * y),
                    (L = O * -b + L * y),
                    (S = E),
                    (T = C),
                    (N = P)),
                  (c = (g = rr(-_, A)) * tr),
                  g &&
                    ((y = Math.cos(-g)),
                    (L = k * (b = Math.sin(-g)) + L * y),
                    (x = E = x * y - j * b),
                    (w = C = w * y - M * b),
                    (_ = P = _ * y - A * b)),
                  (l = (g = rr(w, x)) * tr),
                  g &&
                    ((E = x * (y = Math.cos(g)) + w * (b = Math.sin(g))),
                    (C = S * y + T * b),
                    (w = w * y - x * b),
                    (T = T * y - S * b),
                    (x = E),
                    (S = C)),
                  u &&
                    Math.abs(u) + Math.abs(l) > 359.9 &&
                    ((u = l = 0), (c = 180 - c)),
                  (o = Ye(Math.sqrt(x * x + w * w + _ * _))),
                  (s = Ye(Math.sqrt(T * T + N * N))),
                  (g = rr(S, T)),
                  (f = Math.abs(g) > 2e-4 ? g * tr : 0),
                  (p = L ? 1 / (L < 0 ? -L : L) : 0)),
              n.svg &&
                ((E = e.getAttribute("transform")),
                (n.forceCSS =
                  e.setAttribute("transform", "") || !Hr(kr(e, xr))),
                E && e.setAttribute("transform", E))),
            Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (D
                ? ((o *= -1),
                  (f += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((s *= -1), (f += f <= 0 ? 180 : -180))),
            (t = t || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!t && n.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (e.offsetWidth * n.xPercent) / 100
                : 0) +
              z),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!t && n.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * n.yPercent) / 100
                : 0) +
              z),
            (n.z = a + z),
            (n.scaleX = Ye(o)),
            (n.scaleY = Ye(s)),
            (n.rotation = Ye(l) + F),
            (n.rotationX = Ye(u) + F),
            (n.rotationY = Ye(c) + F),
            (n.skewX = f + F),
            (n.skewY = d + F),
            (n.transformPerspective = p + z),
            (n.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (R[wr] = $r(I)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = J.force3D),
            (n.renderTransform = n.svg ? ti : Zn ? ei : Gr),
            (n.uncache = 0),
            n
          );
        },
        $r = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        Qr = function (e, t, n) {
          var r = Pt(t);
          return Ye(parseFloat(t) + parseFloat(Nr(e, "x", n + "px", r))) + r;
        },
        Gr = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            ei(e, t);
        },
        Kr = "0deg",
        Zr = "0px",
        Jr = ") ",
        ei = function (e, t) {
          var n = t || this,
            r = n.xPercent,
            i = n.yPercent,
            a = n.x,
            o = n.y,
            s = n.z,
            l = n.rotation,
            u = n.rotationY,
            c = n.rotationX,
            f = n.skewX,
            d = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            v = n.transformPerspective,
            m = n.force3D,
            g = n.target,
            y = n.zOrigin,
            b = "",
            x = ("auto" === m && e && 1 !== e) || !0 === m;
          if (y && (c !== Kr || u !== Kr)) {
            var w,
              _ = parseFloat(u) * nr,
              k = Math.sin(_),
              S = Math.cos(_);
            (_ = parseFloat(c) * nr),
              (w = Math.cos(_)),
              (a = Qr(g, a, k * w * -y)),
              (o = Qr(g, o, -Math.sin(_) * -y)),
              (s = Qr(g, s, S * w * -y + y));
          }
          v !== Zr && (b += "perspective(" + v + Jr),
            (r || i) && (b += "translate(" + r + "%, " + i + "%) "),
            (x || a !== Zr || o !== Zr || s !== Zr) &&
              (b +=
                s !== Zr || x
                  ? "translate3d(" + a + ", " + o + ", " + s + ") "
                  : "translate(" + a + ", " + o + Jr),
            l !== Kr && (b += "rotate(" + l + Jr),
            u !== Kr && (b += "rotateY(" + u + Jr),
            c !== Kr && (b += "rotateX(" + c + Jr),
            (f === Kr && d === Kr) || (b += "skew(" + f + ", " + d + Jr),
            (1 === p && 1 === h) || (b += "scale(" + p + ", " + h + Jr),
            (g.style[xr] = b || "translate(0, 0)");
        },
        ti = function (e, t) {
          var n,
            r,
            i,
            a,
            o,
            s = t || this,
            l = s.xPercent,
            u = s.yPercent,
            c = s.x,
            f = s.y,
            d = s.rotation,
            p = s.skewX,
            h = s.skewY,
            v = s.scaleX,
            m = s.scaleY,
            g = s.target,
            y = s.xOrigin,
            b = s.yOrigin,
            x = s.xOffset,
            w = s.yOffset,
            _ = s.forceCSS,
            k = parseFloat(c),
            S = parseFloat(f);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (h = parseFloat(h)) && ((p += h = parseFloat(h)), (d += h)),
            d || p
              ? ((d *= nr),
                (p *= nr),
                (n = Math.cos(d) * v),
                (r = Math.sin(d) * v),
                (i = Math.sin(d - p) * -m),
                (a = Math.cos(d - p) * m),
                p &&
                  ((h *= nr),
                  (o = Math.tan(p - h)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (a *= o),
                  h &&
                    ((o = Math.tan(h)),
                    (n *= o = Math.sqrt(1 + o * o)),
                    (r *= o))),
                (n = Ye(n)),
                (r = Ye(r)),
                (i = Ye(i)),
                (a = Ye(a)))
              : ((n = v), (a = m), (r = i = 0)),
            ((k && !~(c + "").indexOf("px")) ||
              (S && !~(f + "").indexOf("px"))) &&
              ((k = Nr(g, "x", c, "px")), (S = Nr(g, "y", f, "px"))),
            (y || b || x || w) &&
              ((k = Ye(k + y - (y * n + b * i) + x)),
              (S = Ye(S + b - (y * r + b * a) + w))),
            (l || u) &&
              ((o = g.getBBox()),
              (k = Ye(k + (l / 100) * o.width)),
              (S = Ye(S + (u / 100) * o.height))),
            (o =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              i +
              "," +
              a +
              "," +
              k +
              "," +
              S +
              ")"),
            g.setAttribute("transform", o),
            _ && (g.style[xr] = o);
        },
        ni = function (e, t, n, r, i) {
          var a,
            o,
            s = 360,
            l = ue(i),
            u = parseFloat(i) * (l && ~i.indexOf("rad") ? tr : 1) - r,
            c = r + u + "deg";
          return (
            l &&
              ("short" === (a = i.split("_")[1]) &&
                (u %= s) !== u % 180 &&
                (u += u < 0 ? s : -360),
              "cw" === a && u < 0
                ? (u = ((u + 36e9) % s) - ~~(u / s) * s)
                : "ccw" === a &&
                  u > 0 &&
                  (u = ((u - 36e9) % s) - ~~(u / s) * s)),
            (e._pt = o = new Un(e._pt, t, n, r, u, ur)),
            (o.e = c),
            (o.u = "deg"),
            e._props.push(n),
            o
          );
        },
        ri = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        ii = function (e, t, n) {
          var r,
            i,
            a,
            o,
            s,
            l,
            u,
            c = ri({}, n._gsap),
            f = n.style;
          for (i in (c.svg
            ? ((a = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (f[xr] = t),
              (r = qr(n, 1)),
              Ar(n, xr),
              n.setAttribute("transform", a))
            : ((a = getComputedStyle(n)[xr]),
              (f[xr] = t),
              (r = qr(n, 1)),
              (f[xr] = a)),
          er))
            (a = c[i]) !== (o = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((s = Pt(a) !== (u = Pt(o)) ? Nr(n, i, a, u) : parseFloat(a)),
              (l = parseFloat(o)),
              (e._pt = new Un(e._pt, r, i, s, l - s, lr)),
              (e._pt.u = u || 0),
              e._props.push(i));
          ri(r, c);
        };
      We("padding,margin,Width,Radius", function (e, t) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          a = "Left",
          o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(
            function (n) {
              return t < 2 ? e + n : "border" + n + e;
            }
          );
        Vr[t > 1 ? "border" + e : e] = function (e, t, n, r, i) {
          var a, s;
          if (arguments.length < 4)
            return (
              (a = o.map(function (t) {
                return Rr(e, t, n);
              })),
              5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
            );
          (a = (r + "").split(" ")),
            (s = {}),
            o.forEach(function (e, t) {
              return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, i);
        };
      });
      var ai = {
        name: "css",
        register: Er,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, r, i) {
          var a,
            o,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            v,
            m,
            g,
            y,
            b,
            x = this._props,
            w = e.style,
            _ = n.vars.startAt;
          for (f in (Qn || Er(), t))
            if (
              "autoRound" !== f &&
              ((o = t[f]), !De[f] || !wn(f, t, n, r, e, i))
            )
              if (
                ((u = typeof o),
                (c = Vr[f]),
                "function" === u && (u = typeof (o = o.call(n, r, e, i))),
                "string" === u && ~o.indexOf("random(") && (o = It(o)),
                c)
              )
                c(this, e, f, o, n) && (b = 1);
              else if ("--" === f.substr(0, 2))
                (a = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
                  (o += ""),
                  (Kt.lastIndex = 0),
                  Kt.test(a) || ((d = Pt(a)), (p = Pt(o))),
                  p ? d !== p && (a = Nr(e, f, a, p) + p) : d && (o += d),
                  this.add(w, "setProperty", a, o, r, i, 0, 0, f),
                  x.push(f);
              else if ("undefined" !== u) {
                if (
                  (_ && f in _
                    ? ((a =
                        "function" === typeof _[f]
                          ? _[f].call(n, r, e, i)
                          : _[f]),
                      ue(a) && ~a.indexOf("random(") && (a = It(a)),
                      Pt(a + "") || (a += J.units[f] || Pt(Rr(e, f)) || ""),
                      "=" === (a + "").charAt(1) && (a = Rr(e, f)))
                    : (a = Rr(e, f)),
                  (l = parseFloat(a)),
                  (h =
                    "string" === u && "=" === o.charAt(1) && o.substr(0, 2)) &&
                    (o = o.substr(2)),
                  (s = parseFloat(o)),
                  f in sr &&
                    ("autoAlpha" === f &&
                      (1 === l &&
                        "hidden" === Rr(e, "visibility") &&
                        s &&
                        (l = 0),
                      Or(
                        this,
                        w,
                        "visibility",
                        l ? "inherit" : "hidden",
                        s ? "inherit" : "hidden",
                        !s
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = sr[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (v = f in er))
                )
                  if (
                    (m ||
                      (((g = e._gsap).renderTransform && !t.parseTransform) ||
                        qr(e, t.parseTransform),
                      (y = !1 !== t.smoothOrigin && g.smooth),
                      ((m = this._pt =
                        new Un(
                          this._pt,
                          w,
                          xr,
                          0,
                          1,
                          g.renderTransform,
                          g,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new Un(
                      this._pt,
                      g,
                      "scaleY",
                      g.scaleY,
                      (h ? qe(g.scaleY, h + s) : s) - g.scaleY || 0
                    )),
                      x.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      (o = Fr(o)),
                        g.svg
                          ? Xr(e, o, 0, y, 0, this)
                          : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                              g.zOrigin && Or(this, g, "zOrigin", g.zOrigin, p),
                            Or(this, w, f, $r(a), $r(o)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      Xr(e, o, 1, y, 0, this);
                      continue;
                    }
                    if (f in Br) {
                      ni(this, g, f, l, h ? qe(l, h + o) : o);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      Or(this, g, "smooth", g.smooth, o);
                      continue;
                    }
                    if ("force3D" === f) {
                      g[f] = o;
                      continue;
                    }
                    if ("transform" === f) {
                      ii(this, o, e);
                      continue;
                    }
                  }
                else f in w || (f = Tr(f) || f);
                if (
                  v ||
                  ((s || 0 === s) && (l || 0 === l) && !or.test(o) && f in w)
                )
                  s || (s = 0),
                    (d = (a + "").substr((l + "").length)) !==
                      (p = Pt(o) || (f in J.units ? J.units[f] : d)) &&
                      (l = Nr(e, f, a, p)),
                    (this._pt = new Un(
                      this._pt,
                      v ? g : w,
                      f,
                      l,
                      (h ? qe(l, h + s) : s) - l,
                      v || ("px" !== p && "zIndex" !== f) || !1 === t.autoRound
                        ? lr
                        : fr
                    )),
                    (this._pt.u = p || 0),
                    d !== p &&
                      "%" !== p &&
                      ((this._pt.b = a), (this._pt.r = cr));
                else if (f in w) Dr.call(this, e, f, a, h ? h + o : o);
                else {
                  if (!(f in e)) {
                    je(f, o);
                    continue;
                  }
                  this.add(e, f, a || e[f], h ? h + o : o, r, i);
                }
                x.push(f);
              }
          b && Vn(this);
        },
        get: Rr,
        aliases: sr,
        getSetter: function (e, t, n) {
          var r = sr[t];
          return (
            r && r.indexOf(",") < 0 && (t = r),
            t in er && t !== wr && (e._gsap.x || Rr(e, "x"))
              ? n && Kn === n
                ? "scale" === t
                  ? gr
                  : mr
                : (Kn = n || {}) && ("scale" === t ? yr : br)
              : e.style && !de(e.style[t])
              ? hr
              : ~t.indexOf("-")
              ? vr
              : On(e, t)
          );
        },
        core: { _removeProperty: Ar, _getMatrix: Yr },
      };
      (Yn.utils.checkPrefix = Tr),
        (function (e, t, n, r) {
          var i = We(
            e +
              "," +
              t +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (e) {
              er[e] = 1;
            }
          );
          We(t, function (e) {
            (J.units[e] = "deg"), (Br[e] = 1);
          }),
            (sr[i[13]] = e + "," + t),
            We(
              "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
              function (e) {
                var t = e.split(":");
                sr[t[1]] = i[t[0]];
              }
            );
        })(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
          "rotation,rotationX,rotationY,skewX,skewY"
        ),
        We(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            J.units[e] = "px";
          }
        ),
        Yn.registerPlugin(ai);
      var oi = Yn.registerPlugin(ai) || Yn;
      oi.core.Tween;
      function si(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var li,
        ui,
        ci,
        fi,
        di,
        pi,
        hi,
        vi,
        mi,
        gi,
        yi,
        bi,
        xi = function () {
          return (
            li ||
            ("undefined" !== typeof window &&
              (li = window.gsap) &&
              li.registerPlugin &&
              li)
          );
        },
        wi = 1,
        _i = [],
        ki = [],
        Si = [],
        Ti = Date.now,
        Ei = function (e, t) {
          return t;
        },
        Ci = function (e, t) {
          return ~Si.indexOf(e) && Si[Si.indexOf(e) + 1][t];
        },
        Pi = function (e) {
          return !!~gi.indexOf(e);
        },
        ji = function (e, t, n, r, i) {
          return e.addEventListener(t, n, { passive: !r, capture: !!i });
        },
        Mi = function (e, t, n, r) {
          return e.removeEventListener(t, n, !!r);
        },
        Ai = "scrollLeft",
        Oi = "scrollTop",
        Li = function () {
          return (yi && yi.isPressed) || ki.cache++;
        },
        Ni = function (e, t) {
          var n = function n(r) {
            if (r || 0 === r) {
              wi && (ci.history.scrollRestoration = "manual");
              var i = yi && yi.isPressed;
              (r = n.v = Math.round(r) || (yi && yi.iOS ? 1 : 0)),
                e(r),
                (n.cacheID = ki.cache),
                i && Ei("ss", r);
            } else
              (t || ki.cache !== n.cacheID || Ei("ref")) &&
                ((n.cacheID = ki.cache), (n.v = e()));
            return n.v + n.offset;
          };
          return (n.offset = 0), e && n;
        },
        Ri = {
          s: Ai,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: Ni(function (e) {
            return arguments.length
              ? ci.scrollTo(e, Di.sc())
              : ci.pageXOffset ||
                  fi.scrollLeft ||
                  di.scrollLeft ||
                  pi.scrollLeft ||
                  0;
          }),
        },
        Di = {
          s: Oi,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Ri,
          sc: Ni(function (e) {
            return arguments.length
              ? ci.scrollTo(Ri.sc(), e)
              : ci.pageYOffset ||
                  fi.scrollTop ||
                  di.scrollTop ||
                  pi.scrollTop ||
                  0;
          }),
        },
        zi = function (e) {
          return (
            li.utils.toArray(e)[0] ||
            ("string" === typeof e && !1 !== li.config().nullTargetWarn
              ? console.warn("Element not found:", e)
              : null)
          );
        },
        Fi = function (e, t) {
          var n = t.s,
            r = t.sc,
            i = ki.indexOf(e),
            a = r === Di.sc ? 1 : 2;
          return (
            !~i && (i = ki.push(e) - 1),
            ki[i + a] ||
              (ki[i + a] =
                Ni(Ci(e, n), !0) ||
                (Pi(e)
                  ? r
                  : Ni(function (t) {
                      return arguments.length ? (e[n] = t) : e[n];
                    })))
          );
        },
        Ii = function (e, t, n) {
          var r = e,
            i = e,
            a = Ti(),
            o = a,
            s = t || 50,
            l = Math.max(500, 3 * s),
            u = function (e, t) {
              var l = Ti();
              t || l - a > s
                ? ((i = r), (r = e), (o = a), (a = l))
                : n
                ? (r += e)
                : (r = i + ((e - i) / (l - o)) * (a - o));
            };
          return {
            update: u,
            reset: function () {
              (i = r = n ? 0 : r), (o = a = 0);
            },
            getVelocity: function (e) {
              var t = o,
                s = i,
                c = Ti();
              return (
                (e || 0 === e) && e !== r && u(e),
                a === o || c - o > l
                  ? 0
                  : ((r + (n ? s : -s)) / ((n ? c : a) - t)) * 1e3
              );
            },
          };
        },
        Vi = function (e, t) {
          return (
            t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
          );
        },
        Ui = function (e) {
          var t = Math.max.apply(Math, e),
            n = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(n) ? t : n;
        },
        Bi = function () {
          (mi = li.core.globals().ScrollTrigger) &&
            mi.core &&
            (function () {
              var e = mi.core,
                t = e.bridge || {},
                n = e._scrollers,
                r = e._proxies;
              n.push.apply(n, ki),
                r.push.apply(r, Si),
                (ki = n),
                (Si = r),
                (Ei = function (e, n) {
                  return t[e](n);
                });
            })();
        },
        Hi = function (e) {
          return (
            (li = e || xi()) &&
              "undefined" !== typeof document &&
              document.body &&
              ((ci = window),
              (fi = document),
              (di = fi.documentElement),
              (pi = fi.body),
              (gi = [ci, fi, di, pi]),
              li.utils.clamp,
              (vi = "onpointerenter" in pi ? "pointer" : "mouse"),
              (hi = Wi.isTouch =
                ci.matchMedia &&
                ci.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in ci ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (bi = Wi.eventTypes =
                (
                  "ontouchstart" in di
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in di
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (wi = 0);
              }, 500),
              Bi(),
              (ui = 1)),
            ui
          );
        };
      (Ri.op = Di), (ki.cache = 0);
      var Wi = (function () {
        function e(e) {
          this.init(e);
        }
        var t, n, r;
        return (
          (e.prototype.init = function (e) {
            ui ||
              Hi(li) ||
              console.warn("Please gsap.registerPlugin(Observer)"),
              mi || Bi();
            var t = e.tolerance,
              n = e.dragMinimum,
              r = e.type,
              i = e.target,
              a = e.lineHeight,
              o = e.debounce,
              s = e.preventDefault,
              l = e.onStop,
              u = e.onStopDelay,
              c = e.ignore,
              f = e.wheelSpeed,
              d = e.event,
              p = e.onDragStart,
              h = e.onDragEnd,
              v = e.onDrag,
              m = e.onPress,
              g = e.onRelease,
              y = e.onRight,
              b = e.onLeft,
              x = e.onUp,
              w = e.onDown,
              _ = e.onChangeX,
              k = e.onChangeY,
              S = e.onChange,
              T = e.onToggleX,
              E = e.onToggleY,
              C = e.onHover,
              P = e.onHoverEnd,
              j = e.onMove,
              M = e.ignoreCheck,
              A = e.isNormalizer,
              O = e.onGestureStart,
              L = e.onGestureEnd,
              N = e.onWheel,
              R = e.onEnable,
              D = e.onDisable,
              z = e.onClick,
              F = e.scrollSpeed,
              I = e.capture,
              V = e.allowClicks,
              U = e.lockAxis,
              B = e.onLockAxis;
            (this.target = i = zi(i) || di),
              (this.vars = e),
              c && (c = li.utils.toArray(c)),
              (t = t || 0),
              (n = n || 0),
              (f = f || 1),
              (F = F || 1),
              (r = r || "wheel,touch,pointer"),
              (o = !1 !== o),
              a || (a = parseFloat(ci.getComputedStyle(pi).lineHeight) || 22);
            var H,
              W,
              Y,
              X,
              q,
              $,
              Q,
              G = this,
              K = 0,
              Z = 0,
              J = Fi(i, Ri),
              ee = Fi(i, Di),
              te = J(),
              ne = ee(),
              re =
                ~r.indexOf("touch") &&
                !~r.indexOf("pointer") &&
                "pointerdown" === bi[0],
              ie = Pi(i),
              ae = i.ownerDocument || fi,
              oe = [0, 0, 0],
              se = [0, 0, 0],
              le = 0,
              ue = function () {
                return (le = Ti());
              },
              ce = function (e, t) {
                return (
                  ((G.event = e) && c && ~c.indexOf(e.target)) ||
                  (t && re && "touch" !== e.pointerType) ||
                  (M && M(e, t))
                );
              },
              fe = function () {
                var e = (G.deltaX = Ui(oe)),
                  n = (G.deltaY = Ui(se)),
                  r = Math.abs(e) >= t,
                  i = Math.abs(n) >= t;
                S && (r || i) && S(G, e, n, oe, se),
                  r &&
                    (y && G.deltaX > 0 && y(G),
                    b && G.deltaX < 0 && b(G),
                    _ && _(G),
                    T && G.deltaX < 0 !== K < 0 && T(G),
                    (K = G.deltaX),
                    (oe[0] = oe[1] = oe[2] = 0)),
                  i &&
                    (w && G.deltaY > 0 && w(G),
                    x && G.deltaY < 0 && x(G),
                    k && k(G),
                    E && G.deltaY < 0 !== Z < 0 && E(G),
                    (Z = G.deltaY),
                    (se[0] = se[1] = se[2] = 0)),
                  (X || Y) &&
                    (j && j(G),
                    B && $ && B(G),
                    Y && (v(G), (Y = !1)),
                    (X = $ = !1)),
                  q && (N(G), (q = !1)),
                  (H = 0);
              },
              de = function (e, t, n) {
                (oe[n] += e),
                  (se[n] += t),
                  G._vx.update(e),
                  G._vy.update(t),
                  o ? H || (H = requestAnimationFrame(fe)) : fe();
              },
              pe = function (e, t) {
                "y" !== Q && ((oe[2] += e), G._vx.update(e, !0)),
                  "x" !== Q && ((se[2] += t), G._vy.update(t, !0)),
                  U &&
                    !Q &&
                    ((G.axis = Q = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    ($ = !0)),
                  o ? H || (H = requestAnimationFrame(fe)) : fe();
              },
              he = function (e) {
                if (!ce(e, 1)) {
                  var t = (e = Vi(e, s)).clientX,
                    r = e.clientY,
                    i = t - G.x,
                    a = r - G.y,
                    o = G.isDragging;
                  (G.x = t),
                    (G.y = r),
                    (o ||
                      Math.abs(G.startX - t) >= n ||
                      Math.abs(G.startY - r) >= n) &&
                      (v && (Y = !0),
                      o || (G.isDragging = !0),
                      pe(i, a),
                      o || (p && p(G)));
                }
              },
              ve = (G.onPress = function (e) {
                ce(e, 1) ||
                  ((G.axis = Q = null),
                  W.pause(),
                  (G.isPressed = !0),
                  (e = Vi(e)),
                  (K = Z = 0),
                  (G.startX = G.x = e.clientX),
                  (G.startY = G.y = e.clientY),
                  G._vx.reset(),
                  G._vy.reset(),
                  ji(A ? i : ae, bi[1], he, s, !0),
                  (G.deltaX = G.deltaY = 0),
                  m && m(G));
              }),
              me = function (e) {
                if (!ce(e, 1)) {
                  Mi(A ? i : ae, bi[1], he, !0);
                  var t =
                      G.isDragging &&
                      (Math.abs(G.x - G.startX) > 3 ||
                        Math.abs(G.y - G.startY) > 3),
                    n = Vi(e);
                  t ||
                    (G._vx.reset(),
                    G._vy.reset(),
                    s &&
                      V &&
                      li.delayedCall(0.08, function () {
                        if (Ti() - le > 300 && !e.defaultPrevented)
                          if (e.target.click) e.target.click();
                          else if (ae.createEvent) {
                            var t = ae.createEvent("MouseEvents");
                            t.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              ci,
                              1,
                              n.screenX,
                              n.screenY,
                              n.clientX,
                              n.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              e.target.dispatchEvent(t);
                          }
                      })),
                    (G.isDragging = G.isGesturing = G.isPressed = !1),
                    l && !A && W.restart(!0),
                    h && t && h(G),
                    g && g(G, t);
                }
              },
              ge = function (e) {
                return (
                  e.touches &&
                  e.touches.length > 1 &&
                  (G.isGesturing = !0) &&
                  O(e, G.isDragging)
                );
              },
              ye = function () {
                return (G.isGesturing = !1) || L(G);
              },
              be = function (e) {
                if (!ce(e)) {
                  var t = J(),
                    n = ee();
                  de((t - te) * F, (n - ne) * F, 1),
                    (te = t),
                    (ne = n),
                    l && W.restart(!0);
                }
              },
              xe = function (e) {
                if (!ce(e)) {
                  (e = Vi(e, s)), N && (q = !0);
                  var t =
                    (1 === e.deltaMode
                      ? a
                      : 2 === e.deltaMode
                      ? ci.innerHeight
                      : 1) * f;
                  de(e.deltaX * t, e.deltaY * t, 0), l && !A && W.restart(!0);
                }
              },
              we = function (e) {
                if (!ce(e)) {
                  var t = e.clientX,
                    n = e.clientY,
                    r = t - G.x,
                    i = n - G.y;
                  (G.x = t), (G.y = n), (X = !0), (r || i) && pe(r, i);
                }
              },
              _e = function (e) {
                (G.event = e), C(G);
              },
              ke = function (e) {
                (G.event = e), P(G);
              },
              Se = function (e) {
                return ce(e) || (Vi(e, s) && z(G));
              };
            (W = G._dc =
              li
                .delayedCall(u || 0.25, function () {
                  G._vx.reset(), G._vy.reset(), W.pause(), l && l(G);
                })
                .pause()),
              (G.deltaX = G.deltaY = 0),
              (G._vx = Ii(0, 50, !0)),
              (G._vy = Ii(0, 50, !0)),
              (G.scrollX = J),
              (G.scrollY = ee),
              (G.isDragging = G.isGesturing = G.isPressed = !1),
              (G.enable = function (e) {
                return (
                  G.isEnabled ||
                    (ji(ie ? ae : i, "scroll", Li),
                    r.indexOf("scroll") >= 0 &&
                      ji(ie ? ae : i, "scroll", be, s, I),
                    r.indexOf("wheel") >= 0 && ji(i, "wheel", xe, s, I),
                    ((r.indexOf("touch") >= 0 && hi) ||
                      r.indexOf("pointer") >= 0) &&
                      (ji(i, bi[0], ve, s, I),
                      ji(ae, bi[2], me),
                      ji(ae, bi[3], me),
                      V && ji(i, "click", ue, !1, !0),
                      z && ji(i, "click", Se),
                      O && ji(ae, "gesturestart", ge),
                      L && ji(ae, "gestureend", ye),
                      C && ji(i, vi + "enter", _e),
                      P && ji(i, vi + "leave", ke),
                      j && ji(i, vi + "move", we)),
                    (G.isEnabled = !0),
                    e && e.type && ve(e),
                    R && R(G)),
                  G
                );
              }),
              (G.disable = function () {
                G.isEnabled &&
                  (_i.filter(function (e) {
                    return e !== G && Pi(e.target);
                  }).length || Mi(ie ? ae : i, "scroll", Li),
                  G.isPressed &&
                    (G._vx.reset(),
                    G._vy.reset(),
                    Mi(A ? i : ae, bi[1], he, !0)),
                  Mi(ie ? ae : i, "scroll", be, I),
                  Mi(i, "wheel", xe, I),
                  Mi(i, bi[0], ve, I),
                  Mi(ae, bi[2], me),
                  Mi(ae, bi[3], me),
                  Mi(i, "click", ue, !0),
                  Mi(i, "click", Se),
                  Mi(ae, "gesturestart", ge),
                  Mi(ae, "gestureend", ye),
                  Mi(i, vi + "enter", _e),
                  Mi(i, vi + "leave", ke),
                  Mi(i, vi + "move", we),
                  (G.isEnabled = G.isPressed = G.isDragging = !1),
                  D && D(G));
              }),
              (G.kill = function () {
                G.disable();
                var e = _i.indexOf(G);
                e >= 0 && _i.splice(e, 1), yi === G && (yi = 0);
              }),
              _i.push(G),
              A && Pi(i) && (yi = G),
              G.enable(d);
          }),
          (t = e),
          (n = [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]) && si(t.prototype, n),
          r && si(t, r),
          e
        );
      })();
      (Wi.version = "3.10.4"),
        (Wi.create = function (e) {
          return new Wi(e);
        }),
        (Wi.register = Hi),
        (Wi.getAll = function () {
          return _i.slice();
        }),
        (Wi.getById = function (e) {
          return _i.filter(function (t) {
            return t.vars.id === e;
          })[0];
        }),
        xi() && li.registerPlugin(Wi);
      var Yi,
        Xi,
        qi,
        $i,
        Qi,
        Gi,
        Ki,
        Zi,
        Ji,
        ea,
        ta,
        na,
        ra,
        ia,
        aa,
        oa,
        sa,
        la,
        ua,
        ca,
        fa,
        da,
        pa,
        ha,
        va,
        ma,
        ga,
        ya,
        ba,
        xa,
        wa,
        _a,
        ka,
        Sa = 1,
        Ta = Date.now,
        Ea = Ta(),
        Ca = 0,
        Pa = 0,
        ja = function () {
          return (ia = 1);
        },
        Ma = function () {
          return (ia = 0);
        },
        Aa = function (e) {
          return e;
        },
        Oa = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        La = function () {
          return "undefined" !== typeof window;
        },
        Na = function () {
          return Yi || (La() && (Yi = window.gsap) && Yi.registerPlugin && Yi);
        },
        Ra = function (e) {
          return !!~Ki.indexOf(e);
        },
        Da = function (e) {
          return (
            Ci(e, "getBoundingClientRect") ||
            (Ra(e)
              ? function () {
                  return (
                    (qo.width = qi.innerWidth), (qo.height = qi.innerHeight), qo
                  );
                }
              : function () {
                  return ao(e);
                })
          );
        },
        za = function (e, t) {
          var n = t.s,
            r = t.d2,
            i = t.d,
            a = t.a;
          return (n = "scroll" + r) && (a = Ci(e, n))
            ? a() - Da(e)()[i]
            : Ra(e)
            ? (Qi[n] || Gi[n]) -
              (qi["inner" + r] || Qi["client" + r] || Gi["client" + r])
            : e[n] - e["offset" + r];
        },
        Fa = function (e, t) {
          for (var n = 0; n < ua.length; n += 3)
            (!t || ~t.indexOf(ua[n + 1])) && e(ua[n], ua[n + 1], ua[n + 2]);
        },
        Ia = function (e) {
          return "string" === typeof e;
        },
        Va = function (e) {
          return "function" === typeof e;
        },
        Ua = function (e) {
          return "number" === typeof e;
        },
        Ba = function (e) {
          return "object" === typeof e;
        },
        Ha = function (e) {
          return Va(e) && e();
        },
        Wa = function (e, t) {
          return function () {
            var n = Ha(e),
              r = Ha(t);
            return function () {
              Ha(n), Ha(r);
            };
          };
        },
        Ya = function (e, t, n) {
          return e && e.progress(t ? 0 : 1) && n && e.pause();
        },
        Xa = function (e, t) {
          if (e.enabled) {
            var n = t(e);
            n && n.totalTime && (e.callbackAnimation = n);
          }
        },
        qa = Math.abs,
        $a = "left",
        Qa = "right",
        Ga = "bottom",
        Ka = "width",
        Za = "height",
        Ja = "padding",
        eo = "margin",
        to = "Width",
        no = "px",
        ro = function (e) {
          return qi.getComputedStyle(e);
        },
        io = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        ao = function (e, t) {
          var n =
              t &&
              "matrix(1, 0, 0, 1, 0, 0)" !== ro(e)[aa] &&
              Yi.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            r = e.getBoundingClientRect();
          return n && n.progress(0).kill(), r;
        },
        oo = function (e, t) {
          var n = t.d2;
          return e["offset" + n] || e["client" + n] || 0;
        },
        so = function (e) {
          var t,
            n = [],
            r = e.labels,
            i = e.duration();
          for (t in r) n.push(r[t] / i);
          return n;
        },
        lo = function (e) {
          var t = Yi.utils.snap(e),
            n =
              Array.isArray(e) &&
              e.slice(0).sort(function (e, t) {
                return e - t;
              });
          return n
            ? function (e, r, i) {
                var a;
                if ((void 0 === i && (i = 0.001), !r)) return t(e);
                if (r > 0) {
                  for (e -= i, a = 0; a < n.length; a++)
                    if (n[a] >= e) return n[a];
                  return n[a - 1];
                }
                for (a = n.length, e += i; a--; ) if (n[a] <= e) return n[a];
                return n[0];
              }
            : function (n, r, i) {
                void 0 === i && (i = 0.001);
                var a = t(n);
                return !r || Math.abs(a - n) < i || a - n < 0 === r < 0
                  ? a
                  : t(r < 0 ? n - e : n + e);
              };
        },
        uo = function (e, t, n, r) {
          return n.split(",").forEach(function (n) {
            return e(t, n, r);
          });
        },
        co = function (e, t, n, r, i) {
          return e.addEventListener(t, n, { passive: !r, capture: !!i });
        },
        fo = function (e, t, n, r) {
          return e.removeEventListener(t, n, !!r);
        },
        po = function (e, t, n) {
          return n && n.wheelHandler && e(t, "wheel", n);
        },
        ho = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        vo = { toggleActions: "play", anticipatePin: 0 },
        mo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        go = function (e, t) {
          if (Ia(e)) {
            var n = e.indexOf("="),
              r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n &&
              (e.indexOf("%") > n && (r *= t / 100), (e = e.substr(0, n - 1))),
              (e =
                r +
                (e in mo
                  ? mo[e] * t
                  : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0));
          }
          return e;
        },
        yo = function (e, t, n, r, i, a, o, s) {
          var l = i.startColor,
            u = i.endColor,
            c = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = $i.createElement("div"),
            h = Ra(n) || "fixed" === Ci(n, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            m = h ? Gi : n,
            g = -1 !== e.indexOf("start"),
            y = g ? l : u,
            b =
              "border-color:" +
              y +
              ";font-size:" +
              c +
              ";color:" +
              y +
              ";font-weight:" +
              d +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (b += "position:" + ((v || s) && h ? "fixed;" : "absolute;")),
            (v || s || !h) &&
              (b += (r === Di ? Qa : Ga) + ":" + (a + parseFloat(f)) + "px;"),
            o &&
              (b +=
                "box-sizing:border-box;text-align:left;width:" +
                o.offsetWidth +
                "px;"),
            (p._isStart = g),
            p.setAttribute(
              "class",
              "gsap-marker-" + e + (t ? " marker-" + t : "")
            ),
            (p.style.cssText = b),
            (p.innerText = t || 0 === t ? e + "-" + t : e),
            m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
            (p._offset = p["offset" + r.op.d2]),
            bo(p, 0, r, g),
            p
          );
        },
        bo = function (e, t, n, r) {
          var i = { display: "block" },
            a = n[r ? "os2" : "p2"],
            o = n[r ? "p2" : "os2"];
          (e._isFlipped = r),
            (i[n.a + "Percent"] = r ? -100 : 0),
            (i[n.a] = r ? "1px" : 0),
            (i["border" + a + to] = 1),
            (i["border" + o + to] = 0),
            (i[n.p] = t + "px"),
            Yi.set(e, i);
        },
        xo = [],
        wo = {},
        _o = function () {
          return Ta() - Ca > 34 && Vo();
        },
        ko = function () {
          (!pa || !pa.isPressed || pa.startX > Gi.clientWidth) &&
            (ki.cache++,
            ba || (ba = requestAnimationFrame(Vo)),
            Ca || Ao("scrollStart"),
            (Ca = Ta()));
        },
        So = function () {
          (ma = qi.innerWidth), (va = qi.innerHeight);
        },
        To = function () {
          ki.cache++,
            !ra &&
              !da &&
              !$i.fullscreenElement &&
              !$i.webkitFullscreenElement &&
              (!ha ||
                ma !== qi.innerWidth ||
                Math.abs(qi.innerHeight - va) > 0.25 * qi.innerHeight) &&
              Zi.restart(!0);
        },
        Eo = {},
        Co = [],
        Po = [],
        jo = function (e) {
          var t,
            n = Yi.ticker.frame,
            r = [],
            i = 0;
          if (wa !== n || Sa) {
            for (No(); i < Po.length; i += 4)
              (t = qi.matchMedia(Po[i]).matches) !== Po[i + 3] &&
                ((Po[i + 3] = t),
                t ? r.push(i) : No(1, Po[i]) || (Va(Po[i + 2]) && Po[i + 2]()));
            for (Lo(), i = 0; i < r.length; i++)
              (t = r[i]), (xa = Po[t]), (Po[t + 2] = Po[t + 1](e));
            (xa = 0), Xi && zo(0, 1), (wa = n), Ao("matchMedia");
          }
        },
        Mo = function e() {
          return fo(Zo, "scrollEnd", e) || zo(!0);
        },
        Ao = function (e) {
          return (
            (Eo[e] &&
              Eo[e].map(function (e) {
                return e();
              })) ||
            Co
          );
        },
        Oo = [],
        Lo = function (e) {
          for (var t = 0; t < Oo.length; t += 5)
            (e && Oo[t + 4] !== e) ||
              ((Oo[t].style.cssText = Oo[t + 1]),
              Oo[t].getBBox && Oo[t].setAttribute("transform", Oo[t + 2] || ""),
              (Oo[t + 3].uncache = 1));
        },
        No = function (e, t) {
          var n;
          for (oa = 0; oa < xo.length; oa++)
            (n = xo[oa]), (t && n.media !== t) || (e ? n.kill(1) : n.revert());
          t && Lo(t), t || Ao("revert");
        },
        Ro = function () {
          return (
            ki.cache++ &&
            ki.forEach(function (e) {
              return "function" === typeof e && (e.rec = 0);
            })
          );
        },
        Do = 0,
        zo = function (e, t) {
          if (!Ca || e) {
            _a = !0;
            var n = Ao("refreshInit");
            ca && Zo.sort(),
              t || No(),
              xo.slice(0).forEach(function (e) {
                return e.refresh();
              }),
              xo.forEach(function (e) {
                return (
                  "max" === e.vars.end &&
                  e.setPositions(e.start, za(e.scroller, e._dir))
                );
              }),
              n.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              Ro(),
              Zi.pause(),
              Do++,
              (_a = !1),
              Ao("refresh");
          } else co(Zo, "scrollEnd", Mo);
        },
        Fo = 0,
        Io = 1,
        Vo = function () {
          if (!_a) {
            (Zo.isUpdating = !0), ka && ka.update(0);
            var e = xo.length,
              t = Ta(),
              n = t - Ea >= 50,
              r = e && xo[0].scroll();
            if (
              ((Io = Fo > r ? -1 : 1),
              (Fo = r),
              n &&
                (Ca && !ia && t - Ca > 200 && ((Ca = 0), Ao("scrollEnd")),
                (ta = Ea),
                (Ea = t)),
              Io < 0)
            ) {
              for (oa = e; oa-- > 0; ) xo[oa] && xo[oa].update(0, n);
              Io = 1;
            } else for (oa = 0; oa < e; oa++) xo[oa] && xo[oa].update(0, n);
            Zo.isUpdating = !1;
          }
          ba = 0;
        },
        Uo = [
          $a,
          "top",
          Ga,
          Qa,
          "marginBottom",
          "marginRight",
          "marginTop",
          "marginLeft",
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        Bo = Uo.concat([
          Ka,
          Za,
          "boxSizing",
          "maxWidth",
          "maxHeight",
          "position",
          eo,
          Ja,
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ]),
        Ho = function (e, t, n, r) {
          if (e.parentNode !== t) {
            for (var i, a = Uo.length, o = t.style, s = e.style; a--; )
              o[(i = Uo[a])] = n[i];
            (o.position = "absolute" === n.position ? "absolute" : "relative"),
              "inline" === n.display && (o.display = "inline-block"),
              (s.bottom = s.right = o.flexBasis = "auto"),
              (o.overflow = "visible"),
              (o.boxSizing = "border-box"),
              (o.width = oo(e, Ri) + no),
              (o.height = oo(e, Di) + no),
              (o.padding = s.margin = s.top = s.left = "0"),
              Yo(r),
              (s.width = s.maxWidth = n.width),
              (s.height = s.maxHeight = n.height),
              (s.padding = n.padding),
              e.parentNode.insertBefore(t, e),
              t.appendChild(e);
          }
        },
        Wo = /([A-Z])/g,
        Yo = function (e) {
          if (e) {
            var t,
              n,
              r = e.t.style,
              i = e.length,
              a = 0;
            for (
              (e.t._gsap || Yi.core.getCache(e.t)).uncache = 1;
              a < i;
              a += 2
            )
              (n = e[a + 1]),
                (t = e[a]),
                n
                  ? (r[t] = n)
                  : r[t] &&
                    r.removeProperty(t.replace(Wo, "-$1").toLowerCase());
          }
        },
        Xo = function (e) {
          for (var t = Bo.length, n = e.style, r = [], i = 0; i < t; i++)
            r.push(Bo[i], n[Bo[i]]);
          return (r.t = e), r;
        },
        qo = { left: 0, top: 0 },
        $o = function (e, t, n, r, i, a, o, s, l, u, c, f, d) {
          Va(e) && (e = e(s)),
            Ia(e) &&
              "max" === e.substr(0, 3) &&
              (e = f + ("=" === e.charAt(4) ? go("0" + e.substr(3), n) : 0));
          var p,
            h,
            v,
            m = d ? d.time() : 0;
          if ((d && d.seek(0), Ua(e))) o && bo(o, n, r, !0);
          else {
            Va(t) && (t = t(s));
            var g,
              y,
              b,
              x,
              w = e.split(" ");
            (v = zi(t) || Gi),
              ((g = ao(v) || {}) && (g.left || g.top)) ||
                "none" !== ro(v).display ||
                ((x = v.style.display),
                (v.style.display = "block"),
                (g = ao(v)),
                x ? (v.style.display = x) : v.style.removeProperty("display")),
              (y = go(w[0], g[r.d])),
              (b = go(w[1] || "0", n)),
              (e = g[r.p] - l[r.p] - u + y + i - b),
              o && bo(o, b, r, n - b < 20 || (o._isStart && b > 20)),
              (n -= n - b);
          }
          if (a) {
            var _ = e + n,
              k = a._isStart;
            (p = "scroll" + r.d2),
              bo(
                a,
                _,
                r,
                (k && _ > 20) ||
                  (!k &&
                    (c ? Math.max(Gi[p], Qi[p]) : a.parentNode[p]) <= _ + 1)
              ),
              c &&
                ((l = ao(o)),
                c && (a.style[r.op.p] = l[r.op.p] - r.op.m - a._offset + no));
          }
          return (
            d &&
              v &&
              ((p = ao(v)),
              d.seek(f),
              (h = ao(v)),
              (d._caScrollDist = p[r.p] - h[r.p]),
              (e = (e / d._caScrollDist) * f)),
            d && d.seek(m),
            d ? e : Math.round(e)
          );
        },
        Qo = /(webkit|moz|length|cssText|inset)/i,
        Go = function (e, t, n, r) {
          if (e.parentNode !== t) {
            var i,
              a,
              o = e.style;
            if (t === Gi) {
              for (i in ((e._stOrig = o.cssText), (a = ro(e))))
                +i ||
                  Qo.test(i) ||
                  !a[i] ||
                  "string" !== typeof o[i] ||
                  "0" === i ||
                  (o[i] = a[i]);
              (o.top = n), (o.left = r);
            } else o.cssText = e._stOrig;
            (Yi.core.getCache(e).uncache = 1), t.appendChild(e);
          }
        },
        Ko = function (e, t) {
          var n,
            r,
            i = Fi(e, t),
            a = "_scroll" + t.p2,
            o = function t(o, s, l, u, c) {
              var f = t.tween,
                d = s.onComplete,
                p = {};
              return (
                (l = l || i()),
                (c = (u && c) || 0),
                (u = u || o - l),
                f && f.kill(),
                (n = Math.round(l)),
                (s[a] = o),
                (s.modifiers = p),
                (p[a] = function (e) {
                  return (
                    (e = Oa(i())) !== n &&
                    e !== r &&
                    Math.abs(e - n) > 2 &&
                    Math.abs(e - r) > 2
                      ? (f.kill(), (t.tween = 0))
                      : (e = l + u * f.ratio + c * f.ratio * f.ratio),
                    (r = n),
                    (n = Oa(e))
                  );
                }),
                (s.onComplete = function () {
                  (t.tween = 0), d && d.call(f);
                }),
                (f = t.tween = Yi.to(e, s))
              );
            };
          return (
            (e[a] = i),
            (i.wheelHandler = function () {
              return o.tween && o.tween.kill() && (o.tween = 0);
            }),
            co(e, "wheel", i.wheelHandler),
            o
          );
        },
        Zo = (function () {
          function e(t, n) {
            Xi ||
              e.register(Yi) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              this.init(t, n);
          }
          return (
            (e.prototype.init = function (t, n) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                Pa)
              ) {
                var r,
                  i,
                  a,
                  o,
                  s,
                  l,
                  u,
                  c,
                  f,
                  d,
                  p,
                  h,
                  v,
                  m,
                  g,
                  y,
                  b,
                  x,
                  w,
                  _,
                  k,
                  S,
                  T,
                  E,
                  C,
                  P,
                  j,
                  M,
                  A,
                  O,
                  L,
                  N,
                  R,
                  D,
                  z,
                  F,
                  I,
                  V,
                  U,
                  B = (t = io(
                    Ia(t) || Ua(t) || t.nodeType ? { trigger: t } : t,
                    vo
                  )),
                  H = B.onUpdate,
                  W = B.toggleClass,
                  Y = B.id,
                  X = B.onToggle,
                  q = B.onRefresh,
                  $ = B.scrub,
                  Q = B.trigger,
                  G = B.pin,
                  K = B.pinSpacing,
                  Z = B.invalidateOnRefresh,
                  J = B.anticipatePin,
                  ee = B.onScrubComplete,
                  te = B.onSnapComplete,
                  ne = B.once,
                  re = B.snap,
                  ie = B.pinReparent,
                  ae = B.pinSpacer,
                  oe = B.containerAnimation,
                  se = B.fastScrollEnd,
                  le = B.preventOverlaps,
                  ue =
                    t.horizontal ||
                    (t.containerAnimation && !1 !== t.horizontal)
                      ? Ri
                      : Di,
                  ce = !$ && 0 !== $,
                  fe = zi(t.scroller || qi),
                  de = Yi.core.getCache(fe),
                  pe = Ra(fe),
                  he =
                    "fixed" ===
                    ("pinType" in t
                      ? t.pinType
                      : Ci(fe, "pinType") || (pe && "fixed")),
                  ve = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                  me = ce && t.toggleActions.split(" "),
                  ge = "markers" in t ? t.markers : vo.markers,
                  ye = pe ? 0 : parseFloat(ro(fe)["border" + ue.p2 + to]) || 0,
                  be = this,
                  xe =
                    t.onRefreshInit &&
                    function () {
                      return t.onRefreshInit(be);
                    },
                  we = (function (e, t, n) {
                    var r = n.d,
                      i = n.d2,
                      a = n.a;
                    return (a = Ci(e, "getBoundingClientRect"))
                      ? function () {
                          return a()[r];
                        }
                      : function () {
                          return (t ? qi["inner" + i] : e["client" + i]) || 0;
                        };
                  })(fe, pe, ue),
                  _e = (function (e, t) {
                    return !t || ~Si.indexOf(e)
                      ? Da(e)
                      : function () {
                          return qo;
                        };
                  })(fe, pe),
                  ke = 0,
                  Se = 0,
                  Te = Fi(fe, ue);
                if (
                  ((be.media = xa),
                  (be._dir = ue),
                  (J *= 45),
                  (be.scroller = fe),
                  (be.scroll = oe ? oe.time.bind(oe) : Te),
                  (o = Te()),
                  (be.vars = t),
                  (n = n || t.animation),
                  "refreshPriority" in t &&
                    ((ca = 1), -9999 === t.refreshPriority && (ka = be)),
                  (de.tweenScroll = de.tweenScroll || {
                    top: Ko(fe, Di),
                    left: Ko(fe, Ri),
                  }),
                  (be.tweenTo = r = de.tweenScroll[ue.p]),
                  (be.scrubDuration = function (e) {
                    (L = Ua(e) && e)
                      ? O
                        ? O.duration(e)
                        : (O = Yi.to(n, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: L,
                            paused: !0,
                            onComplete: function () {
                              return ee && ee(be);
                            },
                          }))
                      : (O && O.progress(1).kill(), (O = 0));
                  }),
                  n &&
                    ((n.vars.lazy = !1),
                    n._initted ||
                      (!1 !== n.vars.immediateRender &&
                        !1 !== t.immediateRender &&
                        n.render(0, !0, !0)),
                    (be.animation = n.pause()),
                    (n.scrollTrigger = be),
                    be.scrubDuration($),
                    (M = 0),
                    Y || (Y = n.vars.id)),
                  xo.push(be),
                  re &&
                    ((Ba(re) && !re.push) || (re = { snapTo: re }),
                    "scrollBehavior" in Gi.style &&
                      Yi.set(pe ? [Gi, Qi] : fe, { scrollBehavior: "auto" }),
                    (a = Va(re.snapTo)
                      ? re.snapTo
                      : "labels" === re.snapTo
                      ? (function (e) {
                          return function (t) {
                            return Yi.utils.snap(so(e), t);
                          };
                        })(n)
                      : "labelsDirectional" === re.snapTo
                      ? ((U = n),
                        function (e, t) {
                          return lo(so(U))(e, t.direction);
                        })
                      : !1 !== re.directional
                      ? function (e, t) {
                          return lo(re.snapTo)(
                            e,
                            Ta() - Se < 500 ? 0 : t.direction
                          );
                        }
                      : Yi.utils.snap(re.snapTo)),
                    (N = re.duration || { min: 0.1, max: 2 }),
                    (N = Ba(N) ? ea(N.min, N.max) : ea(N, N)),
                    (R = Yi.delayedCall(re.delay || L / 2 || 0.1, function () {
                      var e = Te(),
                        t = Ta() - Se < 500,
                        i = r.tween;
                      if (
                        !(t || Math.abs(be.getVelocity()) < 10) ||
                        i ||
                        ia ||
                        ke === e
                      )
                        be.isActive && ke !== e && R.restart(!0);
                      else {
                        var o = (e - l) / v,
                          s = n && !ce ? n.totalProgress() : o,
                          c = t ? 0 : ((s - A) / (Ta() - ta)) * 1e3 || 0,
                          f = Yi.utils.clamp(
                            -o,
                            1 - o,
                            (qa(c / 2) * c) / 0.185
                          ),
                          d = o + (!1 === re.inertia ? 0 : f),
                          p = ea(0, 1, a(d, be)),
                          h = Math.round(l + p * v),
                          m = re,
                          g = m.onStart,
                          y = m.onInterrupt,
                          b = m.onComplete;
                        if (e <= u && e >= l && h !== e) {
                          if (i && !i._initted && i.data <= qa(h - e)) return;
                          !1 === re.inertia && (f = p - o),
                            r(
                              h,
                              {
                                duration: N(
                                  qa(
                                    (0.185 * Math.max(qa(d - s), qa(p - s))) /
                                      c /
                                      0.05 || 0
                                  )
                                ),
                                ease: re.ease || "power3",
                                data: qa(h - e),
                                onInterrupt: function () {
                                  return R.restart(!0) && y && y(be);
                                },
                                onComplete: function () {
                                  be.update(),
                                    (ke = Te()),
                                    (M = A =
                                      n && !ce
                                        ? n.totalProgress()
                                        : be.progress),
                                    te && te(be),
                                    b && b(be);
                                },
                              },
                              e,
                              f * v,
                              h - e - f * v
                            ),
                            g && g(be, r.tween);
                        }
                      }
                    }).pause())),
                  Y && (wo[Y] = be),
                  (V =
                    (Q = be.trigger = zi(Q || G)) &&
                    Q._gsap &&
                    Q._gsap.stRevert) && (V = V(be)),
                  (G = !0 === G ? Q : zi(G)),
                  Ia(W) && (W = { targets: Q, className: W }),
                  G &&
                    (!1 === K ||
                      K === eo ||
                      (K = !(!K && "flex" === ro(G.parentNode).display) && Ja),
                    (be.pin = G),
                    !1 !== t.force3D && Yi.set(G, { force3D: !0 }),
                    (i = Yi.core.getCache(G)).spacer
                      ? (m = i.pinState)
                      : (ae &&
                          ((ae = zi(ae)) &&
                            !ae.nodeType &&
                            (ae = ae.current || ae.nativeElement),
                          (i.spacerIsNative = !!ae),
                          ae && (i.spacerState = Xo(ae))),
                        (i.spacer = b = ae || $i.createElement("div")),
                        b.classList.add("pin-spacer"),
                        Y && b.classList.add("pin-spacer-" + Y),
                        (i.pinState = m = Xo(G))),
                    (be.spacer = b = i.spacer),
                    (j = ro(G)),
                    (T = j[K + ue.os2]),
                    (w = Yi.getProperty(G)),
                    (_ = Yi.quickSetter(G, ue.a, no)),
                    Ho(G, b, j),
                    (y = Xo(G))),
                  ge)
                ) {
                  (h = Ba(ge) ? io(ge, ho) : ho),
                    (d = yo("scroller-start", Y, fe, ue, h, 0)),
                    (p = yo("scroller-end", Y, fe, ue, h, 0, d)),
                    (x = d["offset" + ue.op.d2]);
                  var Ee = zi(Ci(fe, "content") || fe);
                  (c = this.markerStart = yo("start", Y, Ee, ue, h, x, 0, oe)),
                    (f = this.markerEnd = yo("end", Y, Ee, ue, h, x, 0, oe)),
                    oe && (I = Yi.quickSetter([c, f], ue.a, no)),
                    he ||
                      (Si.length && !0 === Ci(fe, "fixedMarkers")) ||
                      (!(function (e) {
                        var t = ro(e).position;
                        e.style.position =
                          "absolute" === t || "fixed" === t ? t : "relative";
                      })(pe ? Gi : fe),
                      Yi.set([d, p], { force3D: !0 }),
                      (C = Yi.quickSetter(d, ue.a, no)),
                      (P = Yi.quickSetter(p, ue.a, no)));
                }
                if (oe) {
                  var Ce = oe.vars.onUpdate,
                    Pe = oe.vars.onUpdateParams;
                  oe.eventCallback("onUpdate", function () {
                    be.update(0, 0, 1), Ce && Ce.apply(Pe || []);
                  });
                }
                (be.previous = function () {
                  return xo[xo.indexOf(be) - 1];
                }),
                  (be.next = function () {
                    return xo[xo.indexOf(be) + 1];
                  }),
                  (be.revert = function (e) {
                    var t = !1 !== e || !be.enabled,
                      r = ra;
                    t !== be.isReverted &&
                      (t &&
                        (be.scroll.rec || !ra || !_a || (be.scroll.rec = Te()),
                        (z = Math.max(Te(), be.scroll.rec || 0)),
                        (D = be.progress),
                        (F = n && n.progress())),
                      c &&
                        [c, f, d, p].forEach(function (e) {
                          return (e.style.display = t ? "none" : "block");
                        }),
                      t && (ra = 1),
                      be.update(t),
                      (ra = r),
                      G &&
                        (t
                          ? (function (e, t, n) {
                              Yo(n);
                              var r = e._gsap;
                              if (r.spacerIsNative) Yo(r.spacerState);
                              else if (e.parentNode === t) {
                                var i = t.parentNode;
                                i && (i.insertBefore(e, t), i.removeChild(t));
                              }
                            })(G, b, m)
                          : (!ie || !be.isActive) && Ho(G, b, ro(G), E)),
                      (be.isReverted = t));
                  }),
                  (be.refresh = function (i, a) {
                    if ((!ra && be.enabled) || a)
                      if (G && i && Ca) co(e, "scrollEnd", Mo);
                      else {
                        !_a && xe && xe(be),
                          (ra = 1),
                          (Se = Ta()),
                          r.tween && (r.tween.kill(), (r.tween = 0)),
                          O && O.pause(),
                          Z && n && n.time(-0.01, !0).invalidate(),
                          be.isReverted || be.revert();
                        for (
                          var h,
                            x,
                            _,
                            T,
                            C,
                            P,
                            j,
                            M,
                            A,
                            L,
                            N = we(),
                            I = _e(),
                            V = oe ? oe.duration() : za(fe, ue),
                            U = 0,
                            B = 0,
                            H = t.end,
                            W = t.endTrigger || Q,
                            Y =
                              t.start ||
                              (0 !== t.start && Q ? (G ? "0 0" : "0 100%") : 0),
                            X = (be.pinnedContainer =
                              t.pinnedContainer && zi(t.pinnedContainer)),
                            $ = (Q && Math.max(0, xo.indexOf(be))) || 0,
                            J = $;
                          J--;

                        )
                          (P = xo[J]).end || P.refresh(0, 1) || (ra = 1),
                            !(j = P.pin) ||
                              (j !== Q && j !== G) ||
                              P.isReverted ||
                              (L || (L = []), L.unshift(P), P.revert()),
                            P !== xo[J] && ($--, J--);
                        for (
                          Va(Y) && (Y = Y(be)),
                            l =
                              $o(
                                Y,
                                Q,
                                N,
                                ue,
                                Te(),
                                c,
                                d,
                                be,
                                I,
                                ye,
                                he,
                                V,
                                oe
                              ) || (G ? -0.001 : 0),
                            Va(H) && (H = H(be)),
                            Ia(H) &&
                              !H.indexOf("+=") &&
                              (~H.indexOf(" ")
                                ? (H = (Ia(Y) ? Y.split(" ")[0] : "") + H)
                                : ((U = go(H.substr(2), N)),
                                  (H = Ia(Y) ? Y : l + U),
                                  (W = Q))),
                            u =
                              Math.max(
                                l,
                                $o(
                                  H || (W ? "100% 0" : V),
                                  W,
                                  N,
                                  ue,
                                  Te() + U,
                                  f,
                                  p,
                                  be,
                                  I,
                                  ye,
                                  he,
                                  V,
                                  oe
                                )
                              ) || -0.001,
                            v = u - l || ((l -= 0.01) && 0.001),
                            U = 0,
                            J = $;
                          J--;

                        )
                          (j = (P = xo[J]).pin) &&
                            P.start - P._pinPush < l &&
                            !oe &&
                            P.end > 0 &&
                            ((h = P.end - P.start),
                            (j !== Q && j !== X) ||
                              Ua(Y) ||
                              (U += h * (1 - P.progress)),
                            j === G && (B += h));
                        if (
                          ((l += U),
                          (u += U),
                          (be._pinPush = B),
                          c &&
                            U &&
                            (((h = {})[ue.a] = "+=" + U),
                            X && (h[ue.p] = "-=" + Te()),
                            Yi.set([c, f], h)),
                          G)
                        )
                          (h = ro(G)),
                            (T = ue === Di),
                            (_ = Te()),
                            (k = parseFloat(w(ue.a)) + B),
                            !V &&
                              u > 1 &&
                              ((pe ? Gi : fe).style["overflow-" + ue.a] =
                                "scroll"),
                            Ho(G, b, h),
                            (y = Xo(G)),
                            (x = ao(G, !0)),
                            (M = he && Fi(fe, T ? Ri : Di)()),
                            K &&
                              (((E = [K + ue.os2, v + B + no]).t = b),
                              (J = K === Ja ? oo(G, ue) + v + B : 0) &&
                                E.push(ue.d, J + no),
                              Yo(E),
                              he && Te(z)),
                            he &&
                              (((C = {
                                top: x.top + (T ? _ - l : M) + no,
                                left: x.left + (T ? M : _ - l) + no,
                                boxSizing: "border-box",
                                position: "fixed",
                              }).width = C.maxWidth =
                                Math.ceil(x.width) + no),
                              (C.height = C.maxHeight =
                                Math.ceil(x.height) + no),
                              (C.margin =
                                C.marginTop =
                                C.marginRight =
                                C.marginBottom =
                                C.marginLeft =
                                  "0"),
                              (C.padding = h.padding),
                              (C.paddingTop = h.paddingTop),
                              (C.paddingRight = h.paddingRight),
                              (C.paddingBottom = h.paddingBottom),
                              (C.paddingLeft = h.paddingLeft),
                              (g = (function (e, t, n) {
                                for (
                                  var r, i = [], a = e.length, o = n ? 8 : 0;
                                  o < a;
                                  o += 2
                                )
                                  (r = e[o]),
                                    i.push(r, r in t ? t[r] : e[o + 1]);
                                return (i.t = e.t), i;
                              })(m, C, ie))),
                            n
                              ? ((A = n._initted),
                                fa(1),
                                n.render(n.duration(), !0, !0),
                                (S = w(ue.a) - k + v + B),
                                v !== S && he && g.splice(g.length - 2, 2),
                                n.render(0, !0, !0),
                                A || n.invalidate(),
                                fa(0))
                              : (S = v);
                        else if (Q && Te() && !oe)
                          for (x = Q.parentNode; x && x !== Gi; )
                            x._pinOffset &&
                              ((l -= x._pinOffset), (u -= x._pinOffset)),
                              (x = x.parentNode);
                        L &&
                          L.forEach(function (e) {
                            return e.revert(!1);
                          }),
                          (be.start = l),
                          (be.end = u),
                          (o = s = Te()),
                          oe || (o < z && Te(z), (be.scroll.rec = 0)),
                          be.revert(!1),
                          R &&
                            ((ke = -1),
                            be.isActive && Te(l + v * D),
                            R.restart(!0)),
                          (ra = 0),
                          n &&
                            ce &&
                            (n._initted || F) &&
                            n.progress() !== F &&
                            n.progress(F, !0).render(n.time(), !0, !0),
                          (D !== be.progress || oe) &&
                            (n && !ce && n.totalProgress(D, !0),
                            (be.progress = D),
                            be.update(0, 0, 1)),
                          G &&
                            K &&
                            (b._pinOffset = Math.round(be.progress * S)),
                          q && q(be);
                      }
                  }),
                  (be.getVelocity = function () {
                    return ((Te() - s) / (Ta() - ta)) * 1e3 || 0;
                  }),
                  (be.endAnimation = function () {
                    Ya(be.callbackAnimation),
                      n &&
                        (O
                          ? O.progress(1)
                          : n.paused()
                          ? ce || Ya(n, be.direction < 0, 1)
                          : Ya(n, n.reversed()));
                  }),
                  (be.labelToScroll = function (e) {
                    return (
                      (n &&
                        n.labels &&
                        (l || be.refresh() || l) +
                          (n.labels[e] / n.duration()) * v) ||
                      0
                    );
                  }),
                  (be.getTrailing = function (e) {
                    var t = xo.indexOf(be),
                      n =
                        be.direction > 0
                          ? xo.slice(0, t).reverse()
                          : xo.slice(t + 1);
                    return (
                      Ia(e)
                        ? n.filter(function (t) {
                            return t.vars.preventOverlaps === e;
                          })
                        : n
                    ).filter(function (e) {
                      return be.direction > 0 ? e.end <= l : e.start >= u;
                    });
                  }),
                  (be.update = function (e, t, i) {
                    if (!oe || i || e) {
                      var a,
                        c,
                        f,
                        p,
                        h,
                        m,
                        x,
                        w = be.scroll(),
                        E = e ? 0 : (w - l) / v,
                        j = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                        L = be.progress;
                      if (
                        (t &&
                          ((s = o),
                          (o = oe ? Te() : w),
                          re &&
                            ((A = M), (M = n && !ce ? n.totalProgress() : j))),
                        J &&
                          !j &&
                          G &&
                          !ra &&
                          !Sa &&
                          Ca &&
                          l < w + ((w - s) / (Ta() - ta)) * J &&
                          (j = 1e-4),
                        j !== L && be.enabled)
                      ) {
                        if (
                          ((p =
                            (h =
                              (a = be.isActive = !!j && j < 1) !==
                              (!!L && L < 1)) || !!j !== !!L),
                          (be.direction = j > L ? 1 : -1),
                          (be.progress = j),
                          p &&
                            !ra &&
                            ((c = j && !L ? 0 : 1 === j ? 1 : 1 === L ? 2 : 3),
                            ce &&
                              ((f =
                                (!h && "none" !== me[c + 1] && me[c + 1]) ||
                                me[c]),
                              (x =
                                n &&
                                ("complete" === f ||
                                  "reset" === f ||
                                  f in n)))),
                          le &&
                            (h || x) &&
                            (x || $ || !n) &&
                            (Va(le)
                              ? le(be)
                              : be.getTrailing(le).forEach(function (e) {
                                  return e.endAnimation();
                                })),
                          ce ||
                            (!O || ra || Sa
                              ? n && n.totalProgress(j, !!ra)
                              : ((oe || (ka && ka !== be)) &&
                                  O.render(O._dp._time - O._start),
                                O.resetTo
                                  ? O.resetTo(
                                      "totalProgress",
                                      j,
                                      n._tTime / n._tDur
                                    )
                                  : ((O.vars.totalProgress = j),
                                    O.invalidate().restart()))),
                          G)
                        )
                          if ((e && K && (b.style[K + ue.os2] = T), he)) {
                            if (p) {
                              if (
                                ((m =
                                  !e &&
                                  j > L &&
                                  u + 1 > w &&
                                  w + 1 >= za(fe, ue)),
                                ie)
                              )
                                if (e || (!a && !m)) Go(G, b);
                                else {
                                  var N = ao(G, !0),
                                    D = w - l;
                                  Go(
                                    G,
                                    Gi,
                                    N.top + (ue === Di ? D : 0) + no,
                                    N.left + (ue === Di ? 0 : D) + no
                                  );
                                }
                              Yo(a || m ? g : y),
                                (S !== v && j < 1 && a) ||
                                  _(k + (1 !== j || m ? 0 : S));
                            }
                          } else _(Oa(k + S * j));
                        re && !r.tween && !ra && !Sa && R.restart(!0),
                          W &&
                            (h || (ne && j && (j < 1 || !ya))) &&
                            Ji(W.targets).forEach(function (e) {
                              return e.classList[a || ne ? "add" : "remove"](
                                W.className
                              );
                            }),
                          H && !ce && !e && H(be),
                          p && !ra
                            ? (ce &&
                                (x &&
                                  ("complete" === f
                                    ? n.pause().totalProgress(1)
                                    : "reset" === f
                                    ? n.restart(!0).pause()
                                    : "restart" === f
                                    ? n.restart(!0)
                                    : n[f]()),
                                H && H(be)),
                              (!h && ya) ||
                                (X && h && Xa(be, X),
                                ve[c] && Xa(be, ve[c]),
                                ne && (1 === j ? be.kill(!1, 1) : (ve[c] = 0)),
                                h ||
                                  (ve[(c = 1 === j ? 1 : 3)] && Xa(be, ve[c]))),
                              se &&
                                !a &&
                                Math.abs(be.getVelocity()) >
                                  (Ua(se) ? se : 2500) &&
                                (Ya(be.callbackAnimation),
                                O ? O.progress(1) : Ya(n, !j, 1)))
                            : ce && H && !ra && H(be);
                      }
                      if (P) {
                        var z = oe
                          ? (w / oe.duration()) * (oe._caScrollDist || 0)
                          : w;
                        C(z + (d._isFlipped ? 1 : 0)), P(z);
                      }
                      I && I((-w / oe.duration()) * (oe._caScrollDist || 0));
                    }
                  }),
                  (be.enable = function (t, n) {
                    be.enabled ||
                      ((be.enabled = !0),
                      co(fe, "resize", To),
                      co(pe ? $i : fe, "scroll", ko),
                      xe && co(e, "refreshInit", xe),
                      !1 !== t && ((be.progress = D = 0), (o = s = ke = Te())),
                      !1 !== n && be.refresh());
                  }),
                  (be.getTween = function (e) {
                    return e && r ? r.tween : O;
                  }),
                  (be.setPositions = function (e, t) {
                    G && ((k += e - l), (S += t - e - v)),
                      (be.start = l = e),
                      (be.end = u = t),
                      (v = t - e),
                      be.update();
                  }),
                  (be.disable = function (t, n) {
                    if (
                      be.enabled &&
                      (!1 !== t && be.revert(),
                      (be.enabled = be.isActive = !1),
                      n || (O && O.pause()),
                      (z = 0),
                      i && (i.uncache = 1),
                      xe && fo(e, "refreshInit", xe),
                      R &&
                        (R.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                      !pe)
                    ) {
                      for (var a = xo.length; a--; )
                        if (xo[a].scroller === fe && xo[a] !== be) return;
                      fo(fe, "resize", To), fo(fe, "scroll", ko);
                    }
                  }),
                  (be.kill = function (e, r) {
                    be.disable(e, r), O && !r && O.kill(), Y && delete wo[Y];
                    var a = xo.indexOf(be);
                    a >= 0 && xo.splice(a, 1),
                      a === oa && Io > 0 && oa--,
                      (a = 0),
                      xo.forEach(function (e) {
                        return e.scroller === be.scroller && (a = 1);
                      }),
                      a || (be.scroll.rec = 0),
                      n &&
                        ((n.scrollTrigger = null),
                        e && n.render(-1),
                        r || n.kill()),
                      c &&
                        [c, f, d, p].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      ka === be && (ka = 0),
                      G &&
                        (i && (i.uncache = 1),
                        (a = 0),
                        xo.forEach(function (e) {
                          return e.pin === G && a++;
                        }),
                        a || (i.spacer = 0)),
                      t.onKill && t.onKill(be);
                  }),
                  be.enable(!1, !1),
                  V && V(be),
                  n && n.add && !v
                    ? Yi.delayedCall(0.01, function () {
                        return l || u || be.refresh();
                      }) &&
                      (v = 0.01) &&
                      (l = u = 0)
                    : be.refresh();
              } else this.update = this.refresh = this.kill = Aa;
            }),
            (e.register = function (t) {
              return (
                Xi ||
                  ((Yi = t || Na()),
                  La() && window.document && e.enable(),
                  (Xi = Pa)),
                Xi
              );
            }),
            (e.defaults = function (e) {
              if (e) for (var t in e) vo[t] = e[t];
              return vo;
            }),
            (e.disable = function (e, t) {
              (Pa = 0),
                xo.forEach(function (n) {
                  return n[t ? "kill" : "disable"](e);
                }),
                fo(qi, "wheel", ko),
                fo($i, "scroll", ko),
                clearInterval(na),
                fo($i, "touchcancel", Aa),
                fo(Gi, "touchstart", Aa),
                uo(fo, $i, "pointerdown,touchstart,mousedown", ja),
                uo(fo, $i, "pointerup,touchend,mouseup", Ma),
                Zi.kill(),
                Fa(fo);
              for (var n = 0; n < ki.length; n += 3)
                po(fo, ki[n], ki[n + 1]), po(fo, ki[n], ki[n + 2]);
            }),
            (e.enable = function () {
              if (
                ((qi = window),
                ($i = document),
                (Qi = $i.documentElement),
                (Gi = $i.body),
                Yi &&
                  ((Ji = Yi.utils.toArray),
                  (ea = Yi.utils.clamp),
                  (fa = Yi.core.suppressOverwrites || Aa),
                  Yi.core.globals("ScrollTrigger", e),
                  Gi))
              ) {
                (Pa = 1),
                  Wi.register(Yi),
                  (e.isTouch = Wi.isTouch),
                  (ga =
                    Wi.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  co(qi, "wheel", ko),
                  (Ki = [qi, $i, Qi, Gi]),
                  e.matchMedia({
                    "(orientation: portrait)": function () {
                      return So(), So;
                    },
                  }),
                  co($i, "scroll", ko);
                var t,
                  n,
                  r = Gi.style,
                  i = r.borderTopStyle;
                for (
                  r.borderTopStyle = "solid",
                    t = ao(Gi),
                    Di.m = Math.round(t.top + Di.sc()) || 0,
                    Ri.m = Math.round(t.left + Ri.sc()) || 0,
                    i
                      ? (r.borderTopStyle = i)
                      : r.removeProperty("border-top-style"),
                    na = setInterval(_o, 250),
                    Yi.delayedCall(0.5, function () {
                      return (Sa = 0);
                    }),
                    co($i, "touchcancel", Aa),
                    co(Gi, "touchstart", Aa),
                    uo(co, $i, "pointerdown,touchstart,mousedown", ja),
                    uo(co, $i, "pointerup,touchend,mouseup", Ma),
                    aa = Yi.utils.checkPrefix("transform"),
                    Bo.push(aa),
                    Xi = Ta(),
                    Zi = Yi.delayedCall(0.2, zo).pause(),
                    ua = [
                      $i,
                      "visibilitychange",
                      function () {
                        var e = qi.innerWidth,
                          t = qi.innerHeight;
                        $i.hidden
                          ? ((sa = e), (la = t))
                          : (sa === e && la === t) || To();
                      },
                      $i,
                      "DOMContentLoaded",
                      zo,
                      qi,
                      "load",
                      zo,
                      qi,
                      "resize",
                      To,
                    ],
                    Fa(co),
                    xo.forEach(function (e) {
                      return e.enable(0, 1);
                    }),
                    n = 0;
                  n < ki.length;
                  n += 3
                )
                  po(fo, ki[n], ki[n + 1]), po(fo, ki[n], ki[n + 2]);
              }
            }),
            (e.config = function (t) {
              "limitCallbacks" in t && (ya = !!t.limitCallbacks);
              var n = t.syncInterval;
              (n && clearInterval(na)) || ((na = n) && setInterval(_o, n)),
                "ignoreMobileResize" in t &&
                  (ha = 1 === e.isTouch && t.ignoreMobileResize),
                "autoRefreshEvents" in t &&
                  (Fa(fo) || Fa(co, t.autoRefreshEvents || "none"),
                  (da = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
            }),
            (e.scrollerProxy = function (e, t) {
              var n = zi(e),
                r = ki.indexOf(n),
                i = Ra(n);
              ~r && ki.splice(r, i ? 6 : 2),
                t && (i ? Si.unshift(qi, t, Gi, t, Qi, t) : Si.unshift(n, t));
            }),
            (e.matchMedia = function (e) {
              var t, n, r, i, a;
              for (n in e)
                (r = Po.indexOf(n)),
                  (i = e[n]),
                  (xa = n),
                  "all" === n
                    ? i()
                    : (t = qi.matchMedia(n)) &&
                      (t.matches && (a = i()),
                      ~r
                        ? ((Po[r + 1] = Wa(Po[r + 1], i)),
                          (Po[r + 2] = Wa(Po[r + 2], a)))
                        : ((r = Po.length),
                          Po.push(n, i, a),
                          t.addListener
                            ? t.addListener(jo)
                            : t.addEventListener("change", jo)),
                      (Po[r + 3] = t.matches)),
                  (xa = 0);
              return Po;
            }),
            (e.clearMatchMedia = function (e) {
              e || (Po.length = 0), (e = Po.indexOf(e)) >= 0 && Po.splice(e, 4);
            }),
            (e.isInViewport = function (e, t, n) {
              var r = (Ia(e) ? zi(e) : e).getBoundingClientRect(),
                i = r[n ? Ka : Za] * t || 0;
              return n
                ? r.right - i > 0 && r.left + i < qi.innerWidth
                : r.bottom - i > 0 && r.top + i < qi.innerHeight;
            }),
            (e.positionInViewport = function (e, t, n) {
              Ia(e) && (e = zi(e));
              var r = e.getBoundingClientRect(),
                i = r[n ? Ka : Za],
                a =
                  null == t
                    ? i / 2
                    : t in mo
                    ? mo[t] * i
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * i) / 100
                    : parseFloat(t) || 0;
              return n
                ? (r.left + a) / qi.innerWidth
                : (r.top + a) / qi.innerHeight;
            }),
            e
          );
        })();
      (Zo.version = "3.10.4"),
        (Zo.saveStyles = function (e) {
          return e
            ? Ji(e).forEach(function (e) {
                if (e && e.style) {
                  var t = Oo.indexOf(e);
                  t >= 0 && Oo.splice(t, 5),
                    Oo.push(
                      e,
                      e.style.cssText,
                      e.getBBox && e.getAttribute("transform"),
                      Yi.core.getCache(e),
                      xa
                    );
                }
              })
            : Oo;
        }),
        (Zo.revert = function (e, t) {
          return No(!e, t);
        }),
        (Zo.create = function (e, t) {
          return new Zo(e, t);
        }),
        (Zo.refresh = function (e) {
          return e ? To() : (Xi || Zo.register()) && zo(!0);
        }),
        (Zo.update = Vo),
        (Zo.clearScrollMemory = Ro),
        (Zo.maxScroll = function (e, t) {
          return za(e, t ? Ri : Di);
        }),
        (Zo.getScrollFunc = function (e, t) {
          return Fi(zi(e), t ? Ri : Di);
        }),
        (Zo.getById = function (e) {
          return wo[e];
        }),
        (Zo.getAll = function () {
          return xo.filter(function (e) {
            return "ScrollSmoother" !== e.vars.id;
          });
        }),
        (Zo.isScrolling = function () {
          return !!Ca;
        }),
        (Zo.snapDirectional = lo),
        (Zo.addEventListener = function (e, t) {
          var n = Eo[e] || (Eo[e] = []);
          ~n.indexOf(t) || n.push(t);
        }),
        (Zo.removeEventListener = function (e, t) {
          var n = Eo[e],
            r = n && n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        }),
        (Zo.batch = function (e, t) {
          var n,
            r = [],
            i = {},
            a = t.interval || 0.016,
            o = t.batchMax || 1e9,
            s = function (e, t) {
              var n = [],
                r = [],
                i = Yi.delayedCall(a, function () {
                  t(n, r), (n = []), (r = []);
                }).pause();
              return function (e) {
                n.length || i.restart(!0),
                  n.push(e.trigger),
                  r.push(e),
                  o <= n.length && i.progress(1);
              };
            };
          for (n in t)
            i[n] =
              "on" === n.substr(0, 2) && Va(t[n]) && "onRefreshInit" !== n
                ? s(0, t[n])
                : t[n];
          return (
            Va(o) &&
              ((o = o()),
              co(Zo, "refresh", function () {
                return (o = t.batchMax());
              })),
            Ji(e).forEach(function (e) {
              var t = {};
              for (n in i) t[n] = i[n];
              (t.trigger = e), r.push(Zo.create(t));
            }),
            r
          );
        });
      var Jo,
        es = function (e, t, n, r) {
          return (
            t > r ? e(r) : t < 0 && e(0),
            n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
          );
        },
        ts = function e(t, n) {
          !0 === n
            ? t.style.removeProperty("touch-action")
            : (t.style.touchAction =
                !0 === n
                  ? "auto"
                  : n
                  ? "pan-" + n + (Wi.isTouch ? " pinch-zoom" : "")
                  : "none"),
            t === Qi && e(Gi, n);
        },
        ns = { auto: 1, scroll: 1 },
        rs = function (e) {
          var t,
            n = e.event,
            r = e.target,
            i = e.axis,
            a = (n.changedTouches ? n.changedTouches[0] : n).target,
            o = a._gsap || Yi.core.getCache(a),
            s = Ta();
          if (!o._isScrollT || s - o._isScrollT > 2e3) {
            for (; a && a.scrollHeight <= a.clientHeight; ) a = a.parentNode;
            (o._isScroll =
              a &&
              !Ra(a) &&
              a !== r &&
              (ns[(t = ro(a)).overflowY] || ns[t.overflowX])),
              (o._isScrollT = s);
          }
          (o._isScroll || "x" === i) && (n._gsapAllow = !0);
        },
        is = function (e, t, n, r) {
          return Wi.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: (r = r && rs),
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function () {
              return n && co($i, Wi.eventTypes[0], os, !1, !0);
            },
            onDisable: function () {
              return fo($i, Wi.eventTypes[0], os, !0);
            },
          });
        },
        as = /(input|label|select|textarea)/i,
        os = function (e) {
          var t = as.test(e.target.tagName);
          (t || Jo) && ((e._gsapAllow = !0), (Jo = t));
        },
        ss = function (e) {
          Ba(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = "wheel,touch"),
            (e.debounce = !!e.debounce),
            (e.id = e.id || "normalizer");
          var t,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            u = e,
            c = u.normalizeScrollX,
            f = u.momentum,
            d = u.allowNestedScroll,
            p = zi(e.target) || Qi,
            h = Yi.core.globals().ScrollSmoother,
            v =
              ga &&
              ((e.content && zi(e.content)) ||
                (h && h.get() && h.get().content())),
            m = Fi(p, Di),
            g = Fi(p, Ri),
            y = 1,
            b =
              (Wi.isTouch && qi.visualViewport
                ? qi.visualViewport.scale * qi.visualViewport.width
                : qi.outerWidth) / qi.innerWidth,
            x = 0,
            w = Va(f)
              ? function () {
                  return f(t);
                }
              : function () {
                  return f || 2.8;
                },
            _ = is(p, e.type, !0, d),
            k = function () {
              return (r = !1);
            },
            S = Aa,
            T = Aa,
            E = function () {
              (n = za(p, Di)),
                (T = ea(ga ? 1 : 0, n)),
                c && (S = ea(0, za(p, Ri))),
                (i = Do);
            },
            C = function () {
              E(),
                a.isActive() &&
                  a.vars.scrollY > n &&
                  (m() > n ? a.progress(1) && m(n) : a.resetTo("scrollY", n));
            };
          return (
            (e.ignoreCheck = function (e) {
              return (
                (ga &&
                  "touchmove" === e.type &&
                  (function () {
                    if (r) {
                      requestAnimationFrame(k);
                      var e = Oa(t.deltaY / 2),
                        n = T(m.v - e);
                      return (
                        v &&
                          n !== m.v + m.offset &&
                          ((m.offset = n - m.v),
                          (v.style.transform =
                            "translateY(" + -m.offset + "px)"),
                          v._gsap && (v._gsap.y = -m.offset + "px"),
                          (m.cacheID = ki.cache),
                          Vo()),
                        !0
                      );
                    }
                    v &&
                      ((v.style.transform = "translateY(0px)"),
                      (m.offset = m.cacheID = 0),
                      v._gsap && (v._gsap.y = "0px")),
                      (r = !0);
                  })()) ||
                (y > 1.05 && "touchstart" !== e.type) ||
                t.isGesturing ||
                (e.touches && e.touches.length > 1)
              );
            }),
            (e.onPress = function () {
              var e = y;
              (y = Oa(
                ((qi.visualViewport && qi.visualViewport.scale) || 1) / b
              )),
                a.pause(),
                e !== y && ts(p, y > 1.01 || (!c && "x")),
                (r = !1),
                (o = g()),
                (s = m()),
                E(),
                (i = Do);
            }),
            (e.onRelease = e.onGestureStart =
              function (e, t) {
                if (
                  (v &&
                    ((v.style.transform = "translateY(0px)"),
                    (m.offset = m.cacheID = 0),
                    v._gsap && (v._gsap.y = "0px")),
                  t)
                ) {
                  ki.cache++;
                  var r,
                    i,
                    o = w();
                  c &&
                    ((i = (r = g()) + (0.05 * o * -e.velocityX) / 0.227),
                    (o *= es(g, r, i, za(p, Ri))),
                    (a.vars.scrollX = S(i))),
                    (i = (r = m()) + (0.05 * o * -e.velocityY) / 0.227),
                    (o *= es(m, r, i, za(p, Di))),
                    (a.vars.scrollY = T(i)),
                    a.invalidate().duration(o).play(0.01),
                    ((ga && a.vars.scrollY >= n) || r >= n - 1) &&
                      Yi.to({}, { onUpdate: C, duration: o });
                } else l.restart(!0);
              }),
            (e.onWheel = function () {
              a._ts && a.pause(), Ta() - x > 1e3 && ((i = 0), (x = Ta()));
            }),
            (e.onChange = function (e, t, n, r, a) {
              Do !== i && E(),
                t &&
                  c &&
                  g(S(r[2] === t ? o + (e.startX - e.x) : g() + t - r[1])),
                n && m(T(a[2] === n ? s + (e.startY - e.y) : m() + n - a[1])),
                Vo();
            }),
            (e.onEnable = function () {
              ts(p, !c && "x"), co(qi, "resize", C), _.enable();
            }),
            (e.onDisable = function () {
              ts(p, !0), fo(qi, "resize", C), _.kill();
            }),
            ((t = new Wi(e)).iOS = ga),
            ga && !m() && m(1),
            (l = t._dc),
            (a = Yi.to(t, {
              ease: "power4",
              paused: !0,
              scrollX: c ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              onComplete: l.vars.onComplete,
            })),
            t
          );
        };
      (Zo.sort = function (e) {
        return xo.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                e.start -
                (t.start + -1e6 * (t.vars.refreshPriority || 0))
              );
            }
        );
      }),
        (Zo.observe = function (e) {
          return new Wi(e);
        }),
        (Zo.normalizeScroll = function (e) {
          if ("undefined" === typeof e) return pa;
          if (!0 === e && pa) return pa.enable();
          if (!1 === e) return pa && pa.kill();
          var t = e instanceof Wi ? e : ss(e);
          return (
            pa && pa.target === t.target && pa.kill(),
            Ra(t.target) && (pa = t),
            t
          );
        }),
        (Zo.core = {
          _getVelocityProp: Ii,
          _inputObserver: is,
          _scrollers: ki,
          _proxies: Si,
          bridge: {
            ss: function () {
              Ca || Ao("scrollStart"), (Ca = Ta());
            },
            ref: function () {
              return ra;
            },
          },
        }),
        Na() && Yi.registerPlugin(Zo);
      var ls = n.p + "static/media/logo2.07bb71e77037dd1c91d1.jpg",
        us = function (e, t) {
          return (
            (us =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            us(e, t)
          );
        };
      function cs(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        us(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var fs = function () {
        return (
          (fs =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          fs.apply(this, arguments)
        );
      };
      function ds(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      Object.create;
      function ps(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          a = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
            o.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function hs(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var vs = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        ms = {
          measureLayout: vs(["layout", "layoutId", "drag"]),
          animation: vs([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: vs(["exit"]),
          drag: vs(["drag", "dragControls"]),
          focus: vs(["whileFocus"]),
          hover: vs(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: vs(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: vs(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: vs(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var gs = (0, t.createContext)({ strict: !1 }),
        ys = Object.keys(ms),
        bs = ys.length;
      var xs = (0, t.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        ws = (0, t.createContext)({});
      var _s = (0, t.createContext)(null),
        ks = "undefined" !== typeof document,
        Ss = ks ? t.useLayoutEffect : t.useEffect,
        Ts = { current: null },
        Es = !1;
      function Cs() {
        return (
          !Es &&
            (function () {
              if (((Es = !0), ks))
                if (window.matchMedia) {
                  var e = window.matchMedia("(prefers-reduced-motion)"),
                    t = function () {
                      return (Ts.current = e.matches);
                    };
                  e.addListener(t), t();
                } else Ts.current = !1;
            })(),
          ps((0, t.useState)(Ts.current), 1)[0]
        );
      }
      function Ps(e, n, r, i) {
        var a = (0, t.useContext)(gs),
          o = (0, t.useContext)(ws).visualElement,
          s = (0, t.useContext)(_s),
          l = (function () {
            var e = Cs(),
              n = (0, t.useContext)(xs).reducedMotion;
            return "never" !== n && ("always" === n || e);
          })(),
          u = (0, t.useRef)(void 0);
        i || (i = a.renderer),
          !u.current &&
            i &&
            (u.current = i(e, {
              visualState: n,
              parent: o,
              props: r,
              presenceId: null === s || void 0 === s ? void 0 : s.id,
              blockInitialAnimation:
                !1 === (null === s || void 0 === s ? void 0 : s.initial),
              shouldReduceMotion: l,
            }));
        var c = u.current;
        return (
          Ss(function () {
            null === c || void 0 === c || c.syncRender();
          }),
          (0, t.useEffect)(function () {
            var e;
            null ===
              (e = null === c || void 0 === c ? void 0 : c.animationState) ||
              void 0 === e ||
              e.animateChanges();
          }),
          Ss(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function js(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function Ms(e) {
        return Array.isArray(e);
      }
      function As(e) {
        return "string" === typeof e || Ms(e);
      }
      function Os(e, t, n, r, i) {
        var a;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof t &&
            (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
          "string" === typeof t &&
            (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]),
          "function" === typeof t &&
            (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
          t
        );
      }
      function Ls(e, t, n) {
        var r = e.getProps();
        return Os(
          r,
          t,
          null !== n && void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      function Ns(e) {
        var t;
        return (
          "function" ===
            typeof (null === (t = e.animate) || void 0 === t
              ? void 0
              : t.start) ||
          As(e.initial) ||
          As(e.animate) ||
          As(e.whileHover) ||
          As(e.whileDrag) ||
          As(e.whileTap) ||
          As(e.whileFocus) ||
          As(e.exit)
        );
      }
      function Rs(e) {
        return Boolean(Ns(e) || e.variants);
      }
      function Ds(e) {
        var n = (function (e, t) {
            if (Ns(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || As(n) ? n : void 0,
                animate: As(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(e, (0, t.useContext)(ws)),
          r = n.initial,
          i = n.animate;
        return (0, t.useMemo)(
          function () {
            return { initial: r, animate: i };
          },
          [zs(r), zs(i)]
        );
      }
      function zs(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      function Fs(e) {
        var n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      var Is = (1 / 60) * 1e3,
        Vs =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        Us =
          "undefined" !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(Vs());
                }, Is);
              };
      var Bs = !0,
        Hs = !1,
        Ws = !1,
        Ys = { delta: 0, timestamp: 0 },
        Xs = ["read", "update", "preRender", "render", "postRender"],
        qs = Xs.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                i = !1,
                a = !1,
                o = new WeakSet(),
                s = {
                  schedule: function (e) {
                    var a =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        i,
                      s = a ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        o.add(e),
                      -1 === s.indexOf(e) &&
                        (s.push(e), a && i && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: function (l) {
                    if (i) a = !0;
                    else {
                      i = !0;
                      var u = [n, t];
                      if (((t = u[0]), ((n = u[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(l), o.has(f) && (s.schedule(f), e());
                        }
                      (i = !1), a && ((a = !1), s.process(l));
                    }
                  },
                };
              return s;
            })(function () {
              return (Hs = !0);
            })),
            e
          );
        }, {}),
        $s = Xs.reduce(function (e, t) {
          var n = qs[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return Hs || Js(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        Qs = Xs.reduce(function (e, t) {
          return (e[t] = qs[t].cancel), e;
        }, {}),
        Gs = Xs.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return qs[t].process(Ys);
            }),
            e
          );
        }, {}),
        Ks = function (e) {
          return qs[e].process(Ys);
        },
        Zs = function e(t) {
          (Hs = !1),
            (Ys.delta = Bs ? Is : Math.max(Math.min(t - Ys.timestamp, 40), 1)),
            (Ys.timestamp = t),
            (Ws = !0),
            Xs.forEach(Ks),
            (Ws = !1),
            Hs && ((Bs = !1), Us(e));
        },
        Js = function () {
          (Hs = !0), (Bs = !0), Ws || Us(Zs);
        },
        el = function () {
          return Ys;
        },
        tl = $s,
        nl = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function rl(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      function il(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function al(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var ol = (function () {
          function e() {
            this.subscriptions = [];
          }
          return (
            (e.prototype.add = function (e) {
              var t = this;
              return (
                il(this.subscriptions, e),
                function () {
                  return al(t.subscriptions, e);
                }
              );
            }),
            (e.prototype.notify = function (e, t, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](e, t, n);
                else
                  for (var i = 0; i < r; i++) {
                    var a = this.subscriptions[i];
                    a && a(e, t, n);
                  }
            }),
            (e.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (e.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            e
          );
        })(),
        sl = (function () {
          function e(e) {
            var t,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new ol()),
              (this.velocityUpdateSubscribers = new ol()),
              (this.renderSubscribers = new ol()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (e, t) {
                void 0 === t && (t = !0), (n.prev = n.current), (n.current = e);
                var r = el(),
                  i = r.delta,
                  a = r.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = a),
                  tl.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  t && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return tl.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity =
                ((t = this.current), !isNaN(parseFloat(t))));
          }
          return (
            (e.prototype.onChange = function (e) {
              return this.updateSubscribers.add(e);
            }),
            (e.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (e.prototype.onRenderRequest = function (e) {
              return e(this.get()), this.renderSubscribers.add(e);
            }),
            (e.prototype.attach = function (e) {
              this.passiveEffect = e;
            }),
            (e.prototype.set = function (e, t) {
              void 0 === t && (t = !0),
                t && this.passiveEffect
                  ? this.passiveEffect(e, this.updateAndNotify)
                  : this.updateAndNotify(e, t);
            }),
            (e.prototype.get = function () {
              return this.current;
            }),
            (e.prototype.getPrevious = function () {
              return this.prev;
            }),
            (e.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? rl(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (e.prototype.start = function (e) {
              var t = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (t.hasAnimated = !0), (t.stopAnimation = e(n));
                }).then(function () {
                  return t.clearAnimation();
                })
              );
            }),
            (e.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (e.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (e.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (e.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            e
          );
        })();
      function ll(e) {
        return new sl(e);
      }
      var ul = function (e) {
        return Boolean(null !== e && "object" === typeof e && e.getVelocity);
      };
      var cl = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        fl = 0.001;
      function dl(e) {
        var t,
          n,
          r = e.duration,
          i = void 0 === r ? 800 : r,
          a = e.bounce,
          o = void 0 === a ? 0.25 : a,
          s = e.velocity,
          l = void 0 === s ? 0 : s,
          u = e.mass,
          c = void 0 === u ? 1 : u,
          f = 1 - o;
        (f = cl(0.05, 1, f)),
          (i = cl(0.01, 10, i / 1e3)),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * i,
                  r = t - l,
                  a = pl(e, f),
                  o = Math.exp(-n);
                return fl - (r / a) * o;
              }),
              (n = function (e) {
                var n = e * f * i,
                  r = n * l + l,
                  a = Math.pow(f, 2) * Math.pow(e, 2) * i,
                  o = Math.exp(-n),
                  s = pl(Math.pow(e, 2), f);
                return ((-t(e) + fl > 0 ? -1 : 1) * ((r - a) * o)) / s;
              }))
            : ((t = function (e) {
                return Math.exp(-e * i) * ((e - l) * i + 1) - 0.001;
              }),
              (n = function (e) {
                return Math.exp(-e * i) * (i * i * (l - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, i = 1; i < 12; i++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / i);
        if (((i *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: i };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: i };
      }
      function pl(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var hl = ["duration", "bounce"],
        vl = ["stiffness", "damping", "mass"];
      function ml(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function gl(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          i = void 0 === r ? 1 : r,
          a = e.restSpeed,
          o = void 0 === a ? 2 : a,
          s = e.restDelta,
          l = ds(e, ["from", "to", "restSpeed", "restDelta"]),
          u = { done: !1, value: n },
          c = (function (e) {
            var t = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!ml(e, vl) && ml(e, hl)) {
              var n = dl(e);
              (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return t;
          })(l),
          f = c.stiffness,
          d = c.damping,
          p = c.mass,
          h = c.velocity,
          v = c.duration,
          m = c.isResolvedFromDuration,
          g = yl,
          y = yl;
        function b() {
          var e = h ? -h / 1e3 : 0,
            t = i - n,
            r = d / (2 * Math.sqrt(f * p)),
            a = Math.sqrt(f / p) / 1e3;
          if (
            (void 0 === s && (s = Math.min(Math.abs(i - n) / 100, 0.4)), r < 1)
          ) {
            var o = pl(a, r);
            (g = function (n) {
              var s = Math.exp(-r * a * n);
              return (
                i -
                s *
                  (((e + r * a * t) / o) * Math.sin(o * n) +
                    t * Math.cos(o * n))
              );
            }),
              (y = function (n) {
                var i = Math.exp(-r * a * n);
                return (
                  r *
                    a *
                    i *
                    ((Math.sin(o * n) * (e + r * a * t)) / o +
                      t * Math.cos(o * n)) -
                  i *
                    (Math.cos(o * n) * (e + r * a * t) -
                      o * t * Math.sin(o * n))
                );
              });
          } else if (1 === r)
            g = function (n) {
              return i - Math.exp(-a * n) * (t + (e + a * t) * n);
            };
          else {
            var l = a * Math.sqrt(r * r - 1);
            g = function (n) {
              var o = Math.exp(-r * a * n),
                s = Math.min(l * n, 300);
              return (
                i -
                (o * ((e + r * a * t) * Math.sinh(s) + l * t * Math.cosh(s))) /
                  l
              );
            };
          }
        }
        return (
          b(),
          {
            next: function (e) {
              var t = g(e);
              if (m) u.done = e >= v;
              else {
                var n = 1e3 * y(e),
                  r = Math.abs(n) <= o,
                  a = Math.abs(i - t) <= s;
                u.done = r && a;
              }
              return (u.value = u.done ? i : t), u;
            },
            flipTarget: function () {
              h = -h;
              var e = [i, n];
              (n = e[0]), (i = e[1]), b();
            },
          }
        );
      }
      gl.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var yl = function (e) {
          return 0;
        },
        bl = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        xl = function (e, t) {
          return function (n) {
            return Math.max(Math.min(n, t), e);
          };
        },
        wl = function (e) {
          return e % 1 ? Number(e.toFixed(5)) : e;
        },
        _l = /(-)?([\d]*\.?[\d])+/g,
        kl =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        Sl =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function Tl(e) {
        return "string" === typeof e;
      }
      var El = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Cl = Object.assign(Object.assign({}, El), { transform: xl(0, 1) }),
        Pl = Object.assign(Object.assign({}, El), { default: 1 });
      function jl(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Ml = function (e, t) {
          return function (n) {
            return Boolean(
              (Tl(n) && Sl.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Al = function (e, t, n) {
          return function (r) {
            var i;
            if (!Tl(r)) return r;
            var a = o(r.match(_l), 4),
              s = a[0],
              l = a[1],
              u = a[2],
              c = a[3];
            return (
              jl((i = {}), e, parseFloat(s)),
              jl(i, t, parseFloat(l)),
              jl(i, n, parseFloat(u)),
              jl(i, "alpha", void 0 !== c ? parseFloat(c) : 1),
              i
            );
          };
        },
        Ol = xl(0, 255),
        Ll = Object.assign(Object.assign({}, El), {
          transform: function (e) {
            return Math.round(Ol(e));
          },
        }),
        Nl = {
          test: Ml("rgb", "red"),
          parse: Al("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              i = e.alpha,
              a = void 0 === i ? 1 : i;
            return (
              "rgba(" +
              Ll.transform(t) +
              ", " +
              Ll.transform(n) +
              ", " +
              Ll.transform(r) +
              ", " +
              wl(Cl.transform(a)) +
              ")"
            );
          },
        };
      var Rl = {
          test: Ml("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substr(1, 2)),
                  (n = e.substr(3, 2)),
                  (r = e.substr(5, 2)),
                  (i = e.substr(7, 2)))
                : ((t = e.substr(1, 1)),
                  (n = e.substr(2, 1)),
                  (r = e.substr(3, 1)),
                  (i = e.substr(4, 1)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: Nl.transform,
        },
        Dl = function (e) {
          return {
            test: function (t) {
              return Tl(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        zl = Dl("deg"),
        Fl = Dl("%"),
        Il = Dl("px"),
        Vl = Dl("vh"),
        Ul = Dl("vw"),
        Bl = Object.assign(Object.assign({}, Fl), {
          parse: function (e) {
            return Fl.parse(e) / 100;
          },
          transform: function (e) {
            return Fl.transform(100 * e);
          },
        }),
        Hl = {
          test: Ml("hsl", "hue"),
          parse: Al("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              i = e.alpha,
              a = void 0 === i ? 1 : i;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              Fl.transform(wl(n)) +
              ", " +
              Fl.transform(wl(r)) +
              ", " +
              wl(Cl.transform(a)) +
              ")"
            );
          },
        };
      function Wl(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function Yl(e) {
        var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          i = e.alpha;
        (t /= 360), (r /= 100);
        var a = 0,
          o = 0,
          s = 0;
        if ((n /= 100)) {
          var l = r < 0.5 ? r * (1 + n) : r + n - r * n,
            u = 2 * r - l;
          (a = Wl(u, l, t + 1 / 3)),
            (o = Wl(u, l, t)),
            (s = Wl(u, l, t - 1 / 3));
        } else a = o = s = r;
        return {
          red: Math.round(255 * a),
          green: Math.round(255 * o),
          blue: Math.round(255 * s),
          alpha: i,
        };
      }
      var Xl = function (e, t, n) {
          var r = e * e,
            i = t * t;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        ql = [Rl, Nl, Hl],
        $l = function (e) {
          return ql.find(function (t) {
            return t.test(e);
          });
        },
        Ql = function (e) {
          return "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        Gl = function (e, t) {
          var n = $l(e),
            r = $l(t);
          Ql(e), Ql(t);
          var i = n.parse(e),
            a = r.parse(t);
          n === Hl && ((i = Yl(i)), (n = Nl)),
            r === Hl && ((a = Yl(a)), (r = Nl));
          var o = Object.assign({}, i);
          return function (e) {
            for (var t in o) "alpha" !== t && (o[t] = Xl(i[t], a[t], e));
            return (o.alpha = nl(i.alpha, a.alpha, e)), n.transform(o);
          };
        };
      function Kl(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          a(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Zl = {
          test: function (e) {
            return Nl.test(e) || Rl.test(e) || Hl.test(e);
          },
          parse: function (e) {
            return Nl.test(e)
              ? Nl.parse(e)
              : Hl.test(e)
              ? Hl.parse(e)
              : Rl.parse(e);
          },
          transform: function (e) {
            return Tl(e)
              ? e
              : e.hasOwnProperty("red")
              ? Nl.transform(e)
              : Hl.transform(e);
          },
        },
        Jl = "${c}",
        eu = "${n}";
      function tu(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = e.match(kl);
        r &&
          ((n = r.length),
          (e = e.replace(kl, Jl)),
          t.push.apply(t, Kl(r.map(Zl.parse))));
        var i = e.match(_l);
        return (
          i && ((e = e.replace(_l, eu)), t.push.apply(t, Kl(i.map(El.parse)))),
          { values: t, numColors: n, tokenised: e }
        );
      }
      function nu(e) {
        return tu(e).values;
      }
      function ru(e) {
        var t = tu(e),
          n = t.values,
          r = t.numColors,
          i = t.tokenised,
          a = n.length;
        return function (e) {
          for (var t = i, n = 0; n < a; n++)
            t = t.replace(
              n < r ? Jl : eu,
              n < r ? Zl.transform(e[n]) : wl(e[n])
            );
          return t;
        };
      }
      var iu = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var au = {
          test: function (e) {
            var t, n, r, i;
            return (
              isNaN(e) &&
              Tl(e) &&
              (null !==
                (n =
                  null === (t = e.match(_l)) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = e.match(kl)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: nu,
          createTransformer: ru,
          getAnimatableNone: function (e) {
            var t = nu(e);
            return ru(e)(t.map(iu));
          },
        },
        ou = function (e) {
          return "number" === typeof e;
        },
        su = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        lu = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(su);
        };
      function uu(e, t) {
        return ou(e)
          ? function (n) {
              return nl(e, t, n);
            }
          : Zl.test(e)
          ? Gl(e, t)
          : pu(e, t);
      }
      var cu = function (e, t) {
          var n = Kl(e),
            r = n.length,
            i = e.map(function (e, n) {
              return uu(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = i[t](e);
            return n;
          };
        },
        fu = function (e, t) {
          var n = Object.assign(Object.assign({}, e), t),
            r = {};
          for (var i in n)
            void 0 !== e[i] && void 0 !== t[i] && (r[i] = uu(e[i], t[i]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        };
      function du(e) {
        for (
          var t = au.parse(e), n = t.length, r = 0, i = 0, a = 0, o = 0;
          o < n;
          o++
        )
          r || "number" === typeof t[o] ? r++ : void 0 !== t[o].hue ? a++ : i++;
        return { parsed: t, numNumbers: r, numRGB: i, numHSL: a };
      }
      var pu = function (e, t) {
          var n = au.createTransformer(t),
            r = du(e),
            i = du(t);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? lu(cu(r.parsed, i.parsed), n)
            : ("Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return "".concat(n > 0 ? t : e);
              });
        },
        hu = function (e, t) {
          return function (n) {
            return nl(e, t, n);
          };
        };
      function vu(e, t, n) {
        for (
          var r,
            i = [],
            a =
              n ||
              ("number" === typeof (r = e[0])
                ? hu
                : "string" === typeof r
                ? Zl.test(r)
                  ? Gl
                  : pu
                : Array.isArray(r)
                ? cu
                : "object" === typeof r
                ? fu
                : void 0),
            o = e.length - 1,
            s = 0;
          s < o;
          s++
        ) {
          var l = a(e[s], e[s + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[s] : t;
            l = lu(u, l);
          }
          i.push(l);
        }
        return i;
      }
      function mu(e, t) {
        var n = o(e, 2),
          r = n[0],
          i = n[1],
          a = o(t, 1)[0];
        return function (e) {
          return a(bl(r, i, e));
        };
      }
      function gu(e, t) {
        var n = e.length,
          r = n - 1;
        return function (i) {
          var a = 0,
            o = !1;
          if (
            (i <= e[0] ? (o = !0) : i >= e[r] && ((a = r - 1), (o = !0)), !o)
          ) {
            for (var s = 1; s < n && !(e[s] > i || s === r); s++);
            a = s - 1;
          }
          var l = bl(e[a], e[a + 1], i);
          return t[a](l);
        };
      }
      function yu(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          i = void 0 === r || r,
          a = n.ease,
          o = n.mixer,
          s = e.length;
        t.length,
          !a || !Array.isArray(a) || a.length,
          e[0] > e[s - 1] &&
            ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
        var l = vu(t, a, o),
          u = 2 === s ? mu(e, l) : gu(e, l);
        return i
          ? function (t) {
              return u(cl(e[0], e[s - 1], t));
            }
          : u;
      }
      var bu,
        xu = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        wu = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        _u = function (e) {
          return function (t) {
            return t * t * ((e + 1) * t - e);
          };
        },
        ku = function (e) {
          return e;
        },
        Su =
          ((bu = 2),
          function (e) {
            return Math.pow(e, bu);
          }),
        Tu = xu(Su),
        Eu = wu(Su),
        Cu = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Pu = xu(Cu),
        ju = wu(Pu),
        Mu = _u(1.525),
        Au = xu(Mu),
        Ou = wu(Mu),
        Lu = (function (e) {
          var t = _u(e);
          return function (e) {
            return (e *= 2) < 1
              ? 0.5 * t(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          };
        })(1.525),
        Nu = function (e) {
          if (1 === e || 0 === e) return e;
          var t = e * e;
          return e < 0.36363636363636365
            ? 7.5625 * t
            : e < 0.7272727272727273
            ? 9.075 * t - 9.9 * e + 3.4
            : e < 0.9
            ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
            : 10.8 * e * e - 20.52 * e + 10.72;
        },
        Ru = xu(Nu);
      function Du(e, t) {
        return e
          .map(function () {
            return t || Eu;
          })
          .splice(0, e.length - 1);
      }
      function zu(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          i = void 0 === r ? 1 : r,
          a = e.ease,
          o = e.offset,
          s = e.duration,
          l = void 0 === s ? 300 : s,
          u = { done: !1, value: n },
          c = Array.isArray(i) ? i : [n, i],
          f = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            o && o.length === c.length
              ? o
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(c),
            l
          );
        function d() {
          return yu(f, c, { ease: Array.isArray(a) ? a : Du(c, a) });
        }
        var p = d();
        return {
          next: function (e) {
            return (u.value = p(e)), (u.done = e >= l), u;
          },
          flipTarget: function () {
            c.reverse(), (p = d());
          },
        };
      }
      var Fu = {
        keyframes: zu,
        spring: gl,
        decay: function (e) {
          var t = e.velocity,
            n = void 0 === t ? 0 : t,
            r = e.from,
            i = void 0 === r ? 0 : r,
            a = e.power,
            o = void 0 === a ? 0.8 : a,
            s = e.timeConstant,
            l = void 0 === s ? 350 : s,
            u = e.restDelta,
            c = void 0 === u ? 0.5 : u,
            f = e.modifyTarget,
            d = { done: !1, value: i },
            p = o * n,
            h = i + p,
            v = void 0 === f ? h : f(h);
          return (
            v !== h && (p = v - i),
            {
              next: function (e) {
                var t = -p * Math.exp(-e / l);
                return (
                  (d.done = !(t > c || t < -c)),
                  (d.value = d.done ? v : v + t),
                  d
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      function Iu(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var Vu = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return tl.update(t, !0);
          },
          stop: function () {
            return Qs.update(t);
          },
        };
      };
      function Uu(e) {
        var t,
          n,
          r,
          i,
          a,
          o = e.from,
          s = e.autoplay,
          l = void 0 === s || s,
          u = e.driver,
          c = void 0 === u ? Vu : u,
          f = e.elapsed,
          d = void 0 === f ? 0 : f,
          p = e.repeat,
          h = void 0 === p ? 0 : p,
          v = e.repeatType,
          m = void 0 === v ? "loop" : v,
          g = e.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = e.onPlay,
          x = e.onStop,
          w = e.onComplete,
          _ = e.onRepeat,
          k = e.onUpdate,
          S = ds(e, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          T = S.to,
          E = 0,
          C = S.duration,
          P = !1,
          j = !0,
          M = (function (e) {
            if (Array.isArray(e.to)) return zu;
            if (Fu[e.type]) return Fu[e.type];
            var t = new Set(Object.keys(e));
            return t.has("ease") ||
              (t.has("duration") && !t.has("dampingRatio"))
              ? zu
              : t.has("dampingRatio") ||
                t.has("stiffness") ||
                t.has("mass") ||
                t.has("damping") ||
                t.has("restSpeed") ||
                t.has("restDelta")
              ? gl
              : zu;
          })(S);
        (null === (n = (t = M).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, o, T)) &&
          ((a = yu([0, 100], [o, T], { clamp: !1 })), (o = 0), (T = 100));
        var A = M(Object.assign(Object.assign({}, S), { from: o, to: T }));
        function O() {
          E++,
            "reverse" === m
              ? (d = (function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  return arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                    ? t - (e - t) + n
                    : Iu(t + -e, t, n);
                })(d, C, y, (j = E % 2 === 0)))
              : ((d = Iu(d, C, y)), "mirror" === m && A.flipTarget()),
            (P = !1),
            _ && _();
        }
        function L(e) {
          if ((j || (e = -e), (d += e), !P)) {
            var t = A.next(Math.max(0, d));
            (i = t.value), a && (i = a(i)), (P = j ? t.done : d <= 0);
          }
          null === k || void 0 === k || k(i),
            P &&
              (0 === E && ((null !== C && void 0 !== C) || (C = d)),
              E < h
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(d, C, y, j) && O()
                : (r.stop(), w && w()));
        }
        return (
          l && (null === b || void 0 === b || b(), (r = c(L)).start()),
          {
            stop: function () {
              null === x || void 0 === x || x(), r.stop();
            },
          }
        );
      }
      var Bu = function (e) {
          return 1e3 * e;
        },
        Hu = function (e, t) {
          return 1 - 3 * t + 3 * e;
        },
        Wu = function (e, t) {
          return 3 * t - 6 * e;
        },
        Yu = function (e) {
          return 3 * e;
        },
        Xu = function (e, t, n) {
          return ((Hu(t, n) * e + Wu(t, n)) * e + Yu(t)) * e;
        },
        qu = function (e, t, n) {
          return 3 * Hu(t, n) * e * e + 2 * Wu(t, n) * e + Yu(t);
        };
      var $u = 0.1;
      function Qu(e, t, n, r) {
        if (e === t && n === r) return ku;
        for (var i = new Float32Array(11), a = 0; a < 11; ++a)
          i[a] = Xu(a * $u, e, n);
        function o(t) {
          for (var r = 0, a = 1; 10 !== a && i[a] <= t; ++a) r += $u;
          --a;
          var o = r + ((t - i[a]) / (i[a + 1] - i[a])) * $u,
            s = qu(o, e, n);
          return s >= 0.001
            ? (function (e, t, n, r) {
                for (var i = 0; i < 8; ++i) {
                  var a = qu(t, n, r);
                  if (0 === a) return t;
                  t -= (Xu(t, n, r) - e) / a;
                }
                return t;
              })(t, o, e, n)
            : 0 === s
            ? o
            : (function (e, t, n, r, i) {
                var a,
                  o,
                  s = 0;
                do {
                  (a = Xu((o = t + (n - t) / 2), r, i) - e) > 0
                    ? (n = o)
                    : (t = o);
                } while (Math.abs(a) > 1e-7 && ++s < 10);
                return o;
              })(t, r, r + $u, e, n);
        }
        return function (e) {
          return 0 === e || 1 === e ? e : Xu(o(e), t, r);
        };
      }
      var Gu = {
          linear: ku,
          easeIn: Su,
          easeInOut: Eu,
          easeOut: Tu,
          circIn: Cu,
          circInOut: ju,
          circOut: Pu,
          backIn: Mu,
          backInOut: Ou,
          backOut: Au,
          anticipate: Lu,
          bounceIn: Ru,
          bounceInOut: function (e) {
            return e < 0.5
              ? 0.5 * (1 - Nu(1 - 2 * e))
              : 0.5 * Nu(2 * e - 1) + 0.5;
          },
          bounceOut: Nu,
        },
        Ku = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = ps(e, 4);
            return Qu(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? ("Invalid easing type '".concat(e, "'"), Gu[e])
            : e;
        },
        Zu = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !au.test(t) || t.startsWith("url(")))
          );
        },
        Ju = function (e) {
          return Array.isArray(e);
        },
        ec = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        tc = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        nc = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        rc = function (e) {
          return { type: "keyframes", duration: 0.8, values: e };
        },
        ic = {
          x: ec,
          y: ec,
          z: ec,
          rotate: ec,
          rotateX: ec,
          rotateY: ec,
          rotateZ: ec,
          scaleX: tc,
          scaleY: tc,
          scale: tc,
          opacity: nc,
          backgroundColor: nc,
          color: nc,
          default: tc,
        },
        ac = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function oc(e) {
        var t = o(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var i = o(r.match(_l) || [], 1)[0];
        if (!i) return e;
        var a = r.replace(i, ""),
          s = ac.has(n) ? 1 : 0;
        return i !== r && (s *= 100), n + "(" + s + a + ")";
      }
      var sc = /([a-z-]*)\(.*?\)/g,
        lc = Object.assign(Object.assign({}, au), {
          getAnimatableNone: function (e) {
            var t = e.match(sc);
            return t ? t.map(oc).join(" ") : e;
          },
        }),
        uc = fs(fs({}, El), { transform: Math.round }),
        cc = {
          borderWidth: Il,
          borderTopWidth: Il,
          borderRightWidth: Il,
          borderBottomWidth: Il,
          borderLeftWidth: Il,
          borderRadius: Il,
          radius: Il,
          borderTopLeftRadius: Il,
          borderTopRightRadius: Il,
          borderBottomRightRadius: Il,
          borderBottomLeftRadius: Il,
          width: Il,
          maxWidth: Il,
          height: Il,
          maxHeight: Il,
          size: Il,
          top: Il,
          right: Il,
          bottom: Il,
          left: Il,
          padding: Il,
          paddingTop: Il,
          paddingRight: Il,
          paddingBottom: Il,
          paddingLeft: Il,
          margin: Il,
          marginTop: Il,
          marginRight: Il,
          marginBottom: Il,
          marginLeft: Il,
          rotate: zl,
          rotateX: zl,
          rotateY: zl,
          rotateZ: zl,
          scale: Pl,
          scaleX: Pl,
          scaleY: Pl,
          scaleZ: Pl,
          skew: zl,
          skewX: zl,
          skewY: zl,
          distance: Il,
          translateX: Il,
          translateY: Il,
          translateZ: Il,
          x: Il,
          y: Il,
          z: Il,
          perspective: Il,
          transformPerspective: Il,
          opacity: Cl,
          originX: Bl,
          originY: Bl,
          originZ: Il,
          zIndex: uc,
          fillOpacity: Cl,
          strokeOpacity: Cl,
          numOctaves: uc,
        },
        fc = fs(fs({}, cc), {
          color: Zl,
          backgroundColor: Zl,
          outlineColor: Zl,
          fill: Zl,
          stroke: Zl,
          borderColor: Zl,
          borderTopColor: Zl,
          borderRightColor: Zl,
          borderBottomColor: Zl,
          borderLeftColor: Zl,
          filter: lc,
          WebkitFilter: lc,
        }),
        dc = function (e) {
          return fc[e];
        };
      function pc(e, t) {
        var n,
          r = dc(e);
        return (
          r !== lc && (r = au),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var hc = !1,
        vc = function (e) {
          return Ju(e) ? e[e.length - 1] || 0 : e;
        };
      function mc(e) {
        var t = e.ease,
          n = e.times,
          r = e.yoyo,
          i = e.flip,
          a = e.loop,
          o = ds(e, ["ease", "times", "yoyo", "flip", "loop"]),
          s = fs({}, o);
        return (
          n && (s.offset = n),
          o.duration && (s.duration = Bu(o.duration)),
          o.repeatDelay && (s.repeatDelay = Bu(o.repeatDelay)),
          t &&
            (s.ease = (function (e) {
              return Array.isArray(e) && "number" !== typeof e[0];
            })(t)
              ? t.map(Ku)
              : Ku(t)),
          "tween" === o.type && (s.type = "keyframes"),
          (r || a || i) &&
            (!0,
            r
              ? (s.repeatType = "reverse")
              : a
              ? (s.repeatType = "loop")
              : i && (s.repeatType = "mirror"),
            (s.repeat = a || r || i || o.repeat)),
          "spring" !== o.type && (s.type = "keyframes"),
          s
        );
      }
      function gc(e, t, n) {
        var r;
        return (
          Array.isArray(t.to) &&
            ((null !== (r = e.duration) && void 0 !== r) || (e.duration = 0.8)),
          (function (e) {
            Array.isArray(e.to) &&
              null === e.to[0] &&
              ((e.to = hs([], ps(e.to), !1)), (e.to[0] = e.from));
          })(t),
          (function (e) {
            e.when,
              e.delay,
              e.delayChildren,
              e.staggerChildren,
              e.staggerDirection,
              e.repeat,
              e.repeatType,
              e.repeatDelay,
              e.from;
            var t = ds(e, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(t).length;
          })(e) ||
            (e = fs(
              fs({}, e),
              (function (e, t) {
                var n;
                return (
                  (n = Ju(t) ? rc : ic[e] || ic.default), fs({ to: t }, n(t))
                );
              })(n, t.to)
            )),
          fs(fs({}, t), mc(e))
        );
      }
      function yc(e, t, n, r, i) {
        var a,
          o = wc(r, e),
          s = null !== (a = o.from) && void 0 !== a ? a : t.get(),
          l = Zu(e, n);
        "none" === s && l && "string" === typeof n
          ? (s = pc(e, n))
          : bc(s) && "string" === typeof n
          ? (s = xc(n))
          : !Array.isArray(n) && bc(n) && "string" === typeof s && (n = xc(s));
        var u = Zu(e, s);
        return (
          "You are trying to animate "
            .concat(e, ' from "')
            .concat(s, '" to "')
            .concat(n, '". ')
            .concat(
              s,
              " is not an animatable value - to enable this animation set "
            )
            .concat(s, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          u && l && !1 !== o.type
            ? function () {
                var r = {
                  from: s,
                  to: n,
                  velocity: t.getVelocity(),
                  onComplete: i,
                  onUpdate: function (e) {
                    return t.set(e);
                  },
                };
                return "inertia" === o.type || "decay" === o.type
                  ? (function (e) {
                      var t,
                        n = e.from,
                        r = void 0 === n ? 0 : n,
                        i = e.velocity,
                        a = void 0 === i ? 0 : i,
                        o = e.min,
                        s = e.max,
                        l = e.power,
                        u = void 0 === l ? 0.8 : l,
                        c = e.timeConstant,
                        f = void 0 === c ? 750 : c,
                        d = e.bounceStiffness,
                        p = void 0 === d ? 500 : d,
                        h = e.bounceDamping,
                        v = void 0 === h ? 10 : h,
                        m = e.restDelta,
                        g = void 0 === m ? 1 : m,
                        y = e.modifyTarget,
                        b = e.driver,
                        x = e.onUpdate,
                        w = e.onComplete,
                        _ = e.onStop;
                      function k(e) {
                        return (
                          (void 0 !== o && e < o) || (void 0 !== s && e > s)
                        );
                      }
                      function S(e) {
                        return void 0 === o
                          ? s
                          : void 0 === s || Math.abs(o - e) < Math.abs(s - e)
                          ? o
                          : s;
                      }
                      function T(e) {
                        null === t || void 0 === t || t.stop(),
                          (t = Uu(
                            Object.assign(Object.assign({}, e), {
                              driver: b,
                              onUpdate: function (t) {
                                var n;
                                null === x || void 0 === x || x(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: w,
                              onStop: _,
                            })
                          ));
                      }
                      function E(e) {
                        T(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: p,
                              damping: v,
                              restDelta: g,
                            },
                            e
                          )
                        );
                      }
                      if (k(r)) E({ from: r, velocity: a, to: S(r) });
                      else {
                        var C = u * a + r;
                        "undefined" !== typeof y && (C = y(C));
                        var P,
                          j,
                          M = S(C),
                          A = M === o ? -1 : 1;
                        T({
                          type: "decay",
                          from: r,
                          velocity: a,
                          timeConstant: f,
                          power: u,
                          restDelta: g,
                          modifyTarget: y,
                          onUpdate: k(C)
                            ? function (e) {
                                (P = j),
                                  (j = e),
                                  (a = rl(e - P, el().delta)),
                                  ((1 === A && e > M) || (-1 === A && e < M)) &&
                                    E({ from: e, to: M, velocity: a });
                              }
                            : void 0,
                        });
                      }
                      return {
                        stop: function () {
                          return null === t || void 0 === t ? void 0 : t.stop();
                        },
                      };
                    })(fs(fs({}, r), o))
                  : Uu(
                      fs(fs({}, gc(o, r, e)), {
                        onUpdate: function (e) {
                          var t;
                          r.onUpdate(e),
                            null === (t = o.onUpdate) ||
                              void 0 === t ||
                              t.call(o, e);
                        },
                        onComplete: function () {
                          var e;
                          r.onComplete(),
                            null === (e = o.onComplete) ||
                              void 0 === e ||
                              e.call(o);
                        },
                      })
                    );
              }
            : function () {
                var e,
                  r,
                  a = vc(n);
                return (
                  t.set(a),
                  i(),
                  null ===
                    (e = null === o || void 0 === o ? void 0 : o.onUpdate) ||
                    void 0 === e ||
                    e.call(o, a),
                  null ===
                    (r = null === o || void 0 === o ? void 0 : o.onComplete) ||
                    void 0 === r ||
                    r.call(o),
                  { stop: function () {} }
                );
              }
        );
      }
      function bc(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function xc(e) {
        return "number" === typeof e ? 0 : pc("", e);
      }
      function wc(e, t) {
        return e[t] || e.default || e;
      }
      function _c(e, t, n, r) {
        return (
          void 0 === r && (r = {}),
          hc && (r = { type: !1 }),
          t.start(function (i) {
            var a,
              o,
              s = yc(e, t, n, r, i),
              l = (function (e, t) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (wc(e, t) || {}).delay) && void 0 !== n
                      ? n
                      : e.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, e),
              u = function () {
                return (o = s());
              };
            return (
              l ? (a = window.setTimeout(u, Bu(l))) : u(),
              function () {
                clearTimeout(a), null === o || void 0 === o || o.stop();
              }
            );
          })
        );
      }
      var kc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Sc = kc.length,
        Tc = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        Ec = function (e) {
          return "number" === typeof e || Il.test(e);
        };
      function Cc(e, t) {
        var n;
        return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
      }
      var Pc = Mc(0, 0.5, Pu),
        jc = Mc(0.5, 0.95, ku);
      function Mc(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(bl(e, t, r));
        };
      }
      function Ac(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function Oc(e, t) {
        Ac(e.x, t.x), Ac(e.y, t.y);
      }
      function Lc(e) {
        return void 0 === e || 1 === e;
      }
      function Nc(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !Lc(t) || !Lc(n) || !Lc(r);
      }
      function Rc(e) {
        return (
          Nc(e) ||
          Dc(e.x) ||
          Dc(e.y) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY
        );
      }
      function Dc(e) {
        return e && "0%" !== e;
      }
      function zc(e, t, n) {
        return n + t * (e - n);
      }
      function Fc(e, t, n, r, i) {
        return void 0 !== i && (e = zc(e, i, r)), zc(e, n, r) + t;
      }
      function Ic(e, t, n, r, i) {
        void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          (e.min = Fc(e.min, t, n, r, i)),
          (e.max = Fc(e.max, t, n, r, i));
      }
      function Vc(e, t) {
        var n = t.x,
          r = t.y;
        Ic(e.x, n.translate, n.scale, n.originPoint),
          Ic(e.y, r.translate, r.scale, r.originPoint);
      }
      function Uc(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function Bc(e, t, n) {
        var r = ps(n, 3),
          i = r[0],
          a = r[1],
          o = r[2],
          s = void 0 !== t[o] ? t[o] : 0.5,
          l = nl(e.min, e.max, s);
        Ic(e, t[i], t[a], l, t.scale);
      }
      var Hc = ["x", "scaleX", "originX"],
        Wc = ["y", "scaleY", "originY"];
      function Yc(e, t) {
        Bc(e.x, t, Hc), Bc(e.y, t, Wc);
      }
      var Xc = function (e) {
          return e.hasOwnProperty("x") && e.hasOwnProperty("y");
        },
        qc = function (e) {
          return Xc(e) && e.hasOwnProperty("z");
        },
        $c = function (e, t) {
          return Math.abs(e - t);
        };
      function Qc(e, t) {
        if (ou(e) && ou(t)) return $c(e, t);
        if (Xc(e) && Xc(t)) {
          var n = $c(e.x, t.x),
            r = $c(e.y, t.y),
            i = qc(e) && qc(t) ? $c(e.z, t.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      function Gc(e) {
        return e.max - e.min;
      }
      function Kc(e, t, n) {
        return (
          void 0 === t && (t = 0), void 0 === n && (n = 0.01), Qc(e, t) < n
        );
      }
      function Zc(e, t, n, r) {
        void 0 === r && (r = 0.5),
          (e.origin = r),
          (e.originPoint = nl(t.min, t.max, e.origin)),
          (e.scale = Gc(n) / Gc(t)),
          (Kc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = nl(n.min, n.max, e.origin) - e.originPoint),
          (Kc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function Jc(e, t, n, r) {
        Zc(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          Zc(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function ef(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + Gc(t));
      }
      function tf(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + Gc(t));
      }
      function nf(e, t, n) {
        tf(e.x, t.x, n.x), tf(e.y, t.y, n.y);
      }
      function rf(e, t, n, r, i) {
        return (
          (e = zc((e -= t), 1 / n, r)), void 0 !== i && (e = zc(e, 1 / i, r)), e
        );
      }
      function af(e, t, n, r, i) {
        var a = ps(n, 3),
          o = a[0],
          s = a[1],
          l = a[2];
        !(function (e, t, n, r, i, a, o) {
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === a && (a = e),
            void 0 === o && (o = e),
            Fl.test(t) &&
              ((t = parseFloat(t)), (t = nl(o.min, o.max, t / 100) - o.min)),
            "number" === typeof t)
          ) {
            var s = nl(a.min, a.max, r);
            e === a && (s -= t),
              (e.min = rf(e.min, t, n, s, i)),
              (e.max = rf(e.max, t, n, s, i));
          }
        })(e, t[o], t[s], t[l], t.scale, r, i);
      }
      var of = ["x", "scaleX", "originX"],
        sf = ["y", "scaleY", "originY"];
      function lf(e, t, n, r) {
        af(
          e.x,
          t,
          of,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          af(
            e.y,
            t,
            sf,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function uf(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function cf(e) {
        return uf(e.x) && uf(e.y);
      }
      function ff(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      var df = (function () {
          function e() {
            this.members = [];
          }
          return (
            (e.prototype.add = function (e) {
              il(this.members, e), e.scheduleRender();
            }),
            (e.prototype.remove = function (e) {
              if (
                (al(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead)
              ) {
                var t = this.members[this.members.length - 1];
                t && this.promote(t);
              }
            }),
            (e.prototype.relegate = function (e) {
              var t,
                n = this.members.findIndex(function (t) {
                  return e === t;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var i = this.members[r];
                if (!1 !== i.isPresent) {
                  t = i;
                  break;
                }
              }
              return !!t && (this.promote(t), !0);
            }),
            (e.prototype.promote = function (e, t) {
              var n,
                r = this.lead;
              e !== r &&
                ((this.prevLead = r),
                (this.lead = e),
                e.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  e.scheduleRender(),
                  (e.resumeFrom = r),
                  t && (e.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((e.snapshot = r.snapshot),
                    (e.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (e.snapshot.isShared = !0)),
                  (null === (n = e.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (e.isLayoutDirty = !0),
                  !1 === e.options.crossfade && r.hide()));
            }),
            (e.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (e) {
                var t, n, r, i, a;
                null === (n = (t = e.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(t),
                  null ===
                    (a =
                      null === (r = e.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === a ||
                    a.call(i);
              });
            }),
            (e.prototype.scheduleRender = function () {
              this.members.forEach(function (e) {
                e.instance && e.scheduleRender(!1);
              });
            }),
            (e.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            e
          );
        })(),
        pf = {};
      function hf(e, t, n) {
        var r = e.x.translate / t.x,
          i = e.y.translate / t.y,
          a = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (n) {
          var o = n.rotate,
            s = n.rotateX,
            l = n.rotateY;
          o && (a += "rotate(".concat(o, "deg) ")),
            s && (a += "rotateX(".concat(s, "deg) ")),
            l && (a += "rotateY(".concat(l, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (a += "scale(".concat(e.x.scale, ", ").concat(e.y.scale, ")"))
          ? "none"
          : a;
      }
      function vf(e) {
        return [e("x"), e("y")];
      }
      var mf = ["", "X", "Y", "Z"],
        gf = ["transformPerspective", "x", "y", "z"];
      function yf(e, t) {
        return gf.indexOf(e) - gf.indexOf(t);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (e) {
        return mf.forEach(function (t) {
          return gf.push(e + t);
        });
      });
      var bf = new Set(gf);
      function xf(e) {
        return bf.has(e);
      }
      var wf = new Set(["originX", "originY", "originZ"]);
      function _f(e) {
        return wf.has(e);
      }
      var kf = function (e, t) {
          return e.depth - t.depth;
        },
        Sf = (function () {
          function e() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (e.prototype.add = function (e) {
              il(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.remove = function (e) {
              al(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.forEach = function (e) {
              this.isDirty && this.children.sort(kf),
                (this.isDirty = !1),
                this.children.forEach(e);
            }),
            e
          );
        })();
      function Tf(e) {
        var t,
          n = ul(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && "object" === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var Ef = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Cf(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          i = e.resetTransform;
        return (function () {
          function e(e, t, r) {
            var i = this;
            void 0 === t && (t = {}),
              void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                i.nodes.forEach(Nf), i.nodes.forEach(Rf);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = e),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? hs(hs([], ps(r.path), !1), [r], !1) : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              e && this.root.registerPotentialNode(e, this);
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Sf());
          }
          return (
            (e.prototype.addEventListener = function (e, t) {
              return (
                this.eventHandlers.has(e) ||
                  this.eventHandlers.set(e, new ol()),
                this.eventHandlers.get(e).add(t)
              );
            }),
            (e.prototype.notifyListeners = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = this.eventHandlers.get(e);
              null === r ||
                void 0 === r ||
                r.notify.apply(r, hs([], ps(t), !1));
            }),
            (e.prototype.hasListeners = function (e) {
              return this.eventHandlers.has(e);
            }),
            (e.prototype.registerPotentialNode = function (e, t) {
              this.potentialNodes.set(e, t);
            }),
            (e.prototype.mount = function (e, n) {
              var r,
                i = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
                  (this.instance = e);
                var a = this.options,
                  o = a.layoutId,
                  s = a.layout,
                  l = a.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(e),
                  this.root.nodes.add(this),
                  null === (r = this.parent) ||
                    void 0 === r ||
                    r.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (s || o) && (this.isLayoutDirty = !0),
                  t)
                ) {
                  var u,
                    c = function () {
                      return (i.root.updateBlockedByResize = !1);
                    };
                  t(e, function () {
                    (i.root.updateBlockedByResize = !0),
                      clearTimeout(u),
                      (u = window.setTimeout(c, 250)),
                      Ef.hasAnimatedSinceResize &&
                        ((Ef.hasAnimatedSinceResize = !1), i.nodes.forEach(Lf));
                  });
                }
                o && this.root.registerSharedNode(o, this),
                  !1 !== this.options.animate &&
                    l &&
                    (o || s) &&
                    this.addEventListener("didUpdate", function (e) {
                      var t,
                        n,
                        r,
                        a,
                        o,
                        s = e.delta,
                        u = e.hasLayoutChanged,
                        c = e.hasRelativeTargetChanged,
                        f = e.layout;
                      if (i.isTreeAnimationBlocked())
                        return (
                          (i.target = void 0), void (i.relativeTarget = void 0)
                        );
                      var d =
                          null !==
                            (n =
                              null !== (t = i.options.transition) &&
                              void 0 !== t
                                ? t
                                : l.getDefaultTransition()) && void 0 !== n
                            ? n
                            : Uf,
                        p = l.getProps(),
                        h = p.onLayoutAnimationStart,
                        v = p.onLayoutAnimationComplete,
                        m = !i.targetLayout || !ff(i.targetLayout, f) || c,
                        g = !u && c;
                      if (
                        (null === (r = i.resumeFrom) || void 0 === r
                          ? void 0
                          : r.instance) ||
                        g ||
                        (u && (m || !i.currentAnimation))
                      ) {
                        i.resumeFrom &&
                          ((i.resumingFrom = i.resumeFrom),
                          (i.resumingFrom.resumingFrom = void 0)),
                          i.setAnimationOrigin(s, g);
                        var y = fs(fs({}, wc(d, "layout")), {
                          onPlay: h,
                          onComplete: v,
                        });
                        l.shouldReduceMotion && ((y.delay = 0), (y.type = !1)),
                          i.startAnimation(y);
                      } else u || 0 !== i.animationProgress || i.finishAnimation(), i.isLead() && (null === (o = (a = i.options).onExitComplete) || void 0 === o || o.call(a));
                      i.targetLayout = f;
                    });
              }
            }),
            (e.prototype.unmount = function () {
              var e, t;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (e = this.getStack()) ||
                  void 0 === e ||
                  e.remove(this),
                null === (t = this.parent) ||
                  void 0 === t ||
                  t.children.delete(this),
                (this.instance = void 0),
                Qs.preRender(this.updateProjection);
            }),
            (e.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (e.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (e.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (e.prototype.isTreeAnimationBlocked = function () {
              var e;
              return (
                this.isAnimationBlocked ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (e.prototype.startUpdate = function () {
              var e;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (e = this.nodes) || void 0 === e || e.forEach(Df));
            }),
            (e.prototype.willUpdate = function (e) {
              var t, n, r;
              if ((void 0 === e && (e = !0), this.root.isUpdateBlocked()))
                null === (n = (t = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(t);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var i = 0; i < this.path.length; i++) {
                  var a = this.path[i];
                  (a.shouldResetTransform = !0), a.updateScroll();
                }
                var o = this.options,
                  s = o.layoutId,
                  l = o.layout;
                if (void 0 !== s || l) {
                  var u =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === u || void 0 === u
                      ? void 0
                      : u(this.latestValues, "")),
                    this.updateSnapshot(),
                    e && this.notifyListeners("willUpdate");
                }
              }
            }),
            (e.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(Af)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(Bf),
                  this.potentialNodes.clear()),
                this.nodes.forEach(Of),
                this.nodes.forEach(Pf),
                this.nodes.forEach(jf),
                this.clearAllSnapshots(),
                Gs.update(),
                Gs.preRender(),
                Gs.render());
            }),
            (e.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(Mf), this.sharedNodes.forEach(zf);
            }),
            (e.prototype.scheduleUpdateProjection = function () {
              tl.preRender(this.updateProjection, !1, !0);
            }),
            (e.prototype.scheduleCheckAfterUnmount = function () {
              var e = this;
              tl.postRender(function () {
                e.isLayoutDirty
                  ? e.root.didUpdate()
                  : e.root.checkUpdateFailed();
              });
            }),
            (e.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var e = this.measure(),
                  t = this.removeTransform(this.removeElementScroll(e));
                Wf(t),
                  (this.snapshot = {
                    measured: e,
                    layout: t,
                    latestValues: {},
                  });
              }
            }),
            (e.prototype.updateLayout = function () {
              var e;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t = 0; t < this.path.length; t++) {
                    this.path[t].updateScroll();
                  }
                var n = this.measure();
                Wf(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (e = this.options.visualElement) ||
                    void 0 === e ||
                    e.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (e.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = r(this.instance));
            }),
            (e.prototype.resetTransform = function () {
              var e;
              if (i) {
                var t = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !cf(this.projectionDelta),
                  r =
                    null === (e = this.options.visualElement) || void 0 === e
                      ? void 0
                      : e.getProps().transformTemplate,
                  a =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  o = a !== this.prevTransformTemplateValue;
                t &&
                  (n || Rc(this.latestValues) || o) &&
                  (i(this.instance, a),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (e.prototype.measure = function () {
              var e = this.options.visualElement;
              if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var t = e.measureViewportBox(),
                n = this.root.scroll;
              return n && (Uc(t.x, n.x), Uc(t.y, n.y)), t;
            }),
            (e.prototype.removeElementScroll = function (e) {
              var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Oc(t, e);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  a = r.options;
                r !== this.root &&
                  i &&
                  a.layoutScroll &&
                  (Uc(t.x, i.x), Uc(t.y, i.y));
              }
              return t;
            }),
            (e.prototype.applyTransform = function (e, t) {
              void 0 === t && (t = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Oc(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !t &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  Yc(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  Rc(i.latestValues) && Yc(n, i.latestValues);
              }
              return Rc(this.latestValues) && Yc(n, this.latestValues), n;
            }),
            (e.prototype.removeTransform = function (e) {
              var t,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Oc(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && Rc(i.latestValues)) {
                  Nc(i.latestValues) && i.updateSnapshot();
                  var a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Oc(a, i.measure()),
                    lf(
                      n,
                      i.latestValues,
                      null === (t = i.snapshot) || void 0 === t
                        ? void 0
                        : t.layout,
                      a
                    );
                }
              }
              return Rc(this.latestValues) && lf(n, this.latestValues), n;
            }),
            (e.prototype.setTargetDelta = function (e) {
              (this.targetDelta = e), this.root.scheduleUpdateProjection();
            }),
            (e.prototype.setOptions = function (e) {
              var t;
              this.options = fs(fs(fs({}, this.options), e), {
                crossfade: null === (t = e.crossfade) || void 0 === t || t,
              });
            }),
            (e.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (e.prototype.resolveTargetDelta = function () {
              var e,
                t,
                n,
                r,
                i = this.options,
                a = i.layout,
                o = i.layoutId;
              this.layout &&
                (a || o) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    nf(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    Oc(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (e = this.relativeParent) || void 0 === e
                    ? void 0
                    : e.target)
                    ? ((t = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      ef(t.x, n.x, r.x),
                      ef(t.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : Oc(this.target, this.layout.actual),
                      Vc(this.target, this.targetDelta))
                    : Oc(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      nf(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      Oc(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (e.prototype.getClosestProjectingParent = function () {
              if (this.parent && !Rc(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (e.prototype.calcProjection = function () {
              var e,
                t = this.options,
                n = t.layout,
                r = t.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                Oc(this.layoutCorrected, this.layout.actual),
                  (function (e, t, n, r) {
                    var i, a;
                    void 0 === r && (r = !1);
                    var o = n.length;
                    if (o) {
                      var s, l;
                      t.x = t.y = 1;
                      for (var u = 0; u < o; u++)
                        (l = (s = n[u]).projectionDelta),
                          "contents" !==
                            (null ===
                              (a =
                                null === (i = s.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === a
                              ? void 0
                              : a.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              Yc(e, { x: -s.scroll.x, y: -s.scroll.y }),
                            l &&
                              ((t.x *= l.x.scale),
                              (t.y *= l.y.scale),
                              Vc(e, l)),
                            r && Rc(s.latestValues) && Yc(e, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var a = i.target;
                if (a) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var o = this.treeScale.x,
                    s = this.treeScale.y,
                    l = this.projectionTransform;
                  Jc(
                    this.projectionDelta,
                    this.layoutCorrected,
                    a,
                    this.latestValues
                  ),
                    (this.projectionTransform = hf(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === l &&
                      this.treeScale.x === o &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", a));
                }
              }
            }),
            (e.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (e.prototype.show = function () {
              this.isVisible = !0;
            }),
            (e.prototype.scheduleRender = function (e) {
              var t, n, r;
              void 0 === e && (e = !0),
                null === (n = (t = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(t),
                e &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (e.prototype.setAnimationOrigin = function (e, t) {
              var n,
                r = this;
              void 0 === t && (t = !1);
              var i = this.snapshot,
                a =
                  (null === i || void 0 === i ? void 0 : i.latestValues) || {},
                o = fs({}, this.latestValues),
                s = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !t);
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                u = null === i || void 0 === i ? void 0 : i.isShared,
                c =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                f = Boolean(
                  u &&
                    !c &&
                    !0 === this.options.crossfade &&
                    !this.path.some(Vf)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (t) {
                  var n,
                    i,
                    d,
                    p,
                    h,
                    v = t / 1e3;
                  Ff(s.x, e.x, v),
                    Ff(s.y, e.y, v),
                    r.setTargetDelta(s),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (n = r.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (nf(l, r.layout.actual, r.relativeParent.layout.actual),
                      (i = r.relativeTarget),
                      (d = r.relativeTargetOrigin),
                      (p = l),
                      (h = v),
                      If(i.x, d.x, p.x, h),
                      If(i.y, d.y, p.y, h)),
                    u &&
                      ((r.animationValues = o),
                      (function (e, t, n, r, i, a) {
                        var o, s, l, u;
                        i
                          ? ((e.opacity = nl(
                              0,
                              null !== (o = n.opacity) && void 0 !== o ? o : 1,
                              Pc(r)
                            )),
                            (e.opacityExit = nl(
                              null !== (s = t.opacity) && void 0 !== s ? s : 1,
                              0,
                              jc(r)
                            )))
                          : a &&
                            (e.opacity = nl(
                              null !== (l = t.opacity) && void 0 !== l ? l : 1,
                              null !== (u = n.opacity) && void 0 !== u ? u : 1,
                              r
                            ));
                        for (var c = 0; c < Sc; c++) {
                          var f = "border".concat(kc[c], "Radius"),
                            d = Cc(t, f),
                            p = Cc(n, f);
                          (void 0 === d && void 0 === p) ||
                            (d || (d = 0),
                            p || (p = 0),
                            0 === d || 0 === p || Ec(d) === Ec(p)
                              ? ((e[f] = Math.max(nl(Tc(d), Tc(p), r), 0)),
                                (Fl.test(p) || Fl.test(d)) && (e[f] += "%"))
                              : (e[f] = p));
                        }
                        (t.rotate || n.rotate) &&
                          (e.rotate = nl(t.rotate || 0, n.rotate || 0, r));
                      })(o, a, r.latestValues, v, f, c)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = v);
                }),
                this.mixTargetDelta(0);
            }),
            (e.prototype.startAnimation = function (e) {
              var t,
                n,
                r = this;
              this.notifyListeners("animationStart"),
                null === (t = this.currentAnimation) ||
                  void 0 === t ||
                  t.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (Qs.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = tl.update(function () {
                  (Ef.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (function (e, t, n) {
                      void 0 === n && (n = {});
                      var r = ul(e) ? e : ll(e);
                      return (
                        _c("", r, t, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      fs(fs({}, e), {
                        onUpdate: function (t) {
                          var n;
                          r.mixTargetDelta(t),
                            null === (n = e.onUpdate) ||
                              void 0 === n ||
                              n.call(e, t);
                        },
                        onComplete: function () {
                          var t;
                          null === (t = e.onComplete) ||
                            void 0 === t ||
                            t.call(e),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (e.prototype.completeAnimation = function () {
              var e;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (e = this.getStack()) ||
                  void 0 === e ||
                  e.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (e.prototype.finishAnimation = function () {
              var e;
              this.currentAnimation &&
                (null === (e = this.mixTargetDelta) ||
                  void 0 === e ||
                  e.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (e.prototype.applyTransformsToTarget = function () {
              var e = this.getLead(),
                t = e.targetWithTransforms,
                n = e.target,
                r = e.layout,
                i = e.latestValues;
              t &&
                n &&
                r &&
                (Oc(t, n),
                Yc(t, i),
                Jc(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                ));
            }),
            (e.prototype.registerSharedNode = function (e, t) {
              var n, r, i;
              this.sharedNodes.has(e) || this.sharedNodes.set(e, new df()),
                this.sharedNodes.get(e).add(t),
                t.promote({
                  transition:
                    null === (n = t.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = t.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, t),
                });
            }),
            (e.prototype.isLead = function () {
              var e = this.getStack();
              return !e || e.lead === this;
            }),
            (e.prototype.getLead = function () {
              var e;
              return (
                (this.options.layoutId &&
                  (null === (e = this.getStack()) || void 0 === e
                    ? void 0
                    : e.lead)) ||
                this
              );
            }),
            (e.prototype.getPrevLead = function () {
              var e;
              return this.options.layoutId
                ? null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.prevLead
                : void 0;
            }),
            (e.prototype.getStack = function () {
              var e = this.options.layoutId;
              if (e) return this.root.sharedNodes.get(e);
            }),
            (e.prototype.promote = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.needsReset,
                r = t.transition,
                i = t.preserveFollowOpacity,
                a = this.getStack();
              a && a.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (e.prototype.relegate = function () {
              var e = this.getStack();
              return !!e && e.relegate(this);
            }),
            (e.prototype.resetRotation = function () {
              var e = this.options.visualElement;
              if (e) {
                for (var t = !1, n = {}, r = 0; r < mf.length; r++) {
                  var i = "rotate" + mf[r];
                  e.getStaticValue(i) &&
                    ((t = !0),
                    (n[i] = e.getStaticValue(i)),
                    e.setStaticValue(i, 0));
                }
                if (t) {
                  for (var i in (null === e || void 0 === e || e.syncRender(),
                  n))
                    e.setStaticValue(i, n[i]);
                  e.scheduleRender();
                }
              }
            }),
            (e.prototype.getProjectionStyles = function (e) {
              var t, n, r, i, a, o;
              void 0 === e && (e = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var l =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = Tf(e.pointerEvents) || ""),
                  (s.transform = l ? l(this.latestValues, "") : "none"),
                  s
                );
              var u = this.getLead();
              if (!this.projectionDelta || !this.layout || !u.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = Tf(e.pointerEvents) || "")),
                  this.hasProjected &&
                    !Rc(this.latestValues) &&
                    ((c.transform = l ? l({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var f = u.animationValues || u.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = hf(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  f
                )),
                l && (s.transform = l(f, s.transform));
              var d = this.projectionDelta,
                p = d.x,
                h = d.y;
              for (var v in ((s.transformOrigin = ""
                .concat(100 * p.origin, "% ")
                .concat(100 * h.origin, "% 0")),
              u.animationValues
                ? (s.opacity =
                    u === this
                      ? null !==
                          (i =
                            null !== (r = f.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : f.opacityExit)
                : (s.opacity =
                    u === this
                      ? null !== (a = f.opacity) && void 0 !== a
                        ? a
                        : ""
                      : null !== (o = f.opacityExit) && void 0 !== o
                      ? o
                      : 0),
              pf))
                if (void 0 !== f[v]) {
                  var m = pf[v],
                    g = m.correct,
                    y = m.applyTo,
                    b = g(f[v], u);
                  if (y) for (var x = y.length, w = 0; w < x; w++) s[y[w]] = b;
                  else s[v] = b;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    u === this ? Tf(e.pointerEvents) || "" : "none"),
                s
              );
            }),
            (e.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (e.prototype.resetTree = function () {
              this.root.nodes.forEach(function (e) {
                var t;
                return null === (t = e.currentAnimation) || void 0 === t
                  ? void 0
                  : t.stop();
              }),
                this.root.nodes.forEach(Af),
                this.root.sharedNodes.clear();
            }),
            e
          );
        })();
      }
      function Pf(e) {
        e.updateLayout();
      }
      function jf(e) {
        var t,
          n,
          r,
          i,
          a =
            null !==
              (n =
                null === (t = e.resumeFrom) || void 0 === t
                  ? void 0
                  : t.snapshot) && void 0 !== n
              ? n
              : e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
          var o = e.layout,
            s = o.actual,
            l = o.measured;
          "size" === e.options.animationType
            ? vf(function (e) {
                var t = a.isShared ? a.measured[e] : a.layout[e],
                  n = Gc(t);
                (t.min = s[e].min), (t.max = t.min + n);
              })
            : "position" === e.options.animationType &&
              vf(function (e) {
                var t = a.isShared ? a.measured[e] : a.layout[e],
                  n = Gc(s[e]);
                t.max = t.min + n;
              });
          var u = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          Jc(u, s, a.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          a.isShared
            ? Jc(c, e.applyTransform(l, !0), a.measured)
            : Jc(c, s, a.layout);
          var f = !cf(u),
            d = !1;
          if (
            !e.resumeFrom &&
            ((e.relativeParent = e.getClosestProjectingParent()),
            e.relativeParent && !e.relativeParent.resumeFrom)
          ) {
            var p = e.relativeParent,
              h = p.snapshot,
              v = p.layout;
            if (h && v) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              nf(m, a.layout, h.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              nf(g, s, v.actual), ff(m, g) || (d = !0);
            }
          }
          e.notifyListeners("didUpdate", {
            layout: s,
            snapshot: a,
            delta: c,
            layoutDelta: u,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: d,
          });
        } else
          e.isLead() &&
            (null === (i = (r = e.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        e.options.transition = void 0;
      }
      function Mf(e) {
        e.clearSnapshot();
      }
      function Af(e) {
        e.clearMeasurements();
      }
      function Of(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notifyBeforeLayoutMeasure(),
          e.resetTransform();
      }
      function Lf(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function Nf(e) {
        e.resolveTargetDelta();
      }
      function Rf(e) {
        e.calcProjection();
      }
      function Df(e) {
        e.resetRotation();
      }
      function zf(e) {
        e.removeLeadSnapshot();
      }
      function Ff(e, t, n) {
        (e.translate = nl(t.translate, 0, n)),
          (e.scale = nl(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function If(e, t, n, r) {
        (e.min = nl(t.min, n.min, r)), (e.max = nl(t.max, n.max, r));
      }
      function Vf(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var Uf = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Bf(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var i = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        i && e.mount(i, !0);
      }
      function Hf(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function Wf(e) {
        Hf(e.x), Hf(e.y);
      }
      var Yf = 1;
      var Xf = (0, t.createContext)({}),
        qf = (0, t.createContext)({});
      var $f = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          cs(t, e),
          (t.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (t.prototype.componentDidUpdate = function () {}),
          (t.prototype.updateProps = function () {
            var e = this.props,
              t = e.visualElement,
              n = e.props;
            t && t.setProps(n);
          }),
          (t.prototype.render = function () {
            return this.props.children;
          }),
          t
        );
      })(t.Component);
      function Qf(e) {
        var n = e.preloadedFeatures,
          r = e.createVisualElement,
          i = e.projectionNodeConstructor,
          a = e.useRender,
          o = e.useVisualState,
          s = e.Component;
        return (
          n &&
            (function (e) {
              for (var t in e)
                null !== e[t] &&
                  ("projectionNodeConstructor" === t
                    ? (ms.projectionNodeConstructor = e[t])
                    : (ms[t].Component = e[t]));
            })(n),
          (0, t.forwardRef)(function (e, n) {
            var l = (function (e) {
              var n,
                r = e.layoutId,
                i =
                  null === (n = (0, t.useContext)(Xf)) || void 0 === n
                    ? void 0
                    : n.id;
              return i && void 0 !== r ? i + "-" + r : r;
            })(e);
            e = fs(fs({}, e), { layoutId: l });
            var u = (0, t.useContext)(xs),
              c = null,
              f = Ds(e),
              d = u.isStatic
                ? void 0
                : Fs(function () {
                    if (Ef.hasEverUpdated) return Yf++;
                  }),
              p = o(e, u.isStatic);
            return (
              !u.isStatic &&
                ks &&
                ((f.visualElement = Ps(s, p, fs(fs({}, u), e), r)),
                (function (e, n, r, i) {
                  var a,
                    o = n.layoutId,
                    s = n.layout,
                    l = n.drag,
                    u = n.dragConstraints,
                    c = n.layoutScroll,
                    f = (0, t.useContext)(qf);
                  i &&
                    r &&
                    !(null === r || void 0 === r ? void 0 : r.projection) &&
                    ((r.projection = new i(
                      e,
                      r.getLatestValues(),
                      null === (a = r.parent) || void 0 === a
                        ? void 0
                        : a.projection
                    )),
                    r.projection.setOptions({
                      layoutId: o,
                      layout: s,
                      alwaysMeasureLayout: Boolean(l) || (u && js(u)),
                      visualElement: r,
                      scheduleRender: function () {
                        return r.scheduleRender();
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: f,
                      layoutScroll: c,
                    }));
                })(d, e, f.visualElement, i || ms.projectionNodeConstructor),
                (c = (function (e, n, r) {
                  var i = [];
                  if (((0, t.useContext)(gs), !n)) return null;
                  for (var a = 0; a < bs; a++) {
                    var o = ys[a],
                      s = ms[o],
                      l = s.isEnabled,
                      u = s.Component;
                    l(e) &&
                      u &&
                      i.push(
                        t.createElement(
                          u,
                          fs({ key: o }, e, { visualElement: n })
                        )
                      );
                  }
                  return i;
                })(e, f.visualElement))),
              t.createElement(
                $f,
                { visualElement: f.visualElement, props: fs(fs({}, u), e) },
                c,
                t.createElement(
                  ws.Provider,
                  { value: f },
                  a(
                    s,
                    e,
                    d,
                    (function (e, n, r) {
                      return (0, t.useCallback)(
                        function (t) {
                          var i;
                          t &&
                            (null === (i = e.mount) ||
                              void 0 === i ||
                              i.call(e, t)),
                            n && (t ? n.mount(t) : n.unmount()),
                            r &&
                              ("function" === typeof r
                                ? r(t)
                                : js(r) && (r.current = t));
                        },
                        [n]
                      );
                    })(p, f.visualElement, n),
                    p,
                    u.isStatic,
                    f.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function Gf(e) {
        function t(t, n) {
          return void 0 === n && (n = {}), Qf(e(t, n));
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var Kf = [
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
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function Zf(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(Kf.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      function Jf(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          xf(e) ||
          _f(e) ||
          ((n || void 0 !== r) && (!!pf[e] || "opacity" === e))
        );
      }
      var ed = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function td(e) {
        return e.startsWith("--");
      }
      var nd = function (e, t) {
        return t && "number" === typeof e ? t.transform(e) : e;
      };
      function rd(e, t, n, r) {
        var i,
          a = e.style,
          o = e.vars,
          s = e.transform,
          l = e.transformKeys,
          u = e.transformOrigin;
        l.length = 0;
        var c = !1,
          f = !1,
          d = !0;
        for (var p in t) {
          var h = t[p];
          if (td(p)) o[p] = h;
          else {
            var v = cc[p],
              m = nd(h, v);
            if (xf(p)) {
              if (((c = !0), (s[p] = m), l.push(p), !d)) continue;
              h !== (null !== (i = v.default) && void 0 !== i ? i : 0) &&
                (d = !1);
            } else _f(p) ? ((u[p] = m), (f = !0)) : (a[p] = m);
          }
        }
        c
          ? (a.transform = (function (e, t, n, r) {
              var i = e.transform,
                a = e.transformKeys,
                o = t.enableHardwareAcceleration,
                s = void 0 === o || o,
                l = t.allowTransformNone,
                u = void 0 === l || l,
                c = "";
              a.sort(yf);
              for (var f = !1, d = a.length, p = 0; p < d; p++) {
                var h = a[p];
                (c += "".concat(ed[h] || h, "(").concat(i[h], ") ")),
                  "z" === h && (f = !0);
              }
              return (
                !f && s ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(i, n ? "" : c)) : u && n && (c = "none"),
                c
              );
            })(e, n, d, r))
          : r
          ? (a.transform = r({}, ""))
          : !t.transform && a.transform && (a.transform = "none"),
          f &&
            (a.transformOrigin = (function (e) {
              var t = e.originX,
                n = void 0 === t ? "50%" : t,
                r = e.originY,
                i = void 0 === r ? "50%" : r,
                a = e.originZ,
                o = void 0 === a ? 0 : a;
              return "".concat(n, " ").concat(i, " ").concat(o);
            })(u));
      }
      var id = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function ad(e, t, n) {
        for (var r in t) ul(t[r]) || Jf(r, n) || (e[r] = t[r]);
      }
      function od(e, n, r) {
        var i = {};
        return (
          ad(i, e.style || {}, e),
          Object.assign(
            i,
            (function (e, n, r) {
              var i = e.transformTemplate;
              return (0, t.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  rd(e, n, { enableHardwareAcceleration: !r }, i);
                  var t = e.style;
                  return fs(fs({}, e.vars), t);
                },
                [n]
              );
            })(e, n, r)
          ),
          e.transformValues && (i = e.transformValues(i)),
          i
        );
      }
      function sd(e, t, n) {
        var r = {},
          i = od(e, t, n);
        return (
          Boolean(e.drag) &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var ld = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
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
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function ud(e) {
        return ld.has(e);
      }
      var cd,
        fd = function (e) {
          return !ud(e);
        };
      try {
        (cd = require("@emotion/is-prop-valid").default) &&
          (fd = function (e) {
            return e.startsWith("on") ? !ud(e) : cd(e);
          });
      } catch (uv) {}
      function dd(e, t, n) {
        return "string" === typeof e ? e : Il.transform(t + n * e);
      }
      var pd = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        hd = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function vd(e, t, n, r) {
        var i = t.attrX,
          a = t.attrY,
          o = t.originX,
          s = t.originY,
          l = t.pathLength,
          u = t.pathSpacing,
          c = void 0 === u ? 1 : u,
          f = t.pathOffset,
          d = void 0 === f ? 0 : f;
        rd(
          e,
          ds(t, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (e.attrs = e.style),
          (e.style = {});
        var p = e.attrs,
          h = e.style,
          v = e.dimensions;
        p.transform && (v && (h.transform = p.transform), delete p.transform),
          v &&
            (void 0 !== o || void 0 !== s || h.transform) &&
            (h.transformOrigin = (function (e, t, n) {
              var r = dd(t, e.x, e.width),
                i = dd(n, e.y, e.height);
              return "".concat(r, " ").concat(i);
            })(v, void 0 !== o ? o : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== i && (p.x = i),
          void 0 !== a && (p.y = a),
          void 0 !== l &&
            (function (e, t, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (e.pathLength = 1);
              var a = i ? pd : hd;
              e[a.offset] = Il.transform(-r);
              var o = Il.transform(t),
                s = Il.transform(n);
              e[a.array] = "".concat(o, " ").concat(s);
            })(p, l, c, d, !1);
      }
      var md = function () {
        return fs(
          fs(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function gd(e, n) {
        var r = (0, t.useMemo)(
          function () {
            var t = md();
            return (
              vd(t, n, { enableHardwareAcceleration: !1 }, e.transformTemplate),
              fs(fs({}, t.attrs), { style: fs({}, t.style) })
            );
          },
          [n]
        );
        if (e.style) {
          var i = {};
          ad(i, e.style, e), (r.style = fs(fs({}, i), r.style));
        }
        return r;
      }
      function yd(e) {
        void 0 === e && (e = !1);
        return function (n, r, i, a, o, s) {
          var l = o.latestValues,
            u = (Zf(n) ? gd : sd)(r, l, s),
            c = (function (e, t, n) {
              var r = {};
              for (var i in e)
                (fd(i) ||
                  (!0 === n && ud(i)) ||
                  (!t && !ud(i)) ||
                  (e.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = e[i]);
              return r;
            })(r, "string" === typeof n, e),
            f = fs(fs(fs({}, c), u), { ref: a });
          return i && (f["data-projection-id"] = i), (0, t.createElement)(n, f);
        };
      }
      var bd = /([a-z])([A-Z])/g,
        xd = function (e) {
          return e.replace(bd, "$1-$2").toLowerCase();
        };
      function wd(e, t, n, r) {
        var i = t.style,
          a = t.vars;
        for (var o in (Object.assign(e.style, i, r && r.getProjectionStyles(n)),
        a))
          e.style.setProperty(o, a[o]);
      }
      var _d = new Set([
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
      ]);
      function kd(e, t, n, r) {
        for (var i in (wd(e, t, void 0, r), t.attrs))
          e.setAttribute(_d.has(i) ? i : xd(i), t.attrs[i]);
      }
      function Sd(e) {
        var t = e.style,
          n = {};
        for (var r in t) (ul(t[r]) || Jf(r, e)) && (n[r] = t[r]);
        return n;
      }
      function Td(e) {
        var t = Sd(e);
        for (var n in e) {
          if (ul(e[n]))
            t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n];
        }
        return t;
      }
      function Ed(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      function Cd(e, t, n, r) {
        var i = e.scrapeMotionValuesFromProps,
          a = e.createRenderState,
          o = e.onMount,
          s = { latestValues: jd(t, n, r, i), renderState: a() };
        return (
          o &&
            (s.mount = function (e) {
              return o(t, e, s);
            }),
          s
        );
      }
      var Pd = function (e) {
        return function (n, r) {
          var i = (0, t.useContext)(ws),
            a = (0, t.useContext)(_s);
          return r
            ? Cd(e, n, i, a)
            : Fs(function () {
                return Cd(e, n, i, a);
              });
        };
      };
      function jd(e, t, n, r) {
        var i = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          o = r(e);
        for (var s in o) i[s] = Tf(o[s]);
        var l = e.initial,
          u = e.animate,
          c = Ns(e),
          f = Rs(e);
        t &&
          f &&
          !c &&
          !1 !== e.inherit &&
          ((null !== l && void 0 !== l) || (l = t.initial),
          (null !== u && void 0 !== u) || (u = t.animate));
        var d = a || !1 === l,
          p = d ? u : l;
        p &&
          "boolean" !== typeof p &&
          !Ed(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (t) {
            var n = Os(e, t);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var a = ds(n, ["transitionEnd", "transition"]);
              for (var o in a) {
                var s = a[o];
                if (Array.isArray(s)) s = s[d ? s.length - 1 : 0];
                null !== s && (i[o] = s);
              }
              for (var o in r) i[o] = r[o];
            }
          });
        return i;
      }
      var Md,
        Ad = {
          useVisualState: Pd({
            scrapeMotionValuesFromProps: Td,
            createRenderState: md,
            onMount: function (e, t, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (a) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              vd(r, i, { enableHardwareAcceleration: !1 }, e.transformTemplate),
                kd(t, r);
            },
          }),
        },
        Od = {
          useVisualState: Pd({
            scrapeMotionValuesFromProps: Sd,
            createRenderState: id,
          }),
        };
      function Ld(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n, r);
          }
        );
      }
      function Nd(e, n, r, i) {
        (0, t.useEffect)(
          function () {
            var t = e.current;
            if (r && t) return Ld(t, n, r, i);
          },
          [e, n, r, i]
        );
      }
      function Rd(e) {
        return "undefined" !== typeof PointerEvent && e instanceof PointerEvent
          ? !("mouse" !== e.pointerType)
          : e instanceof MouseEvent;
      }
      function Dd(e) {
        return !!e.touches;
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.InView = "whileInView"),
          (e.Exit = "exit");
      })(Md || (Md = {}));
      var zd = { pageX: 0, pageY: 0 };
      function Fd(e, t) {
        void 0 === t && (t = "page");
        var n = e.touches[0] || e.changedTouches[0] || zd;
        return { x: n[t + "X"], y: n[t + "Y"] };
      }
      function Id(e, t) {
        return void 0 === t && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
      }
      function Vd(e, t) {
        return (
          void 0 === t && (t = "page"), { point: Dd(e) ? Fd(e, t) : Id(e, t) }
        );
      }
      var Ud = function (e, t) {
          void 0 === t && (t = !1);
          var n,
            r = function (t) {
              return e(t, Vd(t));
            };
          return t
            ? ((n = r),
              function (e) {
                var t = e instanceof MouseEvent;
                (!t || (t && 0 === e.button)) && n(e);
              })
            : r;
        },
        Bd = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        Hd = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function Wd(e) {
        return ks && null === window.onpointerdown
          ? e
          : ks && null === window.ontouchstart
          ? Hd[e]
          : ks && null === window.onmousedown
          ? Bd[e]
          : e;
      }
      function Yd(e, t, n, r) {
        return Ld(e, Wd(t), Ud(n, "pointerdown" === t), r);
      }
      function Xd(e, t, n, r) {
        return Nd(e, Wd(t), n && Ud(n, "pointerdown" === t), r);
      }
      function qd(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var $d = qd("dragHorizontal"),
        Qd = qd("dragVertical");
      function Gd(e) {
        var t = !1;
        if ("y" === e) t = Qd();
        else if ("x" === e) t = $d();
        else {
          var n = $d(),
            r = Qd();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function Kd() {
        var e = Gd(!0);
        return !e || (e(), !1);
      }
      function Zd(e, t, n) {
        return function (r, i) {
          var a;
          Rd(r) &&
            !Kd() &&
            (null === (a = e.animationState) ||
              void 0 === a ||
              a.setActive(Md.Hover, t),
            null === n || void 0 === n || n(r, i));
        };
      }
      var Jd = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement));
      };
      function ep(e) {
        return (0, t.useEffect)(function () {
          return function () {
            return e();
          };
        }, []);
      }
      var tp = new WeakMap(),
        np = new WeakMap(),
        rp = function (e) {
          var t;
          null === (t = tp.get(e.target)) || void 0 === t || t(e);
        },
        ip = function (e) {
          e.forEach(rp);
        };
      function ap(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = ds(e, ["root"]),
            r = t || document;
          np.has(r) || np.set(r, {});
          var i = np.get(r),
            a = JSON.stringify(n);
          return (
            i[a] || (i[a] = new IntersectionObserver(ip, fs({ root: t }, n))),
            i[a]
          );
        })(t);
        return (
          tp.set(e, n),
          r.observe(e),
          function () {
            tp.delete(e), r.unobserve(e);
          }
        );
      }
      var op = { some: 0, all: 1 };
      function sp(e, n, r, i) {
        var a = i.root,
          o = i.margin,
          s = i.amount,
          l = void 0 === s ? "some" : s,
          u = i.once;
        (0, t.useEffect)(
          function () {
            if (e) {
              var t = {
                root: null === a || void 0 === a ? void 0 : a.current,
                rootMargin: o,
                threshold: "number" === typeof l ? l : op[l],
              };
              return ap(r.getInstance(), t, function (e) {
                var t,
                  i = e.isIntersecting;
                if (
                  n.isInView !== i &&
                  ((n.isInView = i), !u || i || !n.hasEnteredView)
                ) {
                  i && (n.hasEnteredView = !0),
                    null === (t = r.animationState) ||
                      void 0 === t ||
                      t.setActive(Md.InView, i);
                  var a = r.getProps(),
                    o = i ? a.onViewportEnter : a.onViewportLeave;
                  null === o || void 0 === o || o(e);
                }
              });
            }
          },
          [e, a, o, l]
        );
      }
      function lp(e, n, r, i) {
        var a = i.fallback,
          o = void 0 === a || a;
        (0, t.useEffect)(
          function () {
            e &&
              o &&
              requestAnimationFrame(function () {
                var e;
                n.hasEnteredView = !0;
                var t = r.getProps().onViewportEnter;
                null === t || void 0 === t || t(null),
                  null === (e = r.animationState) ||
                    void 0 === e ||
                    e.setActive(Md.InView, !0);
              });
          },
          [e]
        );
      }
      var up = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        cp = {
          inView: up(function (e) {
            var n = e.visualElement,
              r = e.whileInView,
              i = e.onViewportEnter,
              a = e.onViewportLeave,
              o = e.viewport,
              s = void 0 === o ? {} : o,
              l = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
              u = Boolean(r || i || a);
            s.once && l.current.hasEnteredView && (u = !1),
              ("undefined" === typeof IntersectionObserver ? lp : sp)(
                u,
                l.current,
                n,
                s
              );
          }),
          tap: up(function (e) {
            var n = e.onTap,
              r = e.onTapStart,
              i = e.onTapCancel,
              a = e.whileTap,
              o = e.visualElement,
              s = n || r || i || a,
              l = (0, t.useRef)(!1),
              u = (0, t.useRef)(null);
            function c() {
              var e;
              null === (e = u.current) || void 0 === e || e.call(u),
                (u.current = null);
            }
            function f() {
              var e;
              return (
                c(),
                (l.current = !1),
                null === (e = o.animationState) ||
                  void 0 === e ||
                  e.setActive(Md.Tap, !1),
                !Kd()
              );
            }
            function d(e, t) {
              f() &&
                (Jd(o.getInstance(), e.target)
                  ? null === n || void 0 === n || n(e, t)
                  : null === i || void 0 === i || i(e, t));
            }
            function p(e, t) {
              f() && (null === i || void 0 === i || i(e, t));
            }
            Xd(
              o,
              "pointerdown",
              s
                ? function (e, t) {
                    var n;
                    c(),
                      l.current ||
                        ((l.current = !0),
                        (u.current = lu(
                          Yd(window, "pointerup", d),
                          Yd(window, "pointercancel", p)
                        )),
                        null === (n = o.animationState) ||
                          void 0 === n ||
                          n.setActive(Md.Tap, !0),
                        null === r || void 0 === r || r(e, t));
                  }
                : void 0
            ),
              ep(c);
          }),
          focus: up(function (e) {
            var t = e.whileFocus,
              n = e.visualElement;
            Nd(
              n,
              "focus",
              t
                ? function () {
                    var e;
                    null === (e = n.animationState) ||
                      void 0 === e ||
                      e.setActive(Md.Focus, !0);
                  }
                : void 0
            ),
              Nd(
                n,
                "blur",
                t
                  ? function () {
                      var e;
                      null === (e = n.animationState) ||
                        void 0 === e ||
                        e.setActive(Md.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: up(function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              i = e.visualElement;
            Xd(i, "pointerenter", t || r ? Zd(i, !0, t) : void 0),
              Xd(i, "pointerleave", n || r ? Zd(i, !1, n) : void 0);
          }),
        },
        fp = 0,
        dp = function () {
          return fp++;
        };
      function pp() {
        var e = (0, t.useContext)(_s);
        if (null === e) return [!0, null];
        var n = e.isPresent,
          r = e.onExitComplete,
          i = e.register,
          a = Fs(dp);
        (0, t.useEffect)(function () {
          return i(a);
        }, []);
        return !n && r
          ? [
              !1,
              function () {
                return null === r || void 0 === r ? void 0 : r(a);
              },
            ]
          : [!0];
      }
      function hp(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var vp = function (e) {
          return /^0[^.\s]+$/.test(e);
        },
        mp = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        gp = [
          El,
          Il,
          Fl,
          zl,
          Ul,
          Vl,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        yp = function (e) {
          return gp.find(mp(e));
        },
        bp = hs(hs([], ps(gp), !1), [Zl, au], !1),
        xp = function (e) {
          return bp.find(mp(e));
        };
      function wp(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ll(n));
      }
      function _p(e, t) {
        var n = Ls(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          i = r.transitionEnd,
          a = void 0 === i ? {} : i;
        r.transition;
        var o = ds(r, ["transitionEnd", "transition"]);
        for (var s in (o = fs(fs({}, o), a))) {
          wp(e, s, vc(o[s]));
        }
      }
      function kp(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function Sp(e, t, n) {
        var r;
        void 0 === n && (n = {});
        var i = Ls(e, t, n.custom),
          a = (i || {}).transition,
          o = void 0 === a ? e.getDefaultTransition() || {} : a;
        n.transitionOverride && (o = n.transitionOverride);
        var s = i
            ? function () {
                return Tp(e, i, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = (
            null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var i = o.delayChildren,
                  a = void 0 === i ? 0 : i,
                  s = o.staggerChildren,
                  l = o.staggerDirection;
                return (function (e, t, n, r, i, a) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === i && (i = 1);
                  var o = [],
                    s = (e.variantChildren.size - 1) * r,
                    l =
                      1 === i
                        ? function (e) {
                            return void 0 === e && (e = 0), e * r;
                          }
                        : function (e) {
                            return void 0 === e && (e = 0), s - e * r;
                          };
                  return (
                    Array.from(e.variantChildren)
                      .sort(Ep)
                      .forEach(function (e, r) {
                        o.push(
                          Sp(e, t, fs(fs({}, a), { delay: n + l(r) })).then(
                            function () {
                              return e.notifyAnimationComplete(t);
                            }
                          )
                        );
                      }),
                    Promise.all(o)
                  );
                })(e, t, a + r, s, l, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = o.when;
        if (u) {
          var c = ps("beforeChildren" === u ? [s, l] : [l, s], 2),
            f = c[0],
            d = c[1];
          return f().then(d);
        }
        return Promise.all([s(), l(n.delay)]);
      }
      function Tp(e, t, n) {
        var r,
          i = void 0 === n ? {} : n,
          a = i.delay,
          o = void 0 === a ? 0 : a,
          s = i.transitionOverride,
          l = i.type,
          u = e.makeTargetAnimatable(t),
          c = u.transition,
          f = void 0 === c ? e.getDefaultTransition() : c,
          d = u.transitionEnd,
          p = ds(u, ["transition", "transitionEnd"]);
        s && (f = s);
        var h = [],
          v =
            l &&
            (null === (r = e.animationState) || void 0 === r
              ? void 0
              : r.getState()[l]);
        for (var m in p) {
          var g = e.getValue(m),
            y = p[m];
          if (!(!g || void 0 === y || (v && Cp(v, m)))) {
            var b = fs({ delay: o }, f);
            e.shouldReduceMotion &&
              xf(m) &&
              (b = fs(fs({}, b), { type: !1, delay: 0 }));
            var x = _c(m, g, y, b);
            h.push(x);
          }
        }
        return Promise.all(h).then(function () {
          d && _p(e, d);
        });
      }
      function Ep(e, t) {
        return e.sortNodePosition(t);
      }
      function Cp(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          i = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), i;
      }
      var Pp = [
          Md.Animate,
          Md.InView,
          Md.Focus,
          Md.Hover,
          Md.Tap,
          Md.Drag,
          Md.Exit,
        ],
        jp = hs([], ps(Pp), !1).reverse(),
        Mp = Pp.length;
      function Ap(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  e.notifyAnimationStart(t),
                  Array.isArray(t))
                ) {
                  var i = t.map(function (t) {
                    return Sp(e, t, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof t) r = Sp(e, t, n);
                else {
                  var a = "function" === typeof t ? Ls(e, t, n.custom) : t;
                  r = Tp(e, a, n);
                }
                return r.then(function () {
                  return e.notifyAnimationComplete(t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function Op(e) {
        var t = Ap(e),
          n = (function () {
            var e;
            return (
              ((e = {})[Md.Animate] = Lp(!0)),
              (e[Md.InView] = Lp()),
              (e[Md.Hover] = Lp()),
              (e[Md.Tap] = Lp()),
              (e[Md.Drag] = Lp()),
              (e[Md.Focus] = Lp()),
              (e[Md.Exit] = Lp()),
              e
            );
          })(),
          r = {},
          i = !0,
          a = function (t, n) {
            var r = Ls(e, n);
            if (r) {
              r.transition;
              var i = r.transitionEnd,
                a = ds(r, ["transition", "transitionEnd"]);
              t = fs(fs(fs({}, t), a), i);
            }
            return t;
          };
        function o(o, s) {
          for (
            var l,
              u = e.getProps(),
              c = e.getVariantContext(!0) || {},
              f = [],
              d = new Set(),
              p = {},
              h = 1 / 0,
              v = function (t) {
                var r = jp[t],
                  v = n[r],
                  m = null !== (l = u[r]) && void 0 !== l ? l : c[r],
                  g = As(m),
                  y = r === s ? v.isActive : null;
                !1 === y && (h = t);
                var b = m === c[r] && m !== u[r] && g;
                if (
                  (b && i && e.manuallyAnimateOnMount && (b = !1),
                  (v.protectedKeys = fs({}, p)),
                  (!v.isActive && null === y) ||
                    (!m && !v.prevProp) ||
                    Ed(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var x = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Ms(t)) return !hp(t, e);
                    return !1;
                  })(v.prevProp, m),
                  w = x || (r === s && v.isActive && !b && g) || (t > h && g),
                  _ = Array.isArray(m) ? m : [m],
                  k = _.reduce(a, {});
                !1 === y && (k = {});
                var S = v.prevResolvedValues,
                  T = void 0 === S ? {} : S,
                  E = fs(fs({}, T), k),
                  C = function (e) {
                    (w = !0), d.delete(e), (v.needsAnimating[e] = !0);
                  };
                for (var P in E) {
                  var j = k[P],
                    M = T[P];
                  p.hasOwnProperty(P) ||
                    (j !== M
                      ? Ju(j) && Ju(M)
                        ? !hp(j, M) || x
                          ? C(P)
                          : (v.protectedKeys[P] = !0)
                        : void 0 !== j
                        ? C(P)
                        : d.add(P)
                      : void 0 !== j && d.has(P)
                      ? C(P)
                      : (v.protectedKeys[P] = !0));
                }
                (v.prevProp = m),
                  (v.prevResolvedValues = k),
                  v.isActive && (p = fs(fs({}, p), k)),
                  i && e.blockInitialAnimation && (w = !1),
                  w &&
                    !b &&
                    f.push.apply(
                      f,
                      hs(
                        [],
                        ps(
                          _.map(function (e) {
                            return {
                              animation: e,
                              options: fs({ type: r }, o),
                            };
                          })
                        ),
                        !1
                      )
                    );
              },
              m = 0;
            m < Mp;
            m++
          )
            v(m);
          if (((r = fs({}, p)), d.size)) {
            var g = {};
            d.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (g[t] = n);
            }),
              f.push({ animation: g });
          }
          var y = Boolean(f.length);
          return (
            i && !1 === u.initial && !e.manuallyAnimateOnMount && (y = !1),
            (i = !1),
            y ? t(f) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (e) {
            return void 0 !== r[e];
          },
          animateChanges: o,
          setActive: function (t, r, i) {
            var a;
            if (n[t].isActive === r) return Promise.resolve();
            null === (a = e.variantChildren) ||
              void 0 === a ||
              a.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var s = o(i, t);
            for (var l in n) n[l].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Lp(e) {
        return (
          void 0 === e && (e = !1),
          {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Np = {
          animation: up(function (e) {
            var n = e.visualElement,
              r = e.animate;
            n.animationState || (n.animationState = Op(n)),
              Ed(r) &&
                (0, t.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: up(function (e) {
            var n = e.custom,
              r = e.visualElement,
              i = ps(pp(), 2),
              a = i[0],
              o = i[1],
              s = (0, t.useContext)(_s);
            (0, t.useEffect)(
              function () {
                var e, t;
                r.isPresent = a;
                var i =
                  null === (e = r.animationState) || void 0 === e
                    ? void 0
                    : e.setActive(Md.Exit, !a, {
                        custom:
                          null !==
                            (t =
                              null === s || void 0 === s ? void 0 : s.custom) &&
                          void 0 !== t
                            ? t
                            : n,
                      });
                !a && (null === i || void 0 === i || i.then(o));
              },
              [a]
            );
          }),
        },
        Rp = (function () {
          function e(e, t, n) {
            var r = this,
              i = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var e = Fp(r.lastMoveEventInfo, r.history),
                    t = null !== r.startEvent,
                    n = Qc(e.offset, { x: 0, y: 0 }) >= 3;
                  if (t || n) {
                    var i = e.point,
                      a = el().timestamp;
                    r.history.push(fs(fs({}, i), { timestamp: a }));
                    var o = r.handlers,
                      s = o.onStart,
                      l = o.onMove;
                    t ||
                      (s && s(r.lastMoveEvent, e),
                      (r.startEvent = r.lastMoveEvent)),
                      l && l(r.lastMoveEvent, e);
                  }
                }
              }),
              (this.handlePointerMove = function (e, t) {
                (r.lastMoveEvent = e),
                  (r.lastMoveEventInfo = Dp(t, r.transformPagePoint)),
                  Rd(e) && 0 === e.buttons
                    ? r.handlePointerUp(e, t)
                    : tl.update(r.updatePoint, !0);
              }),
              (this.handlePointerUp = function (e, t) {
                r.end();
                var n = r.handlers,
                  i = n.onEnd,
                  a = n.onSessionEnd,
                  o = Fp(Dp(t, r.transformPagePoint), r.history);
                r.startEvent && i && i(e, o), a && a(e, o);
              }),
              !(Dd(e) && e.touches.length > 1))
            ) {
              (this.handlers = t), (this.transformPagePoint = i);
              var a = Dp(Vd(e), this.transformPagePoint),
                o = a.point,
                s = el().timestamp;
              this.history = [fs(fs({}, o), { timestamp: s })];
              var l = t.onSessionStart;
              l && l(e, Fp(a, this.history)),
                (this.removeListeners = lu(
                  Yd(window, "pointermove", this.handlePointerMove),
                  Yd(window, "pointerup", this.handlePointerUp),
                  Yd(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (e.prototype.updateHandlers = function (e) {
              this.handlers = e;
            }),
            (e.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                Qs.update(this.updatePoint);
            }),
            e
          );
        })();
      function Dp(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function zp(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function Fp(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: zp(n, Vp(t)),
          offset: zp(n, Ip(t)),
          velocity: Up(t, 0.1),
        };
      }
      function Ip(e) {
        return e[0];
      }
      function Vp(e) {
        return e[e.length - 1];
      }
      function Up(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, i = Vp(e);
          n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Bu(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var a = (i.timestamp - r.timestamp) / 1e3;
        if (0 === a) return { x: 0, y: 0 };
        var o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function Bp(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Hp(e, t) {
        var n,
          r = t.min - e.min,
          i = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min &&
            ((r = (n = ps([i, r], 2))[0]), (i = n[1])),
          { min: r, max: i }
        );
      }
      var Wp = 0.35;
      function Yp(e, t, n) {
        return { min: Xp(e, t), max: Xp(e, n) };
      }
      function Xp(e, t) {
        var n;
        return "number" === typeof e
          ? e
          : null !== (n = e[t]) && void 0 !== n
          ? n
          : 0;
      }
      function qp(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function $p(e, t) {
        return qp(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Qp = new WeakMap(),
        Gp = (function () {
          function e(e) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = e);
          }
          return (
            (e.prototype.start = function (e, t) {
              var n = this,
                r = (void 0 === t ? {} : t).snapToCursor,
                i = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new Rp(
                  e,
                  {
                    onSessionStart: function (e) {
                      n.stopAnimation(),
                        i && n.snapToCursor(Vd(e, "page").point);
                    },
                    onStart: function (e, t) {
                      var r,
                        i = n.getProps(),
                        a = i.drag,
                        o = i.dragPropagation,
                        s = i.onDragStart;
                      (!a ||
                        o ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = Gd(a)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        vf(function (e) {
                          var t,
                            r,
                            i = n.getAxisMotionValue(e).get() || 0;
                          if (Fl.test(i)) {
                            var a =
                              null ===
                                (r =
                                  null === (t = n.visualElement.projection) ||
                                  void 0 === t
                                    ? void 0
                                    : t.layout) || void 0 === r
                                ? void 0
                                : r.actual[e];
                            if (a) i = Gc(a) * (parseFloat(i) / 100);
                          }
                          n.originPoint[e] = i;
                        }),
                        null === s || void 0 === s || s(e, t),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(Md.Drag, !0));
                    },
                    onMove: function (e, t) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        a = r.dragDirectionLock,
                        o = r.onDirectionLock,
                        s = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var l = t.offset;
                        if (a && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (e, t) {
                              void 0 === t && (t = 10);
                              var n = null;
                              Math.abs(e.y) > t
                                ? (n = "y")
                                : Math.abs(e.x) > t && (n = "x");
                              return n;
                            })(l)),
                            void (
                              null !== n.currentDirection &&
                              (null === o ||
                                void 0 === o ||
                                o(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", t.point, l),
                          n.updateAxis("y", t.point, l),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(e, t);
                      }
                    },
                    onSessionEnd: function (e, t) {
                      return n.stop(e, t);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (e.prototype.stop = function (e, t) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = t.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null === i || void 0 === i || i(e, t);
              }
            }),
            (e.prototype.cancel = function () {
              var e, t;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (t = this.visualElement.animationState) ||
                  void 0 === t ||
                  t.setActive(Md.Drag, !1);
            }),
            (e.prototype.updateAxis = function (e, t, n) {
              var r = this.getProps().drag;
              if (n && Kp(e, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(e),
                  a = this.originPoint[e] + n[e];
                this.constraints &&
                  this.constraints[e] &&
                  (a = (function (e, t, n) {
                    var r = t.min,
                      i = t.max;
                    return (
                      void 0 !== r && e < r
                        ? (e = n ? nl(r, e, n.min) : Math.max(e, r))
                        : void 0 !== i &&
                          e > i &&
                          (e = n ? nl(i, e, n.max) : Math.min(e, i)),
                      e
                    );
                  })(a, this.constraints[e], this.elastic[e])),
                  i.set(a);
              }
            }),
            (e.prototype.resolveConstraints = function () {
              var e = this,
                t = this.getProps(),
                n = t.dragConstraints,
                r = t.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                a = this.constraints;
              n && js(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (e, t) {
                      var n = t.top,
                        r = t.left,
                        i = t.bottom,
                        a = t.right;
                      return { x: Bp(e.x, r, a), y: Bp(e.y, n, i) };
                    })(i.actual, n)),
                (this.elastic = (function (e) {
                  return (
                    void 0 === e && (e = Wp),
                    !1 === e ? (e = 0) : !0 === e && (e = Wp),
                    { x: Yp(e, "left", "right"), y: Yp(e, "top", "bottom") }
                  );
                })(r)),
                a !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  vf(function (t) {
                    e.getAxisMotionValue(t) &&
                      (e.constraints[t] = (function (e, t) {
                        var n = {};
                        return (
                          void 0 !== t.min && (n.min = t.min - e.min),
                          void 0 !== t.max && (n.max = t.max - e.min),
                          n
                        );
                      })(i.actual[t], e.constraints[t]));
                  });
            }),
            (e.prototype.resolveRefConstraints = function () {
              var e = this.getProps(),
                t = e.dragConstraints,
                n = e.onMeasureDragConstraints;
              if (!t || !js(t)) return !1;
              var r = t.current,
                i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var a = (function (e, t, n) {
                  var r = $p(e, n),
                    i = t.scroll;
                  return i && (Uc(r.x, i.x), Uc(r.y, i.y)), r;
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                o = (function (e, t) {
                  return { x: Hp(e.x, t.x), y: Hp(e.y, t.y) };
                })(i.layout.actual, a);
              if (n) {
                var s = n(
                  (function (e) {
                    var t = e.x,
                      n = e.y;
                    return {
                      top: n.min,
                      right: t.max,
                      bottom: n.max,
                      left: t.min,
                    };
                  })(o)
                );
                (this.hasMutatedConstraints = !!s), s && (o = qp(s));
              }
              return o;
            }),
            (e.prototype.startAnimation = function (e) {
              var t = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragMomentum,
                a = n.dragElastic,
                o = n.dragTransition,
                s = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                u = this.constraints || {},
                c = vf(function (n) {
                  var l;
                  if (Kp(n, r, t.currentDirection)) {
                    var c =
                      null !==
                        (l = null === u || void 0 === u ? void 0 : u[n]) &&
                      void 0 !== l
                        ? l
                        : {};
                    s && (c = { min: 0, max: 0 });
                    var f = a ? 200 : 1e6,
                      d = a ? 40 : 1e7,
                      p = fs(
                        fs(
                          {
                            type: "inertia",
                            velocity: i ? e[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: d,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          o
                        ),
                        c
                      );
                    return t.startAxisValueAnimation(n, p);
                  }
                });
              return Promise.all(c).then(l);
            }),
            (e.prototype.startAxisValueAnimation = function (e, t) {
              return _c(e, this.getAxisMotionValue(e), 0, t);
            }),
            (e.prototype.stopAnimation = function () {
              var e = this;
              vf(function (t) {
                return e.getAxisMotionValue(t).stop();
              });
            }),
            (e.prototype.getAxisMotionValue = function (e) {
              var t,
                n,
                r = "_drag" + e.toUpperCase(),
                i = this.visualElement.getProps()[r];
              return (
                i ||
                this.visualElement.getValue(
                  e,
                  null !==
                    (n =
                      null === (t = this.visualElement.getProps().initial) ||
                      void 0 === t
                        ? void 0
                        : t[e]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (e.prototype.snapToCursor = function (e) {
              var t = this;
              vf(function (n) {
                if (Kp(n, t.getProps().drag, t.currentDirection)) {
                  var r = t.visualElement.projection,
                    i = t.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var a = r.layout.actual[n],
                      o = a.min,
                      s = a.max;
                    i.set(e[n] - nl(o, s, 0.5));
                  }
                }
              });
            }),
            (e.prototype.scalePositionWithinConstraints = function () {
              var e,
                t = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                a = this.visualElement.projection;
              if (js(i) && a && this.constraints) {
                this.stopAnimation();
                var o = { x: 0, y: 0 };
                vf(function (e) {
                  var n = t.getAxisMotionValue(e);
                  if (n) {
                    var r = n.get();
                    o[e] = (function (e, t) {
                      var n = 0.5,
                        r = Gc(e),
                        i = Gc(t);
                      return (
                        i > r
                          ? (n = bl(t.min, t.max - r, e.min))
                          : r > i && (n = bl(e.min, e.max - i, t.min)),
                        cl(0, 1, n)
                      );
                    })({ min: r, max: r }, t.constraints[e]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (e = a.root) || void 0 === e || e.updateScroll(),
                  a.updateLayout(),
                  this.resolveConstraints(),
                  vf(function (e) {
                    if (Kp(e, r, null)) {
                      var n = t.getAxisMotionValue(e),
                        i = t.constraints[e],
                        a = i.min,
                        s = i.max;
                      n.set(nl(a, s, o[e]));
                    }
                  });
              }
            }),
            (e.prototype.addListeners = function () {
              var e,
                t = this;
              Qp.set(this.visualElement, this);
              var n = Yd(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (e) {
                    var n = t.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && t.start(e);
                  }
                ),
                r = function () {
                  js(t.getProps().dragConstraints) &&
                    (t.constraints = t.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                a = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (e = i.root) || void 0 === e || e.updateScroll(),
                i.updateLayout()),
                r();
              var o = Ld(window, "resize", function () {
                t.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (e) {
                  var n = e.delta,
                    r = e.hasLayoutChanged;
                  t.isDragging &&
                    r &&
                    (vf(function (e) {
                      var r = t.getAxisMotionValue(e);
                      r &&
                        ((t.originPoint[e] += n[e].translate),
                        r.set(r.get() + n[e].translate));
                    }),
                    t.visualElement.syncRender());
                }),
                function () {
                  o(), n(), a();
                }
              );
            }),
            (e.prototype.getProps = function () {
              var e = this.visualElement.getProps(),
                t = e.drag,
                n = void 0 !== t && t,
                r = e.dragDirectionLock,
                i = void 0 !== r && r,
                a = e.dragPropagation,
                o = void 0 !== a && a,
                s = e.dragConstraints,
                l = void 0 !== s && s,
                u = e.dragElastic,
                c = void 0 === u ? Wp : u,
                f = e.dragMomentum,
                d = void 0 === f || f;
              return fs(fs({}, e), {
                drag: n,
                dragDirectionLock: i,
                dragPropagation: o,
                dragConstraints: l,
                dragElastic: c,
                dragMomentum: d,
              });
            }),
            e
          );
        })();
      function Kp(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var Zp = {
          pan: up(function (e) {
            var n = e.onPan,
              r = e.onPanStart,
              i = e.onPanEnd,
              a = e.onPanSessionStart,
              o = e.visualElement,
              s = n || r || i || a,
              l = (0, t.useRef)(null),
              u = (0, t.useContext)(xs).transformPagePoint,
              c = {
                onSessionStart: a,
                onStart: r,
                onMove: n,
                onEnd: function (e, t) {
                  (l.current = null), i && i(e, t);
                },
              };
            (0, t.useEffect)(function () {
              null !== l.current && l.current.updateHandlers(c);
            }),
              Xd(
                o,
                "pointerdown",
                s &&
                  function (e) {
                    l.current = new Rp(e, c, { transformPagePoint: u });
                  }
              ),
              ep(function () {
                return l.current && l.current.end();
              });
          }),
          drag: up(function (e) {
            var n = e.dragControls,
              r = e.visualElement,
              i = Fs(function () {
                return new Gp(r);
              });
            (0, t.useEffect)(
              function () {
                return n && n.subscribe(i);
              },
              [i, n]
            ),
              (0, t.useEffect)(
                function () {
                  return i.addListeners();
                },
                [i]
              );
          }),
        },
        Jp = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var eh = function (e) {
          var t = e.treeType,
            n = void 0 === t ? "" : t,
            r = e.build,
            i = e.getBaseTarget,
            a = e.makeTargetAnimatable,
            o = e.measureViewportBox,
            s = e.render,
            l = e.readValueFromInstance,
            u = e.removeValueFromRenderState,
            c = e.sortNodePosition,
            f = e.scrapeMotionValuesFromProps;
          return function (e, t) {
            var d = e.parent,
              p = e.props,
              h = e.presenceId,
              v = e.blockInitialAnimation,
              m = e.visualState,
              g = e.shouldReduceMotion;
            void 0 === t && (t = {});
            var y,
              b,
              x = !1,
              w = m.latestValues,
              _ = m.renderState,
              k = (function () {
                var e = Jp.map(function () {
                    return new ol();
                  }),
                  t = {},
                  n = {
                    clearAllListeners: function () {
                      return e.forEach(function (e) {
                        return e.clear();
                      });
                    },
                    updatePropListeners: function (e) {
                      Jp.forEach(function (r) {
                        var i,
                          a = "on" + r,
                          o = e[a];
                        null === (i = t[r]) || void 0 === i || i.call(t),
                          o && (t[r] = n[a](o));
                      });
                    },
                  };
                return (
                  e.forEach(function (e, t) {
                    (n["on" + Jp[t]] = function (t) {
                      return e.add(t);
                    }),
                      (n["notify" + Jp[t]] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.notify.apply(e, hs([], ps(t), !1));
                      });
                  }),
                  n
                );
              })(),
              S = new Map(),
              T = new Map(),
              E = {},
              C = fs({}, w);
            function P() {
              y && x && (j(), s(y, _, p.style, z.projection));
            }
            function j() {
              r(z, _, w, t, p);
            }
            function M() {
              k.notifyUpdate(w);
            }
            function A(e, t) {
              var n = t.onChange(function (t) {
                  (w[e] = t), p.onUpdate && tl.update(M, !1, !0);
                }),
                r = t.onRenderRequest(z.scheduleRender);
              T.set(e, function () {
                n(), r();
              });
            }
            var O = f(p);
            for (var L in O) {
              var N = O[L];
              void 0 !== w[L] && ul(N) && N.set(w[L], !1);
            }
            var R = Ns(p),
              D = Rs(p),
              z = fs(
                fs(
                  {
                    treeType: n,
                    current: null,
                    depth: d ? d.depth + 1 : 0,
                    parent: d,
                    children: new Set(),
                    presenceId: h,
                    shouldReduceMotion: g,
                    variantChildren: D ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === d || void 0 === d ? void 0 : d.isMounted()
                    ),
                    blockInitialAnimation: v,
                    isMounted: function () {
                      return Boolean(y);
                    },
                    mount: function (e) {
                      (x = !0),
                        (y = z.current = e),
                        z.projection && z.projection.mount(e),
                        D &&
                          d &&
                          !R &&
                          (b =
                            null === d || void 0 === d
                              ? void 0
                              : d.addVariantChild(z)),
                        S.forEach(function (e, t) {
                          return A(t, e);
                        }),
                        null === d || void 0 === d || d.children.add(z),
                        z.setProps(p);
                    },
                    unmount: function () {
                      var e;
                      null === (e = z.projection) ||
                        void 0 === e ||
                        e.unmount(),
                        Qs.update(M),
                        Qs.render(P),
                        T.forEach(function (e) {
                          return e();
                        }),
                        null === b || void 0 === b || b(),
                        null === d || void 0 === d || d.children.delete(z),
                        k.clearAllListeners(),
                        (y = void 0),
                        (x = !1);
                    },
                    addVariantChild: function (e) {
                      var t,
                        n = z.getClosestVariantNode();
                      if (n)
                        return (
                          null === (t = n.variantChildren) ||
                            void 0 === t ||
                            t.add(e),
                          function () {
                            return n.variantChildren.delete(e);
                          }
                        );
                    },
                    sortNodePosition: function (e) {
                      return c && n === e.treeType
                        ? c(z.getInstance(), e.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return D
                        ? z
                        : null === d || void 0 === d
                        ? void 0
                        : d.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return p.layoutId;
                    },
                    getInstance: function () {
                      return y;
                    },
                    getStaticValue: function (e) {
                      return w[e];
                    },
                    setStaticValue: function (e, t) {
                      return (w[e] = t);
                    },
                    getLatestValues: function () {
                      return w;
                    },
                    setVisibility: function (e) {
                      z.isVisible !== e &&
                        ((z.isVisible = e), z.scheduleRender());
                    },
                    makeTargetAnimatable: function (e, t) {
                      return void 0 === t && (t = !0), a(z, e, p, t);
                    },
                    measureViewportBox: function () {
                      return o(y, p);
                    },
                    addValue: function (e, t) {
                      z.hasValue(e) && z.removeValue(e),
                        S.set(e, t),
                        (w[e] = t.get()),
                        A(e, t);
                    },
                    removeValue: function (e) {
                      var t;
                      S.delete(e),
                        null === (t = T.get(e)) || void 0 === t || t(),
                        T.delete(e),
                        delete w[e],
                        u(e, _);
                    },
                    hasValue: function (e) {
                      return S.has(e);
                    },
                    getValue: function (e, t) {
                      var n = S.get(e);
                      return (
                        void 0 === n &&
                          void 0 !== t &&
                          ((n = ll(t)), z.addValue(e, n)),
                        n
                      );
                    },
                    forEachValue: function (e) {
                      return S.forEach(e);
                    },
                    readValue: function (e) {
                      var n;
                      return null !== (n = w[e]) && void 0 !== n
                        ? n
                        : l(y, e, t);
                    },
                    setBaseTarget: function (e, t) {
                      C[e] = t;
                    },
                    getBaseTarget: function (e) {
                      if (i) {
                        var t = i(p, e);
                        if (void 0 !== t && !ul(t)) return t;
                      }
                      return C[e];
                    },
                  },
                  k
                ),
                {
                  build: function () {
                    return j(), _;
                  },
                  scheduleRender: function () {
                    tl.render(P, !1, !0);
                  },
                  syncRender: P,
                  setProps: function (e) {
                    (e.transformTemplate || p.transformTemplate) &&
                      z.scheduleRender(),
                      (p = e),
                      k.updatePropListeners(e),
                      (E = (function (e, t, n) {
                        var r;
                        for (var i in t) {
                          var a = t[i],
                            o = n[i];
                          if (ul(a)) e.addValue(i, a);
                          else if (ul(o)) e.addValue(i, ll(a));
                          else if (o !== a)
                            if (e.hasValue(i)) {
                              var s = e.getValue(i);
                              !s.hasAnimated && s.set(a);
                            } else
                              e.addValue(
                                i,
                                ll(
                                  null !== (r = e.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : a
                                )
                              );
                        }
                        for (var i in n) void 0 === t[i] && e.removeValue(i);
                        return t;
                      })(z, f(p), E));
                  },
                  getProps: function () {
                    return p;
                  },
                  getVariant: function (e) {
                    var t;
                    return null === (t = p.variants) || void 0 === t
                      ? void 0
                      : t[e];
                  },
                  getDefaultTransition: function () {
                    return p.transition;
                  },
                  getTransformPagePoint: function () {
                    return p.transformPagePoint;
                  },
                  getVariantContext: function (e) {
                    if ((void 0 === e && (e = !1), e))
                      return null === d || void 0 === d
                        ? void 0
                        : d.getVariantContext();
                    if (!R) {
                      var t =
                        (null === d || void 0 === d
                          ? void 0
                          : d.getVariantContext()) || {};
                      return void 0 !== p.initial && (t.initial = p.initial), t;
                    }
                    for (var n = {}, r = 0; r < nh; r++) {
                      var i = th[r],
                        a = p[i];
                      (As(a) || !1 === a) && (n[i] = a);
                    }
                    return n;
                  },
                }
              );
            return z;
          };
        },
        th = hs(["initial"], ps(Pp), !1),
        nh = th.length;
      function rh(e) {
        return "string" === typeof e && e.startsWith("var(--");
      }
      var ih = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ah(e, t, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          );
        var r = ps(
            (function (e) {
              var t = ih.exec(e);
              if (!t) return [,];
              var n = ps(t, 3);
              return [n[1], n[2]];
            })(e),
            2
          ),
          i = r[0],
          a = r[1];
        if (i) {
          var o = window.getComputedStyle(t).getPropertyValue(i);
          return o ? o.trim() : rh(a) ? ah(a, t, n + 1) : a;
        }
      }
      var oh,
        sh = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        lh = function (e) {
          return sh.has(e);
        },
        uh = function (e, t) {
          e.set(t, !1), e.set(t);
        },
        ch = function (e) {
          return e === El || e === Il;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(oh || (oh = {}));
      var fh = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        dh = function (e, t) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var a = i.match(/^matrix3d\((.+)\)$/);
            if (a) return fh(a[1], t);
            var o = i.match(/^matrix\((.+)\)$/);
            return o ? fh(o[1], e) : 0;
          };
        },
        ph = new Set(["x", "y", "z"]),
        hh = gf.filter(function (e) {
          return !ph.has(e);
        });
      var vh = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              i = void 0 === r ? "0" : r,
              a = t.paddingRight,
              o = void 0 === a ? "0" : a;
            return n.max - n.min - parseFloat(i) - parseFloat(o);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              i = void 0 === r ? "0" : r,
              a = t.paddingBottom,
              o = void 0 === a ? "0" : a;
            return n.max - n.min - parseFloat(i) - parseFloat(o);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: dh(4, 13),
          y: dh(5, 14),
        },
        mh = function (e, t, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (t = fs({}, t)),
            (r = fs({}, r));
          var i = Object.keys(t).filter(lh),
            a = [],
            o = !1,
            s = [];
          if (
            (i.forEach(function (i) {
              var l = e.getValue(i);
              if (e.hasValue(i)) {
                var u,
                  c = n[i],
                  f = yp(c),
                  d = t[i];
                if (Ju(d)) {
                  var p = d.length,
                    h = null === d[0] ? 1 : 0;
                  (c = d[h]), (f = yp(c));
                  for (var v = h; v < p; v++)
                    u ? yp(d[v]) : (u = yp(d[v])) === f || (ch(f) && ch(u));
                } else u = yp(d);
                if (f !== u)
                  if (ch(f) && ch(u)) {
                    var m = l.get();
                    "string" === typeof m && l.set(parseFloat(m)),
                      "string" === typeof d
                        ? (t[i] = parseFloat(d))
                        : Array.isArray(d) &&
                          u === Il &&
                          (t[i] = d.map(parseFloat));
                  } else
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (null === u || void 0 === u ? void 0 : u.transform) &&
                    (0 === c || 0 === d)
                      ? 0 === c
                        ? l.set(u.transform(c))
                        : (t[i] = f.transform(d))
                      : (o ||
                          ((a = (function (e) {
                            var t = [];
                            return (
                              hh.forEach(function (n) {
                                var r = e.getValue(n);
                                void 0 !== r &&
                                  (t.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              t.length && e.syncRender(),
                              t
                            );
                          })(e)),
                          (o = !0)),
                        s.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                        uh(l, d));
              }
            }),
            s.length)
          ) {
            var l = (function (e, t, n) {
              var r = t.measureViewportBox(),
                i = t.getInstance(),
                a = getComputedStyle(i),
                o = a.display,
                s = {};
              "none" === o && t.setStaticValue("display", e.display || "block"),
                n.forEach(function (e) {
                  s[e] = vh[e](r, a);
                }),
                t.syncRender();
              var l = t.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = t.getValue(n);
                  uh(r, s[n]), (e[n] = vh[n](l, a));
                }),
                e
              );
            })(t, e, s);
            return (
              a.length &&
                a.forEach(function (t) {
                  var n = ps(t, 2),
                    r = n[0],
                    i = n[1];
                  e.getValue(r).set(i);
                }),
              e.syncRender(),
              { target: l, transitionEnd: r }
            );
          }
          return { target: t, transitionEnd: r };
        };
      function gh(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(lh);
        })(t)
          ? mh(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var yh = function (e, t, n, r) {
        var i = (function (e, t, n) {
          var r,
            i = ds(t, []),
            a = e.getInstance();
          if (!(a instanceof Element)) return { target: i, transitionEnd: n };
          for (var o in (n && (n = fs({}, n)),
          e.forEachValue(function (e) {
            var t = e.get();
            if (rh(t)) {
              var n = ah(t, a);
              n && e.set(n);
            }
          }),
          i)) {
            var s = i[o];
            if (rh(s)) {
              var l = ah(s, a);
              l &&
                ((i[o] = l),
                n && ((null !== (r = n[o]) && void 0 !== r) || (n[o] = s)));
            }
          }
          return { target: i, transitionEnd: n };
        })(e, t, r);
        return gh(e, (t = i.target), n, (r = i.transitionEnd));
      };
      var bh = {
          treeType: "dom",
          readValueFromInstance: function (e, t) {
            if (xf(t)) {
              var n = dc(t);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = e), window.getComputedStyle(r));
            return (td(t) ? i.getPropertyValue(t) : i[t]) || 0;
          },
          sortNodePosition: function (e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1;
          },
          getBaseTarget: function (e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t];
          },
          measureViewportBox: function (e, t) {
            return $p(e, t.transformPagePoint);
          },
          resetTransform: function (e, t, n) {
            var r = n.transformTemplate;
            (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
          },
          restoreTransform: function (e, t) {
            e.style.transform = t.style.transform;
          },
          removeValueFromRenderState: function (e, t) {
            var n = t.vars,
              r = t.style;
            delete n[e], delete r[e];
          },
          makeTargetAnimatable: function (e, t, n, r) {
            var i = n.transformValues;
            void 0 === r && (r = !0);
            var a = t.transition,
              o = t.transitionEnd,
              s = ds(t, ["transition", "transitionEnd"]),
              l = (function (e, t, n) {
                var r,
                  i,
                  a = {};
                for (var o in e)
                  a[o] =
                    null !== (r = kp(o, t)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(o)) || void 0 === i
                      ? void 0
                      : i.get();
                return a;
              })(s, a || {}, e);
            if ((i && (o && (o = i(o)), s && (s = i(s)), l && (l = i(l))), r)) {
              !(function (e, t, n) {
                var r,
                  i,
                  a,
                  o,
                  s = Object.keys(t).filter(function (t) {
                    return !e.hasValue(t);
                  }),
                  l = s.length;
                if (l)
                  for (var u = 0; u < l; u++) {
                    var c = s[u],
                      f = t[c],
                      d = null;
                    Array.isArray(f) && (d = f[0]),
                      null === d &&
                        (d =
                          null !==
                            (i =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : e.readValue(c)) && void 0 !== i
                            ? i
                            : t[c]),
                      void 0 !== d &&
                        null !== d &&
                        ("string" === typeof d &&
                        (/^\-?\d*\.?\d+$/.test(d) || vp(d))
                          ? (d = parseFloat(d))
                          : !xp(d) && au.test(f) && (d = pc(c, f)),
                        e.addValue(c, ll(d)),
                        (null !== (a = (o = n)[c]) && void 0 !== a) ||
                          (o[c] = d),
                        e.setBaseTarget(c, d));
                  }
              })(e, s, l);
              var u = yh(e, s, l, o);
              (o = u.transitionEnd), (s = u.target);
            }
            return fs({ transition: a, transitionEnd: o }, s);
          },
          scrapeMotionValuesFromProps: Sd,
          build: function (e, t, n, r, i) {
            void 0 !== e.isVisible &&
              (t.style.visibility = e.isVisible ? "visible" : "hidden"),
              rd(t, n, r, i.transformTemplate);
          },
          render: wd,
        },
        xh = eh(bh),
        wh = eh(
          fs(fs({}, bh), {
            getBaseTarget: function (e, t) {
              return e[t];
            },
            readValueFromInstance: function (e, t) {
              var n;
              return xf(t)
                ? (null === (n = dc(t)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((t = _d.has(t) ? t : xd(t)), e.getAttribute(t));
            },
            scrapeMotionValuesFromProps: Td,
            build: function (e, t, n, r, i) {
              vd(t, n, r, i.transformTemplate);
            },
            render: kd,
          })
        ),
        _h = function (e, t) {
          return Zf(e)
            ? wh(t, { enableHardwareAcceleration: !1 })
            : xh(t, { enableHardwareAcceleration: !0 });
        };
      function kh(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Sh = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!Il.test(e)) return e;
              e = parseFloat(e);
            }
            var n = kh(e, t.target.x),
              r = kh(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Th = "_$css",
        Eh = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              i = e,
              a = e.includes("var("),
              o = [];
            a &&
              (e = e.replace(ih, function (e) {
                return o.push(e), Th;
              }));
            var s = au.parse(e);
            if (s.length > 5) return i;
            var l = au.createTransformer(e),
              u = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (s[0 + u] /= c), (s[1 + u] /= f);
            var d = nl(c, f, 0.5);
            "number" === typeof s[2 + u] && (s[2 + u] /= d),
              "number" === typeof s[3 + u] && (s[3 + u] /= d);
            var p = l(s);
            if (a) {
              var h = 0;
              p = p.replace(Th, function () {
                var e = o[h];
                return h++, e;
              });
            }
            return p;
          },
        },
        Ch = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            cs(t, e),
            (t.prototype.componentDidMount = function () {
              var e,
                t = this,
                n = this.props,
                r = n.visualElement,
                i = n.layoutGroup,
                a = n.switchLayoutGroup,
                o = n.layoutId,
                s = r.projection;
              (e = Ph),
                Object.assign(pf, e),
                s &&
                  ((null === i || void 0 === i ? void 0 : i.group) &&
                    i.group.add(s),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    o &&
                    a.register(s),
                  s.root.didUpdate(),
                  s.addEventListener("animationComplete", function () {
                    t.safeToRemove();
                  }),
                  s.setOptions(
                    fs(fs({}, s.options), {
                      onExitComplete: function () {
                        return t.safeToRemove();
                      },
                    })
                  )),
                (Ef.hasEverUpdated = !0);
            }),
            (t.prototype.getSnapshotBeforeUpdate = function (e) {
              var t = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                a = n.drag,
                o = n.isPresent,
                s = i.projection;
              return s
                ? ((s.isPresent = o),
                  a || e.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  e.isPresent !== o &&
                    (o
                      ? s.promote()
                      : s.relegate() ||
                        tl.postRender(function () {
                          var e;
                          (null === (e = s.getStack()) || void 0 === e
                            ? void 0
                            : e.members.length) || t.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (t.prototype.componentDidUpdate = function () {
              var e = this.props.visualElement.projection;
              e &&
                (e.root.didUpdate(),
                !e.currentAnimation && e.isLead() && this.safeToRemove());
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.visualElement,
                n = e.layoutGroup,
                r = e.switchLayoutGroup,
                i = t.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i));
            }),
            (t.prototype.safeToRemove = function () {
              var e = this.props.safeToRemove;
              null === e || void 0 === e || e();
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(t.Component);
      var Ph = {
          borderRadius: fs(fs({}, Sh), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: Sh,
          borderTopRightRadius: Sh,
          borderBottomLeftRadius: Sh,
          borderBottomRightRadius: Sh,
          boxShadow: Eh,
        },
        jh = {
          measureLayout: function (e) {
            var n = ps(pp(), 2),
              r = n[0],
              i = n[1],
              a = (0, t.useContext)(Xf);
            return t.createElement(
              Ch,
              fs({}, e, {
                layoutGroup: a,
                switchLayoutGroup: (0, t.useContext)(qf),
                isPresent: r,
                safeToRemove: i,
              })
            );
          },
        },
        Mh = Cf({
          attachResizeListener: function (e, t) {
            return (
              e.addEventListener("resize", t, { passive: !0 }),
              function () {
                return e.removeEventListener("resize", t);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        Ah = { current: void 0 },
        Oh = Cf({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!Ah.current) {
              var e = new Mh(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Ah.current = e);
            }
            return Ah.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = null !== t && void 0 !== t ? t : "none";
          },
        }),
        Lh = fs(fs(fs(fs({}, Np), cp), Zp), jh),
        Nh = Gf(function (e, t) {
          return (function (e, t, n, r, i) {
            var a = t.forwardMotionProps,
              o = void 0 !== a && a,
              s = Zf(e) ? Ad : Od;
            return fs(fs({}, s), {
              preloadedFeatures: n,
              useRender: yd(o),
              createVisualElement: r,
              projectionNodeConstructor: i,
              Component: e,
            });
          })(e, t, Lh, _h, Oh);
        });
      oi.registerPlugin(Zo);
      var Rh = function (e) {
          var n = e.setCursorHovered,
            r = (0, t.useRef)(null),
            i = (0, t.useRef)(null);
          return (
            (0, t.useEffect)(function () {
              document.title = "Akshit Rana - Web Developer | Illustrator ";
              var e = i.current,
                t = e.querySelector(".hero"),
                n = e.querySelector("img"),
                a = e.querySelector(".waterMark"),
                o = e.querySelector(".heading"),
                s = e.querySelector(".para"),
                l = e.querySelector(".bio>.name"),
                u = e.querySelector(".links"),
                c = e.querySelector(".social_links"),
                f = r.firstChild,
                d = r.lastChild;
              oi
                .timeline({ defaults: { duration: 1 } })
                .fromTo(
                  t,
                  0.6,
                  { y: -44, opacity: 0 },
                  { y: 0, opacity: 1, ease: Jn.easeOut },
                  1.6
                )
                .fromTo(
                  n,
                  0.6,
                  { height: 0 },
                  { height: "auto", ease: Jn.easeOut },
                  1.8
                )
                .fromTo(
                  a,
                  0.6,
                  { x: 174, opacity: 0.6 },
                  { x: 0, opacity: 0.15, ease: Jn.easeOut },
                  2
                )
                .fromTo(
                  o,
                  0.6,
                  { y: 200 },
                  { y: 0, ease: [0.6, 0.01, -0.05, 0.95] },
                  2.2
                )
                .fromTo(
                  s,
                  0.6,
                  { y: 200 },
                  { y: 0, ease: [0.6, 0.01, -0.05, 0.95] },
                  2.4
                )
                .fromTo(
                  c,
                  0.6,
                  { y: 200 },
                  { y: 0, ease: [0.6, 0.01, -0.05, 0.95] },
                  2.6
                )
                .fromTo(
                  l,
                  0.6,
                  { y: 44, opacity: 0 },
                  { y: 0, opacity: 1, ease: Jn.easeOut },
                  2.6
                )
                .fromTo(
                  u,
                  0.6,
                  { y: 44, opacity: 0 },
                  { y: 0, opacity: 1, ease: Jn.easeOut },
                  2.8
                ),
                oi.fromTo(
                  f,
                  1,
                  { x: 0 },
                  {
                    x: 500,
                    ease: Jn.easeIn,
                    scrollTrigger: {
                      trigger: r,
                      start: "top center+=100",
                      scrub: !0,
                    },
                  }
                ),
                oi.fromTo(
                  d,
                  1,
                  { x: 50 },
                  {
                    x: -550,
                    ease: Jn.easeIn,
                    scrollTrigger: {
                      trigger: r,
                      start: "top center+=100",
                      scrub: !0,
                    },
                  }
                );
            }, []),
            (0, V.jsxs)(V.Fragment, {
              children: [
                (0, V.jsx)(Nh.main, {
                  initial: { visibility: "hidden" },
                  animate: { visibility: "visible", transition: { delay: 1 } },
                  exit: { visibility: "hidden", transition: { delay: 1 } },
                  id: "content",
                  children: (0, V.jsx)("div", {
                    className: "section",
                    id: "home",
                    children: (0, V.jsxs)("div", {
                      className: "home",
                      ref: i,
                      children: [
                        (0, V.jsxs)("div", {
                          className: "hero",
                          children: [
                            (0, V.jsx)("img", { src: ls, alt: "Akshit" }),
                            (0, V.jsx)("div", {
                              style: { overflow: "hidden" },
                              children: (0, V.jsxs)("div", {
                                className: "waterMark",
                                children: [
                                  (0, V.jsx)("div", { children: "D \xa0E" }),
                                  (0, V.jsx)("div", {
                                    children: "S \xa0\xa0I",
                                  }),
                                  (0, V.jsx)("div", { children: "G \xa0N" }),
                                  (0, V.jsx)("div", { children: "E \xa0R" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, V.jsxs)("div", {
                          className: "title",
                          children: [
                            (0, V.jsx)("div", {
                              style: { overflow: "hidden" },
                              children: (0, V.jsx)("h2", {
                                className: "heading",
                                children:
                                  "Full Stack Web Developer And illustrator",
                              }),
                            }),
                            (0, V.jsxs)("div", {
                              style: { overflow: "hidden" },
                              children: [
                                (0, V.jsx)("p", {
                                  className: "para",
                                  children:
                                    "I am passionate and creative web Developer ,illustrator and Ui/Ux Designer with experience in making beautiful interfaces for web and mobile.",
                                }),
                                (0, V.jsxs)("div", {
                                  className: "social_links",
                                  children: [
                                    (0, V.jsx)("a", {
                                      className: "fb_link ",
                                      onMouseEnter: function () {
                                        return n(!0);
                                      },
                                      onMouseLeave: function () {
                                        return n(!1);
                                      },
                                      href: "https://www.facebook.com/akshit.rana3",
                                      target: "_open",
                                      children: (0, V.jsx)("i", {
                                        className: "fab fa-facebook",
                                        title: "Facebook",
                                      }),
                                    }),
                                    (0, V.jsxs)("a", {
                                      className: "linkedin_link ",
                                      onMouseEnter: function () {
                                        return n(!0);
                                      },
                                      onMouseLeave: function () {
                                        return n(!1);
                                      },
                                      href: "https://www.linkedin.com/in/akshit-rana-10",
                                      target: "_open",
                                      children: [
                                        " ",
                                        (0, V.jsx)("i", {
                                          className: "fab fa-linkedin",
                                          title: "Linked in",
                                        }),
                                      ],
                                    }),
                                    (0, V.jsx)("a", {
                                      className: "github_link ",
                                      onMouseEnter: function () {
                                        return n(!0);
                                      },
                                      onMouseLeave: function () {
                                        return n(!1);
                                      },
                                      href: "https://github.com/Akshit3010",
                                      target: "_open",
                                      children: (0, V.jsx)("i", {
                                        className: "fab fa-github",
                                        title: "GitHub",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, V.jsxs)("div", {
                          className: "bio",
                          children: [
                            (0, V.jsxs)("div", {
                              className: "name",
                              children: [
                                (0, V.jsx)("h1", { children: "Akshit" }),
                                (0, V.jsx)("span", { children: "Rana" }),
                              ],
                            }),
                            (0, V.jsxs)("div", {
                              className: "links",
                              children: [
                                " ",
                                (0, V.jsx)("a", {
                                  onMouseEnter: function () {
                                    return n(!0);
                                  },
                                  onMouseLeave: function () {
                                    return n(!1);
                                  },
                                  href: "#About",
                                  children: "Read about me",
                                }),
                                " ",
                                "OR",
                                " ",
                                (0, V.jsx)("a", {
                                  onMouseEnter: function () {
                                    return n(!0);
                                  },
                                  onMouseLeave: function () {
                                    return n(!1);
                                  },
                                  href: "#projects",
                                  children: "View projects",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, V.jsx)("section", {
                  id: "Art",
                  children: (0, V.jsx)("div", {
                    className: "container",
                    children: (0, V.jsxs)("div", {
                      className: "scroll_text",
                      ref: function (e) {
                        r = e;
                      },
                      children: [
                        (0, V.jsx)(Nh.p, {
                          transition: { ease: "easeOut" },
                          children: "Turning Ideas into",
                        }),
                        (0, V.jsx)("p", {
                          children: (0, V.jsx)("span", {
                            children: " Digital Experiences",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        Dh = new Date().getFullYear(),
        zh = function (e) {
          var t = e.setCursorHovered;
          return (0, V.jsx)(V.Fragment, {
            children: (0, V.jsxs)("footer", {
              children: [
                (0, V.jsx)("hr", {}),
                (0, V.jsxs)("div", {
                  className: "footer_container",
                  children: [
                    (0, V.jsxs)("div", {
                      className: "contact_info",
                      children: [
                        (0, V.jsx)("h1", { children: "Contact info- " }),
                        (0, V.jsx)("p", {
                          children:
                            "Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.",
                        }),
                        (0, V.jsxs)("div", {
                          className: "mail",
                          onMouseEnter: function () {
                            return t(!0);
                          },
                          onMouseLeave: function () {
                            return t(!1);
                          },
                          children: [
                            (0, V.jsx)("i", {
                              className: "fas fa-envelope",
                              children: " :",
                            }),
                            (0, V.jsx)("a", {
                              href: "mailto:akshitrana21@gmail.com?subject=Hello Akshit!",
                              children: "akshitrana21@gmail.com",
                            }),
                          ],
                        }),
                        " ",
                      ],
                    }),
                    (0, V.jsxs)("div", {
                      className: "social",
                      children: [
                        (0, V.jsx)("h1", { children: "Follow me on-" }),
                        (0, V.jsxs)("a", {
                          onMouseEnter: function () {
                            return t(!0);
                          },
                          onMouseLeave: function () {
                            return t(!1);
                          },
                          href: "https://www.facebook.com/akshit.rana3",
                          target: "_open",
                          children: [
                            (0, V.jsx)("i", {
                              className: "fab fa-facebook",
                              title: "Facebook",
                            }),
                            "Facebook",
                            " ",
                          ],
                        }),
                        (0, V.jsxs)("a", {
                          onMouseEnter: function () {
                            return t(!0);
                          },
                          onMouseLeave: function () {
                            return t(!1);
                          },
                          href: "https://www.linkedin.com/in/akshit-rana-10",
                          target: "_open",
                          children: [
                            " ",
                            (0, V.jsx)("i", {
                              className: "fab fa-linkedin",
                              title: "Linked in",
                            }),
                            "LinkedIn",
                          ],
                        }),
                        (0, V.jsxs)("a", {
                          onMouseEnter: function () {
                            return t(!0);
                          },
                          onMouseLeave: function () {
                            return t(!1);
                          },
                          href: "https://github.com/Akshit3010",
                          target: "_open",
                          children: [
                            (0, V.jsx)("i", {
                              className: "fab fa-github",
                              title: "GitHub",
                            }),
                            "GitHub",
                          ],
                        }),
                        (0, V.jsxs)("a", {
                          onMouseEnter: function () {
                            return t(!0);
                          },
                          onMouseLeave: function () {
                            return t(!1);
                          },
                          href: "https://www.instagram.com/_akshit._.3010_",
                          target: "_open",
                          children: [
                            (0, V.jsx)("i", {
                              className: "fab fa-instagram ig",
                              title: "Instagram",
                            }),
                            "Instagram",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, V.jsxs)("div", {
                  className: "footer__content",
                  children: [
                    (0, V.jsx)("i", { className: "far fa-copyright" }),
                    " ",
                    Dh,
                    " ",
                    (0, V.jsxs)("span", {
                      children: [
                        (0, V.jsx)(F, {
                          onMouseEnter: function () {
                            return t(!0);
                          },
                          onMouseLeave: function () {
                            return t(!1);
                          },
                          to: "/",
                          onClick: function () {
                            window.scrollTo({ top: 0, behaviour: "smooth" });
                          },
                          children: "Akshit Rana",
                        }),
                        " ",
                        "|",
                        " ",
                      ],
                    }),
                    " ",
                    "All rights reserved.",
                  ],
                }),
              ],
            }),
          });
        },
        Fh = function () {
          var e = o((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1];
          function i() {
            window.scrollY > 500 ? r(!0) : r(!1);
          }
          (0, t.useEffect)(
            function () {
              return (
                document.addEventListener("scroll", i),
                document.documentElement.classList.remove("smooth-scroll"),
                function () {
                  return document.removeEventListener("scroll", i);
                }
              );
            },
            [n]
          );
          return (0, V.jsx)(V.Fragment, {
            children: (0, V.jsx)("div", {
              className: n ? "show" : "scroll-up-btn",
              onClick: function () {
                document.documentElement.classList.add("smooth-scroll"),
                  window.scrollTo({ top: 0, behaviour: "smooth" });
              },
              children: (0, V.jsx)("i", { className: "fas fa-angle-up" }),
            }),
          });
        },
        Ih = function () {
          return (0, V.jsx)(V.Fragment, {
            children: (0, V.jsx)("div", {
              className: "contactBox",
              children: (0, V.jsxs)("a", {
                href: "mailto:akshitrana21@gmail.com?subject=Hello Akshit!",
                children: [
                  (0, V.jsx)("i", { className: "fas fa-envelope" }),
                  (0, V.jsx)("span", { children: "Contact me" }),
                ],
              }),
            }),
          });
        },
        Vh = n.p + "static/media/Mask.5a762c1786ba2665ff3b.jpg",
        Uh = n.p + "static/media/Harry.788d9c8b175cc960ae9e.jpg",
        Bh = n.p + "static/media/Rockstar.e1c6dfcc85fb06e1125e.jpg",
        Hh = {
          hidden: { opacity: 0, y: 400 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
          },
        },
        Wh = {
          hidden: { rotate: 0 },
          visible: {
            rotate: -20,
            x: 80,
            y: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
          },
        },
        Yh = {
          hidden: { rotate: 0 },
          visible: {
            rotate: 20,
            x: -80,
            y: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
          },
        },
        Xh = function () {
          return (0, V.jsx)(V.Fragment, {
            children: (0, V.jsx)("section", {
              id: "bio",
              children: (0, V.jsx)("div", {
                className: "bioContainer",
                children: (0, V.jsxs)(Nh.div, {
                  className: "bio-wrapper",
                  variants: Hh,
                  initial: "hidden",
                  whileInView: "visible",
                  children: [
                    (0, V.jsx)("h2", {
                      children:
                        "I have a passion for creating new designs ,illustrations & user experiences that are seamless and impactful.",
                    }),
                    (0, V.jsx)(Nh.div, {
                      className: "imageBox martin",
                      children: (0, V.jsx)(Nh.img, {
                        variants: Wh,
                        initial: "hidden",
                        whileInView: "visible",
                        src: Uh,
                        alt: "illustration",
                      }),
                    }),
                    (0, V.jsx)("div", {
                      className: "imageBox mask",
                      children: (0, V.jsx)(Nh.img, {
                        src: Vh,
                        alt: "illustration",
                      }),
                    }),
                    (0, V.jsx)("div", {
                      className: "imageBox rock",
                      children: (0, V.jsx)(Nh.img, {
                        variants: Yh,
                        initial: "hidden",
                        whileInView: "visible",
                        src: Bh,
                        alt: "illustration",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        };
      oi.registerPlugin(Zo);
      var qh = function () {
        var e = (0, t.useRef)(null),
          n = (0, t.useRef)(null),
          r = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(function () {
            var t = e.current,
              i = t.querySelector(".title"),
              a = t.querySelector("h1"),
              o = t.querySelectorAll("p"),
              s = r.querySelector("h1"),
              l = r.querySelectorAll("li"),
              u = n.firstChild,
              c = n.lastChild;
            oi.fromTo(
              i,
              0.6,
              { y: 144, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: Jn.easeOut,
                scrollTrigger: { trigger: i, start: "top bottom-=10" },
              }
            ),
              oi.fromTo(
                a,
                0.6,
                { y: 144, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: a, start: "top bottom-=10" },
                }
              ),
              oi.fromTo(
                o,
                0.6,
                { y: 144, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: o, start: "top bottom-=10" },
                },
                0.4
              ),
              oi.fromTo(
                u,
                1,
                { x: 0 },
                {
                  x: 440,
                  ease: Jn.easeIn,
                  scrollTrigger: {
                    trigger: n,
                    start: "top center+=10",
                    scrub: !0,
                  },
                }
              ),
              oi.fromTo(
                c,
                1,
                { x: 44 },
                {
                  x: -544,
                  ease: Jn.easeIn,
                  scrollTrigger: {
                    trigger: n,
                    start: "top center+=10",
                    scrub: !0,
                  },
                }
              ),
              oi.fromTo(
                r,
                1,
                { y: 44, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: r, start: "top bottom-=10" },
                }
              ),
              oi.fromTo(
                s,
                1,
                { y: 44, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: s, start: "top bottom-=20" },
                }
              ),
              oi.fromTo(
                l,
                0.4,
                { y: 44, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: Jn.easeOut,
                  stagger: 0.1,
                  scrollTrigger: { trigger: l, start: "top bottom-=30" },
                }
              );
          }, []),
          (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(Nh.section, {
                id: "About",
                initial: { visibility: "hidden" },
                animate: { visibility: "visible", transition: { delay: 1 } },
                exit: { visibility: "hidden", transition: { delay: 1 } },
                className: "about",
                ref: e,
                children: (0, V.jsxs)("div", {
                  className: "width",
                  children: [
                    (0, V.jsx)("h2", {
                      className: "title",
                      children: "About me",
                    }),
                    (0, V.jsx)("div", {
                      className: "about-content",
                      children: (0, V.jsxs)("div", {
                        className: "about_main",
                        children: [
                          (0, V.jsx)("h1", { children: "Akshit Rana" }),
                          (0, V.jsxs)("div", {
                            className: "about-right",
                            children: [
                              (0, V.jsx)("p", {
                                children:
                                  "A Programmer, Full stack web Developer and Illustrator born, raised and currently living in Himachal Pradesh, India.\xa0I have completed my post-graduation in the field of Computer Science from Himachal Pradesh University, Shimla in 2021.",
                              }),
                              (0, V.jsx)("p", {
                                className: "about-sub",
                                children:
                                  "I am a passionate Full Stack Developer and a JavaScript enthusiast \ud83d\ude4c who loves to create smart and highly polished interfaces for the web \ud83d\udcbb",
                              }),
                              (0, V.jsx)("p", {
                                className: "about-sub",
                                children:
                                  "I have always been curious to understand how applications work, and this curiosity brought me to the tech world. My interests range from technology to design.\xa0",
                              }),
                              (0, V.jsx)("p", {
                                className: "about-sub",
                                children:
                                  "I enjoy designing new stuff and learning new Technologies.\xa0If I'm not on my computer , am travelling capturing moments and playing games.",
                              }),
                            ],
                          }),
                          (0, V.jsx)("br", {}),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, V.jsx)("section", {
                id: "Art",
                style: {
                  height: "44vh",
                  backgroundColor: "transparent",
                  color: "#111",
                },
                children: (0, V.jsx)("div", {
                  className: "container",
                  children: (0, V.jsxs)("div", {
                    className: "scroll_text",
                    ref: function (e) {
                      n = e;
                    },
                    children: [
                      (0, V.jsx)(Nh.p, {
                        transition: { ease: "easeOut" },
                        children: "I Build Things",
                      }),
                      (0, V.jsx)("p", {
                        children: (0, V.jsxs)("span", {
                          style: { WebkitTextStroke: "0.2rem #111" },
                          children: [" ", "For the web"],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, V.jsx)(Xh, {}),
              (0, V.jsx)("main", {
                className: "tools",
                id: "skills",
                children: (0, V.jsxs)("div", {
                  className: "container ",
                  ref: function (e) {
                    r = e;
                  },
                  children: [
                    (0, V.jsx)("div", {
                      className: "heading",
                      children: (0, V.jsx)("h1", { children: "Tools & Techs" }),
                    }),
                    (0, V.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, V.jsxs)("ul", {
                          children: [
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                                alt: "html5",
                                width: "44",
                                height: "44",
                                title: "HTML5",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                                alt: "css3",
                                width: "44",
                                height: "44",
                                title: "CSS3",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                                alt: "javascript",
                                width: "44",
                                height: "44",
                                title: "JavaScript",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
                                alt: "react",
                                width: "44",
                                height: "44",
                                title: "React",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
                                alt: "nodejs",
                                width: "44",
                                height: "44",
                                title: "nodejs",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
                                alt: "express",
                                width: "44",
                                height: "44",
                                title: "Expressjs",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
                                alt: "mongodb",
                                width: "44",
                                height: "44",
                                title: "mongoDB",
                              }),
                            }),
                          ],
                        }),
                        (0, V.jsxs)("ul", {
                          children: [
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                                alt: "typescript",
                                width: "44",
                                height: "44",
                                title: "TypeScript",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
                                alt: "sass",
                                width: "44",
                                height: "44",
                                title: "Sass",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                                alt: "bootstrap",
                                width: "44",
                                height: "44",
                                title: "Bootstrap",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
                                alt: "redux",
                                width: "44",
                                height: "44",
                                title: "Redux",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
                                alt: "postman",
                                width: "44",
                                height: "44",
                                title: "Postman",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
                                alt: "git",
                                width: "44",
                                height: "44",
                                title: "git",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                                alt: "tailwind",
                                width: "44",
                                height: "44",
                                title: "Tailwind CSS",
                              }),
                            }),
                          ],
                        }),
                        (0, V.jsxs)("ul", {
                          children: [
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
                                alt: "xd",
                                width: "44",
                                height: "44",
                                title: "Adobe XD",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
                                alt: "figma",
                                width: "44",
                                height: "44",
                                title: "Figma",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
                                alt: "photoshop",
                                width: "44",
                                height: "44",
                                title: "Photoshop",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
                                alt: "illustrator",
                                width: "44",
                                height: "44",
                                title: "Illustrator",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
                                alt: "invision",
                                width: "44",
                                height: "44",
                                title: "Invision",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
                                alt: "jest",
                                width: "44",
                                height: "44",
                                title: "Jest",
                              }),
                            }),
                            (0, V.jsx)("li", {
                              children: (0, V.jsx)("img", {
                                src: "https://iconape.com/wp-content/files/gj/370774/svg/370774.svg",
                                alt: "cypress",
                                width: "44",
                                height: "44",
                                title: "cypress",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      oi.registerPlugin(Zo);
      var $h = function () {
          var e = (0, t.useRef)(null);
          return (
            (0, t.useEffect)(function () {
              var t = e.current,
                n = t.querySelector(".container"),
                r = t.querySelector(".left"),
                i = t.querySelector(".right");
              oi.fromTo(
                n,
                0.6,
                { y: -44, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: n, start: "top bottom-=10" },
                }
              ),
                oi.fromTo(
                  r,
                  0.6,
                  { x: -44, opacity: 0 },
                  {
                    x: 0,
                    opacity: 1,
                    ease: Jn.easeOut,
                    scrollTrigger: { trigger: r, start: "top bottom-=10" },
                  },
                  1.2
                ),
                oi.fromTo(
                  i,
                  0.6,
                  { x: 44, opacity: 0 },
                  {
                    x: 0,
                    opacity: 1,
                    ease: Jn.easeOut,
                    scrollTrigger: { trigger: i, start: "top bottom-=10" },
                  },
                  1.4
                );
            }, []),
            (0, V.jsx)(V.Fragment, {
              children: (0, V.jsx)(Nh.section, {
                initial: { visibility: "hidden" },
                animate: { visibility: "visible", transition: { delay: 1 } },
                exit: { visibility: "hidden", transition: { delay: 1 } },
                className: "contactPage",
                ref: e,
                id: "contact",
                children: (0, V.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, V.jsx)("div", {
                      className: "left",
                      children: (0, V.jsx)("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27036.476827873732!2d76.3649795936774!3d32.108186195445576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4c317292f6d5%3A0x7986b64ab27a0248!2sNagrota%20Bagwan%2C%20Himachal%20Pradesh%20176047!5e0!3m2!1sen!2sin!4v1623759904838!5m2!1sen!2sin",
                        width: "600",
                        height: "420",
                        style: { border: 0 },
                        loading: "lazy",
                        title: "Address",
                      }),
                    }),
                    (0, V.jsxs)("div", {
                      className: "right",
                      children: [
                        (0, V.jsx)("h1", { children: "Get in touch-" }),
                        (0, V.jsx)("div", {
                          className: "info",
                          children:
                            "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas and opportunities.",
                        }),
                        (0, V.jsxs)("p", {
                          children: [
                            (0, V.jsx)("i", {
                              className: "fas fa-map-marker-alt address",
                            }),
                            "\xa0\xa0\xa0 Nagrota Bagwan Distt. Kangra Himachal Pradesh ,India",
                          ],
                        }),
                        (0, V.jsxs)("p", {
                          children: [
                            (0, V.jsx)("i", {
                              className: "fas fa-envelope-open gmail",
                            }),
                            (0, V.jsx)("a", {
                              href: "mailto:akshitrana21@gmail.com?subject=Hello Akshit!",
                              className: "mail",
                              children: "\xa0\xa0\xa0akshitrana21@gmail.com",
                            }),
                          ],
                        }),
                        (0, V.jsxs)("div", {
                          className: "social",
                          children: [
                            (0, V.jsx)("a", {
                              href: "https://www.facebook.com/akshit.rana3",
                              target: "_open",
                              className: "fb",
                              children: (0, V.jsx)("i", {
                                className: "fab fa-facebook",
                                title: "Facebook",
                              }),
                            }),
                            (0, V.jsx)("a", {
                              href: "https://www.linkedin.com/in/akshit-rana-10",
                              target: "_open",
                              className: "linkedIn",
                              children: (0, V.jsx)("i", {
                                className: "fab fa-linkedin",
                                title: "Linked in",
                              }),
                            }),
                            (0, V.jsx)("a", {
                              href: "https://www.instagram.com/_akshit._.3010_",
                              target: "_open",
                              children: (0, V.jsx)("i", {
                                className: "fab fa-instagram ig",
                                title: "Instagram",
                              }),
                            }),
                            (0, V.jsx)("a", {
                              href: "https://github.com/Akshit3010",
                              className: "git",
                              target: "_open",
                              children: (0, V.jsx)("i", {
                                className: "fab fa-github",
                                title: "GitHub",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Qh = [
          {
            title: "Rodan+Fields Website Clone",
            id: 5,
            src: "./Ux Design/Rodan.png",
            href: "https://rodanfields.netlify.app/",
            desc: "A web application to buy skincare and beauty products.",
            github: "https://github.com/Akshit3010/Rodanandfields",
            tech: "HTML, CSS, javaScript",
          },
          {
            title: "Lyst Website Clone",
            id: 6,
            src: "./Ux Design/Lyst.jpg",
            href: "https://lyst-clone.netlify.app/",
            desc: "A web application to buy Men and Women's Fashion Accessories.",
            github: "https://github.com/Akshit3010/Lyst-clone",
            tech: "React, Redux, Tailwind",
          },
          {
            title: "Cultfit Website Clone",
            id: 7,
            src: "./Ux Design/Cultfit.jpg",
            href: "https://charming-kleicha-f7531f.netlify.app/",
            desc: "Fitness Website",
            github: "https://github.com/Akshit3010/Cult-Fit-clone",
            tech: "HTML, CSS, javaScript",
          },
          {
            title: "Youtube Clone",
            id: 8,
            src: "./Ux Design/Youtube.jpg",
            href: "https://youtube-clone-akshit.netlify.app/",
            desc: "Inspired from Youtube website",
            github: "https://github.com/Akshit3010/Youtube-Clone",
            tech: "HTML, CSS, javaScript",
          },
          {
            title: "Github User Finder",
            id: 9,
            src: "./Ux Design/Github.png",
            href: "https://githubuserfinder2.netlify.app/",
            desc: "A website for getting information about any Github User.",
            github: "https://github.com/Akshit3010/GithubUser-Finder",
            tech: "HTML, CSS, javaScript",
          },
          {
            title: "Movie Search App",
            id: 10,
            src: "./Ux Design/Movieapp.jpg",
            href: "https://hotstar3app.netlify.app/",
            desc: "A movie application to get information about any movie or web-series.",
            github: "https://github.com/Akshit3010/Movie-Search-App",
            tech: "HTML, CSS, javaScript",
          },
          {
            title: "CIty Weather App",
            id: 11,
            src: "./Ux Design/WeatherApp.jpg",
            href: "https://cityweatherapp2.netlify.app/",
            desc: "A website to check weather of any city.",
            github: "https://github.com/Akshit3010/CityWeatherApp",
            tech: "HTML, CSS, javaScript",
          },
          {
            title: "Discussion Portal",
            id: 1,
            src: "./Ux Design/Discuss.jpg",
            href: "https://akshit3010.github.io/DiscussionPortal",
            desc: "A website for asking questions and giving answers in response.",
            github: "https://github.com/Akshit3010/DiscussionPortal",
            tech: "HTML, CSS, javaScript",
          },
          {
            title: "Pomodoro Clock",
            id: 2,
            src: "./Ux Design/pomodoro.png",
            href: "https://akshit3010.github.io/PomodoroClock",
            desc: "A Pomodoro timer to break work into intervals.",
            github: "https://github.com/Akshit3010/PomodoroClock",
            tech: "HTML, CSS, javaScript",
          },
        ],
        Gh = n.p + "static/media/Rotate.f91f0e693cbf96374b0a.jpg";
      function Kh() {
        var e = o((0, t.useState)({ x: null, y: null }), 2),
          n = e[0],
          r = e[1];
        return (
          (0, t.useEffect)(function () {
            function e(e) {
              r({ x: e.pageX, y: e.pageY });
            }
            return (
              window.addEventListener("mousemove", e),
              function () {
                return window.removeEventListener("mousemove", e);
              }
            );
          }, []),
          n
        );
      }
      var Zh = function (e) {
          var n = e.title,
            r = e.src,
            i = e.id,
            a = e.href,
            s = e.tech,
            l = e.desc,
            u = e.github,
            c = Kh(),
            f = c.x,
            d = c.y,
            p = o((0, t.useState)(!1), 2),
            h = p[0],
            v = p[1];
          return (0, V.jsx)(V.Fragment, {
            children: (0, V.jsxs)(
              Nh.li,
              {
                href: a,
                target: "blank",
                className: "link",
                onHoverStart: function () {
                  return v(!0);
                },
                onHoverEnd: function () {
                  return v(!1);
                },
                children: [
                  (0, V.jsx)(Nh.div, {
                    initial: { opacity: 0 },
                    className: "floating-image",
                    animate: {
                      opacity: h ? 1 : 0,
                      display: h ? "block" : "none",
                      x: f - 200,
                      y: d - 100,
                    },
                    transition: { ease: "linear" },
                    children: (0, V.jsx)("img", { src: r, alt: n }),
                  }),
                  (0, V.jsxs)("div", {
                    className: "header",
                    children: [
                      (0, V.jsx)("div", { className: "caption", children: n }),
                      (0, V.jsx)("i", {
                        className: "fas fa-external-link-square-alt",
                      }),
                    ],
                  }),
                  (0, V.jsxs)("div", {
                    className: "tags",
                    children: [
                      (0, V.jsx)("p", { className: "desc", children: l }),
                      (0, V.jsxs)("span", {
                        children: [
                          " ",
                          (0, V.jsx)("span", { children: "Tech Stack -" }),
                          " ",
                          s,
                        ],
                      }),
                    ],
                  }),
                  (0, V.jsxs)("div", {
                    className: "work_btns",
                    children: [
                      (0, V.jsxs)("a", {
                        href: u,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          (0, V.jsx)("i", {
                            className: "fab fa-github",
                            title: "GitHub",
                          }),
                          "Github",
                        ],
                      }),
                      (0, V.jsxs)("a", {
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          (0, V.jsx)("i", { className: "fas fa-link" }),
                          "Live Demo",
                        ],
                      }),
                    ],
                  }),
                ],
              },
              i
            ),
          });
        },
        Jh = [
          { id: 1, src: "./Illustration/XXX.jpg" },
          { id: 2, src: "./Illustration/Messi.jpg" },
          { id: 3, src: "./Illustration/Model.jpg" },
          { id: 4, src: "./Illustration/Juice.jpg" },
          { id: 5, src: "./Illustration/KGF.jpg" },
          { id: 6, src: "./Illustration/Practice.jpg" },
          { id: 7, src: "./Illustration/Nawaz.jpg" },
          { id: 8, src: "./Illustration/Shiv.jpg" },
          { id: 9, src: "./Illustration/Martin.jpg" },
          { id: 11, src: "./Illustration/Neymar.jpg" },
          { id: 12, src: "./Illustration/Johnny.jpg" },
          { id: 13, src: "./Illustration/Zakir.jpg" },
          { id: 14, src: "./Illustration/Zayn.jpg" },
          { id: 15, src: "./Illustration/Ranvir.jpg" },
          { id: 16, src: "./Illustration/Pavilion.jpg" },
          { id: 17, src: "./Illustration/Sharaddha.jpg" },
        ];
      oi.registerPlugin(Zo);
      var ev = function () {
        var e = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(function () {
            var t = e.querySelector("h1"),
              n = e.querySelectorAll("img");
            oi.fromTo(
              t,
              0.6,
              { y: 144, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: Jn.easeOut,
                scrollTrigger: { trigger: t, start: "top bottom-=10" },
              }
            ),
              oi.fromTo(
                n,
                0.2,
                { y: 144, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.2,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: t, start: "top bottom-=10" },
                }
              );
          }, []),
          (0, V.jsx)(V.Fragment, {
            children: (0, V.jsx)("div", {
              id: "illustration",
              children: (0, V.jsxs)("div", {
                className: "container",
                ref: function (t) {
                  e = t;
                },
                children: [
                  (0, V.jsx)("div", {
                    className: "heading",
                    style: { overflow: "hidden", paddingTop: ".8rem" },
                    children: (0, V.jsx)("h1", { children: "Illustrations" }),
                  }),
                  (0, V.jsx)("div", {
                    className: "illustrationWrapper",
                    children: Jh.map(function (e) {
                      var t = e.id,
                        n = e.src;
                      return (0,
                      V.jsx)("div", { className: "imageBox img".concat(t), children: (0, V.jsx)("img", { src: n, alt: "illustration" }) }, t);
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      oi.registerPlugin(Zo);
      var tv = function () {
        var e = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(function () {
            var t = e.current,
              n = t.querySelector(".title"),
              r = t.querySelector("img"),
              i = t.querySelector(".heading");
            oi.fromTo(
              n,
              0.6,
              { y: 144, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: Jn.easeOut,
                scrollTrigger: { trigger: n, start: "top bottom-=10" },
              }
            ),
              oi.fromTo(
                r,
                0.6,
                { opacity: 0 },
                {
                  opacity: 1,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: n, start: "top bottom-=10" },
                }
              ),
              oi.fromTo(
                i,
                0.6,
                { y: 144, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: Jn.easeOut,
                  scrollTrigger: { trigger: i, start: "top bottom-=10" },
                }
              );
          }, []),
          (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(Nh.section, {
                initial: { visibility: "hidden" },
                animate: { visibility: "visible", transition: { delay: 1 } },
                exit: { visibility: "hidden", transition: { delay: 1 } },
                id: "projects",
                children: (0, V.jsx)("div", {
                  className: "container",
                  children: (0, V.jsxs)("div", {
                    className: "work",
                    ref: e,
                    children: [
                      (0, V.jsx)("div", {
                        style: { overflow: "hidden" },
                        children: (0, V.jsx)("h1", {
                          className: "title",
                          children: "My Work",
                        }),
                      }),
                      (0, V.jsxs)("div", {
                        className: "main",
                        children: [
                          (0, V.jsx)("div", {
                            style: { overflow: "hidden", width: "100%" },
                            children: (0, V.jsx)("h2", {
                              className: "heading",
                              children:
                                "A collection of my designs and coding. These are a mix of illustrations, websites and side projects.",
                            }),
                          }),
                          (0, V.jsx)("div", {
                            className: "rotate",
                            children: (0, V.jsx)("img", {
                              src: Gh,
                              alt: "Creativity-Design-Illustrations",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, V.jsx)("main", {
                id: "webDesign",
                children: (0, V.jsx)("div", {
                  className: "projects",
                  children: (0, V.jsx)("div", {
                    className: "wrapper",
                    children: Qh.map(function (e) {
                      var t = e.id,
                        n = e.src,
                        r = e.title,
                        i = e.github,
                        a = e.desc,
                        o = e.href,
                        s = e.tech;
                      return (0,
                      V.jsx)(Zh, { src: n, href: o, title: r, tech: s, github: i, desc: a }, t);
                    }),
                  }),
                }),
              }),
              (0, V.jsx)(ev, {}),
            ],
          })
        );
      };
      function nv(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nv(Object(n), !0).forEach(function (t) {
                jl(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nv(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var iv = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] },
        av = function () {
          var e = o((0, t.useState)(!0), 2),
            n = e[0],
            r = e[1];
          return (
            (0, t.useEffect)(
              function () {
                n
                  ? document.body.classList.add("no-scroll")
                  : (document.body.classList.remove("no-scroll"), Zo.refresh());
              },
              [n]
            ),
            (0, V.jsxs)(V.Fragment, {
              children: [
                (0, V.jsx)(Nh.div, {
                  onAnimationComplete: function () {
                    r(!1);
                  },
                  initial: { height: 0 },
                  animate: {
                    height: [0, window.innerHeight, 0],
                    bottom: [window.innerHeight, 0, 0],
                  },
                  transition: rv(
                    rv({}, iv),
                    {},
                    { duration: 2, times: [0, 0.5, 1] }
                  ),
                  className: "left_panel_background",
                }),
                (0, V.jsx)(Nh.div, {
                  initial: { height: 0 },
                  animate: {
                    height: [0, window.innerHeight, 0],
                    bottom: [0, 0, window.innerHeight],
                  },
                  transition: rv(
                    rv({}, iv),
                    {},
                    { duration: 2, times: [0, 0.5, 1] }
                  ),
                  className: "right_panel_background",
                }),
              ],
            })
          );
        },
        ov = function () {
          var e = o((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1],
            i = Kh(),
            a = i.x,
            s = i.y;
          return (
            (0, t.useEffect)(function () {
              var e = document.querySelectorAll(".nav-link");
              window.innerWidth > 990 &&
                window.addEventListener("scroll", function () {
                  var t = window.pageYOffset;
                  t < 1400 &&
                    (e[0].classList.add("active"),
                    e[1].classList.remove("active"),
                    e[2].classList.remove("active"),
                    e[3].classList.remove("active"),
                    e[4].classList.remove("active")),
                    t > 1400 &&
                      t < 3400 &&
                      (e[0].classList.remove("active"),
                      e[1].classList.add("active"),
                      e[2].classList.remove("active"),
                      e[3].classList.remove("active"),
                      e[4].classList.remove("active")),
                    t > 3400 &&
                      t < 4240 &&
                      (e[0].classList.remove("active"),
                      e[1].classList.remove("active"),
                      e[2].classList.add("active"),
                      e[3].classList.remove("active"),
                      e[4].classList.remove("active")),
                    t > 4240 &&
                      t < 6300 &&
                      (e[0].classList.remove("active"),
                      e[1].classList.remove("active"),
                      e[2].classList.remove("active"),
                      e[3].classList.add("active"),
                      e[4].classList.remove("active")),
                    t > 6300 &&
                      t < 6856 &&
                      (e[0].classList.remove("active"),
                      e[1].classList.remove("active"),
                      e[2].classList.remove("active"),
                      e[3].classList.remove("active"),
                      e[4].classList.add("active"));
                });
            }, []),
            (0, V.jsxs)(V.Fragment, {
              children: [
                (0, V.jsx)("div", {
                  style: { overflow: "hidden" },
                  children: (0, V.jsx)(Nh.div, {
                    animate: {
                      x: a - 16,
                      y: s - 16,
                      scale: n ? 2.4 : 1,
                      opacity: n ? 0.4 : 0,
                    },
                    transition: { duration: 0.1, ease: "linear" },
                    className: "cursor",
                  }),
                }),
                (0, V.jsx)(av, {}),
                (0, V.jsx)(U, { setCursorHovered: r }),
                (0, V.jsx)(Fh, {}),
                (0, V.jsx)(Ih, {}),
                (0, V.jsx)(Rh, { setCursorHovered: r }),
                (0, V.jsx)(qh, {}),
                (0, V.jsx)(tv, {}),
                (0, V.jsx)($h, { setCursorHovered: r }),
                (0, V.jsx)(zh, { setCursorHovered: r }),
              ],
            })
          );
        };
      var sv = function () {
          return (0, V.jsx)("div", { children: (0, V.jsx)(ov, {}) });
        },
        lv = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  i = t.getFCP,
                  a = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), i(e), a(e), o(e);
              });
        };
      r
        .createRoot(document.getElementById("root"))
        .render(
          (0, V.jsx)(t.StrictMode, {
            children: (0, V.jsx)(D, { children: (0, V.jsx)(sv, {}) }),
          })
        ),
        lv();
    })();
})();
//# sourceMappingURL=main.85e74ec6.js.map
